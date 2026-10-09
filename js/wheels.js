// Premium wheels. Every wheel is built from the car's own measured size (tyre radius, tyre width, rim radius) so it fits its arch exactly:
//   - a tyre with a real cross-section (bead, rim protector, sidewall belly, shoulder, grooved tread) and a tread bump map;
//   - a rim with a barrel and lip, a recessed face and one of eight spoke designs, a polished lip ring, lug nuts and a centre cap;
//   - a ventilated brake disc that turns with the wheel, and a caliper that stays still behind it.
// Geometry is built with the axle along +X and the outside of the wheel facing +X; the right-hand wheels are mirrored by the car.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const TAU = Math.PI * 2;
export const RIM_STYLES = ['Classic 5-spoke', 'Rally 10-spoke', 'Mesh', 'Twin 7-spoke', 'Turbofan', 'Steel dish', 'Deep dish 6', 'Y-spoke', 'Aero disc', 'Split 5-spoke', 'Beadlock'];
export const TYRE_STYLES = ['Lettering', 'White wall', 'Red line', 'Yellow line', 'Blue line', 'Green line', 'Orange line'];
const TYRE_LINE = [0, 0xf2f2ee, 0xe3262e, 0xf2c200, 0x1c57c8, 0x2fb457, 0xff6a13];
export const CAL_COLS = [0xd22b2b, 0xf2c200, 0x1c57c8, 0x1a1b1e, 0xe8e8ea, 0xff6a13, 0x2fb457, 0x7b3fe4];

// ---- lathe about the axle: points are [radius, axial]; the result has its axis along X
function lathe(pts, seg) { const g = new THREE.LatheGeometry(pts.map(([r, a]) => new THREE.Vector2(r, a)), seg); g.rotateZ(-Math.PI / 2); return g; }
// ---- a Z-extruded shape (radial in X/Y, axial in Z) turned so that Z becomes the axle (+X)
const axle = g => g.rotateY(Math.PI / 2);

let TREAD = null;
export function treadTexture() {      // tread blocks as a bump map: chevron blocks either side of a centre rib, grooves between them
  if (TREAD) return TREAD; const c = document.createElement('canvas'); c.width = 64; c.height = 256; const k = c.getContext('2d'); k.fillStyle = '#5a5a5a'; k.fillRect(0, 0, 64, 256);
  k.fillStyle = '#d6d6d6'; k.fillRect(0, 112, 64, 32);                                              // centre rib
  for (const dir of [-1, 1]) for (let r = 0; r < 2; r++) { const y0 = dir < 0 ? 56 + r * 26 : 150 + r * 26; k.beginPath(); k.moveTo(2, y0 + (dir < 0 ? 0 : 20)); k.lineTo(62, y0 + (dir < 0 ? 18 : 2)); k.lineTo(62, y0 + (dir < 0 ? 38 : 22)); k.lineTo(2, y0 + (dir < 0 ? 20 : 40)); k.closePath(); k.fillStyle = '#ececec'; k.fill(); }
  k.fillStyle = '#7a7a7a'; for (let y = 0; y < 52; y += 7) k.fillRect(0, y, 64, 2); for (let y = 204; y < 256; y += 7) k.fillRect(0, y, 64, 2);   // fine ribs on the shoulders
  TREAD = new THREE.CanvasTexture(c); TREAD.wrapS = TREAD.wrapT = THREE.RepeatWrapping; TREAD.repeat.set(34, 1); TREAD.anisotropy = 4; return TREAD;
}

function tyreGeo(R, W, rr, seg) {
  const h = W / 2, sh = R - rr, neg = [[rr * .965, -.6 * h], [rr * 1.012, -.8 * h], [rr + sh * .07, -.93 * h], [rr + sh * .2, -.985 * h], [rr + sh * .5, -h], [rr + sh * .78, -.985 * h], [R - sh * .12, -.93 * h], [R - sh * .045, -.82 * h], [R - sh * .012, -.7 * h]];
  const tread = [[R, -.6 * h], [R, -.5 * h], [R * .984, -.47 * h], [R * .984, -.39 * h], [R, -.36 * h], [R, -.2 * h], [R * .985, -.17 * h], [R * .985, .17 * h], [R, .2 * h], [R, .36 * h], [R * .984, .39 * h], [R * .984, .47 * h], [R, .5 * h], [R, .6 * h]];
  const pos = neg.map(([r, a]) => [r, -a]).reverse(), g = lathe([...neg, ...tread, ...pos], seg), P = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < P.count; i++) { const x = P.getX(i), y = P.getY(i), z = P.getZ(i); uv.setXY(i, Math.atan2(z, y) / TAU + .5, x / W + .5); }      // u around the tyre, v across it: the tread bump map lines up
  return g;
}
function barrelGeo(rr, Wr, seg, deep) {
  const h = Wr / 2, d = deep ? .86 : .9; return lathe([[rr * d, -h], [rr * .985, -h], [rr * 1.02, -h * .94], [rr * 1.0, -h * .82], [rr * .93, -h * .66], [rr * d, -h * .3], [rr * d, h * .3], [rr * .93, h * .66], [rr * 1.0, h * .82], [rr * 1.022, h * .94], [rr * .985, h], [rr * .96, h * .985]], seg);
}
function lipGeo(rr, Wr, seg) { const h = Wr / 2; return lathe([[rr * .975, h * .86], [rr * 1.03, h * .93], [rr * 1.03, h * .99], [rr * .985, h * 1.002], [rr * .965, h * .98]], seg); }

// one curved spoke: a centre line that may twist, a width that tapers; extruded with a small bevel
function spoke(rIn, rOut, wIn, wOut, twist, depth, bev, phase = 0) {
  const n = 10, L = [], Rr = [], C = []; for (let i = 0; i <= n; i++) { const t = i / n, r = rIn + (rOut - rIn) * t, ph = phase + twist * t * t * (3 - 2 * t); C.push([r * Math.cos(ph), r * Math.sin(ph)]); }
  for (let i = 0; i <= n; i++) { const a = C[Math.max(0, i - 1)], b = C[Math.min(n, i + 1)], tx = b[0] - a[0], ty = b[1] - a[1], l = Math.hypot(tx, ty) || 1, w = (wIn + (wOut - wIn) * (i / n)) / 2 - bev; L.push([C[i][0] - ty / l * w, C[i][1] + tx / l * w]); Rr.push([C[i][0] + ty / l * w, C[i][1] - tx / l * w]); }
  const sh = new THREE.Shape(); sh.moveTo(L[0][0], L[0][1]); for (let i = 1; i <= n; i++) sh.lineTo(L[i][0], L[i][1]); for (let i = n; i >= 0; i--) sh.lineTo(Rr[i][0], Rr[i][1]); sh.closePath();
  return new THREE.ExtrudeGeometry(sh, { depth: Math.max(.002, depth - bev * 2), bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 1 });
}
const ring = (g, n, ang0 = 0) => { const out = []; for (let k = 0; k < n; k++) out.push(g.clone().rotateZ(ang0 + k * TAU / n)); return out; };

// The face of the rim for each design. front = axial position of the visible surface; all are built facing +Z and turned onto the axle afterwards.
function faceGeos(style, rr, Wr, seg) {
  const front = Wr * (style === 6 ? .27 : .43), dep = Wr * (style === 5 || style === 10 ? .09 : .17), bev = rr * .012, z0 = front - dep, parts = [];
  const add = (gs, dz = 0) => { for (const g of gs) { g.translate(0, 0, z0 + dz + bev); parts.push(g); } };
  switch (style) {
    case 0: add(ring(spoke(rr * .16, rr * .93, rr * .36, rr * .20, .16, dep, bev), 5)); break;                                               // classic five-spoke, tapering, with a slight sweep
    case 1: add(ring(spoke(rr * .16, rr * .93, rr * .14, rr * .1, .1, dep, bev), 10)); break;                                                // rally ten-spoke
    case 2: add(ring(spoke(rr * .24, rr * .93, rr * .085, rr * .07, .36, dep * .8, bev * .7), 12)); add(ring(spoke(rr * .24, rr * .93, rr * .085, rr * .07, -.36, dep * .8, bev * .7), 12), -dep * .2); break;   // cross-spoke mesh
    case 3: for (const o of [-.1, .1]) add(ring(spoke(rr * .16, rr * .93, rr * .11, rr * .085, .08, dep, bev, o), 7)); break;                // twin seven-spoke
    case 4: add(ring(spoke(rr * .18, rr * .93, rr * .34, rr * .26, 1.15, dep * .9, bev), 12)); break;                                          // turbofan blades
    case 6: add(ring(spoke(rr * .17, rr * .93, rr * .3, rr * .27, .05, dep, bev), 6)); break;                                                  // deep dish, chunky six
    case 7: { add(ring(spoke(rr * .16, rr * .56, rr * .24, rr * .19, 0, dep, bev), 5)); add(ring(spoke(rr * .5, rr * .93, rr * .15, rr * .11, .42, dep, bev), 5)); add(ring(spoke(rr * .5, rr * .93, rr * .15, rr * .11, -.42, dep, bev), 5)); break; }   // Y-spoke
    case 8: {                                                                                                                                   // aero disc: a near-solid dish cut with twelve swept turbine slots
      const sh = new THREE.Shape(); sh.absarc(0, 0, rr * .93, 0, TAU, false);
      for (let k = 0; k < 12; k++) { const a = k * TAU / 12, pts = [], n = 6; for (let i = 0; i <= n; i++) { const r = rr * (.4 + .46 * i / n), ph = a + .34 * (i / n) - .1 - .02 * i / n; pts.push([r * Math.cos(ph), r * Math.sin(ph)]); } for (let i = n; i >= 0; i--) { const r = rr * (.4 + .46 * i / n), ph = a + .34 * (i / n) + .1 + .0 * i; pts.push([r * Math.cos(ph), r * Math.sin(ph)]); }
        const p = new THREE.Path(); pts.forEach(([x, y], i) => i ? p.lineTo(x, y) : p.moveTo(x, y)); p.closePath(); sh.holes.push(p); }
      add([new THREE.ExtrudeGeometry(sh, { depth: dep * .8, bevelEnabled: true, bevelThickness: bev, bevelSize: bev * .8, bevelSegments: 2, curveSegments: 20 })]); break; }
    case 9: for (const o of [-.14, .14]) add(ring(spoke(rr * .16, rr * .93, rr * .15, rr * .12, 0, dep, bev, o), 5)); break;                       // split five-spoke: each spoke is a pair
    case 10: {                                                                                                                                  // beadlock rally wheel: dished steel, eight lightening holes, a ring of bolts on the outer lip
      const sh = new THREE.Shape(); sh.absarc(0, 0, rr * .93, 0, TAU, false); const hole = (x, y, r) => { const p = new THREE.Path(); p.absarc(x, y, r, 0, TAU, true); sh.holes.push(p); };
      for (let k = 0; k < 8; k++) hole(Math.cos(k * TAU / 8 + .2) * rr * .62, Math.sin(k * TAU / 8 + .2) * rr * .62, rr * .105); hole(0, 0, rr * .1); add([new THREE.ExtrudeGeometry(sh, { depth: dep, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 20 })]);
      for (let k = 0; k < 24; k++) { const a = k * TAU / 24; parts.push(new THREE.CylinderGeometry(rr * .026, rr * .026, rr * .05, 6).rotateX(Math.PI / 2).translate(Math.cos(a) * rr * .955, Math.sin(a) * rr * .955, front + rr * .014)); } break; }
    case 5: {                                                                                                                                   // steel dish with six holes
      const sh = new THREE.Shape(); sh.absarc(0, 0, rr * .93, 0, TAU, false); const hole = (x, y, r) => { const p = new THREE.Path(); p.absarc(x, y, r, 0, TAU, true); sh.holes.push(p); };
      for (let k = 0; k < 6; k++) hole(Math.cos(k * TAU / 6) * rr * .58, Math.sin(k * TAU / 6) * rr * .58, rr * .15); hole(0, 0, rr * .12); add([new THREE.ExtrudeGeometry(sh, { depth: dep, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 20 })]); break; }
  }
  const g = mergeGeometries(parts.map(p => p.index ? p.toNonIndexed() : p), false); return { g: axle(g), front, z0, dep };
}

const cache = new Map();
// Returns the geometry set for one wheel size and design (shared by every wheel with the same size).
export function wheelGeos(R, W, rr, style, seg) {
  const key = [R, W, rr].map(v => v.toFixed(3)).join('|') + '|' + style + '|' + seg; if (cache.has(key)) return cache.get(key);
  const Wr = W * .84, deep = style === 6, f = faceGeos(style, rr, Wr * (deep ? 1.1 : 1), seg), hubR = rr * .23, hubH = Wr * .14;
  const tyre = tyreGeo(R, W, rr, seg), barrel = barrelGeo(rr, Wr, seg, deep), lip = lipGeo(rr, Wr, seg);
  const cap = axle(new THREE.CylinderGeometry(hubR, hubR * 1.08, hubH, 28).rotateX(Math.PI / 2).translate(0, 0, f.front - hubH * .35)), capRing = axle(new THREE.TorusGeometry(hubR * .78, rr * .012, 6, 28).translate(0, 0, f.front + hubH * .13));
  const nuts = []; const nn = style === 3 || style === 1 || style === 7 ? 5 : style === 5 || style === 6 ? 6 : 5; for (let k = 0; k < nn; k++) { const a = k * TAU / nn + .3; nuts.push(new THREE.CylinderGeometry(rr * .036, rr * .042, rr * .05, 6).rotateX(Math.PI / 2).translate(Math.cos(a) * rr * .36, Math.sin(a) * rr * .36, f.front + rr * .004)); }
  const nutG = axle(mergeGeometries(nuts, false));
  const t = Wr * .035, disc = lathe([[rr * .44, -t - Wr * .12], [rr * .87, -t - Wr * .12], [rr * .87, t - Wr * .12], [rr * .44, t - Wr * .12], [rr * .44, -t - Wr * .12]], seg), hat = lathe([[rr * .04, -Wr * .2], [rr * .44, -Wr * .2], [rr * .44, -Wr * .08], [rr * .26, -Wr * .02], [rr * .04, -Wr * .02]], seg);
  // the caliper: an arc-shaped block that straddles the disc, built to stay still while the wheel turns (placed by the car, not spun)
  const cs = new THREE.Shape(), a0 = -.42, a1 = .42, r0 = rr * .5, r1 = rr * .86; cs.moveTo(r0 * Math.cos(a0), r0 * Math.sin(a0)); cs.lineTo(r1 * Math.cos(a0), r1 * Math.sin(a0)); cs.absarc(0, 0, r1, a0, a1, false); cs.lineTo(r0 * Math.cos(a1), r0 * Math.sin(a1)); cs.absarc(0, 0, r0, a1, a0, true);
  const caliper = axle(new THREE.ExtrudeGeometry(cs, { depth: Wr * .24, bevelEnabled: true, bevelThickness: rr * .015, bevelSize: rr * .015, bevelSegments: 2, curveSegments: 8 }).translate(0, 0, -Wr * .24 - Wr * .02 + Wr * .0));
  const rimMetal = mergeGeometries([barrel, f.g].map(g => g.index ? g.toNonIndexed() : g), false), steel = mergeGeometries([lip, nutG, capRing].map(g => g.index ? g.toNonIndexed() : g), false);
  const set = { tyre, rim: rimMetal, steel, cap, disc: mergeGeometries([disc, hat].map(g => g.index ? g.toNonIndexed() : g), false), caliper }; cache.set(key, set); return set;
}

// Builds the two groups of one wheel. 'spin' turns with the wheel; 'still' holds the caliper and stays put. mats supplies the materials by kind.
export function buildWheel(R, W, rr, style, seg, mats, left) {
  const G = wheelGeos(R, W, rr, style, seg), spin = new THREE.Group(), still = new THREE.Group(), mk = (g, kind, grp) => { const m = new THREE.Mesh(g, mats[kind]); m.userData.kind = kind; m.castShadow = kind === 'tire'; (grp || spin).add(m); return m; };
  mk(G.tyre, 'tire'); mk(G.rim, 'rim7'); mk(G.steel, 'steelm'); mk(G.cap, 'cap'); mk(G.disc, 'disc'); mk(G.caliper, 'caliper', still);
  still.children[0].rotation.x = Math.PI * (-.55);      // up and to the rear of the disc, where a real caliper sits
  const sx = left ? 1 : -1; spin.scale.x = sx; still.scale.x = sx; spin.userData.dims = still.userData.dims = { R, W, rr }; return { spin, still };
}

// Sidewall decals: lettering, a white wall, or a coloured line, sized from the tyre's own profile.
export function sidewallDecals(spin, R, W, rr, style, lettering) {
  for (const c of [...spin.children]) if (c.userData.decal) { spin.remove(c); c.geometry.dispose(); }
  const h = W / 2, sh = R - rr, x = h * .995 + .0035;
  const ringAt = (r0, r1, mat) => { for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 56, 1).rotateY(s * Math.PI / 2), mat); m.position.x = s * x; m.userData.decal = 1; spin.add(m); } };
  if (style === 0) { const rout = Math.min(R * .985, (rr + sh * .62) / .88); for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.RingGeometry(rr + sh * .2, rout, 56, 1).rotateY(s * Math.PI / 2), lettering); m.position.x = s * x; m.userData.decal = 1; spin.add(m); } return; }
  const flat = c => new THREE.MeshBasicMaterial({ color: c, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide });
  if (style === 1) ringAt(rr + sh * .2, rr + sh * .66, flat(0xf2f2ee)); else ringAt(rr + sh * .5, rr + sh * .58, flat(TYRE_LINE[style] ?? 0xf2c200));
}
