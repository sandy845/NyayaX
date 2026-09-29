import { TRIAD_DATA } from '../data/concepts.js';

export function initTriangleUI() {
  const nodes = document.querySelectorAll('.triangle-node');
  const termEl = document.getElementById('triad-term');
  const roleEl = document.getElementById('triad-role');
  const defEl = document.getElementById('triad-def');
  const exEl = document.getElementById('triad-ex');
  const condEl = document.getElementById('triad-condition');
  const inspector = document.getElementById('triad-inspector');

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const triadKey = node.getAttribute('data-triad');
      const data = TRIAD_DATA[triadKey];
      if (!data) return;

      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      if (inspector) {
        inspector.style.opacity = '0.5';
        setTimeout(() => {
          if (termEl) termEl.innerText = data.term;
          if (roleEl) roleEl.innerText = data.role;
          if (defEl) defEl.innerText = data.def;
          if (exEl) exEl.innerText = data.ex;
          if (condEl) condEl.innerText = data.condition;
          inspector.style.opacity = '1';
        }, 100);
      }
    });
  });
}
