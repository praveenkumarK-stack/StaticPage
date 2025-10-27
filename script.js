const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); 
    const targetId = link.getAttribute("href").substring(1); 
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

const typingText = document.getElementById("typing");
const words = ["Frontend Developer 💻", "UI/UX Designer 🎨", "Creative Coder 🚀"];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  typingText.textContent = current.substring(0, charIndex);
  
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const projects = [
  { title: "Portfolio Website", desc: "A modern responsive portfolio with glassmorphism UI." },
  { title: "Weather App", desc: "Real-time weather using OpenWeather API." },
  { title: "Color Extractor", desc: "Pick and analyze colors from images using JS Canvas." },
  { title: "Task Tracker", desc: "A simple todo list with persistent local storage." },
  { title: "Quote Generator", desc: "Displays random quotes with dynamic backgrounds." }
];

const container = document.getElementById("project-container");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  container.appendChild(card);
});

const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.classList.add("visible");
  });
});

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
