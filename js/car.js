// Cars: models, tyre-model physics, wheel animation, effects, AI driver, network ghost.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GRASS, KERB, ROAD, WALL, PIT } from './tracks.js';
import { buildWheel, sidewallDecals, treadTexture, RIM_STYLES, TYRE_STYLES, CAL_COLS } from './wheels.js';
export { RIM_STYLES, TYRE_STYLES, CAL_COLS };
import { getAsset } from './assets.js';

// top = top speed (m/s), acc = launch acceleration (m/s²), grip = tyre μ, rear = rear-axle grip bias
// (below 1 = tail-happy), loose = how much throttle steals rear grip, off = grip multiplier on grass/sand
import { CARS, TUNE } from './config.js';
export { CARS };
export const RIMS = [0, 0xf3f4f6, 0x111214, 0xb87333, 0xf2c200, 0xe3262e, 0x19a7ce], TINTS = [0, 0x030304, 0x0b2f52, 0x5a4410, 0x4a0d14], GLOWS = [0, 0x19a7ce, 0xff2bd0, 0x7dff9b, 0xffc21a, 0xe3262e, 0xffffff];
// garage set-up -> the multipliers the physics uses
export function tuneOf(spec, t) {
  t = Object.assign({ gear: 0, aero: 0, brake: 0, susp: 0, split: 0, diff: 0, tyre: 'medium' }, t || {}); const S = TUNE.setup, c = S.compound[t.tyre] || S.compound.medium;
  // torque split (AWD only): the front share of drive torque. Differential: how hard the two wheels of an axle are tied together. A tighter diff puts more power down out of a corner
  // but pushes the nose wide; an open diff turns in freely but the inside wheel spins and traction is lost.
  const sBase = spec.splitF ?? clamp(.3 + (spec.fw - .4) * .5, .3, .42), dBase = spec.klass === 'Group B' ? .55 : spec.klass === 'Group A' ? .5 : .22;
  return { acc: 1 + S.gearAcc * t.gear, top: (1 - S.gearTop * t.gear) * (1 - S.aeroTop * t.aero), aero: Math.max(.1, 1 + S.aeroDown * t.aero), bias: .7 + S.biasStep * t.brake, rollF: spec.rollF + S.rollStep * t.susp, grip: c[0], wear: c[1], tOpt: c[2], tSpan: c[3], loose: c[4], split: clamp(sBase + .06 * t.split, .18, .6), diff: clamp(dBase + .2 * t.diff, 0, 1), comp: t.tyre };
}
export const PAINTS = [0x0f5c4a, 0x8a1c2b, 0x2b2f8a, 0xff9d2e, 0xd81e2c, 0xff6a13, 0xf2c200, 0x2fb457, 0x19a7ce, 0x1f6feb, 0x7b3fe4, 0xff4fa3, 0xf2f2f2, 0x1c1f26];

const FLATQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)), ab2 = Math.abs, smooth2 = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const WK = ['FL', 'FR', 'RL', 'RR'];
const LAMP = {};
const DUST = [new THREE.Color(0x5a4630), new THREE.Color(0xc9a66b)];
let protos = null;

export async function loadCars() {
  // The eighteen rally cars live in one file. Every car is a group: a textured body (glass split out) and four separate wheel objects.
  const gltf = await new GLTFLoader().parseAsync(await getAsset('cars.glb'), '');
  protos = {}; for (const g of gltf.scene.children) protos[g.name] = g;
  for (const s of CARS) { const p = protos[s.id]; s.model = s.id; s.body = 'k'; s.wing = p && p.userData.wing ? 1 : 0; }
}

const shared = {};
// The livery is painted by the shader from the body's own shape, so its edges are crisp on any model: a roof panel, twin stripes
// nose to tail, and a white roundel on each door for the race number.
let TYT = null;
function tyreTextMat() {      // printed sidewall lettering, drawn once on a ring-shaped decal
  if (TYT) return TYT; const cv = document.createElement('canvas'); cv.width = cv.height = 256; const k = cv.getContext('2d'); k.translate(128, 128); k.fillStyle = '#fff'; k.font = '900 19px Arial Black, Arial, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle';
  for (const [base, txt] of [[0, 'TAFHEET RACING'], [Math.PI, 'SUPER · 2026']]) for (let i = 0; i < txt.length; i++) { k.save(); k.rotate(base + (i - (txt.length - 1) / 2) * .17); k.translate(0, -113); k.fillText(txt[i], 0, 0); k.restore(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; TYT = new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: .9, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide }); TYT.name = 'tyretext'; return TYT;
}
// The pack's cars carry their real liveries in a texture. Recolouring swaps only the car's main body colour for the chosen paint
// (everything within a colour distance of the livery's base colour), so sponsors, stripes and numbers stay as drawn.
function texMaterial(src, info, paintHex, recolor) {
  const m = src.clone(); m.vertexColors = true; m.roughness = .46; m.metalness = .08; m.envMapIntensity = .55; m.side = THREE.DoubleSide; m.name = 'tex';
  const b = info.base || [.9, .9, .9], U = m.userData.rc = { uBase: { value: new THREE.Color().setRGB(b[0], b[1], b[2], THREE.SRGBColorSpace) }, uPaint: { value: new THREE.Color(paintHex) }, uOn: { value: recolor ? 1 : 0 },
    uDirt: { value: 0 }, uMud: { value: 0 }, uScr: { value: Array.from({ length: 6 }, () => new THREE.Vector4()) } };
  m.onBeforeCompile = sh => { Object.assign(sh.uniforms, U);
    sh.vertexShader = 'varying vec3 vLoc;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vLoc = position;');
    sh.fragmentShader = 'uniform vec3 uBase, uPaint; uniform float uOn, uDirt, uMud; uniform vec4 uScr[6]; varying vec3 vLoc;\n' + sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
    if (uOn > .5) { vec3 cs = pow(max(diffuseColor.rgb, vec3(0.)), vec3(.4545)), bs = pow(max(uBase, vec3(0.)), vec3(.4545)); float mm = 1. - smoothstep(.11, .22, distance(cs, bs));
      float lr = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722)) / max(dot(uBase, vec3(.2126, .7152, .0722)), .04); diffuseColor.rgb = mix(diffuseColor.rgb, uPaint * clamp(lr, .12, 1.5), mm); }
    // dirt and mud: heavier low on the body and around the wheel arches, broken up with cell noise
    { float h = clamp(vLoc.y / 1.15, 0., 1.), low = 1. - smoothstep(.16, .78, h);
      float n1 = fract(sin(dot(floor(vLoc.xz * 7. + vLoc.y * 3.), vec2(12.9898, 78.233))) * 43758.5453), n2 = fract(sin(dot(floor(vLoc.xz * 17. + vLoc.y * 8.), vec2(39.3468, 11.135))) * 24634.6345);
      float dm = clamp(uDirt * (.3 + low * 1.1) * (.5 + n1 * .8), 0., .85), mmk = clamp(uMud * (.25 + low * 1.5) * (.3 + n2 * .95) - h * .3, 0., .96);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.30, .22, .13), dm * .8); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.13, .085, .045), mmk); }
    // scratches: crossed fine lines of bare metal around each recorded impact point
    for (int i = 0; i < 6; i++) { vec4 s = uScr[i]; if (s.w > 0.) { float dd = length(vec2((vLoc.z - s.z) * .6, (vLoc.y - s.y) * 1.5)) + length(vec2((vLoc.x - s.x) * .5, 0.)) * .5, mk = smoothstep(s.w, 0., dd);
      float ln = max(smoothstep(.93, 1., abs(sin(vLoc.y * 41. + vLoc.z * 2.3 + vLoc.x * 1.7))), smoothstep(.95, 1., abs(sin(vLoc.y * 29. + vLoc.x * 3.1 - vLoc.z * 1.2))));
      diffuseColor.rgb = mix(diffuseColor.rgb * (1. - mk * .18), vec3(.34, .35, .39), ln * mk); } }`); };
  m.customProgramCacheKey = () => 'texrc2'; return m;
}
export const LIVC = [0xf2f2ee, 0x15171c, 0xe3262e, 0x1c57c8, 0xffc21a, 0x19a7ce, 0xff6a13, 0x2fb457];
const ROOFP = {}, FITS = {};      // centre-line roof heights per car model, measured once with rays
function livery(m) {
  const U = m.userData.liv = { uH: { value: 1 }, uL: { value: new THREE.Color(0xf2f2ee) }, uRoof: { value: 0 }, uStripe: { value: 0 }, uDoor: { value: 0 }, uFlash: { value: 0 }, uNose: { value: 0 }, uL2: { value: new THREE.Color(0x1c57c8) }, uZ: { value: 2 }, uDy: { value: .8 }, uDz: { value: -.1 }, uAsp: { value: 1 } };
  m.onBeforeCompile = sh => { Object.assign(sh.uniforms, U);
    sh.vertexShader = 'varying vec3 vOP; varying vec3 vON;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vOP = position; vON = normal;');
    sh.fragmentShader = 'varying vec3 vOP; varying vec3 vON; uniform float uH, uRoof, uStripe, uDoor, uFlash, uNose, uZ, uDy, uDz, uAsp; uniform vec3 uL, uL2;\n' + sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
      float lr = smoothstep(uH * .86, uH * .88, vOP.y) * step(.55, abs(vON.y)) * uRoof;
      float ls = (1. - smoothstep(.06, .07, abs(abs(vOP.x) - .19))) * step(.25, abs(vON.y)) * uStripe;
      float ld = (1. - smoothstep(.3, .315, length(vec2((vOP.z - uDz) * uAsp, vOP.y - uDy)))) * step(.7, abs(vON.x)) * uDoor;
      float lf = uFlash * step(.55, abs(vON.x)) * (1. - smoothstep(.15, .19, abs(vOP.y * 1.7 - vOP.z * .8 - uH * .3)));
      float ln = uNose * step(uZ * .5, vOP.z) * step(.2, vON.y + abs(vON.z));
      diffuseColor.rgb = mix(mix(mix(diffuseColor.rgb, uL, max(lr, ls)), uL2, max(lf, ln)), vec3(.96), ld);`); };
  m.customProgramCacheKey = () => 'livery'; return m;
}
function mats(color) {
  if (!shared.tire) {
    shared.tire = new THREE.MeshStandardMaterial({ color: 0x0d0d0e, roughness: .86, bumpMap: treadTexture(), bumpScale: 2.2 });      // rubber with a tread bump map
    shared.steelm = new THREE.MeshStandardMaterial({ color: 0xd9dde4, metalness: 1, roughness: .15 }); shared.cap = new THREE.MeshStandardMaterial({ color: 0x17181c, metalness: .65, roughness: .28 }); shared.disc = new THREE.MeshStandardMaterial({ color: 0x80848c, metalness: .92, roughness: .4 });
    shared.rim = new THREE.MeshStandardMaterial({ color: 0xc9ccd2, metalness: .95, roughness: .28 });
    shared.rimDark = new THREE.MeshStandardMaterial({ color: 0x2a2c30, metalness: .8, roughness: .4 });
    shared.body = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: .6, metalness: .2 });
    shared.trim = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: .45, metalness: .5 });
    shared.window = new THREE.MeshBasicMaterial({ color: 0x07080a });      // exactly the surface of the black window texture beside it, so a pane never shades in halves      // blue-grey glass that stands out from the body   // dark tinted glass: reads as a window, not as chrome
    shared.front = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3d0, emissiveIntensity: 1.1 });
    shared.tyretext = tyreTextMat();
    shared.vcol = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .5, metalness: .05 });      // parts that keep the colours the model was drawn with
    shared.stripe = new THREE.MeshPhysicalMaterial({ color: 0xf2f3f5, metalness: .2, roughness: .35, clearcoat: 1, clearcoatRoughness: .1 });      // painted stripes and race numbers
    shared.silver = new THREE.MeshStandardMaterial({ color: 0xb9bdc4, metalness: .85, roughness: .32 });
    shared.accent = new THREE.MeshStandardMaterial({ color: 0xd3221c, metalness: .3, roughness: .4 });                                              // brake calipers and red trim
  }
  for (const k in shared) shared[k].side = THREE.DoubleSide;
  const two = m => { m.side = THREE.DoubleSide; return m; };
  return {
    ...shared,
    paint: livery(two(new THREE.MeshPhysicalMaterial({ color, metalness: .72, roughness: .3, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1.25 }))),      // metallic paint under a clear coat
    paint2: two(new THREE.MeshPhysicalMaterial({ color: new THREE.Color(color).multiplyScalar(.6), metalness: .55, roughness: .36, clearcoat: 1, clearcoatRoughness: .1 })),   // the second body tone follows the paint, darker
    rear: two(new THREE.MeshStandardMaterial({ color: 0x8a0a0a, emissive: 0xff1a1a, emissiveIntensity: .5 })),
  };
}

// Cracked glass: a procedural pattern (the edges of a Voronoi diagram, like crazed laminated glass) drawn into the window material. Each pane cracks with the damage on its own side of the
// car (windscreen with the front, rear glass with the rear, side glass with that side): a few cracks at first, a shattered web with a dense star at the impact when it is badly hit.
let CAR_ENV = null; export function setCarEnv(t) { CAR_ENV = t; }      // the environment map that the paint and glass reflect
const CRACK_GLSL = `
  float ch(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  vec2 ch2(vec2 p){ return vec2(ch(p), ch(p + 19.19)); }
  float crackAt(vec2 cp, float dmg){
    vec2 g = cp * 6.5, i = floor(g), f = fract(g); float d1 = 8., d2 = 8.;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) { vec2 b = vec2(float(x), float(y)); vec2 r = b + ch2(i + b) - f; float d = dot(r, r); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
    float edge = sqrt(d2) - sqrt(d1), line = 1. - smoothstep(0., .07, edge);
    float on = step(1. - dmg * 1.2, ch(floor(g * .6) + 3.7)), star = smoothstep(.9, .0, length(cp - vec2(.05, 0.)) * (1.7 - dmg));
    return line * max(on, star * step(.1, dmg));
  }`;
function crackify(mat, U) {
  if (!mat || mat.userData.cracked) return; mat.userData.cracked = true;
  mat.onBeforeCompile = sh => { sh.uniforms.uCrack = U;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vON = normal;');
    const hook = sh.fragmentShader.includes('#include <opaque_fragment>') ? '#include <opaque_fragment>' : '#include <output_fragment>';
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON; uniform vec4 uCrack;\n' + CRACK_GLSL).replace(hook, 'float cside = vON.z > .5 ? uCrack.x : vON.z < -.5 ? uCrack.y : vON.x > 0. ? uCrack.z : uCrack.w;\n  if (cside > .08) { vec2 cp = abs(vON.z) > .5 ? vOP.xy : vec2(vOP.z, vOP.y); outgoingLight = mix(outgoingLight, vec3(.88, .92, .97), crackAt(cp, cside) * .9); }\n  ' + hook); };
  mat.customProgramCacheKey = () => 'crack'; mat.needsUpdate = true;
}
export class Car {
  constructor(spec, color = spec.color, name = 'Driver', up, look, tune, wantLight = false) {
    this.wantLight = wantLight;
    this.isAI = !!(look && look.ai); this.spec = spec; this.name = name; this.color = color; this.up = up || { eng: 0, tyre: 0, nitro: 0, armor: 0 };
    this.fuel = 1; this.fuelK = 1; this.parts = { engine: 0, gearbox: 0, wheels: [0, 0, 0, 0] }; this.gone = [false, false, false, false]; this.partK = 1; this.pace = 1; this.bopP = 1; this.bopG = 1; this.shock = 0; this.tc = true; this.abs = true; this.steerK = 1; this.wspinF = 0; this.lost = []; this.noNitro = false; this.assistK = 0; this.inPit = false; this.pitZone = false; this.aF = 0; this.useF = 0; this.useR = 0;
    this.dirt = 0; this.dirtShown = 0; this.mud = 0; this.mudShown = 0; this.bT = 0; this.eT = .25; this.driftMode = false; this.muW = [1, 1, 1, 1]; this.crackU = { value: new THREE.Vector4(0, 0, 0, 0) }; this.hk = null; this.sus = null; this.stW = null; this.landEvt = 0; this.sat = 0; this.scr = []; this.scrN = 0; this.tT = TUNE.tyreT.start; this.tmpK = 1; this.lz = 0; this.wetTyres = false; this.baseColor = new THREE.Color(color);
    const proto = protos[spec.model || spec.id], root = this.root = new THREE.Group(); root.rotation.order = 'YXZ';
    const chassis = this.chassis = new THREE.Group(); root.add(chassis);
    this.m = mats(color); this.m.window = new THREE.MeshPhysicalMaterial({ color: 0x04060a, metalness: .55, roughness: .045, clearcoat: 1, clearcoatRoughness: .02, envMap: CAR_ENV, envMapIntensity: 1.7, side: THREE.DoubleSide }); this.m.paint.envMap = CAR_ENV; this.m.paint.envMapIntensity = 2.1; this.m.paint.roughness = .26; this.m.disc = this.m.disc.clone(); this.m.disc.emissive = new THREE.Color(1, .32, .04); this.m.disc.emissiveIntensity = 0; this.m.caliper = new THREE.MeshStandardMaterial({ color: CAL_COLS[0], roughness: .32, metalness: .35, side: THREE.DoubleSide }); this.wheels = {}; this.bodyMeshes = []; this.texCar = false;
    if (proto.userData.rim != null) { const rm = this.m.rim.clone(); rm.color.setHex(proto.userData.rim); this.m.rim = rm; }      // each car's own wheel colour
    this.dmg = { front: 0, rear: 0, left: 0, right: 0 }; this.tyre = 1; this.dmgScale = 1; this.wear = 1;
    for (const child of proto.children) {
      const c = child.clone(true);
      c.traverse(o => {
        if (!o.isMesh) return; o.castShadow = true;
        const n = o.userData.kind = o.material.name;
        if (n === 'tex') { this.texCar = true; this.tex = this.tex || {}; const k = o.material.uuid; o.material = this.tex[k] || (this.tex[k] = texMaterial(o.material, proto.userData, color, color !== spec.color)); }
        else o.material = n === 'paint' ? this.m.paint : n === 'tire' ? this.m.tire : n === 'rim7' ? this.m.rim : n === 'rim6' ? this.m.rimDark : this.m[n] || this.m.body;
        if (n !== 'tex' && o.geometry.attributes.color) { const k = o.material.uuid; this.vc = this.vc || {}; if (!this.vc[k]) { const src = o.material; this.vc[k] = src.clone(); this.vc[k].vertexColors = true; if (src.userData.liv) { this.vc[k].userData.liv = src.userData.liv; this.vc[k].onBeforeCompile = src.onBeforeCompile; this.vc[k].customProgramCacheKey = () => 'liveryvc'; } } o.material = this.vc[k]; }   // models that carry their own panel shading keep it
      });
      if (c.name.startsWith('body')) { chassis.add(c); c.traverse(o => { if (o.isMesh) { o.geometry = o.geometry.clone(); o.userData.orig = o.geometry.attributes.position.array.slice(); this.bodyMeshes.push(o); } }); }
      else { const pivot = new THREE.Group(); pivot.position.copy(c.position); c.position.set(0, 0, 0); pivot.add(c); root.add(pivot); this.wheels[c.name.slice(6, 8)] = { pivot, mesh: c, x: pivot.position.x, y: pivot.position.y, z: pivot.position.z }; }
    }
    const w = this.wheels; { const L = w.FL.z - w.RL.z, fw = spec.fw || .5; this.a = L * (1 - fw); this.b = L * fw; } this.tw = w.FL.x; this.R = w.RL.y;      // centre of mass placed by the car's real front/rear weight split
    { const B = TUNE.body[spec.body] || TUNE.body.coupe; this.T = { w: TUNE.toy.w * B.w, h: TUNE.toy.h * B.h, l: TUNE.toy.l * B.l, wheel: TUNE.toy.wheel * B.wheel }; }
    { const T = this.T; chassis.scale.set(T.w, T.h, T.l); for (const k in w) { const q = w[k]; q.mesh.scale.setScalar(T.wheel); q.y *= T.wheel; q.x *= T.w; q.z *= T.l; q.pivot.position.set(q.x, q.y, q.z); } this.rideY = this.R * (T.wheel - T.h); this.R *= T.wheel; }
    const box = new THREE.Box3().setFromObject(chassis);
    { if (!LAMP.aoTex) { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 6, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,.85)'); g.addColorStop(.6, 'rgba(0,0,0,.45)'); g.addColorStop(1, 'rgba(0,0,0,0)'); k.fillStyle = g; k.fillRect(0, 0, 64, 64); LAMP.aoTex = new THREE.CanvasTexture(c); LAMP.aoM = new THREE.MeshBasicMaterial({ map: LAMP.aoTex, transparent: true, opacity: .55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }); }
      const ao = new THREE.Mesh(new THREE.PlaneGeometry((box.max.x - box.min.x) * 1.45, (box.max.z - box.min.z) * 1.25), LAMP.aoM); ao.rotation.x = -Math.PI / 2; ao.position.set(0, .03, (box.max.z + box.min.z) / 2); ao.renderOrder = 1; root.add(ao); }   // soft contact shadow: the car sits on the road instead of floating
    this.tuneBase = tune || {}; this.tn = tuneOf(spec, tune); this.wear = this.tn.wear; if (tune && tune.tyre === 'rain') this.wetTyres = true; this.dress(look);
    this.hw0 = (box.max.x - box.min.x) / 2; this.zf0 = box.max.z; this.zr0 = -box.min.z; this.pd = proto.userData; this.makeLamps();
    { const T = this.T, e = proto.userData.exhaust; this.exhL = e && e.length ? e.map(p => p.slice()) : null; this.exh = this.exhL ? this.exhL.map(p => [p[0] * T.w, p[1] * T.h, p[2] * T.l]) : [[(box.max.x - box.min.x) * .22, (box.max.y) * .26, box.min.z], [-(box.max.x - box.min.x) * .22, (box.max.y) * .26, box.min.z]]; }
    this.door = proto.userData.door ? proto.userData.door.slice() : null;
    this.hw = (box.max.x - box.min.x) / 2 - .05; this.zf = box.max.z - .1; this.zr = -box.min.z - .1; this.top = box.max.y;
    this.I = spec.mass * this.a * this.b * spec.yawK; this.Ic = spec.mass * ((this.a + this.b) * .31) ** 2; this.h = .4;     // centre-of-mass height: sets how much weight moves to the rear under power and to the front under braking
    this.wsurf = [ROAD, ROAD, ROAD, ROAD]; this.lastSk = [null, null]; this.spin = [0, 0];
    this.reset(0, 0, 0);
  }
  reset(x, z, th) {
    this.x = this.px = x; this.z = this.pz = z; this.th = this.pth = th; this.vx = this.vz = this.r = 0; this.steer = 0; this.axS = this.ayS = 0; this.sus = null;
    this.slipR = 0; this.wspin = 0; this.locked = false; this.grass = 0; this.nitro = 1; this.nitroOn = false; this.braking = false;
    this.rollD = this.pitchD = 0; this.di = 0; this.rpmR = 900; this.gearI = 1; this.shiftT = 0; this.lead = 0; this.draft = 0; this.oil = 0; this.lockF = false; this.y = 0; this.pitch = this.roll = 0; this.stuck = 0; this.lastSk = [null, null]; this.emitAcc = 0; this.rpm = 0; this.gear = 1;
  }
  get speed() { return Math.hypot(this.vx, this.vz); }
  get vf() { return this.vx * Math.sin(this.th) + this.vz * Math.cos(this.th); }
  get beta() { const sn = Math.sin(this.th), cs = Math.cos(this.th); return Math.atan2(this.vx * cs - this.vz * sn, Math.abs(this.vx * sn + this.vz * cs)); }

  // ---- one physics sub-step. inp: {steer (+left), throttle, brake, hand, nitro}
  // Four-corner suspension. The body (heave, pitch, roll) rides on a spring and damper at each wheel, with an anti-roll bar on each axle. The road under each wheel (terrain, kerbs,
  // rough ground) moves that wheel, the springs carry the weight, and the force at each corner IS that wheel's tyre load: so weight transfer under braking, power and cornering,
  // kerb strikes, crests, wheels coming off the ground and landings all come out of the same physics, and the body attitude you see is the real one.
  suspend(dt, track, m, down, sn, cs, speed) {
    const g = 9.81, a = this.a, b = this.b, L = a + b, tw = this.tw, h = this.h, TN = this.tn; let S = this.sus; const gy0 = track.height(this.x, this.z);
    if (!S) S = this.sus = { z: gy0, vz: 0, p: 0, vp: 0, r: 0, vr: 0, g: null, fz: [m * g * b / L / 2, m * g * b / L / 2, m * g * a / L / 2, m * g * a / L / 2], alpha: [0, 0, 0, 0], odo: 0, air: 0, minV: 0 };
    S.odo += speed * dt; const kF = m * b / L / 2 * (6.283 * 1.55) ** 2, kR = m * a / L / 2 * (6.283 * 1.75) ** 2, k = [kF, kF, kR, kR], mc = [m * b / L / 2, m * b / L / 2, m * a / L / 2, m * a / L / 2];
    const cdp = k.map((kk, i) => 2 * .55 * Math.sqrt(kk * mc[i])), rest = k.map((kk, i) => mc[i] * g / kk), kaF = kF * TN.rollF * 1.6, kaR = kR * (1 - TN.rollF) * 1.6, FC = [[a, tw], [a, -tw], [-b, tw], [-b, -tw]], gnd = [], comp = [], F = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x, sf = this.wsurf[i]; let gh = track.height(wx, wz);
      if (sf === KERB) gh += .016 * (1 + Math.sin(S.odo * 8.5 + i * 1.9)); else if (sf === GRASS || sf === WALL) gh += .01 * Math.sin(S.odo * 5.2 + i * 2.3) * Math.min(1, speed / 12); gnd.push(gh); }
    if (!S.g) S.g = gnd.slice();
    for (let i = 0; i < 4; i++) { const hc = S.z + S.p * FC[i][0] + S.r * FC[i][1], vh = S.vz + S.vp * FC[i][0] + S.vr * FC[i][1]; comp[i] = gnd[i] + rest[i] - hc; F[i] = k[i] * comp[i] + cdp[i] * ((gnd[i] - S.g[i]) / dt - vh); }
    const dFf = kaF * (comp[0] - comp[1]), dFr = kaR * (comp[2] - comp[3]); F[0] += dFf; F[1] -= dFf; F[2] += dFr; F[3] -= dFr;      // anti-roll bars
    for (let i = 0; i < 4; i++) { if (comp[i] > .12) F[i] += k[i] * 10 * (comp[i] - .12); if (comp[i] < -.1) F[i] = 0; F[i] = Math.max(0, F[i]); }      // bump stops, and a wheel that has left the ground carries nothing
    let Fs = 0, Mp = 0, Mr = 0, nC = 0; for (let i = 0; i < 4; i++) { Fs += F[i]; Mp += F[i] * FC[i][0]; Mr += F[i] * FC[i][1]; if (F[i] > 1) nC++; }
    Mp += this.axS * m * h - down * .45 * a + down * .55 * b; Mr += this.ayS * m * h; const Ip = m * (L * .3) ** 2, Ir = m * (tw * .9) ** 2, vz0 = S.vz;
    S.vz += ((Fs - m * g - down) / m) * dt; S.z += S.vz * dt; S.vp += Mp / Ip * dt; S.p = clamp(S.p + S.vp * dt, -.35, .35); S.vr += Mr / Ir * dt; S.r = clamp(S.r + S.vr * dt, -.35, .35); S.g = gnd;
    if (nC === 0) { S.air += dt; S.minV = Math.min(S.minV, S.vz); } else { if (S.air > .12 && S.minV < -2.5) this.landEvt = -S.minV; S.air = 0; S.minV = 0; }
    S.fz = F; this.airborne = S.air > .08; return F;
  }
  step(dt, inp, track, live, boost = 1) {
    const s = this.spec, m = s.mass + TUNE.fuel.tankKg * this.fuel, a = this.a, b = this.b, L = a + b, g = 9.81, U = this.up, x0 = this.x, z0 = this.z, TY = TUNE.tyre, TN = this.tn, PC = TUNE.pace[this.pace];
    this.px = x0; this.pz = z0; this.pth = this.th;
    const sn = Math.sin(this.th), cs = Math.cos(this.th);
    const vf = this.vx * sn + this.vz * cs, vl = this.vx * cs - this.vz * sn, speed = Math.hypot(vf, vl), sg = vf >= 0 ? 1 : -1;

    const Tm = this.tT, tLo = TN.tOpt - TN.tSpan, tHi = TN.tOpt + TN.tSpan, tmpK = this.tmpK = Tm < tLo ? 1 - clamp((tLo - Tm) / 60, 0, 1) * .28 : Tm > tHi ? 1 - clamp((Tm - tHi) / 50, 0, 1) * .3 : 1, wet = track.wet || 0, D = this.dmg, P = this.parts, PT = TUNE.parts, wdrag = Math.min(.3, P.wheels.reduce((a, w) => a + (w > PT.flatAt ? PT.flatDrag : 0), 0)), gripK = this.bopG * s.grip * TN.grip * (1 + .035 * U.tyre) * (.72 + .28 * this.tyre) * tmpK * (this.oil > 0 ? .42 : 1) * TUNE.gripScale;
    const rainLoss = this.wetTyres ? .07 * wet + .07 * (1 - wet) : .27 * wet;      // wets: a little slower in the dry, far better in the rain
    this.oil = Math.max(0, this.oil - dt);
    // what is under each wheel
    let muF = 0, muR = 0, gr = 0, pitN = 0;
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]], sf = track.surf(this.x + sn * w.z + cs * w.x, this.z + cs * w.z - sn * w.x);
      this.wsurf[i] = sf; if (sf === PIT) pitN++; let mu = sf === ROAD || sf === PIT ? 1 - rainLoss : sf === KERB ? .95 - rainLoss * 1.2 : s.off * (1 - .15 * wet); if (sf === GRASS) mu *= TN.loose; if (sf === GRASS || sf === WALL) gr += .25;
      const wm = mu * (1 - PT.wheelGrip * P.wheels[i]); this.muW[i] = wm; if (i < 2) muF += wm / 2; else muR += wm / 2;   // a bent or flat wheel grips less
    }
    this.grass = gr; this.inPit = pitN >= 2 || this.pitZone;

    // steering: lock shrinks with speed; a little automatic counter-steer keeps slides catchable
    const beta = speed > 4 && vf > 0 ? Math.atan2(vl, vf) : 0;
    let target = inp.steer * TUNE.steer.lock / (1 + speed * TUNE.steer.speedK);
    const ab = Math.abs(beta);
    this.shock = Math.max(0, this.shock - dt); const K = this.shock > 0 ? 0 : this.assistK;   // a big hit knocks the aids out for a moment
    if (K > 0 && vf > 5) { target = target * (1 - K * clamp((ab - .3) * 1.6, 0, .8)) + K * clamp(beta * .75, -.5, .5); }
    if (this.driftMode && vf > 4) { const cb = clamp((ab - .5) / .5, 0, 1) * .92; target = target * (1 - cb) + clamp(beta * 1.15, -.6, .6) * cb; }      // drift control: past about 22 deg of slide the steering blends towards counter-steer (fully by about 50 deg), so the angle is held, not wound up into a spin
    if (speed > 3) target += (D.left - D.right) * .05 + (P.wheels[0] - P.wheels[1]) * PT.wheelPull + D.front * .02 * Math.sin(this.x * .7 + this.z * .9);   // bent suspension pulls and shimmies
    target = clamp(target, -.62, .62);
    const sr = (inp.steer === 0 ? TUNE.steer.returnRate : TUNE.steer.rate * this.steerK / (1 + speed * TUNE.steer.rateSpeedK)) * dt;
    this.steer += clamp(target - this.steer, -sr, sr);

    // axle loads with longitudinal weight transfer + downforce
    const down = s.aero * TN.aero * speed * speed, Fz = this.suspend(dt, track, m, down, sn, cs, speed), fz0F = m * g * b / L / 2, fz0R = m * g * a / L / 2;
    // each tyre's grip falls a little as its own load rises (a doubly loaded tyre grips less than twice as much): this, with the load moving between the wheels, is the real source of understeer and oversteer
    const KS = TY.loadSens, lsI = i => clamp(1 - KS * (Fz[i] / (i < 2 ? fz0F : fz0R) - 1), .55, 1.2), lw = [0, 1, 2, 3].map(i => Fz[i] * lsI(i)), Nf = Math.max(Fz[0] + Fz[1], m * g * .12), Nr = Math.max(Fz[2] + Fz[3], m * g * .12), ltF = clamp((lw[0] + lw[1]) / Nf, .5, 1.1), ltR = clamp((lw[2] + lw[3]) / Nr, .5, 1.1);

    // engine, brakes, reverse
    let thr = live ? inp.throttle : 0, brk = live ? inp.brake : 1;
    if (this.fuel <= 0) thr = 0;
    { const DR = TUNE.drift, on = this.forceDrift || this.driftable && Math.abs(inp.steer) > .92 && thr > .3 && speed > DR.minSpeed && vf > 0; this.di += ((on ? 1 : 0) - this.di) * Math.min(1, dt * (on ? DR.build : DR.decay)); }   // drift intent
    const burn = this.burn = live && thr > .8 && brk > .5 && speed < 5 && s.drive !== 'fwd';     // brake + throttle from rest: a burnout
    if (this.capV && vf > this.capV) { thr = 0; brk = Math.max(brk, Math.min(.8, (vf - this.capV) * .2)); }      // safety-car speed limit
    if (this.inPit) { const lim = TUNE.pit.limit; if (vf > lim + .5) { thr = 0; brk = Math.max(brk, .55); } else if (vf > lim - 1.2) thr = Math.min(thr, .12); }   // pit-lane speed limiter
    const rev = live && brk > 0 && thr === 0 && vf < 1.2;
    const nit = this.nitroOn = !!(inp.nitro && !this.noNitro && this.nitro > 0 && thr > 0 && live && vf > 3);
    if (nit) this.nitro = Math.max(0, this.nitro - dt / (3.2 * (1 + .25 * U.nitro)));
    const vmax = s.top * TN.top * (1 + .04 * U.eng) * (nit ? 1.16 : 1) * (gr > .5 ? .55 : 1) * (1 - .1 * (D.front + D.rear)) * (1 - PT.gearboxTop * P.gearbox);
    if (K > 0 && ab > .42) thr *= 1 - K * (1 - clamp(1 - (ab - .42) / .3, .2, 1));
    if (this.driftMode && ab > .85) thr *= 1 - clamp((ab - .85) / .35, 0, .8);      // and the power eases off beyond about 40 deg     // drift-angle hold: ease the power before a slide becomes a spin
    const dm0 = this.driftMode ? 1 : 0, hotK = (this.eT > 1 ? Math.max(.35, 1 - (this.eT - 1) * 1.4) : 1) * (1 + .35 * dm0);      // overheating cuts power; drift mode adds torque
    let Fdrive = rev ? -brk * s.acc * m * .5 * clamp(1 + vf / 12, 0, 1) : thr * s.acc * TN.acc * hotK * (1 + .06 * U.eng) * (1 + .12 * this.draft) * m * boost * Math.max(PT.limp, 1 - PT.enginePower * P.engine) * (1 - .2 * P.gearbox) * (nit ? 1.5 : 1) * Math.min(1, s.pw / (s.acc * m) / Math.max(vf, 1)) * clamp(1 - (vf / vmax) ** 8, 0, 1);   // traction-limited low down, power-limited above ~58 km/h
    Fdrive *= TUNE.enginePower * this.bopP * PC.pow * (this.shiftT > 0 ? .2 : 1); if (burn) Fdrive *= .3;
    // exhaust pops: rare, short, and only on cars that have them (turbo or tuned). A cooldown stops bursts chaining into a flame that never goes out.
    this.bfCool = Math.max(0, (this.bfCool || 0) - dt); const popper = s.pops || s.turbo;
    if (popper && this.bfCool <= 0 && this._thr > .75 && thr < .1 && this.rpm > .66 && speed > 14 && Math.random() < .5) { this.backfire = .07 + Math.random() * .05; this.popEvt = 1; this.bfCool = 1.6 + Math.random() * 2.4; }
    else if (popper && this.bfCool <= 0 && this.shiftEvt > 0 && this.rpm > .72 && thr > .75 && Math.random() < .4) { this.backfire = .06 + Math.random() * .04; this.bfCool = 1.4 + Math.random() * 2; }
    this._thr = thr; this.backfire = Math.max(0, (this.backfire || 0) - dt);
    const bf = rev ? 0 : Math.min(brk * s.brake * TUNE.brakeScale * m * g * clamp((muF + muR) * .5 * tmpK * 1.12, .3, 1), m * Math.abs(vf) / dt);      // the surface and the tyre temperature limit how hard you can brake
    this.braking = brk > .1 && !rev;
    const dm = dm0, dmk = s.drive === 'rwd' ? 1 : s.drive === 'awd' ? .4 : .12, dF = s.drive === 'fwd' ? 1 : s.drive === 'awd' ? TN.split : 0, crn = clamp(Math.abs(this.ayS) / (g * .8), 0, 1) * clamp(thr, 0, 1), trac = 1 - (1 - TN.diff) * .2 * crn, und = 1 - TN.diff * .1 * crn;      // diff: open loses traction out of corners, locked pushes the nose wide
    const capF = (1 + dm * .12) * muF * gripK * Nf * ltF * (s.drive === 'fwd' ? 1.2 : 1) * und * (dF > .5 ? trac : 1 - (1 - trac) * dF) * (1 + TUNE.slowTurn * clamp(-this.axS / 8, 0, 1)), capR = (1 - dm * dmk * (.06 + .24 * clamp(thr, 0, 1))) * muR * gripK * s.rear * TUNE.rearBias * Nr * ltR * (1 - (1 - trac) * (1 - dF)) * (1 + TN.diff * .03 * crn) * (1 - (this.driftCut || TUNE.drift.rearCut) * this.di) * (this.abs ? 1 + .5 * brk : 1);   // with ABS on, brake force is shared so the rear stays planted while you brake and turn
    this.wspinF = dF > 0 && !this.tc ? Math.max(0, (Fdrive * dF - capF) / capF) : 0; this.wspin = 0; this.locked = false;
    let FxF = clamp(Fdrive * dF - sg * bf * TN.bias, -capF, capF), FxR = Fdrive * (1 - dF) - sg * bf * (1 - TN.bias);

    // Four tyres. Each has its own load, its own slip angle (from the car's speed, its spin and where the tyre is: the front wheels also carry the Ackermann steering angle, the inner
    // one turning more than the outer), its own relaxation lag (a tyre takes a fraction of a second to build its side force), and its share of the drive and brake force.
    const vden = Math.max(Math.abs(vf), 3), tanS = Math.tan(this.steer), tw = this.tw, hand = inp.hand && live && speed > 1;
    const stA = i => { const lwid = (i & 1) ? -tw : tw; return Math.abs(tanS) < 1e-4 ? this.steer : Math.atan(L / (L / tanS - lwid)); }; this.stW = [stA(0), stA(1)];
    if (!hand) { if (this.tc && !burn && FxR > capR * .96) FxR = capR * .96; if (Math.abs(FxR) > capR) { this.wspin = (Math.abs(FxR) - capR) / capR; FxR = Math.sign(FxR) * capR; } }
    const SU = this.sus, sigma = .35, relax = Math.min(1, dt * Math.max(speed, 3) / sigma), lwF = Math.max(lw[0] + lw[1], 1), lwR = Math.max(lw[2] + lw[3], 1);
    let FxB = 0, FyB = 0, Mz = 0, uFx = 0, uFy = 0, uRx = 0, uRy = 0, aFs = 0, aRm = 0, sat = 0, FyFt = 0;
    for (let i = 0; i < 4; i++) {
      const fr = i < 2, fi = fr ? a : -b, li = (i & 1) ? -tw : tw, pair = fr ? lwF : lwR, mw = this.muW[i] || 1, mAvg = (fr ? muF : muR) || .01, cap = (fr ? capF : capR) * (lw[i] * mw / mAvg) / pair, Fzi = Math.max(Fz[i], 1), ax2 = fr ? FxF : FxR;
      // the axle's longitudinal force is shared between its wheels: braking by load; drive equally through an open diff, towards the more loaded wheel as the diff locks
      const share = ax2 * (fr ? 1 : 1) < 0 ? lw[i] / pair : .5 + clamp(TN.diff, 0, 1) * .9 * (lw[i] / pair - .5), Fxi = clamp(ax2 * share, -cap, cap);
      const vlw = vl + this.r * fi, vfw = vf - this.r * li, d = fr ? stA(i) : 0; let Fyi;
      if (hand && !fr) { const vm = Math.hypot(vfw, vlw) || 1, fk = cap * .7; FxB += -fk * vfw / vm; FyB += -fk * vlw / vm; Mz += fi * (-fk * vlw / vm) - li * (-fk * vfw / vm); this.locked = true; this.slipR = 1; uR += 1; continue; }
      const aRaw = Math.atan2(vlw, vden) - d * sg; SU.alpha[i] += (aRaw - SU.alpha[i]) * relax; const al = SU.alpha[i];
      if (fr) Fyi = -Math.sqrt(Math.max(cap * cap - (Fxi > 0 ? Fxi * TY.driveShare : Fxi * (this.abs ? TY.brakeShare : 1.12)) ** 2, cap * cap * .15)) * Math.sin(TY.frontC * Math.atan(TY.frontB * al));
      else Fyi = -Math.sqrt(Math.max(cap * cap - Fxi * Fxi * s.loose * TUNE.powerSlide * (this.tc ? .45 : 1), cap * cap * .12)) * Math.sin(TY.rearC * Math.atan(TY.rearB * al));
      if (burn && !fr) Fyi *= .3; if (!Fzi || Fz[i] < 1) { Fyi = 0; }
      const cdw = Math.cos(d), sdw = Math.sin(d), Fxb = Fxi * cdw - Fyi * sdw, Fyb = Fyi * cdw + Fxi * sdw; FxB += Fxb; FyB += Fyb; Mz += fi * Fyb - li * Fxb;
      if (fr) { uFx += Fxi; uFy += Fyi; aFs += al / 2; FyFt += Fyb; sat += -Fyi * Math.max(0, .035 * (1 - Math.abs(al) / .2)); } else { uRx += Fxi; uRy += Fyi; aRm = Math.max(aRm, Math.abs(al)); }
    }
    this.sat = sat; if (!hand) this.slipR = aRm; if (burn) this.wspin = Math.max(this.wspin, 1.2);
    this.aF = aFs; this.useF = Math.hypot(uFx, uFy) / (capF || 1); this.useR = hand ? 1 : Math.hypot(uRx, uRy) / (capR || 1);
    const ax = (FxB - .6 * s.cda * (1 - .45 * this.draft) * vf * Math.abs(vf) - m * (.006 + wdrag + gr * TUNE.surface.grassDrag) * vf - m * .12 * Math.sign(vf) * Math.min(1, Math.abs(vf)) - (thr === 0 && !rev ? m * .45 * Math.sign(vf) * Math.min(1, Math.abs(vf)) : 0)) / m;   // last term: engine braking when off the throttle
    const ay = FyB / m;
    this.vx += (ax * sn + ay * cs) * dt; this.vz += (ax * cs - ay * sn) * dt;
    if (K > 0 && speed > 3 && !inp.hand) { const vl2 = this.vx * cs - this.vz * sn, q = Math.min(1, TUNE.slideAid * K * dt) * (1 - this.di); this.vx -= cs * vl2 * q; this.vz += sn * vl2 * q; }   // grip aid: bleeds off sideways slip so the car goes where it points (handbrake switches it off)
    this.r += Mz / this.I * dt; this.r -= this.r * (TUNE.yawDamp + speed * TUNE.yawDampSpeed + K * TUNE.assistYawDamp) * dt; if (this.driftMode) this.r -= this.r * 2.8 * clamp((ab - .62) / .5, 0, 1) * dt;      // yaw damping resists the car winding up past the drift angle
    if (thr === 0 && (brk === 0 || !live) && speed < .5) { this.vx *= .9; this.vz *= .9; this.r *= .85; }
    if (!live) { this.vx = this.vz = this.r = 0; }
    this.th += this.r * dt; this.x += this.vx * dt; this.z += this.vz * dt;
    this.axS += (ax - this.axS) * Math.min(1, dt * 8); this.ayS += (ay - this.ayS) * Math.min(1, dt * 8);
    if (live) this.fuel = Math.max(0, this.fuel - dt * this.fuelK * PC.fuel * (TUNE.fuel.idle + thr * (.35 + .65 * this.rpm)) / TUNE.fuel.fullThrottleSeconds);
    if (live) this.tyre = Math.max(0, this.tyre - dt * this.wear * (1 + Math.max(0, this.tT - tHi) * .035) * PC.wear * (TY.wear.base * Math.min(1, speed / 25) + Math.min(this.slipR, .8) * .011 + this.wspin * .008 + (this.locked ? .03 : 0) + gr * .002));
    if (!nit && live) this.nitro = Math.min(1, this.nitro + dt * (.018 + (this.drifting ? .09 : 0)));
    this.drifting = Math.abs(this.beta) > .22 && speed > 9 && vf > 0 && gr < .6;

    // Drivetrain. Engine speed comes from the driven wheels through the selected gear (each gear reaches the red line at its own
    // top speed). From rest the clutch slips, in the countdown the engine revs freely, wheelspin raises the revs, and a gear
    // change cuts drive for a moment. shiftEvt is the one place a shift is announced (audio listens to it).
    const idle = s.idle, red = s.red, wsp = Math.abs(vf) * (1 + Math.min(this.wspin, 1.5) * .5 + this.wspinF * .3), gtop = [0, .24, .42, .6, .8, 1.03].map(k => k * s.top * TN.top);
    let gi = this.gearI; if (!(this.shiftT > 0) && live) { if (gi < 5 && wsp > gtop[gi] * .97) { gi++; this.shiftT = .15; this.shiftEvt = 1; } else if (gi > 1 && wsp < gtop[gi - 1] * .72) { gi--; this.shiftT = .12; this.shiftEvt = -1; } }
    this.gearI = gi; this.gear = rev && vf < -.5 ? 0 : gi; this.shiftT = Math.max(0, this.shiftT - dt);
    let rt = !live ? idle + inp.throttle * (red * 1.04 - idle) : burn ? red * 1.05 : rev ? idle + Math.abs(vf) / 12 * (red * .5 - idle) : Math.max(red * wsp / gtop[gi], gi === 1 ? idle + thr * (red * .42 - idle) : idle);
    // Rev limiter: only when the engine actually reaches the red line. The ignition is cut for a moment, the revs fall back, then climb again.
    if (rt > red) rt = red * 1.01; this.cutT = Math.max(0, (this.cutT || 0) - dt); if (this.cutT > 0) rt = red * .93;
    { const rate = (rt > this.rpmR ? 8000 : 10000) * dt; this.rpmR += clamp(rt - this.rpmR, -rate, rate); }
    if (this.rpmR >= red && this.cutT <= 0) this.cutT = .08; this.limiter = this.cutT > 0;
    this.rpm = clamp((this.rpmR - idle) / (red - idle), 0, 1.02); this.load = live ? thr * (this.shiftT > 0 ? .2 : 1) : inp.throttle * .45;
    this.dirt = clamp(this.dirt + dt * (gr * Math.min(1, speed / 15) * .07 - wet * .03), 0, 1);
    this.bT = clamp(this.bT + (brk * speed * .013 - this.bT * (.16 + speed * .006)) * dt, 0, 1);      // brake discs heat with braking and speed and cool in the air
    { const Dd = this.dmg; this.eT = clamp(this.eT + ((.02 + .1 * thr * (this.rpm || 0)) * (1 + 2.2 * Dd.front) - this.eT * (.09 + speed * .004) * (1 - .6 * Dd.front)) * dt, 0, 1.4); }      // engine temperature: a damaged radiator (front damage) cannot shed the heat
    this.mud = clamp(this.mud + dt * (gr * Math.min(1, speed / 15) * .03 - wet * .04), 0, 1);      // mud builds up in the runoff and washes off in rain
    { const use = clamp(((this.useF + this.useR) / 2 - .25) / .75, 0, 1), amb = track.def && track.def.theme === 'night' ? TUNE.tyreT.ambientNight : (track.wet || 0) > .4 ? TUNE.tyreT.ambientWet : TUNE.tyreT.ambient;
      const heat = 3.4 * use ** 1.3 * (.4 + speed / 45) + (speed > 2 ? .2 : 0) + this.wspin * 2.2 + (this.locked ? 3 : 0), cool = (this.tT - amb) * (.022 + speed * .0007) * (1 + (track.wet || 0) * 1.2); this.tT = clamp(this.tT + (heat - cool) * dt, amb, 135); }      // tyre temperature: heat from slip and load, cooling with air and rain
    this.lockF = this.braking && brk > .9 && speed > 17 && gr < .5;
    let hit = this.collideWalls(track);
    if (track.surf(this.x, this.z) === WALL) { this.x = x0; this.z = z0; this.vx *= .15; this.vz *= .15; this.r *= .3; hit = Math.max(hit, speed * .5); this.scrapeT = .3; this.hitX = x0; this.hitZ = z0; this.hitL = [0, this.zf]; this.hitN = [-sn, -cs]; }   // never end a step inside a barrier
    return hit;
  }

  // Barrier contact. The wall normal is averaged from the open space around the contact point, so the car
  // slides along a barrier instead of ricocheting off the stair-steps of the collision map. Almost no bounce,
  // friction scrubs speed along the wall, and only part of the impulse is allowed to spin the car.
  collideWalls(track) {
    const sn = Math.sin(this.th), cs = Math.cos(this.th), m = this.spec.mass, hw = this.hw, W = TUNE.wall;
    const pts = [[hw, this.zf], [-hw, this.zf], [hw, -this.zr], [-hw, -this.zr], [hw, 0], [-hw, 0]];
    let hit = 0, touched = false, wn = null;
    for (const [lx, lz] of pts) {
      const rx = sn * lz + cs * lx, rz = cs * lz - sn * lx, px = this.x + rx, pz = this.z + rz;
      if (track.surf(px, pz) !== WALL) continue;
      let nx = 0, nz = 0;
      for (let a = 0; a < 16; a++) { const dx = Math.cos(a * .3927), dz = Math.sin(a * .3927); for (const r of [.8, 1.6, 2.6]) if (track.surf(px + dx * r, pz + dz * r) !== WALL) { nx += dx; nz += dz; } }
      let nl = Math.hypot(nx, nz);
      if (nl < .01) { const e = track.escape(px, pz); if (!e) continue; nx = e.nx; nz = e.nz; nl = 1; }
      nx /= nl; nz /= nl;
      let d = 0; while (d < 4 && track.surf(px + nx * d, pz + nz * d) === WALL) d += .06;
      this.x += nx * d; this.z += nz * d; touched = true;
      const vn = (this.vx + this.r * rz) * nx + (this.vz - this.r * rx) * nz;
      if (vn >= 0) continue;
      const c = rz * nx - rx * nz, j = -(1 + W.bounce) * vn / (1 / m + c * c / this.I);
      this.vx += j * nx / m; this.vz += j * nz / m; this.r += j * c / this.I * W.spin;
      const tx = -nz, tz = nx, vt = this.vx * tx + this.vz * tz, dv = Math.sign(vt) * Math.min(Math.abs(vt), W.friction * j / m); this.vx -= tx * dv; this.vz -= tz * dv;
      if (-vn > hit) { hit = -vn; this.hitX = px; this.hitZ = pz; this.hitL = [lx, lz]; this.hitN = [nx, nz]; }
      wn = [nx, nz];
    }
    if (wn && this.speed > 3) {       // glance off: ease the nose round to run along the barrier instead of grinding into it
      let tx = -wn[1], tz = wn[0]; if (this.vx * tx + this.vz * tz < 0) { tx = -tx; tz = -tz; } const d = wrap(Math.atan2(tx, tz) - this.th);
      if (Math.abs(d) < 1.15) { this.th += d * .07; this.x += wn[0] * .01; this.z += wn[1] * .01; }
    }
    if (touched) { this.r = clamp(this.r * W.yawKeep, -1.8, 1.8); this.touchT = .35; }
    return hit;
  }

  // circle-vs-circle bump between two cars. `kin` = the other car is network-driven and does not react here
  // Car-to-car contact as a rigid body collision between two oriented boxes (separating-axis test). The contact normal is the face that is struck and the
  // contact point is the middle of the overlap, so a centred hit pushes straight and an off-centre or corner hit turns the car by exactly its lever arm.
  // The impulse uses the true relative velocity at that point (centre velocity plus spin), the real mass and yaw inertia, a small restitution (metal
  // crumples, it does not bounce) and Coulomb friction along the contact. Nothing artificial is added to the spin.
  bump(o, kin) {
    const CR = TUNE.crash, sA = Math.sin(this.th), cA = Math.cos(this.th), sB = Math.sin(o.th), cB = Math.cos(o.th);
    const hlA = (this.zf0 + this.zr0) / 2 * CR.box, hwA = this.hw0 * CR.box, hlB = (o.zf0 + o.zr0) / 2 * CR.box, hwB = o.hw0 * CR.box, offA = (this.zf0 - this.zr0) / 2, offB = (o.zf0 - o.zr0) / 2;
    const ax = this.x + sA * offA, az = this.z + cA * offA, bx = o.x + sB * offB, bz = o.z + cB * offB, dx = ax - bx, dz = az - bz;
    if (dx * dx + dz * dz > (hlA + hwA + hlB + hwB) ** 2) return 0;
    let best = 1e9, nx = 0, nz = 0;
    for (const [px, pz] of [[sA, cA], [cA, -sA], [sB, cB], [cB, -sB]]) {
      const rA = hlA * Math.abs(sA * px + cA * pz) + hwA * Math.abs(cA * px - sA * pz), rB = hlB * Math.abs(sB * px + cB * pz) + hwB * Math.abs(cB * px - sB * pz), dist = dx * px + dz * pz, ov = rA + rB - Math.abs(dist);
      if (ov <= 0) return 0; if (ov < best) { best = ov; nx = dist >= 0 ? px : -px; nz = dist >= 0 ? pz : -pz; }
    }
    const tx = -nz, tz = nx, ia = 1 / this.spec.mass, ib = kin ? 0 : 1 / o.spec.mass, Ia = 1 / this.Ic, Ib = kin ? 0 : 1 / o.Ic, sa = ia / (ia + ib), sb = ib / (ia + ib);
    // contact point: middle of the overlap along the struck face, and midway between the two surfaces across it
    const projR = (hl, hw, s, cc, px, pz) => hl * Math.abs(s * px + cc * pz) + hw * Math.abs(cc * px - s * pz);
    const tA = ax * tx + az * tz, tB = bx * tx + bz * tz, rtA = projR(hlA, hwA, sA, cA, tx, tz), rtB = projR(hlB, hwB, sB, cB, tx, tz), tm = (Math.max(tA - rtA, tB - rtB) + Math.min(tA + rtA, tB + rtB)) / 2;
    const nA = ax * nx + az * nz - projR(hlA, hwA, sA, cA, nx, nz), nB = bx * nx + bz * nz + projR(hlB, hwB, sB, cB, nx, nz), nm = (nA + nB) / 2, cx = nx * nm + tx * tm, cz = nz * nm + tz * tm;
    this.x += nx * best * (kin ? 1 : sb); this.z += nz * best * (kin ? 1 : sb); if (!kin) { o.x -= nx * best * sa; o.z -= nz * best * sa; }
    const rAx = cx - this.x, rAz = cz - this.z, rBx = cx - o.x, rBz = cz - o.z;
    const vel = () => [this.vx + this.r * rAz - o.vx - o.r * rBz, this.vz - this.r * rAx - o.vz + o.r * rBx];
    let [rvx, rvz] = vel(); const vn = rvx * nx + rvz * nz; if (vn >= 0) return 0;
    const wA = rAz * nx - rAx * nz, wB = rBz * nx - rBx * nz, kN = ia + ib + wA * wA * Ia + wB * wB * Ib, jn = -(1 + (vn < -CR.restMin ? CR.rest : 0)) * vn / kN;
    this.vx += jn * nx * ia; this.vz += jn * nz * ia; this.r += jn * wA * Ia; if (!kin) { o.vx -= jn * nx * ib; o.vz -= jn * nz * ib; o.r -= jn * wB * Ib; }
    [rvx, rvz] = vel(); const vt = rvx * tx + rvz * tz, wtA = rAz * tx - rAx * tz, wtB = rBz * tx - rBx * tz, kT = ia + ib + wtA * wtA * Ia + wtB * wtB * Ib, jt = Math.max(-CR.fric * jn, Math.min(CR.fric * jn, -vt / kT));
    this.vx += jt * tx * ia; this.vz += jt * tz * ia; this.r += jt * wtA * Ia; if (!kin) { o.vx -= jt * tx * ib; o.vz -= jt * tz * ib; o.r -= jt * wtB * Ib; }
    this.hitX = cx; this.hitZ = cz; this.hitL = this.toLocal(cx, cz); this.hitN = [nx, nz]; o.hitX = cx; o.hitZ = cz; o.hitL = o.toLocal(cx, cz); o.hitN = [-nx, -nz];
    return -vn;
  }

  // Bodywork options. Every part is positioned from the car's own geometry (rear deck height, nose height, body width),
  // so a wing sits on the boot lid and a splitter sits under the bumper whatever the model.
  buildWheels(style) {      // every wheel is rebuilt from the car's own measured tyre size, so it always fits its arch
    const seg = this.isAI ? Math.min(40, window.__wheelSeg || 40) : window.__wheelSeg || 64, T = this.T;      // rival cars get lighter wheels: twelve cars would otherwise carry a lot of triangles
    for (const k in this.wheels) { const q = this.wheels[k];
      if (!q.dims) { const bT = new THREE.Box3(), bR = new THREE.Box3(); q.mesh.traverse(o => { if (o.isMesh && o.geometry) { o.geometry.computeBoundingBox(); (o.userData.kind === 'rim7' || o.userData.kind === 'rim6' ? bR : bT).union(o.geometry.boundingBox); } });
        const R = (bT.max.y - bT.min.y) / 2, W = bT.max.x - bT.min.x; q.dims = { R, W, rr: bR.isEmpty() ? R * .66 : clamp((bR.max.y - bR.min.y) / 2, R * .6, R * .74) }; }
      const { R, W, rr } = q.dims; for (const ch of [...q.mesh.children]) q.mesh.remove(ch); if (q.still) q.pivot.remove(q.still);
      const w = buildWheel(R, W, rr, style, seg, this.m, q.pivot.position.x >= 0); q.mesh.add(w.spin); q.still = w.still; w.still.scale.setScalar(T.wheel); q.pivot.add(w.still); q.spin = w.spin; }
  }
  addTyreText() {      // (the old flat lettering ring: now part of buildWheels / sidewallDecals)
    for (const k in this.wheels) { const q = this.wheels[k], bb = new THREE.Box3(); q.mesh.traverse(o => { if (o.isMesh && o.geometry && !o.userData.decal) { o.geometry.computeBoundingBox(); bb.union(o.geometry.boundingBox); } });
      const hwid = (bb.max.x - bb.min.x) / 2, rad = (bb.max.y - bb.min.y) / 2; if (!(hwid > .02 && rad > .1)) continue;
      for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.RingGeometry(rad * .74, rad * .94, 40, 1).rotateY(s * Math.PI / 2), this.m.tyretext); m.position.x = s * (hwid + .003); m.userData.decal = 1; q.mesh.add(m); } }
  }
  dress(look) {
    const L = this.look = Object.assign({ wing: 0, split: 0, rim: 0, tint: 0, glow: 0, skirt: 0, scoop: 0, pipe: 0, liv: 3, livc: 0, num: 0 }, look || {}), ch = this.chassis; let part = 'wing';
    { const rs = L.rimS ?? this.spec.rimS ?? 1, ts = L.tyreS || 0; if (this._rs !== rs) { this._rs = rs; this.buildWheels(rs); this._ts = -1; }
      if (this._ts !== ts) { this._ts = ts; for (const k in this.wheels) { const q = this.wheels[k]; sidewallDecals(q.spin, q.dims.R, q.dims.W, q.dims.rr, ts, this.m.tyretext); } }
      this.m.caliper.color.setHex(CAL_COLS[L.cal || 0] ?? CAL_COLS[0]); }
    { const U = this.m.paint.userData.liv; U.uRoof.value = L.liv & 2 ? 1 : 0; U.uStripe.value = L.liv & 1 ? 1 : 0; U.uDoor.value = L.num ? 1 : 0; U.uL.value.setHex(LIVC[L.livc] ?? LIVC[0]); U.uFlash.value = L.liv & 4 ? 1 : 0; U.uNose.value = L.liv & 8 ? 1 : 0; U.uL2.value.setHex(LIVC[L.livc2 ?? 3] ?? LIVC[3]); }
    if (this.addons) ch.remove(this.addons); const A = this.addons = new THREE.Group(); ch.add(A);
    let minZ = 1e9, maxZ = -1e9, maxX = 0; const V = [];
    for (const m of this.bodyMeshes) { const o = m.userData.orig; for (let i = 0; i < o.length; i += 3) { V.push(o[i], o[i + 1], o[i + 2]); if (o[i + 2] < minZ) minZ = o[i + 2]; if (o[i + 2] > maxZ) maxZ = o[i + 2]; if (o[i] > maxX) maxX = o[i]; } }
    const top = (z0, z1, xr) => { let y = 0; for (let i = 0; i < V.length; i += 3) if (V[i + 2] >= z0 && V[i + 2] <= z1 && Math.abs(V[i]) < xr && V[i + 1] > y) y = V[i + 1]; return y; };
    const low = (z0, z1) => { let y = 9; for (let i = 0; i < V.length; i += 3) if (V[i + 2] >= z0 && V[i + 2] <= z1 && V[i + 1] < y) y = V[i + 1]; return y; };
    const dark = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: .45, metalness: .5 }), W = maxX * 2;
    const add = (w, h, d, mat, x, y, z) => { const me = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); me.position.set(x, y, z); me.castShadow = true; me.userData.part = part; A.add(me); return me; };
    // ---- bodywork parts. Each one is shaped (aerofoil sections, wedges, round pipes) and fitted to this body by reading its
    // outline: boot height and width at the tail, the bumper's plan shape at the nose, the sill between the wheel arches, the roof peak.
    dark.side = THREE.DoubleSide; dark.color.set(0x111215);
    const side = (z0, z1, y0, y1) => { let x = 0; for (let i = 0; i < V.length; i += 3) if (V[i + 2] >= z0 && V[i + 2] <= z1 && V[i + 1] >= y0 && V[i + 1] <= y1 && Math.abs(V[i]) > x) x = Math.abs(V[i]); return x; };
    const ext = (pts, depth) => { const sh = new THREE.Shape(); pts.forEach(([x, y], i) => i ? sh.lineTo(x, y) : sh.moveTo(x, y)); return new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: false }); };
    const across = (pts, w) => ext(pts, w).rotateY(Math.PI / 2).translate(-w / 2, 0, 0);          // a side profile (x = towards the rear, y = up) swept across the car
    const put = (geo, mat, x, y, z) => { const me = new THREE.Mesh(geo, mat); me.position.set(x, y, z); me.castShadow = true; me.userData.part = part; A.add(me); return me; };
    const foil = (ch, th) => { const up = [], dn = []; for (let q = 0; q <= 14; q++) { const t = q / 14, yt = 5 * th * ch * (.2969 * Math.sqrt(t) - .126 * t - .3516 * t * t + .2843 * t ** 3 - .1015 * t ** 4), x = -ch / 2 + ch * t, cam = .05 * ch * Math.sin(t * Math.PI); up.push([x, yt * .55 + cam * t]); dn.push([x, -yt * 1.25 + cam * t]); } return [...up, ...dn.reverse()]; };   // an inverted wing section: flat on top, full underneath
    if (this.hasWing == null) {       // does this body already carry a wing? Look for a slab at the tail with clear air under it.
      const ys = []; for (let i = 0; i < V.length; i += 3) if (V[i + 2] < minZ + .55 && Math.abs(V[i]) < maxX * .5) ys.push(V[i + 1]); ys.sort((a, b) => a - b); let gap = 0, at = 0; const hTop = ys[ys.length - 1];
      for (let i = 1; i < ys.length; i++) if (ys[i - 1] > hTop * .45 && ys[i] - ys[i - 1] > gap) { gap = ys[i] - ys[i - 1]; at = ys[i]; } this.hasWing = !!this.spec.wing; }
    // the roof's centre-line profile, read by casting rays down onto the real body surface (low-poly roofs have no vertices along the centre line, so a vertex search finds nothing there)
    let roofMax = 0, zr0 = 0, zr1 = 0, roofAt = () => 0;
    if ((L.wing && !this.hasWing) || L.scoop) {
      const key = this.spec.model || this.spec.id; let prof = ROOFP[key];
      if (!prof) { prof = ROOFP[key] = []; const o = new THREE.Vector3(), ray = new THREE.Ray(o, new THREE.Vector3(0, -1, 0)), pa = new THREE.Vector3(), pb = new THREE.Vector3(), pc = new THREE.Vector3(), hit = new THREE.Vector3();
        for (let z = minZ + .15; z <= maxZ - .15; z += .05) { o.set(0, 4, z); let y = -1;
          for (const m of this.bodyMeshes) { const idx = m.geometry.index, P = m.userData.orig, n = idx ? idx.count : P.length / 3;
            for (let t = 0; t < n; t += 3) { const i0 = idx ? idx.getX(t) : t, i1 = idx ? idx.getX(t + 1) : t + 1, i2 = idx ? idx.getX(t + 2) : t + 2; pa.set(P[i0 * 3], P[i0 * 3 + 1], P[i0 * 3 + 2]); pb.set(P[i1 * 3], P[i1 * 3 + 1], P[i1 * 3 + 2]); pc.set(P[i2 * 3], P[i2 * 3 + 1], P[i2 * 3 + 2]); if (ray.intersectTriangle(pa, pb, pc, false, hit) && hit.y > y) y = hit.y; } }
          prof.push([z, y]); } }
      roofAt = z => { let best = prof[0], bd = 1e9; for (const p of prof) { const dd = Math.abs(p[0] - z); if (dd < bd) { bd = dd; best = p; } } return Math.max(0, best[1]); };
      roofMax = Math.max(...prof.map(p => p[1])); zr0 = 1e9; zr1 = -1e9; for (const [z, y] of prof) if (y >= roofMax - .09) { if (z < zr0) zr0 = z; if (z > zr1) zr1 = z; }
      if (zr1 < zr0) { zr0 = minZ + 1; zr1 = maxZ - 1; }
    }
    const roofWing = zr0 - minZ < 1.15;      // hatchbacks, estates and rally cars: the roof runs almost to the tail, so the wing sits on the END OF THE ROOF; saloons and coupes carry it on the boot lid
    if (L.wing && !this.hasWing) {
      const tailW = side(minZ, minZ + .55, 0, 9) * 2; let deck, wd, z0;
      if (roofWing) { const rw = Math.max(side(zr0 - .06, zr0 + .25, roofMax - .3, roofMax + .1) * 2, .8); deck = Math.max(roofAt(zr0), roofAt(zr0 + .1)); wd = Math.min(rw * 1.04 + .08, tailW * .96); z0 = zr0 - .03; } else { deck = Math.max(roofAt(minZ + .2), roofAt(minZ + .35), top(minZ + .04, minZ + .42, tailW * .36)); wd = tailW; z0 = minZ + .05; }
      if (L.wing === 1) put(across([[-.26, 0], [-.06, .03], [.02, .085], [.035, .078], [.02, 0]], wd * .86), this.m.paint, 0, deck - .004, roofWing ? z0 : minZ + .05);      // ducktail: rises smoothly from the roof edge or boot lid to a crisp edge
      else { const race = L.wing === 3, ch = race ? .36 : .27, hi = roofWing ? (race ? .2 : .13) : (race ? .36 : .24), w2 = wd * (race ? 1.0 : .88), z = roofWing ? z0 : minZ + (race ? .1 : .18);
        put(across(foil(ch, .13), w2), race ? dark : this.m.paint, 0, deck + hi, z).rotation.x = race ? .2 : .12;
        if (race) put(across(foil(.13, .12), w2), dark, 0, deck + hi + .075, z - .17).rotation.x = .5;                                                          // second element (flap)
        for (const sx of [-1, 1]) { put(across([[-.1, 0], [.06, 0], [.085, hi - .01], [.02, hi - .01]], .016), dark, sx * w2 * .29, deck - .01, z + .02);       // swept uprights, standing on the roof or the lid
          put(across([[-ch * .62, -.085], [ch * .7, -.085], [ch * .7, race ? .15 : .07], [-ch * .25, race ? .15 : .07], [-ch * .62, -.01]], .012), dark, sx * w2 / 2, deck + hi, z); } }   // end plates
    }
    // ---- nose splitter and side skirts: fitted from rays cast at the real body surface (cached per model), not from a search for vertices
    let FIT = null; if (L.split || L.skirt) {
      const key = this.spec.model || this.spec.id; FIT = FITS[key];
      if (!FIT) { const o = new THREE.Vector3(), d = new THREE.Vector3(), ray = new THREE.Ray(o, d), pa = new THREE.Vector3(), pb = new THREE.Vector3(), pc = new THREE.Vector3(), hit = new THREE.Vector3();
        const cast = (ox, oy, oz, dx, dy, dz) => { o.set(ox, oy, oz); d.set(dx, dy, dz); let best = -1;
          for (const m of this.bodyMeshes) { const idx = m.geometry.index, P = m.userData.orig, n = idx ? idx.count : P.length / 3;
            for (let t = 0; t < n; t += 3) { const i0 = idx ? idx.getX(t) : t, i1 = idx ? idx.getX(t + 1) : t + 1, i2 = idx ? idx.getX(t + 2) : t + 2; pa.set(P[i0 * 3], P[i0 * 3 + 1], P[i0 * 3 + 2]); pb.set(P[i1 * 3], P[i1 * 3 + 1], P[i1 * 3 + 2]); pc.set(P[i2 * 3], P[i2 * 3 + 1], P[i2 * 3 + 2]);
              if (ray.intersectTriangle(pa, pb, pc, false, hit)) { const t2 = hit.distanceTo(o); if (best < 0 || t2 < best) best = t2; } } } return best; };
        const under = (x, z) => { const t = cast(x, -.6, z, 0, 1, 0); return t < 0 ? null : -.6 + t; }, outer = (y, z) => { const t = cast(5, y, z, -1, 0, 0); return t < 0 ? null : 5 - t; };
        FIT = FITS[key] = { sp: null, sk: null };
        { const zs = [], xs = []; let y0 = 9; for (const x of [0, .3, .6]) { const u = under(x, maxZ - .25); if (u != null && u < y0) y0 = u; } if (y0 > 5) y0 = .2; let last = null;
          for (let z = maxZ - .5; z < maxZ - .01; z += .05) { const x = outer(y0 + .15, z); if (x != null && x > .05) last = last == null ? x : Math.min(x, last + .02); else if (last != null) last *= .8; zs.push(z); xs.push(last ?? .6); } FIT.sp = { y0, zs, xs }; }
        { const T = this.T, zr = this.wheels.RL.z / T.l + this.R / T.wheel + .07, zf = this.wheels.FL.z / T.l - this.R / T.wheel - .07, zs = [], xs = [], ys = []; let lx = null;
          for (let z = zr; z <= zf + 1e-6; z += .1) { const x0 = outer(.36, z); if (x0 == null) continue; const u = under(x0 - .08, z), yU = u == null ? .2 : u, x = outer(yU + .13, z) ?? x0; lx = lx == null ? x : lx + (x - lx) * .6; zs.push(z); xs.push(lx); ys.push(Math.max(.07, yU)); } FIT.sk = { zs, xs, ys }; } } }
    part = 'split';
    if (L.split && FIT.sp) { const { y0, zs, xs } = FIT.sp, pts = [];
      zs.forEach((z, q) => pts.push([xs[q] + .045, -(z + .03)])); pts.push([xs[xs.length - 1] * .7, -(maxZ + .075)], [-xs[xs.length - 1] * .7, -(maxZ + .075)]); for (let q = zs.length - 1; q >= 0; q--) pts.push([-xs[q] - .045, -(zs[q] + .03)]);
      put(ext(pts, .02).rotateX(-Math.PI / 2), dark, 0, y0 - .012, 0);                                                                                         // a blade cut to the true plan shape of this bumper, at its true underside
      for (const sx of [-1, 1]) put(across([[-.1, 0], [.1, 0], [.1, .05], [-.04, .075]], .012), dark, sx * (xs[2] + .03), y0 + .005, zs[2] + .1); }           // dive planes
    part = 'skirt';
    if (L.skirt && FIT.sk && FIT.sk.zs.length > 2) { const { zs, xs, ys } = FIT.sk;
      for (const sx of [-1, 1]) { const pos = [], ind = [], ring = (x, y) => [[x - .05, y + .14], [x + .012, y + .14], [x + .055, y + .045], [x + .055, y - .015], [x - .05, y - .015]];
        zs.forEach((z, q) => { for (const [dx, dy] of ring(xs[q], ys[q])) pos.push(sx * dx, dy, z); });
        for (let q = 0; q < zs.length - 1; q++) for (let r = 0; r < 5; r++) { const a = q * 5 + r, b = q * 5 + (r + 1) % 5, a2 = a + 5, b2 = b + 5; ind.push(a, b, a2, b, b2, a2); }
        for (const q of [0, zs.length - 1]) for (let r = 1; r < 4; r++) ind.push(q * 5, q * 5 + r, q * 5 + r + 1);
        const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(ind); g.computeVertexNormals(); put(g, dark, 0, 0, 0); } }      // swept along the real sill line, arch to arch
    part = 'scoop';
    if (L.scoop) { const roofLen = zr1 - zr0, hl = clamp(roofLen * .16, .13, .24), sz = clamp(zr1 - roofLen * .4, zr0 + hl + .12, Math.max(zr0 + hl + .12, zr1 - hl - .1)), sy = roofAt(sz) - .012, k = hl / .24;      // on the roof, behind the windscreen header, flush with the roof line
      put(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(.17 * k, .075 * k, hl), this.m.paint, 0, sy, sz);
      put(new THREE.CircleGeometry(1, 16, 0, Math.PI).scale(.14 * k, .055 * k, 1), new THREE.MeshBasicMaterial({ color: 0x050506 }), 0, sy + .004, sz + hl * .96).rotation.x = -.3; }   // the intake mouth
    part = 'pipe';
    if (L.pipe) { const chrome = new THREE.MeshStandardMaterial({ color: 0xdfe2e6, metalness: 1, roughness: .16, side: THREE.DoubleSide }), inner = new THREE.MeshBasicMaterial({ color: 0x060606 });
      let spots = this.exhL; if (!spots) { const yl = low(minZ, minZ + .35) + .12, tw = side(minZ, minZ + .3, 0, 9); spots = []; for (const sx of [-1, 1]) { const x0 = sx * tw * .5; let zr = 9; for (let i = 0; i < V.length; i += 3) if (Math.abs(V[i] - x0) < .16 && V[i + 1] < yl + .2 && V[i + 2] < zr) zr = V[i + 2]; spots.push([x0, yl, zr]); } }   // no pipes on the model: sit them in the rear valance, flush with the bodywork there
      for (const [x, y, z] of spots) { put(new THREE.CylinderGeometry(.058, .05, .1, 20, 1, true).rotateX(Math.PI / 2), chrome, x, y, z - .015); put(new THREE.CircleGeometry(.047, 18), inner, x, y, z + .02).rotation.y = Math.PI; } }   // a larger polished tip over each of the car's own pipes
    this.m.paint.userData.liv.uH.value = top(minZ, maxZ, 9); this.m.paint.userData.liv.uZ.value = maxZ; { const U2 = this.m.paint.userData.liv, dr = this.door; U2.uDy.value = dr ? dr[0] : U2.uH.value * .5; U2.uDz.value = dr ? dr[1] : -.1; U2.uAsp.value = this.T.l / this.T.h; }
    part = 'num';
    if (L.num && !this.texCar) { const key = 'n' + L.num; if (!LAMP[key]) { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const k = cv.getContext('2d'); k.fillStyle = '#111'; k.font = '900 ' + (L.num > 9 ? 78 : 96) + 'px Arial Black, Arial, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText(String(L.num), 64, 70); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; LAMP[key] = new THREE.MeshBasicMaterial({ map: t, transparent: true, polygonOffset: true, polygonOffsetFactor: -4 }); }
      const hTop = top(minZ, maxZ, 9), dy = this.door ? this.door[0] : hTop * .5, dz = this.door ? this.door[1] : -.1, xs = side(dz - .12, dz + .12, dy - .12, dy + .12); for (const sx of [-1, 1]) { const p = put(new THREE.PlaneGeometry(.46, .46), LAMP[key], sx * (xs + .012), dy, dz); p.rotation.y = sx * Math.PI / 2; p.castShadow = false; } }
    // ---- upgrades you can see: engine = bonnet vents (and an intake at level 3), tyres = wider rubber, armour = nose bar, nitro = blue bottles on the tail
    part = 'up'; { const U = this.up || {}, by = z => top(z - .15, z + .15, maxX * .5);
      if (U.eng) for (const sx of [-1, 1]) for (let q = 0; q < U.eng; q++) put(new THREE.BoxGeometry(.2, .012, .035), dark, sx * .27, by(maxZ * .5 - q * .09) + .008, maxZ * .5 - q * .09);
      if (U.eng >= 3) put(new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).scale(.15, .06, .26), this.m.paint, 0, by(maxZ * .42) - .005, maxZ * .42);
      if (U.armor) { const y = low(maxZ - .3, maxZ), plate = new THREE.MeshStandardMaterial({ color: 0x15161a, metalness: .55, roughness: .45 }), bolt = new THREE.MeshStandardMaterial({ color: 0xb9bdc4, metalness: .9, roughness: .3 });
        put(new THREE.BoxGeometry(W * .9, .035, .55), plate, 0, y + .02, maxZ - .22);          // skid plate under the nose
        if (U.armor > 1) { put(new THREE.BoxGeometry(W * .94, .13, .05), plate, 0, y + .15, maxZ + .02); for (const sx of [-1, 1]) for (const q of [.3, .7]) put(new THREE.CylinderGeometry(.018, .018, .02, 8).rotateX(Math.PI / 2), bolt, sx * W * q * .5, y + .15, maxZ + .05); }          // bash plate across the bumper
        if (U.armor > 2) for (const sx of [-1, 1]) put(new THREE.BoxGeometry(.3, .1, .05), plate, sx * W * .3, y + .4, maxZ - .03); }
      if (U.nitro) { const blue = new THREE.MeshStandardMaterial({ color: 0x1c6fe0, metalness: .6, roughness: .3 }), y = low(minZ, minZ + .3) + .16; for (let q = 0; q < U.nitro; q++) put(new THREE.CylinderGeometry(.035, .035, .16, 12).rotateX(Math.PI / 2), blue, (q - (U.nitro - 1) / 2) * .1, y + .1, minZ - .02); }
      for (const k in this.wheels) this.wheels[k].mesh.scale.x = this.T.wheel * (1 + .09 * (U.tyre || 0)); }
    part = 'glow';
    if (L.glow) {        // Underglow: an LED strip under each sill and across the nose and tail, and the light they throw onto the road: brightest right
      // beside the car and fading away smoothly, drawn from the car's own footprint so it has no edges. A real light under the floor
      // (garage preview) lights the wheels and the ground.
      const col = new THREE.Color(GLOWS[L.glow]), len = maxZ - minZ, ex = 1.5, PW = W + ex * 2, PL = len + ex * 2, hx = W / 2 * 1.08, hz = len / 2 * 1.04, NX = 128, NZ = Math.round(128 * PL / PW), gy = .03 - this.rideY / this.T.h;
      const cv = document.createElement('canvas'); cv.width = NX; cv.height = NZ; const k2 = cv.getContext('2d'), im = k2.createImageData(NX, NZ);
      for (let yy = 0; yy < NZ; yy++) for (let xx = 0; xx < NX; xx++) { const px = (xx / (NX - 1) - .5) * PW, pz = (yy / (NZ - 1) - .5) * PL, rho = Math.hypot(px / hx, pz / hz) + 1e-6, gxx = px / (hx * hx * rho), gzz = pz / (hz * hz * rho), d = (rho - 1) / Math.max(1e-3, Math.hypot(gxx, gzz));      // distance in metres from an oval round the car
        const I = d > 0 ? Math.exp(-(d * d) / .6) * (1 - smooth2(ex * .55, ex, d)) : 1 - .3 * Math.min(1, -d / .8), o = (yy * NX + xx) * 4; im.data[o] = im.data[o + 1] = im.data[o + 2] = 255; im.data[o + 3] = Math.round(255 * I); }
      k2.putImageData(im, 0, 0); const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
      const halo = new THREE.Mesh(new THREE.PlaneGeometry(PW, PL), new THREE.MeshBasicMaterial({ map: tex, color: col.clone().multiplyScalar(1.7), transparent: true, opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -7, polygonOffsetUnits: -7, fog: false }));
      halo.rotation.x = -Math.PI / 2; halo.position.set(0, gy, (minZ + maxZ) / 2); halo.userData.part = 'glow'; A.add(halo); this.glowPool = halo;
      const led = new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(2.6), fog: false }), y0 = gy + .045;
      for (const sx of [-1, 1]) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.016, .016, len * .62, 8).rotateX(Math.PI / 2), led); m.position.set(sx * (W / 2 - .2), y0, (minZ + maxZ) / 2); m.userData.part = 'glow'; A.add(m); }
      for (const z of [minZ + .32, maxZ - .32]) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.016, .016, W * .7, 8).rotateZ(Math.PI / 2), led); m.position.set(0, y0, z); m.userData.part = 'glow'; A.add(m); }
      if (this.wantLight) { const pl = new THREE.PointLight(col, 4.5, 6, 1.4); pl.position.set(0, .22 - this.rideY / this.T.h, (minZ + maxZ) / 2); pl.userData.part = 'glow'; A.add(pl); }
    } else this.glowPool = null;
    const rimM = L.rim ? new THREE.MeshPhysicalMaterial({ color: RIMS[L.rim], metalness: .85, roughness: .22, clearcoat: .7, clearcoatRoughness: .08 }) : null;
    const shaded = m => { const q = m.clone(); q.vertexColors = true; return q; }, rimS = rimM ? shaded(rimM) : null, rim0 = shaded(this.m.rim);
    for (const k in this.wheels) this.wheels[k].mesh.traverse(o => { if (o.isMesh && o.userData.kind && o.userData.kind.startsWith('rim')) o.material = o.geometry.attributes.color ? (rimS || rim0) : rimM || (o.userData.kind === 'rim6' ? this.m.rimDark : this.m.rim); });
    const winM = L.tint ? new THREE.MeshPhysicalMaterial({ color: new THREE.Color(TINTS[L.tint]).multiplyScalar(.35), metalness: .55, roughness: .05, clearcoat: 1, clearcoatRoughness: .02, envMap: CAR_ENV, envMapIntensity: 2.4, side: THREE.DoubleSide }) : this.m.window;      // unlit: every window triangle is identical under any light, so a pane can never shade in halves
    const winS = shaded(winM); crackify(winM, this.crackU); crackify(winS, this.crackU); for (const m of this.bodyMeshes) if (m.userData.kind === 'window') m.material = m.geometry.attributes.color ? winS : winM;
  }

  // Headlights: a lens, a low beam and a pool of light on the road for each side. A front hit breaks the lamp on that side.
  // Headlights. Light does not paint white over a surface, it makes the surface brighter in its own colour. So the throw on the road
  // is drawn with a blend that multiplies what is already there (ground x (1 + light)): dirt stays dirt, tarmac stays tarmac, just lit.
  // Its shape is a fan from each lamp: bright and narrow at the bumper, spreading and falling off with distance. There is no solid
  // "ray" in the air; the beam only shows where it catches dust and smoke, as it does in real life.
  makeLamps() {
    if (!LAMP.fan) {
      const N = 256, c = document.createElement('canvas'); c.width = c.height = N; const k = c.getContext('2d'), img = k.createImageData(N, N), d = img.data, W = 13, L = 26;
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const dx = (x - N / 2) / (N / 2) * W / 2, dy = (y - 4) / (N - 4) * L, dist = Math.hypot(dx, dy) / L, ang = Math.atan2(dx, Math.max(dy, .001));
        let I = dy <= 0 ? 0 : Math.exp(-((ang / .3) ** 2)) / (1 + (dist * 2.9) ** 2) * (1 - Math.min(1, Math.max(0, (dist - .62) / .38)) ** 2) * Math.min(1, dist / .03);
        I += dy <= 0 ? 0 : .55 * Math.exp(-((ang / .12) ** 2)) * Math.exp(-(((dist - .2) / .16) ** 2));                     // the hot spot a few metres ahead
        const i = (y * N + x) * 4, v = Math.min(1, I); d[i] = 255 * v; d[i + 1] = 238 * v; d[i + 2] = 200 * v; d[i + 3] = 255; }
      k.putImageData(img, 0, 0); const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
      LAMP.fanM = new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.7, 1.7, 1.7), transparent: true, depthWrite: false, fog: false, blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.DstColorFactor, blendDst: THREE.OneFactor, polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -8 });
      LAMP.fan = new THREE.PlaneGeometry(W, L).translate(0, -L / 2, 0);                                                         // top edge sits at the lamp
      const g = document.createElement('canvas'); g.width = g.height = 64; const gk = g.getContext('2d'), gr = gk.createRadialGradient(32, 32, 1, 32, 32, 32); gr.addColorStop(0, 'rgba(255,248,225,1)'); gr.addColorStop(.25, 'rgba(255,240,200,.55)'); gr.addColorStop(1, 'rgba(255,240,200,0)'); gk.fillStyle = gr; gk.fillRect(0, 0, 64, 64);
      LAMP.glareM = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(g), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }); LAMP.glare = new THREE.PlaneGeometry(.7, .7);
    }
    // Headlights and tail-lights sit exactly where each model has them: one lamp object per real lamp (four on the Escort, Fiat, Fulvia, E30, Delta, S4...).
    // Each lamp gets its own glare disc, sized to the lamp, and a share of the beam on the road; the tail-lights glow red and flare on the brakes.
    const T = this.T, LF = this.pd.lampsF, LR = this.pd.lampsR, nF = LF && LF.length ? LF.length : 2, share = Math.min(1, 1.2 / Math.max(1, nF / 2));
    const lampSet = LF && LF.length ? LF : [[this.hw0 / T.w * .64, .56, this.zf0 / T.l - .04, .1], [-this.hw0 / T.w * .64, .56, this.zf0 / T.l - .04, .1]];
    const mk = ([lx, ly, lz, lr]) => { const g = new THREE.Group(), y = ly * T.h; g.position.set(lx * T.w, y, lz * T.l); g.rotation.y = Math.sign(lx) * Math.min(.07, Math.abs(lx) * .1);
      const fan = new THREE.Mesh(LAMP.fan, LAMP.fanM); fan.rotation.x = -Math.PI / 2; fan.position.set(0, -y + .06, .3); fan.scale.set(share * 1.08, 1, 1 - .07 * (nF > 2)); fan.renderOrder = 3;
      const glare = new THREE.Mesh(LAMP.glare, LAMP.glareM); glare.rotation.x = -Math.PI / 2; glare.position.y = .1; glare.scale.setScalar(Math.max(.3, lr * T.w * 5.2));                // the lamp itself, seen from above
      g.add(fan, glare); g.visible = false; this.root.add(g); return { g, ok: true, sx: lx >= 0 ? 1 : -1 }; };
    this.lamps = lampSet.map(mk); this.lightsOn = false;
    if (!LAMP.lensBase) { LAMP.lensBase = new THREE.MeshStandardMaterial({ color: 0xdfe6ee, metalness: .35, roughness: .12, emissive: 0xffefc8, emissiveIntensity: .04, envMapIntensity: .8 }); LAMP.lensG = new THREE.SphereGeometry(1, 18, 12); }
    if (!LAMP.glareR) { const g = document.createElement('canvas'); g.width = g.height = 64; const gk = g.getContext('2d'), gr = gk.createRadialGradient(32, 32, 1, 32, 32, 32); gr.addColorStop(0, 'rgba(255,60,40,1)'); gr.addColorStop(.3, 'rgba(255,30,20,.6)'); gr.addColorStop(1, 'rgba(255,20,10,0)'); gk.fillStyle = gr; gk.fillRect(0, 0, 64, 64);
      LAMP.glareR = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(g), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }); }
    this.rlMat = LAMP.glareR.clone(); this.rlMat.opacity = 0;
    const rearSet = LR && LR.length ? LR : [[this.hw0 / T.w * .62, .62, -this.zr0 / T.l, .09], [-this.hw0 / T.w * .62, .62, -this.zr0 / T.l, .09]];
    this.rlamps = rearSet.map(([lx, ly, lz, lr]) => { const m = new THREE.Mesh(LAMP.glare, this.rlMat); m.rotation.x = -Math.PI / 2; m.position.set(lx * T.w, ly * T.h + .12, lz * T.l); m.scale.setScalar(Math.max(.3, lr * T.w * 5)); this.root.add(m); return m; });
  }
  setLights(on) { this.lightsOn = on; for (const l of this.lamps) l.g.visible = on && l.ok; if (this.lensM) this.lensM.emissiveIntensity = on ? 2.4 : .04; }
  hang() {      // a badly damaged bumper works loose at one end: it swings out and its free corner drops
    if (!this.hk) this.hk = { front: 0, rear: 0, sf: Math.random() < .5 ? 1 : -1, sr: Math.random() < .5 ? 1 : -1 };
    let ext = this._ext; if (!ext) { ext = this._ext = { zmax: -9, zmin: 9, ymax: 0, xmax: 0 }; for (const m of this.bodyMeshes) { const O = m.userData.orig; for (let i = 0; i < O.length; i += 3) { ext.xmax = Math.max(ext.xmax, Math.abs(O[i])); ext.ymax = Math.max(ext.ymax, O[i + 1]); ext.zmax = Math.max(ext.zmax, O[i + 2]); ext.zmin = Math.min(ext.zmin, O[i + 2]); } } }
    for (const [zone, sg] of [['front', 1], ['rear', -1]]) { const nk = clamp((this.dmg[zone] - .5) / .5, 0, 1), dk = nk - this.hk[zone]; if (dk <= 0) continue; this.hk[zone] = nk; const side = sg > 0 ? this.hk.sf : this.hk.sr, zE = sg > 0 ? ext.zmax : ext.zmin;
      for (const m of this.bodyMeshes) { if (m.userData.kind === 'window') continue; const A = m.geometry.attributes.position, p = A.array, O = m.userData.orig; let t = false;
        for (let i = 0; i < p.length; i += 3) { const zz = (O[i + 2] - zE) * sg; if (zz < -.38 || O[i + 1] > ext.ymax * .5) continue; const f = clamp((ext.xmax * .9 - side * O[i]) / (ext.xmax * 1.8), 0, 1), w = Math.min(1, (zz + .38) / .38) * f * f;
          p[i + 1] -= w * dk * .24; p[i] -= side * w * dk * .1; p[i + 2] += sg * w * dk * .1; t = true; }
        if (t) { A.needsUpdate = true; m.geometry.computeVertexNormals(); } } }
  }
  fitLamps() {      // the lamps and their lenses move with the bodywork when it is bent or crushed
    if (!this.lamps) return; const T = this.T;
    for (const l of this.lamps) { if (!l.base) { l.base = l.g.position.clone(); l.idx = []; const bx = l.base.x / T.w, by = l.base.y / T.h, bz = l.base.z / T.l; this.bodyMeshes.forEach((mm, mi) => { const O = mm.userData.orig; for (let i = 0; i < O.length; i += 3) { const dx = O[i] - bx, dy = O[i + 1] - by, dz = O[i + 2] - bz; if (dx * dx + dy * dy + dz * dz < .16) l.idx.push(mi, i); } }); }
      let sx = 0, sy = 0, sz = 0, k = 0; for (let q = 0; q < l.idx.length; q += 2) { const mm = this.bodyMeshes[l.idx[q]], i = l.idx[q + 1], A = mm.geometry.attributes.position.array, O = mm.userData.orig; sx += A[i] - O[i]; sy += A[i + 1] - O[i + 1]; sz += A[i + 2] - O[i + 2]; k++; }
      const ox = k ? sx / k * T.w : 0, oy = k ? sy / k * T.h : 0, oz = k ? sz / k * T.l : 0; l.g.position.set(l.base.x + ox, l.base.y + oy, l.base.z + oz); if (l.lens) { l.lens.position.set(l.base.x + ox, l.base.y + oy, l.base.z + oz + .012); l.lens.visible = l.ok; } }
  }

  toLocal(wx, wz) { const dx = wx - this.x, dz = wz - this.z, sn = Math.sin(this.th), cs = Math.cos(this.th); return [dx * cs - dz * sn, dx * sn + dz * cs]; }

  // ---- damage: zone health + real dents in the bodywork around the point of impact
  addScratch(power) {      // a fresh scratch where the impact was (model units, so it matches the texture-space shader)
    if (power < 2.5 || !this.hitL) return; const T = this.T, x = this.hitL[0] / T.w, z = this.hitL[1] / T.l; this.scr.push({ x, y: .45 + Math.random() * .3, z, r: Math.min(.95, .22 + power * .028) }); if (this.scr.length > 6) this.scr.shift();
  }
  damage(power, shock = true) {
    if ((TUNE.dmgK ?? 1) <= 0) return 0;      // damage switched off in the menu
    this.addScratch(power); this.fitDirty = true;
    const amt = Math.max(0, power - 5.5) / 40 * this.dmgScale * (TUNE.dmgK ?? 1);      // less sensitive: a knock under about 20 km/h does nothing, and the rest is scaled down if (amt <= 0 || !this.hitL) return 0;
    if (shock && power > TUNE.shock.minHit) this.shock = Math.min(TUNE.shock.max, power * TUNE.shock.perMs);
    const [lx, lz] = this.hitL, D = this.dmg, zone = lz > this.zf * .55 ? 'front' : lz < -this.zr * .55 ? 'rear' : lx > 0 ? 'left' : 'right';
    D[zone] = Math.min(1, D[zone] + amt); this.crackU.value.set(D.front, D.rear, D.left, D.right);
    { const P = this.parts, k = amt * this.partK, corner = Math.abs(lx) > this.hw * .45;
      const hitW = (i, v) => { P.wheels[i] = Math.min(.92, P.wheels[i] + v); if (P.wheels[i] >= 1 && !this.gone[i]) { this.gone[i] = true; this.wheels[WK[i]].mesh.traverse(o => { if (o.isMesh) this.lost.push(o); }); } };   // a destroyed wheel comes off
      if (zone === 'front') { P.engine = Math.min(1, P.engine + k * .9); if (corner) hitW(lx > 0 ? 0 : 1, k * 1.3); }
      else if (zone === 'rear') { P.gearbox = Math.min(1, P.gearbox + k * .9); if (corner) hitW(lx > 0 ? 2 : 3, k * 1.3); }
      else hitW(lx > 0 ? (lz > 0 ? 0 : 2) : (lz > 0 ? 1 : 3), k * 1.9); }
    if (zone === 'front' && amt > .035) for (const i of this.lamps.map((_, k) => k).filter(k => amt > .22 || (this.lamps[k].sx > 0) === (lx > 0))) if (this.lamps[i].ok) { this.lamps[i].ok = false; this.lamps[i].g.visible = false; this.glass = true; }   // smashed headlight
    // parts tear off: a rear hit takes the wing and exhaust tips, a front hit the splitter, a side hit the skirts
    if (amt > .07 && this.addons) { const want = zone === 'rear' ? ['wing', 'pipe'] : zone === 'front' ? ['split'] : ['skirt']; for (const c of this.addons.children) if (want.includes(c.userData.part) && !c.userData.gone) { c.userData.gone = true; this.lost.push(c); } }
    const sn = Math.sin(this.th), cs = Math.cos(this.th), n = this.hitN, dx = n[0] * cs - n[1] * sn, dz = n[0] * sn + n[1] * cs, R = 1.5, depth = Math.min(.5, amt * 3.4);
    for (const mesh of this.bodyMeshes) {
      const a = mesh.geometry.attributes.position, p = a.array, o = mesh.userData.orig; let touched = false;
      for (let i = 0; i < p.length; i += 3) {
        const d = Math.hypot(o[i] - lx / this.T.w, (o[i + 1] - .55) * .6, o[i + 2] - lz / this.T.l); if (d > R) continue;
        const w = (1 - d / R) ** 2 * depth, jit = Math.sin(o[i] * 37.1 + o[i + 1] * 91.7 + o[i + 2] * 53.3) * .35;
        p[i] += dx * w * (1 + jit); p[i + 1] -= w * .25 * (1 + jit); p[i + 2] += dz * w * (1 + jit);
        const ex = p[i] - o[i], ey = p[i + 1] - o[i + 1], ez = p[i + 2] - o[i + 2], el = Math.hypot(ex, ey, ez);
        if (el > .5) { const k = .5 / el; p[i] = o[i] + ex * k; p[i + 1] = o[i + 1] + ey * k; p[i + 2] = o[i + 2] + ez * k; }
        touched = true;
      }
      if (touched) { a.needsUpdate = true; mesh.geometry.computeVertexNormals(); }
    }
    return amt;
  }
  get health() { const D = this.dmg, P = this.parts; return Math.max(.05, 1 - (D.front + D.rear + D.left + D.right) / 4 * .55 - P.engine * .2 - P.gearbox * .1 - (P.wheels[0] + P.wheels[1] + P.wheels[2] + P.wheels[3]) / 4 * .25); }
  get stranded() { return this.fuelK > 0 && this.fuel <= 0 && this.speed < 1; }   // only an empty tank strands a car now
  repair() {
    this.fitDirty = true; this.hk = null; this.crackU.value.set(0, 0, 0, 0); this.bT = 0; this.eT = .25; this.dmg = { front: 0, rear: 0, left: 0, right: 0 }; this.tyre = 1; this.dirt = 0; this.mud = 0; this.scr = []; this.parts = { engine: 0, gearbox: 0, wheels: [0, 0, 0, 0] }; this.gone = [false, false, false, false]; for (const k in this.wheels) this.wheels[k].mesh.traverse(o => { o.visible = true; }); this.dress(this.look); for (const l of this.lamps) l.ok = true; this.setLights(this.lightsOn);
    for (const mesh of this.bodyMeshes) { mesh.geometry.attributes.position.array.set(mesh.userData.orig); mesh.geometry.attributes.position.needsUpdate = true; mesh.geometry.computeVertexNormals(); }
  }

  // ---- visuals: ride height from the track, body roll, wheel spin + steer
  render(dt, track, al = 1) {
    this.m.disc.emissiveIntensity = Math.pow(this.bT || 0, 1.4) * 2.6; if (this.fitDirty) { this.fitDirty = false; this.hang(); this.fitLamps(); }      // hot brake discs glow orange
    if (this.tex) for (const k in this.tex) { const U = this.tex[k].userData.rc; U.uDirt.value = this.dirt; U.uMud.value = this.mud; for (let q = 0; q < 6; q++) { const s = this.scr[q]; U.uScr.value[q].set(s ? s.x : 0, s ? s.y : 0, s ? s.z : 0, s ? s.r : 0); } }
    const X = this.rx = this.px + (this.x - this.px) * al, Z = this.rz = this.pz + (this.z - this.pz) * al, TH = this.pth + wrap(this.th - this.pth) * al;
    { const VL = TUNE.visualLead, sp = Math.hypot(this.vx, this.vz), want = clamp(this.steer * VL.steer + this.r * VL.yaw, -VL.max, VL.max) * Math.min(1, sp / VL.fullSpeed) * (this.vf > 1 && !(this.touchT > 0) ? 1 : 0); this.touchT = Math.max(0, (this.touchT || 0) - dt); this.lead += (want - this.lead) * Math.min(1, dt * VL.rate); }
    const sn = Math.sin(TH), cs = Math.cos(TH), h = [];
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]]; h.push(track.height(X + sn * w.z + cs * w.x, Z + cs * w.z - sn * w.x)); }
    const k = Math.min(1, dt * 14);
    this.y += ((h[0] + h[1] + h[2] + h[3]) / 4 - this.y) * Math.min(1, dt * 25);
    this.pitch += (Math.atan2((h[2] + h[3] - h[0] - h[1]) / 2, this.a + this.b) - this.pitch) * k;
    this.roll += (Math.atan2((h[0] + h[2] - h[1] - h[3]) / 2, this.tw * 2) - this.roll) * k;
    this.root.position.set(X, this.y + (this.lift || 0) + (this.sus ? clamp(this.sus.z - this.y, -.2, .7) : 0), Z); this.root.rotation.set(this.pitch, TH + this.lead, this.roll);
    const mk = Math.sqrt(clamp(this.spec.mass / 1500, .5, 1.8)), stiff = this.spec.body === 'f1' ? .25 : this.spec.klass === 'Super' ? .6 : this.spec.klass === 'Utility' ? 1.5 : 1;
    this.rollD += (clamp((this.sus ? this.sus.r * 4.2 : this.ayS * .026) * mk * stiff, -.22, .22) - this.rollD) * Math.min(1, dt * 6.5 / mk);
    this.pitchD += (clamp((this.sus ? -this.sus.p * 4.2 : -this.axS * .0145) * mk * stiff, -.12, .12) - this.pitchD) * Math.min(1, dt * 6.5 / mk);
    const rough = (this.speed > 2 ? (this.grass * .011 + (this.wsurf.includes(KERB) ? .005 : 0)) : 0) + (this.dead ? 0 : .0006 + (this.rpm || 0) * .0019);      // engine vibration rises with the revs
    this.chassis.rotation.set(this.pitchD + (Math.random() - .5) * rough * .5 + this.dmg.front * .02 + ((this.gone[0] || this.gone[1] ? .06 : 0) - (this.gone[2] || this.gone[3] ? .06 : 0)), 0, ((this.gone[1] || this.gone[3] ? .07 : 0) - (this.gone[0] || this.gone[2] ? .07 : 0)) + this.rollD + (Math.random() - .5) * rough + (this.dmg.left - this.dmg.right) * .035);
    if (this.glowPool) this.glowPool.quaternion.copy(this.chassis.quaternion).invert().multiply(FLATQ);      // the pool of light stays flat on the road while the body rolls and pitches
    this.chassis.position.y = this.rideY + (Math.random() - .5) * rough + (this.rpm > .2 ? Math.sin(performance.now() * .05) * .003 : 0);
    const vf = this.vf, d = vf / this.R * dt;
    this.spin[0] += d; this.spin[1] += this.locked ? 0 : d * (1 + this.wspin * 3) + (this.wspin > 0 ? (30 + this.wspin * 40) * dt : 0);
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]]; w.mesh.rotation.x = this.spin[i < 2 ? 0 : 1]; w.mesh.rotation.z = this.parts.wheels[i] * .32 * Math.sin(this.spin[i < 2 ? 0 : 1]); w.mesh.scale.y = TUNE.toy.wheel * (this.parts.wheels[i] > TUNE.parts.flatAt ? .82 : 1);   // bent wheels wobble, flat tyres squash
      if (i < 2) w.pivot.rotation.y = this.stW ? this.stW[i] : this.steer;
      w.pivot.position.y = w.y + (this.wsurf[i] === GRASS && this.speed > 2 ? (Math.random() - .5) * .012 : 0);
    }
    this.m.rear.emissiveIntensity = this.braking ? 2.4 : .5; if (this.rlMat) this.rlMat.opacity += ((this.braking ? 1 : this.lightsOn ? .5 : 0) - this.rlMat.opacity) * .35;
    if (Math.abs(this.dirt - this.dirtShown) > .03) { this.dirtShown = this.dirt; this.m.paint.color.copy(this.baseColor).lerp(DUST[track.def.theme === 'desert' ? 1 : 0], this.dirt * .6); this.m.paint.roughness = .32 + this.dirt * .5; this.m.paint.clearcoat = 1 - this.dirt * .8; }
  }

  // ---- smoke, dirt, skid marks, nitro flame
  effects(dt, fx, track, detail = 1) {
    const sn = Math.sin(this.th), cs = Math.cos(this.th), sp = this.speed, dust = track.def.theme === 'desert' ? [.78, .64, .42] : [.36, .28, .17];
    const skid = (this.slipR > .16 && sp > 6) || (this.wspin > .12) || (this.locked && sp > 3);
    this.emitAcc += dt * 60 * detail; const n = Math.floor(this.emitAcc); this.emitAcc -= n;
    for (let i = 2; i < 4; i++) {
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x, sf = this.wsurf[i], y = track.height(wx, wz);
      const onRoad = sf === ROAD || sf === KERB;
      if (skid && onRoad) {
        const inten = clamp(this.slipR * 1.6 + this.wspin + (this.locked ? .6 : 0), .3, 1);
        for (let k = 0; k < n; k++) if (Math.random() < inten) { const jx = (Math.random() - .5) * .4, jz = (Math.random() - .5) * .4, sh = .9 + Math.random() * .1;
            fx.smoke.emit(wx + jx, y + .12, wz + jz, this.vx * .34 + (Math.random() - .5) * 1.2, .5 + Math.random() * .7, this.vz * .34 + (Math.random() - .5) * 1.2, 1.0 + Math.random() * .8, .65, 2.6, sh, sh, sh + .03, .3 * inten);                 // dense, bright core hugging the tyre
            if (Math.random() < .7) fx.smoke.emit(wx + jx * 2, y + .3, wz + jz * 2, this.vx * .22 + (Math.random() - .5) * 2.2, .9 + Math.random() * 1.3, this.vz * .22 + (Math.random() - .5) * 2.2, 2.0 + Math.random() * 1.3, 1.2, 3.8, sh - .05, sh - .04, sh, .1 * inten); }   // big billows that rise, spread and hang
        const l = [wx + cs * .15, y + .06, wz - sn * .15], r = [wx - cs * .15, y + .06, wz + sn * .15], last = this.lastSk[i - 2];
        if (last && (last[0][0] - l[0]) ** 2 + (last[0][2] - l[2]) ** 2 < 9) fx.skids.quad(last[0], last[1], l, r);
        this.lastSk[i - 2] = [l, r];
      } else this.lastSk[i - 2] = null;
    }
    if (this.eT > .72 && n > 0 && Math.random() < .55) { const q = this.eT - .7, ex = this.x + Math.sin(this.th) * this.zf * .72, ez = this.z + Math.cos(this.th) * this.zf * .72, gy = track.height(this.x, this.z) + .85; fx.smoke.emit(ex + (Math.random() - .5) * .6, gy, ez + (Math.random() - .5) * .6, this.vx * .3 + (Math.random() - .5) * .8, 1.6 + Math.random() * 1.4, this.vz * .3 + (Math.random() - .5) * .8, .8 + Math.random() * .7, .35 + q * .4, 1.2, .93, .95, .98, .3 + q * .3, -.6); }      // steam from an overheating engine
    if (fx.sparks && this.scrapeT > 0 && this.hitN) { const nn = this.hitN, sp = Math.min(30, this.speed), cnt = 2 + Math.min(9, sp * .3) | 0, gy = track.height(this.hitX, this.hitZ);      // grinding along a wall or another car: a steady shower of sparks
      for (let i = 0; i < cnt; i++) fx.sparks.emit(this.hitX, gy + .3 + Math.random() * .45, this.hitZ, -this.vx * (.1 + Math.random() * .3) + nn[0] * (1 + Math.random() * 3.5) + (Math.random() - .5) * 2, .5 + Math.random() * 3.2, -this.vz * (.1 + Math.random() * .3) + nn[1] * (1 + Math.random() * 3.5) + (Math.random() - .5) * 2, .2 + Math.random() * .45); }
    if (this.scrapeT > 0) { this.scrapeT -= dt; if (sp > 3 && n > 0) { const nn = this.hitN || [0, 0], tx = -nn[1], tz = nn[0], along = Math.sign(this.vx * tx + this.vz * tz) || 1, gy = track.height(this.x, this.z);
        for (let k = 0; k < n * 2; k++) { const s = (3 + Math.random() * 8) * along; fx.glow.emit(this.x + (Math.random() - .5), gy + .35 + Math.random() * .3, this.z + (Math.random() - .5), tx * s + this.vx * .35, .4 + Math.random() * 3.5, tz * s + this.vz * .35, .25 + Math.random() * .35, .12, 0, 1, .7, .26, 1, 15); }
        if (Math.random() < .6) fx.glow.emit(this.x - this.vx * .08, gy + .04, this.z - this.vz * .08, 0, 0, 0, 1.4 + Math.random(), .1, 0, 1, .42, .1, .8, 0); } }
    if (sp > 8 && this.dmg.front + this.dmg.rear > 1.15 && n > 0) { const gy = track.height(this.x, this.z) + .1; for (let k = 0; k < n; k++) if (Math.random() < .5) fx.glow.emit(this.x - Math.sin(this.th) * 1.5, gy, this.z - Math.cos(this.th) * 1.5, -this.vx * .2 + (Math.random() - .5) * 3, .8 + Math.random() * 1.6, -this.vz * .2 + (Math.random() - .5) * 3, .22 + Math.random() * .2, .09, 0, 1, .66, .22, 1, 14); }      // a wrecked car grinding its floor on the road
    if (sp > 3) for (let i = 0; i < 4; i++) {     // dirt from any wheel that is off the tarmac
      if (this.wsurf[i] !== GRASS) continue;
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x, y = track.height(wx, wz), q = clamp(sp / 25, .2, 1);
      for (let k = 0; k < n; k++) if (Math.random() < q * .7) {
        fx.smoke.emit(wx, y + .1, wz, this.vx * .3 + (Math.random() - .5) * 2, 1 + Math.random() * 2, this.vz * .3 + (Math.random() - .5) * 2, .7 + Math.random() * .6, .7, 3.5, dust[0], dust[1], dust[2], .42);
        if (Math.random() < .5) fx.smoke.emit(wx, y + .1, wz, -this.vx * .1 + (Math.random() - .5) * 4, 2 + Math.random() * 3, -this.vz * .1 + (Math.random() - .5) * 4, .5, .16, 0, dust[0] * .6, dust[1] * .6, dust[2] * .6, 1, 12);   // clods
      }
    }
    if (this.lockF) for (let i = 0; i < 2; i++) {                          // hard braking: the fronts chirp and smoke a little
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x;
      if (Math.random() < .35 * n) fx.smoke.emit(wx, this.y + .15, wz, this.vx * .3, .6 + Math.random(), this.vz * .3, .6, .6, 2.6, .93, .93, .95, .16);
    }
    if (this.wspinF > .15) for (let i = 0; i < 2; i++) { const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x; for (let k = 0; k < n; k++) if (Math.random() < .6) fx.smoke.emit(wx, this.y + .15, wz, (Math.random() - .5) * 2, .8 + Math.random(), (Math.random() - .5) * 2, 1, .8, 3, .93, .93, .95, .28); }
    if (this.burn) for (let i = 2; i < 4; i++) { const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x; for (let k = 0; k < n * 2; k++) fx.smoke.emit(wx + (Math.random() - .5) * .5, this.y + .2, wz + (Math.random() - .5) * .5, -sn * 2 + (Math.random() - .5) * 3, 1 + Math.random() * 2, -cs * 2 + (Math.random() - .5) * 3, 1.6 + Math.random(), 1.1, 4.2, .96, .96, .97, .4); }
    if (sp < 12 && Math.random() < .25 * n) { const e = this.exh[Math.random() * this.exh.length | 0], ex = this.x + sn * e[2] + cs * e[0], ez = this.z + cs * e[2] - sn * e[0]; fx.smoke.emit(ex, this.y + e[1], ez, this.vx * .6 - sn * (1 + this.rpm * 2), .25 + Math.random() * .4, this.vz * .6 - cs * (1 + this.rpm * 2), .7 + Math.random() * .5, .22, 1.3, .78, .78, .82, .1 + this.rpm * .1); }   // exhaust haze when stationary or slow
    if (skid && sp > 8 && Math.random() < .5) { const w = this.wheels[WK[2 + (Math.random() * 2 | 0)]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x; fx.smoke.emit(wx, this.y + .1, wz, -this.vx * .15 + (Math.random() - .5) * 5, 1 + Math.random() * 2.5, -this.vz * .15 + (Math.random() - .5) * 5, .5, .09, 0, .05, .05, .05, 1, 13); }   // flecks of rubber thrown off a sliding tyre
    if (this.gear !== this._g) { if (this._g && sp > 6) { const ex = this.x - sn * (this.zr + .15), ez = this.z - cs * (this.zr + .15); for (let k = 0; k < 4; k++) fx.smoke.emit(ex, this.y + .4, ez, this.vx * .5 - sn * 2, .4 + Math.random(), this.vz * .5 - cs * 2, .5, .35, 2.2, .35, .35, .37, .3); } this._g = this.gear; }   // a puff from the exhaust on each gear change
    if (this.backfire > 0) for (const e of this.exh) { const ex = this.x + sn * e[2] + cs * e[0], ez = this.z + cs * e[2] - sn * e[0], ey = this.y + e[1], k = Math.min(1, this.backfire / .12);      // unburnt fuel lighting in the pipe: a blue-white core in an orange tongue
      for (let q = 0; q < 2; q++) { const v = 4 + Math.random() * 7; fx.glow.emit(ex - sn * .1, ey, ez - cs * .1, this.vx - sn * v + (Math.random() - .5) * 1.5, (Math.random() - .3) * 1.2, this.vz - cs * v + (Math.random() - .5) * 1.5, .07 + Math.random() * .07, .5 * k + .15, -3, 1, .5 + Math.random() * .25, .12, 1); }
      fx.glow.emit(ex, ey, ez, this.vx - sn * 3, 0, this.vz - cs * 3, .05, .28, -2, .75, .85, 1, 1); if (Math.random() < .3) fx.smoke.emit(ex - sn * .5, ey + .1, ez - cs * .5, this.vx * .5 - sn * 2, .8, this.vz * .5 - cs * 2, .5, .3, 2, .16, .16, .17, .3); }
    const wet = track.wet || 0;
    if (wet > .15 && sp > 8) for (let i = 2; i < 4; i++) {                 // spray off wet tarmac
      const w = this.wheels[WK[i]], wx = this.x + sn * w.z + cs * w.x, wz = this.z + cs * w.z - sn * w.x;
      for (let k = 0; k < n; k++) if (Math.random() < wet * .8) fx.smoke.emit(wx, this.y + .2, wz, this.vx * .45 + (Math.random() - .5) * 2, 1.2 + Math.random() * 1.5, this.vz * .45 + (Math.random() - .5) * 2, .6 + Math.random() * .4, .7, 4, .8, .86, .93, .16 * wet);
    }
    if (this.parts.gearbox > .5 && sp > 4 && Math.random() < .25) fx.smoke.emit(this.x - sn * this.zr * .5, this.y + .12, this.z - cs * this.zr * .5, 0, 0, 0, 2.5, .22, .1, .05, .04, .03, .7);   // oil drops from a hurt gearbox
    if (this.parts.engine > .3) {                                              // a hurt engine smokes, then burns
      const q = this.parts.engine, ex = this.x + sn * this.zf * .6, ez = this.z + cs * this.zf * .6, g = .5 - q * .42;
      for (let k = 0; k < n; k++) if (Math.random() < q * .5) fx.smoke.emit(ex + (Math.random() - .5) * .6, this.y + this.top * .75, ez + (Math.random() - .5) * .6, this.vx * .5, 1.5 + Math.random() * 1.5, this.vz * .5, 1.2 + Math.random() * .8, .6, 2.4, g, g, g, .4);
      if (q > .85 && Math.random() < .5) fx.glow.emit(ex, this.y + this.top * .7, ez, this.vx, 1.5 + Math.random() * 2, this.vz, .25, .5, -1, 1, .5, .1, .8);
    }
    if (this.nitroOn) for (const sx of [-.35, .35]) for (let k = 0; k < Math.max(1, n); k++) {
      const ex = this.x - sn * (this.zr + .1) + cs * sx, ez = this.z - cs * (this.zr + .1) - sn * sx;
      fx.glow.emit(ex, this.y + .42, ez, this.vx - sn * (6 + Math.random() * 5), (Math.random() - .5), this.vz - cs * (6 + Math.random() * 5), .12 + Math.random() * .1, .55, -2, .35, .65, 1, .9);
    }
  }
  // sparks fly along the surface we scraped, panel fragments tumble away, dust lifts from the contact point
  impactFX(fx, track, power) {
    { const n0 = this.hitN || [0, 0], tx0 = -n0[1], tz0 = n0[0], al0 = Math.sign(this.vx * tx0 + this.vz * tz0) || 1, v0 = Math.min(1, power / 20), gy = track.height(this.hitX, this.hitZ) + .05;
      for (let i = 0; i < 3 + v0 * 12; i++) { const d = (.5 + Math.random() * (3 + v0 * 9)) * al0; fx.glow.emit(this.hitX + tx0 * d, gy, this.hitZ + tz0 * d, 0, 0, 0, 1.3 + Math.random() * 1.6, .11, 0, 1, .45, .12, .85, 0); } }      // embers: glowing specks that lie on the road and cool slowly
    const y = track.height(this.hitX, this.hitZ) + .45, n = this.hitN || [0, 0], tx = -n[1], tz = n[0], along = Math.sign(this.vx * tx + this.vz * tz) || 1, v = Math.min(1, power / 20);
    for (let i = 0; i < 5 + v * 26; i++) { const s = (4 + Math.random() * 10) * along * (.4 + v); fx.glow.emit(this.hitX, y + Math.random() * .3, this.hitZ, tx * s + n[0] * (1 + Math.random() * 4) + this.vx * .3, .5 + Math.random() * 4.5, tz * s + n[1] * (1 + Math.random() * 4) + this.vz * .3, .2 + Math.random() * .4, .13, 0, 1, .72, .28, 1, 15); }
    if (fx.sparks) { const n2 = Math.min(120, 8 + power * 4.5) | 0, sp0 = 6 + power * .55;      // metal sparks: a burst along the scraped surface, thrown forward with the car's motion
      for (let i = 0; i < n2; i++) { const s = (3 + Math.random() * sp0) * (Math.random() < .78 ? along : -along) * (.5 + Math.random()), up = .8 + Math.random() * (3 + power * .14); fx.sparks.emit(this.hitX + (Math.random() - .5) * .3, y, this.hitZ + (Math.random() - .5) * .3, tx * s + n[0] * Math.random() * 3 + this.vx * .35, up, tz * s + n[1] * Math.random() * 3 + this.vz * .35, .25 + Math.random() * .6); } }
    if (power > 6) {
      const c = new THREE.Color(this.color);
      for (let i = 0; i < 3 + v * 10; i++) fx.smoke.emit(this.hitX, y, this.hitZ, n[0] * (2 + Math.random() * 5) + (Math.random() - .5) * 5 + this.vx * .4, 2 + Math.random() * 5, n[1] * (2 + Math.random() * 5) + (Math.random() - .5) * 5 + this.vz * .4, .7 + Math.random() * .5, .16 + Math.random() * .12, 0, i % 2 ? c.r : .08, i % 2 ? c.g : .08, i % 2 ? c.b : .09, 1, 13);
      for (let i = 0; i < 6; i++) fx.smoke.emit(this.hitX, y - .2, this.hitZ, (Math.random() - .5) * 3, .6 + Math.random(), (Math.random() - .5) * 3, .8, .8, 3, .6, .58, .55, .22);
    }
  }

  // ---- network ghost: dead-reckon from the last packet and ease towards it
  // Snapshot interpolation. Every packet carries the sender's clock; the rival is drawn a short, self-adjusting
  // delay in the past, between two real snapshots, so late or bunched packets are absorbed instead of shown as jumps.
  netApply(p, now) {
    const N = this.nb || (this.nb = { buf: [], off: Infinity, iv: 1000 / TUNE.net.hz, jit: 4, last: 0, delay: 70 }), t = p[8];
    if (N.buf.length && t <= N.buf[N.buf.length - 1].t) return;               // stale or out of order
    N.buf.push({ t, x: p[0], z: p[1], th: p[2], vx: p[3], vz: p[4], r: p[5] }); if (N.buf.length > 40) N.buf.shift();
    N.off = Math.min(N.off + .05, now - t);                                   // clock offset + fastest trip seen (relaxes slowly)
    if (N.last) { const d = now - N.last; N.iv += (d - N.iv) * .1; N.jit += (Math.abs(d - N.iv) - N.jit) * .1; } N.last = now;
    this.steer = p[6]; this.braking = !!(p[7] & 1); this.nitroOn = !!(p[7] & 2); this.locked = !!(p[7] & 4); this.slipR = p[7] & 8 ? .4 : 0; this.wspin = 0; this.pitBusy = !!(p[7] & 16);
  }
  netStep(dt, track, now) {
    const N = this.nb; if (!N || !N.buf.length) return;
    { const want = clamp(N.iv * TUNE.net.intervalK + N.jit * TUNE.net.jitterK, TUNE.net.minBuffer, TUNE.net.maxBuffer); N.delay += (want - N.delay) * Math.min(1, dt * (want > N.delay ? 2.5 : .5)); }   // grows quickly when the link gets rough, shrinks back slowly     // buffer just enough for the current jitter
    const T = now - N.off - N.delay, B = N.buf; let k = B.length - 1; while (k > 0 && B[k].t > T) k--;
    const a = B[k], b = B[k + 1]; let x, z, th, vx, vz, r;
    if (b && T >= a.t) {                                                      // between two snapshots: cubic (Hermite) blend using their velocities
      const h = (b.t - a.t) / 1000, u = (T - a.t) / (b.t - a.t), u2 = u * u, u3 = u2 * u, h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
      x = h00 * a.x + h10 * h * a.vx + h01 * b.x + h11 * h * b.vx; z = h00 * a.z + h10 * h * a.vz + h01 * b.z + h11 * h * b.vz;
      th = a.th + wrap(b.th - a.th) * u; vx = a.vx + (b.vx - a.vx) * u; vz = a.vz + (b.vz - a.vz) * u; r = a.r + (b.r - a.r) * u;
    } else {                                                                  // ran out of data: coast on the last velocity for up to a quarter second, then hold
      const e = clamp((T - a.t) / 1000, 0, .25), f = T - a.t > 250 ? Math.exp(-(T - a.t - 250) / 200) : 1;
      x = a.x + a.vx * e; z = a.z + a.vz * e; th = a.th + a.r * e; vx = a.vx * f; vz = a.vz * f; r = a.r * f;
    }
    const q = Math.min(1, dt * 25); this.x += (x - this.x) * q; this.z += (z - this.z) * q; this.th += wrap(th - this.th) * q; this.vx = vx; this.vz = vz; this.r = r;
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]]; this.wsurf[i] = track.surf(this.x + Math.sin(this.th) * w.z + Math.cos(this.th) * w.x, this.z + Math.cos(this.th) * w.z - Math.sin(this.th) * w.x); }
    this.grass = this.wsurf.filter(s => s === GRASS).length / 4; this.px = this.x; this.pz = this.z; this.pth = this.th;
  }
  netPack() { return [+this.x.toFixed(2), +this.z.toFixed(2), +this.th.toFixed(3), +this.vx.toFixed(2), +this.vz.toFixed(2), +this.r.toFixed(2), +this.steer.toFixed(2), (this.braking ? 1 : 0) | (this.nitroOn ? 2 : 0) | (this.locked ? 4 : 0) | (this.slipR > .16 ? 8 : 0) | (this.pitBusy ? 16 : 0), Math.round(performance.now())]; }

  dispose() { this.m.paint.dispose(); this.m.rear.dispose(); }
}

// ---- AI driver: pure-pursuit steering + brake-point speed planning along the centre line
// The racing line: found once per track by minimising the curvature of the whole lap inside the road limits (the fourth-order smoothing of the path, with the offsets clamped to the
// road). That gives what professionals drive: a wide approach, a late turn-in, the apex clipped, and the exit run out to the edge, with the largest possible corner radius, so the
// corner speed limit is higher than the centre-line's. Returns the lateral offset of the line at every node and its signed curvature.
function buildRaceLine(track, maxOff) {
  const p = track.path, n = p.length, st = 3, m = Math.floor(n / st), mx = Math.max(1, maxOff);
  const cx = new Float64Array(m), cz = new Float64Array(m), nx = new Float64Array(m), nz = new Float64Array(m);
  for (let i = 0; i < m; i++) { const q = p[i * st]; cx[i] = q.x; cz[i] = q.z; nx[i] = q.tz; nz[i] = -q.tx; }
  // The energy is the sum over the lap of |second difference of (centre line + offset * normal)|^2: a quadratic in the offsets, M o = -b, where M is banded.
  const M = new Float64Array(m * m), b = new Float64Array(m), co = [1, -2, 1];
  for (let i = 0; i < m; i++) { const J = [(i + m - 1) % m, i, (i + 1) % m], dx = cx[J[0]] - 2 * cx[i] + cx[J[2]], dz = cz[J[0]] - 2 * cz[i] + cz[J[2]];
    for (let a = 0; a < 3; a++) { const ja = J[a]; b[ja] += co[a] * (nx[ja] * dx + nz[ja] * dz); for (let c2 = 0; c2 < 3; c2++) { const jc = J[c2]; M[ja * m + jc] += co[a] * co[c2] * (nx[ja] * nx[jc] + nz[ja] * nz[jc]); } } }
  for (let i = 0; i < m; i++) M[i * m + i] += 1e-6;
  const o = new Float64Array(m), fixed = new Uint8Array(m);
  for (let round = 0; round < 14; round++) {      // active set: solve for the free offsets, pin whichever hit the road edge, repeat
    const fr = []; for (let i = 0; i < m; i++) if (!fixed[i]) fr.push(i); const f = fr.length; if (!f) break;
    const A = new Float64Array(f * (f + 1)); for (let r = 0; r < f; r++) { let rhs = -b[fr[r]]; for (let q = 0; q < m; q++) if (fixed[q]) rhs -= M[fr[r] * m + q] * o[q]; for (let q = 0; q < f; q++) A[r * (f + 1) + q] = M[fr[r] * m + fr[q]]; A[r * (f + 1) + f] = rhs; }
    for (let col = 0; col < f; col++) { let pv = col, best = Math.abs(A[col * (f + 1) + col]); for (let r = col + 1; r < f; r++) { const v = Math.abs(A[r * (f + 1) + col]); if (v > best) { best = v; pv = r; } }
      if (pv !== col) for (let q = col; q <= f; q++) { const t = A[col * (f + 1) + q]; A[col * (f + 1) + q] = A[pv * (f + 1) + q]; A[pv * (f + 1) + q] = t; }
      const d = A[col * (f + 1) + col] || 1e-12; for (let r = col + 1; r < f; r++) { const k2 = A[r * (f + 1) + col] / d; if (k2) for (let q = col; q <= f; q++) A[r * (f + 1) + q] -= k2 * A[col * (f + 1) + q]; } }
    for (let r = f - 1; r >= 0; r--) { let s = A[r * (f + 1) + f]; for (let q = r + 1; q < f; q++) s -= A[r * (f + 1) + q] * o[fr[q]]; o[fr[r]] = s / (A[r * (f + 1) + r] || 1e-12); }
    let hit = false; for (const i of fr) if (Math.abs(o[i]) > mx) { o[i] = Math.sign(o[i]) * mx; fixed[i] = 1; hit = true; } if (!hit) break; }
  const off = new Float32Array(n), X = new Float64Array(n), Z = new Float64Array(n);
  for (let t = 0; t < n; t++) { const u = t / st, i0 = Math.min(m - 1, Math.floor(u)), i1 = (i0 + 1) % m, f = Math.min(1, u - i0), s = f * f * (3 - 2 * f); off[t] = o[i0] + (o[i1] - o[i0]) * s; }
  for (let t = 0; t < n; t++) { const q = p[t]; X[t] = q.x + q.tz * off[t]; Z[t] = q.z - q.tx * off[t]; }
  const k = new Float32Array(n); let agree = 0;
  for (let i = 0; i < n; i++) { const i0 = (i + n - 1) % n, i1 = (i + 1) % n, ax = X[i] - X[i0], az = Z[i] - Z[i0], bx = X[i1] - X[i], bz = Z[i1] - Z[i], la = Math.hypot(ax, az) || 1, lb = Math.hypot(bx, bz) || 1, ch = Math.hypot(X[i1] - X[i0], Z[i1] - Z[i0]) || 1; k[i] = 2 * (ax * bz - az * bx) / (la * lb * ch); agree += k[i] * p[i].k; }
  const sg = agree < 0 ? -1 : 1; for (let pass = 0; pass < 3; pass++) { const t = Float32Array.from(k); for (let i = 0; i < n; i++) k[i] = sg * (t[(i + n - 2) % n] + 2 * t[(i + n - 1) % n] + 3 * t[i] + 2 * t[(i + 1) % n] + t[(i + 2) % n]) / 9; }
  return { o: off, k };
}
export function aiDrive(car, track, ai, cars, dt) {
  const n = track.n, sp = car.speed, p = track.path;
  const look = Math.round((7 + sp * .42) / track.spacing), tgt = p[(car.idx + look) % n];
  // drift the racing line towards the inside of the coming corner, and around slower cars
  if (ai.contactT > 0) ai.contactT -= dt;      // after any touch: lift, give the other car room, and rejoin the line gently
  const ap = p[(car.idx + look + Math.round(34 / track.spacing)) % n], inside = clamp(tgt.k * 300, -1, 1), setup = clamp(ap.k * 300, -1, 1);
  // Apex rules, taken from the track's own corners: brake in a straight line, swing out wide on the approach, turn in LATE, clip the apex after the
  // middle of the corner and get on the power, then run out to the edge of the road on the exit. In an S-bend the exit of one corner blends into the entry of the next.
  const ix = (car.idx + look + 7) % n, T0 = .005, kk = i => p[(i % n + n) % n].k, W = ai.max * .72, sm = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  const corner = from => {
    let s = from, q = 0; const sg = Math.sign(kk(from));
    if (Math.abs(kk(from)) > T0) { while (q++ < 50 && Math.abs(kk(s - 1)) > T0 && Math.sign(kk(s - 1)) === sg) s--; }
    else { s = -1; for (q = 1; q <= 50; q++) if (Math.abs(kk(from + q)) > T0) { s = from + q; break; } if (s < 0) return null; }
    const dir = Math.sign(kk(s)); let e = s; q = 0; while (q++ < 70 && Math.abs(kk(e + 1)) > T0 * .7 && Math.sign(kk(e + 1)) === dir) e++;
    return { s, e, dir, len: e - s + 1, inside: from >= s && from <= e };
  };
  const RL = track.rl || (track.rl = buildRaceLine(track, ai.max)), rix = (car.idx + look + 7) % n; let cd = 0;
  if (ai.init === undefined) { const q0 = p[car.idx % n]; ai.off = (car.x - q0.x) * q0.tz - (car.z - q0.z) * q0.tx; ai.init = 1; }      // start from where the car actually is on the grid, so there is no sudden swerve onto the line      // cd: which way the corner ahead turns (the inside car owns the apex)
  { const k1 = RL.k[(car.idx + look + 3) % n], k2 = RL.k[(car.idx + look + 12) % n], kc = Math.abs(k1) > Math.abs(k2) ? k1 : k2; if (Math.abs(kc) > .004) cd = Math.sign(kc); }
  let want = RL.o[rix] + ai.lane * clamp(1 - (ai.rt ?? 99) / 12, 0, 1) * .8 + (ai.brain && ai.brain.lapse > 0 && ai.brain.kind === 3 ? ai.brain.bias : 0);
  const rs = clamp(1 - (ai.rt ?? 99) / 22, 0, 1);      // start restraint: the first 15 s are the most crowded, so gaps are wider and the first corner is taken a little carefully
  let v0cap = 1e9, brakeFor = 0, vFollow = 1e9; const sn0 = Math.sin(car.th), cs0 = Math.cos(car.th);
  for (const o of cars) {
    if (o === car || o.out) continue;
    { const tau = .5, rx = (o.x + o.vx * tau) - (car.x + car.vx * tau), rz = (o.z + o.vz * tau) - (car.z + car.vz * tau), f2 = rx * sn0 + rz * cs0, l2 = rx * cs0 - rz * sn0;      // where we will be relative to each other in half a second
      if (Math.abs(f2) < 5.6 && Math.abs(l2) < 2.8 && !(o.held && o.speed < 1)) { if (f2 > -1.5) { brakeFor = Math.max(brakeFor, .7); want += (l2 > 0 ? -1 : 1) * 1.8; } else want += (l2 > 0 ? -1 : 1) * 1.4; } }      // a predicted overlap: lift if it is level or ahead, move away if it is behind
    { const qf = (o.x - car.x) * sn0 + (o.z - car.z) * cs0, ql = (o.x - car.x) * cs0 - (o.z - car.z) * sn0;      // a slow or spun car ahead in my lane: slow down early and pass it wide, like a driver who has seen the incident
      if (qf > 2 && qf < 55 && Math.abs(ql) < 3.2 && o.speed < car.speed * .5 && car.speed > 8) { brakeFor = Math.max(brakeFor, clamp((car.speed - o.speed) / (qf + 2) * .7, 0, 1)); want += (ql > 0 ? -1 : 1) * 2.4; } }
    const dx = o.x - car.x, dz = o.z - car.z, f = dx * sn0 + dz * cs0, l = dx * cs0 - dz * sn0, pk = o.isPlayer ? 2 : 1.3;      // everyone gets a wide berth, the player widest
    if (f < -3.5) { if (o.isPlayer) { if (f > -13 && Math.abs(l) < 3.2 && o.vx * sn0 + o.vz * cs0 > car.vf + 1.5) want += (l > 0 ? -1 : 1) * 2.4; continue; }       // a faster player behind: move over and let them through, never defend the line
      if (f > -15 && Math.abs(l) < 3.6 && o.vx * sn0 + o.vz * cs0 > car.vf + 1 && Math.abs(setup) > .3) want += setup * 1.4 * ai.care; continue; }   // a faster car behind before a corner: cover the inside
    if (f > 55 || Math.abs(l) > 8 * pk) continue;
    const ovf = o.vx * sn0 + o.vz * cs0, ovl = o.vx * cs0 - o.vz * sn0, closing = car.vf - ovf, ttc = closing > .5 ? Math.max(0, f - 6.4 * pk) / closing : 99, lp = l + ovl * Math.min(ttc, 1.2);   // where it will be, sideways, when we get there
    if (f > 0 && f < 34 && Math.abs(l) < 2.7 && o.speed > 3 && !o.isRemote) vFollow = Math.min(vFollow, o.vx * sn0 + o.vz * cs0 + Math.max(f - 9 - 14 * rs - Math.max(0, car.speed - o.speed) * .5, -3) * .8 + Math.min(0, o.axS || 0) * .6);      // match the car ahead, leave more room the faster I am closing, and anticipate it braking for the corner      // keep a gap: never faster than closes the distance gently
    if (o.speed < 4 && f > 0 && Math.abs(l) < 3.4) { want += l > 0 ? -3.6 : 3.6; if (ttc < 1.1) brakeFor = Math.max(brakeFor, .6); }          // stopped or crashed car ahead: go round, lift early
    else if (f > 0 && Math.abs(lp) < 3.4 * pk && ttc < 2.4 * pk) { want += (lp > 0 ? -1 : 1) * 3 * pk * (1.2 - ttc / (2.4 * pk)); if (ttc < .5 * ai.care * pk) brakeFor = Math.max(brakeFor, 1 - ttc / pk); }   // closing on a car: pick the clear side, brake if it is too late
    else if (f > -5 * pk && f < 7 * pk && Math.abs(l) < 4.3 * pk) {                                                                              // alongside
      if (cd && l * cd > 0) { want += -cd * 3 * ai.care * pk; brakeFor = Math.max(brakeFor, .1); }          // that car holds the inside: it owns the apex, so give it the room
      else want += (l > 0 ? -1 : 1) * 2.1 * ai.care * pk;                                                      // otherwise leave more than a car's width
      if (f > 1.2 && Math.abs(l) < 3.6 * pk) brakeFor = Math.max(brakeFor, .32);                                  // door to door: the car whose nose is behind lifts and drops back, so nobody fights for the same space
    }
  }
  if (ai.merge > 0) { ai.merge -= dt; v0cap = Math.min(v0cap, 30); }      // just out of the pit lane: slow, and drift onto the line instead of cutting across
  { const kk = Math.min(1, dt * (ai.merge > 0 ? .75 : 2.7)), dOff = (clamp(want, -ai.max, ai.max) - ai.off) * kk, lim = (ai.merge > 0 ? 1.3 : (ai.rt ?? 99) < 10 ? .9 + (ai.rt ?? 0) * .25 : 99) * dt; ai.off += clamp(dOff, -lim, lim); }      // the first ten seconds: the line is joined gradually
  const tx = tgt.x + tgt.tz * ai.off, tz = tgt.z - tgt.tx * ai.off;
  const err = wrap(Math.atan2(tx - car.x, tz - car.z) - car.th);
  // A driver, not a rail: steering lags by a reaction time; each part of the lap has a remembered pace that drops after a slide or an
  // off and creeps back up when the corner was easy; and now and then, more often with a car on its tail, it brakes a touch late.
  const B = ai.brain || (ai.brain = { react: .09 + Math.random() * .1, consist: .955 + Math.random() * .04, brave: 1 + Math.random() * .06, mem: new Float32Array(48).fill(1), ef: 0, lapse: 0, was: 0 });
  const slip = B.lapse > 0 ? B.kind : -1; B.ef += (err - B.ef) * Math.min(1, dt / (B.react * (slip === 4 ? 3.5 : 1))); const ef = Math.abs(err) > .6 ? err : B.ef, bk = car.idx * 48 / n | 0, cornering = Math.abs(tgt.k) > .008;
  if (cornering && !car.held) { if (car.grass > .3 || Math.abs(car.beta) > .3) B.mem[bk] = Math.max(.84, B.mem[bk] - .45 * dt); else if (car.useF < .85 && car.useR < .85) B.mem[bk] = Math.min(1.06 * B.brave, B.mem[bk] + .014 * dt); }
  const entering = Math.abs(setup) > .35 ? 1 : 0; if (entering && !B.was) { let chased = false; for (const o of cars) { if (o === car || o.out) continue; const f = (o.x - car.x) * Math.sin(car.th) + (o.z - car.z) * Math.cos(car.th); if (f < -2 && f > -11 && Math.abs((o.x - car.x) * Math.cos(car.th) - (o.z - car.z) * Math.sin(car.th)) < 4) chased = true; } if (Math.random() > Math.pow(B.consist, (1 + (track.wet || 0)) * (2 - car.tyre))) { B.lapse = 1.1 + Math.random() * .9; B.kind = Math.random() * 5 | 0; B.bias = Math.random() < .5 ? 2.5 : -2.5; } }   // more likely when chased, in the wet, on worn tyres B.was = entering; B.lapse = Math.max(0, B.lapse - dt);
  // fastest speed that still lets us slow down for every corner in sight
  let v = car.spec.top; const mu = car.spec.grip * car.bopG * (.72 + .28 * car.tyre) * ai.skill * ai.skill * .78 * TUNE.gripScale * (1 - .26 * (track.wet || 0) * (car.wetTyres ? .3 : 1)) * (1 - .3 * Math.max(car.parts.wheels[0], car.parts.wheels[1])) * 9.81, dec = 9.6 * ai.skill;
  for (let i = 0; i < 70; i++) {
    const q = p[(car.idx + i) % n], vc = Math.sqrt(mu * car.tmpK / Math.max(Math.abs(RL.k[(car.idx + i) % n]), .0015)) * 1.02 * B.mem[((car.idx + i) % n) * 48 / n | 0] * (slip === 0 ? 1.08 : 1), lim = Math.sqrt(vc * vc + 2 * dec * i * track.spacing);
    if (lim < v) v = lim;
  }
  if (car.grass > .4) v = Math.min(v, 16); v *= 1 - .12 * rs;
  v = Math.min(v, vFollow, v0cap); if (ai.contactT > 0) v = Math.min(v, Math.max(9, sp * .86));
  const inp = ai.inp; inp.steer = clamp(ef * 2.4, -1, 1);
  inp.throttle = sp < v ? (Math.abs(err) > .5 ? .5 : 1) : 0; inp.brake = sp > v + 1.5 ? clamp((sp - v) / 6, .2, 1) : 0;
  if (sp > 8 && Math.abs(car.beta) > .1) inp.throttle *= Math.abs(car.beta) > .25 ? .15 : .5;   // feather the throttle when the tail steps out
  inp.hand = false; inp.nitro = ai.skill > .9 && Math.abs(tgt.k) < .004 && Math.abs(err) < .08 && car.nitro > .5;
  if (Math.abs(err) > 1.9 && sp < 12) { inp.steer = err > 0 ? 1 : -1; inp.throttle = .6; inp.brake = 0; }           // facing the wrong way: spin it round
  if (car.held) ai.revT = 0;
  ai.jam = sp < 1.2 && inp.throttle > 0 && !car.held ? (ai.jam || 0) + dt : 0;
  if (ai.jam > 1.1 || ai.revT > 0) { if (!(ai.revT > 0)) ai.revT = 1.2; ai.revT -= dt; ai.jam = 0; inp.throttle = 0; inp.brake = 1; inp.steer = -inp.steer; inp.nitro = false; return inp; }   // nosed into a barrier: back out, then go
  // The mistakes: 0 brakes too late, 1 gets on the power too early (the tail steps out), 2 locks the brakes and ploughs on,
  // 3 misses the apex by a car's width, 4 is caught napping (slow hands, does not see the car ahead).
  car.tc = slip !== 1; car.abs = slip !== 2;
  if (slip === 1 && cornering && car.vf > 8) { inp.throttle = 1; inp.brake = 0; }
  if (slip === 2 && inp.brake > 0) inp.brake = 1;
  if (slip === 4) brakeFor = 0;
  if (brakeFor > 0 && car.vf > 6) { inp.throttle = 0; inp.brake = Math.max(inp.brake, brakeFor * .8); }
  if (inp.brake && car.vf < 2) inp.brake = 0;      // never let the AI select reverse by accident
  return inp;
}
