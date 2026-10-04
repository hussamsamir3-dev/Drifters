import json,numpy as np,struct
bin_=bytearray();bvs=[];accs=[];meshes=[];nodes=[];mats=[];matmap={};scene=[];info={}
def addacc(arr,ctype,typ,target,mm=False):
    b=arr.tobytes()
    while len(bin_)%4: bin_.append(0)
    bvs.append(dict(buffer=0,byteOffset=len(bin_),byteLength=len(b),target=target));bin_.extend(b)
    a=dict(bufferView=len(bvs)-1,componentType=ctype,count=len(arr),type=typ)
    if mm: a['min']=arr.min(0).tolist();a['max']=arr.max(0).tolist()
    accs.append(a);return len(accs)-1
def run(pack,rename,take):
    g=json.load(open(pack+'/scene.gltf'));buf=open(pack+'/scene.bin','rb').read()
    def acc(i):
        a=g['accessors'][i];bv=g['bufferViews'][a['bufferView']]
        n={'VEC3':3,'VEC2':2,'SCALAR':1,'VEC4':4}[a['type']];dt={5126:np.float32,5125:np.uint32,5123:np.uint16}[a['componentType']]
        off=bv.get('byteOffset',0)+a.get('byteOffset',0);st=bv.get('byteStride',0);isz=np.dtype(dt).itemsize*n
        if st and st!=isz:
            raw=np.frombuffer(buf,np.uint8,st*a['count'],off).reshape(a['count'],st)[:,:isz].copy();return raw.view(dt).reshape(a['count'],n)
        return np.frombuffer(buf,dt,a['count']*n,off).reshape(a['count'],n)
    M=lambda n: np.array(n['matrix']).reshape(4,4).T if 'matrix' in n else np.eye(4)
    def walk(i,m,out,par=''):
        n=g['nodes'][i];m=m@M(n)
        if 'mesh' in n:
            for p in g['meshes'][n['mesh']]['primitives']:
                v=acc(p['attributes']['POSITION']);v=(np.c_[v,np.ones(len(v))]@m.T)[:,:3]
                nr=acc(p['attributes']['NORMAL'])@m[:3,:3].T;nr/=np.linalg.norm(nr,axis=1)[:,None]+1e-12
                out.append((par,p['material'],v,nr,acc(p['indices']).reshape(-1,3).astype(np.int64)))
        for c in n.get('children',[]): walk(c,m,out,n['name'] if 'mesh' not in n else par)
    def mat(name,src):
        key=(pack,name,src)
        if key not in matmap:
            m=dict(g['materials'][src]);m['name']=name;mats.append(m);matmap[key]=len(mats)-1
        return matmap[key]
    def prim(v,n,idx,m):
        used=np.unique(idx);remap=np.zeros(len(v),np.int64);remap[used]=np.arange(len(used))
        return dict(attributes=dict(POSITION=addacc(v[used].astype(np.float32),5126,'VEC3',34962,True),NORMAL=addacc(n[used].astype(np.float32),5126,'VEC3',34962)),indices=addacc(remap[idx].reshape(-1).astype(np.uint16),5123,'SCALAR',34963),material=m)
    root=np.eye(4)
    for i in [0,1,2]: root=root@M(g['nodes'][i])
    kinds=set()
    for ci in g['nodes'][2]['children']:
        raw=g['nodes'][ci]['name'].replace(' ','')
        if raw not in take: continue
        name=rename.get(raw,raw);out=[];walk(ci,root,out)
        tv=np.vstack([o[2] for o in out if o[0].startswith('Tires')])
        cx=(tv[:,0].min()+tv[:,0].max())/2;cz=(tv[:,2].min()+tv[:,2].max())/2;y0=tv[:,1].min()
        fz=np.vstack([o[2] for o in out if o[0].split('.')[0]=='Front'])[:,2].mean()
        F=np.array([-1,1,-1.]) if fz<cz else np.array([1,1,1.])      # make +z the nose
        parts=[];wheels={k:[] for k in('FL','FR','RL','RR')}
        for par,m,v,n,idx in out:
            v=(v-[cx,y0,cz])*F;n=n*F;kind=par.split('.')[0]
            if kind=='Paint' and sum(g['materials'][m].get('pbrMetallicRoughness',{}).get('baseColorFactor',[1,1,1,1])[:3])/3<.06: kind='Window'      # a mislabelled part: near-black 'paint' is the glass
            kinds.add(kind)
            if kind in('Tires','Rims'):
                c=v[idx].mean(1)
                for k,(sz,sx) in dict(FL=(1,1),FR=(1,-1),RL=(-1,1),RR=(-1,-1)).items():
                    sel=(np.sign(c[:,2])==sz)&(np.sign(c[:,0])==sx)
                    if sel.any(): wheels[k].append((kind,m,v,n,idx[sel]))
            else: parts.append((kind,m,v,n,idx))
        allv=np.vstack([p[2] for p in parts]);kids=[]
        tri_area=lambda v,idx: float(np.linalg.norm(np.cross(v[idx[:,1]]-v[idx[:,0]],v[idx[:,2]]-v[idx[:,0]]),axis=1).sum()/2) if len(idx) else 0.
        if name=='Urus' or sum(tri_area(p[2],p[4]) for p in parts if p[0]=='Window')<.8:          # a model with no glass at all: everything in the cabin band that is not roof becomes window
            Hh=allv[:,1].max(); Lz=allv[:,2].max()-allv[:,2].min(); new=[]
            for kind,m,v,n,idx in parts:
                if kind!='Paint': new.append((kind,m,v,n,idx)); continue
                c=v[idx].mean(1); tn=n[idx].mean(1); sel=(c[:,1]>.6*Hh)&(c[:,1]<.95*Hh)&(np.abs(tn[:,1])<.8)&(c[:,2]>-.36*Lz)&(c[:,2]<.2*Lz)
                new.append((kind,m,v,n,idx[~sel]));
                if sel.any(): new.append(('Window',m,v,n,idx[sel]))
            parts=new; print('   glass added by shape to',name)
        def rimname(m):
            c=g['materials'][m].get('pbrMetallicRoughness',{}).get('baseColorFactor',[.8,.8,.8,1]);return 'rim7' if sum(c[:3])/3>.25 else 'rim6'
        meshes.append(dict(name=name+'_body',primitives=[prim(v,n,idx,mat('paint' if k=='Paint' else k.lower(),m)) for k,m,v,n,idx in parts]))
        nodes.append(dict(name='body',mesh=len(meshes)-1));kids.append(len(nodes)-1)
        for k,lst in wheels.items():
            tvv=np.vstack([v[np.unique(idx)] for kind,m,v,n,idx in lst if kind=='Tires']);c=(tvv.min(0)+tvv.max(0))/2
            meshes.append(dict(name=name+'_'+k,primitives=[prim(v-c,n,idx,mat('tire' if kind=='Tires' else rimname(m),m)) for kind,m,v,n,idx in lst]))
            nodes.append(dict(name='wheel_'+k,mesh=len(meshes)-1,translation=c.tolist()));kids.append(len(nodes)-1)
        nodes.append(dict(name=name,children=kids));scene.append(len(nodes)-1)
        s=allv.max(0)-allv.min(0);print(name.ljust(10),'L %.2f W %.2f H %.2f'%(s[2],s[0],s[1]),'kinds',sorted(set(p[0] for p in parts)))
run('pack',{},['Zenvo','Ferrari','Artura','Mercedes','LandRover','Ford','Sterrato'])
run('pack2',{'Mercedes':'AMG'},['M8','Urus','P1GTR','GTR','Mustang','Mercedes','Porsche'])
while len(bin_)%4: bin_.append(0)
G=dict(asset=dict(version='2.0',generator='bake'),scene=0,scenes=[dict(nodes=scene)],nodes=nodes,meshes=meshes,materials=mats,accessors=accs,bufferViews=bvs,buffers=[dict(byteLength=len(bin_))])
js=json.dumps(G).encode();js+=b' '*((4-len(js)%4)%4)
open('game/assets/cars_old.glb','wb').write(struct.pack('<III',0x46546C67,2,28+len(js)+len(bin_))+struct.pack('<II',len(js),0x4E4F534A)+js+struct.pack('<II',len(bin_),0x004E4942)+bin_)
import base64
open('game/assets/cars_old.glb.js','w').write('window.__ASSETS=window.__ASSETS||{};window.__ASSETS[%r]="%s";'%('cars_old.glb',base64.b64encode(open('game/assets/cars_old.glb','rb').read()).decode()))
print(len(bin_),sorted(set(m['name'] for m in mats)))
