'use strict';

/**
 * @ngdoc function
 * @name monopolyTicketTrackerApp.controller:main
 * @description
 * # main
 * Controller of the monopolyTicketTrackerApp
 */
angular.module('monopolyTicketTrackerApp')
  .controller('main', function ($scope, tickets) {
	    $scope.tickets = tickets;
  	}
);
