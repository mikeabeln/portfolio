'use strict';

(function () {

angular.module('michaelabeln').controller('DesignCtrl', ['$scope', '$location', 'WorkData', 'ImagesLoaded',
  function ($scope, $location, WorkData, ImagesLoaded) {

    $scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;

		$scope.backLink = function () {
      $location.path('/');
    };

    $scope.tileEnter = function($event) {
        $($event.currentTarget).find('img').animate({'opacity': 0}, 150, 'linear');
        $($event.currentTarget).find('.entry-caption-text').animate({'top': '40%', 'opacity': 1}, 200, 'swing');
    };

    $scope.tileLeave = function($event) {
        $($event.currentTarget).find('img').animate({'opacity': 1}, 150, 'linear');
        $($event.currentTarget).find('.entry-caption-text').animate({'top': '47%', 'opacity': 0}, 200, 'swing');
    };

    $scope.projects = WorkData.projects;

  }]);

})();

