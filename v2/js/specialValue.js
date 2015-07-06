function setSpecialValue(div, answer,next) {

    if (div == "accident_state") {
        var accidentCity = $("#accident_city").val();
        var accidentState = $("#accident_state").val();
        $("#city_state_of_accident").val(accidentCity + ' , ' + accidentState);
        
    }
    if (div == "zip_code") {
        var myzip = $("#zip_code").val();
        setCityZip(myzip);
       
        var first = $("#first_name").val();	
        var last = $("#last_name").val();
    
        $("#injured_person_name").val(first +' , ' + last);
}
    if (div == "required_hospital") {
        if (answer == 'yes') {
            answer = '1';
            $("#required_hospital").val(answer);

        } else {
            answer = '0';
            $("#required_hospital").val("0");

        }
    }
    if (div == "Other_treatment") {
        var hospital = $("#required_hospital").val();

        if (hospital == '0') {

            if (answer == 'yes') {
                answer = '1';
                $("#required_hospital").val(answer);
            } else {

            }


        }
    }


    if (div == "name") {
        var first = $("#first_name").val();
        var last = $("#last_name").val();
        var injured_name = $("#name_of_injured").val();

        if (injured_name == '') {

            $(".name_of_injured").val(first + "  " + last);

        } else {


        }
    }   
    if (div == "last_name") {
        var first = $("#first_name").val();
        var last = $("#last_name").val();
        var injured_name = $("#name_of_injured").val();

        if (injured_name == '') {

            $(".name_of_injured").val(first + "  " + last);

        } else {


        }
    }

    // if (div === "used_xarelto") {
    //     var used_xarelto = $("#used_xarelto").val();

    //     if (used_xarelto === 'yes') {
    //         used_xarelto = '1';

    //         $('.used_xarelto').val(used_xarelto);

    //     }else {
    //         used_xarelto = '0';
    //         $('.used_xarelto').val(used_xarelto);
    //     }
    // }


   if (div == "attorney") {
        footerPushDown();
        

       
    }



    if (div == "name_of_injured") {
        

        var injured_name = $("#name_of_injured").val();

        if (injured_name == '') {

            $(".name_of_injured").val(first + "  " + last);

        } else {
            $(".name_of_injured").val(injured_name);

        }


    }
    if (div == "attorney_dropdown") {
       var choice
        
        if(typeof answer === 'undefined'){
            choice = $("#attorney_dropdown").val(); 
            
        }else{
            choice = answer; 
            
        }
        
        
        if (choice == 'A' || choice == 'B' || choice == 'C' || choice == 'D' || choice == 'E') {
            $("#attorney").val("no");
        } else {
        }
    }
    
    if (div == "attorney_dropdown") {
       
        if(typeof answer === 'undefined'){
            choice = $("#attorney_dropdown").val(); 
            
        }else{
            choice = answer; 
            
        }
        
        
        if (choice == 'F' || choice == 'G' || choice == 'H') {
            $("#attorney").val("yes");
        } else {
	        if(answer =="I"){
		        $("#attorney_other_div").show();
		        $("#attorney").val("yes");
	        }
        }
    }
    

  if (div == "Injury_Type") {
     
		$("#hiddenFields").append('<input type="hidden" id='+answer+' name='+answer+' value="1" type="text" />')
		$("#hiddenFields").append('<input type="hidden" id="type" name="type" value='+answer+' type="text" />')
        $("#injury_type").val(answer);

        
    
         // if(answer == "car_accident" || answer == "motorcycle_accident" || answer == "trucking_accidents"){
             
         //     $(".pi").remove();
             
         //    appendMvaHtml();
         //     $("#mva").attr("action", "http://post.leadmesh.net/9db2f8a0b2b86ef17ffadf8823cecc63b4cbe0f5140f96b780255376c3acaa37" );

             
         // }
    
    }

    
    if (div == "month") {
       $("#month").val(answer);
    }
    
     if (div == "year") {
       $("#year").val(answer);
    }

 if (div == "year_of_injury") {
      $("#hiddenFields").append('<input type="hidden" id="year_of_injury" name="year_of_injury" value='+answer+' type="text" />')
    }

// if (div == "used_xarelto") {
//     $("#hiddenFields").append('<input type="hidden" id="used_xarelto" name="used_xarelto" value='+answer+' type="text" />');
//   }
  
   if (div == "experienced_after_use") {
    
    $("#hiddenFields").append('<input type="hidden" id="experienced_after_use" name="experienced_after_use" value="'+answer+'" type="text" />');
  
}
    
    if (div == "first") {
        var subid = $("#transaction_id").val();

        //console.log(subid);
        var url = "postctr.php";
        $.ajax({
            type: "POST",
            url: url,
            data: "subid=" + subid,
            success: function (data)
            {
                // alert(data); // show response from the php script.

            }
        });
if (copyId !== 'articleLander'){

        $("#hiddenFields").append('<input type="hidden" id="used_xarelto" name="used_xarelto" value='+answer+' type="text" />');

}

    }

    if (div === 'used_xarelto') {
        $("#hiddenFields").append('<input type="hidden" id="used_xarelto" name="used_xarelto" value='+answer+' type="text" />');
}
    

   

if(typeof next === "function"){
 next();   
}
}

