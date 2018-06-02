//Плавное выпадающее меню
$(document).ready(function () {
    var compare = $('.compare-wrapper');
    var lk = $('.lk-wrapper');
    var phone = $('.header__phone')
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
        if( $('#menu-btn').hasClass('active')){
            if($(window).width() < 768){
                compare.show()
                lk.show()
                if($(window).width() < 600){
                    phone.show()
                }
            }     
        }
        else{
            if($(window).width() < 768){
                compare.hide()
                lk.hide()
                if($(window).width() < 600){
                    phone.hide()
                }
                
            }
        }
    });
    
});
