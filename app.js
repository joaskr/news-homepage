const sidenav = document.querySelector(".sidenav");
const menuBtn = document.querySelector(".menu-btn");
const menuBtnIcon = document.querySelector(".menu-btn-icon");
const body = document.querySelector("body");
let isMenuOpen = false;

const openNav = () => {
    sidenav.style.width = "250px";
    menuBtnIcon.src = "./assets/images/icon-menu-close.svg";
    isMenuOpen = !isMenuOpen;
    body.style.backgroundColor = "rgba(0,0,0,0.2)";
    body.style.transition = "0.5s"
}
  
const closeNav = () => {
    sidenav.style.width = "0";
    menuBtnIcon.src = "./assets/images/icon-menu.svg";
    isMenuOpen = !isMenuOpen;
    body.style.backgroundColor = "hsl(36, 100%, 99%)";
    body.style.transition = "0.5s"
  }

menuBtn.addEventListener("click", () =>
  isMenuOpen ? closeNav() : openNav()
);