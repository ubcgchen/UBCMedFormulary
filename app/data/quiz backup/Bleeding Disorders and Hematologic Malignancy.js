export const hematologicMalignancy = [
  {
    id: 1,
    prompt:
      "A 56 y/o patient in the medicine ward is rushed into surgery for an emergency procedure. During the surgery there is excessive blood loss. It is found that his antithrombin activity is higher than normal and there is inhibition of Factor Xa and thrombin. Assuming an iatrogenic etiology, which of the following medications could have been mistitrated?",
    choices: ["Apixaban", "Dabigatran", "Heparin", "Protamine", "Warfarin"],
    correct: "Heparin",
    tags: ["PD", "medium", "MoA", "Hematology"],
    explain: "This question requires understanding the mechanism of action of different anticoagulants. In this vignette, we have a patient with increased antithrombin activity with inhibition of Factor Xa and thrombin (FII). No other factors are inhibited. (A) should only inhibit Factor X. (B) should only inhibit thrombin. (E) inhibits both of the factors, but also VII and IX., but does not increase antithrombin activity. (C) is the correct answer because heparin (unfractionated) will potentiate antithrombin, leading to inhibition of both Factor Xa and thrombin. LMWH should have more selectivity for Factor Xa>thrombin inhibition due to the size of the molecule, while fondaparinux or ULMWHs should only have Factor Xa inhibition. (D) is a heparin antidote, is a positively charged peptide that undergoes  ionic binding to heparin (negatively charged) to inhibit it.",
  },
  {
    id: 2,
    prompt:
      "A 66 y/o patient presents to the ER with pneumonia. She has HTN, Afib, and a mechanical heart valve. She is currently on losartan and warfarin. She is started on empiric antibiotic therapy and is discharged shortly. She recovers, but a week later presents to the ER with unexplained hematomas on her thighs. Labs show normal CBC, but an elevated INR (6.9; normal = 1.0-1.4) and a slightly elevated PTT (36s; normal = 25-35s). Which important drug interaction(s) could explain this presentation?",
    choices: [
      "Antibiotic mediated destruction of intestinal flora leading to decreased vitamin K synthesis",
      "Antibiotic mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of warfarin",
      "Antibiotic mediated direct inhibition of Factor XII, thus potentiating the effect of warfarin",
      "Warfarin mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of antibiotics causing platelet dysfunction",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "PK", "medium", "MoA", "Hematology", "side effects"],
    explain: "This question requires understanding interactions that affect warfarin. In this vignette, we are presented with a patient that underwent a course of antibiotics. She comes back with clotting-factor type bleeding (hematomas). We also have an elevated INR. This suggests an increase in warfarin. Elevated INR and normal PTT can be explained by the fact that warfarin decreases Factor XII, which is part of the extrinsic pathway (INR/PT) and has a shorter half life than the other factors. This leads to a larger effect on the INR than on the PTT. We can rule out (D) given the normal CBC and the presentation doesn’t suggest platelet-like bleed. (C) would be very unlikely. We are left with (A) and (B). We know that warfarin affects the vitamin K dependent factors, therefore if there is a decrease in vitamin K from gut flora, then there will be even more inhibition of these clotting factors. We also know that warfarin is metabolized by the CYP450 enzymes and many antibiotics can act as CYP450 inhibitors, thus leading to increased warfarin. Therefore, both (A) and (B) are viable mechanisms that could explain the presentation, hence (E) is correct.",
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
    explain: "This question requires recognizing VWF Disease Type 1 and the treatment for it. In this vignette we are presented with a patient with a suspected bleeding disorder by her unstoppable nosebleed. This coupled with her saying she bruises easily suggest a platelet-like bleeding or VWF. We suspect this might be a long standing issue (congenital) given her long history of Fe deficiency anemia, heavy menstrual bleeding, and a family history indicative of some sort of bleeding disorder (Mother’s postpartum hemorrhage). We don’t have a surgical history. The physical exam further suggests a platelet-type bleeding over a coagulation factor bleeding such as the lack of hemarthrosis or hematomas. However, her labs come back normal, so we don’t suspect thrombocytopenia, and her coagulation times are within the normal range. Given the entire presentation, we would heavily suspect VWF Disease Type 1, which is a deficiency of VWF (decreased amount). This can be presented with NORMAL PTT and INR. This results in decreased FVIII since VWF is a chaperone of FVIII, thus leading to abnormal bleeding. In more severe cases we would expect a slightly elevated PTT. VWF Type 1 is also the most common inherited bleeding disorder. The treatment for this is (B), a vasopressin analogue that will help release the VWF-FVIII that is stored in Weibel Palade bodies (WPB) of the endothelium in. In Type 2 (dysfunctional VWF) and Type 3 (lack of VWF-FVIII), we would consider providing exogenous VWF and FVIII (D). (A) is a therapy option for thrombotic thrombocytopenic purpura (TTP). (C) is considered in some cases of thrombocytopenia (acquired reduced production and reserved for severe bleeds). (E) is a reversal method for warfarin.",
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
    explain: "This question requires understanding lab test results and the mechanisms of different “blood thinners”. In this vignette we are presented with a patient with an apparent bleeding disorder. The labs show normal PLT levels (rule out thrombocytopenia), a normal PT/INR (extrinsic), but an elevated PTT (intrinsic), and a PTT mixing study that fails to correct. Both the clinical presentation and labs suggest a factor-related bleeding. Therefore, we can rule out (A) (an antiplatelet). The mixing study result suggests that this is indeed a medication issue (rule out (E)), because the presence of an inhibitor will prevent correction, but a factor deficiency issue will be able to correct due to the control blood containing enough factors to allow for normal clotting. Remember you only need around 30-40% of the clotting factor to still clot normally. We can also rule out (C) because it is a fibrinolytic, which means that it breaks down clots that have already formed, but the lab results suggest an issue in clot formation. We now need to differentiate heparin and warfarin. Warfarin mainly affects INR, which is also how we monitor warfarin activity. This is because warfarin will inhibit factors X, IX, VII, II. FVII is the main factor in the extrinsic pathway and has a very short half life compared to the other factors, hence PT/INR would be increased, but not PTT (except at super high doses). Therefore by process of elimination (D) is the correct answer. Heparin potentiates antithrombin, which is an endogenous inhibitor of factor X and II in the common pathway. The reason why heparin does not prolong PT is due to the presence of heparin inhibitors in the reagents used for PT. At high enough doses heparin could prolong both PTT and PT, but normally you would see prolonged aPTT and normal PT/INR."
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
    explain: "This question requires understanding the vitamin K dependent clotting factors. Warfarin is a vitamin K epoxide reductase complex 1 (VKORC1) inhibitor, which is why it acts as an anticoagulant because it will inhibit the factors that are dependent on vitamin K for proper functioning. Inhibiting the enzyme will inhibit the reactivation of vitamin K. (E) correctly lists the factors that are vitamin K dependent and would be affected by warfarin use (remember 1972 - 10, 9, 7, 2). Some proteins related to anti-clotting are also vitamin K dependent: protein S and protein C - these are also affected by warfarin, but not to the same degree as the clotting factors.",
  },
  {
    id: 6,
    prompt:
      "A 56 y/o pancreatic cancer patient presents to the ER with a fever and altered mental status. He currently is on gemcitabine and palcitaxel (chemotherapeutic agents). A distended abdomen, peripheral edema, jaundice, and mild splenomegaly are noted on exam. Labs show isolated thrombocytopenia, severely elevated creatinine, extremely reduced GFR, elevated indirect bilirubin, A peripheral blood smear shows schistocytes. You are highly suspicious of an extremely deadly pathology if left untreated, thus you stop the patient’s chemo drugs, start the patient on plasmapheresis and:",
    choices: [
      "Heparin",
      "Platelet transfusion",
      "Prednisone",
      "tPA",
      "Warfarin",
    ],
    correct: "Prednisone",
    tags: ["PD", "hard", "MoA", "Hematology"],
    explain: "This question requires recognizing thrombotic thrombocytopenic purpura (TTP) and the management of it. In this vignette we are presented with a patient who is altered (neuro involvement), fever, renal impairment (elevated creatinine), thrombocytopenia, and MAHA (schistocytes on PBF). These form the pentad of TTP, though in any case that presents with both thrombocytopenia and MAHA (or evidence of hemolysis), then TTP should be considered as a possibility because it is an emergency. In this case you would consider adding (C) a steroid in conjunction with the plasmapheresis (used to clear autoantibodies). Steroids can act as immunosuppressants, and thus are thought to suppress the immune driven reaction behind TTP. The pathophysiology of TTP is an auto-antibody for ADAMTS13, an metalloenzyme that cleaves VWF multimers into smaller ones. This leads to inhibition of the enzyme causing an increased number of large VWF  multimers to circulate and activate platelets, leading to drop in PLT and clots.  Aspirin is another consideration to reduce microthrombi. (B) is contraindicated in this case!). Warfarin (E) has a slow onset and does not treat the immune cause behind TTP, and like (A), is an anticoagulant, which does not address the platelet driven clotting process."
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
    explain: "This question requires understanding a targeted therapy in blood cancers. In this vignette, we are presented with a patient with a myeloid malignancy, where the cells are maturing, and a FISH test showing a Philadelphia chromosome (t(9:22)) - Dx: CML. (B) correctly describes the targeted therapy that is used in CML or ALL that are positive for the Philadelphia chromosome. Imatinib is a tyrosine kinase inhibitor, specifically bcr-abl (and some other targets). Bcr-abl is a fusion protein that results from the Philadelphia chromosome, which produces a constitutively active tyrosine kinase receptor, thus resulting in uncontrolled growth. (D) rituximab is a CD-20 inhibitor, hence would be more useful in blood cancers and auto-immune disorders that involve B-cells (CD-20 is specifically expressed on B-cells, but not plasma cells and HSCs). (E) is a HER2 inhibitor, used for HER2 positive breast cancers. (C) is a folate antimetabolite and (A) is a potent steroid that is added to treatments for blood cancers, but is not a standalone treatment for CML in this case.",
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
    explain: "This question requires understanding the pharmacological management options for febrile neutropenia. In this vignette, we are presented with a patient with suspected ALL, but is presenting emergently with neutropenia and a fever. This patient is at high risk for an infection with no innate immune system (neutrophils) to protect them from any infection, and if they do get infected, the severity will also be increased. Therefore, an important management option is to start broad spectrum antibiotics (B) to help fend off any bacterial infection that the patient could have or could contract. Refer to BC Cancer guidelines and local site antibiotics formulary for the specific drugs to use, but in general broad spectrum antibiotics such as carbapenems are suggested.",
  },
  {
    id: 9,
    prompt:
      "A child with acute lymphoblastic leukemia relapses. A lumbar puncture shows 10 leukocytes/mL (high) in the CSF. Which of the following are the MOST  important properties chemotherapeutics should have in treating this patient?",
    choices: [
      "Addition of charged functional groups",
      "Increased blood brain barrier penetration",
      "Increased plasma protein binding",
      "Oral formulation",
      "B and C"
    ],
    correct: "Increased blood brain barrier penetration",
    tags: ["PK", "medium", "MoA", "Hematology", "Oncology"],
    explain: "This question requires understanding the pathophysiology of ALL and the importance of understanding PK in treating certain diseases. ALL can spread to the CNS and is a major problem. It is suggested that a third of relapses occur due to ALL spreading to the CNS. Therefore treatments for ALL tend to include medications that are able to penetrate the blood brain barrier or can be delivered directly to the CNS via an intrathecal route. In this case only (B) correctly identifies an important property a drug should have in treating CNS-ALL. (A) is wrong because addition of charged functional groups will decrease its ability to cross the BBB (lipophilic drugs fare much better). (C) is also wrong because increased plasma protein binding decreases the amount of free drug that can freely cross the BBB. (D) would suggest a well absorbed drug, but does not directly reflect how well a drug will cross the BBB. Likewise, some regimens require IV routes to increase the plasma concentration of the drug to help facilitate crossing the BBB, something that may be difficult with an oral formulation."
  },
  {
    id: 10,
    prompt:
      "Which of the following medications if taken at supratherapeutic doses could lead to platelet-type bleeding?",
    choices: [
      "Abciximab (Glycoprotein IIb/IIIa inhibitor)",
      "Clopidogrel (irreversible ADP (P2Y12 subtype) receptor inhibitor)",
      "Heparin (Antithrombin potentiator)",
      "Warfarin (Vitamin K antagonist)",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "medium", "MoA", "Hematology", "side effects"],
    explain: "This question requires understanding the mechanisms of iatrogenic causes of bleeding. (E) correctly lists the drugs that could cause platelet-type bleeding: abciximab and clopidogrel. These two drugs are antiplatelet medications and work by inhibiting the activity of platelets, hence if taken at supratherapeutic doses, it is possible for a platelet-type bleeding presentation (mucocutaneous bleed). (C) and (D) are both anticoagulants and work by inhibiting steps within the clotting cascade. Warfarin inhibits the vitamin-K dependent factors (2, 7, 9, 10). Heparin activates antithrombin, which is an endogenous inhibitor of factor Xa and thrombin. There are different molecular sizes of heparin, which changes its specificity, where smaller molecular weight heparins will lead to more factor Xa inhibition over thrombin. Supratherapeutic doses of either heparin or warfarin would more likely lead to clotting factor type bleeding (deep tissue bleeding).",
  },
];
