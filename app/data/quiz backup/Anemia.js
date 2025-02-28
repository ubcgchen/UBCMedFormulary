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
    explain: "This question requires understanding Fe metabolism and physiology. The reason why Fe every other day is thought to be as effective as taking Fe daily is because of hepcidin levels. Taking PO Fe will increase the serum heparin levels for around 24 hrs, which will inhibit ferroportin and absorption due to the body perceiving an elevated Fe state. Hence, Fe absorption the next day would be poor. Therefore, if we wait for the hepcidin levels to drop after 24 hrs, we would expect better Fe absorption. (B) correctly describes this.",
  },
  {
    id: 2,
    prompt:
      "A 25 y/o patient with iron deficiency anemia presents to her family practice for a follow up after being put on iron supplements PO daily (non heme) on an empty stomach. She still complains of shortness of breath and fatigue. Her blood test returns: MCV 60, Hgb 68, and a low ferritin (15 µg/L) - a marginal improvement from her last blood test 3 months ago (8 µg/L). You ask her about her diet and new medications and she says that she has been taking vitamin C and Tums (CaCO\u2083) after feeling some heartburn. What is going on in this case?",
    choices: [
      "Calcium from the Tums inhibits Fe absorption",
      "Heartburn due to increased acid (low pH), inhibits Fe absorption",
      "Taking Fe on an empty stomach decreases Fe absorption",
      "Vitamin C is decreasing Fe absorption efficiency",
    ],
    correct: "Calcium from the Tums inhibits Fe absorption",
    tags: ["PD", "PK", "medium", "MoA", "Hematology", "side effects", "GI"],
    explain: "This question requires understanding oral Fe absorption. In this vignette we are presented with inadequate Fe supplementation in someone with microcytic anemia due to Fe deficiency. It is recommended to take PO Fe on an empty stomach and with vitamin C to improve absorption (rule out C, D). This is because there will be less competition for absorption on an empty stomach (ions from diet and less delayed gastric emptying). Vitamin C improves absorption by forming a soluble chelate with Fe in its ferric form (3+), which helps increase absorption in the more alkaline environment of the duodenum and jejunum. This process is aided by creating a more acidic environment (vit C= ascorbic acid) such as gastric acid, hence (B) is also wrong - a low pH environment favors Fe absorption. (A) is the correct answer because it is thought that calcium (2+) can compete with Fe2+ for absorption through divalent metal transporter (DMT1), and also potentially Fe transfer from enterocyte to circulation (ferroportin), hence decreasing Fe absorption. It should be noted that oral Fe has many side effects such as constipation, nausea, epigastric discomfort, and dark stools.",
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
    explain: "This question requires understanding the iatrogenic causes of oxidative hemolysis. In this vignette we are presented with a boy with oxidative hemolysis given the presentation of jaundice, fatigue, and splenomegaly. His labs show normocytic anemia, and his PBF shows blister cells and bite cells, which are indicative of oxidative hemolysis (another finding would be Heinz bodies). Our patient here most likely has G6PD deficiency (X-linked recessive). The lack of this enzyme causes his RBCs to not be able to protect itself from oxidative damage. Some drugs cause increased oxidative stress on cells and thus are thought to be triggers of this. These include antimalarials (primaquine) and many antibiotics. Therefore, the medication that we would least suspect to trigger this condition is (A), a NSAID. Other triggers include Fava beans and henna.",
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
    explain: "This question requires understanding the mechanism of hydroxyurea. (D) correctly describes the mechanism of hydroxyurea in treating sickle cell disease. The mechanism is not elucidated, but is thought to involve increasing nitric oxide levels, which leads to a cascade of events that results in altered gene expression by increasing fetal Hb expression. The main concept is that it results in increased fetal hemoglobin production and concentration, which will not polymerize like HbS in areas of low oxygen saturation.",
  },
  {
    id: 5,
    prompt:
      "A 45 y/o patient with stomach cancer presents to the oncologist for a routine checkup. His blood tests showed Hgb 100 (low) and MCV 107 (high), normal WBC and PLT, and normal B12 and folate. The oncologist suspects one of the chemotherapeutic agents may be causing the abnormal CBC. Which of the following chemotherapeutics classes would you most likely suspect to be the cause?",
    choices: [
      "Alkylating agents - platinum based molecules that prevent DNA unwinding for protein synthesis",
      "Anti-metabolite - nucleotide analogues leading to impaired DNA synthesis",
      "Taxanes - promotes stabilization of microtubules to inhibit cellular replication",
      "Vinca Alkaloids - prevents polymerization of tubulin to form microtubules to inhibit mitosis",
    ],
    correct:
      "Anti-metabolite - nucleotide analogues leading to impaired DNA synthesis",
    tags: ["PD", "hard", "MoA", "Hematology", "side effects"],
    explain: "This question requires understanding pathophysiology of anemia and possible iatrogenic causes. In this vignette we are presented with a cancer patient that has macrocytic anemia given the lab results. His B12 and folate are normal, thus we think there is an iatrogenic cause due to his chemotherapy. Macrocytic anemia is due to impaired DNA synthesis (DNA metabolism), while RNA synthesis is usually not impaired, which results in nuclear-cytoplasmic asynchrony and a build up of cytoplasmic components and a slowly dividing cell. Thus, resulting in a larger than normal cell. From this we can infer that anything that interferes with folate/B12 or DNA metabolism could potentially cause macrocytic anemia. Therefore, (B) is the correct answer as the mechanism described directly suggests interference with DNA metabolism. Examples of this include 5-FU, azathioprine. Other causes could be antifolates like methotrexate. The other choices don’t describe mechanisms that directly impair DNA metabolism.",
  },
  {
    id: 6,
    prompt:
      "A 40 y/o female patient with a history of hypothyroidism and T1DM presents to the family doctor after feeling short of breath, fatigued, and decreased sensation at her toes bilaterally. Her menstrual bleeding has been normal and she is a vegetarian. The exam showed no jaundice or bleeding is observed. Labs show Hgb 90 (low) and MCV 110 (high), with normal WBC and PLT. A peripheral blood smear shows hypersegmented neutrophils. The doctor suspects pernicious anemia given her history of endocrine-related pathologies. Which of the following B12 supplementation routes of administration should the doctor pursue FIRST?",
    choices: ["IM", "IV", "Oral", "None of the above"],
    correct: "IM",
    tags: ["PK", "medium", "PD", "Hematology"],
    explain: "This question requires understanding B12 supplementation. In this vignette we are presented with a patient with some form of autoimmune polyendocrinopathy given her history of T1DM and hypothyroidism and now suspected pernicious anemia (PA). She is showing symptoms of anemia and we suspect that she has a B12 deficiency given her bilateral neuropathy and her megaloblastic anemia (hypersegmented NT and high MCV). PA results in decreased amounts of intrinsic factor, which is produced by parietal cells in the stomach (impaired production or increased destruction of parietal cells). Intrinsic factor is a required cofactor for B12 absorption in the small intestine, thus she has impaired B12 absorption from her diet. Thus, if we want to replace B12, we would want to administer it through a route that does not require the intrinsic factor. Therefore, (A) IM is the best initial RoA to replace B12 as this will bypass the gastrointestinal system and directly replete her B12. (C) is still possible, but requires high doses (1-2 mg daily) and needs to be monitored, therefore IM is often done first before transitioning to PO in patients with PA.",
  },
  {
    id: 7,
    prompt:
      "A 67 y/o patient with CKD (G3bA3), T2DM and HTN presents to his nephrologist after feeling increased fatigue and shortness of breath, and postural hypotension. A CBC shows Hgb 60 (low) and MCV 90 (normal), and normal WBC and PLT. Iron studies, liver function, and B12 are all normal. His medications include IV Fe, metformin, SGLT2i (empagliflozin), ramipril, and amlodipine. You suspect that the anemia is secondary to chronic kidney disease, and start him on which of the following drugs?",
    choices: [
      "Darbepoetin + remove iron supplement",
      "Darbepoetin + continue iron supplement",
      "Darbepoetin + Romiplostim + continue iron supplement",
      "Romiplostim + remove iron supplementation",
      "Romiplostim + continue Iron supplement",
    ],
    correct: "Darbepoetin + continue iron supplement",
    tags: ["PD", "medium", "MoA", "Hematology"],
    explain: "This question requires understanding erythropoiesis stimulating agents. In this vignette we are presented with a CKD patient with anemia. Anemia is commonly associated with CKD patients due to decreased epo production. Remember Epo is produced in the kidneys. This typically results in normocytic, normochromic, and hypoproliferative anemia, primarily due to decreased RBC production. (B) correctly describes the treatment for a CKD anemia patient with normal iron levels. DarbEPOetin is an ESA. RomiPLosTim is a thrombopoietin receptor agonist to stimulate PLT production, which is not a problem in this patient (rule out C-E). Also TPO is produced from the liver. We need to maintain iron supplements because the iron stores need to be adequate to support increased RBC production. If our patient was iron overload, then we could consider changing his Fe supplementation strategy. Another important thing is to remember that we don’t actually target Hgb to be normal in CKD patients because it actually leads to increased mortality. We just want to increase Hgb enough to reduce transfusions and increase quality of life (decrease anemia symptoms). You will learn more about this in CKD week in year 2.",
  },
  {
    id: 8,
    prompt:
      "A 69 y/o patient is admitted to the medicine ward after a serious case of community acquired pneumonia (CAP). The patient is started on empiric antibiotic therapy and dalteparin prophylaxis. On day 5, she feels short of breath and her eyes are yellow. Labs come back with Hgb 70 g/L (low), MCV 95 fL (normal),  WBC neutrophils elevated, PLT normal, retics elevated, elevated LDH, low haptoglobin, elevated bilirubin (specifically indirect bilirubin). A peripheral blood smear shows spherocytes and polychromasia. Assuming an iatrogenic cause, which of the following drugs would most likely cause the presented case?",
    choices: ["β-lactam antibiotics", "Dalteparin", "Macrolides", "Vancomycin"],
    correct: "β-lactam antibiotics",
    tags: ["PD", "medium", "MoA", "Infectious", "Hematology", "side effects"],
    explain: "This question requires understanding an iatrogenic cause of immune hemolytic anemia. In this vignette we are presented with a patient with normocytic anemia. We don’t suspect bone marrow suppression/impaired production due to the elevated WBC (infection), normal PLT, and appropriately elevated retics. We can’t rule out a bleed as the cause of the anemia, but increased RBC destruction is more likely. Here the elevated LDH, low haptoglobin, and elevated bilirubin are indicators of hemolysis. This is because the destruction of RBC releases LDH (lactate dehydrogenase) into the blood. Haptoglobin decreases because RBC destruction releases Hgb, which binds to haptoglobin (prevents Hgb oxidative damage), thus using up our haptoglobin levels (we measure free haptoglobin). Bilirubin is produced from the breakdown of Hgb, thus will be elevated in hemolysis due to increased release of Hgb that is free to be degraded. This results in an increase in unconjugated (indirect) bilirubin as it overwhelms the hepatocytes, which can not conjugate the bilirubin fast enough for excretion via the gallbladder. Finally, the blood smear showing spherocytes and polychromasia further suggest hemolytic anemia. We can confirm this diagnosis with a direct antiglobulin test. The most likely culprit in this case would be (A) (penicillins or cephalosporins). The suggested mechanism is due to the β-lactam structure. The β-lactam ring is unstable (ring strain), which results it to be more likely to open the ring, this causes it to covalently bind to proteins such as those on the RBC membrane, thus creating a new antigen/epitope that results in an immune reaction and antibody production. This is a Type II hypersensitivity reaction. This culminates in RBC hemolysis. (B) is associated with HIT. (C) are very rarely associated with anemias. (D) is more likely associated with DITP.",
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
    explain: "This question requires understanding a serious adverse effect of heparins. In this vignette we are presented with Charles, a very generous and compassionate friend who now has a painful right leg with skin lesions and thrombocytopenia after 6 days of LMWH. We should immediately be suspicious of heparin induced thrombocytopenia (HIT). The diagnosis criteria for HIT is based on Thrombocytopenia: where a drop of >50% is 2 pts (in this case yes), Timing: platelet drop is between 5-10 days of heparin exposure is 2 pts (also yes), Thrombosis: after exposure and not recurrent is 2 pts (yes), oTher: no other causes for thrombocytopenia is 2 pts (also Yes). Therefore, we are highly suspicious that (B) is the reason for the presentation. The pathophysiology behind this is that heparin binds platelet factor 4 (PF4), forming an antigenic molecule that the body reacts to and creates IgG against. This creates an immune complex that leads to Fc mediated platelet activation and thus clot formation and drop in platelet levels as they get activated. HIT is more common with unfractionated heparin than LMWH. HIT is not associated with fondaparinux, in fact fondaparinux is used in the treatment of HIT.",
  },
  {
    id: 10,
    prompt:
      "A patient with a very complicated medical history is on multiple drugs in the medical ward covered in new bruises. His CBC only shows isolated thrombocytopenia. Below is the list of drugs that he started within the last 2 weeks. Which of the following drugs is MOST LIKELY to cause drug-induced immune thrombocytopenia (DITP)?",
    choices: [
      "Clozapine",
      "Gemcitabine",
      "Linezolid",
      "Vancomycin",
    ],
    correct: "Vancomycin",
    tags: ["PD", "medium", "Hematology", "side effects"],
    explain: "This question requires understanding a cause of drug induced immune thrombocytopenia. In this vignette we have a patient with isolated thrombocytopenia after being started on a set of drugs 2 wks ago. Given the isolated nature (not pancytopenia), we can rule out any medication that causes bone marrow failure. This would include (B) and (C). (A) Clozapine is a special case in that it is known to cause isolated neutropenia, which is not the case here. We are left with (D), vancomycin, which is a known cause of DITP. Vancomycin can sometimes result in anti-platelet antibodies production, thus resulting in increased destruction of platelets via the reticuloendothelial system (RES). This usually occurs 2 wks after starting the drug and results in severe isolated thrombocytopenia. It is thought that this is due to antibodies against GpIIb/IIIa on platelets, where the presence of vancomycin increases the affinity of the Abs for it, thus leading to increased PLT lysis and destruction. Discontinuation and removal of vancomycin can resolve DITP.",
  },
];
