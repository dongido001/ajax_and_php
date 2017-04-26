<?php

/**
* Processes the input
*
* @author Onwuka Gideon <gideon.onwuka1@gmail.com> <dongido>
*/

  if( $_SERVER['REQUEST_METHOD'] == "POST" ){
      
	  //makes sure the inputs are really set
	  
	  $name  = isset( $_POST['name'] )  ? $_POST['name'] : "";
	  $email = isset( $_POST['email'] ) ? $_POST['email']: "";
	  $text  = isset( $_POST['text'] )  ? $_POST['text'] : "";
	  
	   $email = json_encode($email);

	  $return_data = ['status'=> "success", "message" => "Name: {$name}, Email: {$email} was successfully received by the server!"];
      
	  
      echo json_encode( $return_data );
	  
  }
  
?>