// Track loading + procedural track generation.
// Every track ends up with the same interface: a 3D group, a centre-line path,
// and a grid that tells the physics what is under each wheel (road / kerb / grass / wall).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { getAsset, getJSON } from './assets.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const GRASS = 0, KERB = 1, ROAD = 2, WALL = 3, PIT = 4;

export const THEMES = {
  day:    { skyTop: 0x3f86d8, skyBot: 0xcfe6f5, fog: 0xd8e4dc, fogD: 0.0012, sun: 0xffe6c0, sunI: 2.9, hemiS: 0xbfd9ff, hemiG: 0x6b7a4a, hemiI: 1.1, sunDir: [-0.6, 0.6, 0.4], ground: 0x4f8a3c, exposure: 1.0 },
  desert: { skyTop: 0x2f7fd0, skyBot: 0xf3ddb0, fog: 0xecd9b0, fogD: 0.0019, sun: 0xffe9c4, sunI: 3.0, hemiS: 0xffe8c0, hemiG: 0xb58a4c, hemiI: 1.0, sunDir: [0.6, 0.55, 0.3], ground: 0xd9b36c, exposure: 1.0 },
  coast:  { skyTop: 0xf28a5b, skyBot: 0xffd9a0, fog: 0xf7c9a0, fogD: 0.0017, sun: 0xffc48a, sunI: 2.5, hemiS: 0xffc9a8, hemiG: 0x5b6f52, hemiI: 1.0, sunDir: [-0.2, 0.24, -0.85], ground: 0x5d9148, exposure: 1.0 },
  night:  { skyTop: 0x05060f, skyBot: 0x2a1a4a, fog: 0x1a1330, fogD: 0.0035, sun: 0x8fa6ff, sunI: 0.7, hemiS: 0x4a4a90, hemiG: 0x20202c, hemiI: 1.0, sunDir: [0.3, 1, 0.2], ground: 0x23262b, exposure: 1.15, night: true },
};

export const TRACKS = [
  { id: 'nile', name: 'Nile Park Circuit', ar: 'حلبة النيل', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 6, pit: [90, 90], camYaw: .7,
    blurb: 'The home circuit. A full pit lane, a fast first sector, a chicane and two hairpins.',
    pts: [[40,0],[150,0],[210,20],[230,70],[200,115],[140,110],[110,80],[70,95],[60,140],[100,180],[80,225],[20,235],[-40,205],[-50,150],[-20,110],[-60,70],[-110,90],[-150,60],[-140,10],[-80,-5]] },
  { id: 'lider', name: 'Lider Karting Club', ar: 'نادي ليدر', type: 'glb', theme: 'day', laps: 3,
    blurb: 'Your scanned kart circuit. Tight, technical, tyre walls everywhere.' },
  { id: 'giza', name: 'Giza Sand Ring', ar: 'حلبة الجيزة', type: 'proc', theme: 'desert', laps: 3, width: 16, runoff: 9,
    blurb: 'Fast sweepers under the pyramids. Sand runoff eats your speed.',
    pts: [[60,-6],[120,-10],[200,30],[230,110],[180,170],[100,150],[60,200],[-20,230],[-110,200],[-140,120],[-80,70],[-120,0],[-60,-40],[0,0]] },
  { id: 'corniche', name: 'Alex Corniche', ar: 'كورنيش إسكندرية', type: 'proc', theme: 'coast', laps: 3, width: 15, runoff: 7,
    blurb: 'A long seafront blast into a knot of hairpins at sunset.',
    pts: [[130,0],[260,0],[320,40],[300,100],[220,110],[180,70],[120,90],[130,160],[60,190],[-20,150],[-10,90],[-80,60],[-90,10],[0,0]] },
  { id: 'midnight', name: 'Cairo Midnight', ar: 'منتصف الليل', type: 'proc', theme: 'night', laps: 4, width: 14, runoff: 5,
    blurb: 'Street circuit after dark. Square corners, neon walls, no mercy.',
    pts: [[75,0],[150,0],[180,30],[180,120],[150,150],[90,150],[60,120],[60,80],[20,60],[-40,80],[-40,160],[-80,200],[-140,180],[-150,100],[-120,20],[-60,-10],[0,0]] },
  { id: 'luxor', name: 'Luxor Speedway', ar: 'حلبة الأقصر', type: 'proc', theme: 'desert', laps: 4, width: 17, runoff: 9, pit: [70, 70], camYaw: .5,
    blurb: 'A fast desert oval with one kink. Flat out, slipstreams and late braking.',
    pts: [[0,0],[140,0],[230,25],[270,90],[230,155],[140,180],[0,180],[-90,155],[-130,90],[-90,25]] },
  { id: 'aswan', name: 'Aswan Lakeside', ar: 'بحيرة أسوان', type: 'proc', theme: 'day', laps: 3, width: 15, runoff: 6, pit: [60, 70], camYaw: .8,
    blurb: 'Long and technical: an esses section, three hairpins and a quick back stretch.',
    pts: [[30,0],[130,0],[190,-30],[250,0],[260,70],[200,110],[130,90],[80,130],[100,200],[40,240],[-40,210],[-30,140],[-90,110],[-150,150],[-200,100],[-160,30],[-80,20]] },
  { id: 'hurghada', name: 'Hurghada Marina', ar: 'مارينا الغردقة', type: 'proc', theme: 'coast', laps: 3, width: 15, runoff: 7, pit: [70, 70], camYaw: .6,
    blurb: 'Seafront straight, then a tight harbour section where the walls are close.',
    pts: [[60,0],[200,0],[270,30],[290,100],[240,150],[160,130],[110,170],[130,240],[60,270],[-20,240],[-40,170],[10,120],[-30,70],[-110,90],[-150,40],[-100,-5]] },
  { id: 'pad', name: 'Test pad', ar: 'ساحة الاختبار', type: 'proc', theme: 'day', laps: 1, width: 84, runoff: 14, pit: null, dev: true,
    blurb: 'Tuning ground: a wide asphalt oval for braking, constant-radius, slalom and surface tests. Press T for telemetry.',
    pts: [[0,0],[110,0],[220,0],[285,65],[220,130],[110,130],[0,130],[-65,65]] },
];

// ---------- helpers ----------
function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
// closed Catmull-Rom through pts, resampled at even spacing
export function resampleClosed(pts, spacing) {
  const n = pts.length, dense = [];
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n], d = pts[(i + 2) % n];
    for (let k = 0; k < 24; k++) { const t = k / 24; dense.push([catmull(a[0], b[0], c[0], d[0], t), catmull(a[1], b[1], c[1], d[1], t)]); }
  }
  const cum = [0];
  for (let i = 1; i <= dense.length; i++) { const p = dense[i - 1], q = dense[i % dense.length]; cum.push(cum[i - 1] + Math.hypot(q[0] - p[0], q[1] - p[1])); }
  const total = cum[dense.length], count = Math.round(total / spacing), out = [];
  let j = 0;
  for (let i = 0; i < count; i++) {
    const s = i * total / count;
    while (cum[j + 1] < s) j++;
    const f = (s - cum[j]) / (cum[j + 1] - cum[j] || 1), p = dense[j], q = dense[(j + 1) % dense.length];
    out.push({ x: p[0] + (q[0] - p[0]) * f, z: p[1] + (q[1] - p[1]) * f });
  }
  return out;
}
function canvasTex(w, h, draw, rx = 1, ry = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function noise(ctx, w, h, base, spread, count) {
  ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const v = Math.random(); ctx.fillStyle = `rgba(${v > .5 ? 255 : 0},${v > .5 ? 255 : 0},${v > .5 ? 255 : 0},${Math.random() * spread})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
}
let seed = 1; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

// ---------- Track ----------
export class Track {
  constructor(def) { this.def = def; this.theme = THEMES[def.theme]; this.group = new THREE.Group(); this.grid = null; this.path = []; this.lights = []; }

  finishPath(pts) {
    const n = pts.length; this.path = pts; this.n = n;
    let len = 0;
    for (let i = 0; i < n; i++) {
      const p = pts[i], q = pts[(i + 1) % n], a = pts[(i + n - 1) % n];
      const tx = q.x - a.x, tz = q.z - a.z, l = Math.hypot(tx, tz) || 1;
      p.tx = tx / l; p.tz = tz / l; len += Math.hypot(q.x - p.x, q.z - p.z);
    }
    this.len = len; this.spacing = len / n;
    // signed curvature (1/m), smoothed
    const raw = pts.map((p, i) => {
      const a = pts[(i + n - 3) % n], b = pts[(i + 3) % n];
      let d = Math.atan2(b.tx, b.tz) - Math.atan2(a.tx, a.tz); while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      return d / (6 * this.spacing);
    });
    for (let i = 0; i < n; i++) pts[i].k = (raw[(i + n - 1) % n] + 2 * raw[i] + raw[(i + 1) % n]) / 4;
  }
  surf(x, z) {
    const g = this.grid, gx = Math.floor((x - g.x0) / g.cell), gz = Math.floor((z - g.z0) / g.cell);
    if (gx < 0 || gz < 0 || gx >= g.w || gz >= g.h) return WALL;
    return g.surf[gz * g.w + gx];
  }
  height(x, z) {
    const g = this.grid; if (!g.hgt) return 0;
    let fx = (x - g.x0) / g.cell - 0.5, fz = (z - g.z0) / g.cell - 0.5;
    fx = Math.max(0, Math.min(g.w - 1.001, fx)); fz = Math.max(0, Math.min(g.h - 1.001, fz));
    const ix = fx | 0, iz = fz | 0, u = fx - ix, v = fz - iz, i = iz * g.w + ix, h = g.hgt;
    return (h[i] * (1 - u) + h[i + 1] * u) * (1 - v) + (h[i + g.w] * (1 - u) + h[i + g.w + 1] * u) * v;
  }
  nearest(x, z, hint = -1, win = 18) {
    const p = this.path, n = this.n; let best = 0, bd = Infinity;
    if (hint < 0) { for (let i = 0; i < n; i++) { const d = (p[i].x - x) ** 2 + (p[i].z - z) ** 2; if (d < bd) { bd = d; best = i; } } return best; }
    for (let k = -win; k <= win; k++) { const i = ((hint + k) % n + n) % n, d = (p[i].x - x) ** 2 + (p[i].z - z) ** 2; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  // direction + distance to the nearest non-wall cell (used to push cars out of barriers)
  escape(x, z) {
    for (let r = 0.35; r < 6; r += 0.35) for (let a = 0; a < 16; a++) {
      const nx = Math.cos(a * Math.PI / 8), nz = Math.sin(a * Math.PI / 8);
      if (this.surf(x + nx * r, z + nz * r) !== WALL) return { nx, nz, d: r };
    }
    return null;
  }
  gridSlot(k) {   // starting grid: two columns behind the line
    const i = ((this.n - 3 - Math.ceil((k + 1) * 7.5 / this.spacing)) % this.n + this.n) % this.n, p = this.path[i], side = (k % 2 ? -1 : 1) * 2.6;
    return { x: p.x + p.tz * side, z: p.z - p.tx * side, th: Math.atan2(p.tx, p.tz), idx: i };
  }
  dispose() { this.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => { for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose(); m.dispose(); }); }); }
}

// ---------- shared dressing: start line + gantry ----------
function addStart(track) {
  const p = track.path[0], th = Math.atan2(p.tx, p.tz), y = track.height(p.x, p.z);
  let hw = 0; while (hw < 14 && track.surf(p.x + p.tz * hw, p.z - p.tx * hw) !== WALL && track.surf(p.x + p.tz * hw, p.z - p.tx * hw) !== GRASS) hw += 0.5;
  hw = Math.max(5, hw);
  const g = new THREE.Group(); g.position.set(p.x, y, p.z); g.rotation.y = th;
  const chk = canvasTex(128, 32, (c) => { for (let i = 0; i < 16; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? '#111' : '#f5f5f5'; c.fillRect(i * 8, j * 8, 8, 8); } });
  const line = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2, 2.2), new THREE.MeshStandardMaterial({ map: chk, roughness: .8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
  line.rotation.x = -Math.PI / 2; line.position.y = 0.05; line.receiveShadow = true; g.add(line);
  const steel = new THREE.MeshStandardMaterial({ color: 0x2b2f36, metalness: .7, roughness: .4 });
  for (const s of [-1, 1]) { const pole = new THREE.Mesh(new THREE.BoxGeometry(.5, 7.5, .5), steel); pole.position.set(s * (hw + 1.2), 3.75, 0); pole.castShadow = true; g.add(pole); }
  const sign = canvasTex(1024, 128, (c, w, h) => {
    c.fillStyle = '#e3262e'; c.fillRect(0, 0, w, h); c.fillStyle = '#fff'; c.font = 'italic 900 92px Rubik, Arial Black, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('TAFHEET  ·  تفحيط  ·  START', w / 2, h / 2 + 6);
  });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(hw * 2 + 3, 1.3, .5), [steel, steel, steel, steel, new THREE.MeshStandardMaterial({ map: sign, emissive: 0xffffff, emissiveMap: sign, emissiveIntensity: track.theme.night ? .9 : .15 }), new THREE.MeshStandardMaterial({ map: sign })]);
  beam.position.y = 7.3; beam.castShadow = true; g.add(beam);
  // painted grid boxes for the first twelve starting slots
  const gm = new THREE.MeshBasicMaterial({ color: 0xf2f2f2, transparent: true, opacity: .8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  for (let k = 0; k < 12; k++) { const sl = track.gridSlot(k), fx = Math.sin(sl.th), fz = Math.cos(sl.th), yy = track.height(sl.x, sl.z) + .05; for (const [w, d, ox, oz] of [[2.5, .16, 0, 2.7], [.16, 1.1, 1.17, 2.2], [.16, 1.1, -1.17, 2.2]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), gm); m.rotation.set(-Math.PI / 2, 0, -sl.th); m.position.set(sl.x + fx * oz + fz * ox, yy, sl.z + fz * oz - fx * ox); track.group.add(m); } }
  track.group.add(g);
}

// ---------- GLB track (Lider) ----------
const S = 2.2;   // world scale: turns the kart circuit into a car-sized circuit
async function buildLider(track, onProgress) {
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  const [glb, meta, bin] = await Promise.all([getAsset('lider.glb', onProgress), getJSON('lider.json'), getAsset('lider.bin')]);
  const gltf = await loader.parseAsync(glb, '');
  const sc = gltf.scene; sc.scale.setScalar(S);
  sc.traverse(o => {
    if (!o.isMesh) return;
    o.receiveShadow = true; o.frustumCulled = !o.isInstancedMesh;
    const m = o.material, nm = m.name || '';
    if (nm === '02_-_Default_0') { o.visible = false; return; }           // original sky dome: we draw our own sky
    if (m.map) m.map.anisotropy = 8;
    if (m.transparent || m.alphaTest > 0 || /Trees|green|fence|wire/.test(nm)) { m.alphaTest = Math.max(m.alphaTest, 0.4); m.transparent = false; m.depthWrite = true; m.side = THREE.DoubleSide; }
    if (/racetrack|conc|kerb/.test(nm)) { m.roughness = Math.min(m.roughness, 0.92); }
    o.castShadow = !o.isInstancedMesh ? !/racetrack|grass|green|conc|kerb|road_marking|bitumen|GROOVE|skids|dust|decal|Cracks/.test(nm) : true;
  });
  track.group.add(sc);
  const N = meta.w * meta.h, raw = new Uint8Array(bin, 0, N), h16 = new Int16Array(bin.slice(N, N + N * 2));
  const surf = new Uint8Array(N), hgt = new Float32Array(N);
  for (let i = 0; i < N; i++) { const v = raw[i]; surf[i] = v === 255 ? WALL : v === 200 ? ROAD : v === 100 ? KERB : GRASS; hgt[i] = h16[i] / 100 * S; }
  track.grid = { w: meta.w, h: meta.h, x0: meta.x0 * S, z0: meta.z0 * S, cell: S / meta.ppm, surf, hgt };
  let pts = resampleClosed(meta.path.map(p => [p[0] * S, p[1] * S]), 2);
  const shift = Math.round(30 * S / 2); pts = pts.slice(shift).concat(pts.slice(0, shift));   // start line on the main straight
  track.finishPath(pts);
  track.bounds = 420;
}

// ---------- procedural tracks ----------
function ribbon(path, offL, offR, y, vScale, closed = true, mask = null) {
  const pos = [], uv = [], idx = [], n = path.length; let d = 0, vi = 0, prev = false;
  for (let i = 0; i <= n; i++) {
    const p = path[i % n], on = !mask || mask[i % n];
    if (on) {
      pos.push(p.x + p.tz * offL, y, p.z - p.tx * offL, p.x + p.tz * offR, y, p.z - p.tx * offR);
      uv.push(0, d * vScale, 1, d * vScale);
      if (prev) idx.push(vi - 2, vi - 1, vi, vi - 1, vi + 1, vi);
      vi += 2;
    }
    prev = on; d += Math.hypot(path[(i + 1) % n].x - p.x, path[(i + 1) % n].z - p.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function wallStrip(path, offIn, h, vScale) {
  const offF = typeof offIn === 'function' ? offIn : () => offIn;
  const pos = [], uv = [], idx = [], n = path.length; let d = 0;
  for (let i = 0; i <= n; i++) {
    const p = path[i % n], off = offF(i % n), x = p.x + p.tz * off, z = p.z - p.tx * off;
    pos.push(x, 0, z, x, h, z); uv.push(d * vScale, 0, d * vScale, 1);
    if (i < n) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
    d += Math.hypot(path[(i + 1) % n].x - p.x, path[(i + 1) % n].z - p.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
// Scenery is split into ~80 m cells. Each cell is its own batch, so the graphics card skips whatever is off-screen
// and the game hides whatever is beyond the draw distance.
let CULL = [];
function instanced(geo, mat, list, shadow = true) {
  if (list.length > 50) { const cells = new Map(); for (const t of list) { const k = Math.floor(t.x / 80) + ',' + Math.floor(t.z / 80); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(t); }
    if (cells.size > 1) { const g = new THREE.Group(); for (const sub of cells.values()) g.add(instanced1(geo, mat, sub, shadow)); return g; } }
  return instanced1(geo, mat, list, shadow);
}
function instanced1(geo, mat, list, shadow = true) {
  const m = new THREE.InstancedMesh(geo, mat, list.length), d = new THREE.Object3D();
  list.forEach((t, i) => { d.position.set(t.x, t.y || 0, t.z); d.rotation.set(0, t.r || 0, 0); d.scale.set(t.sx || t.s || 1, t.sy || t.s || 1, t.sz || t.s || 1); d.updateMatrix(); m.setMatrixAt(i, d.matrix); if (t.c) m.setColorAt(i, t.c); });
  m.castShadow = shadow; m.receiveShadow = true;
  if (list.length && !list.some(t => (t.sx || 1) > 8)) { let x = 0, z = 0; for (const t of list) { x += t.x; z += t.z; } CULL.push({ m, x: x / list.length, z: z / list.length }); }
  return m;
}

function buildProc(track) {
  const def = track.def, th = track.theme, hw = (def.width * 1.2) / 2, B = hw + def.runoff, G = track.group;
  CULL = []; seed = def.id.length * 7919 + 13;
  // things that move: spectators bounce, flags wave, balloons drift, light beams sweep. main calls track.tick(time) each frame.
  const uT = track.uTime = { value: 0 }, movers = []; track.fancyLights = [];
  const anim = (mat, code) => { mat.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n' + code); }; return mat; };
  // ---- people: jointed figures (legs, arms, head) animated on the graphics card. Behaviours: 0 = standing and chatting,
  // 1 = fan (arms up, jumping, wilder as a car comes past), 2 = walking a beat back and forth. Everyone cheers when a car is close.
  const uHit = { value: new THREE.Vector4(1e6, 0, -99, 0) }; track.hit = (x, z) => { uHit.value.set(x, z, uT.value, 1); };      // a crash near the fence makes the people there recoil
  const CK = window.__crowdK || 1, uCar = { value: new THREE.Vector3(1e6, 0, 0) }, uCar2 = { value: new THREE.Vector3(1e6, 0, 0) };
  track.tick = (t, x, z, x2, z2) => { uT.value = t; if (x != null) { uCar.value.set(x, 0, z); uCar2.value.set(x2 ?? x, 0, z2 ?? z); } for (const f of movers) f(t); };
  const personGeo = (() => {      // a figure with rounded limbs: shirt, bare forearms, trousers, shoes, neck, head, hair or a cap
    const tag = (g, part, limb) => { const n = g.attributes.position.count; g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n).fill(part), 1)); g.setAttribute('aLimb', new THREE.BufferAttribute(new Float32Array(n).fill(limb), 1)); return g; };
    const cap = (r, len, x, y, z, part, limb) => tag(new THREE.CapsuleGeometry(r, len, 2, 7).translate(x, y, z), part, limb);
    const parts = [tag(new THREE.CapsuleGeometry(.165, .3, 3, 9).scale(1.18, 1, .74).translate(0, 1.1, 0), 0, 0), tag(new THREE.SphereGeometry(.17, 9, 5).scale(1.12, .7, .82).translate(0, .84, 0), 2, 0),
      tag(new THREE.CylinderGeometry(.05, .06, .09, 7).translate(0, 1.4, 0), 1, 0), tag(new THREE.SphereGeometry(.138, 10, 8).scale(1, 1.13, 1.03).translate(0, 1.54, 0), 1, 5),
      tag(new THREE.SphereGeometry(.15, 10, 5, 0, 6.2832, 0, 1.5).translate(0, 1.565, -.014), 3, 5), tag(new THREE.BoxGeometry(.2, .022, .15).translate(0, 1.6, .16), 5, 5)];
    for (const [sx, la, ll] of [[1, 1, 3], [-1, 2, 4]]) parts.push(cap(.074, .58, sx * .09, .43, 0, 2, ll), tag(new THREE.BoxGeometry(.1, .07, .23).translate(sx * .09, .035, .04), 4, ll), cap(.056, .2, sx * .25, 1.2, 0, 0, la), cap(.046, .24, sx * .25, .94, 0, 1, la));
    parts.push(tag(new THREE.BoxGeometry(.3, .2, .012).translate(-.25, .63, .1), 6, 2), tag(new THREE.BoxGeometry(.014, .34, .014).translate(-.25, .7, 0), 3, 2));
    return mergeGeometries(parts);
  })();
  const personMat = new THREE.MeshStandardMaterial({ roughness: .85 });
  personMat.onBeforeCompile = sh => { sh.uniforms.uTime = uT; sh.uniforms.uCar = uCar; sh.uniforms.uCar2 = uCar2; sh.uniforms.uHit = uHit;
    sh.vertexShader = 'uniform float uTime; uniform vec3 uCar, uCar2; uniform vec4 uHit; attribute float aPart, aLimb, aBeh, aPh, aWalk; attribute vec3 aSkin;\n' + sh.vertexShader
      .replace('#include <color_vertex>', `#include <color_vertex>
        #ifdef USE_INSTANCING_COLOR
          float capW = step(.7, fract(aPh * 13.));
          vColor.rgb = aPart < .5 ? instanceColor.rgb : aPart < 1.5 ? aSkin : aPart < 2.5 ? vec3(.10, .12, .2) + fract(aPh * 7.) * vec3(.22, .2, .14) : aPart < 3.5 ? mix(vec3(.07, .05, .04) + fract(aPh * 3.) * .32, instanceColor.rgb * .8, capW) : aPart < 4.5 ? vec3(.06) + fract(aPh * 5.) * .5 : aPart < 5.5 ? instanceColor.rgb * .8 : mix(vec3(.9, .1, .12), vec3(1., .78, .1), step(.5, fract(aPh * 29.)));
        #endif`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        if (aPart > 4.5 && aPart < 5.5) transformed = mix(vec3(0., 1.6, 0.), transformed, step(.7, fract(aPh * 13.)));
        if (aPart > 5.5) transformed = mix(vec3(-.25, .8, 0.), transformed, step(.62, fract(aPh * 17.)) * step(.5, aBeh) * step(aBeh, 1.5));   // some fans hold a small flag   // only cap wearers get a brim
        vec2 ip = vec2(instanceMatrix[3][0], instanceMatrix[3][2]);
        float near = max(smoothstep(46., 10., distance(ip, uCar.xz)), smoothstep(46., 10., distance(ip, uCar2.xz)));
        float ph = aPh * 6.2832, T = uTime, walk = aBeh > 1.5 ? 1. : 0.;
        float flinch = smoothstep(20., 5., distance(ip, uHit.xy)) * clamp(1. - (uTime - uHit.z) / 1.4, 0., 1.) * step(uHit.z, uTime);
        float cheer = max(flinch, aBeh > .5 && aBeh < 1.5 ? .25 + .75 * near : aBeh < .5 ? near * near * .85 : 0.);
        float side = (aLimb == 1. || aLimb == 3.) ? 1. : -1.;
        if (aLimb > .5 && aLimb < 2.5) {                       // arms pivot at the shoulder: thrown up to cheer, swung to walk, small gestures while talking
          vec3 q = transformed - vec3(side * .26, 1.3, 0.);
          float up = cheer * (2.3 + sin(T * 9. + ph + side) * .45) * side;
          float sw = walk * sin(T * 6. + ph) * .6 * side + (1. - cheer) * (1. - walk) * sin(T * 2.3 + ph * 3. + side * 1.3) * .4 * step(.45, fract(aPh * 5.));
          float cz = cos(up), sz = sin(up); q.xy = vec2(cz * q.x - sz * q.y, sz * q.x + cz * q.y);
          float cx = cos(sw), sx = sin(sw); q.yz = vec2(cx * q.y - sx * q.z, sx * q.y + cx * q.z);
          transformed = q + vec3(side * .26, 1.3, 0.);
        }
        if (aLimb > 2.5 && aLimb < 4.5) { vec3 q = transformed - vec3(0., .8, 0.); float a = walk * sin(T * 6. + ph) * .6 * side; float cx = cos(a), sx = sin(a); q.yz = vec2(cx * q.y - sx * q.z, sx * q.y + cx * q.z); transformed = q + vec3(0., .8, 0.); }
        if (aLimb > 4.5) { float a = (1. - walk) * (1. - cheer) * sin(T * 1.3 + ph * 2.) * .55; vec3 q = transformed - vec3(0., 1.5, 0.); float c2 = cos(a), s2 = sin(a); q.xz = vec2(c2 * q.x + s2 * q.z, -s2 * q.x + c2 * q.z); transformed = q + vec3(0., 1.5, 0.); }   // heads turn to a neighbour
        transformed.y += abs(sin(T * 5.5 + ph)) * .2 * cheer * (1. - flinch); transformed.z -= flinch * .5 * transformed.y; transformed.y *= 1. - flinch * .16;   // recoil: lean back and duck
        transformed.x += sin(T * 1.1 + ph) * .03 * (1. - walk);
        if (walk > .5) { float u = fract(T * .6 / max(aWalk, 1.) + aPh), tri = abs(u * 2. - 1.); transformed.xz *= (u < .5 ? -1. : 1.); transformed.z += (tri - .5) * aWalk; }`); };
  const SKIN = [0xf1c9a5, 0xd9a577, 0xa8703f, 0x7a4a2b].map(c => new THREE.Color(c));
  const personLow = (() => {      // the same figure in six boxes, for crowds that are far from the camera
    const tag = (g, part, limb) => { const n = g.attributes.position.count; g.setAttribute('aPart', new THREE.BufferAttribute(new Float32Array(n).fill(part), 1)); g.setAttribute('aLimb', new THREE.BufferAttribute(new Float32Array(n).fill(limb), 1)); return g; };
    const box = (w, h, d, x, y, z, part, limb) => tag(new THREE.BoxGeometry(w, h, d).translate(x, y, z), part, limb);
    return mergeGeometries([box(.4, .58, .25, 0, 1.1, 0, 0, 0), box(.27, .3, .27, 0, 1.55, 0, 1, 5), box(.14, .82, .17, .09, .41, 0, 2, 3), box(.14, .82, .17, -.09, .41, 0, 2, 4), box(.1, .5, .11, .26, 1.06, 0, 0, 1), box(.1, .5, .11, -.26, 1.06, 0, 0, 2)]);
  })();
  const people = all => {
    const cells = new Map(); for (const q of all) { const k = Math.floor(q.x / 60) + ',' + Math.floor(q.z / 60); if (!cells.has(k)) cells.set(k, []); cells.get(k).push(q); }
    for (const list of cells.values()) {
      const g = personGeo.clone(), N = list.length, beh = new Float32Array(N), ph = new Float32Array(N), sk = new Float32Array(N * 3), wk = new Float32Array(N);
      list.forEach((q, i) => { beh[i] = q.beh || 0; ph[i] = rnd(); const k = q.k || SKIN[rnd() * 4 | 0]; sk[i * 3] = k.r; sk[i * 3 + 1] = k.g; sk[i * 3 + 2] = k.b; wk[i] = q.walk || 0; if (!q.c) q.c = new THREE.Color(0xf3f4f6); const b = (q.s || 1) * 1.4; q.sx = b * (.9 + rnd() * .22); q.sz = q.sx; q.sy = b * (.94 + rnd() * .14); });   // different heights and builds
      g.setAttribute('aBeh', new THREE.InstancedBufferAttribute(beh, 1)); g.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 1)); g.setAttribute('aSkin', new THREE.InstancedBufferAttribute(sk, 3)); g.setAttribute('aWalk', new THREE.InstancedBufferAttribute(wk, 1));
      const lo = personLow.clone(); for (const k of ['aBeh', 'aPh', 'aSkin', 'aWalk']) lo.setAttribute(k, g.getAttribute(k));
      const m = instanced1(g, personMat, list, false); m.computeBoundingSphere(); m.boundingSphere.radius += 9; m.userData.lod = [g, lo]; m.userData.cur = 0; G.add(m);
    }
  };
  const BOB = 'transformed.y += abs(sin(uTime * 3.4 + instanceMatrix[3][0] * 1.7 + instanceMatrix[3][2] * 2.3)) * .14;';
  const path = resampleClosed(def.pts, 2); track.finishPath(path);
  const n = path.length;
  let minx = 1e9, maxx = -1e9, minz = 1e9, maxz = -1e9;
  for (const p of path) { minx = Math.min(minx, p.x); maxx = Math.max(maxx, p.x); minz = Math.min(minz, p.z); maxz = Math.max(maxz, p.z); }
  const cx = (minx + maxx) / 2, cz = (minz + maxz) / 2;
  const curved = path.map((p, i) => { for (let k = -6; k <= 6; k++) if (Math.abs(path[((i + k) % n + n) % n].k) > 1 / 110) return true; return false; });

  // -- physics grid, rasterised with a 2D canvas: R = road, G = inside the barriers, B = kerb band
  const cell = 0.5, pad = Math.max(30, B + 8), x0 = minx - pad, z0 = minz - pad, w = Math.ceil((maxx - minx + pad * 2) / cell), h = Math.ceil((maxz - minz + pad * 2) / cell);
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h; const c = cv.getContext('2d', { willReadFrequently: true });
  c.fillStyle = '#000'; c.fillRect(0, 0, w, h); c.globalCompositeOperation = 'lighter'; c.lineJoin = c.lineCap = 'round';
  const trace = (mask) => { c.beginPath(); let pen = false; for (let i = 0; i <= n; i++) { const p = path[i % n], X = (p.x - x0) / cell, Z = (p.z - z0) / cell; if (mask && !mask[i % n]) { pen = false; continue; } if (pen) c.lineTo(X, Z); else c.moveTo(X, Z); pen = true; } c.stroke(); };
  c.strokeStyle = '#00ff00'; c.lineWidth = B * 2 / cell; trace();
  c.strokeStyle = '#ff0000'; c.lineWidth = hw * 2 / cell; trace();
  c.strokeStyle = '#0000ff'; c.lineWidth = (hw + 1.5) * 2 / cell; trace(curved);
  // pit lane: a second strip of tarmac on the left of the start straight, inside its own wall
  const pb = def.pit === null ? null : [Math.max(60, (def.pit || [])[0] || 0), Math.max(90, (def.pit || [])[1] || 0)], nb = pb ? Math.round(pb[0] / 2) : 0, na = pb ? Math.round(pb[1] / 2) : 0;
  const inPit = i => !!pb && (i >= n - nb || i <= na), pitIdx = []; for (let i = n - nb; i <= n + na; i++) pitIdx.push(i % n);
  const offLine = (k, o) => { k.beginPath(); pitIdx.forEach((i, q) => { const p = path[i], X = (p.x + p.tz * o - x0) / cell, Z = (p.z - p.tx * o - z0) / cell; q ? k.lineTo(X, Z) : k.moveTo(X, Z); }); k.stroke(); };
  let pitPx = null; const pitWall = Math.max(B + .2, hw + 8.6);
  if (pb) {
    c.lineCap = 'butt'; c.strokeStyle = '#00ff00'; c.lineWidth = 9.2 / cell; offLine(c, hw + 4);
    const c2 = document.createElement('canvas'); c2.width = w; c2.height = h; const k2 = c2.getContext('2d', { willReadFrequently: true });
    k2.lineJoin = 'round'; k2.strokeStyle = '#fff'; k2.lineWidth = 7.6 / cell; offLine(k2, hw + 3.7); pitPx = k2.getImageData(0, 0, w, h).data;
  }
  const px = c.getImageData(0, 0, w, h).data, surf = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) { const r = px[i * 4], g = px[i * 4 + 1], b = px[i * 4 + 2]; surf[i] = g < 128 ? WALL : r > 128 ? ROAD : pitPx && pitPx[i * 4] > 128 ? PIT : b > 128 ? KERB : GRASS; }
  track.grid = { w, h, x0, z0, cell, surf, hgt: null };
  track.bounds = Math.max(maxx - minx, maxz - minz) / 2 + 60;

  // -- ground
  const night = th.night, desert = def.theme === 'desert', day = def.theme === 'day';
  const gtex = canvasTex(256, 256, (k, W, H) => { noise(k, W, H, desert ? '#d8b26c' : night ? '#2a2d31' : day ? '#55a83a' : '#4f8a3c', .1, 5000); if (day) { k.fillStyle = 'rgba(255,255,255,.055)'; k.fillRect(0, 0, W / 2, H); k.fillStyle = 'rgba(0,40,0,.05)'; k.fillRect(W / 2, 0, W / 2, H); } }, 220, 220);   // mowing stripes
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2600), new THREE.MeshStandardMaterial({ map: gtex, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(cx, -0.02, cz); ground.receiveShadow = true; G.add(ground);

  // -- road, lines, kerbs
  const atex = canvasTex(512, 512, (k, W, H) => { noise(k, W, H, night ? '#26272c' : '#51475f', .1, 9000); { const g = k.createLinearGradient(0, 0, W, 0); g.addColorStop(0, 'rgba(255,255,255,.07)'); g.addColorStop(.3, 'rgba(0,0,0,.1)'); g.addColorStop(.5, 'rgba(0,0,0,.16)'); g.addColorStop(.7, 'rgba(0,0,0,.1)'); g.addColorStop(1, 'rgba(255,255,255,.07)'); k.fillStyle = g; k.fillRect(0, 0, W, H); }   // a darker rubbered-in groove down the middle
    if (night) { k.fillStyle = 'rgba(255,255,255,.75)'; k.fillRect(W / 2 - 2, 0, 4, H * .45); }
    // real tarmac: stone chips of different shades set in dark binder, darker patched strips, and hairline cracks
    const im = k.getImageData(0, 0, W, H), d = im.data; for (let i = 0; i < d.length; i += 4) { const r = Math.random(), s = r < .08 ? 26 + Math.random() * 26 : r < .2 ? -22 - Math.random() * 16 : (Math.random() - .5) * 16; d[i] = Math.max(0, Math.min(255, d[i] + s)); d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + s * .97)); d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + s * .94)); } k.putImageData(im, 0, 0);
    k.fillStyle = 'rgba(20,18,24,.13)'; for (let i = 0; i < 3; i++) k.fillRect(Math.random() * W * .8, Math.random() * H, 30 + Math.random() * 90, 60 + Math.random() * 160);
    k.strokeStyle = 'rgba(12,10,14,.5)'; k.lineWidth = 1; for (let i = 0; i < 7; i++) { let x = Math.random() * W, y = Math.random() * H; k.beginPath(); k.moveTo(x, y); for (let q = 0; q < 9; q++) { x += (Math.random() - .5) * 26; y += 8 + Math.random() * 22; k.lineTo(x, y); } k.stroke(); } }, 1, 1);
  const abump = canvasTex(256, 256, (k, W, H) => { const im = k.createImageData(W, H), d = im.data; for (let i = 0; i < d.length; i += 4) { const v = 110 + (Math.random() < .12 ? 90 : 0) + Math.random() * 55; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; } k.putImageData(im, 0, 0); }, 1, 1); abump.colorSpace = THREE.NoColorSpace;
  const road = new THREE.Mesh(ribbon(path, hw, -hw, 0.02, 1 / 9), new THREE.MeshStandardMaterial({ map: atex, bumpMap: abump, bumpScale: .5, roughness: .86 })); road.receiveShadow = true; road.material.name = 'racetrack'; G.add(road);
  const white = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: .7 });
  for (const s of [1, -1]) { const l = new THREE.Mesh(ribbon(path, s * hw - .35 + (s > 0 ? 0 : .7), s * hw - .65 + (s > 0 ? 0 : .7), 0.035, 1), white); l.receiveShadow = true; G.add(l); }
  const ktex = canvasTex(64, 64, (k) => { k.fillStyle = day ? '#e8475a' : '#e3262e'; k.fillRect(0, 0, 64, 32); k.fillStyle = day ? '#f2c230' : '#f4f4f4'; k.fillRect(0, 32, 64, 32); });
  const kmat = new THREE.MeshStandardMaterial({ map: ktex, roughness: .7 });
  for (const s of [1, -1]) { const km = new THREE.Mesh(ribbon(path, s > 0 ? hw + 1.5 : -hw, s > 0 ? hw : -hw - 1.5, 0.045, 1 / 4, true, curved), kmat); km.receiveShadow = true; G.add(km); }

  // -- barriers
  const wtex = canvasTex(128, 32, (k) => {
    if (night) { k.fillStyle = '#15161c'; k.fillRect(0, 0, 128, 32); k.fillStyle = '#19d3ff'; k.fillRect(0, 20, 128, 5); k.fillStyle = '#ff2bd0'; k.fillRect(0, 6, 128, 3); }
    else if (day) { k.fillStyle = '#2d6bd1'; k.fillRect(0, 0, 128, 32); k.fillStyle = '#1c4ea8'; k.fillRect(0, 8, 128, 3); k.fillRect(0, 20, 128, 3); k.fillStyle = '#7a4326'; k.fillRect(0, 0, 7, 32); }
    else { k.fillStyle = '#e9e9e9'; k.fillRect(0, 0, 128, 32); k.fillStyle = desert ? '#1e88c9' : '#e3262e'; k.fillRect(0, 0, 64, 32); k.fillStyle = 'rgba(0,0,0,.25)'; k.fillRect(0, 0, 128, 3); }
  });
  const wmat = new THREE.MeshStandardMaterial({ map: wtex, side: THREE.DoubleSide, roughness: .6, emissive: night ? 0xffffff : 0, emissiveMap: night ? wtex : null, emissiveIntensity: night ? 1.2 : 0 });
  for (const s of [1, -1]) { const wm = new THREE.Mesh(wallStrip(path, s > 0 ? i => inPit(i) ? pitWall : B + .2 : -(B + .2), 1.15, 1 / 6), wmat); wm.castShadow = !night; G.add(wm); }

  // -- scenery: scatter props just outside the barriers
  const isFree = (x, z, r) => { for (let a = 0; a < 8; a++) if (track.surf(x + Math.cos(a * .785) * r, z + Math.sin(a * .785) * r) !== WALL) return false; return true; };
  const spots = [];
  for (let i = 0; i < n; i += 4) for (const s of [1, -1]) {
    const p = path[i], off = s * (B + 5 + rnd() * 38), x = p.x + p.tz * off, z = p.z - p.tx * off;
    if (isFree(x, z, 5)) spots.push({ x, z, r: rnd() * 6.28, s: .8 + rnd() * .7, i });
  }
  if (night) {
    const btex = canvasTex(64, 128, (k) => { k.fillStyle = '#0d0e14'; k.fillRect(0, 0, 64, 128); for (let y = 4; y < 124; y += 10) for (let x = 4; x < 60; x += 9) if (Math.random() > .45) { k.fillStyle = ['#ffd27a', '#8fd8ff', '#ff9ad5'][Math.random() * 3 | 0]; k.fillRect(x, y, 5, 6); } });
    const bm = new THREE.MeshStandardMaterial({ map: btex, emissive: 0xffffff, emissiveMap: btex, emissiveIntensity: 1.1, roughness: .8 });
    const g = new THREE.BoxGeometry(1, 1, 1); g.translate(0, .5, 0);
    G.add(instanced(g, bm, spots.filter((_, i) => i % 3 === 0).map(s => ({ x: s.x, z: s.z, r: 0, sx: 14 + rnd() * 12, sy: 5 + rnd() * 9, sz: 14 + rnd() * 12 })), false));
    const lamp = new THREE.CylinderGeometry(.12, .16, 7, 6); lamp.translate(0, 3.5, 0);
    const bulb = new THREE.SphereGeometry(.45, 8, 6); bulb.translate(0, 7.1, 0);
    const lp = []; for (let i = 0; i < n; i += 14) { const p = path[i], off = (i % 28 ? 1 : -1) * (B + 1.2); lp.push({ x: p.x + p.tz * off, z: p.z - p.tx * off }); }
    G.add(instanced(lamp, new THREE.MeshStandardMaterial({ color: 0x30323a }), lp, false));
    G.add(instanced(bulb, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xffe2a8).multiplyScalar(3) }), lp, false));
    const cone = new THREE.ConeGeometry(3.4, 7, 14, 1, true); cone.translate(0, 3.5, 0);     // soft light pools under each lamp
    const cm = instanced(cone, new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: .07, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }), lp, false); cm.visible = false; G.add(cm);   // flat light cones looked like cut-outs from above; the lamps' glow stays
  } else {
    const trunk = new THREE.CylinderGeometry(.22, .34, desert || def.theme === 'coast' ? 6 : 2.4, 6); trunk.translate(0, desert || def.theme === 'coast' ? 3 : 1.2, 0);
    let crown;
    if (desert || def.theme === 'coast') { crown = new THREE.ConeGeometry(2.6, 1.6, 7); crown.scale(1, .7, 1); crown.translate(0, 6.2, 0); }   // palm
    else { crown = new THREE.IcosahedronGeometry(2.7, 1); crown.scale(1, .85, 1); crown.translate(0, 4.3, 0); }
    const trees = spots.filter((_, i) => desert ? i % 3 === 0 : day ? i % 11 !== 5 && i % 11 !== 8 : true);
    G.add(instanced(trunk, new THREE.MeshStandardMaterial({ color: 0x6b4a2b, roughness: 1 }), trees));
    G.add(instanced(crown, new THREE.MeshStandardMaterial({ color: desert ? 0x4e8a3a : day ? 0x3c9440 : 0x2f6b34, roughness: 1, flatShading: true }), trees));
    if (desert) {
      const pyr = new THREE.ConeGeometry(1, 1, 4); pyr.rotateY(Math.PI / 4); pyr.translate(0, .5, 0);
      const pm = new THREE.MeshStandardMaterial({ color: 0xd2a45c, roughness: 1, flatShading: true });
      G.add(instanced(pyr, pm, [{ x: cx + 420, z: cz - 380, sx: 330, sy: 210, sz: 330 }, { x: cx + 40, z: cz - 520, sx: 280, sy: 180, sz: 280 }, { x: cx - 330, z: cz - 430, sx: 190, sy: 120, sz: 190 }], false));
      const rock = new THREE.DodecahedronGeometry(1.4, 0);
      G.add(instanced(rock, new THREE.MeshStandardMaterial({ color: 0xb08a55, roughness: 1, flatShading: true }), spots.filter((_, i) => i % 3 === 1).map(s => ({ ...s, y: .3, s: s.s * 1.4 }))));
    }
    if (def.theme === 'coast') {
      const sea = new THREE.Mesh(new THREE.PlaneGeometry(3000, 1200), new THREE.MeshStandardMaterial({ color: 0x1c6f9c, roughness: .15, metalness: .5 }));
      sea.rotation.x = -Math.PI / 2; sea.position.set(cx, 0.03, minz - B - 22 - 600); G.add(sea);
      const sand = new THREE.Mesh(new THREE.PlaneGeometry(3000, 22), new THREE.MeshStandardMaterial({ color: 0xe6cf9a, roughness: 1 }));
      sand.rotation.x = -Math.PI / 2; sand.position.set(cx, 0.01, minz - B - 11); sand.receiveShadow = true; G.add(sand);
      const bg = new THREE.BoxGeometry(1, 1, 1); bg.translate(0, .5, 0);
      const cols = [0xf1e3c8, 0xe9c9a0, 0xd9e6ec, 0xf0d2c0].map(c => new THREE.Color(c));
      const bl = []; for (let x = minx - 120; x < maxx + 120; x += 26) bl.push({ x, z: maxz + B + 40 + rnd() * 20, sx: 20, sy: 16 + rnd() * 34, sz: 18, c: cols[rnd() * 4 | 0] });
      G.add(instanced(bg, new THREE.MeshStandardMaterial({ roughness: .9 }), bl));
    }
  }
  // -- verge strip between tarmac and grass
  if (!night) { const vm = new THREE.MeshStandardMaterial({ color: desert ? 0xc49a5c : 0xa85f38, roughness: 1 }); for (const s of [1, -1]) { const v = new THREE.Mesh(ribbon(path, s > 0 ? hw + 2.2 : -hw, s > 0 ? hw : -hw - 2.2, 0.012, 1), vm); v.receiveShadow = true; G.add(v); } }
  // -- pit lane surface, boxes, crew and garage
  if (pb) {
    const mask = path.map((_, i) => inPit(i));
    const lane = new THREE.Mesh(ribbon(path, hw + 7.6, hw, .02, 1 / 12, true, mask), new THREE.MeshStandardMaterial({ color: night ? 0x34353d : 0x665c75, roughness: .9, name: 'racetrack' })); lane.receiveShadow = true; G.add(lane);
    const ln = new THREE.Mesh(ribbon(path, hw + .25, hw - .05, .05, 1, true, mask), new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: .7 })); G.add(ln);
    track.pitBoxes = []; const crew = [], crewCols = [0xe3262e, 0x19a7ce, 0xffc21a, 0x2fb457, 0xff7ab0, 0xf3f4f6].map(c => new THREE.Color(c));
    track.pitIn = n - nb; track.pitOut = na; track.pitHw = hw;      // where the pit lane starts and ends, and the track's half width
    for (let j = 0; j < 12; j++) {          // twelve boxes: every car on the grid has its own
      const i = ((n - Math.round(nb * .6) + j * 4) % n + n) % n, p = path[i], x = p.x + p.tz * (hw + 5), z = p.z - p.tx * (hw + 5), thb = Math.atan2(p.tx, p.tz);
      const bt = canvasTex(128, 256, (k) => { k.clearRect(0, 0, 128, 256); k.strokeStyle = '#fff'; k.lineWidth = 8; k.strokeRect(6, 6, 116, 244); k.fillStyle = 'rgba(255,255,255,.9)'; k.font = '900 70px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.fillText(String(j + 1), 64, 150); });
      const bm = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 6.8), new THREE.MeshBasicMaterial({ map: bt, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 }));
      bm.rotation.set(-Math.PI / 2, 0, Math.PI - thb); bm.position.set(x, .06, z); G.add(bm);
      track.pitBoxes.push({ x, z, th: thb, idx: i });
      for (let q = 0; q < 3; q++) crew.push({ x: p.x + p.tz * (hw + 7.6) + p.tx * (q - 1) * 1.3, z: p.z - p.tx * (hw + 7.6) + p.tz * (q - 1) * 1.3, c: crewCols[j % 6] });
    }
    const cb = new THREE.CapsuleGeometry(.3, .75, 3, 8); cb.translate(0, .68, 0); const chd = new THREE.SphereGeometry(.27, 8, 6); chd.translate(0, 1.52, 0);
    crew.forEach((q, n2) => { q.beh = 0; q.r = Math.atan2(path[0].tx, path[0].tz) - Math.PI / 2 + (n2 % 3 - 1) * .5; }); people(crew);
    const p0 = path[0], gar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.15, (nb + na) * 1.5), new THREE.MeshStandardMaterial({ color: night ? 0x2a2c33 : 0xe9e2d4, roughness: .9 }));
    gar.position.set(p0.x + p0.tz * (pitWall + 1.4), .58, p0.z - p0.tx * (pitWall + 1.4));   // a low pit wall: nothing tall here, so the fixed camera always sees the boxes gar.rotation.y = Math.atan2(p0.tx, p0.tz); gar.castShadow = gar.receiveShadow = true; G.add(gar);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(9.4, .5, (nb + na) * 1.5 + 1), new THREE.MeshStandardMaterial({ color: 0x3f7a5a, roughness: .8 })); roof.position.copy(gar.position); roof.position.y = 4.85; roof.rotation.y = gar.rotation.y; roof.visible = false; G.add(roof);
  }
  // -- trackside life: spectators, sponsor boards, hay bales, support vans
  if (!def.dev) {
    const ppl = [], shirt = [0xe3262e, 0x19a7ce, 0xffc21a, 0xf3f4f6, 0x2fb457, 0xff7ab0, 0x7b3fe4].map(c => new THREE.Color(c)), skin = [0xf1c9a5, 0xd9a577, 0xa8703f, 0x7a4a2b].map(c => new THREE.Color(c));
    for (let i = 0; i < n; i++) { if (i % 64 > 46) continue; for (const s of [1, -1]) { if (s > 0 && inPit(i)) continue; for (let r = 0; r < 6; r++) { if (rnd() > .82 * CK) continue;
      const p = path[i], off = s * (B + 1.7 + r * 1.05 + rnd() * .3), x = p.x + p.tz * off + (rnd() - .5) * .8, z = p.z - p.tx * off + (rnd() - .5) * .8; if (isFree(x, z, .9)) ppl.push({ x, z, s: .92 + rnd() * .2, c: shirt[rnd() * 7 | 0], k: skin[rnd() * 4 | 0], i, sd: s, row: r }); } } }
    const body = new THREE.CapsuleGeometry(.28, .7, 3, 8); body.translate(0, .63, 0); const head = new THREE.SphereGeometry(.24, 8, 6); head.translate(0, 1.42, 0);
    // marshals in orange at every corner, flags along the fences
    const marsh = [], flags = [], fcol = [0xe3262e, 0xffc21a, 0xf3f4f6, 0x19a7ce, 0x2fb457, 0x111214].map(c => new THREE.Color(c));
    for (let i = 6; i < n; i += 9) { const p = path[i], side = p.k > 0 ? -1 : 1; if (side > 0 && inPit(i)) continue; const off = side * (B + .9), x = p.x + p.tz * off, z = p.z - p.tx * off; if (!isFree(x, z, .5)) continue;
      flags.push({ x, z, y: 0, r: Math.atan2(p.tx, p.tz) + (side > 0 ? 0 : Math.PI), c: fcol[rnd() * 6 | 0] }); if (Math.abs(p.k) > 1 / 80) marsh.push({ x: x + p.tx * 1.2, z: z + p.tz * 1.2, c: new THREE.Color(0xff7a1a) }); }
    const pole = new THREE.CylinderGeometry(.05, .05, 4.4, 5); pole.translate(0, 2.2, 0); G.add(instanced(pole, new THREE.MeshStandardMaterial({ color: 0xd8d8d8 }), flags.map(f => ({ x: f.x, z: f.z })), false));
    const fg = new THREE.PlaneGeometry(1.7, 1, 8, 1); fg.translate(.85, 3.8, 0);
    const fm = instanced(fg, anim(new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: .8 }), 'transformed.z += sin(position.x * 3.5 - uTime * 6. + instanceMatrix[3][0]) * .16 * position.x; transformed.y += sin(position.x * 2. - uTime * 4.) * .04 * position.x;'), flags, false); G.add(fm);
    ppl.push(...marsh.map(m => ({ ...m, s: 1.05, k: skin[1] })));
    // who does what: the front rows are fans, further back people stand in twos and threes talking, and some stroll behind the crowd
    ppl.forEach((q, n2) => { if (q.i == null) { q.beh = 0; return; } const p = path[q.i], face = Math.atan2(p.x - q.x, p.z - q.z);
      if (q.row < 2) { q.beh = rnd() < .7 ? 1 : 0; q.r = face + (rnd() - .5) * .5; }
      else if (rnd() < .22) { q.beh = 2; q.walk = 5 + rnd() * 9; q.r = Math.atan2(p.tx, p.tz); }
      else { q.beh = rnd() < .25 ? 1 : 0; q.r = face + (n2 % 2 ? 1.25 : -1.25) * (q.beh ? .2 : 1); } });
    people(ppl);
    const brands = [['TAFHEET', '#e3262e', '#fff'], ['EGYSeal', '#f3f4f6', '#1c4ea8'], ['NILE COLA', '#1c4ea8', '#fff'], ['AMM SABER', '#ffc21a', '#17181c'], ['SCARAB OIL', '#f3f4f6', '#e3262e'], ['RA ROSSO', '#e3262e', '#ffc21a'], ['HORUS TYRES', '#17181c', '#ffc21a']];
    const wood = new THREE.MeshStandardMaterial({ color: 0x7a4326, roughness: 1 });
    brands.forEach(([txt, bg, fg], b) => {
      const i = Math.round((b + .45) * n / brands.length) % n, p = path[i], side = (p.k > 0 ? -1 : 1), off = side * ((side > 0 && inPit(i) ? pitWall + 16 : B) + 5.5), x = p.x + p.tz * off, z = p.z - p.tx * off; if (!isFree(x, z, 2.5)) return;
      const tex = canvasTex(512, 200, (k) => { k.fillStyle = bg; k.fillRect(0, 0, 512, 200); k.strokeStyle = fg; k.lineWidth = 10; k.strokeRect(14, 14, 484, 172); k.fillStyle = fg; k.font = 'italic 900 84px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText(txt, 256, 106, 440); });
      const g = new THREE.Group(), board = new THREE.Mesh(new THREE.BoxGeometry(10, 3.9, .3), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: tex, roughness: .8 }), wood]); board.position.y = 4.4; board.castShadow = true; g.add(board);
      for (const sx of [-4, 4]) { const post = new THREE.Mesh(new THREE.BoxGeometry(.35, 2.6, .35), wood); post.position.set(sx, 1.3, -.1); post.castShadow = true; g.add(post); }
      g.position.set(x, 0, z); g.rotation.y = Math.atan2(p.x - x, p.z - z); G.add(g);
    });
    const bales = []; for (let i = 0; i < n; i += 5) { const p = path[i]; if (Math.abs(p.k) < 1 / 70) continue; const side = p.k > 0 ? -1 : 1; if (side > 0 && inPit(i)) continue; const off = side * (B + 1.3), x = p.x + p.tz * off, z = p.z - p.tx * off, r = Math.atan2(p.tx, p.tz); if (!isFree(x, z, .8)) continue; bales.push({ x, z, y: .55, r }, { x: x + p.tx * 1.6, z: z + p.tz * 1.6, y: .55, r }, { x: x + p.tx * .8, z: z + p.tz * .8, y: 1.6, r }); }
    const bale = new THREE.BoxGeometry(1.1, 1.05, 1.5, 2, 2, 2); G.add(instanced(bale, new THREE.MeshStandardMaterial({ color: 0xd8a441, roughness: 1, flatShading: true }), bales));
    if (day) { const vans = spots.filter((_, i) => i % 11 === 5).map(s => ({ x: s.x, z: s.z, y: 0, r: s.r, c: shirt[rnd() * 7 | 0] })); const vg = new THREE.BoxGeometry(2.3, 2.2, 5); vg.translate(0, 1.4, 0); G.add(instanced(vg, new THREE.MeshStandardMaterial({ roughness: .6 }), vans));
      const tents = spots.filter((_, i) => i % 11 === 8).map(s => ({ x: s.x, z: s.z, r: s.r })); const tg = new THREE.ConeGeometry(2.6, 2.6, 4); tg.translate(0, 1.3, 0); G.add(instanced(tg, new THREE.MeshStandardMaterial({ color: 0xf3efe6, roughness: 1, flatShading: true }), tents)); }
  }
  if (def.dev) { const cones = []; for (let q = 0; q < 12; q++) cones.push({ x: 20 + q * 18, z: 24 }); for (let a = 0; a < 24; a++) cones.push({ x: 110 + Math.cos(a / 24 * 6.283) * 30, z: 65 + Math.sin(a / 24 * 6.283) * 30 });
    const cg = new THREE.ConeGeometry(.35, .9, 8); cg.translate(0, .45, 0); G.add(instanced(cg, new THREE.MeshStandardMaterial({ color: 0xff6a13, roughness: .7 }), cones)); }
  // -- loose objects: braking boards before each corner, a tyre stack and cones at the apex, hay bales at the exit
  track.propSpots = [];
  if (!def.dev) { let inC = false, e = 0, best = 0, bi = 0, stack = 0;
    for (let i = 0; i < n + 30; i++) { const p = path[i % n], ak = Math.abs(p.k);
      if (!inC && ak > 1 / 70) { inC = true; e = i; best = 0; } if (inC && ak > best) { best = ak; bi = i; }
      if (inC && ak < 1 / 95) { inC = false; if (i - e < 6 || inPit(bi % n)) continue; const a = path[bi % n], ins = a.k > 0 ? 1 : -1, th = Math.atan2(a.tx, a.tz);
        for (const m of [50, 100]) { const q = path[((e - Math.round(m / 2)) % n + n) % n], o = -ins * (hw + 2.3); if (!inPit(((e - Math.round(m / 2)) % n + n) % n)) track.propSpots.push({ type: 'board', x: q.x + q.tz * o, z: q.z - q.tx * o, r: Math.atan2(q.tx, q.tz) + Math.PI }); }
        const ox = a.x + a.tz * ins * (hw + 2.6), oz = a.z - a.tx * ins * (hw + 2.6); stack++; for (let t = 0; t < 3; t++) track.propSpots.push({ type: 'tyre', x: ox, z: oz, lift: t * .26, stack });
        for (const d2 of [-3, 3]) track.propSpots.push({ type: 'cone', x: ox + a.tx * d2, z: oz + a.tz * d2, r: th });
        const x2 = path[i % n], oo = -ins * (B - 1.3); if (!inPit(i % n)) for (const d2 of [0, 1.8]) track.propSpots.push({ type: 'bale', x: x2.x + x2.tz * oo + x2.tx * d2, z: x2.z - x2.tx * oo + x2.tz * d2, r: Math.atan2(x2.tx, x2.tz) }); } } }
  // -- grandstand beside the start straight
  const p0 = path[0], crowd = canvasTex(256, 64, (k) => { k.fillStyle = '#3a3d45'; k.fillRect(0, 0, 256, 64); for (let i = 0; i < 900; i++) { k.fillStyle = `hsl(${Math.random() * 360},70%,${45 + Math.random() * 30}%)`; k.fillRect(Math.random() * 256, Math.random() * 64, 3, 4); } }, 3, 1);
  const stand = new THREE.Group(); stand.position.set(p0.x - p0.tz * (B + 3), 0, p0.z + p0.tx * (B + 3)); stand.rotation.y = Math.atan2(p0.tx, p0.tz);
  for (let i = 0; i < 5; i++) { const st = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.1 * (i + 1), 60), new THREE.MeshStandardMaterial({ map: crowd, emissive: night ? 0x555555 : 0, emissiveMap: night ? crowd : null })); st.position.set(-i * 2.2, .55 * (i + 1), 10); st.castShadow = true; stand.add(st); }
  G.add(stand);
  { // a full grandstand: people on every step, bouncing
    const sp = [], ry = stand.rotation.y, cs = Math.cos(ry), sn = Math.sin(ry), cols = [0xe3262e, 0x19a7ce, 0xffc21a, 0xf3f4f6, 0x2fb457, 0xff7ab0, 0x7b3fe4].map(c => new THREE.Color(c));
    for (let i = 0; i < 5; i++) for (let lz = -19; lz < 40; lz += .8) { if (rnd() > .88 * CK) continue; const lx = -i * 2.2 + (rnd() - .5) * .9; sp.push({ x: stand.position.x + lx * cs + lz * sn, z: stand.position.z - lx * sn + lz * cs, y: 1.1 * (i + 1), s: .9 + rnd() * .2, c: cols[rnd() * 7 | 0] }); }
    const b2 = new THREE.CapsuleGeometry(.28, .6, 3, 6); b2.translate(0, .55, 0); const h2 = new THREE.SphereGeometry(.23, 7, 5); h2.translate(0, 1.28, 0);
    sp.forEach(q => { q.beh = rnd() < .75 ? 1 : 0; q.r = ry + Math.PI / 2 + (rnd() - .5) * .4; }); people(sp);
    // hot-air balloons drifting beyond the circuit
    const bc = [[0xe3262e, 0xffc21a], [0x19a7ce, 0xf3f4f6], [0x7b3fe4, 0xff7ab0], [0x2fb457, 0xffc21a]];
    if (!night) bc.forEach(([c1, c2], i) => { const g = new THREE.Group(), env = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 10), new THREE.MeshStandardMaterial({ color: c1, roughness: .7, flatShading: true })); env.scale.y = 1.2; const band = new THREE.Mesh(new THREE.CylinderGeometry(8.9, 8.9, 3, 12, 1, true), new THREE.MeshStandardMaterial({ color: c2, roughness: .7 })); const bas = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2, 2.4), new THREE.MeshStandardMaterial({ color: 0x7a4326 })); bas.position.y = -14;
      g.add(env, band, bas); const a = i * 1.7 + .6, R0 = track.bounds + 70 + i * 25, bx = cx + Math.cos(a) * R0, bz = cz + Math.sin(a) * R0, by = 34 + i * 9; g.position.set(bx, by, bz); G.add(g); movers.push(t => { g.position.y = by + Math.sin(t * .25 + i) * 3; g.position.x = bx + Math.sin(t * .05 + i * 2) * 14; }); });
    // night: coloured stage lights sweep the start straight, with visible beams over the stand
    if (night) [0xff2bd0, 0x19d3ff, 0xffc21a, 0x7dff9b].forEach((col, i) => {
      const ox = stand.position.x + (-9) * cs + (i * 16 - 14) * sn, oz = stand.position.z - (-9) * sn + (i * 16 - 14) * cs;
      const L = new THREE.SpotLight(col, 420, 95, .32, .6, 1.3); L.position.set(ox, 13, oz); G.add(L, L.target); track.fancyLights.push(L);
      const beam = new THREE.Mesh(new THREE.ConeGeometry(5, 46, 12, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: .09, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })); beam.geometry.translate(0, -23, 0); beam.geometry.rotateX(Math.PI); beam.position.set(ox, 13, oz); beam.visible = false; G.add(beam);
      movers.push(t => { const s = Math.sin(t * .5 + i * 1.6), q = path[((Math.round((s * .5 + .5) * 40) - 20) % n + n) % n]; L.target.position.set(q.x + p0.tz * Math.sin(t * .9 + i) * 5, 0, q.z - p0.tx * Math.sin(t * .9 + i) * 5); beam.rotation.set(Math.sin(t * .7 + i) * .5, 0, Math.cos(t * .45 + i * 2) * .5); });
    });
  }
}

export async function loadTrack(id, onProgress) {
  const def = TRACKS.find(t => t.id === id), track = new Track(def);
  if (def.type === 'glb') await buildLider(track, onProgress); else buildProc(track);
  track.cullables = def.type === 'glb' ? [] : CULL;
  addStart(track);
  // minimap bounds
  let a = 1e9, b = -1e9, c = 1e9, d = -1e9; for (const p of track.path) { a = Math.min(a, p.x); b = Math.max(b, p.x); c = Math.min(c, p.z); d = Math.max(d, p.z); }
  track.box = { minx: a, maxx: b, minz: c, maxz: d };
  return track;
}

export function makeSky(theme) {
  const geo = new THREE.SphereGeometry(4000, 24, 12);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(theme.skyTop) }, bot: { value: new THREE.Color(theme.skyBot) } },
    vertexShader: 'varying vec3 p; void main(){ p=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: 'varying vec3 p; uniform vec3 top; uniform vec3 bot; void main(){ float h=clamp(normalize(p).y*2.2,0.,1.); gl_FragColor=vec4(mix(bot,top,pow(h,.6)),1.);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n }',
  });
  const m = new THREE.Mesh(geo, mat); m.renderOrder = -10; m.frustumCulled = false; return m;
}
