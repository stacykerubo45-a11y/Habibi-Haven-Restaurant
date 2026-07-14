const menuBtn = document.querySelector(".bar");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    navLinks.style.display = "none";
});