//console.log("Webpack is running!");
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

function addNavEvents() {
  document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
}

function init() {
  addNavEvents();
  loadHome();
}

init();
