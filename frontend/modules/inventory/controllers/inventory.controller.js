app.controller( 'InventoryController', function( $scope, EditService, DepleteService, ReplineshService, CategoryService, InventoryService, NewProduct, Categories ) {

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
	$scope.rep_prod_id = '';
	$scope.rep_prod_name = '';
	$scope.rep_prod_qty = 0;
	$scope.rep_prod_remark = '';

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

	$scope.edit = function () {

		EditService.edit( $scope.rep_prod_id, $scope.rep_prod_name );
		$scope.hideModal();
		location.reload( true );
	}

	$scope.showEditModal = function ( elem ) {
		$scope.rep_prod_name = elem.item.p_name;
		$scope.rep_prod_id = elem.item.p_id;

		$('.edit').modal( 'show' );
	}

	$scope.repl = function () {
		
		ReplineshService.repl( $scope.rep_prod_qty, $scope.rep_prod_remark, $scope.rep_prod_id );
		$scope.hideModal();
		location.reload( true );

	}

	$scope.addThisCategory = function () {
		CategoryService.newCategory( $scope.categoryName );
		location.reload( true );
	}

	$scope.hideModal = function () {
		$('.addNewProduct').modal('hide');
		$('.addNewCategory').modal('hide');
		$('.replinesh').modal( 'hide' );
		$('.deplete').modal( 'hide' );
		$('.edit').modal( 'hide' );
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

		$scope.rep_prod_name = elem.item.p_name;
		$scope.rep_prod_id = rep_prod_id;

		$('.replinesh').modal( 'show' );
	}

	$scope.showDepleteModal = function ( elem ) {
		$scope.rep_prod_name = elem.item.p_name;
		$scope.rep_prod_id = elem.item.p_id;

		$('.deplete').modal( 'show' );
	}

	$scope.depl = function () {
		DepleteService.depl( $scope.rep_prod_qty, $scope.rep_prod_remark, $scope.rep_prod_id );
		$scope.hideModal();
		location.reload( true );
	}

	$scope.newCategory = function () {
		$scope.hideModal();
		console.log( 'here now' );
	}
});