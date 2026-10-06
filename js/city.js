// The night city. Buildings are real shapes (podium, tower, setbacks, rooftop plant, antennas) in real sizes, so the window grid on every facade is the same physical size
// (a 3.0 m bay and a 3.6 m floor) on every building. Facades are drawn on a window grid with mullions, spandrels, balconies or punched stone openings; lit windows are warm
// and cool whites (never rainbow colours), lit floor by floor in the offices and at random in the flats, with blinds and ceiling lights.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const BAY = 3.0, FLOOR = 3.6, TILE_W = BAY * 8, TILE_H = FLOOR * 16;      // one texture tile is 8 bays wide and 16 floors tall
const STYLES = [
  { name: 'blue glass', kind: 'glass', wall: '#1c2027', mull: '#7d8591', glassTop: '#223044', glassBot: '#0c121b', floorOn: .5, cool: .3, rand: .08 },
  { name: 'green glass', kind: 'glass', wall: '#1a2220', mull: '#6f8480', glassTop: '#1d3a3a', glassBot: '#0a1716', floorOn: .45, cool: .25, rand: .1 },
  { name: 'bronze glass', kind: 'glass', wall: '#24201c', mull: '#8a7a68', glassTop: '#3a3027', glassBot: '#15110d', floorOn: .5, cool: .1, rand: .1 },
  { name: 'flats', kind: 'flats', wall: '#8d8a84', mull: '#6b6a66', glassTop: '#1a2028', glassBot: '#0e1318', floorOn: 0, cool: .04, rand: .38 },
  { name: 'stone', kind: 'punched', wall: '#6c665e', mull: '#4b4741', glassTop: '#1c232c', glassBot: '#0c1015', floorOn: .2, cool: .12, rand: .3 },
];
const WARM = ['#ffe2b0', '#ffd79a', '#ffedcf', '#fff4de', '#ffcf8a', '#ffe9c2'], COOL = ['#e9f2ff', '#d9e8ff', '#f2f7ff'];
const pick = (a, r) => a[Math.floor(r() * a.length) % a.length];

function facade(st, r) {
  const W = 512, H = 1024, cw = 64, ch = 64, mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; }, dc = mk(), ec = mk(), k = dc.getContext('2d'), e = ec.getContext('2d');
  k.fillStyle = st.wall; k.fillRect(0, 0, W, H); e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  if (st.kind !== 'glass') for (let i = 0; i < 5000; i++) { k.fillStyle = 'rgba(' + (r() < .5 ? '255,255,255' : '0,0,0') + ',' + (.03 + r() * .06) + ')'; k.fillRect(r() * W, r() * H, 1 + r() * 2, 1 + r() * 2); }      // concrete / stone grain
  for (let row = 0; row < 16; row++) { const floorLit = r() < st.floorOn;
    for (let col = 0; col < 8; col++) { const x = col * cw, y = row * ch; let gx, gy, gw, gh;
      if (st.kind === 'glass') { gx = x + 3; gy = y + 3; gw = cw - 6; gh = ch - 20; }                              // a curtain-wall bay: glass above a spandrel panel
      else if (st.kind === 'flats') { gx = x + 14; gy = y + 10; gw = cw - 28; gh = ch - 30; }                      // a flat's window over a balcony slab
      else { gx = x + 16; gy = y + 12; gw = cw - 32; gh = ch - 26; }                                              // a punched opening in stone
      if (st.kind === 'glass') { k.fillStyle = st.mull; k.fillRect(x, y, cw, ch); k.fillStyle = st.wall; k.fillRect(x + 1, y + ch - 17, cw - 2, 15); }
      if (st.kind === 'flats') { k.fillStyle = '#a7a39b'; k.fillRect(x + 2, y + ch - 14, cw - 4, 7); k.fillStyle = '#5c5a56'; k.fillRect(x + 2, y + ch - 7, cw - 4, 2); }
      if (st.kind === 'punched') { k.fillStyle = '#403c37'; k.fillRect(gx - 2, gy - 2, gw + 4, gh + 4); }
      const g = k.createLinearGradient(0, gy, 0, gy + gh); g.addColorStop(0, st.glassTop); g.addColorStop(1, st.glassBot); k.fillStyle = g; k.fillRect(gx, gy, gw, gh);
      if (st.kind === 'glass' && r() < .3) { k.fillStyle = 'rgba(160,190,230,' + (.05 + r() * .08) + ')'; k.beginPath(); k.moveTo(gx, gy + gh); k.lineTo(gx + gw * .6, gy); k.lineTo(gx + gw, gy); k.lineTo(gx + gw * .4, gy + gh); k.fill(); }      // a faint sky reflection
      if (st.kind === 'glass') { k.fillStyle = st.mull; k.fillRect(gx + gw / 2 - 1, gy, 2, gh); }                        // a mid mullion
      const lit = st.kind === 'glass' ? (floorLit ? r() < .82 : r() < st.rand) : r() < (st.kind === 'flats' ? .36 : .3);
      if (lit) { const tv = false, c = r() < st.cool ? pick(COOL, r) : pick(WARM, r), a = .38 + r() * .47;
        e.globalAlpha = a; e.fillStyle = c; e.fillRect(gx, gy, gw, gh); e.globalAlpha = a * .6; e.fillStyle = '#ffffff'; if (!tv) e.fillRect(gx + 2, gy + 2, gw - 4, 3);     // ceiling light
        e.globalAlpha = 1; if (r() < .35) { e.fillStyle = 'rgba(0,0,0,.55)'; const n = 2 + (r() * 4 | 0), top = gy + (r() < .5 ? 0 : gh * .3); for (let b = 0; b < n; b++) e.fillRect(gx, top + b * (gh * .7 / n) + 1, gw, 1.5); }   // blinds
        e.fillStyle = 'rgba(0,0,0,.25)'; e.fillRect(gx + gw / 2 - 1, gy, 2, gh); } } }
  const dt = new THREE.CanvasTexture(dc), et = new THREE.CanvasTexture(ec); for (const t of [dt, et]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.SRGBColorSpace; }
  return { map: dt, emi: et };
}
function shopfront(r) {      // a lit two-floor podium: dark frames, bright warm glass, a sign band
  const W = 512, H = 256, mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; }, dc = mk(), ec = mk(), k = dc.getContext('2d'), e = ec.getContext('2d');
  k.fillStyle = '#1b1c20'; k.fillRect(0, 0, W, H); e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  for (let b = 0; b < 4; b++) { const x = b * 128 + 8, w = 112, c = pick(WARM, r); k.fillStyle = '#0d0f13'; k.fillRect(x, 100, w, 140); e.fillStyle = c; e.globalAlpha = .75 + r() * .25; e.fillRect(x + 3, 104, w - 6, 132); e.globalAlpha = .6; e.fillStyle = '#fff'; e.fillRect(x + 6, 106, w - 12, 5);
    e.globalAlpha = 1; e.fillStyle = 'rgba(0,0,0,.5)'; for (let m = 1; m < 3; m++) e.fillRect(x + m * w / 3, 104, 2, 132); k.fillStyle = '#2a2c32'; k.fillRect(x, 20, w, 66); e.globalAlpha = .9; e.fillStyle = r() < .3 ? '#ffd24a' : '#fff1d6'; e.fillRect(x + 10, 34, w - 20, 38); e.globalAlpha = 1; e.fillStyle = '#000'; for (let t = 0; t < 4; t++) e.fillRect(x + 16 + t * 24, 44, 14, 18); }
  const dt = new THREE.CanvasTexture(dc), et = new THREE.CanvasTexture(ec); for (const t of [dt, et]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.SRGBColorSpace; }
  return { map: dt, emi: et };
}
function roofTex(r) { const c = document.createElement('canvas'); c.width = c.height = 256; const k = c.getContext('2d'); k.fillStyle = '#2c2d31'; k.fillRect(0, 0, 256, 256); for (let i = 0; i < 5000; i++) { k.fillStyle = 'rgba(' + (r() < .5 ? '255,255,255' : '0,0,0') + ',' + (.04 + r() * .08) + ')'; k.fillRect(r() * 256, r() * 256, 1 + r() * 2, 1 + r() * 2); } k.strokeStyle = 'rgba(0,0,0,.35)'; k.lineWidth = 2; for (let i = 0; i < 6; i++) { k.beginPath(); k.moveTo(r() * 256, 0); k.lineTo(r() * 256, 256); k.stroke(); } const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t; }

// ---- geometry: sides carry UVs in metres so the window grid keeps its real size
function sides(w, d, h, y0, uOff, vOff) {
  const out = [], face = (len, tx, tz, ry, nx0) => { const g = new THREE.PlaneGeometry(len, h), uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uOff + (nx0 + uv.getX(i) * len) / TILE_W, (vOff + y0 + uv.getY(i) * h) / TILE_H); g.rotateY(ry); g.translate(tx, y0 + h / 2, tz); out.push(g); };
  face(w, 0, d / 2, 0, 0); face(w, 0, -d / 2, Math.PI, w); face(d, w / 2, 0, Math.PI / 2, 0); face(d, -w / 2, 0, -Math.PI / 2, d); return out;
}
function cyl(r, h, y0, uOff) {
  const g = new THREE.CylinderGeometry(r, r, h, 28, 1, true), P = g.attributes.position, uv = g.attributes.uv, bays = Math.max(8, Math.round(Math.PI * 2 * r / BAY));
  for (let i = 0; i < P.count; i++) { const th = Math.atan2(P.getZ(i), P.getX(i)); uv.setXY(i, uOff + ((th / (Math.PI * 2) + .5) * bays * BAY) / TILE_W, (y0 + P.getY(i) + h / 2) / TILE_H); } g.translate(0, y0 + h / 2, 0); return g;
}
function top(w, d, y, scale = 10) { const g = new THREE.PlaneGeometry(w, d), uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / scale, uv.getY(i) * d / scale); g.rotateX(-Math.PI / 2); g.translate(0, y, 0); return g; }
const box = (w, h, d, x, y, z) => new THREE.BoxGeometry(w, h, d).translate(x, y + h / 2, z);
const flat = gs => mergeGeometries(gs.map(g => g.index ? g.toNonIndexed() : g), false);

// A building variant: facade geometry, roof geometry (with parapet, plant and mast), shopfront podium, crown light, and where to put the beacon.
function variant(kind, w, d, floors, r, style) {
  const parts = [], roofs = [], shops = [], glows = []; const u0 = Math.floor(r() * 8) / 8, v0 = Math.floor(r() * 16) / 16 * TILE_H / FLOOR * FLOOR;
  const addBlock = (bw, bd, bf, y0) => { const h = bf * FLOOR; for (const g of sides(bw, bd, h, y0, u0, v0 - v0 % FLOOR)) parts.push(g); roofs.push(top(bw, bd, y0 + h)); for (const [sx, sz, lw, ld2] of [[0, bd / 2 - .2, bw, .4], [0, -bd / 2 + .2, bw, .4], [bw / 2 - .2, 0, .4, bd], [-bw / 2 + .2, 0, .4, bd]]) roofs.push(box(lw, .7, ld2, sx, y0 + h, sz));      // parapet
    for (let i = 0, n = 2 + (r() * 3 | 0); i < n; i++) { const pw = 1.8 + r() * 3.4, pd = 1.8 + r() * 3.4, ph = .9 + r() * 2.2; roofs.push(box(pw, ph, pd, (r() - .5) * (bw - pw - 2), y0 + h + .35, (r() - .5) * (bd - pd - 2))); }      // rooftop plant
    return y0 + h; };
  let y = 0, tipY = 0; const podium = floors >= 8 && kind !== 'low';
  if (podium) { for (const g of sides(w + 6, d + 6, 2 * FLOOR, 0, 0, 0)) shops.push(g); roofs.push(top(w + 6, d + 6, 2 * FLOOR)); }
  if (kind === 'cyl') { const h = floors * FLOOR, rr = w / 2; parts.push(cyl(rr, h, 0, u0)); { const cg = new THREE.CircleGeometry(rr, 28); cg.rotateX(-Math.PI / 2); cg.translate(0, h, 0); roofs.push(cg); } roofs.push(new THREE.CylinderGeometry(rr + .15, rr + .15, .6, 28, 1, true).translate(0, h + .3, 0)); roofs.push(box(3, 2, 3, 0, h + .3, 0)); tipY = h; glows.push(new THREE.CylinderGeometry(rr + .2, rr + .2, .45, 28, 1, true).translate(0, h - 1.4, 0)); }
  else if (kind === 'stepped') { const f1 = Math.round(floors * .42), f2 = Math.round(floors * .32), f3 = floors - f1 - f2; y = addBlock(w, d, f1, 0); y = addBlock(w * .78, d * .78, f2, y); y = addBlock(w * .52, d * .52, f3, y); tipY = y; glows.push(box(w * .52 + .4, .45, d * .52 + .4, 0, y - 1.6, 0)); }
  else { y = addBlock(w, d, floors, 0); tipY = y; if (kind === 'tower') glows.push(box(w + .3, .45, d + .3, 0, y - 1.6, 0)); }
  let mast = null; if (kind !== 'low' && floors > 10) { const mh = 10 + r() * 14; roofs.push(new THREE.CylinderGeometry(.12, .2, mh, 6).translate(0, tipY + .35 + mh / 2, 0)); mast = tipY + .35 + mh; }
  return { floors, facade: flat(parts), roof: flat(roofs), shop: shops.length ? flat(shops) : null, glow: glows.length ? flat(glows) : null, mast, w, d, half: Math.max(w, d) / 2 * (podium ? 1.18 : 1.05) + (podium ? 3 : 0), style };
}

export function buildCity(path, n, B, isFree, rnd, G) {
  const mats = STYLES.map(st => { const t = facade(st, rnd); return new THREE.MeshStandardMaterial({ map: t.map, emissiveMap: t.emi, emissive: 0xffffff, emissiveIntensity: .95, roughness: st.kind === 'glass' ? .3 : .75, metalness: st.kind === 'glass' ? .5 : .05, envMapIntensity: .6, side: THREE.DoubleSide }); });
  const sf = shopfront(rnd), shopM = new THREE.MeshStandardMaterial({ map: sf.map, emissiveMap: sf.emi, emissive: 0xffffff, emissiveIntensity: 1.25, roughness: .5, metalness: .2, side: THREE.DoubleSide }), roofM = new THREE.MeshStandardMaterial({ map: roofTex(rnd), roughness: .95, side: THREE.DoubleSide }), glowM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xe8f0ff).multiplyScalar(1.7) }), beaconG = new THREE.SphereGeometry(.55, 8, 6), beaconM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff2a1a).multiplyScalar(2.2) });
  const bands = { near: [['low', 16, 14, 4], ['low', 22, 16, 5], ['low', 18, 18, 6], ['low', 14, 20, 5], ['stepped', 18, 16, 8]], mid: [['slab', 28, 14, 10], ['block', 20, 20, 12], ['block', 22, 16, 14], ['stepped', 22, 20, 15], ['tower', 16, 16, 16]], far: [['tower', 18, 18, 26], ['stepped', 24, 22, 28], ['cyl', 22, 22, 30], ['tower', 14, 14, 34], ['tower', 20, 18, 24], ['stepped', 26, 24, 24]] };
  const lib = {}, pickStyle = kind => kind === 'low' ? [3, 4, 3][Math.floor(rnd() * 3)] : kind === 'block' || kind === 'slab' ? [3, 4, 0, 2][Math.floor(rnd() * 4)] : [0, 1, 2, 0, 4][Math.floor(rnd() * 5)];
  for (const b in bands) lib[b] = bands[b].map(([kind, w, d, f]) => variant(kind, w, d, f, rnd, pickStyle(kind)));
  const placed = [], inst = new Map(), want = { near: .4, mid: .35, far: .25 };
  const add = (v, x, z, ry) => { let e = inst.get(v); if (!e) inst.set(v, e = []); e.push({ x, z, ry }); placed.push({ x, z, half: v.half }); };
  for (let i = 0, tries = 0; i < n && placed.length < 110; i += 4) for (const s of [1, -1]) {
    const q = path[i], u = rnd(), band = u < want.near ? 'near' : u < want.near + want.mid ? 'mid' : 'far', v = lib[band][Math.floor(rnd() * lib[band].length)], gap = band === 'near' ? 12 + rnd() * 6 : band === 'mid' ? 26 + rnd() * 18 : 60 + rnd() * 60, off0 = B + gap;
    // the camera looks down at a fixed slope, so a building must stay lower than 80% of its distance from the track or it would hide the road: low-rise near the circuit, towers far back
    const all = [].concat(...Object.values(lib)), fits = all.filter(c => c.floors <= Math.floor(.8 * (off0 + c.half) / FLOOR)); let vv = v; if (v.floors > Math.floor(.8 * (off0 + v.half) / FLOOR)) { if (!fits.length) continue; vv = fits[Math.floor(rnd() * fits.length)]; }
    const off = s * (off0 + vv.half), x = q.x + q.tz * off, z = q.z - q.tx * off;
    if (!isFree(x, z, vv.half + 1.5) || placed.some(p => Math.hypot(p.x - x, p.z - z) < p.half + vv.half + 4)) continue; add(vv, x, z, Math.floor(rnd() * 4) * Math.PI / 2); }
  const dummy = new THREE.Object3D(), beacons = [];
  for (const [v, list] of inst) { const make = (geo, mat) => { const m = new THREE.InstancedMesh(geo, mat, list.length); list.forEach((t, i) => { dummy.position.set(t.x, 0, t.z); dummy.rotation.set(0, t.ry, 0); dummy.updateMatrix(); m.setMatrixAt(i, dummy.matrix); }); m.frustumCulled = false; G.add(m); return m; };
    make(v.facade, mats[v.style]); make(v.roof, roofM); if (v.shop) make(v.shop, shopM); if (v.glow) make(v.glow, glowM);
    if (v.mast) for (const t of list) beacons.push({ x: t.x, y: v.mast, z: t.z }); }
  if (beacons.length) { const bm = new THREE.InstancedMesh(beaconG, beaconM, beacons.length); beacons.forEach((b, i) => { dummy.position.set(b.x, b.y, b.z); dummy.rotation.set(0, 0, 0); dummy.updateMatrix(); bm.setMatrixAt(i, dummy.matrix); }); bm.frustumCulled = false; G.add(bm); }
  return placed.length;
}
