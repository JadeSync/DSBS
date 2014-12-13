app.controller( 'ModuleController', function ($scope, ModuleService, ModuleDirService) {

	console.log( 'INFO: ModuleController loaded' );

	$scope.modules = [];
	$scope.moduleDirs = [];
	$scope.moduleDirsFormatted = [];

	// $scope.modules = ModuleService.getModules();

	var moduleDataPromise = ModuleService.modules();

	moduleDataPromise.then( function (result) {
		$scope.modules = result;
		console.log( $scope.modules )
	});

	var moduleDirDataPromise = ModuleDirService.moduleDirs();

	moduleDirDataPromise.then( function (result) {
		$scope.moduleDirs = result;
		
	})

});