
var oldURL = document.referrer;
// alert(oldURL);

var subid = $('#tid').val();
var ebd_affid = $('#ebd_affid').val();
var ebd_affsource = $('#ebd_affsource').val();
var ebd_affsub = $('#ebd_affsub').val();
var ebd_affsub2 = $('#ebd_affsub2').val();
var ebd_affsub3 = $('#ebd_affsub3').val();
var ebd_affsub4 = $('#ebd_affsub4').val();
var ebd_affsub5 = $('#ebd_affsub5').val();
var ebd_urlid = $('#ebd_urlid').val();
var ebd_oid = $('#ebd_oid').val();


function getUrlParameter(sParam)
{
    var sPageURL = oldURL.substring(1);
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




// $(document).ready(function(){

    // if (oldURL === 'http://mylawfirmfinder.com/test-post/') {
$('.test').click(function(){

        window.location.replace("http://mesh.mylawfirmfinder.com/v3/?c=pinkGreen" + '&subid=' + subid + '&aff_id=' + aff_id + '&aff_sub=' + aff_sub + '&aff_sub2=' + aff_sub2 + '&aff_sub3=' + aff_sub3 + '&aff_sub4=' + aff_sub4 + '&aff_sub5=' + aff_sub5 + '&source=' + source + '&file_id=' + file_id + '&url_id=' + url_id);

});

    // }

    // else if (oldURL === 'http://track01.ebdtrack03.com/aff_c?')
    // else{
        // window.location.replace('http://youtube.com');
    // }
// });