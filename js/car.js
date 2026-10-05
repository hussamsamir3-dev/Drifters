// Cars: models, tyre-model physics, wheel animation, effects, AI driver, network ghost.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GRASS, KERB, ROAD, WALL, PIT } from './tracks.js';
import { getAsset } from './assets.js';

// top = top speed (m/s), acc = launch acceleration (m/s²), grip = tyre μ, rear = rear-axle grip bias
// (below 1 = tail-happy), loose = how much throttle steals rear grip, off = grip multiplier on grass/sand
import { CARS, TUNE } from './config.js';
export { CARS };
export const RIMS = [0, 0xf3f4f6, 0x111214, 0xb87333, 0xf2c200, 0xe3262e, 0x19a7ce], TINTS = [0, 0x030304, 0x0b2f52, 0x5a4410, 0x4a0d14], GLOWS = [0, 0x19a7ce, 0xff2bd0, 0x7dff9b, 0xffc21a, 0xe3262e, 0xffffff];
// garage set-up -> the multipliers the physics uses
export function tuneOf(spec, t) {
  t = Object.assign({ gear: 0, aero: 0, brake: 0, susp: 0, tyre: 'medium' }, t || {}); const S = TUNE.setup, c = S.compound[t.tyre] || S.compound.medium;
  return { acc: 1 + S.gearAcc * t.gear, top: (1 - S.gearTop * t.gear) * (1 - S.aeroTop * t.aero), aero: Math.max(.1, 1 + S.aeroDown * t.aero), bias: .7 + S.biasStep * t.brake, rollF: spec.rollF + S.rollStep * t.susp, grip: c[0], wear: c[1] };
}
export const PAINTS = [0x0f5c4a, 0x8a1c2b, 0x2b2f8a, 0xff9d2e, 0xd81e2c, 0xff6a13, 0xf2c200, 0x2fb457, 0x19a7ce, 0x1f6feb, 0x7b3fe4, 0xff4fa3, 0xf2f2f2, 0x1c1f26];

const FLATQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)), ab2 = Math.abs, smooth2 = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const WK = ['FL', 'FR', 'RL', 'RR'];
const LAMP = {};
const DUST = [new THREE.Color(0x5a4630), new THREE.Color(0xc9a66b)];
let protos = null;

// Three vehicles built here from shaped parts (rounded extrusions, plates, cylinders) rather than loaded from a file.
function buildProcedural() {
  const K = {}, mat = n => K[n] || (K[n] = Object.assign(new THREE.MeshBasicMaterial(), { name: n }));
  const ext = (pts, w, bevel) => { const sh = new THREE.Shape(); pts.forEach(([z, y], i) => i ? sh.lineTo(-z, y) : sh.moveTo(-z, y)); const b = bevel ?? .07; return new THREE.ExtrudeGeometry(sh, { depth: w - b * 2, bevelEnabled: b > 0, bevelSize: b, bevelThickness: b, bevelSegments: 4, curveSegments: 10 }).rotateY(Math.PI / 2).translate(-(w - b * 2) / 2, 0, 0); };   // side profile [z forward, y up] swept across the body with rounded edges
  const mk = (geo, kind, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(geo, mat(kind)); m.position.set(x, y, z); return m; };
  const bx = (w, h, l, kind, x, y, z, r = .04) => mk(ext([[-l / 2, -h / 2], [l / 2, -h / 2], [l / 2, h / 2], [-l / 2, h / 2]], w, Math.min(r, w / 2 - .001, h / 2 - .001)), kind, x, y, z);
  const wheel = (r, w, spokes = 6) => { const g = new THREE.Group(); g.add(mk(new THREE.CylinderGeometry(r, r, w, 28, 1).rotateZ(Math.PI / 2), 'tire'), mk(new THREE.TorusGeometry(r - .06, .06, 8, 28).rotateY(Math.PI / 2), 'tire', w / 2 - .02), mk(new THREE.TorusGeometry(r - .06, .06, 8, 28).rotateY(Math.PI / 2), 'tire', -w / 2 + .02), mk(new THREE.CylinderGeometry(r * .64, r * .64, w + .02, 20).rotateZ(Math.PI / 2), 'rim7'));
    for (const sx of [-1, 1]) { g.add(mk(new THREE.CylinderGeometry(r * .2, r * .2, .05, 12).rotateZ(Math.PI / 2), 'silver', sx * (w / 2 + .02))); for (let i = 0; i < spokes; i++) { const s = mk(new THREE.BoxGeometry(.03, r * .56, .07), 'silver', sx * (w / 2 + .015), 0, 0); s.geometry = s.geometry.clone().translate(0, r * .34, 0).rotateX(i / spokes * Math.PI * 2); g.add(s); } } return g; };
  const car = (id, body, wb, tf, tr2, rf, rr, wf, wr, exhaust) => { const P = new THREE.Group(); P.name = id; const b = new THREE.Group(); b.name = 'body'; for (const m of body) b.add(m); P.add(b);
    for (const [n, x, z, r, w] of [['FL', tf, wb / 2, rf, wf], ['FR', -tf, wb / 2, rf, wf], ['RL', tr2, -wb / 2, rr, wr], ['RR', -tr2, -wb / 2, rr, wr]]) { const g = wheel(r, w, id === 'proc:f1' ? 5 : 6); g.name = 'wheel_' + n; g.position.set(x, r, z); P.add(g); } P.userData.exhaust = exhaust; protos[id] = P; };
  // ---- Formula car: tub, needle nose, sidepods, airbox, halo, floor, front and rear wings, open wheels
  car('proc:f1', [
    bx(1.5, .04, 3.9, 'body', 0, .1, -.1, .02), mk(ext([[-1.5, .14], [1.1, .14], [1.9, .2], [2.62, .22], [2.62, .3], [1.6, .46], [.5, .58], [-.2, .6], [-1.5, .5]], .56, .1), 'paint'),
    mk(ext([[-1.9, .16], [-.3, .16], [-.3, .9], [-.7, .98], [-1.9, .5]], .34, .1), 'paint'), mk(ext([[-1.3, .14], [.55, .14], [.75, .32], [.55, .52], [-1.3, .4]], .5, .12), 'paint', .5), mk(ext([[-1.3, .14], [.55, .14], [.75, .32], [.55, .52], [-1.3, .4]], .5, .12), 'paint', -.5),
    bx(.4, .16, .2, 'body', .5, .34, .72, .03), bx(.4, .16, .2, 'body', -.5, .34, .72, .03), mk(new THREE.TorusGeometry(.27, .035, 8, 20, Math.PI).rotateX(-Math.PI / 2).rotateZ(0), 'trim', 0, .72, .22), bx(.05, .26, .06, 'trim', 0, .6, .5, .01),
    mk(new THREE.SphereGeometry(.15, 14, 10), 'accent', 0, .7, .05), bx(.24, .2, .02, 'body', 0, .9, -.28, 0),
    bx(1.86, .035, .42, 'paint', 0, .13, 2.5, .012), bx(1.86, .03, .2, 'stripe', 0, .2, 2.42, .01), bx(.03, .24, .5, 'paint', .93, .2, 2.48, .01), bx(.03, .24, .5, 'paint', -.93, .2, 2.48, .01),
    bx(1.02, .04, .4, 'paint', 0, .92, -1.95, .012), bx(1.02, .035, .22, 'stripe', 0, 1.02, -2.06, .01), bx(.035, .62, .56, 'paint', .51, .74, -1.95, .012), bx(.035, .62, .56, 'paint', -.51, .74, -1.95, .012), bx(.1, .5, .12, 'trim', 0, .62, -1.9, .02),
    bx(.3, .09, .06, 'rear', 0, .42, -2.02, .02), bx(1.3, .1, .5, 'body', 0, .2, -1.95, .03),
    ...[1, -1].flatMap(s => [bx(.5, .03, .06, 'trim', s * .55, .34, 1.72, .01), bx(.5, .03, .06, 'trim', s * .55, .3, 1.9, .01), bx(.46, .03, .06, 'trim', s * .52, .36, -1.72, .01)])],
    3.6, .8, .78, .34, .36, .36, .44, [[0, .4, -2.05]]);
  // ---- Pickup truck: bonnet, cab and open bed, with arches, grille, bumpers, glass and lamps
  car('proc:truck', [
    mk(ext([[-2.75, .52], [2.6, .52], [2.72, .7], [2.7, 1.08], [1.1, 1.2], [.55, 1.86], [-.75, 1.9], [-.95, 1.2], [-2.75, 1.2]], 1.96, .12), 'paint'),
    bx(1.66, .5, 1.5, 'body', 0, 1.02, -1.86, .04), bx(1.98, .1, .1, 'trim', 0, 1.22, -2.72, .03), ...[1, -1].map(s => bx(.1, .1, 1.78, 'trim', s * .94, 1.22, -1.86, .03)),
    mk(ext([[.62, 1.22], [1.02, 1.22], [.56, 1.8]], 1.7, .0), 'window', 0, 0, .03), mk(ext([[-.92, 1.24], [-.72, 1.84], [-.7, 1.84], [-.9, 1.24]], 1.6, 0), 'window'),
    ...[1, -1].flatMap(s => [bx(.03, .5, 1.02, 'window', s * .985, 1.52, -.1, .01), bx(.05, .7, .06, 'paint', s * .985, 1.5, -.14, .01), bx(.3, .14, .1, 'front', s * .72, .98, 2.7, .03), bx(.1, .3, .06, 'rear', s * .9, 1.0, -2.76, .02),
      mk(new THREE.TorusGeometry(.5, .09, 8, 18, Math.PI).rotateY(Math.PI / 2), 'body', s * .92, .5, 1.72), mk(new THREE.TorusGeometry(.5, .09, 8, 18, Math.PI).rotateY(Math.PI / 2), 'body', s * .92, .5, -1.72), bx(.12, .05, .2, 'silver', s * 1.06, 1.3, .86, .02), bx(.1, .08, 2.2, 'body', s * .98, .5, 0, .03)]),
    bx(1.5, .34, .08, 'trim', 0, .9, 2.72, .03), bx(2.02, .22, .22, 'silver', 0, .56, 2.72, .06), bx(2.02, .2, .2, 'silver', 0, .58, -2.76, .06), bx(1.2, .08, .9, 'body', 0, 1.24, 1.9, .03)],
    3.44, .86, .86, .46, .46, .34, .34, [[.6, .44, -2.82]]);
  // ---- Minibus: one tall rounded box with a sloped nose, a band of windows, sliding-door line, roof rack and bumpers
  car('proc:bus', [
    mk(ext([[-2.35, .4], [2.2, .4], [2.42, .62], [2.42, 1.0], [2.05, 1.96], [1.6, 2.08], [-2.3, 2.08], [-2.42, 1.9], [-2.42, .6]], 1.86, .14), 'paint'),
    mk(ext([[2.34, 1.14], [2.02, 1.9], [2.0, 1.9], [2.3, 1.14]], 1.56, 0), 'window'), mk(ext([[-2.43, 1.3], [-2.43, 1.86], [-2.45, 1.86], [-2.45, 1.3]], 1.4, 0), 'window'),
    ...[1, -1].flatMap(s => [...[1.46, .52, -.42, -1.36].map(z => bx(.03, .56, .78, 'window', s * .94, 1.58, z, .01)), bx(.02, 1.1, .03, 'body', s * .945, 1.0, .06, 0), bx(.3, .16, .1, 'front', s * .62, .86, 2.42, .03), bx(.12, .34, .06, 'rear', s * .8, 1.1, -2.44, .02), bx(.12, .06, .22, 'silver', s * 1.0, 1.34, 1.9, .02), bx(.04, .05, 3.6, 'silver', s * .6, 2.14, -.2, .01)]),
    ...[1.2, .1, -1.0, -1.9].map(z => bx(1.3, .04, .05, 'silver', 0, 2.14, z, .01)), bx(1.9, .2, .18, 'body', 0, .5, 2.4, .06), bx(1.9, .2, .18, 'body', 0, .5, -2.42, .06), bx(1.1, .22, .06, 'trim', 0, .86, 2.44, .02), bx(1.5, .06, .05, 'stripe', 0, 1.1, 2.44, .01)],
    2.9, .8, .8, .36, .36, .26, .26, [[.5, .34, -2.46]]);
}
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
  const b = info.base || [.9, .9, .9], U = m.userData.rc = { uBase: { value: new THREE.Color().setRGB(b[0], b[1], b[2], THREE.SRGBColorSpace) }, uPaint: { value: new THREE.Color(paintHex) }, uOn: { value: recolor ? 1 : 0 } };
  m.onBeforeCompile = sh => { Object.assign(sh.uniforms, U); sh.fragmentShader = 'uniform vec3 uBase, uPaint; uniform float uOn;\n' + sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
    if (uOn > .5) { vec3 cs = pow(max(diffuseColor.rgb, vec3(0.)), vec3(.4545)), bs = pow(max(uBase, vec3(0.)), vec3(.4545)); float mm = 1. - smoothstep(.11, .22, distance(cs, bs));
      float lr = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722)) / max(dot(uBase, vec3(.2126, .7152, .0722)), .04); diffuseColor.rgb = mix(diffuseColor.rgb, uPaint * clamp(lr, .12, 1.5), mm); }`); };
  m.customProgramCacheKey = () => 'texrc'; return m;
}
export const LIVC = [0xf2f2ee, 0x15171c, 0xe3262e, 0x1c57c8, 0xffc21a, 0x19a7ce, 0xff6a13, 0x2fb457];
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
    shared.tire = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: .92 });
    shared.rim = new THREE.MeshStandardMaterial({ color: 0xc9ccd2, metalness: .95, roughness: .28 });
    shared.rimDark = new THREE.MeshStandardMaterial({ color: 0x2a2c30, metalness: .8, roughness: .4 });
    shared.body = new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: .6, metalness: .2 });
    shared.trim = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: .45, metalness: .5 });
    shared.window = new THREE.MeshStandardMaterial({ color: 0x14212e, emissive: 0x08121c, roughness: .42, metalness: 0, envMapIntensity: .3 });      // blue-grey glass that stands out from the body   // dark tinted glass: reads as a window, not as chrome
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

export class Car {
  constructor(spec, color = spec.color, name = 'Driver', up, look, tune, wantLight = false) {
    this.wantLight = wantLight;
    this.spec = spec; this.name = name; this.color = color; this.up = up || { eng: 0, tyre: 0, nitro: 0, armor: 0 };
    this.fuel = 1; this.fuelK = 1; this.parts = { engine: 0, gearbox: 0, wheels: [0, 0, 0, 0] }; this.gone = [false, false, false, false]; this.partK = 1; this.pace = 1; this.bopP = 1; this.bopG = 1; this.shock = 0; this.tc = true; this.abs = true; this.steerK = 1; this.wspinF = 0; this.lost = []; this.noNitro = false; this.assistK = 0; this.inPit = false; this.pitZone = false; this.aF = 0; this.useF = 0; this.useR = 0;
    this.dirt = 0; this.dirtShown = 0; this.wetTyres = false; this.baseColor = new THREE.Color(color);
    const proto = protos[spec.model || spec.id], root = this.root = new THREE.Group(); root.rotation.order = 'YXZ';
    const chassis = this.chassis = new THREE.Group(); root.add(chassis);
    this.m = mats(color); this.wheels = {}; this.bodyMeshes = []; this.texCar = false;
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
    this.tn = tuneOf(spec, tune); this.wear = this.tn.wear; this.dress(look);
    this.hw0 = (box.max.x - box.min.x) / 2; this.zf0 = box.max.z; this.makeLamps();
    { const T = this.T, e = proto.userData.exhaust; this.exhL = e && e.length ? e.map(p => p.slice()) : null; this.exh = this.exhL ? this.exhL.map(p => [p[0] * T.w, p[1] * T.h, p[2] * T.l]) : [[(box.max.x - box.min.x) * .22, (box.max.y) * .26, box.min.z], [-(box.max.x - box.min.x) * .22, (box.max.y) * .26, box.min.z]]; }
    this.door = proto.userData.door ? proto.userData.door.slice() : null;
    this.hw = (box.max.x - box.min.x) / 2 - .05; this.zf = box.max.z - .1; this.zr = -box.min.z - .1; this.top = box.max.y;
    this.I = spec.mass * this.a * this.b * spec.yawK; this.h = .5;     // centre-of-mass height: sets how much weight moves to the rear under power and to the front under braking
    this.wsurf = [ROAD, ROAD, ROAD, ROAD]; this.lastSk = [null, null]; this.spin = [0, 0];
    this.reset(0, 0, 0);
  }
  reset(x, z, th) {
    this.x = this.px = x; this.z = this.pz = z; this.th = this.pth = th; this.vx = this.vz = this.r = 0; this.steer = 0; this.axS = this.ayS = 0;
    this.slipR = 0; this.wspin = 0; this.locked = false; this.grass = 0; this.nitro = 1; this.nitroOn = false; this.braking = false;
    this.rollD = this.pitchD = 0; this.di = 0; this.rpmR = 900; this.gearI = 1; this.shiftT = 0; this.lead = 0; this.draft = 0; this.oil = 0; this.lockF = false; this.y = 0; this.pitch = this.roll = 0; this.stuck = 0; this.lastSk = [null, null]; this.emitAcc = 0; this.rpm = 0; this.gear = 1;
  }
  get speed() { return Math.hypot(this.vx, this.vz); }
  get vf() { return this.vx * Math.sin(this.th) + this.vz * Math.cos(this.th); }
  get beta() { const sn = Math.sin(this.th), cs = Math.cos(this.th); return Math.atan2(this.vx * cs - this.vz * sn, Math.abs(this.vx * sn + this.vz * cs)); }

  // ---- one physics sub-step. inp: {steer (+left), throttle, brake, hand, nitro}
  step(dt, inp, track, live, boost = 1) {
    const s = this.spec, m = s.mass + TUNE.fuel.tankKg * this.fuel, a = this.a, b = this.b, L = a + b, g = 9.81, U = this.up, x0 = this.x, z0 = this.z, TY = TUNE.tyre, TN = this.tn, PC = TUNE.pace[this.pace];
    this.px = x0; this.pz = z0; this.pth = this.th;
    const sn = Math.sin(this.th), cs = Math.cos(this.th);
    const vf = this.vx * sn + this.vz * cs, vl = this.vx * cs - this.vz * sn, speed = Math.hypot(vf, vl), sg = vf >= 0 ? 1 : -1;

    const wet = track.wet || 0, D = this.dmg, P = this.parts, PT = TUNE.parts, wdrag = Math.min(.3, P.wheels.reduce((a, w) => a + (w > PT.flatAt ? PT.flatDrag : 0), 0)), gripK = this.bopG * s.grip * TN.grip * (1 + .035 * U.tyre) * (.72 + .28 * this.tyre) * (this.oil > 0 ? .42 : 1) * TUNE.gripScale;
    const rainLoss = this.wetTyres ? .07 * wet + .07 * (1 - wet) : .27 * wet;      // wets: a little slower in the dry, far better in the rain
    this.oil = Math.max(0, this.oil - dt);
    // what is under each wheel
    let muF = 0, muR = 0, gr = 0, pitN = 0;
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]], sf = track.surf(this.x + sn * w.z + cs * w.x, this.z + cs * w.z - sn * w.x);
      this.wsurf[i] = sf; if (sf === PIT) pitN++; const mu = sf === ROAD || sf === PIT ? 1 - rainLoss : sf === KERB ? .95 - rainLoss * 1.2 : s.off * (1 - .15 * wet); if (sf === GRASS || sf === WALL) gr += .25;
      const wm = mu * (1 - PT.wheelGrip * P.wheels[i]); if (i < 2) muF += wm / 2; else muR += wm / 2;   // a bent or flat wheel grips less
    }
    this.grass = gr; this.inPit = pitN >= 2 || this.pitZone;

    // steering: lock shrinks with speed; a little automatic counter-steer keeps slides catchable
    const beta = speed > 4 && vf > 0 ? Math.atan2(vl, vf) : 0;
    let target = inp.steer * TUNE.steer.lock / (1 + speed * TUNE.steer.speedK);
    const ab = Math.abs(beta);
    this.shock = Math.max(0, this.shock - dt); const K = this.shock > 0 ? 0 : this.assistK;   // a big hit knocks the aids out for a moment
    if (K > 0 && vf > 5) { target = target * (1 - K * clamp((ab - .3) * 1.6, 0, .8)) + K * clamp(beta * .75, -.5, .5); }
    if (speed > 3) target += (D.left - D.right) * .05 + (P.wheels[0] - P.wheels[1]) * PT.wheelPull + D.front * .02 * Math.sin(this.x * .7 + this.z * .9);   // bent suspension pulls and shimmies
    target = clamp(target, -.62, .62);
    const sr = (inp.steer === 0 ? TUNE.steer.returnRate : TUNE.steer.rate * this.steerK / (1 + speed * TUNE.steer.rateSpeedK)) * dt;
    this.steer += clamp(target - this.steer, -sr, sr);

    // axle loads with longitudinal weight transfer + downforce
    const dW = m * this.axS * this.h / L, down = s.aero * TN.aero * speed * speed;
    // lateral load transfer: the outside tyres take the load and the pair grips a little less. rollF sets which axle gives up first.
    const lt = Math.min(1, Math.abs(this.ayS) * this.h / (g * this.tw)), ltF = 1 - TY.loadSens * (lt * TN.rollF * 2) ** 2, ltR = 1 - TY.loadSens * (lt * (1 - TN.rollF) * 2) ** 2;
    const Nf = Math.max(m * g * b / L - dW, m * g * .15) + down * .45, Nr = Math.max(m * g * a / L + dW, m * g * .15) + down * .55;

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
    if (K > 0 && ab > .42) thr *= 1 - K * (1 - clamp(1 - (ab - .42) / .3, .2, 1));     // drift-angle hold: ease the power before a slide becomes a spin
    let Fdrive = rev ? -brk * s.acc * m * .5 * clamp(1 + vf / 12, 0, 1) : thr * s.acc * TN.acc * (1 + .06 * U.eng) * (1 + .12 * this.draft) * m * boost * Math.max(PT.limp, 1 - PT.enginePower * P.engine) * (1 - .2 * P.gearbox) * (nit ? 1.5 : 1) * Math.min(1, s.pw / (s.acc * m) / Math.max(vf, 1)) * clamp(1 - (vf / vmax) ** 8, 0, 1);   // traction-limited low down, power-limited above ~58 km/h
    Fdrive *= TUNE.enginePower * this.bopP * PC.pow * (this.shiftT > 0 ? .2 : 1); if (burn) Fdrive *= .3;
    if (this._thr > .7 && thr < .1 && this.rpm > .5) { this.backfire = .24; this.popEvt = 1; } if (this.shiftEvt > 0 && this.rpm > .6 && thr > .6) this.backfire = Math.max(this.backfire || 0, .12); this._thr = thr; this.backfire = Math.max(0, (this.backfire || 0) - dt);
    const bf = rev ? 0 : Math.min(brk * s.brake * m * g, m * Math.abs(vf) / dt);
    this.braking = brk > .1 && !rev;
    const dF = s.drive === 'fwd' ? 1 : s.drive === 'awd' ? .42 : 0;
    const capF = muF * gripK * Nf * ltF * (1 + TUNE.slowTurn * clamp(-this.axS / 8, 0, 1)), capR = muR * gripK * s.rear * TUNE.rearBias * Nr * ltR * (1 - (this.driftCut || TUNE.drift.rearCut) * this.di) * (this.abs ? 1 + .5 * brk : 1);   // with ABS on, brake force is shared so the rear stays planted while you brake and turn
    this.wspinF = dF > 0 && !this.tc ? Math.max(0, (Fdrive * dF - capF) / capF) : 0;
    let FxF = clamp(Fdrive * dF - sg * bf * TN.bias, -capF, capF), FxR = Fdrive * (1 - dF) - sg * bf * (1 - TN.bias);

    const vden = Math.max(Math.abs(vf), 3), vlr = vl - b * this.r;
    const aF = Math.atan2(vl + a * this.r, vden) - this.steer * sg;
    const FyF = -Math.sqrt(Math.max(capF * capF - (FxF > 0 ? FxF * TY.driveShare : FxF * (this.abs ? TY.brakeShare : 1.12)) ** 2, capF * capF * .15)) * Math.sin(TY.frontC * Math.atan(TY.frontB * aF));
    let FyR; this.wspin = 0; this.locked = false;
    if (inp.hand && live && speed > 1) {          // handbrake: locked rears slide with kinetic friction
      const vm = Math.hypot(vf, vlr) || 1, fk = capR * .7;
      FxR = -fk * vf / vm; FyR = -fk * vlr / vm; this.locked = true; this.slipR = 1;
    } else {
      if (this.tc && !burn && FxR > capR * .96) FxR = capR * .96;                 // traction control trims the power to what the tyres can use
      if (Math.abs(FxR) > capR) { this.wspin = (Math.abs(FxR) - capR) / capR; FxR = Math.sign(FxR) * capR; }
      const aR = Math.atan2(vlr, vden);
      FyR = -Math.sqrt(Math.max(capR * capR - FxR * FxR * s.loose * TUNE.powerSlide * (this.tc ? .45 : 1), capR * capR * .12)) * Math.sin(TY.rearC * Math.atan(TY.rearB * aR));
      this.slipR = Math.abs(aR);
    }
    if (burn) { this.wspin = Math.max(this.wspin, 1.2); FyR *= .3; }
    this.aF = aF; this.useF = Math.hypot(FxF, FyF) / (capF || 1); this.useR = Math.hypot(FxR, FyR) / (capR || 1);
    const cd = Math.cos(this.steer), sd = Math.sin(this.steer);
    const ax = (FxR + FxF * cd - FyF * sd - .6 * s.cda * (1 - .45 * this.draft) * vf * Math.abs(vf) - m * (.006 + wdrag + gr * TUNE.surface.grassDrag) * vf - m * .12 * Math.sign(vf) * Math.min(1, Math.abs(vf)) - (thr === 0 && !rev ? m * .45 * Math.sign(vf) * Math.min(1, Math.abs(vf)) : 0)) / m;   // last term: engine braking when off the throttle
    const ay = (FyF * cd + FxF * sd + FyR) / m;
    this.vx += (ax * sn + ay * cs) * dt; this.vz += (ax * cs - ay * sn) * dt;
    if (K > 0 && speed > 3 && !inp.hand) { const vl2 = this.vx * cs - this.vz * sn, q = Math.min(1, TUNE.slideAid * K * dt) * (1 - this.di); this.vx -= cs * vl2 * q; this.vz += sn * vl2 * q; }   // grip aid: bleeds off sideways slip so the car goes where it points (handbrake switches it off)
    this.r += (a * (FyF * cd + FxF * sd) - b * FyR) / this.I * dt; this.r -= this.r * (TUNE.yawDamp + speed * TUNE.yawDampSpeed + K * TUNE.assistYawDamp) * dt;
    if (thr === 0 && (brk === 0 || !live) && speed < .5) { this.vx *= .9; this.vz *= .9; this.r *= .85; }
    if (!live) { this.vx = this.vz = this.r = 0; }
    this.th += this.r * dt; this.x += this.vx * dt; this.z += this.vz * dt;
    this.axS += (ax - this.axS) * Math.min(1, dt * 8); this.ayS += (ay - this.ayS) * Math.min(1, dt * 8);
    if (live) this.fuel = Math.max(0, this.fuel - dt * this.fuelK * PC.fuel * (TUNE.fuel.idle + thr * (.35 + .65 * this.rpm)) / TUNE.fuel.fullThrottleSeconds);
    if (live) this.tyre = Math.max(0, this.tyre - dt * this.wear * PC.wear * (TY.wear.base * Math.min(1, speed / 25) + Math.min(this.slipR, .8) * .011 + this.wspin * .008 + (this.locked ? .03 : 0) + gr * .002));
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
    this.lockF = this.braking && brk > .9 && speed > 17 && gr < .5;
    let hit = this.collideWalls(track);
    if (track.surf(this.x, this.z) === WALL) { this.x = x0; this.z = z0; this.vx *= .15; this.vz *= .15; this.r *= .3; hit = Math.max(hit, speed * .5); this.hitX = x0; this.hitZ = z0; this.hitL = [0, this.zf]; this.hitN = [-sn, -cs]; }   // never end a step inside a barrier
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
  bump(o, kin) {
    let hit = 0;
    const S = TUNE.toy.l; for (const za of [1.15 * S, -1.15 * S]) for (const zb of [1.15 * S, -1.15 * S]) {
      const ax = this.x + Math.sin(this.th) * za, az = this.z + Math.cos(this.th) * za, bx = o.x + Math.sin(o.th) * zb, bz = o.z + Math.cos(o.th) * zb;
      const dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz), min = 2.05 * TUNE.toy.w;
      if (d >= min || d < 1e-4) continue;
      const nx = dx / d, nz = dz / d, pen = min - d, ma = this.spec.mass, mb = o.spec.mass, ia = 1 / ma, ib = 1 / mb;
      this.x += nx * pen * ib / (ia + ib) * (kin ? 0 : 1) + (kin ? nx * pen : 0); this.z += nz * pen * ib / (ia + ib) * (kin ? 0 : 1) + (kin ? nz * pen : 0);
      if (!kin) { o.x -= nx * pen * ia / (ia + ib); o.z -= nz * pen * ia / (ia + ib); }
      const vn = (this.vx - o.vx) * nx + (this.vz - o.vz) * nz; if (vn >= 0) continue;
      const j = -1.08 * vn / (ia + ib);
      this.vx += j * nx * ia; this.vz += j * nz * ia; this.r += (Math.cos(this.th) * za * nx - Math.sin(this.th) * za * nz) * j * 1.1 / this.I;
      if (!kin) { o.vx -= j * nx * ib; o.vz -= j * nz * ib; o.r -= (Math.cos(o.th) * zb * nx - Math.sin(o.th) * zb * nz) * j * 1.1 / o.I; }
      if (-vn > hit) { hit = -vn; this.hitX = (ax + bx) / 2; this.hitZ = (az + bz) / 2; this.hitL = this.toLocal(this.hitX, this.hitZ); this.hitN = [nx, nz]; o.hitX = this.hitX; o.hitZ = this.hitZ; o.hitL = o.toLocal(this.hitX, this.hitZ); o.hitN = [-nx, -nz]; }
    }
    return hit;
  }

  // Bodywork options. Every part is positioned from the car's own geometry (rear deck height, nose height, body width),
  // so a wing sits on the boot lid and a splitter sits under the bumper whatever the model.
  addTyreText() {      // a ring of lettering on both sidewalls, sized from each wheel's own geometry
    for (const k in this.wheels) { const q = this.wheels[k], bb = new THREE.Box3(); q.mesh.traverse(o => { if (o.isMesh && o.geometry && !o.userData.decal) { o.geometry.computeBoundingBox(); bb.union(o.geometry.boundingBox); } });
      const hwid = (bb.max.x - bb.min.x) / 2, rad = (bb.max.y - bb.min.y) / 2; if (!(hwid > .02 && rad > .1)) continue;
      for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.RingGeometry(rad * .74, rad * .94, 40, 1).rotateY(s * Math.PI / 2), this.m.tyretext); m.position.x = s * (hwid + .003); m.userData.decal = 1; q.mesh.add(m); } }
  }
  dress(look) {
    if (!this._tt) { this._tt = 1; this.addTyreText(); }
    const L = this.look = Object.assign({ wing: 0, split: 0, rim: 0, tint: 0, glow: 0, skirt: 0, scoop: 0, pipe: 0, liv: 3, livc: 0, num: 0 }, look || {}), ch = this.chassis; let part = 'wing';
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
    if (L.wing && !this.hasWing) {
      const tailW = side(minZ, minZ + .55, 0, 9) * 2, deck = top(minZ + .04, minZ + .42, tailW * .36);
      if (L.wing === 1) put(across([[-.26, 0], [-.06, .03], [.02, .085], [.035, .078], [.02, 0]], tailW * .86), this.m.paint, 0, deck - .004, minZ + .05);      // ducktail: rises smoothly from the boot lid to a crisp edge
      else { const race = L.wing === 3, ch = race ? .36 : .27, hi = race ? .36 : .24, wd = tailW * (race ? 1.0 : .88), z = minZ + (race ? .1 : .18);
        put(across(foil(ch, .13), wd), race ? dark : this.m.paint, 0, deck + hi, z).rotation.x = race ? .2 : .12;
        if (race) put(across(foil(.13, .12), wd), dark, 0, deck + hi + .075, z - .17).rotation.x = .5;                                                          // second element (flap)
        for (const sx of [-1, 1]) { put(across([[-.1, 0], [.06, 0], [.085, hi - .01], [.02, hi - .01]], .016), dark, sx * wd * .29, deck - .01, z + .02);       // swept uprights
          put(across([[-ch * .62, -.085], [ch * .7, -.085], [ch * .7, race ? .15 : .07], [-ch * .25, race ? .15 : .07], [-ch * .62, -.01]], .012), dark, sx * wd / 2, deck + hi, z); } }   // end plates
    }
    part = 'split';
    if (L.split) { const y0 = low(maxZ - .45, maxZ), pts = [], zs = []; for (let z = maxZ - .5; z < maxZ - .01; z += .05) zs.push(z); let lastX = side(maxZ - .6, maxZ - .45, y0, y0 + .3) || maxX;
      const xs = zs.map(z => { const x = side(z - .05, z + .05, y0, y0 + .3); if (x > .05) lastX = Math.min(x, lastX + .02); else lastX *= .8; return lastX; });
      zs.forEach((z, q) => pts.push([xs[q] + .045, -(z + .03)])); pts.push([xs[xs.length - 1] * .7, -(maxZ + .075)], [-xs[xs.length - 1] * .7, -(maxZ + .075)]); for (let q = zs.length - 1; q >= 0; q--) pts.push([-xs[q] - .045, -(zs[q] + .03)]);
      put(ext(pts, .02).rotateX(-Math.PI / 2), dark, 0, y0 - .012, 0);                                                                                         // a blade cut to the plan shape of this bumper
      for (const sx of [-1, 1]) put(across([[-.1, 0], [.1, 0], [.1, .05], [-.04, .075]], .012), dark, sx * (xs[2] + .03), y0 + .005, zs[2] + .1); }           // dive planes
    part = 'skirt';
    if (L.skirt) { const zr = this.wheels.RL.z / this.T.l + this.R / this.T.wheel + .07, zf = this.wheels.FL.z / this.T.l - this.R / this.T.wheel - .07, y0 = low(zr, zf), xs = side(zr, zf, y0, y0 + .22);
      for (const sx of [-1, 1]) { const me = put(ext([[-.04, 0], [.05, 0], [.058, .016], [.0, .075], [-.04, .075]], zf - zr), dark, sx * (xs - .012), y0 - .012, zr); me.scale.x = sx; } }   // a wedge under the sill, arch to arch
    part = 'scoop';
    if (L.scoop) { let ry = 0, rz = 0; for (let i = 0; i < V.length; i += 3) if (Math.abs(V[i]) < maxX * .3 && V[i + 2] > minZ + .9 && V[i + 2] < maxZ - 1.1 && V[i + 1] > ry) { ry = V[i + 1]; rz = V[i + 2]; }
      put(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(.17, .075, .34), this.m.paint, 0, ry - .012, rz - .1);
      put(new THREE.CircleGeometry(1, 16, 0, Math.PI).scale(.14, .055, 1), new THREE.MeshBasicMaterial({ color: 0x050506 }), 0, ry - .008, rz + .2).rotation.x = -.35; }   // the intake mouth
    part = 'pipe';
    if (L.pipe) { const chrome = new THREE.MeshStandardMaterial({ color: 0xdfe2e6, metalness: 1, roughness: .16, side: THREE.DoubleSide }), inner = new THREE.MeshBasicMaterial({ color: 0x060606 });
      let spots = this.exhL; if (!spots) { const yl = low(minZ, minZ + .35) + .12, tw = side(minZ, minZ + .3, 0, 9); spots = []; for (const sx of [-1, 1]) { const x0 = sx * tw * .5; let zr = 9; for (let i = 0; i < V.length; i += 3) if (Math.abs(V[i] - x0) < .16 && V[i + 1] < yl + .2 && V[i + 2] < zr) zr = V[i + 2]; spots.push([x0, yl, zr]); } }   // no pipes on the model: sit them in the rear valance, flush with the bodywork there
      for (const [x, y, z] of spots) { put(new THREE.CylinderGeometry(.058, .05, .15, 20, 1, true).rotateX(Math.PI / 2), chrome, x, y, z - .035); put(new THREE.CircleGeometry(.047, 18), inner, x, y, z + .02).rotation.y = Math.PI; } }   // a larger polished tip over each of the car's own pipes
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
    const rimM = L.rim ? new THREE.MeshStandardMaterial({ color: RIMS[L.rim], metalness: .9, roughness: .26 }) : null;
    const shaded = m => { const q = m.clone(); q.vertexColors = true; return q; }, rimS = rimM ? shaded(rimM) : null, rim0 = shaded(this.m.rim);
    for (const k in this.wheels) this.wheels[k].mesh.traverse(o => { if (o.isMesh && o.userData.kind && o.userData.kind.startsWith('rim')) o.material = o.geometry.attributes.color ? (rimS || rim0) : rimM || (o.userData.kind === 'rim6' ? this.m.rimDark : this.m.rim); });
    const winM = L.tint ? new THREE.MeshStandardMaterial({ color: new THREE.Color(TINTS[L.tint]).multiplyScalar(.45), roughness: .2, metalness: 0, envMapIntensity: .14, side: THREE.DoubleSide }) : this.m.window;
    const winS = shaded(winM); for (const m of this.bodyMeshes) if (m.userData.kind === 'window') m.material = m.geometry.attributes.color ? winS : winM;
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
    const mk = sx => { const g = new THREE.Group(); g.position.set(sx * this.hw0 * .64, .56, this.zf0 - .04);
      const fan = new THREE.Mesh(LAMP.fan, LAMP.fanM); fan.rotation.x = -Math.PI / 2; fan.position.set(0, -.5, .3); fan.renderOrder = 3;
      const glare = new THREE.Mesh(LAMP.glare, LAMP.glareM); glare.rotation.x = -Math.PI / 2; glare.position.y = .12;                // the lamp itself, seen from above
      g.add(fan, glare); g.visible = false; this.root.add(g); return { g, ok: true }; };
    this.lamps = [mk(1), mk(-1)]; this.lightsOn = false;
  }
  setLights(on) { this.lightsOn = on; for (const l of this.lamps) l.g.visible = on && l.ok; }

  toLocal(wx, wz) { const dx = wx - this.x, dz = wz - this.z, sn = Math.sin(this.th), cs = Math.cos(this.th); return [dx * cs - dz * sn, dx * sn + dz * cs]; }

  // ---- damage: zone health + real dents in the bodywork around the point of impact
  damage(power, shock = true) {
    const amt = Math.max(0, power - 3.5) / 34 * this.dmgScale; if (amt <= 0 || !this.hitL) return 0;
    if (shock && power > TUNE.shock.minHit) this.shock = Math.min(TUNE.shock.max, power * TUNE.shock.perMs);
    const [lx, lz] = this.hitL, D = this.dmg, zone = lz > this.zf * .55 ? 'front' : lz < -this.zr * .55 ? 'rear' : lx > 0 ? 'left' : 'right';
    D[zone] = Math.min(1, D[zone] + amt);
    { const P = this.parts, k = amt * this.partK, corner = Math.abs(lx) > this.hw * .45;
      const hitW = (i, v) => { P.wheels[i] = Math.min(.92, P.wheels[i] + v); if (P.wheels[i] >= 1 && !this.gone[i]) { this.gone[i] = true; this.wheels[WK[i]].mesh.traverse(o => { if (o.isMesh) this.lost.push(o); }); } };   // a destroyed wheel comes off
      if (zone === 'front') { P.engine = Math.min(1, P.engine + k * .9); if (corner) hitW(lx > 0 ? 0 : 1, k * 1.3); }
      else if (zone === 'rear') { P.gearbox = Math.min(1, P.gearbox + k * .9); if (corner) hitW(lx > 0 ? 2 : 3, k * 1.3); }
      else hitW(lx > 0 ? (lz > 0 ? 0 : 2) : (lz > 0 ? 1 : 3), k * 1.9); }
    if (zone === 'front' && amt > .035) for (const i of amt > .22 ? [0, 1] : [lx > 0 ? 0 : 1]) if (this.lamps[i].ok) { this.lamps[i].ok = false; this.lamps[i].g.visible = false; this.glass = true; }   // smashed headlight
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
    this.dmg = { front: 0, rear: 0, left: 0, right: 0 }; this.tyre = 1; this.dirt = 0; this.parts = { engine: 0, gearbox: 0, wheels: [0, 0, 0, 0] }; this.gone = [false, false, false, false]; for (const k in this.wheels) this.wheels[k].mesh.traverse(o => { o.visible = true; }); this.dress(this.look); for (const l of this.lamps) l.ok = true; this.setLights(this.lightsOn);
    for (const mesh of this.bodyMeshes) { mesh.geometry.attributes.position.array.set(mesh.userData.orig); mesh.geometry.attributes.position.needsUpdate = true; mesh.geometry.computeVertexNormals(); }
  }

  // ---- visuals: ride height from the track, body roll, wheel spin + steer
  render(dt, track, al = 1) {
    const X = this.rx = this.px + (this.x - this.px) * al, Z = this.rz = this.pz + (this.z - this.pz) * al, TH = this.pth + wrap(this.th - this.pth) * al;
    { const VL = TUNE.visualLead, sp = Math.hypot(this.vx, this.vz), want = clamp(this.steer * VL.steer + this.r * VL.yaw, -VL.max, VL.max) * Math.min(1, sp / VL.fullSpeed) * (this.vf > 1 && !(this.touchT > 0) ? 1 : 0); this.touchT = Math.max(0, (this.touchT || 0) - dt); this.lead += (want - this.lead) * Math.min(1, dt * VL.rate); }
    const sn = Math.sin(TH), cs = Math.cos(TH), h = [];
    for (let i = 0; i < 4; i++) { const w = this.wheels[WK[i]]; h.push(track.height(X + sn * w.z + cs * w.x, Z + cs * w.z - sn * w.x)); }
    const k = Math.min(1, dt * 14);
    this.y += ((h[0] + h[1] + h[2] + h[3]) / 4 - this.y) * Math.min(1, dt * 25);
    this.pitch += (Math.atan2((h[2] + h[3] - h[0] - h[1]) / 2, this.a + this.b) - this.pitch) * k;
    this.roll += (Math.atan2((h[0] + h[2] - h[1] - h[3]) / 2, this.tw * 2) - this.roll) * k;
    this.root.position.set(X, this.y, Z); this.root.rotation.set(this.pitch, TH + this.lead, this.roll);
    const mk = Math.sqrt(clamp(this.spec.mass / 1500, .5, 1.8)), stiff = this.spec.body === 'f1' ? .25 : this.spec.klass === 'Super' ? .6 : this.spec.klass === 'Utility' ? 1.5 : 1;
    this.rollD += (clamp(this.ayS * .017 * mk * stiff, -.16, .16) - this.rollD) * Math.min(1, dt * 6.5 / mk);
    this.pitchD += (clamp(-this.axS * .0095 * mk * stiff, -.09, .09) - this.pitchD) * Math.min(1, dt * 6.5 / mk);
    const rough = this.speed > 2 ? (this.grass * .011 + (this.wsurf.includes(KERB) ? .005 : 0)) : 0;
    this.chassis.rotation.set(this.pitchD + (Math.random() - .5) * rough * .5 + this.dmg.front * .02 + ((this.gone[0] || this.gone[1] ? .06 : 0) - (this.gone[2] || this.gone[3] ? .06 : 0)), 0, ((this.gone[1] || this.gone[3] ? .07 : 0) - (this.gone[0] || this.gone[2] ? .07 : 0)) + this.rollD + (Math.random() - .5) * rough + (this.dmg.left - this.dmg.right) * .035);
    if (this.glowPool) this.glowPool.quaternion.copy(this.chassis.quaternion).invert().multiply(FLATQ);      // the pool of light stays flat on the road while the body rolls and pitches
    this.chassis.position.y = this.rideY + (Math.random() - .5) * rough + (this.rpm > .2 ? Math.sin(performance.now() * .05) * .003 : 0);
    const vf = this.vf, d = vf / this.R * dt;
    this.spin[0] += d; this.spin[1] += this.locked ? 0 : d * (1 + this.wspin * 3) + (this.wspin > 0 ? (30 + this.wspin * 40) * dt : 0);
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[WK[i]]; w.mesh.rotation.x = this.spin[i < 2 ? 0 : 1]; w.mesh.rotation.z = this.parts.wheels[i] * .32 * Math.sin(this.spin[i < 2 ? 0 : 1]); w.mesh.scale.y = TUNE.toy.wheel * (this.parts.wheels[i] > TUNE.parts.flatAt ? .82 : 1);   // bent wheels wobble, flat tyres squash
      if (i < 2) w.pivot.rotation.y = this.steer;
      w.pivot.position.y = w.y + (this.wsurf[i] === GRASS && this.speed > 2 ? (Math.random() - .5) * .012 : 0);
    }
    this.m.rear.emissiveIntensity = this.braking ? 2.4 : .5;
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
    const y = track.height(this.hitX, this.hitZ) + .45, n = this.hitN || [0, 0], tx = -n[1], tz = n[0], along = Math.sign(this.vx * tx + this.vz * tz) || 1, v = Math.min(1, power / 20);
    for (let i = 0; i < 5 + v * 26; i++) { const s = (4 + Math.random() * 10) * along * (.4 + v); fx.glow.emit(this.hitX, y + Math.random() * .3, this.hitZ, tx * s + n[0] * (1 + Math.random() * 4) + this.vx * .3, .5 + Math.random() * 4.5, tz * s + n[1] * (1 + Math.random() * 4) + this.vz * .3, .2 + Math.random() * .4, .13, 0, 1, .72, .28, 1, 15); }
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
export function aiDrive(car, track, ai, cars, dt) {
  const n = track.n, sp = car.speed, p = track.path;
  const look = Math.round((7 + sp * .42) / track.spacing), tgt = p[(car.idx + look) % n];
  // drift the racing line towards the inside of the coming corner, and around slower cars
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
  let lineOff = 0, wsum = 0, cd = 0;
  {
    const c1 = corner(ix), ua = .6 + (ai.apexU ?? (ai.apexU = (Math.random() - .5) * .12));          // where in the corner this driver clips the apex (about 60%: a late apex)
    if (c1) {
      const d = c1.inside ? 0 : (c1.s - ix) * track.spacing; let o1, w1;
      if (c1.inside) { const u = (ix - c1.s) / Math.max(1, c1.len); o1 = u < ua ? -c1.dir * W * (.9 - 1.75 * sm(u / ua)) : c1.dir * W * (.85 - .7 * sm((u - ua) / (1 - ua))); w1 = 1; }      // wide -> apex -> unwinding out
      else { o1 = -c1.dir * W * .9 * clamp((75 - d) / 45, 0, 1); w1 = clamp((75 - d) / 30, 0, 1); }                                                                                           // swing out on the approach
      lineOff += o1 * w1; wsum += w1; if (d < 70 || c1.inside) cd = c1.dir;
    }
    if (!(c1 && c1.inside)) {                                                                    // the corner just behind: track out to the edge
      let b = ix, qd = 0; while (qd < 40 && Math.abs(kk(b)) <= T0) { b--; qd++; }
      if (qd > 0 && qd < 40) { const dirb = Math.sign(kk(b)), dm = qd * track.spacing, w0 = clamp(1 - dm / 70, 0, 1); lineOff += -dirb * W * .9 * sm(dm / 14) * w0; wsum += w0; }
    }
  }
  let want = lineOff / Math.max(1, wsum) + ai.lane * (1 - clamp(wsum, 0, 1)) + (ai.brain && ai.brain.lapse > 0 && ai.brain.kind === 3 ? ai.brain.bias : 0);
  let brakeFor = 0, vFollow = 1e9; const sn0 = Math.sin(car.th), cs0 = Math.cos(car.th);
  for (const o of cars) {
    if (o === car || o.out) continue; const dx = o.x - car.x, dz = o.z - car.z, f = dx * sn0 + dz * cs0, l = dx * cs0 - dz * sn0, pk = o.isPlayer ? 1.75 : 1;      // the player gets a wider berth than other AI cars
    if (f < -3.5) { if (o.isPlayer) { if (f > -13 && Math.abs(l) < 3.2 && o.vx * sn0 + o.vz * cs0 > car.vf + 1.5) want += (l > 0 ? -1 : 1) * 2.4; continue; }       // a faster player behind: move over and let them through, never defend the line
      if (f > -15 && Math.abs(l) < 3.6 && o.vx * sn0 + o.vz * cs0 > car.vf + 1 && Math.abs(setup) > .3) want += setup * 1.4 * ai.care; continue; }   // a faster car behind before a corner: cover the inside
    if (f > 55 || Math.abs(l) > 8 * pk) continue;
    const ovf = o.vx * sn0 + o.vz * cs0, ovl = o.vx * cs0 - o.vz * sn0, closing = car.vf - ovf, ttc = closing > .5 ? Math.max(0, f - 6.4 * pk) / closing : 99, lp = l + ovl * Math.min(ttc, 1.2);   // where it will be, sideways, when we get there
    if (f > 0 && f < 26 && Math.abs(l) < 2.3 && o.speed > 3 && !o.isRemote) vFollow = Math.min(vFollow, o.vx * sn0 + o.vz * cs0 + Math.max(f - 6.5, -3) * .9);      // keep a gap: never faster than closes the distance gently
    if (o.speed < 4 && f > 0 && Math.abs(l) < 3.4) { want += l > 0 ? -3.6 : 3.6; if (ttc < 1.1) brakeFor = Math.max(brakeFor, .6); }          // stopped or crashed car ahead: go round, lift early
    else if (f > 0 && Math.abs(lp) < 3.4 * pk && ttc < 2.4 * pk) { want += (lp > 0 ? -1 : 1) * 3 * pk * (1.2 - ttc / (2.4 * pk)); if (ttc < .5 * ai.care * pk) brakeFor = Math.max(brakeFor, 1 - ttc / pk); }   // closing on a car: pick the clear side, brake if it is too late
    else if (f > -5 * pk && f < 7 * pk && Math.abs(l) < 4.3 * pk) {                                                                              // alongside
      if (cd && l * cd > 0) { want += -cd * 2.4 * ai.care * pk; brakeFor = Math.max(brakeFor, .1); }          // that car holds the inside: it owns the apex, so give it the room
      else want += (l > 0 ? -1 : 1) * 1.3 * ai.care * pk;                                                      // otherwise leave a car's width
    }
  }
  ai.off += (clamp(want, -ai.max, ai.max) - ai.off) * Math.min(1, dt * 2.7);
  const tx = tgt.x + tgt.tz * ai.off, tz = tgt.z - tgt.tx * ai.off;
  const err = wrap(Math.atan2(tx - car.x, tz - car.z) - car.th);
  // A driver, not a rail: steering lags by a reaction time; each part of the lap has a remembered pace that drops after a slide or an
  // off and creeps back up when the corner was easy; and now and then, more often with a car on its tail, it brakes a touch late.
  const B = ai.brain || (ai.brain = { react: .09 + Math.random() * .1, consist: .9 + Math.random() * .09, brave: .97 + Math.random() * .07, mem: new Float32Array(48).fill(1), ef: 0, lapse: 0, was: 0 });
  const slip = B.lapse > 0 ? B.kind : -1; B.ef += (err - B.ef) * Math.min(1, dt / (B.react * (slip === 4 ? 3.5 : 1))); const ef = Math.abs(err) > .6 ? err : B.ef, bk = car.idx * 48 / n | 0, cornering = Math.abs(tgt.k) > .008;
  if (cornering && !car.held) { if (car.grass > .3 || Math.abs(car.beta) > .3) B.mem[bk] = Math.max(.84, B.mem[bk] - .45 * dt); else if (car.useF < .85 && car.useR < .85) B.mem[bk] = Math.min(1.06 * B.brave, B.mem[bk] + .014 * dt); }
  const entering = Math.abs(setup) > .35 ? 1 : 0; if (entering && !B.was) { let chased = false; for (const o of cars) { if (o === car || o.out) continue; const f = (o.x - car.x) * Math.sin(car.th) + (o.z - car.z) * Math.cos(car.th); if (f < -2 && f > -11 && Math.abs((o.x - car.x) * Math.cos(car.th) - (o.z - car.z) * Math.sin(car.th)) < 4) chased = true; } if (Math.random() > Math.pow(B.consist, (chased ? 3 : 1) * (1 + (track.wet || 0)) * (2 - car.tyre))) { B.lapse = 1.1 + Math.random() * .9; B.kind = Math.random() * 5 | 0; B.bias = Math.random() < .5 ? 2.5 : -2.5; } }   // more likely when chased, in the wet, on worn tyres B.was = entering; B.lapse = Math.max(0, B.lapse - dt);
  // fastest speed that still lets us slow down for every corner in sight
  let v = car.spec.top; const mu = car.spec.grip * car.bopG * (.72 + .28 * car.tyre) * ai.skill * ai.skill * .78 * TUNE.gripScale * (1 - .26 * (track.wet || 0) * (car.wetTyres ? .3 : 1)) * (1 - .3 * Math.max(car.parts.wheels[0], car.parts.wheels[1])) * 9.81, dec = 7.5 * ai.skill;
  for (let i = 0; i < 70; i++) {
    const q = p[(car.idx + i) % n], vc = Math.sqrt(mu / Math.max(Math.abs(q.k), .0015)) * 1.02 * B.mem[((car.idx + i) % n) * 48 / n | 0] * (slip === 0 ? 1.08 : 1), lim = Math.sqrt(vc * vc + 2 * dec * i * track.spacing);
    if (lim < v) v = lim;
  }
  if (car.grass > .4) v = Math.min(v, 16);
  v = Math.min(v, vFollow);
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
