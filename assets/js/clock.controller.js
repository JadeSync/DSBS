app.controller( 'ClockController', function ($scope) {
	var updateClock = function () {
		$scope.bigClock = new Date();
		$scope.clock = $scope.bigClock.getHours() + ':' +
						$scope.bigClock.getMinutes() + ':' +
						$scope.bigClock.getSeconds();
	};

	setInterval( function() {
		$scope.$apply( updateClock );
	}, 1000 );
});	