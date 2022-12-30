$(function () {
//-----------*** Ready function ***-----------/
//--------------------------------------------/
  //---/---/---/---*** loader - S ***---/---/---/---/
  $(window).on('load', function () {
    $('#preloader').fadeOut(2000);
  });
  //---/---/---/---*** loader - E ***---/---/---/---/
  //---/---/---/---*** back to top & hov.. menu - S ***---/---/---/---/
  $(window).on('scroll', function (){
  //------/-----***** back to top *****------/-----/
    var scrollsize = $(window).scrollTop()
    if(scrollsize > 600){
    $('#back_btn').show(500)
    }else{
    $('#back_btn').hide(500)
    };
  //------/-----***** back to top *****------/-----/
  //------/-----***** hov.. menu *****------/-----/
    if(scrollsize > 100) {
      $('#nav').addClass('active')
    }else{
      $('#nav').removeClass('active')
    };
  //------/-----***** hov.. menu *****------/-----/
  });
  $('#back_btn').on('click', function (){
    $('html,body').animate({
      scrollTop:0,
    }, 1500);
  });
  //---/---/---/---*** back to top & hov.. menu - E ***---/---/---/---/
  //---/---/---/---*** banner - S ***---/---/---/---/
  $('.slide_banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1500,
    dots: true,
    dotsClass:'slider_dots'
  });
  //---/---/---/---*** banner - E ***---/---/---/---/
  //---/---/---/---*** new product - S ***---/---/---/---/
  $('.product_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left slide_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right slide_icon"></i>',
  });
  //---/---/---/---*** new product - E ***---/---/---/---/
  //---/---/---/---*** Deals day - S ***---/---/---/---/
  $('#deal_timer').countdown('2023/01/02', function(event) {
    var $this = $(this).html(event.strftime(''       
      +'<div class="timer_info"><span>%D</span><span>Days</span></div>'+
         '<span class="saparator">:</span>'+
       '<div class="timer_info"><span>%H</span><span>Hour</span></div>'+
         '<span class="saparator">:</span>'+
       '<div class="timer_info"><span>%M</span><span>Minute</span></div>'+
         '<span class="saparator">:</span>'+
       '<div class="timer_info"><span>%S</span><span>Sec</span></div>'
    ));
  });
  //---/---/---/---*** Deals day - E ***---/---/---/---/
//--------------------------------------------/
//-----------*** Ready function ***-----------/
})