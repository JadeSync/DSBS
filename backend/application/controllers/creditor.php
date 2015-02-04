<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Creditor extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model( 'CreditorMDL' );
	}

	public function getAll() {

		$creditors = $this->CreditorMDL->getAll();

		echo json_encode( $creditors );
	}

	public function add() {
		$postdata = file_get_contents("php://input");
    	$creditorInfo = json_decode($postdata);

    	$result = $this->CreditorMDL->add( $creditorInfo );

    	echo json_encode( $result );
	}

}

/* End of file creditor.php */
/* Location: ./application/controllers/creditor.php */