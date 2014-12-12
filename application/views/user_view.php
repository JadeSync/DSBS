<!DOCTYPE html>
<html ng-app="app" >
<head>
	<title>Login</title>
	<script type="text/javascript" src="./assets/js/jquery.min.js"></script>
	<script type="text/javascript" src="./assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./assets/js/angular.min.js"></script>
	<script type="text/javascript" src="./assets/js/angular-routes.js"></script>
	<script type="text/javascript" src="./assets/js/app.js"></script>
	<link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css" />

	<style type="text/css">
		.login-fields {
			margin-top: 10px;
		}
	</style>

	<script type="text/javascript">
		app.controller( 'UserController', function($scope) {
			$scope.username = '';
			$scope.password = '';

			$scope.validateAndSend = function() {

				console.log( 'validating... ' );

				if ( $scope.username == '' || $scope.password == '' ) {
					alert( 'Please fill in the form.' );
					$scope.username = '';
					$scope.password = '';

					$('#username').focus();
				}

				else {
					var credsPack = [ $scope.username, $scope.password ];
				}
			}

		});
	</script>

</head>
<body>
	<div class="container" ng-controller="UserController">
		<div class="row-fluid" style="margin-top:40px;">
			<div class="col-md-4 col-md-offset-4">
				<div class="panel panel-danger">
				  	<div class="panel-heading">
				    	<h3 class="panel-title">Login</h3>
				  	</div>
				  	<div class="panel-body">
				    	<form>
				    		<input ng-model="username" class="login-fields form-control" type="text" id="username" placeholder="Username" />
				    		<input ng-model="password" class="login-fields form-control" type="password" id="password" placeholder="Password" />
				    		<input type="submit" ng-click="validateAndSend()" value="Login" class="btn btn-success login-fields" />
				    	</form>
				  	</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>