// The race engineer's voice. eSpeak NG (GPL-3.0, see COPYING) compiled to WebAssembly, trimmed to English and Arabic. It runs here, in a worker, so speaking never costs the game a frame:
// the page sends a line of text and gets back the raw audio, which the page then plays through a radio filter.
import ESpeak from './espeak-ng.js';
let M = null, W = null;
async function init() { M = await ESpeak({ locateFile: f => new URL(f, import.meta.url).href }); W = new M.eSpeakNGWorker(); }
self.onmessage = async e => {
  const { id, lang, text, voice, rate, pitch, warm } = e.data;
  try {
    if (!W) await init(); if (warm) { self.postMessage({ id, warm: true }); return; }
    W.set_voice(voice ? lang + '+' + voice : lang, lang, 0, 0, 0); W.set_rate(rate || 165); W.set_pitch(pitch || 45); W.set_range(55);
    const chunks = []; W.synthesize(text, s => { chunks.push(Int16Array.from(s)); return 0; });
    const n = chunks.reduce((a, c) => a + c.length, 0), pcm = new Float32Array(n); let o = 0; for (const c of chunks) { for (let i = 0; i < c.length; i++) pcm[o + i] = c[i] / 32768; o += c.length; }
    self.postMessage({ id, pcm, rate: W.get_samplerate() }, [pcm.buffer]);
  } catch (err) { self.postMessage({ id, error: String(err && err.message || err) }); }
};
