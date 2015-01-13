(function(){
  'use strict';

  angular.module('bandmade', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/contact', {templateUrl:'/views/contact/contact.html', controller:'ContactCtrl'})
    .when('/faq', {templateUrl:'/views/faq/faq.html', controller:'FaqCtrl'})
    .when('/about', {templateUrl:'/views/about/about.html', controller:'AboutCtrl'})
    .when('/profile',  {templateUrl:'/views/profile/profile.html',   controller:'ProfileCtrl'})
    .when('/browse',  {templateUrl:'/views/browse/browse.html',   controller:'BrowseCtrl'})
    .when('/view-profile/:userId',  {templateUrl:'/views/view-profile/view-profile.html',   controller:'View-profileCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'bandmade', storeName:'cache', version:1.0});
  }]);
})();

