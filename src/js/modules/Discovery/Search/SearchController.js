/*jslint browser:true, devel:true, nomen:true*/
/*globals define*/

/**
 * SearchController class.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 * @author Marco Oliveira <marcooliveira@ua.pt>
 */
define([
    'classify/Class',
    'BaseController',
    './SearchView',
    'Discovery/MemoryRepository'
], function (Class, BaseController, SearchView, MemoryRepository) {

    'use strict';

    var SearchController = {
        $name: 'SearchController',
        $extends: BaseController,
        $binds: ['_handleQuerySearchChanged', '_handleGetTagSuccess'],

        _view: null,

        _memoryRepository: new MemoryRepository(),

        /**
         * Constructor.
         */
        initialize: function (element) {
            console.log('search construct', element);

            this._view = new SearchView(element);

            this._view.addListener(SearchView.EVENT_QUERY_CHANGE, this._handleQuerySearchChanged);
        },

        _handleQuerySearchChanged: function (queryInfo) {
            console.log('search query changed:', queryInfo);

            this._memoryRepository.getTag(queryInfo.tl, queryInfo.br, this._handleGetTagSuccess);
        },

        _handleGetTagSuccess: function (tags) {
            this._view.setTags(tags);
        },

        /**
         * {@inheritDoc}
         */
        destroy: function () {
            this._view.destroy();

            this.$super();
        }
    };

    return new Class(SearchController);
});