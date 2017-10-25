'use strict';

(function () {

angular.module('michaelabeln').controller('AboutCtrl', ['$scope', 'ResumeData', 'ImagesLoaded',
  	function ($scope, ResumeData, ImagesLoaded) {

  		$scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;
  		$scope.cvData = ResumeData;

	    // $window.mdc.autoInit(document, function () {});


  }]);

})();

