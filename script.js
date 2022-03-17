const btnNavEl = document.querySelector(".btn-mobile-nav");
const nav = document.querySelector(".navbar");
const bg1 = document.querySelector(".first-half");
const circle = document.querySelector(".circle-2");
const circleBig = document.querySelector(".circle-1");
const bg2 = document.querySelector(".second-half");

btnNavEl.addEventListener("click", function (e) {
  bg1.classList.toggle("nav-open");
  bg2.classList.toggle("nav-open");
  nav.classList.toggle("nav-open");
  circle.classList.toggle("nav-open");
  circleBig.classList.toggle("nav-open");
});
