'use strict';

angular.module('content')
  .controller('ContentCtrl', function ($scope, $state) {
    $scope.url;
    // $scope.videoURL = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
    $scope.logout = function () {
        $state.go('login')    
    };

    $scope.searchVideo = function (url) {
        if (url) {
            try {
                $scope.videoURL = url;
            } catch (err) {

            }
        };
    };

    $scope.sendContent = function () {

    };
  });
