const loaderContainer = document.querySelector(".loader_container");
const search_elem = document.querySelector(".search_input");
const btn_search = document.querySelector(".btn_search");
const search_box = document.querySelector(".search_box");
const menu_btn = document.querySelector(".menu_btn");
const md_container = document.querySelector(".menu_container");
const header_box = document.querySelector(".header_container");
const mode_elem = document.querySelector(".mode_action span");
const bdy = document.querySelector("body");

var loaderTimer = 100;

// window.addEventListener("DOMContentLoaded", () => loaderContainerMethod(true));
function loaderContainerMethod(action) {
  if (action) {
    const interval = setInterval(() => {
      loaderTimer--;
      loaderContainer.style.opacity = `${loaderTimer}%`;
      loaderContainer.classList.remove("loader_unactive");
      if (loaderTimer === 0) {
        return (
          clearInterval(interval),
          loaderContainer.classList.add("loader_unactive")
        );
      }
    }, 10);
  } else {
    loaderContainer.classList.remove("loader_unactive");
  }
}

search_elem.onkeyup = ({ target }) => {
  let searchValue = target.value;
  if (searchValue) {
    btn_search.classList.add("ready_value");
  } else {
    btn_search.classList.remove("ready_value");
  }
};

function SearchBox() {
  search_box.classList.toggle("active_search");
}
btn_search.onclick = () => {
  let searchValue = search_elem.value;
  if (searchValue && btn_search.classList.contains("ready_value")) {
    window.open(`${location.href}?search=${searchValue}`, "_self");
    search_box.classList.remove("active_search");
  } else {
    search_box.classList.remove("active_search");
    btn_search.classList.remove("ready_value");
    searchValue = "";
  }
};

menu_btn.onclick = () => {
  menu_btn.classList.toggle("active_menu");
  md_container.classList.toggle("active_menu_container");
};

window.addEventListener("scroll", () => ChangeHeaderClassName());
window.addEventListener("load", () => {
  ChangeHeaderClassName(), ChangeModeWhenload();
});

function ChangeHeaderClassName() {
  let windowHeight = window.innerHeight;
  if (window.scrollY >= windowHeight - 60) {
    return header_box.classList.replace("home_page_header", "header_active");
  } else {
    return header_box.classList.replace("header_active", "home_page_header");
  }
}

function ChangeModeWhenload() {
  let mode = localStorage.getItem("mode");

  if (!mode) {
    localStorage.setItem("mode", "light");
    mode_elem.classList.replace("fa-moon", "fa-sun");
    bdy.classList.remove("dark_mode");
  } else {
    SetAttributeToElems(mode);
  }
}

function ChangeMode() {
  let modeName = localStorage.getItem("mode");
  if (modeName === "light") {
    localStorage.setItem("mode", "dark");
    mode_elem.classList.replace("fa-sun", "fa-moon");
    bdy.classList.add("dark_mode");
  } else {
    localStorage.setItem("mode", "light");
    mode_elem.classList.replace("fa-moon", "fa-sun");
    bdy.classList.remove("dark_mode");
  }
}

function SetAttributeToElems(mode) {
  if (mode === "light") {
    mode_elem.classList.replace("fa-moon", "fa-sun");
    bdy.classList.remove("dark_mode");
  } else {
    mode_elem.classList.replace("fa-sun", "fa-moon");
    bdy.classList.add("dark_mode");
  }
}
