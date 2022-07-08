// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;var l=Math.floor;function y(r){return l(r)===r}function v(r){return r!=r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var A,_="function"==typeof Symbol?Symbol.toStringTag:"";A=p&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return b.call(r);n=r[_],a=_,t=null!=(o=r)&&w.call(o,a);try{r[_]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[_]=n:delete r[_],e}:function(r){return b.call(r)};var m=A,d="function"==typeof Uint32Array;var s="function"==typeof Uint32Array?Uint32Array:null;var U,h="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,t,n;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(d&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=U,g="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var I,O="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Uint8Array;var F="function"==typeof Uint8Array?Uint8Array:null;var H,T="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),n=t,r=(E&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var V,W="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,65536,65537]),n=t,r=(P&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var M,k={uint16:V,uint8:G};(M=new k.uint16(1))[0]=4660;var x=52===new k.uint8(M.buffer)[0],Y=!0===x?1:0,C=new S(1),q=new j(C.buffer);function z(r){return C[0]=r,q[Y]}var B=!0===x?1:0,D=new S(1),J=new j(D.buffer);function K(r,t){return D[0]=r,J[B]=t>>>0,D[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;var X=.6931471803691238,Z=1.9082149292705877e-10;function $(r){var t,n,e,o,a,i,u,f,c,l,y,p;if(r===Q||v(r))return r;if(r===R)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=38.816242111356935){if(n)return-1;if(u>=709.782712893384)return Q}if(a=0|z(u),u>.34657359027997264)u<1.0397207708399179?n?(e=r+X,o=-Z,p=-1):(e=r-X,o=Z,p=1):(p=n?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(l=p|=0)*X,o=l*Z),c=e-(r=e-o)-o;else{if(a<1016070144)return r;p=0}return i=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),y=f*((i-(l=3-i*t))/(6-r*l)),0===p?r-(r*y-f):(y=r*(y-c)-c,y-=f,-1===p?.5*(r-y)-.5:1===p?r<-.25?-2*(y-(r+.5)):1+2*(r-y):p<=-2||p>56?(u=K(u=1-(y-r),e=z(u)+(p<<20)|0))-1:(l=1,p<20?u=(l=K(l,e=1072693248-(2097152>>p)|0))-(y-r):(u=r-(y+(l=K(l,e=1023-p<<20|0))),u+=1),K(u,e=z(u)+(p<<20)|0)))}var rr=Math.ceil;function tr(r){return r<0?rr(r):l(r)}var nr,er;function or(r){return r===Q||r===R}!0===x?(nr=1,er=0):(nr=0,er=1);var ar,ir,ur={HIGH:nr,LOW:er},fr=new S(1),cr=new j(fr.buffer),lr=ur.HIGH,yr=ur.LOW;function vr(r,t){return fr[0]=t,r[0]=cr[lr],r[1]=cr[yr],r}function pr(r,t){return 1===arguments.length?vr([0,0],r):vr(r,t)}!0===x?(ar=1,ir=0):(ar=0,ir=1);var br={HIGH:ar,LOW:ir},wr=new S(1),Ar=new j(wr.buffer),_r=br.HIGH,mr=br.LOW;function dr(r,t){return Ar[_r]=r,Ar[mr]=t,wr[0]}var sr=[0,0];function Ur(r,t){return v(t)||or(t)?(r[0]=t,r[1]=0,r):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var hr=[0,0],jr=[0,0];function gr(r,t){var n,e,o,a,i;return 0===t||0===r||v(r)||or(r)?r:(function(r,t){1===arguments.length?Ur([0,0],r):Ur(r,t)}(hr,r),t+=hr[1],t+=function(r){var t=z(r);return(t=(2146435072&t)>>>20)-1023|0}(r=hr[0]),t<-1074?(o=r,pr(sr,0),a=sr[0],a&=2147483647,i=z(o),dr(a|=i&=2147483648,sr[1])):t>1023?r<0?R:Q:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,pr(jr,r),n=jr[0],n&=2148532223,e*dr(n|=t+1023<<20,jr[1])))}function Nr(r){var t;return v(r)||r===Q?r:r===R?0:r>709.782712893384?Q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return gr(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=tr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function Ir(r,t,n){var e,o;return v(r)||v(t)||v(n)||!y(t)||!y(n)||t>n?NaN:0===r?1:(o=n-t+1,e=Nr(r*t)*$(r*o),e/=o*$(r))}function Or(r,t){var n,e;return v(r)||v(t)||!y(r)||!y(t)||r>t?(e=NaN,function(){return e}):(n=t-r+1,function(t){var e;if(v(t))return NaN;if(0===t)return 1;return e=Nr(t*r)*$(t*n),e/=n*$(t)})}c(Ir,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Or});export{Ir as default,Or as factory};
//# sourceMappingURL=mod.js.map
