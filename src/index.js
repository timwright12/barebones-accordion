/* global define, module, global */

/**
 * @module @barebones/accordion
 *
 * @description
 *
 * A description goes here.
 *
 * [Link to demo]{@link https://baseline.10up.com/component/tenup-scaffold}
 */
( function ( global ) {
	/**
	 * Setting the global namespace of accordion if it's not set already
	 *
	 * @namespace accordion
	 */
	if ( 'object' !== typeof window.accordion ) {
		window.accordion = {};
	}

	/**
	 * accordion primary function
	 *
	 * @param {object} options Misc. options for this component
	 */
	const accordion = function ( options ) {

		var defaults = {
			'el' : null,
		};

		// Map all default settings to user defined options
		for ( var i = 0; i < defaults.length; i = i + 1 ) {
			if ( 'undefined' === typeof options[i] ) {
				options[i] = defaults[i];
			}
		} // for

		console.log( options );
	};

	// Export if supported. This is in place so the /dist naturally generates a supported version
	if ( 'undefined' !== typeof module && 'undefined' !== typeof module.exports ) {
		module.exports = accordion;
	} else if ( 'function' === typeof define && define.amd ) {
		define( 'accordion', [], function () {
			return accordion;
		} );
	} else if ( 'object' === typeof global ) {
		/* eslint-disable */
		global.accordion = accordion;
		/* eslint-enable */
	}
} )( 'undefined' !== typeof global ? global : window );
