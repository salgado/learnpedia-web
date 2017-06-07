'use strict';

angular.module('main')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.logout = function () {
      $state.go('login')    
    };

    $scope.createContent = function () {
      $state.go('content');
    };
  });
