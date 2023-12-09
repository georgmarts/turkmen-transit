window.onload = function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    // pagination: {
    //   el: ".swiper-pagination",
    // },

    navigation: {
      nextEl: ".slider1__button-next",
      prevEl: ".slider1__button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
