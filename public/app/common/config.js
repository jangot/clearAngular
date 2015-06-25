define([

    'app',

    'common/services/expandView',
    'common/services/stateData',

    'common/views/body/controller',
    'common/views/index/controller',
    'common/directives/pageTitle/directive'

], function(app) {
    app.config(function($locationProvider, $stateProvider, expandViewProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider.decorator('views', function (state, parent) {
            var views = parent(state);

            return _.mapValues(views, expandViewProvider.expand);
        });
    });

    app.run(function($rootScope, $state, stateData) {
        $rootScope.$on('$stateChangeSuccess', function() {
            angular.forEach(stateData, function(value, key) {
                delete stateData[key];
            });

            if ($state.current.name !== '') {
                angular.extend(stateData, $state.current.data);
            }

        });
    });

    app.config(function($stateProvider) {
        $stateProvider.state(
            'body',
            {
                abstract: true,
                view: 'common/body',
                data: {
                    title: 'Body title'
                }
            }
        );

        $stateProvider.state(
            'body.index',
            {
                url: '/',
                view: 'common/index',
                data: {
                    title: 'Главная страница'
                }
            }
        );
    });
});