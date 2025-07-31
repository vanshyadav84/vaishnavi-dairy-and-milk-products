// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Vaishnavi Dairy & Milk Products website loaded.");
  // Add interactivity later: animations, scroll effects, etc.
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded: About Us");
});
////for banner of home page
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 4000); // every 4 seconds
//grapgh of wswot
/*for the dropdown*/
