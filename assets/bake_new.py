# Bake the six "Asset of low-poly cars" models (Qualix_studio, CC BY 4.0) into the game's car file.
# Each source car is one mesh coloured from a palette texture. Here it is split into real parts:
#   - the four wheels are found as separate connected pieces at the corners and become spinning, steerable wheels
#   - every triangle is given a material from its palette colour and position: paint, second paint tone, glass, trim, lights, stripes
import json,numpy as np,struct,base64
from PIL import Image
from soften import soften
P='newcars/asset_of_low-poly_cars_part_2'; g=json.load(open(P+'/scene.gltf')); buf=open(P+'/scene.bin','rb').read()
tex=np.array(Image.open(P+'/textures/Material.001_baseColor.png').convert('RGB')).astype(int); TH,TW=tex.shape[:2]
def acc(i):
    a=g['accessors'][i];bv=g['bufferViews'][a['bufferView']];n={'VEC3':3,'VEC2':2,'SCALAR':1,'VEC4':4}[a['type']];dt={5126:np.float32,5125:np.uint32,5123:np.uint16}[a['componentType']]
    off=bv.get('byteOffset',0)+a.get('byteOffset',0);st=bv.get('byteStride',0);isz=np.dtype(dt).itemsize*n
    if st and st!=isz: return np.frombuffer(buf,np.uint8,st*a['count'],off).reshape(a['count'],st)[:,:isz].copy().view(dt).reshape(a['count'],n)
    return np.frombuffer(buf,dt,a['count']*n,off).reshape(a['count'],n)
def Mx(n):
    if 'matrix' in n: return np.array(n['matrix']).reshape(4,4).T
    m=np.eye(4)
    if 'scale' in n: m=np.diag(list(n['scale'])+[1])
    if 'rotation' in n:
        x,y,z,w=n['rotation']; R=np.array([[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w),0],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w),0],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y),0],[0,0,0,1]]); m=R@m
    if 'translation' in n: T=np.eye(4); T[:3,3]=n['translation']; m=T@m
    return m
src={}
def walk(i,W):
    n=g['nodes'][i]; W=W@Mx(n)
    if 'mesh' in n:
        p=g['meshes'][n['mesh']]['primitives'][0]; v=acc(p['attributes']['POSITION']).astype(float); v=(np.c_[v,np.ones(len(v))]@W.T)[:,:3]
        nr=acc(p['attributes']['NORMAL']).astype(float)@W[:3,:3].T; nr/=np.linalg.norm(nr,axis=1)[:,None]+1e-12
        src[n['name'].split('_Material')[0]]=(v,nr,acc(p['attributes']['TEXCOORD_0']).astype(float),acc(p['indices']).reshape(-1,3).astype(np.int64))
    for c in n.get('children',[]): walk(c,W)
for r in g['scenes'][0]['nodes']: walk(r,np.eye(4))
bin_=bytearray();bvs=[];accs=[];meshes=[];nodes=[];mats=[];matid={};scene=[]
def addacc(arr,ctype,typ,target,mm=False):
    b=arr.tobytes()
    while len(bin_)%4: bin_.append(0)
    bvs.append(dict(buffer=0,byteOffset=len(bin_),byteLength=len(b),target=target));bin_.extend(b)
    a=dict(bufferView=len(bvs)-1,componentType=ctype,count=len(arr),type=typ)
    if mm: a['min']=arr.min(0).tolist();a['max']=arr.max(0).tolist()
    accs.append(a);return len(accs)-1
def mat(name):
    if name not in matid: mats.append(dict(name=name,pbrMetallicRoughness=dict(baseColorFactor=[.5,.5,.5,1]))); matid[name]=len(mats)-1
    return matid[name]
def prim(v,n,tri,name,vl=None):
    used=np.unique(tri);remap=np.zeros(len(v),np.int64);remap[used]=np.arange(len(used))
    att=dict(POSITION=addacc(v[used].astype(np.float32),5126,'VEC3',34962,True),NORMAL=addacc(n[used].astype(np.float32),5126,'VEC3',34962))
    if vl is not None:
        l=vl[used]; m=np.clip(l/max(np.median(l),18.),.42,1.7); att['COLOR_0']=addacc(np.repeat(m[:,None],3,1).astype(np.float32),5126,'VEC3',34962)   # the artist's light-to-dark gradients, kept as shading
    return dict(attributes=att,indices=addacc(remap[tri].reshape(-1).astype(np.uint16 if len(used)<65536 else np.uint32),5123 if len(used)<65536 else 5125,'SCALAR',34963),material=mat(name))
def comps(tri,nv):
    par=np.arange(nv)
    def f(a):
        while par[a]!=a: par[a]=par[par[a]]; a=par[a]
        return a
    for a,b,c in tri: ra=f(a); par[f(b)]=ra; par[f(c)]=ra
    return np.array([f(i) for i in range(nv)])
report={}
def bake(name,srcname):
    v,nr,uv,tri=src[srcname]
    col=tex[np.clip(((uv[tri].mean(1)[:,1])%1*TH).astype(int),0,TH-1),np.clip(((uv[tri].mean(1)[:,0])%1*TW).astype(int),0,TW-1)]      # palette colour of every triangle
    u,inv=np.unique(np.round(v,3),axis=0,return_inverse=True); lab=comps(inv.ravel()[tri],len(u))[inv.ravel()]; tl=lab[tri[:,0]]
    area=np.linalg.norm(np.cross(v[tri[:,1]]-v[tri[:,0]],v[tri[:,2]]-v[tri[:,0]]),axis=1)/2
    info={i:(v[lab==i].min(0),v[lab==i].max(0)) for i in np.unique(lab)}
    tyres=[i for i,(lo,hi) in info.items() if .5<hi[0]-lo[0]<.76 and abs((hi[0]-lo[0])-(hi[1]-lo[1]))<.04 and .15<hi[2]-lo[2]<.4]
    assert len(tyres)==4,(name,len(tyres)); axle={i:(info[i][0]+info[i][1])/2 for i in tyres}; R={i:(info[i][1][0]-info[i][0][0])/2 for i in tyres}
    wheel_of={}
    for i,(lo,hi) in info.items():
        c=(lo+hi)/2; s=hi-lo
        for t in tyres:
            if np.hypot(c[0]-axle[t][0],c[1]-axle[t][1])<.06 and abs(c[2]-axle[t][2])<.3 and s[0]<=R[t]*2+.02 and abs(s[0]-s[1])<.05: wheel_of[i]=t
    isw=np.array([l in wheel_of for l in tl])
    # which end is the nose: headlights are yellow/white-yellow/pale blue, tail lights are red
    cx=np.mean([axle[t][0] for t in tyres]); cz=np.mean([axle[t][2] for t in tyres]); y0=min(info[t][0][1] for t in tyres)
    tc=v[tri].mean(1); r_,g_,b_=col[:,0],col[:,1],col[:,2]
    yel=(r_>200)&(g_>190)&(b_<215)&~isw&~((r_>230)&(g_>230)&(b_>225)); red=(r_>100)&(g_<60)&(b_<40)&~isw
    fx=np.average(tc[yel,0],weights=area[yel]) if yel.any() else cx; rx=np.average(tc[red,0],weights=area[red]) if red.any() else cx
    nose=1 if fx-rx>0 else -1
    # to game axes: +z nose, +x left, y up, origin under the middle of the wheelbase on the ground
    def T(p): q=p-[cx,y0,cz]; return np.c_[-q[:,2]*nose,q[:,1],q[:,0]*nose]
    def Tn(n): return np.c_[-n[:,2]*nose,n[:,1],n[:,0]*nose]
    VL=tex[np.clip((uv[:,1]%1*TH).astype(int),0,TH-1),np.clip((uv[:,0]%1*TW).astype(int),0,TW-1)].sum(1)/3.
    V=T(v); N=Tn(nr); C=V[tri].mean(1); body=~isw; H=V[tri[body]].reshape(-1,3)[:,1].max(); L0=V[:,2].min(); L1=V[:,2].max()
    lum=col.sum(1)/3; sat=col.max(1)-col.min(1)
    # paint = the largest coloured (or grey) area of the bodyshell that is not black
    key=(col//24*24); ks,ki=np.unique(key[body&(lum>30)],axis=0,return_inverse=True); ar=np.bincount(ki.ravel(),area[body&(lum>30)]); main=ks[np.argmax(ar)]+12
    dist=np.abs(col-main).sum(1)
    kind=np.full(len(tri),'trim',object)
    kind[lum<=30]='body'                                                         # black: underside, grilles, arches
    glassy=(lum<=30)&(C[:,1]>H*.5)&(np.abs(N[tri].mean(1)[:,1])<.97)&(C[:,2]>L0+.55)&(C[:,2]<L1-.75)   # black panels in the cabin band are the windows
    kind[glassy]='window'
    kind[(lum>30)&(lum<110)&(sat<30)]='trim'
    kind[(lum>=110)&(sat<30)]='silver'
    kind[(lum>225)&(sat<40)]='stripe'
    kind[dist<40]='paint'; kind[(dist>=40)&(dist<110)&(sat<60)&(abs(lum-main.sum()/3)<60)&(lum>30)]='paint2'
    kind[yel|((b_>180)&(g_>180)&(r_<170))]='front'
    kind[red]='rear'; kind[red&(C[:,2]>0)]='accent'                              # red at the nose is trim, not a brake light
    kind[(r_>200)&(g_<80)&(b_<40)&body&(C[:,2]>-1.2)]='accent'
    tl_=({'FordGT':70}).get(name,30)          # this model draws its rubber in dark grey rather than black
    wk=np.where(lum<=tl_,'tire',np.where((r_>200)&(g_<80),'accent','rim7')).astype(object)
    kids=[]; Vb,Nb,Fb,par,att=soften(V,tri[body],{'l':VL},linear=1,iters=6); kb=kind[body][par]; prims=[prim(Vb,Nb,Fb[kb==k],k,att['l']) for k in sorted(set(kb))]
    meshes.append(dict(name=name+'_body',primitives=prims)); nodes.append(dict(name='body',mesh=len(meshes)-1)); kids.append(len(nodes)-1)
    for t in tyres:
        c=T(np.array([axle[t]]))[0]; k=('F' if c[2]>0 else 'R')+('L' if c[0]>0 else 'R'); sel=np.array([wheel_of.get(l)==t for l in tl])
        meshes.append(dict(name=name+'_'+k,primitives=[prim(V-c,N,tri[sel&(wk==m)],m,VL) for m in sorted(set(wk[sel]))])); nodes.append(dict(name='wheel_'+k,mesh=len(meshes)-1,translation=c.tolist())); kids.append(len(nodes)-1)
    # the car's own tail pipes: small round pieces low at the back. Their positions are stored so flames, smoke and the optional tips sit on them.
    exh=[]
    for i,(lo,hi) in info.items():
        if i in wheel_of: continue
        c=T(np.array([(lo+hi)/2]))[0]; sz=hi-lo
        if max(sz)<.26 and abs(sz[1]-sz[2])<.035 and c[2]<L0+.45 and c[1]<H*.42 and sz[0]>.05: exh.append([round(float(c[0]),3),round(float(c[1]),3),round(float(T(np.array([lo,hi]))[:,2].min()),3)])
    nodes.append(dict(name=name,children=kids,extras=dict(exhaust=exh))); scene.append(len(nodes)-1); print('   exhaust',exh)
    s=V[tri[body]].reshape(-1,3); wb=abs(max(T(np.array([axle[t]]))[0][2] for t in tyres)-min(T(np.array([axle[t]]))[0][2] for t in tyres)); tw=abs(max(T(np.array([axle[t]]))[0][0] for t in tyres)-min(T(np.array([axle[t]]))[0][0] for t in tyres))
    report[name]=dict(L=round(float(s[:,2].max()-s[:,2].min()),2),W=round(float(s[:,0].max()-s[:,0].min()),2),H=round(float(H),2),wheelbase=round(float(wb),2),track=round(float(tw),2),wheelR=round(float(np.mean(list(R.values()))),3),paint=[int(x) for x in main],tris=int(len(tri)))
    print(name.ljust(8),report[name],'| areas',{k:round(float(area[body&(kind==k)].sum()),1) for k in sorted(set(kind[body]))},'nose',nose)
for name,sn in [('Mustang','mustang_2'),('Mazda','Mazda'),('Audi','audi'),('BMW','Bmw'),('FordGT','Ford'),('Lambo','lambo_2')]: bake(name,sn)
while len(bin_)%4: bin_.append(0)
G=dict(asset=dict(version='2.0',generator='bake_new'),scene=0,scenes=[dict(nodes=scene)],nodes=nodes,meshes=meshes,materials=mats,accessors=accs,bufferViews=bvs,buffers=[dict(byteLength=len(bin_))])
js=json.dumps(G).encode();js+=b' '*((4-len(js)%4)%4)
open('game/assets/cars.glb','wb').write(struct.pack('<III',0x46546C67,2,28+len(js)+len(bin_))+struct.pack('<II',len(js),0x4E4F534A)+js+struct.pack('<II',len(bin_),0x004E4942)+bin_)
open('game/assets/cars.glb.js','w').write('window.__ASSETS=window.__ASSETS||{};window.__ASSETS[%r]="%s";'%('cars.glb',base64.b64encode(open('game/assets/cars.glb','rb').read()).decode()))
json.dump(report,open('newcars/report.json','w')); print(len(bin_)//1024,'KB',sorted(matid))
