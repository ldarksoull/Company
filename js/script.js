//Плавное выпадающее меню
$(document).ready(function () {
    // var compare = $('.compare-wrapper');
    // var lk = $('.lk-wrapper');
    // var phone = $('.header__phone');
    $("#menu-btn").click(function () {
        $("#menu").slideToggle('fast');
        $(this).toggleClass("active");
        if ($('#menu-btn').hasClass('active')){
            $('.fa-times').show()
            $('.fa-bars').hide()
        }
        else{
            $('.fa-times').hide()
            $('.fa-bars').show()
        }
    
    });
    
});
//accordeon

  $('.ui.accordion').accordion();
  $('.accordion')
  .accordion({
    selector: {
      trigger: '.title'
    }
  })
;
$('.title1').click(function(){
    if(!$(this).hasClass('active')){
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow.png')")
    }
    else{
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
})
$('.title2').click(function(){
    $('.title2 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
    if(!$(this).hasClass('active')){
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow.png')");
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow.png')");
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow.png')");
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
    else{
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
})
$('.title3').click(function(){
    if(!$(this).hasClass('active')){
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow.png')")
    }
    else{
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
})
$('.title4').click(function(){
    if(!$(this).hasClass('active')){
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow.png')")
    }
    else{
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
})
$('.title5').click(function(){
    if(!$(this).hasClass('active')){
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow-pink.png')");
        $('.title1 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title2 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title3 .icon').css('background-image', "url('/image/icon-arrow.png')")
        $('.title4 .icon').css('background-image', "url('/image/icon-arrow.png')")
    }
    else{
        $('.title5 .icon').css('background-image', "url('/image/icon-arrow.png')");
    }
})


