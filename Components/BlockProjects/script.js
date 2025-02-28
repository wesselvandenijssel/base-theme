export default function (el) {
  /***************************
	Swiper
	***************************/

  const swiperSelectors = document.querySelectorAll('.swiper-container')

  swiperSelectors.forEach(function (swiperSelector, index) {
    swiperSelector.classList.add('swiper-slider-' + index)

    let dragSize = 270

    if (window.innerWidth < 700) {
      dragSize = 80
    } else if (window.innerWidth < 940) {
      dragSize = 200
    }

    const swiper = new Swiper('.swiper-slider-' + index, {
      spaceBetween: 20,
      slidesPerView: 1,

      breakpoints: {
        700: {
          slidesPerView: 1.5
        },
        940: {
          slidesPerView: 2.2
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize
      }
    })
  })
}
