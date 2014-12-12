<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Inventory</title>
	<script type="text/javascript" src="./assets/js/jquery.min.js"></script>
	<script type="text/javascript" src="./assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./assets/js/select2.min.js"></script>
	<script type="text/javascript" src="./assets/js/angular.min.js"></script>
	<script type="text/javascript" src="./assets/js/angular-routes.js"></script>
	<script type="text/javascript" src="./assets/js/app.js"></script>
	<script type="text/javascript" src="./assets/js/inventory.controller.js"></script>
	<script type="text/javascript" src="./assets/js/clock.controller.js"></script>
	<script type="text/javascript" src="./assets/js/jquery.dataTables.min.js"></script>

	<script type="text/javascript">
	$(document).ready( function () {
		$('#inventory_table').DataTable();
	});
	</script>

	<link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./assets/css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="./assets/css/mystyle.css">

</head>
<body ng-controller="InventoryController">

	<div class="container" style="margin-top: 10px;">
		<div class="row-fluid">
			<div class="col-md-12">

				<div class="panel panel-default">
				  <div class="panel-heading">
				    <h3 class="panel-title">Department Store Billing System</h3>
				  </div>
				  <div class="panel-body">
				    <ul class="nav nav-pills">
						  <li role="presentation"><a href="./billing">Billing</a></li>
						  <li role="presentation" class="active"><a href="#">Inventory</a></li>
						  <li role="presentation"><a href="#">Reporting</a></li>
						  <li role="presentation"><a href="#">Users</a></li>
						  <div style="margin-top: 10px; margin-top: -10px; padding-top: 0px;" class="col-md-offset-10 col-md-span-2" ng-controller="ClockController">
							<h2 style="color:red;">{{ clock }}</h2>
						</div>
					</ul>
				  </div>
				</div>
				<hr />
			</div>	
		</div>

		<div class="row-fluid">
			<div class="col-md-8">
				<div class="panel panel-default" style="max-height: 620px; height: 620px; overflow-y: scroll; overflow-x: hidden">
				  <div class="panel-body">
				  	<div class="container">
				  		<div class="row-fluid">
				  			<!-- <select ng-model="product_id" id="product_id" style="width: inherit; min-width: 250px;">
						        <option value="AL">AL - Alabama</option>
						        <option value="WY">WY - Wyoming</option>
						    </select>
						    <input ng-model="qty" min="1" type="number" style="width: 80px;" id="qty" placeholder="Quantity">
							<button class="btn btn-primary" id="addToCart" ng-click="addToCart()">Add to cart</button>
							<img hidden data-toggle="modal" data-target=".edit-modal" title="Edit {{activeEditID}}" id="edit-item" src="./assets/images/item_edit.png" style="height: 32px; width: 32px;"/>
							<img hidden data-toggle="modal" data-target=".delete-modal"title="Remove {{activeEditID}}" id="delete-item" src="./assets/images/item_delete.png" style="height: 32px; width: 32px;"/> -->
							<div id="new-product"><img src="./assets/images/plus.png" style="height: 28px; width: 28px;" />
							<span class="text-muted">Add a new product</span>
							</div>
							<br />
				  		</div>
				  		<div class="row-fluid">
				  			<div class="col-md-7">
					  			<table id="inventory_table" class="display" style="margin-top:10px;">
						  			<thead>
						  				<tr>
						  					<th>Product</th>
						  					<th>Quantity</th>
						  					<th>Operation</th>
						  				</tr>
						  			</thead>	

						  			<tfoot>
						  				<tr>
						  					<th>Product</th>
						  					<th>Quantity</th>
						  					<th>Operation</th>
						  				</tr>
						  			</tfoot>

						  			<tbody>
						  				<tr ng-repeat="item in warehouse">
						  					<td>{{item.item}}</td>
						  					<td>{{item.qty}}</td>
						  					<td><img src="./assets/images/plus.png" style="height: 28px; width: 28px;" title="Replinesh">
						  					<img src="./assets/images/minus.png" style="height: 28px; width: 28px;" title="Lost/Damaged">
						  					<img src="./assets/images/item_edit.png" style="height: 28px; width: 28px;" title="Edit"></td>
						  				</tr>
						  			</tbody>

					  			</table>
					  		</div>
				  		</div>
				  	</div>
				  </div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="panel panel-default" style="max-height: 300px; height: 300px;">
				  <div class="panel-body">
				  	<span class="text-muted">No notifications yet</span>
				  </div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="panel panel-default" style="max-height: 300px; height: 300px;">
				  <div class="panel-body">
				  	
				  </div>
				</div>
			</div>
		</div>