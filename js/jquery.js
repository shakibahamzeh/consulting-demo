   
   $(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.elevator').css('display', 'flex');
        } else {
            $('.elevator').hide();
        }
    });
$('.elevator').click(function () {
    $('body , html').animate({ scrollTop: 0 }, 1000, 'swing');
});
});