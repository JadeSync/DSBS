<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Billing extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model( 'BillingMDL' );
	}

	public function checkout()
	{
		// echo json_encode('done thanks :)');



		$postdata = file_get_contents("php://input");
    	$cart = json_decode($postdata);

    	$db_reply = $this->BillingMDL->checkout( $cart );

    	echo json_encode( $db_reply );
	}

}

/* End of file billing.php */
/* Location: ./application/controllers/billing.php */