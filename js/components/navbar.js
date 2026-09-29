export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  let ticking = false;

  // Optimized passive scroll listener with rAF
  function updateScrollState() {
    const scrollY = window.scrollY;

    if (scrollY > 30) {
      if (!navbar.classList.contains('scrolled')) {
        navbar.classList.add('scrolled');
      }
    } else {
      if (navbar.classList.contains('scrolled')) {
        navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link detection
    let currentSectionId = '';
    const scrollPosition = scrollY + 160;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateScrollState();

  // Mobile Menu Toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // Theme Toggle Logic
  const themeBtn = document.getElementById('theme-toggle-btn');
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      if (moonIcon) moonIcon.classList.add('hidden');
      if (sunIcon) sunIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.add('dark');
      if (moonIcon) moonIcon.classList.remove('hidden');
      if (sunIcon) sunIcon.classList.add('hidden');
    }
  }

  const savedTheme = localStorage.getItem('nyayax_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      const nextTheme = isDark ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('nyayax_theme', nextTheme);
    });
  }
}
