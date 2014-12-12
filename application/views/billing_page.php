<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Billing</title>
	<script type="text/javascript" src="./assets/js/jquery.min.js"></script>
	<script type="text/javascript" src="./assets/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="./assets/js/select2.min.js"></script>
	<!-- <script type="text/javascript" src="./assets/js/script.js"></script> -->
	<script type="text/javascript" src="./assets/js/angular.min.js"></script>
	<script type="text/javascript" src="./assets/js/angular-routes.js"></script>
	<script type="text/javascript" src="./assets/js/app.js"></script>
	<script type="text/javascript" src="./assets/js/billing.controller.js"></script>

	<script type="text/javascript">
		$(document).ready(function() { $("#product_id").select2(); });
		$(document).ready(function() { $("#product_id_modal").select2(); });
	</script>

	<link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./assets/css/select2.css">
</head>
<body ng-controller="BillingController">

	<div class="container" style="margin-top: 10px;">
		<div class="row-fluid">
			<div class="col-md-12">

				<div class="panel panel-default">
				  <div class="panel-heading">
				    <h3 class="panel-title">Department Store Billing System</h3>
				  </div>
				  <div class="panel-body">
				    <ul class="nav nav-pills">
					  <li role="presentation" class="active"><a href="#">Billing</a></li>
					  <li role="presentation"><a href="./inventory">Inventory</a></li>
					  <li role="presentation"><a href="#">Reporting</a></li>
					  <li role="presentation"><a href="#">Users</a></li>
					</ul>
				  </div>
				</div>
				<hr />
			</div>	
		</div>

		<div class="row-fluid">
			<div class="col-md-8">
				<div class="panel panel-default" style="max-height: 420px; height: 420px;">
				  <div class="panel-body">
				  	<div class="container">
				  		<div class="row-fluid">
				  			<select ng-model="product_id" id="product_id" style="width: inherit; min-width: 250px;">
						        <option value="AL">AL - Alabama</option>
						        <option value="WY">WY - Wyoming</option>
						    </select>
						    <input ng-model="qty" min="1" type="number" style="width: 80px;" id="qty" placeholder="Quantity">
							<button class="btn btn-primary" id="addToCart" ng-click="addToCart()">Add to cart</button>
							<img hidden data-toggle="modal" data-target=".edit-modal" title="Edit {{activeEditID}}" id="edit-item" src="./assets/images/item_edit.png" style="height: 32px; width: 32px;"/>
							<img hidden data-toggle="modal" data-target=".delete-modal"title="Remove {{activeEditID}}" id="delete-item" src="./assets/images/item_delete.png" style="height: 32px; width: 32px;"/>
				  		</div>
				  		<div class="row-fluid">
				  			<div class="col-md-7">
					  			<table id="bill_table" class="table" style="margin-top:10px;">
					  				<tr>
					  					<th>Product</th>
					  					<th>Quantity</th>
					  					<th>Unit Price</th>
					  					<th>Total Price</th>
					  				</tr>

					  				<tr ng-repeat="item in cart" item-id="{{item.item}}" ng-click="setSelected($index, this)" ng-class="{selected: $index == selectedRow}">
					  					<td>{{item.item}}</td>
					  					<td>{{item.qty}}</td>
					  					<td>10</td>
					  					<td>{{item.qty * 10}}</td>
					  				</tr>

					  			</table>
					  		</div>
				  		</div>
				  	</div>
				  </div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="panel panel-default" style="max-height: 200px; height: 200px;">
				  <div class="panel-body">
				  	<span class="text-muted">No notifications yet</span>
				  </div>
				</div>
			</div>

			<div class="col-md-4">
				<div class="panel panel-default" style="max-height: 200px; height: 200px;">
				  <div class="panel-body">
				  	<h1 style="color:red; margin: auto;">Rs. {{total_bill}}</h1>
				  	<img class="{{hiddenOrNot}}" title="Checkout" style="height:64px; width:64px;" src="./assets/images/checkout.png" />
				  </div>
				</div>
			</div>
		</div>
	</div>

	
	



	<div class="modal fade edit-modal" tabindex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
	  	<div class="modal-dialog modal-sm">
	    	<div class="modal-content">
	      		<div class="row-fluid">
		  			<select ng-model="product_id_modal" id="product_id_modal" style="width: inherit; padding:10px; min-width: 150px;" required>
				        <option value="AL">AL - Alabama</option>
				        <option value="WY">WY - Wyoming</option>
				    </select>
				    <input ng-model="qty_modal" min="1" type="number" style="width: 80px;" id="qty_modal" placeholder="Quantity" required>
				    <br />
				    <img src="./assets/images/tick.png" style="height: 45px; width: 45px; padding-left: 10px;" title="Confirm" ng-click="validateAndEdit()"/>
				    <img src="./assets/images/wrong.png" style="height: 45px; width: 45px; padding-left: 10px;" title="Cancel" ng-click="hideModal()"/>
			    </div>
	    	</div>
	  	</div>
	</div>




	<div class="modal fade delete-modal" tabindex="-1" role="dialog" aria-labelledby="deleteModal" aria-hidden="true">
	  	<div class="modal-dialog modal-sm">
	    	<div class="modal-content">
	      		<div class="row-fluid">
		  			<span class="text-muted">Are you sure you want to delete this entry?</span>
				    <img src="./assets/images/tick.png" style="height: 45px; width: 45px; padding-left: 10px;" title="Confirm" ng-click="deleteEntry()"/>
				    <img src="./assets/images/wrong.png" style="height: 45px; width: 45px; padding-left: 10px;" title="Cancel" ng-click="hideModal()"/>
			    </div>
	    	</div>
	  	</div>
	</div>





</body>
</html>