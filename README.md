<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Discrete uniform][discrete-uniform-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_mgf" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{at}-\mathrm{e}^{t(b+1)}}{(b-a+1)(1-e^t)} & \text{for } t \neq 0 \\ 1 & \text{for } t = 0 \end{cases}" alt="Moment-generating function (MGF) for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right]= \begin{cases} \frac{\mathrm{e}^{at}-\mathrm{e}^{t(b+1)}}{(b-a+1)(1-e^t)} &amp; \text{for } t \neq 0 \\ 1 &amp; \text{for } t = 0 \end{cases}" data-equation="eq:discrete_uniform_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/mgf/docs/img/equation_discrete_uniform_mgf.svg" alt="Moment-generating function (MGF) for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
mgf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-mgf@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-mgf@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.mgf;
})();
</script>
```

#### mgf( t, a, b )

Evaluates the [moment-generating function][mgf] (MGF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = mgf( 2.0, 0, 4 );
// returns ~689.475

y = mgf( -0.2, 0, 4 );
// returns ~0.697

y = mgf( 2.0, 0, 1 );
// returns ~4.195
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = mgf( 0.2, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 3, 2);
// returns NaN
```

If provided `NaN` for any parameter, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0, 1 );
// returns NaN

y = mgf( 0.0, NaN, 1 );
// returns NaN

y = mgf( 0.0, 0, NaN );
// returns NaN
```

#### mgf.factory( a, b )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var mymgf = mgf.factory( 6, 7 );
var y = mymgf( 0.1 );
// returns ~1.918

y = mymgf( 1.1 );
// returns ~1471.722
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-discrete-uniform-mgf@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

var randa = randint.factory( 0, 5 );
var randb = randint.factory();
var a;
var b;
var t;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    a = randa();
    b = randb( a, a+randa() );
    v = mgf( t, a, b );
    console.log( 't: %d, a: %d, b: %d, M_X(t;a,b): %d', t.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-mgf/tree/esm

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
