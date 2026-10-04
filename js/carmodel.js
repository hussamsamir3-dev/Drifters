// Car generator. Every vehicle is built here from smooth lofted bodies (rounded cross-sections swept along the car), a glass cabin,
// wheels set into real recesses in the bodywork, and modelled details: lamps, grille, vents, mirrors, wings, pipes. Nothing is
// loaded from a model file, so the shapes, proportions and detail are all under the game's control.
import * as THREE from 'three';
const KM = {}, M = n => KM[n] || (KM[n] = Object.assign(new THREE.MeshBasicMaterial(), { name: n }));      // named placeholders; Car.dress() swaps in the real materials
const TAU = Math.PI * 2, ab = Math.abs, sg = Math.sign, clamp = (v, a, b) => v < a ? a : v > b ? b : v, sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const sp = (c, n) => sg(c) * Math.pow(ab(c), 2 / n);
function curve(pts) { return t => { if (t <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [t0, v0] = pts[i - 1], [t1, v1] = pts[i], u = (t - t0) / (t1 - t0), s = u * .45 + .55 * (1 - Math.cos(u * Math.PI)) / 2; return v0 + (v1 - v0) * s; } return pts[pts.length - 1][1]; }; }
function loftGeo(st, ring = 32, capF = true, capR = true) {
  const pos = [], idx = [], n = st.length;
  for (const s of st) for (let j = 0; j < ring; j++) { const a = j / ring * TAU, c = Math.cos(a), sn = Math.sin(a), nn = sn >= 0 ? s.nt : s.nb, yc = (s.yb + s.yt) / 2, hy = (s.yt - s.yb) / 2; pos.push((s.x || 0) + s.w * sp(c, nn) * (1 - (s.tm || 0) * clamp(((yc + hy * sp(sn, nn)) - s.yb) / (s.yt - s.yb), 0, 1)), yc + hy * sp(sn, nn), s.z); }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < ring; j++) { const a = i * ring + j, b = i * ring + (j + 1) % ring, c = (i + 1) * ring + j, d = (i + 1) * ring + (j + 1) % ring; idx.push(a, b, c, b, d, c); }
  if (capF) { const f = st[n - 1]; pos.push(f.x || 0, (f.yb + f.yt) / 2, f.z); const ci = pos.length / 3 - 1, base = (n - 1) * ring; for (let j = 0; j < ring; j++) idx.push(ci, base + j, base + (j + 1) % ring); }
  if (capR) { const f = st[0]; pos.push(f.x || 0, (f.yb + f.yt) / 2, f.z); const ci = pos.length / 3 - 1; for (let j = 0; j < ring; j++) idx.push(ci, (j + 1) % ring, j); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); return g;
}
function part(geo, pick) {      // a new indexed piece from the chosen triangles, keeping the smooth normals of the whole
  const P = geo.attributes.position, N = geo.attributes.normal, I = geo.index.array, map = new Map(), pp = [], nn = [], ii = [];
  for (let t = 0; t < I.length; t += 3) { if (!pick(t / 3, I[t], I[t + 1], I[t + 2])) continue; for (let k = 0; k < 3; k++) { const v = I[t + k]; let m = map.get(v); if (m === undefined) { m = pp.length / 3; map.set(v, m); pp.push(P.getX(v), P.getY(v), P.getZ(v)); nn.push(N.getX(v), N.getY(v), N.getZ(v)); } ii.push(m); } }
  if (!ii.length) return null; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nn, 3)); g.setIndex(ii); return g;
}
// A patch drawn ON a surface: fn(u,v) gives points on it, the patch is pushed out along its own normal by `off`.
function gridGeo(fn, nu, nv, off, ctr) {
  const P = []; for (let i = 0; i <= nu; i++) { P.push([]); for (let j = 0; j <= nv; j++) P[i].push(fn(i / nu, j / nv)); }
  const pos = [], nor = [], idx = [], V = THREE.Vector3;
  for (let i = 0; i <= nu; i++) for (let j = 0; j <= nv; j++) { const p = P[i][j], a = P[Math.max(i - 1, 0)][j], b = P[Math.min(i + 1, nu)][j], c = P[i][Math.max(j - 1, 0)], d = P[i][Math.min(j + 1, nv)];
    const n = new V().subVectors(b, a).cross(new V().subVectors(d, c)); if (n.lengthSq() < 1e-12) n.set(0, 1, 0); n.normalize(); if (n.dot(new V().subVectors(p, ctr(p))) < 0) n.negate();
    pos.push(p.x + n.x * off, p.y + n.y * off, p.z + n.z * off); nor.push(n.x, n.y, n.z); }
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) { const a = i * (nv + 1) + j, b = (i + 1) * (nv + 1) + j; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setIndex(idx); return g;
}
const mesh = (g, kind, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(g, M(kind)); m.position.set(x, y, z); return m; };
const rboxG = (w, h, d, nn = 5) => { const st = [[0, .5], [.025, .82], [.1, 1], [.9, 1], [.975, .82], [1, .5]].map(([f, s]) => ({ z: -d / 2 + d * f, w: w / 2 * s, yb: -h / 2 * s, yt: h / 2 * s, nt: nn, nb: nn })), g = loftGeo(st, 20); g.computeVertexNormals(); return g; };
const rbox = (w, h, d, kind, x = 0, y = 0, z = 0, nn = 5) => mesh(rboxG(w, h, d, nn), kind, x, y, z);
const ell = (a, b, c, kind, x, y, z) => { const m = mesh(new THREE.SphereGeometry(1, 18, 12), kind, x, y, z); m.scale.set(a, b, c); return m; };
const bar = (p0, p1, r, kind) => { const a = new THREE.Vector3(...p0), b = new THREE.Vector3(...p1), d = b.clone().sub(a), m = mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), kind); m.position.copy(a.add(b).multiplyScalar(.5)); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return m; };
// ---------------- wheels: rounded tyre, ring on the sidewall, dished rim with spokes, brake disc and caliper behind ----------------
function wheelGroup(R, w, spokes = 10) {
  const g = new THREE.Group(), hw = w / 2;
  g.add(mesh(new THREE.LatheGeometry([[R * .66, -hw], [R * .88, -hw], [R * .97, -hw * .78], [R, -hw * .42], [R, hw * .42], [R * .97, hw * .78], [R * .88, hw], [R * .66, hw]].map(([r, y]) => new THREE.Vector2(r, y)), 40).rotateZ(Math.PI / 2), 'tire'));
  g.add(mesh(new THREE.CylinderGeometry(R * .68, R * .68, w * .88, 36, 1, true).rotateZ(Math.PI / 2), 'silver'));
  g.add(mesh(new THREE.CylinderGeometry(R * .5, R * .5, .03, 30).rotateZ(Math.PI / 2), 'silver', 0));
  g.add(rbox(.06, R * .2, R * .28, 'accent', hw * .5, R * .42, R * .12));
  for (const s of [-1, 1]) {
    g.add(mesh(new THREE.CircleGeometry(R * .66, 36).rotateY(s * Math.PI / 2), 'body', s * (hw * .74), 0, 0));
    g.add(mesh(new THREE.TorusGeometry(R * .685, .03, 8, 40).rotateY(Math.PI / 2), 'rim7', s * (hw - .012)));
    g.add(mesh(new THREE.RingGeometry(R * .72, R * .94, 48, 1).rotateY(s * Math.PI / 2), 'tyretext', s * (hw + .003)));
    for (let i = 0; i < spokes; i++) { const sk = new THREE.BoxGeometry(.026, R * .6, R * (spokes > 7 ? .06 : .11)); sk.translate(0, R * .36, 0); sk.rotateX(i / spokes * TAU); g.add(mesh(sk, 'rim7', s * (hw - .024))); }
    g.add(mesh(new THREE.CylinderGeometry(R * .13, R * .13, .045, 16).rotateZ(Math.PI / 2), 'silver', s * (hw - .016)));
    for (let i = 0; i < 5; i++) { const a = i / 5 * TAU; g.add(mesh(new THREE.CylinderGeometry(.012, .012, .03, 6).rotateZ(Math.PI / 2), 'silver', s * (hw - .012), Math.cos(a) * R * .2, Math.sin(a) * R * .2)); }
  }
  return g;
}
// ---------------- archetypes (units: metres, drawn chunky; the game scales them up) ----------------
const A = {
  hatch: { L: 3.4, W: 1.95, wb: 2.1, R: 0.5, tw: 0.36, clr: 0.24, belt: 0.95, hood: 1.04, deck: 1.08, roof: 1.58, ct0: .04, ct1: .66, rw: .13, fw: .2, flare: .1, nose: .17, tail: .1, wing: 'rally', vents: 2, scoop: 1, spokes: 10, nt: 4.4, doors: 2 },
  sedan: { L: 4.0, W: 1.9, wb: 2.45, R: 0.47, tw: 0.32, clr: 0.24, belt: 0.92, hood: 1.0, deck: 1.02, roof: 1.56, ct0: 0.14, ct1: 0.62, rw: 0.14, fw: 0.17, flare: .07, nose: .15, tail: .1, wing: 'none', vents: 0, spokes: 7, nt: 4.8, trunk: 1, doors: 2 },
  coupe: { L: 4.1, W: 1.95, wb: 2.5, R: 0.48, tw: 0.36, clr: 0.23, belt: 0.92, hood: 1.02, deck: 1.0, roof: 1.5, ct0: 0.2, ct1: 0.6, rw: 0.1, fw: 0.12, flare: .09, nose: .13, tail: .1, wing: 'none', vents: 0, spokes: 10, nt: 4.2, trunk: 1, doors: 1, b: 0, lamps: 'round', bumper: 'chrome', bulge: 1 },
  gt: { L: 3.9, W: 2.05, wb: 2.4, R: 0.49, tw: 0.4, clr: 0.2, belt: 0.86, hood: 0.98, deck: 1.0, roof: 1.44, ct0: 0.2, ct1: 0.62, rw: 0.09, fw: 0.15, flare: .14, nose: .14, tail: .09, wing: 'gt', vents: 2, spokes: 12, nt: 3.8, doors: 1, b: 0, diffuser: 1 },
  super: { L: 4.0, W: 2.1, wb: 2.4, R: 0.49, tw: 0.42, clr: 0.18, belt: 0.8, hood: 0.92, deck: 0.98, roof: 1.3, ct0: 0.28, ct1: 0.66, rw: 0.13, fw: 0.17, flare: .13, nose: .16, tail: .1, wing: 'lip', vents: 2, spokes: 10, nt: 3.4, doors: 1, b: 0, diffuser: 1 },
  suv: { L: 4.0, W: 2.0, wb: 2.5, R: 0.52, tw: 0.36, clr: 0.36, belt: 1.12, hood: 1.22, deck: 1.28, roof: 1.86, ct0: .08, ct1: .6, rw: .06, fw: .17, flare: .08, nose: .13, tail: .08, wing: 'none', vents: 0, rails: 1, spokes: 10, nt: 5.5, doors: 2 },
  truck: { L: 4.5, W: 2.05, wb: 2.8, R: 0.56, tw: 0.38, clr: 0.4, belt: 1.18, hood: 1.28, deck: 1.1, roof: 1.9, ct0: .46, ct1: .7, rw: .05, fw: .12, flare: .09, nose: .13, tail: .06, wing: 'none', vents: 0, bed: 1, spokes: 8, nt: 5, doors: 2 },
  van: { L: 4.2, W: 2.0, wb: 2.6, R: 0.47, tw: 0.33, clr: 0.28, belt: 1.4, hood: 1.24, deck: 1.4, roof: 2.1, ct0: .03, ct1: .84, rw: .02, fw: .08, flare: .04, nose: .15, tail: .05, wing: 'none', vents: 0, spokes: 8, gw: .97, nt: 5.6, doors: 2 },
  boxtruck: { L: 5.4, W: 2.1, wb: 3.4, R: 0.52, tw: 0.36, clr: 0.42, belt: 1.16, hood: 1.12, deck: 1.1, roof: 2.1, ct0: .7, ct1: .93, rw: .03, fw: .1, flare: .05, nose: .08, tail: .04, wing: 'none', vents: 0, cargo: 1, spokes: 8, nt: 5.2, doors: 1, b: 0 },
  f1: { f1: 1, wing: 'none', spokes: 5 },
};
const STYLE = {
  Mazda: ['sedan', { L: 4.25 }], Mustang: ['coupe', {}], Audi: ['sedan', { W: 1.86, L: 4.3, wing: 'duck' }], BMW: ['gt', {}], FordGT: ['super', { ct0: .3 }], Lambo: ['super', { L: 4.3, roof: 1.02, wing: 'none' }],
  Ford: ['hatch', {}], Sterrato: ['hatch', { clr: .3, R: .44, tw: .33, W: 1.88, roof: 1.46 }], Mercedes: ['sedan', { L: 4.3, W: 1.84 }], LandRover: ['suv', {}], Artura: ['super', {}], Ferrari: ['super', { wing: 'gt' }], Zenvo: ['super', { wing: 'gt', W: 2.06 }],
  Mustang2: ['coupe', { L: 4.35 }], M8: ['coupe', { L: 4.4, roof: 1.22, wing: 'duck' }], Urus: ['suv', { roof: 1.52, clr: .26, wing: 'duck' }], Porsche: ['gt', { wing: 'duck', roof: 1.24 }], AMG: ['gt', { L: 4.2 }], GTR: ['gt', { vents: 2 }], P1GTR: ['super', { wing: 'gt', W: 2.06 }],
  F1: ['f1', { v: 1 }], F1b: ['f1', { v: 2 }], Truck: ['truck', {}], Bus: ['van', {}], HatchS: ['hatch', { wing: 'duck', L: 3.4 }], SedanS: ['sedan', { wing: 'duck' }], Taxi: ['sedan', { extra: 'taxi' }], Police: ['sedan', { extra: 'police', L: 4.3 }],
  SUVk: ['suv', { W: 1.96, L: 4.4 }], Delivery: ['boxtruck', {}], Fire: ['boxtruck', { extra: 'fire', L: 5.7 }],
};
export const hasOwnWing = id => { const [k, o] = STYLE[id] || ['sedan', {}], w = o.wing || A[k].wing; return w && w !== 'none' ? 1 : 0; };
export function buildStyled(id) { const [k, o] = STYLE[id] || ['sedan', {}], P = Object.assign({}, A[k], o); return P.f1 ? buildF1(P, id) : buildCar(P, id); }
// Move every part's position, rotation and scale into its own geometry, so the car is one set of meshes at the origin. The upgrade
// fitting and the damage dents both read vertex positions directly and need them in car space.
function bakeBody(body) {
  const ms = []; body.updateWorldMatrix(true, true); body.traverse(o => { if (o.isMesh) ms.push(o); });
  for (const o of ms) { o.geometry.applyMatrix4(o.matrixWorld); if (o.parent !== body) body.add(o); o.position.set(0, 0, 0); o.rotation.set(0, 0, 0); o.scale.set(1, 1, 1); o.updateMatrix(); }
  for (const g of [...body.children]) if (!g.isMesh) body.remove(g);
}
function buildCar(P, id) {
  const root = new THREE.Group(); root.name = 'sty:' + id; const body = new THREE.Group(); body.name = 'body'; root.add(body); const add = m => { if (m) body.add(m); }, addG = (g, k) => { if (g) body.add(mesh(g, k)); }, V3 = THREE.Vector3;
  const L = P.L, hw = P.W / 2, z0 = -L / 2, zt = t => z0 + t * L, R = P.R, ra = R + .055, tr = (-P.wb / 2 - z0) / L, tfw = (P.wb / 2 - z0) / L, wdT = ra * 1.2 / L, nf = P.nose, nr = P.tail, lerp = (a, b, u) => a + (b - a) * u;
  const bump = (t, c) => { const d = (t - c) / wdT; return ab(d) < 1 ? .5 * (1 + Math.cos(d * Math.PI)) : 0; };
  const Wp = t => { let w = hw; if (t > 1 - nf) { const u = (t - 1 + nf) / nf; w *= .52 + .48 * Math.sqrt(Math.max(0, 1 - u * u)); } if (t < nr) { const u = (nr - t) / nr; w *= .56 + .44 * Math.sqrt(Math.max(0, 1 - u * u)); } return w + P.flare * (bump(t, tr) + bump(t, tfw)); };
  const t1 = Math.max(.07, P.ct0 + .02), nt = P.nt || 4.6;
  const Tp0 = curve([[0, P.deck * .85], [.05, P.deck], [t1, P.deck], [t1 + .07, P.belt], [P.ct1 - .05, P.belt], [P.ct1, P.hood], [1 - nf * .4, P.hood + (P.bulge || 0) * .3], [1, P.hood * .8]]);
  const Tp = t => { const bw = Math.max(bump(t, tr), bump(t, tfw)); return Math.max(Tp0(t), Tp0(t) + (2 * R + .1 - Tp0(t)) * bw); };
  const Bp = curve([[0, P.clr + .08], [.06, P.clr], [.94, P.clr], [1, P.clr + .07]]);
  const yTop = t => Math.max(Tp(t), Bp(t) + .22);
  // ---- lower body: one smooth loft with the wheel wells pressed into the sides
  const st = [], N = 64; for (let i = 0; i < N; i++) { const t = .5 - .5 * Math.cos(i / (N - 1) * Math.PI), yb = Bp(t); st.push({ z: zt(t), w: Wp(t), yb, yt: yTop(t), nt, nb: 7 }); }
  const bg = loftGeo(st, 44), BP = bg.attributes.position, pocket = new Uint8Array(BP.count), depth = P.tw + .045;
  for (let v = 0; v < BP.count; v++) { const x = BP.getX(v), y = BP.getY(v), z = BP.getZ(v); if (ab(x) < hw * .6) continue; for (const wz of [-P.wb / 2, P.wb / 2]) { const d = Math.hypot(z - wz, y - R); if (d < ra) { const k = sstep(ra, ra * .8, d); BP.setX(v, x - sg(x) * depth * k); if (k > .6) pocket[v] = 1; } } }
  bg.computeVertexNormals();
  addG(part(bg, (t, a, b, c) => !(pocket[a] && pocket[b] && pocket[c])), 'paint'); addG(part(bg, (t, a, b, c) => pocket[a] && pocket[b] && pocket[c]), 'body');
  const bx = (t, y) => { const yb = Bp(t), yt = yTop(t), yc = (yb + yt) / 2, hy = (yt - yb) / 2, k = (y - yc) / hy; if (ab(k) >= .999) return 0; const nn = k >= 0 ? nt : 7; return Wp(t) * Math.pow(1 - Math.pow(ab(k), nn), 1 / nn); };
  const surfY = (t, x) => { const yb = Bp(t), yt = yTop(t), yc = (yb + yt) / 2, hy = (yt - yb) / 2, k = clamp(ab(x) / Wp(t), 0, .98); return yc + hy * Math.pow(1 - Math.pow(k, nt), 1 / nt); };
  // ---- cabin shell (painted roof and pillars). The glass is NOT part of it: it is separate panels laid on top, each in a black frame.
  const CNT = P.cnt || 6, CNB = 9, TM = P.tm ?? .11;
  const Rc = curve([[P.ct0, P.belt - .02], [P.ct0 + P.rw, P.roof], [P.ct1 - P.fw, P.roof], [P.ct1, P.belt - .02]]), gw = hw * (P.gw || .95), gh = [], Ng = 40;
  const gS = t => { const u = clamp((t - P.ct0) / (P.ct1 - P.ct0), 0, 1), w = gw * (.84 + .16 * Math.sin(Math.PI * u)), yb = P.belt - .1, yt = Rc(t); return { w, yb, yt, yc: (yb + yt) / 2, hy: (yt - yb) / 2 }; };
  for (let i = 0; i < Ng; i++) { const t = P.ct0 + (P.ct1 - P.ct0) * i / (Ng - 1), s = gS(t); gh.push({ z: zt(t), w: s.w, yb: s.yb, yt: s.yt, nt: CNT, nb: CNB, tm: TM }); }
  const gg = loftGeo(gh, 44); gg.computeVertexNormals(); add(mesh(gg, 'paint'));
  const gx = (t, y) => { const s = gS(t); if (y <= s.yb || y >= s.yt) return 0; const yn = (y - s.yb) / (s.yt - s.yb), k = (y - s.yc) / s.hy, nn = k >= 0 ? CNT : CNB; return s.w * (1 - TM * yn) * Math.pow(1 - Math.pow(Math.min(ab(k), .999), nn), 1 / nn); };
  const gTop = (t, x) => { const s = gS(t), ax = ab(x); let lo = s.yc, hi = s.yt - 1e-4; if (gx(t, lo) <= ax) return lo; for (let i = 0; i < 20; i++) { const m = (lo + hi) / 2; if (gx(t, m) > ax) lo = m; else hi = m; } return (lo + hi) / 2; };
  const axis = p => new V3(0, p.y, p.z), up1 = p => new V3(0, p.y - 1, p.z), th = P.rth ?? .085, mt = m => m / L;
  // glass between the pillars: scan the roof line for where a window fits, leave the B-pillar, build one panel per run
  const sideRuns = m => { const yL = P.belt + .035 - m, tB = P.ct0 + (P.ct1 - P.ct0) * (P.bpil ?? .5), pw = (P.pw ?? .032) - mt(m), runs = []; let cur = null;
    for (let k = 0; k <= 400; k++) { const t = P.ct0 + (P.ct1 - P.ct0) * k / 400, ok = Rc(t) - th + m - yL > .05 && (P.b === 0 || ab(t - tB) > pw); if (ok) { if (!cur) cur = [t, t]; cur[1] = t; } else if (cur) { runs.push(cur); cur = null; } } if (cur) runs.push(cur); return runs.filter(r => r[1] - r[0] > .012).map(r => ({ r, yL })); };
  const sideGlass = (m, off, kind) => { for (const { r, yL } of sideRuns(m)) for (const sx of [-1, 1]) addG(gridGeo((u, v) => { const t = lerp(r[0], r[1], u), y = lerp(yL, Rc(t) - th + m, v); return new V3(sx * gx(t, y), y, zt(t)); }, 20, 8, off, axis), kind); };
  const baseF = (() => { for (let k = 0; k <= 200; k++) { const t = P.ct1 - k / 200 * (P.ct1 - P.ct0); if (Rc(t) - Tp(t) > .075) return t; } return P.ct1 - .05; })(), topF = P.ct1 - P.fw + .015;
  const baseR = (() => { for (let k = 0; k <= 200; k++) { const t = P.ct0 + k / 200 * (P.ct1 - P.ct0); if (Rc(t) - Tp(t) > .075) return t; } return P.ct0 + .05; })(), topR = P.ct0 + P.rw - .012;
  const wind = (m, off, kind) => {
    if (baseF > topF + .02) addG(gridGeo((u, s) => { const t = lerp(topF - mt(m * (kind === 'body' ? 3.2 : 1)), baseF + mt(m), u), w = gS(t).w, x = (s * 2 - 1) * (w * (.8 - .04 * (1 - u)) + m); return new V3(x, gTop(t, x), zt(t)); }, 12, 12, off, up1), kind);
    if (topR > baseR + .015) addG(gridGeo((u, s) => { const t = lerp(baseR - mt(m), topR + mt(m), u), w = gS(t).w, x = (s * 2 - 1) * (w * .78 + m); return new V3(x, gTop(t, x), zt(t)); }, 8, 12, off, up1), kind); };
  sideGlass(.022, .0035, 'body'); wind(.022, .0035, 'body');            // black rubber frames
  sideGlass(0, .0085, 'window'); wind(0, .0085, 'window');              // the glass
  // ---- panel seams: doors, hood, boot, and a character line, as thin dark strips lying on the paint
  const sideStrip = (tFn, yFn, nu, nv, w1, sx, off) => addG(gridGeo((u, v) => { const t = tFn(u, v), y = yFn(u, v); return new V3(sx * bx(t, y), y, zt(t)); }, nu, nv, off, axis), 'body');
  const dF = tfw - ra / L * 1.1 - .012, dR = tr + ra / L * 1.1 + .012, dB = P.b === 0 ? null : (dF + dR) / 2, yd0 = P.clr + .09, yd1 = P.belt - .035;
  for (const sx of [-1, 1]) { for (const td of [dF, dR, dB].filter(q => q != null && (q !== dR || P.doors !== 1))) addG(gridGeo((u, v) => { const y = lerp(yd0, yd1, v); return new V3(sx * bx(td, y), y, zt(td) + (u - .5) * .014); }, 1, 10, .004, axis), 'body');
    addG(gridGeo((u, v) => { const t = lerp(dR, dF, u), y = lerp(yd0, yd0 + .014, v); return new V3(sx * bx(t, y), y, zt(t)); }, 24, 1, .004, axis), 'body');
    addG(gridGeo((u, v) => { const t = lerp(dR - .02, dF + .02, u), y = P.clr + (P.belt - P.clr) * .62 + (v - .5) * .012; return new V3(sx * bx(t, y), y, zt(t)); }, 28, 1, .004, axis), 'body');          // the shoulder character line
    const th2 = P.b === 0 ? lerp(dR, dF, .55) : lerp(dB, dR, .5), hy2 = P.belt - .13; add(rbox(.02, .035, .16, 'silver', sx * (bx(th2, hy2) + .01), hy2, zt(th2))); }
  const tf2 = 1 - nf * .55, xh = t => Wp(t) * .58;           // hood outline
  for (const sx of [-1, 1]) addG(gridGeo((u, v) => { const t = lerp(P.ct1 + .012, tf2, u), x = sx * xh(t) + (v - .5) * .014; return new V3(x, surfY(t, x), zt(t)); }, 18, 1, .004, (p) => new V3(p.x, p.y - 1, p.z)), 'body');
  addG(gridGeo((u, v) => { const x = lerp(-xh(tf2), xh(tf2), u); return new V3(x, surfY(tf2, x), zt(tf2) + (v - .5) * .014); }, 12, 1, .004, up1), 'body');
  if (P.trunk) { const tb = P.ct0 - .012, te = .075, xt = t => Wp(t) * .56; for (const sx of [-1, 1]) addG(gridGeo((u, v) => { const t = lerp(te, tb, u), x = sx * xt(t) + (v - .5) * .014; return new V3(x, surfY(t, x), zt(t)); }, 12, 1, .004, up1), 'body'); addG(gridGeo((u, v) => { const x = lerp(-xt(te), xt(te), u); return new V3(x, surfY(te, x), zt(te) + (v - .5) * .014); }, 10, 1, .004, up1), 'body'); }
  // ---- raised flare lip round each wheel arch, in body colour
  for (const [sz, t] of [[1, tfw], [-1, tr]]) for (const sx of [-1, 1]) { const a0 = Math.asin(clamp((P.clr + .035 - R) / (ra + .02), -1, 1)); addG(gridGeo((u, v) => { const a = lerp(a0, Math.PI - a0, u), rr = ra + .018 + (v - .5) * .05, z = sz * P.wb / 2 + Math.cos(a) * rr, tt = (z - z0) / L, y = Math.min(R + Math.sin(a) * rr, yTop(tt) - .05); return new V3(sx * bx(tt, y), y, z); }, 26, 1, .012, axis), 'paint'); }
  // ---- wheels
  const wx = t => Wp(t) - P.tw / 2 + .03;
  for (const [sz, key, t] of [[1, 'F', tfw], [-1, 'R', tr]]) for (const sx of [1, -1]) { const w = wheelGroup(R, P.tw, P.spokes); w.name = 'wheel_' + key + (sx > 0 ? 'L' : 'R'); w.position.set(sx * wx(t), R, sz * P.wb / 2); root.add(w); }
  // ---- front end: lamps, grille, intake, splitter; rear: tail lamps, bumper, pipes
  const zf = zt(1), lampY = P.hood - .17, round = P.lamps === 'round';
  for (const sx of [-1, 1]) {
    if (round) { for (const o of [0, .22]) { add(mesh(new THREE.CylinderGeometry(.12, .12, .06, 22).rotateX(Math.PI / 2), 'silver', sx * (hw * .5 + o), lampY, zf - .04)); add(mesh(new THREE.CircleGeometry(.1, 20), 'front', sx * (hw * .5 + o), lampY, zf - .005)); } }
    else { const lp = rbox(.34, .07, .045, 'front', sx * hw * .6, lampY, zf - .035); lp.rotation.y = -sx * .35; add(lp); const bz = rbox(.4, .115, .05, 'body', sx * hw * .6, lampY, zf - .06); bz.rotation.y = -sx * .35; add(bz); const dr = rbox(.3, .014, .04, 'front', sx * hw * .58, lampY - .085, zf - .03); dr.rotation.y = -sx * .35; add(dr); }
    const tl = rbox(.44, .07, .05, 'rear', sx * hw * .6, P.deck - .15, z0 + .015); tl.rotation.y = sx * .3; add(tl); add(rbox(.07, .06, .12, 'accent', sx * hw * .9, P.belt - .1, zf - .35)); add(ell(.05, .045, .03, 'front', sx * hw * .8, P.clr + .16, zf - .03)); }
  add(rbox(hw * .8, .13, .06, 'body', 0, P.hood - .3, zf - .005)); for (let q = 0; q < 3; q++) add(rbox(hw * .76, .012, .02, 'trim', 0, P.hood - .34 + q * .035, zf + .026));
  add(rbox(hw * 1.34, .1, .07, 'body', 0, P.clr + .14, zf - .02)); for (let q = 0; q < 3; q++) add(rbox(hw * 1.26, .01, .02, 'trim', 0, P.clr + .11 + q * .03, zf + .018));
  add(rbox(hw * 1.4, .03, .32, 'body', 0, P.clr - .005, zf - .09)); add(rbox(hw * 1.2, .1, .1, 'body', 0, P.clr + .1, z0 + .03)); add(rbox(hw * .5, .035, .05, 'silver', 0, P.hood - .3, zf + .03));
  if (P.bumper === 'chrome') { add(rbox(hw * 1.66, .08, .08, 'silver', 0, P.clr + .22, zf + .02)); add(rbox(hw * 1.5, .07, .08, 'silver', 0, P.clr + .24, z0 - .02)); }
  if (P.diffuser) { add(rbox(hw * 1.2, .06, .24, 'body', 0, P.clr + .02, z0 - .02)); for (let q = -3; q <= 3; q++) add(rbox(.02, .08, .24, 'trim', q * .15, P.clr + .05, z0 - .03)); }
  for (const sx of [-1, 1]) add(rbox(.05, .09, P.wb - 2 * ra - .1, 'body', sx * (Wp(.5) - .006), P.clr + .06, 0));
  const ex = P.pipes || [[-hw * .5, P.clr + .13, z0 - .02], [hw * .5, P.clr + .13, z0 - .02]]; root.userData.exhaust = ex.map(p => p.slice());
  for (const [x, y, z] of ex) { add(mesh(new THREE.CylinderGeometry(.052, .048, .15, 20, 1, true).rotateX(Math.PI / 2), 'silver', x, y, z)); add(mesh(new THREE.CircleGeometry(.046, 16), 'body', x, y, z + .03)); }
  // ---- mirrors, vents, scoop, aerial
  for (const sx of [-1, 1]) { const zm = zt(baseF) - .04, mx = sx * (gx(baseF, P.belt + .12) + .12); add(rbox(.2, .12, .1, 'paint', mx, P.belt + .14, zm)); add(rbox(.16, .085, .02, 'trim', mx, P.belt + .14, zm + .055)); add(rbox(.05, .05, .1, 'body', sx * (gx(baseF, P.belt + .12) + .04), P.belt + .1, zm)); }
  for (let i = 0; i < (P.vents || 0); i++) for (const sx of [-1, 1]) { const tz = P.ct1 + .06 + i * .06; if (tz < .92) add(rbox(.3, .02, .06, 'body', sx * hw * .36, surfY(tz, hw * .36) + .006, zt(tz))); }
  if (P.bulge) { const m = rbox(.5, .05, 1.1, 'paint', 0, surfY(.8, 0) + .025, zt(.8)); add(m); }
  if (P.scoop) { const ts = P.ct1 - P.fw - .035; add(rbox(.34, .1, .34, 'paint', 0, P.roof + .02, zt(ts))); add(rbox(.24, .045, .02, 'body', 0, P.roof + .03, zt(ts) + .175)); }
  if (P.wing && P.wing !== 'none') { const aY = P.wingY || (P.wing === 'gt' ? P.deck + .42 : P.wing === 'rally' ? P.roof * .9 : P.deck + .13), aZ = z0 + (P.wing === 'rally' ? .08 : .14), ww = hw * (P.wing === 'gt' ? 1.02 : .96), ch = P.wing === 'gt' ? .4 : P.wing === 'rally' ? .38 : .24;
    if (P.wing === 'lip' || P.wing === 'duck') { const d = rbox(ww * 1.5, .05, ch, 'body', 0, P.deck + .05, z0 + .22); d.rotation.x = -.12; add(d); }
    else { const b = rbox(ww * 2, .05, ch, 'body', 0, aY, aZ); b.rotation.x = .1; add(b); const b2 = rbox(ww * 2, .03, ch * .5, 'paint', 0, aY + .1, aZ - .1); add(b2); for (const sx of [-1, 1]) { add(rbox(.045, .26, ch * 1.25, 'body', sx * ww * 1.0, aY + .05, aZ)); add(rbox(.07, aY - P.deck + .12, .12, 'body', sx * ww * .5, (aY + P.deck) / 2 - .02, aZ + .06)); } } }
  if (P.rails) for (const sx of [-1, 1]) add(rbox(.04, .05, (P.ct1 - P.ct0) * L * .7, 'silver', sx * gw * .7, P.roof + .02, zt((P.ct0 + P.ct1) / 2 - .02)));
  add(mesh(new THREE.CylinderGeometry(.009, .009, .32, 6), 'body', -gw * .6, P.roof + .12, zt(P.ct0 + P.rw * .6)));
  // ---- vehicle-specific
  if (P.bed) { const bl = (P.ct0 - .02) * L; for (const sx of [-1, 1]) add(rbox(.06, .34, bl, 'paint', sx * (hw - .05), P.deck + .17, zt(P.ct0 / 2))); add(rbox(hw * 2 - .1, .34, .06, 'paint', 0, P.deck + .17, z0 + .03)); add(rbox(hw * 2 - .1, .34, .06, 'paint', 0, P.deck + .17, zt(P.ct0 - .02)));
    add(rbox(hw * 1.5, .08, .1, 'body', 0, P.roof + .1, zt(P.ct1 - .14))); for (const sx of [-.55, -.18, .18, .55]) add(ell(.07, .07, .04, 'front', sx * hw * .9, P.roof + .1, zt(P.ct1 - .14) + .07)); add(rbox(hw * 1.5, .12, .14, 'silver', 0, P.clr + .22, zf));
    const sw = wheelGroup(R * .92, P.tw, 8); sw.rotation.y = Math.PI / 2; sw.position.set(0, P.deck + R * .92 - .06, z0 + .85); sw.rotation.z = .35; body.add(sw); for (const sx of [-1, 1]) body.add(bar([sx * (hw - .2), P.deck + .3, zt(P.ct0) - .05], [sx * (hw - .2), P.deck + .95, zt(P.ct0) - .05], .03, 'silver')); body.add(bar([-hw + .2, P.deck + .95, zt(P.ct0) - .05], [hw - .2, P.deck + .95, zt(P.ct0) - .05], .03, 'silver')); }
  if (P.cargo) { const cl = (P.ct0 - .02) * L; add(rbox(P.W * .98, 1.5, cl, 'paint', 0, P.belt + .8, z0 + cl / 2 + .02, 8)); for (let i = 0; i < 5; i++) add(rbox(P.W * .99, 1.1, .03, 'trim', 0, P.belt + .8, z0 + cl * (i + .5) / 5 + .02, 12));
    if (P.extra === 'fire') { add(rbox(1.2, .1, .22, 'accent', 0, P.roof + .1, zt(P.ct0 + .08))); for (const sx of [-1, 1]) { add(rbox(.1, .08, .1, 'front', sx * .5, P.roof + .17, zt(P.ct0 + .08))); add(bar([sx * .5, P.belt + 1.6, z0 + .4], [sx * .5, P.belt + 1.6, z0 + cl - .3], .04, 'silver')); } for (let q = 0; q < 8; q++) add(bar([-.5, P.belt + 1.6, z0 + .5 + q * .42], [.5, P.belt + 1.6, z0 + .5 + q * .42], .025, 'silver')); } }
  if (P.extra === 'taxi') { add(rbox(.62, .17, .3, 'stripe', 0, P.roof + .1, zt((P.ct0 + P.ct1) / 2))); add(rbox(.44, .05, .02, 'body', 0, P.roof + .1, zt((P.ct0 + P.ct1) / 2) + .16)); }
  if (P.extra === 'police') { add(rbox(1.0, .09, .24, 'body', 0, P.roof + .08, zt((P.ct0 + P.ct1) / 2))); add(rbox(.4, .08, .22, 'front', -.28, P.roof + .15, zt((P.ct0 + P.ct1) / 2))); add(rbox(.4, .08, .22, 'accent', .28, P.roof + .15, zt((P.ct0 + P.ct1) / 2))); }
  root.userData.door = [(P.clr + P.belt) / 2 + .03, zt(dB != null ? dB : (dF + dR) / 2)]; bakeBody(body); return root;
}
function buildF1(P, id) {
  const root = new THREE.Group(); root.name = 'sty:' + id; const body = new THREE.Group(); body.name = 'body'; root.add(body); const add = m => { if (m) body.add(m); }, v2 = P.v === 2, V3 = THREE.Vector3;
  const L = 4.3, z0 = -L / 2, zt = t => z0 + t * L, hw = .42, Rf = .36, Rr = .41, twf = .34, twr = .44, t0 = .3;
  const Wp = curve([[t0, hw * .8], [.38, hw], [.58, hw], [.8, hw * .62], [.95, hw * .34], [1, hw * .26]]), Tp = curve([[t0, .66], [.38, .76], [.55, .72], [.7, .58], [.9, .44], [1, .38]]), Bp = curve([[t0, .2], [.9, .2], [1, .24]]);
  const st = [], N = 40; for (let i = 0; i < N; i++) { const t = t0 + (1 - t0) * (.5 - .5 * Math.cos(i / (N - 1) * Math.PI)); st.push({ z: zt(t), w: Wp(t), yb: Bp(t), yt: Tp(t), nt: 2.8, nb: 3.2 }); }
  const bg = loftGeo(st, 40); bg.computeVertexNormals(); add(mesh(bg, 'paint'));
  const topAt = t => Tp(t), zc = zt(.47);
  add(ell(.2, .02, .36, 'body', 0, topAt(.47) + .012, zc)); add(ell(.13, .14, .14, 'accent', 0, topAt(.47) + .1, zc - .02)); add(ell(.09, .035, .07, 'window', 0, topAt(.47) + .13, zc + .1)); add(rbox(.5, .14, .22, 'trim', 0, topAt(.47) + .03, zc - .3));           // cockpit opening, helmet with its visor, the driver's shoulders
  add(ell(.17, .06, .1, 'body', 0, .42, zt(1) - .04)); add(rbox(.34, .02, .02, 'silver', 0, .5, zt(1) - .02));                         // nose intake
  add(rbox(.05, .17, .06, 'stripe', -.2, topAt(.62) + .03, zt(.62))); add(rbox(.05, .17, .06, 'stripe', .2, topAt(.62) + .03, zt(.62)));
  add(mesh(new THREE.CircleGeometry(.2, 28).rotateX(-Math.PI / 2), 'stripe', 0, topAt(.86) + .012, zt(.86)));                           // number roundel on the nose
  add(mesh(new THREE.TorusGeometry(.3, .03, 8, 22, Math.PI), 'silver', 0, topAt(.38) - .02, zt(.33)));                                    // roll hoop
  for (const sx of [-1, 1]) add(bar([sx * .28, topAt(.36) - .02, zt(.33)], [sx * .12, .96, zt(.3)], .028, 'silver'));
  // engine, gearbox and tubular frame, left open like the reference
  add(rbox(.6, .46, .9, 'trim', 0, .56, zt(.17))); add(rbox(.56, .06, .8, 'silver', 0, .8, zt(.17))); add(rbox(.34, .34, .46, 'trim', 0, .48, zt(.03)));
  for (let q = 0; q < 6; q++) add(mesh(new THREE.CylinderGeometry(.045, .05, .22, 10), 'silver', (q % 3 - 1) * .15, .94, zt(.17) + (q < 3 ? -.2 : .2)));
  for (let q = 0; q < 4; q++) add(bar([(q - 1.5) * .12, .68, zt(.1)], [(q - 1.5) * .14, .46, z0 - .1], .045, 'silver'));
  for (const sx of [-1, 1]) { add(bar([sx * .3, .3, zt(.3)], [sx * .32, .62, zt(.14)], .02, 'silver')); add(bar([sx * .3, .3, z0 + .2], [sx * .26, .7, zt(.2)], .02, 'silver')); }
  const fz = 1.4, rz = -1.2;
  for (const [key, z] of [['F', fz], ['R', rz]]) { const R = key === 'F' ? Rf : Rr, tw = key === 'F' ? twf : twr, wxs = hw + tw / 2 + .12;       // narrower tyres in front, wider and a little taller at the back
    for (const sx of [1, -1]) { const w = wheelGroup(R, tw, P.spokes); w.name = 'wheel_' + key + (sx > 0 ? 'L' : 'R'); w.position.set(sx * wxs, R, z); root.add(w);
      add(bar([sx * hw * .85, .3, z + .16], [sx * (wxs - tw / 2 - .02), R + .05, z], .02, 'silver')); add(bar([sx * hw * .85, .46, z - .16], [sx * (wxs - tw / 2 - .02), R - .04, z + .02], .02, 'silver')); add(bar([sx * hw * .9, .38, z], [sx * (wxs - tw / 2 - .02), R + .1, z], .013, 'silver')); } }
  for (const sx of [-1, 1]) add(ell(.05, .04, .04, 'stripe', sx * .34, topAt(.55) + .1, zt(.58)));
  if (v2) { add(rbox(1.5, .035, .34, 'paint', 0, .16, zt(.99))); for (const sx of [-1, 1]) add(rbox(.03, .2, .4, 'paint', sx * .76, .22, zt(.99))); add(rbox(1.1, .04, .32, 'paint', 0, 1.0, z0 - .02)); for (const sx of [-1, 1]) add(rbox(.03, .4, .38, 'paint', sx * .55, .84, z0 - .02)); }
  root.userData.exhaust = [[-.1, .55, z0 - .1], [.1, .55, z0 - .1]]; root.userData.door = [.62, zc]; bakeBody(body); return root;
}
