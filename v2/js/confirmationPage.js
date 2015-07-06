 
 function submitOrConfirm(next){
//if there is an error message stop this function from going any further.
     if(message != ''){
    alert(message);
    return;
}
     var words = $('#case_notes').val().split(' ');
            words = +words.length;
            var confirmationHeader = '<h1>Please Confirm The Details Of Your Inquiry And Your Contact Information:</h1><br><p>You qualify for a free consultation with an attorney. <br> To give you the best estimate of the value of your claim,<br> please confirm the information below. <br>Your conversation is 100% confidential and free.</p>';

            if (words >= 4 || confirmedOnce == 'Y') {


                $("#formSubmit").html('Verifying...');
                $("#formSubmit").prop('value', 'Verifying...');
                insertIntoDb('form_submitted', 'form_complete');
                capture();



            } else {
                insertIntoDb('confirmation_loaded', 'Yes');

                $(".confirmationHide").hide();
                confirmedOnce = 'Y';

               $("#confirmation").append(confirmationHeader);
               
               
 $(".confirmation").each(function () { //start the loop


                    if ($(this)[0].name == 'name_of_injured') {

                        var label = '<label>Is the name of the injured person correct?</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");

                    } else if ($(this)[0].name == 'first_name') {

                        var label = '<label>Is your first name spelled correctly?</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");


                    } else if ($(this)[0].name == 'last_name') {

                        var label = '<label>Is your last name spelled correctly?</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");

                    } else if ($(this)[0].name == 'email_address') {

                        var label = '<label>Is this your best email?</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");


                    } else if ($(this)[0].name == 'phone_home') {

                        var label = '<label>Is this your best phone number?</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");

                    } else if ($(this)[0].name == 'city') {

                        var label = '<label>City</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");


                    } else if ($(this)[0].name == 'state') {

                        var label = '<label>State</label>';

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");


                    } else if ($(this)[0].name == 'case_notes') {

                        var label = '<label>Please add any additional information that<br> would help the attorney evaluate your claim:</label>';

                        $("#case_notes").addClass("inputWidth , center");

                        $("#confirmation").append(label);
                        $(this).appendTo("#confirmation");


                    }
                });
            }
        
        $('#footer-inside').css({
            position: 'static'
        });
    

 if (typeof next === "function") {
                next();
            }
 }
                    
                   
     
                