//globals
var lead_id;
var tid;
var tid_prep;
var ip = '';
var ip_city = '';
var ip_state = '';
var progress_bar = 0;
var numQuestions;
var confirmedOnce = 'N';
var div1;
var answer1;
var override1;
var special1;
var validate;
var lines = [];
var email;
var city;
var state;
var response = [];
var message;
var processing = false;
var theQueue;
var inputName;
var inputValue;
var pushdown;
var colorScheme = getUrlParameter('c');
var font = getUrlParameter('f');
var funnel_id = getUrlParameter('funnel_id');
var copyId = getUrlParameter('copyId');
var domain = location.hostname;
var loc = window.location.pathname;
domain = domain+loc;
var width = $(document).width();



function disableEnterKey(e) {
		var key;
		if (window.event)
				key = window.event.keyCode; //IE
		else
				key = e.which; //firefox
		if (key == 13)
				return false;
		else
				return true;
}

  function getip(json){
     ip = json.ip;
     $("#ip_address").val(ip);
    }

setTimeout(function () { //Insert that page loaded after a .5 seconds
		if (tid !== '' || tid == '') {
				insertIntoDb('load', 'true');

		}
}
, 750);
$(document).ready(function () {
		//get the # of .questions on the page for the progress bar
		var questionsNum = $(".mainFlow").length;
		numQuestions = Math.floor(100 / questionsNum);

		//Initializing the progress bar
		drawProgressBar(numQuestions);

		//getting lead id to insert into DB
		tid_prep = location.search.replace('?', '').split('=');
		tid = tid_prep[0];
		lead_id = $("#lead_id").val();


		//for attorney dropdown.. need to show "Other" input box
		$("#attorney_dropdown").change(function () {


				var val = $("#attorney_dropdown").val();

				if (val == 'I') {
						$("#attorney_other_div").show();

				}

		});


//if the text is longer than the screen size push the footer down
		if ($(document.body).height() < $(window).height()) {
				$('#footer-inside').css({
						position: 'absolute'


				});
		} else {
				$('#footer-inside').css({
						position: 'static'


				});
		}

});
function drawProgressBar(pct_complete) {

		progress_bar = progress_bar + numQuestions;

		var html = [
				'<div class="progress">',
				'<div class="progress-bar" role="progressbar" aria-valuenow="' + progress_bar + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + progress_bar + '%;">',
				' ' + progress_bar + '%',
				' </div>',
				'</div>'].join('\n');

		$("#progress_bar").empty();
		$("#progress_bar").append(html);
}


//On Each Button Click
$(function () {
		$('body').on('click', '.Continue', function () {
				var button = $(this);
				var div = $(this).val();
				var answer = $(this).data("answer");
				var divA = $(this).data("value");
				message = '';
				//dynamically detect number of inputs in the div
				if ($(this).hasClass('validate')) {
						var $stepDiv = $(this).closest('.question');
						var $inputs = $stepDiv.find('input ,textarea');

						theQueue = $({});

						$inputs.each(function () {
								var $input = $(this);


								inputName = '';
								inputValue = '';
								inputName = $input[0].name;
								inputValue = $input[0].value;

								insertIntoDb($input[0].name, $input[0].value);

								if($input[0].name == 'phone_home'){

									var phone = $("#phone_home").val();
									phone = phone.replace(/\D/g,'');
									$("#phone_home").val(phone);


								}

								if ($input[0].name == 'email_address' || $input[0].name == 'phone_home') {
										theQueue.queue("alerts", function (next) {
												xverify($input[0].name, div, answer, next);
										});
										theQueue.queue("alerts", function (next) {
												setSpecialValue($input[0].name, answer, next);
										});
								} else {
										theQueue.queue("alerts", function (next) {
												validationAtor($input[0].name, button, div, answer, next);
										});
										theQueue.queue("alerts", function (next) {
												setSpecialValue($input[0].name, answer, next);

										});

								}
						}).promise().then(function () {

								if (button.hasClass('submit') && message == '') {

										theQueue.queue("alerts", function (next) {

												submitOrConfirm(next);
										});
										theQueue.dequeue("alerts");
								} else {
										theQueue.queue("alerts", function (next) {

												awesomeFunction(button, inputName, inputValue);
										});
										theQueue.dequeue("alerts");
								}

						});
				} else {

						if (typeof divA !== 'undefined') {
								awesomeFunction(button, divA, answer);
						} else {
								awesomeFunction(button, div, answer);
						}


				}


		});
});

function submitNess(next) {
		if (message != '') {
				alert(message);
		} else {
				submitOrConfirm();
		}

		if (typeof next === "function") {
				next();
		}
}

//AWESOME FUNCTION WITH SPECIAL VALUE AND VALIDATION SUB FUNCTIONS
function awesomeFunction(button, div, answer) {
		//  div1 = div;
		answer1 = answer;
		pushdown = '';
		var button = button;

		if (message == '' && button) {

				if (button.hasClass('override')) {
						var overrideSwitch = 'Y';
				}

				if (button.hasClass('overrideDouble')) {
						var overrideDouble = 'Y';
				}


				if (button.hasClass('special')) {
						setSpecialValue(div, answer);
				}

				if (button.hasClass('validate')|| button.hasClass('noFill')) {

				} else {
						$("#" + div).val(answer);
				}

				button.closest('.question').delay(100).hide(300).addClass("animated fadeOutLeftBig");

				if (overrideSwitch == 'Y') {
						button.parent().next('.question').nextAll('.question').eq(0).delay(400).show(0, function (){
							if (width >= 480) {
								$(this).addClass("animated fadeInRightBig");
							}
						});
				}else if(overrideDouble == 'Y'){
						button.parent().next('.question').nextAll('.question').eq(1).delay(400).show(0, function (){
							if (width >= 480) {
								$(this).addClass("animated fadeInRightBig");
							}
						});
				}else{
						button.parents("div").next('.question').delay(400).show(0, function (){
							if (width >= 480) {
								$(this).addClass("animated fadeInRightBig");
							}
						});
				}
// check to see if footer needs to be pushed down after each new div is displayed
			 if(pushdown != 'Y'){
				if ($(document.body).height() < $(window).height()) {
						$('#footer-inside').css({
								position: 'absolute'
						});
				} else {
						$('#footer-inside').css({
								position: 'static'
						});
				}
		}

				if (div == 'year') {
						footerPushDown();

				}
				drawProgressBar(progress_bar);
				insertIntoDb(div, answer);

		} else {
				alert(message);

		}



		$('.question').attr('onclick', '').unbind('click');

}


$(document).on("change","#attorney_dropdown", function(){
		var selected = $("#attorney_dropdown").val();

		if(selected == 'I'){
					$("#attorney_other_div").show();
		 $("#attorney").val("yes");

		}
})



function confirmOrChange(question, buttonValue) {

		if (buttonValue == "Confirm") {

				awesomeFunction(question, '', 'N', 'Y');

		} else {

				$("#accident_city").focus();
				$(".cityState").val('');




		}


}


// EXTERNAL INTEGRATION .. ZIPCODE CSV AND DATABASE INTERACTION
$.ajax({
		type: "GET",
		url: "zip_code_database.csv",
		dataType: "text",
		success: function (data) {
				processData(data);
		}
});
function processData(allText) {
		var allTextLines = allText.split(/\r\n|\n/);
		var headers = allTextLines[0].split(',');
		for (var i = 1; i < allTextLines.length; i++) {
				var data = allTextLines[i].split(',');
				if (data.length == headers.length) {
						var tarr = [];
						for (var j = 0; j < headers.length; j++) {
								tarr.push(data[j]);
						}
						lines.push(tarr);
				}
		}
		// console.log(lines);
}
function setCityZip(willbezip) {
		var rad = willbezip;
		//console.log(rad);
		var i;
		for (i = 0; i < lines.length; ++i) { //lines.length
				if (lines[i][0] === rad) {
						$("#city").val(lines[i][1]);
						$("#state").val(lines[i][2]);

						$("#accident_city").val(lines[i][1]);
						$("#accident_state").val(lines[i][2]);
				}
		}
}

function getUrlParameter(sParam)
{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam)
				{
						return sParameterName[1];
				}
		}
}



function insertIntoDb(data_name, data_value) {



		var trasaction_id = $("#tid").val();
		var aff_id = $("#ebd_affid").val();
		var ebd_affsource = $("#ebd_affsource").val();
		var ebd_affsub = $("#ebd_affsub").val();
		var ebd_affsub2 = $("#ebd_affsub2").val();
		var ebd_affsub3 = $("#ebd_affsub3").val();
		var ebd_affsub4 = $("#ebd_affsub4").val();
		var ebd_affsub5 = $("#ebd_affsub5").val();
		var ebd_urlid = $("#ebd_urlid").val();
		var year = $(".year").val();
		var attorney_other = $("#attorney_dropdown");

		if (data_name == 'date') {
				data_value = year;

		}

		if (data_name == 'attorney_dropdown') {
			if (attorney_other == 'A' || attorney_other == 'B' || attorney_other == 'C' || attorney_other == 'D' || attorney_other == 'E') {
					data_value = 'no'
			} else {
					data_value = 'yes';
			}
		}

		if (tid != '') {

			if (data_name == 'load') {
					var url = "submit.php";
					$.ajax({
							type: "POST",
							url: url,
							data: "lead_id=" + lead_id + "&funnel_id="+funnel_id+"&data_name=load&data_value=" + data_value + "&ip=" + ip + "&transaction_id=" + trasaction_id + "&aff_id=" + aff_id + "&city=" + ip_city + "&state=" + ip_state + "&campaign=" + ebd_affsource + "&header=" + ebd_affsub + "&body=" + ebd_affsub2 + "&image=" + ebd_affsub3 + "&ad_id=" + ebd_affsub4 + "&ad_location=" + ebd_affsub5 + "&url=" + ebd_urlid + "&domain=" + domain, // serializes the form's elements.
							success: function (data)
							{
									 //alert(data); // show response from the php script.

							}
					});
					return false; // avoid to execute the actual submit of the form.
			} else {
					//console.log(ip);
					var url = "submit.php";
					$.ajax({
							type: "POST",
							url: url,
							data: "lead_id=" + lead_id + "&funnel_id="+funnel_id+"&data_name=" + data_name + "&data_value=" + data_value + "&ip=" + ip + "&transaction_id=" + trasaction_id + "&aff_id=" + aff_id + "&city=" + ip_city + "&state=" + ip_state + "&campaign=" + ebd_affsource + "&header=" + ebd_affsub + "&body=" + ebd_affsub2 + "&image=" + ebd_affsub3 + "&ad_id=" + ebd_affsub4 + "&ad_location=" + ebd_affsub5 + "&url=" + ebd_urlid + "&domain=" + domain,
							success: function (data)
							{
									 //alert(data); // show response from the php script.

							}
					});
					return false; // avoid to execute the actual submit of the form.
			}
		}
}
function footerPushDown() {
pushdown = "Y";

		$('#footer-inside').css({
				'position': 'static'
		});


}

$('.zip').on("change keyup paste", function () {


	var output;
	var input = $('.zip').val();
	output = input.replace(/[^0-9]/g, '');

	$('.zip').val(output);
});


$(".phone").on("change keyup paste", function () {
    var output;
    var input = $(".phone").val();
    input = input.replace(/[^0-9]/g, '');
    var area = input.substr(0, 3);
    var pre = input.substr(3, 3);
    var tel = input.substr(6, 4);
    if (area.length < 3 && area.length >= 1) {
        output = "(" + area;
    }
    
     else if (area.length == 3 && pre.length < 3) {
        output = "(" + area + ")" + " " + pre;
    } else if (area.length == 3 && pre.length == 3) {
        output = "(" + area + ")" + " " + pre + "-" + tel;
    }
    
    $(".phone").val(output);
});







