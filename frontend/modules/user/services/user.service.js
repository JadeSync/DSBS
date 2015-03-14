services.factory( 'UserService', function ( $http ) {
	return {
		getAll: function () {
			return $http({
				method: 'GET',
				url: 'backend/user/getAll'
			}).then( function ( result ) {
				console.log("INFO: response received");
				return result.data;
			}, function ( result ) {
				console.log('failure');
			});
		}
	};	
});

services.factory( 'CreateUserService', function ( $http ) {
	return {
		createNow: function ( data ) {
			return $http({
				method: 'POST',
				url: 'backend/user/createNow',
				data: data
			}).then( function ( result ) {
				console.log( result.data );	
			}, function ( err ) {
				console.log( err );
			});
		}
	};
});