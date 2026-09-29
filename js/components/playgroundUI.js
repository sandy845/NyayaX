import { validateInference } from '../logic/validator.js';

export function initPlaygroundUI() {
  const pakshaSelect = document.getElementById('play-paksha');
  const hetuSelect = document.getElementById('play-hetu');
  const sadhyaSelect = document.getElementById('play-sadhya');
  const buildBtn = document.getElementById('play-build-btn');

  const stepsContainer = document.getElementById('play-steps-container');
  const badgeEl = document.getElementById('play-validity-badge');
  const feedbackText = document.getElementById('play-feedback-text');

  function renderGeneratedInference() {
    const paksha = pakshaSelect ? pakshaSelect.value : "Hill";
    const hetu = hetuSelect ? hetuSelect.value : "Smoke";
    const sadhya = sadhyaSelect ? sadhyaSelect.value : "Fire";

    const result = validateInference(paksha, hetu, sadhya);

    if (badgeEl) {
      if (result.valid) {
        badgeEl.innerText = "VALID NYĀYA INFERENCE ✓";
        badgeEl.className = "px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30 shadow-sm shadow-emerald-500/20";
      } else {
        badgeEl.innerText = "DEFECTIVE / UNDEFINED REASON ⚠";
        badgeEl.className = "px-3 py-1 rounded-md bg-rose-500/20 text-rose-300 font-mono text-xs font-bold border border-rose-500/30 shadow-sm shadow-rose-500/20";
      }
    }

    if (feedbackText) feedbackText.innerText = result.feedback;

    const steps = [
      { num: 1, name: "Pratijñā", text: `${paksha} possesses ${sadhya.toLowerCase()}.`, delay: '0.04s' },
      { num: 2, name: "Hetu", text: `Because ${paksha.toLowerCase()} possesses ${hetu.toLowerCase()}.`, delay: '0.08s' },
      { num: 3, name: "Udāharaṇa", text: `Wherever there is ${hetu.toLowerCase()}, there is ${sadhya.toLowerCase()}, as observed in verified cases.`, delay: '0.12s' },
      { num: 4, name: "Upanaya", text: `This ${paksha.toLowerCase()} possesses ${hetu.toLowerCase()} invariably connected with ${sadhya.toLowerCase()}.`, delay: '0.16s' },
      { num: 5, name: "Nigamana", text: `Therefore, this ${paksha.toLowerCase()} possesses ${sadhya.toLowerCase()}.`, delay: '0.2s' }
    ];

    if (stepsContainer) {
      stepsContainer.innerHTML = steps.map(s => `
        <div class="play-step-card p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs" style="animation-delay: ${s.delay}">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center border border-amber-500/30">${s.num}</span>
            <div>
              <span class="font-mono text-amber-400 font-semibold">${s.name}:</span>
              <span class="text-slate-200 font-medium ml-1">"${s.text}"</span>
            </div>
          </div>
        </div>
      `).join('');

      // Add/Update shareable copy button below stepsContainer
      let copyBtn = document.getElementById('play-copy-btn');
      if (!copyBtn) {
        copyBtn = document.createElement('button');
        copyBtn.id = 'play-copy-btn';
        copyBtn.className = 'mt-3 w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-mono font-semibold hover:bg-slate-800 hover:border-amber-500/40 hover:text-amber-400 transition-all flex items-center justify-center gap-2 shadow-sm';
        stepsContainer.after(copyBtn);
      }
      copyBtn.innerHTML = `<span>📋</span><span>Copy 5-Step Inference to Clipboard</span>`;
      copyBtn.onclick = () => {
        const text = [
          `NYĀYA 5-STEP INFERENCE (${paksha} → ${sadhya}):`,
          ...steps.map(s => `${s.num}. ${s.name}: "${s.text}"`),
          `\nStatus: ${result.valid ? 'VALID NYĀYA INFERENCE' : 'DEFECTIVE / UNDEFINED'}`,
          `Analysis: ${result.feedback}`
        ].join('\n');

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.innerHTML = `<span>✅</span><span>Copied to Clipboard!</span>`;
            setTimeout(() => {
              copyBtn.innerHTML = `<span>📋</span><span>Copy 5-Step Inference to Clipboard</span>`;
            }, 2000);
          });
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          copyBtn.innerHTML = `<span>✅</span><span>Copied to Clipboard!</span>`;
          setTimeout(() => {
            copyBtn.innerHTML = `<span>📋</span><span>Copy 5-Step Inference to Clipboard</span>`;
          }, 2000);
        }
      };
    }
  }

  if (buildBtn) {
    buildBtn.addEventListener('click', () => {
      buildBtn.classList.add('scale-95');
      setTimeout(() => buildBtn.classList.remove('scale-95'), 150);
      renderGeneratedInference();
    });
  }

  renderGeneratedInference();
}
