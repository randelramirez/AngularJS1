'use strict';

// because IE does not support location.origin
if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

var eventsApp = angular.module('eventsApp', ['ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        
       

        var rootLocation = window.location.origin;
        console.log("rootlocation",rootLocation);
        

        $routeProvider.when('/newEvent', {
            // to serve html files
            // use routes.IgnoreRoute("{file}.html"); in routesconfig.cs

            // using mvc/razor views
            //templateUrl: 'SinglePage/CreateEvent',

            //template: 'Hello world!' Hello World will be printed in the screen
            templateUrl: rootLocation + '/Templates/NewEvent.html',
            controller: 'EditEventController'
        });

        $routeProvider.when('/events', {
            templateUrl: rootLocation + '/Templates/EventList.html',
            controller: 'EventListController'
        });

        $routeProvider.when('/event/:eventId', {
            //custom route properties foo
            // controller  must have $route
            foo: "bar",
            //templateUrl: rootLocation + "/EventDetails",
            templateUrl: rootLocation + '/Templates/EventDetails.html',
            controller: 'EventController',
            resolve: {
                event: function ($q, $route, eventData) {
                    
                    var deferred = $q.defer();
                    eventData.getEvent($route.current.pathParams.eventId)
                        .then(function (event) { deferred.resolve(event); });
                    return deferred.promise;
                }
            }
        });

        $routeProvider.when('/sampleDirective', {
            templateUrl: rootLocation +'/Templates/SampleDirective.html',
            controller: 'SampleDirectiveController'
        });

        $routeProvider.when('/editProfile', {
            templateUrl: rootLocation + '/Templates/EditProfile.html',
            controller: 'EditProfileController'
        });

        // default route, it also covers invalid routes
        $routeProvider.otherwise({ redirectTo: '/events' });

        // to use html5 routing
        // make href= is not using #/location
        $locationProvider.html5Mode(true);
    });

