require('./index.scss');

"use strict"
// DOM variables
const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");
const navlinks = document.querySelectorAll("nav a, #contactbtn");
const reveals = document.querySelectorAll(".popin");
const progressBars = document.querySelectorAll(".progress");

// enables dropdown menu with nav links when hamburger is clicked (small screen sizes only)
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// remove active nav when user clicks nav link
navlinks.forEach(navlink => {
    navlink.onclick = function() {
        // if on smaller screen, remove active nav class
        nav.classList.remove("active");
    }
});

// as user scrolls down, sections pop in
function popInAnimation() {
    reveals.forEach(element => {
        let elementVisible = element.clientHeight * 0.09;
        if (elementVisible < 30) elementVisible = 30;
        else if (elementVisible > 60) elementVisible = 60;

        if (element.classList.contains("project")) elementVisible = 20;
        let elementTop = element.getBoundingClientRect().top;
        let distanceFromView = Math.max(0, window.innerHeight - elementTop - elementVisible);
        let opacity = (distanceFromView / elementVisible) * 0.4 - 1;
        let scale = ((distanceFromView / elementVisible)) * 0.1 + 0.25;
        
        if (scale >= 1) {
            scale = 1;
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
        element.style.opacity = opacity;
        element.style.transform = `scale(${scale})`;
    });
}

window.addEventListener("scroll", popInAnimation);

// checks the scroll position on page load
popInAnimation();

// loads the width of all the progress bars in skills section automatically
progressBars.forEach(progressBar => {
    progressBar.querySelector("div").style.width = `${progressBar.textContent}`;
})
