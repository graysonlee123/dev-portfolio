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

// Mobile menu logic
const hamburger = document.getElementById('hamburger');
let isOpen = false;

hamburger.onclick = function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  
  if (isOpen) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    isOpen = false;
  } else {
    menu.classList.add('active');
    hamburger.classList.add('active');
    isOpen = true;
  }
}