define([

    'app'

], function(app) {
    app.factory('decorateAction', function($q, $http) {

        function transformResponse(response) {
            return response;
        }

        return function(action) {
            action.interceptor = {
                request: function(config) {
                    return config;
                },
                requestError: function(rejection) {
                    return $q.reject(rejection);
                },
                response: function(response) {
                    return response;
                },
                responseError: function(rejection) {
                    return $q.reject(rejection);
                }
            }
            if (!action.transformResponse) {
                action.transformResponse = $http.defaults.transformResponse.concat(transformResponse);
            }
            return action;
        }
    })
});