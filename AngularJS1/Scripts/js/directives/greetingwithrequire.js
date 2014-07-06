'use strict';

eventsApp.directive('greeting', function () {

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        //priority: 2, higher priority means it will execute first
        //terminal: true, terminal means that directives with less than 2 priority will not be executed
        // note about terminal, it also affects built-in angular directives like ng-click
        // built-in directives have a default value 0, so use -1, -2 instead for your directives
        controller: function ($scope) {
            var greetings = ['hello'];
            $scope.sayHello = function () {
                alert(greetings.join());
            }
            this.addGreeting = function (greeting) {
                greetings.push(greeting);
            }
        }
    };
})
.directive('finnish', function () {
    return {
        restrict: 'A',
        require: 'greeting', // this directive requires a another directive named greeting
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
})
.directive('korean', function () {
    return {
        restrict: 'A',
        require: 'greeting', // this directive requires a another directive named greeting
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('annyeong-hasseyo');
        }
    }
});
