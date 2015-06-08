'use strict';

/**
 * @ngdoc function
 * @name monopolyTicketTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monopolyTicketTrackerApp
 */
angular.module('monopolyTicketTrackerApp')
  .controller('MainCtrl', 
  	function ($scope, tickets) {
	    $scope.tickets = tickets;
  	}
);
