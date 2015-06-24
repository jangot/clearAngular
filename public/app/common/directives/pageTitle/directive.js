define([

    'app'

], function(app) {
    "use strict";

    app.directive('appPageTitle', function() {
        return {
            templateUrl: '/app/common/directives/pageTitle/template.html',
            scope: true,
            link: function(scope, element, attrs) {},
            controller: function($scope, $rootScope) {

                $scope.title = 'title'//$state.current.page.title;

                var unbind = $rootScope.$on('$stateChangeSuccess', function(){
                    $scope.title = 'title';//$state.current.page.title;
                });

                $scope.$on('$destroy', unbind);
            }
        }
    });
});
