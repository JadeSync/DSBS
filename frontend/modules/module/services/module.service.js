services.factory( 'ModuleService', function ( $http ) {

	console.log( 'INFO: ModuleService loaded.' );

	return {
		modules : function() {

			return $http({
				method: 'GET',
				url: 'backend/modules/getModules'
			}).then( function ( result ) {
				
				console.log("INFO: response received");

				if ( localStorage.getItem( 'u_type' ) != 'SUP' ) {
					for (var i = result.data.length - 1; i >= 0; i--) {
						if( result.data[i].module_name != "Billing" ){
							result.data.splice(i, 1);
						}
					};
				}

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

services.factory( 'ModuleUninstallService', function ( $http ) {

	return {
		uninstall: function( module_id ) {

			return $http({
				method: 'GET',
				url: 'backend/modules/uninstallModule/'+ module_id,
			}).then( function ( result ) {
				console.log( result.data );
				return true;
			}, function ( err ) {
				console.log( err );
				return false;
			})

		}
	}

});

services.factory( 'ModuleInstallService', function ($http) {

	return {
		install: function( module_name ) {

			return $http({
				method: 'GET',
				url: 'backend/modules/InstallModule/'+ module_name
			}).then( function ( result ) {
				console.log( result.data );
			}, function ( err ) {
				console.log( err );
				return false;
			});

		}
	}

});