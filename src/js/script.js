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
    1024: {
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

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  // MODAL
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("fest");
  });
  $(".modal__close").on("click", function () {
    $(".overlay,#consultation,#order,#thanks").fadeOut("slow");
  });
  $("[data-modal=order]").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("fest");
    });
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите имя",
        phone: "Пожалуйста, введите номер телефона",
        email: {
          required: "Нам нужен ваш электронный адрес, чтобы связаться с вами",
          email: "Ваш адрес должен быть в формате name@domain.com",
        },
      },
    });
  }
  validateForm("#consultation form");
  validateForm("#consultation-form");
  validateForm("#order form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");
});
jQuery;
