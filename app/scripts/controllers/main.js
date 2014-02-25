'use strict';
var app = angular.module('tkbraceioApp');

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.controller('AboutCtrl', function ($scope){
  $scope.stuffFoo = [];
});