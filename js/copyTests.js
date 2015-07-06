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
  '<button type="button" class="btn btn-primary btn-footerLeft btn- buttonContinue Continue special" data-answer="1" data-value="first">Yes</button>',
  '<button type="button" class="btn btn-primary btn-footerRight btn- buttonContinue Continue special" data-answer="0" data-value="first">No</button><br>',
  '<i>*This is a free service<br> no credit card required.</i><br><br>',
].join('');


if(copyId == 'DefaultA'){
 
    $("#question1").append(DefaultA);
    
}else if(copyId == 'TemplateStyle2'){
    $("#question1").append(TemplateStyle2);
    
}else if(copyId == 'TemplateStyle1'){
    $("#question1").append(TemplateStyle1);
    
}

    
