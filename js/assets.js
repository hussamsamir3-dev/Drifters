// Loads binary assets. Over http(s) it fetches the real file; when the page is opened straight from disk
// (file://) fetch is blocked, so it falls back to a base64 copy wrapped in a .js file.
const local = location.protocol === 'file:';
function fromScript(name) {
  return new Promise((res, rej) => {
    window.__ASSETS = window.__ASSETS || {};
    const done = () => { const b = atob(window.__ASSETS[name]); delete window.__ASSETS[name]; const u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); res(u.buffer); };
    const s = document.createElement('script'); s.src = 'assets/' + name + '.js'; s.onload = done; s.onerror = () => rej(new Error('Missing assets/' + name + '.js')); document.head.appendChild(s);
  });
}
export async function getAsset(name, onProgress) {
  if (local) return fromScript(name);
  const r = await fetch('assets/' + name); if (!r.ok) throw new Error('Could not load assets/' + name + ' (' + r.status + ')');
  const total = +r.headers.get('content-length') || 0;
  if (!onProgress || !total || !r.body) return r.arrayBuffer();
  const reader = r.body.getReader(), chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; onProgress(Math.min(1, got / total)); }
  const out = new Uint8Array(got); let o = 0; for (const c of chunks) { out.set(c, o); o += c.length; } return out.buffer;
}
export const getJSON = async name => JSON.parse(new TextDecoder().decode(await getAsset(name)));
