// Initialize Swiper
var mySwiper = new Swiper(".swiper__container", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
  },
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});

// Custom fade-in on scroll
(function () {
  let elements;
  let windowHeight;
  let offset;

  function init() {
    elements = document.querySelectorAll("[data-fadeup]");
    windowHeight = window.innerHeight;
    offset = windowHeight * 0.25;
  }

  function checkPosition() {
    elements.forEach((element, index) => {
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight + offset <= 0) {
        element.setAttribute("data-fadeup-active", "");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
