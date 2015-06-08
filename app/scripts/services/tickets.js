'use strict';

 /**
 * @ngdoc function
 * @name monopolyTicketTrackerApp.service:tickets
 * @description
 * # Tickets
 * Service of the monopolyTicketTrackerApp
 */
angular.module('monopolyTicketTrackerApp')
    .factory('tickets', ['localStorage', function(localStorage) {
		var tickets = {}; //what the service will ultimately return;
		tickets.catalog = undefined;

		tickets.addOne = function(record){
			record.count += 1;
		};

		tickets.removeOne = function(record){ 
			record.count+=-1;
		};

		tickets.alert = function() {
			console.log('fired');
			localStorage();
		};

    	var firebase; // saved info on firebase //new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/");
    	var defaultTicketInfo = [// default data that is used if nothing is found/available from firebase
	    	{
	    		number:101,
	    		count:0
	    	},
	    	{
	    		number:102,
	    		count:0
	    	},    	
	    	{
	    		number:103,
	    		count:0
	    	},
	    	{
	    		number:104,
	    		count:0
	    	},
	    	{
	    		number:105,
	    		count:0
	    	},
	    	{
	    		number:106,
	    		count:0
	    	},
	    	{
	    		number:107,
	    		count:0
	    	},
	    	{
	    		number:108,
	    		count:0
	    	},
	    	{
	    		number:109,
	    		count:0
	    	},
	    	{
	    		number:110,
	    		count:0
	    	},
	    	{
	    		number:111,
	    		count:0
	    	}
		];	

		function getGroup(number){
            var assignedGroup;
            var integer = number - 0;//ensure proper type 
            var groups = [
                {
                    low: 101,
                    high:108,
                    group:'A'
                },
                {
                    low: 109,
                    high:116,
                    group:'B'
                },
                {
                    low: 117,
                    high:122,
                    group:'C'
                },
                {
                    low: 123,
                    high:128,
                    group:'D'
                },
                {
                    low: 129,
                    high:134,
                    group:'E'
                },
                {
                    low: 135,
                    high:140,
                    group:'F'
                },
                {
                    low: 141,
                    high:145,
                    group:'G'
                },
                {
                    low: 146,
                    high:150,
                    group:'H'
                },
                {
                    low: 151,
                    high:154,
                    group:'J'
                },
                {
                    low: 155,
                    high:158,
                    group:'K'
                },
                {
                    low: 159,
                    high:162,
                    group:'L'
                },
                {
                    low: 163,
                    high:166,
                    group:'M'
                },
                {
                    low: 167,
                    high:170,
                    group:'N'
                },
                {
                    low: 171,
                    high:174,
                    group:'O'
                },
                {
                    low: 175,
                    high:178,
                    group:'P'
                },
                {
                    low: 179,
                    high:182,
                    group:'Q'
                },
                {
                    low: 183,
                    high:186,
                    group:'R'
                },
                {
                    low: 187,
                    high:190,
                    group:'S'
                },
                {
                    low: 191,
                    high:194,
                    group:'U'
                },
                {
                    low: 195,
                    high:198,
                    group:'V'
                },              
                {
                    low: 199,
                    high:202,
                    group:'W'
                },
                {
                    low: 203,
                    high:206,
                    group:'X'
                },
                {
                    low: 207,
                    high:210,
                    group:'Y'
                },              
                {
                    low: 211,
                    high:214,
                    group:'Z'
                }
            ];

            var keepLooking = true;
            var i = 0;

            while(keepLooking){
                for(;!assignedGroup; i++){
                    if(i < groups.length){
                        var low = groups[i].low; 
                        var high = groups[i].high;
                        var value = groups[i].group;                        
                        if(integer >= low){
                            if(integer <= high){
                                assignedGroup = value;
                                keepLooking = false;
                            }
                        }
                    } else {
                        try{console.log('group not found');}catch(e){}
                        assignedGroup = '?';
                        keepLooking = false;
                    }
                }
            }
            return assignedGroup;
        }

		//function addOne(count){ count+=1; }
		
		//function removeOne(count){ count+=-1 }

		if(firebase){
			tickets.catalog = firebase;
		}else{ 
			tickets.catalog = defaultTicketInfo;
		}

		for(var i = 0; i<tickets.catalog.length; i++){
			var record = tickets.catalog[i];
			record.group = getGroup(record.number);
		}
	
		return tickets;
    }]);
