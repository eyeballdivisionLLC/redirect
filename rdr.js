
var oldURL = document.referrer;
console.log(oldURL);

var subid = getUrlParameter('subid');
var ebd_affid = getUrlParameter('ebd_affid');
var ebd_affsource = getUrlParameter('ebd_affsource');
var ebd_affsub = getUrlParameter('ebd_affsub');
var ebd_affsub2 = getUrlParameter('ebd_affsub2');
var ebd_affsub3 = getUrlParameter('ebd_affsub3');
var ebd_affsub4 = getUrlParameter('ebd_affsub4');
var ebd_affsub5 = getUrlParameter('ebd_affsub5');
var ebd_urlid = getUrlParameter('ebd_urlid');
var ebd_oid = getUrlParameter('ebd_oid');


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

        window.location.replace("http://mesh.mylawfirmfinder.com/v3/?c=pinkGreen" + '&subid=' + subid + '&aff_id=' + ebd_affid + '&aff_sub=' + ebd_affsource + '&aff_sub2=' + ebd_affsub + '&aff_sub3=' + ebd_affsub2 + '&aff_sub4=' + ebd_affsub3 + '&aff_sub5=' + ebd_affsub4 + '&source=' + ebd_affsub5 + '&file_id=' + ebd_urlid + '&oid=' + ebd_oid);

});

    // }

    // else if (oldURL === 'http://track01.ebdtrack03.com/aff_c?')
    // else{
        // window.location.replace('http://youtube.com');
    // }
// });