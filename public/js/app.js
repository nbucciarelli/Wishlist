var app = angular.module('wishlistApp', ['ngRoute', 'ngResource', 'angular-underscore'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { controller: 'MainCtrl', templateUrl: '/views/test.html'})
      ;
    $locationProvider.html5Mode(true);
  })
  .constant('appTitle', 'Wishlist')
  ;
app.controller('MainCtrl', function( $scope, Wish){
  $scope.newWish = Wish.new();
  Wish.all(function(data) {
    $scope.wishes = data;
  });
  
  $scope.createWish = function() {
    $scope.wishes.push($scope.newWish);
    Wish.create($scope.newWish, function(data){
      $scope.newWish = Wish.new();
    });
  };
});
app.factory('Wish', function( $resource, $http ) {
  return {
    all: function(callback) {
      $http.get('/wishes').success(callback);
    },
    create: function(data, callback) {
      $http.post('/wish', data).success(callback);
    },
    new: function() {
      return {name: '', description: '', url: ''};
    }
  };
  // function Wish (data) {
  //   function constructor(data) {
  //     this.name = data.name;
  //     this.description = data.description;
  //     this.url = data.url;      
  //   }
  // }
});
app.factory('$_', function() {
  return _;
});