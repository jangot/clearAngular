define([

    'app',

    'common/services/routeConstructor',

    'common/view/body/controller',
    'common/view/index/controller',
    'common/directives/pageTitle/directive'

], function(app) {
    app.config(function($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

    app.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body',
            routeConstructorProvider.build({
                abstract: true,
                resolve: {
                    title: function() {
                        return '';
                    }
                },
                view: 'common/body'
            })
        );

        $stateProvider.state(
            'body.index',
            routeConstructorProvider.build({
                url: '/',
                view: 'common/index',
                resolve: {
                    title: function() {
                        return 'Главная страниыа';
                    }
                }
            })
        );

        $stateProvider.state(
            'body.404',
            routeConstructorProvider.build({
                url: '/404',
                view: 'common/404',
                page: {
                    title: 'Страница не найдена'
                }
            })
        );
    });
});