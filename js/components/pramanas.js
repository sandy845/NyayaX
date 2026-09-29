import { PRAMANA_DATA } from '../data/concepts.js';

export function initPramanas() {
  const nodes = document.querySelectorAll('.pramana-node');
  const sanskritEl = document.getElementById('pramana-sanskrit');
  const englishEl = document.getElementById('pramana-english');
  const descEl = document.getElementById('pramana-desc');
  const analogyEl = document.getElementById('pramana-analogy');
  const badgeEl = document.getElementById('pramana-badge');
  const detailBox = document.getElementById('pramana-detail');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.getAttribute('data-pramana');
      const data = PRAMANA_DATA[key];
      if (!data) return;

      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      if (detailBox) {
        detailBox.style.opacity = '0.4';
        detailBox.style.transform = 'scale(0.98)';
        setTimeout(() => {
          if (sanskritEl) sanskritEl.innerText = data.sanskrit;
          if (englishEl) englishEl.innerText = data.english;
          if (descEl) descEl.innerText = data.desc;
          if (analogyEl) analogyEl.innerText = data.analogy;
          if (badgeEl) badgeEl.innerText = data.badge;
          detailBox.style.opacity = '1';
          detailBox.style.transform = 'scale(1)';
        }, 120);
      }
    });
  });
}
