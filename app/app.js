'use strict';

angular
  .module('learnpedia', [
    'main',
    'login',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ngMaterial',
    'angularUtils.directives.dirPagination',
    'datePicker',
    'checklist-model',
    'angularMoment',
    'ui.utils.masks'
  ])

  .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'modules/login/views/login.html',
          controller: 'LoginCtrl'
        })
        .state('main', {
          url: '/main',
          templateUrl: 'modules/main/views/main.html',
          controller: 'MainCtrl'
        })
    }
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });