// Everything in the circuit's surroundings that moves or grows: wind-swayed trees, bushes, grass and flowers, waving flags, bird flocks, smoke and steam, balloons, blinking beacons,
// flickering floodlights and camera flashes, a rotating tri-vision billboard, wind turbines, a blimp and a helicopter. All of it is driven by the track's single time uniform (uT) and the
// track's mover list, so it costs a handful of draw calls and no CPU per object. No THREE light is ever added or removed here (that would recompile every shader).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { MB, lin, TILE } from './scn_geo.js';

const TAU = Math.PI * 2;
const nonIdx = g => g.index ? g.toNonIndexed() : g;
const merge = gs => mergeGeometries(gs.map(nonIdx), false);
function paint(g, fn) { const P = g.attributes.position, n = P.count, c = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const v = fn(P.getX(i), P.getY(i), P.getZ(i), i); c[i * 3] = v[0]; c[i * 3 + 1] = v[1]; c[i * 3 + 2] = v[2]; } g.setAttribute('color', new THREE.BufferAttribute(c, 3)); return g; }
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const flat = c => g => paint(g, () => c);

// ---------------------------------------------------------------- tree geometries (vertex colours, low poly; the vertex shader sways them by height)
function blob(r, x, y, z, sy, lo, hi, seed = 1, det = 1) {
  const g = new THREE.IcosahedronGeometry(r, det); const P = g.attributes.position; for (let i = 0; i < P.count; i++) { const px = P.getX(i), py = P.getY(i), pz = P.getZ(i), k = 1 + .2 * Math.sin(px * 3.1 + pz * 2.3 + seed) * Math.cos(py * 2.7 + px * 1.3) + .07 * Math.sin(py * 6 + pz * 5 + seed * 2); P.setXYZ(i, px * k, py * k * sy, pz * k); }
  g.translate(x, y, z); return paint(nonIdx(g), (px, py, pz, i) => { const t = Math.max(0, Math.min(1, (py - y) / (r * sy) * .5 + .5)), s = (Math.sin(px * 40 + py * 17 + pz * 23 + i) * .5 + .5) * .12; return mix(lo, hi, Math.min(1, t * .9 + s)); });
}
const cone = (r, h, y, seg, lo, hi) => paint(nonIdx(new THREE.ConeGeometry(r, h, seg, 1).translate(0, y + h / 2, 0)), (px, py, pz, i) => mix(lo, hi, Math.max(0, Math.min(1, (py - y) / h)) * .8 + ((i * 7) % 5) * .03));
function trunk(r0, r1, h, col, seg = 6) { return paint(nonIdx(new THREE.CylinderGeometry(r1, r0, h, seg, 1, true).translate(0, h / 2, 0)), (px, py) => mix(col, [col[0] * .75, col[1] * .75, col[2] * .75], Math.max(0, 1 - py / h) * .6 + .0)); }
function geoPine() { const dk = [.035, .13, .07], lt = [.12, .31, .13]; return merge([trunk(.2, .12, 3.4, [.3, .2, .12]), cone(2.1, 3.4, 1.9, 8, dk, lt), cone(1.65, 3.0, 3.8, 8, dk, lt), cone(1.2, 2.6, 5.5, 8, dk, [.15, .36, .15]), cone(.75, 2.2, 7.1, 7, [.05, .17, .09], [.18, .4, .17])]); }
function geoOak() { const lo = [.05, .15, .05], hi = [.24, .47, .12]; return merge([trunk(.36, .2, 3.2, [.34, .24, .15], 7), blob(2.1, 0, 4.6, 0, .85, lo, hi, 1), blob(1.5, 1.5, 3.9, .6, .85, lo, hi, 2), blob(1.45, -1.3, 4.1, .8, .85, lo, hi, 3), blob(1.3, .3, 5.9, -.6, .85, lo, hi, 4)]); }
function geoPoplar() { const lo = [.05, .17, .06], hi = [.2, .42, .11]; return merge([trunk(.25, .14, 2.6, [.4, .33, .25], 6), blob(1.1, 0, 4.2, 0, 2.3, lo, hi, 5), blob(.9, .15, 7.0, .1, 1.7, lo, hi, 6)]); }
function geoBush() { const lo = [.05, .15, .05], hi = [.25, .48, .14]; return merge([blob(.9, 0, .65, 0, .75, lo, hi, 7), blob(.7, .8, .5, .3, .8, lo, hi, 8), blob(.6, -.6, .45, .5, .8, lo, hi, 9)]); }
function geoShrubDry() { const lo = [.34, .27, .12], hi = [.62, .5, .24]; return merge([blob(.8, 0, .5, 0, .65, lo, hi, 3), blob(.55, .7, .38, .2, .7, lo, hi, 4)]); }
function geoPalm() {
  const parts = [], segs = 7; for (let s = 0; s < segs; s++) { const g = new THREE.CylinderGeometry(.19 - s * .01, .23 - s * .01, .86, 6, 1, true); g.translate(s * .07 + s * s * .01, s * .84 + .43, 0); parts.push(paint(nonIdx(g), () => s % 2 ? [.43, .32, .2] : [.52, .4, .26])); }
  const topX = (segs - 1) * .07 + (segs - 1) ** 2 * .01 + .1, topY = segs * .84; const fr = [];
  for (let f = 0; f < 9; f++) { const a = f / 9 * TAU, g = new THREE.PlaneGeometry(.8, 3.6, 1, 4), P = g.attributes.position; for (let q = 0; q < P.count; q++) { const u = (P.getY(q) + 1.8) / 3.6, w = P.getX(q); P.setXYZ(q, u * 3.4, -u * u * 1.6 + .4 - Math.abs(w) * .15, w * (1 - u * .7)); }
    g.rotateY(a); g.translate(topX, topY, 0); const gi = nonIdx(g); gi.computeVertexNormals(); fr.push(paint(gi, (px, py) => { const u = Math.max(0, Math.min(1, (Math.hypot(px - topX, 0) + 0) / 3.4)); return mix([.1, .28, .08], [.28, .55, .16], u); })); }
  return merge(parts.concat(fr));
}

// ---------------------------------------------------------------- materials with wind
export function windify(mat, uT, uWind, amp = .0036) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.uTime = uT; sh.uniforms.uWind = uWind;
    sh.vertexShader = 'uniform float uTime; uniform float uWind;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3][0], 0., instanceMatrix[3][2]);
      #else
        vec3 ip = vec3(0.);
      #endif
      { float hh = max(transformed.y, 0.), sw = hh * hh * ${amp.toFixed(5)} * uWind, t = uTime * 1.25 + ip.x * .09 + ip.z * .07, gust = .65 + .35 * sin(uTime * .21 + ip.x * .013 + ip.z * .017);
        transformed.x += (sin(t) * .8 + sin(t * 2.7 + 1.3) * .35) * sw * gust; transformed.z += (cos(t * .9 + .5) * .6 + sin(t * 2.1) * .25) * sw * gust; }`);
  };
  mat.customProgramCacheKey = () => 'wind' + amp;
  return mat;
}

// instanced meshes split into cells, registered with the game's draw-distance culling
function instCells(c, geo, mat, list, cell, shadow) {
  const cells = new Map(); for (const t of list) { const k = Math.floor(t.x / cell) + ',' + Math.floor(t.z / cell); let l = cells.get(k); if (!l) cells.set(k, l = []); l.push(t); }
  const d = new THREE.Object3D(), out = [];
  for (const l of cells.values()) {
    const m = new THREE.InstancedMesh(geo, mat, l.length); let cx = 0, cz = 0;
    l.forEach((t, i) => { d.position.set(t.x, t.y || 0, t.z); d.rotation.set(0, t.r || 0, 0); d.scale.set(t.sx || t.s || 1, t.sy || t.s || 1, t.sz || t.s || 1); d.updateMatrix(); m.setMatrixAt(i, d.matrix); if (t.c) m.setColorAt(i, t.c); cx += t.x; cz += t.z; });
    m.castShadow = !!shadow; m.receiveShadow = true; m.computeBoundingSphere(); c.G.add(m); c.cull(m, cx / l.length, cz / l.length); out.push(m);
  }
  return out;
}

const GREEN_TINTS = [[1, 1, 1], [.9, 1, .9], [1.1, 1.05, .8], [.8, .95, .8], [1.2, 1, .75], [.95, .9, 1.05], [1.35, .85, .55]].map(v => new THREE.Color(v[0], v[1], v[2]));
const SAND_TINTS = [[1, 1, 1], [1.1, 1.05, .9], [.9, .85, .75]].map(v => new THREE.Color(v[0], v[1], v[2]));

function grassTex() {      // 4 cells: grass tuft, tall tuft, flower patch, fern. Alpha-tested.
  const c = document.createElement('canvas'); c.width = 256; c.height = 256; const k = c.getContext('2d'), R = (a, b) => a + Math.random() * (b - a);
  const blades = (x0, y0, w, h, n, cols, hmin) => { for (let i = 0; i < n; i++) { const x = x0 + R(.1, .9) * w, hh = h * R(hmin, 1), lean = R(-.22, .22) * w; k.strokeStyle = cols[(Math.random() * cols.length) | 0]; k.lineWidth = R(1.6, 3.4); k.lineCap = 'round'; k.beginPath(); k.moveTo(x, y0 + h - 1); k.quadraticCurveTo(x + lean * .4, y0 + h - hh * .55, x + lean, y0 + h - hh); k.stroke(); } };
  const g1 = ['#6f9a3a', '#8bb446', '#4f7d2c', '#a3c55a'], g2 = ['#7ba33f', '#a6c858', '#5a8a30'];
  blades(0, 0, 128, 128, 34, g1, .45); blades(128, 0, 128, 128, 26, g2, .7);
  blades(0, 128, 128, 128, 16, g1, .5); const fl = ['#ffffff', '#ffe36a', '#ff7aa0', '#b48cff', '#ff9a3a']; for (let i = 0; i < 16; i++) { const x = 8 + R(0, 110), y = 150 + R(0, 90); k.strokeStyle = '#5c8a34'; k.lineWidth = 1.6; k.beginPath(); k.moveTo(x + R(-6, 6), 250); k.lineTo(x, y); k.stroke(); k.fillStyle = fl[i % 5]; k.beginPath(); k.arc(x, y, R(3.5, 6), 0, TAU); k.fill(); k.fillStyle = '#fff3a0'; k.beginPath(); k.arc(x, y, 1.6, 0, TAU); k.fill(); }
  for (let f = 0; f < 7; f++) { const a = -1.2 + f * .4, cx = 192, cy = 250; k.strokeStyle = '#4f8a32'; k.lineWidth = 2.5; k.beginPath(); k.moveTo(cx, cy); k.quadraticCurveTo(cx + Math.sin(a) * 40, cy - 70, cx + Math.sin(a) * 70, cy - 70 - Math.cos(a) * 40); k.stroke(); k.strokeStyle = '#6ca843'; k.lineWidth = 7; k.globalAlpha = .7; k.beginPath(); k.moveTo(cx + Math.sin(a) * 20, cy - 36); k.lineTo(cx + Math.sin(a) * 66, cy - 66 - Math.cos(a) * 36); k.stroke(); k.globalAlpha = 1; }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 2; return t;
}

function flagTex() {      // six 128x64 designs stacked: Egypt, red/white, blue/white, green, check, yellow/black
  const c = document.createElement('canvas'); c.width = 128; c.height = 6 * 64; const k = c.getContext('2d');
  const band = (i, cols) => { const h = 64 / cols.length; cols.forEach((col, j) => { k.fillStyle = col; k.fillRect(0, i * 64 + j * h, 128, h + 1); }); };
  band(0, ['#ce1126', '#f4f4f4', '#111111']); k.fillStyle = '#c09300'; k.beginPath(); k.arc(64, 32, 8, 0, TAU); k.fill();
  band(1, ['#e3262e', '#f4f4f4', '#e3262e']); band(2, ['#1c4ea8', '#f4f4f4', '#1c4ea8']); band(3, ['#1fa35a', '#f4f4f4', '#1fa35a']);
  for (let x = 0; x < 8; x++) for (let y = 0; y < 4; y++) { k.fillStyle = (x + y) & 1 ? '#111' : '#f4f4f4'; k.fillRect(x * 16, 4 * 64 + y * 16, 16, 16); }
  band(5, ['#ffc21a', '#17181c', '#ffc21a']);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function buildLive(c) {
  const { G, uT, movers, lib, okT, occ, hash, zoneAt, A, offP, yawT, yawA, n, B, hw, def, track, night, desert, coast, day, rnd, low, Dn, th, put, path, pitSide, inPit, pitL, atl } = c;
  const R = (a, b) => a + rnd() * (b - a), pick = a => a[Math.floor(rnd() * a.length) % a.length];
  const uWind = { value: 1 }, live = { draws: 0 }, cx0 = c.cx, cz0 = c.cz;
  movers.push(t => { uWind.value = .75 + .3 * Math.sin(t * .11) + .2 * Math.sin(t * .37 + 1); });
  const wind = [.8, .6];      // direction the wind blows towards (x, z); flags stream along it
  const plan = { trees: [], tuft: [], dry: [] };

  // ============================================================= vegetation
  if (!night) {
    const mT = windify(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .93, side: THREE.DoubleSide }), uT, uWind, .0034);
    const mP = windify(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, side: THREE.DoubleSide }), uT, uWind, .0026);
    const mB = windify(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95 }), uT, uWind, .02);
    const geo = { pine: geoPine(), oak: geoOak(), pop: geoPoplar(), bush: geoBush(), dry: geoShrubDry(), palm: geoPalm() };
    const L = { pine: [], oak: [], pop: [], bush: [], dry: [], palm: [] }, RAD = { pine: 2.0, oak: 2.8, pop: 1.4, bush: 1.1, dry: 1.0, palm: 1.6 };
    const tint = d => d ? SAND_TINTS[Math.floor(rnd() * SAND_TINTS.length)] : GREEN_TINTS[Math.floor(rnd() * GREEN_TINTS.length)];
    const addTree = (kind, x, z, sc) => { const r = RAD[kind] * sc; if (!okT(x, z, r, 3.5) || !occ.free(x, z, r * .85)) return false; occ.add(x, z, r * .85); const tn = tint(kind === 'dry'), k = .88 + rnd() * .3;
      L[kind].push({ x, z, y: track.height(x, z) || 0, r: rnd() * TAU, sx: sc * (.88 + rnd() * .26), sz: sc * (.88 + rnd() * .26), sy: sc * (.85 + rnd() * .4), c: new THREE.Color(tn.r * k, tn.g * k, tn.b * k) }); return true; };
    const D1 = low ? .4 : Dn;
    for (let i = 0; i < n; i += 2) for (const s of [1, -1]) {
      const z = zoneAt(i, s); if (s === pitSide && inPit(i)) continue; const p = A(i); let tries = 0, nt = 0;
      const dens = z === 'forest' ? 3.6 : z === 'houses' ? 1.1 : z === 'farm' ? .5 : z === 'open' ? (desert ? .12 : .35) : z === 'road' ? .6 : .25;
      tries = Math.floor(dens * D1 + (rnd() < (dens * D1) % 1 ? 1 : 0));
      for (let k = 0; k < tries; k++) {
        const near = rnd() < .45, off = near ? R(8, 24) : R(18, z === 'forest' ? 85 : 62) , [x, z2] = offP(p, s * (B + off)), r = rnd();
        let kind, sc = .75 + rnd() * .7;
        if (desert) kind = r < .5 ? 'palm' : r < .85 ? 'dry' : 'bush'; else if (coast) kind = r < .42 ? 'palm' : r < .6 ? 'oak' : r < .72 ? 'pine' : r < .9 ? 'bush' : 'pop'; else kind = z === 'forest' ? (r < .5 ? 'pine' : r < .85 ? 'oak' : r < .93 ? 'pop' : 'bush') : (r < .3 ? 'pine' : r < .62 ? 'oak' : r < .72 ? 'pop' : 'bush');
        if (desert && kind === 'palm' && z !== 'houses' && z !== 'farm' && rnd() < .5) kind = 'dry'; if (kind === 'bush' || kind === 'dry') sc = .7 + rnd() * .8; if (kind === 'palm') sc = .8 + rnd() * .5;
        if (addTree(kind, x, z2, sc)) nt++;
      }
    }
    // avenues of palms along the outside of the road on sunny circuits, and a hedge of bushes behind the fences
    if (desert || coast) for (let i = 4; i < n; i += 5) for (const s of [1, -1]) { if ((i / 5 + (s > 0 ? 1 : 0)) % 3) continue; if (s === pitSide && inPit(i)) continue; if (rnd() > .8 * D1 + .15) continue; const p = A(i), [x, z] = offP(p, s * (B + 9.3)); addTree('palm', x, z, .9 + rnd() * .35); }
    for (let i = 0; i < n; i += 3) for (const s of [1, -1]) { if (s === pitSide && inPit(i)) continue; if (hash(Math.floor(i / 20), s * 2.9) > .35 || rnd() > .8 * D1 + .1) continue; const p = A(i), [x, z] = offP(p, s * (B + 8.2)); addTree(desert ? 'dry' : 'bush', x, z, .7 + rnd() * .5); }
    // growth that fills the gaps: tufts and flowers close to the fences and between trees
    const GC = { tuft: [], flower: [], fern: [] };
    const addGC = (kind, x, z, s) => { if (!okT(x, z, .3, 3) || !occ.free(x, z, .4)) return; GC[kind].push({ x, z, y: track.height(x, z) || 0, r: rnd() * TAU, s, c: tint(desert) }); };
    const gdens = low ? .45 : Dn;
    for (let i = 0; i < n; i += 1) for (const s of [1, -1]) { if (s === pitSide && inPit(i)) continue; const p = A(i), zn = zoneAt(i, s), cnt = (zn === 'forest' ? 1.6 : zn === 'open' ? 1.1 : .8) * gdens * (desert ? .25 : 1); const m = Math.floor(cnt) + (rnd() < cnt % 1 ? 1 : 0);
      for (let k = 0; k < m; k++) { const off = R(7.2, rnd() < .6 ? 15 : 40), [x, z] = offP(p, s * (B + off)), r = rnd(); addGC(r < .55 ? 'tuft' : r < .8 ? 'flower' : 'fern', x, z, R(.8, 1.5)); } }
    live.trees = Object.fromEntries(Object.entries(L).map(([k, v]) => [k, v.length]));
    for (const kind of Object.keys(L)) if (L[kind].length) { const m = instCells(c, geo[kind], kind === 'bush' || kind === 'dry' ? mB : kind === 'palm' ? mP : mT, L[kind], 110, kind !== 'bush' && kind !== 'dry' && !low); live.draws += m.length; }
    // ground cover as crossed quads on one alpha-tested material
    const gt = grassTex(), gm = new THREE.MeshStandardMaterial({ map: gt, alphaTest: .45, side: THREE.DoubleSide, roughness: 1, vertexColors: false });
    gm.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.uniforms.uWind = uWind; sh.vertexShader = 'uniform float uTime; uniform float uWind; attribute vec4 aRect;\n' + sh.vertexShader.replace('#include <uv_vertex>', '#include <uv_vertex>\n#ifdef USE_MAP\n vMapUv = aRect.xy + uv * aRect.zw;\n#endif').replace('#include <begin_vertex>', `#include <begin_vertex>
      { vec3 ip = vec3(instanceMatrix[3][0], 0., instanceMatrix[3][2]); float hh = uv.y; float t = uTime * 1.9 + ip.x * .31 + ip.z * .27; transformed.x += sin(t) * .22 * hh * hh * uWind; transformed.z += cos(t * .8) * .16 * hh * hh * uWind; }`); };
    const quad = new THREE.BufferGeometry(), pos = [], uvs = [], idx = []; for (let q = 0; q < 2; q++) { const a = q * Math.PI / 2, cx = Math.cos(a) * .5, cz = Math.sin(a) * .5, b = pos.length / 3; pos.push(-cx, 0, -cz, cx, 0, cz, cx, 1, cz, -cx, 1, -cz); uvs.push(0, 0, 1, 0, 1, 1, 0, 1); idx.push(b, b + 1, b + 2, b, b + 2, b + 3); }
    quad.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); quad.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); quad.setIndex(idx); quad.computeVertexNormals(); for (let i = 0; i < quad.attributes.normal.count; i++) quad.attributes.normal.setXYZ(i, 0, 1, 0);
    const RECT = { tuft: [0, .5, .5, .5], flower: [0, 0, .5, .5], fern: [.5, 0, .5, .5] };      // canvas y is flipped: the top of the canvas is v = 1
    const all = []; for (const k of Object.keys(GC)) for (const t of GC[k]) { t.rect = k === 'tuft' ? (rnd() < .5 ? [0, .5, .5, .5] : [.5, .5, .5, .5]) : k === 'flower' ? [0, 0, .5, .5] : [.5, 0, .5, .5]; t.sy = t.s * (k === 'flower' ? .75 : 1) * .8; t.sx = t.s * 1.1; t.sz = t.s * 1.1; all.push(t); }
    void RECT;
    if (all.length) { const cells = new Map(); for (const t of all) { const k = Math.floor(t.x / 120) + ',' + Math.floor(t.z / 120); let l = cells.get(k); if (!l) cells.set(k, l = []); l.push(t); }
      const d = new THREE.Object3D(); for (const l of cells.values()) { const g = quad.clone(), m = new THREE.InstancedMesh(g, gm, l.length), rc = new Float32Array(l.length * 4); let sx = 0, sz = 0;
        l.forEach((t, i) => { d.position.set(t.x, t.y, t.z); d.rotation.set(0, t.r, 0); d.scale.set(t.sx, t.sy, t.sz); d.updateMatrix(); m.setMatrixAt(i, d.matrix); m.setColorAt(i, t.c); rc.set(t.rect, i * 4); sx += t.x; sz += t.z; });
        g.setAttribute('aRect', new THREE.InstancedBufferAttribute(rc, 4)); m.receiveShadow = false; m.castShadow = false; m.computeBoundingSphere(); G.add(m); c.cull(m, sx / l.length, sz / l.length); live.draws++; } }
    live.cover = all.length;
  }

  // ============================================================= flags on poles (instanced, waved in the vertex shader)
  {
    const spots = [];       // { x, z, h, kind }
    for (const st of c.standList.slice(0, 1)) { const cs = Math.cos(st.yaw), sn = Math.sin(st.yaw); for (let q = -st.len / 2 + 2; q <= st.len / 2; q += 10) { const px = q, pz = 1.9, x = st.x + px * cs + pz * sn, z = st.z - px * sn + pz * cs; put(lib.flagPole, x, z, 0); spots.push({ x, z, h: 9.8, k: Math.floor(rnd() * 6) }); } }
    for (const ar of c.arches || []) for (const sd of [-1, 1]) { const x = ar.x + Math.cos(ar.yaw) * sd * 6, z = ar.z - Math.sin(ar.yaw) * sd * 6; put(lib.flagPole, x, z, 0); spots.push({ x, z, h: 9.8, k: Math.floor(rnd() * 6) }); }
    if (pitL) { const L = pitL.L, q0 = pitL.qa + 10, q1 = pitL.qb - 10; for (let q = q0; q < q1; q += 14) { const l = L[q], x = l.x + l.nx * 69, z = l.z + l.nz * 69; if (okT(x, z, 1, -8)) { put(lib.flagPole, x, z, 0); spots.push({ x, z, h: 9.8, k: (q / 14 | 0) % 6 }); } } }
    for (const l of c.lots) for (const sd of [-1, 1]) { const x = l.x + Math.cos(l.yaw) * sd * (l.Wd / 2 - 1), z = l.z - Math.sin(l.yaw) * sd * (l.Wd / 2 - 1); void x; void z; }
    c.flagSpots = spots;
    if (spots.length) {
      const g = new THREE.PlaneGeometry(2.4, 1.5, 12, 1); g.translate(1.2, 0, 0); const mf = new THREE.MeshStandardMaterial({ map: flagTex(), side: THREE.DoubleSide, roughness: .8, emissive: 0xffffff, emissiveIntensity: .08 });
      const rect = new Float32Array(spots.length * 2); spots.forEach((s, i) => { rect[i * 2] = s.k; rect[i * 2 + 1] = rnd() * 6; });
      g.setAttribute('aFlag', new THREE.InstancedBufferAttribute(rect, 2));
      mf.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime; attribute vec2 aFlag;\n' + sh.vertexShader.replace('#include <uv_vertex>', '#include <uv_vertex>\n#ifdef USE_MAP\n vMapUv = vec2(uv.x, 1. - (aFlag.x + 1. - uv.y) / 6.);\n#endif').replace('#include <begin_vertex>', `#include <begin_vertex>
        { float u = position.x / 2.4, ph = aFlag.y; transformed.z += sin(u * 7. - uTime * 6.5 + ph) * .28 * u + sin(u * 13. - uTime * 9. + ph * 2.) * .06 * u; transformed.y += sin(u * 5. - uTime * 5. + ph) * .07 * u - u * u * .18; }`); };
      const m = new THREE.InstancedMesh(g, mf, spots.length), d = new THREE.Object3D(), yaw = Math.atan2(-wind[1], wind[0]);
      spots.forEach((s, i) => { d.position.set(s.x, s.h - .85, s.z); d.rotation.set(0, yaw + (rnd() - .5) * .3, 0); d.scale.setScalar(1); d.updateMatrix(); m.setMatrixAt(i, d.matrix); }); m.frustumCulled = false; G.add(m); live.draws++; live.flags = spots.length;
    }
  }

  // ============================================================= smoke, steam and dust (one Points draw call)
  {
    const em = [];       // emitters: x, y, z, kind 0 smoke,1 steam,2 dust, size, rise
    const sm = c.smokeSpots || [];
    for (const f of c.lots) if (rnd() < .5) em.push({ x: f.x + R(-4, 4), y: .6, z: f.z + R(-4, 4), k: 0 });
    // BBQ / food stalls: placed near the old fan village; chimneys on a few houses; steam vents at the workshops
    if (pitL) { const L = pitL.L; for (let q = pitL.qa + 14; q < pitL.qb - 10; q += 28) { const l = L[q]; em.push({ x: l.x + l.nx * 49.5 + l.tx * 5, y: 3.4, z: l.z + l.nz * 49.5 + l.tz * 5, k: 1 }); em.push({ x: l.x + l.nx * 41 + l.tx * 2, y: 1.6, z: l.z + l.nz * 41 + l.tz * 2, k: 2 }); } }
    for (const s of sm) em.push(s);
    const vp = path[Math.min(n - 1, 40)]; { const sideV = -(pitSide), vx = vp.x + vp.tz * sideV * (B + 40), vz = vp.z - vp.tx * sideV * (B + 40); for (let k = 0; k < (low ? 2 : 5); k++) em.push({ x: vx + R(-18, 18), y: 1.2, z: vz + R(-10, 10), k: 0, big: 1 }); }
    if (desert) for (let k = 0; k < (low ? 4 : 12); k++) { const p = A(Math.floor(rnd() * n)), [x, z] = offP(p, (rnd() < .5 ? 1 : -1) * (B + R(5, 20))); em.push({ x, y: .3, z, k: 3 }); }
    if (c.houseChimneys) for (const h of c.houseChimneys) if (rnd() < .5) em.push(h);
    const PER = 7, N = em.length * PER;
    if (N) {
      const pos = new Float32Array(N * 3), at = new Float32Array(N * 4), kk = new Float32Array(N); let o = 0;
      for (const e of em) for (let j = 0; j < PER; j++, o++) { pos.set([e.x, e.y, e.z], o * 3); const life = e.k === 3 ? R(6, 10) : e.k === 1 ? R(2.5, 4) : R(5, 8); at[o * 4] = life; at[o * 4 + 1] = j / PER + rnd() * .1; at[o * 4 + 2] = (e.big ? 1.6 : 1) * R(.7, 1.2); at[o * 4 + 3] = rnd() * TAU; kk[o] = e.k; }
      const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); gg.setAttribute('aA', new THREE.BufferAttribute(at, 4)); gg.setAttribute('aK', new THREE.BufferAttribute(kk, 1));
      const sh = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, fog: true, uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uTime: uT, uH: { value: 700 }, uWind: { value: new THREE.Vector2(wind[0], wind[1]) }, uSun: { value: night ? .35 : 1 } }]),
        vertexShader: `uniform float uTime, uH; uniform vec2 uWind; attribute vec4 aA; attribute float aK; varying float vA; varying vec3 vC;
          #include <fog_pars_vertex>
          void main(){ float life = aA.x, age = fract(uTime / life + aA.y), up = aK < .5 ? 2.2 : aK < 1.5 ? 3.2 : aK < 2.5 ? .25 : .5;
            vec3 p = position; p.y += age * life * up * (aK > 2.5 ? .25 : 1.); p.x += uWind.x * age * age * life * (aK > 2.5 ? 6. : 2.2) + sin(age * 6. + aA.w) * .4 * age; p.z += uWind.y * age * age * life * (aK > 2.5 ? 6. : 2.2) + cos(age * 5. + aA.w) * .4 * age;
            float sz = (aK < .5 ? 1.0 : aK < 1.5 ? .8 : aK < 2.5 ? 1.1 : 3.) * aA.z * (1. + age * (aK > 2.5 ? 3. : 3.5));
            vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(sz * uH * .5 * projectionMatrix[1][1] / max(-mv.z, .5), 1., 140.);
            float fadeIn = smoothstep(0., .08, age), fadeOut = pow(1. - age, aK > 2.5 ? 1.2 : 1.6); vA = fadeIn * fadeOut * (aK < .5 ? .5 : aK < 1.5 ? .42 : aK < 2.5 ? .6 : .22);
            vC = aK < .5 ? vec3(.34, .33, .32) : aK < 1.5 ? vec3(.93) : aK < 2.5 ? vec3(.2) : vec3(.78, .66, .46);
            vec4 mvPosition = mv;
            #include <fog_vertex>
          }`,
        fragmentShader: `uniform float uSun; varying float vA; varying vec3 vC;
          #include <fog_pars_fragment>
          void main(){ vec2 q = gl_PointCoord - .5; float d = length(q); float a = smoothstep(.5, .12, d) * vA; if (a < .01) discard; gl_FragColor = vec4(vC * uSun, a);
            #include <fog_fragment>
          }` });
      const pts = new THREE.Points(gg, sh); pts.frustumCulled = false; pts.renderOrder = 4; pts.onBeforeRender = (r) => { sh.uniforms.uH.value = r.getDrawingBufferSize(_v2).y; }; G.add(pts); live.draws++; live.smoke = em.length;
    }
  }

  // ============================================================= birds
  if (!night) {
    const flocks = low ? 2 : 5, per = low ? 6 : 11, N = flocks * per; const orb = new Float32Array(N * 4), off = new Float32Array(N * 3), ph = new Float32Array(N); let o = 0;
    for (let f = 0; f < flocks; f++) { const ang = rnd() * TAU, rad = track.bounds * R(.25, .95), ox = cx0 + Math.cos(ang) * rad, oz = cz0 + Math.sin(ang) * rad, r2 = R(40, 150), sp = R(.05, .12) * (rnd() < .5 ? 1 : -1), h = R(35, 90);
      for (let j = 0; j < per; j++, o++) { orb.set([ox, oz, r2, sp], o * 4); off.set([R(-9, 9), h + R(-4, 4), R(-9, 9)], o * 3); ph[o] = rnd(); } }
    const g = new THREE.BufferGeometry(); const bp = [0, 0, .5, -.9, 0, -.3, 0, .06, -.25, 0, 0, .5, 0, .06, -.25, .9, 0, -.3, 0, 0, .5, 0, .06, -.25, 0, .02, -.5]; g.setAttribute('position', new THREE.Float32BufferAttribute(bp, 3));
    g.setAttribute('aOrb', new THREE.InstancedBufferAttribute(orb, 4)); g.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 3)); g.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 1));
    const bm = new THREE.MeshBasicMaterial({ color: 0x1b1d22, side: THREE.DoubleSide, fog: true });
    bm.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime; attribute vec4 aOrb; attribute vec3 aOff; attribute float aPh;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      { float a = aOrb.w * uTime + aPh * .6, dir = sign(aOrb.w); vec3 ctr = vec3(aOrb.x + cos(a) * aOrb.z, aOff.y + sin(uTime * .35 + aPh * 6.) * 4., aOrb.y + sin(a) * aOrb.z) + vec3(aOff.x, 0., aOff.z);
        float yaw = atan(-sin(a) * dir, cos(a) * dir); float cy = cos(yaw), sy = sin(yaw);
        vec3 q = transformed; q.y += sin(uTime * 9. + aPh * 40.) * abs(q.x) * .55; q *= 1.6;
        transformed = ctr + vec3(q.x * cy + q.z * sy, q.y, -q.x * sy + q.z * cy); }`); };
    const m = new THREE.InstancedMesh(g, bm, N); const d = new THREE.Object3D(); d.updateMatrix(); for (let i = 0; i < N; i++) m.setMatrixAt(i, d.matrix); m.frustumCulled = false; G.add(m); live.draws++; live.birds = N;
  }

  // ============================================================= balloons (bobbing bunches at the gates and over the hospitality)
  {
    const sp = []; for (const ar of c.arches || []) for (let k = 0; k < 6; k++) sp.push({ x: ar.x + R(-5, 5), y: R(6, 9), z: ar.z + R(-5, 5), c: new THREE.Color().setHSL(rnd(), .85, .55) });
    if (pitL) { const L = pitL.L, l = L[Math.round((pitL.qa + pitL.qb) / 2)]; for (let k = 0; k < 14; k++) sp.push({ x: l.x + l.nx * 40 + R(-16, 16) * l.tx, y: R(8, 13), z: l.z + l.nz * 40 + R(-16, 16) * l.tz, c: new THREE.Color().setHSL(rnd(), .85, .55) }); }
    if (sp.length && !low) { const g = new THREE.SphereGeometry(.45, 7, 5); g.scale(1, 1.2, 1); const bmat = new THREE.MeshStandardMaterial({ roughness: .35, metalness: .1 });
      bmat.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n{ float ph = instanceMatrix[3][0] * .7 + instanceMatrix[3][2] * .9; transformed.y += sin(uTime * 1.3 + ph) * .35; transformed.x += sin(uTime * .9 + ph * 1.7) * .25; }'); };
      const m = new THREE.InstancedMesh(g, bmat, sp.length), d = new THREE.Object3D(); sp.forEach((s, i) => { d.position.set(s.x, s.y, s.z); d.rotation.set(0, 0, 0); d.scale.setScalar(R(.8, 1.3)); d.updateMatrix(); m.setMatrixAt(i, d.matrix); m.setColorAt(i, s.c); }); m.frustumCulled = false; G.add(m); live.draws++; live.balloons = sp.length; }
  }

  // ============================================================= blinking beacons on the towers, flickering floodlights, camera flashes in the stands
  {
    const tops = []; for (const f of c.floods || []) tops.push({ x: f.x, y: 23.6, z: f.z, r: 0 });
    if (track.timingTower) tops.push({ x: track.timingTower.x + 4.2 * Math.cos(track.timingTower.yaw), y: 5 * 3.2 + 6.4, z: track.timingTower.z - 4.2 * Math.sin(track.timingTower.yaw) });
    if (tops.length) { const g = new THREE.SphereGeometry(.3, 6, 4), bm = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, .12, .08).multiplyScalar(3), fog: false });
      bm.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n{ float ph = instanceMatrix[3][0] * .13 + instanceMatrix[3][2] * .17; transformed *= step(.55, fract(uTime * .8 + ph)) * .95 + .05; }'); };
      const m = new THREE.InstancedMesh(g, bm, tops.length), d = new THREE.Object3D(); tops.forEach((s, i) => { d.position.set(s.x, s.y, s.z); d.updateMatrix(); m.setMatrixAt(i, d.matrix); }); m.frustumCulled = false; G.add(m); live.draws++; }
    // flood lamps: emissive heads that flicker a little (and glare at night); real light stays the sun / the existing lamps
    if ((c.floods || []).length) { const heads = []; for (const f of c.floods) { const cs = Math.cos(f.yaw), sn = Math.sin(f.yaw); for (const hy of [22.3, 23.3]) for (const hx of [-2.4, 0, 2.4]) { heads.push({ x: f.x + hx * cs + .78 * sn, y: hy, z: f.z - hx * sn + .78 * cs, yaw: f.yaw }); } }
      const g = new THREE.PlaneGeometry(1.3, .55), bm = new THREE.MeshBasicMaterial({ color: night ? new THREE.Color(1, .93, .72).multiplyScalar(3.2) : new THREE.Color(.95, .95, .92), side: THREE.DoubleSide, fog: true });
      bm.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n{ float ph = instanceMatrix[3][0] * .21 + instanceMatrix[3][1] * 1.7 + instanceMatrix[3][2] * .11; float fl = ' + (night ? '.82 + .18 * step(.4, fract(sin(floor(uTime * 12. + ph) * 91.3) * 4375.5))' : '1.') + '; transformed *= fl; }'); };
      const m = new THREE.InstancedMesh(g, bm, heads.length), d = new THREE.Object3D(); heads.forEach((s, i) => { d.position.set(s.x, s.y, s.z); d.rotation.set(0, s.yaw, 0); d.updateMatrix(); m.setMatrixAt(i, d.matrix); }); m.frustumCulled = false; G.add(m); live.draws++; }
    // flashes: tiny additive points in the stands
    const fl = []; for (const st of c.standList) { const cs = Math.cos(st.yaw), sn = Math.sin(st.yaw), cnt = Math.round(st.len * (low ? .5 : 1.1)); for (let k = 0; k < cnt; k++) { const px = R(-st.len / 2, st.len / 2), row = Math.floor(R(1, st.rows)), pz = 1.0 - row - .5, y = .5 * (row + 1) + 2.6; fl.push({ x: st.x + px * cs + pz * sn, y, z: st.z - px * sn + pz * cs }); } }
    if (fl.length) { const pos = new Float32Array(fl.length * 3), ph = new Float32Array(fl.length); fl.forEach((f, i) => { pos.set([f.x, f.y, f.z], i * 3); ph[i] = rnd() * 100; });
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aPh', new THREE.BufferAttribute(ph, 1));
      const sm = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: uT, uH: { value: 700 } },
        vertexShader: 'uniform float uTime, uH; attribute float aPh; varying float vF; void main(){ float t = uTime * (.35 + fract(aPh * .37) * .4) + aPh; float f = pow(max(0., sin(t * 6.2832 * .5)), 60.) ; vF = f; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = f > .02 ? clamp(.9 * uH * .5 * projectionMatrix[1][1] / max(-mv.z, .5), 2., 24.) : 0.; }',
        fragmentShader: 'varying float vF; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d) * vF; if (a < .02) discard; gl_FragColor = vec4(vec3(1., .97, .9) * 2., a); }' });
      const pts = new THREE.Points(g, sm); pts.frustumCulled = false; pts.renderOrder = 7; pts.onBeforeRender = r => { sm.uniforms.uH.value = r.getDrawingBufferSize(_v2).y; }; G.add(pts); live.draws++; live.flashes = fl.length; }
  }

  // ============================================================= rotating tri-vision billboards, wind turbines and an anemometer
  {
    const tri = [], pickAt = c.boards || []; for (let k = 0; k < Math.min(2, pickAt.length) && !low; k++) { const b = pickAt[(k * 3 + 1) % pickAt.length]; tri.push(b); }
    for (const b of tri) { const grp = new THREE.Group(), geo = (name) => { const t = TILE[name], g = new THREE.PlaneGeometry(6, 2.6), uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, (t.x + uv.getX(i) * t.w) / 1024, 1 - (t.y + (1 - uv.getY(i)) * t.h) / 1024); return g; };
      const mt = new THREE.MeshStandardMaterial({ map: atl.tex, roughness: .6, side: THREE.FrontSide, emissive: night ? 0xffffff : 0x000000, emissiveMap: night ? atl.emi : null, emissiveIntensity: night ? .8 : 0 });
      const names = ['sign0', 'sign3', 'sign5']; names.forEach((nm, i) => { const m = new THREE.Mesh(geo(nm), mt), a = i * TAU / 3; m.position.set(Math.sin(a) * 1.5, 0, Math.cos(a) * 1.5); m.rotation.y = a; grp.add(m); });
      const post = new THREE.Mesh(new THREE.CylinderGeometry(.25, .3, 9, 6), new THREE.MeshStandardMaterial({ color: 0x4a4d54 })); post.position.y = -4.2; grp.add(post); const top = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 1.9, .2, 3), new THREE.MeshStandardMaterial({ color: 0x30333a })); top.position.y = 1.4; grp.add(top);
      grp.position.set(b.x + Math.sin(b.yaw) * -5, 8.4, b.z + Math.cos(b.yaw) * -5); G.add(grp); grp.rotation.y = rnd() * TAU; c.cull(grp, grp.position.x, grp.position.z); const sp = R(.7, 1); movers.push(t => { const u = (t * .14 * sp) % 1, e = u < .85 ? 0 : (u - .85) / .15; grp.rotation.y = (Math.floor(t * .14 * sp) + e * e * (3 - 2 * e)) * TAU / 3; }); live.draws += 5; }
    // a wind farm on the far hills
    if (!night && !coast) { const nT = low ? 2 : 4, R0 = track.bounds + 260, mast = new THREE.CylinderGeometry(.9, 1.7, 52, 8).translate(0, 26, 0), mm = new THREE.MeshStandardMaterial({ color: 0xe9ecef, roughness: .5 }), grpB = new THREE.Group();
      const blade = merge([0, 1, 2].map(i => new THREE.BoxGeometry(1.4, 26, .5).translate(0, 14, 0).rotateZ(i * TAU / 3))), nacelle = new THREE.BoxGeometry(2.6, 2.6, 5.5).translate(0, 52, 1.2);
      for (let i = 0; i < nT; i++) { const a = (i / nT) * TAU * .9 + .6 + rnd() * .3, x = cx0 + Math.cos(a) * (R0 + i * 20), z = cz0 + Math.sin(a) * (R0 + i * 20), g = new THREE.Group(); g.add(new THREE.Mesh(mast, mm), new THREE.Mesh(nacelle, mm)); const rot = new THREE.Mesh(blade, mm); rot.position.set(0, 52, 3.8); g.add(rot); g.position.set(x, 0, z); g.rotation.y = Math.atan2(-wind[0], -wind[1]) + .2; G.add(g); const sp = R(.6, 1.1); movers.push(t => { rot.rotation.z = t * sp; }); live.draws += 3; } void grpB; live.turbines = nT; }
    // an anemometer and wind vane on the timing tower: three cups spinning
    if (track.timingTower) { const tt = track.timingTower, g = new THREE.Group(); const arm = new THREE.Mesh(new THREE.BoxGeometry(1.3, .06, .06), new THREE.MeshStandardMaterial({ color: 0x777b82 })); g.add(arm); for (const sx of [-.65, .65]) { const cup = new THREE.Mesh(new THREE.SphereGeometry(.18, 6, 4, 0, TAU, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xdadde2, side: THREE.DoubleSide })); cup.position.set(sx, 0, 0); cup.rotation.z = sx > 0 ? -1.5 : 1.5; g.add(cup); }
      g.position.set(tt.x + 4.2 * Math.cos(tt.yaw) - 1 * Math.sin(tt.yaw) * 0, tt.y + 3, tt.z - 4.2 * Math.sin(tt.yaw)); G.add(g); c.cull(g, g.position.x, g.position.z); movers.push(t => { g.rotation.y = t * 7; }); live.draws += 3; }
  }

  // ============================================================= a blimp and a helicopter circling the circuit
  {
    const bl = new THREE.Group(); const tex = (() => { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128; const k = cv.getContext('2d'); const gr = k.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, '#ffffff'); gr.addColorStop(1, '#c9d2dc'); k.fillStyle = gr; k.fillRect(0, 0, 512, 128); k.fillStyle = '#e3262e'; k.fillRect(0, 50, 512, 30); k.fillStyle = '#fff'; k.font = 'italic 900 26px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText('TAFHEET  ·  NILE COLA  ·  EGYSeal', 256, 66); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; t.repeat.set(2, 1); return t; })();
    const env = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), new THREE.MeshStandardMaterial({ map: tex, roughness: .55, metalness: .05 })); env.scale.set(26, 8.5, 8.5); bl.add(env);
    const finM = new THREE.MeshStandardMaterial({ color: 0xd9232c, roughness: .6 }); for (const [ry, sc] of [[0, 1], [Math.PI / 2, 1], [Math.PI, 1], [-Math.PI / 2, 1]]) { const f = new THREE.Mesh(new THREE.BoxGeometry(7, .3, 5), finM); f.position.set(-22.5, 0, 0); f.rotation.x = ry; f.scale.set(sc, 1, 1); bl.add(f); }
    const gon = new THREE.Mesh(new THREE.BoxGeometry(5, 1.8, 2.4), new THREE.MeshStandardMaterial({ color: 0x40454d, roughness: .6 })); gon.position.set(2, -8.8, 0); bl.add(gon);
    const R0 = Math.max(120, track.bounds * .55), alt = 110 + R(0, 25), sp = .028; G.add(bl); const ph0 = rnd() * TAU; track.blimp = bl;
    movers.push(t => { const a = ph0 + t * sp, x = cx0 + Math.cos(a) * R0 * 1.15, z = cz0 + Math.sin(a) * R0, vx = -Math.sin(a) * R0 * 1.15, vz = Math.cos(a) * R0; bl.position.set(x, alt + Math.sin(t * .2) * 3, z); bl.rotation.set(0, Math.atan2(-vz, vx), Math.sin(t * .13) * .03); });
    live.draws += 7;
    // helicopter: fuselage, tail boom, main and tail rotors; flies a tighter circle the other way, tilting into the turn
    const hc = new THREE.Group(), hm = new THREE.MeshStandardMaterial({ color: 0x1f3f7a, roughness: .45, metalness: .3 }), wm = new THREE.MeshStandardMaterial({ color: 0xf4f4f2, roughness: .5 }), dk = new THREE.MeshStandardMaterial({ color: 0x1a1b1e, roughness: .5 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 7), hm); body.scale.set(2.3, 1.15, 1.2); hc.add(body); const win = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 5, 0, TAU, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x2a3a4c, roughness: .2, metalness: .5 })); win.scale.set(1.3, .8, 1.05); win.position.set(1.2, .35, 0); hc.add(win);
    const boom = new THREE.Mesh(new THREE.CylinderGeometry(.12, .3, 4.4, 6), wm); boom.rotation.z = Math.PI / 2; boom.position.set(-4, .35, 0); hc.add(boom); const fin = new THREE.Mesh(new THREE.BoxGeometry(.9, 1.3, .08), hm); fin.position.set(-6.1, .9, 0); hc.add(fin);
    for (const sz of [-.9, .9]) { const sk = new THREE.Mesh(new THREE.BoxGeometry(3.4, .08, .1), dk); sk.position.set(.3, -1.5, sz); hc.add(sk); for (const sx of [-.8, 1]) { const st = new THREE.Mesh(new THREE.BoxGeometry(.08, .8, .08), dk); st.position.set(sx, -1.15, sz); hc.add(st); } }
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .8, 5), dk); mast.position.y = 1.55; hc.add(mast);
    const rotor = new THREE.Group(); const bladeG = new THREE.BoxGeometry(11, .05, .35); for (const a of [0, Math.PI / 2]) { const b = new THREE.Mesh(bladeG, dk); b.rotation.y = a; rotor.add(b); } rotor.position.y = 1.95; hc.add(rotor);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(5.6, 20), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .06, depthWrite: false, side: THREE.DoubleSide })); disc.rotation.x = -Math.PI / 2; disc.position.y = 1.95; hc.add(disc);
    const tr = new THREE.Mesh(new THREE.BoxGeometry(.06, 1.7, .22), dk); tr.position.set(-6.2, .9, .14); hc.add(tr);
    const beac = new THREE.Mesh(new THREE.SphereGeometry(.2, 6, 4), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, .1, .05).multiplyScalar(3), fog: false })); beac.position.set(-.5, 1.2, 0); hc.add(beac);
    hc.scale.setScalar(2.2); G.add(hc); track.heli = hc; const hr = Math.max(70, track.bounds * .38), halt = 55, hph = rnd() * TAU;
    movers.push(t => { const a = hph - t * .09, x = cx0 + Math.cos(a) * hr * 1.2, z = cz0 + Math.sin(a) * hr * .9, vx = Math.sin(a) * hr * 1.2, vz = -Math.cos(a) * hr * .9; hc.position.set(x, halt + Math.sin(t * .7) * 1.2, z); hc.rotation.set(Math.sin(t * .3) * .02, Math.atan2(-vz, vx), -.12); rotor.rotation.y = t * 38; tr.rotation.z = t * 45; beac.visible = (t * 1.1) % 1 < .35; });
    live.draws += 12;
  }
  return live;
}
const _v2 = new THREE.Vector2();
