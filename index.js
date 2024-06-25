"use strict"

// DOM variables
const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");

// enables dropdown menu with nav links when hamburger is clicked (small screen sizes only)
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

// remove active nav when user clicks nav link
const navlinks = document.querySelectorAll("nav a, #contactbtn");
navlinks.forEach(navlink => {
    navlink.onclick = function() {
        let element = document.getElementById(navlink.textContent.toLowerCase());

        if (navlink.id == "contactbtn") element = document.getElementById("contact");

        let offset = element.clientHeight * 0.4;

        if (element.classList.contains("visible")) offset = 20;
        
        if (element.id == "projects") {
            element = document.querySelector("#projects .title");
            offset = 120;
        }

        console.log(offset)
        let elementPosition = element.getBoundingClientRect().top;
        let offsetPosition = elementPosition + window.scrollY - offset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        // if on smaller screen, remove active nav class
        nav.classList.remove("active");
    }
});

// as user scrolls down, sections pop in
function popInAnimation() {
    const reveals = document.querySelectorAll(".popin");
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        let elementVisible = element.clientHeight * 0.11;
        if (elementVisible < 40 || element.classList.contains("project")) elementVisible = 40;
        else if (elementVisible > 80) elementVisible = 80;
        let elementTop = element.getBoundingClientRect().top;
        let distanceFromView = Math.max(0, windowHeight - elementTop - elementVisible);
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

// To check the scroll position on page load
popInAnimation();