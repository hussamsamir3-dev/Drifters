// ============================================================================
// Handling + race configuration. Everything that shapes how the cars drive lives
// here, so tuning never means digging through the physics code.
// ============================================================================
export const TUNE = {
  hz: 120,                              // fixed physics rate; rendering interpolates between steps
  tyre: {
    // lateral force curve: force = cap * sin(C * atan(B * slip)). Fronts peak near 11° and fall away ~25% when over-driven
    // (that is the understeer you feel); rears are stiffer and hold their force deep into a slide, which keeps slides catchable.
    frontB: 10, frontC: 1.45,
    rearB: 12, rearC: 1.3,
    driveShare: .45, brakeShare: .6,    // braking uses only part of the grip budget too, so you can brake and turn                    // how much of the drive force competes with cornering in the tyre's grip budget
    loadSens: .5,                       // how much an axle loses when cornering load shifts to the outside tyres
    wornGrip: .72,                      // grip multiplier of a fully worn tyre (fresh = 1)
    wear: { base: .0011, slip: .011, spin: .008, lock: .03, offroad: .002 },   // per second, scaled by what the tyre is doing
    wetLossSlick: .27, wetLossWet: .07, dryLossWet: .07,
  },
  steer: { lock: .58, speedK: .055, rate: 3.4, rateSpeedK: .03, returnRate: 4.6, maxLock: .62 },   // lock shrinks as 1/(1+speedK*v); rates in rad/s
  // Stability assist. `counter` adds automatic counter-steer in a slide, `power` eases the throttle as the slide angle grows.
  assist: { off: 0, low: .5, full: 1 },
  surface: { kerbGrip: .95, grassDrag: .15, roadDrag: .03, airDrag: .25 },
  fuel: { tankKg: 45, fullThrottleSeconds: 330, idle: .06 },   // a full tank lasts ~5.5 minutes flat out
  pit: { limit: 16.7, tyres: 2.6, fuelFull: 4.0, repairFull: 6.0 },   // limit in m/s (60 km/h); service times in seconds
  damage: { threshold: 3.5, scale: 34, enginePowerLoss: .4, steerPull: .05 },
  // ---- easy-to-drive set-up ----
  gripScale: 1.3,                       // overall tyre grip. Raise for a more planted car, lower for a looser one
  rearBias: 1.22,                       // rear grip relative to front. Higher = safer, more understeer
  powerSlide: .45,                      // how much full throttle loosens the rear (0 = never, 1 = a lot)
  slideAid: 2.4,                        // grip aid strength (1/s): how fast sideways slip is bled away at Assist Full
  assistYawDamp: 1.1,                   // extra rotation damping at Assist Full
  wall: { bounce: .04, spin: .35, friction: .22, yawKeep: .97 },   // barrier contact: restitution, share of impulse that may rotate the car, wall friction
  yawDamp: .6, yawDampSpeed: .012,       // yaw damping (1/s), rising with speed for high-speed stability
  reset: { penalty: 2 },                // seconds held stationary after pressing reset
  toy: { w: 1.08, h: 1.16, l: .88, wheel: 1.12 },   // visual proportions only: short, tall, big-wheeled miniature cars
};

// top = top speed (m/s) · acc = launch acceleration (m/s²) · grip = tyre μ · rear = rear-axle grip bias (<1 = tail-happy)
// loose = how much drive torque steals rear side-grip · off = grip multiplier on grass · drive = fwd / rwd / awd
// brake = peak braking in g · aero = downforce coefficient · rollF = share of roll stiffness on the front axle
// (higher = more understeer at the limit) · yawK = yaw inertia factor (higher = lazier to rotate, slower to recover)
export const CARS = [
  { id: 'Ford',      name: 'Scarab RS',  ar: 'الجعران',  cls: 'Compact · FWD', price: 0,    color: 0x1f6feb, top: 50, acc: 8.6,  grip: 1.22, rear: 1.04, loose: .3,  off: .62, mass: 1180, drive: 'fwd', brake: 1.25, aero: .5,  rollF: .60, yawK: 1.12, blurb: 'Front-drive hot hatch. Safe understeer, lift to tuck the nose in. The beginner\u2019s car.' },
  { id: 'Sterrato',  name: 'Sandstorm',  ar: 'العاصفة',  cls: 'Rally · AWD',   price: 0,    color: 0xe8a21c, top: 53, acc: 9.4,  grip: 1.18, rear: 1.0,  loose: .5,  off: .8,  mass: 1350, drive: 'awd', brake: 1.25, aero: .7,  rollF: .54, yawK: 1.25, blurb: 'All-wheel drive. Huge traction out of corners and barely notices the grass.' },
  { id: 'Mercedes',  name: 'Pharaoh',    ar: 'الفرعون',  cls: 'Touring · RWD', price: 1500, color: 0x1c1f26, top: 56, acc: 9.8,  grip: 1.15, rear: .96,  loose: .8,  off: .55, mass: 1650, drive: 'rwd', brake: 1.2,  aero: .6,  rollF: .50, yawK: 1.4,  blurb: 'Heavy rear-drive saloon. Long braking, and the tail steps out under power.' },
  { id: 'LandRover', name: 'Sphinx 4x4', ar: 'أبو الهول', cls: 'Truck · AWD',   price: 2500, color: 0x2f7d4f, top: 49, acc: 9.0,  grip: 1.12, rear: 1.03, loose: .4,  off: .9,  mass: 2100, drive: 'awd', brake: 1.05, aero: .3,  rollF: .57, yawK: 1.6,  blurb: 'Two tonnes. Slow to turn, slow to stop, wins every shoving match.' },
  { id: 'Artura',    name: 'Cobra',      ar: 'الكوبرا',  cls: 'GT · RWD',      price: 4000, color: 0xff6a13, top: 60, acc: 11.0, grip: 1.32, rear: .99,  loose: .6,  off: .5,  mass: 1400, drive: 'rwd', brake: 1.4,  aero: 1.2, rollF: .52, yawK: 1.1,  blurb: 'Mid-engine GT. Sharp turn-in, strong brakes, needs a smooth right foot.' },
  { id: 'Ferrari',   name: 'Ra Rosso',   ar: 'رع',       cls: 'GT · RWD',      price: 6500, color: 0xd81e2c, top: 64, acc: 11.8, grip: 1.36, rear: .97,  loose: .7,  off: .5,  mass: 1450, drive: 'rwd', brake: 1.45, aero: 1.4, rollF: .50, yawK: 1.1,  blurb: 'V8 GT. Faster everywhere than the Cobra and less forgiving about it.' },
  { id: 'Zenvo',     name: 'Horus GT',   ar: 'حورس',     cls: 'Hyper · RWD',   price: 9500, color: 0x1436a8, top: 69, acc: 12.8, grip: 1.42, rear: .98,  loose: .75, off: .45, mass: 1500, drive: 'rwd', brake: 1.5,  aero: 2.3, rollF: .50, yawK: 1.05, blurb: 'Downforce car: the faster you go, the harder it grips. Brutal on cold nerves.' },
];
