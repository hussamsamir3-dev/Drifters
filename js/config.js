// ============================================================================
// Handling + race configuration. Everything that shapes how the cars drive lives
// here, so tuning never means digging through the physics code.
// ============================================================================
export const TUNE = {
  hz: 120,                              // fixed physics rate; rendering interpolates between steps
  tyre: {
    // lateral force curve: force = cap * sin(C * atan(B * slip)). Fronts peak near 11° and fall away ~25% when over-driven
    // (that is the understeer you feel); rears are stiffer and hold their force deep into a slide, which keeps slides catchable.
    frontB: 15.5, frontC: 1.36,
    rearB: 9.5, rearC: 1.35,
    driveShare: .46, brakeShare: .68,    // braking uses only part of the grip budget too, so you can brake and turn                    // how much of the drive force competes with cornering in the tyre's grip budget
    loadSens: .06,                       // how much an axle loses when cornering load shifts to the outside tyres
    wornGrip: .72,                      // grip multiplier of a fully worn tyre (fresh = 1)
    wear: { base: .0011, slip: .011, spin: .008, lock: .03, offroad: .002 },   // per second, scaled by what the tyre is doing
    wetLossSlick: .27, wetLossWet: .07, dryLossWet: .07,
  },
  steer: { lock: .78, speedK: .07, rate: 8.8, rateSpeedK: .018, returnRate: 9.5, maxLock: .62 },   // lock shrinks as 1/(1+speedK*v); rates in rad/s
  // Stability assist. `counter` adds automatic counter-steer in a slide, `power` eases the throttle as the slide angle grows.
  assist: { off: 0, low: .4, medium: .7, full: 1 },
  surface: { kerbGrip: .95, grassDrag: .15, roadDrag: .03, airDrag: .25 },
  tyreT: { start: 62, ambient: 25, ambientWet: 15, ambientNight: 14 },   // tyre temperature model: blankets on the grid, then heat from slip and load, cooling with air
  fuel: { tankKg: 45, fullThrottleSeconds: 330, idle: .06 },   // a full tank lasts ~5.5 minutes flat out
  pit: { limit: 16.7, tyres: 2.6, fuelFull: 4.0, repairFull: 6.0 },   // limit in m/s (60 km/h); service times in seconds
  damage: { threshold: 3.5, scale: 34, enginePowerLoss: .4, steerPull: .05 },
  // ---- easy-to-drive set-up ----
  gripScale: 2.15,                     // with this, each car's `grip` is its real cornering grip in g on dry tarmac                       // overall tyre grip. Raise for a more planted car, lower for a looser one
  brakeScale: 1.55,                     // brake power: braking was never limited by the tyres, so this is what shortens stopping distances
  rearBias: 1.08,                       // rear grip relative to front. Higher = safer, more understeer
  powerSlide: .85,                      // how much full throttle loosens the rear (0 = never, 1 = a lot)
  slideAid: .9,                        // grip aid strength (1/s): how fast sideways slip is bled away at Assist Full
  assistYawDamp: .6,
  // Drift: hold full steering lock with the throttle on and the rear lets go on purpose. rearCut = how much rear grip is released, build/decay = how fast it comes and goes (1/s).
  slowTurn: .22,                         // extra front bite while the car is slowing (lifting or braking): the nose tucks in
  drift: { rearCut: .18, build: 3.2, decay: 5, minSpeed: 10 },
  enginePower: 1.22,                    // all engines: more torque than the rear tyres can take in the low gears
  shock: { minHit: 14, perMs: .03, max: .4 },   // a hard hit switches the driving aids off for up to this many seconds
  // Turn-in look: the body swings into the corner as soon as you steer, a moment before the car's path bends.
  // It is visual only, so it costs no grip. steer/yaw = how much each adds (rad per rad), max = limit (rad), rate = how fast it swings in.
  visualLead: { steer: .16, yaw: .05, max: .07, rate: 10, fullSpeed: 12 },                   // extra rotation damping at Assist Full
  wall: { bounce: .02, spin: .28, friction: .2, yawKeep: .94 },   // barrier contact: no bounce, little spin, the car settles and slides along   // barrier contact: restitution, share of impulse that may rotate the car, wall friction
  crash: { rest: .2, restMin: 1.5, fric: .4, box: .93 },     // car-to-car contact: restitution (only above restMin m/s), friction coefficient
  yawDamp: .6, yawDampSpeed: .012,       // yaw damping (1/s), rising with speed for high-speed stability
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
  setup: { gearAcc: .04, gearTop: .035, aeroDown: .35, aeroTop: .02, biasStep: .05, rollStep: .03, compound: { soft: [1.05, 1.6, 78, 16, .94], medium: [1, 1, 85, 18, 1], hard: [.97, .6, 92, 20, 1.02], rain: [.9, 1.1, 55, 18, .97], gravel: [.94, .9, 70, 18, 1.14] } },      // compounds: [grip on tarmac, wear, best temperature, half-width of the best window, grip on loose ground]
  toy: { w: 1.4, h: 1.4, l: 1.4, wheel: 1.4 },
  // Stylised proportions by body type (multiplies the scale above): shorter, taller, wider, bigger wheels.
  body: { k: { w: 1, h: 1, l: 1, wheel: 1 }, toy: { w: 1.1, h: 1.08, l: .93, wheel: 1.22 }, coupe: { w: 1.12, h: 1.2, l: .88, wheel: 1.24 }, sedan: { w: 1.13, h: 1.26, l: .85, wheel: 1.27 }, hatch: { w: 1.14, h: 1.3, l: .84, wheel: 1.3 }, suv: { w: 1.1, h: 1.18, l: .88, wheel: 1.24 }, '4x4': { w: 1.1, h: 1.16, l: .9, wheel: 1.22 }, truck: { w: 1.04, h: 1.02, l: .9, wheel: 1.08 }, bus: { w: 1.06, h: 1.0, l: .92, wheel: 1.12 }, f1: { w: 1.08, h: 1.12, l: .9, wheel: 1.1 } },   // how large cars are drawn and how much room they take on track; their mass, wheelbase and forces stay real   // visual proportions only: short, tall, big-wheeled miniature cars
};

// top = top speed (m/s) · acc = launch acceleration (m/s²) · grip = tyre μ · rear = rear-axle grip bias (<1 = tail-happy)
// loose = how much drive torque steals rear side-grip · off = grip multiplier on grass · drive = fwd / rwd / awd
// brake = peak braking in g · aero = downforce coefficient · rollF = share of roll stiffness on the front axle
// (higher = more understeer at the limit) · yawK = yaw inertia factor (higher = lazier to rotate, slower to recover)
export const CARS = [
  // Eighteen rally cars (models: "1965-2002 Rally Cars" by supercarmodels, CC BY 4.0). Figures are real: hp, mass kg, 0-100 km/h (s), top speed cap (km/h),
  // drive layout and front weight share (fw). Handling numbers follow the layout: mid- and rear-engined cars are tail-happy (rear < 1), front-drive cars safe (rear > 1).
  { id: 'Mini', rimS: 5, whine: 0.7, flut: 0, snd: '01_Turbo_Inline4', idle: 1000, red: 7000, turbo: 0, pops: '', cyl: 4, name: 'Mini Cooper S', ar: 'ميني كوبر إس', cls: 'Classic · FWD', price: 0, color: 0xd9201c,
    cap: 159, acc: 6.5, grip: 0.88, rear: 1.16, loose: 0.12, off: 0.72, mass: 640, drive: 'fwd', brake: 0.95, aero: 0.1, rollF: 0.58, yawK: 1.04, hp: 117, cda: 0.55, fw: 0.62, engine: '1.3 L four', sprint: 8.5,
    blurb: 'The giant-killer of the 1960s. Tiny, light and front-drive: carry your speed, brake late and it rotates beautifully. The one to learn in.' },
  { id: 'Escort', rimS: 5, whine: 0.55, flut: 0, snd: '01_Turbo_Inline4', idle: 950, red: 8000, turbo: 0, pops: 'pop', cyl: 4, name: 'Ford Escort RS1800', ar: 'فورد إسكورت آر إس١٨٠٠', cls: 'Classic · RWD', price: 0, color: 0xf1f1f1,
    cap: 196, acc: 12.5, grip: 0.93, rear: 1.14, loose: 0.65, off: 0.72, mass: 960, drive: 'rwd', brake: 0.95, aero: 0.18, rollF: 0.48, yawK: 0.98, hp: 325, cda: 0.72, fw: 0.53, engine: '2.0 L four', sprint: 4.4,
    blurb: 'The Mk2 rally legend: rear-drive, light and loud. It slides on throttle and forgives a clumsy hand.' },
  { id: 'Fulvia', rimS: 0, whine: 0.3, flut: 0, snd: '01_Turbo_Inline4', idle: 950, red: 7200, turbo: 0, pops: 'pop', cyl: 4, name: 'Lancia Fulvia HF', ar: 'لانشيا فولفيا', cls: 'Classic · FWD', price: 400, color: 0xeb0d0d,
    cap: 180, acc: 7.9, grip: 0.9, rear: 1.12, loose: 0.08, off: 0.72, mass: 920, drive: 'fwd', brake: 0.95, aero: 0.12, rollF: 0.57, yawK: 1.0, hp: 169, cda: 0.66, fw: 0.6, engine: '1.6 L V4', sprint: 6.9,
    blurb: 'A front-drive classic with a narrow V4. Beautifully balanced, but short on power: win it in the corners.' },
  { id: 'Fiat131', rimS: 0, whine: 0.35, flut: 0, snd: '01_Turbo_Inline4', idle: 900, red: 7600, turbo: 0, pops: 'pop', cyl: 4, name: 'Fiat 131 Abarth', ar: 'فيات ١٣١ أبارث', cls: 'Classic · RWD', price: 800, color: 0x1d3a8a,
    cap: 201, acc: 12.5, grip: 0.94, rear: 1.14, loose: 0.65, off: 0.72, mass: 980, drive: 'rwd', brake: 0.95, aero: 0.2, rollF: 0.48, yawK: 1.0, hp: 299, cda: 0.72, fw: 0.52, engine: '2.0 L four', sprint: 4.1,
    blurb: 'The Abarth-tuned workhorse that won three world titles. Torquey, rear-drive and tail-happy on a trailed brake.' },
  { id: 'Alpine', rimS: 0, whine: 0.35, flut: 0, snd: '01_Turbo_Inline4', idle: 950, red: 7600, turbo: 0, pops: 'pop', cyl: 4, name: 'Alpine A110', ar: 'ألبين إيه١١٠', cls: 'Classic · RWD', price: 1500, color: 0x1f5fa6,
    cap: 207, acc: 12.5, grip: 0.95, rear: 1.09, loose: 0.65, off: 0.72, mass: 700, drive: 'rwd', brake: 0.98, aero: 0.2, rollF: 0.48, yawK: 0.88, hp: 234, cda: 0.55, fw: 0.4, engine: '1.8 L four', sprint: 4.1,
    blurb: 'A featherweight with the engine hung out the back. Huge traction out of corners, but lift mid-turn and the tail comes round.' },
  { id: 'P911', rimS: 3, whine: 0.4, flut: 0, snd: '02_Boxer_Style', idle: 900, red: 7200, turbo: 0, pops: 'pop', cyl: 6, name: 'Porsche 911 SC RS', ar: 'بورش ٩١١', cls: 'Classic · RWD', price: 2500, color: 0xf4f4f4,
    cap: 228, acc: 12.5, grip: 0.96, rear: 1.08, loose: 0.65, off: 0.74, mass: 1050, drive: 'rwd', brake: 1.0, aero: 0.25, rollF: 0.48, yawK: 0.95, hp: 332, cda: 0.72, fw: 0.38, engine: '3.0 L flat six', sprint: 4.4,
    blurb: 'Rear-engined and rear-drive: all the weight sits behind the axle. Brake in a straight line, then trust the traction.' },
  { id: 'Stratos', rimS: 3, whine: 0.6, flut: 0, snd: '07_TwinTurbo_V6', idle: 1000, red: 7800, turbo: 0, pops: 'pop', cyl: 6, name: 'Lancia Stratos HF', ar: 'لانشيا ستراتوس', cls: 'Classic · RWD', price: 3500, color: 0xf7f7f7,
    cap: 233, acc: 12.5, grip: 0.98, rear: 1.13, loose: 0.65, off: 0.74, mass: 980, drive: 'rwd', brake: 1.0, aero: 0.35, rollF: 0.48, yawK: 0.9, hp: 364, cda: 0.6, fw: 0.42, engine: '2.4 L V6', sprint: 3.5,
    blurb: 'The first purpose-built rally car: a wedge with a mid-mounted V6. Razor sharp on turn-in, nervous on the limit.' },
  { id: 'E30', rimS: 2, whine: 0.6, flut: 0, snd: '01_Turbo_Inline4', idle: 950, red: 7600, turbo: 0, pops: 'pop', cyl: 4, name: 'BMW M3 E30', ar: 'بي إم دبليو إم٣ إي٣٠', cls: 'Group A · RWD', price: 2200, color: 0xe5e5e5,
    cap: 217, acc: 12.0, grip: 1.0, rear: 1.16, loose: 0.65, off: 0.78, mass: 1100, drive: 'rwd', brake: 1.1, aero: 0.3, rollF: 0.48, yawK: 1.0, hp: 390, cda: 0.7, fw: 0.52, engine: '2.3 L four', sprint: 4.6,
    blurb: 'The boxy Group A tarmac weapon. Rear-drive, high-revving and beautifully balanced.' },
  { id: 'R5', rimS: 1, whine: 0.8, flut: 4, snd: '01_Compact_Turbo', idle: 1000, red: 7800, turbo: 1, pops: 'crackle', cyl: 4, name: 'Renault 5 Turbo', ar: 'رينو ٥ تيربو', cls: 'Group B · RWD', price: 3000, color: 0xd30000,
    cap: 217, acc: 12.5, grip: 0.96, rear: 1.08, loose: 0.65, off: 0.78, mass: 1000, drive: 'rwd', brake: 1.05, aero: 0.3, rollF: 0.48, yawK: 0.88, hp: 455, cda: 0.65, fw: 0.38, engine: '1.4 L turbo four', sprint: 3.4,
    blurb: 'A hot hatch turned inside out: the engine sits behind the seats, driving the rear. Quick, lively and unforgiving.' },
  { id: 'Celica', rimS: 1, whine: 0.5, flut: 3, snd: '01_Compact_Turbo', idle: 900, red: 7300, turbo: 1, pops: 'crackle', cyl: 4, name: 'Toyota Celica GT-Four', ar: 'تويوتا سيليكا', cls: 'Group A · AWD', price: 3800, color: 0xf9f9f8,
    cap: 238, acc: 14.0, grip: 1.03, rear: 0.98, loose: 0.38, off: 0.82, mass: 1260, drive: 'awd', brake: 1.1, aero: 0.4, rollF: 0.5, yawK: 1.03, hp: 390, cda: 0.74, fw: 0.58, engine: '2.0 L turbo four', sprint: 3.9,
    blurb: 'A four-wheel-drive Group A champion. Stable under power, a little heavy on the nose.' },
  { id: 'Delta', rimS: 3, whine: 0.55, flut: 3, snd: '01_Compact_Turbo', idle: 900, red: 7300, turbo: 1, pops: 'crackle', cyl: 4, name: 'Lancia Delta Integrale', ar: 'لانشيا دلتا إنتجرالي', cls: 'Group A · AWD', price: 4200, color: 0xe5e5e5,
    cap: 228, acc: 13.5, grip: 1.0, rear: 0.98, loose: 0.38, off: 0.82, mass: 1180, drive: 'awd', brake: 1.1, aero: 0.45, rollF: 0.5, yawK: 1.0, hp: 390, cda: 0.72, fw: 0.6, engine: '2.0 L turbo four', sprint: 4.1,
    blurb: 'Six world titles in a boxy hatchback. Grip everywhere and an AWD system that drags you out of any corner.' },
  { id: 'Impreza', rimS: 7, whine: 0.6, flut: 3, snd: '02_Boxer_Style', idle: 900, red: 7400, turbo: 1, pops: 'crackle', cyl: 4, name: 'Subaru Impreza 555', ar: 'سوبارو إمبريزا', cls: 'Group A · AWD', price: 4500, color: 0x1b2f78,
    cap: 238, acc: 15.0, grip: 1.05, rear: 0.98, loose: 0.38, off: 0.82, mass: 1230, drive: 'awd', brake: 1.12, aero: 0.55, rollF: 0.5, yawK: 1.03, hp: 390, cda: 0.72, fw: 0.56, engine: '2.0 L turbo boxer', sprint: 3.7,
    blurb: 'The 555: a rumbling turbo boxer and a famously neutral chassis. A rally icon.' },
  { id: 'Lancer', rimS: 1, whine: 0.6, flut: 3, snd: '01_Compact_Turbo', idle: 900, red: 7200, turbo: 1, pops: 'crackle', cyl: 4, name: 'Mitsubishi Lancer Evo', ar: 'ميتسوبيشي لانسر إيفو', cls: 'Group A · AWD', price: 4500, color: 0xc9202b,
    cap: 238, acc: 15, grip: 1.05, rear: 0.98, loose: 0.38, off: 0.82, mass: 1230, drive: 'awd', brake: 1.12, aero: 0.5, rollF: 0.5, yawK: 1.04, hp: 390, cda: 0.72, fw: 0.57, engine: '2.0 L turbo four', sprint: 3.5,
    blurb: 'Sharp, grippy and brutally quick on turn-in. The Evo rewards precision.' },
  { id: 'EscortCos', rimS: 1, whine: 0.55, flut: 3, snd: '01_Compact_Turbo', idle: 900, red: 7000, turbo: 1, pops: 'crackle', cyl: 4, name: 'Ford Escort Cosworth', ar: 'فورد إسكورت كوسورث', cls: 'Group A · AWD', price: 5000, color: 0xf1f1f1,
    cap: 238, acc: 14.3, grip: 1.03, rear: 0.98, loose: 0.38, off: 0.82, mass: 1230, drive: 'awd', brake: 1.1, aero: 0.7, rollF: 0.5, yawK: 1.03, hp: 390, cda: 0.8, fw: 0.55, engine: '2.0 L turbo four', sprint: 3.9,
    blurb: 'The whale-tail Escort: a big wing, AWD and a Cosworth turbo four. Planted at speed.' },
  { id: 'P205', rimS: 1, whine: 0.9, flut: 5, snd: '01_Compact_Turbo', idle: 1000, red: 8200, turbo: 1, pops: 'crackle', cyl: 4, name: 'Peugeot 205 T16', ar: 'بيجو ٢٠٥ تي١٦', cls: 'Group B · AWD', price: 6500, color: 0xe5e5e5,
    cap: 228, acc: 15, grip: 1.0, rear: 0.98, loose: 0.38, off: 0.78, mass: 1100, drive: 'awd', brake: 1.05, aero: 0.5, rollF: 0.5, yawK: 0.93, hp: 585, cda: 0.65, fw: 0.43, engine: '1.8 L turbo four', sprint: 2.7,
    blurb: "A mid-engined Group B monster in a hatchback's clothes. Savage acceleration with a short, twitchy wheelbase." },
  { id: 'RS200', rimS: 1, whine: 0.95, flut: 5, snd: '01_Compact_Turbo', idle: 1000, red: 8000, turbo: 1, pops: 'crackle', cyl: 4, name: 'Ford RS200', ar: 'فورد آر إس٢٠٠', cls: 'Group B · AWD', price: 8000, color: 0xf5f6f6,
    cap: 233, acc: 15, grip: 1.0, rear: 0.98, loose: 0.38, off: 0.78, mass: 1180, drive: 'awd', brake: 1.05, aero: 0.55, rollF: 0.5, yawK: 0.98, hp: 585, cda: 0.75, fw: 0.42, engine: '1.8 L turbo four', sprint: 2.5,
    blurb: 'Purpose-built for Group B: mid-engine, four-wheel-drive and ferociously fast. Launches like nothing else.' },
  { id: 'Quattro', rimS: 6, whine: 0.8, flut: 5, snd: '09_Rally_Inline5', idle: 1000, red: 7800, turbo: 1, pops: 'crackle', cyl: 5, name: 'Audi Sport Quattro S1', ar: 'أودي سبورت كواترو إس١', cls: 'Group B · AWD', price: 9000, color: 0xf2c200,
    cap: 228, acc: 15, grip: 0.98, rear: 0.98, loose: 0.38, off: 0.78, mass: 1090, drive: 'awd', brake: 1.05, aero: 0.8, rollF: 0.5, yawK: 1.0, hp: 624, cda: 0.85, fw: 0.58, engine: '2.1 L turbo five', sprint: 2.4,
    blurb: 'The car that put four-wheel-drive on the map. A five-cylinder warble, a huge wing and a nose-heavy chassis.' },
  { id: 'S4', rimS: 4, whine: 0.95, flut: 5, snd: '01_Compact_Turbo', idle: 1000, red: 8200, turbo: 1, pops: 'crackle', cyl: 4, name: 'Lancia Delta S4', ar: 'لانشيا دلتا إس٤', cls: 'Group B · AWD', price: 11000, color: 0xeaeaea,
    cap: 244, acc: 15, grip: 1.0, rear: 0.98, loose: 0.38, off: 0.78, mass: 900, drive: 'awd', brake: 1.05, aero: 0.75, rollF: 0.5, yawK: 0.95, hp: 624, cda: 0.75, fw: 0.44, engine: '1.8 L twin-charged four', sprint: 2.4,
    blurb: 'Supercharged and turbocharged, barely 900 kg: the most extreme rally car ever built. Fearsome.' },
];
// Power at the wheels (W) and the speed where it balances air drag and rolling resistance: the car's real top speed.
for (const c of CARS) { c.pw = c.hp * 745.7 * .84; let v = 60; for (let i = 0; i < 40; i++) v = Math.cbrt(Math.max(1, c.pw - c.mass * (.12 + .006 * v) * v) / (.6 * c.cda)); if (c.cap) v = Math.min(v, c.cap / 3.6); c.top = v; c.kmh = Math.round(v * 3.6); }
// Racing classes. A Professional race is run within one class, and a balance of performance trims power and grip towards the
// field's average, so the cars on the grid are closely matched and the result comes down to the driving.
export const CLASSES = { 'Group B': ['S4', 'RS200', 'P205', 'Quattro', 'R5'], 'Group A': ['EscortCos', 'Lancer', 'Delta', 'Celica', 'Impreza', 'E30'], 'Classic': ['Mini', 'Fulvia', 'Alpine', 'Escort', 'Fiat131', 'P911', 'Stratos'] };
for (const k in CLASSES) for (const id of CLASSES[k]) CARS.find(c => c.id === id).klass = k;
export function balance(spec, field) {
  const pm = c => c.pw / c.mass, n = field.length, rp = field.reduce((a, c) => a + pm(c), 0) / n, rg = field.reduce((a, c) => a + c.grip, 0) / n, lim = (v, a, b) => Math.max(a, Math.min(b, v));
  return { p: lim(Math.pow(rp / pm(spec), .85), .72, 1.35), g: lim(Math.pow(rg / spec.grip, .85), .82, 1.18) };
}
