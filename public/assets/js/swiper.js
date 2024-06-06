import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    initialSlide: 1,
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});