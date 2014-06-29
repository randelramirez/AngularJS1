'use strict';

//eventsApp.controller('EventController', function EventController($scope, eventData) {
//        $scope.sortorder = 'name';

//        //eventData.getEvent(function (event) {
//        //    $scope.event = event;
//        //})

//        //$scope.event returns a promise but angular knows how to bind data through that promise object, note that $scope.event does not return the actual event object
//        $scope.event = eventData.getEvent();
//        // access the event in the controller
//        // using promises access the event via 'then'
//        $scope.event.then(function (event) {
//            console.log(event)
//        }, function (status) {
//            console.log(status);
//        });

//        // passing data from the view is a best practice rather than accessing data from the scope
//        //$scope.upVoteSession = function (session, event) {
//        //    console.log("event", event);
//        //    console.log("$scope.event",$scope.event);
//        //    session.upVoteCount++;
//        //};

//        $scope.upVoteSession = function(session) {
//            session.UpVoteCount++;
//        };


//        $scope.downVoteSession = function(session) {
//            session.UpVoteCount--;
//        };
//    }
//);




//// using deferred objects with ngResource
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        // the function that will be called in the binding of the controller
        // made this in order to pass data in the factory- randel usage => eventData.getEvent(id)
        //var x = 0;
        //$scope.init = function (id) {
        //    x = id;
        //    console.log("the id",x);
        //}
        $scope.sortorder = 'name';

        // $scope.event returns a promise but angular knows how to bind data through that promise object, note that $scope.event does not return the actual event object
        $scope.event = eventData.getEvent();
        // access the event in the controller
        // using promises access the event via 'then'
        $scope.event.then(function (event) {
            console.log("event",event)
        }, function (response) {
            console.log("fail in event controller",response);
        });

        // passing data from the view is a best practice rather than accessing data from the scope
        //$scope.upVoteSession = function (session, event) {
        //    console.log("event", event);
        //    console.log("$scope.event",$scope.event);
        //    session.upVoteCount++;
        //};

        $scope.upVoteSession = function (session) {
            session.UpVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.UpVoteCount--;
        };
    }
);
