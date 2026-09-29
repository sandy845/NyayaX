import { INFERENCE_CASES } from '../data/inferenceCases.js';

export class InferenceEngine {
  constructor() {
    this.cases = INFERENCE_CASES;
    this.currentCaseIndex = 0;
    this.currentStepIndex = 0; // 0 to 4 (representing steps 1 to 5)
    this.isAutoPlaying = false;
    this.autoPlayTimer = null;
    this.listeners = [];
  }

  getCurrentCase() {
    return this.cases[this.currentCaseIndex];
  }

  getCurrentStep() {
    const currentCase = this.getCurrentCase();
    return currentCase.steps[this.currentStepIndex];
  }

  setCase(caseId) {
    const index = this.cases.findIndex(c => c.id === caseId);
    if (index !== -1) {
      this.currentCaseIndex = index;
      this.currentStepIndex = 0;
      this.stopAutoPlay();
      this.notify();
    }
  }

  nextStep() {
    const currentCase = this.getCurrentCase();
    if (this.currentStepIndex < currentCase.steps.length - 1) {
      this.currentStepIndex++;
      this.notify();
      return true;
    }
    return false;
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.notify();
      return true;
    }
    return false;
  }

  jumpToStep(stepNum) {
    if (stepNum >= 1 && stepNum <= 5) {
      this.currentStepIndex = stepNum - 1;
      this.notify();
    }
  }

  reset() {
    this.currentStepIndex = 0;
    this.stopAutoPlay();
    this.notify();
  }

  runFullInference() {
    this.stopAutoPlay();
    this.currentStepIndex = 0;
    this.notify();

    this.isAutoPlaying = true;
    this.autoPlayTimer = setInterval(() => {
      const moved = this.nextStep();
      if (!moved) {
        this.stopAutoPlay();
      }
    }, 1200);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
    this.isAutoPlaying = false;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    const state = {
      currentCase: this.getCurrentCase(),
      currentStep: this.getCurrentStep(),
      stepIndex: this.currentStepIndex,
      stepNumber: this.currentStepIndex + 1,
      totalSteps: 5,
      isAutoPlaying: this.isAutoPlaying,
      isFirstStep: this.currentStepIndex === 0,
      isLastStep: this.currentStepIndex === 4
    };
    this.listeners.forEach(fn => fn(state));
  }
}
