'use strict';

angular
  .module('learnpedia', [    
    'login',
    'main',
    'content',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ui.router',
    'ngMaterial',
    'angularUtils.directives.dirPagination',
    'datePicker',
    'checklist-model',
    'angularMoment',
    'ui.utils.masks',
    'ngYoutubeEmbed'
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
        .state('content', {
          url: '/content',
          templateUrl: 'modules/content/views/content.html',
          controller: 'ContentCtrl'
        })
    }
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  });