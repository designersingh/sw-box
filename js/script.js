$(window).scroll(function(){
  wScroll = $(this).scrollTop();

  $('.yoda').css({
    'transform':'translate(0px,'+ wScroll/10+'%)'
  });

  $('.darth-vader').css({
    'transform':'translate(0px,'+ wScroll/4+'%)'
  });

  $('.intro-hero-logo').css({
    'transform':'translate(0px,'+ wScroll/6+'%)'
  });

});
