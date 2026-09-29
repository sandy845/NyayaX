export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "In the classic Nyāya inference 'The hill has fire because it has smoke', what component does SMOKE represent?",
    options: [
      { text: "A. Pakṣa (The Locus)", correct: false },
      { text: "B. Sādhya (The Conclusion)", correct: false },
      { text: "C. Hetu (The Reason / Evidence)", correct: true },
      { text: "D. Dṛṣṭānta (The Exemplar)", correct: false }
    ],
    explanation: "Exactly! Smoke is the observed mark or evidence (Hetu) that allows us to infer fire."
  },
  {
    id: 2,
    question: "What is the primary function of step 3: Udāharaṇa ('Wherever there is smoke, there is fire, as in a kitchen')?",
    options: [
      { text: "A. To restate the proposition", correct: false },
      { text: "B. To establish universal invariable connection (Vyāpti) with a valid example", correct: true },
      { text: "C. To prove that kitchen fire is hot", correct: false },
      { text: "D. To deny all alternative opinions", correct: false }
    ],
    explanation: "Spot on! Udāharaṇa introduces the universal rule (Vyāpti) anchored by an undisputed real-world example."
  },
  {
    id: 3,
    question: "Why does the statement 'Wherever there is fire, there is smoke' FAIL as a valid Vyāpti rule?",
    options: [
      { text: "A. Because fire is too hot for smoke", correct: false },
      { text: "B. Because of asymmetry: fire can exist without smoke (e.g., a red hot iron ball)", correct: true },
      { text: "C. Because smoke is invisible at night", correct: false },
      { text: "D. Because Nyāya forbids reversing Sanskrit words", correct: false }
    ],
    explanation: "Correct! Fire can exist without smoke (like glowing iron), proving that fire alone does not guarantee smoke."
  },
  {
    id: 4,
    question: "What is the term for a defective or flawed inferential reason in Nyāya?",
    options: [
      { text: "A. Pramāṇa", correct: false },
      { text: "B. Hetvābhāsa", correct: true },
      { text: "C. Nigamana", correct: false },
      { text: "D. Upanaya", correct: false }
    ],
    explanation: "Right! Hetvābhāsa literally means 'fallacy of reason' or pseudo-reason."
  },
  {
    id: 5,
    question: "Which of the 5 members of Nyāya syllogism applies the universal rule directly to the specific subject under test?",
    options: [
      { text: "A. Pratijñā", correct: false },
      { text: "B. Upanaya (Application)", correct: true },
      { text: "C. Nigamana", correct: false },
      { text: "D. Hetu", correct: false }
    ],
    explanation: "Awesome! Upanaya (step 4) is the application step that connects the universal law to the hill."
  },
  {
    id: 6,
    question: "What does 'Pakṣa' mean in the Nyāya syllogism?",
    options: [
      { text: "A. The Universal Rule", correct: false },
      { text: "B. The Subject / Locus where the conclusion is to be established", correct: true },
      { text: "C. The Conclusion", correct: false },
      { text: "D. The Negative Example", correct: false }
    ],
    explanation: "Pakṣa is the subject or locus — e.g., 'the hill' — where we want to prove the Sādhya exists."
  },
  {
    id: 7,
    question: "Which Nyāya Pramāṇa is described as 'knowledge derived from verbal testimony of a reliable source'?",
    options: [
      { text: "A. Pratyakṣa", correct: false },
      { text: "B. Anumāna", correct: false },
      { text: "C. Upamāna", correct: false },
      { text: "D. Śabda", correct: true }
    ],
    explanation: "Śabda (verbal testimony) is valid knowledge received from a trustworthy person or scripture."
  },
  {
    id: 8,
    question: "In the fallacy of Viruddha, the reason given actually proves what?",
    options: [
      { text: "A. Nothing at all", correct: false },
      { text: "B. The exact opposite of the intended conclusion", correct: true },
      { text: "C. A related but separate conclusion", correct: false },
      { text: "D. That fire is cold", correct: false }
    ],
    explanation: "Viruddha means 'contradictory' — the reason actually establishes the opposite of what was claimed."
  },
  {
    id: 9,
    question: "The word 'Anumāna' literally means:",
    options: [
      { text: "A. Before knowledge", correct: false },
      { text: "B. Beyond knowledge", correct: false },
      { text: "C. After knowledge (anu = after, māna = knowledge)", correct: true },
      { text: "D. False knowledge", correct: false }
    ],
    explanation: "Anumāna = anu (after) + māna (knowledge). You know the unseen after processing what is seen."
  },
  {
    id: 10,
    question: "What is the role of 'Dṛṣṭānta' (the example like the kitchen) in Nyāya inference?",
    options: [
      { text: "A. It is the final conclusion", correct: false },
      { text: "B. It is the subject under investigation", correct: false },
      { text: "C. It is a familiar, undisputed case that demonstrates the Vyāpti rule", correct: true },
      { text: "D. It disproves the inference", correct: false }
    ],
    explanation: "Dṛṣṭānta is the exemplary case (like a kitchen) that makes the universal rule credible and undisputed."
  },
  {
    id: 11,
    question: "What makes the Savyabhicāra fallacy defective?",
    options: [
      { text: "A. The reason contradicts the conclusion", correct: false },
      { text: "B. The reason is present in both cases where the conclusion holds AND where it doesn't — making it inconclusive", correct: true },
      { text: "C. The conclusion is false", correct: false },
      { text: "D. The example used is wrong", correct: false }
    ],
    explanation: "Savyabhicāra = irregular/inconclusive. The reason (like 'knowability') exists everywhere, so it proves nothing specific."
  },
  {
    id: 12,
    question: "Which member of the 5-step Nyāya syllogism re-states the original proposition as now proven?",
    options: [
      { text: "A. Pratijñā (Step 1)", correct: false },
      { text: "B. Udāharaṇa (Step 3)", correct: false },
      { text: "C. Upanaya (Step 4)", correct: false },
      { text: "D. Nigamana (Step 5)", correct: true }
    ],
    explanation: "Nigamana is the final conclusion. It restates the initial claim as now fully proven through evidence and universal rule."
  }
];
