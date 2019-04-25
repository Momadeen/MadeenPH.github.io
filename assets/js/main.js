// Move Gallery image with mouse hover 
    'use strict';

var followX = 0,
    followY = 0,
    x = 0,
    y = 0,
    friction = 2 / 30;

var moveImage = () => {
    // x = x + (followX - x) * friction
    x += (followX - x) * friction;

    // y = y + (followY - y) * friction
    y += (followX - y) * friction;

    // Css what will use in JavaScipt css

    var translate = 'translate(' + x + 'px,' + y + 'px) scale(1.1)';
    
    
    $('.gallery-box .gal-img img').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveImage);
}
$(".gallery").on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    followX = (10 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    followY = (10 * lMouseY) / 100;
  
    });
  
moveImage();

///

// Show menu

$(window).ready(function(){
    $("i.fa-bars").on("click", function(){
        $("i.fa-bars").css("display", "none");
        $("i.fa-xing").css("display", "block");
        $("header .menu-item ul").css("display", "block");
        $(".menu-item").animate({
            width: "100%",
            height: "100%",
        }, 1000);
    });

    $("i.fa-xing").on("click", function(){
        $("i.fa-bars").css("display", "block");
        $("i.fa-xing").css("display", "none");
        $("header .menu-item ul").css("display", "none");
        $(".menu-item").animate({
            width: "0%",
            height: "0%",
        }, 1000);
    });

    $("header .menu-item ul li").on("click", function(){
        $("i.fa-bars").css("display", "block");
        $("i.fa-xing").css("display", "none");
        $("header .menu-item ul").css("display", "none");
        $(".menu-item").animate({
            width: "0%",
            height: "0%",
        }, 1000);
    });

});

$(document).ready(function(){
    $('.number').countTo();

    // for fade up sections
    AOS.init({
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
    });
});