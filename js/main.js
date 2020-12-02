const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const navMovil = document.querySelector(".navbar-movil");

openMenu.addEventListener("click", (e) => {
    navMovil.style.left = "0";
})
closeMenu.addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})