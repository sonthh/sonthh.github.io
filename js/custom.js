//Go to top
$(function () {

    var scroll_timer;
    var displayed = false;
    var $message = $('#message');
    var $window = $(window);
    var top = $(document.body).children(0).position().top;

    $window.scroll(function () {
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function () {
            //thay đối top lại cho scroll
            //if ($window.scrollTop() <= 100) {    
            if ($window.scrollTop() <= 200) {
                displayed = false;
                $message.fadeOut(500);
            }
            else if (displayed == false) {
                displayed = true;
                $message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
            }
        }, 100);
    });
    $('#top-link').click(function (e) {
        console.log('hello');
        
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        //$.scrollTo(0, 300);

    });
});



//Tipsy

$(function () {

    $('.north').tipsy({ gravity: 'n' });

});


//Contact Form Box

$(document).ready(function () {
    $("a[rel='gallery']").colorbox();
    $("#contact").colorbox({ width: "500", height: "580", iframe: true });
});