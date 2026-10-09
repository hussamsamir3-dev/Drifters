// What each engine in the game physically is, in the numbers the engine model (enginedsp.txt) needs.
//   fire    firing angles over the 720 degrees of a four-stroke cycle, in the order the cylinders fire
//   hdr     length in metres of each cylinder's own header pipe (unequal lengths give the boxer burble)
//   exLen   length of the main exhaust from the collector to the tailpipe; tailR how much it reflects (a straight-through pipe reflects most)
//   exLP    how much of the highs the tailpipe lets out (a quiet silencer is low, an open rally pipe is high)
//   mufF/mufG   the silencer's resonance (body of the note) and how much of it is heard
//   pulseW  length of a firing pulse in crank degrees; drive: how hard the note is saturated (rasp); lump: how uneven the idle is
//   intake/intakeF: how much induction noise and where it sits (carbs and individual throttle bodies bark)
//   block   [frequency, Q, level] of the structure ringing; turbo/super: forced-induction sound; fan: air-cooled fan
const BASE = { cs: 480, fire: [0, 180, 360, 540], hdr: [.45], hdrR: -.42, exLen: 1.9, tailR: .72, engR: .38, collG: .5, exLP: 2600, mufF: 105, mufG: .5, pulseW: 34, idleAmp: .36, lump: .5, spread: .05,
  block: [[135, 5, .5], [330, 4, .35], [820, 3.5, .2]], gEx: 1, gBlock: .5, gRasp: .55, mech: .35, intake: .5, intakeF: 260, intakeD: .8, intakeW: 200, intakeP: .1, fan: 0, turbo: 0, super: 0, drive: 1.5, master: .62 };
const EV4 = [0, 180, 360, 540], EV5 = [0, 144, 288, 432, 576], EV6 = [0, 120, 240, 360, 480, 600];
const E = {
  // 1275 cc A-series four: small bore, cast manifold, a short quiet pipe; light, busy, a little tinny
  Mini: { hdr: [.32], exLen: 1.5, tailR: .6, exLP: 2300, mufF: 150, pulseW: 40, block: [[180, 5, .45], [420, 4, .4], [980, 3.5, .25]], intake: .7, intakeF: 330, drive: 1.6, mech: .5, master: .66 },
  // BDA 16-valve four on twin Weber carburettors: the induction bark is half the sound
  Escort: { hdr: [.5], exLen: 2.0, tailR: .8, exLP: 3600, mufF: 120, mufG: .35, pulseW: 30, intake: 1.25, intakeF: 300, intakeP: .2, drive: 1.9, gRasp: .8, mech: .5 },
  // narrow-angle V4: its firing is slightly lumpy, which gives the Lancia its burble
  Fulvia: { fire: [0, 193, 360, 553], hdr: [.38, .48], exLen: 1.7, tailR: .62, exLP: 2400, mufF: 135, pulseW: 38, lump: .9, intake: .6, intakeF: 280, drive: 1.5, mech: .55, block: [[160, 5, .5], [380, 4, .35], [900, 3.5, .2]] },
  // 2 litre twin-cam four, rally exhaust
  Fiat131: { hdr: [.52], exLen: 2.1, tailR: .78, exLP: 3300, mufF: 115, pulseW: 31, intake: .85, intakeF: 270, drive: 1.8, gRasp: .7 },
  // rear-engined Gordini four, short pipe pointing straight back
  Alpine: { hdr: [.4], exLen: 1.35, tailR: .8, exLP: 3400, mufF: 125, pulseW: 32, intake: .9, intakeF: 310, intakeP: .15, drive: 1.9, gRasp: .75 },
  // air-cooled flat six: even 120 degree firing, the cooling-fan whirr and a hard mechanical edge
  P911: { fire: EV6, hdr: [.58], exLen: 2.2, tailR: .66, exLP: 2700, mufF: 95, pulseW: 32, intake: .8, intakeF: 240, fan: .05, mech: .75, block: [[120, 5, .45], [300, 4, .4], [760, 3.5, .3], [1500, 3, .12]], drive: 1.5, master: .6 },
  // mid-mounted 65 degree V6: uneven firing, the intake roars right behind the driver's head
  Stratos: { fire: [0, 135, 240, 375, 480, 615], hdr: [.46, .62], exLen: 1.8, tailR: .72, exLP: 3300, mufF: 130, pulseW: 30, lump: .7, intake: 1.2, intakeF: 340, intakeP: .2, drive: 1.9, gRasp: .75, mech: .5, master: .6 },
  // 2.3 litre four with individual throttle bodies
  E30: { hdr: [.5], exLen: 2.1, tailR: .78, exLP: 3200, mufF: 118, pulseW: 30, intake: 1.4, intakeF: 360, intakeP: .25, drive: 1.9, gRasp: .85, mech: .55 },
  // turbo fours: the turbine takes the sting out of the exhaust (low exLP, less reflection), the compressor whistles
  R5: { hdr: [.34], exLen: 1.5, tailR: .52, engR: .3, exLP: 1900, mufF: 140, mufG: .45, pulseW: 38, turbo: .6, intake: .5, intakeF: 300, drive: 1.6, mech: .5 },
  Celica: { hdr: [.4], exLen: 2.0, tailR: .55, engR: .3, exLP: 1900, mufF: 110, pulseW: 38, turbo: .7, intake: .45, drive: 1.5 },
  Delta: { hdr: [.4], exLen: 2.0, tailR: .58, engR: .32, exLP: 2100, mufF: 112, pulseW: 36, turbo: .7, intake: .5, drive: 1.6 },
  // flat four on unequal-length headers: two short pipes, two long, so the pulses arrive unevenly: the Subaru rumble
  Impreza: { fire: EV4, hdr: [.3, .3, .78, .78], hdrR: -.5, exLen: 1.9, tailR: .6, engR: .32, exLP: 2300, mufF: 100, pulseW: 38, lump: 1.2, turbo: .75, intake: .5, drive: 1.7, block: [[130, 5, .55], [310, 4, .35], [760, 3.5, .2]], master: .64 },
  Lancer: { hdr: [.42], exLen: 2.0, tailR: .6, engR: .32, exLP: 2300, mufF: 108, pulseW: 36, turbo: .8, intake: .5, drive: 1.7, gRasp: .65 },
  EscortCos: { hdr: [.42], exLen: 2.1, tailR: .62, engR: .32, exLP: 2400, mufF: 105, pulseW: 36, turbo: .85, intake: .45, drive: 1.6 },
  // Group B: big turbo, almost no silencer, the engine just behind the driver
  P205: { hdr: [.36], exLen: 1.6, tailR: .8, engR: .3, exLP: 3900, mufF: 130, mufG: .25, pulseW: 30, turbo: .95, intake: .8, intakeF: 360, intakeP: .2, drive: 2.0, gRasp: .9, mech: .6 },
  RS200: { hdr: [.4], exLen: 1.7, tailR: .8, engR: .3, exLP: 3900, mufF: 125, mufG: .25, pulseW: 30, turbo: 1, intake: .85, intakeF: 340, intakeP: .2, drive: 2.0, gRasp: .9, mech: .6 },
  // inline five, 144 degrees between firings: the warble that only a five has
  Quattro: { fire: EV5, hdr: [.45], exLen: 2.3, tailR: .74, engR: .34, exLP: 3100, mufF: 100, mufG: .45, pulseW: 33, lump: .8, turbo: 1, intake: .6, drive: 1.8, gRasp: .75, block: [[125, 5, .55], [300, 4, .4], [720, 3.5, .22]], master: .62 },
  // supercharged and turbo-charged: a supercharger's whine under the turbo's whistle
  S4: { hdr: [.36], exLen: 1.7, tailR: .78, engR: .3, exLP: 3800, mufF: 128, mufG: .25, pulseW: 30, turbo: .9, super: 1, intake: .7, drive: 2.0, gRasp: .9, mech: .6 },
};
export const engineCfg = id => Object.assign({}, BASE, E[id] || E.Mini, { block: (E[id] || {}).block || BASE.block });
export const ENGINE_IDS = Object.keys(E);
