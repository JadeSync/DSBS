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

	public function UninstallModule( $module_id = NULL ) 	
	{


		$module_dir = $this->modulesMDL->getModuleDirByID( $module_id );
		
		$this->modulesMDL->UninstallModule( $module_id );

		$module_json = read_file('../frontend/modules/'. $module_dir .'/package.json');

		$module_json_decoded = json_decode( $module_json );

		$module_json_decoded->module_installed_flag = 'false';

		// echo json_encode($module_json_decoded);

		if ( ! write_file('../frontend/modules/'. $module_dir .'/package.json', json_encode($module_json_decoded)) ) {
			echo 'Unable to write file';
		}

		else {
			$module_json = read_file('../frontend/modules/'. $module_dir .'/package.json');
			print_r($module_json);
		}
	}

	public function InstallModule( $module_name = Null )
	{

		$module_json = read_file('../frontend/modules/'. $module_name .'/package.json');

		$module_encoded = json_encode($module_json);

		if( ! $module_encoded ) {
			echo 'Not a valid json';
			exit;
		}

		// print_r(json_decode($module_encoded));

		$status = $this->modulesMDL->InstallModule( json_decode($module_encoded) );

		if ( $status ) {

			$module_json = read_file('../frontend/modules/'. $module_name ."/package.json");

			$module_json_decoded = json_decode( $module_json );

			$module_json_decoded->module_installed_flag = 'true';

			// echo json_encode($module_json_decoded);

			if ( ! write_file('../frontend/modules/'. $module_name ."/package.json", json_encode($module_json_decoded)) ) {
				echo 'Unable to write file';
			}

			else {
				$module_json = read_file('../frontend/modules/'. $module_name ."/package.json");
				print_r($module_json);
			}
		}

		else {
			echo 'not done';
		}

	}
}

/* End of file modules_controller.php */
/* Location: ./application/controllers/modules_controller.php */