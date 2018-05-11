/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

(function($){
    $(function(){
       
    var animation_speed = 500;
 
    if ($('body').hasClass("slide-vertical")) {
      var tid = setInterval(tagline_vertical_slide, 1500);
    }
    else {
      var tid = setInterval(tagline_fade, 1500);
    }
 
    // fade style
    function tagline_fade() {
      var curr = $("span.welcome span a.active");
      curr.removeClass("active");
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("span.welcome span a").first();
      } 
      nextTag.addClass("active");
    }
 
    // vertical slide
    function tagline_vertical_slide() {
      var curr = $("span.welcome span a.active");
      curr.removeClass("active").addClass("vs-out");
      setTimeout(function(){
        curr.removeClass("vs-out");
      }, animation_speed);
 
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("span.welcome span a").first();
      } 
      nextTag.addClass("active");
    }
 
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }
 
    // Background adjustments
    if ($(window).height() > $(window).width()) {
      $("#home .background img").css({'width': 'auto', 'height': '100%'})
    }
 
    }); // end of document ready
})(jQuery); // end of jQuery name space




jQuery(document).ready(function($){
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});

jQuery(document).ready(function($){

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function () {
    $('.accordion-toggle').on('click', function(event){
      event.preventDefault();
      // create accordion variables
      var accordion = $(this);
      var accordionContent = accordion.next('.accordion-content');
      var accordionToggleIcon = $(this).children('.toggle-icon');
      
      // toggle accordion link open class
      accordion.toggleClass("open");
      // toggle accordion content
      accordionContent.slideToggle(250);
      
      // change plus/minus icon
      if (accordion.hasClass("open")) {
        accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
      } else {
        accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
      }
    });
});



});