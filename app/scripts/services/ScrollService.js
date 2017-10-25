'use strict';

(function () {

angular.module('michaelabeln').service('ScrollService', ['$window', '$document',
	function ($window, $document) {

	var self = this;

            // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    self.preventDefault = function (e) {
      e = e || $window.event;
      if (e.preventDefault){
          e.preventDefault();
      }
      e.returnValue = false;  
    };

    self.preventDefaultForScrollKeys = function (e) {
        if (keys[e.keyCode]) {
            self.preventDefault(e);
            return false;
        }
    };

    self.disableScroll = function () {
      if ($window.addEventListener) {// older FF
          $window.addEventListener('DOMMouseScroll', self.preventDefault, false);
          $window.onwheel = self.preventDefault; // modern standard
          $window.onmousewheel = $document.onmousewheel = self.preventDefault; // older browsers, IE
          $window.ontouchmove  = self.preventDefault; // mobile
          $document.onkeydown  = self.preventDefaultForScrollKeys;
        }
    };

    self.enableScroll = function () {
        if ($window.removeEventListener){
            $window.removeEventListener('DOMMouseScroll', self.preventDefault, false);
        }
            $window.onmousewheel = $document.onmousewheel = null; 
            $window.onwheel = null; 
            $window.ontouchmove = null;  
            $document.onkeydown = null;  
        };
  
	}]);

})();