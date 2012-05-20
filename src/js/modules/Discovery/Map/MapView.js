/*jslint browser:true, devel:true, nomen:true*/
/*global define*/

/**
 * MapView class.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 * @author Marco Oliveira <marcooliveira@ua.pt>
 */
define([
	'classify/Class',
	'BaseView',
	'jquery',
	'doT'
], function (Class, BaseView, $, doT) {

	'use strict';

	var MapView = {
		$name: 'MapView',
		$extends: BaseView,

		/**
		 *
		 */
		initialize: function () {
			this.$super();
		},

		/**
		 *
		 */
		destroy: function () {

		}
	}

	return new Class(MapView);
});