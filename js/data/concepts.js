export const PRAMANA_DATA = {
  pratyaksa: {
    sanskrit: "Pratyakṣa (प्रत्यक्ष)",
    english: "Direct Perception",
    badge: "Direct Perception",
    desc: "Immediate knowledge produced by direct sensory contact between sense organs and external objects. It forms the empirical baseline of all Indian epistemology.",
    analogy: "Observation / Sensor Data Stream",
    role: "Foundational evidence provider for Hetu."
  },
  anumana: {
    sanskrit: "Anumāna (अनुमान)",
    english: "Indirect Inference",
    badge: "Primary Focus",
    desc: "Knowledge derived after prior perception. It bridges the gap between what is directly observed (the sign/Hetu) and what is unseen (the Sādhya).",
    analogy: "Deductive & Inductive Reasoning Engine",
    role: "Derives unobserved facts from observed evidence."
  },
  upamana: {
    sanskrit: "Upamāna (उपमान)",
    english: "Comparison & Analogy",
    badge: "Analogical Relation",
    desc: "Knowledge of the relation between a name and the object denoted by it, acquired through similarity with a known object.",
    analogy: "Pattern Matching / Transfer Learning",
    role: "Identifier of novel objects based on prior descriptions."
  },
  sabda: {
    sanskrit: "Śabda (शब्द)",
    english: "Verbal Testimony",
    badge: "Authoritative Word",
    desc: "Knowledge gained from the spoken or written statement of a trustworthy authority (Āpta) whose expertise and truthfulness are established.",
    analogy: "Peer-Reviewed Citation / Verified API",
    role: "Transmits verified truth beyond personal observation."
  }
};

export const TRIAD_DATA = {
  paksha: {
    term: "Pakṣa (पक्ष)",
    role: "The Locus / Subject under test",
    def: "The subject or place under consideration where the inferable property (Sādhya) is suspected or to be established.",
    ex: "The Hill (Parvata) in 'The hill has fire'.",
    condition: "Pakṣadharmatā: The Hetu (smoke) must be observed at this specific Pakṣa."
  },
  hetu: {
    term: "Hetu (हेतु)",
    role: "The Mark / Reason / Evidence",
    def: "The observed mark, sign, or reason used to prove the presence of the Sādhya in the Pakṣa.",
    ex: "The Smoke (Dhūma) observed rising from the hill.",
    condition: "Hetu-sattva: The reason must be valid, uncontradicted, and invariably concomitant with Sādhya."
  },
  sadhya: {
    term: "Sādhya (साध्य)",
    role: "The Inferred Property / Conclusion Target",
    def: "The unobserved property, quality, or fact that is to be established in the Pakṣa.",
    ex: "The Fire (Vahni) sought to be proven on the hill.",
    condition: "Sādhyavattā: The ultimate knowledge target established by Nigamana."
  }
};
