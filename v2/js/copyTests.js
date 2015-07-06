var d = new Date();
var n = d.getMonth();
var month;
if (n === 0) {
  month = 'January';
}
if (n === 1) {
  month = 'February';
}
if (n === 2) {
  month = 'March';
}
if (n === 3) {
  month = 'April';
}
if (n === 4) {
  month = 'May';
}
if (n === 5) {
  month = 'June';
}
if (n === 6) {
  month = 'July';
}
if (n === 7) {
  month = 'August';
}
if (n === 8) {
  month = 'September';
}
if (n === 9) {
  month = 'October';
}
if (n === 10) {
  month = 'November';
}
if (n === 11) {
  month = 'December';
}


var TemplateStyle1 = [
'<p align="center"><a class="strong">February 2015: <br> The 1 Simple Truth About  Your Injury Claim.</a></p>',
'                              <p align="justify">You may not believe it but there are 1000s of offices of lawyers all across the country fighting to prevent you from getting <a class="red Continue strong" data-answer="money you deserve" data-value="first" href="#">money you deserve.</a><br><br> ',
'                              Have you been in a car accident? Perhaps you slipped and fell… Maybe you’ve taken a drug that has had negative side effects.<br><br> ',
'                              If you’ve been hurt in anyway, it’s possible that  <a class="red Continue strong" data-answer="you are rightfully owed" data-value="first" href="#">you are rightfully owed</a> some form of compensation.   ',
'                              More importantly, if you do qualify, we can help you find the best attorney for YOUR unique situation. ',
'                              MyAccidentAttorneyFinder.com is here to help you find an attorney who can help you, and <a class="red Continue strong" data-answer="see what your claim is worth" data-value="first" href="#">see what your claim is worth.</a><br><br>   ',                       
'                              <a class="red Continue strong" data-answer="Click the button" data-value="first" href="#">Click the button</a> below to get started today.</p>',
'                              <br><br><button type="button" class="btn btn-primary btn-footer btn- buttonContinue Continue special" data-answer="button" data-value="first">Get Started ></button>'
].join('');

var TemplateStyle2 = [
  '<h2><span style="color: #d00;">FREE:</span><br>Legal Review of Your Injury?</h2>',
  '<button type="button" class="btn btn-primary buttonContinue Continue special" data-answer="yes" data-value="first">Click To Start ></button>',
].join('');

var DefaultA = [
  '<h2 class="text-center">Have You Or A Loved One Taken Xarelto?</h2>',
  '<button type="button" class="btn btn-primary btn-footerLeft btn- buttonContinue Continue special" data-answer="yes" data-value="first">Yes</button>',
  '<button type="button" class="btn btn-primary btn-footerRight btn- buttonContinue Continue special" data-answer="no" data-value="first">No</button><br>',
  '<i>*This is a free service<br> no credit card required.</i><br><br>',
].join('');


var articleLander = [
  '<div class="contentHolder shadow" id="headingAppended" style="height: 200%;padding: 40px; margin-top: 30px;">',
        '<h2 class="responsive noPadding headingRed logoRed">FDA Warns Xarelto Is Linked To Serious Health Risks, Even Death</h2><br>',
        '<p class="logoRed" align="justify"><strong>Attention users of Xarelto -</strong> A specialized Legal Team is Seeking Millions in Settlements For Victims of this Dangerous Drug, <a class="Continue strong" data-value="first" href="#">claim your free consultation with an attorney today</a></p>',
        '<p class="logoRed" align="justify">In 2012 Alone, Xarelto Use Was Associated with 2,081 Serious Injuries, Including At Least 151 Deaths.</p>',
        '<p class="logoRed" align="justify">In January of 2014, the FDA released warning of the association between Xarelto use and the risk of internal bleeding.</p>',
        '<p class="logoRed" align="justify">Top legal teams around the US are working together to fight for victims, and loved ones of those who have suffered from side effects of Xarelto.</p>',
        '<p class="logoRed" align="justify"><strong>Use of Xarelto blood thinner has been linked to:</strong>',
        '<p class="logoRed"><ul class="logoRed betterList text-left"><li><strong>Gastrointestinal Bleeding</strong></li><li>Brain Hemorrhage</li><li><strong>Uncontrollable Internal Bleeding</strong></li><li>  Hemorrhagic Stroke</li><li><strong> Death</strong></li></ul>',
        '<p class="logoRed" align="justify">Your time to file may be limited, yet top legal teams are dedicated to helping victims and getting the justice and compensation they deserve...</p>',
        '<p class="logoRed" align="justify">You may be entitled to compensation, we encourgage you to click the get started button below and use our <a class="Continue strong" data-value="first" href="#">easy claim evaluation form</a> to see if talking to a lawyer is right for you.  It’s 100% free, and it only takes about 60 seconds.  You will receive a confirmation call to verify the details of your situation and a 100% free consultation with a lawyer...</p>',
        '<p class="logoRed" align="justify"><a class="Continue strong" data-value="first" href="#">Click here to claim your consultation, it’s 100% free...</a></p><br>',
        '<button type="button" class="btn btn- btn-primary shadow btn-footer buttonContinue firstBtn Continue special" data-answer="1" data-value="first">Get Started >></button>',
  '</div>',

].join('');

var H1B1lander1 = [
  '<p align="center"><h4 class="text-center">'+month+' 2015:</h4> <h2 class="text-center">FDA Warns This Drug Is Linked To Serious And Fatal Health Risks</h2></a></p>',
  '                              <p align="">Legal Team Seeking Millions In Settlements For Victims Of Dangerous Side Effects From Blood Thinning  Drug, Xarelto.  See If You Qualify... </a><br><br> ',
  '                              <a class="text-center Continue strong" data-answer="Click the button" data-value="first" href="#">Click the button</a> below to get started today.</p>',
  '                              <br><br><button type="button" class="btn btn-primary btn-footer btn- buttonContinue Continue special" data-answer="button" data-value="first">Get Started ></button>'

].join('');

var H1lander1 = [

'<h2><span class="h1Lander">FREE! </span>FDA Warns This Drug Is Linked To Serious And Fatal Health Risks</h2><br>',
'<h3 class="text-center">Have You Or A Loved One Taken Xarelto?</h3>',
  '<button type="button" class="btn btn-primary btn-footerLeft btn- buttonContinue Continue special" data-answer="yes" data-value="first">Yes</button>',
  '<button type="button" class="btn btn-primary btn-footerRight btn- buttonContinue Continue special" data-answer="no" data-value="first">No</button><br>',
  '<i>*This is a free service<br> no credit card required.</i><br><br>'

].join('');

var firstQ = [

'<div id="used_xarelto" class="question list-group mainFlow pi" style="display:none"> ',
                              '<h2 class=text-center>Have You Or A Loved One Used Xarelto?</h2>',
                              '<button type="button" class="btn btn-primary buttonContinue btn-footerRight button2 Continue special" data-answer="yes" data-value="used_xarelto">Yes</button>',
                              '<button type="button" class="btn btn-primary buttonContinue testData btn-footerLeft button2 Continue special" data-answer="no" data-value="used_xarelto">No</button><br><br>',
                              '<i>*This is a free service<br> no credit card required.</i><br><br>',
                          '</div>',

                          ].join('');

var H1lander2 = [

'<h2>FDA Warns This Drug Is Linked To Serious And Fatal Health Risks</h2><br>',
'<h3 class="text-center">Have You Or A Loved One Taken Xarelto?</h3>',
  '<button type="button" class="btn btn-primary btn-footerLeft btn- buttonContinue Continue special" data-answer="yes" data-value="first">Yes</button>',
  '<button type="button" class="btn btn-primary btn-footerRight btn- buttonContinue Continue special" data-answer="no" data-value="first">No</button><br>',
  '<i>*This is a free service<br> no credit card required.</i><br><br>'

].join('');

if(copyId == 'DefaultA'){
 
    $("#question1").append(DefaultA);
    
}else if(copyId == 'TemplateStyle2'){
    $("#question1").append(TemplateStyle2);
    
}else if(copyId == 'TemplateStyle1'){
    $("#question1").append(TemplateStyle1);
    
}else if (copyId === 'articleLander') {
    $('#question1').append(articleLander).after(firstQ);
}else if (copyId === 'H1B1lander1') {
    $('#question1').append(H1B1lander1);
}else if (copyId === 'H1lander1'){
    $('#question1').append(H1lander1);
}else if (copyId === 'H1lander2'){
    $('#question1').append(H1lander2);
}
    
