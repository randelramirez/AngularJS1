'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, form) {
            if (form.$valid) {

                eventData.save(event);
            }
        };

        $scope.cancelEdit = function () {
            var location = window.location.origin + "/" + "EventDetails/";
            window.location = location;
        };

    }
);