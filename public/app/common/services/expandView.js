define([

    'app',

    'angularAMD'

], function(app, angularAMD) {
    "use strict";

    app.provider('expandView', function() {
        function expandView(config) {
            if (_.isString(config)) {
                config = { view: config };
            }

            if (_.isString(config.view)) {
                var viewOptions = convertViewPathToControllerAndTemplate(config.view);
                delete config.view;

                angular.extend(config, viewOptions);
            }

            config = angularAMD.route(config);

            return config;
        }

        return {
            expand: expandView,
            $get: function() {
                return expandView;
            }
        };

        function convertViewPathToControllerAndTemplate(view) {
            var viewPathParts = view.split('/');
            var config = {};
            var viewPath;

            // Controller
            if (viewPathParts[1] === 'components') {// Components
                config.controller = viewPathParts.map(function (part) {
                    if (part !== 'components') {
                        return part.charAt(0).toUpperCase() + part.slice(1);
                    }
                }).join('');

                viewPathParts.splice(3, 0, 'views');
            } else {// Modules
                config.controller = viewPathParts.map(function (part) {
                    return part.charAt(0).toUpperCase() + part.slice(1);
                }).join('');

                viewPathParts.splice(1, 0, 'views');
            }

            viewPath = viewPathParts.join('/');

            // Template URL
            config.templateUrl = '/app/' + viewPath + '/template.html';

            // Controller URL
            config.controllerUrl = viewPath + '/controller';

            return config;
        }
    });
});