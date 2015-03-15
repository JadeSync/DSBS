app.controller ( 'UserController', function ( $scope, UserService, CreateUserService ) {

	$scope.userList = [];

	$scope.username = '';
	$scope.firstname = '';
	$scope.lastname = '';
	$scope.usertype = '';
	$scope.pwd = '';

	$scope.userinfo = {};

	var userDataPromise = UserService.getAll();

	userDataPromise.then( function (result) {
		$scope.userList = result;
		console.log($scope.userList);
	});

	$scope.testone = function () {
		alert( 'yo' );
	}

	$scope.showNewUserModal = function () {
		$('.addUser-modal').modal( 'show' );
	} 

	$scope.hideModal = function () {
		$('.addUser-modal').modal( 'hide' );
	}

	$scope.createNow = function () {
		console.log( 'call a service' );

		$scope.userinfo.username = $scope.username;
		$scope.userinfo.firstname = $scope.firstname;
		$scope.userinfo.lastname = $scope.lastname;
		$scope.userinfo.usertype = $scope.usertype;
		$scope.userinfo.pwd = $scope.pwd;

		CreateUserService.createNow( $scope.userinfo );

		$scope.hideModal();

		location.reload( true );

	}

});