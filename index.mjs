// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,i,m){var d,a;return e(t)||e(i)||e(m)||!s(i)||!s(m)||i>m?NaN:0===t?1:(a=m-i+1,d=r(t*i)*n(t*a),d/=a*n(t))}function d(t,m){var d;return e(t)||e(m)||!s(t)||!s(m)||t>m?i(NaN):(d=m-t+1,function(s){var i;if(e(s))return NaN;if(0===s)return 1;return i=r(s*t)*n(s*d),i/=d*n(s)})}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map