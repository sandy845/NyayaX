// Validation Rules engine for user-constructed inferences in the Playground

const VALID_Educational_TUPLES = [
  {
    paksha: "Hill",
    hetu: "Smoke",
    sadhya: "Fire",
    relation: "Wherever there is smoke, there is fire",
    example: "Kitchen",
    valid: true,
    feedback: "✓ Valid Nyāya Inference! This matches the classical Pañcāvayava syllogism (Anvayavyatireki type)."
  },
  {
    paksha: "Valley River",
    hetu: "Muddy Swelling",
    sadhya: "Upstream Rain",
    relation: "Wherever rivers undergo sudden muddy swelling, upstream rain occurred",
    example: "Monsoon River",
    valid: true,
    feedback: "✓ Valid Effect-Cause (Śeṣavat) Anumāna! Swollen muddy water validly establishes upstream rain."
  },
  {
    paksha: "Sound",
    hetu: "Productivity",
    sadhya: "Impermanence",
    relation: "Whatever is produced by action is impermanent",
    example: "Clay Pot",
    valid: true,
    feedback: "✓ Valid Classical Proof! Sound being produced validly establishes its impermanence (Anityatva)."
  },
  {
    paksha: "Lake",
    hetu: "Coldness",
    sadhya: "Upstream Rain",
    relation: "",
    example: "",
    valid: false,
    feedback: "⚠ Defective Reason (Savyabhicāra): Coldness alone is inconclusive — it is present in both lakes and oceans regardless of upstream rain."
  },
  {
    paksha: "Lake",
    hetu: "Coldness",
    sadhya: "Eternality",
    relation: "",
    example: "",
    valid: false,
    feedback: "⚠ Defective Reason (Viruddha): Coldness does not establish eternality — cold water is physical and mutable."
  },
  {
    paksha: "Hill",
    hetu: "Muddy Swelling",
    sadhya: "Fire",
    relation: "",
    example: "",
    valid: false,
    feedback: "⚠ Undefined Vyāpti: There is no established invariable relation between muddy swelling and fire."
  },
  {
    paksha: "Sound",
    hetu: "Smoke",
    sadhya: "Impermanence",
    relation: "",
    example: "",
    valid: false,
    feedback: "⚠ Defective Reason: Smoke has no invariable connection to the impermanence of sound."
  },
  {
    paksha: "Valley River",
    hetu: "Smoke",
    sadhya: "Fire",
    relation: "Wherever there is smoke, there is fire",
    example: "Kitchen",
    valid: true,
    feedback: "✓ Valid Inference! Even on a river bank, smoke validly establishes fire through the kitchen-proven Vyāpti."
  },
  {
    paksha: "Lake",
    hetu: "Productivity",
    sadhya: "Impermanence",
    relation: "Whatever is produced is impermanent",
    example: "Clay Pot",
    valid: true,
    feedback: "✓ Valid Inference! A lake being formed by natural processes (production) validly supports impermanence."
  }
];

export function validateInference(paksha, hetu, sadhya) {
  // Exact match lookup first
  const match = VALID_Educational_TUPLES.find(
    t => t.paksha === paksha && t.hetu === hetu && t.sadhya === sadhya
  );

  if (match) {
    return match;
  }

  // Known fallacy patterns
  if (hetu === "Coldness" && sadhya === "Fire") {
    return {
      valid: false,
      feedback: "⚠ Defective Reason (Bādhita)! Coldness directly contradicts the perceived nature of fire — perception overrides inference."
    };
  }

  if (sadhya === "Eternality" && hetu === "Productivity") {
    return {
      valid: false,
      feedback: "⚠ Defective Reason (Viruddha)! Being produced actually proves impermanence, not eternality — the reason defeats itself."
    };
  }

  if (hetu === "Coldness" && sadhya === "Upstream Rain") {
    return {
      valid: false,
      feedback: "⚠ Defective Reason (Savyabhicāra)! Coldness exists in all lakes, rivers and oceans — it is inconclusive for upstream rain."
    };
  }

  // Generic fallback
  return {
    valid: false,
    feedback: "⚠ Undefined Combination: In this learning model, these elements do not establish a valid invariant Vyāpti relation. Try selecting a recognized combination."
  };
}
