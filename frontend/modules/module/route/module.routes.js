app.config( ['$routeProvider', function ( $routeProvider ) {
	$routeProvider
		.when( '/good', {
			templateUrl: './frontend/modules/module/view-partials/main-view.html',
			controller: 'ModuleController'
		});
}]);