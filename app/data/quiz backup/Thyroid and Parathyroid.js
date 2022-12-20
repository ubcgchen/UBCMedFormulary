export const thyroidParathyroid = [
  {
    id: 1,
    prompt:
      "A 32 y/o patient presented to the clinic a few weeks ago with fatigue, and feeling cold all the time. She described feeling slow all the time. Blood work from her last visit showed elevated TSH levels (8 mu/L) and normal fT3/fT4. She comes to the clinic again for a repeat test, which confirms the elevated TSH levels (8.3 mu/L) and normal fT3/fT4. You also learn that she and her husband are thinking of starting a family soon. Should she be started on any medication and if so, at what dose (patient weight: 60 kg)?",
    choices: [
      "Levothyroxine 60 mcg PO daily",
      "Levothyroxine 75 mcg PO daily",
      "Levothyroxine 96 mcg PO daily",
      "Levothyroxine 120 mcg PO daily",
      "No medication required",
    ],
    correct: "Levothyroxine 96 mcg PO daily",
    tags: ["PD", "medium", "Endocrinology"],
  },
  {
    id: 2,
    prompt:
      "A 25 y/o patient was recently diagnosed with overt hypothyroidism and Celiac disease. What dosing adjustments would be needed for her levothyroxine replacement therapy?",
    choices: [
      "Decrease dose, there is better absorption of levothyroxine in patients with Celiac",
      "Increase dose, there is poor absorption of levothyroxine in patients with Celiac",
      "Same dose, there is no effect to levothyroxine absorption in patients with Celiac",
      "No dose, levothyroxine is contraindicated in Celiac disease",
    ],
    correct:
      "Increase dose, there is poor absorption of levothyroxine in Celiac patients",
    tags: ["PK", "medium", "MoA", "GI", "Endocrinology"],
  },
  {
    id: 3,
    prompt:
      "A 36 y/o patient with Hashimoto's thyroiditis has been taking levothyroxine for the past year at the standard dose and her TSH, fT3, and fT4 levels have still not resolved. Her past medical history includes epilepsy, iron deficiency anemia and GERD. Her medications and supplements include: iron (IM) and omeprazole (PO), and carbamazepine (PO). Which of the following correctly explains a potential reason for the decreased levothyroxine efficacy in this case?",
    choices: [
      "Carabmazepine (PO) increases thyroid hormone metabolism, thereby decreasing levothyroxine serum levels",
      "Iron (IM) inhibits the absorption of levothyroxine, thereby decreasing levothyroxine serum levels",
      "Omeprazole (PO) decreases calcium absorption, which is a required cofactor for levothyroxine absorption",
      "Omeprazole (PO) competes with levothyroxine for absorption, thereby decreasing levothyroxine serum levels",
    ],
    correct:
      "Carabmazepine (PO) increases thyroid hormone metabolism, thereby decreasing levothyroxine serum levels",
    tags: ["PD", "PK", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 4,
    prompt:
      "What is the main pharmacological reason that dose tapering is not required when ending levothyroxine treatment compared to glucocorticoid replacement?",
    choices: [
      "Endogenous T3 and T4 is not suppressed during levothyroxine replacement therapy",
      "Levothyroxine/T4 has a longer half life of 5-7 days vs 8-12 hours (hydrocortisone)",
      "Cortisol replacement requires larger doses than levothyroxine",
      "There is always more free T3/T4 in plasma due to lower protein binding (TBG) than cortisol (transcortin)",
      "Actually, dose tapering is required to prevent rebound exophthalmos",
    ],
    correct:
      "Levothyroxine/T4 has a longer half life of 5-7 days vs 8-12 hours (hydrocortisone)",
    tags: ["PK", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 5,
    prompt:
      "Which of the following most correctly describes the mechanism of action of antithyroid medications like methimazole and propylthiouracil (PTU)?",
    choices: [
      "Both inhibit 5'-deiodinase (T4 to T3 conversion in peripheral tissue) only",
      "Both inhibit 5'-deiodinase and thyroid peroxidase (TPO)",
      "Both inhibit TPO only",
      "Both inhibit TPO, but PTU also inhibits 5'-deiodinase",
      "Both inhibit TPO, but methimazole also inhibits 5'-deiodinase",
    ],
    correct: "Both inhibit TPO, but PTU also inhibits 5'-deiodinase",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 6,
    prompt:
      "Which of the following medications is teratogenic and is known to cause aplasia cutis (scalp abnormality) in pregnant patients?",
    choices: ["I-131", "Levothyroxine", "Methimazole", "Propylthiouracil"],
    correct: "Methimazole",
    tags: ["PD", "easy", "side effects", "Endocrinology"],
  },
  {
    id: 7,
    prompt:
      "Which of the following adverse effects is found in patients using propylthiouracil, but not methimazole?",
    choices: [
      "Acute hepatitis",
      "Agranulocytosis",
      "Anti-neutrophil cytoplasmic autoantibody (ANCA)-associated vasculitis",
      "Hives",
      "None of the above, methimazole has more adverse effects",
    ],
    correct:
      "Anti-neutrophil cytoplasmic autoantibody (ANCA)-associated vasculitis",
    tags: ["PD", "medium", "Endocrinology", "side effects"],
  },
  {
    id: 8,
    prompt:
      "A 25 y/o patient presents to the family doctor with unintentional weight loss, muscle wasting, and diarrhea. She also mentions feeling warm all the time and a fast heart beat. The patient mentions that these symptoms have been affecting her daily function. During the physical exam you notice a tremor, her vitals show a slightly elevated systolic BP, and no goiter. You are suspicious of a thyroid pathology and order a TSH, which comes back extremely low, thus leading you to order a FT3/FT4. You decide to manage her symptoms with propranolol before those results come back. Which of her following symptoms can be managed by propranolol?",
    choices: [
      "Diarrhea",
      "Tachycardia",
      "Tremor",
      "B and C",
      "All of the above",
    ],
    correct: "B and C",
    tags: ["PD", "medium", "MoA", "SNS", "Endocrinology"],
  },
  {
    id: 9,
    prompt:
      "A 36 y/o patient with Grave’s disease with no Grave’s orbitopathy undergoes radioactive iodine (I-131) therapy. She returns a few weeks later following the therapy for a follow up and she appears to be staring at you and she complains of double vision. What is the most likely reason behind this presentation?",
    choices: [
      "Incorrect diagnosis, this is a sign of a TSH secreting pituitary adenoma, which isn’t treated with I-131",
      "I-131 dose was not large enough to cause hypothyroidism",
      "I-131 induced thyrotoxicosis",
      "New orbitopathy is an adverse effect of I-131 therapy",
    ],
    correct: "New orbitopathy is an adverse effect of I-131 therapy",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
  },
  {
    id: 10,
    prompt:
      "A 46 y/o patient with HTN, GERD, and bipolar disorder presents to the clinic with fatigue, unintentional weight gain, constipation, polyuria, memory impairment, and bone pain. On exam the doctor notes a slowed HR, normal BP, and absence of the ankle reflex bilaterally. Unable to distinguish between two different endocrine pathologies, the doctor orders a few tests. The results show: high TSH, low T3/T4, high s[Ca] (repeated twice), slightly elevated PTH, and slightly reduced urine [Ca]. The doctor believes there is a singular iatrogenic cause to the patient’s presentation. Which of the following medications that the patient takes is the most likely culprit?",
    choices: [
      "Cabergoline",
      "Hydrochlorothiazide",
      "Lithium",
      "Metoclopramide",
      "Vitamin D",
    ],
    correct: "Lithium",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
  },
];
