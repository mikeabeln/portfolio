'use strict';

(function () {

angular.module('michaelabeln').service('MobileCheck', ['$rootScope',
	function ($rootScope) {

		var self = this;

		$rootScope.thisIsMobile = false;

		self.checkMobile = function() {

			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	            $rootScope.thisIsMobile = true;
	            return $rootScope.thisIsMobile;
	        } else {
	        	return $rootScope.thisIsMobile;
	        }

		};
  
	}]);

})();