define([

    'app'

], function(app){
    "use strict";

    app.controller('CommonBody', function($scope, stateData){
        $scope.stateData = stateData;
    });
});
