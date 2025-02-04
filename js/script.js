'use strict';
const addEventOnElement = function (elements, evetType, callback){
    for (let i = 0, len = elemtns.lenght; i < len; i++) {
        elements[i].addEventListener(evetType, callback);
    }
}
const navbar= document.querySelector("[data-navbar]");
const navToggleBtn= document.querySelector("[data-overlay]");
const overlay = document.querySelector("[data-overlay]");
const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventOnElement([navToggleBtn, overlay],"click",toggleNavbar );
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove",event => {
    for (let i = 0, len = parallaxElements.length; i < len; i++) {

      const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
      const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);
      
      parallaxElements[i].animate({
        transform: `translate(${movementX}px, ${movementY}px)`
    }, {duration:500, fill: "forwards" });
}})