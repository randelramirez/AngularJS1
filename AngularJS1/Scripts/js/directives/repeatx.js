'use strict';

eventsApp.directive('repeatX', function () {
   

    //return {
    //    link: function (scope, element, attributes, controller) {
    //        // without number would also work, 
    //        // Number() is js a function, like ParseInt
    //        for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
    //            //append the element, the element.clone() will clone the element and then append it 
    //            element.after(element.clone());
    //        }
    //    }
    //}

    // make sure $compile is injected in the constructor of this directive
    // using $compile service
    // call to $compile()(scope) is expensive, it traverses the dom and look for directives that need to be processed
    //return {
    //    link: function (scope, element, attributes, controller) {
    //        for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
    //            element.after($compile(element.clone().attr('repeat-x', 0))(scope));
    //        }
    //    }
    //};

    // using compile function
    // scope is not available => all about dom manipulations, not bindings into the scope
    //return {
    //    compile: function (element, attributes) {
    //        for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
    //            element.after(element.clone().attr('repeat-x', 0));
    //        }
    //    }
    //};

    // directive function to use when mainipulating the dom is compile
    return {
        compile: function (element, attributes) {
            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function (scope,element, attributes, controller) {
                attributes.$observe('text', function (newValue) {
                    if (newValue === 'Hello World') {
                        element.css('color', 'red');
                    }
                })
            }
        }
    };
});
