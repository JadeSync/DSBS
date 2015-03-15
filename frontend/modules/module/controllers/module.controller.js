app.controller( 'ModuleController', function ($scope, ModuleService, ModuleDirService, ModuleUninstallService, ModuleInstallService) {

	$(".se-pre-con").fadeIn("slow");

	console.log( 'INFO: ModuleController loaded' );

	$scope.modules = [];
	$scope.moduleDirs = [];
	$scope.moduleDirsFormatted = [];
	$scope.moduleSelected = {};
	$scope.installedModules = [];
	$scope.selectedModule = null;
	$scope.selectedModuleID = null;
	$scope.isCollapsed = false;

	$scope.usr_name = localStorage.getItem('u_name');
	// $scope.modules = ModuleService.getModules();

	var moduleDataPromise = ModuleService.modules();

	moduleDataPromise.then( function (result) {
		$scope.modules = result;
	});

	var moduleDirDataPromise = ModuleDirService.moduleDirs();

	moduleDirDataPromise.then( function (result) {
		$scope.moduleDirs = result;
		for (var i = $scope.moduleDirs.length - 1; i >= 0; i--) {
			if ( $scope.moduleDirs[i].module_installed_flag == 'true' ) {

				$scope.installedModules.push({
					module_id: $scope.moduleDirs[i].module_id,
					module_name: $scope.moduleDirs[i].module_name,
					module_author: $scope.moduleDirs[i].module_author,
					module_controller: $scope.moduleDirs[i].module_controller,
					module_route: $scope.moduleDirs[i].module_route,
					module_installed_flag: $scope.moduleDirs[i].module_installed_flag
				});
			}
		};

		return $scope.installedModules;

	});
	
	$scope.selected = function( module_name, module_id ) {
		$scope.selectedModule = module_name;
		$scope.selectedModuleID = module_id;
	}

	$scope.setSelected = function( id ) {
		
		for (var i = $scope.moduleDirs.length - 1; i >= 0; i--) {
			if ( $scope.moduleDirs[i].module_id === id ) {
				
				$scope.moduleSelected.module_id = id;
				$scope.moduleSelected.module_name = $scope.moduleDirs[i].module_name;
				$scope.moduleSelected.module_author = $scope.moduleDirs[i].module_author;
				$scope.moduleSelected.module_controller = $scope.moduleDirs[i].module_controller;
				$scope.moduleSelected.module_route = $scope.moduleDirs[i].module_route;
				$scope.moduleSelected.module_installed_flag = $scope.moduleDirs[i].module_installed_flag;

			}
		};

	}

	$scope.hideUninstallModal = function () {
		$('.uninstallModal').modal('hide');
	}

	$scope.uninstallModule = function ( module_id ) {

		if ( module_id == 'M01' ) {
			alert("You cannot delete this module.");
			$scope.hideUninstallModal();	
			return;
		}

		console.log('Uninstalling module - '+ $scope.selectedModule );
		$scope.hideUninstallModal();

		if ( ModuleUninstallService.uninstall( module_id ) ) {
			console.log("Uninstalled.");
			window.location = "http://localhost/dsbs/";
		}

		else {
			console.log("Uninstallation Failed.");
		}

	}

	$scope.installModule = function( module_name ) {
		if ( ModuleInstallService.install( module_name ) ) {
			console.log("Installed.");
			// window.location = "http://localhost/dsbs";
			// window.location.reload(true);
		}

		else {
			console.log("Installation Failed.");
		}
	}

	$(".se-pre-con").fadeOut("slow");

});