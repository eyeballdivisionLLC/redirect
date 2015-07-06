function xverify(input, div, answer, next) {

    if (input == 'email_address') {

        var email_address = $("#email_address").val();

        if (email_address == '') {
            message = message + '\n\Please insert your Email address';
            if (typeof next === "function") {
                next();
            }
        } else {
            var url = "verifyme.php";
            $.ajax({
                type: "POST",
                url: url,
                data: "email=" + email_address, // serializes the form's elements.
                success: function (data)
                {
                    //alert(data); // show response from the php script.
                    processEmail(data, next)
                }
            });

            function processEmail(ds, next) {


                //alert(ds);
                var obj = jQuery.parseJSON(ds);

                if (obj.email.responsecode != '1') {
                    message = message + '\n\Oops! We need a real email address';

                } else {


                }

                if (typeof next === "function") {
                    next();
                }
            }//process data
        }
    }
    
    if (input == 'phone_home') {

        var phone = $("#phone_home").val();


        if (phone == '') {
            message = message + '\n\Please insert your Phone number';
            
            if (typeof next === "function") {
                next();
            }
        } else {

            var url = "verifyme.php";
            $.ajax({
                type: "POST",
                url: url,
                data: "phone=" + phone, // serializes the form's elements.
                success: function (data)
                {
                    //alert(data); // show response from the php script.
                    processdata(data, next)
                }
            });

            function processdata(ds, next) {


//		alert(ds);
                var obj = jQuery.parseJSON(ds);

                if (obj.phone.response_code != '1') {
                    message = message + '\n\Oops! We need a real phone number';

                

                if (typeof next === "function") {
                    next();
                }
                
                }
                if (typeof next === "function") {
                    next();
                }
            }

        }
    }
}

