import "swiper/css/bundle";
import Swiper from "swiper/bundle";

(function initSwiper() {
  new Swiper(".swiper", {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 99999999
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();
