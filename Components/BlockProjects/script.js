export default function (el) {
  /***************************
	Swiper
	***************************/

  var swiperSelectors = document.querySelectorAll(".swiper-container");

  swiperSelectors.forEach(function (swiperSelector, index) {
    swiperSelector.classList.add("swiper-slider-" + index);

    var dragSize = 270;

    if (window.innerWidth < 700) {
      dragSize = 80;
    } else if (window.innerWidth < 940) {
      dragSize = 200;
    }

    var swiper = new Swiper(".swiper-slider-" + index, {
      spaceBetween: 20,
      slidesPerView: 1,

      breakpoints: {
        700: {
          slidesPerView: 1.5,
        },
        940: {
          slidesPerView: 3,
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
}
