'use strict';

(function () {

angular.module('michaelabeln').controller('PhotoSetCtrl', ['$scope', '$rootScope', '$routeParams', 'PhotographyData', 'ImagesLoaded',
  	function ($scope, $rootScope, $routeParams, PhotographyData, ImagesLoaded) {

  		$scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;
      	$rootScope.scrollToTop();
  	    $scope.project = PhotographyData.projects[$routeParams.setId];

  }]);

})();

