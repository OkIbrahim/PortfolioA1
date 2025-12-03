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

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const gridItemsLeft = document.querySelectorAll(".grid-item-left");
  gridItemsLeft.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in-left");
    }, index * 200); // Staggered delay for a nicer effect
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const gridItemsRight = document.querySelectorAll(".grid-item-right");
  gridItemsRight.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in-right");
    }, index * 200); // Staggered delay for a nicer effect
  });
});
