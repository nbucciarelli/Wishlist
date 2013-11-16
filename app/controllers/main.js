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