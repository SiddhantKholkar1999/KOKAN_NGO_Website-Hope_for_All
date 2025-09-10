// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark/Light mode toggle
const toggleSwitch = document.getElementById('theme-toggle');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggleSwitch.checked);
});

// Back to Top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Carousel
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});
document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});
dots.forEach((dot, i) => dot.addEventListener("click", () => {
    currentIndex = i; updateCarousel();
}));

// Auto-slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}, 5000);
