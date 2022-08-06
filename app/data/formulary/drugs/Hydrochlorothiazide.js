export const hydrochlorothiazide = {
  "drug-classes": ["Thiazide diuretic"],
  "CBL-cases": ["Electrolyte Disturbance", "Hypertension", "Diabetes Mellitus"],
  mechanism: [
    "Inhibits the Na/Cl cotransporter in the distal tubule, inhibiting Na+ reabsorption. Reduce systemic vascular resistance in hypertension due to a direct vasodilatory effect",
  ],
  indications: ["Hypertension", "edema", "nephrogenic diabetes insipidus "],
  "side-effects": [
    "Dehydration",
    "hyponatremia",
    "hypokalemia",
    "hypokalemic metabolic acidosis",
    "hyperuricemia",
    "impotency",
    "renal dysfunction (in patients with reduced GFR)",
    "Dizziness",
    "Photosensitivity",
    "hyperlipidemia",
    "impaired glucose tolerance",
  ],
  contraindications: [
    "Sulfa allergy",
    "Azotemia, oliguria during treatment of severe progressive renal disease",
    "Hypersensitivity",
  ],
  "brand-names": ["Microzide", "HydroDiuril", "Oretic"],
  pharmacokinetics: [
    {
      ROA: ["oral"],
      elimination: ["renal"],
      "half-life": ["7-14 hours"],
    },
  ],
};
