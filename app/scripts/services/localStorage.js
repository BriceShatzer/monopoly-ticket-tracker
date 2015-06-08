'use strict';

 /**
 * @ngdoc function
 * @name monopolyTicketTrackerApp.service:localStorage
 * @description
 * # localStorage
 * Service of the monopolyTicketTrackerApp
 */
angular.module('monopolyTicketTrackerApp')
    .factory('localStorage', ['$window', function(win) {
    	return function() {
    		win.alert('triggered alert from localStorage.js');
    	};
    }]);