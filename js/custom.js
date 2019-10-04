/*============================================
	* Author		: # name#
	* Template Name : name | HTML Template
	* version		:1.0
	
==============================================
*========== TABLE OF CONTENTS ================

    0.1 WoW js 
    0.2 Preloader Js
	0.3 Banner-silder
	0.4 Testimonial-silder
	0.5 Brand-silder
	0.7 Sticky-Header
    0.8	Use smooth scrolling when clicking on navigation
	0.9 search-box js
	10  Dropdown_menu js
    11 NiceScroll js
    12 scrolltop js
    13 Isotope js
    14 range-slider ui js
    15 Tooltip js
    16 Gmaps.js

========================================*/

$(document).ready(function () {
    "use strict";
    //-------- 0.1 WoW Js --------
    new WOW().init({

    });


    // -------- 0.2 Preloader Js --------

    //    $(function () {
    //        $(window).on("load", function () {
    //            $('.preloader').fadeOut(500);
    //        });
    //    });


    // -------- 0.3 Banner-silder --------

    $('.banner_carousel').owlCarousel({
        loop: true,
        items: 1,
        responsiveClass: true,
        //        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<div class="prev slider_arrow_icon"><i class="fas fa-chevron-left"></i></div>', '<div class="next slider_arrow_icon"><i class="fas fa-chevron-right"></i></div>'],
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });


    //-------- 0.4 Testimonial-Slider --------


    $('.testimonial_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        //        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            768: {
                items: 2
            }
        }

    });

    //-------- 0.5 Brand-silder --------
    $('.brand_carousel').owlCarousel({
        loop: true,
        items: 5,
        margin: 30,
        responsiveClass: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        center: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5
            }
        }
    });

    //--------0.7 Sticky-Header--------
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 180) sticky.addClass('fixed')
        else sticky.removeClass('fixed');
    });
    //-------- 0.8	Use smooth scrolling when clicking on navigation--------

    $(function () {
        var topoffset = 50; //variable for menu height
        $('.main-menu a').click(function () {
            if (location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - topoffset
                    }, 1000);
                    return false;
                } //target.length
            } //click function
        }); //smooth scrolling

    });
});

//--------0.9 search-box js --------

$('.search-toggle a i').click(function () {
    $('.search-box').slideDown(200);
});

$('.close-btn i').click(function () {
    $('.search-box').slideUp(100);
});

//--------10 Dropdown_menu js--------

$('.icon').click(function () {
    $('.md_drop_menu').slideToggle();
});
$('.icon').click(function () {
    $('.icon').toggleClass("active");
});
$('.d_P_icon').click(function () {
    $('.md_drop_menu_pages').slideToggle();
});
$('.d_P_icon').click(function () {
    $('.d_P_icon').toggleClass("active");
});

//--------11 NiceScroll js --------


$(".custom_scroll").niceScroll({
    autohidemode: false,
});
//-------- 12 scrolltop js --------

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

//-------- 13 Isotope js --------

$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
});

//-------- 14 Range-Slider ui js --------

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 410],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

//-------- 15 Tooltip js --------
$(document).ready(function(){
  $("a").tooltip();   
});

//-------- 16 gmaps.js --------
       var map = new GMaps({
  div: '#map',
  lat: 24.886436,
lng: 91.880722
});


GMaps.geocode({
  address: 'Germany',
  callback: function(results, status){
    var firstResult = results[0];
    map.setCenter(firstResult.geometry.location.lat(), firstResult.geometry.location.lng());
    map.setZoom(7);
  }
}); 
        map.addMarker({
            lat: 24.886436,
            lng: 91.880722,
            title: 'Sylhet',
            icon: 'images/map-2.png',
            animation: google.maps.Animation.BOUNCE

        });