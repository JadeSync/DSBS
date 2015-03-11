services.factory( 'InventoryService', function ($http) {
	return {
		getProducts: function() {
			return $http({
				method: 'GET',
				url: 'backend/inventory/getProducts'
			}).then( function ( result ) {
				console.log("INFO: Inventory response received");
				return result.data;
			}, function ( result ) {
				console.log('failure');
			});
		}
	};
});

services.factory( 'NewProduct', function ($http) {
	return {
		newProduct: function( cart ) {
			return $http({
				method: 'POST',
				url: 'backend/inventory/newProduct',
				data: cart
			}).then( function ( result ) {
				return result.data;
			}, function ( err ) {
				console.log(err);
			});
		}
	}
});

services.factory( 'CategoryService', function ($http) {
	return {
		newCategory: function ( categoryName ) {
			return $http({
				method: 'POST',
				url: 'backend/inventory/newCategory',
				data: categoryName
			}).then( function ( result ) {
				console.log( "Success - " + result.data );
			}, function ( err ) {
				console.log( err )
			});
		}
	}
});

services.factory( 'Categories', function ($http) {
	return {
		getAll: function () {
			return $http({
				method: 'GET',
				url: 'backend/inventory/getCategories'
			}).then( function ( result ) {
				return result.data;
			}, function ( err ) {
				console.log( err );
			});
		}
	}
});

services.factory( 'ReplineshService', function ( $http ) {
	return {
		repl: function ( qty, remark, id ) {
			return $http({
				method: 'POST',
				url: 'backend/inventory/repl',
				data: { qty: qty, remark: remark, id: id }
			}).then( function ( result ) {
				console.log( result.data );
			}, function ( err ) {
				console.log( err ); 
			});
		}
	}
});

services.factory ( 'EditService', function ( $http ) {
	return {
		edit: function ( id, name ) {
			return $http({
				method: 'POST',
				url: 'backend/inventory/edit',
				data: { id: id, name: name }
			}).then( function ( result ) {
				console.log( result.data );
			}, function ( err ) {
				console.log( err );
			});
		}
	}
});

services.factory( 'DepleteService', function ( $http ) {
	return {
		depl: function ( qty, remark, id ) {
			return $http({
				method: 'POST',
				url: 'backend/inventory/depl',
				data: { qty: qty, remark: remark, id: id }
			}).then( function ( result ) {
				console.log( result.data );
			}, function ( err ) {
				console.log( err );
			});
		}
	}
});