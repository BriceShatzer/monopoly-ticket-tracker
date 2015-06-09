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
			},
			{
				number:112,
				count:0
			},
			{
				number:113,
				count:0
			},
			{
				number:114,
				count:0
			},
			{
				number:115,
				count:0
			},
			{
				number:116,
				count:0
			},
			{
				number:117,
				count:0
			},
			{
				number:118,
				count:0
			},
			{
				number:119,
				count:0
			},
			{
				number:120,
				count:0
			},
			{
				number:121,
				count:0
			},
			{
				number:122,
				count:0
			},
			{
				number:123,
				count:0
			},
			{
				number:124,
				count:0
			},
			{
				number:125,
				count:0
			},
			{
				number:126,
				count:0
			},
			{
				number:127,
				count:0
			},
			{
				number:128,
				count:0
			},
			{
				number:129,
				count:0
			},
			{
				number:130,
				count:0
			},
			{
				number:131,
				count:0
			},
			{
				number:132,
				count:0
			},
			{
				number:133,
				count:0
			},
			{
				number:134,
				count:0
			},
			{
				number:135,
				count:0
			},
			{
				number:136,
				count:0
			},
			{
				number:137,
				count:0
			},
			{
				number:138,
				count:0
			},
			{
				number:139,
				count:0
			},
			{
				number:140,
				count:0
			},
			{
				number:141,
				count:0
			},
			{
				number:142,
				count:0
			},
			{
				number:143,
				count:0
			},
			{
				number:144,
				count:0
			},
			{
				number:145,
				count:0
			},
			{
				number:146,
				count:0
			},
			{
				number:147,
				count:0
			},
			{
				number:148,
				count:0
			},
			{
				number:149,
				count:0
			},
			{
				number:150,
				count:0
			},
			{
				number:151,
				count:0
			},
			{
				number:152,
				count:0
			},
			{
				number:153,
				count:0
			},
			{
				number:154,
				count:0
			},
			{
				number:155,
				count:0
			},
			{
				number:156,
				count:0
			},
			{
				number:157,
				count:0
			},
			{
				number:158,
				count:0
			},
			{
				number:159,
				count:0
			},
			{
				number:160,
				count:0
			},
			{
				number:161,
				count:0
			},
			{
				number:162,
				count:0
			},
			{
				number:163,
				count:0
			},
			{
				number:164,
				count:0
			},
			{
				number:165,
				count:0
			},
			{
				number:166,
				count:0
			},
			{
				number:167,
				count:0
			},
			{
				number:168,
				count:0
			},
			{
				number:169,
				count:0
			},
			{
				number:170,
				count:0
			},
			{
				number:171,
				count:0
			},
			{
				number:172,
				count:0
			},
			{
				number:173,
				count:0
			},
			{
				number:174,
				count:0
			},
			{
				number:175,
				count:0
			},
			{
				number:176,
				count:0
			},
			{
				number:177,
				count:0
			},
			{
				number:178,
				count:0
			},
			{
				number:179,
				count:0
			},
			{
				number:180,
				count:0
			},
			{
				number:181,
				count:0
			},
			{
				number:182,
				count:0
			},
			{
				number:183,
				count:0
			},
			{
				number:184,
				count:0
			},
			{
				number:185,
				count:0
			},
			{
				number:186,
				count:0
			},
			{
				number:187,
				count:0
			},
			{
				number:188,
				count:0
			},
			{
				number:189,
				count:0
			},
			{
				number:190,
				count:0
			},
			{
				number:191,
				count:0
			},
			{
				number:192,
				count:0
			},
			{
				number:193,
				count:0
			},
			{
				number:194,
				count:0
			},
			{
				number:195,
				count:0
			},
			{
				number:196,
				count:0
			},
			{
				number:197,
				count:0
			},
			{
				number:198,
				count:0
			},
			{
				number:199,
				count:0
			},
			{
				number:200,
				count:0
			},
			{
				number:201,
				count:0
			},
			{
				number:202,
				count:0
			},
			{
				number:203,
				count:0
			},
			{
				number:204,
				count:0
			},
			{
				number:205,
				count:0
			},
			{
				number:206,
				count:0
			},
			{
				number:207,
				count:0
			},
			{
				number:208,
				count:0
			},
			{
				number:209,
				count:0
			},
			{
				number:210,
				count:0
			},
			{
				number:211,
				count:0
			},
			{
				number:212,
				count:0
			},
			{
				number:213,
				count:0
			},
			{
				number:214,
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
