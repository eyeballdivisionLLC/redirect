<script src="rdr.js"></script>




<?php



parse_str(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_QUERY), $queries);

$oid = $queries['ebd_oid'];


$tid = $_POST["subid"];
// $url = 'http://track01.ebdtrack03.com/GPez';

if ($oid === '666') {
  $url = 'http://track01.ebdtrack03.com/GPez';
} else if ($oid === '674') {
  $url = ' http://track01.ebdtrack03.com/GPg1';
} else if ($oid === '638') {
  $url = 'http://trk.myaccidentattorneyfinder.com/GPg7';
} else if ($oid === '686') {
  $url = ' http://track01.ebdtrack03.com/GPgD';
}

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