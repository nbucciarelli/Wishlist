var app = angular.module('wishlistApp', ['ngRoute', 'ngResource', 'angular-underscore'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', templateUrl: '/views/test.html'})
      ;
    $locationProvider.html5Mode(true);
  })
  .constant('appTitle', 'Wishlist')
  ;