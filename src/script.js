"use strict";
// SELECTIONS

const header = document.querySelector(".js-header");
const navigation = document.querySelector(".js-navigation");
const hero = document.querySelector(".js-hero");
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
  //Creating relation between tab number and step container
  const tabNumber = tab.dataset.tab;
  stepContainer.forEach((e) => e.classList.remove("howto__step-container--active"));
  document
    .querySelector(`.howto__step-container-${tabNumber}`)
    .classList.add("howto__step-container--active");
});

//Sticky Navigation
const navHeight = navigation.clientHeight;
const navOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const navCallback = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    hero.style.marginTop = `${navHeight}px`;
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
    hero.style.marginTop = `0px`;
  }
};

const navObserver = new IntersectionObserver(navCallback, navOptions);
navObserver.observe(header);
