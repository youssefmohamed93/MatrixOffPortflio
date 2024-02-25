// Hide Header On Scroll //

let header = document.querySelector(".header");

window.addEventListener("scroll" , function () {
    header.classList.toggle("shadow" , window.scrollY > 120);
});

// Show Menu Icon On Mobile //

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".nav");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};

window.onscroll = function () {
    menuIcon.classList.remove("bx-x");
    navBar.classList.remove("active");
}

// Dark & Light Mode //

let darkmode = document.querySelector("#darkmode");
let bodyEl = document.querySelector("body");
let DARKMODE = false;

darkmode.addEventListener('change' , (event) => {
    DARKMODE = event.target.checked;
    if (DARKMODE) {
        bodyEl.classList.add("dark");
    }
    else {
        bodyEl.classList.remove("dark")
    }
});

// Change Icon OnClick (Dark&Light Mode) //

let myIcon = document.querySelector(".theme span i");
darkmode.addEventListener("click", () => {
    myIcon.classList.toggle("bx-sun");
    myIcon.classList.toggle("bx-moon");
});

// Skills Section Width Animation //

let section = document.querySelector(".section-three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 250) {
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    };
};

// Owl Carousel //

$('.owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1025:{
            items:3
        },
        1100:{
            items:4
        },
    }
})

// End // 