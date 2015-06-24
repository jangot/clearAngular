define([

    'angular',
    'angularResource',
    'uiRouter',

    'angularAMD',

    'uiBootstrap',
    'uiBootstrapTpl'

], function(angular) {
    return angular.module('app', [
        'ui.router',  'ui.bootstrap', 'ngResource'
    ]);
});