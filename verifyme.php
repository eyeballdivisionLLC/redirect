<?php

$phone = $_POST["phone"];
$email = $_POST["email"];
$street = $_POST["street"];
$zip = $_POST["zip"];
$address1 = $_POST["street"];
$city = $_POST["city"];
$state = $_POST["state"];
$api = '1000332-04A205B9';
$domain = 'freecrashcalculator.com';
$type = 'json';


http://www.xverify.com/services/emails/verify/?email=test@xverify.com&type=xml&apikey=1000332-04A205B9&domain=freecrashcalculator.com

if($phone != ""){


$url = 'http://www.xverify.com/services/phone/verify/?phone='.$phone .'&type=json&apikey=1000332-04A205B9&domain=freecrashcalculator.com';
$myvars = 'phone=' . $phone . '&type=' . $type . '&apikey=' . $api . '&domain=' . $domain ;

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );

print $response;
//print $url;
//print $myvars;

//close connection
curl_close($ch);

}else if ($email != ""){
$url = 'http://www.xverify.com/services/emails/verify/?email='.$email .'&type=json&apikey=1000332-04A205B9&domain=freecrashcalculator.com';
$myvars = 'email=' . $email . '&type=' . $type . '&apikey=' . $api . '&domain=' . $domain ;

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );

print $response;
//print $url;
//print $myvars;

//close connection
curl_close($ch);


}else if ($street != ""){
$url = 'http://www.xverify.com/services/address/verify/?street='.$street .'&zip='. $zip . '&type=json&apikey=1000332-04A205B9&domain=freecrashcalculator.com';
$myvars = 'street=' . $street . '&zip='. $zip .'&type=' . $type . '&apikey=' . $api . '&domain=' . $domain ;

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );

print $response;
//print $url;
//print $myvars;

//close connection
curl_close($ch);


}


?>