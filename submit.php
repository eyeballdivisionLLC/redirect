<?php

include('configuration.php');

echo ini_get('display_errors');
$lead_id = $_POST["lead_id"];
$funnel_id = $_POST["funnel_id"];
$data_name = $_POST["data_name"];
$data_value = $_POST["data_value"];
$ip = $_POST["ip"];
$transaction_id = $_POST["subid"];
$aff_id = $_POST["aff_id"];
$ip_city = $_POST["city"];
$ip_state = $_POST["state"];

$campaign = $_POST["campaign"];
$header = $_POST["header"];
$body = $_POST["body"];
$image = $_POST["image"];
$ad_id = $_POST["ad_id"];
$ad_location = $_POST["ad_location"];
$url = $_POST["url"];
$domain = $_POST["domain"];


  if(!mysqli_query($conn, "INSERT INTO funnel_data ( lead_id, funnel_id, data_name, data_value, aff_id, transaction_id, campaign, header,body,image,ad_id, ad_location, url ,ip,ip_city,ip_state,datetime,domain) VALUES ('$lead_id','$funnel_id','$data_name','$data_value','$aff_id','$transaction_id','$campaign','$header','$body','$image','$ad_id','$ad_location','$url','$ip','$ip_city','$ip_state',now(),'$domain')")) {
    printf(mysqli_error($conn));
  }


?>
