// Cosmetic car parts. Every part is fitted from a per-model "profile": the car's own body, rasterised once into height maps
// (top surface, left/right side surface, nose and tail), plus landmarks read from them (windscreen, roof, bonnet, boot, arch circles).
// Parts are then placed from those maps, so a stripe follows the real bonnet and roof, a flare wraps the real arch, a tow eye sits on the real
// bumper face, whatever the body. Geometry is built once per model and option and shared by every car that wears it; the pieces of one
// option are merged per material, so an option costs one to three draw calls.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CARBON, PAL } from './config.js';

const CS = .03, clamp = (v, a, b) => v < a ? a : v > b ? b : v, TAU = Math.PI * 2;

// ---------------------------------------------------------------- body profile (height maps)
const PF = {};
function raster(T, G, ai, bi, vi, a0, b0, na, nb, put) {
  for (let t = 0; t < T.length; t += 9) {
    const a = [T[t + ai], T[t + 3 + ai], T[t + 6 + ai]], b = [T[t + bi], T[t + 3 + bi], T[t + 6 + bi]], v = [T[t + vi], T[t + 3 + vi], T[t + 6 + vi]], g = G[t / 9];
    const det = (b[1] - b[2]) * (a[0] - a[2]) + (a[2] - a[1]) * (b[0] - b[2]); if (Math.abs(det) < 1e-9) continue;
    const i0 = Math.max(0, Math.floor((Math.min(a[0], a[1], a[2]) - a0) / CS)), i1 = Math.min(na - 1, Math.ceil((Math.max(a[0], a[1], a[2]) - a0) / CS)), j0 = Math.max(0, Math.floor((Math.min(b[0], b[1], b[2]) - b0) / CS)), j1 = Math.min(nb - 1, Math.ceil((Math.max(b[0], b[1], b[2]) - b0) / CS));
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) {
      const ca = a0 + i * CS, cb = b0 + j * CS, l0 = ((b[1] - b[2]) * (ca - a[2]) + (a[2] - a[1]) * (cb - b[2])) / det, l1 = ((b[2] - b[0]) * (ca - a[2]) + (a[0] - a[2]) * (cb - b[2])) / det, l2 = 1 - l0 - l1, e = -.03;
      if (l0 < e || l1 < e || l2 < e) continue; put(i, j, l0 * v[0] + l1 * v[1] + l2 * v[2], g);
    }
  }
}
export function profileOf(car) {
  const key = car.spec.model || car.spec.id; if (PF[key]) return PF[key];
  const list = [], gl = []; let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9, maxY = 0;
  for (const m of car.bodyMeshes) { const P = m.userData.orig, idx = m.geometry.index, n = idx ? idx.count : P.length / 3, g = m.userData.kind === 'window' ? 1 : 0;
    for (let t = 0; t < n; t += 3) for (let q = 0; q < 3; q++) { const i = idx ? idx.getX(t + q) : t + q, x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2]; list.push(x, y, z); if (x < minX) minX = x; if (x > maxX) maxX = x; if (z < minZ) minZ = z; if (z > maxZ) maxZ = z; if (y > maxY) maxY = y; if (q === 0) gl.push(g); } }
  const T = new Float32Array(list), G = Uint8Array.from(gl), hx = Math.max(maxX, -minX), X0 = -hx - .1, Z0 = minZ - .1, Y0 = -.05, nx = Math.ceil((2 * hx + .2) / CS) + 2, nz = Math.ceil((maxZ - minZ + .2) / CS) + 2, ny = Math.ceil((maxY + .25) / CS) + 2;
  const H = new Float32Array(nx * nz).fill(-1), HG = new Uint8Array(nx * nz), SXp = new Float32Array(nz * ny).fill(-9), SXn = new Float32Array(nz * ny).fill(9), ZF = new Float32Array(nx * ny).fill(-9), ZB = new Float32Array(nx * ny).fill(9);
  raster(T, G, 0, 2, 1, X0, Z0, nx, nz, (i, j, v, g) => { const k = i * nz + j; if (v > H[k]) { H[k] = v; HG[k] = g; } });
  raster(T, G, 2, 1, 0, Z0, Y0, nz, ny, (i, j, v) => { const k = i * ny + j; if (v > SXp[k]) SXp[k] = v; if (v < SXn[k]) SXn[k] = v; });
  raster(T, G, 0, 1, 2, X0, Y0, nx, ny, (i, j, v) => { const k = i * ny + j; if (v > ZF[k]) ZF[k] = v; if (v < ZB[k]) ZB[k] = v; });
  const P = { key, hx, W: hx * 2, minX, maxX, minZ, maxZ, top: maxY, L: maxZ - minZ };
  const ok = (i, j, ni, nj) => i >= 0 && j >= 0 && i < ni && j < nj;
  // top height (bilinear over valid neighbours; null off the body) and the glass flag of the nearest cell
  P.top_ = (x, z) => { const fx = (x - X0) / CS, fz = (z - Z0) / CS, i = Math.floor(fx), j = Math.floor(fz), u = fx - i, w = fz - j; let s = 0, c = 0, sw = 0; const a = [[i, j, (1 - u) * (1 - w)], [i + 1, j, u * (1 - w)], [i, j + 1, (1 - u) * w], [i + 1, j + 1, u * w]];
    for (const [ii, jj, ww] of a) if (ok(ii, jj, nx, nz) && H[ii * nz + jj] > -.5) { s += H[ii * nz + jj] * ww; sw += ww; c++; } return c === 4 || (c >= 2 && sw > .5) ? s / sw : c ? s / sw : null; };
  P.glass = (x, z) => { const i = Math.round((x - X0) / CS), j = Math.round((z - Z0) / CS); return ok(i, j, nx, nz) && H[i * nz + j] > -.5 && HG[i * nz + j] === 1; };
  P.has = (x, z) => { const i = Math.round((x - X0) / CS), j = Math.round((z - Z0) / CS); return ok(i, j, nx, nz) && H[i * nz + j] > -.5; };
  const near = (arr, i, j, ni, nj, bad, rad) => { for (let r = 0; r <= rad; r++) for (let di = -r; di <= r; di++) for (let dj = -r; dj <= r; dj++) { if (Math.max(Math.abs(di), Math.abs(dj)) !== r) continue; const ii = i + di, jj = j + dj; if (ok(ii, jj, ni, nj)) { const v = arr[ii * nj + jj]; if (v !== bad) return v; } } return null; };
  // outer side surface at (z, y): absolute x, or null
  P.sideX = (s, z, y, rad = 1) => { const i = Math.round((z - Z0) / CS), j = Math.round((y - Y0) / CS), v = s > 0 ? near(SXp, i, j, nz, ny, -9, rad) : near(SXn, i, j, nz, ny, 9, rad); return v == null ? null : Math.abs(v); };
  P.noseZ = (x, y, rad = 1) => { const i = Math.round((x - X0) / CS), j = Math.round((y - Y0) / CS); return near(ZF, i, j, nx, ny, -9, rad); };
  P.tailZ = (x, y, rad = 1) => { const i = Math.round((x - X0) / CS), j = Math.round((y - Y0) / CS); return near(ZB, i, j, nx, ny, 9, rad); };
  // half width of the flat top at z (walk outwards until the surface drops, ends or turns to glass)
  P.halfW = (z, drop = .05, glass = false) => { const y0 = P.top_(0, z); if (y0 == null) return 0; let x = 0; for (; x < hx; x += CS) { const y = P.top_(x + CS, z); if (y == null || y < y0 - drop || (!glass && P.glass(x + CS, z))) break; } return x; };
  // ---- landmarks along the centre line
  const cl = []; for (let z = maxZ; z >= minZ; z -= CS) { const y = P.top_(0, z); cl.push({ z, y, g: y != null && (P.glass(0, z) || P.glass(.04, z)) }); }
  const runs = []; { let r = null; for (const c of cl) { if (c.g) { if (!r) r = { z1: c.z, z0: c.z }; r.z0 = c.z; } else if (r) { if (r.z1 - r.z0 >= .12) runs.push(r); r = null; } } if (r && r.z1 - r.z0 >= .12) runs.push(r); }
  P.ws = runs[0] || null; P.rg = runs.length > 1 ? runs[runs.length - 1] : null;
  if (!P.ws) P.ws = { z1: minZ + P.L * .62, z0: minZ + P.L * .45 };
  P.roofZ1 = P.ws.z0; P.roofZ0 = P.rg ? P.rg.z1 : minZ + P.L * .22;
  { let ry = 0; for (const c of cl) if (c.z < P.roofZ1 && c.z > P.roofZ0 && c.y != null && !c.g && c.y > ry) ry = c.y; P.roofY = ry || maxY; }
  P.zFE = maxZ - .1; { let prev = P.top_(0, P.ws.z1 + .05); for (let z = P.ws.z1 + .08; z < maxZ; z += .03) { const y = P.top_(0, z); if (y == null || y < prev - .06) { P.zFE = z - .05; break; } prev = y; P.zFE = z; } }
  P.zRE = minZ + .1; { const zs = P.rg ? P.rg.z0 : P.roofZ0; let prev = P.top_(0, zs - .05) ?? 0; for (let z = zs - .08; z > minZ; z -= .03) { const y = P.top_(0, z); if (y == null || y < prev - .06) { P.zRE = z + .05; break; } prev = y; P.zRE = z; } }
  P.bonY = P.top_(0, (P.ws.z1 + P.zFE) / 2) ?? P.roofY * .6; P.deckY = P.top_(0, (P.zRE + (P.rg ? P.rg.z0 : P.roofZ0)) / 2) ?? P.roofY * .6;
  // lowest point of the nose and tail (bumper undersides)
  P.lowF = 9; P.lowR = 9; for (let i = 0; i < T.length; i += 3) { if (T[i + 2] > maxZ - .35 && T[i + 1] < P.lowF) P.lowF = T[i + 1]; if (T[i + 2] < minZ + .35 && T[i + 1] < P.lowR) P.lowR = T[i + 1]; }
  if (P.lowF > 5) P.lowF = .2; if (P.lowR > 5) P.lowR = .2;
  PF[key] = P; return P;
}

// ---------------------------------------------------------------- geometry helpers
const keepAttrs = g => { if (g.index) g = g.toNonIndexed(); for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal' && n !== 'uv') g.deleteAttribute(n); if (!g.attributes.normal) g.computeVertexNormals(); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g; };
const triUV = (g, s = 1 / .075) => { const P = g.attributes.position, N = g.attributes.normal, U = g.attributes.uv; for (let i = 0; i < P.count; i++) { const ax = Math.abs(N.getX(i)), ay = Math.abs(N.getY(i)), az = Math.abs(N.getZ(i)); if (ay >= ax && ay >= az) U.setXY(i, P.getX(i) * s, P.getZ(i) * s); else if (ax >= az) U.setXY(i, P.getZ(i) * s, P.getY(i) * s); else U.setXY(i, P.getX(i) * s, P.getY(i) * s); } return g; };
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3(), _s = new THREE.Vector3();
const xf = (g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) => { _e.set(rx, ry, rz, 'YXZ'); _q.setFromEuler(_e); _m.compose(_v.set(x, y, z), _q, _s.set(sx, sy, sz)); return g.applyMatrix4(_m); };
const rect = (w, h) => { const s = new THREE.Shape(); s.moveTo(-w / 2, -h / 2); s.lineTo(w / 2, -h / 2); s.lineTo(w / 2, h / 2); s.lineTo(-w / 2, h / 2); s.closePath(); return s; };
const rb = (w, h, d, r = .006) => { r = Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4); return new THREE.ExtrudeGeometry(rect(Math.max(1e-3, w - 2 * r), Math.max(1e-3, h - 2 * r)), { depth: Math.max(1e-3, d - 2 * r), bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 2, curveSegments: 3 }).translate(0, 0, -(d - 2 * r) / 2); };
const tube = (pts, r, seg = 16, rad = 7) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)), false, 'centripetal'), seg, r, rad, false);
const cyl = (r0, r1, len, seg = 14, open = false) => new THREE.CylinderGeometry(r0, r1, len, seg, 1, open);
const lathe = (pts, seg = 20) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg);
// a strip draped over the top surface: rows along z, columns across x, lifted a little so it never sinks into the body; quads over glass are left out
function patch(P, zs, xr, nxc, eps, noGlass = true) {
  const pos = [], idx = [], rows = zs.length, ok = [], hh = [];
  for (let r = 0; r < rows; r++) { const z = zs[r], rg = xr(z); for (let c = 0; c <= nxc; c++) { const x = rg ? rg[0] + (rg[1] - rg[0]) * c / nxc : 0, y = rg ? P.top_(x, z) : null; hh.push(y); pos.push(x, (y ?? 0) + eps, z); } }
  const at = (r, c) => r * (nxc + 1) + c, gl = (r, c) => noGlass && P.glass(pos[at(r, c) * 3], pos[at(r, c) * 3 + 2]);
  for (let r = 0; r < rows - 1; r++) for (let c = 0; c < nxc; c++) { const a = at(r, c), b = at(r, c + 1), d = at(r + 1, c), e = at(r + 1, c + 1); if (hh[a] == null || hh[b] == null || hh[d] == null || hh[e] == null) continue; if (gl(r, c) || gl(r, c + 1) || gl(r + 1, c) || gl(r + 1, c + 1)) continue; idx.push(a, d, b, b, d, e); }
  if (!idx.length) return null; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
const range = (a, b, st) => { const o = []; if (a <= b) for (let v = a; v < b; v += st) o.push(v); else for (let v = a; v > b; v -= st) o.push(v); o.push(b); return o; };

// ---------------------------------------------------------------- materials (shared by every car)
const MATS = {}; let CARB = null;
function carbonMap() {
  if (CARB) return CARB; const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'); k.fillStyle = '#14161a'; k.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { const hz = ((i + j) >> 1 & 1) === 0, x = i * 8, y = j * 8, g = hz ? k.createLinearGradient(x, y, x, y + 8) : k.createLinearGradient(x, y, x + 8, y); g.addColorStop(0, hz ? '#4b5058' : '#3a3e45'); g.addColorStop(.5, hz ? '#23262b' : '#1b1d21'); g.addColorStop(1, hz ? '#101114' : '#2c3036'); k.fillStyle = g; k.fillRect(x, y, 8, 8); k.fillStyle = 'rgba(0,0,0,.35)'; k.fillRect(x, y, 8, 1); k.fillRect(x, y, 1, 8); }
  CARB = new THREE.CanvasTexture(c); CARB.wrapS = CARB.wrapT = THREE.RepeatWrapping; CARB.colorSpace = THREE.SRGBColorSpace; CARB.anisotropy = 4; return CARB;
}
export function partMat(key, car) {
  if (key === 'paint') return car.m.paint;
  if (key.startsWith('num:')) return numMat(+key.slice(4));
  if (MATS[key]) return MATS[key]; let m;
  const dbl = o => { o.side = THREE.DoubleSide; return o; };
  if (key === 'carbon') m = new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: carbonMap(), roughness: .34, metalness: .35, clearcoat: 1, clearcoatRoughness: .08, envMapIntensity: 1.1 });
  else if (key === 'dark') m = new THREE.MeshStandardMaterial({ color: 0x111215, roughness: .5, metalness: .45 });
  else if (key === 'rubber') m = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, roughness: .88, metalness: 0 });
  else if (key === 'chrome') m = new THREE.MeshStandardMaterial({ color: 0xe3e6ea, metalness: 1, roughness: .1 });
  else if (key === 'titan') m = new THREE.MeshStandardMaterial({ color: 0x8d94a6, metalness: 1, roughness: .26 });
  else if (key === 'steel') m = new THREE.MeshStandardMaterial({ color: 0xaeb3bb, metalness: .9, roughness: .34 });
  else if (key === 'housing') m = new THREE.MeshStandardMaterial({ color: 0x17181b, metalness: .6, roughness: .38 });
  else if (key === 'intake') m = new THREE.MeshBasicMaterial({ color: 0x050506 });
  else if (key === 'lens') m = new THREE.MeshStandardMaterial({ color: 0xfff8e8, emissive: 0xfff0cf, emissiveIntensity: 1.5, roughness: .1, metalness: .2 });
  else if (key === 'lensA') m = new THREE.MeshStandardMaterial({ color: 0xffd27a, emissive: 0xffb23a, emissiveIntensity: 1.5, roughness: .1, metalness: .2 });
  else if (key === 'tape') m = new THREE.MeshStandardMaterial({ color: 0x0a0a0b, roughness: .7, metalness: 0, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  else if (key === 'tapeY') m = new THREE.MeshStandardMaterial({ color: 0xf2c200, roughness: .6, metalness: 0, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  else if (key.startsWith('col:')) m = new THREE.MeshPhysicalMaterial({ color: +key.slice(4), roughness: .28, metalness: .15, clearcoat: 1, clearcoatRoughness: .08, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  else if (key.startsWith('ano:')) m = new THREE.MeshStandardMaterial({ color: +key.slice(4), metalness: .75, roughness: .32 });
  else if (key.startsWith('flat:')) m = new THREE.MeshStandardMaterial({ color: +key.slice(5), roughness: .55, metalness: .1, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  else m = new THREE.MeshStandardMaterial({ color: 0x222222 });
  MATS[key] = dbl(m); return m;
}

// ---------------------------------------------------------------- the options
// Each builder returns { part, items: [[geometry, materialKey], ...] }. The caller merges items per material.
const FEAT = {};      // cached by model + option: geometry is built once and shared
const stripeKey = c => 'col:' + (PAL.liv[c] ?? PAL.liv[0]);

function fStripes(P, v, c) {
  const k = clamp(P.W / 1.7, .8, 1.3), cols = v === 1 ? [[-.12 * k, .11 * k], [.12 * k, .11 * k]] : v === 2 ? [[0, .34 * k]] : v === 3 ? [[-.14 * k, .035 * k], [0, .075 * k], [.14 * k, .035 * k]] : [[0, .3 * k]], items = [], m = stripeKey(c);
  const z0 = v === 4 ? P.zFE + .02 : P.zFE + .04, z1 = v === 4 ? P.ws.z1 + .05 : P.zRE - .02, zs = range(z0, z1, .02);
  for (const [xc, w] of cols) { const g = patch(P, zs, () => [xc - w / 2, xc + w / 2], Math.max(2, Math.ceil(w / .035)), .008); if (g) items.push([g, m]); }
  if (v === 4) { const w = .02 * k; for (const sx of [-1, 1]) { const g = patch(P, zs, () => [sx * (.2 * k) - w / 2, sx * (.2 * k) + w / 2], 1, .008); if (g) items.push([g, m]); } }
  return { part: 'stripe', items };
}
function fRoofPaint(P, c) {
  const z0 = P.roofZ0 + .03, z1 = P.roofZ1 - .02; if (z1 - z0 < .2) return { part: 'roofp', items: [] };
  const zs = range(z1, z0, .03), hw = new Map(); const hwf = z => { const k = Math.round(z / .01); if (!hw.has(k)) hw.set(k, Math.max(.2, P.halfW(z, .035) * .94)); return hw.get(k); };
  const g = patch(P, zs, z => [-hwf(z), hwf(z)], 10, .009); return { part: 'roofp', items: g ? [[g, c === CARBON ? 'carbon' : 'col:' + PAL.liv[c]]] : [] };
}
function fBanner(P, c) {
  const L = P.ws.z1 - P.ws.z0, zt = P.ws.z0 + .005, zb = P.ws.z0 + Math.max(.1, L * .2), zs = range(zt, zb, .02), gw = z => { let x = 0; while (x < P.hx && P.glass(x + CS, z)) x += CS; return Math.max(.2, x - .035); };
  const g = patch(P, zs, z => [-gw(z), gw(z)], 12, .006, false); return { part: 'banner', items: g ? [[g, 'flat:' + PAL.ban[c]]] : [] };
}
function fSide(P, car, v, c) {
  const ar = car.archR; const wz = car.wheels, T = car.T, zF = wz.FL.z / T.l, zR = wz.RL.z / T.l, Rw = (car.R / T.wheel) * 1.22, items = [], m = stripeKey(c);
  const z0 = zR + Rw + .04, z1 = zF - Rw - .04; if (z1 - z0 < .3) return { part: 'side', items };
  const hTop = P.roofY, bands = v === 1 ? [[.3 * hTop, .06]] : v === 2 ? [[.5 * hTop, .05], [.5 * hTop + .09, .018]] : [[.17 * hTop, .13]];
  for (const s of [-1, 1]) for (const [y0, h] of bands) { const pos = [], idx = [], zs = range(z0, z1, .04); const rows = [0, 1, 2].map(i => y0 + h * (i / 2 - .5));
    for (const z of zs) for (const y of rows) { const x = P.sideX(s, z, y, 1); pos.push(s * ((x ?? P.hx * .8) + .005), y, z); }
    for (let r = 0; r < zs.length - 1; r++) for (let c2 = 0; c2 < 2; c2++) { const a = r * 3 + c2, b = a + 1, d = a + 3, e = d + 1; if (s > 0) idx.push(a, b, d, b, e, d); else idx.push(a, d, b, b, d, e); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); items.push([g, m]); }
  return { part: 'side', items };
}

// ---------------------------------------------------------------- assembling the options onto a car
const prepGeo = (g, m) => { g = keepAttrs(g); return m === 'carbon' ? triUV(g) : g; };
function addFeature(car, A, name, argKey, fn, shadow = false, cheap = false) {
  const P = profileOf(car), k = P.key + '|' + name + '|' + argKey; let f = FEAT[k];
  if (!f) { const r = fn(P) || { items: [] }, by = {}; for (const [g, m] of r.items) (by[m] || (by[m] = [])).push(prepGeo(g, m)); f = FEAT[k] = { part: r.part || name, sets: Object.entries(by).map(([m, gs]) => [gs.length > 1 ? mergeGeometries(gs, false) : gs[0], m]) }; }
  for (const [g, m] of f.sets) { g.userData.shared = true; const me = new THREE.Mesh(g, partMat(m, car)); me.castShadow = shadow && !cheap; me.userData.part = f.part; A.add(me); }
}
export function buildExtras(car, L) {
  const A = car.addons, cheap = !!car.isAI, ad = (n, a, fn, sh) => addFeature(car, A, n, a, fn, sh, cheap), arch = !!car.archR;
  profileOf(car);
  if (L.stripe) ad('stripe', L.stripe + ':' + (L.strc || 0), P => fStripes(P, L.stripe, L.strc || 0));
  if (L.roofc) ad('roofp', L.roofc, P => fRoofPaint(P, L.roofc));
  if (L.ban) ad('banner', L.ban, P => fBanner(P, L.ban));
  if (L.side) ad('side', L.side + ':' + (L.strc || 0), P => fSide(P, car, L.side, L.strc || 0));
  if (L.num) ad('num', L.num, P => fNum(P, L.num));
  if (L.diff) ad('diff', L.diff, P => fDiff(P, L.diff), true);
  if (L.canard) ad('canard', L.canard, P => fCanard(P, L.canard), true);
  if (L.flare && arch) ad('flare', L.flare, P => fFlare(P, car, L.flare), true);
  if (L.flap && arch) ad('flap', L.flap, P => fFlap(P, car, L.flap));
  if (L.tow) ad('tow', L.tow, P => fTow(P, car, L.tow));
  if (L.pods) ad('pods', L.pods + ':' + (L.lampc | 0), P => fPods(P, car, L.pods, L.lampc === 1));
  if (L.rack) ad('rack', L.rack, P => fRack(P, car, L.rack), true);
  if (L.snork) ad('snork', 1, P => fSnork(P));
  if (L.ant) ad('ant', L.ant, P => fAnt(P, L.ant));
  if (L.scoop >= 2) ad('roofvent', L.scoop, P => fRoofVent(P, L.scoop));
  if (L.bonnet) ad('bonnet', L.bonnet, P => fBonnet(P, L.bonnet));
  if (L.hl) ad('hl', L.hl, P => fHl(P, car, L.hl));
  if (L.pipe >= 2) ad('pipe', L.pipe, P => pipeTips(P, car, L.pipe), true);
}
export const carbonize = g => { if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); if (!g.attributes.normal) g.computeVertexNormals(); return triUV(g); };

// ---------------------------------------------------------------- more builders
const mirror = g => { g = keepAttrs(g); g.scale(-1, 1, 1); for (const n of ['position', 'normal', 'uv']) { const a = g.attributes[n], s = a.itemSize, arr = a.array; for (let t = 0; t < a.count; t += 3) for (let q = 0; q < s; q++) { const i1 = (t + 1) * s + q, i2 = (t + 2) * s + q, tmp = arr[i1]; arr[i1] = arr[i2]; arr[i2] = tmp; } a.needsUpdate = true; } return g; };
// a side profile (rearward distance, height) swept across the car's width; the result is centred on x = 0 and sits at z0
const prism = (pts, w, z0) => { const sh = new THREE.Shape(); pts.forEach(([a, b], i) => i ? sh.lineTo(a, b) : sh.moveTo(a, b)); const g = new THREE.ExtrudeGeometry(sh, { depth: w, bevelEnabled: false }); return g.applyMatrix4(new THREE.Matrix4().set(0, 0, 1, -w / 2, 0, 1, 0, 0, -1, 0, 0, z0, 0, 0, 0, 1)); };
const kS = P => clamp(P.W / 1.7, .8, 1.3);
const lampGeo = (r, items, x, y, z, tilt, lens) => {      // an auxiliary lamp: housing, chrome bezel, glowing lens, facing forward (+z)
  const hs = cyl(r, r * .86, r * 1.4, 16).rotateX(Math.PI / 2), bz = torus(r * .96, r * .07, 6, 18).translate(0, 0, r * .7), ln = cyl(r * .86, r * .86, r * .12, 16).rotateX(Math.PI / 2).translate(0, 0, r * .66), bk = rb(r * .5, r * .5, r * .8, .006).translate(0, 0, -r * .9);
  items.push([xf(hs, x, y, z, -tilt), 'housing'], [xf(bz, x, y, z, -tilt), 'chrome'], [xf(ln, x, y, z, -tilt), lens], [xf(bk, x, y, z, -tilt), 'housing']);
};
const torus = (R, r, tubular = 8, radial = 18) => new THREE.TorusGeometry(R, r, tubular, radial);
const noseSlope = (P, x, y) => { const a = P.noseZ(x - .05, y, 2), b = P.noseZ(x + .05, y, 2); return a == null || b == null ? 0 : (b - a) / .1; };

function fDiff(P, v) {
  const k = kS(P), y0 = P.lowR, zt = P.tailZ(0, y0 + .08, 2) ?? P.minZ, hw = clamp((P.sideX(1, zt + .06, y0 + .08, 2) ?? P.hx * .8) * .84, .3, P.hx), items = [], mat = v === 2 ? 'carbon' : 'dark';
  items.push([prism([[-.05, y0 + .13], [0, y0 + .125], [.14 * k, y0 + .012], [.14 * k, y0 - .012], [-.05, y0 + .0]], hw * 2, zt), mat]);
  const n = 5; for (let i = 0; i < n; i++) { const x = -hw * .8 + 1.6 * hw * i / (n - 1); items.push([xf(rb(.014, .085, .17 * k, .004), x, y0 + .003, zt - .06 * k), 'dark']); }
  items.push([xf(rb(hw * 2, .014, .02, .005), 0, y0 + .012, zt - .14 * k), mat]);
  return { part: 'diff', items };
}
function fCanard(P, v) {
  const items = [], mat = v === 1 ? 'dark' : v === 2 ? 'carbon' : 'paint', y1 = P.lowF + .14, zc = P.maxZ - .3, xo = (P.sideX(1, zc, y1, 2) ?? P.hx * .85);
  for (const [dy, sc] of [[0, 1], [.085, .8]]) { const y = y1 + dy, x0 = (P.sideX(1, zc, y, 2) ?? xo) - .04, pts = [[-.0, .14], [.05, .13], [.1 * sc, -.0], [.1 * sc, -.035], [0, -.13]], sh = new THREE.Shape();
    pts.forEach(([a, z], i) => i ? sh.lineTo(a, -z) : sh.moveTo(a, -z)); const g = new THREE.ExtrudeGeometry(sh, { depth: .012, bevelEnabled: true, bevelThickness: .002, bevelSize: .002, bevelSegments: 1 }).rotateX(-Math.PI / 2);
    xf(g, x0, y, zc, 0, 0, .0); g.rotateZ(0); items.push([g, mat], [mirror(g.clone()), mat]); }
  return { part: 'canard', items };
}
function archGeo(P, car, r, v) {
  const T = car.T, s = r.side, cy = (r.cy - (car.rideY || 0)) / T.h, cz = r.cz / T.l, Rc = r.Rc / T.l, tyreOut = r.xout / T.w, N = 40, A0 = 1.78, ring = [[.07, -.004], [.046, .03], [.02, .052], [.0, .05], [-.006, .004], [-.006, -.045]], NR = ring.length, pos = [], idx = [];
  let xp = null; const xs = [];
  for (let i = 0; i <= N; i++) { const a = -A0 + 2 * A0 * i / N, rr = Rc + .045, y = cy + rr * Math.cos(a), z = cz + rr * Math.sin(a); let x = P.sideX(s, z, y, 2); if (x == null) x = xp ?? (r.xpan / T.w); if (xp != null) x = xp + (x - xp) * .6; xp = x; xs.push(x); }
  for (let i = 0; i <= N; i++) { const a = -A0 + 2 * A0 * i / N, ca = Math.cos(a), sa = Math.sin(a), xb = xs[i], more = Math.max(0, tyreOut + .022 - (xb + .052)) * (Math.abs(a) < 1.45 ? 1 : .0);
    for (const [rho, dx] of ring) { const x = xb + (dx > .02 ? dx + more : dx); pos.push(s * x, cy + (Rc + rho) * ca, cz + (Rc + rho) * sa); } }
  for (let i = 0; i < N; i++) for (let j = 0; j < NR; j++) { const a = i * NR + j, b = i * NR + (j + 1) % NR, c = a + NR, d = b + NR; if (s > 0) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c); }
  for (const e of [0, N]) for (let j = 1; j < NR - 1; j++) { const a = e * NR, b = e * NR + j, c = e * NR + j + 1; if ((s > 0) === (e === 0)) idx.push(a, b, c); else idx.push(a, c, b); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
function fFlare(P, car, v) { const items = []; for (const r of car.archR || []) items.push([archGeo(P, car, r, v), v === 1 ? 'paint' : v === 2 ? 'rubber' : 'carbon']); return { part: 'flare', items }; }
function fFlap(P, car, v) {
  const items = [], T = car.T; for (const r of car.archR || []) { if (v === 1 && r.k[0] === 'F') continue; const s = r.side, cy = (r.cy - (car.rideY || 0)) / T.h, cz = r.cz / T.l, Rt = r.Rt / T.l, z = cz - Rt * 1.08 - .02, yt = cy - Rt * .25, yb = .075;
    let xo = P.sideX(s, z, yt, 3); if (xo == null) xo = r.xpan / T.w; const w = clamp(Rt * .62, .14, .22), h = yt - yb; if (h < .08) continue;
    const g = rb(w, h, .012, .004); xf(g, s * (xo - w / 2 - .012), (yt + yb) / 2, z, .07); items.push([g, 'rubber']);
    items.push([xf(rb(w * .96, .018, .022, .004), s * (xo - w / 2 - .012), yt - .005, z + .004), 'dark']); }
  return { part: 'flap', items };
}
function fTow(P, car, v) {
  const items = [], col = 'ano:' + PAL.tow[v], k = kS(P), y = P.lowF + .13, xf_ = clamp(P.hx * .38, .24, .5);
  const eye = (x, y0, zf, dir) => { items.push([xf(rb(.1, .07, .014, .004), x, y0, zf - dir * .004), 'dark'], [xf(cyl(.03, .034, .03, 14).rotateX(Math.PI / 2), x, y0, zf + dir * .014), col], [xf(torus(.046, .0115, 8, 20).rotateY(Math.PI / 2), x, y0, zf + dir * .05), col]); };
  for (const sx of [-1, 1]) eye(sx * xf_, y, (P.noseZ(sx * xf_, y, 2) ?? P.maxZ - .05) + .002, 1);
  const ex = car.exhL && car.exhL.length ? car.exhL[0][0] : 0.3, xr = (ex >= 0 ? -1 : 1) * clamp(P.hx * .36, .24, .45); eye(xr, P.lowR + .13, (P.tailZ(xr, P.lowR + .13, 2) ?? P.minZ + .05) - .002, -1);
  return { part: 'tow', items };
}
function fPods(P, car, v, amber) {
  const items = [], lens = amber ? 'lensA' : 'lens', k = kS(P);
  if (v === 1 || v === 3) { const z = P.zFE - .1, hwN = clamp(P.halfW(z, .09) * .92, .3, P.hx * .85), r = clamp(hwN * .17, .05, .075), xs = [-.72, -.26, .26, .72].map(f => f * hwN);
    let ymax = 0; for (let x = -hwN; x <= hwN; x += .05) ymax = Math.max(ymax, P.top_(x, z) ?? 0); const rail = ymax + .035;
    items.push([xf(rb(hwN * 2.05, .022, .045, .008), 0, rail, z - .005), 'housing']); for (const sx of [-1, 1]) items.push([xf(rb(.03, rail - (P.top_(sx * hwN * .96, z) ?? rail - .05) + .02, .04, .006), sx * hwN * .96, ((P.top_(sx * hwN * .96, z) ?? rail - .05) + rail + .02) / 2, z - .005), 'housing']);
    for (const x of xs) lampGeo(r, items, x, rail + r + .012, z + .02, .06, lens); }
  if (v === 2 || v === 3) { const z = P.roofZ1 - .11, hwR = clamp(P.halfW(z, .04) * .88, .28, P.hx * .8), r = clamp(hwR * .16, .05, .07), n = hwR > .5 ? 6 : 4, xs = []; for (let i = 0; i < n; i++) xs.push((-1 + (2 * i + 1) / n) * hwR * .86);
    let ymax = 0; for (let x = -hwR; x <= hwR; x += .05) ymax = Math.max(ymax, P.top_(x, z) ?? 0); const rail = ymax + .045;
    items.push([xf(rb(hwR * 2, .02, .04, .006), 0, rail, z), 'housing']); for (const sx of [-1, 1]) { const yb = P.top_(sx * hwR * .94, z) ?? rail - .06; items.push([xf(cyl(.014, .014, rail - yb + .02, 8), sx * hwR * .94, (rail + yb) / 2, z), 'housing']); }
    for (const x of xs) lampGeo(r, items, x, rail + r + .01, z + .03, .1, lens); }
  return { part: 'pods', items };
}
function fRack(P, car, v) {
  const items = [], zA = P.roofZ0 + .1, zB = P.roofZ1 - (v >= 3 ? .3 : .1), len = zB - zA; if (len < .35) return { part: 'rack', items };
  const zm = (zA + zB) / 2, hw = clamp(P.halfW(zm, .045) * .86, .25, P.hx * .8); let ys = 0; for (const z of [zA, zm, zB]) for (const x of [-hw, hw]) ys = Math.max(ys, P.top_(x, z) ?? 0); const ry = ys + .06;
  for (const sx of [-1, 1]) { items.push([xf(cyl(.0125, .0125, len, 8).rotateX(Math.PI / 2), sx * hw, ry, zm), 'dark']); for (const z of [zA, zm, zB]) { const yb = P.top_(sx * hw, z) ?? ry - .06; items.push([xf(cyl(.011, .011, ry - yb + .01, 8), sx * hw, (ry + yb) / 2 - .005, z), 'dark']); } }
  const nb = Math.max(3, Math.round(len / .17)); for (let i = 0; i < nb; i++) items.push([xf(cyl(.009, .009, hw * 2, 8).rotateZ(Math.PI / 2), 0, ry - .004, zA + len * i / (nb - 1)), 'dark']);
  items.push([xf(cyl(.0125, .0125, hw * 2, 8).rotateZ(Math.PI / 2), 0, ry, zA), 'dark'], [xf(cyl(.0125, .0125, hw * 2, 8).rotateZ(Math.PI / 2), 0, ry, zB), 'dark']);
  if (v >= 2) { const Rw = (car.R / car.T.wheel), rs = clamp(Rw * .96, .2, Math.min(len * .46, hw * .95)), th = rs * .34, zc = zA + rs + .04, yc = ry + .012 + th;
    items.push([xf(torus(rs - th, th, 12, 28).rotateX(Math.PI / 2), 0, yc, zc, 0, 0, 0, 1, .86, 1), 'rubber'], [xf(cyl(rs - th * .9, rs - th * .9, th * .7, 24), 0, yc + th * .18, zc), 'steel'], [xf(cyl(rs * .2, rs * .22, th * .9, 12), 0, yc + th * .3, zc), 'dark']);
    for (let i = 0; i < 5; i++) { const a = i * TAU / 5; items.push([xf(cyl(.014, .014, .014, 8), Math.cos(a) * rs * .34, yc + th * .54, zc + Math.sin(a) * rs * .34), 'chrome']); }
    for (const dz of [-.6, .6]) items.push([xf(rb(.02, .028, rs * .9, .005), 0, ry + .018, zc + dz * rs * .5), 'dark']); }
  if (v >= 3) { const r = clamp(hw * .15, .05, .065), n = hw > .5 ? 4 : 3, z = zB + .015; items.push([xf(rb(hw * 1.6, .02, .04, .006), 0, ry + .02, z), 'housing']); for (let i = 0; i < n; i++) lampGeo(r, items, (-1 + (2 * i + 1) / n) * hw * .78, ry + r + .03, z + .02, .08, 'lens'); }
  return { part: 'rack', items };
}
function fSnork(P) {
  const s = -1, zb = P.ws.z1, zt = P.ws.z0, gw = z => { let x = 0; while (x < P.hx && P.glass(x + CS, z)) x += CS; return Math.max(.25, x); }, pts = [];
  const X = (z, y) => Math.max(gw(z) + .05, (P.sideX(s, z, y, 2) ?? 0) + .04);
  for (const t of [0, .3, .6, .88, 1]) { const z = zb + (zt - zb) * t, yg = (P.top_(s * (gw(z) - .02), z) ?? P.roofY * .8) + .04; pts.push([s * X(z, yg), yg, z + .01]); }
  const L = pts[pts.length - 1]; pts[0][1] -= .06; pts.push([L[0], L[1] + .13, L[2] + .03], [L[0], L[1] + .2, L[2] + .12], [L[0], L[1] + .2, L[2] + .2]);
  const items = [[tube(pts, .028, 36, 10), 'dark']], e = pts[pts.length - 1];
  items.push([xf(cyl(.05, .034, .07, 14).rotateX(Math.PI / 2), e[0], e[1], e[2] + .03), 'dark'], [xf(new THREE.CircleGeometry(.044, 14), e[0], e[1], e[2] + .066), 'intake']);
  for (const q of [pts[1], pts[3]]) items.push([xf(rb(.02, .035, .035, .005), q[0] + .012 * -s, q[1], q[2]), 'housing']);
  return { part: 'snork', items };
}
function fAnt(P, v) {
  const items = [], z = P.roofZ0 + clamp((P.roofZ1 - P.roofZ0) * .14, .1, .22), hwR = P.halfW(z, .04);
  const whip = (x, lean, tipcol) => { const y = P.top_(x, z) ?? P.roofY, tip = [x + lean, y + .45, z - .1]; items.push([xf(cyl(.022, .026, .02, 10), x, y + .006, z), 'housing'], [tube([[x, y + .01, z], [x + lean * .3, y + .22, z - .03], tip], .0045, 10, 5), 'dark'], [xf(new THREE.SphereGeometry(.011, 8, 6), ...tip), tipcol || 'dark']); };
  if (v === 1) whip(clamp(hwR * .62, .12, .4), 0);
  else if (v === 3) { whip(-hwR * .62, -.05, 'flat:' + 0xff6a13); whip(hwR * .62, .05, 'flat:' + 0xff6a13); }
  else if (v === 2) { const zc = z + .14, y = P.top_(0, zc) ?? P.roofY; items.push([prism([[-.14, 0], [.12, 0], [.1, .028], [-.06, .07], [-.135, .05]], .036, zc).translate(0, y - .004, 0), 'dark']); }
  return { part: 'ant', items };
}
function fRoofVent(P, v) {
  const items = [], zr = P.roofZ1 - (P.roofZ1 - P.roofZ0) * .38, len = clamp((P.roofZ1 - P.roofZ0) * .22, .12, .26), hwR = P.halfW(zr, .035), w = clamp(hwR * (v === 3 ? .52 : .9), .14, .4), xs = v === 3 ? [-hwR * .5, hwR * .5] : [0];
  for (const xc of xs) { const zs = range(zr + len / 2, zr - len / 2, .02), g = patch(P, zs, () => [xc - w / 2, xc + w / 2], 6, .006, false); if (g) items.push([g, 'intake']);
    for (const sx of [-1, 1]) items.push([xf(rb(.018, .014, len + .018, .005), xc + sx * (w / 2 + .004), (P.top_(xc + sx * w / 2, zr) ?? P.roofY) + .01, zr), 'dark']);
    for (const dz of [-1, 1]) items.push([xf(rb(w + .03, .014, .018, .005), xc, (P.top_(xc, zr + dz * len / 2) ?? P.roofY) + .01, zr + dz * (len / 2 + .004)), 'dark']);
    for (let i = 0; i < 4; i++) items.push([xf(rb(w * .92, .01, .014, .004), xc, (P.top_(xc, zr) ?? P.roofY) + .012, zr - len / 2 + len * (i + .5) / 4), 'dark']); }
  return { part: 'scoop', items };
}
function fBonnet(P, v) {
  const items = [], z0 = P.ws.z1 + .03, z1 = P.zFE, len = z1 - z0; if (len < .3) return { part: 'bonnet', items };
  const hwB = z => Math.max(.2, P.halfW(z, .05) * .86), zc = z0 + len * .55;
  if (v === 1) { const hb = hwB(zc), w = clamp(hb * .5, .12, .3), lv = clamp(len * .3, .14, .32), n = 5;
    for (const sx of [-1, 1]) { const xc = sx * hb * .56, zs = range(zc + lv / 2, zc - lv / 2, .02), g = patch(P, zs, () => [xc - w / 2, xc + w / 2], 5, .005, false); if (g) items.push([g, 'intake']);
      for (let i = 0; i < n; i++) { const z = zc - lv / 2 + lv * (i + .5) / n, y = P.top_(xc, z) ?? P.bonY, m = ((P.top_(xc, z + .03) ?? y) - (P.top_(xc, z - .03) ?? y)) / .06; items.push([xf(rb(w * .96, .016, lv / n * .62, .005), xc, y + .018, z, -Math.atan(m) + .42), 'dark']); }
      for (const sz of [-1, 1]) items.push([xf(rb(w + .02, .014, .016, .005), xc, (P.top_(xc, zc + sz * lv / 2) ?? P.bonY) + .008, zc + sz * (lv / 2 + .004)), 'dark']); } }
  if (v === 2 || v === 4) { const zs = range(z1 - .04, z0 + .06, .02), g = patch(P, zs, z => [-hwB(z) * 1.04, hwB(z) * 1.04], 14, .006, false); if (g) items.push([g, 'carbon']); }
  if (v === 3 || v === 4) for (const [zz, f] of [[z1 - .1, .8], [z0 + .15, .84]]) for (const sx of [-1, 1]) { const x = sx * hwB(zz) * f, y = P.top_(x, zz) ?? P.bonY;
    items.push([xf(cyl(.03, .03, .008, 14), x, y + .004, zz), 'dark'], [xf(cyl(.0105, .0105, .034, 10), x, y + .02, zz), 'chrome'], [xf(new THREE.SphereGeometry(.014, 10, 6, 0, TAU, 0, Math.PI / 2), x, y + .036, zz), 'chrome'], [xf(torus(.026, .0035, 6, 14).rotateX(Math.PI / 2), x + sx * .02, y + .014, zz + .016), 'steel']); }
  return { part: 'bonnet', items };
}
function fHl(P, car, v) {
  const items = [], lamps = car.pd && car.pd.lampsF ? car.pd.lampsF : [], mat = v === 1 ? 'tape' : v === 2 ? 'tapeY' : 'dark';
  for (const [lx, ly, lz, lr] of lamps) { const zs = Math.max(lz, P.noseZ(lx, ly, 1) ?? lz) + .012, ph = -Math.atan(noseSlope(P, lx, ly)), r = lr * .9;
    if (v === 3) for (const dy of [-.55, 0, .55]) items.push([xf(rb(r * 2.1, .015, .018, .004), lx, ly + dy * r, zs + .008, 0, ph), mat]);
    else for (const a of [Math.PI / 4, -Math.PI / 4]) items.push([xf(rb(r * 1.8, .02, .005, .002), lx, ly, zs, 0, ph, a), mat]); }
  return { part: 'hl', items };
}
const NUMTEX = {};
function numMat(n) { const k = 'num:' + n; if (MATS[k]) return MATS[k]; const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.fillStyle = '#f4f4f0'; g.beginPath(); g.arc(64, 64, 62, 0, TAU); g.fill(); g.lineWidth = 4; g.strokeStyle = '#15171c'; g.beginPath(); g.arc(64, 64, 58, 0, TAU); g.stroke();
  g.fillStyle = '#15171c'; g.font = '900 ' + (n > 9 ? 70 : 88) + 'px Arial Black, Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(n), 64, 70); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (MATS[k] = new THREE.MeshStandardMaterial({ map: t, alphaTest: .5, roughness: .5, metalness: 0, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 })); }
function fNum(P, n) {
  const items = [], z0 = P.ws.z1 + .03, z1 = P.zFE, zc = (z0 + z1) / 2 + .02, hb = P.halfW(zc, .05) * .86, sz = clamp(Math.min(hb * 1.6, (z1 - z0) * .72), .2, .5), by = (g, m) => items.push([g, m]);
  const disc = (cx, cz, S) => { const zs = range(cz + S / 2, cz - S / 2, .025), nxc = 12, g = patch(P, zs, () => [cx - S / 2, cx + S / 2], nxc, .008, false); if (!g) return null; const pos = g.attributes.position, uv = new Float32Array(pos.count * 2); for (let i = 0; i < pos.count; i++) { uv[i * 2] = (pos.getX(i) - (cx - S / 2)) / S; uv[i * 2 + 1] = 1 - (cz + S / 2 - pos.getZ(i)) / S; } g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); return g; };
  const g1 = disc(0, zc, sz); if (g1) by(g1, 'num:' + n);
  const zr = (P.roofZ0 + P.roofZ1) / 2, hr = P.halfW(zr, .04), sr = clamp(Math.min(hr * 1.5, (P.roofZ1 - P.roofZ0) * .7), .2, .5); if (P.roofZ1 - P.roofZ0 > .5) { const g2 = disc(0, zr, sr); if (g2) by(g2, 'num:' + n); }
  return { part: 'num', items };
}
function pipeTips(P, car, v) {
  const items = [], k = kS(P); let spots = car.exhL && car.exhL.length ? car.exhL : null;
  if (!spots) { const y = P.lowR + .14; spots = [-1, 1].map(sx => { const x = sx * P.hx * .46; return [x, y, P.tailZ(x, y, 2) ?? P.minZ]; }); }
  for (const [x, y, z] of spots) {
    if (v === 2) { const r = .056 * k; items.push([xf(lathe([[r * .78, .06], [r * .96, .06], [r, .045], [r, -.05], [r * .9, -.062], [r * .78, -.05]], 22).rotateX(Math.PI / 2).scale(1, 1, 1), x, y, z - .0), 'titan'], [xf(cyl(r * .8, r * .8, .02, 18).rotateX(Math.PI / 2), x, y, z + .03), 'intake']); }
    else if (v === 3) for (const dx of [-.052, .052]) { const r = .038 * k; items.push([xf(lathe([[r * .8, .05], [r * 1.0, .05], [r * 1.06, .036], [r * 1.06, -.05], [r * .88, -.06], [r * .8, -.045]], 18).rotateX(Math.PI / 2), x + dx * k, y, z), 'carbon'], [xf(torus(r * .92, r * .12, 6, 16), x + dx * k, y, z - .056), 'chrome'], [xf(cyl(r * .8, r * .8, .02, 14).rotateX(Math.PI / 2), x + dx * k, y, z + .03), 'intake']); }
  }
  return { part: 'pipe', items };
}

// ---------------------------------------------------------------- finish, stance, brake discs: material numbers and one offset, no new shaders
const FIN = [null, { r: .26, m: .16, e: 1.15, cc: 1, ccr: .04 }, { r: .56, m: .2, e: .55, cc: .35, ccr: .5 }, { r: .88, m: .04, e: .22, cc: .02, ccr: .8 }, { r: .22, m: .42, e: 1.25, cc: 1, ccr: .06 }];
const DISC = [0x80848c, 0x1e1f23, 0xb79a52];
export function applyLook(car, L) {
  const f = FIN[L.fin | 0] || null, base = car._finBase || (car._finBase = new Map());
  const set = m => { if (!m || !m.isMeshStandardMaterial) return; if (!base.has(m)) base.set(m, { r: m.roughness, m: m.metalness, e: m.envMapIntensity, cc: m.clearcoat, ccr: m.clearcoatRoughness }); const b = base.get(m);
    m.roughness = f ? f.r : b.r; m.metalness = f ? f.m : b.m; m.envMapIntensity = f ? f.e : b.e; if (m.isMeshPhysicalMaterial) { m.clearcoat = f ? Math.max(.02, f.cc) : b.cc; m.clearcoatRoughness = f ? f.ccr : b.ccr; } };
  if (car.tex) for (const k in car.tex) set(car.tex[k]); if (car.vc) for (const k in car.vc) if (car.vc[k].userData.rc) set(car.vc[k]); set(car.m.paint);
  car.stanceY = L.stance === 1 ? -.032 : L.stance === 2 ? .075 : 0; car.chassis.position.y = (car.rideY || 0) + car.stanceY;
  car.m.disc.color.setHex(DISC[L.disc | 0] ?? DISC[0]); car.m.disc.metalness = L.disc === 1 ? .6 : .92;
}


// ---------------------------------------------------------------- rivals: a few cheap cosmetic parts at random (never a wing here; the caller keeps that rule)
// At most four geometry options per car (each is one to three merged meshes); everything else is a material number. No arch parts (they need a second dress pass).
export function aiCosmetics(spec) {
  const r = Math.random, pick = a => a[r() * a.length | 0], o = {};
  const opts = [[.5, () => { o.stripe = pick([1, 1, 2, 3, 4]); o.strc = pick([0, 1, 2, 3, 4, 6]); }], [.32, () => { o.roofc = pick([1, 2, 3, 4, 5, 6]); }], [.35, () => { o.tow = 1 + (r() * 5 | 0); }], [.3, () => { o.flap = 1; }],
    [.3, () => { o.canard = 1 + (r() * 3 | 0); }], [.3, () => { o.skirt = 1 + (r() * 3 | 0); }], [.25, () => { o.diff = 1 + (r() * 2 | 0); }], [.25, () => { o.pods = 1 + (r() * 3 | 0); o.lampc = r() < .4 ? 1 : 0; }],
    [.2, () => { o.hl = 1 + (r() * 3 | 0); }], [.28, () => { o.bonnet = pick([1, 2, 3, 4]); }], [.18, () => { o.ban = 1 + (r() * 7 | 0); }], [.15, () => { o.rack = 1; }], [.2, () => { o.ant = 1 + (r() * 3 | 0); }], [.18, () => { o.side = 1 + (r() * 3 | 0); o.strc = o.strc ?? pick([0, 2, 3, 4]); }]];
  let left = 4; for (const [p, f] of opts.sort(() => r() - .5)) if (left > 0 && r() < p) { f(); left--; }
  if (r() < .3) o.rim = 1 + (r() * 9 | 0); if (r() < .5) o.rimS = r() * 11 | 0; if (r() < .6) o.cal = r() * 8 | 0; if (r() < .3) o.tyreS = 1 + (r() * 6 | 0); if (r() < .55) o.fin = 1 + (r() * 4 | 0); if (r() < .2) o.stance = 1 + (r() * 2 | 0); if (r() < .3) o.disc = 1 + (r() * 2 | 0);
  if (spec && spec.wing) o.wing = 0;
  return o;
}
