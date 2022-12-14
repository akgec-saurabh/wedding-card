var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 40,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});

const menu = document.querySelector("#menu");
const login = document.querySelector(".login");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("hide");
  login.classList.toggle("hide");
});
