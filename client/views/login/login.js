(function(){
  'use strict';

  angular.module('bandmade')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Successful login.');
      console.log(response.data.user);
      $scope.setCurrentUser(response.data.user);
      $location.path('/');
    }

    function failure(response){
      toastr.error('Error during login, try again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

