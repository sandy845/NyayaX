import { FALLACIES_DATA } from '../data/fallacies.js';

export function initFallaciesUI() {
  const cards = document.querySelectorAll('.fallacy-card');
  const nameEl = document.getElementById('fallacy-name');
  const failReasonEl = document.getElementById('fallacy-fail-reason');
  const classEl = document.getElementById('fallacy-class');
  const detailBox = document.getElementById('fallacy-detail-box');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-fallacy');
      const data = FALLACIES_DATA[key];
      if (!data) return;

      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      if (detailBox) {
        detailBox.style.opacity = '0.5';
        setTimeout(() => {
          if (nameEl) nameEl.innerText = data.name;
          if (failReasonEl) failReasonEl.innerText = data.whyFails;
          if (classEl) classEl.innerText = data.classification;
          detailBox.style.opacity = '1';
        }, 100);
      }
    });
  });

  // Populate active fallacy from FALLACIES_DATA on initial load
  const activeCard = document.querySelector('.fallacy-card.active') || cards[0];
  if (activeCard) {
    const key = activeCard.getAttribute('data-fallacy');
    const data = FALLACIES_DATA[key];
    if (data) {
      if (nameEl) nameEl.innerText = data.name;
      if (failReasonEl) failReasonEl.innerText = data.whyFails;
      if (classEl) classEl.innerText = data.classification;
    }
  }
}
