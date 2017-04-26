function submit_form(e){
  e.preventDefault(); //prevents the form from submiting when the submit button is clicked.
  
  $("#submit-form").prop('disabled', true);
  function handle_result( result ){
  	  result = JSON.parse( result );
  	  if ( result.status == 'success' ){
          $("#data").text( result.message );
          $("#alert").removeClass('hidden');
          $( this ).trigger('reset');
          $("#submit-form").prop('disabled', false);
  	  }
  	  else{
          $("#data").text( "Error. Something beyond our control just occurred :'(" );
          $("#alert").removeClass('hidden');
          $("#submit-form").prop('disabled', false);
  	  }
  }
  
  $.post('/ajax_and_php/processor.php', $( this ).serialize(), handle_result);
  
}
$("#contact_form").on("submit", submit_form);


function generate_input(){
	var input = '<div class="form-group">'+
                    '<label for="Email">Email address</label>'+
                    '<input type="email" class="form-control" id="Email" name="email[]" placeholder="Enter email">'+
                 '</div>';
     $("#email_addresses").append(input);
}
$("#generate_input").on("click", generate_input);