'use strict';

// Declare app level module which depends on views, and components
angular.module('guitarChords', [
  'ngRoute'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
      templateUrl: 'home.html' // ,
    });

    $routeProvider.otherwise({ redirectTo: '/' });

  }]);