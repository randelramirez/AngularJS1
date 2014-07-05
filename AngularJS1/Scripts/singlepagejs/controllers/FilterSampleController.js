﻿'use strict'

//eventsApp.controller('FilterSampleController',
//    function FilterSampleController($scope, $filter) {
//        //note, in here the $filter service is injected

//        $scope.data = {};

//        //returns the durations filter (filter.js)
//        var durations = $filter('durations');
//        $scope.data.duration1 = durations(1);
//        $scope.data.duration2 = durations(2);
//        $scope.data.duration3 = durations(3);
//        $scope.data.duration4 = durations(4);

//    });

// without injecting $filter
// inject the actual filter that you want
eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter) {
        //note, in here the $filter service is injected

        $scope.data = {};

        //returns the durations filter (filter.js)
        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

    });