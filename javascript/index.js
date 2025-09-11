// Elements
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const toggleSwitch = document.getElementById("theme-toggle");
const backToTop = document.getElementById("backToTop");
const navbar = document.querySelector(".navbar");

// -------------------------
// Smooth scroll + auto-close menu
// -------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

// -------------------------
// Dark/Light mode toggle
// -------------------------
toggleSwitch.addEventListener("change", e => {
    document.body.classList.toggle("dark-mode", e.target.checked);
});

// -------------------------
// Back to Top
// -------------------------
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
);

// -------------------------
// Hamburger menu
// -------------------------
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// -------------------------
// Carousel
// -------------------------
let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}
document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides; updateCarousel();
});
document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateCarousel();
});
dots.forEach((dot, i) => dot.addEventListener("click", () => {
    currentIndex = i; updateCarousel();
}));
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; updateCarousel();
}, 5000);

// -------------------------
// Scroll reveal + Navbar effect
// -------------------------
function handleScrollEffects() {
    // Scroll reveal
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
        } else {
        el.classList.remove("active");
        }
    });

    // Navbar transparent -> solid
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScrollEffects);
window.addEventListener("load", handleScrollEffects);
