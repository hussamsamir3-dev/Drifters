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
  gripScale: 1.282,                     // with this, each car's `grip` is its real cornering grip in g on dry tarmac                       // overall tyre grip. Raise for a more planted car, lower for a looser one
  rearBias: 1.12,                       // rear grip relative to front. Higher = safer, more understeer
  powerSlide: .85,                      // how much full throttle loosens the rear (0 = never, 1 = a lot)
  slideAid: .75,                        // grip aid strength (1/s): how fast sideways slip is bled away at Assist Full
  assistYawDamp: .6,
  // Drift: hold full steering lock with the throttle on and the rear lets go on purpose. rearCut = how much rear grip is released, build/decay = how fast it comes and goes (1/s).
  slowTurn: .15,                         // extra front bite while the car is slowing (lifting or braking): the nose tucks in
  drift: { rearCut: .18, build: 3.2, decay: 5, minSpeed: 10 },
  enginePower: 1.22,                    // all engines: more torque than the rear tyres can take in the low gears
  shock: { minHit: 7, perMs: .08, max: 1.6 },   // a hard hit switches the driving aids off for up to this many seconds
  // Turn-in look: the body swings into the corner as soon as you steer, a moment before the car's path bends.
  // It is visual only, so it costs no grip. steer/yaw = how much each adds (rad per rad), max = limit (rad), rate = how fast it swings in.
  visualLead: { steer: .16, yaw: .05, max: .07, rate: 10, fullSpeed: 12 },                   // extra rotation damping at Assist Full
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
  toy: { w: 1.4, h: 1.4, l: 1.4, wheel: 1.4 },
  // Stylised proportions by body type (multiplies the scale above): shorter, taller, wider, bigger wheels.
  body: { k: { w: 1, h: 1, l: 1, wheel: 1 }, toy: { w: 1.1, h: 1.08, l: .93, wheel: 1.22 }, coupe: { w: 1.12, h: 1.2, l: .88, wheel: 1.24 }, sedan: { w: 1.13, h: 1.26, l: .85, wheel: 1.27 }, hatch: { w: 1.14, h: 1.3, l: .84, wheel: 1.3 }, suv: { w: 1.1, h: 1.18, l: .88, wheel: 1.24 }, '4x4': { w: 1.1, h: 1.16, l: .9, wheel: 1.22 }, truck: { w: 1.04, h: 1.02, l: .9, wheel: 1.08 }, bus: { w: 1.06, h: 1.0, l: .92, wheel: 1.12 }, f1: { w: 1.08, h: 1.12, l: .9, wheel: 1.1 } },   // how large cars are drawn and how much room they take on track; their mass, wheelbase and forces stay real   // visual proportions only: short, tall, big-wheeled miniature cars
};

// top = top speed (m/s) · acc = launch acceleration (m/s²) · grip = tyre μ · rear = rear-axle grip bias (<1 = tail-happy)
// loose = how much drive torque steals rear side-grip · off = grip multiplier on grass · drive = fwd / rwd / awd
// brake = peak braking in g · aero = downforce coefficient · rollF = share of roll stiffness on the front axle
// (higher = more understeer at the limit) · yawK = yaw inertia factor (higher = lazier to rotate, slower to recover)
export const CARS = [
  // Six cars (models: "Asset of low-poly cars" by Qualix_studio, CC BY 4.0). Figures are in game units but keep real-world order and ratios:
  // top = top speed m/s, acc = drive force per kg, mass kg, grip = tyre grip, rear = rear/front balance (<1 = tail-happy),
  // loose = how much power breaks rear traction, off = grip off-road, aero = downforce, rollF = front share of roll stiffness, yawK = agility.
  { id: 'Mazda', body: 'sedan', snd: '01_Turbo_Inline4', idle: 850, red: 6800, turbo: 1, pops: 'pop', cyl: 4, name: 'Thoth', ar: 'تحوت', cls: 'Sports saloon · FWD', price: 0, color: 0xaab0b8,
    top: 51, acc: 8.7, grip: 0.92, rear: 1.05, loose: .3, off: .58, mass: 1520, drive: 'fwd', brake: 1.05, aero: .45, rollF: .6, yawK: 1.0, hp: 250, cda: 0.66, fw: 0.61, engine: '2.5 L turbo four', kmh: 184, sprint: 6.5,
    blurb: 'A front-drive family saloon with a turbo four. Stable and forgiving: it pushes wide rather than spins. The one to learn in.' },
  { id: 'Mustang', snd: '04_Crossplane_V8', idle: 750, red: 7400, turbo: 0, pops: 'crackle', cyl: 8, name: 'Montu', ar: 'مونتو', cls: 'Muscle coupé · RWD', price: 0, color: 0xf3f4f6,
    top: 57, acc: 10.3, grip: 0.98, rear: .94, loose: .9, off: .5, mass: 1740, drive: 'rwd', brake: 1.08, aero: .5, rollF: .48, yawK: 1.0, hp: 460, cda: 0.78, fw: 0.54, engine: '5.0 L V8', kmh: 205, sprint: 4.7,
    blurb: 'Front-engined V8 muscle. Heavy, loud and soft at the rear: easy to slide, slow to stop.' },
  { id: 'Audi', body: 'sedan', snd: '07_TwinTurbo_V6', idle: 850, red: 6900, turbo: 1, pops: 'pop', cyl: 6, name: 'Khepri RS', ar: 'خبري', cls: 'Super saloon · AWD', price: 3500, color: 0x9a9fa8,
    top: 60, acc: 11.2, grip: 1.02, rear: 1.02, loose: .42, off: .66, mass: 1720, drive: 'awd', brake: 1.12, aero: .8, rollF: .56, yawK: 1.02, hp: 450, cda: 0.7, fw: 0.57, engine: '2.9 L twin-turbo V6', kmh: 216, sprint: 3.4,
    blurb: 'Four doors, four-wheel drive and twin turbos. Launches hard, grips in the wet, and forgives a clumsy right foot.' },
  { id: 'BMW', wing: 1, snd: '05_FlatPlane_V8', idle: 950, red: 8400, turbo: 0, pops: 'crackle', cyl: 8, name: 'Ptah GTR', ar: 'بتاح', cls: 'Touring racer · RWD', price: 5500, color: 0xe8a21c,
    top: 62, acc: 11.9, grip: 1.45, rear: .98, loose: .65, off: .48, mass: 1350, drive: 'rwd', brake: 1.55, aero: 2.3, rollF: .51, yawK: 1.1, hp: 450, cda: 0.86, fw: 0.5, engine: '4.0 L race V8', kmh: 223, sprint: 2.9,
    blurb: 'A stripped touring car with slicks and a full aero kit. The best brakes and the most grip through fast corners.' },
  { id: 'FordGT', snd: '04_Crossplane_V8', idle: 800, red: 6700, turbo: 0, pops: 'crackle', cyl: 8, name: 'Amun GT', ar: 'آمون', cls: 'Supercar · RWD', price: 8000, color: 0x1c1f26,
    top: 66, acc: 12.3, grip: 1.08, rear: .97, loose: .78, off: .45, mass: 1520, drive: 'rwd', brake: 1.2, aero: 1.6, rollF: .5, yawK: 1.08, hp: 550, cda: 0.68, fw: 0.43, engine: '5.4 L supercharged V8', kmh: 238, sprint: 3.3,
    blurb: 'Low, wide and mid-engined with a supercharged V8. Hugely fast in a straight line; too much throttle and the tail steps out.' },
  { id: 'Lambo', wing: 1, snd: '08_Race_V10', idle: 950, red: 8500, turbo: 0, pops: 'crackle', cyl: 10, name: 'Apep', ar: 'أبيب', cls: 'Supercar · AWD', price: 12000, color: 0xe8a21c,
    top: 68, acc: 12.9, grip: 1.12, rear: 1.0, loose: .55, off: .5, mass: 1430, drive: 'awd', brake: 1.25, aero: 1.7, rollF: .53, yawK: 1.04, hp: 570, cda: 0.67, fw: 0.43, engine: '5.2 L V10', kmh: 245, sprint: 3.1,
    blurb: 'The flagship: a screaming V10 and four-wheel drive. Fastest round a lap, and wide enough to need the whole road.' },
  { id: 'F1', model: 'k:race', body: 'k', wing: 1, snd: '06_Race_V12', idle: 3200, red: 12500, turbo: 1, pops: 'crackle', cyl: 6, name: 'Ra F1', ar: 'رع إف١', cls: 'Formula car · RWD', price: 20000, color: 0xe3262e,
    kmh: 0, sprint: 2.2, hp: 1000, cda: 1.25, fw: .46, top: 95, acc: 14, grip: 1.9, rear: 1.0, loose: .55, off: .3, mass: 798, drive: 'rwd', brake: 2.4, aero: 5.5, rollF: .52, yawK: .85, engine: '1.6 L turbo-hybrid V6',
    blurb: 'An open-wheel single-seater: under 800 kg, a thousand horsepower and wings that push it into the road. Nothing else stops or corners like it.' },
  { id: 'F1b', model: 'k:race-future', body: 'k', wing: 1, snd: '05_FlatPlane_V8', idle: 3200, red: 12500, turbo: 1, pops: '', cyl: 6, name: 'Aten F1', ar: 'آتون', cls: 'Formula car · RWD', price: 22000, color: 0x1c57c8,
    kmh: 0, sprint: 5, hp: 1050, cda: 1.2, fw: 0.46, top: 50, acc: 14, grip: 1.95, rear: 1.0, loose: 0.55, off: 0.3, mass: 790, drive: 'rwd', brake: 2.4, aero: 5.8, rollF: 0.52, yawK: 0.85, engine: '1.6 L turbo-hybrid V6',
    blurb: 'A newer single-seater: a touch more power and downforce than the Ra, and just as unforgiving.' },
  // The original fourteen (models: "Ultimate Low-Poly Car Pack" 1 & 2 by ProbablyNotG, CC BY 4.0)
  { id: 'Ford', body: 'hatch', model: 'old:Ford', kmh: 180, sprint: 5.7, hp: 350, cda: 0.7, fw: 0.61, engine: '2.3 L turbo four', snd: '01_Turbo_Inline4', idle: 900, red: 7200, turbo: 1, pops: 'pop', cyl: 4,      name: 'Scarab RS',  ar: 'الجعران',  cls: 'Compact · FWD', price: 800,    color: 0x1f6feb, top: 50, acc: 8.6,  grip: 0.98, rear: 1.04, loose: .3,  off: .62, mass: 1480, drive: 'fwd', brake: 1.1, aero: .5,  rollF: .60, yawK: 1.12, blurb: 'Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car.' },
  { id: 'Sterrato', model: 'old:Sterrato', kmh: 191, sprint: 3.6, hp: 610, cda: 0.74, fw: 0.43, engine: '5.2 L V10', snd: '08_Race_V10', idle: 1000, red: 8500, turbo: 0, pops: 'crackle', cyl: 10,  name: 'Sandstorm',  ar: 'العاصفة',  cls: 'Rally · AWD',   price: 1800,    color: 0xe8a21c, top: 53, acc: 9.4,  grip: 1.0, rear: 1.0,  loose: .5,  off: .8,  mass: 1470, drive: 'awd', brake: 1.15, aero: .7,  rollF: .54, yawK: 1.25, blurb: 'All-wheel drive. Huge traction out of corners and barely notices the grass.' },
  { id: 'Mercedes', body: 'sedan', model: 'old:Mercedes', kmh: 202, sprint: 5, hp: 470, cda: 0.7, fw: 0.54, engine: '4.0 L V8', snd: '04_Crossplane_V8', idle: 750, red: 6800, turbo: 0, pops: 'pop', cyl: 8,  name: 'Pharaoh',    ar: 'الفرعون',  cls: 'Touring · RWD', price: 1500, color: 0x1c1f26, top: 56, acc: 9.8,  grip: 0.96, rear: .96,  loose: .8,  off: .55, mass: 1730, drive: 'rwd', brake: 1.08,  aero: .6,  rollF: .50, yawK: 1.4,  blurb: 'Heavy rear-drive saloon. Long braking, and the tail steps out under power.' },
  { id: 'LandRover', body: '4x4', model: 'old:LandRover', kmh: 176, sprint: 4.3, hp: 525, cda: 0.98, fw: 0.5, engine: '5.0 L V8', snd: '04_Crossplane_V8', idle: 700, red: 6000, turbo: 0, pops: '', cyl: 8, name: 'Sphinx 4x4', ar: 'أبو الهول', cls: 'Truck · AWD',   price: 2500, color: 0x2f7d4f, top: 49, acc: 9.0,  grip: 0.82, rear: 1.03, loose: .4,  off: .9,  mass: 2540, drive: 'awd', brake: 0.95, aero: .3,  rollF: .57, yawK: 1.6,  blurb: 'Two tonnes. Slow to turn, slow to stop, wins every shoving match.' },
  { id: 'Artura', model: 'old:Artura', kmh: 216, sprint: 3.1, hp: 680, cda: 0.66, fw: 0.42, engine: '3.0 L twin-turbo V6', snd: '07_TwinTurbo_V6', idle: 950, red: 8200, turbo: 1, pops: 'pop', cyl: 6,    name: 'Cobra',      ar: 'الكوبرا',  cls: 'GT · RWD',      price: 4000, color: 0xff6a13, top: 60, acc: 11.0, grip: 1.1, rear: .99,  loose: .6,  off: .5,  mass: 1500, drive: 'rwd', brake: 1.25,  aero: 1.2, rollF: .52, yawK: 1.1,  blurb: 'Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot.' },
  { id: 'Ferrari', wing: 1, model: 'old:Ferrari', kmh: 230, sprint: 3.1, hp: 720, cda: 0.68, fw: 0.42, engine: '3.9 L V8', snd: '05_FlatPlane_V8', idle: 1000, red: 8800, turbo: 0, pops: 'crackle', cyl: 8,   name: 'Ra Rosso',   ar: 'رع',       cls: 'GT · RWD',      price: 6500, color: 0xd81e2c, top: 64, acc: 11.8, grip: 1.12, rear: .97,  loose: .7,  off: .5,  mass: 1435, drive: 'rwd', brake: 1.3, aero: 1.4, rollF: .50, yawK: 1.1,  blurb: 'V8 GT. Faster everywhere than the Cobra and less forgiving about it.' },
  { id: 'Zenvo', wing: 1, model: 'old:Zenvo', kmh: 248, sprint: 2.7, hp: 1180, cda: 0.8, fw: 0.43, engine: '5.8 L twin-charged V8', snd: '06_Race_V12', idle: 900, red: 7800, turbo: 1, pops: 'crackle', cyl: 8,     name: 'Horus GT',   ar: 'حورس',     cls: 'Hyper · RWD',   price: 9500, color: 0x1436a8, top: 69, acc: 12.8, grip: 1.25, rear: .98,  loose: .75, off: .45, mass: 1495, drive: 'rwd', brake: 1.35,  aero: 2.3, rollF: .50, yawK: 1.05, blurb: 'Downforce car: the faster you go, the harder it grips. Brutal on cold nerves.' },
  { id: 'Mustang2', model: 'old:Mustang', kmh: 209, sprint: 5, hp: 480, cda: 0.78, fw: 0.55, engine: '5.2 L V8', snd: '04_Crossplane_V8', idle: 750, red: 7000, turbo: 0, pops: 'crackle',  cyl: 8,  name: 'Khamsin',    ar: 'الخماسين', cls: 'Muscle · RWD',  price: 2000, color: 0xf2c200, top: 58, acc: 10.6, grip: 0.98, rear: .94,  loose: .9,  off: .5,  mass: 1750, drive: 'rwd', brake: 1.08, aero: .5,  rollF: .48, yawK: 1.35, blurb: 'Big V8 muscle. Loud, fast in a straight line, and happy to go sideways.' },
  { id: 'M8', body: 'sedan', model: 'old:M8', kmh: 223, sprint: 3.1, hp: 625, cda: 0.72, fw: 0.53, engine: '4.4 L twin-turbo V8', snd: '03_Race_Inline6', idle: 800, red: 7000, turbo: 1, pops: 'pop',       cyl: 8,  name: 'Anubis M',   ar: 'أنوبيس',   cls: 'Touring · AWD', price: 3500, color: 0x0f5c4a, top: 62, acc: 11.0, grip: 1.02, rear: .97,  loose: .7,  off: .5,  mass: 1885, drive: 'awd', brake: 1.15, aero: .9,  rollF: .52, yawK: 1.3,  blurb: 'Grand tourer. Heavy but composed, with long legs on the straights.' },
  { id: 'Urus', body: 'suv', model: 'old:Urus', kmh: 216, sprint: 3.2, hp: 650, cda: 0.9, fw: 0.57, engine: '4.0 L twin-turbo V8', snd: '04_Crossplane_V8', idle: 800, red: 6800, turbo: 1, pops: 'pop',     cyl: 8,  name: 'Bastet SUV', ar: 'باستيت',   cls: 'Super SUV · AWD', price: 4500, color: 0xf3f4f6, top: 60, acc: 11.2, grip: 0.98,  rear: 1.02, loose: .45, off: .82, mass: 2200, drive: 'awd', brake: 1.1,  aero: .6,  rollF: .56, yawK: 1.55, blurb: 'A fast SUV. Launches hard on four driven wheels, leans on its brakes.' },
  { id: 'Porsche', body: 'sedan', model: 'old:Porsche', kmh: 220, sprint: 3.2, hp: 630, cda: 0.72, fw: 0.53, engine: '4.0 L twin-turbo V8', snd: '02_Boxer_Flat4', idle: 850, red: 7200, turbo: 1, pops: 'pop',  cyl: 8,  name: 'Nefertiti S', ar: 'نفرتيتي',  cls: 'Sports saloon · AWD', price: 5000, color: 0x7b3fe4, top: 61, acc: 11.4, grip: 1.04,  rear: 1.0,  loose: .5,  off: .6,  mass: 2080, drive: 'awd', brake: 1.15, aero: 1.0, rollF: .53, yawK: 1.35, blurb: 'All-wheel-drive saloon. Stable, quick, and easy to trust in the rain.' },
  { id: 'AMG', wing: 1, model: 'old:AMG', kmh: 227, sprint: 3.4, hp: 585, cda: 0.72, fw: 0.47, engine: '4.0 L twin-turbo V8', snd: '04_Crossplane_V8', idle: 800, red: 7200, turbo: 1, pops: 'crackle',      cyl: 8,  name: 'Osiris GT',  ar: 'أوزيريس',  cls: 'GT · RWD',      price: 6000, color: 0x2fb457, top: 63, acc: 11.6, grip: 1.1, rear: .97,  loose: .7,  off: .5,  mass: 1575, drive: 'rwd', brake: 1.25,  aero: 1.3, rollF: .5,  yawK: 1.15, blurb: 'Front-engine GT with a long bonnet. Balanced, and rewards trail braking.' },
  { id: 'GTR', wing: 1, model: 'old:GTR', kmh: 230, sprint: 3, hp: 570, cda: 0.72, fw: 0.54, engine: '3.8 L twin-turbo V6', snd: '07_TwinTurbo_V6', idle: 900, red: 7400, turbo: 1, pops: 'pop',      cyl: 6,  name: 'Sobek R',    ar: 'سوبك',     cls: 'GT · AWD',      price: 7000, color: 0x19a7ce, top: 64, acc: 12.4, grip: 1.08, rear: 1.0,  loose: .5,  off: .6,  mass: 1750, drive: 'awd', brake: 1.2,  aero: 1.3, rollF: .54, yawK: 1.25, blurb: 'Twin-turbo all-wheel drive. Monstrous traction out of slow corners.' },
  { id: 'P1GTR', wing: 1, model: 'old:P1GTR', kmh: 252, sprint: 2.3, hp: 1000, cda: 0.85, fw: 0.42, engine: '3.8 L twin-turbo V8', snd: '05_FlatPlane_V8', idle: 1100, red: 9000, turbo: 1, pops: 'crackle',    cyl: 8,  name: 'Seth GTR',   ar: 'ست',       cls: 'Track hyper · RWD', price: 14000, color: 0xff6a13, top: 70, acc: 13.2, grip: 1.5, rear: .99,  loose: .7,  off: .42, mass: 1440, drive: 'rwd', brake: 1.6, aero: 2.9, rollF: .5,  yawK: 1.0,  blurb: 'Track-only hypercar. Enormous downforce; the fastest car in the game.' },
];
// Power at the wheels (W) and the speed where it balances air drag and rolling resistance: the car's real top speed.
for (const c of CARS) { c.pw = c.hp * 745.7 * .84; let v = 60; for (let i = 0; i < 40; i++) v = Math.cbrt(Math.max(1, c.pw - c.mass * (.12 + .006 * v) * v) / (.6 * c.cda)); c.top = v; c.kmh = Math.round(v * 3.6); }
// Racing classes. A Professional race is run within one class, and a balance of performance trims power and grip towards the
// field's average, so the cars on the grid are closely matched and the result comes down to the driving.
export const CLASSES = { Formula: ['F1', 'F1b'], Touring: ['Mazda', 'Ford', 'Mustang', 'Mustang2', 'Mercedes', 'Audi', 'LandRover'], GT: ['M8', 'Urus', 'Porsche', 'GTR', 'AMG', 'FordGT', 'BMW'], Super: ['Lambo', 'Sterrato', 'Artura', 'Ferrari', 'Zenvo', 'P1GTR'] };
for (const k in CLASSES) for (const id of CLASSES[k]) CARS.find(c => c.id === id).klass = k;
export function balance(spec, field) {
  const pm = c => c.pw / c.mass, n = field.length, rp = field.reduce((a, c) => a + pm(c), 0) / n, rg = field.reduce((a, c) => a + c.grip, 0) / n, lim = (v, a, b) => Math.max(a, Math.min(b, v));
  return { p: lim(Math.pow(rp / pm(spec), .85), .72, 1.35), g: lim(Math.pow(rg / spec.grip, .85), .82, 1.18) };
}
