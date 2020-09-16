// Initialize Splide
new Splide(".splide", {
  padding: {
    right: "8rem",
    left: "8rem",
  },
  gap: "1rem",
  arrows: false,
  breakpoints: {
    767: {
      padding: {
        right: "1rem",
        left: "1rem",
      },
    },
  },
}).mount();

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
