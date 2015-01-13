(function(){
  'use strict';

  angular.module('bandmade')
  .factory('User', ['$http', function($http){

    function sendMail(email){
      return $http.post('/sendMail', email);
    }

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function checkSession(){
      return $http.get('/checkSession');
    }

    function updateProfile(user){
      return $http.put('/profile', user);
    }

    function displayProfile(userId){
      return $http.get('/profile/'+userId);
    }

    return {register:register, login:login, logout:logout, sendMail:sendMail, checkSession: checkSession, updateProfile: updateProfile, displayProfile: displayProfile};
  }]);
})();

