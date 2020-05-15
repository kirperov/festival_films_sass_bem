/*Will open or close menu on click*/ 
$('.nav-toggle').click(function() {
    $('.nav ul').toggleClass('opening');
    $(this).toggleClass('open');
       
});

/*Catch ecan size to show or hide menu elements*/ 
$(document).ready(function() {
    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 780) {
            $('.nav ul').removeClass('open');
            $('.nav ul').removeClass('opening');
        }
        else {
            $('.nav-toggle').removeClass('open');
            $('.nav ul').removeClass('opening');
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});