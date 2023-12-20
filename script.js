window.onload = function () {
  const swiper = new Swiper(".swiper-1", {
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const swiper2 = new Swiper(".swiper-2", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const swiper3 = new Swiper(".swiper-3", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "5",
    spaceBetween: "200",
  });
};
