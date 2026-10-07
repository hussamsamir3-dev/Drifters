// People in the run-off: marshals with flags, medics, photographers and fans, built from real articulated parts (head with eyes and helmet, torso with a hi-vis vest, upper and lower arms
// with hands, thighs, shins with boots) and drawn with a handful of instanced meshes. They are smart: they watch, wave their flag as a car passes, run to the barrier when a car is on
// course for them, and walk back when it is safe. If a car does hit one, the same figure becomes a verlet ragdoll that takes the car's momentum (more speed, more throw and more
// spin), tumbles, slides and comes to rest, and blood is thrown on the ground in proportion to the force of the hit. Blood can be switched off in Settings.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GRASS } from './tracks.js';

const S = 1.35;                       // game scale: people are drawn at the same scale as the props and the toy-scaled cars
const col = (g, hex) => { const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
const merge = gs => mergeGeometries(gs.map(g => g.index ? g.toNonIndexed() : g), false);
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;

// ---- parts, in metres, each hanging from (or standing on) its own joint
function kit(o) {
  const cap = (r, len) => new THREE.CapsuleGeometry(r, len, 4, 12), box = (w, h, d, x, y, z) => new THREE.BoxGeometry(w, h, d).translate(x, y, z), sph = (r, x, y, z, sx = 1, sy = 1, sz = 1) => new THREE.SphereGeometry(r, 14, 10).scale(sx, sy, sz).translate(x, y, z);
  const body = merge([col(box(.34, .2, .2, 0, 0, 0), o.trousers), col(sph(.19, 0, .3, 0, 1, 1.45, .66), o.shirt), col(sph(.22, 0, .5, 0, 1, .38, .6), o.shirt), col(new THREE.CylinderGeometry(.05, .06, .1, 10).translate(0, .62, 0), o.skin),
    col(box(.4, .075, .27, 0, .3, 0), o.vest), col(box(.075, .5, .27, -.11, .38, 0), o.vest), col(box(.075, .5, .27, .11, .38, 0), o.vest), col(box(.4, .02, .28, 0, .27, 0), o.reflect), col(box(.4, .02, .28, 0, .33, 0), o.reflect), col(box(.36, .05, .22, 0, -.1, 0), o.belt)]);
  const head = merge([col(sph(.105, 0, 0, 0, 1, 1.12, 1.02), o.skin), col(new THREE.SphereGeometry(.118, 16, 8, 0, Math.PI * 2, 0, Math.PI * .55).translate(0, .02, 0), o.helmet), col(box(.2, .02, .09, 0, .05, .11), o.helmet),
    col(sph(.013, -.04, .02, .098), 0x151515), col(sph(.013, .04, .02, .098), 0x151515), col(sph(.02, -.105, 0, 0, .5, 1.3, 1), o.skin), col(sph(.02, .105, 0, 0, .5, 1.3, 1), o.skin), col(sph(.016, 0, -.01, .105, 1, 1.2, 1.3), o.skin)]);
  const uarm = merge([col(cap(.055, .2).translate(0, -.165, 0), o.shirt), col(sph(.065, 0, 0, 0), o.shirt)]);
  const farm = merge([col(cap(.046, .17).translate(0, -.14, 0), o.shirt), col(sph(.05, 0, -.3, 0, 1, 1.15, 1), o.glove), col(box(.1, .02, .1, 0, -.06, 0), o.reflect)]);
  const thigh = merge([col(cap(.085, .27).translate(0, -.22, 0), o.trousers), col(sph(.09, 0, 0, 0), o.trousers)]);
  const shin = merge([col(cap(.062, .24).translate(0, -.2, 0), o.trousers), col(box(.1, .09, .24, 0, -.4, .05), o.boot), col(box(.105, .03, .25, 0, -.45, .05), 0x101010)]);
  return { body, head, uarm, farm, thigh, shin };
}
const KITS = [
  { name: 'marshal A', skin: 0xd9a77c, shirt: 0xf26b1d, trousers: 0xf26b1d, vest: 0xfff200, reflect: 0xe8e8e8, helmet: 0xf4f4f4, glove: 0xf2f2f2, boot: 0x2b2b2b, belt: 0x222222, role: 'marshal' },
  { name: 'marshal B', skin: 0x8a5a3a, shirt: 0xf26b1d, trousers: 0xf26b1d, vest: 0xfff200, reflect: 0xe8e8e8, helmet: 0xffd21a, glove: 0xf2f2f2, boot: 0x2b2b2b, belt: 0x222222, role: 'marshal' },
  { name: 'medic', skin: 0xc58f68, shirt: 0xd8262b, trousers: 0x2b3340, vest: 0xf5f5f5, reflect: 0xe8e8e8, helmet: 0xf4f4f4, glove: 0x2b2b2b, boot: 0x2b2b2b, belt: 0x222222, role: 'medic' },
  { name: 'photographer', skin: 0xa5714a, shirt: 0x24272d, trousers: 0x33363d, vest: 0x56606b, reflect: 0x56606b, helmet: 0x1d1f23, glove: 0x24272d, boot: 0x1a1a1a, belt: 0x1a1a1a, role: 'photo' },
  { name: 'fan A', skin: 0xd9a77c, shirt: 0x1c57c8, trousers: 0x3d4f6e, vest: 0xe3262e, reflect: 0xe3262e, helmet: 0xe3262e, glove: 0xd9a77c, boot: 0xeeeeee, belt: 0x3d4f6e, role: 'fan' },
  { name: 'fan B', skin: 0x8a5a3a, shirt: 0xf2f2ee, trousers: 0x2e5b3a, vest: 0x2fb457, reflect: 0xffffff, helmet: 0x2e5b3a, glove: 0x8a5a3a, boot: 0x222222, belt: 0x2e5b3a, role: 'fan' },
];
// rest pose of the ragdoll, in metres, in the figure's own frame (x right, y up, z forward)
const REST = [[0, 1.66, 0], [0, 1.47, 0], [0, .95, 0], [-.2, 1.43, 0], [.2, 1.43, 0], [-.22, 1.14, 0], [.22, 1.14, 0], [-.22, .86, 0], [.22, .86, 0], [-.1, .95, 0], [.1, .95, 0], [-.1, .51, 0], [.1, .51, 0], [-.1, .09, 0], [.1, .09, 0]];
const LINKS = [[0, 1], [1, 2], [1, 3], [1, 4], [3, 5], [4, 6], [5, 7], [6, 8], [2, 9], [2, 10], [9, 11], [10, 12], [11, 13], [12, 14], [3, 4], [9, 10], [1, 9], [1, 10], [3, 2], [4, 2], [0, 3], [0, 4], [3, 9], [4, 10]];
const RADIUS = [.13, .17, .15, .08, .08, .07, .07, .06, .06, .09, .09, .08, .08, .07, .07];

export class Marshals {
  constructor(scene, track, opts) {
    this.scene = scene; this.track = track; this.o = opts; this.t = 0; this.figs = []; this.decals = []; this.dn = 0; this.group = new THREE.Group(); scene.add(this.group);
    const rnd = () => Math.random(), p = track.path, n = track.n, hw = track.def.width * .6, B = hw + (track.def.runoff || 4), posts = [];
    // posts: on the outside of the corners, on the grass between the road and the barrier
    const picks = []; for (let i = 60; i < n - 60; i += 3) { const k = p[i].k || 0; if (Math.abs(k) > 1 / 130 && picks.every(q => Math.abs(q - i) > 40 || Math.abs(q - i) > n - 40)) picks.push(i); }
    for (const i of picks.slice(0, 22)) { const q = p[i], side = -Math.sign(q.k) || 1, off = side * clamp(hw + 4.5 + rnd() * Math.max(0, B - hw - 7), hw + 4, B - 1.6), x = q.x + q.tz * off, z = q.z - q.tx * off; if (track.surf(x, z) !== GRASS) continue;
      const kinds = rnd() < .18 ? 2 : rnd() < .55 ? 0 : 1; posts.push({ x, z, kit: kinds, flag: kinds !== 2 && rnd() < .8, i, side, yaw: Math.atan2(q.x - x, q.z - z) });
      if (rnd() < .6) { const o2 = off + side * (1.6 + rnd()), x2 = q.x + q.tz * o2, z2 = q.z - q.tx * o2; if (track.surf(x2, z2) === GRASS) posts.push({ x: x2, z: z2, kit: 3, flag: false, i, side, yaw: Math.atan2(q.x - x2, q.z - z2) }); }       // a photographer beside the post
      if (rnd() < .45) { const o3 = side * (B - 1.5), x3 = q.x + q.tz * o3 + q.tx * 3, z3 = q.z - q.tx * o3 + q.tz * 3; if (track.surf(x3, z3) === GRASS) posts.push({ x: x3, z: z3, kit: 4 + (rnd() * 2 | 0), flag: false, i, side, yaw: Math.atan2(q.x - x3, q.z - z3) }); } }      // fans at the barrier
    const N = posts.length; this.N = N; if (!N) return;
    // instanced parts: one set per kit, so a whole run-off of people is a few dozen draw calls
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .7, metalness: .02 }); this.sets = KITS.map(k => { const g = kit(k), m = {}; for (const key in g) { const im = new THREE.InstancedMesh(g[key], mat, N * ((key === 'uarm' || key === 'farm' || key === 'thigh' || key === 'shin') ? 2 : 1)); im.count = 0; im.frustumCulled = false; im.castShadow = false; this.group.add(im); m[key] = im; } return m; });
    this.flagM = new THREE.InstancedMesh(new THREE.PlaneGeometry(.55, .38).translate(.27, 0, 0), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), N); this.flagM.count = 0; this.flagM.frustumCulled = false; this.group.add(this.flagM);
    this.figs = posts.map((q, id) => ({ id, kit: q.kit, home: { x: q.x, z: q.z }, x: q.x, z: q.z, yaw: q.yaw, state: 'post', ph: rnd() * 6.28, spd: 0, flag: q.flag, fc: new THREE.Color([0xfff200, 0x2fb457, 0xe3262e, 0x1c57c8, 0xf2f2ee][(rnd() * 5) | 0]), side: q.side, i: q.i, wave: 0, rag: null, safe: null }));
    this.M4 = new THREE.Matrix4(); this.Q = new THREE.Quaternion(); this.V = new THREE.Vector3(); this.UP = new THREE.Vector3(0, 1, 0); this.DOWN = new THREE.Vector3(0, -1, 0); this.cnt = KITS.map(() => ({ body: 0, head: 0, uarm: 0, farm: 0, thigh: 0, shin: 0, flag: 0 }));
  }
  // ---- per-frame
  update(dt, cars, track) {
    if (!this.N) return; dt = Math.min(dt, .05); this.t += dt; this.flagN = 0; const cnt = this.cnt; for (const c of cnt) for (const k in c) c[k] = 0;
    for (const F of this.figs) { this.think(F, dt, cars, track); this.draw(F); }
    KITS.forEach((_, ki) => { const m = this.sets[ki], c = cnt[ki]; for (const key in m) { m[key].count = c[key]; m[key].instanceMatrix.needsUpdate = true; } });
    this.flagM.count = cnt[0].flag + cnt.slice(1).reduce((a, c) => a + c.flag, 0); this.flagM.instanceMatrix.needsUpdate = true; if (this.flagM.instanceColor) this.flagM.instanceColor.needsUpdate = true;
  }
  think(F, dt, cars, track) {
    // the threat: any car whose path will pass close to this person within a couple of seconds
    let danger = 0, near = 1e9, away = null;
    for (const c of cars) { const dx = F.x - c.x, dz = F.z - c.z, sp = Math.hypot(c.vx, c.vz); if (sp < 3) { near = Math.min(near, Math.hypot(dx, dz)); continue; }
      const ux = c.vx / sp, uz = c.vz / sp, ahead = dx * ux + dz * uz, lat = dx * uz - dz * ux, tt = ahead / sp; near = Math.min(near, Math.hypot(dx, dz));
      if (ahead > -2.5 && Math.abs(lat) < 5.5 && tt < 3 && ahead < 70) { const d = (1 - tt / 3) * (1 - Math.abs(lat) / 5.5); if (d > danger) { danger = d; away = [lat > 0 ? uz : -uz, lat > 0 ? -ux : ux]; } }      // sideways, away from the car's line
      // contact: an oriented box round the car
      const f = (F.x - c.x) * Math.sin(c.th) + (F.z - c.z) * Math.cos(c.th), l = (F.x - c.x) * Math.cos(c.th) - (F.z - c.z) * Math.sin(c.th); if (Math.abs(f) < 3.4 && Math.abs(l) < 1.9 && sp > 1.5) { danger = Math.max(danger, 1); away = [l > 0 ? Math.cos(c.th) : -Math.cos(c.th), l > 0 ? -Math.sin(c.th) : Math.sin(c.th)]; F.x += away[0] * 5 * dt; F.z += away[1] * 5 * dt; } }      // people step aside; there is no collision with them
    if (this.noFlee) danger = 0;      // (test switch)
    if (danger > .12 || F.state === 'flee') {
      if (danger > .12) { F.state = 'flee'; F.calm = 0; const B = this.track.def.width * .6 + (this.track.def.runoff || 4); if (away) { const nx = away[0], nz = away[1]; F.safe = { x: F.x + nx * 8, z: F.z + nz * 8 }; } }
      else { F.calm = (F.calm || 0) + dt; if (F.calm > 1.6) F.state = 'return'; }
      if (F.safe) this.walk(F, dt, F.safe.x, F.safe.z, 6.2); else F.spd *= .9; }
    else if (F.state === 'return') { const d = Math.hypot(F.home.x - F.x, F.home.z - F.z); if (d < .3) { F.state = 'post'; F.spd = 0; } else this.walk(F, dt, F.home.x, F.home.z, 1.7); }
    else { F.spd *= .85; if (near < 28 && near > 4) { const k = cars.reduce((b, c) => !b || Math.hypot(c.x - F.x, c.z - F.z) < Math.hypot(b.x - F.x, b.z - F.z) ? c : b, null); if (k) { const want = Math.atan2(k.x - F.x, k.z - F.z); F.yaw += Math.atan2(Math.sin(want - F.yaw), Math.cos(want - F.yaw)) * Math.min(1, dt * 3); } F.wave = Math.min(1, F.wave + dt * 3); } else F.wave = Math.max(0, F.wave - dt * 2); }
    F.ph += dt * (F.spd > .3 ? F.spd * 2.4 : 1.4);
  }
  walk(F, dt, tx, tz, v) { const dx = tx - F.x, dz = tz - F.z, d = Math.hypot(dx, dz); if (d < .25) { F.spd *= .8; return; } const want = Math.atan2(dx, dz); F.yaw += Math.atan2(Math.sin(want - F.yaw), Math.cos(want - F.yaw)) * Math.min(1, dt * 9); F.spd += (v - F.spd) * Math.min(1, dt * 6); const nx = F.x + Math.sin(F.yaw) * F.spd * dt, nz = F.z + Math.cos(F.yaw) * F.spd * dt; if (this.track.surf(nx, nz) === GRASS) { F.x = nx; F.z = nz; } else F.spd = 0; }
  draw(F) {
    const M = this.M4, Q = this.Q, V = this.V, ki = F.kit, set = this.sets[ki], c = this.cnt[ki], track = this.track;
    const put = (key, mat) => { set[key].setMatrixAt(c[key]++, mat); };
    // standing, walking, running or waving: a joint chain per limb
    const y0 = track.height(F.x, F.z), run = clamp(F.spd / 6, 0, 1), walk = clamp(F.spd / 1.7, 0, 1), sw = Math.sin(F.ph), sw2 = Math.sin(F.ph + Math.PI), bob = Math.abs(Math.sin(F.ph)) * .04 * walk + Math.sin(this.t * 1.6 + F.id) * .006, lean = .05 + run * .28;
    const root = new THREE.Matrix4().compose(new THREE.Vector3(F.x, y0, F.z), new THREE.Quaternion().setFromAxisAngle(this.UP, F.yaw), new THREE.Vector3(S, S, S)), T = (x, y, z) => new THREE.Matrix4().makeTranslation(x, y, z), Rx = a => new THREE.Matrix4().makeRotationX(a), Rz = a => new THREE.Matrix4().makeRotationZ(a);
    const mb = root.clone().multiply(T(0, .95 + bob, 0)).multiply(Rx(lean)); put('body', mb);
    const look = F.state === 'post' ? Math.sin(this.t * .7 + F.id) * .15 : 0; put('head', mb.clone().multiply(T(0, .71, 0)).multiply(new THREE.Matrix4().makeRotationY(look)).multiply(Rx(-lean * .6)));
    const photo = ki === 3 && F.state === 'post' && F.wave > .2, hold = ki === 3 && F.state === 'post';
    for (const sx of [-1, 1]) { const swing = (sx > 0 ? sw : sw2) * (.45 * walk + .9 * run);
      let a1 = -swing * .9, a2 = -.15 - run * .9, rz = sx * .08;
      if (sx > 0 && F.flag && F.state === 'post') { a1 = -2.5 + Math.sin(this.t * 7 + F.id) * .12 * F.wave; rz = -.35 + Math.sin(this.t * 8 + F.id) * .55 * (.3 + F.wave); a2 = -.1; }      // the flag arm: up, and waving harder as a car passes
      if (hold) { a1 = -1.15; a2 = -1.7; rz = sx * .12; }                                                                                                                                      // the camera raised
      const sh = mb.clone().multiply(T(sx * .2, .5, 0)).multiply(Rz(rz)).multiply(Rx(a1)); put('uarm', sh); const el = sh.clone().multiply(T(0, -.31, 0)).multiply(Rx(a2)); put('farm', el);
      if (sx > 0 && F.flag && F.state === 'post') { const hand = el.clone().multiply(T(0, -.3, 0)).multiply(Rz(Math.PI / 2)).multiply(Rx(.0)); const fm = hand.clone().multiply(T(0, 0, 0)); this.flagM.setMatrixAt(this.flagN | 0, fm); this.flagM.setColorAt(this.flagN | 0, F.fc); this.flagN = (this.flagN | 0) + 1; c.flag++; }
      const hip = mb.clone().multiply(T(sx * .1, -.0, 0)).multiply(new THREE.Matrix4().makeRotationX(-lean)), th = (sx > 0 ? sw2 : sw) * (.42 * walk + .8 * run), a3 = th, a4 = Math.max(0, -th) * (.7 + run * .6) + .05 * walk; const tm = hip.clone().multiply(Rx(a3)); put('thigh', tm); put('shin', tm.clone().multiply(T(0, -.44, 0)).multiply(Rx(a4))); }
    if (photo) void 0;
  }
  dispose() { if (this.group) { this.scene.remove(this.group); this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); } }
}
