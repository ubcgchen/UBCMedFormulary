export const ciprofloxacin = {
  "drug-classes": ["Fluoroquinolone antibiotic"],
  "CBL-cases": ["Pneumonia and Cough"],
  mechanism: [
    "Inhibits DNA gyrase and topoisomerase IV, preventing the resealing of DNA after DNA is unwound and read, resulting in fragmented DNA and cell death.",
  ],
  indications: ["Refer to Health authority antibiograms and algorithms"],
  "side-effects": [
    "Nausea",
    "Diarrhea",
    "Vomiting",
    "Tendon ruptures",
    "QT prolongation",
  ],
  contraindications: [
    "Known hypersensitivity to quinolones",
    "Concurrent administration with tizanidine",
  ],
  "brand-names": ["Cipro", "Ciproxin"],
  pharmacokinetics: [
    {
      ROA: ["oral", "IV"],
      elimination: ["Renal"],
      "half-life": ["4-6 hrs"],
    },
  ],
};
