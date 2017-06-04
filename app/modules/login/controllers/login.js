'use strict';

angular.module('login')
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.login = function () {
        $state.go('main');
    };
  });
