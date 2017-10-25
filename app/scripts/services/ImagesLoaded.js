'use strict';

(function () {

angular.module('michaelabeln').service('ImagesLoaded', ['$rootScope', '$location',
	function ($rootScope, $location) {

		var self = this;

		self.imagesLoadedEvents = {

	        progress: function(instance, image) {
	        	if (image.isLoaded && $location.$$url === '/about') {
	        		$(image.img.parentElement).find('.loading-indicator-middle').animate({'opacity': 0}, 250, 'linear', function() {$(this).addClass('no-display');});
	        		$('.about-image').animate({'opacity': 1}, 250, 'linear');
	        	} else if (image.isLoaded) {
	        		$(image.img.parentElement).find('.loading-indicator').animate({'background-color': 'rgba(255,255,255,0)'}, 250, 'linear', function() {$(this).addClass('no-display');});
	        		$rootScope.$broadcast('masonry.layout');
	        	}
	        },

	        // always: function(instance) {
	        // 	console.log(instance, 'always');
	        // },

	        // done: function(instance) {
	        // 	console.log(instance, 'done');
	        // },

	        fail: function(instance) {
	            console.log('Images are failing to load on ' + instance);
	        }

	    };
  
	}]);

})();