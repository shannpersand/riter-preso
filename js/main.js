/*jshint devel:true */



// On click of term 1-3 
// add class of hidden to terms that are not clicked
// remove hidden class from term that was clicked
// change background color

// add image sliders


// Update sliders on resize. 
// Because we all do this: i.imgur.com/YkbaV.gif
$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
  
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    var minLeft = containerOffset + 10;
    var maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {
      
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      var leftValue = moveX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
      
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}



$( document ).ready(function() {

  function stickIt() {
     var windowH = $(window).height();
     var topValue = windowH;
      
      $('.js-stick-it').css({'position':'absolute'});

         var scrollVal = $(this).scrollTop();
          if ( scrollVal > topValue ) {
              $('.js-stick-it').css({'position':'fixed','top' :'0','box-shadow': '0 2px 6px rgba(0,0,0, 0.2)', 'transition': 'all 100ms ease'});
          } else {
              $('.js-stick-it').css({'position':'static','box-shadow': 'none', 'transition': 'all 100ms ease'});
          } 

  }

  $( window ).on('resize scroll', stickIt);

  $('.js-term-two').hide();
  $('.js-term-three').hide();

  $('#termOne').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.js-term-one').fadeIn('slow');
    $('.js-term-two').fadeOut('slow');
    $('.js-term-three').fadeOut('slow');
    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
    $('.nav--term').css('background', 'turquoise');
    $('body').css('background', 'mintcream');
  });

  $('#termTwo').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.js-term-two').fadeIn('slow');
    $('.js-term-one').fadeOut('slow');
    $('.js-term-three').fadeOut('slow');
    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
    $('.nav--term').css('background', 'deepskyblue');
    $('body').css('background', 'aliceblue');
  });

  $('#termThree').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.js-term-three').fadeIn('slow');
    $('.js-term-one').fadeOut('slow');
    $('.js-term-two').fadeOut('slow');
    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
    $('.nav--term').css('background', 'orchid');
    $('body').css('background', 'snow');
  });

  


  $('.ba-slider').each(function(){
    var cur = $(this);
    // Adjust the slider
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });

  $('#toTermTwo').click(function () {
    $('#termTwo').addClass('active').siblings().removeClass('active');
    $('.js-term-two').fadeIn('slow');
    $('.js-term-one').fadeOut('slow');
    $('.js-term-three').fadeOut('slow');
    $('.nav--term').css('background', 'deepskyblue');
    $('body').css('background', 'aliceblue');

    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });

        $("html, body").animate({
            scrollTop: $(window).height()
        }, 600);
        return false;

  });

  $('#toTermThree').click(function () {
    $('#termThree').addClass('active').siblings().removeClass('active');
    
    $('.js-term-three').fadeIn('slow');
    $('.js-term-one').fadeOut('slow');
    $('.js-term-two').fadeOut('slow');
    $('.nav--term').css('background', 'orchid');
    $('body').css('background', 'snow');

    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });

    $("html, body").animate({
            scrollTop: $(window).height()
        }, 600);
        return false;

  }); 

});

