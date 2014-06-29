'use strict'

//eventsApp.factory('eventData', function ($http, $log, $q) {
//    return {
//        getEvent: function () {
//            var location = window.location.origin + ":21181" + "/" + "Event/" + "Index/1";
//            var deferred = $q.defer();
//            $http({ method: 'GET', url: location }).
//                success(function (data, status, headers, config) {
//                    deferred.resolve(data);
//                }).
//                error(function (data, status, headers, config) {
//                    $log.warn(data, status, headers, config)
//                    deferred.reject(status);
//                });

//            return deferred.promise;
//        }
//    };
//});



// returning data using resource without using deferred objects
//eventsApp.factory('eventData', function ($resource) {
//    return {
//        getEvent: function () {
//            return $resource('data/event/:id', { id: '@id' }).get({ id: '1.json' });
//        }
//    }
//});

//eventsApp.factory('eventData', function ($resource, $q) {
//    return {

//        getEvent: function () {
//            var deferred = $q.defer();
//            $resource('data/event/:id', { id: '@id' }).get({ id: '1.json' },
//                function (event) {

//                    deferred.resolve(event);
//                },
//                function (response) {
//                    deferred.reject(response);
//                });

//            return deferred.promise;
//        },
//    }
//});


// with save functionality
eventsApp.factory('eventData', function ($resource, $q) {
    //var resource = $resource('event/index/:id', { id: '@id' });
    var location = window.location.origin + ":21181" + "/" + "Event/" + "Get/";
    var resource = $resource( location  +':id', { id: '@id' });
    return {

        getEvent: function () {
            var deferred = $q.defer();
            resource.get({id:'1'},
                function (event) {
                    console.log("ngResource");
                    deferred.resolve(event);
                },
                function (response) {
                    deferred.reject(response);
                    console.log("fail in service",response);
                });

            return deferred.promise;
        },

        save: function (event) {
            var deferred = $q.defer();
            event.id = 0;
            var location = window.location.origin + ":21181" + "/" + "Event/" + "Create/";
            resource = $resource(location);

            resource.save(event, function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    }
});