function validationAtor(input,button,div, answer, next) {
    processing = true;
    
    if (input == 'email_address') {
        var email = $("#email_address").val();
        if (email.indexOf('@') === -1) {
            response["status"] = false;          
            message = message + '\n\Please Insert A Valid Email Address';
            response["message"]= message;
        } else {
            
   
        }

    
    }
    
    
    if (input == 'last_name') {
        var Last_Name = $("#last_name").val();

        if (Last_Name == '') {
             message = message + '\n\Please Insert Your Last Name.';
            

        } else {

            
        }
    }

    
    if (input == 'first_name') {
        var First_Name = $("#first_name").val();

        if (First_Name == '' || First_Name.length < 2) {
             message = message + '\n\Please Insert Fist Name.';
        } else {

          
        }
    }
    
    if (input == 'name') {
        var First_Name = $("#first_name").val();
        var Last_Name = $("#last_name").val();

        if (First_Name == '' || Last_Name == '' || First_Name.length < 2) {
             message = message + '\n\Please Insert Or Modify Your Fist And Last Name. Accurate First Name Is Required For Estimate';
        } else {

            
        }
    }

    if (input == 'city_state_of_accident') {
        var accident_city = $("#accident_city").val();
        var accident_state = $("#accident_state").val();

        if (accident_city == '' || accident_state == '') {
           message = message + '\n\Please Insert The Accident City And State';

        } else {

            
        }
    }

    if (input == 'name_of_injured') {
        var name_of_injured = $("#name_of_injured").val();


        if (name_of_injured == '') {
             message = message + "\n\Please Insert The First Name(s) Of Any Injured Persons Involved";

        } else {

            
        }
    }

    if (input == 'zip_code') {
        var zip_code = $("#zip_code").val();


        if (zip_code == '' || zip_code.length < 5) {
            message = message + "\n\Please Insert A Valid Zip Code";
        } else {

            
        }
    }

    if (input == 'address') {
        var Address = $("#address").val();
        if (Address == '') {
            message = message + '\n\Please Insert Your Mailing Address';

        } else {
           

        }

    }


    if (input == 'city') {
        var City = $("#city").val();
        var State = $("#state").val();

        if (City == '') {
            message = message + '\n\Please Insert Your City';

        } else {
           

        }

    }

    if (input == 'state') {
       var State = $("#state").val();

        if (State == '') {
            message = message + '\n\Please Insert Your State';

        } else {
          

        }

    }
    
    if (input == 'accident_city') {
       var accident_city = $("#accident_city").val();

        if (accident_city == '') {
            message = message + '\n\Please Insert The City In Which The Accident Occured';

        } else {
          

        }

    }
    
    if (input == 'accident_state') {
       var accident_state = $("#accident_state").val();

        if (accident_state == '') {
            message = message + '\n\Please Insert The State In Which The Accident Occured';

        } else {
        }

    }
     
    if (input == 'phone_home') {
       var phone_home = $("#phone_home").val();

        if (phone_home == '') {
            message = message + '\n\Please Insert The State In Which The Accident Occured';

        } else {
        }

    }


    if (input == 'case_notes') {
        var case_notes = $("#case_notes").val();

        if (case_notes == '') {
     
            message = message + '\n\Please Insert Once Sentence About What Happened';

        } else {

            
        }
    }

    if (input == 'attorney_dropdown') {
        var attorney_other = $("#attorney_dropdown").val();
        var attorney_other_input = $("#attorney_other").val();

        if (attorney_other == 'I' && attorney_other_input == '') {
            alert("Please Explain More About Your Attorney Before Moving On");

        } else {

           
        }
    }

if(typeof next === "function"){
    next();
}
}

