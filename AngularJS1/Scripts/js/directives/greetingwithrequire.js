'use strict';

eventsApp.directive('greeting', function () {

    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        transclude: true,
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
        //require: 'greeting', // this directive requires a another directive named greeting

        //using transclusion with nested directives
        // note on require, it means that it requires the same directive in the same element 
        // the code below will not work, greeting directive is in the parent element
        // <greeting><div finnish korean></div></greeting> // note restrict is A, so the div will use the directives as attributes
        require: "^greeting",
       
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
})
.directive('korean', function () {
    return {
        restrict: 'A',
        //require: 'greeting', // this directive requires a another directive named greeting

        require: "^greeting",
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('annyeong-hasseyo');
        }
    }
});
