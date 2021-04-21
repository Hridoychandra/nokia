(function ($) {
  "use strict";

new WOW().init();
//counter plugin here
$('.counter').counterUp({
  delay: 20,
  time: 1000,
});

$('.testimonial-active').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
})



$('.mobile-menu').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "991",
});
   


   //sticky menu
   $(window).on('scroll', function () {
     var scroll = $(window).scrollTop();
     if (scroll < 1) {
       $(".header-middle").removeClass("scroll-header");
     } else {
       $(".header-middle").addClass("scroll-header");
     }
   });
   var config = document.querySelector('mymixcount');
   var mixer = mixitup(config);
   









})(jQuery);



