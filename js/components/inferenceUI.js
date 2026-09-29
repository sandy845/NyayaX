import { InferenceEngine } from '../logic/inferenceEngine.js';

export function initInferenceUI() {
  const engine = new InferenceEngine();

  // Elements
  const caseSelect = document.getElementById('case-select');
  const runBtn = document.getElementById('engine-run-btn');
  const prevBtn = document.getElementById('engine-prev-btn');
  const nextBtn = document.getElementById('engine-next-btn');
  const resetBtn = document.getElementById('engine-reset-btn');

  const cardDisplay = document.getElementById('engine-card-display');
  const stepBadge = document.getElementById('step-number-badge');
  const stepSanskrit = document.getElementById('step-sanskrit');
  const stepRole = document.getElementById('step-role');
  const stepStatement = document.getElementById('step-statement');
  const counterText = document.getElementById('progress-step-counter');

  const pakshaEl = document.getElementById('summary-paksha');
  const hetuEl = document.getElementById('summary-hetu');
  const sadhyaEl = document.getElementById('summary-sadhya');

  const stepWhyBtn = document.getElementById('step-why-btn');
  const whyDrawer = document.getElementById('step-why-drawer');
  const simpleBtn = document.getElementById('tab-simple-btn');
  const techBtn = document.getElementById('tab-technical-btn');
  const simpleContent = document.getElementById('why-simple-content');
  const techContent = document.getElementById('why-technical-content');
  const simpleText = document.getElementById('why-simple-text');
  const techText = document.getElementById('why-technical-text');

  const stepPills = document.querySelectorAll('.progress-step-pill');

  // Populate Dropdown
  if (caseSelect) {
    caseSelect.innerHTML = engine.cases.map(c => 
      `<option value="${c.id}">${c.title}</option>`
    ).join('');

    caseSelect.addEventListener('change', (e) => {
      engine.setCase(e.target.value);
    });
  }

  // Event Listeners for Buttons
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      engine.runFullInference();
    });
  }
  if (prevBtn) prevBtn.addEventListener('click', () => engine.prevStep());
  if (nextBtn) nextBtn.addEventListener('click', () => engine.nextStep());
  if (resetBtn) resetBtn.addEventListener('click', () => engine.reset());

  // Step Pills Click listener
  stepPills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      engine.jumpToStep(idx + 1);
    });
  });

  // "WHY?" Drawer toggle
  if (stepWhyBtn && whyDrawer) {
    stepWhyBtn.addEventListener('click', () => {
      whyDrawer.classList.toggle('hidden');
    });
  }

  // Why Sub-tabs
  if (simpleBtn && techBtn && simpleContent && techContent) {
    simpleBtn.addEventListener('click', () => {
      simpleBtn.className = "px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500 text-slate-950 transition-all";
      techBtn.className = "px-3 py-1 rounded-md text-xs font-mono font-bold text-slate-400 hover:text-white transition-all";
      simpleContent.classList.remove('hidden');
      techContent.classList.add('hidden');
    });

    techBtn.addEventListener('click', () => {
      techBtn.className = "px-3 py-1 rounded-md text-xs font-mono font-bold bg-indigo-500 text-white transition-all";
      simpleBtn.className = "px-3 py-1 rounded-md text-xs font-mono font-bold text-slate-400 hover:text-white transition-all";
      techContent.classList.remove('hidden');
      simpleContent.classList.add('hidden');
    });
  }

  // Subscribe to Engine state updates
  engine.subscribe((state) => {
    const { currentCase, currentStep, stepNumber, isFirstStep, isLastStep, isAutoPlaying } = state;

    // Trigger smooth card transition
    if (cardDisplay) {
      cardDisplay.classList.remove('step-fade-transition');
      // Trigger reflow for clean restart
      void cardDisplay.offsetWidth;
      cardDisplay.classList.add('step-fade-transition');
    }

    if (counterText) counterText.innerText = `0${stepNumber} / 05`;
    if (stepBadge) stepBadge.innerText = `STEP 0${stepNumber}`;
    if (stepSanskrit) stepSanskrit.innerText = currentStep.sanskrit;
    if (stepRole) stepRole.innerText = currentStep.role;
    if (stepStatement) stepStatement.innerText = `"${currentStep.statement}"`;

    if (simpleText) simpleText.innerText = currentStep.simpleWhy;
    if (techText) techText.innerText = currentStep.technicalWhy;

    if (pakshaEl) pakshaEl.innerText = currentCase.paksha;
    if (hetuEl) hetuEl.innerText = currentCase.hetu;
    if (sadhyaEl) sadhyaEl.innerText = currentCase.sadhya;

    // Update Pills
    stepPills.forEach((pill, idx) => {
      pill.classList.remove('active', 'completed');
      if (idx === state.stepIndex) {
        pill.classList.add('active');
      } else if (idx < state.stepIndex) {
        pill.classList.add('completed');
      }
    });

    if (prevBtn) prevBtn.disabled = isFirstStep;
    if (nextBtn) nextBtn.disabled = isLastStep;

    if (runBtn) {
      if (isAutoPlaying) {
        runBtn.innerHTML = `<span>RUNNING...</span> <span class="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>`;
        runBtn.classList.add('opacity-90');
      } else {
        runBtn.innerHTML = `<span>RUN INFERENCE</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;
        runBtn.classList.remove('opacity-90');
      }
    }
  });

  // Initial trigger
  engine.notify();
}
