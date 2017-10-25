'use strict';

(function () {

angular.module('michaelabeln').controller('NavCtrl', ['$rootScope', '$window', '$document', '$scope', '$location', '$routeParams', 'ScrollService', 'WorkData', 'MobileCheck',
  	function ($rootScope, $window, $document, $scope, $location, $routeParams, ScrollService, WorkData, MobileCheck) {

      MobileCheck.checkMobile();

      // UN-COMMENT BELOW WHEN ANALYTICS SET UP

      // if($window.performance){
      //   var timeSinceLoad = Math.round($window.performance.now());
      //   $window.ga('send', 'timing', 'dependencies', 'load', timeSinceLoad); 
      // }

      //bind data to nav controller scope
      $scope.work = WorkData;

      //create an empty array for history use
      $rootScope.history = [];

      //necessary to determine how much to show per page
      $rootScope.projectsPerPage = 9;
      $rootScope.totalPages = 2;
      $rootScope.page = 1;

      //initial filter to use
      $rootScope.filter = 'All';

      //bind app url to nav controller scope
      $scope.location = $location.$$url;

      // not sure if this is ever referenced
      $rootScope.allProjects = false;

      $scope.links = [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Design',
          url: '/design',
          firstLink: true
        },
        { 
          title: 'Photography',
          url: '/photography'
        },
        { 
          title: 'About',
          url: '/about'
        },
        { 
          title: 'Contact',
          url: '/contact'
        }

      ];

      $scope.filters = [
        {
          filter: 'Branding'
        },
        {
          filter: 'Content'
        },
        {
          filter: 'Digital'
        },
        {
          filter: 'Illustration'
        },
        {
          filter: 'Motion'
        },
        {
          filter: 'Print'
        },
        {
          filter: 'Social'
        },
        {
          filter: 'UI/UX'
        },
        {
          filter: 'Video'
        },
        {
          filter: 'All',
          active: true
        }
      ];


      $scope.activateLink = function() {
        // set active property of object for overlay and underline
        angular.forEach($scope.links, function(link) {
          if ($location.$$path === link.url) {
            link.active = true;
          }
        });
        // adds underline to nav-link on project pages
        if ($location.$$path === '/d/' + $routeParams.setId) {
            angular.forEach($scope.links, function(link) {
              if (link.title === 'Design') {
                link.active = true;
              }
            });
        } else if ($location.$$path === '/p/' + $routeParams.setId){
          angular.forEach($scope.links, function(link) {
              if (link.title === 'Photography') {
                link.active = true;
              }
          });
        }
      }; $scope.activateLink();


      // functions to run when route changes + listener for event
      $rootScope.$on('$routeChangeSuccess', function() {
        //this is set to check ng-if with sidenav-icon
        $rootScope.page = 1;
        $scope.location = $location.$$url;
        $scope.deactivateMenu();
        $scope.activateLink();

        $rootScope.$broadcast('masonry.layout');

        // UN-COMMENT BELOW WHEN ANALYTICS SET UP

        /* --- Analytics page updater --- */
        // $window.ga('set', 'page', $location.url());
        // $window.ga('send', 'pageview');

        //make sure it doesnt push project pages into history
        if ($location.$$url === '/' || $location.$$url === '/design' || $location.$$url === '/photography') {
          $rootScope.history.push($location.$$url);
        }

      });


      // animate in side icons
      $rootScope.activateSideIcons = function() {
        $('.side-nav-icons').animate({'margin-top': '0px'}, 150, 'linear');
        $('.side-nav-icon').each(function() {
          $(this).animate({'padding': '10px 0px'}, 450, 'swing');
        });
        $('.side-nav-icons').toggleClass('icons-active');
      };

      // animate out side icons
      $rootScope.deActivateSideIcons = function() {
        $('.side-nav-icons').animate({'margin-top': '35px'}, 250, 'linear');
        $('.side-nav-icon').each(function() {
          $(this).animate({'padding': '20px 0px'}, 450, 'swing');
        });
        $('.side-nav-icons').toggleClass('icons-active');
      };

      //bind icon activations to scroll event
      angular.element($window).bind('mousewheel', function() {
        if($window.pageYOffset >= $('.page-content').offset().top && !$('.side-nav-icons').hasClass('icons-active')){
          $scope.activateSideIcons();
        } else if ($window.pageYOffset < $('.page-content').offset().top && $('.side-nav-icons').hasClass('icons-active')) {
          $scope.deActivateSideIcons();
        }
      });


      //animate scroll to top
      $rootScope.scrollToTop = function() {
        $document.scrollTopAnimated(0).then(function() {
          $rootScope.deActivateSideIcons();
        });
      };



      $scope.back = function () {
          $rootScope.prevUrl = $rootScope.history.length >= 1 ? $rootScope.history.splice(-1)[0] : '/';
          //return to previous pages
          if ($location.$$url === $rootScope.prevUrl){
            $location.url('/');
            $rootScope.scrollToTop();
          } else if ($location.$$url === '/p/' + $routeParams.setId) {
            $location.path('/photography');
            $rootScope.scrollToTop();
          } else if ($location.$$url === '/d/' + $routeParams.setId) {
            $location.path('/design');
            $rootScope.scrollToTop();
          }
          else {
            // having a problem here after looking through fancybox images and then hitting back
            $location.path($rootScope.prevUrl);
            $rootScope.scrollToTop();
          }
      };


      //counter animation on filter item hover
      $scope.filterItemEnter = function($event) {
        $($event.currentTarget).find('.filter-count').css({'opacity':1, 'margin-top':'0%'});
      };

      $scope.filterItemLeave = function($event) {
        $($event.currentTarget).find('.filter-count').css({'opacity':0, 'margin-top':'1%'});
      };


      // check if mobile device or not locked is not necessary anymore
      if ($rootScope.thisIsMobile) {
        $rootScope.locked = false;
      } else {
        $rootScope.locked = true;
      }


      // count through projects and add to count for each of meta type
      var filterCount = function() {
        angular.forEach($scope.filters, function(filter) {
          filter.count = 0;
        });
        angular.forEach(WorkData.projects, function(project){
          angular.forEach($scope.filters, function(filters){
            if (filters.filter === 'All'){
              filters.count ++;
            }
          });
          angular.forEach(project.meta, function(meta){
              angular.forEach($scope.filters, function(filter){
                if (filter.filter === meta){
                  filter.count ++;
                }
              });
            });
        });
      }; filterCount();

      // function to reset active value on route change
      $scope.deactivateMenu = function() {
        angular.forEach($scope.links, function(value){
          value.active = false;
        });
      };

      // function to remove filter value on filter change
      $scope.deactivate = function() {
        angular.forEach($scope.filters, function(value){
          value.active = false;
        });
      };

      //function to set a new filter on filter change
      $scope.setFilter = function($event) {
        $rootScope.filter = $($event.target).text();
        $rootScope.$broadcast('masonry.layout');
      };

      // function to reset overlay entirely
      $scope.resetOverlay = function() {
        $rootScope.filter = 'All';
        $('.site-overlay').removeClass('open');
        $('.viewport').animate({'opacity': 1}, 250, 'linear');
        $scope.deactivate();
        $scope.deactivateMenu();
        angular.forEach($scope.filters, function(value){
          if (value.filter === 'All'){
            value.active = true;
          }
        });
        $scope.links[0].active = true;
        ScrollService.enableScroll();
        $scope.filterOverlay = false;
        $scope.menuOverlay = false;
      };



      // function to animate and enable filter while disabling scroll
      $scope.filterOverlay = false;
      $scope.menuOverlay = false;
      $scope.overlay = function($event) {

        //if overlay is open, and menu is target
        if ($('.site-overlay').hasClass('open') && $($event.currentTarget).hasClass('nav-menu')){
          if ($scope.filterOverlay){
            $scope.filterOverlay = false;
          } else {
            $('.site-overlay').removeClass('open');
            $('.viewport').animate({'opacity': 1}, 250, 'linear');
            ScrollService.enableScroll();
          }

          //else if overlay is open, and filter is target
        } else if ($('.site-overlay').hasClass('open') && $($event.currentTarget).hasClass('nav-filter')) {
          if ($scope.menuOverlay){
            $scope.menuOverlay = false;
          } else {
            $('.site-overlay').removeClass('open');
            $('.viewport').animate({'opacity': 1}, 250, 'linear');
            ScrollService.enableScroll();
          }

          //else if clicking overlay to close it
        } else if ($($event.target).hasClass('site-overlay') || $($event.target).hasClass('overlay-list') || $($event.target).hasClass('overlay-item-text')) {
          $('.site-overlay').removeClass('open');
          $('.viewport').animate({'opacity': 1}, 250, 'linear');
          ScrollService.enableScroll();
          $scope.filterOverlay = false;
          $scope.menuOverlay = false;

        } else{
          $('.site-overlay').addClass('open');
          $('.viewport').animate({'opacity': 0.25}, 250, 'linear');
          if ($rootScope.thisIsMobile === false){
            ScrollService.disableScroll();
          }
        }
      };

  }]);

})();