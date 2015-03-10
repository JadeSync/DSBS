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