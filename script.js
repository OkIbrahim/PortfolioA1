"use strict";

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Smooth scroll to top when clicked
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky Navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);

obs.observe(sectionHeroEl);

// Remove nav-open when clicking on main-nav-link
const navLinkEl = document.querySelectorAll(".main-nav-link");

navLinkEl.forEach((link) =>
  link.addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  })
);
