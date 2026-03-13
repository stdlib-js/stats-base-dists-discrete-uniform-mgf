/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the moment-generating function (MGF) of a discrete uniform distribution.
*
* @module @stdlib/stats-base-dists-discrete-uniform-mgf
*
* @example
* var mgf = require( '@stdlib/stats-base-dists-discrete-uniform-mgf' );
*
* var y = mgf( 2.0, 0, 4 );
* // returns ~689.475
*
* y = mgf( -0.2, 0, 4 );
* // returns ~0.697
*
* y = mgf( 2.0, 0, 1 );
* // returns ~4.195
*
* var mymgf = mgf.factory( 6, 7 );
* y = mymgf( 0.1 );
* // returns ~1.918
*
* y = mymgf( 1.1 );
* // returns ~1471.722
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
