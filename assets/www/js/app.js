/**
 * Created with IntelliJ IDEA.
 * User: shafqat
 * Date: 6/19/13
 * Time: 1:20 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';


// Declare app level module which depends on filters, and services
var quranApp = angular.module('quranApp', ['quranApp.filters', 'quranApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        // Home
        $routeProvider.when('/', {templateUrl: 'views/home.html', controller: 'HomeController'});
        //$routeProvider.when('/sura', {templateUrl: 'views/sura.html', controller: 'SuraController'});
        $routeProvider.when('/sura/:translationName', {templateUrl: 'views/sura.html', controller: 'SuraController'});

        $routeProvider.when('/sura/:translationName/:suraIndex/:suraName', {templateUrl: 'views/ayat.html', controller: 'AyatController'});



        // new server
        $routeProvider.when('/newserver', {templateUrl: 'views/server.html'});
        // Edit server
        $routeProvider.when('/server/:id', {templateUrl: 'views/server.html'});
        $routeProvider.when('/server/:id/projects', {templateUrl: 'views/project.html'});
        $routeProvider.when('/webcall', {templateUrl: 'views/webcall.html'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
