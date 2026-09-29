export const INFERENCE_CASES = [
  {
    id: "hill-fire",
    title: "Fire on the Hill (Classic Example)",
    paksha: "The Hill",
    hetu: "Presence of Smoke",
    sadhya: "Presence of Fire",
    vyapti: "Wherever there is smoke, there is fire",
    drstanta: "The Kitchen",
    steps: [
      {
        stepNum: 1,
        sanskrit: "Pratijñā (प्रतिज्ञा)",
        role: "Proposition / Initial Claim",
        statement: "The hill possesses fire.",
        simpleWhy: "This is the initial proposition or claim you want to establish. You state what you are asserting before introducing evidence.",
        technicalWhy: "Sādhyavattā-pratipādakaṁ vakyaṁ pratijñā. The statement expressing the locus (Pakṣa) as qualified by the inferable property (Sādhya)."
      },
      {
        stepNum: 2,
        sanskrit: "Hetu (हेतु)",
        role: "Reason / Inferential Evidence",
        statement: "Because the hill possesses smoke.",
        simpleWhy: "This is the evidence or reason you are using to support your claim. It relies on an observed mark at the location.",
        technicalWhy: "Linga-parāmarśa-hetuḥ. The statement declaring the presence of the inferential mark (Linga) in the subject (Pakṣa)."
      },
      {
        stepNum: 3,
        sanskrit: "Udāharaṇa (उदाहरण)",
        role: "Example & Universal Concomitance",
        statement: "Wherever there is smoke, there is fire, as observed in a kitchen.",
        simpleWhy: "You cite a universal rule backed by a familiar, undisputed example that everyone agrees on.",
        technicalWhy: "Vyāpti-pratipādakam udāharaṇam. The statement establishing the invariable concomitance (Vyāpti) illustrated by a positive exemplar (Dṛṣṭānta)."
      },
      {
        stepNum: 4,
        sanskrit: "Upanaya (उपनय)",
        role: "Application of Relation to Locus",
        statement: "This hill possesses smoke which is invariably connected with fire.",
        simpleWhy: "You bridge the universal rule to this specific case, verifying that the evidence on this hill fits the universal pattern.",
        technicalWhy: "Vyāpti-visiṣṭa-lingasya pakṣeṇa saha saṁsamgābhidhānam upanayaḥ. The application of the universal concomitance-qualified mark to the locus."
      },
      {
        stepNum: 5,
        sanskrit: "Nigamana (निगमन)",
        role: "Conclusion / Established Truth",
        statement: "Therefore, this hill possesses fire.",
        simpleWhy: "You restate the initial claim, now proven true through the structured accumulation of reason and universal connection.",
        technicalWhy: "Pratijñā-punar-uccaraṇaṁ nigamanam. The final conclusion restating the proposition as proven."
      }
    ]
  },
  {
    id: "river-rain",
    title: "Upstream Rain from Swollen River",
    paksha: "The Valley River",
    hetu: "Muddy Swelling & Rapid Flow",
    sadhya: "Upstream Rainfall",
    vyapti: "Wherever a river undergoes sudden muddy swelling, rainfall occurred upstream",
    drstanta: "Past Monsoon Floods",
    steps: [
      {
        stepNum: 1,
        sanskrit: "Pratijñā (प्रतिज्ञा)",
        role: "Proposition / Initial Claim",
        statement: "The mountain valley experienced heavy rainfall upstream.",
        simpleWhy: "State the unobserved event you want to infer from current observations downstream.",
        technicalWhy: "Sādhyavattā-pratipādakaṁ vakyaṁ pratijñā. Asserting the Pakṣa (Upstream region) qualified by Sādhya (Rainfall)."
      },
      {
        stepNum: 2,
        sanskrit: "Hetu (हेतु)",
        role: "Reason / Inferential Evidence",
        statement: "Because the river downstream is swelling with muddy, swift water.",
        simpleWhy: "Provide the observed physical sign: the sudden rise and color shift of the river.",
        technicalWhy: "Statement declaring the presence of the effect mark (Kārya-liṅga) in the observed locus."
      },
      {
        stepNum: 3,
        sanskrit: "Udāharaṇa (उदाहरण)",
        role: "Example & Universal Concomitance",
        statement: "Wherever rivers swell with sudden muddy water, rainfall occurred upstream, as seen in past monsoons.",
        simpleWhy: "Connect effect to cause through universal invariable concomitance (Causal Vyāpti).",
        technicalWhy: "Udāharaṇa demonstrating cause-effect relation (Kārya-kāraṇa-bhāva) supported by positive instances."
      },
      {
        stepNum: 4,
        sanskrit: "Upanaya (उपनय)",
        role: "Application of Relation to Locus",
        statement: "This river displays that exact kind of muddy swelling connected with upstream rain.",
        simpleWhy: "Confirm that current observation falls directly under the universal causal law.",
        technicalWhy: "Re-subsumption of the observed effect under the universal rule for this specific locus."
      },
      {
        stepNum: 5,
        sanskrit: "Nigamana (निगमन)",
        role: "Conclusion / Established Truth",
        statement: "Therefore, heavy rainfall definitely occurred upstream.",
        simpleWhy: "Conclude with certainty that upstream rain occurred.",
        technicalWhy: "Final conclusion declaring the Sādhya established via effect-reasoning (Śeṣavat Anumāna)."
      }
    ]
  },
  {
    id: "sound-impermanence",
    title: "Impermanence of Sound (Classical Debate)",
    paksha: "Sound (Śabda)",
    hetu: "Being Produced (Kṛtakatva)",
    sadhya: "Impermanence (Anityatva)",
    vyapti: "Whatever is produced by effort is impermanent",
    drstanta: "A Clay Pot (Ghaṭa)",
    steps: [
      {
        stepNum: 1,
        sanskrit: "Pratijñā (प्रतिज्ञा)",
        role: "Proposition / Initial Claim",
        statement: "Sound is non-eternal (impermanent).",
        simpleWhy: "Formulate the thesis in the classical Indian philosophical debate on the nature of speech and sound.",
        technicalWhy: "Pratijñā declaring Pakṣa (Śabda) qualified by Sādhya (Anityatva)."
      },
      {
        stepNum: 2,
        sanskrit: "Hetu (हेतु)",
        role: "Reason / Inferential Evidence",
        statement: "Because sound is produced by an originating action (vocal cord/instrument stroke).",
        simpleWhy: "Point out that sound has a definite beginning in time created by physical action.",
        technicalWhy: "Hetu declaring the property of originability (Kṛtakatva) in the subject."
      },
      {
        stepNum: 3,
        sanskrit: "Udāharaṇa (उदाहरण)",
        role: "Example & Universal Concomitance",
        statement: "Whatever is produced by action is impermanent, as in a clay pot.",
        simpleWhy: "Cite a universal truth verified by a everyday manufactured object.",
        technicalWhy: "Udāharaṇa with positive example (Anvaya-dṛṣṭānta) of pot (Ghaṭa)."
      },
      {
        stepNum: 4,
        sanskrit: "Upanaya (उपनय)",
        role: "Application of Relation to Locus",
        statement: "Sound is produced by action in the exact same way.",
        simpleWhy: "Apply the principle: since sound is produced, it shares the fate of all produced things.",
        technicalWhy: "Upanaya affirming the presence of the mark in sound."
      },
      {
        stepNum: 5,
        sanskrit: "Nigamana (निगमन)",
        role: "Conclusion / Established Truth",
        statement: "Therefore, sound is non-eternal.",
        simpleWhy: "Conclude that sound cannot be eternal.",
        technicalWhy: "Nigamana completing the 5-fold syllogistic proof."
      }
    ]
  },
  {
    id: "lake-water",
    title: "Water in the Lake (Effect-Based)",
    paksha: "The Lake",
    hetu: "Coldness & Liquid Quality",
    sadhya: "Presence of Water",
    vyapti: "Whatever is cold and liquid in nature contains water",
    drstanta: "River Stream",
    steps: [
      {
        stepNum: 1,
        sanskrit: "Pratijñā (प्रतिज्ञा)",
        role: "Proposition / Initial Claim",
        statement: "The lake possesses real water.",
        simpleWhy: "We claim the lake holds real water, not just a mirage or illusion.",
        technicalWhy: "Pratijñā expressing Pakṣa (Lake) qualified by Sādhya (Presence of Water)."
      },
      {
        stepNum: 2,
        sanskrit: "Hetu (हेतु)",
        role: "Reason / Inferential Evidence",
        statement: "Because the lake is cold and liquid to the touch.",
        simpleWhy: "Touching the lake reveals coldness and liquid texture — these are the observable marks.",
        technicalWhy: "Hetu declaring the observed property of coldness and liquidity in the Pakṣa."
      },
      {
        stepNum: 3,
        sanskrit: "Udāharaṇa (उदाहरण)",
        role: "Example & Universal Concomitance",
        statement: "Whatever is cold and liquid contains water, as in a river stream.",
        simpleWhy: "A river is an undisputed case where coldness and liquid texture always mean water is present.",
        technicalWhy: "Udāharaṇa with positive Dṛṣṭānta (River) demonstrating the Vyāpti."
      },
      {
        stepNum: 4,
        sanskrit: "Upanaya (उपनय)",
        role: "Application of Relation to Locus",
        statement: "This lake is cold and liquid in exactly the same way as the river.",
        simpleWhy: "We confirm the lake shares the same marks as the river example.",
        technicalWhy: "Upanaya applying the Vyāpti-qualified Hetu to the Pakṣa."
      },
      {
        stepNum: 5,
        sanskrit: "Nigamana (निगमन)",
        role: "Conclusion / Established Truth",
        statement: "Therefore, the lake possesses real water.",
        simpleWhy: "We conclude with certainty that water is present, not illusion.",
        technicalWhy: "Nigamana restating the proven Pratijñā."
      }
    ]
  },
  {
    id: "clouds-rain",
    title: "Rain from Clouds (Pūrvavat Inference)",
    paksha: "The Sky Region",
    hetu: "Dark Dense Thunder-Clouds",
    sadhya: "Rainfall",
    vyapti: "Wherever dark dense rain-clouds gather, rainfall follows",
    drstanta: "Past Monsoon Season",
    steps: [
      {
        stepNum: 1,
        sanskrit: "Pratijñā (प्रतिज्ञा)",
        role: "Proposition / Initial Claim",
        statement: "The sky region is about to experience rainfall.",
        simpleWhy: "We claim that rain is coming based on what we see in the sky.",
        technicalWhy: "Pratijñā declaring Pakṣa (Sky) qualified by the forthcoming Sādhya (Rainfall)."
      },
      {
        stepNum: 2,
        sanskrit: "Hetu (हेतु)",
        role: "Reason / Inferential Evidence",
        statement: "Because the sky is filled with dark, dense, thunder-laden clouds.",
        simpleWhy: "The visible sign (Hetu) is the dark cloud formation — we observe this directly.",
        technicalWhy: "Hetu declaring presence of the causal mark (dark clouds) at the Pakṣa."
      },
      {
        stepNum: 3,
        sanskrit: "Udāharaṇa (उदाहरण)",
        role: "Example & Universal Concomitance",
        statement: "Wherever dark dense clouds gather, rain follows — as established in past monsoon seasons.",
        simpleWhy: "We cite the universal pattern observed every monsoon as our undisputed rule.",
        technicalWhy: "Udāharaṇa expressing the Vyāpti: dark cloud formation invariably precedes rainfall."
      },
      {
        stepNum: 4,
        sanskrit: "Upanaya (उपनय)",
        role: "Application of Relation to Locus",
        statement: "The current sky shows exactly those dark dense clouds connected with rainfall.",
        simpleWhy: "We confirm this sky perfectly matches the pattern of rain-bringing clouds.",
        technicalWhy: "Upanaya applying the universal causal Vyāpti to the present sky."
      },
      {
        stepNum: 5,
        sanskrit: "Nigamana (निगमन)",
        role: "Conclusion / Established Truth",
        statement: "Therefore, rainfall is coming to this sky region.",
        simpleWhy: "We can now confidently predict rain — this is Pūrvavat (cause-to-effect) inference.",
        technicalWhy: "Nigamana completing the Pūrvavat (cause-to-effect) Anumāna syllogism."
      }
    ]
  }
];
