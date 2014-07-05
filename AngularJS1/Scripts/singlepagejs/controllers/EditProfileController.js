'use strict';

// inject the gravatarUrlBuilder service
eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};
    $scope.getGravatarUrl = function (email) {
        return gravatarUrlBuilder.buildGravatarUrl(email);
    };
});