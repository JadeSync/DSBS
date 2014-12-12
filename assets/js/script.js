$(document).ready( function () {

	var cart = [];
	var add_to_cart_new = function ( item, qty ) {
		cart.push( {item: item, qty: qty} );

		console.log( cart );
	}

	var add_to_cart_existing = function( qty, index ) {
		cart[index].qty += parseInt(qty);
		console.log(cart);
		render_new_table();
	}

	var render_new_table = function() {
		var append_string = '';
		
		var table_element = $('#bill_table');
		// tr_tag.removeAttr('pointer');
		// tr_tag.append(append_string);

		$('#emptytable').remove();
		$('.rendered').remove();

		for (var i = cart.length - 1; i >= 0; i--) {
			append_string = '<tr class="rendered"><td>';
			append_string += cart[i].item +'</td><td>';
			append_string += cart[i].qty +'</td><td>';
			append_string += "10" + '</td><td>';
			append_string += parseInt(cart[i].qty) * 10 + '</td></tr>';

			// table_element.append(append_string);
		};	
	}

	var update_table = function () {

		var append_string = '';
		
		var table_element = $('#bill_table');
		// tr_tag.removeAttr('pointer');
		// tr_tag.append(append_string);


		if(cart.length < 1) {
			table_element.append('<tr id="emptytable"><td colspan="4" style="text-align: center;">Cart empty</td>');
			return 0;
		}

		else {

			$('#emptytable').remove();

		// for (var i = cart.length - 1; i >= 0; i--) {
			append_string = '<tr class="rendered"><td>';
			append_string += cart[cart.length - 1].item +'</td><td>';
			append_string += cart[cart.length - 1].qty +'</td><td>';
			append_string += "10" + '</td><td>';
			append_string += parseInt(cart[cart.length - 1].qty) * 10 + '</td></tr>';

			table_element.append(append_string);
		// };	
		}
	}

	$('#addToCart').click( function () {
		var item = $('#product_id').val();
		var qty = parseInt($('#qty').val());

		if( cart.length < 1 ) {
			add_to_cart_new(item, qty);
		}

		else {
			for (var i = cart.length - 1; i >= 0; i--) {
				if (cart[i].item === item) {
					console.log('existing');
					add_to_cart_existing( qty, i);
				}
				else {
					add_to_cart_new( item, qty );
					console.log('new');
				}
			};
		}			
		update_table();
	});
})