'use strict';

eventsApp.controller('EventController',
    function EventController($scope, /*$routeParams,*/ $route) {

        // access route paramters based from route properties (app.js)
        console.log($route.current.foo);

        // access route parameters in query string
        console.log($route.current.params.name);

        // can also access route parameters
        //console.log($route.current.params.eventId);

        // will also work
        //console.log($route.current.pathParams.eventId);

        // will not work
        // pathParams only has access to properties that were defined in the route. (app.js)
        console.log($route.current.pathParams.name);

        $scope.sortorder = 'name';

        $scope.reload = function () {
            $route.reload();
        }

        $scope.event = $route.current.locals.event;

        // $scope.event returns a promise but angular knows how to bind data through that promise object, note that $scope.event does not return the actual event object
        //$scope.event = eventData.getEvent($routeParams.eventId);
        // access the event in the controller
        // using promises access the event via 'then'
        // at this stage .then can no longer be used because the promise has already returned from the route, app.js
        // note that .then() is function for promises
        //$scope.event.then(function (event) {
        //}, function (response) {
        //    console.log("fail in event controller",response);
        //});

        $scope.upVoteSession = function (session) {
            session.UpVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.UpVoteCount--;
        };
    }
);
