/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Float64Array = require( '@stdlib/array-float64' );
var uniform = require( '@stdlib/random-base-uniform' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var mgf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var min;
	var max;
	var len;
	var t;
	var y;
	var i;

	len = 100;
	t = new Float64Array( len );
	min = new Float64Array( len );
	max = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		t[ i ] = uniform( -2.0, 2.0 );
		min[ i ] = discreteUniform( 0, 10 );
		max[ i ] = discreteUniform( min[ i ], min[ i ] + 10 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mgf( t[ i % len ], min[ i % len ], max[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':factory', function benchmark( b ) {
	var mymgf;
	var min;
	var max;
	var len;
	var t;
	var y;
	var i;

	min = -2;
	max = 2;
	mymgf = mgf.factory( min, max );
	len = 100;
	t = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		t[ i ] = uniform( -2.0, 0.0 );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = mymgf( t[ i % len ] );
		if ( isnan( y ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
