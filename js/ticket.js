window.addEventListener("load", function () {
  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 8,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".tivket_slide_prev",
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
