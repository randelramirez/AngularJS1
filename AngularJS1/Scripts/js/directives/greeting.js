'use strict';

eventsApp.directive('greeting', function () {

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: function ($scope) {
            $scope.sayHello = function () {
                alert('Hello, greeting from a self-contained controller in a directive');
            }
        }
    };
});

eventsApp.directive('greetingWithExternalController', function () {

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: 'GreetingController'
    };
});

// this controller can be in a differenct JS file
eventsApp.controller('GreetingController', function ($scope) {
    $scope.sayHello = function () {
        alert("Hello, using a controller outside of the directive");
    }
})

eventsApp.directive('greetingWithDynamicController', function () {

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: '@',
        name: 'ctrl' // ctrl, here could have any value, what this name actullay will do is look for an attribute with that name and use that as the controller
    };
});

eventsApp.controller('GreetingDynamicController', function ($scope) {
    $scope.sayHello = function () {
        alert("Hello, using a controller outside of the directive (dynamic, based from attribute)");
    }
})