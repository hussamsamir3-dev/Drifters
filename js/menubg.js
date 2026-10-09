// Menu backdrop: a top-down scene of cars drifting on dirt, drawn on a small 2D canvas at 30 frames a second.
// It replaces the live 3D race that used to run behind the menu, so the menu costs almost nothing to show.
export class MenuBg {
  constructor(cv) { this.cv = cv; this.on = false; this.last = 0; this.parts = []; }
  start() { if (this.on) return; this.on = true; this.cv.hidden = false; this.build(); }
  stop() { if (!this.on) return; this.on = false; this.cv.hidden = true; }
  build() {
    const W = this.W = Math.min(760, Math.max(420, Math.round(innerWidth * .62))), H = this.H = Math.round(W * innerHeight / innerWidth); if (this.cv.width === W && this.cv.height === H && this.ground) return;
    this.cv.width = W; this.cv.height = H; this.ctx = this.cv.getContext('2d');
    const mk = () => { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; };
    // the dirt: brown earth, darker damp patches, a few puddles, old ruts
    const g = this.ground = mk(), k = g.getContext('2d'); let gr = k.createLinearGradient(0, 0, W, H); gr.addColorStop(0, '#4a3523'); gr.addColorStop(.5, '#3b2a1b'); gr.addColorStop(1, '#2b1e13'); k.fillStyle = gr; k.fillRect(0, 0, W, H);
    for (let i = 0; i < 2600; i++) { const v = Math.random(); k.fillStyle = `rgba(${v > .5 ? '120,90,60' : '20,12,6'},${.03 + Math.random() * .07})`; k.beginPath(); k.ellipse(Math.random() * W, Math.random() * H, 2 + Math.random() * 26, 1 + Math.random() * 12, Math.random() * 3, 0, 7); k.fill(); }
    for (let i = 0; i < 7; i++) { const x = Math.random() * W, y = Math.random() * H, rx = 30 + Math.random() * 70, ry = 14 + Math.random() * 30, a = Math.random() * 3; k.fillStyle = 'rgba(18,14,12,.55)'; k.beginPath(); k.ellipse(x, y, rx, ry, a, 0, 7); k.fill(); k.fillStyle = 'rgba(150,170,190,.08)'; k.beginPath(); k.ellipse(x - rx * .2, y - ry * .2, rx * .5, ry * .35, a, 0, 7); k.fill(); }
    k.strokeStyle = 'rgba(15,9,5,.25)'; k.lineWidth = 5; for (let i = 0; i < 9; i++) { k.beginPath(); k.ellipse(W * (.3 + Math.random() * .5), H * (.3 + Math.random() * .4), W * (.15 + Math.random() * .25), H * (.15 + Math.random() * .25), Math.random(), 0, 7); k.stroke(); }
    this.trail = mk(); this.tctx = this.trail.getContext('2d');
    // vignette, and a soft dust puff sprite
    const v = this.vig = mk(), vk = v.getContext('2d'); gr = vk.createRadialGradient(W * .58, H * .5, H * .25, W * .58, H * .5, W * .75); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,.82)'); vk.fillStyle = gr; vk.fillRect(0, 0, W, H);
    const p = this.puff = document.createElement('canvas'); p.width = p.height = 64; const pk = p.getContext('2d'); gr = pk.createRadialGradient(32, 32, 2, 32, 32, 32); gr.addColorStop(0, 'rgba(190,150,105,.55)'); gr.addColorStop(1, 'rgba(190,150,105,0)'); pk.fillStyle = gr; pk.fillRect(0, 0, 64, 64);
    const S = this.S = W / 1100;
    this.cars = [{ col: '#e3262e', cx: .6, cy: .5, rx: .2, ry: .26, sp: .55, ph: 0, slip: .62 }, { col: '#ffc21a', cx: .62, cy: .52, rx: .31, ry: .36, sp: .43, ph: 2.3, slip: .55 }, { col: '#19a7ce', cx: .58, cy: .48, rx: .12, ry: .15, sp: -.7, ph: 4.1, slip: -.7 }].map(c => Object.assign(c, { spr: this.sprite(c.col, S) }));
    this.parts = [];
  }
  sprite(col, S) {             // one car seen from above, drawn once
    const c = document.createElement('canvas'), w = Math.round(34 * S * 1.6), h = Math.round(70 * S * 1.6); c.width = w; c.height = h; const k = c.getContext('2d'), r = w * .28;
    const rr = (x, y, ww, hh, rad) => { k.beginPath(); k.moveTo(x + rad, y); k.arcTo(x + ww, y, x + ww, y + hh, rad); k.arcTo(x + ww, y + hh, x, y + hh, rad); k.arcTo(x, y + hh, x, y, rad); k.arcTo(x, y, x + ww, y, rad); k.fill(); };
    k.fillStyle = '#0c0c0d'; for (const [x, y] of [[0, .16], [.84, .16], [0, .68], [.84, .68]]) rr(w * x, h * y, w * .16, h * .16, 2);
    const g = k.createLinearGradient(0, 0, w, 0); g.addColorStop(0, 'rgba(0,0,0,.35)'); g.addColorStop(.3, 'rgba(255,255,255,.18)'); g.addColorStop(.7, 'rgba(255,255,255,.05)'); g.addColorStop(1, 'rgba(0,0,0,.4)');
    k.fillStyle = col; rr(w * .1, 0, w * .8, h, r); k.fillStyle = g; rr(w * .1, 0, w * .8, h, r);
    k.fillStyle = 'rgba(10,16,22,.92)'; rr(w * .2, h * .2, w * .6, h * .17, r * .5); rr(w * .22, h * .64, w * .56, h * .12, r * .5); k.fillStyle = 'rgba(0,0,0,.18)'; rr(w * .2, h * .38, w * .6, h * .25, 3);
    k.fillStyle = '#fff6d8'; rr(w * .16, h * .015, w * .18, h * .035, 2); rr(w * .66, h * .015, w * .18, h * .035, 2); k.fillStyle = '#ff2a2a'; rr(w * .16, h * .955, w * .2, h * .03, 2); rr(w * .64, h * .955, w * .2, h * .03, 2);
    return c;
  }
  tick(now) {
    if (!this.on || now - this.last < 40) return; const dt = Math.min(.05, (now - this.last) / 1000); this.last = now; if (this.cv.width !== Math.min(760, Math.max(420, Math.round(innerWidth * .62)))) this.build();
    const c = this.ctx, W = this.W, H = this.H, S = this.S, t = now / 1000, tc = this.tctx;
    tc.globalCompositeOperation = 'destination-out'; tc.fillStyle = 'rgba(0,0,0,.012)'; tc.fillRect(0, 0, W, H); tc.globalCompositeOperation = 'source-over';       // old tyre marks slowly fade
    c.setTransform(1, 0, 0, 1, 0, 0); c.globalCompositeOperation = 'source-over';
    const zx = Math.sin(t * .11) * 10 * S, zy = Math.cos(t * .09) * 7 * S, zs = 1.04 + Math.sin(t * .07) * .02; c.setTransform(zs, 0, 0, zs, -W * (zs - 1) / 2 + zx, -H * (zs - 1) / 2 + zy);   // slow camera drift
    c.drawImage(this.ground, 0, 0); c.drawImage(this.trail, 0, 0);
    const lights = [];
    for (const car of this.cars) {
      const a = t * car.sp + car.ph, x = W * (car.cx + Math.cos(a) * car.rx), y = H * (car.cy + Math.sin(a) * car.ry), dir = Math.sign(car.sp), tx = -Math.sin(a) * car.rx * W * dir, ty = Math.cos(a) * car.ry * H * dir, trav = Math.atan2(ty, tx);
      const head = trav - car.slip * dir * (.85 + .15 * Math.sin(t * 1.7 + car.ph)), hx = Math.cos(head), hy = Math.sin(head), w = car.spr.width, h = car.spr.height;   // nose points inside the turn: a held drift
      for (const sx of [-.36, .36]) { const rx2 = x - hx * h * .34 - hy * sx * w, ry2 = y - hy * h * .34 + hx * sx * w; tc.fillStyle = 'rgba(12,7,4,.5)'; tc.beginPath(); tc.arc(rx2, ry2, 2.6 * S, 0, 7); tc.fill();                 // ruts from the rear tyres
        for (let i = 0; i < 2; i++) this.parts.push({ x: rx2, y: ry2, vx: -Math.cos(trav) * 60 * S + (Math.random() - .5) * 90 * S, vy: -Math.sin(trav) * 60 * S + (Math.random() - .5) * 90 * S, l: .5 + Math.random() * .5, m: 1, r: (1.5 + Math.random() * 2.5) * S });
        if (Math.random() < .5) this.parts.push({ x: rx2, y: ry2, vx: (Math.random() - .5) * 20 * S, vy: (Math.random() - .5) * 20 * S - 6 * S, l: 1.6 + Math.random(), m: 0, r: (14 + Math.random() * 16) * S }); }
      c.save(); c.translate(x, y); c.rotate(head + Math.PI / 2); c.fillStyle = 'rgba(0,0,0,.35)'; c.beginPath(); c.ellipse(4 * S, 6 * S, w * .56, h * .54, 0, 0, 7); c.fill(); c.drawImage(car.spr, -w / 2, -h / 2); c.restore();
      lights.push([x + hx * h * .5, y + hy * h * .5, head]);
    }
    for (let i = this.parts.length - 1; i >= 0; i--) { const p = this.parts[i]; p.l -= dt; if (p.l <= 0) { this.parts.splice(i, 1); continue; } p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= .96; p.vy *= .96;
      if (p.m) { c.fillStyle = `rgba(70,46,26,${Math.min(1, p.l * 2)})`; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 7); c.fill(); } else { c.globalAlpha = Math.min(.5, p.l * .35); const r = p.r * (2.6 - p.l * .6); c.drawImage(this.puff, p.x - r, p.y - r, r * 2, r * 2); c.globalAlpha = 1; } }
    if (this.parts.length > 420) this.parts.splice(0, this.parts.length - 420);
    c.globalCompositeOperation = 'lighter';
    for (const [x, y, head] of lights) { const L = 230 * S, g = c.createRadialGradient(x, y, 4, x + Math.cos(head) * L * .5, y + Math.sin(head) * L * .5, L * .62); g.addColorStop(0, 'rgba(255,240,200,.34)'); g.addColorStop(1, 'rgba(255,240,200,0)'); c.fillStyle = g; c.beginPath(); c.moveTo(x, y); c.arc(x, y, L, head - .32, head + .32); c.closePath(); c.fill(); }   // headlight beams cutting through the dust
    for (const [col, ph, sp] of [['255,170,70', 0, .13], ['70,160,255', 2.5, .1], ['255,60,170', 4.2, .08]]) { const x = W * (.58 + Math.cos(t * sp + ph) * .38), y = H * (.5 + Math.sin(t * sp * 1.4 + ph) * .38), g = c.createRadialGradient(x, y, 0, x, y, W * .3); g.addColorStop(0, `rgba(${col},.2)`); g.addColorStop(1, `rgba(${col},0)`); c.fillStyle = g; c.fillRect(0, 0, W, H); }   // coloured floodlights sweeping the arena
    c.globalCompositeOperation = 'source-over'; c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(this.vig, 0, 0);
  }
}
