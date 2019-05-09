$(document).ready(function() {

    $(".navscroll").show();

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() < 570) {
                $('.navscroll').fadeIn();
            } else {
                $('.navscroll').fadeOut();
            }
        });
    });

});