<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ModulesMDL extends CI_Model {

	function __construct() {

		parent::__construct();
		$this->load->database();

	}

	public function getAllModules() {
		$query = "SELECT * FROM tbl_module";
		return $this->db->query( $query )->result();
	}

	public function UninstallModule( $module_id ) {
		
		$query = "DELETE FROM tbl_module WHERE module_id = '". $module_id ."';";

		if( $this->db->query( $query ) ) {
			return true;
		}

		else {
			return false;
		}

	}

	public function getModuleDirByID( $module_id ) {

		$query = "SELECT module_name FROM tbl_module WHERE module_id = '". $module_id ."';";
		$raw_data = $this->db->query( $query )->result();

		$return_data = $raw_data[0]->module_name;

		return strtolower($return_data);

	}

	public function InstallModule( $module_json ) {

		$module_decoded = json_decode($module_json);
		$query = "INSERT INTO tbl_module VALUES ('". $module_decoded->module_id ."', '".
											$module_decoded->module_name ."', '".
											$module_decoded->module_author ."', '".
											$module_decoded->module_desc ."', 1, '".
											$module_decoded->module_controller ."', '".
											$module_decoded->module_route ."');";

		return $this->db->query( $query );

	}
}

/* End of file modules.php */
/* Location: ./application/models/modules.php */