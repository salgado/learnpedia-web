'use strict';

/**
 * @ngdoc overview
 * @name cscwProjectApp
 * @description
 * # cscwProjectApp
 *
 * Main module of the application.
 */
angular
  .module('cscwProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
