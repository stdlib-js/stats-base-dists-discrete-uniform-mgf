// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t};var l=r,y=Math.floor;function p(t){return y(t)===t}function v(t){return t!=t}var b,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,w=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"";b=d&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return _.call(t);n=t[A],i=A,r=null!=(o=t)&&w.call(o,i);try{t[A]=void 0}catch(r){return _.call(t)}return e=_.call(t),r?t[A]=n:delete t[A],e}:function(t){return _.call(t)};var s,m=b,h="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var t,r,n;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(h&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,N=s,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;j=function(){var t,r,n;if("function"!=typeof O)return!1;try{r=new O([1,3.14,-3.14,NaN]),n=r,t=(I&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?S:function(){throw new Error("not implemented")};var E,F=j,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var t,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),n=r,t=(T&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P,x=E,L="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,r,n;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,65536,65537]),n=r,t=(L&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var W,k={uint16:P,uint8:x};(W=new k.uint16(1))[0]=4660;var Y=52===new k.uint8(W.buffer)[0],C=!0===Y?1:0,q=new F(1),z=new N(q.buffer);function B(t){return q[0]=t,z[C]}var D=!0===Y?1:0,J=new F(1),K=new N(J.buffer);function Q(t,r){return J[0]=t,K[D]=r>>>0,J[0]}var R=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY,Z=1023,$=.6931471803691238,tt=1.9082149292705877e-10,rt=1.4426950408889634;function nt(t){var r,n,e,o,i,u,a,f,c,l,y,p;if(t===R||v(t))return t;if(t===X)return-1;if(0===t)return t;if(t<0?(n=!0,a=-t):(n=!1,a=t),a>=38.816242111356935){if(n)return-1;if(a>=709.782712893384)return R}if(i=0|B(a),a>.34657359027997264)a<1.0397207708399179?n?(e=t+$,o=-tt,p=-1):(e=t-$,o=tt,p=1):(p=n?rt*t-.5:rt*t+.5,e=t-(l=p|=0)*$,o=l*tt),c=e-(t=e-o)-o;else{if(i<1016070144)return t;p=0}return u=1+(f=t*(r=.5*t))*function(t){return 0===t?-.03333333333333313:t*(.0015873015872548146+t*(t*(4008217827329362e-21+-2.0109921818362437e-7*t)-793650757867488e-19))-.03333333333333313}(f),y=f*((u-(l=3-u*r))/(6-t*l)),0===p?t-(t*y-f):(y=t*(y-c)-c,y-=f,-1===p?.5*(t-y)-.5:1===p?t<-.25?-2*(y-(t+.5)):1+2*(t-y):p<=-2||p>56?(a=Q(a=1-(y-t),e=B(a)+(p<<20)|0))-1:(l=1,p<20?a=(l=Q(l,e=1072693248-(2097152>>p)|0))-(y-t):(a=t-(y+(l=Q(l,e=Z-p<<20|0))),a+=1),Q(a,e=B(a)+(p<<20)|0)))}var et,ot,it=Math.ceil;function ut(t){return t<0?it(t):y(t)}function at(t){return t===R||t===X}!0===Y?(et=1,ot=0):(et=0,ot=1);var ft,ct,lt={HIGH:et,LOW:ot},yt=new F(1),pt=new N(yt.buffer),vt=lt.HIGH,bt=lt.LOW;function dt(t,r){return yt[0]=r,t[0]=pt[vt],t[1]=pt[bt],t}function _t(t,r){return 1===arguments.length?dt([0,0],t):dt(t,r)}!0===Y?(ft=1,ct=0):(ft=0,ct=1);var wt={HIGH:ft,LOW:ct},At=new F(1),st=new N(At.buffer),mt=wt.HIGH,ht=wt.LOW;function Ut(t,r){return st[mt]=t,st[ht]=r,At[0]}var gt=[0,0];function jt(t,r){return v(r)||at(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Nt=[0,0],It=[0,0];function Ot(t,r){var n,e,o,i,u;return 0===r||0===t||v(t)||at(t)?t:(function(t,r){1===arguments.length?jt([0,0],t):jt(t,r)}(Nt,t),r+=Nt[1],r+=function(t){var r=B(t);return(r=(2146435072&r)>>>20)-Z|0}(t=Nt[0]),r<-1074?(o=t,_t(gt,0),i=gt[0],i&=2147483647,u=B(o),Ut(i|=u&=2147483648,gt[1])):r>1023?t<0?X:R:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,_t(It,t),n=It[0],n&=2148532223,e*Ut(n|=r+Z<<20,It[1])))}var St=1.4426950408889634,Et=1/(1<<28);function Ft(t){var r;return v(t)||t===R?t:t===X?0:t>709.782712893384?R:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<Et?1+t:function(t,r,n){var e,o,i,u;return Ot(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(t-.6931471803691238*(r=ut(t<0?St*t-.5:St*t+.5)),1.9082149292705877e-10*r,r)}function Tt(t,r,n){var e,o;return v(t)||v(r)||v(n)||!p(r)||!p(n)||r>n?NaN:0===t?1:(o=n-r+1,e=Ft(t*r)*nt(t*o),e/=o*nt(t))}function Ht(t,r){var n,e;return v(t)||v(r)||!p(t)||!p(r)||t>r?(e=NaN,function(){return e}):(n=r-t+1,function(r){var e;return v(r)?NaN:0===r?1:(e=Ft(r*t)*nt(r*n),e/=n*nt(r))})}l(Tt,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Ht}),t.default=Tt,t.factory=Ht,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).mgf={});
//# sourceMappingURL=browser.js.map
