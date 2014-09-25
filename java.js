var main = function() {
  /* Push the body and the nav over by 120px over */
  $('.icon-menu').click(function() {
    $('.hidenMenu').animate({
      top: "0px"
    }, 200);

    $('body').animate({
      top: "120px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.hidenMenu').animate({
      top: "-120px"
    }, 200);

    $('body').animate({
      top: "0px"
    }, 200);
  });
    
      /* New Function SLIDER */
  
  $('.arrow-next').click(function() {
    var currentSlide = $('.first-slide');
    var nextSlide = currentSlide.next();


    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    }
    
    currentSlide.fadeOut(600).removeClass('first-slide');
    nextSlide.fadeIn(600).addClass('first-slide');


  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.first-slide');
    var prevSlide = currentSlide.prev();


    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
    }
    
    currentSlide.fadeOut(600).removeClass('first-slide');
    prevSlide.fadeIn(600).addClass('first-slide');

  });
    
};


$(document).ready(main);