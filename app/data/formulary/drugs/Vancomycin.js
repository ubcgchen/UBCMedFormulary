export const vancomycin = {
  "drug-classes": ["Glycopeptide antibiotic"],
  "CBL-cases": ["Pneumonia and Cough", "Lower Gastrointestinal", "Infertility"],
  mechanism: [
    "Inhibits cell wall synthesis at a different step than penicillins/cephalosporins, resulting in cell lysis (bactericidal)",
  ],
  indications: [
    "Refer to Health authority antibiograms and algorithms",
    "MRSA",
  ],
  "side-effects": [
    "Infusion related event: Red man syndrome",
    "ototoxicity",
    "nephrotoxicity",
    "neutropenia",
    "pancytopenia",
    "phlebitis",
    "DRESS syndrome",
  ],
  contraindications: ["Known hypersensitivity to vancomycin"],
  "brand-names": ["Vancocin"],
  pharmacokinetics: [
    {
      ROA: ["oral", "IV"],
      elimination: ["Renal", "Fecal"],
      "half-life": ["3-8 hrs"],
    },
  ],
};
