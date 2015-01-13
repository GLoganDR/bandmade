(function(){
  'use strict';

  angular.module('bandmade')
  .controller('ProfileCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.editMode = false;

    if(!$scope.currentUser.hasEdited){
      $scope.editMode = true;
    }

    $scope.startEditMode = function(){
      $scope.editMode = !$scope.editMode;
    };

    $scope.updateProfile = function(){
      $scope.editMode = false;
      $scope.currentUser.hasEdited = true;

      User.updateProfile($scope.currentUser).then(function(res){
        toastr.success('Your profile has been saved');
      });
    };

  }]);
})();
