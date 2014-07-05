'use strict';

eventsApp.directive('mySample', function ($compile) {
    // restrict E => <my-sample></my-sample>
    // restrict C => <div class="my-sample"></div>

    //return {
    //    link: function (scope, element, attrs, controller) {
    //        var markup = "<input type='text' ng-model='sampleData' />{{sampleData}} <br/>";
    //        angular.element(element).html($compile(markup)(scope));
    //    }

    // or
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' />{{sampleData}} <br/>"
    }
})