'use strict';

(function () {

	angular.module('michaelabeln').filter('projectsFilter', ['$rootScope', '$location', function ($rootScope, $location) {

		return function(input) {
			if ($rootScope.filter === 'All') {

				var allOutput = [];

				// filter first page items
				if ($location.$$url === '/' && $rootScope.page === 1) {
					angular.forEach(input, function(project) {
						if (project.id < $rootScope.projectsPerPage ){
							allOutput.push(project);
						}
					});
				// filter main '/' but NOT first page items
				} else if ($location.$$url === '/') {
					var itemsToAddStart = ($rootScope.page * $rootScope.projectsPerPage) - $rootScope.projectsPerPage;
					var itemsToAddEnd = $rootScope.page * $rootScope.projectsPerPage;
					angular.forEach(input, function(project) {
						if (project.id >= itemsToAddStart && project.id < itemsToAddEnd){
							allOutput.push(project);
						}
					});
				} else {
					angular.forEach(input, function(project) {
						allOutput.push(project);
					});
				}

				return allOutput;
			} else {
				var output = [];
				angular.forEach(input, function(project){
					// console.log(project);
					angular.forEach(project.meta, function(type){
						if($rootScope.filter === type){
							output.push(project);
						}
					});
				});

				// console.log(output);
				return output;
			}
		};

	}]);

})();
