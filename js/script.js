$(document).ready(function(){
  // $('.star-wars-text').animate({
  //   'background-size':'140%'
  // },20000);
  //
  // $('.star-wars-text .intro-hero-logo').animate({
  //   'width':'350px',
  //   'height':'350px',
  //   'opacity':1
  // },1200);
  //
  //
  // setTimeout(function(){
  //     $('.star-wars-text').fadeOut(3500).hide();
  //     $('.homepage').fadeIn(1500);
  // },12000);

  $('.homepage').fadeIn(1500);
});




$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

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
