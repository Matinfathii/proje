const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("date");

// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

// search
$(".searchbtn").click(function () {
    $(this).toggleClass("bg");
    $(".fas").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val('');
});

// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

// set yaer
date.innerHTML = new date().getFullyear();


