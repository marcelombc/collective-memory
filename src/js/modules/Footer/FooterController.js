/*jslint browser:true, devel:true, nomen:true*/
/*globals define*/

/**
 * FooterController class.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 * @author Marco Oliveira <marcooliveira@ua.pt>
 */
define([
	'classify/Class',
	'../BaseController',
], function (Class, BaseController) {

	'use strict';

	var FooterController = {
		$name: 'FooterController',
		$extends: BaseController,

		/**
		 * Constructor.
		 */
		initialize: function (element) {
			console.log('footer construct', element);
		}
	};

	return new Class(FooterController);
});