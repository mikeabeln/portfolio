'use strict';

(function () {

angular.module('michaelabeln').controller('DashboardCtrl', ['$rootScope', '$scope', '$http', '$routeParams', '$location', 'UserService', 'userCheck',
  	function ($rootScope, $scope, $http, $routeParams, $location, UserService, userCheck) {

  		$('.viewport').css('height', $(window).height());

      $rootScope.user = true;
      console.log(userCheck);

      $http.get('/dash/' + $routeParams.userId).then(function success(dashboard) {
        $scope.dashboard = dashboard;
        UserService.user.dashboard = dashboard;
        console.log($scope.dashboard, 'dash');
      }, function error(err) {
        $location.path('/');
        console.log(err);
      });

      $scope.cards = [{
               main: true,
               title: 'TextileHaus',
               subtitle: 'Business',
               image: 'images/film.jpg',
               supportingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }, {
               main: true,
               title: 'Junket',
               subtitle: 'Second card subtitle',
               image: 'images/film.jpg',
               supportingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
              }, {
               main: true,
               title: 'Krackle Headlamps',
               subtitle: 'Second card subtitle',
               image: 'images/film.jpg',
               supportingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem sit amet, consectetur adipisicing uncididunt ut labore et dolore magna aliqua.'
              }, {
               main: true,
               title: 'Krackle Headlamps',
               subtitle: 'Second card subtitle',
               image: 'images/film.jpg',
               supportingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem sit amet, consectetur adipisicing uncididunt ut labore et dolore magna aliqua.'
              }, {
               main: true,
               title: 'Krackle Headlamps',
               subtitle: 'Second card subtitle',
               image: 'images/film.jpg',
               supportingText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. Lorem sit amet, consectetur adipisicing uncididunt ut labore et dolore magna aliqua.'
              }
               ];



  }]);

})();

