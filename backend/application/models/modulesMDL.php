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

}

/* End of file modules.php */
/* Location: ./application/models/modules.php */