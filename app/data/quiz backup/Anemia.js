export const anemia = [
  {
    id: 1,
    prompt:
      "What is the main reason that taking iron supplements every other day is as effective (if not more effective) as taking it daily?",
    choices: [
      "Iron decreases hepcidin levels, which inhibits ferroportin and iron absorption for ~24 hrs",
      "Iron increases hepcidin levels, which inhibits ferroportin and iron absorption for ~24 hrs",
      "Minimizes GI side effects like constipation and nausea",
      "There is no reason to take iron supplements every other day",
    ],
    correct:
      "Iron increases hepcidin levels, which inhibits ferroportin and iron absorption for ~24 hrs",
    tags: ["PK", "medium", "Hematology"],
  },
  {
    id: 2,
    prompt:
      "A 25 y/o patient with iron deficiency anemia presents to her family practice for a follow up after being put on iron supplements PO daily (non heme) on an empty stomach. She still complains of shortness of breath and fatigue. Her blood test returns: MCV 60, Hgb 68, and a low ferritin (15 µg/L) - a marginal improvement from her last blood test 3 months ago (8 µg/L). You ask her about her diet and new medications and she says that she has been taking vitamin C and Tums (CaCO\u2083) after feeling some heartburn. What is going on in this case?",
    choices: [
      "Calcium from the Tums inhibits Fe absorption",
      "Increased acid (low pH) inhibits Fe absorption",
      "Taking Fe on an empty stomach decreases Fe absorption",
      "Vitamin C is decreasing Fe absorption efficiency",
    ],
    correct: "Calcium from the Tums inhibits Fe absorption",
    tags: ["PD", "PK", "medium", "MoA", "Hematology", "side effects", "GI"],
  },
  {
    id: 3,
    prompt:
      "A 7 y/o boy presents to the ER after his parents noticed that he has been fatigued and his eyes are yellow. On exam an elevated HR and mild splenomegaly are noted. A CBC w/ diff shows: Hgb 75 g/L (low), MCV 99 fL (normal), PLT and WBC normal. A peripheral blood smear shows blister cells and bite cells. The ER doctor suspects the boy has a RBC enzymopathy that was triggered by medication. Which of the following medications is NOT a known trigger of this genetic condition?",
    choices: [
      "Ibuprofen (NSAID)",
      "Nitrofurantoin (antibiotic for UTIs)",
      "Primaquine (anti-malarial)",
      "TMP-SMX (Trimethoprim / Sulfamethoxazole)",
    ],
    correct: "Ibuprofen (NSAID)",
    tags: ["PD", "medium", "MoA", "Pediatrics", "Hematology", "side effects"],
  },
  {
    id: 4,
    prompt: "How does hydroxyurea help treat sickle cell disease?",
    choices: [
      "Decreases production of RBC to prevent clumping of sickled RBC",
      "Decreases the production of HbS, thereby reducing HbS polymerization",
      "Induces production of normal RBC and WBC",
      "Induces fetal hemoglobin production, which does not polymerize like HbS",
      "Induces HbA production over HbS, thereby decreasing HbS polymerization",
    ],
    correct:
      "Induces fetal hemoglobin production, which does not polymerize like HbS",
    tags: ["PD", "medium", "MoA", "Hematology"],
  },
  {
    id: 5,
    prompt:
      "A 45 y/o patient with stomach cancer presents to the oncologist for a routine checkup. His blood tests showed Hgb 100 (low) and MCV 107 (high), normal WBC and PLT, and normal B12 and folate. The oncologist suspects one of the chemotherapeutic agents may be causing the abnormal CBC. Which of the following chemotherapeutics classes would you most likely suspect to be the cause?",
    choices: [
      "Alkylating agents - platinum based molecules that prevent DNA unwinding for protein synthesis",
      "Anti-metabolite - nucleotide analogues leading to imparied DNA synthesis",
      "Taxanes - promotes stabilization of microtubules to inhibit cellular replication",
      "Vinca Alkaloids - prevents polymerization of tubulin to form microtubules to inhibit mitosis",
    ],
    correct:
      "Anti-metabolite - nucleotide analogues leading to imparied DNA synthesis",
    tags: ["PD", "hard", "MoA", "Hematology", "side effects"],
  },
  {
    id: 6,
    prompt:
      "A 40 y/o female patient with a history of hypothyroidism and T1DM presents to the family doctor after feeling short of breath, fatigued, and decreased sensation at her toes bilaterally. Her menstrual bleeding has been normal and has recently become vegetarian. The exam showed no jaundice or bleeding is observed. Labs show Hgb 90 and MCV 105, with normal WBC and PLT, and low B12. The GP suspects pernicious anemia given her history of endocrine-related pathologies. Which of the following B12 supplementation routes of administrations should the GP pursue first?",
    choices: ["IM", "IV", "Oral", "None of the above"],
    correct: "IM",
    tags: ["PK", "medium", "PD", "Hematology"],
  },
  {
    id: 7,
    prompt:
      "A 67 y/o patient with T2DM and HTN presents to the nephrologist after 6 months of abnormal kidney studies including decreased GFR (45 mL/min). He also complains of fatigue and shortness of breath, and postural hypotension. A CBC shows Hgb 60 (low) and MCV 90 (normal), and normal WBC and PLT. Iron studies, liver function, and B12 are all normal. You suspect that the anemia is secondary to chronic kidney disease, and start him on which of the following drugs?",
    choices: [
      "Darbepoetin",
      "Darbepoetin + Iron supplement",
      "Darbepoetin + Romiplostim + Iron supplement",
      "Romiplostim",
      "Romiplostim + Iron supplement",
    ],
    correct: "Darbepoetin + Iron supplement",
    tags: ["PD", "medium", "MoA", "Hematology"],
  },
  {
    id: 8,
    prompt:
      "A 69 y/o patient is admitted to the medicine ward after a serious case of community acquired pneumonia (CAP). The patient is started on empiric antibiotic therapy and dalteparin prophylaxis. On day 5, she feels short of breath and her eyes are yellow. Labs come back with Hgb 70 g/L (low), MCV 95 fL (normal),  WBC neutrophils elevated, PLT normal, retics elevated, elevated LDH, low haptoglobin, elevated bilirubin (specifically indirect bilirubin). A peripheral blood smear shows spherocytes and polychromasia. Assuming an iatrogenic cause, which of the following drugs would most likely cause the presented case?",
    choices: ["β-lactam antibiotics", "Dalteparin", "Macrolides", "Vancomycin"],
    correct: "β-lactam antibiotics",
    tags: ["PD", "medium", "MoA", "Infectious", "Hematology", "side effects"],
  },
  {
    id: 9,
    prompt:
      "Charles, a 28 y/o male, is admitted to the surgery ward after agreeing to donate part of his liver to his best friend. On admission his CBC was normal (PLT: 400e9/L). He is started on prophylactic dalteparin and morphine for pain. On day 6, Charles notes pain in his right leg and the nurse notes his leg is severely swollen and the presence of an erythematous skin lesion. A new CBC shows isolated thrombocytopenia (PLT: 80e9/L). An ultrasound of his right leg shows a large thrombus. Being an astute medical student, you are suspicious of which of the following conditions?",
    choices: [
      "Bone marrow suppression due to morphine",
      "Drug induced immune thrombocytopenia due to morphine",
      "Drug induced thrombotic microangiopathy due to dalteparin",
      "Drug induced thrombotic microangiopathy due to morphine",
      "Heparin induced thrombocytopenia due to dalteparin",
    ],
    correct: "Heparin induced thrombocytopenia due to dalteparin",
    tags: ["PD", "medium", "MoA", "Hematology", "side effects"],
  },
  {
    id: 10,
    prompt:
      "A patient with a very complicated medical history is on multiple drugs in the medical ward covered in new bruises. His CBC only shows isolated thrombocytopenia. Below is the list of drugs that he started within the last 2 weeks. Which of the following drugs is known to cause drug-induced immune thrombocytopenia (DITP)?",
    choices: [
      "Clozapine",
      "Gemcitabine",
      "Linezolid",
      "Valproic acid",
      "Vancomycin",
    ],
    correct: "Vancomycin",
    tags: ["PD", "medium", "Hematology", "side effects"],
  },
];
