// ============================================================================
// Handling + race configuration. Everything that shapes how the cars drive lives
// here, so tuning never means digging through the physics code.
// ============================================================================
export const TUNE = {
  hz: 120,                              // fixed physics rate; rendering interpolates between steps
  tyre: {
    // lateral force curve: force = cap * sin(C * atan(B * slip)). Fronts peak near 11° and fall away ~25% when over-driven
    // (that is the understeer you feel); rears are stiffer and hold their force deep into a slide, which keeps slides catchable.
    frontB: 13.5, frontC: 1.45,
    rearB: 9.5, rearC: 1.35,
    driveShare: .45, brakeShare: .38,    // braking uses only part of the grip budget too, so you can brake and turn                    // how much of the drive force competes with cornering in the tyre's grip budget
    loadSens: .3,                       // how much an axle loses when cornering load shifts to the outside tyres
    wornGrip: .72,                      // grip multiplier of a fully worn tyre (fresh = 1)
    wear: { base: .0011, slip: .011, spin: .008, lock: .03, offroad: .002 },   // per second, scaled by what the tyre is doing
    wetLossSlick: .27, wetLossWet: .07, dryLossWet: .07,
  },
  steer: { lock: .76, speedK: .038, rate: 6.6, rateSpeedK: .02, returnRate: 7.5, maxLock: .62 },   // lock shrinks as 1/(1+speedK*v); rates in rad/s
  // Stability assist. `counter` adds automatic counter-steer in a slide, `power` eases the throttle as the slide angle grows.
  assist: { off: 0, low: .4, medium: .7, full: 1 },
  surface: { kerbGrip: .95, grassDrag: .15, roadDrag: .03, airDrag: .25 },
  fuel: { tankKg: 45, fullThrottleSeconds: 330, idle: .06 },   // a full tank lasts ~5.5 minutes flat out
  pit: { limit: 16.7, tyres: 2.6, fuelFull: 4.0, repairFull: 6.0 },   // limit in m/s (60 km/h); service times in seconds
  damage: { threshold: 3.5, scale: 34, enginePowerLoss: .4, steerPull: .05 },
  // ---- easy-to-drive set-up ----
  gripScale: 1.48,                       // overall tyre grip. Raise for a more planted car, lower for a looser one
  rearBias: 1.12,                       // rear grip relative to front. Higher = safer, more understeer
  powerSlide: .85,                      // how much full throttle loosens the rear (0 = never, 1 = a lot)
  slideAid: .75,                        // grip aid strength (1/s): how fast sideways slip is bled away at Assist Full
  assistYawDamp: .6,
  // Drift: hold full steering lock with the throttle on and the rear lets go on purpose. rearCut = how much rear grip is released, build/decay = how fast it comes and goes (1/s).
  slowTurn: .28,                         // extra front bite while the car is slowing (lifting or braking): the nose tucks in
  drift: { rearCut: .34, build: 3.2, decay: 5, minSpeed: 10 },
  enginePower: 1.22,                    // all engines: more torque than the rear tyres can take in the low gears
  shock: { minHit: 7, perMs: .08, max: 1.6 },   // a hard hit switches the driving aids off for up to this many seconds
  // Turn-in look: the body swings into the corner as soon as you steer, a moment before the car's path bends.
  // It is visual only, so it costs no grip. steer/yaw = how much each adds (rad per rad), max = limit (rad), rate = how fast it swings in.
  visualLead: { steer: .78, yaw: .16, max: .33, rate: 13, fullSpeed: 12 },                   // extra rotation damping at Assist Full
  wall: { bounce: .02, spin: .28, friction: .2, yawKeep: .94 },   // barrier contact: no bounce, little spin, the car settles and slides along   // barrier contact: restitution, share of impulse that may rotate the car, wall friction
  yawDamp: .45, yawDampSpeed: .01,       // yaw damping (1/s), rising with speed for high-speed stability
  // Online sync. hz = state messages per second from each player. The free Supabase plan allows 100 messages/s for the
  // whole project, so 24 keeps a duel safely under it; on a paid plan 30-40 is fine. minBuffer/maxBuffer bound how far in
  // the past the rival is drawn (ms): lower = more immediate, higher = smoother on a poor connection.
  net: { hz: 24, minBuffer: 45, maxBuffer: 300, intervalK: 1.2, jitterK: 2.6 },
  // Component damage. Where a hit lands decides what breaks: nose = engine, tail = gearbox, corners and sides = that wheel.
  // A wrecked car always keeps a little: the engine never drops below `limp` power and wheels never come off, so you can crawl to the pits or a repair kit.
  parts: { limp: .26, enginePower: .8, engineDead: 9, gearboxTop: .45, wheelGrip: .65, wheelPull: .09, flatAt: .7, flatDrag: .22, towSeconds: 12 },
  // Pace modes (keys 1 2 3): how hard the car is being driven. Save trades speed for fuel and tyres, Push does the opposite.
  pace: [{ name: 'Save', pow: .93, fuel: .72, wear: .78 }, { name: 'Race', pow: 1, fuel: 1, wear: 1 }, { name: 'Push', pow: 1.055, fuel: 1.34, wear: 1.42 }],
  reset: { penalty: 2 },                // seconds held stationary after pressing reset
  // garage tuning: effect of one click (each setting runs from -2 to +2)
  setup: { gearAcc: .04, gearTop: .035, aeroDown: .35, aeroTop: .02, biasStep: .05, rollStep: .03, compound: { soft: [1.04, 1.6], medium: [1, 1], hard: [.97, .6] } },
  toy: { w: 1.08, h: 1.16, l: .88, wheel: 1.12 },   // visual proportions only: short, tall, big-wheeled miniature cars
};

// top = top speed (m/s) · acc = launch acceleration (m/s²) · grip = tyre μ · rear = rear-axle grip bias (<1 = tail-happy)
// loose = how much drive torque steals rear side-grip · off = grip multiplier on grass · drive = fwd / rwd / awd
// brake = peak braking in g · aero = downforce coefficient · rollF = share of roll stiffness on the front axle
// (higher = more understeer at the limit) · yawK = yaw inertia factor (higher = lazier to rotate, slower to recover)
export const CARS = [
  { id: 'Ford', snd: '01_Turbo_Inline4', idle: 900, red: 7200, turbo: 1, pops: 'pop', cyl: 4,      name: 'Scarab RS',  ar: 'الجعران',  cls: 'Compact · FWD', price: 0,    color: 0x1f6feb, top: 50, acc: 8.6,  grip: 1.22, rear: 1.04, loose: .3,  off: .62, mass: 1180, drive: 'fwd', brake: 1.25, aero: .5,  rollF: .60, yawK: 1.12, blurb: 'Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car.' },
  { id: 'Sterrato', snd: '08_Race_V10', idle: 1000, red: 8500, turbo: 0, pops: 'crackle', cyl: 10,  name: 'Sandstorm',  ar: 'العاصفة',  cls: 'Rally · AWD',   price: 0,    color: 0xe8a21c, top: 53, acc: 9.4,  grip: 1.18, rear: 1.0,  loose: .5,  off: .8,  mass: 1350, drive: 'awd', brake: 1.25, aero: .7,  rollF: .54, yawK: 1.25, blurb: 'All-wheel drive. Huge traction out of corners and barely notices the grass.' },
  { id: 'Mercedes', snd: '04_Crossplane_V8', idle: 750, red: 6800, turbo: 0, pops: 'pop', cyl: 8,  name: 'Pharaoh',    ar: 'الفرعون',  cls: 'Touring · RWD', price: 1500, color: 0x1c1f26, top: 56, acc: 9.8,  grip: 1.15, rear: .96,  loose: .8,  off: .55, mass: 1650, drive: 'rwd', brake: 1.2,  aero: .6,  rollF: .50, yawK: 1.4,  blurb: 'Heavy rear-drive saloon. Long braking, and the tail steps out under power.' },
  { id: 'LandRover', snd: '04_Crossplane_V8', idle: 700, red: 6000, turbo: 0, pops: '', cyl: 8, name: 'Sphinx 4x4', ar: 'أبو الهول', cls: 'Truck · AWD',   price: 2500, color: 0x2f7d4f, top: 49, acc: 9.0,  grip: 1.12, rear: 1.03, loose: .4,  off: .9,  mass: 2100, drive: 'awd', brake: 1.05, aero: .3,  rollF: .57, yawK: 1.6,  blurb: 'Two tonnes. Slow to turn, slow to stop, wins every shoving match.' },
  { id: 'Artura', snd: '07_TwinTurbo_V6', idle: 950, red: 8200, turbo: 1, pops: 'pop', cyl: 6,    name: 'Cobra',      ar: 'الكوبرا',  cls: 'GT · RWD',      price: 4000, color: 0xff6a13, top: 60, acc: 11.0, grip: 1.32, rear: .99,  loose: .6,  off: .5,  mass: 1400, drive: 'rwd', brake: 1.4,  aero: 1.2, rollF: .52, yawK: 1.1,  blurb: 'Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot.' },
  { id: 'Ferrari', snd: '05_FlatPlane_V8', idle: 1000, red: 8800, turbo: 0, pops: 'crackle', cyl: 8,   name: 'Ra Rosso',   ar: 'رع',       cls: 'GT · RWD',      price: 6500, color: 0xd81e2c, top: 64, acc: 11.8, grip: 1.36, rear: .97,  loose: .7,  off: .5,  mass: 1450, drive: 'rwd', brake: 1.45, aero: 1.4, rollF: .50, yawK: 1.1,  blurb: 'V8 GT. Faster everywhere than the Cobra and less forgiving about it.' },
  { id: 'Zenvo', snd: '06_Race_V12', idle: 900, red: 7800, turbo: 1, pops: 'crackle', cyl: 8,     name: 'Horus GT',   ar: 'حورس',     cls: 'Hyper · RWD',   price: 9500, color: 0x1436a8, top: 69, acc: 12.8, grip: 1.42, rear: .98,  loose: .75, off: .45, mass: 1500, drive: 'rwd', brake: 1.5,  aero: 2.3, rollF: .50, yawK: 1.05, blurb: 'Downforce car: the faster you go, the harder it grips. Brutal on cold nerves.' },
  { id: 'Mustang', snd: '04_Crossplane_V8', idle: 750, red: 7000, turbo: 0, pops: 'crackle',  cyl: 8,  name: 'Khamsin',    ar: 'الخماسين', cls: 'Muscle · RWD',  price: 2000, color: 0xf2c200, top: 58, acc: 10.6, grip: 1.14, rear: .94,  loose: .9,  off: .5,  mass: 1700, drive: 'rwd', brake: 1.15, aero: .5,  rollF: .48, yawK: 1.35, blurb: 'Big V8 muscle. Loud, fast in a straight line, and happy to go sideways.' },
  { id: 'M8', snd: '03_Race_Inline6', idle: 800, red: 7000, turbo: 1, pops: 'pop',       cyl: 8,  name: 'Anubis M',   ar: 'أنوبيس',   cls: 'Touring · RWD', price: 3500, color: 0x0f5c4a, top: 62, acc: 11.0, grip: 1.28, rear: .97,  loose: .7,  off: .5,  mass: 1750, drive: 'rwd', brake: 1.35, aero: .9,  rollF: .52, yawK: 1.3,  blurb: 'Grand tourer. Heavy but composed, with long legs on the straights.' },
  { id: 'Urus', snd: '04_Crossplane_V8', idle: 800, red: 6800, turbo: 1, pops: 'pop',     cyl: 8,  name: 'Bastet SUV', ar: 'باستيت',   cls: 'Super SUV · AWD', price: 4500, color: 0xf3f4f6, top: 60, acc: 11.2, grip: 1.2,  rear: 1.02, loose: .45, off: .82, mass: 2200, drive: 'awd', brake: 1.2,  aero: .6,  rollF: .56, yawK: 1.55, blurb: 'A fast SUV. Launches hard on four driven wheels, leans on its brakes.' },
  { id: 'Porsche', snd: '02_Boxer_Flat4', idle: 850, red: 7200, turbo: 1, pops: 'pop',  cyl: 8,  name: 'Nefertiti S', ar: 'نفرتيتي',  cls: 'Sports saloon · AWD', price: 5000, color: 0x7b3fe4, top: 61, acc: 11.4, grip: 1.3,  rear: 1.0,  loose: .5,  off: .6,  mass: 1900, drive: 'awd', brake: 1.35, aero: 1.0, rollF: .53, yawK: 1.35, blurb: 'All-wheel-drive saloon. Stable, quick, and easy to trust in the rain.' },
  { id: 'AMG', snd: '04_Crossplane_V8', idle: 800, red: 7200, turbo: 1, pops: 'crackle',      cyl: 8,  name: 'Osiris GT',  ar: 'أوزيريس',  cls: 'GT · RWD',      price: 6000, color: 0x2fb457, top: 63, acc: 11.6, grip: 1.33, rear: .97,  loose: .7,  off: .5,  mass: 1600, drive: 'rwd', brake: 1.4,  aero: 1.3, rollF: .5,  yawK: 1.15, blurb: 'Front-engine GT with a long bonnet. Balanced, and rewards trail braking.' },
  { id: 'GTR', snd: '09_Rally_Inline5', idle: 900, red: 7400, turbo: 1, pops: 'pop',      cyl: 6,  name: 'Sobek R',    ar: 'سوبك',     cls: 'GT · AWD',      price: 7000, color: 0x19a7ce, top: 64, acc: 12.4, grip: 1.34, rear: 1.0,  loose: .5,  off: .6,  mass: 1750, drive: 'awd', brake: 1.4,  aero: 1.3, rollF: .54, yawK: 1.25, blurb: 'Twin-turbo all-wheel drive. Monstrous traction out of slow corners.' },
  { id: 'P1GTR', snd: '05_FlatPlane_V8', idle: 1100, red: 9000, turbo: 1, pops: 'crackle',    cyl: 8,  name: 'Seth GTR',   ar: 'ست',       cls: 'Track hyper · RWD', price: 12000, color: 0xff6a13, top: 70, acc: 13.2, grip: 1.48, rear: .99,  loose: .7,  off: .42, mass: 1400, drive: 'rwd', brake: 1.55, aero: 2.9, rollF: .5,  yawK: 1.0,  blurb: 'Track-only hypercar. Enormous downforce; the fastest car in the game.' },
];
