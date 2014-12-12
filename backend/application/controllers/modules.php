<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Modules extends CI_Controller {

	function __construct() {

		parent::__construct();
		$this->load->model('modulesMDL');
	}

	public function index()
	{

	}

	public function getModules() {

		$obj = $this->modulesMDL->getAllModules();
		echo( json_encode($obj));
	}

}

/* End of file modules_controller.php */
/* Location: ./application/controllers/modules_controller.php */