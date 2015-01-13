(function(){
  'use strict';

  angular.module('bandmade')
  .controller('LogoutCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    User.logout().then(function(){
      toastr.success('Successful logout.');
      $scope.destroySession();
      $location.path('/');
    });
  }]);
})();

