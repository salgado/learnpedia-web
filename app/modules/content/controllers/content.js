'use strict';

angular.module('content')
  .controller('ContentCtrl', function ($scope, $state) {
    $scope.logout = function () {
        $state.go('app.login')    
    };

    $scope.sendContent = function () {

    };
  });
