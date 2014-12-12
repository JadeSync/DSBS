app.controller( 'ModuleController', function ($scope, ModuleService) {

	console.log( 'INFO: ModuleController loaded' );

	$scope.modules = [];

	// $scope.modules = ModuleService.getModules();

	var myDataPromise = ModuleService.modules();

	myDataPromise.then( function (result) {
		$scope.modules = result;
		console.log( $scope.modules )
	});

});