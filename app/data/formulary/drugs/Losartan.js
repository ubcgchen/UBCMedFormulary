export const losartan = {
  "drug-classes": ["Angiotensin II Receptor Blocker"],
  "CBL-cases": ["Electrolyte Disturbance", "Hypertension"],
  mechanism: [
    "Blocks angiotensin 2 receptor type 1 (AT1), leading to vasodilation and Na+ excretion/K+ retention",
  ],
  indications: [
    "Hypertension",
    "Chronic congestive heart failure (CHF)",
    "Hypertension in patients with T2DM and proteinuria",
    "For patients who can't tolerate ACEi cough",
  ],
  "side-effects": [
    "Dizziness",
    "fatigue",
    "hypotension",
    "hyperkalemia",
    "renal failure",
    "less angioedema than ACEi",
  ],
  contraindications: ["Pregnancy", "renal dysfunction", "Hypersensitivity"],
  "brand-names": ["Cozaar"],
  pharmacokinetics: [
    {
      ROA: ["oral"],
      elimination: ["Hepatic", "Renal"],
      "half-life": ["2 hrs"],
    },
  ],
};
