<?php

if(isset($_POST['url']))
{
    $url = $_POST['url'];
}

$tid = $_POST["subid"];
$myvars = 'transaction_id=' . $tid;

$ch = curl_init( $url );
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );

//print $response;
//print $url;
//print $myvars;

//close connection
curl_close($ch);
?>