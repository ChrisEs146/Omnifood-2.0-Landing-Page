"use strict";
// SELECTIONS

const header = document.querySelector(".js-header");
const overlay = document.querySelector(".js-overlay");
const tabContainer = document.querySelector(".js-tab-container");
const tabBtns = document.querySelectorAll(".js-step-tab");
const stepContainer = document.querySelectorAll(".js-step-container");

// Events
header.addEventListener("click", (e) => {
  const hamBtn = e.target.closest(".header__hamburger-menu");
  if (!hamBtn) return;
  header.classList.toggle("open");
  overlay.classList.toggle("hide-element");
});
