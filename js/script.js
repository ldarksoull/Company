//Плавное выпадающее меню
$(document).ready(function () {
    $("#menu-btn").click(function () {
        $("#menu").slideToggle('fast');
        $(this).toggleClass("active");
        if ($('#menu-btn').hasClass('active')) {
            $('.fa-times').show()
            $('.fa-bars').hide()
        } else {
            $('.fa-times').hide()
            $('.fa-bars').show()
        }
    });
});
//accordion
$('.ui.accordion').accordion();
$('.accordion').accordion({
        selector: {
            trigger: '.title'
        }
    });

$('#title2 .icon').css('background-image', "url('image/icon-arrow-pink.png')");
$('#title1, #title2, #title3, #title4, #title5').click(function () {
    if ($(this).hasClass('active')) {
        $('#' + $(this).attr('id') + ' .icon').css('background-image', "url('image/icon-arrow.png')");
    } else {
        $('#title1 .icon').css('background-image', $(this).attr('id') === 'title1' ? "url('image/icon-arrow-pink.png')" : "url('image/icon-arrow.png')");
        $('#title2 .icon').css('background-image', $(this).attr('id') === 'title2' ? "url('image/icon-arrow-pink.png')" : "url('image/icon-arrow.png')");
        $('#title3 .icon').css('background-image', $(this).attr('id') === 'title3' ? "url('image/icon-arrow-pink.png')" : "url('image/icon-arrow.png')");
        $('#title4 .icon').css('background-image', $(this).attr('id') === 'title4' ? "url('image/icon-arrow-pink.png')" : "url('image/icon-arrow.png')");
        $('#title5 .icon').css('background-image', $(this).attr('id') === 'title5' ? "url('image/icon-arrow-pink.png')" : "url('image/icon-arrow.png')");
    }
});




//slider
$(window).on('load resize', function() { 
    if ($(window).width() < 768) {
      $('.news-feed').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1
      });
    }
    else{
        $(".news-feed").slick("unslick");
    }
  });

// footer
$(window).on('load resize', function() {
    if ($(window).width() < 640){
        $('.footer-menu__title').addClass('title');
        $('.footer-menu-list').addClass('content');
        $('.footer-menu').accordion({
            selector: {
                trigger: '.title',
                content: '.content'
            }
    });
    }
    else{
        $('.footer-menu__title').removeClass('title');
        $('.footer-menu-list').removeClass('content');
    }
})


