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
