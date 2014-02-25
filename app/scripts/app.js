'use strict';

var tkApp = angular.module('tkbraceioApp', 
  [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

tkApp.config(function ($routeProvider) {
  
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/spa', {
        templateUrl: 'views/spa.html',
        controller: 'SpaCtrl'
      })
      .otherwise({
        redirectTo: '/',
      });
  });
