app.controller( 'InventoryController', function($scope) {

	$scope.warehouse = [];

	//	Test Data

	$scope.warehouse.push({
		item: 'AL - Alabama',
		qty: 200,
		unit_price: 10,
		unit_cost: 8,
	},
	{
		item: 'WY - Wyoming',
		qty: 100,
		unit_price: 10,
		unit_cost: 8
	},
	{
		item: 'TX - Texas',
		qty: 400,
		unit_price: 12,
		unit_cost: 7
	});



});