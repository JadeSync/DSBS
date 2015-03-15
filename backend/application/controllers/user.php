<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model( 'UserMDL' );
	}

	public function getAll() {

		echo json_encode($this->UserMDL->getAll());

	}

	public function changePwd() {

		$result = $this->UserMDL->changePwd( $_POST );

		echo json_encode($result);

	}

	public function createNow() {

		$postdata = file_get_contents( "php://input" );
		$request = json_decode( $postdata );

		$result = $this->UserMDL->createNow( $request );

		echo json_encode( $result );

	}

	public function login() {

		$result = $this->UserMDL->login( $_POST );

		echo json_encode($result);

	}
}

/* End of file user.php */
/* Location: ./application/controllers/user.php */