const VYAPTI_CASES = {
  kitchen: {
    title: "Kitchen (Mahānasa): Positive Concomitance (Anvaya)",
    desc: "In the kitchen, both smoke (Hetu) and fire (Sādhya) are directly observed together. This establishes that smoke does not exist in isolation from fire.",
    hetuPresent: true,
    sadhyaPresent: true,
    statusText: "Positive Case: Smoke ✓ | Fire ✓",
    statusClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
  },
  hill: {
    title: "The Hill (Parvata): Application (Pakṣadharmatā)",
    desc: "We observe smoke on the hill. Using the rule established in the kitchen, we infer that unobserved fire is present on the hill.",
    hetuPresent: true,
    sadhyaPresent: true,
    statusText: "Observation + Inference: Smoke ✓ | Inferred Fire ✓",
    statusClass: "text-amber-400 border-amber-500/30 bg-amber-500/10"
  },
  lake: {
    title: "Deep Lake (Hrada): Negative Concomitance (Vyatireka)",
    desc: "In a deep lake, there is NO fire, and consequently NO smoke. The absence of Sādhya entails the absence of Hetu.",
    hetuPresent: false,
    sadhyaPresent: false,
    statusText: "Negative Case: Smoke ✗ | Fire ✗",
    statusClass: "text-slate-400 border-slate-700 bg-slate-800/40"
  },
  ironball: {
    title: "Glowing Red Iron Ball: Asymmetry Test",
    desc: "A glowing red iron ball has fire (heat/glow), but NO smoke. This proves that 'Wherever fire, there smoke' is false! Smoke entails fire, but fire does NOT entail smoke.",
    hetuPresent: false,
    sadhyaPresent: true,
    statusText: "Asymmetry Breach: Smoke ✗ | Fire ✓",
    statusClass: "text-rose-400 border-rose-500/30 bg-rose-500/10"
  }
};

export function initVyaptiUI() {
  const caseBtns = document.querySelectorAll('.vyapti-case-btn');
  const titleEl = document.getElementById('vyapti-title');
  const descEl = document.getElementById('vyapti-explanation');
  const graphicBox = document.getElementById('vyapti-graphic-box');

  caseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseKey = btn.getAttribute('data-vyapti-case');
      const data = VYAPTI_CASES[caseKey];
      if (!data) return;

      caseBtns.forEach(b => {
        b.classList.remove('active');
      });

      btn.classList.add('active');

      if (titleEl) titleEl.innerText = data.title;
      if (descEl) descEl.innerText = data.desc;

      if (graphicBox) {
        graphicBox.style.opacity = '0.5';
        setTimeout(() => {
          graphicBox.innerHTML = `
            <div class="flex items-center gap-6 z-10">
              <div class="text-center">
                <div class="w-16 h-16 rounded-2xl ${data.hetuPresent ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' : 'bg-slate-800/40 border-slate-700 text-slate-500'} border font-bold flex flex-col items-center justify-center shadow-lg transition-all">
                  <span class="text-[10px] uppercase font-mono">HETU</span>
                  <span class="text-sm">${data.hetuPresent ? '💨 Smoke' : '⛔ No Smoke'}</span>
                </div>
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="text-[10px] font-mono ${data.hetuPresent && data.sadhyaPresent ? 'text-amber-400' : 'text-slate-500'} uppercase tracking-widest font-semibold">
                  ${data.hetuPresent && data.sadhyaPresent ? 'Invariable Concomitance' : 'Relation Broken / Absent'}
                </span>
                <svg class="w-24 h-6 ${data.hetuPresent && data.sadhyaPresent ? 'text-amber-400 animate-pulse' : 'text-slate-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 rounded-2xl ${data.sadhyaPresent ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : 'bg-slate-800/40 border-slate-700 text-slate-500'} border font-bold flex flex-col items-center justify-center shadow-lg transition-all">
                  <span class="text-[10px] uppercase font-mono">SĀDHYA</span>
                  <span class="text-sm">${data.sadhyaPresent ? '🔥 Fire' : '⛔ No Fire'}</span>
                </div>
              </div>
            </div>
          `;
          graphicBox.style.opacity = '1';
        }, 100);
      }
    });
  });
}
