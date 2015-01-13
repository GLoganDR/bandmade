(function(){
'use strict';

  angular.module('bandmade')
  .controller('BrowseCtrl', ['$scope', '$interval', 'Browse', function($scope, $interval, Browse){
    $scope.results = [];

    Browse.all().then(function(response){

      $scope.results = response.data.users;
    });
  }]);
})();
