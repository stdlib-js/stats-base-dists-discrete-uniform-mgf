// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,f.get),p&&i&&i.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var l=Math.floor;function y(t){return l(t)===t}function p(t){return t!=t}var v,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,w=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",s=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return d.call(t);n=t[A],i=A,r=null!=(o=t)&&w.call(o,i);try{t[A]=void 0}catch(r){return d.call(t)}return e=d.call(t),r?t[A]=n:delete t[A],e}:function(t){return d.call(t)},_="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,r,n;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(_&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var U,g=v,j="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;U=function(){var t,r,n;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,NaN]),n=r,t=(j&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S=U,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var t,r,n;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,256,257]),n=r,t=(E&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,65536,65537]),n=r,t=(P&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var W,x={uint16:H,uint8:G};(W=new x.uint16(1))[0]=4660;var M=52===new x.uint8(W.buffer)[0],k=!0===M?1:0,Y=new S(1),C=new g(Y.buffer);function q(t){return Y[0]=t,C[k]}var z=!0===M?1:0,B=new S(1),D=new g(B.buffer);function J(t,r){return B[0]=t,D[z]=r>>>0,B[0]}var K=Number.POSITIVE_INFINITY,Q=Number.NEGATIVE_INFINITY,R=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=1.4426950408889634;function tt(t){var r,n,e,o,i,u,a,f,c,l,y,v;if(t===K||p(t))return t;if(t===Q)return-1;if(0===t)return t;if(t<0?(n=!0,a=-t):(n=!1,a=t),a>=38.816242111356935){if(n)return-1;if(a>=709.782712893384)return K}if(i=0|q(a),a>.34657359027997264)a<1.0397207708399179?n?(e=t+X,o=-Z,v=-1):(e=t-X,o=Z,v=1):(v=n?$*t-.5:$*t+.5,e=t-(l=v|=0)*X,o=l*Z),c=e-(t=e-o)-o;else{if(i<1016070144)return t;v=0}return u=1+(f=t*(r=.5*t))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(f),y=f*((u-(l=3-u*r))/(6-t*l)),0===v?t-(t*y-f):(y=t*(y-c)-c,y-=f,-1===v?.5*(t-y)-.5:1===v?t<-.25?-2*(y-(t+.5)):1+2*(t-y):v<=-2||v>56?(a=J(a=1-(y-t),e=q(a)+(v<<20)|0))-1:(l=1,v<20?a=(l=J(l,e=1072693248-(2097152>>v)|0))-(y-t):(a=t-(y+(l=J(l,e=R-v<<20|0))),a+=1),J(a,e=q(a)+(v<<20)|0)))}var rt,nt,et=Math.ceil;function ot(t){return t<0?et(t):l(t)}function it(t){return t===K||t===Q}!0===M?(rt=1,nt=0):(rt=0,nt=1);var ut,at,ft={HIGH:rt,LOW:nt},ct=new S(1),lt=new g(ct.buffer),yt=ft.HIGH,pt=ft.LOW;function vt(t,r){return ct[0]=r,t[0]=lt[yt],t[1]=lt[pt],t}function bt(t,r){return 1===arguments.length?vt([0,0],t):vt(t,r)}!0===M?(ut=1,at=0):(ut=0,at=1);var dt={HIGH:ut,LOW:at},wt=new S(1),At=new g(wt.buffer),st=dt.HIGH,_t=dt.LOW;function mt(t,r){return At[st]=t,At[_t]=r,wt[0]}var ht=[0,0];function Ut(t,r,n,e){return p(t)||it(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}c((function(t){return Ut(t,[0,0],1,0)}),"assign",Ut);var gt=[0,0],jt=[0,0];function Nt(t,r){var n,e,o,i,u;return 0===r||0===t||p(t)||it(t)?t:(Ut(t,gt,1,0),r+=gt[1],r+=function(t){var r=q(t);return(r=(2146435072&r)>>>20)-R|0}(t=gt[0]),r<-1074?(o=t,bt(ht,0),i=ht[0],i&=2147483647,u=q(o),mt(i|=u&=2147483648,ht[1])):r>1023?t<0?Q:K:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,bt(jt,t),n=jt[0],n&=2148532223,e*mt(n|=r+R<<20,jt[1])))}var It=1.4426950408889634,Ot=1/(1<<28);function St(t){var r;return p(t)||t===K?t:t===Q?0:t>709.782712893384?K:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Ot?1+t:function(t,r,n){var e,o,i,u;return Nt(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=ot(t<0?It*t-.5:It*t+.5)),1.9082149292705877e-10*r,r)}function Et(t,r,n){var e,o;return p(t)||p(r)||p(n)||!y(r)||!y(n)||r>n?NaN:0===t?1:(o=n-r+1,e=St(t*r)*tt(t*o),e/=o*tt(t))}return c(Et,"factory",(function(t,r){var n,e;return p(t)||p(r)||!y(t)||!y(r)||t>r?(e=NaN,function(){return e}):(n=r-t+1,function(r){var e;return p(r)?NaN:0===r?1:(e=St(r*t)*tt(r*n),e/=n*tt(r))})})),Et},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).mgf=r();
//# sourceMappingURL=index.js.map
