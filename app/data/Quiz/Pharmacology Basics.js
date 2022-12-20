export const pharmacologyBasics = [
  {
    id: 1,
    prompt:
      "A 60 y/o patient with benign prostate hyperplasia (BPH) presents to the clinic after noticing that his medication for BPH (prazosin) is not working as well as before. He has been having trouble urinating again. He recently has felt that his nose is stuffy and has been using phenylephrine OTC to clear up his stuffy nose. What is most likely occurring in this case?",
    choices: [
      "Phenylephrine has the opposite effect to prazosin, thereby causing pharmacological antagonism",
      "Phenylephrine induces CYP activity, thereby increasing prazosin metabolism",
      "Phenylephrine induces Pgb expression, thereby increasing prazosin excretion",
      "Phenylephrine is competing with prazosin for protein binding, thereby exposing more prazosin for excretion",
    ],
    correct:
      "Phenylephrine has the opposite effect to prazosin, thereby causing pharmacological antagonism",
    tags: ["PD", "medium", "Drug-interactions", "Urology", "SNS"],
  },
  {
    id: 2,
    prompt:
      "A middle aged patient with bipolar disorder and newly diagnosed HTN presents to the clinic after noticing extra side effects such as a metallic taste. He is currently on both lithium and hydrochlorothiazide. What is a possible drug-drug interaction in this case?",
    choices: [
      "Hydrochlorothiazide decreases total blood volume, leading to increased Li serum concentration",
      "Hydrochlorothiazide increases diuresis leading to increased Li excretion",
      "Hydrochlorothiazide inhibits NCC leading to decreased cation reabsorption, thereby decreasing Li half life",
      "Hydrochlorothiazide leads to compensatory increase in nonspecific tubular reabsorption of cations leading to increased Li half life",
    ],
    correct:
      "Hydrochlorothiazide leads to compensatory increase in nonspecific tubular reabsorption of cations leading to increased Li half life",
    tags: [
      "PK",
      "medium",
      "Drug-interactions",
      "Psych",
      "Nephrology",
      "Cardiology",
    ],
  },
  {
    id: 3,
    prompt:
      "A patient is on 2 drugs (Drug A and Drug B) and loves grapefruit juice and will not stop drinking it. Drug A is a CYP3A4 substrate, Drug B is a pro-drug and a CYP3A4 substrate. Which of the following is true?",
    choices: [
      "Drug A will require a larger dose to overcome the decreased metabolism",
      "Drug A will require a larger dose to overcome the increased metabolism",
      "Drug B will require a larger dose to overcome the decreased metabolism",
      "Drug B will require a smaller dose to overcome the increased metabolism",
      "Nothing, plasma concentrations will not be affected",
    ],
    correct:
      "Drug B will require a larger dose to overcome the decreased metabolism",
    tags: ["Drug-interactions", "PK", "medium", "anesthesia"],
  },
  {
    id: 4,
    prompt:
      "Prednisone is a prodrug that requires 11β-HSD1 in liver tissue to convert it to prednisolone, its active metabolite. In patients with liver dysfunction and a skin condition that requires anti-inflammatory medication, which of the following would be the best option?",
    choices: [
      "Increase oral prednisone dose",
      "Increase oral dose, but use prednisolone ",
      "Same oral dose, but use prednisolone",
      "Use topical prednisone for affected areas",
    ],
    correct: "Same oral dose, but use prednisolone",
    tags: ["PK", "Endocrinology", "medium"],
  },
  {
    id: 5,
    prompt:
      "A 23 y/o patient presents to the ER with a decreased level of consciousness, respiratory distress, and hypothermia. His pupils were initially constricted, but now are dilated and reactive to light. A toxicology panel comes back confirming a barbiturate overdose. Phenobarbitone (PB) is acidic and renally excreted. How can you decrease the serum levels of PB?",
    choices: [
      "Forced acid diuresis - lower urine pH - more PB will be ionized and not reabsorbed back",
      "Forced acid diuresis  - lower urine pH - more PB will be secreted (tubular) into the urine",
      "Forced alkaline diuresis - raise urine pH - more PB will be ionized and reabsorbed back",
      "Forced alkaline diuresis - raise urine pH - more PB be secreted (tubular) into the urine",
    ],
    correct:
      "Forced alkaline diuresis - raise urine pH - more PB will be ionized and reabsorbed back",
    tags: ["PK", "medium", "ER"],
  },
  {
    id: 6,
    prompt: "Which of the following is true regarding steady state?",
    choices: [
      "IV (bolus) route of administration will achieve steady state faster than oral route of administration",
      "Steady state is determined by the route of administration and the dosing interval",
      "Steady state is the plasma concentration where the drug falls within the therapeutic range",
      "Steady state is the plasma concentration when elimination will now follow zero-order kinetics",
      "When drug elimination rate is equal to drug administration rate",
    ],
    correct: "When drug elimination rate is equal to drug administration rate",
    tags: ["easy", "PK"],
  },
  {
    id: 7,
    prompt:
      "Given the volume of distribution of four drugs: Drug A - 4 L, Drug B - 38 L, Drug C - 10 L, Drug D - 300 L (based on ideal body weight - 70 kg) Which of the following is most likely true?",
    choices: [
      "Drug A has a more lipophilic distribution",
      "Drug B mainly distributes to extracellular fluid ",
      "Drug C is more basic than Drug B",
      "Drug C mainly distributes to the plasma compartment with probably high protein binding",
      "Drug D will more likely require a lower dose in elderly patients",
    ],
    correct: "Drug D will more likely require a lower dose in elderly patients",
    tags: ["PK", "medium"],
  },
  {
    id: 8,
    prompt:
      "Drug A undergoes zero order kinetics, and Drug B undergoes first order kinetics. Which of the following is true?",
    choices: [
      "At high enough doses, Drug B will have zero order kinetics due to enzyme saturation",
      "Drug A will lose the same proportion of drug at t = 1 hr and at t = 5 hr post administration",
      "The half-life of Drug A is constant, while Drug B has a  concentration dependent half-life",
      "Elimination rate for Drug A is dependent on the initial route of administration (IV vs. PO)",
    ],
    correct:
      "At high enough doses, Drug B will have zero order kinetics due to enzyme saturation",
    tags: ["medium", "PK"],
  },
  {
    id: 9,
    prompt:
      "A patient is receiving an IV infusion of Drug A. Which of the following is false?",
    choices: [
      "A higher steady state can be achieved with faster rate of infusion",
      "Infusion rate must equal the clearance rate to maintain steady state",
      "Once steady state is reached elimination will be zero-order",
      "Steady state will be achieved after 5 half-lives ",
    ],
    correct: "Once steady state is reached elimination will be zero-order",
    tags: ["medium", "PK"],
  },
  {
    id: 10,
    prompt:
      "The half-life of Drug X is 8 hours and is given orally. How long will it take to reach steady state?",
    choices: ["8 hrs", "16 hrs", "32 hrs", "40 hrs", "More info needed"],
    correct: "40 hrs",
    tags: ["PK", "medium"],
  },
  {
    id: 11,
    prompt:
      "A patient presents to the ER with signs of sepsis. Drug X is a new broad spectrum antibiotic that has no known resistant bugs. However, the half life is 3 days, low oral bioavailability, and there is a narrow therapeutic window. Which of the following is the best course of action?",
    choices: [
      "IV bolus loading dose, then maintenance dose every 3 days",
      "IV infusion, but with a higher rate of infusion",
      "IV bolus loading dose, then maintenance dose every day",
      "IV bolus loading dose, then maintain at desired concentration with IV infusion",
      "PO loading dose, then maintenance dose every 3 days",
    ],
    correct:
      "IV bolus loading dose, then maintain at desired concentration with IV infusion",
    tags: ["PK", "medium"],
  },
  {
    id: 12,
    prompt:
      "Given is an acidic drug with a low pKa (2) that is mostly absorbed in the stomach. If administered to an elderly patient, what would you expect to occur with drug absorption?",
    choices: [
      "Decreased absorption due to higher proportion of protonated drug",
      "Decreased absorption due to higher proportion of unprotonated drug",
      "Increased absorption due to higher proportion of protonated drug",
      "Increased absorption due to higher proportion of unprotonated drug ",
    ],
    correct:
      "Decreased absorption due to higher proportion of unprotonated drug",
    tags: ["PK", "medium"],
  },
  {
    id: 13,
    prompt:
      "What changes would you expect to occur with a renally excreted drug in a healthy geriatric patient?",
    choices: [
      "Decreased dosing interval",
      "Increased maintenance doses",
      "Increased time to steady state",
      "Reduced adverse effects",
    ],
    correct: "Increased time to steady state",
    tags: ["PK", "medium"],
  },
  {
    id: 14,
    prompt:
      "Two benzodiazepines are given: lorazepam and diazepam. Lorazepam only undergoes phase II metabolism, while diazepam undergoes both phase I and phase II metabolism. Which of the following drugs would be better for a geriatric patient?",
    choices: [
      "Diazepam because phase I enzymes are unchanged in elderly patients, but phase II enzymes are decreased ",
      "Diazepam because phase I enzymes are unchanged in elderly patients, but phase II enzymes are increased",
      "Lorazepam because phase I enzymes are increased in elderly patients, but phase II enzymes are unchanged",
      "Lorazepam because phase II enzymes are unchanged in elderly patients, but phase I enzymes are decreased",
      "Both are equally effective due to decreased liver size and hepatic blood flow with age",
    ],
    correct:
      "Lorazepam because phase II enzymes are unchanged in elderly patients, but phase I enzymes are decreased",
    tags: ["PK", "medium"],
  },
  {
    id: 15,
    prompt:
      "A lipophilic drug that has significant albumin binding is prescribed to a pediatric patient. What would you expect to occur?",
    choices: [
      "Decreased plasma concentration due to increased albumin expression in children",
      "Decreased plasma concentration due to decreased total body water in children",
      "Increased plasma concentration due to increased total body water in children",
      "Increased plasma concentration due to decreased fat in children",
    ],
    correct: "Increased plasma concentration due to decreased fat in children",
    tags: ["PK", "medium", "pediatrics"],
  },
  {
    id: 16,
    prompt:
      "A 32 y/o G3P1T2 mother just gave birth to a healthy baby boy and is given codeine for post-labour analgesia. She has a CYP2D6 gene duplication. She is breastfeeding her baby boy. Which of the following is a potential consequence?",
    choices: [
      "She will have inadequate analgesia due to increased metabolism of codeine",
      "She will have inadequate analgesia due to decreased metabolism of codeine",
      "Increased risk for respiratory depression in baby due to decreased metabolism of codeine",
      "Increased risk of respiratory depression in baby due to increased metabolism of codeine",
    ],
    correct:
      "Increased risk of respiratory depression in baby due to increased metabolism of codeine",
    tags: ["PK", "medium", "pediatrics", "Ob/Gyn"],
  },
  {
    id: 17,
    prompt:
      "A 30 y/o female is surprised that she is pregnant. She has been using oral contraceptives near-perfectly (never misses a dose, and dose timing is same time everyday) for many years. She was treated with an oral antibiotic a few weeks ago, but does not take any other medications or OTC supplements such as St. John’s Wort. Her OCP is extensively metabolized by CYP450 with glucuronidation and is excreted in the bile. What is the most likely reason for her OCP failure?",
    choices: [
      "The antibiotic inhibited the CYP450 enzymes leading to less activation of OCP",
      "The antibiotic induced the CYP450 enzymes leading to more metabolism of OCP",
      "The antibiotic reduced gut flora, leading to less enterohepatic recirculation of OCP",
      "The antibiotic reduced gut flora, leading to less absorption of OCP",
    ],
    correct:
      "The antibiotic reduced gut flora, leading to less enterohepatic recirculation of OCP",
    tags: ["PK", "medium", "Ob/Gyn"],
  },
];
