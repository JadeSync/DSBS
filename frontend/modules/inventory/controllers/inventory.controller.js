app.controller( 'InventoryController', function( $scope, InventoryService, NewProduct, Categories ) {

	// console.log(InventoryService.test());

	$scope.warehouse = [];
	$scope.cat = null;
	$scope.cart = {
		p_name: '',
		p_qty: 0,
		p_unitCost: 0,
		p_selling: 0,
		p_user: 'U1'
	};

	var categories = Categories.getAll();

	categories.then( function ( result ) {
		$scope.cat = result;
		console.log($scope.cat);
	});


	var testData = InventoryService.getProducts();

	testData.then( function (result) {
		$scope.warehouse = result;
		console.log($scope.warehouse);
	});

	$scope.hideModal = function () {
		$('.addNewProduct').modal('hide');
	}

	$scope.newProduct = function () {
		NewProduct.newProduct( $scope.cart );
	}
});