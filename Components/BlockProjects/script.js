jQuery(document).ready(function ($) {
  (function ($) {
    /***************************
	Swiper
	***************************/

    var swiperSelector = $(".swiper-container");

    swiperSelector.each(function (index) {
      $(this).addClass("swiper-slider-" + index);

      var dragSize = 270;

      if ($(window).width() < 700) {
        dragSize = 80;
      } else if ($(window).width() < 940) {
        dragSize = 200;
      }

      var swiper = new Swiper(".swiper-slider-" + index, {
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 1,

        breakpoints: {
          700: {
            slidesPerView: 1.5,
          },
          940: {
            slidesPerView: 2.2,
          },
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          dragSize: dragSize,
        },
      });
    });
  });
});
