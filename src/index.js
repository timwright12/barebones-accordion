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

		let defaults = {
			'selector' : null,
			'prefix' : 'bb-',
		};
		let classNamePanel = options.prefix + 'accordion__panel';
		let classNameGroup = options.prefix + 'accordion__group';
		let classNameTrigger = options.prefix + 'accordion__trigger';

		console.log( classNameTrigger, classNameGroup );

		// Map all default settings to user defined options
		for ( let i = 0; i < defaults.length; i = i + 1 ) {
			if ( 'undefined' === typeof options[i] ) {
				options[i] = defaults[i];
			}
		} // for

		const instance = document.querySelectorAll( options.selector );
		const instanceCount = instance.length;
		let panel, label, panels, panelsCount, i, j, trigger, group;

		if( !instanceCount ) {
			return;
		}

		// Loop through each accordion instance for UI scoping
		for ( i = 0; i < instanceCount; i = i + 1 ) {
			panels = instance[i].querySelectorAll( '.' + classNamePanel );
			panelsCount = panels.length;

			if( !panelsCount ) {
				return;
			}

			// Loop through all accordion panels in this instance
			for ( j = 0; j < panelsCount; j = j + 1 ) {
				panel = panels[j];
				label = panel.getAttribute( 'aria-label' );

				// Set up the panel
				panel.setAttribute( 'aria-describedby', 'trigger-' + i + j );
				panel.setAttribute( 'aria-hidden', 'true' );
				panel.setAttribute( 'id', 'panel-' + i + j );

				// Create the trigger container
				group = document.createElement( 'div' );
				group.setAttribute( 'class', classNameGroup );

				// Create the trigger
				trigger = document.createElement( 'button' );
				trigger.setAttribute( 'aria-expanded', 'false' );
				trigger.setAttribute( 'class', classNameTrigger );
				trigger.setAttribute( 'aria-controls', 'panel-' + i + j );
				trigger.setAttribute( 'id', 'trigger-' + i + j );
				trigger.setAttribute( 'type', 'button' );
				trigger.textContent = label;

				group.appendChild( trigger );
				panel.parentNode.insertBefore( group, panel );

				console.log( label );
			}
		}

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
