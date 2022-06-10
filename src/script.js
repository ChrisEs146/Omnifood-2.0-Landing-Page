"use strict";
// SELECTIONS
const mainBody = document.querySelector("body");
const header = document.querySelector(".js-header");
const headerLinks = document.querySelectorAll(".js-header-links");
const overlay = document.querySelector(".js-overlay");
const tabContainer = document.querySelector(".js-tab-container");
const tabBtns = document.querySelectorAll(".js-step-tab");
const stepContainer = document.querySelectorAll(".js-step-container");

// Events
//Hamburger menu
header.addEventListener("click", (e) => {
  const hamBtn = e.target.closest(".header__hamburger-menu");
  if (!hamBtn) return;
  header.classList.toggle("open");
  overlay.classList.toggle("hide-element");
});

//How to Tabs
tabContainer.addEventListener("click", (e) => {
  const tab = e.target.closest(".howto__step-tab");
  if (!tab) return;
  //Resetting active state
  tabBtns.forEach((e) => e.classList.remove("howto__step-tab--active"));
  //Applying active state to clicked tab
  tab.classList.add("howto__step-tab--active");
  const tabNumber = tab.dataset.tab;
  stepContainer.forEach((e) => e.classList.remove("howto__step-container--active"));
  document
    .querySelector(`.howto__step-container-${tabNumber}`)
    .classList.add("howto__step-container--active");
});
