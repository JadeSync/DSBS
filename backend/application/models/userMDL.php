<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class UserMDL extends CI_Model {

	function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function getAll() {

		$query = "SELECT u_id, u_name, u_first_name, u_last_name, u_type, u_create_date FROM tbl_user";

		return $this->db->query( $query )->result();
	}

	public function createNow( $data ) {

		$count = $this->db->query( "SELECT count(u_id) AS count FROM tbl_user;" )->result()[0]->count + 1;

		$u_id = "U". $count;

		$query = "INSERT INTO tbl_user VALUES ('". $u_id ."', '". $data->username ."', '". $data->firstname ."', '". $data->lastname ."', '". $data->usertype ."', '". date('Y-m-d H:i:s') ."', '". $data->pwd ."');";

		return $this->db->query( $query );
	}

}

/* End of file userMDL.php */
/* Location: ./application/models/userMDL.php */