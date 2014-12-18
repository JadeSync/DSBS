app.config( ['$routeProvider', function ( $routeProvider ) {
	$routeProvider
		.when( '/Module', {
			templateUrl: './frontend/modules/module/view-partials/main-view.html',
			controller: 'ModuleController'
		});
}]);