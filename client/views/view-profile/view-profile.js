(function(){
  'use strict';

  angular.module('bandmade')
  .controller('View-profileCtrl', ['$scope', '$location', 'User', '$routeParams', function($scope, $location, User, $routeParams){
    $scope.user = {};

    User.displayProfile($routeParams.userId).then(function(res){
      $scope.user = res.data.user;
    });

  }]);
})();
