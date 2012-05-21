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
], function (Class, BaseView, $, doT, _) {

    'use strict';

    var MapView = {
        $name: 'MapView',
        $extends: BaseView,

        _map: null,
        _mapOptions: {
            zoom: 15,
            center: new google.maps.LatLng(40.63457, -8.65738),
            mapTypeId: google.maps.MapTypeId.ROADMAP //HYBRID
        },

        /**
         *
         */
        initialize: function (element) {
            this.$super(element);

            this._map = new google.maps.Map(element.get(0), this._mapOptions);

            this._enableListeners();
        },

        _enableListeners: function () {
            google.maps.event.addListener(this._map, 'zoom_changed', function () {
                console.log('zoom changed:');
                //console.log(this._map.getZoom());
            }.bind(this));

            google.maps.event.addListener(this._map, 'center_changed', function() {
                console.log('center changed: ');
                //console.log(this._map.getCenter());
            }.bind(this));

        },


        /**
         *
         */
        destroy: function () {

        }
    }

    return new Class(MapView);
});