
// Pink and Grey

if (colorScheme === 'pinkGrey'){
      $('#blueText').removeClass('logoBlue').addClass('logoPink');
      $('.site-wrapper').css('background-color', '#E672A1');
      $('.text-center').addClass('whiteText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary1');
      $('.buttonContinue').css('color', '#E672A1');
      $('.navbar-default').addClass('shadow');
      $('.logoRed').css('color', 'black');
      $('.glyphicon').removeClass('green red').addClass('logoPink');
      $('.btn-primary1').css('background-color', 'white');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#E672A1');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#21cd99');
       $('.firstBtn').css('background-color', '#21cd99');
      $('.firstBtn').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'orangeWhite'){
      $('#blueText').removeClass('logoBlue').addClass('logoOrange');
      $('.site-wrapper').css('background-color', '#EF891D');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary2');
      $('.glyphicon').removeClass('green red').addClass('logoOrange');
      $('.logoRed').css('color', 'black');
      $('.buttonContinue').css('color', '#EF891D');
      $('.btn-primary2').css('background-color', 'white');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#EF891D');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#0FB1DD');
      $('.firstBtn').css('background-color', '#0FB1DD');
      $('.firstBtn').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#E8E8E8');
          $('.btn-footerRight').css('border-color', '#E8E8E8');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'purpleWhite'){
      $('#blueText').removeClass('logoBlue').addClass('logoPurple');
      $('.site-wrapper').css('background-color', '#7374BD');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary3');
      $('.buttonContinue1').removeClass('btn-primary');
      $('.buttonContinue1').addClass('buttonGreen');
      $('.buttonContinue').css('color', '#7374BD');
      $('.logoRed').css('color', 'black');
      $('.glyphicon').removeClass('green red').addClass('logoPurple');
      $('.btn-primary3').css('background-color', 'white');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#7374BD');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#21cd99');
      $('.firstBtn').css('background-color', '#21cd99');
      $('.firstBtn').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'greenWhite'){
      $('#blueText').removeClass('logoBlue').addClass('logoGreen');
      $('.site-wrapper').css('background-color', '#21cd99');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary4');
      $('.buttonContinue').css('color', '#21cd99');
      $('.glyphicon').removeClass('green red').addClass('logoGreen');
      $('.btn-primary4').css('background-color', 'white');
      $('small').addClass('whiteText');
      $('.logoRed').css('color', 'black');
      $('.cover-container').css('background-color', '#21cd99');
      $('#formSubmit').removeClass('btn-success').css('background-color', 'white');
      $('#formSubmit').css('color', '#21cd99');
      $('.firstBtn').css('background-color', '#21cd99');
      $('.firstBtn').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'tealWhite'){
      $('#blueText').removeClass('logoBlue').addClass('logoTeal');
      $('.site-wrapper').css('background-color', '#008080');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.glyphicon').removeClass('green red').addClass('logoTeal');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary3');
      $('.buttonContinue').css('color', '#008080');
      $('.logoRed').css('color', 'black');
      $('.buttonContinue').css('background-color', 'white');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#008080');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#21cd99');
      $('.firstBtn').css('background-color', '#008080');
      $('.firstBtn').css('color', 'white');

      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'pinkGreen'){
      $('#blueText').removeClass('logoBlue').addClass('logoPink');
      $('.site-wrapper').css('background-color', '#E672A1');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-Green');
      $('.buttonContinue').css('color', 'white');
      $('.buttonContinue').addClass('shadow');
      $('.logoRed').css('color', 'black');
      $('.btn-primary6').css('background-color', '#21cd99');
      $('.glyphicon').removeClass('green red').addClass('logoGreen');
      $('.btn-primary6').on('focus hover click', function(){
          $(this).toggleClass('activeGreen');
      });
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#E672A1');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#21cd99');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn-footerLeft').css('border-color', '#1AA37A');
          $('.btn-footerRight').css('border-color', '#1AA37A');
          $('.btn').css('border', '0');
      }
}

else if (colorScheme === 'purpleGreen'){
      $('#blueText').removeClass('logoBlue').addClass('logoPurple');
      $('.site-wrapper').css('background-color', '#7374BD');
      $('.navbar-default').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-Green');
      $('.text-center').addClass('whiteText');
      $('.logoRed').css('color', 'black');
      $('.buttonContinue').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary7');
      $('.buttonContinue').css('color', 'white');
      $('.glyphicon').removeClass('green red').addClass('logoPurple');
      $('.btn-primary7').on('focus hover click', function(){
          $(this).toggleClass('activeGreen');
      });
      // $('.btn-primary7').css('background-color', '#21cd99');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#7374BD');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#21cd99');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn').css('border', '0');
      }
}

else if (colorScheme === 'orangeBlack'){
      $('#blueText').removeClass('logoBlue').addClass('logoOrange');
      $('.site-wrapper').css('background-color', '#FF5900');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      $('.logoRed').css('color', 'black');
      $('.buttonContinue').addClass('shadow');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary8');
      $('.glyphicon').removeClass('green red').addClass('logoOrange');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary8').css('background-color', '#424242');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#FF5900');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#424242');
      $('#formSubmit').addClass('shadow');



      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn-footerLeft').css('border-color', 'black');
          $('.btn-footerRight').css('border-color', 'black');
          $('.btn').css('border', '0');
      }
}

else if (colorScheme === 'orangeBlue'){
      $('#blueText').removeClass('logoBlue').addClass('logoOrange');
      $('.site-wrapper').css('background-color', '#f26322');
      $('.text-center').addClass('whiteText');
      $('.navbar-default').addClass('shadow');
      // $('.buttonContinue').addClass('shadow');
      $('.logoRed').css('color', 'black');
      $('.h1Lander').css('color', '#0FB1DD' );
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary8');
      $('input').css('color', 'black');
      $('.glyphicon').removeClass('green red').addClass('logoOrange');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary8').css('background-color', '#0FB1DD');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#f26322');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#0FB1DD');
      $('#formSubmit').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn').css('border', '0');
      }
}


else if (colorScheme === 'navyRed'){
      $('#blueText').removeClass('logoBlue').addClass('whiteText');
      $('.navbar-default').css('background-color', 'rgb(32, 36, 48)');
      // $('#innerCover').css('margin-top', '40px');
      $('.navbar-default').addClass('shadow');
      // $('#innerCover').css('background-color', '#F0F0F0');
      // if (width <= 480) {
      //     $('#innerCover').css('width', '90%');
      //     $('#innerCover').css('margin', 'auto');
      //     $('#innerCover').css('margin-top', '40px');
      // }
      // $('#innerCover').addClass('shadow');
      // $('form').css('padding-top', '80px');
      $('.glyphicon-earphone').css('color', 'white');
      $('.headingRed').removeClass('logoRed').css('color', 'rgb(156,49,49)');
      $('.logoRed').css('color', '#424242');
      $('.site-wrapper').css('background-color', 'rgb(205, 205, 205)');
      $('.text-center').addClass('navyRedText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary9');
      $('input').css('color', 'black');
      $('.h1Lander').addClass('logoRed');
      $('.glyphicon').removeClass('green red').addClass('navyRedText');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary9').css('background-color', 'rgb(32, 36, 48)');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', 'rgb(205, 205, 205)');
      $('#formSubmit').removeClass('btn-success').css('background-color', 'rgb(32, 36, 48)');
      $('#formSubmit').css('color', 'white');
      $('.smallDisclaimer').removeClass('whiteText');
      $('.logoGrey').css('color', 'white');
      $('.goWhite').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}


else if (colorScheme === 'greyRed'){
      $('#blueText').removeClass('logoBlue').css('color', 'rgb(156,49,49)');
      $('.site-wrapper').css('background-color', '#F2F2F2');
      $('.text-center').css('color', 'black');
      $('.logoRed').css('color', '#424242');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary8');
      $('input').css('color', 'black');
      $('.navbar-default').addClass('shadow');
      $('.glyphicon').removeClass('green red').addClass('logoRed');
      $('.buttonContinue').css('color', 'rgb(156,49,49)');
      $('.h1Lander').addClass('logoRed');
      $('.btn-primary8').css('background-color', 'rgb(156,49,49)');
      $('.btn-primary8').css('color', 'white');
      $('.btn-primary8').addClass('shadow');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#F2F2F2');
      $('#formSubmit').removeClass('btn-success').css('background-color', 'rgb(156,49,49)');
      $('#formSubmit').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}


else if (colorScheme === 'greenBlue'){

      $('#blueText').removeClass('logoBlue').css('color', '#44609C');
      $('.site-wrapper').css('background-color', '#44609C');
      $('.text-center').css('color', 'white');
      $('.navbar-default').addClass('shadow');
      $('.logoRed').css('color', '#424242');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary10');
      $('input').css('color', 'black');
      $('.glyphicon-chevron-right').removeClass('green red').css('color', '62A824');
      $('.buttonContinue').css('color', 'rgb(156,49,49)');
      $('.h1Lander').css('color', '#424242');
      $('.btn-primary10').css('background-color', '#62A824');
      $('.btn-primary10').css('color', 'white');
      // $('.btn-primary10').addClass('shadow');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#44609C');
      $('#formSubmit').removeClass('btn-success').css('background-color', '#62A824');
      $('#formSubmit').css('color', 'white');


      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#508A1E');
          $('.btn-footerRight').css('border-color', '#508A1E');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}


else if (colorScheme === 'redBlue'){
      $('#blueText').removeClass('logoBlue').addClass('whiteText');
      $('.navbar-default').css('background-color', 'rgb(32, 36, 48)');
      $('.navbar-default').css('border-color', 'rgb(32, 36, 48)');
      $('.navbar-default').addClass('shadow');
      $('.site-wrapper').css('background-color', '#44609C');
      $('.text-center').addClass('whiteText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary9');
      $('input').css('color', 'black');
      $('.logoRed').css('color', 'black');
      $('.glyphicon.glyphicon-chevron-right').removeClass('green red').addClass('navyRedText');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary9').css('background-color', 'rgb(156,49,49)');
      $('.btn-primary9').addClass('shadow');
      $('.h1Lander').addClass('logoRed');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#44609C');
      $('#formSubmit').removeClass('btn-success').addClass('shadow').css('background-color', 'rgb(156,49,49)');
      $('#formSubmit').css('color', 'white');
      $('.smallDisclaimer').removeClass('whiteText');
      $('.logoGrey').css('color', 'white');
      $('.glyphicon-earphone').css('color', 'white');
      $('.goWhite').css('color', 'white');
      // $('form').css('width', '200%');
      



      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');

      }
}

else if (colorScheme === 'xareltocs'){
      $('#blueText').removeClass('logoBlue').addClass('whiteText');
      $('.navbar-default').css('background-color', '#320D63');
      $('.navbar-default').css('border-color', 'rgb(32, 36, 48)');
      $('.navbar-default').addClass('shadow');
      $('.site-wrapper').css('background-color', '#EBEBEB');
      $('.text-center').addClass('whiteText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary9');
      // $('input').css('color', 'black');
      $('.logoRed').css('color', 'black');
      $('.glyphicon.glyphicon-chevron-right').removeClass('green red').addClass('navyRedText');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary9').css('background-color', 'rgb(156,49,49)');
      $('.btn-primary9').addClass('shadow');
      $('.h1Lander').addClass('logoRed');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#EBEBEB');
      $('#formSubmit').removeClass('btn-success').addClass('shadow').css('background-color', 'rgb(156,49,49)');
      $('#formSubmit').css('color', 'white');
      $('.smallDisclaimer').removeClass('whiteText');
      $('.logoGrey').css('color', 'white');
      $('.glyphicon-earphone').css('color', 'white');
      $('.goWhite').css('color', 'white');
      $('.text-center').addClass('logoGrey');
      // $('form').css('width', '200%');
      



      if (width <= 480) {
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn').css('border', '0');
      }
}

else if (colorScheme === 'xareltocs1'){
      $('#blueText').removeClass('logoBlue').addClass('whiteText');
      $('.navbar-default').css('background-color', '#320D63');
      $('.navbar-default').css('border-color', 'rgb(32, 36, 48)');
      $('.navbar-default').addClass('shadow');
      $('.site-wrapper').css('background-color', '#EBEBEB');
      $('.text-center').addClass('whiteText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary9');
      // $('input').css('color', 'black');
      $('.logoRed').css('color', 'black');
      $('.glyphicon.glyphicon-chevron-right').removeClass('green red').css('color', '#EE2A88');
      $('.buttonContinue').css('color', 'white');
      $('.btn-primary9').css('background-color', '#EE2A88');
      $('.btn-primary9').addClass('shadow');
      $('.h1Lander').addClass('logoRed');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#EBEBEB');
      $('#formSubmit').removeClass('btn-success').addClass('shadow').css('background-color', '#EE2A88');
      $('#formSubmit').css('color', 'white');
      $('.smallDisclaimer').removeClass('whiteText');
      $('.logoGrey').css('color', 'white');
      $('.glyphicon-earphone').css('color', 'white');
      $('.goWhite').css('color', 'white');
      $('.text-center').css('color', 'black');
      // $('form').css('width', '200%');
      



      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid');
          $('.btn-footerLeft').css('border-color', '#DCDCDC');
          $('.btn-footerRight').css('border-color', '#DCDCDC');
          $('.btn').css('border', '0');
      }
}

else if (colorScheme === 'oppDefault'){
      $('#blueText').removeClass('logoBlue').css('color', '#337ab7');
      // $('.navbar-default').css('background-color', '#320D63');
      // $('.navbar-default').css('border-color', 'rgb(32, 36, 48)');
      // $('.navbar-default').addClass('shadow');
      $('.site-wrapper').css('background-color', '#337ab7');
      // $('.text-center').addClass('whiteText');
      $('.buttonContinue').removeClass('btn-primary').addClass('btn-primary9');
      $('input').css('color', 'black');
      $('.logoRed').css('color', 'black');
      $('.glyphicon.glyphicon-chevron-right').removeClass('green red').css('color', '#337ab7');
      $('.buttonContinue').css('color', '#337ab7');
      $('.logoGrey').css('color', '#424242')
      $('.btn-primary9').css('background-color', 'white');
      // $('.btn-primary9').addClass('shadow');
      // $('.h1Lander').addClass('logoRed');
      $('small').addClass('whiteText');
      $('.cover-container').css('background-color', '#337ab7');
      $('#formSubmit').removeClass('btn-success').addClass('shadow').css('background-color', 'white');
      $('#formSubmit').css('color', '#337ab7');
      $('.smallDisclaimer').removeClass('whiteText');
      $('.logoGrey').css('color', '#424242');
      $('.glyphicon-earphone').css('color', '#337ab7');
      $('.goWhite').css('color', '#337ab7');
      $('.text-center').addClass('whiteText');
      $('.firstBtn').css('color', 'white');
      $('.firstBtn').css('background-color', '#424242');


      // $('form').css('width', '200%');
      



      if (width <= 480) {
          $('.btn-footerLeft').css('border-right', '1px solid grey');
          $('.btn-footerLeft').css('border-color', '#424242');
          $('.btn-footerRight').css('border-color', '#424242');
          // $('.btn').css('border', '0');
      }
}




          if (font === 'montserrat') {
            $('.text-center').addClass('montserrat');
          }
          else if (font === 'indieFlower') {
            $('.text-center').addClass('indieFlower');
          }
          else if (font === 'museo-sans') {
            $('.text-center').addClass('tk-museo-sans');
          }
          else if (font === 'nunito') {
            $('.text-center').addClass('nunito');
          }


if (width <= 480) {
    $('.betterList').css('margin-left', '5%');
}

if (subButton === 'y') {
  $('#formSubmit').removeClass('button2').css('padding', '30px');
  $('#formSubmit').css('margin-bottom', '10px');
}
  


