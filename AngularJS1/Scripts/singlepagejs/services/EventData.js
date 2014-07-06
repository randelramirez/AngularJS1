'use strict'


// with save functionality
eventsApp.factory('eventData', function ($resource, $q, $timeout) {
    //var resource = $resource('event/index/:id', { id: '@id' });
    var location = window.location.origin + ":21181" + "/" + "Event/" + "Get/";
    var resource = $resource( location  +':id', { id: '@id' });
    return {

        getEvent: function (eventId) {
            var deferred = $q.defer();
            $timeout(function () {
                resource.get({ id: eventId },
                 function (event) {
                     deferred.resolve(event);
                 },
                 function (response) {
                     deferred.reject(response);
                     console.log("fail in service", response);
                 });
            },3000);

            

            return deferred.promise;
        },

        save: function (event) {
            var deferred = $q.defer();
            event.Id = 0;
            var location = window.location.origin + ":21181" + "/" + "Event/" + "Create/";
            console.log("location",location);
            resource = $resource(location);
            
            resource.save(event, function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },

        getAllEvents: function () {
            var location = window.location.origin + ":21181" + "/" + "Event/" + "GetAll/";
            var resource = $resource(location + ':id', { id: '@id' });
            return resource.query();
        }
    }
});