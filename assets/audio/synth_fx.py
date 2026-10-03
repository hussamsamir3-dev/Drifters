# Exhaust bangs, turbo blow-off and turbo spool. One-shots are built in time; the spool loop is built circularly.
import numpy as np, wave, json, base64
from scipy.signal import butter, sosfilt
FS=32000; OUT='game/assets/audio/'; man=[]; rng=np.random.default_rng(21)
def save(name,x,note,loop=False):
    x=x-np.mean(x); 
    if not loop: n=int(.004*FS); x[-n:]*=np.linspace(1,0,n)
    x=x/np.max(np.abs(x))*10**(-2.05/20); pcm=np.round(x*32767).astype('<i2')
    w=wave.open(OUT+name,'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(FS); w.writeframes(pcm.tobytes()); w.close()
    open(OUT+name+'.js','w').write('window.__ASSETS=window.__ASSETS||{};window.__ASSETS[%r]="%s";'%('audio/'+name,base64.b64encode(open(OUT+name,'rb').read()).decode()))
    man.append(dict(file=name,duration_seconds=round(len(x)/FS,3),rms_dbfs=round(20*np.log10(np.sqrt(np.mean(x**2))),2),note=note)); print(name.ljust(24),'%.2fs'%(len(x)/FS),'rms %.1f dB'%man[-1]['rms_dbfs'],'start',int(pcm[0]),'end',int(pcm[-1]))
bp=lambda x,lo,hi: sosfilt(butter(2,[lo,hi],'bandpass',fs=FS,output='sos'),x)
lp=lambda x,f: sosfilt(butter(2,f,'lowpass',fs=FS,output='sos'),x)
hp=lambda x,f: sosfilt(butter(2,f,'highpass',fs=FS,output='sos'),x)
def bang(dur,sub,crack,tail,seed):
    # unburnt fuel igniting in the exhaust: a hard pressure front, a chest thump, the pipe ringing, then smaller after-pops
    r=np.random.default_rng(seed); N=int(dur*FS); t=np.arange(N)/FS; x=np.zeros(N)
    def pop(t0,a,dec):
        i=int(t0*FS); n=N-i; tt=np.arange(n)/FS; env=(1-np.exp(-tt/.0006))*np.exp(-tt/dec)
        nz=r.normal(0,1,n); body=lp(nz,2200)*1.0+bp(nz,2500,7000)*crack
        ring=sum(g*np.sin(2*np.pi*f0*tt+r.random()*6)*np.exp(-tt/d) for f0,g,d in [(165,1.0,.07),(390,.7,.05),(880,.4,.035)])
        thump=np.sin(2*np.pi*(46+34*np.exp(-tt/.03))*tt)*np.exp(-tt/.11)*sub
        x[i:]+=a*(body*env*1.6+ring*.9*np.exp(-tt/.004+0)*0+ring*.8*(1-np.exp(-tt/.001))+thump*1.5)
    pop(.004,1.0,.05)
    for k in range(tail): pop(.07+.05*k+r.random()*.04,.5*.6**k*(.6+.8*r.random()),.03)
    rumble=lp(r.normal(0,1,N),300)*np.exp(-t/.16)*.9*sub                      # the pressure wave rolling down the pipe
    return np.tanh((x+rumble)*.9)
save('exhaust_bang_1.wav',bang(.7,1.0,.7,2,1),'exhaust bang on a hard upshift: deep')
save('exhaust_bang_2.wav',bang(.6,.7,1.2,1,2),'exhaust bang: sharper crack')
save('exhaust_bang_3.wav',bang(.9,1.2,.9,4,3),'exhaust bang with a run of after-pops')
def bov(dur,flutter,seed):
    # blow-off valve: boost dumped to atmosphere. A sharp hiss that falls in pitch; the flutter version chops it as the compressor surges
    r=np.random.default_rng(seed); N=int(dur*FS); t=np.arange(N)/FS; nz=r.normal(0,1,N); out=np.zeros(N); B=24
    for b in range(B):                                                        # falling filter: cross-faded bands from 7 kHz down to 2 kHz
        fc=7000*(2000/7000)**(b/(B-1)); w=np.exp(-((t/dur*B-b)/1.3)**2); out+=bp(nz,fc*.7,min(fc*1.4,FS/2-200))*w
    env=(1-np.exp(-t/.002))*np.exp(-t/(dur*.42))
    if flutter: f=26*np.exp(-t/.45)+11; ph=np.cumsum(f)/FS; env*=.25+.75*np.clip(np.sin(2*np.pi*ph),0,None)**.6
    whis=np.sin(2*np.pi*np.cumsum(5200*np.exp(-t/.12)+900)/FS)*np.exp(-t/.07)*.25   # the turbo winding down underneath
    return np.tanh((out/np.max(np.abs(out))*env*1.4+whis*env)*1.2)
save('turbo_blowoff_1.wav',bov(.55,False,4),'turbo blow-off: clean whoosh')
save('turbo_blowoff_2.wav',bov(.8,True,5),'turbo blow-off with compressor flutter')
N=3*FS; f=np.fft.rfftfreq(N,1/FS); r=np.random.default_rng(9)
def band(shape): y=np.fft.irfft(np.fft.rfft(r.normal(0,1,N))*shape,N); return y/np.std(y)
def slow(nb,d): z=np.fft.rfft(r.normal(0,1,N)); z[nb:]=0; z[0]=0; y=np.fft.irfft(z,N); return 1+d*y/np.max(np.abs(y))
sp=band(1/(1+((f-4300)/45)**2)**2)*slow(20,.3)+.55*band(1/(1+((f-6450)/70)**2)**2)*slow(20,.3)+.5*band((f/(f+2500))**2/(1+(f/9000)**4))+.2*band(1/(1+((f-2150)/60)**2)**2)
save('turbo_spool.wav',sp*slow(8,.12),'turbo spool: compressor whistle and rushing air; pitch follows boost',True)
m=json.load(open(OUT+'audio_manifest.json')); m.setdefault('generated',{}).setdefault('files',[]).extend(man); json.dump(m,open(OUT+'audio_manifest.json','w'),indent=1)
