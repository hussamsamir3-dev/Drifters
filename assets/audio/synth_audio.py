# Procedural engine and tyre loops. Everything is built on a circular buffer / in the frequency domain,
# so every file loops seamlessly from its first to its last sample.
import numpy as np, wave, json, os, base64
FS=32000; OUT='game/assets/audio/'; man=[]
def save(name,x,rpm=None,note=''):
    x=x-np.mean(x); x=x/np.max(np.abs(x))*10**(-2.05/20); pcm=np.round(x*32767).astype('<i2')
    w=wave.open(OUT+name,'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(FS); w.writeframes(pcm.tobytes()); w.close()
    open(OUT+name+'.js','w').write('window.__ASSETS=window.__ASSETS||{};window.__ASSETS[%r]="%s";'%('audio/'+name,base64.b64encode(open(OUT+name,'rb').read()).decode()))
    d=pcm.astype(float); seam=abs(d[0]-d[-1]); step=np.max(np.abs(np.diff(d)))
    man.append(dict(file=name,duration_seconds=round(len(x)/FS,3),rpm=rpm,peak_dbfs=-2.05,rms_dbfs=round(20*np.log10(np.sqrt(np.mean(x**2))),2),note=note))
    print(name.ljust(30),'%.2fs'%(len(x)/FS),'rms %.1f dB'%man[-1]['rms_dbfs'],'seam',int(seam),'max step',int(step),'OK' if seam<=step else 'CHECK')
def engine(rpm,cyc,P,seed):
    Tc=120/rpm; N=int(round(cyc*Tc*FS)); rng=np.random.default_rng(seed); f=np.fft.rfftfreq(N,1/FS); k=(rpm/3000)
    x=np.zeros(N)                                                    # one combustion pulse per cylinder per cycle, with small cycle-to-cycle variation
    for c in range(cyc):
        for j,off in enumerate(P['fire']):
            pos=((c+off)*Tc+rng.normal(0,P['jit'])*Tc)*FS; i0=int(np.floor(pos)); fr=pos-i0; a=P['amp'][j%len(P['amp'])]*(1+rng.normal(0,.07))
            x[i0%N]+=a*(1-fr); x[(i0+1)%N]+=a*fr
    X=np.fft.rfft(x)
    fc=P['fc']*k**.55; H=1/(1+(f/fc)**2)**(P['order']/2)             # pulse sharpness: brighter as revs rise
    F=np.zeros_like(f)+P['floor']
    for f0,bw,g in P['form']: F+=g/(1+((f-f0*(1+.06*(k-1)))/bw)**2)  # exhaust and intake tract resonances (fixed pipes, so they do not follow rpm)
    y=np.fft.irfft(X*H*F*(f/(f+28)),N); y/=np.std(y)
    env=np.abs(np.fft.irfft(X/(1+(f/P['envfc'])**2),N)); env/=env.max()+1e-9
    nz=np.fft.rfft(rng.normal(0,1,N))*(1/(1+((f-P['nf'])/P['nbw'])**2)+.15/(1+((f-700)/500)**2)); noise=np.fft.irfft(nz,N); noise/=np.std(noise)
    out=y+P['noise']*k**.8*noise*(.3+.7*env)                         # intake and mechanical noise, breathing with the firing pulses
    if P.get('whine'): b=round(P['whf']*k**.5*N/FS); out+=P['whine']*min(1,k)*np.sin(2*np.pi*b*np.arange(N)/N)*(.7+.3*np.sin(2*np.pi*3*np.arange(N)/N))
    lf=np.fft.rfft(rng.normal(0,1,N)); lf[8:]=0; wob=np.fft.irfft(lf,N); wob=1+.05*wob/(np.max(np.abs(wob))+1e-9)   # slow level drift so the loop does not sound mechanical
    return np.tanh(out*wob*P['drive'])
ENG={
 '05_FlatPlane_V8':dict(fire=[i/8 for i in range(8)],amp=[1,.9,.97,.88],jit=.004,fc=1150,order=1.15,floor=.05,form=[(175,55,1.0),(410,120,.95),(930,300,.75),(2100,700,.4),(3900,1300,.2)],envfc=260,nf=2600,nbw=1700,noise=.3,drive=.75),
 '06_Race_V12':dict(fire=[i/12 for i in range(12)],amp=[1,.95,.98,.93,.99,.94],jit=.003,fc=1500,order=1.3,floor=.04,form=[(250,80,1.0),(640,200,.9),(1500,480,.65),(3100,1000,.32),(5200,1500,.15)],envfc=380,nf=3000,nbw=1800,noise=.2,drive=.6),
 '07_TwinTurbo_V6':dict(fire=[0,.155,.333,.49,.667,.822],amp=[1,.86,.96,.84,.98,.88],jit=.005,fc=760,order=1.25,floor=.05,form=[(150,55,1.0),(350,110,.85),(800,280,.55),(1750,600,.28),(3300,1100,.12)],envfc=200,nf=2200,nbw=1500,noise=.34,drive=.8,whine=.035,whf=6100),
}
LAY=[(1200,60),(2400,60),(4200,105),(6400,160)]
for name,P in ENG.items():
    for li,(rpm,cyc) in enumerate(LAY): save('%s_%d.wav'%(name,rpm),engine(rpm,cyc,P,hash(name)%1000+li),rpm,'engine layer')
# ---- tyres and surfaces (3 s loops)
N=3*FS; f=np.fft.rfftfreq(N,1/FS); rng=np.random.default_rng(7); t=np.arange(N)/N
def band(shape): z=np.fft.rfft(rng.normal(0,1,N))*shape; y=np.fft.irfft(z,N); return y/np.std(y)
def slow(nb,depth): z=np.fft.rfft(rng.normal(0,1,N)); z[nb:]=0; z[0]=0; y=np.fft.irfft(z,N); return 1+depth*y/np.max(np.abs(y))
sq=sum(g*band(1/(1+((f-f0)/bw)**2)**2)*slow(40,.5) for f0,bw,g in [(820,22,1),(1245,30,.6),(1900,45,.33),(2700,70,.15)]); save('tyre_squeal.wav',np.tanh(sq*.7)*slow(12,.25),None,'tyre sliding on asphalt')
scr=band((f/(f+120))/(1+(f/900)**2))*slow(240,.45)+.25*band(1/(1+((f-2400)/1200)**2)); save('tyre_scrub.wav',scr*slow(10,.15),None,'loaded tyre / rolling on asphalt')
gr=band((f/(f+1500))**2/(1+(f/6500)**4))*np.clip(slow(900,1.6),0,None)**2+.7*band(1/(1+((f-140)/90)**2))*slow(60,.5); save('surface_grass.wav',gr,None,'tyres on grass')
x=np.zeros(N)
for _ in range(1500): x[rng.integers(N)]+=rng.normal(0,1)*rng.random()**2
gv=np.fft.irfft(np.fft.rfft(x)*((f/(f+900))/(1+(f/4200)**2)),N); gv=gv/np.std(gv)+.6*band(1/(1+((f-110)/80)**2))*slow(50,.6); save('surface_gravel.wav',gv,None,'tyres on sand or gravel')
M=FS; k=np.zeros(M)
for i in range(10): k[int(i*M/10)]=1+.25*rng.normal()
fk=np.fft.rfftfreq(M,1/FS); kb=np.fft.irfft(np.fft.rfft(k)*(1/(1+((fk-75)/38)**2)+.35/(1+((fk-240)/120)**2)+.05/(1+(fk/1800)**2)),M); save('kerb_rumble.wav',kb,None,'kerb serrations; play faster with speed')
for old in ['05_Race_V10_Loop.wav','05_Race_V10_Loop.wav.js']:
    if os.path.exists(OUT+old): os.remove(OUT+old)
m=json.load(open(OUT+'audio_manifest.json')); m['files']=[x for x in m['files'] if not x['file'].startswith('05_Race_V10')]
m['generated']={'origin':'Procedural synthesis written for this game (synth_audio.py). Not recordings of real cars.','format':'Mono PCM16 WAV, 32000 Hz, seamless loops','engine_layers_rpm':[r for r,_ in LAY],'files':man}
json.dump(m,open(OUT+'audio_manifest.json','w'),indent=1)
