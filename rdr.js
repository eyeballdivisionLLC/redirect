var qs = document.referrer.split('?')[1] || '';
var oldURL = document.referrer;
console.log(oldURL);

var path = document.referrer.split('?')[0] || '';

url = document.referrer;
ref = url.match(/:\/\/(.[^/]+)/)[1];

var testid = getUrlParameter('testid');
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

var postURL;

var oidTest = $('#oid').val();

if (ebd_oid === '666') {
    postURL = 'http://track01.ebdtrack03.com/GPez';
} else if (ebd_oid === '674') {
    postURL = 'http://track01.ebdtrack03.com/GPdE';
} else if (ebd_oid === '638') {
    postURL = 'http://trk.myaccidentattorneyfinder.com/GPaK';
} else if (ebd_oid === '686') {
    postURL = 'http://track01.ebdtrack03.com/GPdY';
}



var redirectURL = 'http://track01.ebdtrack03.com/GPez';


function getUrlParameter(sParam)
{
    var sPageURL = qs.substring(0);
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



console.log(subid);
// $(document).ready(function(){

    // if (oldURL === 'http://mylawfirmfinder.com/test-post/') {

   if (postURL !== ''){


        $.ajax({
            type: "POST",
            url: 'postctr.php',
            data: "subid=" + subid + '&url=' + postURL,
            success: function (data){
                alert(data); // show response from the php script.
            }
        });

        if (path === 'http://www.mylawfirmfinder.com/fda-xarelto-warning/') {
         window.location.replace("http://trck.mylaw-firm-finder.info/Legal_Xarelto_DefaultColorSche/" + '?subid=' + subid + '&aff_id=' + ebd_affid + '&aff_sub=' + ebd_affsub + '&aff_sub2=' + ebd_affsub2 + '&aff_sub3=' + ebd_affsub3 + '&aff_sub4=' + ebd_affsub4 + '&aff_sub5=' + ebd_affsub5 + '&source=' + ebd_affsource + '&ebd_urlid=' + ebd_urlid + '&ebd_oid=' + ebd_oid);
     }

   }

            

        

$(document).ready(function(){

//     // if(ref === 'www.mylawfirmfinder.com') {
//     //     window.location.replace("http://mesh.mylawfirmfinder.com/v3/?c=pinkGreen" + '&subid=' + subid + '&aff_id=' + ebd_affid + '&aff_sub=' + ebd_affsub + '&aff_sub2=' + ebd_affsub2 + '&aff_sub3=' + ebd_affsub3 + '&aff_sub4=' + ebd_affsub4 + '&aff_sub5=' + ebd_affsub5 + '&source=' + ebd_affsource + '&ebd_urlid=' + ebd_urlid + '&ebd_oid=' + ebd_oid);
//     // }
    // 

});






    // }

    // else if (oldURL === 'http://track01.ebdtrack03.com/aff_c?')
    // else{
        // window.location.replace('http://youtube.com');
    // }
// });