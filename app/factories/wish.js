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