<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User extends CI_Controller {

	public function index()
	{
		$this->load->view('user_view');		
	}

	public function login()	
	{
		print_r( $_POST );
	}

	public function is_loggedIn()
	{
		# code...
	}

	public function set_permission( $userID, $controllerName )
	{
		# code...
	}

	public function check_permission( $userID, $controllerName )
	{
		# code...
	}

	public function create_user( $creds )	
	{
		# code...
	}

	public function delete_user( $userID )
	{
		# code...
	}

	public function get_userInfo( $userID = NULL )
	{
		# code...
	}

	public function get_userTransactions( $userID )
	{
		# code...
	}

}

/* End of file user.php */
/* Location: ./application/controllers/user.php */