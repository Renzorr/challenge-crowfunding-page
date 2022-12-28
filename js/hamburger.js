const hamburgerIcon = document.querySelector(".hamburger");
const blur = document.querySelector(".blur");
const nav = document.querySelector(".header_items");

hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
