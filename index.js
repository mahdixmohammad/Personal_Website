// when user clicks on the hamburger icon (small screen sizes only)
hamburger = document.querySelector("#hamburger");
hamburger.onclick = function() {
    nav = document.querySelector("nav");
    nav.classList.toggle("active");
}