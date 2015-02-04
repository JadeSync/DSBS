app.factory( 'LoadProduct', function( $http ) {

	return {
		getAll: function() {
			return $http({
				method: 'GET',
				url: 'backend/inventory/getProducts'
			}).then( function ( result ) {
				console.log("INFO: Products response received");
				// console.log(result.data);
				return result.data;
			}, function ( result ) {
				console.log('failure');
			});
		}
	};

});

app.factory( 'Checkout', function( $http ) {

	return {
		process: function( cart, creditflag, dueDate, cr_id ) {
			return $http({
				method: 'POST',
				url: 'backend/billing/checkout',
				data: { data: cart, creditflag: creditflag, dueDate: dueDate, cr_id: cr_id }
			}).then ( function ( result ) {
				console.log( result.data );
			}, function () {
				console.log('failure');
			});
		}
	};

});

app.factory( 'CreditorInfo', function( $http ) {

	return {
		get: function() {
			return $http({
				method: 'POST',
				url: 'backend/creditor/getAll'
			}).then ( function ( result ) {
				console.log("INFO: creditors response received");
				return result.data;
			}, function () {
				console.log('failure');
			});
		}
	};

});

app.factory( 'CreditorAdd', function( $http ) {

	return {
		process: function( name, address, contact, email ) {
			return $http({
				method: 'POST',
				url: 'backend/creditor/add',
				data: { name: name, address: address, contact: contact, email: email }
			}).then ( function ( result ) {
				console.log( result.data );

			}, function () {
				console.log('failure');
			});
		}
	};

});