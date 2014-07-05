'use strict'

eventsApp.directive('eventThumbnail', function ($compile) {
    var rootLocation = window.location.origin;
    return {
        restrict: 'E',
        // replace the html instead of appending it to, now instead of having <event-thumbnail>//html content of template here</event-thumbnail>
        // it's going to add the html of the template without the parent element <event-thumbnail>
        replace: true,
        templateUrl: rootLocation + '/Templates/Directives/EventThumbnail.html',
        scope: {
            event: "=event"
            // or
            // event: "=", because event mathces event="event", the attr name is also event
        }
    }
})