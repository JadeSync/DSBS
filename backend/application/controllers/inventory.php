<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Inventory extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model('inventoryMDL');
	}

	public function getProducts( $id = false )
	{
		if ( ! $id ) {
			$returnData = json_encode($this->inventoryMDL->getProducts());

			echo $returnData;
		}

		else {

		}
	}

	public function newProduct() {
		$postdata = file_get_contents("php://input");
    	$request = json_decode($postdata);

    	if( ! $this->inventoryMDL->newProduct( $request ) ) {
    		echo "failure";
    	}

    	else {
    		echo "success";
    	}
	}

	public function getCategories() {

		$categories = $this->inventoryMDL->getCategories();

		echo json_encode($categories);

	}

}

/* End of file inventory.php */
/* Location: ./application/controllers/inventory.php */