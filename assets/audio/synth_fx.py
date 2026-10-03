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
def comb(x,ms,fb):                       # the tailpipe: a short tube that rings after the pressure front passes
    d=int(ms/1000*FS); y=x.copy()
    for n in range(d,len(y)): y[n]+=fb*y[n-d]
    return y
def bang(dur,boom,crack,tail,seed):
    # fuel igniting in the exhaust: a very short broadband crack, a boom of low-frequency pressure (noise, not a tone),
    # the pipe ringing, and sometimes smaller pops after it. Short and dry: it is heard outdoors, not in a hall.
    r=np.random.default_rng(seed); N=int(dur*FS); t=np.arange(N)/FS; x=np.zeros(N)
    def pop(t0,a,dec):
        i=int(t0*FS); n=N-i; tt=np.arange(n)/FS; nz=r.normal(0,1,n)
        front=nz*np.exp(-tt/.0022)*(1-np.exp(-tt/.0002))                       # the crack itself: about 3 ms
        mid=bp(nz,220,1400)*np.exp(-tt/(dec*.6))*(1-np.exp(-tt/.001))*1.5      # body of the pop
        low=lp(r.normal(0,1,n),150)*np.exp(-tt/dec)*(1-np.exp(-tt/.003))*4.5*boom   # the boom you feel
        x[i:]+=a*(front*crack*1.4+mid+low)
    pop(.003,1.0,.075)
    for k in range(tail): pop(.085+.055*k+r.random()*.03,.42*.62**k*(.6+.8*r.random()),.035)
    x=comb(comb(x,5.6,.42),9.3,.3)
    return np.tanh(lp(x,6500)*.55)
save('exhaust_bang_1.wav',bang(.5,1.0,.8,1,31),'exhaust bang: deep boom')
save('exhaust_bang_2.wav',bang(.42,.7,1.2,0,32),'exhaust bang: single sharp crack')
save('exhaust_bang_3.wav',bang(.7,1.1,.9,3,33),'exhaust bang with a few after-pops')
def pink(r,n): z=np.fft.rfft(r.normal(0,1,n)); fq=np.fft.rfftfreq(n,1/FS); z/=np.sqrt(np.maximum(fq,40)); y=np.fft.irfft(z,n); return y/np.std(y)
def bov(dur,flutter,seed):
    # boost venting through the blow-off valve: a soft-edged rush of air that falls in pitch as pressure drops. Flutter: the air
    # backs up through the compressor instead, in a run of short chuffs that slow down and die away.
    r=np.random.default_rng(seed); N=int(dur*FS); t=np.arange(N)/FS; nz=pink(r,N); out=np.zeros(N); B=20
    for b in range(B): fc=5200*(1500/5200)**(b/(B-1)); w=np.exp(-((t/(dur*.8)*B-b)/1.6)**2); out+=bp(nz,fc*.6,min(fc*1.7,FS/2-300))*w
    out/=np.max(np.abs(out))
    if not flutter: env=(1-np.exp(-t/.006))*np.exp(-t/(dur*.3))
    else:
        env=np.zeros(N); tp=.012; gap=.034; a=1.0
        while tp<dur-.05: env+=a*np.exp(-((t-tp)/.011)**2); tp+=gap; gap*=1.17; a*=.8
        out=bp(out,500,3600)*1.4                                            # chuffs are lower and rounder than a clean vent
    valve=np.sin(2*np.pi*np.cumsum(1900*np.exp(-t/.09)+650)/FS)*np.exp(-t/.05)*.07   # the valve seat: a brief falling note under the air
    return np.tanh((out*env+valve*(0 if flutter else 1))*1.1)
save('turbo_blowoff_1.wav',bov(.45,False,34),'blow-off valve: a soft rush of venting air')
save('turbo_blowoff_2.wav',bov(.6,True,35),'compressor flutter: a run of chuffs that slows and fades')
N=3*FS; f=np.fft.rfftfreq(N,1/FS); r=np.random.default_rng(9)
def band(shape): y=np.fft.irfft(np.fft.rfft(r.normal(0,1,N))*shape,N); return y/np.std(y)
def slow(nb,d): z=np.fft.rfft(r.normal(0,1,N)); z[nb:]=0; z[0]=0; y=np.fft.irfft(z,N); return 1+d*y/np.max(np.abs(y))
sp=band(1/(1+((f-3900)/16)**2)**2)*slow(14,.18)+.22*band(1/(1+((f-7800)/40)**2)**2)*slow(14,.2)+.3*band((f/(f+1800))**2/(1+(f/7000)**4))   # a clean whistle from the compressor wheel over a bed of rushing intake air
save('turbo_spool.wav',sp*slow(8,.12),'turbo spool: compressor whistle and rushing air; pitch follows boost',True)
m=json.load(open(OUT+'audio_manifest.json')); m.setdefault('generated',{}).setdefault('files',[]).extend(man); json.dump(m,open(OUT+'audio_manifest.json','w'),indent=1)
