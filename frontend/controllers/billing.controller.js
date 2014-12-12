app.controller('BillingController', function($scope) {

	$scope.cart = [];
	$scope.product_id = '';
	$scope.qty = 0;
	$scope.total_bill = 0;
	$scope.hiddenOrNot = 'hidden';
	$scope.selected_tr = '';
	$scope.selectedRow = null;
	$scope.activeEditID = null;
	$scope.product_id_modal = '';
	$scope.qty_modal = null;

	$scope.addToCart = function() {

		var existing_flag = false;
		var index = 0;

		$scope.selectedRow = null;

		document.getElementById('edit-item').setAttribute('hidden', null);
		document.getElementById('delete-item').setAttribute('hidden', null);

		for (var i = $scope.cart.length - 1; i >= 0; i--) {
			if( $scope.cart[i].item === $scope.product_id ) {
				existing_flag = true;
				index = i;
				break;
			}
			else { existing_flag = false; }
		};

		if( existing_flag ) {
			$scope.updateCart(index);
		}		
		else {
			$scope.createNewCartContent();
		}
	}

	$scope.updateTotalBill = function () {
		$scope.total_bill = 0;
		for (var i = $scope.cart.length - 1; i >= 0; i--) {
			$scope.total_bill += $scope.cart[i].qty * $scope.cart[i].unit_price;
		};

		if( $scope.total_bill > 0 ) {
			$scope.hiddenOrNot = '';
		}
	}

	$scope.createNewCartContent = function() {
		console.log('New Cart Item');
		$scope.cart.push( {item: $scope.product_id, qty: $scope.qty, unit_price: 10} );
		
		$scope.updateTotalBill();

		console.log($scope.cart);
	}

	$scope.updateCart = function( index ) {
		$scope.cart[index].qty += $scope.qty;
		$scope.total_bill = 0;
		
		$scope.updateTotalBill();
	}

	$scope.setSelected = function( row, elem ) {
		$scope.selectedRow = row;
		$scope.activeEditID = elem.item.item;
		$scope.showEditActions();
	}

	$scope.showEditActions = function () {
		if( $scope.selectedRow == null ) {
			console.log('not');
			return 0;
		}
		else {
			if( $scope.selectedRow != null ) {
				document.getElementById('edit-item').removeAttribute('hidden');
				document.getElementById('delete-item').removeAttribute('hidden');
			}
		}
	}

	$scope.hideModal = function () {
		console.log('Modal Hide');
		$('.delete-modal').modal( 'hide' );
	}

	$scope.validateAndEdit = function () {

		if( $scope.product_id_modal == "" || $scope.qty_modal == "" || $scope.qty_modal == null ) {
			console.log("Not Allowed");
		}

		else {
			console.log($scope.product_id_modal);
			for (var i = $scope.cart.length - 1; i >= 0; i--) {
				if( $scope.cart[i].item === $scope.product_id_modal ) {
					$scope.cart[i].qty = $scope.qty_modal;
					break;
				}
			};

		$('.edit-modal').modal( 'hide' ); 
		$scope.updateTotalBill();
		}
	}

	$scope.deleteEntry = function () {
		for (var i = $scope.cart.length - 1; i >= 0; i--) {
			if( $scope.cart[i].item === $scope.activeEditID ) {
				$scope.cart.splice( i, 1 );
				break;
			}
		};

		$('.delete-modal').modal('hide');
		$scope.updateTotalBill();
	}
});