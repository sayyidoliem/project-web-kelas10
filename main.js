// Membuat animation scroll

window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
});

//Membuat hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});


//Cara Close hamburger

navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
});

