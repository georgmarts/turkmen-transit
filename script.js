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

  const xIcon = document.querySelector(".x-icon");
  const navEl = document.querySelector("nav");
  const hamburgerEl = document.querySelector(".hamburger");

  hamburgerEl.addEventListener("click", () => {
    navEl.style.opacity = "1";
    navEl.classList.remove("pointer-events-none");
    navEl.classList.add("pointer-events-all");
  });

  xIcon.addEventListener("click", () => {
    navEl.style.opacity = "0";
    navEl.classList.remove("pointer-events-all");
    navEl.classList.add("pointer-events-none");
  });
};
