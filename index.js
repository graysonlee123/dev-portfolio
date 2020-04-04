// Initialize Animate on Scroll
AOS.init();

// Initialize Swiper
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },
  grabCursor: true,
  spaceBetween: 24,
  autoplay: false
});