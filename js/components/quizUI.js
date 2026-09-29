import { QUIZ_QUESTIONS } from '../data/quizQuestions.js';

export function initQuizUI() {
  let currentIndex = 0;
  let score = 0;
  let selected = false;

  // Load previous best score from localStorage
  let bestScore = parseInt(localStorage.getItem('nyayax_best_score') || '0');

  const progressText = document.getElementById('quiz-progress-text');
  const scoreText = document.getElementById('quiz-score-text');
  const questionEl = document.getElementById('quiz-question');
  const optionsContainer = document.getElementById('quiz-options');
  const progressBar = document.getElementById('quiz-progress-bar');

  const feedbackDrawer = document.getElementById('quiz-feedback');
  const feedbackTitle = document.getElementById('quiz-feedback-title');
  const feedbackDesc = document.getElementById('quiz-feedback-desc');
  const nextBtn = document.getElementById('quiz-next-btn');

  const celebrationBox = document.getElementById('quiz-celebration');
  const restartBtn = document.getElementById('quiz-restart-btn');
  const quizCard = document.querySelector('#practice .max-w-2xl');

  function updateProgressBar(index) {
    if (progressBar) {
      const pct = Math.round(((index + 1) / QUIZ_QUESTIONS.length) * 100);
      progressBar.style.width = `${pct}%`;
    }
  }

  function renderQuestion() {
    selected = false;
    const q = QUIZ_QUESTIONS[currentIndex];

    if (feedbackDrawer) feedbackDrawer.classList.add('hidden');
    if (celebrationBox) celebrationBox.classList.add('hidden');

    const qNum = String(currentIndex + 1).padStart(2, '0');
    const total = String(QUIZ_QUESTIONS.length).padStart(2, '0');
    if (progressText) progressText.innerText = `QUESTION ${qNum} OF ${total}`;
    if (scoreText) scoreText.innerText = `Score: ${score}`;
    if (questionEl) questionEl.innerText = q.question;

    updateProgressBar(currentIndex);

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button data-opt-idx="${idx}" class="quiz-opt-btn w-full p-4 text-left font-medium text-sm text-slate-200 flex items-center justify-between">
          <span>${opt.text}</span>
          <span class="opt-indicator text-xs font-mono text-slate-400 border border-slate-700/60 rounded px-2 py-0.5">Select</span>
        </button>
      `).join('');

      const btns = optionsContainer.querySelectorAll('.quiz-opt-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          if (selected) return;
          selected = true;

          const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          const chosenOpt = q.options[idx];

          if (chosenOpt.correct) {
            score++;
            btn.classList.add('correct');
            const ind = btn.querySelector('.opt-indicator');
            if (ind) ind.innerText = 'Correct ✓';
            if (feedbackTitle) {
              feedbackTitle.innerText = "Exactly right! ✓";
              feedbackTitle.className = "font-bold text-emerald-400 font-outfit";
            }
          } else {
            btn.classList.add('incorrect');
            const ind = btn.querySelector('.opt-indicator');
            if (ind) ind.innerText = 'Incorrect ✗';
            if (feedbackTitle) {
              feedbackTitle.innerText = "Not quite. ✗";
              feedbackTitle.className = "font-bold text-rose-400 font-outfit";
            }
            // Highlight correct answer
            btns.forEach((b, i) => {
              if (q.options[i].correct) b.classList.add('correct');
            });
          }

          if (scoreText) scoreText.innerText = `Score: ${score}`;
          if (feedbackDesc) feedbackDesc.innerText = q.explanation;
          if (feedbackDrawer) feedbackDrawer.classList.remove('hidden');
        });
      });
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex < QUIZ_QUESTIONS.length) {
        renderQuestion();
      } else {
        showCelebration();
      }
    });
  }

  function runConfetti() {
    let canvas = document.getElementById('confetti-canvas');
    if (!canvas && quizCard) {
      canvas = document.createElement('canvas');
      canvas.id = 'confetti-canvas';
      quizCard.style.position = 'relative';
      quizCard.style.overflow = 'hidden';
      quizCard.appendChild(canvas);
    }
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = quizCard.clientWidth;
    canvas.height = quizCard.clientHeight;

    const particles = [];
    const colors = ['#f59e0b', '#fbbf24', '#6366f1', '#10b981', '#f43f5e'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 14,
        size: Math.random() * 7 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        gravity: 0.18
      });
    }

    let animId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= 0.013;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  function showCelebration() {
    // Update best score
    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem('nyayax_best_score', bestScore);
    }

    if (optionsContainer) optionsContainer.innerHTML = '';
    if (feedbackDrawer) feedbackDrawer.classList.add('hidden');
    if (questionEl) questionEl.innerText = '';
    if (progressBar) progressBar.style.width = '100%';

    if (celebrationBox) {
      celebrationBox.classList.remove('hidden');

      // Inject score summary
      const existingScore = celebrationBox.querySelector('.score-summary');
      if (existingScore) existingScore.remove();

      const scoreSummary = document.createElement('div');
      scoreSummary.className = 'score-summary flex items-center justify-center gap-6 my-2';
      scoreSummary.innerHTML = `
        <div class="text-center">
          <div class="text-3xl font-black text-amber-400 font-outfit">${score}/${QUIZ_QUESTIONS.length}</div>
          <div class="text-xs text-slate-400 font-mono mt-1">This Round</div>
        </div>
        <div class="w-px h-10 bg-slate-700"></div>
        <div class="text-center">
          <div class="text-3xl font-black text-emerald-400 font-outfit">${bestScore}/${QUIZ_QUESTIONS.length}</div>
          <div class="text-xs text-slate-400 font-mono mt-1">Best Score</div>
        </div>
      `;

      const celebTitle = celebrationBox.querySelector('h3');
      if (celebTitle) celebTitle.after(scoreSummary);
    }

    runConfetti();
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      currentIndex = 0;
      score = 0;
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) canvas.remove();
      renderQuestion();
    });
  }

  renderQuestion();
}
