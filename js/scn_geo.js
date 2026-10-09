// Scenery toolkit: a small texture atlas (windows, brick, roof tiles, seats, signs ...), a tiny low-poly mesh builder (boxes, gables, cylinders, car bodies) and a "chunk" accumulator that
// merges every static prop of the circuit into one mesh per 100 m cell. A whole village of houses, cars, fences and cones therefore costs one or two draw calls per cell instead of one per object.
import * as THREE from 'three';

const AT = 1024;
export const CELL = 100;

// ---------------------------------------------------------------- atlas layout (pixels in a 1024 x 1024 sheet; m = metres covered by one repeat of the tile, [across, along])
export const TILE = {};
const D = (name, x, y, w, h, mw = 3, mh = 3) => { TILE[name] = { x, y, w, h, m: [mw, mh], id: Object.keys(TILE).length }; };
D('win', 0, 0, 192, 192, 3, 3); D('win2', 192, 0, 192, 192, 3, 3); D('wall', 384, 0, 128, 128, 2, 2); D('brick', 512, 0, 128, 128, 2, 2); D('roof', 640, 0, 128, 128, 2, 2);
D('metal', 768, 0, 128, 128, 2, 2); D('glass', 896, 0, 128, 128, 3, 3);
D('door', 0, 192, 192, 192, 3, 3); D('dooropen', 192, 192, 192, 192, 3, 3); D('glass2', 384, 192, 192, 192, 3, 3); D('tent', 576, 192, 128, 128, 2, 2);
D('awning', 704, 192, 128, 64, 1, 1); D('wood', 832, 192, 128, 128, 2, 2); D('doorh', 960, 192, 64, 128, 1, 2);
D('seatA', 0, 384, 256, 64, 4, 1); D('seatB', 0, 448, 256, 64, 4, 1); D('conc', 256, 384, 128, 128, 3, 3); D('asph', 384, 384, 128, 128, 4, 4); D('lot', 512, 384, 128, 128, 5, 5.5);
D('road', 640, 384, 128, 128, 6, 8); D('field', 768, 384, 128, 128, 6, 6); D('hedge', 896, 384, 128, 128, 3, 3);
const SIGNS = ['TAFHEET', 'NILE COLA', 'SCARAB OIL', 'HORUS TYRES', 'EGYSeal', 'RA ROSSO', 'PIT SERVICE', 'PARKING', 'TICKETS', 'FOOD & DRINK', 'FIRST AID', 'PADDOCK', 'TIMING', 'GATE A', 'WELCOME', 'CAIRO MOTORS'];
export const NSIGN = SIGNS.length;
SIGNS.forEach((s, i) => D('sign' + i, (i % 4) * 256, 512 + (i >> 2) * 64, 256, 64, 6, 1.5));
D('tyre', 0, 768, 128, 64, 2.4, .9); D('led', 128, 768, 128, 64, 4, 1); D('check', 256, 768, 64, 64, 1, 1); D('mesh', 320, 768, 64, 64, 2, 2); D('stripe', 384, 768, 64, 64, 1, 1);
D('barrier', 448, 768, 128, 64, 4, 1); D('crop', 576, 768, 128, 128, 6, 6); D('gravel', 704, 768, 128, 128, 4, 4); D('plain', 1000, 1000, 16, 16, 1, 1);
export const TILE_NAMES = Object.keys(TILE);

const R = (a, b) => a + Math.random() * (b - a);
let ATLAS = [null, null];
export function atlas(night) {
  const key = night ? 1 : 0; if (ATLAS[key]) return ATLAS[key];
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = AT; return c; }, cv = mk(), g = cv.getContext('2d'), ce = night ? mk() : null, ge = ce ? ce.getContext('2d') : null;
  g.fillStyle = '#fff'; g.fillRect(0, 0, AT, AT); if (ge) { ge.fillStyle = '#000'; ge.fillRect(0, 0, AT, AT); }
  const tile = (name, f, fe) => { const t = TILE[name]; for (const [ctx, fn] of [[g, f], [ge, fe]]) { if (!ctx || !fn) continue; ctx.save(); ctx.beginPath(); ctx.rect(t.x, t.y, t.w, t.h); ctx.clip(); ctx.translate(t.x, t.y); fn(ctx, t.w, t.h); ctx.restore(); } };
  const grain = (k, w, h, n, a = .07) => { for (let i = 0; i < n; i++) { k.fillStyle = Math.random() < .5 ? `rgba(255,255,255,${R(.02, a)})` : `rgba(0,0,0,${R(.02, a)})`; k.fillRect(R(0, w), R(0, h), R(1, 3), R(1, 3)); } };
  const rect = (k, x, y, w, h, c) => { k.fillStyle = c; k.fillRect(x, y, w, h); };
  // ---- walls with a window: white plaster so the vertex colour tints the wall; frames, glass and sill are drawn here
  const winTile = (shut) => (k, w, h) => { rect(k, 0, 0, w, h, '#f3f0e8'); grain(k, w, h, 500, .06);
    const x0 = 60, y0 = 38, ww = 72, wh = 96; if (shut) { rect(k, x0 - 34, y0 - 4, 30, wh + 8, '#c9c2b4'); rect(k, x0 + ww + 4, y0 - 4, 30, wh + 8, '#c9c2b4'); k.fillStyle = 'rgba(0,0,0,.18)'; for (let q = 0; q < 8; q++) { k.fillRect(x0 - 34, y0 + q * 12, 30, 2); k.fillRect(x0 + ww + 4, y0 + q * 12, 30, 2); } }
    rect(k, x0 - 6, y0 - 6, ww + 12, wh + 12, '#fbfbf8'); const gr = k.createLinearGradient(0, y0, 0, y0 + wh); gr.addColorStop(0, '#9fb5c8'); gr.addColorStop(.5, '#566c80'); gr.addColorStop(1, '#2d3b4a'); k.fillStyle = gr; k.fillRect(x0, y0, ww, wh);
    k.fillStyle = 'rgba(255,255,255,.18)'; k.beginPath(); k.moveTo(x0, y0 + wh); k.lineTo(x0 + ww * .55, y0); k.lineTo(x0 + ww * .8, y0); k.lineTo(x0 + ww * .25, y0 + wh); k.fill();
    rect(k, x0 + ww / 2 - 2, y0, 4, wh, '#fbfbf8'); rect(k, x0, y0 + wh * .38, ww, 4, '#fbfbf8'); rect(k, x0 - 9, y0 + wh + 6, ww + 18, 6, '#9a9a96'); const dg = k.createLinearGradient(0, y0 + wh + 12, 0, y0 + wh + 52); dg.addColorStop(0, 'rgba(60,50,40,.16)'); dg.addColorStop(1, 'rgba(60,50,40,0)'); k.fillStyle = dg; k.fillRect(x0 - 6, y0 + wh + 12, ww + 12, 40); };
  const winE = (k, w, h) => { k.fillStyle = 'rgba(255,214,150,.9)'; k.fillRect(60, 38, 72, 96); k.fillStyle = 'rgba(0,0,0,.45)'; k.fillRect(60 + 34, 38, 4, 96); k.fillRect(60, 38 + 36, 72, 4); };
  tile('win', winTile(false), winE); tile('win2', winTile(true), winE);
  tile('wall', (k, w, h) => { rect(k, 0, 0, w, h, '#f1eee6'); grain(k, w, h, 900, .08); k.strokeStyle = 'rgba(0,0,0,.07)'; for (let q = 0; q < 5; q++) { k.beginPath(); k.moveTo(R(0, w), 0); k.lineTo(R(0, w), h); k.stroke(); } });
  tile('brick', (k, w, h) => { rect(k, 0, 0, w, h, '#d9d3c8'); const bh = 10, bw = 30; for (let r = 0; r * bh < h; r++) for (let c = -1; c * bw < w; c++) { const o = (r & 1) ? bw / 2 : 0, v = R(150, 215) | 0; k.fillStyle = `rgb(${v},${v - 6},${v - 12})`; k.fillRect(c * bw + o + 1, r * bh + 1, bw - 2, bh - 2); } grain(k, w, h, 700, .1); });
  tile('roof', (k, w, h) => { rect(k, 0, 0, w, h, '#b9b9b9'); const th = 16, tw = 16; for (let r = 0; r * th < h + th; r++) for (let c = -1; c * tw < w + tw; c++) { const o = (r & 1) ? tw / 2 : 0, v = R(150, 235) | 0; k.fillStyle = `rgb(${v},${v},${v})`; k.beginPath(); k.roundRect(c * tw + o + .5, r * th - 2, tw - 1, th + 3, 4); k.fill(); k.fillStyle = 'rgba(0,0,0,.28)'; k.fillRect(c * tw + o, r * th + th - 3, tw, 3); } });
  tile('metal', (k, w, h) => { for (let x = 0; x < w; x += 8) { const gr = k.createLinearGradient(x, 0, x + 8, 0); gr.addColorStop(0, '#d8d8d8'); gr.addColorStop(.5, '#fafafa'); gr.addColorStop(1, '#a8a8a8'); k.fillStyle = gr; k.fillRect(x, 0, 8, h); } grain(k, w, h, 400, .08); k.fillStyle = 'rgba(80,50,30,.08)'; for (let q = 0; q < 8; q++) k.fillRect(R(0, w), 0, R(1, 3), R(20, h)); });
  tile('glass', (k, w, h) => { const gr = k.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#8aa6bd'); gr.addColorStop(.55, '#33485c'); gr.addColorStop(1, '#1c2a38'); k.fillStyle = gr; k.fillRect(0, 0, w, h); k.fillStyle = 'rgba(255,255,255,.14)'; k.beginPath(); k.moveTo(0, h); k.lineTo(w * .5, 0); k.lineTo(w * .75, 0); k.lineTo(w * .25, h); k.fill(); rect(k, 0, 0, w, 5, '#e8e8ea'); rect(k, 0, h - 5, w, 5, '#e8e8ea'); rect(k, w / 2 - 2, 0, 4, h, '#e8e8ea'); rect(k, 0, h / 2 - 2, w, 4, '#e8e8ea'); },
    (k, w, h) => { k.fillStyle = 'rgba(255,225,170,.55)'; k.fillRect(6, 6, w / 2 - 8, h / 2 - 8); k.fillRect(w / 2 + 4, h / 2 + 4, w / 2 - 10, h / 2 - 10); });
  tile('glass2', (k, w, h) => { rect(k, 0, 0, w, h, '#2a3340'); const gr = k.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#6f93b3'); gr.addColorStop(1, '#2b3d52'); for (let c = 0; c < 3; c++) for (let r = 0; r < 2; r++) { k.fillStyle = gr; k.fillRect(c * 64 + 3, r * 96 + 4, 58, 86); k.fillStyle = 'rgba(255,255,255,.16)'; k.beginPath(); k.moveTo(c * 64 + 3, r * 96 + 90); k.lineTo(c * 64 + 30, r * 96 + 4); k.lineTo(c * 64 + 44, r * 96 + 4); k.lineTo(c * 64 + 17, r * 96 + 90); k.fill(); } rect(k, 0, 92, w, 8, '#d7d9dc'); },
    (k, w, h) => { k.fillStyle = 'rgba(255,220,160,.5)'; for (let c = 0; c < 3; c++) for (let r = 0; r < 2; r++) if ((c + r) % 2 === 0) k.fillRect(c * 64 + 3, r * 96 + 4, 58, 86); });
  tile('door', (k, w, h) => { rect(k, 0, 0, w, h, '#d6d2c8'); rect(k, 14, 18, w - 28, h - 18, '#3b3f46'); for (let y = 22; y < h - 4; y += 10) { rect(k, 14, y, w - 28, 6, y % 20 === 2 ? '#c9ced6' : '#aeb4be'); rect(k, 14, y + 6, w - 28, 3, '#555b64'); } rect(k, w / 2 - 12, h - 30, 24, 6, '#222'); rect(k, 8, 10, w - 16, 8, '#8c8f94'); });
  tile('dooropen', (k, w, h) => { rect(k, 0, 0, w, h, '#d6d2c8'); rect(k, 8, 14, w - 16, h - 14, '#17181c'); const gr = k.createLinearGradient(0, 14, 0, h); gr.addColorStop(0, '#34373d'); gr.addColorStop(1, '#202226'); k.fillStyle = gr; k.fillRect(14, 20, w - 28, h - 30);
      rect(k, 18, 22, w - 36, 6, '#fff7e0'); for (let q = 0; q < 4; q++) { rect(k, 22 + q * 38, 70, 30, 74, q % 2 ? '#a31219' : '#c81d25'); rect(k, 24 + q * 38, 76, 26, 3, '#222'); rect(k, 24 + q * 38, 96, 26, 3, '#222'); rect(k, 24 + q * 38, 116, 26, 3, '#222'); }
      rect(k, 40, 150, 112, 12, '#d9232c'); rect(k, 88, 142, 30, 10, '#222'); k.fillStyle = '#0c0c0e'; k.fillRect(54, 160, 18, 8); k.fillRect(118, 160, 18, 8); rect(k, 8, 8, w - 16, 8, '#8c8f94'); },
    (k, w, h) => { k.fillStyle = 'rgba(255,240,200,.85)'; k.fillRect(18, 22, w - 36, 6); const gr = k.createLinearGradient(0, 28, 0, h); gr.addColorStop(0, 'rgba(255,230,170,.5)'); gr.addColorStop(1, 'rgba(255,230,170,.1)'); k.fillStyle = gr; k.fillRect(14, 28, w - 28, h - 38); });
  tile('tent', (k, w, h) => { rect(k, 0, 0, w, h, '#f4f3ef'); grain(k, w, h, 300, .05); k.fillStyle = 'rgba(0,0,0,.09)'; for (let x = 0; x < w; x += 32) k.fillRect(x, 0, 2, h); const dg = k.createLinearGradient(0, 0, 0, h); dg.addColorStop(0, 'rgba(0,0,0,0)'); dg.addColorStop(1, 'rgba(60,50,30,.12)'); k.fillStyle = dg; k.fillRect(0, 0, w, h); });
  tile('awning', (k, w, h) => { for (let x = 0; x < w; x += 16) rect(k, x, 0, 8, h, '#ffffff'), rect(k, x + 8, 0, 8, h, '#b8b8b8'); });
  tile('wood', (k, w, h) => { for (let x = 0; x < w; x += 16) { const v = R(150, 200) | 0; rect(k, x, 0, 15, h, `rgb(${v},${v - 18},${v - 40})`); rect(k, x + 15, 0, 1, h, 'rgba(0,0,0,.5)'); } grain(k, w, h, 500, .1); });
  tile('doorh', (k, w, h) => { rect(k, 0, 0, w, h, '#e9e4da'); rect(k, 8, 8, w - 16, h - 8, '#7a4a2a'); rect(k, 14, 16, w - 28, h * .38, '#8c5c38'); rect(k, 14, h * .5, w - 28, h * .42, '#8c5c38'); rect(k, w - 20, h * .52, 5, 5, '#d8b24a'); });
  // seat rows: colourful plastic seats with a dark gap, two patterns
  tile('seatA', (k, w, h) => { rect(k, 0, 0, w, h, '#4a4d54'); const cs = ['#d9232c', '#f3f4f6', '#1c57c8', '#ffc21a', '#d9232c', '#f3f4f6']; for (let c = 0; c < 8; c++) { k.fillStyle = cs[(c * 7 + (Math.random() * 3 | 0)) % cs.length]; k.fillRect(c * 32 + 3, 8, 26, 34); k.fillStyle = 'rgba(0,0,0,.25)'; k.fillRect(c * 32 + 3, 38, 26, 5); k.fillStyle = 'rgba(255,255,255,.2)'; k.fillRect(c * 32 + 3, 8, 26, 4); } rect(k, 0, 50, w, 14, '#a9acb2'); });
  tile('seatB', (k, w, h) => { rect(k, 0, 0, w, h, '#4a4d54'); for (let c = 0; c < 8; c++) { k.fillStyle = (c >> 1) % 2 ? '#e8e9ec' : '#1f4fa8'; k.fillRect(c * 32 + 3, 8, 26, 34); k.fillStyle = 'rgba(0,0,0,.25)'; k.fillRect(c * 32 + 3, 38, 26, 5); } rect(k, 0, 50, w, 14, '#a9acb2'); });
  tile('conc', (k, w, h) => { rect(k, 0, 0, w, h, '#c8c8c6'); grain(k, w, h, 1100, .09); rect(k, 0, 0, w, 2, 'rgba(0,0,0,.2)'); rect(k, 0, h / 2, w, 2, 'rgba(0,0,0,.14)'); rect(k, w / 2, 0, 2, h, 'rgba(0,0,0,.12)'); for (let q = 0; q < 4; q++) { const x = R(0, w); const gr = k.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(60,60,50,.0)'); gr.addColorStop(1, 'rgba(60,60,50,.16)'); k.fillStyle = gr; k.fillRect(x, 0, R(4, 12), h); } });
  tile('asph', (k, w, h) => { rect(k, 0, 0, w, h, '#58585b'); grain(k, w, h, 2400, .14); k.strokeStyle = 'rgba(0,0,0,.35)'; k.lineWidth = 1; for (let q = 0; q < 4; q++) { k.beginPath(); let x = R(0, w), y = R(0, h); k.moveTo(x, y); for (let s = 0; s < 6; s++) { x += R(-14, 14); y += R(6, 22); k.lineTo(x, y); } k.stroke(); } });
  tile('lot', (k, w, h) => { rect(k, 0, 0, w, h, '#5b5b5e'); grain(k, w, h, 2400, .14); rect(k, 0, 0, 4, h, 'rgba(240,240,240,.85)'); rect(k, w - 4, 0, 4, h, 'rgba(240,240,240,.85)'); rect(k, 0, 0, w, 3, 'rgba(240,240,240,.3)'); k.fillStyle = 'rgba(30,30,30,.28)'; for (let q = 0; q < 6; q++) k.fillRect(R(30, 70), R(10, 100), 10, 6); });
  tile('road', (k, w, h) => { rect(k, 0, 0, w, h, '#4c4c50'); grain(k, w, h, 2600, .14); rect(k, 8, 0, 4, h, 'rgba(235,235,235,.7)'); rect(k, w - 12, 0, 4, h, 'rgba(235,235,235,.7)'); for (let y = 6; y < h; y += 64) rect(k, w / 2 - 2, y, 4, 34, 'rgba(255,214,70,.8)'); const sh = k.createLinearGradient(0, 0, w, 0); sh.addColorStop(0, 'rgba(0,0,0,.18)'); sh.addColorStop(.12, 'rgba(0,0,0,0)'); sh.addColorStop(.88, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,.18)'); k.fillStyle = sh; k.fillRect(0, 0, w, h); });
  tile('field', (k, w, h) => { rect(k, 0, 0, w, h, '#b8b8b8'); for (let x = 0; x < w; x += 8) { const v = R(150, 225) | 0; rect(k, x, 0, 5, h, `rgb(${v},${v},${v})`); } grain(k, w, h, 800, .08); });
  tile('crop', (k, w, h) => { rect(k, 0, 0, w, h, '#a0a0a0'); for (let y = 0; y < h; y += 8) { const v = R(130, 215) | 0; rect(k, 0, y, w, 5, `rgb(${v},${v},${v})`); } for (let x = 0; x < w; x += 32) rect(k, x, 0, 1, h, 'rgba(0,0,0,.12)'); grain(k, w, h, 900, .08); });
  tile('gravel', (k, w, h) => { rect(k, 0, 0, w, h, '#9a9890'); for (let i = 0; i < 2500; i++) { const v = R(110, 215) | 0; k.fillStyle = `rgb(${v},${v - 4},${v - 10})`; k.fillRect(R(0, w), R(0, h), R(1, 3), R(1, 3)); } });
  tile('hedge', (k, w, h) => { rect(k, 0, 0, w, h, '#707070'); for (let i = 0; i < 260; i++) { const v = R(95, 255) | 0; k.fillStyle = `rgb(${v},${v},${v})`; k.beginPath(); k.arc(R(0, w), R(0, h), R(4, 11), 0, 7); k.fill(); } for (let i = 0; i < 120; i++) { k.fillStyle = 'rgba(0,0,0,.22)'; k.beginPath(); k.arc(R(0, w), R(0, h), R(2, 6), 0, 7); k.fill(); } });
  tile('tyre', (k, w, h) => { rect(k, 0, 0, w, h, '#2b2b2f'); rect(k, 0, 6, w, 5, '#3a3a40'); rect(k, 0, h - 11, w, 5, '#3a3a40'); k.fillStyle = '#d8d8dc'; k.font = '900 22px Arial Black, Arial, sans-serif'; k.textBaseline = 'middle'; k.fillText('TAFHEET   SLICK   ', 4, h / 2 + 1); grain(k, w, h, 300, .1); });
  tile('led', (k, w, h) => { rect(k, 0, 0, w, h, '#101216'); for (let x = 0; x < w; x += 4) for (let y = 0; y < h; y += 4) if (Math.random() < .35) rect(k, x, y, 3, 3, Math.random() < .5 ? '#ffb02e' : '#f4f4f4'); }, (k, w, h) => { for (let x = 0; x < w; x += 4) for (let y = 0; y < h; y += 4) if (Math.random() < .35) { k.fillStyle = Math.random() < .5 ? 'rgba(255,176,46,.9)' : 'rgba(255,255,255,.9)'; k.fillRect(x, y, 3, 3); } });
  tile('check', (k, w, h) => { for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) rect(k, i * 16, j * 16, 16, 16, (i + j) & 1 ? '#111' : '#f4f4f4'); });
  tile('mesh', (k, w, h) => { k.clearRect(0, 0, w, h); k.strokeStyle = 'rgba(205,208,214,.95)'; k.lineWidth = 2; for (let q = -h; q < w; q += 10) { k.beginPath(); k.moveTo(q, 0); k.lineTo(q + h, h); k.stroke(); k.beginPath(); k.moveTo(q + h, 0); k.lineTo(q, h); k.stroke(); } });
  tile('stripe', (k, w, h) => { for (let x = -h; x < w + h; x += 32) { k.fillStyle = '#f4f4f4'; k.beginPath(); k.moveTo(x, h); k.lineTo(x + 16, h); k.lineTo(x + 16 + h, 0); k.lineTo(x + h, 0); k.fill(); k.fillStyle = '#d9232c'; k.beginPath(); k.moveTo(x + 16, h); k.lineTo(x + 32, h); k.lineTo(x + 32 + h, 0); k.lineTo(x + 16 + h, 0); k.fill(); } });
  tile('barrier', (k, w, h) => { rect(k, 0, 0, w, h, '#e8e8e8'); rect(k, 0, 0, w / 2, h, '#d9232c'); rect(k, 0, h - 8, w, 8, 'rgba(0,0,0,.18)'); grain(k, w, h, 300, .08); });
  // sponsor boards
  const BR = [['#e3262e', '#fff'], ['#1c4ea8', '#fff'], ['#ffc21a', '#17181c'], ['#17181c', '#ffc21a'], ['#f3f4f6', '#1c4ea8'], ['#c4161c', '#fff'], ['#19a7ce', '#fff'], ['#1c4ea8', '#fff'], ['#2fb457', '#fff'], ['#ffc21a', '#17181c'], ['#f3f4f6', '#e3262e'], ['#17181c', '#fff'], ['#2a2f3a', '#ffd24a'], ['#e3262e', '#fff'], ['#1fa35a', '#fff'], ['#f3f4f6', '#1c4ea8']];
  SIGNS.forEach((s, i) => tile('sign' + i, (k, w, h) => { k.fillStyle = BR[i][0]; k.fillRect(0, 0, w, h); k.fillStyle = BR[i][1]; k.fillRect(0, 0, w, 4); k.fillRect(0, h - 4, w, 4); if (i < 6) { k.fillRect(0, 12, 6, h - 24); } k.font = 'italic 900 34px Rubik, Arial Black, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText(s, w / 2, h / 2 + 2, w - 24); },
    (k, w, h) => { k.fillStyle = 'rgba(255,255,255,.55)'; k.fillRect(0, 0, w, h); }));
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping; tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter;
  let emi = null; if (ce) { emi = new THREE.CanvasTexture(ce); emi.colorSpace = THREE.SRGBColorSpace; emi.anisotropy = 2; }
  return ATLAS[key] = { tex, emi, night: !!night };
}

// ---------------------------------------------------------------- material that reads the atlas through per-vertex tile rectangles
export function sceneMaterial(atl, opts = {}) {
  const night = !!atl.night, cut = !!opts.cut;
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: opts.rough ?? .9, metalness: opts.metal ?? 0, side: cut ? THREE.DoubleSide : THREE.FrontSide, alphaTest: cut ? .4 : 0, envMapIntensity: .5 });
  m.onBeforeCompile = sh => {
    sh.uniforms.uAtlas = { value: atl.tex }; sh.uniforms.uEmi = { value: atl.emi || atl.tex }; sh.uniforms.uEmiK = opts.emiK || { value: 1 };
    sh.vertexShader = 'attribute vec4 aTile; attribute vec2 aUv; varying vec4 vTile; varying vec2 vTuv;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvTile = aTile * (4. / 1024.); vTuv = aUv;');
    sh.fragmentShader = 'uniform sampler2D uAtlas; uniform sampler2D uEmi; uniform float uEmiK; varying vec4 vTile; varying vec2 vTuv;\n' + sh.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec2 tuv = vTile.xy + clamp(fract(vTuv), .006, .994) * vTile.zw; vec4 tcol = textureGrad(uAtlas, tuv, dFdx(vTuv) * vTile.zw, dFdy(vTuv) * vTile.zw); diffuseColor.rgb *= tcol.rgb; ${cut ? 'diffuseColor.a *= tcol.a;' : ''}`)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + (night ? 'totalEmissiveRadiance += textureLod(uEmi, tuv, 0.).rgb * uEmiK;' : ''));
  };
  m.customProgramCacheKey = () => 'scn' + (night ? 'N' : 'D') + (cut ? 'C' : '');
  return m;
}

// ---------------------------------------------------------------- mesh builder (templates)
const _c = new THREE.Color(); const COL = new Map(); const fl = v => v === true ? 1 : !v ? 0 : v;
export function lin(c) { if (Array.isArray(c)) return c; let v = COL.get(c); if (!v) { _c.set(c); v = [_c.r, _c.g, _c.b]; COL.set(c, v); } return v; }
export const tint = (c, k = 1) => { const v = lin(c); return [v[0] * k, v[1] * k, v[2] * k]; };

export class MB {
  constructor() { this.P = []; this.N = []; this.C = []; this.U = []; this.T = []; this.F = []; }
  tri(a, b, c, col, tile, ua, ub, uc, flag) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
    const t = TILE[tile || 'plain'], rc = lin(col), tr = [t.x >> 2, t.y >> 2, t.w >> 2, t.h >> 2];
    for (const [p, u] of [[a, ua], [b, ub], [c, uc]]) { this.P.push(p[0], p[1], p[2]); this.N.push(nx, ny, nz); this.C.push(rc[0], rc[1], rc[2]); this.U.push(u[0], u[1]); this.T.push(tr[0], tr[1], tr[2], tr[3]); this.F.push(fl(flag)); }
  }
  quad(a, b, c, d, col, tile, su = 1, sv = 1, flag = false) { this.tri(a, b, c, col, tile, [0, 0], [su, 0], [su, sv], flag); this.tri(a, c, d, col, tile, [0, 0], [su, sv], [0, sv], flag); }
  // general box-like solid: bottom rect (w0 wide, z from zb0 to zb1) and top rect (w1, zt0..zt1), y0..y1, centred on x
  slab(cx, y0, y1, w0, zb0, zb1, w1, zt0, zt1, cz, col, o = {}) {
    const m = o.tile ? TILE[o.tile].m : [1, 1], tm = o.top ? TILE[o.top].m : [1, 1], f = fl(o.tint);
    const P = [[cx - w0 / 2, y0, cz + zb1], [cx + w0 / 2, y0, cz + zb1], [cx + w0 / 2, y0, cz + zb0], [cx - w0 / 2, y0, cz + zb0], [cx - w1 / 2, y1, cz + zt1], [cx + w1 / 2, y1, cz + zt1], [cx + w1 / 2, y1, cz + zt0], [cx - w1 / 2, y1, cz + zt0]];
    const h = y1 - y0, wm = Math.max(w0, w1), dm = Math.max(zb1 - zb0, zt1 - zt0), sk = 1, sides = o.sides || 'fbrl';
    if (sides.includes('f')) this.quad(P[0], P[1], P[5], P[4], col, o.tile, wm / m[0], h / m[1] * sk, f);
    if (sides.includes('r')) this.quad(P[1], P[2], P[6], P[5], col, o.tile2 || o.tile, dm / m[0], h / m[1] * sk, f);
    if (sides.includes('b')) this.quad(P[2], P[3], P[7], P[6], col, o.tile, wm / m[0], h / m[1] * sk, f);
    if (sides.includes('l')) this.quad(P[3], P[0], P[4], P[7], col, o.tile2 || o.tile, dm / m[0], h / m[1] * sk, f);
    if (o.topFace !== false) this.quad(P[4], P[5], P[6], P[7], o.topCol ?? col, o.top || 'plain', wm / tm[0], dm / tm[1], o.topTint === undefined ? f : fl(o.topTint));
    if (o.bottom) this.quad(P[3], P[2], P[1], P[0], col, 'plain', 1, 1, f);
  }
  box(cx, y, cz, w, h, d, col, o = {}) { this.slab(cx, y, y + h, w, -d / 2, d / 2, w, -d / 2, d / 2, cz, col, o); }
  // gable roof; the ridge runs along z (or along x with o.rx), u = across the ridge, v = along it
  gable(cx, y, cz, w, d, h, col, o = {}) {
    const ov = o.ov ?? .35, ovz = o.ovz ?? ov, W = w / 2 + ov, V = d / 2 + ovz, tile = o.tile || 'roof', m = TILE[tile].m, ls = Math.hypot(W, h), f = o.tint === undefined ? 2 : fl(o.tint);
    const pt = (u, yy, v) => o.rx ? [cx + v, yy, cz - u] : [cx + u, yy, cz + v];
    const dr = h * ov / (w / 2), eF = pt(-W, y - dr, V), rF = pt(0, y + h, V), rB = pt(0, y + h, -V), eB = pt(-W, y - dr, -V), eF2 = pt(W, y - dr, V), eB2 = pt(W, y - dr, -V);
    this.quad(eF, rF, rB, eB, col, tile, 2 * V / m[0], ls / m[1], f); this.quad(rF, eF2, eB2, rB, col, tile, 2 * V / m[0], ls / m[1], f);
    const gc = o.gcol ?? col, gt = o.gtile || 'wall', gm = TILE[gt].m, gf = o.gtint === undefined ? 1 : fl(o.gtint);
    this.tri(pt(-w / 2, y, d / 2), pt(w / 2, y, d / 2), pt(0, y + h, d / 2), gc, gt, [0, 0], [w / gm[0], 0], [w / 2 / gm[0], h / gm[1]], gf);
    this.tri(pt(w / 2, y, -d / 2), pt(-w / 2, y, -d / 2), pt(0, y + h, -d / 2), gc, gt, [0, 0], [w / gm[0], 0], [w / 2 / gm[0], h / gm[1]], gf);
  }
  // roof sloping from height y at the +x edge... ridge = high side at -x (lean-to / mono pitch)
  mono(cx, y, cz, w, d, rise, col, o = {}) {
    const tile = o.tile || 'metal', m = TILE[tile].m, f = o.tint === undefined ? 2 : fl(o.tint), ov = o.ov ?? .25, ls = Math.hypot(w + ov * 2, rise), x0 = cx - w / 2 - ov, x1 = cx + w / 2 + ov, zf = cz + d / 2 + ov, zb = cz - d / 2 - ov;
    this.quad([x1, y, zf], [x1, y, zb], [x0, y + rise, zb], [x0, y + rise, zf], col, tile, (d + 2 * ov) / m[0], ls / m[1], f);
    const gt = o.gtile || 'wall', gm = TILE[gt].m, gc = o.gcol ?? col;
    this.tri([cx - w / 2, y, cz + d / 2], [cx + w / 2, y, cz + d / 2], [cx - w / 2, y + rise, cz + d / 2], gc, gt, [0, 0], [w / gm[0], 0], [0, rise / gm[1]], (o.gtint === undefined ? 1 : fl(o.gtint)));
    this.tri([cx + w / 2, y, cz - d / 2], [cx - w / 2, y, cz - d / 2], [cx - w / 2, y + rise, cz - d / 2], gc, gt, [0, 0], [w / gm[0], 0], [0, rise / gm[1]], o.gtint === undefined ? 1 : fl(o.gtint));
  }
  // frustum / cylinder / cone about a vertical axis
  cyl(cx, y, cz, r0, r1, h, seg, col, o = {}) {
    const f = fl(o.tint), tile = o.tile, m = tile ? TILE[tile].m : [1, 1], cap = o.cap !== false;
    const at = (i, r, yy) => { const a = i / seg * 6.2831853; return [cx + Math.cos(a) * r, yy, cz + Math.sin(a) * r]; };
    for (let i = 0; i < seg; i++) { const a = at(i, r0, y), b = at(i + 1, r0, y), c = at(i + 1, r1, y + h), d = at(i, r1, y + h), u0 = i / seg * (o.turns || 1), u1 = (i + 1) / seg * (o.turns || 1), sv = o.sv ?? (h / m[1]);
      if (r1 > 1e-4) { this.tri(b, a, d, col, tile, [u1, 0], [u0, 0], [u0, sv], f); this.tri(b, d, c, col, tile, [u1, 0], [u0, sv], [u1, sv], f); } else this.tri(b, a, d, col, tile, [u1, 0], [u0, 0], [(u0 + u1) / 2, sv], f); }
    if (cap && r1 > 1e-4) { const c0 = [cx, y + h, cz]; for (let i = 0; i < seg; i++) this.tri(c0, at(i + 1, r1, y + h), at(i, r1, y + h), o.topCol ?? col, 'plain', [0, 0], [0, 0], [0, 0], o.topTint ?? f); }
  }
  // a wheel: a short cylinder lying across x
  wheel(cx, cy, cz, r, wd, col = 0x141416, seg = 7) {
    const f = false; for (let i = 0; i < seg; i++) { const a0 = i / seg * 6.2831853, a1 = (i + 1) / seg * 6.2831853, y0 = cy + Math.sin(a0) * r, z0 = cz + Math.cos(a0) * r, y1 = cy + Math.sin(a1) * r, z1 = cz + Math.cos(a1) * r, xa = cx - wd / 2, xb = cx + wd / 2;
      this.tri([xb, y0, z0], [xb, y1, z1], [xa, y1, z1], col, 'plain', [0, 0], [0, 0], [0, 0], f); this.tri([xb, y0, z0], [xa, y1, z1], [xa, y0, z0], col, 'plain', [0, 0], [0, 0], [0, 0], f);
      this.tri([cx + wd / 2 + .001, cy, cz], [xb + .001, y1, z1], [xb + .001, y0, z0], 0x9a9ca2, 'plain', [0, 0], [0, 0], [0, 0], f); this.tri([cx - wd / 2 - .001, cy, cz], [xa - .001, y0, z0], [xa - .001, y1, z1], 0x9a9ca2, 'plain', [0, 0], [0, 0], [0, 0], f); }
  }
  done() {
    const n = this.P.length / 3; let r = 0, hy = 0; for (let i = 0; i < n; i++) { r = Math.max(r, Math.hypot(this.P[i * 3], this.P[i * 3 + 2])); hy = Math.max(hy, this.P[i * 3 + 1]); } return { n, r, hy, P: new Float32Array(this.P), N: new Float32Array(this.N), C: new Float32Array(this.C), U: new Float32Array(this.U), T: new Uint8Array(this.T), F: new Uint8Array(this.F) };
  }
}

// ---------------------------------------------------------------- chunks: static templates merged per cell
class Acc {
  constructor() { this.n = 0; this.cap = 4096; this.P = new Float32Array(this.cap * 3); this.N = new Float32Array(this.cap * 3); this.C = new Uint8Array(this.cap * 4); this.U = new Float32Array(this.cap * 2); this.T = new Uint8Array(this.cap * 4); }
  grow(add) { if (this.n + add <= this.cap) return; let c = this.cap; while (c < this.n + add) c *= 2; const g = (A, k, T) => { const B = new T(c * k); B.set(A.subarray(0, this.n * k)); return B; }; this.P = g(this.P, 3, Float32Array); this.N = g(this.N, 3, Float32Array); this.C = g(this.C, 4, Uint8Array); this.U = g(this.U, 2, Float32Array); this.T = g(this.T, 4, Uint8Array); this.cap = c; }
}
const B8 = v => v <= 0 ? 0 : v >= 1 ? 255 : (v * 255 + .5) | 0;
export class Chunks {
  constructor() { this.cells = new Map(); this.tris = 0; }
  place(tpl, x, y, z, yaw = 0, s = 1, tn = null, sy = s, kx = x, kz = z) {
    const key = Math.floor(kx / CELL) + ',' + Math.floor(kz / CELL); let a = this.cells.get(key); if (!a) this.cells.set(key, a = new Acc());
    a.grow(tpl.n); const cs = Math.cos(yaw), sn = Math.sin(yaw), { P, N, C, U, T, F } = tpl; let o = a.n;
    const tA = tn ? tn[0] : null, tB = tn ? (tn[1] || tn[0]) : null;
    for (let i = 0; i < tpl.n; i++, o++) { const px = P[i * 3], py = P[i * 3 + 1], pz = P[i * 3 + 2], nx = N[i * 3], ny = N[i * 3 + 1], nz = N[i * 3 + 2];
      a.P[o * 3] = x + s * (px * cs + pz * sn); a.P[o * 3 + 1] = y + sy * py; a.P[o * 3 + 2] = z + s * (-px * sn + pz * cs);
      a.N[o * 3] = nx * cs + nz * sn; a.N[o * 3 + 1] = ny; a.N[o * 3 + 2] = -nx * sn + nz * cs;
      const f = F[i], tt = f === 1 ? tA : f === 2 ? tB : null; a.C[o * 4] = B8(C[i * 3] * (tt ? tt[0] : 1)); a.C[o * 4 + 1] = B8(C[i * 3 + 1] * (tt ? tt[1] : 1)); a.C[o * 4 + 2] = B8(C[i * 3 + 2] * (tt ? tt[2] : 1)); a.C[o * 4 + 3] = 255;
      a.U[o * 2] = U[i * 2]; a.U[o * 2 + 1] = U[i * 2 + 1]; a.T[o * 4] = T[i * 4]; a.T[o * 4 + 1] = T[i * 4 + 1]; a.T[o * 4 + 2] = T[i * 4 + 2]; a.T[o * 4 + 3] = T[i * 4 + 3]; }
    a.n = o; this.tris += tpl.n / 3;
  }
  // a quad on the ground (road, field, car park): corners in world space (p0->p1 is the u direction), uv in tile repeats; always faces up
  ground(tile, pts, col, su, sv, y = .05, flag = 0) {
    const mb = new MB(), V = pts.map(p => [p[0], y, p[1]]), uv = [[0, 0], [su, 0], [su, sv], [0, sv]];
    const cr = (V[1][2] - V[0][2]) * (V[2][0] - V[0][0]) - (V[1][0] - V[0][0]) * (V[2][2] - V[0][2]);
    if (cr >= 0) { mb.tri(V[0], V[1], V[2], col, tile, uv[0], uv[1], uv[2], flag); mb.tri(V[0], V[2], V[3], col, tile, uv[0], uv[2], uv[3], flag); } else { mb.tri(V[0], V[2], V[1], col, tile, uv[0], uv[2], uv[1], flag); mb.tri(V[0], V[3], V[2], col, tile, uv[0], uv[3], uv[2], flag); }
    this.place(mb.done(), 0, 0, 0, 0, 1, null, 1, (pts[0][0] + pts[2][0]) / 2, (pts[0][1] + pts[2][1]) / 2);
  }
  build(mat, G, cull, shadow = false) {
    for (const [key, a] of this.cells) {
      if (!a.n) continue; const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(a.P.subarray(0, a.n * 3), 3)); g.setAttribute('normal', new THREE.BufferAttribute(a.N.subarray(0, a.n * 3), 3));
      g.setAttribute('color', new THREE.BufferAttribute(a.C.subarray(0, a.n * 4), 4, true)); g.setAttribute('aUv', new THREE.BufferAttribute(a.U.subarray(0, a.n * 2), 2));
      g.setAttribute('aTile', new THREE.BufferAttribute(a.T.subarray(0, a.n * 4), 4, false)); g.computeBoundingSphere();
      const m = new THREE.Mesh(g, mat); m.receiveShadow = true; m.castShadow = shadow; G.add(m); const bs = g.boundingSphere; if (cull) cull(m, bs.center.x, bs.center.z); this.drawn = (this.drawn || 0) + 1;
    }
  }
}
