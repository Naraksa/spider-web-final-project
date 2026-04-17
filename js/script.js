// typing animation for the home page

const typingTextAnimation = document.querySelector(".text-over-video");

const typingText = document.querySelector(".typing-text"); // Get the original text content
const textToType = typingText.textContent;

typingTextAnimation.textContent = ""; // Clear the text content to start the animation

const speed = 150; // typing speed in milliseconds
let i = 0

function typeWriter() {
    if (i < textToType.length) {
        typingTextAnimation.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}   

window.onload = typeWriter;

// toggle menu for mobile view
const menuBtn = document.getElementById("menu-btn");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("active");
});