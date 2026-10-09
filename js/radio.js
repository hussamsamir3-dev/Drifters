// The race engineer's radio: plays the supplied voice clips (assets/radio/) through the game's own audio graph.
// One voice at a time, a small priority queue, duplicate suppression, cooldowns, expiry, cancellation and interruption for critical calls.
// The clips already carry their own radio filtering, so nothing is added to them and they are never pitched or looped.
import { getJSON, getAsset } from './assets.js';

const LEVEL = { essential: 0, balanced: 1, full: 2 };
const KEEP = 14;                      // decoded clips kept in memory at once (the short, important ones are pinned and not counted)

export class RaceRadio {
  constructor(audio, hooks = {}) {
    this.audio = audio; this.hooks = hooks; this.cues = new Map(); this.queue = []; this.last = new Map(); this.cur = null;
    this.buf = new Map(); this.loading = new Map(); this.pinned = new Set(); this.level = 1; this.enabled = true; this.dead = false; this.ready = false;
    this.log = []; this.played = []; this.miss = new Set();
  }
  load() { return this.loadP || (this.loadP = this.loadOnce()); }      // one load, shared by whoever asks first
  async loadOnce() {
    try { const m = await getJSON('radio/manifest.json'); for (const c of m.cues) this.cues.set(c.id, c); this.ready = true; for (const c of this.cues.values()) if (c.pin) this.pinned.add(c.id); }
    catch (e) { this.dead = true; console.warn('race radio manifest failed', e && e.message); }
  }
  setLevel(l) { this.level = LEVEL[l] ?? 1; }
  has(id) { return this.cues.has(id); }
  // fetch and decode a clip (once); a failure marks the clip missing so the game never waits on it
  fetchBuf(id) {
    if (this.buf.has(id)) return Promise.resolve(this.buf.get(id));
    if (this.loading.has(id)) return this.loading.get(id);
    const cue = this.cues.get(id), ctx = this.audio.ctx; if (!cue || !ctx || this.miss.has(id)) return Promise.resolve(null);
    const p = getAsset('radio/' + cue.file).then(a => ctx.decodeAudioData(a)).then(b => { this.buf.set(id, b); this.loading.delete(id); this.trim(); return b; }).catch(e => { this.miss.add(id); this.loading.delete(id); console.warn('radio clip failed:', id, e && e.message); return null; });
    this.loading.set(id, p); return p;
  }
  trim() { let n = 0; for (const k of [...this.buf.keys()].reverse()) { if (this.pinned.has(k) || (this.cur && this.cur.id === k)) continue; if (++n > KEEP) this.buf.delete(k); } }
  // load the calls that cannot wait (spotter, flags, pits, critical car) as soon as the race is set up
  warm(ids) { for (const id of ids) if (this.cues.has(id) && this.audio.ctx) this.fetchBuf(id); }

  /* say(id, opts): opts.lv  the lowest chatter level that wants this call (0 essential, 1 balanced, 2 full)
                    opts.ttl seconds the call stays worth saying;  opts.cooldown seconds before the same call may repeat
                    opts.interrupt  cut the current call (only if this one is at least as important);  opts.check()  asked again just before it is spoken: false drops it
                    opts.tag  a group name, so a whole group can be cancelled when the situation changes;  opts.priority overrides the pack's own */
  say(id, o = {}) {
    if (!this.enabled || this.dead || !this.ready) return false;
    const cue = this.cues.get(id); if (!cue) { if (!this.miss.has('?' + id)) { this.miss.add('?' + id); console.warn('unknown radio cue', id); } return false; }
    if ((o.lv ?? 1) > this.level) return false;
    const now = performance.now(), pr = o.priority ?? cue.priority, cd = (o.cooldown ?? cue.cooldown) * 1000;
    if (this.cur && this.cur.id === id) return false; if (this.queue.some(q => q.id === id)) return false;
    if (now - (this.last.get(id) ?? -1e9) < cd) return false;
    const it = { id, cue, pr, tag: o.tag || cue.category, exp: now + (o.ttl ?? (cue.category === 'spotter' ? 1.5 : 10)) * 1000, check: o.check, born: now };
    if (o.interrupt && this.cur && pr >= this.cur.pr) this.cutCurrent();
    this.queue.push(it); this.queue.sort((a, b) => b.pr - a.pr || a.born - b.born); if (this.queue.length > 5) this.queue.length = 5;
    this.fetchBuf(id); this.next(); return true;
  }
  cancel(id) { this.queue = this.queue.filter(q => q.id !== id); }
  cancelTag(tag) { this.queue = this.queue.filter(q => q.tag !== tag && q.cue.category !== tag); }
  cancelBelow(pr) { this.queue = this.queue.filter(q => q.pr >= pr); }
  cutCurrent() { const c = this.cur; if (!c) return; this.cur = null; try { c.src.onended = null; c.src.stop(); } catch (e) {} try { c.g.disconnect(); } catch (e) {} this.hooks.speaking && this.hooks.speaking(false, c.cue); }
  stop() { this.queue = []; this.cutCurrent(); }
  reset() { this.stop(); this.last.clear(); this.played.length = 0; }

  async next() {
    if (this.cur || this.busy || !this.enabled) return;
    const ctx = this.audio.ctx; if (!ctx || ctx.state !== 'running') { this.queue = this.queue.filter(q => performance.now() < q.exp); return; }
    this.busy = true;
    try {
      for (;;) {
        const now = performance.now(); this.queue = this.queue.filter(q => q.exp > now); const it = this.queue[0]; if (!it) return;
        const tl = performance.now(), b = await this.fetchBuf(it.id); it.exp += performance.now() - tl;      // time spent loading does not use up the call's life
        if (this.cur) return;                                   // something interrupted while this was loading
        if (this.queue[0] && this.queue[0] !== it && this.queue[0].pr > it.pr) continue;   // something more important arrived while this loaded
        if (!this.queue.includes(it)) continue;                 // cancelled meanwhile
        this.queue.splice(this.queue.indexOf(it), 1);
        if (!b || performance.now() > it.exp || (it.check && !it.check())) continue;   // missing, stale or no longer true
        if (!this.audio.radioBus) continue;
        const src = ctx.createBufferSource(), g = ctx.createGain(); src.buffer = b; g.gain.value = 1; src.connect(g); g.connect(this.audio.radioBus);
        this.cur = { id: it.id, cue: it.cue, pr: it.pr, src, g }; this.last.set(it.id, performance.now()); this.played.push(it.id); if (this.played.length > 80) this.played.shift();
        src.onended = () => { if (this.cur && this.cur.src === src) { this.cur = null; try { g.disconnect(); } catch (e) {} this.hooks.speaking && this.hooks.speaking(false, it.cue); setTimeout(() => this.next(), 160); } };
        this.hooks.speaking && this.hooks.speaking(true, it.cue); src.start(); return;
      }
    } finally { this.busy = false; }
  }
}
