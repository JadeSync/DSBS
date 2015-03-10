app.controller( 'InventoryController', function( $scope, CategoryService, InventoryService, NewProduct, Categories ) {

	// console.log(InventoryService.test());

	$scope.warehouse = [];
	$scope.cat = null;
	$scope.category = "Select Category";
	$scope.cart = {
		p_name: 'Enter Product Name',
		p_cat: 'Select Category',
		p_qty: 'Enter Product Quantity',
		p_unitCost: 'Enter Product Cost',
		p_selling: 'Enter Selling Price',
		p_user: 'U1'
	};

	$scope.categoryName = '';

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

	$scope.addThisCategory = function () {
		CategoryService.newCategory( $scope.categoryName );
		location.reload( true );
	}

	$scope.hideModal = function () {
		$('.addNewProduct').modal('hide');
		$('.addNewCategory').modal('hide');
	}

	$scope.hideModalAndShow = function () {
		$('.addNewCategory').modal('hide');
		$('.addNewProduct').modal('show');
	}

	$scope.newProduct = function () {
		if( NewProduct.newProduct( $scope.cart ) ) {
			$scope.hideModal();
			location.reload( true );
			
		}

		else {
			alert('not done');
		}
	}

	$scope.showReplineshModal = function( elem ) {
		var rep_prod_id = elem.item.p_id;
		console.log( rep_prod_id );
	}

	$scope.newCategory = function () {
		$scope.hideModal();
		console.log( 'here now' );
	}
});