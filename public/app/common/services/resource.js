define([

    'app',

    'common/services/config',

    'common/services/decorateAction'

], function(app) {
    "use strict";

    app.factory('apiResource', function($resource, config, decorateAction) {
        var DEFAULT_ACTIONS = {
            get: { method: 'GET' },
            save: { method: 'PUT' },
            query: { method: 'GET' },
            remove: { method: 'DELETE' },
            delete: { method: 'DELETE' },
            create: { method: 'POST' },
            patch: { method: 'PATCH' }
        };

        return function geoApiResource(url, paramDefaults, actions) {
            url = addUrlPrefix(url);
            paramDefaults = paramDefaults || {};
            actions = angular.extend({}, DEFAULT_ACTIONS, actions);

            _.forOwn(actions, function(config) {
                config = decorateAction(config);
                if (config.url) {
                    config.url = addUrlPrefix(config.url);
                }
            });

            return $resource(url, paramDefaults, actions);
        };

        function addUrlPrefix(url) {
            return config.resources.api.host + url;
        }
    });
});
