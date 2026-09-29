import { initNavbar } from './navbar.js';
import { initHeroFlow } from './heroFlow.js';
import { initPramanas } from './pramanas.js';
import { initInferenceUI } from './inferenceUI.js';
import { initVyaptiUI } from './vyaptiUI.js';
import { initTriangleUI } from './triangleUI.js';
import { initPlaygroundUI } from './playgroundUI.js';
import { initFallaciesUI } from './fallaciesUI.js';
import { initQuizUI } from './quizUI.js';

// Setup Ambient Mouse Spotlight
function initAmbientSpotlight() {
  const spotlight = document.getElementById('ambient-spotlight');
  if (!spotlight) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
      requestAnimationFrame(updateSpotlight);
      ticking = true;
    }
  }, { passive: true });

  function updateSpotlight() {
    // Smooth lerp easing for spotlight follower
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
      requestAnimationFrame(updateSpotlight);
    } else {
      ticking = false;
    }
  }
}

// Setup High Performance Scroll-Reveal
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not available
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAmbientSpotlight();
  initScrollReveal();
  initNavbar();
  initHeroFlow();
  initPramanas();
  initInferenceUI();
  initVyaptiUI();
  initTriangleUI();
  initPlaygroundUI();
  initFallaciesUI();
  initQuizUI();

  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('✨ NYAYAX Ultra-Smooth Engine initialized successfully.');
  }
});
