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

		$status = $this->modulesMDL->InstallModule( json_decode($module_encoded) );

		if ( $status ) {

			$module_json = read_file('../frontend/modules/'. $module_name ."/package.json");

			$module_json_decoded = json_decode( $module_json );

			$module_json_decoded->module_installed_flag = 'true';

			if ( ! write_file('../frontend/modules/'. $module_name ."/package.json", json_encode($module_json_decoded)) ) {
				echo 'Unable to write file';
			}

			else {
 
				$module_route = read_file('../frontend/modules/module/route/module.routes.js');

				$module_route_array = explode(';', $module_route);

				$module_route_array[0] = $module_route_array[0] . ".when( '/". ucfirst($module_name) ."', {\n\t\t\t".
												"templateUrl: './frontend/modules/". ucfirst($module_name) ."/view-partials/main-view.html',\n\t\t\t".
												"controller: '". ucfirst($module_name) ."Controller'\n\t\t".
											"})";

				$module_route = implode(';', $module_route_array);

				if ( ! write_file('../frontend/modules/module/route/module.routes.js', $module_route) ){
					echo 'Unable to create routes.';
				}

				else {
					echo 'Routes successfully created.';
				}



				$index_html = read_file("../index.html");

				$index_html_array = explode('<dynamicLoads>', $index_html);

				$index_html_array[1] = "\n\t\t<script type='text/javascript' src='./frontend/modules/". $module_name ."/controllers/". $module_name .".controller.js'></script>" . $index_html_array[1];
				$index_html_array[1] = "\n\t\t<script type='text/javascript' src='./frontend/modules/". $module_name ."/services/". $module_name .".service.js'></script>" . $index_html_array[1];
				$index_html_array[1] = "\n\t\t<script type='text/javascript' src='./frontend/modules/". $module_name ."/route/". $module_name .".routes.js'></script>" . $index_html_array[1];

				$index_html = implode('<dynamicLoads>', $index_html_array);

				write_file('../index.html', $index_html);

				
			}
		}

		else {
			echo 'not done';
		}

	}
}

/* End of file modules_controller.php */
/* Location: ./application/controllers/modules_controller.php */