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
        $('.title1 .icon').addClass('icon-change');
    }
    else{
        $('.title1 .icon').removeClass('icon-change');
    }
})
$('.title2').click(function(){
    if(!$(this).hasClass('active')){
        $('.title2 .icon').addClass('icon-change');
    }
    else{
        $('.title2 .icon').removeClass('icon-change');
    }
})
$('.title3').click(function(){
    if(!$(this).hasClass('active')){
        $('.title3 .icon').addClass('icon-change');
    }
    else{
        $('.title3.icon').removeClass('icon-change');
    }
})
$('.title4').click(function(){
    if(!$(this).hasClass('active')){
        $('.title4 .icon').addClass('icon-change');
    }
    else{
        $('.title4 .icon').removeClass('icon-change');
    }
})
$('.title5').click(function(){
    if(!$(this).hasClass('active')){
        $('.title5 .icon').addClass('icon-change');
    }
    else{
        $('.title5 .icon').removeClass('icon-change');
    }
})
 