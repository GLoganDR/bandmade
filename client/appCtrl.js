(function(){
  'use strict';
  var appCtrl = angular.module('bandmade');

  appCtrl.controller('AppCtrl', ['$scope', '$localForage', 'User', function($scope, $localForage, User){
    $scope.currentUser = {alias: 'anonymous'};

    User.checkSession().then(function(res){
      $scope.currentUser = res.data.user;
    });

    $scope.setCurrentUser = function(user){
      $scope.currentUser = user;
    };

    $scope.destroySession = function(user){
      $scope.currentUser = {alias: 'anonymous'};
    };

    $localForage.getItem('email').then(function(email){
      $scope.email = email;
    });

    $scope.$on('authenticated', function(event, email){
      if(email === 'anonymous'){email = null;}

      $localForage.setItem('email', email).then(function(){
        $scope.email = email;
      });
    });

  }]);
})();
