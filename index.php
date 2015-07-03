<?php
  //freecrashcalculator/start2
  // include('configuration.php');
parse_str(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_QUERY), $queries);
$oid = $queries['ebd_oid'];

  $tid= $_GET["subid"];
  $ebd_affid = $_GET["ebd_affid"];
  $ebd_affsource = $_GET["ebd_affsource"];
  $ebd_affsub = $_GET["ebd_affsub"];
  $ebd_affsub2 = $_GET["ebd_affsub2"];
  $ebd_affsub3 = $_GET["ebd_affsub3"];
  $ebd_affsub4 = $_GET["ebd_affsub4"];
  $ebd_affsub5 = $_GET["ebd_affsub5"];
  $ebd_urlid = $_GET["ebd_urlid"];
  $ebd_oid = $_GET["ebd_oid"];


$oid = $_GET["ebd_oid"];


  
  
?>


<html>
<head>

    <title>Loading</title>

</head>
      <body>




            <p><?php echo $oid; ?></p>





             

              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
              <script src="rdr.js"></script>
      </body>
</html>