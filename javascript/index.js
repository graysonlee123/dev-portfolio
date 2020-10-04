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

// Fadeup Animations
window.addEventListener(
  "load",
  (event) => {
    createObserver();
  },
  false
);

function createObserver() {
  let observer;
  let options = {
    // root: null = window
    root: null,
    rootMargin: "0px 0px 30px 0px",
    threshold: 0,
  };

  observer = new IntersectionObserver(handleIntersect, options);
  buildTargets(observer);
}

function buildTargets(observer) {
  const animationTargets = document.getElementsByClassName("fadeUp");

  for (let target of animationTargets) {
    observer.observe(target);
  }
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeUp--active");
      entry.target.classList.remove("fadeUp--hidden");
    }
  });
}

// Hide fadeup elements after page load for better pagespeed scores
window.addEventListener("load", (event) => {
  const elements = document.getElementsByClassName("fadeUp");

  for (let element of elements) {
    element.classList.add("fadeUp--hidden");
  }
});

// Theme Switcher
const button = document.getElementById("themeSwitcher");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

button.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme") ? "light" : "dark"
    );
  } else {
    document.body.classList.toggle("dark-theme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );
  }
});

// Load transitions after the theme is detected
window.addEventListener("load", (event) => {
  const elements = document.getElementsByClassName("theme__transition");

  for (let element of elements) {
    element.classList.add("theme__transition--active");
  }
});
