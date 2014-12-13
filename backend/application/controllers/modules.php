<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Modules extends CI_Controller {

	function __construct() {

		parent::__construct();
		$this->load->model('modulesMDL');
		$this->load->helper('file');
	}

	public function index()
	{

	}

	public function getModules() {

		$obj = $this->modulesMDL->getAllModules();
		echo( json_encode($obj));
	}

	public function getModuleDirs()
	{
		$dirs = array_filter(glob('../frontend/modules/*'), 'is_dir');
		echo( json_encode($dirs) );
		// print_r($_POST);
	}

	public function getModuleJSON()
	{
		$postdata = file_get_contents("php://input");
    	$request = json_decode($postdata);
    	$modules = [];
    	$moduleJSON = [];

    	// print_r($request);
    	// echo $request->dirs[0];

    	foreach ($request->dirs as $dir) {
    		array_push($modules, $dir);
    	}

    	// print_r($modules);

    	foreach ($modules as $module) {
    		array_push($moduleJSON, read_file('../frontend/modules/'. $module .'/package.json'));
    	}

    	echo json_encode($moduleJSON);

	}

}

/* End of file modules_controller.php */
/* Location: ./application/controllers/modules_controller.php */