const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const navMovil = document.querySelector(".navbar-movil");

openMenu.addEventListener("click", (e) => {
    navMovil.style.left = "0";
})
closeMenu.addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})

$(function() {
    'use strict'


    $('.main-body section:first').show();
    $('.navbar-desktop nav a:first').addClass('active');

    $('.navbar-desktop nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.navbar-desktop nav a').removeClass('active');
        $(this).addClass('active');
        var enlace = $(this).attr('href');
        $('.main-body section').hide();
        $(enlace).fadeIn(1000);
        return false;
    }
});

$(function() {
    'use strict'


    $('.main-body section:first').show();
    $('.navbar-movil nav a:first').addClass('active');

    $('.navbar-movil nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.navbar-movil nav a').removeClass('active');
        $(this).addClass('active');
        var enlace = $(this).attr('href');
        $('.main-body section').hide();
        $(enlace).fadeIn(1000);
        return false;
    }
});

document.querySelector(".home-nav").addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})
document.querySelector(".about-nav").addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})

document.querySelector(".works-nav").addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})

document.querySelector(".contact-nav").addEventListener("click", (e) => {
    navMovil.style.left = "-100%";
})