$(function() {
    $('#btn').on('click', function(event) {
         var target = $('header');
        // if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollBottom: target.offset().bottom
            }, 2000);
        // }
     });
});