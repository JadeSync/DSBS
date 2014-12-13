services.factory( 'ModuleService', function ( $http ) {

	console.log( 'INFO: ModuleService loaded.' );

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

services.factory( 'ModuleDirService', function ( $http ) {
	console.log( 'INFO: ModuleDirService loaded.' );

	var dirsFormatted = [];

	return {
		moduleDirs: function() {

			return $http({
				method: 'GET',
				url: 'backend/modules/getModuleDirs'
			}).then( function ( result ) {
				console.log( 'INFO: response received' );
				dirs = result.data;

				for (var i = dirs.length - 1; i >= 0; i--) {
					dirsFormatted[i] = dirs[i].slice(dirs[i].lastIndexOf('/') + 1);
				};

				console.log(dirsFormatted);

				return $http({
					method : 'POST',
					url: 'backend/modules/getModuleJSON',
					data: { dirs: dirsFormatted }
				}).then( function ( result ) {
					var returnData = [];

					for (var i = result.data.length - 1; i >= 0; i--) {
						returnData.push(JSON.parse(result.data[i]));
					};

					return returnData;

				});

			}, function ( result ) {
				console.log('failure');
			}); 
		}
	}
});