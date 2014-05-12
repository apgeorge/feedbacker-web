// http://kielczewski.eu/2013/04/integrating-angularjs-with-requirejs/
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        angular: '../bower_components/angular/angular',
        // 'angular-resource': 'libraries/angular-resource'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        // 'angular-resource': {
        //     deps: ['angular']
        // }
    }
});

require(['angular', 'underscore', 'app'], function(angular, _, app) {
    'use strict';
    angular.bootstrap(document, ['feedbacker']);
    console.log(app);
    console.log(_);
});
