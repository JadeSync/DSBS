<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Inventory extends CI_Controller {

	public function index()
	{
		$this->load->view('inventory_page');
	}

}

/* End of file inventory.php */
/* Location: ./application/controllers/inventory.php */