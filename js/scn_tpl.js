// Low-poly templates for the circuit's surroundings: houses, sheds, farm buildings, race-day buildings, cars, trucks, cones, tyre stacks, fences, tents ...
// Parts flagged tint 1 take the instance's wall colour, tint 2 its roof colour (see Chunks.place).
import { MB, TILE, NSIGN, lin } from './scn_geo.js';

const W3 = 3;       // storey height / window module
const GLASS = 0x1d2a38, DARK = 0x1b1c20, STEEL = 0x8d9097, WHITE = 0xf4f4f2, BRICK = 0xb06a4c;
const bx = (mb, cx, y, cz, w, h, d, col, o) => mb.box(cx, y, cz, w, h, d, col, o);
const doorQuad = (mb, x, z, y0 = .02) => mb.quad([x - .5, y0, z], [x + .5, y0, z], [x + .5, y0 + 2.05, z], [x - .5, y0 + 2.05, z], 0xffffff, 'doorh', 1, 1, 0);

// ---------------------------------------------------------------- houses
function walls(mb, cx, cz, w, d, fl, o = {}) { mb.box(cx, o.y || 0, cz, w, fl * W3, d, 0xffffff, { tile: o.tile || 'win', tile2: o.tile2 || 'win', tint: 1, top: 'plain', topFace: !!o.flat, topCol: 0xb8b8b4, topTint: 0 }); }
function chimney(mb, x, y, z) { bx(mb, x, y, z, .7, 1.7, .7, 0xffffff, { tile: 'brick', tint: 0, topFace: true }); bx(mb, x, y + 1.7, z, .9, .12, .9, 0x77777a, {}); }
function houseGable(w, d, fl, o = {}) {
  const mb = new MB(); walls(mb, 0, 0, w, d, fl); const h = fl * W3, rh = Math.min(w, d) * (o.pitch ?? .32); doorQuad(mb, o.dx ?? 0, d / 2 + .02);
  mb.gable(0, h, 0, w, d, rh, 0xffffff, { rx: true, ov: .45, gtile: 'win' });
  if (o.chim !== false) chimney(mb, w * .22, h + rh * .35, -d * .12);
  if (o.garage) { const gw = 3.6; bx(mb, w / 2 + gw / 2, 0, 0, gw, 2.7, d * .8, 0xffffff, { tile: 'wall', tint: 1, topFace: false }); mb.mono(w / 2 + gw / 2, 2.7, 0, gw, d * .8, .7, 0xffffff, { tile: 'roof', ov: .2 }); mb.quad([w / 2 + .3, .02, d * .4 + .02], [w / 2 + gw - .3, .02, d * .4 + .02], [w / 2 + gw - .3, 2.3, d * .4 + .02], [w / 2 + .3, 2.3, d * .4 + .02], 0xffffff, 'door', 1, 1, 0); }
  if (o.porch) { bx(mb, o.dx ?? 0, 2.6, d / 2 + .9, 2.6, .18, 1.8, 0xffffff, { tint: 1 }); for (const sx of [-1.1, 1.1]) bx(mb, (o.dx ?? 0) + sx, 0, d / 2 + 1.5, .14, 2.6, .14, 0xf4f4f0, {}); }
  return mb.done();
}
function houseVilla(o = {}) {
  const mb = new MB(); walls(mb, 0, 0, 10, 8, 2); mb.gable(0, 6, 0, 10, 8, 2.6, 0xffffff, { rx: true, ov: .5, gtile: 'win' }); doorQuad(mb, -2, 4.02); chimney(mb, 3, 7.2, 0);
  walls(mb, 7.2, 1.5, 5, 6, 1); mb.gable(7.2, 3, 1.5, 5, 6, 1.6, 0xffffff, { ov: .4, gtile: 'win' });                 // single-storey wing
  bx(mb, -2, 3.0, 4.9, 4.4, .16, 1.8, 0xffffff, { tint: 1 }); for (const x of [-3.9, -.1]) bx(mb, x, 0, 5.6, .16, 3, .16, 0xf4f4f0, {});     // balcony over the porch
  bx(mb, -2, 3.9, 5.75, 4.4, .08, .06, 0xe9eaec, {}); bx(mb, -2, 3.5, 5.75, 4.4, .06, .06, 0xe9eaec, {});
  return mb.done();
}
function houseTerrace(n, fl = 2) {
  const mb = new MB(), w = 5.4, tot = n * w; walls(mb, 0, 0, tot, 7, fl); const h = fl * W3; mb.gable(0, h, 0, tot, 7, 1.9, 0xffffff, { rx: true, ov: .35, gtile: 'win' });
  for (let i = 0; i < n; i++) doorQuad(mb, -tot / 2 + w / 2 + i * w - 1.4, 3.52); for (let i = 1; i < n; i++) chimney(mb, -tot / 2 + i * w, h + .8, 0);
  return mb.done();
}
function houseFlat(w, d, fl, o = {}) {       // flat-roofed block house (desert, coast)
  const mb = new MB(); walls(mb, 0, 0, w, d, fl, { flat: true, tile: 'win2', tile2: 'win' }); const h = fl * W3;
  for (const [sx, sz, lw, ld] of [[0, d / 2 - .15, w, .3], [0, -d / 2 + .15, w, .3], [w / 2 - .15, 0, .3, d], [-w / 2 + .15, 0, .3, d]]) bx(mb, sx, h, sz, lw, .6, ld, 0xffffff, { tile: 'wall', tint: 1 });
  doorQuad(mb, 0, d / 2 + .02); bx(mb, -w * .25, h, -d * .2, 2.2, 2.4, 2.2, 0xffffff, { tile: 'wall', tint: 1 });   // stair head
  mb.cyl(w * .25, h, d * .2, .7, .7, 1.1, 8, 0x2a2d33, { tint: 0 }); mb.cyl(w * .25 + 1.8, h, d * .2 - .6, .55, .55, .9, 8, 0xe9e9e9, {});     // water tanks
  if (o.awn) { mb.quad([-w * .3, 2.7, d / 2], [w * .3, 2.7, d / 2], [w * .3, 2.2, d / 2 + 1.5], [-w * .3, 2.2, d / 2 + 1.5], 0xffffff, 'awning', 3, 1, 2); }
  return mb.done();
}
function houseArab(w, d) {     // flat-roofed villa with a stepped parapet and arch-like door
  const mb = new MB(); walls(mb, 0, 0, w, d, 2, { flat: true }); bx(mb, 0, 6, 0, w * .62, 2.6, d * .62, 0xffffff, { tile: 'win', tile2: 'win', tint: 1, topFace: true, top: 'plain', topCol: 0xc7c2b6, topTint: 0 });
  doorQuad(mb, 0, d / 2 + .02); for (const [sx, sz, lw, ld] of [[0, d / 2 - .15, w, .3], [0, -d / 2 + .15, w, .3], [w / 2 - .15, 0, .3, d], [-w / 2 + .15, 0, .3, d]]) bx(mb, sx, 6, sz, lw, .5, ld, 0xffffff, { tile: 'wall', tint: 1 });
  mb.cyl(w * .22, 8.6, d * .1, 1.5, 0, 1.3, 10, 0xd9d0b4, { tint: 1 }); bx(mb, -w * .3, 8.6, -d * .1, 1.4, .9, 1.4, 0xffffff, { tile: 'wall', tint: 1 });
  return mb.done();
}
function shed(w, d, kind) {
  const mb = new MB();
  if (kind === 'garage') { bx(mb, 0, 0, 0, w, 3, d, 0xffffff, { tile: 'wall', tint: 1, topFace: false }); mb.mono(0, 3, 0, w, d, .9, 0xffffff, { tile: 'metal', ov: .3 }); mb.quad([-w / 2 + .6, .02, d / 2 + .02], [w / 2 - .6, .02, d / 2 + .02], [w / 2 - .6, 2.6, d / 2 + .02], [-w / 2 + .6, 2.6, d / 2 + .02], 0xffffff, 'door', 2.4 / 3, 2.6 / 3, 0); }
  else if (kind === 'garageopen') { bx(mb, 0, 0, 0, w, 3.4, d, 0xffffff, { tile: 'wall', tint: 1, topFace: false }); mb.gable(0, 3.4, 0, w, d, 1.3, 0xffffff, { rx: false, tile: 'metal', ov: .3, gtile: 'wall' }); mb.quad([-w / 2 + .5, .02, d / 2 + .02], [w / 2 - .5, .02, d / 2 + .02], [w / 2 - .5, 3.0, d / 2 + .02], [-w / 2 + .5, 3.0, d / 2 + .02], 0xffffff, 'dooropen', (w - 1) / 3, 1, 0); }
  else { bx(mb, 0, 0, 0, w, 2.6, d, 0xffffff, { tile: 'wood', tint: 1, topFace: false }); mb.mono(0, 2.6, 0, w, d, .6, 0xffffff, { tile: 'metal', ov: .25 }); }
  return mb.done();
}
function barn(w, d) {
  const mb = new MB(); bx(mb, 0, 0, 0, w, 4.4, d, 0xffffff, { tile: 'wood', tint: 1, topFace: false }); mb.gable(0, 4.4, 0, w, d, 3.2, 0xffffff, { rx: true, tile: 'metal', ov: .4, gtile: 'wood' });
  mb.quad([-2.2, .02, d / 2 + .02], [2.2, .02, d / 2 + .02], [2.2, 3.6, d / 2 + .02], [-2.2, 3.6, d / 2 + .02], 0x6a3b22, 'wood', 2, 1.8, 0); return mb.done();
}
function silo() { const mb = new MB(); mb.cyl(0, 0, 0, 2.1, 2.1, 11, 12, 0xcfd2d6, { tile: 'metal', turns: 3, tint: 0 }); mb.cyl(0, 11, 0, 2.1, 0, 1.8, 12, 0x8f949a, { tint: 0 }); mb.cyl(0, 0, 0, 2.2, 2.2, .5, 12, 0x888b90, {}); return mb.done(); }
function waterTower() { const mb = new MB(); for (const [x, z] of [[-1.6, -1.6], [1.6, -1.6], [1.6, 1.6], [-1.6, 1.6]]) bx(mb, x, 0, z, .3, 9, .3, 0x9ea2a8, {}); for (const y of [3, 6]) { bx(mb, 0, y, -1.6, 3.4, .16, .16, 0x9ea2a8, {}); bx(mb, 0, y, 1.6, 3.4, .16, .16, 0x9ea2a8, {}); } mb.cyl(0, 9, 0, 3, 3, 3.6, 12, 0xe8e4da, { tint: 1 }); mb.cyl(0, 12.6, 0, 3, 0, 1.4, 12, 0x6c7078, {}); return mb.done(); }
function warehouse(w, d) {
  const mb = new MB(); bx(mb, 0, 0, 0, w, 6.5, d, 0xffffff, { tile: 'metal', tint: 1, topFace: true, top: 'plain', topCol: 0xaeb0b4, topTint: 0 });
  for (let x = -w / 2 + 4; x < w / 2 - 3; x += 7) mb.quad([x, .02, d / 2 + .02], [x + 4, .02, d / 2 + .02], [x + 4, 4.2, d / 2 + .02], [x, 4.2, d / 2 + .02], 0xffffff, 'door', 4 / 3, 1.4, 0);
  bx(mb, 0, 6.5, d / 2 - .2, w, .5, .4, 0xe9e9ea, {}); bx(mb, -w * .2, 6.5, 0, 3, 1.1, 3, 0xcfd0d4, {}); bx(mb, w * .15, 6.5, 0, 3, 1.1, 3, 0xcfd0d4, {});
  mb.quad([-w / 2 + 2, 5, d / 2 + .05], [-w / 2 + 14, 5, d / 2 + .05], [-w / 2 + 14, 6.3, d / 2 + .05], [-w / 2 + 2, 6.3, d / 2 + .05], 0xffffff, 'sign15', 1, 1, 0);
  return mb.done();
}
function shop(w, d) { const mb = new MB(); bx(mb, 0, 0, 0, w, 4.6, d, 0xffffff, { tile: 'wall', tint: 1, topFace: true, top: 'plain', topCol: 0xb0b0ae, topTint: 0 }); mb.quad([-w / 2 + .6, .6, d / 2 + .02], [w / 2 - .6, .6, d / 2 + .02], [w / 2 - .6, 3, d / 2 + .02], [-w / 2 + .6, 3, d / 2 + .02], 0xffffff, 'glass2', (w - 1.2) / 3, 1, 0);
  mb.quad([-w / 2, 3.3, d / 2], [w / 2, 3.3, d / 2], [w / 2, 2.7, d / 2 + 1.6], [-w / 2, 2.7, d / 2 + 1.6], 0xffffff, 'awning', w, 1, 2); mb.quad([-w / 2 + 1, 3.6, d / 2 + .05], [w / 2 - 1, 3.6, d / 2 + .05], [w / 2 - 1, 4.5, d / 2 + .05], [-w / 2 + 1, 4.5, d / 2 + .05], 0xffffff, 'sign9', 1, 1, 0); return mb.done(); }
function church() {
  const mb = new MB(); walls(mb, 0, 0, 8, 16, 2, { tile: 'wall', tile2: 'win' }); mb.gable(0, 6, 0, 8, 16, 3.2, 0xffffff, { rx: false, ov: .4, gtile: 'wall' }); bx(mb, 0, 0, 9.5, 4.4, 14, 4.4, 0xffffff, { tile: 'wall', tint: 1, topFace: false });
  mb.cyl(0, 14, 9.5, 3.2, 0, 7, 4, 0x4a4f58, { tint: 0 }); bx(mb, 0, 8.4, 9.5, 4.6, .2, 4.6, 0x99999a, {}); mb.quad([-.8, 9, 11.72], [.8, 9, 11.72], [.8, 12.2, 11.72], [-.8, 12.2, 11.72], 0x2a2d33, 'plain', 1, 1, 0); bx(mb, 0, 21, 9.5, .15, 1.6, .15, 0xd8d8d8, {}); bx(mb, 0, 21.9, 9.5, .9, .15, .15, 0xd8d8d8, {}); return mb.done();
}
function apartments(w, d, fl) { const mb = new MB(); walls(mb, 0, 0, w, d, fl, { flat: true, tile: 'win2', tile2: 'win' }); const h = fl * W3; bx(mb, 0, h, 0, w * .5, 1.4, d * .4, 0xcfd0d4, {}); bx(mb, -w * .3, h, d * .2, 2, 2, 2, 0xffffff, { tile: 'wall', tint: 1 }); for (let i = 0; i < fl; i++) bx(mb, 0, i * W3 + .1, d / 2 + .5, w - .4, .14, 1, 0xdadad6, {}); doorQuad(mb, 0, d / 2 + .02); return mb.done(); }

// ---------------------------------------------------------------- race buildings
function hospitality(len) {        // two floors of glass, a roof terrace with a rail, a canopy and a sign
  const mb = new MB(); bx(mb, 0, 0, 0, len, 3.2, 8, 0xffffff, { tile: 'glass2', tile2: 'wall', tint: 1, topFace: true, top: 'plain', topCol: 0xbdbdbd, topTint: 0 }); bx(mb, 0, 3.2, 1, len, 3.2, 6, 0xffffff, { tile: 'glass', tile2: 'wall', tint: 1, topFace: true, top: 'plain', topCol: 0xaaaaaa, topTint: 0 });
  bx(mb, 0, 3.0, 4.6, len + .4, .22, 1.6, 0xf1f1ee, {}); bx(mb, 0, 6.4, 0, len + .4, .5, 8.4, 0xe4e4e2, {}); bx(mb, 0, 7.5, 4.1, len, .08, .06, 0xeeeeee, {}); bx(mb, 0, 7.0, 4.1, len, .06, .06, 0xeeeeee, {});
  for (let x = -len / 2 + 2; x < len / 2; x += 6) bx(mb, x, 0, 4.7, .16, 3.0, .16, 0xdedede, {});
  mb.quad([-len * .3, 6.7, 4.18], [len * .3, 6.7, 4.18], [len * .3, 8.3, 4.18], [-len * .3, 8.3, 4.18], 0xffffff, 'sign' + 11, 1, 1, 0);
  return mb.done();
}
function timingTower(fl) {
  const mb = new MB(); bx(mb, 0, 0, 0, 12, fl * 3.2, 7, 0xffffff, { tile: 'glass', tile2: 'glass2', tint: 1, topFace: true, top: 'plain', topCol: 0xaaaaaa, topTint: 0 });
  const h = fl * 3.2; bx(mb, 0, h, 0, 12.8, .5, 7.8, 0xe6e6e8, {}); bx(mb, 0, h + 1.4, 3.6, 12, .08, .08, 0xeeeeee, {}); bx(mb, 0, h + .9, 3.6, 12, .06, .06, 0xeeeeee, {}); bx(mb, -3, h + .5, -1, 3, 2.4, 3, 0xe9e9ea, { tile: 'wall' });
  mb.quad([-5, h * .55, 3.52], [5, h * .55, 3.52], [5, h * .55 + 1.2, 3.52], [-5, h * .55 + 1.2, 3.52], 0xffffff, 'led', 3, 1, 0); bx(mb, 4.2, h + .5, -1, .14, 4.5, .14, 0x555960, {}); bx(mb, 4.2, h + 4.4, -1, .6, .08, .08, 0x555960, {}); // mast, vane base
  bx(mb, 0, 0, 3.7, 12, .3, .3, 0xd8d8da, {}); return mb.done();
}
function marshalHut() { const mb = new MB(); bx(mb, 0, 0, 0, 2.6, 2.4, 2, 0xffffff, { tile: 'wall', tint: 1, topFace: false }); mb.mono(0, 2.4, 0, 2.6, 2, .4, 0xffffff, { tile: 'metal', ov: .3 }); mb.quad([-1, 1, 1.02], [1, 1, 1.02], [1, 2.1, 1.02], [-1, 2.1, 1.02], 0xffffff, 'glass', .6, .4, 0); bx(mb, 1.7, 0, .6, .5, 1, .5, 0xd9232c, {}); return mb.done(); }
function ticketBooth() { const mb = new MB(); bx(mb, 0, 0, 0, 3, 2.5, 2.2, 0xffffff, { tile: 'wall', tint: 1, topFace: false }); mb.mono(0, 2.5, 0, 3, 2.2, .4, 0xffffff, { tile: 'metal', ov: .3 }); mb.quad([-1.2, 1.1, 1.12], [1.2, 1.1, 1.12], [1.2, 2.1, 1.12], [-1.2, 2.1, 1.12], 0xffffff, 'glass', .8, .35, 0); mb.quad([-1.4, 2.5, 1.12], [1.4, 2.5, 1.12], [1.4, 3.2, 1.12], [-1.4, 3.2, 1.12], 0xffffff, 'sign8', 1, 1, 0); return mb.done(); }

// ---------------------------------------------------------------- track-side furniture
function cone() { const mb = new MB(); mb.box(0, 0, 0, .55, .05, .55, 0x1d1d20, {}); mb.cyl(0, .05, 0, .2, .04, .65, 8, 0xff5a10, { cap: false }); mb.cyl(0, .26, 0, .13, .105, .11, 8, 0xf0f0f2, { cap: false }); mb.cyl(0, .43, 0, .09, .075, .07, 8, 0xf0f0f2, { cap: false }); return mb.done(); }
function tyreStack(n = 3) { const mb = new MB(); for (let i = 0; i < n; i++) { mb.cyl(0, i * .3, 0, .46, .46, .3, 8, 0x2a2a2e, { tile: 'tyre', turns: 1, cap: false }); mb.cyl(0, i * .3 + .3, 0, .34, .34, .005, 8, 0x16161a, {}); } return mb.done(); }
function tyreWall(len, rows = 3, tintBands = true) {   // len metres along z; staggered double rows of stacked tyres
  const mb = new MB(), step = .9, cnt = Math.max(2, Math.round(len / step)); for (let r = 0; r < 2; r++) for (let i = 0; i < cnt; i++) for (let k = 0; k < rows; k++) { const x = r * .8, z = -len / 2 + i * step + (r ? step / 2 : 0); if (z > len / 2) continue; const c = tintBands && (i >> 2) % 2 && k === 1 ? 0xcfcfd2 : 0x2a2a2e;
    mb.cyl(x, k * .32, z, .44, .44, .32, 7, c, { tile: 'tyre', turns: 1, cap: false }); mb.cyl(x, k * .32 + .32, z, .33, .33, .005, 7, 0x151518, {}); }
  return mb.done();
}
function jersey(len) { const mb = new MB(); mb.slab(0, 0, .8, .6, -len / 2, len / 2, .26, -len / 2, len / 2, 0, 0xffffff, { tile: 'barrier', tile2: 'barrier', tint: 1, topTint: 1 }); return mb.done(); }
function fence(len = 3) { const mb = new MB(); bx(mb, 0, 0, -len / 2, .1, 1.5, .1, 0x6d7076, {}); bx(mb, 0, .02, 0, .05, .06, len, 0x9a9da3, {}); bx(mb, 0, 1.4, 0, .05, .06, len, 0x9a9da3, {}); return mb.done(); }
function fenceMesh(len = 3) { const mb = new MB(); mb.quad([0, .08, len / 2], [0, .08, -len / 2], [0, 1.4, -len / 2], [0, 1.4, len / 2], 0xdfe1e6, 'mesh', len / 2, 1.3 / 2, 0); mb.quad([0, .08, -len / 2], [0, .08, len / 2], [0, 1.4, len / 2], [0, 1.4, -len / 2], 0xdfe1e6, 'mesh', len / 2, 1.3 / 2, 0); return mb.done(); }
function woodFence(len = 3) { const mb = new MB(); bx(mb, 0, 0, -len / 2, .14, 1.2, .14, 0x6a4326, {}); bx(mb, 0, .35, 0, .05, .12, len, 0x8a5a36, {}); bx(mb, 0, .8, 0, .05, .12, len, 0x8a5a36, {}); return mb.done(); }
function hoarding(len, sign) { const mb = new MB(); bx(mb, 0, 0, -len / 2, .12, 1.7, .12, 0x555a62, {}); bx(mb, 0, 0, len / 2, .12, 1.7, .12, 0x555a62, {}); mb.quad([0, .5, len / 2], [0, .5, -len / 2], [0, 1.7, -len / 2], [0, 1.7, len / 2], 0xffffff, 'sign' + sign, 1, 1, 0); mb.quad([0, .5, -len / 2], [0, .5, len / 2], [0, 1.7, len / 2], [0, 1.7, -len / 2], 0xdddddd, 'plain', 1, 1, 0); return mb.done(); }
function billboard(w, h, sign, lit) { const mb = new MB(), top = 4.2 + h; for (const x of [-w * .32, w * .32]) bx(mb, x, 0, -.2, .3, top, .3, 0x6e7279, {}); bx(mb, 0, 4.2, -.1, w + .6, h + .4, .3, 0x30343a, {}); mb.quad([-w / 2, 4.4, .08], [w / 2, 4.4, .08], [w / 2, 4.4 + h, .08], [-w / 2, 4.4 + h, .08], 0xffffff, 'sign' + sign, 1, 1, 0); bx(mb, 0, 4.4 + h + .35, .3, w + .4, .1, .5, 0x23262b, {}); return mb.done(); }
function lightPole(h = 7) { const mb = new MB(); mb.cyl(0, 0, 0, .1, .07, h, 6, 0x4a4d54, {}); bx(mb, .5, h - .1, 0, 1.2, .1, .2, 0x4a4d54, {}); bx(mb, 1.0, h - .22, 0, .5, .12, .3, 0xfff1cf, {}); return mb.done(); }
function floodTower(h = 22) {
  const mb = new MB(); for (const [x, z] of [[-.5, -.5], [.5, -.5], [.5, .5], [-.5, .5]]) { bx(mb, x * (1 - .0), 0, z, .12, h, .12, 0x9aa0a8, {}); } for (let y = 2; y < h; y += 3.2) { for (const [a, b, c, d] of [[-.5, -.5, .5, -.5], [.5, -.5, .5, .5], [.5, .5, -.5, .5], [-.5, .5, -.5, -.5]]) bx(mb, (a + c) / 2, y, (b + d) / 2, Math.abs(c - a) + .1, .07, Math.abs(d - b) + .1, 0x9aa0a8, {}); }
  bx(mb, 0, h, 0, 5.4, .2, 1.1, 0x4a4d54, {}); bx(mb, 0, h + 1.1, 0, 5.4, .2, 1.1, 0x4a4d54, {}); for (const x of [-2.4, 0, 2.4]) { bx(mb, x, h + .3, .62, 1.5, .7, .24, 0x2a2d33, {}); bx(mb, x, h + 1.3, .62, 1.5, .7, .24, 0x2a2d33, {}); } return mb.done();
}
function flagPole(h = 9) { const mb = new MB(); mb.cyl(0, 0, 0, .12, .06, h, 6, 0xe4e6ea, {}); bx(mb, 0, h, 0, .22, .22, .22, 0xd6b24a, {}); return mb.done(); }
function marquee(w, d, tintRoof = true) {      // a paddock tent: white walls, peaked roof, open front
  const mb = new MB(); bx(mb, 0, 0, 0, w, 2.4, d, 0xffffff, { tile: 'tent', tint: 0, topFace: false, sides: 'rbl' }); mb.gable(0, 2.4, 0, w, d, 1.6, 0xffffff, { rx: true, tile: 'tent', gtile: 'tent', tint: 2, gtint: 2, ov: .25 });
  mb.quad([-w / 2, .01, d / 2], [w / 2, .01, d / 2], [w / 2, 2.4, d / 2], [-w / 2, 2.4, d / 2], 0x2a2c32, 'plain', 1, 1, 0); for (const x of [-w / 2, w / 2]) bx(mb, x, 0, d / 2, .14, 2.4, .14, 0xcfd0d4, {});
  bx(mb, 0, .02, 0, w - .4, .06, d - .4, 0x8d8f94, {}); return mb.done();
}
function gazebo(s = 3) { const mb = new MB(); for (const [x, z] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) bx(mb, x * s / 2, 0, z * s / 2, .1, 2.3, .1, 0xcfd0d4, {}); mb.cyl(0, 2.3, 0, s * .78, 0, 1, 4, 0xffffff, { tile: 'awning', turns: 2, tint: 2 }); return mb.done(); }
function container(col = 0xffffff) { const mb = new MB(); bx(mb, 0, 0, 0, 2.5, 2.6, 6.1, col, { tile: 'metal', tile2: 'metal', tint: 1, topFace: true, top: 'metal', topTint: 1 }); return mb.done(); }
function bale() { const mb = new MB(); mb.cyl(0, 0, 0, .7, .7, 1.2, 10, 0xd8b04a, { cap: true, tint: 0 }); const t = mb.done(); const P = t.P; for (let i = 0; i < t.n; i++) { const y = P[i * 3 + 1], z = P[i * 3 + 2]; P[i * 3 + 1] = z + .7; P[i * 3 + 2] = y - .6; } for (let i = 0; i < t.n; i++) { const ny = t.N[i * 3 + 1], nz = t.N[i * 3 + 2]; t.N[i * 3 + 1] = nz; t.N[i * 3 + 2] = ny; } return t; }
function hayBlocks() { const mb = new MB(); for (let i = 0; i < 3; i++) for (let j = 0; j < 2 - (i > 1 ? 1 : 0); j++) bx(mb, i * 1.5 - 1.5, j * .75, 0, 1.4, .72, .8, 0xd6a840, { tile: 'wall', tint: 0 }); return mb.done(); }
function toolCart() { const mb = new MB(); bx(mb, 0, .25, 0, .9, .7, .5, 0xc81d25, {}); bx(mb, 0, .95, 0, 1, .05, .55, 0x3a3d44, {}); bx(mb, 0, .55, .26, .8, .06, .02, 0x222222, {}); for (const [x, z] of [[-.4, -.2], [.4, -.2], [-.4, .2], [.4, .2]]) mb.wheel(x, .12, z, .12, .06); return mb.done(); }
function jack() { const mb = new MB(); bx(mb, 0, .05, 0, .5, .1, 1.4, 0xf3c316, {}); bx(mb, 0, .15, -.4, .1, .5, .1, 0x555960, {}); bx(mb, 0, .6, -.4, .1, .1, .6, 0xf3c316, {}); return mb.done(); }
function drums() { const mb = new MB(); for (const [x, z, c] of [[0, 0, 0xd9232c], [.6, .1, 0x1c57c8], [.2, .6, 0xe9e9e9]]) mb.cyl(x, 0, z, .3, .3, .9, 8, c, {}); return mb.done(); }
function generator() { const mb = new MB(); bx(mb, 0, .15, 0, 1.6, 1.1, .9, 0xe5e6e8, { tile: 'metal' }); bx(mb, 0, 0, 0, 1.8, .15, 1.0, 0x3a3d44, {}); bx(mb, .45, 1.2, 0, .5, .3, .5, 0x4a4d54, {}); return mb.done(); }
function tableSet() { const mb = new MB(); mb.cyl(0, .72, 0, .6, .6, .04, 8, 0xf4f4f2, { tint: 0 }); mb.cyl(0, 0, 0, .05, .05, .72, 5, 0x777, {}); for (let i = 0; i < 4; i++) { const a = i * 1.5708 + .4; bx(mb, Math.cos(a) * .9, 0, Math.sin(a) * .9, .38, .45, .38, 0xd9232c, { tint: 0 }); } return mb.done(); }
function umbrellaSet(c1 = 0xe3262e) { const mb = new MB(); mb.cyl(0, 0, 0, .04, .04, 2.3, 5, 0x777777, {}); mb.cyl(0, 2.2, 0, 1.5, 0, .5, 8, c1, { tint: 2 }); mb.cyl(0, 0, 0, .6, .6, .04, 8, 0xdddddd, {}); mb.cyl(0, .72, 0, .55, .55, .04, 8, 0xf4f4f2, {}); return mb.done(); }
function bench() { const mb = new MB(); bx(mb, 0, .4, 0, 1.6, .08, .4, 0x8a5a36, {}); bx(mb, 0, .75, -.2, 1.6, .35, .06, 0x8a5a36, {}); for (const x of [-.7, .7]) bx(mb, x, 0, 0, .08, .42, .38, 0x333, {}); return mb.done(); }
function bin() { const mb = new MB(); mb.cyl(0, 0, 0, .25, .22, .85, 8, 0x2f6a46, {}); return mb.done(); }
function stairsRail(len) { const mb = new MB(); bx(mb, 0, 1.0, 0, .05, .06, len, 0xe4e4e6, {}); bx(mb, 0, .5, 0, .05, .05, len, 0xe4e4e6, {}); return mb.done(); }

// ---------------------------------------------------------------- vehicles (x = right, z = forward, y up; wheels on the ground)
const GL = 0x1e2c3a;
function wheels(mb, hx, zs, r = .33, wd = .22) { for (const z of zs) for (const s of [-1, 1]) mb.wheel(s * hx, r, z, r, wd); }
function carBase(mb, L, Wd, o) {
  const hl = L / 2, hx = Wd / 2; wheels(mb, hx - .1, [hl - .85, -hl + .8], o.r || .33);
  mb.slab(0, .28, .86, Wd, -hl, hl, Wd - .05, -hl + .05, hl - .02, 0, 0xffffff, { tint: 1, topFace: false });                         // lower body
  mb.slab(0, .86, o.hy || .98, Wd - .05, -hl + .05, hl - .4, Wd - .12, -hl + .1, hl - .4, 0, 0xffffff, { tint: 1 });
  mb.slab(0, .86, .98, Wd - .05, hl - .4, hl - .02, Wd - .12, hl - .75, hl - .08, 0, 0xffffff, { tint: 1, topTint: 1 });   // bonnet
  mb.box(0, .25, hl - .02, Wd - .1, .22, .1, 0x1d1d20, {}); mb.box(0, .25, -hl + .02, Wd - .1, .22, .1, 0x1d1d20, {});               // bumpers
  for (const s of [-1, 1]) { mb.box(s * (hx - .35), .66, hl - .01, .42, .15, .05, 0xf6f4e8, {}); mb.box(s * (hx - .3), .66, -hl + .01, .4, .13, .05, 0xc4161c, {}); }
}
function carHatch() { const mb = new MB(), L = 3.9, W = 1.72; carBase(mb, L, W, {}); const hl = L / 2;
  mb.slab(0, .98, 1.5, W - .12, -hl + .45, hl - 1.15, W - .3, -hl + .75, hl - 1.7, 0, GL, { topFace: false }); mb.box(0, 1.5, (-hl + .75 + hl - 1.7) / 2, W - .32, .04, (hl - 1.7) - (-hl + .75), 0xffffff, { tint: 1 });
  return mb.done(); }
function carSedan() { const mb = new MB(), L = 4.6, W = 1.8; carBase(mb, L, W, { hy: 1.0 }); const hl = L / 2;
  mb.slab(0, .98, 1.46, W - .12, -hl + .8, hl - 1.1, W - .3, -hl + 1.2, hl - 1.7, 0, GL, { topFace: false }); mb.box(0, 1.46, (-hl + 1.2 + hl - 1.7) / 2, W - .32, .05, (hl - 1.7) - (-hl + 1.2), 0xffffff, { tint: 1 });
  return mb.done(); }
function carSuv() { const mb = new MB(), L = 4.7, W = 1.9; carBase(mb, L, W, { r: .4, hy: 1.12 }); const hl = L / 2;
  mb.slab(0, 1.1, 1.78, W - .1, -hl + .15, hl - 1.0, W - .22, -hl + .25, hl - 1.5, 0, GL, { topFace: false }); mb.box(0, 1.78, (-hl + .25 + hl - 1.5) / 2, W - .24, .06, (hl - 1.5) - (-hl + .25), 0xffffff, { tint: 1 }); mb.box(0, 1.84, 0, 1.2, .06, 1.8, 0x555960, {});
  return mb.done(); }
function carPickup() { const mb = new MB(), L = 5.2, W = 1.9; carBase(mb, L, W, { r: .4, hy: 1.1 }); const hl = L / 2;
  mb.slab(0, 1.1, 1.75, W - .1, hl - 2.5, hl - .95, W - .22, hl - 2.2, hl - 1.5, 0, GL, { topFace: false }); mb.box(0, 1.75, hl - 1.85, W - .24, .06, .65, 0xffffff, { tint: 1 });
  mb.box(0, 1.1, -hl + 1.15, W - .2, .08, 2.1, 0x2a2d33, {}); mb.box(-W / 2 + .08, 1.1, -hl + 1.15, .1, .36, 2.1, 0xffffff, { tint: 1 }); mb.box(W / 2 - .08, 1.1, -hl + 1.15, .1, .36, 2.1, 0xffffff, { tint: 1 }); mb.box(0, 1.1, -hl + .12, W - .2, .36, .1, 0xffffff, { tint: 1 });
  return mb.done(); }
function carVan() { const mb = new MB(), L = 5.4, W = 2.0; wheels(mb, W / 2 - .1, [L / 2 - 1, -L / 2 + 1.2], .38); const hl = L / 2;
  mb.slab(0, .32, 2.45, W, -hl, hl - 1.2, W, -hl, hl - 1.2, 0, 0xffffff, { tint: 1, tile: 'plain' }); mb.slab(0, .32, 1.55, W, hl - 1.2, hl, W - .1, hl - 1.2, hl - .1, 0, 0xffffff, { tint: 1 });
  mb.slab(0, 1.55, 2.4, W - .08, hl - 1.2, hl - .1, W - .08, hl - 1.75, hl - .6, 0, GL, { topFace: false, sides: 'f' }); mb.box(0, 1.0, hl - .02, W - .1, .22, .1, 0x1d1d20, {}); for (const s of [-1, 1]) mb.box(s * .45, 1.0, hl - .01, .3, .14, .05, 0xf6f4e8, {});
  mb.box(0, 2.45, -.6, W - .1, .1, L - 1.8, 0xe9e9e9, {});
  return mb.done(); }
function bus() { const mb = new MB(), L = 11.6, W = 2.55, hl = L / 2; wheels(mb, W / 2 - .15, [hl - 1.8, -hl + 2.4, -hl + 3.8], .5, .3);
  mb.box(0, .45, 0, W, 2.6, L, 0xffffff, { tile: 'glass', tile2: 'glass', tint: 1, top: 'plain', topCol: 0xe9e9e9, topTint: 0 }); mb.box(0, .45, 0, W + .02, .9, L - .1, 0xffffff, { tint: 1, topFace: false }); mb.box(0, 3.05, 0, W - .1, .12, L - .2, 0xe0e0e0, {}); mb.box(0, 3.1, -1.5, 1.4, .3, 1.5, 0xcfd0d4, {}); return mb.done(); }
function truckTransporter() {       // cab + 12 m box with a livery stripe
  const mb = new MB(), W = 2.55; wheels(mb, W / 2 - .15, [4.6, 5.9, -4.3, -5.5, -6.6], .52, .3);
  mb.box(0, .6, 5.5, 2.4, 2.7, 2.2, 0xffffff, { tint: 1 }); mb.slab(0, 2.0, 3.0, 2.4, 6.6, 6.62, 2.4, 6.6, 6.62, 0, GL, {}); mb.box(0, 1.8, 6.62, 2.0, .9, .05, GL, {}); mb.box(0, .45, 6.6, 2.5, .3, .1, 0x1d1d20, {}); mb.box(0, .55, 3.0, 2.4, .5, 1, 0x2a2d33, {});
  mb.box(0, 1.0, -1.0, W, 3.3, 10.4, 0xffffff, { tile: 'wall', tile2: 'sign6', tint: 1, topFace: true, top: 'plain', topCol: 0xe9e9ea, topTint: 0 });
  mb.quad([W / 2 + .02, 1.7, 3.6], [W / 2 + .02, 1.7, -5.4], [W / 2 + .02, 3.3, -5.4], [W / 2 + .02, 3.3, 3.6], 0xffffff, 'sign0', 1, 1, 0); mb.quad([-W / 2 - .02, 1.7, -5.4], [-W / 2 - .02, 1.7, 3.6], [-W / 2 - .02, 3.3, 3.6], [-W / 2 - .02, 3.3, -5.4], 0xffffff, 'sign0', 1, 1, 0);
  mb.box(0, .4, -1.0, W - .3, .6, 11, 0x2a2d33, {}); return mb.done();
}
function truckBox() { const mb = new MB(), W = 2.4; wheels(mb, W / 2 - .12, [2.9, -2.3, -3.5], .46, .28); mb.box(0, .55, 3.0, 2.3, 2.2, 2.0, 0xffffff, { tint: 1 }); mb.slab(0, 1.7, 2.6, 2.3, 4.0, 4.02, 2.3, 4.0, 4.02, 0, GL, {}); mb.box(0, .8, -.9, W, 2.9, 5.6, 0xffffff, { tile: 'metal', tint: 0, topFace: true, topCol: 0xe4e4e4 }); mb.box(0, .4, -.5, W - .3, .5, 6.5, 0x2a2d33, {}); return mb.done(); }
function trailer() { const mb = new MB(), W = 2.2; wheels(mb, W / 2 - .12, [-.8, .1], .4, .24); mb.box(0, .55, 0, W, 2.3, 6, 0xffffff, { tile: 'metal', tint: 1, topFace: true, topCol: 0xe4e4e4 }); mb.box(0, .45, 3.6, .15, .15, 1.6, 0x555960, {}); mb.box(0, .6, -3.05, W - .1, 1.6, .06, 0xdddddd, {}); return mb.done(); }
function tractor() { const mb = new MB(); for (const s of [-1, 1]) { mb.wheel(s * 1.0, .75, -1.0, .75, .4); mb.wheel(s * .9, .45, 1.4, .45, .26); } mb.box(0, .6, .2, 1.0, 1.0, 3.0, 0x2e8b3d, {}); mb.box(0, 1.6, -.6, 1.5, 1.7, 1.5, 0x2e8b3d, {}); mb.slab(0, 1.7, 3.1, 1.4, -1.28, -.08, 1.4, -1.28, -.08, 0, GL, { topFace: false }); mb.box(0, 3.1, -.68, 1.6, .1, 1.6, 0xe9e9e9, {}); mb.box(.4, 1.8, 1.3, .1, 1.1, .1, 0x222, {}); return mb.done(); }
function ambulance() { const mb = new MB(), L = 5.6, W = 2.1; wheels(mb, W / 2 - .12, [L / 2 - 1, -L / 2 + 1.2], .38); const hl = L / 2;
  mb.slab(0, .32, 2.5, W, -hl, hl - 1.3, W, -hl, hl - 1.3, 0, 0xf4f4f2, { tile: 'plain' }); mb.slab(0, .32, 1.6, W, hl - 1.3, hl, W - .1, hl - 1.3, hl - .1, 0, 0xf4f4f2, {}); mb.slab(0, 1.6, 2.4, W - .08, hl - 1.3, hl - .1, W - .08, hl - 1.8, hl - .6, 0, GL, { topFace: false, sides: 'f' });
  for (const s of [-1, 1]) { mb.quad([s * (W / 2 + .01), 1.3, -1.8 + (s > 0 ? 0 : 3)], [s * (W / 2 + .01), 1.3, 1.2 - (s > 0 ? 0 : 3) + (s > 0 ? 0 : 0)], [s * (W / 2 + .01), 1.3, 1.2], [s * (W / 2 + .01), 1.3, -1.8], 0xd9232c, 'plain', 1, 1, 0); }
  mb.box(0, 2.5, 1.2, 1.6, .22, .3, 0x2244cc, {}); mb.box(0, .9, -.5, W + .02, .35, 4, 0xd9232c, {}); mb.box(W / 2 + .01, 1.55, -.2, .02, .8, .8, 0xd9232c, {}); mb.box(-W / 2 - .01, 1.55, -.2, .02, .8, .8, 0xd9232c, {}); return mb.done(); }
function fireTruck() { const mb = new MB(), L = 7.5, W = 2.5; wheels(mb, W / 2 - .12, [L / 2 - 1.2, -L / 2 + 1.4, -L / 2 + 2.8], .5, .3); mb.box(0, .6, -.6, W, 2.3, 5.2, 0xc4161c, {}); mb.box(0, .6, 2.4, 2.4, 2.8, 2.0, 0xc4161c, {}); mb.slab(0, 1.9, 3.0, 2.3, 3.4, 3.42, 2.3, 3.4, 3.42, 0, GL, {}); mb.box(0, 2.9, -.6, 1.2, .35, 4.4, 0xcfd0d4, { tile: 'metal' }); mb.box(0, 3.4, 2.4, 1.6, .22, .3, 0x2244cc, {}); mb.box(0, 1.2, -.6, W + .02, .12, 5.2, 0xe9e9e9, {}); return mb.done(); }
function safetyCar() { const mb = new MB(), L = 4.5, W = 1.95, hl = L / 2; wheels(mb, W / 2 - .1, [hl - .85, -hl + .85], .35); mb.slab(0, .28, .8, W, -hl, hl, W - .1, -hl + .1, hl - .1, 0, 0x1b6a3a, { topFace: false }); mb.slab(0, .8, 1.15, W - .1, -hl + .1, hl - .7, W - .2, -hl + .2, hl - .9, 0, 0x1b6a3a, { sides: 'b' }); mb.slab(0, .8, .95, W - .1, hl - .7, hl - .1, W - .2, hl - 1.2, hl - .3, 0, 0x1b6a3a, { sides: 'f', topFace: true });
  mb.slab(0, .95, 1.4, W - .2, -hl + .7, hl - 1.2, W - .4, -hl + 1.4, hl - 1.8, 0, GL, { topFace: false }); mb.box(0, 1.4, (-hl + 1.4 + hl - 1.8) / 2, W - .42, .05, (hl - 1.8) - (-hl + 1.4), 0x1b6a3a, {}); mb.box(0, 1.45, 0, 1.4, .1, .35, 0x111, {}); mb.box(-.45, 1.5, 0, .5, .12, .3, 0xff2a1a, { }); mb.box(.45, 1.5, 0, .5, .12, .3, 0xffa000, {}); mb.box(0, 1.0, -hl + .02, W - .2, .05, .12, 0xffa000, {}); return mb.done(); }
function golfCart() { const mb = new MB(); wheels(mb, .6, [.5, -.5], .22, .15); mb.box(0, .25, 0, 1.2, .4, 2.2, 0xffffff, { tint: 1 }); mb.box(0, .65, -.3, 1.0, .12, .9, 0x2b2d33, {}); mb.box(0, 1.5, -.4, 1.3, .06, 1.7, 0xf4f4f2, {}); for (const x of [-.6, .6]) { mb.box(x, .65, .6, .05, .9, .05, 0x888, {}); mb.box(x, .65, -.85, .05, .85, .05, 0x888, {}); } return mb.done(); }
function forklift() { const mb = new MB(); wheels(mb, .55, [.5, -.7], .3, .2); mb.box(0, .3, -.2, 1.1, .9, 1.7, 0xf0a000, {}); mb.box(0, 1.2, -.5, 1.0, .06, .9, 0x333, {}); for (const x of [-.45, .45]) { mb.box(x, .15, .95, .08, 1.7, .08, 0x333, {}); mb.box(x * .6, .1, 1.6, .1, .06, 1.1, 0x777, {}); } return mb.done(); }
function f1car() { const mb = new MB(); for (const [z, r, wd] of [[1.0, .33, .38], [-1.35, .35, .42]]) for (const s of [-1, 1]) mb.wheel(s * .85, r, z, r, wd); mb.box(0, .22, -.2, .6, .35, 3.6, 0xffffff, { tint: 1 }); mb.slab(0, .22, .38, .5, 1.6, 2.8, .12, 2.1, 2.8, 0, 0xffffff, { tint: 1 }); mb.box(0, .22, 2.6, 1.7, .06, .35, 0x222, {}); mb.box(0, .55, -1.9, 1.5, .08, .4, 0x222, {}); mb.box(0, .6, -.4, .35, .25, .5, 0x222, {}); return mb.done(); }
function carPartsRack() { const mb = new MB(); for (let i = 0; i < 3; i++) bx(mb, 0, i * .5, 0, 1.6, .06, .8, 0x555960, {}); for (const [x, z] of [[-.75, -.35], [.75, -.35], [-.75, .35], [.75, .35]]) bx(mb, x, 0, z, .06, 1.1, .06, 0x555960, {}); for (let i = 0; i < 3; i++) mb.cyl(-.3 + i * .5, i * .5 + .06, 0, .2, .2, .3, 6, 0x222, {}); return mb.done(); }

// ---------------------------------------------------------------- the library
let LIB = null;
export function templates() {
  if (LIB) return LIB;
  LIB = {
    houseDay: [houseGable(9, 7.5, 2, { porch: true, dx: -1.6 }), houseGable(8, 6.5, 1, { dx: 0 }), houseGable(10, 8, 2, { garage: true, dx: -2 }), houseVilla(), houseTerrace(3), houseTerrace(4, 3), houseGable(7, 7, 2, { dx: 1.2, pitch: .42 })],
    houseDesert: [houseFlat(9, 8, 2, { awn: true }), houseFlat(8, 7, 1), houseFlat(11, 9, 3), houseArab(12, 10), houseFlat(7, 7, 2)],
    shedGarage: shed(6, 5.5, 'garage'), shedOpen: shed(8, 6, 'garageopen'), shedWood: shed(5, 4, 'wood'),
    barn: barn(9, 18), silo: silo(), waterTower: waterTower(), warehouse: [warehouse(30, 16), warehouse(22, 14), warehouse(40, 18)], shop: shop(10, 7), church: church(), apt: [apartments(18, 12, 4), apartments(24, 12, 5), apartments(14, 10, 4)],
    hospitality: [hospitality(24), hospitality(36)], timing: timingTower(5), marshalHut: marshalHut(), booth: ticketBooth(),
    cone: cone(), tyre3: tyreStack(3), tyre2: tyreStack(2), tyreWall: [tyreWall(8), tyreWall(14), tyreWall(20)], jersey: jersey(3), fence: fence(3), fenceMesh: fenceMesh(3), woodFence: woodFence(3), lightPole: lightPole(7), lightPole9: lightPole(9), flood: floodTower(22), flagPole: flagPole(10), flagPole6: flagPole(6.5),
    hoard: Array.from({ length: NSIGN }, (_, i) => hoarding(6, i)), billboard: [billboard(12, 4, 0), billboard(12, 4, 1), billboard(12, 4, 2), billboard(12, 4, 3), billboard(12, 4, 4), billboard(12, 4, 5)],
    marquee: [marquee(6, 6), marquee(9, 6), marquee(12, 8)], gazebo: gazebo(3), container: container(), bale: bale(), hay: hayBlocks(), toolCart: toolCart(), jack: jack(), drums: drums(), gen: generator(), table: tableSet(), umb: umbrellaSet(), bench: bench(), bin: bin(), rail: stairsRail(4), partsRack: carPartsRack(),
    cars: [carHatch(), carSedan(), carSuv(), carPickup(), carVan()], bus: bus(), transporter: truckTransporter(), truck: truckBox(), trailer: trailer(), tractor: tractor(), ambulance: ambulance(), fire: fireTruck(), safety: safetyCar(), golf: golfCart(), fork: forklift(), f1: f1car(),
  };
  return LIB;
}
export { lin, MB };
