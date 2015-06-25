define([

    'app'

], function(app) {
    "use strict";

    app.constant('config', {
        resources: {
            api: {
                host: 'http://localhost:8888/'
            }
        }
    });
});