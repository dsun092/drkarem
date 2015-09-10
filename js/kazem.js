console.log("hello world");

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.main_menu').addClass('fixed');
    } else {
        $('.main_menu').removeClass('fixed');
    }
});