'use strict';

/**
 * @ngdoc overview
 * @name monopolyTicketTrackerApp
 * @description
 * # monopolyTicketTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('monopolyTicketTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
