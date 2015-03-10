app.config( ['$routeProvider',
			
 function ( $routeProvider ) {
	$routeProvider
		.when( '/Module', {			
			templateUrl: './frontend/modules/module/view-partials/main-view.html',
			controller: 'ModuleController'
		}).when( '/Inventory', {
			templateUrl: './frontend/modules/Inventory/view-partials/main-view.html',
			controller: 'InventoryController'
		}).when( '/Billing', {
			templateUrl: './frontend/modules/Billing/view-partials/main-view.html',
			controller: 'BillingController'
		}).when( '/Billing', {
			templateUrl: './frontend/modules/Billing/view-partials/main-view.html',
			controller: 'BillingController'
		}).when( '/Inventory', {
			templateUrl: './frontend/modules/Inventory/view-partials/main-view.html',
			controller: 'InventoryController'
		}).when( '/Inventory', {
			templateUrl: './frontend/modules/Inventory/view-partials/main-view.html',
			controller: 'InventoryController'
		}).when( '/Billing', {
			templateUrl: './frontend/modules/Billing/view-partials/main-view.html',
			controller: 'BillingController'
		}).when( '/Inventory', {
			templateUrl: './frontend/modules/Inventory/view-partials/main-view.html',
			controller: 'InventoryController'
		}).when( '/Billing', {
			templateUrl: './frontend/modules/Billing/view-partials/main-view.html',
			controller: 'BillingController'
		}).when( '/Billing', {
			templateUrl: './frontend/modules/Billing/view-partials/main-view.html',
			controller: 'BillingController'
		});
}]);