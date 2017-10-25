'use strict';

(function () {

angular
  .module('michaelabeln', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'ngMaterial',
    'masonry',
    'angular-images-loaded',
    'duScroll'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryPalette('amber')
    .accentPalette('light-blue');
    // .dark();

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })



      .when('/design', {
        templateUrl: 'views/design.html',
        controller: 'DesignCtrl'
      })
      .when('/d/:setId', {
        templateUrl: 'views/design-set.html',
        controller: 'DesignSetCtrl'
      })



      .when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyCtrl'
      })
      .when('/p/:setId', {
        templateUrl: 'views/photography-set.html',
        controller: 'PhotoSetCtrl'
      })

      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })

      .otherwise({
        redirectTo: '/'
    });

  });

})();

