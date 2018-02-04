// hero
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hr-img').css('top',-(scrolled*0.15)+'px');
}



// header
// Hide .hdr-scrll on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $ ('.hdr-scrll').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.hdr-scrll').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.hdr-scrll').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}