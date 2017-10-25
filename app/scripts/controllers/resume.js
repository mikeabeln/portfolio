'use strict';

(function () {

angular.module('michaelabeln').controller('ResumeCtrl', ['$scope', 'ResumeData',
  	function ($scope, ResumeData) {

  		// console.log($scope);

  		$scope.cvData = ResumeData;

	    // $window.mdc.autoInit(document, function () {});


  }]);

})();

