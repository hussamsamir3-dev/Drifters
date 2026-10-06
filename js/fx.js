// Particles (smoke, dirt, sparks, nitro flame) and tyre skid marks.
import * as THREE from 'three';

// Up to four spot lights (car headlights) that smoke, dust and rain can catch. main fills these in every frame.
export const LIGHTS = { p: [0, 1, 2, 3].map(() => new THREE.Vector3(0, -999, 0)), d: [0, 1, 2, 3].map(() => new THREE.Vector3(0, 0, 1)), c: [0, 1, 2, 3].map(() => new THREE.Vector4(0, 0, 0, 0)) };
const LIT = 'uniform vec3 uLP[4]; uniform vec3 uLD[4]; uniform vec4 uLC[4]; vec3 beams(vec3 w){ vec3 l=vec3(0.); for(int i=0;i<4;i++){ vec3 d=w-uLP[i]; float dist=length(d)+.001; float c=dot(d/dist,uLD[i]); l+=uLC[i].rgb*uLC[i].a*smoothstep(.88,.975,c)*max(0.,1.-dist/48.)*min(1.,dist*.5); } return l; }';
let PUFF = null;
function puffTex() {            // a cloudy puff: many soft blobs piled up, brighter on top, with a ragged edge
  if (PUFF) return PUFF; const c = document.createElement('canvas'); c.width = c.height = 256; const k = c.getContext('2d'); k.scale(2, 2);
  for (let i = 0; i < 120; i++) { const a = Math.random() * 6.28, r = Math.pow(Math.random(), .7) * 34, x = 64 + Math.cos(a) * r, y = 64 + Math.sin(a) * r, s = 7 + Math.random() * 19, v = Math.min(255, 120 + (64 - y) * 1.6 + Math.random() * 90) | 0, g = k.createRadialGradient(x, y, 0, x, y, s); g.addColorStop(0, `rgba(${v},${v},${v},.34)`); g.addColorStop(1, `rgba(${v},${v},${v},0)`); k.fillStyle = g; k.fillRect(x - s, y - s, s * 2, s * 2); }
  PUFF = new THREE.CanvasTexture(c); return PUFF;
}
export class Particles {
  constructor(scene, max = 1800, additive = false) {
    this.max = max; this.cur = 0;
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 4); this.size = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max);
    this.grow = new Float32Array(max); this.alpha = new Float32Array(max); this.grav = new Float32Array(max); this.rot = new Float32Array(max); this.spin = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1)); g.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { uScale: { value: 600 }, uTex: { value: puffTex() }, uSoft: { value: additive ? 0 : 1 }, uLP: { value: LIGHTS.p }, uLD: { value: LIGHTS.d }, uLC: { value: LIGHTS.c } },
      vertexShader: LIT + 'attribute vec4 aColor; attribute float aSize, aRot; varying vec4 vC; varying vec3 vL; varying float vR; uniform float uScale; void main(){ vC=aColor; vR=aRot; vL=beams(position); vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aSize*uScale/max(-mv.z,.1); }',
      fragmentShader: 'uniform sampler2D uTex; uniform float uSoft; varying vec4 vC; varying vec3 vL; varying float vR; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); float c=cos(vR), s=sin(vR); vec4 t=texture2D(uTex, vec2(c*p.x-s*p.y, s*p.x+c*p.y)+.5); float a=mix(smoothstep(.5,.1,d), t.a*smoothstep(.5,.42,d), uSoft)*vC.a; if(a<.008) discard; gl_FragColor=vec4(vC.rgb*mix(1., .72+.5*t.r, uSoft)+vL*.85, min(1., a*(1.+dot(vL,vec3(.5))))); }',   // each puff is a turning, uneven cloud with lit and shaded parts, not a round dot   // smoke and dust inside a headlight beam glow
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5;
    scene.add(this.points); this.geo = g;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, r, g, b, a, grav = 0) {
    const i = this.cur; this.cur = (i + 1) % this.max;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = this.maxLife[i] = life; this.size[i] = size; this.grow[i] = grow; this.alpha[i] = a; this.grav[i] = grav;
    this.col[i * 4] = r; this.col[i * 4 + 1] = g; this.col[i * 4 + 2] = b; this.col[i * 4 + 3] = 0; this.rot[i] = Math.random() * 6.28; this.spin[i] = (Math.random() - .5) * 2.2;
  }
  update(dt) {
    const { pos, vel, life, maxLife, size, grow, col, alpha, grav } = this;
    for (let i = 0; i < this.max; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      if (life[i] <= 0) { size[i] = 0; col[i * 4 + 3] = 0; continue; }
      const j = i * 3; vel[j + 1] -= grav[i] * dt;
      pos[j] += vel[j] * dt; pos[j + 1] += vel[j + 1] * dt; pos[j + 2] += vel[j + 2] * dt;
      const k = 1 - dt * 1.6; vel[j] *= k; vel[j + 2] *= k;
      size[i] += grow[i] * dt; this.rot[i] += this.spin[i] * dt; col[i * 4 + 3] = alpha[i] * (life[i] / maxLife[i]) * Math.min(1, (maxLife[i] - life[i]) / .07 + .15);   // fades in quickly, then thins out
    }
    const a = this.geo.attributes; a.position.needsUpdate = a.aColor.needsUpdate = a.aSize.needsUpdate = a.aRot.needsUpdate = true;
  }
  clear() { this.life.fill(0); this.size.fill(0); }
}

export class Skids {
  constructor(scene, maxQuads = 3500) {
    this.max = maxQuads; this.cur = 0; this.pos = new Float32Array(maxQuads * 18);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x0b0b0c, transparent: true, opacity: .5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false; this.mesh.renderOrder = 2; scene.add(this.mesh); this.geo = g;
  }
  // a, b = previous left/right edge of the tyre print; c, d = new left/right edge. each [x,y,z]
  quad(a, b, c, d) {
    const p = this.pos, o = this.cur * 18; this.cur = (this.cur + 1) % this.max;
    p.set(a, o); p.set(b, o + 3); p.set(c, o + 6); p.set(b, o + 9); p.set(d, o + 12); p.set(c, o + 15);
    this.dirty = true;
  }
  flush() { if (this.dirty) { this.geo.attributes.position.needsUpdate = true; this.dirty = false; } }
  clear() { this.pos.fill(0); this.dirty = true; }
}

// Floating dust motes that catch the light, plus rain streaks. Both live in a box that follows the camera
// and wrap around inside the vertex shader, so they cost one draw call each and never run out.
export class Ambient {
  constructor(scene) {
    const mk = (count, box, lines) => {
      const pos = new Float32Array(count * (lines ? 6 : 3)), tip = new Float32Array(count * (lines ? 2 : 1));
      for (let i = 0; i < count; i++) { const x = Math.random() * box, y = Math.random() * box * .5, z = Math.random() * box;
        if (lines) { pos.set([x, y, z, x, y, z], i * 6); tip[i * 2 + 1] = 1; } else pos.set([x, y, z], i * 3); }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('tip', new THREE.BufferAttribute(tip, 1)); return g;
    };
    const wrap = 'vec3 p=position+uVel*uTime; p=mod(p-uCam+vec3(B*.5,B*.25,B*.5), vec3(B,B*.5,B))-vec3(B*.5,B*.25,B*.5)+uCam;';
    this.dust = new THREE.Points(mk(500, 70), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uVel: { value: new THREE.Vector3(.5, .12, .3) }, uCol: { value: new THREE.Color(1, .95, .8) }, uA: { value: .5 }, uScale: { value: 600 }, uLP: { value: LIGHTS.p }, uLD: { value: LIGHTS.d }, uLC: { value: LIGHTS.c } },
      vertexShader: LIT + `uniform float uTime,uScale; uniform vec3 uCam,uVel; attribute float tip; varying float vF; varying float vL; const float B=70.; void main(){ ${wrap} p.y+=sin(uTime*.6+position.x)*.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=.09*uScale/max(-mv.z,.5); vF=smoothstep(35.,22.,length(p-uCam))*smoothstep(1.,4.,-mv.z); vL=dot(beams(p),vec3(.34)); gl_PointSize*=1.+min(vL,1.5)*1.6; }`,
      fragmentShader: 'uniform vec3 uCol; uniform float uA; varying float vF; varying float vL; void main(){ float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*(uA+vL*1.4)*vF; if(a<.01) discard; gl_FragColor=vec4(mix(uCol,vec3(1.,.96,.84),min(1.,vL)),min(1.,a)); }' }));
    this.rain = new THREE.LineSegments(mk(1600, 50, true), new THREE.ShaderMaterial({ transparent: true, depthWrite: false,
      uniforms: { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uVel: { value: new THREE.Vector3(2, -26, 1) }, uA: { value: 0 } },
      vertexShader: `uniform float uTime; uniform vec3 uCam,uVel; attribute float tip; varying float vT; const float B=50.; void main(){ ${wrap} p+=normalize(uVel)*tip*-.9; vT=tip; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }`,
      fragmentShader: 'uniform float uA; varying float vT; void main(){ gl_FragColor=vec4(.8,.86,.95,uA*(.15+vT*.5)); }' }));
    for (const o of [this.dust, this.rain]) { o.frustumCulled = false; o.renderOrder = 6; scene.add(o); }
    this.rain.visible = false; this.scene = scene;
  }
  update(dt, cam, wet, scale) {
    for (const o of [this.dust, this.rain]) { o.material.uniforms.uTime.value += dt; o.material.uniforms.uCam.value.copy(cam.position); }
    this.dust.material.uniforms.uScale.value = scale; this.dust.material.uniforms.uA.value = .5 * (1 - wet);
    this.rain.visible = wet > .02; this.rain.material.uniforms.uA.value = wet * .4;
  }
  dispose() { for (const o of [this.dust, this.rain]) { this.scene.remove(o); o.geometry.dispose(); o.material.dispose(); } }
}

// Parts knocked off a car: they tumble, bounce, come to rest on the track and stay there for a while.
export class Debris {
  constructor(scene, max = 140) { this.scene = scene; this.items = []; this.max = max; }      // pieces stay where they land for the rest of the race; the oldest go when there are too many
  spawn(geo, mat, pos, quat, scale, vel) {
    if (this.items.length >= this.max) this.scene.remove(this.items.shift().m);
    const m = new THREE.Mesh(geo, mat); m.position.copy(pos); if (quat) m.quaternion.copy(quat); if (scale) m.scale.copy(scale); m.castShadow = true; this.scene.add(m);
    this.items.push({ m, v: vel, w: new THREE.Vector3((Math.random() - .5) * 12, (Math.random() - .5) * 12, (Math.random() - .5) * 12), life: 9999, rest: false });
  }
  update(dt, track, cars) {
    if (cars) for (const it of this.items) { if (!it.rest) continue; for (const c of cars) { const sp = Math.hypot(c.vx, c.vz); if (sp < 3) continue; const dx = it.m.position.x - c.x, dz = it.m.position.z - c.z; if (dx * dx + dz * dz < 2.6) { it.rest = false; it.v.set(c.vx * .75 + (Math.random() - .5) * 3, 2 + Math.random() * 2.5, c.vz * .75 + (Math.random() - .5) * 3); break; } } }      // a car driving over a piece flicks it away
    for (let i = this.items.length - 1; i >= 0; i--) { const it = this.items[i], m = it.m;
      if (!it.rest) { it.v.y -= 22 * dt; m.position.addScaledVector(it.v, dt); m.rotation.x += it.w.x * dt; m.rotation.y += it.w.y * dt; m.rotation.z += it.w.z * dt;
        const g = track.height(m.position.x, m.position.z) + .07;
        if (m.position.y < g) { m.position.y = g; if (Math.abs(it.v.y) < 2) { it.rest = true; m.rotation.x = Math.round(m.rotation.x / Math.PI) * Math.PI; m.rotation.z = Math.round(m.rotation.z / Math.PI) * Math.PI; } else { it.v.y *= -.36; it.v.x *= .62; it.v.z *= .62; it.w.multiplyScalar(.55); } } }
      it.life -= dt; if (it.life < 0) { this.scene.remove(m); this.items.splice(i, 1); } }
  }
  dispose() { for (const it of this.items) this.scene.remove(it.m); this.items = []; }
}

// Loose objects that react to being hit: cones, tyre stacks, hay bales and braking boards. They sit still until a car touches them,
// then they are thrown, tumble, bounce off the ground and barriers, and stay wherever they land. Hitting one costs the car speed
// in proportion to its weight.
export class Props {
  constructor(scene) {
    this.scene = scene; this.items = [];
    const std = (c, r = .8, m = 0) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m }), bt = document.createElement('canvas'); bt.width = 64; bt.height = 64; const k = bt.getContext('2d'); k.fillStyle = '#f3f4f6'; k.fillRect(0, 0, 64, 64); k.fillStyle = '#e3262e'; k.font = '900 34px Arial Black, sans-serif'; k.textAlign = 'center'; k.textBaseline = 'middle'; k.fillText('100', 32, 34);
    const cone = new THREE.ConeGeometry(.27, .62, 12).translate(0, .31, 0), base = new THREE.BoxGeometry(.52, .05, .52).translate(0, .025, 0);
    this.kinds = {
      cone: { m: 2.2, r: .3, h: .31, make: () => { const g = new THREE.Group(); g.add(new THREE.Mesh(cone, this.mOrange || (this.mOrange = std(0xff6a13, .6))), new THREE.Mesh(base, this.mDark || (this.mDark = std(0x141416, .8)))); return g; } },
      tyre: { m: 9, r: .36, h: .13, make: () => new THREE.Mesh(this.gTyre || (this.gTyre = new THREE.TorusGeometry(.26, .13, 8, 16).rotateX(Math.PI / 2)), [this.mDark || (this.mDark = std(0x141416, .8)), null][0]) },
      bale: { m: 24, r: .85, h: .46, make: () => new THREE.Mesh(this.gBale || (this.gBale = new THREE.BoxGeometry(1.15, .92, 1.6, 2, 2, 2)), this.mHay || (this.mHay = std(0xd8a441, 1))) },
      board: { m: 5, r: .5, h: .55, make: () => { const g = new THREE.Group(), b = new THREE.Mesh(new THREE.BoxGeometry(.95, .7, .06), [std(0xf3f4f6), std(0xf3f4f6), std(0xf3f4f6), std(0xf3f4f6), new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(bt) }), std(0xf3f4f6)]); b.position.y = .2; const p = new THREE.Mesh(new THREE.BoxGeometry(.08, .55, .08), this.mDark || (this.mDark = std(0x141416, .8))); p.position.y = -.28; g.add(b, p); return g; } },
    };
  }
  add(type, x, z, y, ry = 0, stack = 0) {
    const K = this.kinds[type], m = K.make(); m.traverse(o => { if (o.isMesh) o.castShadow = true; }); m.scale.setScalar(1.35); m.position.set(x, y * 1.35 + K.h * 1.35, z); m.rotation.y = ry; this.scene.add(m);
    this.items.push({ m, K, v: new THREE.Vector3(), w: new THREE.Vector3(), rest: true, stack, g: y }); return this;
  }
  update(dt, cars, track, onHit) {
    for (const it of this.items) {
      const p = it.m.position;
      for (const c of cars) {                      // car against object: two circles along the car
        if (c.out || (c.x - p.x) ** 2 + (c.z - p.z) ** 2 > 30) continue; const sn = Math.sin(c.th), cs = Math.cos(c.th);
        for (const o of [1.6, -1.6]) { const dx = p.x - (c.x + sn * o), dz = p.z - (c.z + cs * o), d = Math.hypot(dx, dz), min = 1.45 + it.K.r * 1.35; if (d >= min || p.y - it.g > .75) continue;
          const nx = dx / (d || 1), nz = dz / (d || 1), vn = (c.vx - it.v.x) * nx + (c.vz - it.v.z) * nz; p.x += nx * (min - d); p.z += nz * (min - d); if (vn < .4) continue;
          const mr = it.K.m / c.spec.mass, lat = dx * cs - dz * sn, sd = (Math.abs(lat) > .15 ? Math.sign(lat) : Math.random() < .5 ? 1 : -1) * vn * (.35 + Math.random() * .4);   // glances off to one side rather than riding on the nose
          it.v.x += nx * vn * .95 + cs * sd; it.v.z += nz * vn * .95 - sn * sd; it.v.y = 1.5 + vn * .2 * (1 + Math.random());
          it.w.set((Math.random() - .5) * vn * 1.6, (Math.random() - .5) * vn, (Math.random() - .5) * vn * 1.6); it.rest = false;
          c.vx -= nx * vn * mr * 6; c.vz -= nz * vn * mr * 6; c.r += (Math.random() - .5) * vn * mr * 1.2;
          if (it.stack) for (const q of this.items) if (q.stack === it.stack && q.rest) { q.rest = false; q.v.set(it.v.x * (.4 + Math.random() * .6) + (Math.random() - .5) * 3, 1.5 + Math.random() * 3, it.v.z * (.4 + Math.random() * .6) + (Math.random() - .5) * 3); q.w.set((Math.random() - .5) * 8, (Math.random() - .5) * 6, (Math.random() - .5) * 8); }
          if (onHit) onHit(c, vn * Math.sqrt(it.K.m / 9), p.x, p.z); break; } }
      if (it.rest) continue;
      it.v.y -= 21 * dt; p.addScaledVector(it.v, dt); it.m.rotation.x += it.w.x * dt; it.m.rotation.y += it.w.y * dt; it.m.rotation.z += it.w.z * dt;
      if (track.surf(p.x, p.z) === 3) { p.addScaledVector(it.v, -dt); it.v.x *= -.4; it.v.z *= -.4; }                       // off the barrier
      const g = track.height(p.x, p.z) + it.K.h * 1.08; it.g = g;
      if (p.y < g + .02) { const f = Math.exp(-3.2 * dt); it.v.x *= f; it.v.z *= f; }      // drag while sliding or rolling on the ground
      if (p.y < g) { p.y = g; if (Math.abs(it.v.y) < 1.6 && it.v.x * it.v.x + it.v.z * it.v.z < .5) { it.rest = true; it.v.set(0, 0, 0); } else { it.v.y *= -.38; it.v.x *= .7; it.v.z *= .7; it.w.multiplyScalar(.6); } }
    }
  }
  dispose() { for (const it of this.items) this.scene.remove(it.m); this.items = []; }
}
