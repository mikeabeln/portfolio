'use strict';

(function () {

angular.module('michaelabeln').controller('DesignSetCtrl', ['$scope', '$rootScope', '$routeParams', 'WorkData', 'ImagesLoaded',
  	function ($scope, $rootScope, $routeParams, WorkData, ImagesLoaded) {
  		
  		$scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;
        $rootScope.scrollToTop();
  		$scope.project = WorkData.projects[$routeParams.setId];

  }]);

})();

