"use strict";
// SELECTIONS

const header = document.querySelector(".js-header");
const overlay = document.querySelector(".js-overlay");

// Events
header.addEventListener("click", (e) => {
  const hamBtn = e.target.closest(".header__hamburger-menu");
  if (!hamBtn) return;
  header.classList.toggle("open");
});
