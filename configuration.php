<?php
	
	//$server = 'localhost';
	$server = '50.57.219.51:3306';
	$username = '723980_ebDev';
	$password = 'ebDev12!@';
	$db = '723980_funnel_metrics';

	//$connection = mysql_connect($host, $user, $pass) or die(mysql_error());
	//$dbcon = @mysql_select_db($db,$connection)or die(mysql_error());

// $server = $url["host"];
// $username = $url["user"];
// $password = $url["pass"];
// $db = substr($url["path"], 1);

$conn = mysqli_connect($server, $username, $password, $db);


?>