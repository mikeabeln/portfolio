'use strict';

(function () {

angular.module('michaelabeln').controller('MainCtrl', ['$scope', 'WorkData', '$rootScope', '$document', 'ImagesLoaded',
  	function ($scope, WorkData, $rootScope, $document, ImagesLoaded) {

      $scope.nextPage = true;
      $scope.prevPage = false;

      $scope.imagesLoadedEvents = ImagesLoaded.imagesLoadedEvents;

      $scope.advancePage = function(){

        if ($rootScope.page < $rootScope.totalPages){

          $rootScope.page = $rootScope.page + 1;
          $scope.prevPage = true;

          if ($rootScope.page === $rootScope.totalPages) {
            $scope.nextPage = false;
          }

          $document.scrollTopAnimated(0).then(function() {
            $rootScope.deActivateSideIcons();
          });

          $rootScope.$broadcast('masonry.layout');

        }
      };

      $scope.reversePage = function(){

        if ($rootScope.page > 0){

          $rootScope.page = $rootScope.page - 1;
          $scope.nextPage = true;

          if ($rootScope.page === 1){
            $scope.prevPage = false;
          }

          $document.scrollTopAnimated(0).then(function() {
            $rootScope.deActivateSideIcons();
          });

          $rootScope.$broadcast('masonry.layout');

        }
      };

      $scope.tileEnter = function($event) {
        $($event.currentTarget).find('img').animate({'opacity': 0}, 150, 'linear');
        $($event.currentTarget).find('.entry-caption-text').animate({'top': '40%', 'opacity': 1}, 200, 'swing');
      };

      $scope.tileLeave = function($event) {
        $($event.currentTarget).find('img').animate({'opacity': 1}, 150, 'linear');
        $($event.currentTarget).find('.entry-caption-text').animate({'top': '47%', 'opacity': 0}, 200, 'swing');
      };

      var projects = WorkData.projects;
      $scope.projects = projects;
      $scope.work = WorkData;

  }]);

})();
