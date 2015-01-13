(function(){
'use strict';

  angular.module('bandmade')
  .controller('ContactCtrl', ['User', '$scope', '$interval', 'Home', function(User, $scope, $interval, Contact){
    // messaging //
    $scope.email = {};

    $scope.sendMail = function(){
      User.sendMail($scope.email).then(function(response){
        toastr.success('Message Sent!');
        $scope.email = {};
      });
    };
    //---- End Messaging ----//

  }]);
})();
