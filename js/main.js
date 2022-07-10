;(function($) {
    "use strict";

    $(document).ready(function(){
        $('.method__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            appendDots: '.method__dots',
            // prevArrow: '.links-slider-prev',
		    // nextArrow: '.links-slider-next',
        });
      });

      $(document).ready(function(){
        $('.method__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: '.method__dots',
        });
      });

})(jQuery); 