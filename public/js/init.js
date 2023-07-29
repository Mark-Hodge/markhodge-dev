/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

   setTimeout(function() {
   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
   }, 100);

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar using jQuery
------------------------------------------------------*/
   (function highlightNav() {
      var prev; //keep track of previous selected link
      var isVisible= function(el){
          el = $(el);
          
          if(!el || el.length === 0){
              return false
          };
  
          var docViewTop = $(window).scrollTop();
          var elemTop = el.offset().top;

          var retVal = (elemTop <= docViewTop);
          return retVal;
      }
          
      $(window).scroll(function(){
          $('#nav-wrap a').each(function(index, el){
              el = $(el);
              if(isVisible(el.attr('href'))){
                  if(prev){
                      prev.parent().removeClass('current');
                  }
                  el.parent().addClass('current');
                  prev = el;
                  
                  //break early to keep highlight on the first/highest visible element
                  //remove this you want the link for the lowest/last visible element to be set instead
                  // return false; 
              }
          });
      });
      
      //trigger the scroll handler to highlight on page load
      $(window).scroll();
  })();

/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }
	});

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/
   $('#contact-form').on('submit', function(event) {
      event.preventDefault();

      var formFirstName = $('#contact-form #contactFirstName').val();
      var formLastName = $('#contact-form #contactLastName').val();
      var formEmail = $('#contact-form #contactEmail').val();
      var formSubject = $('#contact-form #contactSubject').val();
      var formMessage = $('#contact-form #contactMessage').val();
      var date = new Date();

      var requestData = {
         service_id: 'service_8o4bsoz',
         template_id: 'template_xppz30e',
         user_id: 'p0loCR_Y0Wx794PTF',
         template_params: {
            from_first_name: formFirstName,
            from_last_name: formLastName,
            reply_to: formEmail,
            subject: formSubject,
            message: formMessage,
            time_stamp: date.toString()
         }
      };
      
      $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
	      type: "POST",
         contentType: 'application/json',
         data: JSON.stringify(requestData),
         success: function(msg, status, jqXHR) {
            alert("Your info has been sent, Thank you!");
            $('#message-warning').hide();
            $('#contactForm').fadeOut();
            $('#message-success').fadeIn();
            console.log("Contact form sent successfully\n" +
               "status: " + status + "\nReason: " + msg.status + " " + jqXHR + date.toString());
         },
         error: function(msg, status, jqXHR) {
            alert("There was a problem submitting your info.\n" + "Please reach out directly: " + "mark@markhodge.dev");
            $('#message-warning').html("There was a problem submitting your info.");
            $('#message-warning').fadeIn();
            console.log("Contact form failed\n" +
               "status: " + status + "\nReason: " + msg.status + " " + jqXHR + date.toString());
         }
      });
   });
});