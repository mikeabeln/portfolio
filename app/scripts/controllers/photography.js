'use strict';

(function () {

angular.module('michaelabeln').controller('PhotographyCtrl', ['$scope', 'PhotographyData', 'ImagesLoaded',
  	function ($scope, PhotographyData, ImagesLoaded) {

      $scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;

      $scope.tileEnter = function($event) {
          $($event.currentTarget).find('img').animate({'opacity': 0.2}, 150, 'linear');
          $($event.currentTarget).find('.entry-caption-text').animate({'top': '40%', 'opacity': 1}, 200, 'swing');
      };

      $scope.tileLeave = function($event) {
          $($event.currentTarget).find('img').animate({'opacity': 1}, 150, 'linear');
          $($event.currentTarget).find('.entry-caption-text').animate({'top': '47%', 'opacity': 0}, 200, 'swing');
      };

      $scope.projects = PhotographyData.projects;

      for(var i = 0; i < $scope.projects.length; i++) {
        $scope.projects[i].link = i;
      }


  }]);

})();

