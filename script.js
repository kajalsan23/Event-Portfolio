// ================================
// INITIALIZATION & DOM ELEMENTS
// ================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const heroVideo = document.getElementById('heroVideo');

let isMusicPlaying = true;

// ================================
// HAMBURGER MENU TOGGLE
// ================================

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ================================
// MUSIC CONTROLS
// ================================

musicToggle.addEventListener('click', () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    bgMusic.play().catch(error => {
      console.log('Music play failed:', error);
      alert('Please allow audio to play');
    });
    musicToggle.classList.add('playing');
    musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
  isMusicPlaying = !isMusicPlaying;
});

// Pause music when video plays
heroVideo.addEventListener('play', () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    isMusicPlaying = false;
  }
});

// Auto pause music on page visibility change
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
    isMusicPlaying = false;
  }
});

// ================================
// TYPED.JS ANIMATION
// ================================

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: [
        'Event Planning',
        'Creative Design',
        'Unforgettable Experiences',
        'Wedding Magic',
        'Corporate Excellence'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
});

// ================================
// PARTICLES.JS CONFIGURATION
// ================================

particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#dfae3a',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ================================
// SMOOTH SCROLL & SCROLL ANIMATIONS
// ================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// ================================
// SCROLL TO TOP FUNCTIONALITY
// ================================

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Adjust header styling on scroll
  const header = document.querySelector('.header');
  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  }
});

// ================================
// PERFORMANCE OPTIMIZATIONS
// ================================

// Lazy load images
if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
}

// ================================
// UTILITY FUNCTIONS
// ================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add event listeners for form interactions
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.98)';
  });
  
  button.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
  });
});

// ================================
// LOG INITIALIZATION
// ================================

console.log('✨ Divine Events Website Loaded Successfully!');
console.log('🎵 Music controls are ready. Click the button to start!');