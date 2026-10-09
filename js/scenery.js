// The circuit's surroundings: trackside houses and farms, grandstands, the paddock behind the pit garages, car parks full of cars, race furniture (cones, tyre walls, fences, billboards,
// floodlight towers) and, through scn_live.js, trees, wind, flags, smoke, birds, a blimp and a helicopter. Everything static is merged into one mesh per 100 m cell (scn_geo.js).
// Positions use the track path offsets: x = p.x + p.tz * off, z = p.z - p.tx * off (positive = the driver's left). Nothing is placed inside the barriers (B = half-width + run-off).
import * as THREE from 'three';
import { atlas, sceneMaterial, Chunks, MB, lin, TILE, NSIGN } from './scn_geo.js';
import { templates } from './scn_tpl.js';
import { buildLive } from './scn_live.js';

const TAU = Math.PI * 2;
const CARC = [0xe9e9e9, 0x1b1d22, 0xa9adb3, 0xb02020, 0x1d3f7a, 0xdad6c8, 0x2b5a3a, 0xf0c020, 0xe86a1c, 0x6a2f84, 0x20a0b0, 0x8a8f96, 0xf4f4f4, 0x30343a, 0xc9a24a].map(c => lin(c));
const WALLS = {
  day: [0xf0e6d0, 0xe9d8b4, 0xd9e2e8, 0xecd0c4, 0xf4f2ec, 0xd5dcc8, 0xe8c9a0, 0xc9d3dc, 0xf3e3b8].map(c => lin(c)),
  desert: [0xeed9ae, 0xe2c590, 0xf1e6c8, 0xd9b985, 0xf4efe0, 0xe9c9a0].map(c => lin(c)),
  coast: [0xffffff, 0xf6efe0, 0xcfe3f0, 0xf4d9c0, 0xe6f0ea, 0xf3e0e4, 0xfbe7a8].map(c => lin(c)),
  night: [0x8d8a84, 0x9b9a96, 0xaaa59a, 0x77767a].map(c => lin(c)) };
const ROOFS = { day: [0xb4532f, 0xa04a2c, 0x6d554a, 0x555a64, 0x8a3a2e, 0xc2693e].map(c => lin(c)), desert: [0xcfc2a2, 0xd9cfae, 0xbfae88].map(c => lin(c)), coast: [0xc2693e, 0xb4532f, 0xf1f1ee, 0x4c7ba8].map(c => lin(c)), night: [0x555a64, 0x3d4047].map(c => lin(c)) };
const TEAM = [0xe3262e, 0x1c57c8, 0xffc21a, 0x2fb457, 0xf3f4f6, 0x19a7ce, 0xff7a1a, 0x7b3fe4].map(c => lin(c));
const SHIRT = [0xe3262e, 0x19a7ce, 0xffc21a, 0xf3f4f6, 0x2fb457, 0xff7ab0, 0x7b3fe4, 0x1c57c8, 0xff7a1a, 0x2a2d33, 0x9fd14a, 0xb8322a, 0x3a8a8a, 0xe9e1c8].map(c => new THREE.Color(c));
const SKIN = [0xf1c9a5, 0xd9a577, 0xa8703f, 0x7a4a2b].map(c => new THREE.Color(c));

class Occ {      // circles in a spatial hash
  constructor() { this.m = new Map(); this.cs = 16; }
  _cells(x, z, r, f) { const c = this.cs, x0 = Math.floor((x - r) / c), x1 = Math.floor((x + r) / c), z0 = Math.floor((z - r) / c), z1 = Math.floor((z + r) / c); for (let a = x0; a <= x1; a++) for (let b = z0; b <= z1; b++) f(a + ',' + b); }
  add(x, z, r) { const it = { x, z, r }; this._cells(x, z, r, k => { let l = this.m.get(k); if (!l) this.m.set(k, l = []); l.push(it); }); }
  free(x, z, r) { let ok = true; this._cells(x, z, r, k => { if (!ok) return; const l = this.m.get(k); if (l) for (const it of l) if ((it.x - x) ** 2 + (it.z - z) ** 2 < (it.r + r) ** 2) { ok = false; return; } }); return ok; }
}

export function buildScenery(ctx) {
  const { track, path, n, B, hw, def, G, rnd, night, desert, day, coast, pitSide, pitL, inPit, people, cull, movers, uT, CK } = ctx;
  const Dn = Math.max(.35, Math.min(1, (CK || .6) / .6)), low = Dn < .5;
  const lib = templates(), atl = atlas(night), mat = sceneMaterial(atl), matCut = sceneMaterial(atl, { cut: true });
  const ch = new Chunks(), chCut = new Chunks(), occ = new Occ(), th = night ? 'night' : desert ? 'desert' : coast ? 'coast' : 'day';
  const stats = { houses: 0, cars: 0, cones: 0, tyres: 0, props: 0 };
  const pick = a => a[Math.floor(rnd() * a.length) % a.length], R = (a, b) => a + rnd() * (b - a);
  const A = i => path[((i % n) + n) % n], hgt = (x, z) => track.height(x, z) || 0;
  const offP = (p, o) => [p.x + p.tz * o, p.z - p.tx * o], yawT = (p, s) => Math.atan2(-s * p.tz, s * p.tx), yawA = p => Math.atan2(p.tx, p.tz);
  const put = (tpl, x, z, yaw, s = 1, tn = null, y = 0, sy = s) => { ch.place(tpl, x, y + hgt(x, z), z, yaw, s, tn, sy); stats.props++; };
  const putCut = (tpl, x, z, yaw, s = 1) => chCut.place(tpl, x, hgt(x, z), z, yaw, s, null, s);
  // ---- how far is a spot from the road, and from the pit lane?
  const nh = new Map(), NC = 48; path.forEach((p, i) => { const k = Math.floor(p.x / NC) + ',' + Math.floor(p.z / NC); let l = nh.get(k); if (!l) nh.set(k, l = []); l.push(p); });
  const tdist = (x, z) => { let b = 1e9; const cx = Math.floor(x / NC), cz = Math.floor(z / NC); for (let a = -1; a <= 1; a++) for (let c = -1; c <= 1; c++) { const l = nh.get((cx + a) + ',' + (cz + c)); if (l) for (const p of l) { const d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < b) b = d; } } return Math.sqrt(b); };
  const PL_ = pitL ? pitL.L.filter((_, q) => q % 2 === 0) : [], pdist = (x, z) => { let b = 1e9; for (const l of PL_) { const d = (l.x - x) ** 2 + (l.z - z) ** 2; if (d < b) b = d; } return Math.sqrt(b); };
  const okT = (x, z, r, ex = 0) => tdist(x, z) >= B + 3.5 + r + ex && (!pitL || pdist(x, z) >= 21 + r + ex);
  const free = (x, z, r) => okT(x, z, r) && occ.free(x, z, r);
  track.scnFree = (x, z, r) => occ.free(x, z, r) && (!pitL || pdist(x, z) > 21 + r);
  const claim = ctx.claim;
  // ---- zones along the path, in blocks of ~90 m, differing per side
  const sk = def.id.length * 7.31 + def.id.charCodeAt(0) * .37 + def.id.charCodeAt(def.id.length - 1) * .11;
  const hash = (a, b) => { const v = Math.sin(a * 127.1 + b * 311.7 + sk) * 43758.5453; return v - Math.floor(v); };
  const WZ = { day: [['houses', .26], ['forest', .3], ['farm', .16], ['open', .2], ['industrial', .04], ['road', .04]], desert: [['houses', .2], ['open', .4], ['farm', .1], ['industrial', .12], ['road', .06], ['forest', .12]], coast: [['houses', .34], ['forest', .2], ['open', .18], ['industrial', .1], ['road', .08], ['farm', .1]], night: [['industrial', .35], ['road', .25], ['open', .4]] }[th];
  const zoneAt = (i, s) => { let h = hash(Math.floor(i / 44), s * 3.3); for (const [z, w] of WZ) { if (h < w) return z; h -= w; } return 'open'; };
  track.zoneAt = zoneAt;
  const along = (i0, i1, step, fn) => { const st = Math.max(1, Math.round(step / (track.spacing || 2))); for (let i = i0; i <= i1; i += st) fn(A(i), i); };

  // ============================================================= the paddock behind the pit garages
  const paddockCars = [];
  if (pitL) {
    const L = pitL.L, qa = pitL.qa, qb = pitL.qb, fr = (q, d) => { const l = L[Math.max(0, Math.min(L.length - 1, Math.round(q)))]; return { x: l.x + l.nx * d, z: l.z + l.nz * d, ya: Math.atan2(l.tx, l.tz), yf: Math.atan2(-l.nx, -l.nz), l }; };
    const q0 = qa + 6, q1 = qb - 6, Lm = (L[q1].s - L[q0].s) || 100, pitchQ = Math.max(1, (q1 - q0) / Math.max(1, Lm));      // lane nodes per metre
    const at = (s, d) => fr(q0 + s * pitchQ, d);
    const reg = (x, z, r) => occ.add(x, z, r);
    // row A: team transporters, nose to the pit exit
    for (let s = 6, k = 0; s < Lm - 10; s += 15.5, k++) { if (rnd() < .12) continue; const f = at(s, 25.5), tn = [TEAM[k % 8]]; if (!okT(f.x, f.z, 8, -6)) continue; put(rnd() < .75 ? lib.transporter : lib.truck, f.x, f.z, f.ya + (rnd() < .5 ? 0 : 0), 1, tn); reg(f.x, f.z, 7.5); paddockCars.push(f); }
    // row B: tents and motorhomes; a hospitality building in the middle
    for (let s = 8, k = 0; s < Lm - 14; s += 13, k++) { const f = at(s, 37), r = rnd();
      if (Math.abs(s - Lm / 2) < 20) continue;
      if (r < .45) { const m = pick(lib.marquee), tn = [lin(0xffffff), TEAM[(k + 2) % 8]]; put(m, f.x, f.z, f.yf, 1, tn); reg(f.x, f.z, 8); }
      else if (r < .8) { put(lib.bus, f.x, f.z, f.ya, 1, [lin(0xf4f4f2)]); reg(f.x, f.z, 6.5); }
      else { put(lib.gazebo, f.x, f.z, f.ya, 1, [lin(0xffffff), TEAM[k % 8]]); reg(f.x, f.z, 3); } }
    { const f = at(Lm / 2, 40); put(pick(lib.hospitality), f.x, f.z, f.yf, 1, [lin(0xe9edf2)]); reg(f.x, f.z, 20);
      // a terrace in front of it: umbrellas and tables
      for (let k = -3; k <= 3; k++) { const g = at(Lm / 2 + k * 4.5, 33.2); put(lib.umb, g.x, g.z, rnd() * TAU, 1, [lin(0xe3262e), TEAM[(k + 4) % 8]]); } }
    // row C: workshops with open roller doors, tool carts, jacks, a car on its trolley
    for (let s = 10, k = 0; s < Lm - 16; s += 22, k++) { const f = at(s, 51), tn = [lin(0xe9e9e4)]; put(lib.shedOpen, f.x, f.z, f.yf, 1.45, tn); reg(f.x, f.z, 10);
      const g = at(s, 51 - 4.6 * 1.45 - 1.4); put(lib.f1, g.x, g.z, g.ya + 1.5708, 1, [TEAM[k % 8]]); put(lib.toolCart, g.x + g.l.tx * 3, g.z + g.l.tz * 3, g.ya + .3); put(lib.toolCart, g.x - g.l.tx * 3, g.z - g.l.tz * 3, g.ya - .4); put(lib.jack, g.x + g.l.tx * 1.8, g.z + g.l.tz * 1.8, g.ya + 1.57);
      put(lib.tyre3, g.x + g.l.tx * 5.5, g.z + g.l.tz * 5.5, 0); put(lib.tyre3, g.x + g.l.tx * 6.5, g.z + g.l.tz * 6.5 + .6, 0); put(lib.tyre2, g.x + g.l.tx * 6, g.z + g.l.tz * 6 - .9, 0); put(lib.drums, g.x - g.l.tx * 5, g.z - g.l.tz * 5, 0); put(lib.gen, g.x - g.l.tx * 6, g.z - g.l.tz * 6 + .4, g.ya);
      ctx.crew && ctx.crew.push({ x: g.x + g.l.tx * 2.4, z: g.z + g.l.tz * 2.4, face: g.ya + 3.14 }, { x: g.x - g.l.tx * 2.4, z: g.z - g.l.tz * 2.4, face: g.ya }); }
    // service vehicles between the rows; stacks of tyres and a parts rack
    for (let s = 12; s < Lm - 12; s += 31) { const f = at(s, 30.4); put(rnd() < .5 ? lib.golf : lib.fork, f.x, f.z, f.ya + R(-.6, .6), 1, [lin(0xf4f4f2)]); put(lib.partsRack, f.x + f.l.tx * 3, f.z + f.l.tz * 3, f.ya); }
    // the paddock fence and its hoardings, light poles
    for (let s = 0; s < Lm; s += 6) { const f = at(s, 64); putCut(lib.fenceMesh, f.x, f.z, f.ya); put(lib.fence, f.x, f.z, f.ya); if (s % 18 === 0) put(lib.lightPole9, f.x, f.z, f.yf); }
    for (let s = 6; s < Lm - 6; s += 18) { const f = at(s, 5); void f; }
    // timing tower at the line end of the paddock, facing the lane
    { const f = at(Lm * .12, 22); void f; }
    // the hospitality/timing tower stands behind the garages near the start line (index 0 of the track)
    { const q = L.findIndex(l => l.i === 0), qq = q >= 0 ? q : Math.round(q0 + Lm * .2), f = fr(qq, 22 + 10); if (okT(f.x, f.z, 9, -6)) { put(lib.timing, f.x, f.z, f.yf, 1, [lin(0xdde6ee)]); reg(f.x, f.z, 10); track.timingTower = { x: f.x, z: f.z, y: 5 * 3.2 + 2, yaw: f.yf }; } }
    reg(L[Math.round((qa + qb) / 2)].x, L[Math.round((qa + qb) / 2)].z, 4);
  }

  // ============================================================= grandstands
  const standList = [], crowdOut = [];
  const sRows = (len, rows, o = {}) => {
    const mb = new MB(), dz = 1.0, rh = .5, z0 = 1.0, tot = rows * dz;
    for (let i = 0; i < rows; i++) { const y1 = rh * (i + 1), y0 = i ? rh * i : 0, zc = z0 - i * dz - dz / 2;
      mb.slab(0, y0, y1, len, -dz / 2, dz / 2, len, -dz / 2, dz / 2, zc, 0xffffff, { tile: 'conc', top: i % 2 ? 'seatB' : 'seatA', sides: 'f', topCol: 0xffffff });
      for (const sx of [-1, 1]) mb.quad([sx * len / 2, 0, zc + sx * dz / 2 * -1], [sx * len / 2, 0, zc - sx * dz / 2 * -1], [sx * len / 2, y1, zc - sx * dz / 2 * -1], [sx * len / 2, y1, zc + sx * dz / 2 * -1], 0xb4b4b0, 'conc', 1, 1, 0); }
    const H = rh * rows, zb = z0 - tot;
    mb.box(0, 0, zb - .15, len, H + 1.1, .3, 0xffffff, { tile: 'conc', tile2: 'conc', topFace: true, top: 'conc' });                  // back wall with parapet
    for (let x = -len / 2 + 6; x < len / 2 - 3; x += 12) for (let i = 0; i < rows; i++) mb.quad([x, rh * (i + 1) + .012, z0 - i * dz], [x + 1.1, rh * (i + 1) + .012, z0 - i * dz], [x + 1.1, rh * (i + 1) + .012, z0 - i * dz - dz], [x, rh * (i + 1) + .012, z0 - i * dz - dz], 0x9c9ea4, 'conc', 1, 1, 0);       // aisle
    // front hoarding, sponsor boards
    const seg = 6; for (let x = -len / 2, k = 0; x < len / 2 - .01; x += seg, k++) { const w = Math.min(seg, len / 2 - x); mb.quad([x, .3, z0 + .12], [x + w, .3, z0 + .12], [x + w, 1.3, z0 + .12], [x, 1.3, z0 + .12], 0xffffff, 'sign' + ((k + (o.sg || 0)) % 6), w / seg, 1, 0); }
    mb.box(0, 0, z0 + .06, len, .3, .12, 0xcfd0d2, {});
    if (o.roof) { const Hh = H + 3.6, zf = z0 - tot * .25, zr = zb - 1.2; mb.box(0, Hh, (zf + zr) / 2, len + .6, .3, zf - zr, 0xf2f2f0, { tile: 'metal', tile2: 'metal', top: 'metal', topCol: 0xe6e6e8 });
      for (let x = -len / 2 + 1; x <= len / 2; x += 10) { mb.box(x, 0, zb - .6, .45, Hh, .45, 0xe4e4e6, {}); mb.slab(x, Hh - 1.2, Hh, .3, zb - .6, zb - .6, .3, zb - .6, zr + (zf - zr) * .3, 0, 0xcfd0d2, {}); }
      mb.box(0, Hh - .1, zf - .08, len + .6, .5, .16, 0xd9232c, {}); }
    for (let x = -len / 2; x <= len / 2; x += 4) mb.box(x, 0, z0 + .5, .06, .0, .06, 0xdddddd, {});
    return mb.done();
  };
  const buildStand = (cx, cz, yaw, len, rows, o = {}) => {
    const tpl = sRows(len, rows, o); ch.place(tpl, cx, hgt(cx, cz), cz, yaw, 1, null); const cs = Math.cos(yaw), sn = Math.sin(yaw);
    // people on the seats
    const fill = (o.fill ?? .78) * Dn; for (let i = 0; i < rows; i++) { const zc = 1.0 - i * 1.0 - .5, y = .5 * (i + 1); for (let x = -len / 2 + .8; x < len / 2 - .5; x += .72) { if (((x + len / 2 - 6) % 12 + 12) % 12 < 1.4) continue; if (rnd() > fill) continue; const px = x + (rnd() - .5) * .25, pz = zc + (rnd() - .5) * .3;
        crowdOut.push({ x: cx + px * cs + pz * sn, z: cz - px * sn + pz * cs, y: y + hgt(cx, cz), s: .86 + rnd() * .3, c: SHIRT[Math.floor(rnd() * SHIRT.length)], k: SKIN[Math.floor(rnd() * 4)], beh: rnd() < .66 ? 1 : 0, r: yaw + (rnd() - .5) * .5, row: i }); } }
    for (let q = -len / 2 + 5; q < len / 2; q += 9) occ.add(cx + q * cs, cz - q * sn, 9 + rows * .4);
    standList.push({ x: cx, z: cz, yaw, len, rows }); return tpl;
  };
  // the start/finish stand across from the pits (same place and heading as before, so the stage lights and the crowd zones still line up)
  {
    const p0 = path[0], ss = -pitSide, bx0 = p0.x + p0.tz * ss * (B + 3), bz0 = p0.z - p0.tx * ss * (B + 3), ry = Math.atan2(p0.tx, p0.tz) + (ss > 0 ? Math.PI : 0), th2 = ry + Math.PI / 2;
    const cxs = bx0 + 10 * Math.sin(ry) + Math.cos(th2) * 0, czs = bz0 + 10 * Math.cos(ry);
    buildStand(cxs + .4 * Math.sin(th2), czs + .4 * Math.cos(th2), th2, 60, 8, { roof: true, fill: .86, sg: 0 });
    track.startStand = { x: bx0, z: bz0, ry }; occ.add(cxs, czs, 38);
    for (let q = -28; q <= 28; q += 7) occ.add(cxs + q * Math.cos(th2 - 1.5708 * 0 + 0) * 0 + (-q) * Math.sin(ry) * -1 * 0, czs, 0);
    // hospitality terraces and flag poles beside the stand
    for (const sgn of [-1, 1]) { const qx = bx0 + (10 + sgn * 36) * Math.sin(ry) - 3 * Math.cos(ry) * 0, qz = bz0 + (10 + sgn * 36) * Math.cos(ry); void qx; void qz; }
    ctx.standRoof = { th2 };
  }
  // smaller stands on the outside of the tightest corners
  {
    const ap = (track.apexes || []).filter(a => !a.exit && a.ang > .7).sort((a, b) => b.ang - a.ang), used = [];
    for (const a of ap) { if (standList.length >= (low ? 2 : 4)) break; const i = a.i, s = -a.side, p = A(i); if (Math.min(i, n - i) < 100 || used.some(u => Math.min(Math.abs(u - i), n - Math.abs(u - i)) < 120)) continue; if (s === pitSide && inPit(i)) continue;
      const o = B + 4 + 2.5, [x, z] = offP(p, s * o), len = 26 + Math.floor(rnd() * 3) * 6; if (!okT(x, z, len * .55, 2) || !occ.free(x, z, 14)) continue;
      buildStand(x, z, yawT(p, s), len, 5, { roof: rnd() < .6, sg: 2 + used.length * 2 }); used.push(i); track.audioZones && track.audioZones.push({ x, z, r: 40, w: .35, kind: 'stand' });
      for (let k = -1; k <= 1; k += 2) { const [fx, fz] = offP(A(i + k * Math.round(len / 4)), s * (B + 3.3)); void fx; void fz; } }
  }

  // ============================================================= race furniture along the barriers
  {
    // tyre walls at the outside of the fast corners, behind the barrier; the advertising boards give way to them
    const ap = (track.apexes || []).filter(a => !a.exit && a.ang > .45); let tw = 0;
    for (const a of ap) { if (tw > (low ? 3 : 7)) break; const s = -a.side, i0 = a.i - 8; if (s === pitSide && inPit(a.i)) continue;
      let okAll = true; const segs = []; for (let k = 0; k < 4; k++) { const p = A(i0 + k * 4), [x, z] = offP(p, s * (B + 2.3)); if (!okT(x, z, 1.5, -2.5)) { okAll = false; break; } segs.push({ p, x, z, i: i0 + k * 4 }); }
      if (!okAll) continue; tw++;
      for (const sg of segs) { const t = lib.tyreWall[0]; put(t, sg.x, sg.z, yawA(sg.p) + (s < 0 ? Math.PI : 0), 1); stats.tyres++; for (let q = 0; q < 4; q++) { const ii = ((sg.i + q) % n + n) % n; if (claim) claim[s > 0 ? 0 : 1][ii] = 1; } } }
    // cones in lines at the pit entry and exit, outside the barrier, and a few clusters at the marshal posts
    const cn = (x, z) => { put(lib.cone, x, z, rnd() * TAU); stats.cones++; };
    if (pitL) for (const q of [pitL.qa - 8, pitL.qb + 4]) { const l = pitL.L[Math.max(0, Math.min(pitL.m - 1, q))], p = path[l.i]; for (let k = 0; k < 7; k++) { const pp = A(l.i + (q < pitL.qa ? -1 : 1) * k * 2), [x, z] = offP(pp, pitSide * (B + 4.2)); if (okT(x, z, .5, -1.5)) cn(x, z); } }
    for (let i = 6; i < n; i += 18) { const p = A(i), s = p.k > 0 ? -1 : 1; if (s === pitSide && inPit(i)) continue; if (rnd() < .5) continue; const [x, z] = offP(p, s * (B + 5.6)); if (!okT(x, z, 1, 0) || !occ.free(x, z, 1.2)) continue; for (let k = 0; k < 3; k++) cn(x + p.tx * k * 1.4, z + p.tz * k * 1.4); }
    // jersey barriers marking the spectator gates
    for (let i = 40; i < n - 20; i += 130) { const p = A(i), s = i % 2 ? 1 : -1; if (s === pitSide && inPit(i)) continue; const [x, z] = offP(p, s * (B + 7)); if (!okT(x, z, 3, 0) || !occ.free(x, z, 3)) continue; for (let k = -1; k <= 1; k++) put(lib.jersey, x + p.tx * 3 * k, z + p.tz * 3 * k, yawA(p) + 1.5708 * 0, 1, [k % 2 ? lin(0xe9e9e9) : lin(0xffffff)]); occ.add(x, z, 4); }
    // floodlight towers and billboards behind the crowd
    let tk = 0; for (let i = 20; i < n - 10; i += Math.round(130 / (low ? .5 : 1))) { const p = A(i), s = tk++ % 2 ? 1 : -1; if (s === pitSide && inPit(i)) continue; const [x, z] = offP(p, s * (B + 9.5)); if (!okT(x, z, 3, 0) || !occ.free(x, z, 3)) continue; put(lib.flood, x, z, yawT(p, s), 1); occ.add(x, z, 3); ctx.floods = ctx.floods || []; ctx.floods.push({ x, z, yaw: yawT(p, s), s }); }
    let bk = 0; for (let i = 36; i < n - 10; i += low ? 120 : 76) { const p = A(i), s = bk++ % 2 ? 1 : -1; if (s === pitSide && inPit(i)) continue; const [x, z] = offP(p, s * (B + 10.5)); if (!okT(x, z, 8, 0) || !occ.free(x, z, 7)) continue; put(lib.billboard[bk % 6], x, z, yawT(p, s) + R(-.12, .12), 1); occ.add(x, z, 7); ctx.boards = ctx.boards || []; ctx.boards.push({ x, z, y: 4.2, yaw: yawT(p, s) }); }
    // spectator fences behind the crowd rows
    for (let i = 0; i < n - 3; i += 3) for (const s of [1, -1]) { if (s === pitSide && inPit(i)) continue; if (hash(Math.floor(i / 30), s * 7.1) > .55) continue; const p = A(i), [x, z] = offP(p, s * (B + 7.4)); if (!okT(x, z, 1, 0) || !occ.free(x, z, 1)) continue; put(lib.fence, x, z, yawA(p) + (s < 0 ? Math.PI : 0)); putCut(lib.fenceMesh, x, z, yawA(p)); }
  }

  // ============================================================= car parks, access roads and the cars in them
  const lots = [];
  const makeLot = (cx, cz, yaw, cols, rows, o = {}) => {
    const sw = 2.7, sd = 5.4, aisle = 6.2, pairs = Math.ceil(rows / 2), Wd = cols * sw + 4, Dp = pairs * (2 * sd + aisle) + 2, c = Math.cos(yaw), s = Math.sin(yaw);
    const W2 = (u, v) => [cx + u * c + v * s, cz - u * s + v * c];
    const gravel = desert || o.gravel; ch.ground(gravel ? 'gravel' : 'lot', [W2(-Wd / 2, -Dp / 2), W2(Wd / 2, -Dp / 2), W2(Wd / 2, Dp / 2), W2(-Wd / 2, Dp / 2)], gravel ? 0xd8c9a6 : 0xffffff, gravel ? Wd / 4 : Wd / sw, gravel ? Dp / 4 : Dp / sd, .05);
    for (let pr = 0; pr < pairs; pr++) for (let side = -1; side <= 1; side += 2) { if (pr * 2 + (side > 0 ? 1 : 0) >= rows) continue; const v = -Dp / 2 + 1 + pr * (2 * sd + aisle) + (side < 0 ? sd / 2 : sd + aisle + sd / 2);
      for (let k = 0; k < cols; k++) { if (rnd() > (o.fill ?? .78) * (.5 + .5 * Dn)) continue; const u = (k - (cols - 1) / 2) * sw + R(-.12, .12), [x, z] = W2(u, v), t = Math.floor(rnd() * lib.cars.length);
        put(lib.cars[t], x, z, yaw + (side < 0 ? 0 : Math.PI) + R(-.06, .06) + (rnd() < .5 ? 0 : 0), 1, [pick(CARC)]); stats.cars++; } }
    // lamp posts and a ticket booth
    for (const [u, v] of [[-Wd / 2 + .5, -Dp / 2 + .5], [Wd / 2 - .5, -Dp / 2 + .5], [-Wd / 2 + .5, Dp / 2 - .5], [Wd / 2 - .5, Dp / 2 - .5], [0, 0]]) { const [x, z] = W2(u, v); if (u === 0 && !(cols > 8)) continue; put(lib.lightPole9, x, z, yaw + (u > 0 ? Math.PI : 0)); }
    if (o.booth) { const [x, z] = W2(Wd / 2 + 2, o.booth); put(lib.booth, x, z, yaw - 1.5708, 1, [lin(0xf4f4f2)]); }
    for (let k = 0; k < 8; k++) { const u = -Wd / 2 + k * Wd / 7, [x, z] = W2(u, -Dp / 2 - .6); if (k % 2 === 0) { put(lib.cone, x, z, 0); stats.cones++; } }
    occ.add(cx, cz, Math.hypot(Wd, Dp) / 2 + 2); lots.push({ x: cx, z: cz, yaw, Wd, Dp });
  };
  // a long access road with a lot at its end, running at right angles away from the track
  const roadLot = (i, s, len, cols, rows, o = {}) => {
    const p = A(i), o0 = B + 11, [x0, z0] = offP(p, s * o0), c = Math.cos(yawT(p, s) + Math.PI), sn = Math.sin(yawT(p, s) + Math.PI);      // direction away from the track
    const dx = -Math.sin(yawT(p, s)), dz = -Math.cos(yawT(p, s)), x1 = x0 + dx * len, z1 = z0 + dz * len; void c; void sn;
    const lotYaw = Math.atan2(dx, dz), lc = [x1 + dx * (rows * 6.2) / 1.2, z1 + dz * (rows * 6.2) / 1.2];
    const ok = (x, z, r) => okT(x, z, r, 0) && occ.free(x, z, r); const Dp = Math.ceil(rows / 2) * (2 * 5.4 + 6.2) + 2, cl = [x1 + dx * (Dp / 2 + 2), z1 + dz * (Dp / 2 + 2)]; void lc;
    const rad = Math.hypot(cols * 2.7 + 4, Dp) / 2 + 4; if (!ok(cl[0], cl[1], rad)) return false;
    for (let t = 0; t <= 1.001; t += .2) { const x = x0 + dx * len * t, z = z0 + dz * len * t; if (!okT(x, z, 3, 0) || !occ.free(x, z, 3)) return false; }
    // road strip
    const w = 6, px = -dz, pz = dx; ch.ground('road', [[x0 + px * w / 2, z0 + pz * w / 2], [x0 - px * w / 2, z0 - pz * w / 2], [x1 - px * w / 2, z1 - pz * w / 2], [x1 + px * w / 2, z1 + pz * w / 2]], desert ? 0xe6d3a6 : 0xffffff, 1, len / 8, .04);
    for (let t = 0; t < len; t += 12) occ.add(x0 + dx * t, z0 + dz * t, 4);
    makeLot(cl[0], cl[1], lotYaw + Math.PI / 2 * 0 + 1.5708, cols, rows, { booth: -Dp / 2 + 3, ...o }); void lotYaw;
    // cones at the gate, a gate arch, parked cars on the verge
    for (const sd of [-1, 1]) { const gx = x0 + dx * 2 + px * sd * 3.6, gz = z0 + dz * 2 + pz * sd * 3.6; put(lib.cone, gx, gz, 0); put(lib.cone, gx + dx * 2, gz + dz * 2, 0); stats.cones += 2; put(lib.flagPole, x0 + dx * 6 + px * sd * 4.2, z0 + dz * 6 + pz * sd * 4.2, 0); }
    for (let t = 14; t < len - 8; t += 5.5) for (const sd of [-1, 1]) { if (rnd() < .3) continue; put(pick(lib.cars), x0 + dx * t + px * sd * 5.2, z0 + dz * t + pz * sd * 5.2, Math.atan2(dx, dz) + (sd < 0 ? 0 : Math.PI) + R(-.04, .04), 1, [pick(CARC)]); stats.cars++; }
    ctx.arches = ctx.arches || []; ctx.arches.push({ x: x0 + dx * 4, z: z0 + dz * 4, yaw: Math.atan2(dx, dz), w: 9 });
    track.audioZones && lots.length && 0; return true;
  };
  {
    const want = low ? 1 : night ? 2 : 3; let made = 0, tries = 0;
    for (let k = 0; made < want && tries < 60; tries++) { const i = Math.floor(n * (.12 + .8 * ((made * .37 + tries * .13) % 1))) % n, s = rnd() < .5 ? 1 : -1; if (s === pitSide && inPit(i)) continue; if (Math.min(i, n - i) < 90 && s === -pitSide) continue;
      if (roadLot(i, s, 30 + Math.floor(rnd() * 28), 8 + Math.floor(rnd() * 5), 4, {})) made++; k++; }
    // pit-side parking beside the paddock for the teams' road cars
    if (pitL) { const L = pitL.L, qm = Math.round((pitL.qa + pitL.qb) / 2), f = L[qm], d = 83, x = f.x + f.nx * d, z = f.z + f.nz * d; if (okT(x, z, 18, 0) && occ.free(x, z, 18)) makeLot(x, z, Math.atan2(f.tx, f.tz) + 1.5708, 10, 2, { fill: .6 }); }
  }
  // roadside strips of parked cars along a perimeter road on a long straight
  {
    let used = 0; for (let i = 60; i < n - 60 && used < (low ? 1 : 2); i += 8) { const s = (used % 2 ? -1 : 1) * (pitSide === 1 ? -1 : 1); let ok = true; for (let k = 0; k < 40; k++) { const p = A(i + k * 2); if (Math.abs(p.k) > 1 / 260 || (s === pitSide && inPit(i + k * 2))) { ok = false; break; } const [x, z] = offP(p, s * (B + 15)); if (!okT(x, z, 5, 0) || !occ.free(x, z, 5)) { ok = false; break; } }
      if (!ok) continue; used++; const a = A(i), b = A(i + 79), [x0, z0] = offP(a, s * (B + 14)), [x1, z1] = offP(b, s * (B + 14)), len = Math.hypot(x1 - x0, z1 - z0), ux = (x1 - x0) / len, uz = (z1 - z0) / len, w = 5.5;
      ch.ground('road', [[x0 - uz * w / 2, z0 + ux * w / 2], [x0 + uz * w / 2, z0 - ux * w / 2], [x1 + uz * w / 2, z1 - ux * w / 2], [x1 - uz * w / 2, z1 + ux * w / 2]], 0xffffff, 1, len / 8, .045);
      // (u along the road, v across) -> the 'road' tile has its stripes along v, so lay it with u across
      for (let t = 0; t < len; t += 12) occ.add(x0 + ux * t, z0 + uz * t, 7);
      for (let t = 3; t < len - 3; t += 5.4) for (const sd of [-1, 1]) { if (rnd() < .35) continue; const r = sd > 0 ? 1 : -1, px = -uz * r * 4.4, pz = ux * r * 4.4; put(pick(lib.cars), x0 + ux * t + px, z0 + uz * t + pz, Math.atan2(ux, uz) + (r < 0 ? Math.PI : 0), 1, [pick(CARC)]); stats.cars++; }
      for (let t = 0; t < len; t += 6) { put(lib.fence, x0 + ux * t + uz * (-s * 6.5) * -1 * 0 + (-uz) * -3.6 * 0, z0 + uz * t, 0); }
      i += 90; }
  }

  // ============================================================= houses, farms and industry along the road
  const tintFor = () => [pick(WALLS[th]), pick(ROOFS[th])];
  const house = (i, s, tpl, off, sc = 1) => {
    const p = A(i), o = off, [x, z] = offP(p, s * o), r = tpl.r * sc + 1.5; if (!free(x, z, r + 3)) return false; put(tpl, x, z, yawT(p, s) + R(-.35, .35), sc, tintFor()); occ.add(x, z, r); stats.houses++; return { x, z, r, p };
  };
  const zoneLoop = () => {
    const blocks = Math.ceil(n / 44);
    for (let b = 0; b < blocks; b++) for (const s of [1, -1]) {
      const z = zoneAt(b * 44, s), i0 = b * 44; if (s === pitSide && inPit(i0 + 22) && inPit(i0)) continue;
      if (z === 'houses') {
        const cnt = Math.round((2 + rnd() * 3) * (low ? .5 : 1)); for (let k = 0; k < cnt; k++) { const i = i0 + Math.floor(rnd() * 44), tpl = th === 'desert' ? pick(lib.houseDesert) : th === 'coast' ? (rnd() < .4 ? pick(lib.houseDesert) : pick(lib.houseDay)) : pick(lib.houseDay);
          const h = house(i, s, tpl, B + 24 + rnd() * 24); if (h) { const g = Math.random(); if (g < .6) { const [cx2, cz2] = [h.x + Math.sin(yawT(h.p, s)) * (h.r + 3), h.z + Math.cos(yawT(h.p, s)) * (h.r + 3)]; if (occ.free(cx2, cz2, 2.6)) { put(pick(lib.cars), cx2, cz2, yawT(h.p, s) + R(-.5, .5), 1, [pick(CARC)]); stats.cars++; occ.add(cx2, cz2, 2.6); } }
              if (rnd() < .5) { const [bx2, bz2] = [h.x - Math.cos(yawT(h.p, s)) * (h.r + 2.5), h.z + Math.sin(yawT(h.p, s)) * (h.r + 2.5)]; if (th !== 'desert' && occ.free(bx2, bz2, 2.2)) { put(lib.shedWood, bx2, bz2, yawT(h.p, s), 1, [lin(0xcaa77a), lin(0x666a70)]); occ.add(bx2, bz2, 2.5); } } } }
        if (b % 7 === 3 && th !== 'desert' && !low) { const sh = house(i0 + 20, s, lib.shop, B + 22 + rnd() * 10); void sh; } if (b % 17 === 4 && th === 'day') house(i0 + 14, s, lib.church, B + 42 + rnd() * 10);
        if (th === 'coast' && b % 3 === 1) { const a = house(i0 + 30, s, pick(lib.apt), B + 60 + rnd() * 20); void a; }
      } else if (z === 'farm') {
        const h = house(i0 + 8 + Math.floor(rnd() * 16), s, lib.barn, B + 30 + rnd() * 14); if (h) { const p = h.p, yy = yawT(p, s); put(lib.silo, h.x + Math.cos(yy) * (h.r + 3), h.z - Math.sin(yy) * (h.r + 3), 0, 1, [lin(0xd5d8dc)]); occ.add(h.x + Math.cos(yy) * (h.r + 3), h.z - Math.sin(yy) * (h.r + 3), 3.6);
          const hx = h.x - Math.cos(yy) * (h.r + 4), hz = h.z + Math.sin(yy) * (h.r + 4); if (occ.free(hx, hz, 4)) { put(lib.hay, hx, hz, yy); put(lib.tractor, hx + 5, hz + 4, R(0, 6)); occ.add(hx, hz, 5); }
          for (let k = 0; k < 4; k++) { const bx2 = h.x + R(-14, 14), bz2 = h.z + R(-14, 14); if (occ.free(bx2, bz2, 1.4) && okT(bx2, bz2, 1.4)) { put(lib.bale, bx2, bz2, R(0, 3), 1, null); occ.add(bx2, bz2, 1.5); } } }
        else if (rnd() < .5 && !desert) house(i0 + 20, s, lib.waterTower, B + 40);
      } else if (z === 'industrial') {
        const h = house(i0 + 8 + Math.floor(rnd() * 22), s, pick(lib.warehouse), B + 30 + rnd() * 12); if (h) { const yy = yawT(h.p, s);
          for (let k = 0; k < 3; k++) { const bx2 = h.x + Math.cos(yy) * (h.r * .8 - k * 6) , bz2 = h.z - Math.sin(yy) * (h.r * .8 - k * 6); void bx2; void bz2; }
          const fx = h.x + Math.sin(yy) * (h.r + 6), fz = h.z + Math.cos(yy) * (h.r + 6); for (let k = 0; k < 4; k++) { const x2 = fx + Math.cos(yy) * (k - 1.5) * 3.2, z2 = fz - Math.sin(yy) * (k - 1.5) * 3.2; if (occ.free(x2, z2, 2.4)) { put(rnd() < .6 ? lib.container : lib.truck, x2, z2, yy + 1.5708 * (rnd() < .5 ? 0 : 1) * 0, 1, [pick(TEAM)]); occ.add(x2, z2, 2.8); } }
          for (let k = 0; k < 3; k++) { const x2 = h.x + R(-h.r, h.r), z2 = h.z + R(-h.r, h.r); void x2; void z2; } }
        if (rnd() < .6) house(i0 + 30, s, pick([lib.shedGarage, lib.shedOpen]), B + 18 + rnd() * 8, 1.4);
      }
    }
  };
  zoneLoop();
  // patchwork of fields (crops, meadows, ploughed earth) beyond the trees, flat decals on the ground
  if (!night) {
    const FC = th === 'desert' ? [0xd9c08a, 0xc7a96e, 0xe2cf9f] : [0xc9b45a, 0x7fa447, 0x9bbb52, 0x8a6b45, 0xd0c06a, 0x6f9a40].map(c => c);
    for (let i = 10; i < n; i += 36) for (const s of [1, -1]) { if (hash(Math.floor(i / 36), s * 5.3) > (low ? .35 : .55)) continue; if (s === pitSide && inPit(i)) continue; if (zoneAt(i, s) === 'houses' && rnd() < .5) continue;
      const p = A(i), len = R(34, 58), wid = R(26, 44), o = B + R(46, 78) + wid / 2, [x, z] = offP(p, s * o), r = Math.hypot(len, wid) / 2; if (!okT(x, z, r, 2) || !occ.free(x, z, r * .8)) continue;
      const ya = yawA(p), c = Math.cos(ya), sn = Math.sin(ya), W2 = (u, v) => [x + u * c + v * sn, z - u * sn + v * c], col = lin(pick(FC)); const tile = rnd() < .5 ? 'crop' : 'field';
      ch.ground(tile, [W2(-wid / 2, -len / 2), W2(wid / 2, -len / 2), W2(wid / 2, len / 2), W2(-wid / 2, len / 2)], col, wid / 6, len / 6, .035, 0); occ.add(x, z, r * .85); }
  }
  void TILE; void NSIGN;
  ctx.crowdOut = crowdOut;

  // ============================================================= build the merged meshes, then trees, wind and the animated props
  const live = buildLive({ ...ctx, occ, okT, free, tdist, lib, stats, hash, zoneAt, offP, yawT, yawA, A, lots, standList, atl, low, Dn, th, put });
  ch.build(mat, G, cull, false); chCut.build(matCut, G, cull, false);
  // the people: stands, marshals, mechanics and walkers
  if (crowdOut.length && people) people(crowdOut);
  const info = { ...stats, tris: ch.tris + chCut.tris, meshes: (ch.drawn || 0) + (chCut.drawn || 0), crowd: crowdOut.length };
  track.sceneryInfo = info;
  return { free: (x, z, r) => track.scnFree(x, z, r), crowd: crowdOut, info, standCenter: standList[0], live };
}
