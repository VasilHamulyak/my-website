$(document).ready(function() {
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        var href = $.attr(this, 'href');
        $page.animate({
            scrollTop: $(href).offset().top
        }, 600, function() {
            window.location.hash = href;
        });
        return false;
    });
});
