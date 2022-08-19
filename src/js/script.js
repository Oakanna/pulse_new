// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     // adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/carousel/chevron_left_solid.png" alt=""></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/carousel/chevron_right_solid.png" alt=""></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   });
// });
const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  navPosition: "bottom",
  responsive: {
    320: {
      nav: true,
    },
    769: {
      nav: false,
    },
  },
});

document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};
document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};
