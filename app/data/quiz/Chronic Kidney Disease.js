/**
 * Questions for Chronic Kidney Disease week
 * @author Michael Gong, UBC VFMP 2025
 */

export const chronicKidneyDisease = [
  {
    id: 1,
    prompt:
      "A 65 y/o patient with CKD and is on peritoneal dialysis returns from Sri Lanka. He presents with night sweats, dry cough, and unintentional weight loss. A work up is done and he is found to have an active TB infection and is started on rifampin, isoniazid, pyrazinamide, and ethambutol. What would the expected clearance of the renally eliminated drugs be given his presentation?",
    choices: ["5 mL/min", "10 mL/min", "15 mL/min", "Not enough information"],
    correct: "10 mL/min",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding drug clearance for patients on peritoneal dialysis. In peritoneal dialysis, the patient’s peritoneum acts as a filtration barrier. This filtration barrier is permeable to drugs that are available to be filtered (low Vd, low protein binding) and <10kDa (most drugs will be much smaller than that unless they are biologics). Clearance of urea is used to estimate clearance, which is approximated to around 10 mL/min. Hence, (B) is the correct answer.",
  },
  {
    id: 2,
    prompt:
      "How does canagliflozin restore tubular glomerular feedback in early diabetic nephropathy?",
    choices: [
      "Inhibition of SGLT2 in the proximal tubule will DECREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICTION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will DECREASE Na+ delivery to the macula densa, thereby causing afferent arteriole DILATION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICTION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole DILATION to normalize GFR",
    ],
    correct:
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICTION to normalize GFR",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the mechanism of SGLT2 inhibitors renal physiology, and diabetic nephropathy. In early diabetic nephropathy there is hyperfiltration (increase GFR), due to increased reabsorption of Na+ via SGLT2 (cotransporter of Na+ and glucose) at the proximal tubule. This leads to decreased Na+ delivery to the macula densa, which results in afferent arteriole vasodilation (tubuloglomerular feedback (TGF)). Therefore, if SGLT2 is inhibited by canagliflozin, then there will be increased delivery of Na+ to the macula densa, which causes the TGF to send a signal for afferent arteriole vasoconstriction to normalize the GFR (decrease) (C is the correct answer). Hence, SGLT2i are renal protective. This mechanism does explain its side effects like polyuria, volume depletion, hyperkalemia could occur (maybe due to less RAAS activation caused by decreased Na delivery to macula densa), mycotic infections (increase glucose delivery to the urinary system - more nutrients for microbes to use).",
  },
  {
    id: 3,
    prompt: "What is the mechanism of action of darbepoetin?",
    choices: [
      "Erythropoietin (Epo) analogue that binds EpoR in hematopoietic stem cells which leads to increased of differentiation into erythroid progenitors, thus stimulating erythropoiesis",
      "Erythropoietin (Epo) analogue that binds EpoR in erythroid progenitors which leads to inhibition of apoptosis, thus stimulating erythropoiesis",
      "Restores iron levels in body, thus allowing for increased hemoglobin production",
      "Vitamin D (active form) analogue that acts like endogenous calcitriol.",
    ],
    correct:
      "Erythropoietin (Epo) analogue that binds EpoR in erythroid progenitors which leads to inhibition of apoptosis, thus stimulating erythropoiesis",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the mechanism of darbepoetin. Darbepoetin is an erythropoietin stimulating agent (ESA), and is a reengineered Epo analogue. The mechanism of Epo is correctly described in (B), where it prevents apoptosis, thus keeping already made erythroid progenitors alive to mature into RBCs, rather than stimulating more RBCs to be produced, which would be a more time consuming process for the body. Think of it as activating the RBC reserves in times of stress (or low RBC counts).",
  },
  {
    id: 4,
    prompt:
      "A 50 y/o patient with type 2 diabetes mellitus and hypertension has a checkup with his GP. It is found that his eGFR = 50 mL/min and an albumin to creatinine ratio (ACR) of 125 mg/mmol. The GP suggests that the patient should be started on an ACE inhibitor (ACEi) to help slow down the progression of his kidney disease. Is this an appropriate intervention, why or why not?",
    choices: [
      "No, ACEi are contraindicated in any renal disease because it will decrease eGFR via decreased vasoconstriction of the efferent arteriole",
      "No, ACEi are not as efficacious as diuretics in treating hypertension, thus more blood pressure mediated damage to the kidneys will occur",
      "Yes, ACEi will lead to efferent arteriole vasodilation, which will reduce intraglomerular pressure, thus protecting the glomerulus",
      "Yes, ACEi are more efficacious than diuretics in treating hypertension, thus less blood pressure mediated damage to the kidneys will occur",
    ],
    correct:
      "Yes, ACEi will lead to efferent arteriole vasodilation, which will reduce intraglomerular pressure, thus protecting the glomerulus",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding ACEi mechanism and T2DM pathophysiology. In this vignette, we are presented with a patient with HTN and T2DM with nephropathy. Studies have shown that HTN patients with comorbidities like T2DM are best treated with ACEi. This is because ACEi usage leads to decreased AngII, which leads to increased dilation of the efferent arteriole, thus reducing intraglomerular pressure. This protects the glomerulus and reduces changes to it that lead to progressive renal dysfunction. This also helps reduce the filtration of albumin into the urine. Hence (C) best explains the renoprotective effects of ACEi in patients with T2DM and HTN. This will lead to a decrease in eGFR, however the long term benefits on glomerulus health is a lot more beneficial, hence even a 20-30% rise in creatinine is sometimes acceptable in CKD patients starting on an ACEi.",
  },
  {
    id: 5,
    prompt:
      "Which of the following correctly describes a reason why calcimimetics like cinacalcet are reserved for CKD patients on dialysis?",
    choices: [
      "Cinacalet can decrease PTH leading to decreased phosphate excretion leading to hyperphosphatemia",
      "Cincalet directly activates FGF23 leading to increased calcitriol, resulting in hyperphosphatemia and hypercalcemia",
      "Cinacalclet is indicated in both patient populations",
      "Cinacalet is not indicated in dialysis patients due to increased risk of hypocalcemia",
    ],
    correct:
      "Cinacalet can decrease PTH leading to decreased phosphate excretion leading to hyperphosphatemia",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the indications of calcimimetics. Calcimimetics like cinacalcet are allosteric activators of the calcium sensing receptor (CsR). This allows it to mimic high serum calcium levels to suppress PTH. By suppressing PTH, this will lead to a decrease in PTH mediated effect on urine phosphate excretion in patients with renal function. In patients on dialysis, there is essentially little to no kidney function, so this isn’t a problem. This is why it is not used in patients not on dialysis because it can worsen hyperphosphatemia (A). (B) is wrong because cinacalcet does not activate FGF23, and FGF23 does not increase calcitriol. In fact FGF23 decreases calcitriol by decreasing 1-alpha hydroxylase activity, the enzyme that activates 25-OH-vitamin D into 1,25-(OH)2-vitamin D (calcitriol). In end stage CKD-MBD we tend to see hypercalcemia instead of hypocalcemia due to extremely high levels of PTH which results in bone resorption. Hence using cinacalcet will reduce PTH, which leads to decreased bone resorption, resulting in decreased calcium, phosphate, and FGF-23.",
  },
  {
    id: 6,
    prompt:
      "Below are CKD patients at your nephrology clinic waiting room. Given are some lab results. Which of the following would you LEAST likely prescribe calcitriol?",
    choices: [
      "Allison - HYPERparathyroidism, HYPERphosphatemia, HYPOcalcemia",
      "Eric - HYPOparathyroidism, HYPERphosphatemia, HYPERcalcemia",
      "Gregory - HYPERparathyroidism, HYPERphosphatemia, HYPERcalcemia",
      "Robert - HYPERparathyroidism, HYPOphosphatemia, HYPERcalcemia",
    ],
    correct: "Eric - HYPOparathyroidism, HYPERphosphatemia, HYPERcalcemia",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the role of calcitriol (vitamin D) in CKD-MBD patients. In general, calcitriol should decrease PTH, increase phosphate, and increase calcium. Calcitriol has an inhibitory effect on PTH (which is worsened in CKD due PTH gland resistance to calcitriol). Calcitriol increases phosphate by increased intestinal absorption, resorption at the kidneys and bones. Calcitriol increases calcium by promoting PTH mediated bone resorption, intestinal absorption, and kidney resorption. Therefore, (B) would be the patient we’d avoid prescribing calcitriol, we don’t want to lower his PTH even more, and we wouldn’t want to raise his P or Ca levels either. Also PTH targets in CKD patients are higher than normal levels due to increased resistance to PTH effects at the bone, we want to maintain a higher PTH to keep bone tissue dynamic. This will allow us to avoid an adynamic bone state. So hypoPTH in a CKD patient would be a big problem. The recommendation is to consider low dose vitamin D to correct calcitriol deficiency or consider calcitriol in advanced CKD with rising/severe hyperPTH.",
  },
  {
    id: 7,
    prompt:
      "A 65 y/o patient with CKD has her most recent lab values showing hyperkalemia, hyperphosphatemia, and hypercalcemia. Which of the following is the best option to manage her new lab results?",
    choices: [
      "Calcium carbonate",
      "Calcium resonium + Lanthanum (charge: 3+)",
      "Lanthanum (charge: 3+)",
      "Sodium resonium",
      "Sodium resonium + Lanthanum (charge: 3+)",
    ],
    correct: "Sodium resonium + Lanthanum (charge: 3+)",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding CKD-MBD management. In this vignette, we want to manage the patient’s hyperK, hyperP, and hyperCa. Given his hyperCa, we probably don’t want to give him more calcium, therefore rule out (A) and (B). We want to give a phosphate binder, which could be lanthanum (3+ charge), which will sequester the phosphate in the diet from being absorbed. We would also want to give a potassium binder, in this case sodium resonium can chelate excess potassium in the diet. Therefore, (E) would be the best option. Calcium carbonate can be used to supplement calcium and control phosphate levels. Other phosphate binders include: sevelamer, iron, and magnesium, essentially anything with a positive charge. The resoniums, both calcium and sodium, are used to limit potassium",
  },
  {
    id: 8,
    prompt:
      "A 65 y/o patient with CKD presents to the GP with a 3 day history of worsening vomiting and diarrhea. His medical history is significant for HTN, T2DM, and AFib. His medication list includes: enalapril, metformin, apixaban, hydrochlorothiazide, and canagliflozin. On his physical exam the JVP is not visible at 30 degrees or lying down. His lab results come back showing creatinine = 140 µM (his baseline is 100 µM) and his eGFR is steady at 40 mL/min. Urine Na+ = 10 mM. U/A is normal (no casts). The GP suspects a serious case of gastroenteritis. Which of the following medications would you hold?",
    choices: [
      "Canagliflozin",
      "Enalapril",
      "Hydrochlorothiazide",
      "All except for A",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding what medications to hold in patients with CKD and at risk of AKI. In this vignette we are presented with a patient with an illness that is resulting in fluid loss. Given this hypovolemic state, he is at risk of a prerenal AKI. His creatinine does not indicate AKI, and his urine Na+ indicates that his kidneys are absorbing Na+ to maintain blood volume. In these situations, it would be prudent to hold anything that will lower GFR, such as enalapril (B). In hypovolemic states we wouldn’t want to cause more fluid loss. Therefore, HCTZ (C) would also be held. Finally (A) canagliflozin should also be held because it can also reduce GFR, and cause osmotic diuresis due to increased tubular glucose. In situations like this vignette, SGLT2i could precipitate a rare complication: euglycemic diabetic ketoacidosis. Therefore, (E) is the best answer. In this case, we would also consider holding metformin due to the increased risk of lactic acidosis if he ends up having an AKI. Totally FYI: OSADMANS is mnemonic for medications to be held when sick: opiates, SUR, ACEi, diuretics, metformin, ARB, NSAID, SGLT2i.",
  },
  {
    id: 9,
    prompt:
      "A 56 y/o patient with T2DM, CKD, and recovering from a VTE (immobilized for the last week) is sent to the ICU after decompensating in the medicine unit. Vitals: BP 145/90, HR 75, Temp 37.6, RR 20. A volume assessment shows that he is euvolemic. His cardiac assessment is normal. His lab values show a wide anion gap acidosis, hyperkalemia, a 2.0x increase in creatinine, eGFR = 16 mL/min, extremely high lactate levels, hyperkalemia. U/A shows renal tubular epithelial casts, and urine Na+ = 100 mM. His medications include metformin, insulin, dalteparin, amlodipine, hydrochlorothiazide, and prednisone. Which of the following medications should definitely be held?",
    choices: [
      "Amlodipine",
      "Dalteparin",
      "Hydrochlorothiazide",
      "Insulin",
      "Metformin",
    ],
    correct: "Metformin",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the importance of holding certain medications in cases of kidney injury. In this vignette we are presented with a CKD patient with an intrarenal AKI. We suspect intrarenal given his euvolemic state with normal cardiac findings, but mostly his U/A shows renal tubular casts indicative of tubular necrosis and high urine Na+. In these situations, we want to ensure drugs that are dependent on renal clearance and have toxic effects when accumulating are held. (E) metformin would be definitely held. This is because metformin accumulation leads to lactic acidosis (as indicated by his high lactate levels). The mechanism behind this is due to lactic acidosis increasing anaerobic metabolism (blocks Complex I of the ETC in the mitochondria) and inhibition of gluconeogenesis via blocking pyruvate carboxylase, which both leads to accumulation of lactic acid. Metformin is a renally cleared drug and has no hepatic metabolism.This is why metformin is contraindicated in patients with eGFR <30 mL/min. We aren’t worried about his volume status or BP, so (C) doesn’t need to be held. (A) CCBs are safe. (B) Dalteparin would be held in renal failure, but in this case a dose adjustment would be done to reduce his bleed risk, while still keeping him anticoagulated. (D) insulin would be kept especially given his hyperkalemia. Essentially drugs that interfere with renal perfusion, nephrotoxic (aminoglycosides), aggravate hyperkalemia, and renally cleared drugs with toxic accumulation potential should be removed or adjusted.",
  },
  {
    id: 10,
    prompt:
      "A 56 y/o patient with CKD presents to his GP with poorly managed HTN, secondary to his CKD. He is already on the maximum dose of ramipril. He also has bilateral pitting edema in the lower limbs. In this case, what would be the 2nd line management to manage his BP?",
    choices: [
      "Add amlodipine",
      "Add hydrochlorothiazide",
      "Add losartan",
      "Remove ramipril and add amlodipine",
      "Remove ramipril and add hydrochlorothiazide",
    ],
    correct: "Add hydrochlorothiazide",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding HTN management in CKD. In this vignette we are presented with a patient on maximum RAAS inhibition with refractory HTN and edema. We would definitely not give another RAAS inhibitor (C). We also wouldn’t remove the ACEi given the renoprotective effects it has in CKD, therefore rule out (D) and (E). We are left with a CCB and HCTZ. For 2nd line management, we would usually go with a CCB, but this patient has edema, which is not treated with CCB. Therefore, we would give (B) HCTZ to reduce his BP and his edema.",
  },
  {
    id: 11,
    prompt:
      "A 67 y/o patient with CKD and HTN presents to his doctor. He has severe bilateral pitting edema. His BP is not well controlled and is managed with ramipril, and nifedipine. His recent lab results show hyperkalemia (other lytes are normal), eGFR = 20 ml/min, and ACR = 100 mg/mmol. Which of the following medications would you highly consider using in this patient?",
    choices: [
      "Amlodipine",
      "Furosemide",
      "Hydrochlorothiazide",
      "Losartan",
      "Spironolactone",
    ],
    correct: "Furosemide",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding HTN and edema management in CKD. In this vignette we are presented with a CKD stage G4A3, He is already on an ACEi and a CCB and still has poor BP control and edema. The next step should be to add a diuretic, therefore rule out (A), (D). Given his hyperkalemia, (E) a potassium sparing diuretic, would not be a good choice. Given his poor kidney function <30 mL/min, we would consider (B) instead of (C). This is because (B) a loop diuretic, is more efficacious than HCTZ in patients. This is more evident in CKD patients because both diuretics need to reach the renal tubular on the apical side to block its respective transporters. In patients with poor kidney function, we’d expect less drug to reach the site of action, therefore we would want to use a more efficacious drug that could still provide therapeutic benefit despite decreased delivery to the site of action. It’s also thought that there is less Na+ delivery to the distal tubule in CKD patients (increased proximal tubule reabsorption), therefore the therapeutic benefits of HCTZ blocking NCC in the DT is decreased. However, in general there is decreased response to any diuretic in CKD patients, so the same dose of furosemide in someone without CKD will have a larger effect than in a CKD patient.",
  },
  {
    id: 12,
    prompt:
      "A 65 y/o female patient with CKD complicated with anemia. The anemia is normocytic, normochromic,  and hypoproliferative. Her latest Fe studies show ferritin 200 µg/L and she has shown little response to IV Fe . During a routine colonoscopy she is found to have a malignant growth in the descending colon near the splenic flexure. The biopsy confirms colorectal adenocarcinoma. Which of the following medications would you avoid in this patient?",
    choices: ["Darbepoetin", "Canagliflozin", "Fe IV", "Fe PO", "Ramipril"],
    correct: "Darbepoetin",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding contraindications to ESAs. In this vignette we are presented with an anemic patient due to her CKD. Her ferritin levels are >100 µg/L, and has shown little response to IV Fe therapy. She is then diagnosed with a colorectal adenocarcinoma. In this case, (A) would be avoided in this patient given the anti-apoptotic mechanism, which could potentially increase growth of the malignant cells and accelerate tumor growth.",
  },
  {
    id: 13,
    prompt:
      "A 60 y/o CKD patient with anemia, HTN and T2DM presents to the ER with cellulitis of her left leg. She recalls being bit by his neighbor's dog a few days ago. She is well hydrated and eating fine. Her vitals indicate a fever, increased HR, and normal blood pressure. CBC shows elevated WBC and anemia, lytes show mild hyperkalemia, hyperphosphatemia, hypocalcemia. No elevated creatinine from baseline and eGFR is steady. U/A shows elevated ACR = 100 mg/mmol In this case, which of the following medications should be held?",
    choices: ["Calcium carbonate", "Captopril", "Fe IV", "Metformin"],
    correct: "Fe IV",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding when Fe should be avoided. In this vignette we are presented with a patient with cellulitis, and possibly systemic involvement. Totally FYI: Given her T2DM and dog bite (Pasteurella canis), she is also at risk of the cellulitis complicating into osteomyelitis. In this case, the active infection is the issue, hence we should hold (C), Fe. This is because iron is an important nutrient for bacteria, hence it would help bacteria growth. Likewise, iron impairs leukocyte activity, production of cytokines, and other antimicrobial defense mechanisms in the body, therefore decreasing our immune system’s ability to fight the infection. Our body also shifts Fe into storage during infections. ",
  },
  {
    id: 14,
    prompt:
      "Which of the following drugs used in organ transplantation is effective in treating antibody mediated rejection?",
    choices: [
      "Belatacept (CTLA4 engineered molecule that blocks CD80, CD86 on APC)",
      "Cyclosporin (Calcineurin inhibitor)",
      "Mycophenolate Mofetil (IMP dehydrogenase inhibitor)",
      "Tacrolimus (A more potent calcineurin inhibitor)",
      "None of the above",
    ],
    correct: "None of the above",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain:
      "This question requires understanding immunosuppression in organ transplant. None of the drugs (E) are effective in preventing Ab-mediated rejection. (A) blocks the costimulatory (signal 2) signal that activates T-cells. Both (B) and (D) inhibit calcineurin, an important protein in T-cells that lead to the production of IL-2, a major cytokine that stimulates the growth of T-cells. (C) MMF inhibits de novo synthesis of purines (A, G) in both T and B cells. However, none of these are effective in treating antibody-mediated rejection because none of them directly inhibit B-cells and the antibodies produced against the donor organ. Most of these are only effective in inhibiting T-cell activation and hence cellular rejection. The only ways to treat Ab-mediated rejection is plasmapheresis, IgG infusion to sequester Abs.",
  },
  {
    id: 15,
    prompt:
      "Which of the following immunosuppressive agents is most likely to irreversibly damage a newly transplanted kidney?",
    choices: [
      "Belatacept",
      "Mycophenolate mofetil",
      "Prednisone",
      "Tacrolimus",
    ],
    correct: "Tacrolimus",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the side effects of immunosuppressive agents used in organ transplant. (D) tacrolimus and cyclosporine are both nephrotoxic medications. The mechanism is unclear. Totally FYI: Sirolimus is a similarly named anti-rejection medication, but is not a calcineurin inhibitor (mTOR inhibitor) and is not nephrotoxic like the calcineurin inhibitors.",
  },
  {
    id: 16,
    prompt:
      "A 56 y/o patient with CKD and HTN presents to his nephrologist for a checkup. He currently is on the max dose of ramipril, amlodipine, and hydrochlorothiazide. His latest lab results show an ACR = 80 mg/mmol (that has been consistently  rising), eGFR = 45 mL/min, prediabetic HbA1c = 6%, hyperkalemia, hyperphosphatemia, hyperPTH, hypocalcemia, and a normal lipid panel. What other medications would you consider giving to this patient to help manage his CKD?",
    choices: [
      "ARB like losartan",
      "K+ sparing diuretic like spironolactone",
      "Metformin",
      "SGLT2i like empagliflozin",
      "Statin like rosuvastatin",
    ],
    correct: "SGLT2i like empagliflozin",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding pharmacological management of CKD. In this vignette we are presented with a patient in stage G3aA3, on maximum RAAS blockade, and 2 other HTN medications. First we need to recognize that the albuminuria is the issue. To do this we need to reduce hyperfiltration. We can’t add another RAAS inhibitor (A). Therefore, we are left with (D), SGLT2i can decrease hyperfiltration by restoring TGF and could also improve tubulointerstitial fibrosis. The indications to consider adding SGLT2i are: ACR >20 (both diabetic and nondiabetic CKD), GFR 25+, and max RAAS blockade. He has hyperkalemia, so (B) would not be helpful, and there is no indication to use it. His lipids are fine, so (E) wouldn’t be useful. He is not diabetic, so (C) also wouldn’t help too much yet.",
  },
  {
    id: 17,
    prompt:
      "Which of the following INCORRECTLY matches a comorbid disease found in CKD with a pharmacological intervention?",
    choices: [
      "Losartan - hyperkalemia",
      "Rosuvastatin - peripheral artery disease",
      "Sitagliptin - T2DM",
      "Spironolactone - Left ventricular heart failure",
    ],
    correct: "Losartan - hyperkalemia",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding pharmacological tools to manage CKD patients. The incorrect match is (A). ARBs are not used to treat hyperkalemia, in fact ARBs can cause hyperkalemia by reducing aldosterone secretion by inhibiting RAS, leading to decreased potassium excretion. (B) statins or HMG-CoA reductase inhibitors are useful in reducing LDL and cholesterol, hence useful in atherosclerosis. (C) is a DPP4i, useful in glycemic control, but are potentially renoprotective due to antifibrotic abilities, thereby reducing albuminuria. (D) spironolactone is useful in LVHF because of its ability to block aldosterone, leading to decreased cardiac remodeling.",
  },
  {
    id: 18,
    prompt:
      "A 50 y/o female CKD patient and mineral bone disease presents to the clinic. She was recently diagnosed with hypothyroidism and was started on levothyroxine. However, she is still fatigued, constipated, and has cold intolerance. She is currently taking phosphate binders, oral iron, ramipril, empagliflozin, and levothyroxine (negatively charged). Given this information, what could be happening in this patient?",
    choices: [
      "Positively charged phosphate binders are chelating levothyroxine, therefore decreasing absorption",
      "Positively charged iron supplements are chelating levothyroxine, therefore decreasing absorption",
      "Ramipril reducing GFR, causing decreased thyroxine reabsorption at the kidneys",
      "A and B",
      "All of the above",
    ],
    correct: "A and B",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding interactions that affect drug absorption in CKD patients. In this vignette, we have a patient that is treatment refractory to her levothyroxine, and hence is still presenting with hypothyroidism. This suggests that her dose of levothyroxine is not enough to reach therapeutic levels in the body (or being metabolized or cleared faster). We are told that levothyroxine is negatively charged, which means that in the GI tract if there are positively charged molecules, there could be insoluble chelation occuring, thereby preventing absorption. Both (A) and (B) explain a possible mechanism to the decreased response to levothyroxine., thus (D) is correct.",
  },
  {
    id: 19,
    prompt:
      "A 34 y/o patient with epilepsy and an undiagnosed kidney issue presents to his nephrology clinic. Last month he had a VTE and has bilateral peripheral edema. His lab values show proteinuria = 4g/day, hypoalbuminemia (<30 g/L), hypercholesterolemia, normal liver function, and SPEP/UPEP negative. U/A: oval fat bodies and fatty casts. He is currently on phenytoin. Here are some properties of phenytoin: CYP450 metabolized to inactive metabolite, zero order kinetics, Vd =0.7 L/kg, and 90% protein bound. Theoretically, what sort of dosing adjustments would you suggest?",
    choices: [
      "Decrease dose - increased free phenytoin in plasma due to loss of albumin via the kidneys",
      "Increase dose -  increased excretion of phenytoin due to loss of free phenytoin via the kidneys",
      "No adjustments - changes in albumin levels have no effect at all on plasma concentrations of highly protein bound drugs",
      "No adjustments - phenytoin is liver metabolized, thus kidney function has no effect on clearance",
    ],
    correct:
      "Decrease dose - increased free phenytoin in plasma due to loss of albumin via the kidneys",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding how CKD or nephrotic syndrome affects PK of certain drugs. In this vignette we are presented with a patient with nephrotic syndrome (etiology unknown). Nephrotic syndrome leads to hypoalbuminemia, hence medications that have high protein binding are theoretically affected by this. Reduced levels of albumin means more drugs will be free and available to exert its effect. This could be a problem because dosages are designed to take into account protein binding to achieve free drug plasma concentrations in the therapeutic window. However, clinically, this isn’t a big issue for most protein bound drugs because the increase in free drug also leads to increased excretion (no longer protected by protein binding), resulting in steady state concentration to be achieved. But in this case, phenytoin is a special case given its zero order kinetics (fixed amount of drug is metabolized independent of concentration), which causes it to be affected by the loss of albumin. This will lead to increased free phenytoin, therefore we should (A) decrease dose. This essentially highlights a change in Distribution, which affects plasma concentrations. Metabolism and excretion can affect plasma concentrations, but the choices here highlight mechanisms that affect the time the drug stays in the body, but not its plasma concentration.",
  },
  {
    id: 20,
    prompt:
      "A 25 y/o patient presents to the ER. She is unresponsive and her GCS is 9. Collateral information is provided by her roommate that there were empty pill bottles next to her, but the labels were ripped off. A tox panel is ordered and toxicology is consulted. Below are a list of toxins she could have ingested and their properties (Volume of distribution (Vd) for a 70 kg patient, protein binding (%)). Which of the following drug(s) would you expect to be removed with hemodialysis? ",
    choices: [
      "Amitriptyline: Vd ~ 15 L/kg; 95% protein bound",
      "Diazepam: Vd ~ 1.1 L/kg; 99% protein bound ",
      "Phenobarbital: Vd ~ 0.6 L/kg ; 50% protein bound",
      "Not enough information",
      "A and B",
    ],
    correct: "Phenobarbital: Vd ~ 0.6 L/kg ; 50% protein bound",
    tags: ["PK", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the indications of dialysis and how it works. In this vignette we are presented with an overdose patient. Indications for dialysis (AEIOU): Acidosis, Electrolytes, Intoxication/Ingestion, Overload, Uremia. Drugs that can be dialyzed are in general those that can be excreted via the kidneys easily. In general, drugs that have small g/mol (enough to pass through the filtration barrier), low Vd (usually ~<1 L/kg), and low protein binding (~< 80%) can be removed. Low Vd suggests the drug is more water soluble and likely to distribute to the ECF/plasma compartments, thus allowing for increased excretion. Drugs with high Vds will distribute everywhere such as adipose tissue where it can hang around without being removed by the kidneys or dialysis. Likewise, highly protein bound drugs won’t be able to cross the filtration barrier since they would be sequestered by large plasma proteins like albumin, thus they will stay in the body further causing problems (TLDR: small enough to fit and available to be filtered).Therefore, (C) is a barbiturate that we can remove with dialysis given its low Vd and low protein binding. (A) TCAs and (B) benzodiazepines are both highly protein bound and have high Vds, and will not be removed with dialysis The MWs of these drugs are fairly similar. Totally FYI: I-STUMBLED is a mnemonic for dialyzable drugs - Isoniazid/IsopropylOH, Salicylates (ASA), Theophylline, Uremia, Methanol, Barbiturates (phenobarbital), Lithium, Ethylene glycol, Dabigatran/Divalproex.",
  },
  {
    id: 21,
    prompt:
      "A 60 y/o patient with ESRD and moderate congestive heart failure presents to the ER with suspected digoxin toxicity. He presents with a pericardial effusion and altered mental status (encephalopathy), and slowed, irregular heart rate. His urea levels are severely elevated. Which of the following explains the pharmacokinetic mechanism behind the patients toxicity (digoxin protein binding ~ 25%, 70% renally cleared)?",
    choices: [
      "ESRD led to decreased excretion of digoxin, causing an increase in digoxin plasma concentration",
      "Uremia resulted in decreased tissue binding and digoxin Vd, causing an increase in digoxin plasma concentration",
      "Uremia resulted in increased competition for albumin binding, causing an increase in digoxin plasma concentration",
      "A and B",
      "A and C",
    ],
    correct: "A and B",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding how uremia can affect distribution of drugs leading to toxicity. In this vignette, we are presented with an ESRD patient with uremic syndrome and digoxin toxicity. This suggests that the plasma concentration of digoxin is above the therapeutic window. Hence choices that suggest either increased free digoxin plasma concentration, or increased half-life. (A) increases the half life of digoxin. (B) explains the increase in free digoxin, less tissue binding due to competition with the increased urea levels, will decrease Vd and make digoxin distribute into the plasma more and not be sequestered in tissue. This will increase the plasma concentration to toxic levels. Therefore, (D) is the correct answer. (C) is unlikely because digoxin is only 25% bound to protein, hence it won’t be significantly affected by protein binding competition. If it was 80%+ protein bound, then we would be worried about urea competing for albumin binding.",
  },
  {
    id: 22,
    prompt:
      "A 60 y/o patient is prescribed a novel antibiotic for an infection. The properties are as shown low protein binding (~20%), Vd = 0.5 L/kg, MW = 500 Da, and primarily excreted unchanged renally. If the patient also has CKD with poor kidney function, then what sort of dosing modifications can be done to optimize treatment?",
    choices: [
      "Decrease dose, but keep the same dosing interval",
      "Increase dose, but keep the same dosing interval",
      "Same dose, but increase time between doses",
      "Same dose, but decrease time between doses",
    ],
    correct: "Same dose, but increase time between doses",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding drug clearance. In this vignette we are presented with a CKD patient that is on a new ABX that is excreted unchanged. Given that the patient has CKD, we’d expect decreased GFR. This suggests that the drug will stay longer in the body, but not necessarily affect the actual concentration in the body (just how long it is in the body). Therefore, we would want to keep the same dose, since his absorption is not impaired, and increase the time between doses as described in (C). This increased interval will take into account the extra time it will take for the drug to be cleared, so that the next dose does not push the plasma concentration outside of the therapeutic window.",
  },
  {
    id: 23,
    prompt:
      "An increase in which of the following would result in a decrease in serum phosphate levels?",
    choices: ["FGF-23", "PTH", "Calcitriol", "A & B", "B & C"],
    correct: "A & B",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question examines understanding of Calcium/Phosphate homeostasis. (A) FGF-23 results in increased phosphate excretion and decreased calcitriol activation. (B) PTH results in increased phosphate excretion at the kidney. Calcitriol inhibits PTH, and would result in an increase in phosphate levels. As such, the answer is (D). (WW Q)",
  },
  {
    id: 24,
    prompt:
      "An increase in which of the following would result in a decrease in serum phosphate levels?",
    choices: ["FGF-23", "PTH", "Calcitriol", "A & B", "B & C"],
    correct: "A & B",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question examines understanding of Calcium/Phosphate homeostasis. (A) FGF-23 results in increased phosphate excretion and decreased calcitriol activation. (B) PTH results in increased phosphate excretion at the kidney. Calcitriol inhibits PTH, and would result in an increase in phosphate levels. As such, the answer is (D). (WW Q)",
  },
  {
    id: 25,
    prompt:
      "Quincy is a 70-year old woman, weighs 55kg, and currently lives in a nursing home. She was diagnosed with chronic kidney disease 2 years ago and is currently on dialysis. If Quincy needs to be prescribed a new drug, in which of the following conditions would there need to be a dosage adjustment for the drug?",
    choices: [
      "The drug is 20% renally excreted",
      "The drug is 60% protein-bound",
      "The drug is 1kDa",
      "The volume of distribution is 150L",
      "All of the above",
    ],
    correct: "The volume of distribution is 150L",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question examines understanding of the approach to drug dosage adjustments in patients with renal insufficiency and on dialysis. Dose adjustments are required if the drug is >30% renally excreted, >80% protein-bound, >15kDa for hemodialysis or >10kDa for peritoneal dialysis, or >2L/kg in terms of volume of distribution (due to drugs not being as available for dialysis if distributed to adipose tissue). As such, the answer is (D). (WW Q)",
  },
];
