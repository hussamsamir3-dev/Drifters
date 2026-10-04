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
  for (const s of st) for (let j = 0; j < ring; j++) { const a = j / ring * TAU, c = Math.cos(a), sn = Math.sin(a), nn = sn >= 0 ? s.nt : s.nb, yc = (s.yb + s.yt) / 2, hy = (s.yt - s.yb) / 2; pos.push((s.x || 0) + s.w * sp(c, nn), yc + hy * sp(sn, nn), s.z); }
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
const mesh = (g, kind, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(g, M(kind)); m.position.set(x, y, z); return m; };
const rboxG = (w, h, d, nn = 5) => { const st = [[0, .5], [.025, .82], [.1, 1], [.9, 1], [.975, .82], [1, .5]].map(([f, s]) => ({ z: -d / 2 + d * f, w: w / 2 * s, yb: -h / 2 * s, yt: h / 2 * s, nt: nn, nb: nn })), g = loftGeo(st, 20); g.computeVertexNormals(); return g; };
const rbox = (w, h, d, kind, x = 0, y = 0, z = 0, nn = 5) => mesh(rboxG(w, h, d, nn), kind, x, y, z);
const ell = (a, b, c, kind, x, y, z) => { const m = mesh(new THREE.SphereGeometry(1, 18, 12), kind, x, y, z); m.scale.set(a, b, c); return m; };
const bar = (p0, p1, r, kind) => { const a = new THREE.Vector3(...p0), b = new THREE.Vector3(...p1), d = b.clone().sub(a), m = mesh(new THREE.CylinderGeometry(r, r, d.length(), 8), kind); m.position.copy(a.add(b).multiplyScalar(.5)); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); return m; };
// ---------------- wheels: rounded tyre, ring on the sidewall, dished rim with spokes, brake disc and caliper behind ----------------
function wheelGroup(R, w, spokes = 10) {
  const g = new THREE.Group(), hw = w / 2;
  g.add(mesh(new THREE.LatheGeometry([[R * .58, -hw], [R * .86, -hw], [R * .97, -hw * .78], [R, -hw * .42], [R, hw * .42], [R * .97, hw * .78], [R * .86, hw], [R * .58, hw]].map(([r, y]) => new THREE.Vector2(r, y)), 36).rotateZ(Math.PI / 2), 'tire'));
  g.add(mesh(new THREE.CylinderGeometry(R * .6, R * .6, w * .88, 32, 1, true).rotateZ(Math.PI / 2), 'silver'));
  g.add(mesh(new THREE.CylinderGeometry(R * .44, R * .44, .03, 28).rotateZ(Math.PI / 2), 'silver', 0));
  g.add(rbox(.06, R * .2, R * .26, 'accent', hw * .5, R * .36, R * .12));
  for (const s of [-1, 1]) {
    g.add(mesh(new THREE.CircleGeometry(R * .58, 32).rotateY(s * Math.PI / 2), 'body', s * (hw * .74), 0, 0));
    g.add(mesh(new THREE.TorusGeometry(R * .6, .03, 8, 36).rotateY(Math.PI / 2), 'rim7', s * (hw - .012)));
    g.add(mesh(new THREE.TorusGeometry(R * .79, .011, 6, 44).rotateY(Math.PI / 2), 'stripe', s * (hw - .004)));
    for (let i = 0; i < spokes; i++) { const sk = new THREE.BoxGeometry(.028, R * .5, R * (spokes > 7 ? .075 : .13)); sk.translate(0, R * .33, 0); sk.rotateX(i / spokes * TAU); g.add(mesh(sk, 'rim7', s * (hw - .026))); }
    g.add(mesh(new THREE.CylinderGeometry(R * .13, R * .13, .045, 16).rotateZ(Math.PI / 2), 'silver', s * (hw - .018)));
  }
  return g;
}
// ---------------- archetypes (units: metres, drawn chunky; the game scales them up) ----------------
const A = {
  hatch: { L: 3.5, W: 1.8, wb: 2.2, R: .4, tw: .3, clr: .2, belt: 0.74, hood: 0.8, deck: 0.9, roof: 1.38, ct0: .04, ct1: .66, rw: .13, fw: .2, flare: .09, nose: .17, tail: .1, wing: 'rally', vents: 2, scoop: 1, spokes: 10 },
  sedan: { L: 4.2, W: 1.8, wb: 2.6, R: .38, tw: .27, clr: .2, belt: 0.72, hood: 0.76, deck: 0.8, roof: 1.36, ct0: 0.16, ct1: .62, rw: .17, fw: .2, flare: .06, nose: .15, tail: .1, wing: 'none', vents: 0, spokes: 7 },
  coupe: { L: 4.3, W: 1.86, wb: 2.6, R: .39, tw: .3, clr: .19, belt: 0.72, hood: 0.8, deck: 0.8, roof: 1.32, ct0: .26, ct1: .58, rw: .12, fw: .16, flare: .08, nose: .14, tail: .1, wing: 'none', vents: 2, spokes: 10 },
  gt: { L: 4.1, W: 1.96, wb: 2.55, R: .41, tw: .34, clr: .16, belt: 0.66, hood: 0.7, deck: 0.76, roof: 1.24, ct0: .2, ct1: .6, rw: .1, fw: .17, flare: .13, nose: .14, tail: .09, wing: 'gt', vents: 2, spokes: 12 },
  super: { L: 4.2, W: 2.0, wb: 2.5, R: .41, tw: .35, clr: .14, belt: .62, hood: .6, deck: .78, roof: 1.1, ct0: .26, ct1: .6, rw: .18, fw: .22, flare: .12, nose: .15, tail: .1, wing: 'lip', vents: 2, spokes: 10 },
  suv: { L: 4.2, W: 1.9, wb: 2.65, R: .43, tw: .3, clr: .3, belt: 0.92, hood: 1.0, deck: 1.06, roof: 1.66, ct0: .08, ct1: .6, rw: .06, fw: .17, flare: .07, nose: .13, tail: .08, wing: 'none', vents: 0, rails: 1, spokes: 10 },
  truck: { L: 4.7, W: 1.95, wb: 2.95, R: .47, tw: .33, clr: .32, belt: 1.0, hood: 1.08, deck: .96, roof: 1.62, ct0: .46, ct1: .7, rw: .05, fw: .12, flare: .08, nose: .13, tail: .06, wing: 'none', vents: 0, bed: 1, spokes: 8 },
  van: { L: 4.4, W: 1.9, wb: 2.8, R: .38, tw: .27, clr: .22, belt: 1.26, hood: 1.1, deck: 1.26, roof: 1.86, ct0: .03, ct1: .84, rw: .02, fw: .08, flare: .04, nose: .15, tail: .05, wing: 'none', vents: 0, spokes: 8, gw: .9 },
  boxtruck: { L: 5.5, W: 2.0, wb: 3.5, R: .44, tw: .3, clr: .36, belt: 1.02, hood: 1.0, deck: .98, roof: 1.9, ct0: .7, ct1: .93, rw: .03, fw: .1, flare: .05, nose: .08, tail: .04, wing: 'none', vents: 0, cargo: 1, spokes: 8 },
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
function buildCar(P, id) {
  const root = new THREE.Group(); root.name = 'sty:' + id; const body = new THREE.Group(); body.name = 'body'; root.add(body); const add = m => { if (m) body.add(m); }, addPart = (g, k) => { if (g) body.add(mesh(g, k)); };
  const L = P.L, hw = P.W / 2, z0 = -L / 2, zt = t => z0 + t * L, R = P.R, ra = R + .055, tr = (-P.wb / 2 - z0) / L, tfw = (P.wb / 2 - z0) / L, wdT = ra * 1.2 / L, nf = P.nose, nr = P.tail;
  const bump = (t, c) => { const d = (t - c) / wdT; return ab(d) < 1 ? .5 * (1 + Math.cos(d * Math.PI)) : 0; };
  const Wp = t => { let w = hw; if (t > 1 - nf) { const u = (t - 1 + nf) / nf; w *= .52 + .48 * Math.sqrt(Math.max(0, 1 - u * u)); } if (t < nr) { const u = (nr - t) / nr; w *= .56 + .44 * Math.sqrt(Math.max(0, 1 - u * u)); } return w + P.flare * (bump(t, tr) + bump(t, tfw)); };
  const t1 = Math.max(.07, P.ct0 + .02);
  const Tp0 = curve([[0, P.deck * .85], [.05, P.deck], [t1, P.deck], [t1 + .07, P.belt], [P.ct1 - .05, P.belt], [P.ct1, P.hood], [1 - nf * .4, P.hood], [1, P.hood * .8]]);
  const Tp = t => { const bw = Math.max(bump(t, tr), bump(t, tfw)); return Math.max(Tp0(t), Tp0(t) + (2 * R + .14 - Tp0(t)) * bw); };     // the fenders rise over the wheels
  const Bp = curve([[0, P.clr + .08], [.06, P.clr], [.94, P.clr], [1, P.clr + .07]]), nt = P.nt || 3.4;
  // ---- lower body: one smooth loft
  const st = [], N = 64; for (let i = 0; i < N; i++) { const t = .5 - .5 * Math.cos(i / (N - 1) * Math.PI), yb = Bp(t); st.push({ z: zt(t), w: Wp(t), yb, yt: Math.max(Tp(t), yb + .22), nt, nb: 7 }); }
  const bg = loftGeo(st, 44), BP = bg.attributes.position, pocket = new Uint8Array(BP.count), depth = P.tw + .045;
  for (let v = 0; v < BP.count; v++) { const x = BP.getX(v), y = BP.getY(v), z = BP.getZ(v); if (ab(x) < hw * .6) continue; for (const wz of [-P.wb / 2, P.wb / 2]) { const d = Math.hypot(z - wz, y - R); if (d < ra) { const k = sstep(ra, ra * .8, d); BP.setX(v, x - sg(x) * depth * k); if (k > .6) pocket[v] = 1; } } }     // wheel wells cut into the sides
  bg.computeVertexNormals();
  addPart(part(bg, (t, a, b, c) => !(pocket[a] && pocket[b] && pocket[c])), 'paint'); addPart(part(bg, (t, a, b, c) => pocket[a] && pocket[b] && pocket[c]), 'body');
  // ---- cabin: a second loft, with glass chosen by where each face points
  const Rc = curve([[P.ct0, P.belt - .02], [P.ct0 + P.rw, P.roof], [P.ct1 - P.fw, P.roof], [P.ct1, P.belt - .02]]), gw = hw * (P.gw || .85), gh = [], Ng = 34;
  for (let i = 0; i < Ng; i++) { const u = i / (Ng - 1), t = P.ct0 + (P.ct1 - P.ct0) * u, e = .84 + .16 * Math.sin(Math.PI * u); gh.push({ z: zt(t), w: gw * e, yb: P.belt - .1, yt: Rc(t), nt: 3.6, nb: 8 }); }
  const gg = loftGeo(gh, 36); gg.computeVertexNormals(); const GP = gg.attributes.position, GN = gg.attributes.normal, zB = zt(P.ct0 + (P.ct1 - P.ct0) * (P.bpil ?? .52)), zA = zt(P.ct0 + P.rw * .75), zF = zt(P.ct1 - P.fw * .55);
  const glass = (ti, a, b, c) => { const ny = (GN.getY(a) + GN.getY(b) + GN.getY(c)) / 3, nx = (GN.getX(a) + GN.getX(b) + GN.getX(c)) / 3, nz = (GN.getZ(a) + GN.getZ(b) + GN.getZ(c)) / 3, cx = (GP.getX(a) + GP.getX(b) + GP.getX(c)) / 3, cz = (GP.getZ(a) + GP.getZ(b) + GP.getZ(c)) / 3;
    if (ny > .84) return false; if (nz > .22) return ab(cx) < gw * .8; if (nz < -.22) return ab(cx) < gw * .78; return ab(nx) > .28 && cz > zA && cz < zF && ab(cz - zB) > .06; };
  addPart(part(gg, (t, a, b, c) => !glass(t, a, b, c)), 'paint'); addPart(part(gg, glass), 'window');
  const surfY = (t, x) => { const yb = Bp(t), yt = Math.max(Tp(t), yb + .22), yc = (yb + yt) / 2, hy = (yt - yb) / 2, k = clamp(ab(x) / Wp(t), 0, .98); return yc + hy * Math.pow(1 - Math.pow(k, nt), 1 / nt); };
  // ---- wheels
  const wx = t => Wp(t) - P.tw / 2 + .03;
  for (const [sz, key, t] of [[1, 'F', tfw], [-1, 'R', tr]]) for (const sx of [1, -1]) { const w = wheelGroup(R, P.tw, P.spokes); w.name = 'wheel_' + key + (sx > 0 ? 'L' : 'R'); w.position.set(sx * wx(t), R, sz * P.wb / 2); root.add(w); }
  // ---- front end: lamps, grille, splitter; rear: tail lamps, bumper, pipes
  const zf = zt(1), lampY = P.hood - .17;
  for (const sx of [-1, 1]) { add(ell(.2, .085, .07, 'front', sx * hw * .62, lampY, zf - .03)); add(rbox(.34, .12, .06, 'trim', sx * hw * .62, lampY, zf - .08)); add(rbox(.3, .075, .05, 'rear', sx * hw * .64, P.deck - .16, z0 + .01)); add(rbox(.07, .06, .12, 'accent', sx * hw * .88, P.belt - .1, zf - .35)); }
  add(rbox(hw * .72, .13, .06, 'trim', 0, P.hood - .3, zf - .005)); add(rbox(hw * 1.3, .1, .07, 'trim', 0, P.clr + .14, zf - .02)); add(rbox(hw * 1.36, .03, .3, 'trim', 0, P.clr - .005, zf - .09)); add(rbox(hw * 1.2, .1, .1, 'trim', 0, P.clr + .1, z0 + .03));
  add(rbox(hw * .5, .035, .05, 'silver', 0, P.hood - .3, zf + .022));
  for (const sx of [-1, 1]) add(rbox(.05, .09, P.wb - 2 * ra - .1, 'trim', sx * (Wp(.5) - .006), P.clr + .06, 0));          // side skirts
  const ex = P.pipes || [[-hw * .5, P.clr + .13, z0 - .02], [hw * .5, P.clr + .13, z0 - .02]]; root.userData.exhaust = ex.map(p => p.slice());
  for (const [x, y, z] of ex) { add(mesh(new THREE.CylinderGeometry(.05, .046, .15, 18, 1, true).rotateX(Math.PI / 2), 'silver', x, y, z)); add(mesh(new THREE.CircleGeometry(.044, 16), 'body', x, y, z + .03)); }
  // ---- mirrors, vents, scoop, aerial, rails
  for (const sx of [-1, 1]) { const zm = zt(P.ct1) - .1; add(rbox(.2, .11, .1, 'paint', sx * (gw + .13), P.belt + .15, zm)); add(rbox(.025, .08, .02, 'silver', sx * (gw + .13), P.belt + .15, zm + .055)); }
  for (let i = 0; i < (P.vents || 0); i++) for (const sx of [-1, 1]) { const tz = P.ct1 + .06 + i * .06; if (tz < .9) add(rbox(.28, .02, .055, 'body', sx * hw * .38, surfY(tz, hw * .38) + .004, zt(tz))); }
  if (P.scoop) { add(rbox(.34, .1, .32, 'paint', 0, P.roof + .025, zt(P.ct1 - P.fw - .035))); add(rbox(.24, .05, .02, 'body', 0, P.roof + .035, zt(P.ct1 - P.fw - .035) + .165)); }
  if (P.wing && P.wing !== 'none') { const aY = P.wingY || (P.wing === 'gt' ? P.deck + .42 : P.wing === 'rally' ? P.roof * .9 : P.deck + .13), aZ = z0 + (P.wing === 'rally' ? .06 : .14), ww = hw * (P.wing === 'gt' ? 1.02 : .96), ch = P.wing === 'gt' ? .4 : P.wing === 'rally' ? .36 : .24;
    if (P.wing === 'lip' || P.wing === 'duck') add(rbox(ww * 1.5, .05, ch, 'trim', 0, P.deck + .05, z0 + .22).rotateX(-.12) || null); else { const b = rbox(ww * 2, .05, ch, 'trim', 0, aY, aZ); b.rotation.x = .1; add(b); add(rbox(ww * 2, .03, ch * .5, 'body', 0, aY + .1, aZ - .1)); for (const sx of [-1, 1]) { add(rbox(.045, .24, ch * 1.2, 'trim', sx * ww * 1.0, aY + .05, aZ)); add(rbox(.07, aY - P.deck + .12, .1, 'trim', sx * ww * .5, (aY + P.deck) / 2 - .02, aZ + .06)); } } }
  if (P.rails) for (const sx of [-1, 1]) add(rbox(.04, .05, (P.ct1 - P.ct0) * L * .7, 'silver', sx * gw * .7, P.roof + .02, zt((P.ct0 + P.ct1) / 2 - .02)));
  add(mesh(new THREE.CylinderGeometry(.009, .009, .32, 6), 'body', -gw * .6, P.roof + .12, zt(P.ct0 + P.rw * .6)));
  // ---- vehicle-specific
  if (P.bed) { const bl = (P.ct0 - .02) * L; for (const sx of [-1, 1]) add(rbox(.06, .34, bl, 'paint', sx * (hw - .05), P.deck + .17, zt(P.ct0 / 2))); add(rbox(hw * 2 - .1, .34, .06, 'paint', 0, P.deck + .17, z0 + .03)); add(rbox(hw * 2 - .1, .34, .06, 'paint', 0, P.deck + .17, zt(P.ct0 - .02)));
    add(rbox(hw * 1.5, .08, .1, 'trim', 0, P.roof + .1, zt(P.ct1 - .14))); for (const sx of [-.55, -.18, .18, .55]) add(ell(.07, .07, .04, 'front', sx * hw * .9, P.roof + .1, zt(P.ct1 - .14) + .07)); add(rbox(hw * 1.5, .12, .14, 'silver', 0, P.clr + .22, zf + .0));
    const sw = wheelGroup(R * .92, P.tw, 8); sw.rotation.y = Math.PI / 2; sw.position.set(0, P.deck + R * .92 - .06, z0 + .85); sw.rotation.z = .35; for (const m of sw.children) { m.userData.spare = 1; } body.add(sw); body.add(bar([-hw + .2, P.deck + .3, zt(P.ct0) - .05], [-hw + .2, P.deck + .95, zt(P.ct0) - .05], .03, 'silver')); body.add(bar([hw - .2, P.deck + .3, zt(P.ct0) - .05], [hw - .2, P.deck + .95, zt(P.ct0) - .05], .03, 'silver')); body.add(bar([-hw + .2, P.deck + .95, zt(P.ct0) - .05], [hw - .2, P.deck + .95, zt(P.ct0) - .05], .03, 'silver')); }
  if (P.cargo) { const cl = (P.ct0 - .02) * L; add(rbox(P.W * .98, 1.95, cl, 'paint', 0, P.belt + .95 + .02, z0 + cl / 2 + .02, 8)); for (let i = 0; i < 5; i++) add(rbox(P.W * .99, 1.5, .03, 'trim', 0, P.belt + .95, z0 + cl * (i + .5) / 5 + .02, 12));
    if (P.extra === 'fire') { add(rbox(1.2, .1, .22, 'accent', 0, P.roof + .1, zt(P.ct0 + .08))); for (const sx of [-1, 1]) { add(rbox(.1, .08, .1, 'front', sx * .5, P.roof + .17, zt(P.ct0 + .08))); add(bar([sx * .5, P.belt + 2.0, z0 + .4], [sx * .5, P.belt + 2.0, z0 + cl - .3], .04, 'silver')); } for (let q = 0; q < 8; q++) add(bar([-.5, P.belt + 2.0, z0 + .5 + q * .42], [.5, P.belt + 2.0, z0 + .5 + q * .42], .025, 'silver')); } }
  if (P.extra === 'taxi') { add(rbox(.62, .17, .3, 'stripe', 0, P.roof + .1, zt((P.ct0 + P.ct1) / 2))); add(rbox(.44, .05, .02, 'trim', 0, P.roof + .1, zt((P.ct0 + P.ct1) / 2) + .16)); }
  if (P.extra === 'police') { add(rbox(1.0, .09, .24, 'trim', 0, P.roof + .08, zt((P.ct0 + P.ct1) / 2))); add(rbox(.4, .08, .22, 'front', -.28, P.roof + .15, zt((P.ct0 + P.ct1) / 2))); add(rbox(.4, .08, .22, 'accent', .28, P.roof + .15, zt((P.ct0 + P.ct1) / 2))); }
  return root;
}
function buildF1(P, id) {
  const root = new THREE.Group(); root.name = 'sty:' + id; const body = new THREE.Group(); body.name = 'body'; root.add(body); const add = m => { if (m) body.add(m); }, v2 = P.v === 2;
  const L = 4.0, z0 = -L / 2, zt = t => z0 + t * L, hw = .36, R = .42, tw = .44;
  const Wp = t => hw * (t > .74 ? .3 + .7 * Math.pow(1 - (t - .74) / .26, .6) : t < .1 ? .62 + .38 * Math.sqrt(Math.max(0, 1 - Math.pow((.1 - t) / .1, 2))) : 1);
  const Tp = curve([[0, .56], [.1, .72], [.26, .78], [.4, .64], [.55, .6], [.76, .5], [1, .36]]), st = [], N = 44;
  for (let i = 0; i < N; i++) { const t = .5 - .5 * Math.cos(i / (N - 1) * Math.PI); st.push({ z: zt(t), w: Wp(t), yb: .15, yt: Tp(t), nt: 2.8, nb: 3.4 }); }
  const bg = loftGeo(st, 36); bg.computeVertexNormals(); add(mesh(bg, 'paint'));
  add(rbox(.34, .06, .56, 'body', 0, Tp(.5) + .005, zt(.5) + .05)); add(ell(.14, .14, .15, 'accent', 0, Tp(.5) + .1, zt(.5) - .02)); add(ell(.09, .05, .05, 'window', 0, Tp(.5) + .12, zt(.5) + .1));
  const rh = mesh(new THREE.TorusGeometry(.27, .03, 8, 20, Math.PI), 'silver', 0, Tp(.34) - .02, zt(.34)); add(rh); add(rbox(.5, .3, .6, 'trim', 0, .78, zt(.12))); for (let q = 0; q < 4; q++) add(bar([(q - 1.5) * .09, .85, zt(.16)], [(q - 1.5) * .12, .62, z0 - .06], .035, 'silver'));
  const rd = mesh(new THREE.CircleGeometry(.17, 28).rotateX(-Math.PI / 2), 'stripe', 0, Tp(.84) + .006, zt(.84)); add(rd);
  add(rbox(.34, .1, .02, 'window', 0, Tp(.56) + .08, zt(.62)).rotateX?.(-.4) || null);
  const wxs = hw + tw / 2 + .1, fz = 1.3, rz = -1.2;
  for (const [sz, key, z] of [[1, 'F', fz], [-1, 'R', rz]]) for (const sx of [1, -1]) { const w = wheelGroup(R, tw, P.spokes); w.name = 'wheel_' + key + (sx > 0 ? 'L' : 'R'); w.position.set(sx * wxs, R, z); root.add(w);
    add(bar([sx * hw * .9, .3, z + .12], [sx * (wxs - tw / 2 - .02), R + .04, z], .016, 'silver')); add(bar([sx * hw * .9, .42, z - .12], [sx * (wxs - tw / 2 - .02), R - .02, z + .02], .016, 'silver')); }
  add(rbox(1.3, .03, .32, 'paint', 0, .12, zt(.97))); for (const sx of [-1, 1]) add(rbox(.03, .18, .38, 'paint', sx * .66, .17, zt(.97)));
  if (v2) { add(rbox(1.0, .035, .3, 'paint', 0, .98, z0 - .03)); for (const sx of [-1, 1]) add(rbox(.03, .36, .36, 'paint', sx * .5, .82, z0 - .03)); add(rbox(.06, .3, .1, 'trim', 0, .78, z0 + .1)); }
  root.userData.exhaust = [[-.1, .6, z0 - .06], [.1, .6, z0 - .06]]; return root;
}
