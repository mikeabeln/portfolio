'use strict';

(function () {

angular.module('michaelabeln').controller('ContactCtrl', ['$scope', '$http',
  	function ($scope, $http) {

  		$scope.header = 'Want to talk?';
  		$scope.email = {
  		};

  		$scope.submit = function ($event) {
  			if(!$scope.email.name || !$scope.email.address || !$scope.email.content){
  				console.log($scope.email, 'something wrong on form');
  			} else {
  				$http.post('https://formspree.io/your.email@email.com', angular.toJson($scope.email)).then(function success (){
  					$event.preventDefault();
  					$('.first-input').blur();
  					$scope.email = {};
  					$scope.contactForm.$setPristine();
    				$scope.contactForm.$setUntouched();
    				$scope.header = 'Thanks! I&apos;ll get back to you soon.';
  				}, function error (res) {
  					console.log(res, 'send attempt failed');
  				});
  			}
  		};

  }]);

})();

