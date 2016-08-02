$( document ).ready(function() {

    var contentPlacement = $('.header').position().top + $('.header').outerHeight();
    $('#timeline').css('margin-top', contentPlacement + 0.5);


  $("#timeline-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#timeline").offset().top
      }, 500);
  });

  $("#samples-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#samples").offset().top
      }, 500);
  });

  $("#application-link").click(function() {
      $('html, body').animate({
          scrollTop: $("#application").offset().top
      }, 500);
  });

});