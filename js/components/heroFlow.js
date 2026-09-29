export function initHeroFlow() {
  const heroSection = document.getElementById('hero');
  const nodes = document.querySelectorAll('.hero-node-item');
  const toggleBtn = document.getElementById('hero-pulse-toggle');

  let currentStep = 1;
  let timer = null;
  let isVisible = true;

  function setStep(step) {
    nodes.forEach(node => {
      const nodeStep = parseInt(node.getAttribute('data-step'), 10);
      const statusEl = node.querySelector('.node-status');

      if (nodeStep <= step) {
        node.classList.add('active');
        if (statusEl) {
          if (nodeStep === step) {
            statusEl.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Active`;
            statusEl.className = "node-status text-xs font-mono text-emerald-400 flex items-center gap-1.5";
          } else {
            statusEl.innerText = "Processed ✓";
            statusEl.className = "node-status text-xs font-mono text-slate-400";
          }
        }
      } else {
        node.classList.remove('active');
        if (statusEl) {
          statusEl.innerText = "Waiting";
          statusEl.className = "node-status text-xs font-mono text-slate-500";
        }
      }
    });
  }

  function startCycle() {
    if (timer) clearInterval(timer);
    currentStep = 1;
    setStep(currentStep);

    timer = setInterval(() => {
      if (!isVisible) return; // Skip work when user isn't looking at hero
      currentStep++;
      if (currentStep > 4) {
        currentStep = 1;
      }
      setStep(currentStep);
    }, 2000);
  }

  // IntersectionObserver to pause when offscreen
  if ('IntersectionObserver' in window && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    observer.observe(heroSection);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      startCycle();
    });
  }

  startCycle();
}
