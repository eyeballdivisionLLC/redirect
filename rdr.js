
var oldURL = document.referrer;


function getUrlParameter(sParam)
{
    var sPageURL = oldURL.search.substring(1);
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


var aff_id = getUrlParameter('aff_id');
var aff_sub = getUrlParameter('aff_sub');
var aff_sub2 = getUrlParameter('aff_sub2');
var aff_sub3 = getUrlParameter('aff_sub3');
var aff_sub4 = getUrlParameter('aff_sub4');
var aff_sub5 = getUrlParameter('aff_sub5');
var source = getUrlParameter('source');
var file_id = getUrlParameter('file_id');
var url_id = getUrlParameter('url_id');


$(document).ready(function(){

    // if (oldURL === 'http://mylawfirmfinder.com/test-post/') {

        window.location.replace("http://mesh.mylawfirmfinder.com/v3/?c=pinkGreen" + '&aff_id=' + aff_id + '&aff_sub=' + aff_sub + '&aff_sub2=' + aff_sub2 + '&aff_sub3=' + aff_sub3 + '&aff_sub4=' + aff_sub4 + '&aff_sub5=' + aff_sub5 + '&source=' + source + '&file_id=' + file_id + '&url_id=' + url_id);

    // }

    // else if (oldURL === 'http://track01.ebdtrack03.com/aff_c?')
    // else{
        // window.location.replace('http://youtube.com');
    // }
});