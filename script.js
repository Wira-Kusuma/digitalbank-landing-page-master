const nav = document.querySelector("nav");
const burger = document.querySelector("header img:nth-child(2)");
const header = document.querySelector("header");

burger.addEventListener("click", function() {
    nav.classList.toggle("active");
    header.classList.toggle("shadow");
})