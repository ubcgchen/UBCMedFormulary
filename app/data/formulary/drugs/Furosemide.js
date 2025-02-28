export const furosemide = {
  "drug-classes": ["Loop Diuretic"],
  "CBL-cases": [
    "Electrolyte Disturbance",
    "Hypertension, Heart Murmur",
    "Diabetes Mellitus",
  ],
  mechanism: [
    "Inhibits NKCC2 channel in Loop of Henle, promoting Na+/H2O excretion, and depletion of other electrolytes (Cl-, K+, Ca2+, Mg2+)",
  ],
  indications: [
    "Edema (heart failure, nephrotic syndrome, liver failure)",
    "Acute hypercalcemia",
  ],
  "side-effects": [
    "Dehydration",
    "hypokalemia",
    "metabolic alkalosis",
    "electrolyte disturbances (Na+, Cl-)",
    "ototoxicity",
    "hyperuricemia",
    "renal dysfunction (in patients with reduced GFR)",
  ],
  contraindications: [
    "Hypovolemia",
    "Hypokalemia",
    "Severe hyponatremia",
    "Sulfa allergy",
    "complete renal shutdown",
    "Hypersensitivity",
  ],
  "brand-names": ["Lasix"],
  pharmacokinetics: [
    {
      ROA: ["oral", "IV", "IM"],
      elimination: ["renal"],
      "half-life": ["2-3 hours"],
    },
  ],
};
