<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class CreditorMDL extends CI_Model {

	function __construct() {
		parent::__construct();
		$this->load->database();
	}

	public function getAll() {

		$query = "SELECT * FROM tbl_creditors_basic;";

		$result = $this->db->query ( $query );

		if ( ! $result ) {
			return '500 error';
		}

		else {
			return $result->result(); 
		}

	}

	public function add( $info ) {

		$cr_id = $this->db->query( "SELECT count( creditor_id ) AS count FROM tbl_creditors_basic" )->result()[0]->count + 1; 

		$query = "INSERT INTO tbl_creditors_basic VALUES ('". $cr_id ."', '". $info->name ."', '". $info->address ."', '". $info->email ."', '". $info->contact ."');";
		
		return $this->db->query( $query );


	}	

}

/* End of file creditorMDL.php */
/* Location: ./application/models/creditorMDL.php */