// Online layer. Uses Supabase Realtime (broadcast + presence) for 2-player rooms and a
// `lap_times` table for the leaderboard. With no Supabase keys it falls back to a
// BroadcastChannel so you can still test a duel between two tabs of the same browser.
const cfg = window.GAME_CONFIG || {};
export const hasSupabase = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase);
let client = null;
const sb = () => client || (client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, { realtime: { params: { eventsPerSecond: 30 } } }));
const myId = Math.random().toString(36).slice(2, 10);

export class Room {
  constructor() { this.id = myId; this.peers = {}; this.onMessage = () => {}; this.onPeers = () => {}; this.meta = {}; this.code = null; }
  static makeCode() { const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s = ''; for (let i = 0; i < 5; i++) s += a[Math.random() * a.length | 0]; return s; }

  join(code, meta) {
    this.code = code.toUpperCase(); this.meta = { ...meta, id: this.id, t: Date.now() };
    return new Promise((resolve, reject) => {
      if (hasSupabase) {
        const ch = this.ch = sb().channel('tafheet:' + this.code, { config: { broadcast: { self: false }, presence: { key: this.id } } });
        ch.on('broadcast', { event: 'm' }, ({ payload }) => this.onMessage(payload));
        ch.on('presence', { event: 'sync' }, () => {
          const st = ch.presenceState(); this.peers = {};
          for (const k in st) if (k !== this.id && st[k][0]) this.peers[k] = st[k][0];
          this.onPeers(this.peers);
        });
        ch.subscribe(async status => {
          if (status === 'SUBSCRIBED') { await ch.track(this.meta); resolve(); }
          else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') reject(new Error('Could not reach the room (' + status + ')'));
        });
      } else {
        const bc = this.bc = new BroadcastChannel('tafheet:' + this.code);
        bc.onmessage = ({ data }) => {
          if (data._ === 'hi' || data._ === 'here') { this.peers[data.meta.id] = data.meta; this.onPeers(this.peers); if (data._ === 'hi') bc.postMessage({ _: 'here', meta: this.meta }); }
          else if (data._ === 'bye') { delete this.peers[data.id]; this.onPeers(this.peers); }
          else this.onMessage(data);
        };
        bc.postMessage({ _: 'hi', meta: this.meta });
        this.unload = () => bc.postMessage({ _: 'bye', id: this.id }); addEventListener('beforeunload', this.unload);
        setTimeout(resolve, 250);
      }
    });
  }
  setMeta(patch) {
    Object.assign(this.meta, patch);
    if (this.ch) this.ch.track(this.meta); else if (this.bc) this.bc.postMessage({ _: 'here', meta: this.meta });
  }
  send(msg) { if (this.ch) this.ch.send({ type: 'broadcast', event: 'm', payload: msg }); else if (this.bc) this.bc.postMessage(msg); }
  leave() {
    if (this.ch) { this.ch.untrack(); sb().removeChannel(this.ch); this.ch = null; }
    if (this.bc) { this.bc.postMessage({ _: 'bye', id: this.id }); this.bc.close(); this.bc = null; removeEventListener('beforeunload', this.unload); }
    this.peers = {};
  }
}

// ---- leaderboard (optional: needs the table from supabase.sql)
export async function submitLap(track, name, car, ms) {
  if (!hasSupabase) return;
  try { await sb().from('lap_times').insert({ track, name: name.slice(0, 16), car, ms: Math.round(ms) }); } catch (e) { console.warn('leaderboard', e); }
}
export async function topLaps(track) {
  if (!hasSupabase) return null;
  try { const { data, error } = await sb().from('lap_times').select('name,car,ms').eq('track', track).order('ms', { ascending: true }).limit(8); return error ? null : data; } catch (e) { return null; }
}
