import $ from 'jquery'
import 'slick-slider'

/*
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax, Power4 } from "gsap"; // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
*/
window.jQuery = window.$ = $;
// import slick from "slick-slider";
//import popper from "popper.js";
// import bootstrap from "bootstrap";


$(function() {
    $("#hamburger-icon").on("click", function() {
        $("body").toggleClass("active_m");
        $(".mobile-menu-toggle").slideToggle();
        $(".js-link-submenu").removeClass("active")
        $(".menu-lvl3__overflow").removeClass("show")
    });
    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });
    $('.slider-project .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slider-project .arr-left'),
        nextArrow: $('.slider-project .arr-right'),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ]
    });
    $('.slider-part .slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        //variableWidth: true,
        arrows: true,
        prevArrow: $('.slider-part .arr-left'),
        nextArrow: $('.slider-part .arr-right'),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ]
    });
    $(".js-link-submenu").hover(function() {
        $(".js-link-submenu").removeClass("active")
        $(this).addClass("active")
        let menuId = $(this).data("id")
        console.log("menuId", menuId)
        $(".menu-lvl3__overflow").removeClass("show")
        $(".js-menu-tab-"+menuId).addClass("show")
        $("body").addClass("active_m__lvl3")
    }, function() {
    
    });
    $(".js-menu-lvl3-close").on("click", function (){
        $(".js-link-submenu").removeClass("active")
        $(".menu-lvl3__overflow").removeClass("show")
        $("body").removeClass("active_m");
        $(".mobile-menu-toggle").slideUp();
    })
    $(".js-menu-lvl3-back").on("click", function (){
        $(".js-link-submenu").removeClass("active")
        $(".menu-lvl3__overflow").removeClass("show")
        $("body").removeClass("active_m__lvl3");

    })
    $(".js-market-menu-button").on("click", function (){
        $(this).toggleClass("active")
        $(this).closest('.js-market-menu-wrapper').find(".js-market-menu__menu").slideToggle()
    })
    $(".js-drop-btn").on("click", function (){
        $(this).parent().toggleClass("active")
        $(this).next().slideToggle();
        
    })
    /** finish modals ***/
});
