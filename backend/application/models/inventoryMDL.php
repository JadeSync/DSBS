<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class InventoryMDL extends CI_Model {

	function __construct() {

		parent::__construct();
		$this->load->database();

	}

	public function getProducts( $id = false ) {

		$query = "SELECT * FROM tbl_product";

		return $this->db->query( $query )->result();

	}

	public function getCategories() {

		$query = "SELECT * FROM tbl_product_category";
		return $this->db->query( $query )->result();

	}

	public function newProduct( $data ) {

		$query_product = "";
		$query_transaction = "";

	}

}

/* End of file inventoryMDL.php */
/* Location: ./application/models/inventoryMDL.php */