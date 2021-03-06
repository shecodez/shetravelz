/**
 * Created by Nicole J. Nobles on 12/3/2016.
 */

var $win = $(window);
var winH = $win.height();
var $doc = $(document);
var docH = $doc.height();

/*var $playBtn = $('.play-btn');
if ($playBtn.length)
    var btnPos = $playBtn.offset().top + $playBtn.outerHeight(true);*/

var $footer = $('#footer');
var footerPos = $footer.position().top;

$win.on("scroll", function () {
    var scrollTop = $(this).scrollTop();

    /*console.log(scrollTop);
    console.log("doc h "+docH);
    console.log("win h "+winH);*/

    // remove/show play button only for #intro-section
    /*if ((scrollTop + btnPos) >= winH ) {
        $playBtn.hide();
    } else {
        $playBtn.show();
    }*/

    // remove/show scrollDown icon if end/more content
    if ((scrollTop + winH) >= footerPos ) {
        $('.scroll-down').hide();
    } else {
        $('.scroll-down').show();
    }

}).on("resize", function() {
    winH = $(this).height();
    docH = $doc.height();
    footerPos = $footer.position().top;
});

$('[data-toggle="popover"]').popover({
    trigger: 'hover'
});

var $spotlightWrapper = $('.wrapper li');
$spotlightWrapper.on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');

    $(this).siblings().find('.reveal').hide();
    if($(this).hasClass('active')) {
        if($(this).hasClass('current-season')) {
            $(this).find('.reveal').show();
        }
    }
});

/*$playBtn.on('click', function() {
 //play 360deg video
 });*/

/* Error Page */
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

// Credit: Fabio Ottaviani
function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.error-page').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

animate();

// toggle menus
var navBarClosed = true;
var searchClosed = true;
var signInClosed = true;

// toggle navigation
$('.btn-toggle-menu').on('click', function() {
    if (searchClosed && signInClosed) {
        $(this).toggleClass('open');
        $('.overlay').toggleClass('open');
        $('.nav-toggle-menu').toggleClass('open');
        navBarClosed = !navBarClosed;
    }
});

// toggle search
$('.btn-toggle-search').on('click', function() {
    if (navBarClosed && signInClosed) {
        $(this).toggleClass('open');
        $('.overlay').toggleClass('open');
        $('.search-toggle-menu').toggleClass('open');
        searchClosed = !searchClosed;
    }
});

// toggle SignIn/SignUp
$('.btn-toggle-signin').on('click', function() {
    if (searchClosed && navBarClosed) {
        $(this).toggleClass('open');
        $('.overlay').toggleClass('open');
        $('.signin-signup-menu').toggleClass('open');
        signInClosed = !signInClosed;
    }
});

