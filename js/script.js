const burger = document.querySelector(".burger");

const menu = document.querySelector(".menu");
const search = document.querySelector(".search");
const mainContainer = document.querySelector(".main-container");
const navBar = document.querySelector(".navbar-container");
const logo = document.querySelector(".logo");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  search.classList.toggle("active");
  mainContainer.classList.toggle("active");
  navBar.classList.toggle("active");
  logo.classList.toggle("active");
})