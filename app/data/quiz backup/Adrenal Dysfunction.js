export const adrenalDysfunction = [
  {
    id: 1,
    prompt:
      "Melissa, a 23 y/o grapefruit farmer with IBD and eczema presents to your clinic after noticing some unintentional abdominal weight gain and amenorrhea. Large purple abdominal striae, facial plethora, dorsocervical fat, easy bruising, and inability to stand from a squatted position are noted on the exam. Her vitals indicate an elevated BP. You are suspicious of an iatrogenic cause and check her medication list, which includes budesonide (PO), prednisone (PO), methotrexate (IM), and fluticasone (topical). She does not drink grapefruit juice. Which of Melissa’s medications most likely played the largest role in causing her presentation?",
    choices: [
      "Budesonide (PO)",
      "Fluticasone (topical)",
      "Methotrexate (IM)",
      "Prednisone (PO)",
    ],
    correct: "Prednisone (PO)",
    tags: ["PD", "medium", "Endocrinology", "MoA", "side effects"],
  },
  {
    id: 2,
    prompt:
      "A 25 y/o patient presents to the endocrinologist with purple abdominal striae, moon facies, facial plethora, dorsocervical fat, supraclavicular fat pad, and profound proximal muscle weakness. Her diagnosis was confirmed biochemically and localized to her adrenal gland after low ACTH levels were found. Radiology confirms an adenoma on her left adrenal gland. The endocrinologist tries to refer her to an endocrine surgeon, however the patient is terrified of surgeries. What medical intervention can the endocrinologist use now?",
    choices: [
      "Cabergoline",
      "Ketoconazole",
      "Metyrapone",
      "B and C",
      "All of the above",
    ],
    correct: "B and C",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 3,
    prompt:
      "A 25 y/o patient initially worried about a surgery to remove a cortisol secreting adenoma on her left adrenal gland (ACTH-independent) undergoes the surgery after medical treatment failed to resolve her cushingoid appearance. No complications occur during the surgery and she is sent to the post-anaesthesia care unit. What important treatment should be initiated post-op?",
    choices: [
      "ACTH",
      "Fludrocortisone",
      "Hydrocortisone",
      "None, she still has her right adrenal gland",
    ],
    correct: "Hydrocortisone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 4,
    prompt:
      "Given that cortisol has equal affinity for the glucocorticoid receptor (GR) and the mineralocorticoid receptor (MR), why would cortisol alone not be enough to treat primary adrenal insufficiency?",
    choices: [
      "Expression of 11β-HSD1 in kidney converts cortisol to cortisone, thereby preventing GR effects",
      "Expression of 11β-HSD1 in kidney converts cortisol to cortisone, thereby preventing MR effects",
      "Expression of 11β-HSD2 in kidney converts cortisol to cortisone, thereby preventing GR effects",
      "Expression of 11β-HSD2 in kidney converts cortisol to cortisone, thereby preventing MR effects",
    ],
    correct:
      "Expression of 11β-HSD2 in kidney converts cortisol to cortisone, thereby preventing MR effects",
    tags: ["PK", "PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 5,
    prompt:
      "A 34 y/o patient presents to the endocrinologist after two abnormal test results: AM cortisol of 1200 nM (normal 140-690 nM) and 1 mg dexamethasone overnight suppression 170 nM (normal <140 nM). Despite these test results, her physical exam findings show no signs of Cushing’s syndrome, her vitals are all normal, and she is not overweight. Puzzled, the endocrinologist orders a 24 hr urine cortisol test, which comes back normal. Which of the following medications that the presented patient takes could have caused this presentation?",
    choices: [
      "Acetaminophen",
      "Ethinyl estradiol",
      "Hydrocortisone",
      "Ibuprofen",
      "Levothyroxine",
    ],
    correct: "Ethinyl estradiol",
    tags: ["PK", "PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 6,
    prompt:
      "A 34 y/o patient presents with weakness, fatigue, weight loss, orthostatic hypotension, and hyperpigmentation. Some lab results show hyponatremia, hyperkalemia, hypercalcemia, and elevated creatinine. An AM cortisol is abnormally low, and an ACTH stimulation test fails to raise cortisol levels. Which of the following medications would you use to treat the patient?",
    choices: [
      "Desmopressin",
      "Dexamethasone",
      "Fludrocortisone",
      "Fludrocrotisone + Hydrocortisone",
      "Hydrocortisone",
    ],
    correct: "Fludrocrotisone + Hydrocortisone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 7,
    prompt:
      "A 30 y/o patient was diagnosed with HTN a few years ago, but has not been able to control it medically. In fact, the use of hydrochlorothiazide precipitated a hypokalemic emergency. A screening aldosterone-renin ratio showed 76 (Normal <50). After potassium repletion, an oral salt loading test was performed and showed no reduction of aldosterone. CT abdo showed bilateral adrenal gland masses. In this case, which of the following is the most effective drug to treat with?",
    choices: [
      "Amiloride",
      "Ketoconazole (inhibits multiple enzymes in adrenocortical hormone synthesis)",
      "Metyrapone (11β-hydroxylase inhibitor)",
      "Mifepristone",
      "Spironolactone",
    ],
    correct: "Spironolactone",
    tags: ["PD", "medium", "Endocrinology", "Cardiology"],
  },
  {
    id: 8,
    prompt:
      "Michael, a 32 y/o patient, presents to the ER with a pounding headache, sweating, and abdominal pain. You take his vitals and find that he is tachycardic and hypertensive. He says that he was diagnosed with a panic disorder a few years ago. You present the patient to your attending a few minutes later, but all of his symptoms have spontaneously resolved. The attending is about to discharge him, but you think you have found a zebra and ask the attending to order a CT abdomen and urine metanephrines. Assuming your top differential is correct, what is the correct hemodynamic management prior to surgical intervention?",
    choices: [
      "α and β blockade with labetalol (adrenoceptor affinity β > α)",
      "α blockade with metoprolol, then β blockade with prazosin",
      "α blockade with prazosin, then β blockade with metoprolol",
      "β blockade with metoprolol, then α blockade with prazosin",
      "β blockade with prazosin, then α blockade with metoprolol",
    ],
    correct: "α blockade with prazosin, then β blockade with metoprolol",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 9,
    prompt:
      "A 2 wk old male neonate presents to the NICU with excessive vomiting, lethargy, and hypotension. The neonate is stabilized with IV fluids and hydrocortisone IV bolus (100 mg/m\u00b2). Lab tests show hyperkalemia and elevated 17-hydroxyprogesterone. Which of the following medical interventions will the patient most likely need?",
    choices: [
      "Fludrocortisone",
      "Hydrocortisone",
      "Hydrocortisone and fludrocortisone",
      "Hydrocortisone, fludrocortisone, and estrogen",
      "Hydrocortisone, fludrocortisone, and testosterone",
    ],
    correct: "Hydrocortisone and fludrocortisone",
    tags: ["PD", "medium", "MoA", "Endocrinology", "Pediatrics"],
  },
  {
    id: 10,
    prompt:
      "A 45 y/o patient presents to the ER after being found with altered mental status in his own vomit at home. He has profound postural hypotension, fatigue, tachycardic and is confused. His medical history includes ongoing glucocorticoid replacement therapy. His neighbor recalls that his estranged wife recently visited and he started feeling a little sick shortly after. What medical intervention should be initiated as soon as possible?",
    choices: [
      "IV fludrocortisone",
      "IV hydrocortisone",
      "IV hydrocortisone and fludrocortisone",
      "IV hydrocortisone, fludrocortisone, testosterone",
    ],
    correct: "IV hydrocortisone",
    tags: ["PD", "medium", "Endocrinology", "MoA"],
  },
  {
    id: 11,
    prompt: "What is a major adverse effect of long term glucocorticoid use?",
    choices: [
      "Hypercalcemia",
      "Primary adrenal insufficiency",
      "Secondary adrenal insufficiency",
      "Syndrome of inappropriate antidiuretic hormone",
    ],
    correct: "Secondary adrenal insufficiency",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology"],
  },
  {
    id: 12,
    prompt:
      "Which of the following correctly ranks glucocorticoids by increasing potency for the glucocorticoid receptor?",
    choices: [
      "Dexamethasone < Methylprednisolone < Prednisolone < Hydrocortisone < Cortisol",
      "Cortisol < Hydrocortisone < Prednisolone < Methylprednisolone < Dexamethasone",
      "Cortisol = Hydrocortisone < Prednisolone < Methylprednisolone < Dexamethasone",
      "Cortisol = Hydrocortisone < Methylprednisolone < Prednisolone < Dexamethasone",
      "Hydrocortisone < Cortisol < Methylprednisolone < Prednisolone < Dexamethasone",
    ],
    correct:
      "Cortisol = Hydrocortisone < Prednisolone < Methylprednisolone < Dexamethasone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
  {
    id: 13,
    prompt:
      "Which of the following is NOT an adverse effect associated with glucocorticoid use?",
    choices: [
      "Glaucoma",
      "Increased stomach acid",
      "Insulin resistance",
      "Osteoporosis",
      "Skin thickening",
    ],
    correct: "Skin thickening",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
  },
  {
    id: 14,
    prompt:
      "A 56 y/o patient with COPD presents to the ER with nausea, confusion, hypotension, and dehydration. On inspection there is no hyperpigmentation and he denies craving salt. Labs show normal potassium, hyponatremia, and hypoglycemia. His records indicated that he recently completed a 6 wk course of daily oral prednisone with no dose tapering. The cortisol and ACTH levels are still pending. What is the most likely explanation for the patient’s presentation?",
    choices: [
      "The course of prednisone was not long enough to treat his primary adrenal insufficiency, thus leading to an acute adrenal crisis",
      "The course of prednisone was not enough to treat his secondary adrenal insufficiency, thus leading to an acute adrenal crisis",
      "The course of prednisone was too strong and caused permanent suppression of the hypothalamic-pituitary-adrenal axis, thus leading to secondary adrenal insufficiency and an acute adrenal crisis",
      "The lack of prednisone tapering didn’t allow the hypothalamic–pituitary–adrenal axis to recover, thus leading to secondary adrenal insufficiency and an acute adrenal crisis",
    ],
    correct:
      "The lack of prednisone tapering didn’t allow the hypothalamic–pituitary–adrenal axis to recover, thus leading to secondary adrenal insufficiency and an acute adrenal crisis",
    tags: ["PK", "PD", "medium", "MoA", "Endocrinology", "side effects"],
  },
  {
    id: 15,
    prompt: "Which of the following is NOT an effect of cortisol?",
    choices: [
      "Decrease calcium absorption and bone formation",
      "Inhibit inflammatory cytokine release",
      "Inhibit epinephrine synthesis",
      "Reduce prostaglandins and leukotriene synthesis",
      "Stimulate lipolysis and proteolysis",
    ],
    correct: "Inhibit epinephrine synthesis",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
  },
];
