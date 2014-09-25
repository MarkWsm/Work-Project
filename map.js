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
};
    
$(document).ready(main);