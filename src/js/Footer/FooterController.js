/*jslint browser:true, devel:true, nomen:true*/
/*globals define*/

/**
 * Module/Class description.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 */
define(['classify/Class'], function (Class) {

	'use strict';

	var FooterController = {

		/**
         * Constructor.
         */
		initialize: function (element) {
			console.log('footer construct');
		}
	};

	return new Class(FooterController);
});