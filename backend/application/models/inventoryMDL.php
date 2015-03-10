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

	public function newCategory( $categoryName ) {
		$query = "SELECT count(c_id) AS count FROM tbl_product_category;";

		$categoryID = $this->db->query ( $query )->result()[0]->count + 1;
		$categoryID = "CAT". $categoryID;

		// return $categoryName;

		$query = "INSERT INTO tbl_product_category VALUES ('". $categoryID ."', '". $categoryName ."', '". date('Y-m-d H:i:s') ."', null, 'U1');";

		return $this->db->query( $query );
	}

	public function getCategories() {

		$query = "SELECT * FROM tbl_product_category";
		return $this->db->query( $query )->result();

	}

	public function newProduct( $data ) {

		$count = $this->db->query( "SELECT count(p_id) AS count FROM tbl_product" )->result()[0]->count + 1;

		$query = "INSERT INTO tbl_product VALUES ( '". $data->p_cat . "P" . $count ."', '". $data->p_cat ."' , '". $data->p_name ."', ". $data->p_qty .", ". $data->p_selling ." );";

		return $this->db->query( $query );

		$query_product = "";
		$query_transaction = "";

	}

}

/* End of file inventoryMDL.php */
/* Location: ./application/models/inventoryMDL.php */