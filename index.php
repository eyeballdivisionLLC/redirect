<?php
  //freecrashcalculator/start2
  // include('configuration.php');


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

  
  
?>
<html>
<head>

    <title>Loading</title>

</head>
      <body>





<input id="tid" type="hidden" name="tid" value="<?php echo $tid; ?>" />
                              <input id="ebd_affid" type="hidden" id="ebd_affid" name="ebd_affid" value="<?php echo $ebd_affid; ?>" />
                              <input id="ebd_affsource" type="hidden" id="ebd_affsource" name="ebd_affsource" value="<?php echo $ebd_affsource; ?>" />
                              <input id="ebd_affsub" type="hidden" id="ebd_affsub" name="ebd_affsub" value="<?php echo $ebd_affsub; ?>" />
                              <input id="ebd_affsub2" type="hidden" id="ebd_affsub2" name="ebd_affsub2" value="<?php echo $ebd_affsub2; ?>" />
                              <input id="ebd_affsub3" type="hidden" id="ebd_affsub3" name="ebd_affsub3" value="<?php echo $ebd_affsub3; ?>" />
                              <input id="ebd_affsub4" type="hidden" id="ebd_affsub4" name="ebd_affsub4" value="<?php echo $ebd_affsub4; ?>" />
                              <input id="ebd_affsub5" type="hidden" id="ebd_affsub5" name="ebd_affsub5" value="<?php echo $ebd_affsub5; ?>" />
                              <input id="ebd_urlid" type="hidden" id="ebd_urlid" name="ebd_urlid" value="<?php echo $ebd_urlid; ?>" />
<input id="ebd_oid" type="hidden" id="ebd_oid" name="ebd_oid" value="<?php echo $ebd_oid; ?>" />


              <a class="test">test</a>

              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
              <script src="rdr.js"></script>
      </body>
</html>