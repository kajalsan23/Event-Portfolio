
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Typed.js initialization
  new Typed('.typed-text', {
    strings: ["event planning.", "creative design.", "unforgettable experiences."],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
  });
  
  // Particles.js initialization
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.4 },
      "size": { "value": 3, "random": true },
      "line_linked": { "enable": true, "color": "#ffffff", "opacity": 0.3 },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      }
    },
    "retina_detect": true
  });
  
  // Scroll animation
  const scrollElements = document.querySelectorAll("section");
  function elementInView(el, offset = 1.25) {
    const top = el.getBoundingClientRect().top;
    return top <= (window.innerHeight || document.documentElement.clientHeight) / offset;
  }
  
  function displayScrollElement(el) {
    el.classList.add("scrolled");
  }
  
  function hideScrollElement(el) {
    el.classList.remove("scrolled");
  }
  
  function handleScrollAnimation() {
    scrollElements.forEach(el => {
      if (elementInView(el)) displayScrollElement(el);
      else hideScrollElement(el);
    });
  }
  
  window.addEventListener("scroll", handleScrollAnimation);
  
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  