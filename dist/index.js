"use strict";var I=Object.defineProperty;var Eo=Object.getOwnPropertyDescriptor;var jo=Object.getOwnPropertyNames;var Fo=Object.prototype.hasOwnProperty;var zo=(r,t)=>{for(var o in t)I(r,o,{get:t[o],enumerable:!0})},So=(r,t,o,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of jo(t))!Fo.call(r,a)&&a!==o&&I(r,a,{get:()=>t[a],enumerable:!(e=Eo(t,a))||e.enumerable});return r};var Uo=r=>So(I({},"__esModule",{value:!0}),r);var le={};zo(le,{NDArray:()=>y,NDIter:()=>p,NDMultiIter:()=>h,abs:()=>j,acos:()=>z,acosh:()=>U,add:()=>C,angle:()=>V,array:()=>i,asin:()=>X,asinh:()=>B,atan:()=>P,atanh:()=>H,augment:()=>w,binOp:()=>Q,cbrt:()=>rr,ceil:()=>or,check:()=>ar,combine:()=>nr,copy:()=>mr,cos:()=>fr,cosh:()=>cr,cross:()=>hr,det:()=>dr,diagonal:()=>Dr,dot:()=>br,eig:()=>gr,equals:()=>kr,equidimensional:()=>Ir,equilateral:()=>vr,exp:()=>qr,expm1:()=>Er,eye:()=>x,fill:()=>Fr,floor:()=>Sr,forEach:()=>$r,fround:()=>Or,gauss:()=>Rr,get:()=>Yr,inv:()=>Gr,log:()=>Wr,log10:()=>Jr,log1p:()=>Qr,log2:()=>rt,lu:()=>ot,lu_factor:()=>at,magic:()=>Mo,map:()=>nt,matrix:()=>L,max:()=>mt,mean:()=>ft,min:()=>ct,multiply:()=>ht,norm:()=>dt,normalize:()=>Dt,ones:()=>vo,pow:()=>bt,prod:()=>gt,product:()=>kt,project:()=>It,push:()=>vt,random:()=>To,range:()=>qo,rank:()=>qt,reciprocal:()=>Et,reduce:()=>Ft,reshape:()=>St,round:()=>$t,row_add:()=>Ot,scale:()=>Rt,set:()=>Yt,sign:()=>Gt,sin:()=>Wt,sinh:()=>Jt,slice:()=>Qt,solve:()=>ro,sqrt:()=>oo,square:()=>ao,subtract:()=>no,sum:()=>mo,swap:()=>fo,tan:()=>co,tanh:()=>ho,toArray:()=>Ao,toString:()=>bo,trace:()=>xo,transpose:()=>wo,trunc:()=>Lo,zeros:()=>l});module.exports=Uo(le);var D=32,M=r=>r.reduce((t,o)=>t.concat(Array.isArray(o)?M(o):o),[]),v=r=>ArrayBuffer.isView(r)&&!(r instanceof DataView),g=r=>r.reduce((t,o)=>t*o,1),T=r=>Array.isArray(r)||v(r)?[r.length].concat(T(r[0])):[],b=r=>[...r.slice(1).map((t,o)=>r.slice(o+1).reduce((e,a)=>e*a,1)),1],E=r=>{let{constructor:{name:t="Float32Array"}={}}=r||{};switch(t){case"Int8Array":return"int8";case"Uint8Array":return"uint8";case"Int16Array":return"int16";case"Uint16Array":return"uint16";case"Int32Array":return"int32";case"Uint32Array":return"uint32";case"Uint8ClampedArray":return"uint8c";case"Float32Array":return"float32";case"Float64Array":return"float64";default:return"float64"}},A=r=>{switch(r){case"int8":return Int8Array;case"uint8":return Uint8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"uint8c":return Uint8ClampedArray;case"float32":return Float32Array;case"float64":return Float64Array;default:return Float64Array}};var i=(...r)=>new y(...r);var p=class{x;shape;shapem1;strides;backstrides;length;lengthm1;nd;ndm1;index;coords;pos;factors;constructor(t){this.x=i(t);let{shape:o,strides:e,length:a}=this.x;this.length=a,this.lengthm1=a-1,this.nd=o.length,this.ndm1=this.nd-1,this.shape=Array(D).fill(0),this.strides=Array(D).fill(0),this.shapem1=Array(D).fill(0),this.coords=Array(D).fill(0),this.backstrides=Array(D).fill(0),this.factors=Array(D).fill(0),this.nd!==0&&(this.factors[this.nd-1]=1);let n;for(n=0;n<this.nd;n+=1)this.shape[n]=o[n],this.shapem1[n]=o[n]-1,this.strides[n]=e[n],this.backstrides[n]=e[n]*this.shapem1[n],this.coords[n]=0,n>0&&(this.factors[this.ndm1-n]=this.factors[this.nd-n]*o[this.nd-n]);this.index=0,this.pos=0}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;let{ndm1:o,shapem1:e,strides:a,backstrides:n}=this,s;for(s=o;s>=0;s-=1){if(this.coords[s]<e[s]){this.coords[s]+=1,this.pos+=a[s];break}this.coords[s]=0,this.pos-=n[s]}return this.index+=1,t}[Symbol.iterator](){return this}};var h=class{iters;shape;nd;length;lengthm1;numiter;index;pos;constructor(...t){this.iters=t.map(f=>new p(f)),this.numiter=t.length;let o,e;for(o=0,e=0;o<this.numiter;o+=1)e=Math.max(e,this.iters[o].x.shape.length);this.nd=e,this.shape=Array(e).fill(0);let a,n,s,m;for(o=0;o<e;o+=1)for(this.shape[o]=1,n=0;n<this.numiter;n+=1)if(a=this.iters[n],s=o+a.x.shape.length-e,s>=0){if(m=a.x.shape[s],m==1)continue;if(this.shape[o]==1)this.shape[o]=m;else if(this.shape[o]!==m)throw new Error("shape mismatch")}for(m=this.shape.reduce((f,u)=>f*u,1),this.length=m,this.lengthm1=m-1,o=0;o<this.numiter;o+=1)for(a=this.iters[o],a.nd=this.nd,a.ndm1=this.nd-1,a.length=m,a.lengthm1=m-1,e=a.x.shape.length,e!==0&&(a.factors[this.nd-1]=1),n=0;n<this.nd;n+=1)a.shape[n]=this.shape[n],a.shapem1[n]=this.shape[n]-1,s=n+e-this.nd,s<0||a.x.shape[s]!==this.shape[n]?a.strides[n]=0:a.strides[n]=a.x.strides[s],a.backstrides[n]=a.strides[n]*a.shapem1[n],n>0&&(a.factors[this.nd-n-1]=a.factors[this.nd-n]*this.shape[this.nd-n]);this.index=0,this.pos=Array(this.numiter).fill(0)}done(){return this.index>this.lengthm1}current(){let t=this.done();return{value:t?void 0:this.pos,done:t}}next(){let t=this.current();if(t.done)return t;this.index+=1;let{numiter:o}=this,e,a;for(a=0;a<o;a+=1)e=this.iters[a],this.pos[a]=e.pos,e.next();return t}[Symbol.iterator](){return this}};var{abs:$o}=Math,j=r=>i(r).abs();function F(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=$o(r[o]);return this}var{acos:Co}=Math,z=r=>i(r).acos();function S(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Co(r[o]);return this}var{acosh:Oo}=Math,U=r=>i(r).acosh();function $(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Oo(r[o]);return this}var C=(r,t,o=1)=>i(r).add(i(t),o);function O(r,t=1){let{data:o}=this,{data:e}=i(r),a=new h(this,r);for(let[n,s]of a)o[n]+=t*e[s];return this}var{acos:Vo}=Math,V=(r,t)=>i(r).angle(i(t));function R(r){return Vo(this.dot(i(r))/this.norm()/i(r).norm())}var{asin:Ro}=Math,X=r=>i(r).asin();function Y(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ro(r[o]);return this}var{asinh:Xo}=Math,B=r=>i(r).asinh();function G(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Xo(r[o]);return this}var{atan:Yo}=Math,P=r=>i(r).atan();function W(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Yo(r[o]);return this}var{atanh:Bo}=Math,H=r=>i(r).atanh();function J(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Bo(r[o]);return this}var l=(...r)=>new y(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(0);var w=(r,t)=>i(r).augment(i(t));function K(r){let[t,o]=this.shape,[e,a]=i(r).shape,{data:n}=this,{data:s}=i(r);if(e===0||a===0)return this;if(t!==e)throw new Error("rows do not match");let m=l(t,o+a),{data:f}=m,u,c;for(u=0;u<t;u+=1)for(c=0;c<o;c+=1)f[u*(o+a)+c]=n[u*o+c];for(u=0;u<e;u+=1)for(c=0;c<a;c+=1)f[u*(o+a)+(c+o)]=s[u*a+c];return m}var Q=(r,t,o)=>i(r).binOp(i(t),o);function Z(r,t){let{data:o}=this,{data:e}=i(r),a=new h(this,r);for(let[n,s]of a)o[n]=t(o[n],e[s],n);return this}var{cbrt:Go}=Math,rr=r=>i(r).cbrt();function tr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Go(r[o]);return this}var{ceil:Po}=Math,or=r=>i(r).ceil();function er(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Po(r[o]);return this}var ar=(r,...t)=>{i(r).check(...t)};function ir(...r){let{shape:t,length:o}=this;if(r.length===1){let[e]=r;if(e<0||e>o-1||!Number.isFinite(e))throw new Error("index out of bounds")}else if(!t.every((e,a)=>e>r[a]&&Number.isFinite(r[a])&&r[a]>=0))throw new Error("index out of bounds")}var nr=(r,t)=>i(r).combine(i(t));function sr(r){if(this.shape.length!==1&&r.shape.length!==1)throw new Error("combine operation not permitted for multidimensional arrays");let{length:t,data:o}=this,{length:e,data:a}=r;if(e===0)return this;if(t===0)return this.data=new(A(r.dtype))(a),this.length=e,this.dtype=r.dtype,this;let n=t+e,s=new(A(this.dtype))(n);return s.set(o),s.set(a,t),this.data=s,this.length=n,this.shape=[n],this}var mr=r=>i(r).copy();function pr(){let r=l(...this.shape),{data:t}=this,{data:o}=r,e=new h(this,r);for(let[a,n]of e)o[n]=t[a];return r}var{cos:Wo}=Math,fr=r=>i(r).cos();function ur(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Wo(r[o]);return this}var{cosh:Ho}=Math,cr=r=>i(r).cosh();function yr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ho(r[o]);return this}var hr=(r,t)=>i(r).cross(i(t));function lr(r){let{length:t}=this,{length:o}=r;if(t!==3||o!==3)throw new Error("vectors must have three components");let e=this.y*r.z-this.z*r.y,a=this.z*r.x-this.x*r.z,n=this.x*r.y-this.y*r.x;return this.x=e,this.y=a,this.z=n,this}var dr=r=>i(r).det();function Ar(){this.square();let[r]=this.shape,[t,o]=this.copy().lu_factor(),{data:e}=t,a=1,n=1,s;for(s=0;s<r;s+=1)a*=e[s*r+s],s!==o[s]-1&&(n*=-1);return n*a}var Dr=r=>i(r).diagonal();function Nr(){this.square();let{length:r}=this,[t,o]=this.shape,e=Math.min(t,o);return this.reshape(r).slice(0,r,e+1)}var br=(r,t)=>i(r).dot(i(t));function xr(r){let{data:t}=this,{data:o}=r,e=0,a=new h(this,r);for(let[n,s]of a)e+=t[n]*o[s];return e}var x=r=>{let t=new y(new Float64Array(r*r),{shape:[r,r]}),{data:o}=t,e;for(e=0;e<r;e+=1)o[e*r+e]=1;return t};var k=(r,t,o,e,a,n,s)=>{let[m]=r.shape,{data:f}=r,u=f[e*m+a],c=1/(t+o);f[e*m+a]=u-o*(f[n*m+s]+c*u),f[n*m+s]+=o*(u-c*f[n*m+s])},gr=r=>i(r).eig();function wr(){this.square();let[r]=this.shape,{data:t}=this,o=x(r),e=0,a=0,n=0,s=0,m=0;do{for(a=0;a<r;a+=1)for(n=a+1;n<r;n+=1)Math.abs(t[a*r+n])>=e&&(e=Math.abs(t[a*r+n]),s=a,m=n);let f;if(Math.abs(t[s*r+m])<Math.abs(t[m*r+m])*1e-36)f=t[s*r+m]/t[m*r+m];else{let N=t[m*r+m]/2*t[s*r+m];f=1/(Math.abs(N)+Math.sqrt(N*N+1))}let u=1/Math.sqrt(f*f+1),c=f*u,d=t[s*r+m];for(t[s*r+m]=0,t[s*r+s]-=f*d,t[m*r+m]+=f*d,a=0;a<s;a+=1)k(this,u,c,a,s,a,m);for(a=s+1;a<m;a+=1)k(this,u,c,s,a,a,m);for(a=m+1;a<r;a+=1)k(this,u,c,s,a,m,a);for(a=0;a<r;a+=1)k(o,u,c,a,s,a,m)}while(e>=1e-9);return[this.diagonal(),o]}var kr=(r,t,o=1e-6)=>i(r).equals(i(t),o);function Lr(r,t=1e-6){let{data:o}=this,{data:e}=r,a=new h(this,r);for(let[n,s]of a)if(Math.abs(o[n]-e[s])>t)return!1;return!0}var Ir=(r,t)=>{i(r).equidimensional(i(t))};function Mr(r){let{shape:t}=this,{shape:o}=r;if(!t.every((e,a)=>e===o[a]))throw new Error(`shapes ${t} and ${o} do not match`)}var vr=(r,t)=>{i(r).equilateral(i(t))};function Tr(r){let{length:t}=this,{length:o}=r;if(t!==o)throw new Error(`lengths ${t} and ${o} do not match`)}var{exp:Jo}=Math,qr=r=>i(r).exp();function _r(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Jo(r[o]);return this}var{expm1:Ko}=Math,Er=r=>i(r).expm1();function jr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Ko(r[o]);return this}var Fr=(r,t=0)=>i(r).fill(t);function zr(r=0){let{data:t}=this,o=new p(this);for(let e of o)t[e]=r instanceof Function?r(e):r;return this}var{floor:Qo}=Math,Sr=r=>i(r).floor();function Ur(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Qo(r[o]);return this}var $r=(r,t)=>{r.forEach(t)};function Cr(r){let{data:t}=this,o=new p(this);for(let e of o)r.call(this,t[e],e,t)}var{fround:Zo}=Math,Or=r=>i(r).fround();function Vr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=Zo(r[o]);return this}var Rr=r=>i(r).gauss();function Xr(){let{shape:[r,t],data:o}=this,e=0,a,n,s,m,f;for(s=0;s<r;s+=1){if(t<=e)return this;for(m=s;o[m*t+e]===0;)if(m+=1,r===m&&(m=s,e+=1,t===e))return this;if(s!==m&&this.swap(s,m),n=o[s*t+e],n!==0)for(f=0;f<t;f+=1)o[s*t+f]/=n;for(m=0;m<r;m+=1)if(a=o[m*t+e],m!==s)for(f=0;f<t;f+=1)o[m*t+f]-=o[s*t+f]*a;e+=1}for(s=0;s<r;s+=1){for(n=0,m=0;m<t;m+=1)n===0&&(n=o[s*t+m]);if(n!==0)for(f=0;f<t;f+=1)o[s*t+f]/=n}return this}var Yr=(r,...t)=>i(r).get(...t);function Br(...r){this.check(...r);let{data:t,shape:o}=this,{length:e}=o,a=r[e-1],n,s;for(n=0;n<e-1;n+=1){let m=1;for(s=n+1;s<e;s+=1)m*=o[s];a+=r[n]*m}return t[a]}var Gr=r=>i(r).inv();function Pr(){this.square();let{shape:[r]}=this,t=x(r),o=w(this,t).gauss(),e=l(r,r),a=l(r,r),{data:n}=o,{data:s}=e,{data:m}=a,f=new p(o),[u,c]=f.coords;for(let d of f)c<r?s[u*r+c]=n[d]:m[u*r+(c-r)]=n[d],[u,c]=f.coords;if(!e.equals(t))throw new Error("matrix is not invertible");return a}var{log:re}=Math,Wr=r=>i(r).log();function Hr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=re(r[o]);return this}var{log10:te}=Math,Jr=r=>i(r).log10();function Kr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=te(r[o]);return this}var{log1p:oe}=Math,Qr=r=>i(r).log1p();function Zr(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=oe(r[o]);return this}var{log2:ee}=Math,rt=r=>i(r).log2();function tt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ee(r[o]);return this}var ot=r=>i(r).lu();function et(){let[r,t]=this.copy().lu_factor(),o=r.copy(),e=r.copy(),{data:a}=o,{data:n}=e,s=new p(r),[m,f]=s.coords;for(let u of s)f<m?n[u]=0:a[u]=m===f?1:0,[m,f]=s.coords;return[o,e,t]}var at=r=>i(r).lu_factor();function it(){let{data:r,shape:[t]}=this,o=new Int32Array(t),e,a,n,s,m,f,u;for(u=0;u<t;u+=1){for(s=u,e=Math.abs(r[u*t+u]),f=u+1;f<t;f+=1)a=Math.abs(r[f*t+u]),e<a&&(e=a,s=f);for(o[u]=s+1,s!==u&&this.swap(u,s),n=r[u*t+u],m=u+1;m<t;m+=1)r[m*t+u]/=n;for(m=u+1;m<t;m+=1){for(f=u+1;f<t-1;f+=2)r[m*t+f]-=r[m*t+u]*r[u*t+f],r[m*t+f+1]-=r[m*t+u]*r[u*t+f+1];f===t-1&&(r[m*t+f]-=r[m*t+u]*r[u*t+f])}}return[this,o]}var nt=(r,t)=>i(r).map(t);function st(r){let{data:t}=this,o=new p(this),e=r.bind(this),a=this.copy(),{data:n}=a;for(let s of o)n[s]=e(t[s],s,t);return a}var mt=r=>i(r).max();function pt(){let{data:r}=this,t=Number.NEGATIVE_INFINITY,o=new p(this);for(let e of o){let a=r[e];t<a&&(t=a)}return t}var ft=r=>i(r).mean();function ut(){let{data:r,length:t}=this,o=new p(this),e=0;for(let a of o)e+=r[a];return e/t}var ct=r=>i(r).min();function yt(){let{data:r}=this,t=new p(this),o=Number.POSITIVE_INFINITY;for(let e of t){let a=r[e];o>a&&(o=a)}return o}var L=(r,t)=>new y(new Float64Array(r*t),{shape:[r,t]});var ht=(r,t)=>i(r).multiply(i(t));function lt(r){let{shape:[t,o],data:e}=this.copy(),{shape:[a,n],data:s}=r.copy();if(o!==a)throw new Error("sizes do not match");let m=L(t,n),{data:f}=m,u=new p(m),c,[d,N]=u.coords;for(let _o of u){let _=0;for(c=0;c<o;c+=1)_+=e[d*o+c]*s[c*n+N];f[_o]=_,[d,N]=u.coords}return m}var{sqrt:ae}=Math,dt=r=>i(r).norm();function At(){return ae(this.dot(this))}var Dt=r=>i(r).normalize();function Nt(){return this.scale(1/this.norm())}var{pow:ie}=Math,bt=(r,t)=>i(r).pow(t);function xt(r){let{data:t}=this,o=new p(this);for(let e of o)t[e]=ie(t[e],r);return this}var gt=r=>i(r).prod();function wt(){let{data:r}=this,t=new p(this),o=1;for(let e of t)o*=r[e];return o}var kt=(r,t)=>i(r).product(i(t));function Lt(r){let{data:t}=this,{data:o}=r,e=new h(this,r);for(let[a,n]of e)t[a]*=o[n];return this}var It=(r,t)=>i(r).project(i(t));function Mt(r){return r.scale(this.dot(r)/r.dot(r))}var vt=(r,t)=>i(r).push(t);function Tt(r){if(this.shape.length!==1)throw new Error("push operation not permitted for multidimensional arrays");let{data:t,length:o}=this,e=o+1,a=new(A(this.dtype))(e);return a.set(t),a[o]=r,this.data=a,this.length=e,this.shape=[e],this}var qt=(r,t=1e-6)=>i(r).rank(t);function _t(r=1e-6){let{data:t}=this.copy().gauss(),o=new p(this),e=0,[a,n]=o.coords;for(let s of o)e<=a&&n>=a&&Math.abs(t[s])>r&&(e+=1),[a,n]=o.coords;return e}var Et=r=>i(r).reciprocal();function jt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=1/r[o];return this}var Ft=(r,t,o)=>i(r).reduce(t,o);function zt(r,t){let{data:o,length:e}=this;if(e===0&&typeof t>"u")throw new Error("Reduce of empty array with no initial value.");let a=new p(this),n=r.bind(this),s;typeof t>"u"?(s=o[0],a.next()):s=t;for(let m of a)s=n(s,o[m],m,o);return s}var St=(r,...t)=>i(r).reshape(...t);function Ut(...r){let{length:t}=this;if(r.reduce((o,e)=>o*e,1)!==t)throw new Error(`shape ${r} does not match length ${t}`);return this.shape=r,this.strides=b(r),this}var{round:ne}=Math,$t=r=>i(r).round();function Ct(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ne(r[o]);return this}var Ot=(r,t,o,e=1)=>i(r).row_add(t,o,e);function Vt(r,t,o=1){this.check(r,0),this.check(t,0);let[,e]=this.shape,{data:a}=this,n;for(n=0;n<e;n+=1)a[r*e+n]+=a[t*e+n]*o;return this}var Rt=(r,t)=>i(r).scale(t);function Xt(r){let{data:t}=this,o=new p(this);for(let e of o)t[e]*=r;return this}var Yt=(r,...t)=>{r.set(...t)};function Bt(...r){let t=r.slice(0,-1),o=r[r.length-1];this.check(...t);let{shape:e}=this,a=t[t.length-1],n;for(n=0;n<t.length-1;n+=1)a+=t[n]*e[n+1];this.data[a]=o}var{sign:se}=Math,Gt=r=>i(r).sign();function Pt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=se(r[o]);return this}var{sin:me}=Math,Wt=r=>i(r).sin();function Ht(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=me(r[o]);return this}var{sinh:pe}=Math,Jt=r=>i(r).sinh();function Kt(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=pe(r[o]);return this}var Qt=(r,t,o,e)=>i(r).slice(t,o,e);function Zt(r=0,t=this.shape[0],o=1){let{data:e,shape:a}=this,n=a.length;if(r<0||t<0)return this.slice(r<0?a[a.length-1]+r:r,t<0?a[a.length-1]+t:t);if(r>t)return this.slice(t,r,o);if(o<=0)throw new Error("step argument has to be a positive integer");let s=[Math.ceil((t-r)/Math.abs(o)),...a.slice(1)],m=g(s),f=b(s),u=n>1?e.subarray(r*s[s.length-1],t*s[s.length-1]):e.subarray(r,t);return f[0]*=o,new y(u,{shape:s,length:m,strides:f})}var ro=(r,t)=>i(r).solve(i(t));function to(r){let{shape:[t,o],data:e}=r,[a,n]=this.lu_factor(),{data:s}=a,m,f,u;for(m=0;m<n.length;m+=1)m!==n[m]-1&&r.swap(m,n[m]-1);for(u=0;u<o;u+=1){for(m=0;m<t;m+=1)for(f=0;f<m;f+=1)e[m*o+u]-=s[m*t+f]*e[f*o+u];for(m=t-1;m>=0;m-=1){for(f=m+1;f<t;f+=1)e[m*o+u]-=s[m*t+f]*e[f*o+u];e[m*o+u]/=s[m*t+m]}}return r}var{sqrt:fe}=Math,oo=r=>i(r).sqrt();function eo(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=fe(r[o]);return this}var ao=r=>{i(r).square()};function io(){let{length:r}=this.shape,[t,o]=this.shape;if(r!==2||t!==o)throw new Error("matrix is not square")}var no=(r,t)=>i(r).subtract(i(t));function so(r){return this.add(r,-1)}var mo=r=>i(r).sum();function po(){let{data:r}=this,t=new p(this),o=0;for(let e of t)o+=r[e];return o}var fo=(r,t,o)=>i(r).swap(t,o);function uo(r,t){this.check(r,0),this.check(t,0);let{data:o}=this,[,e]=this.shape,a=o.slice(r*e,(r+1)*e);return o.copyWithin(r*e,t*e,(t+1)*e),o.set(a,t*e),this}var{tan:ue}=Math,co=r=>i(r).tan();function yo(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ue(r[o]);return this}var{tanh:ce}=Math,ho=r=>i(r).tanh();function lo(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ce(r[o]);return this}var Ao=r=>i(r).toArray();function Do(r=0,t=0){let{data:o,shape:e,strides:a}=this,{length:n}=e;if(t>=n)return o[r];let s=e[t],m=a[t],f=[];for(let u=0;u<s;u++){let c=this.toArray(r,t+1);if(c===null)return null;f[u]=c,r+=m}return f}var No=require("util");var bo=r=>i(r).toString();function q(){return`array(${(0,No.inspect)(this.toArray(),{depth:10,breakLength:40})}, dtype=${this.dtype})`}var xo=r=>i(r).trace();function go(){let[r,t]=this.shape,{data:o}=this,e=Math.min(r,t),a=0,n;for(n=0;n<e;n+=1)a+=o[n*t+n];return a}var wo=r=>i(r).transpose();function ko(){if(this.shape.length<2)return this;let r=this.shape[0];return this.shape[0]=this.shape[1],this.shape[1]=r,r=this.strides[0],this.strides[0]=this.strides[1],this.strides[1]=r,this}var{trunc:ye}=Math,Lo=r=>i(r).trunc();function Io(){let{data:r}=this,t=new p(this);for(let o of t)r[o]=ye(r[o]);return this}var Mo=r=>{if(r<0)throw new Error("invalid n");let t=new Float64Array(r*r),o=new y(t,{shape:[r,r]}),e=new p(o),[a,n]=e.coords;for(let s of e){let m=r-a-1,f=r-n-1;t[s]=(n+m*2+1)%r*r+(f+m*2+1)%r+1,[a,n]=e.coords}return o};var vo=(...r)=>new y(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).fill(1);var To=(...r)=>new y(new Float64Array(r.reduce((t,o)=>t*o,1)),{shape:r}).map(()=>Math.random());var qo=(...r)=>{let t=Float64Array,o=!1,e,a,n;switch(r.length){case 2:n=r.pop(),a=1,e=r.pop();break;case 3:n=r.pop(),a=r.pop(),e=r.pop();break;default:throw new Error("invalid range")}if(n-e<0){let u=n;n=e,e=u,o=!0}if(a>n-e)throw new Error("invalid range");let s=new t(Math.ceil((n-e)/a)),m=e,f=0;if(o)for(;m<n;m+=a,f+=1)s[f]=n-m+e;else for(;m<n;m+=a,f+=1)s[f]=m;return new y(s)};var he=Symbol.for("nodejs.util.inspect.custom"),y=class{data=new Float64Array(0);dtype="float64";length=0;shape=[0];strides=[0];[he]=q;abs=F;acos=S;acosh=$;add=O;angle=R;asin=Y;asinh=G;atan=W;atanh=J;augment=K;binOp=Z;cbrt=tr;ceil=er;check=ir;combine=sr;copy=pr;cos=ur;cosh=yr;cross=lr;det=Ar;diagonal=Nr;dot=xr;eig=wr;equals=Lr;equidimensional=Mr;equilateral=Tr;exp=_r;expm1=jr;fill=zr;floor=Ur;forEach=Cr;fround=Vr;gauss=Xr;get=Br;inv=Pr;log=Hr;log10=Kr;log1p=Zr;log2=tt;lu=et;lu_factor=it;map=st;max=pt;mean=ut;min=yt;multiply=lt;norm=At;normalize=Nt;pow=xt;prod=wt;product=Lt;project=Mt;push=Tt;rank=_t;reciprocal=jt;reduce=zt;reshape=Ut;round=Ct;row_add=Vt;scale=Xt;set=Bt;sign=Pt;sin=Ht;sinh=Kt;slice=Zt;solve=to;sqrt=eo;square=io;subtract=so;sum=po;swap=uo;tan=yo;tanh=lo;toArray=Do;toString=q;trace=go;transpose=ko;trunc=Io;constructor(t,o){if(!t)return;if(t instanceof y)return t;if(t instanceof p){if(!o||!o.dtype)throw new Error("dtype is missing");t.shape&&(o.shape=t.shape);let m=t.length;t=new(A(o.dtype))(m)}let{shape:e=T(t),length:a=g(e),strides:n=b(e),dtype:s=E(t)}=o||{};this.data=v(t)?t:new(A(s))(M(t)),this.shape=e,this.length=a,this.dtype=s,this.strides=n}get x(){return this.get(0)}set x(t){this.set(0,t)}get y(){return this.get(1)}set y(t){this.set(1,t)}get z(){return this.get(2)}set z(t){this.set(2,t)}get w(){return this.get(3)}set w(t){this.set(3,t)}get T(){return this.copy().transpose()}};try{window.v=y}catch{}0&&(module.exports={NDArray,NDIter,NDMultiIter,abs,acos,acosh,add,angle,array,asin,asinh,atan,atanh,augment,binOp,cbrt,ceil,check,combine,copy,cos,cosh,cross,det,diagonal,dot,eig,equals,equidimensional,equilateral,exp,expm1,eye,fill,floor,forEach,fround,gauss,get,inv,log,log10,log1p,log2,lu,lu_factor,magic,map,matrix,max,mean,min,multiply,norm,normalize,ones,pow,prod,product,project,push,random,range,rank,reciprocal,reduce,reshape,round,row_add,scale,set,sign,sin,sinh,slice,solve,sqrt,square,subtract,sum,swap,tan,tanh,toArray,toString,trace,transpose,trunc,zeros});
//# sourceMappingURL=index.js.map
