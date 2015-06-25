define([

    'app',

    'common/services/expandView',

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

    app.config(function($stateProvider) {
        $stateProvider.state(
            'body',
            {
                abstract: true,
                view: 'common/body'
            }
        );

        $stateProvider.state(
            'body.index',
            {
                url: '/',
                view: 'common/index',
                resolve: {
                    title: function() {
                        return 'Главная страниыа';
                    }
                }
            }
        );
    });
});