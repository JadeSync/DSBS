<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Billing extends CI_Controller {

	public function index()
	{
		$this->load->view( 'billing_page' );
	}

}

/* End of file billing.php */
/* Location: ./application/controllers/billing.php */