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
  const scrollY = window.scrollY;
  
  if (isOpen) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');

    // Unset Prevent Scrolling
    const scrollY = document.body.style.top;
    
    document.body.style.position = '';
    document.body.style.top = '';

    //  Scroll to old position
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    isOpen = false;
  } else {
    menu.classList.add('active');
    hamburger.classList.add('active');
    
    // Prevent scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    
    isOpen = true;
  }
}