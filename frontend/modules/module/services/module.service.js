services.factory( 'ModuleService', function ( $http ) {

	console.log( 'INFO: appServices loaded.' );

	return {
		modules : function() {

			return $http({
				method: 'GET',
				url: 'backend/modules/getModules'
			}).then( function ( result ) {
				console.log("INFO: response received");
				return result.data;
			}, function ( result ) {
				console.log('failure');
			});
		}
	}

});