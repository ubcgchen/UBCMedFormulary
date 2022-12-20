export const hematologicMalignancy = [
  {
    id: 1,
    prompt:
      "A 56 y/o patient in the medicine ward is rushed into surgery for an emergency procedure. During the surgery there is excessive blood loss. It is found that his antithrombin activity is higher than normal and there is inhibition of Factor Xa and thrombin. Assuming an iatrogenic etiology, which of the following medications could have been mistitrated?",
    choices: ["Apixaban", "Dabigatran", "Heparin", "Protamine", "Warfarin"],
    correct: "Heparin",
    tags: ["PD", "medium", "MoA", "Hematology"],
  },
  {
    id: 2,
    prompt:
      "A 66 y/o patient presents to the ER with pneumonia. She has HTN, Afib, and a mechanical heart valve. She is currently on losartan and warfarin. She is started on empiric antibiotic therapy and is discharged shortly. She recovers, but a week later presents to the ER with unexplained hematomas on her thighs. Labs show normal CBC, but an elevated INR (6.9; normal = 1.0-1.4) and a slightly elevated PTT (36s; normal = 25-35s). Which important drug interaction(s) could explain this presentation?",
    choices: [
      "Antibiotic mediated destruction of intestinal flora leading to decreased vitamin K synthesis",
      "Antibiotic mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of warfarin",
      "Antibiotic mediated direct inhibition of Factor XII, thus potentiating the effect of warfarin",
      "Losartan mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of warfarin",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "PK", "medium", "MoA", "Hematology", "side effects"],
  },
  {
    id: 3,
    prompt:
      "A worried 15 y/o female patient presents to the ER with an unstoppable epistaxis. She doesn’t recall any trauma or takes any medication. She does recall her menstrual periods being heavy and bruises easily. She has never had surgery before. She has long standing iron deficiency anemia. Her mom recalls having a postpartum hemorrhage. During the exam, vital signs are normal, no hemarthrosis, hematomas, petechiae, or purpura are noted. Labs (PTT, INR, CBC) are all normal. The most likely bleeding disorder in this case can be treated with, which of the following medications?",
    choices: [
      "Corticosteroid",
      "Desmopressin",
      "Platelet transfusion",
      "Recombinant coagulation factors (VIII and/or IX)",
      "Vitamin K",
    ],
    correct: "Desmopressin",
    tags: ["PD", "medium", "MoA", "Pediatrics", "Hematology"],
  },
  {
    id: 4,
    prompt:
      "A 60 y/o patient presents to the ER with unexplained hematomas and hemarthrosis. Labs show normal CBC (PLT normal), normal PT/INR, and elevated PTT (69s). The hematopathologist performs a 1:1 mixing study with normal control plasma and the PTT fails to correct (65s). Which of the following medications would best explain this result?",
    choices: [
      "Clopidogrel",
      "Heparin",
      "tPA",
      "Warfarin",
      "This is a factor deficiency issue, not a medication issue",
    ],
    correct: "Heparin",
    tags: ["PD", "hard", "MoA", "Hematology"],
  },
  {
    id: 5,
    prompt:
      "Which of the following clotting factors would be affected by a vitamin K epoxide reductase complex 1 (VKORC1) inhibitor?",
    choices: [
      "1, 2, 5, 10",
      "1, 2, 7, 10",
      "2, 5, 9, 10",
      "2, 5, 7, 10",
      "2, 7, 9, 10",
    ],
    correct: "2, 7, 9, 10",
    tags: ["PD", "medium", "MoA", "Hematology"],
  },
  {
    id: 6,
    prompt:
      "A 56 y/o pancreatic cancer patient presents to the ER with a fever and altered mental status. He currently is on gemcitabine and palcitaxel (chemotherapeutic agents). A distended abdomen, peripheral edema, jaundice, and mild splenomegaly are noted on exam. Labs show isolated thrombocytopenia, extremely reduced GFR, elevated indirect bilirubin, A peripheral blood smear shows schistocytes. You are highly suspicious of an extremely deadly pathology if left untreated, thus you stop the patient’s chemo drugs, start the patient on plasmapheresis and:",
    choices: [
      "Heparin",
      "Platelet transfusion",
      "Prednisone",
      "tPA",
      "Warfarin",
    ],
    correct: "Prednisone",
    tags: ["PD", "hard", "MoA", "Hematology"],
  },
  {
    id: 7,
    prompt:
      "A 50 y/o patient with a myeloid malignancy of white blood cells, where all malignant cells are maturing, and a F.I.S.H test that shows a t(9:22) mutation can be best treated with which of the following chemotherapeutics?",
    choices: [
      "Dexamethasone",
      "Imatinib",
      "Methotrexate",
      "Rituximab",
      "Trastuzumab",
    ],
    correct: "Imatinib",
    tags: ["PD", "medium", "MoA", "Oncology", "Hematology"],
  },
  {
    id: 8,
    prompt:
      "A 12 y/o patient presents to the ER with a high fever (39\u2070C), epistaxis, and petechiae over his arms and legs. During the story, the parents mention that he has been having night sweats, significant weight loss, and fatigue. Labs return with thrombocytopenia, anemia, leukocytosis with a differential showing: neutropenia, normal lymphocytes, elevated blasts. The ER doctor suspects acute lymphoblastic leukemia. Before the oncology consult can arrive to assess the patient, the ER doctor should start what therapy?",
    choices: [
      "Aspirin",
      "Broad spectrum antibiotics",
      "Ferric gluconate (Iron IV)",
      "Methotrexate",
      "Prednisone",
    ],
    correct: "Broad spectrum antibiotics",
    tags: ["PD", "medium", "MoA", "Infectious", "hematology", "Oncology"],
  },
  {
    id: 9,
    prompt:
      "In children diagnosed with acute lymphoblastic leukemia, what is a therapeutically important pharmacokinetic characteristic of a drug to have when selecting a chemotherapeutic regime?",
    choices: [
      "Addition of charged functional groups",
      "Decreased blood brain barrier penetration",
      "Decreased lipophilicity",
      "Increased blood brain barrier penetration",
    ],
    correct: "Increased blood brain barrier penetration",
    tags: ["PK", "medium", "MoA", "Hematology", "Oncology"],
  },
  {
    id: 10,
    prompt:
      "Which of the following medications if taken at supratherapeutic doses could lead to platelet-type bleeding?",
    choices: [
      "Abciximab (Glycoprotein IIb/IIIa inhibitor)",
      "Clopidogrel (irreversible ADP (P2Y12 subtype) receptor inhibitor)",
      "Heparin",
      "Warfarin",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "medium", "MoA", "Hematology", "side effects"],
  },
];
