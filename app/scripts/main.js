// http://kielczewski.eu/2013/04/integrating-angularjs-with-requirejs/
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
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

require([ 'angular', 'app'], function (angular,app) {
    'use strict';
    angular.bootstrap(document, ['feedbacker']);
    console.log(app);
});
