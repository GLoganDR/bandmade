(function(){
  'use strict';

  angular.module('bandmade')
  .factory('Browse', ['$http', function($http){

    function all(){
      return $http.get('/browse');
    }

    return {all:all};
  }]);
})();
