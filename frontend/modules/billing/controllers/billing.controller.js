app.controller('BillingController', function($scope, LoadProduct, Checkout, CreditorInfo, CreditorAdd) {

	$scope.cart = [];
	$scope.product_id = '';
	$scope.creditor_id = '';
	$scope.product_name = '';
	$scope.qty = 0;
	$scope.total_bill = 0;
	$scope.hiddenOrNot = 'hidden';
	$scope.selected_tr = '';
	$scope.selectedRow = null;
	$scope.activeEditID = null;
	$scope.product_id_modal = '';
	$scope.qty_modal = null;
	$scope.allProducts = null;
	$scope.clicked = false;
	$scope.creditors = null;
	$scope.creditorName = '';
	$scope.address = '';
	$scope.contact = '';
	$scope.email = '';
	$scope.dueDate = new Date();
	$scope.notification = [];
	$scope.notifcounter = 'No notifications yet'

	var warehouse = LoadProduct.getAll();

	var creditors = CreditorInfo.get();

	warehouse.then( function ( result ) {
		$scope.allProducts = result;
		console.log($scope.allProducts);
	});

	creditors.then( function ( result ) {
		$scope.creditors = result;
		console.log($scope.creditors);
	});

	$scope.hideModalAndShowCreditPurchaseModal = function () {
		$('.new-creditor-modal').modal( 'hide' );
		$('.credit-purchase-modal').modal( 'show' );
	}

	$scope.testone = function() {

		console.log('test pass');
		$scope.selectedRow = null;
		$scope.activeEditID = null;
	}

	$scope.addToCart = function() {

		// valdation ko kaam baki cha. ani printer ko

		for (var i = $scope.allProducts.length - 1; i >= 0; i--) {

			if( $scope.allProducts[i].p_id == $scope.product_id.split(' ')[0] ) {
				if( $scope.allProducts[i].p_count < $scope.qty ) {
					console.log( 'Only '+ $scope.allProducts[i].p_count +' units in stock.'  );
					$scope.notification.push( 'Only '+ $scope.allProducts[i].p_count +' units in stock.' );

					if( typeof( $scope.notifcounter ) == 'string' ) {
						$scope.notifcounter = 1;
					}

					else {
						$scope.notifcounter += 1;
					}

					return false;
				}
			}

		};

		var existing_flag = false;
		var index = 0;

		$scope.selectedRow = null;

		document.getElementById('edit-item').setAttribute('hidden', null);
		document.getElementById('delete-item').setAttribute('hidden', null);

		var product_details = $scope.product_id.split(' ');
		var product_name = '';

		for (var i = 1; i < product_details.length; i++ ) {
			product_name = product_name + " " + product_details[i];
		};

		if ( $scope.cart.length > 0 ) {
			for (var i = $scope.cart.length - 1; i >= 0; i--) {
				if( $scope.cart[i].item === product_details[0] ) {
					existing_flag = true;
					index = i;
					break;
				}
				else { existing_flag = false; }
			};
		}

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
		var product_details = $scope.product_id.split(' ');
		var product_name = '';

		for (var i = 1; i < product_details.length; i++ ) {
			product_name = product_name + " " + product_details[i];
		};

		$scope.cart.push( {item: product_details[0], name: product_name, qty: $scope.qty, unit_price: 10} );
		
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
		event.stopPropagation();
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

	$scope.checkout = function ( creditflag, dueDate ) {

		// console.log( $('#creditor_id').val() );

		Checkout.process( $scope.cart, creditflag, $scope.dueDate, $('#creditor_id').val() );

		$scope.cart = [];
		$scope.product_id = '';
		$scope.creditor_id = '';
		$scope.product_name = '';
		$scope.qty = 0;
		$scope.total_bill = 0;
		$scope.hiddenOrNot = 'hidden';
		$scope.selected_tr = '';

		console.log( $scope.allProducts );

		$scope.hideModal();



	}

	$scope.newCreditor = function () {
		$('.credit-purchase-modal').modal( 'hide' );
		$('.new-creditor-modal').modal( 'show' );
	}

	$scope.addNewCreditor = function () {
		CreditorAdd.process( $scope.creditorName, $scope.address, $scope.contact, $scope.email );
	}

	$scope.hideModal = function () {
		console.log('Modal Hide');
		$('.delete-modal').modal( 'hide' );
		$('.edit-modal').modal( 'hide' );
		$('.credit-purchase-modal').modal( 'hide' );
		$('.new-creditor-modal').modal( 'hide' );
	}

	$scope.validateAndEdit = function () {

		if( $scope.product_id_modal == "" || $scope.qty_modal == "" || $scope.qty_modal == null ) {
			console.log("Not Allowed");
		}

		else {
			console.log($scope.product_id_modal);

			var product_details = $scope.product_id_modal.split(' ');
			var product_name = '';

			for (var i = 1; i < product_details.length; i++ ) {
				product_name = product_name + " " + product_details[i];
			};

			for (var i = $scope.cart.length - 1; i >= 0; i--) {
				if( $scope.cart[i].item === product_details[0] ) {
					console.log('yo');
					$scope.cart[i].qty = $scope.qty_modal;
					break;
				}
			};

		$('.edit-modal').modal( 'hide' ); 
		$scope.updateTotalBill();
		}
	}

	$scope.deleteEntry = function ( elem ) {
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