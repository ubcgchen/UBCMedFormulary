/**
 * Questions for Acute Kidney Injury week
 * @author Michael Gong, UBC VFMP 2025
 */

export const acuteKidneyInjury = [
  {
    id: 1,
    prompt:
      "A 50 y/o patient presents to the ER after a 5 day history of diffuse abdominal pain, watery diarrhea, and vomiting. He recalls having minimal urination in the past 48 hrs. His past medical history includes T2DM and dyslipidemia. He currently takes metformin, rosuvastatin, and ibuprofen for the pain. JVP is not visible at 30 degrees or when he is lying flat. Abdomen is tender on palpation. CV and resp exams are unremarkable. U/S shows normal sized kidneys and no hydronephrosis. Creatinine comes back 500 µmol (baseline from chart: 100 µmol). A catheter drains unremarkable amounts of urine. Metformin and ibuprofen are held. Normal saline is started. After a few hrs the patient’s creatinine improves. Which of the following correctly explains the most likely pathophysiology in this case?",
    choices: [
      "Hypovolemic state compounded by metformin induced lactic acidosis, which caused intrarenal damage, resulting in AKI",
      "Hypovolemic state compounded by ibuprofen induced lactic acidosis, which caused intrarenal damage, resulting in AKI",
      "Hypovolemic state compounded by metformin inhibiting COX-2 leading to decreased PGI2 mediated vasodilation of the afferent arteriole, resulting in AKI",
      "Hypovolemic state compounded by ibuprofen inhibiting COX-2 leading to decreased PGI2 mediated vasodilation of the afferent arteriole, resulting in AKI",
    ],
    correct: "Hypovolemic state compounded by ibuprofen inhibiting COX-2 leading to decreased PGI2 mediated vasodilation of the afferent arteriole, resulting in AKI",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding prerenal AKI and NSAIDs. In this vignette we are presented with a patient in a hypovolemic state given the history (diarrhea and vomiting) and physical exam (JVP). We know he has an AKI given the >1.5x rise in creatinine and possible oliguria. We rule out postrenal with the U/S and catheter. Prerenal would be our top dx given the improvement after volume replacement and removal of ibuprofen. (D) correctly explains the pathophysiology, where NSAIDs can cause decreased effective circulating volume to the kidney leading to decreased GFR and kidney failure. His hypovolemic state made the patient more vulnerable to the nephrotoxic potential of ibuprofen. If the NSAID is not removed in time, then the patient would be at risk for an intrarenal injury most likely ischemic acute tubular necrosis. Metformin is not a nephrotoxic drug, but is cleared by the kidneys and would be held in cases of AKI to avoid metformin induced lactic acidosis."
  },
  {
    id: 2,
    prompt:
      "A 72 y/o patient has his routine blood work checked over by his GP. The GP notes an increase in creatinine compared to his previous blood work. The patient recalls having diarrhea this past week. His past medical history includes T2DM, dyslipidemia, HTN, AFib, and a MI 1 yrs ago. His medication list includes glyburide, rosuvastatin, ramipril, apixaban, and clopidogrel. Which of the following medications should be held if the patient has decreased effective circulating volume?",
    choices: [
      "Apixaban",
      "Clopidogrel",
      "Ramipril",
      "Rosuvastatin",
      "B and C",
    ],
    correct:
      "Ramipril",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding drugs that could cause prerenal AKI. If the patient had decreased effective circulating volume, then we would be worried about any medications that could further reduce GFR. In this case (C) is the correct answer. An ACEi would be the medication to hold if he had an AKI. This is because ACEis will decrease AngII, which will decrease efferent arteriole vasoconstriction (result is vasodilation), resulting in decreased GFR. So in situations, where the patient could be hypovolemic and renal perfusion is low ACEis should be avoided. This is also why ACEis are contraindicated in patients with bilateral renal artery stenosis. The other medications on the list are not known to cause prerenal AKI. (B) is an antiplatelet like aspirin, but works through a different mechanism that does not involve COX enzymes ((B) is a P2Y12 ADP receptor inhibitor), thus will not decrease PGI2 vasodilation of the afferent arteriole."
  },
  {
    id: 3,
    prompt:
      "A 60 y/o patient in the CTU has a rise in creatinine that is 1.5x over his baseline creatinine during his hospitalization. On the physical exam his JVP is 2 cm above the sternal angle. He recently acquired an infection and is being treated with IV gentamicin (an aminoglycoside). He is also currently on losartan, LMWH, and prednisone. His lytes come back with mild hyponatremia, mild hyperkalemia, and wide anion gap acidosis. His U/A comes back showing renal tubular epithelial cell casts, and urine Na+ 60 mmol/L. What best explains this presentation?",
    choices: [
      "Acute tubular necrosis (toxic) due to gentamicin",
      "Decreased effective circulating volume due to LMWH",
      "Decreased effective circulating volume due to losartan",
      "LMWH induced hyperkalemia via aldosterone inhibition",
    ],
    correct: "Acute tubular necrosis (toxic) due to gentamicin",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding differentiating prerenal and intrarenal AKI and a iatrogenic cause of intrarenal AKI. In this vignette we are presented with an AKI. The patient appears relatively euvolemic, acidosis (wide), and lytes abnormalities. We need to differentiate if this is prerenal or intrarenal. By looking at the U/A we would think that we have an intrarenal cause due to the presence of tubular epithelial cell casts and a high urine sodium. If this was a prerenal AKI, we wouldn’t have the tubular epithelial casts and the urine sodium would be much lower <20 mM. This is because in prerenal the kidney should still appropriately reabsorb Na+ to correct for the hypovolemic state, while in intrarenal, the kidneys ability to reabsorb Na+ should be damaged, leading to loss of Na+ in the urine. From this we can rule out (B) and (C). Losartarn could cause a decrease in effective circulating volume, but wouldn’t explain the intrarenal damage (unless it was an ischemic acute tubular necrosis). Therefore, (A) is the correct answer as it is the only example of an intrarenal AKI and aminoglycosides are known to cause toxic acute tubular necrosis. (D) is an example of renal tubular acidosis, which would be normal gap acidosis."
  },
  {
    id: 4,
    prompt:
      "A 63 y/o patient presents to the ER with bilateral pitting edema in the periphery. JVP is 6 cm above the sternal angle, bilateral crackles at the lung bases and S3 on auscultation. He also reports not being able to pee in the last 24 hrs. He has no history of benign prostate hyperplasia and a foley catheter fails to relieve any obstruction. His past medical history includes HTN, T2DM and dyslipidemia. His BNP is elevated. His lytes show hyperkalemia (5.5 mM) and wide anion gap acidosis. He also has elevated creatinine (>1.5x). Which of the following medications would you start management with?",
    choices: [
      "Aspirin",
      "Calcium gluconate",
      "Canagliflozin",
      "Furosemide",
    ],
    correct: "Furosemide",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires recognizing the treatment of a volume overloaded patient with an AKI. In this vignette, we are presented with a volume overloaded patient given the JVP, S3 heart sounds, probably pulmonary and peripheral edema. In fact, he probably has heart failure leading to compromised renal perfusion (probably cardiorenal syndrome), which could be the cause of his AKI. In this case we would go with (D), a loop diuretic, because it is the most efficacious diuretic we have to get rid of the excessive fluid and hopefully help with his heart function if we decrease the patient’s preload. (A) is something we would avoid in this case. (B) is a membrane stabilizer during hyperkalemia, but does not address the patient's main issue. In addition, calcium gluconate is typically not added until hyperkalemia-associated ECG findings are observed (typically not until >6 mM). (C) is a SGLT2i and would probably have little effect in this case."
  },
  {
    id: 5,
    prompt:
      "A 32 y/o patient presents to the ER with 1 day history of severe right flank pain. Hx: she describes a 3 day history of dysuria, increased frequency and urgency. Her vitals show BP 110/80, RR 21, HR 110, Temp 39 degC. Suprapubic tenderness on palpation. U/A is ordered and a dipstick shows positive leukocyte esterase and nitrites. The urine is turbid. Microscopic analysis shows WBC, WBC casts, and bacteria. Blood and urine cultures are pending. Given the likely diagnosis, you start empiric treatment with what?",
    choices: [
      "Ceftriaxone",
      "Cephalexin",
      "Fosfomycin",
      "Furosemide",
      "Nitrofurantoin",
    ],
    correct: "Ceftriaxone",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the empiric treatment for pyelonephritis. In this vignette we are presented with a patient with pyelonephritis given the clinical presentation and U/A. There is potential systemic involvement given the fever, hence the blood cultures. The empiric treatment for a suspected pyelo is (A) ceftriaxone IV/IM or gentamicin IV/IM (same for outpatient or ER/hospitalized). This can be followed with outpatient PO treatment with cefixime or amox-clav or ciprofloxacin or TMP-SMX. (B) is an option for cystitis if the patient has had no ABX exposure within the last 6mo. (C) and (E) are both first line cystitis medications. (D) is a loop diuretic."
  },
  {
    id: 6,
    prompt:
      "Which of the following medications would you use in a patient with cystitis?",
    choices: [
      "Amoxicillin/clavulanate PO",
      "Ceftriaxone IV/IM",
      "Cefixime PO",
      "Fosfomycin PO",
      "Gentamicin IV/IM"
    ],
    correct: "Fosfomycin PO",
    tags: ["PK", "medium", "Endocrinology"],
    explain: " This question requires understanding the treatment options for cystitis. (D) is a first line medication and only requires one dose! The other medications are mostly used for pyelonephritis. (B) and (E) are first line paraternal treatment options. (A) and (C) are PO outpatient options. Other empiric treatment options for cystitis are nitrofurantoin, or if the patient has had no previous ABX exposure in the last 6 mos: cephalexin, TMP/SMX, ciprofloxacin."
  },
  {
    id: 7,
    prompt: "What is the main pharmacokinetic property of nitrofurantoin that makes it an effective antibiotic for UTIs?",
    choices: [
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartmente",
      "Slowly metabolized, allowing it stay longer in the body to kill bacteria",
      "Increased tissue penetration, allowing it stay longer in the body to kill bacteria",
      "High oral bioavailability leading to high plasma serum levels, allowing it to achieve minimum effective concentration systemically",
    ],
    correct:
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartment",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the mechanism of nitrofurantoin. The correct answer is (A). This is a unique characteristic, which allows it to concentrate in the bladder to reach an effective concentration to kill bacteria with little systemic side effects. Once nitrofurantoin is ingested it is rapidly excreted through the kidneys, where it reaches the target organ for therapy and concentrates there. It is also a pro-drug, where it requires activation (reduction) by bacterial proteins, which converts it to a toxic metabolite that exerts its inhibitory effects."
  },
  {
    id: 8,
    prompt: "A 25 y/o patient presents to the ER following a cardiac arrest. There was ROSC (return of spontaneous circulation) in the field, but he decompensated during transport and is now being stabilized in the ER. His ECG shows a sine wave and the ER attending is worried this may progress into VFib. Collateral information comes in and it's discovered that the patient injected himself with KCl “out of curiosity”. Assuming that the KCl is the cause of his presentation, what would you administer first in this case?",
    choices: [
      "Calcium gluconate IV",
      "Bicarb IV",
      "Furosemide IV",
      "Insulin IV",
      "Hemodialysis",
    ],
    correct: "Calcium gluconate IV",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding management of hyperkalemia. In this vignette, we are presented with a patient with hyperkalemia, which we can infer from the ECG (sine waves K+ ~9.0 mM) and collateral information. In hyperkalemia, we should think of stabilize, shift, and excrete. In an emergent case like this, we would stabilize with (A) due to its fast onset of action <3 mins and stabilization of cell membranes. It has a transient effect (30-60 mins), but should give us time to start shifting the K+ into cells (B) or (D) and excreting K+ from the body with (C) or even (E)."
  },
  {
    id: 9,
    prompt:
      "A 56 y/o patient in the ICU has an AKI. On his physical exam the JVP was not seen at 30 degrees or lying down. His daily labs come back showing hyponatremia, K+ = 6.2 mM and normal pH, normoglycemic. Urine Na+ <10 mM. No changes on ECG are seen. Pseudohyperkalemia is ruled out. He is then stabilized. If it was indicated, what would be the most appropriate management of his hyperkalemia now?",
    choices: [
      "Albuterol IV",
      "Insulin IV",
      "Insulin IV with D50W",
      "Furosemide IV",
    ],
    correct: "Insulin IV with D50W",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding hyperkalemia management. In this vignette we are presented with a patient with AKI and hyperkalemia >6.0 mM, which puts him at risk for arrhythmias. His AKI is most likely prerenal given the volume assessment (JVP) and U/A showing decreased Na+ (This means his kidneys are appropriately reabsorbing Na+ to increase blood volume to counter the hypovolemic state). Thinking of stabilize, shift, and excrete, we are trying to shift K+ into the cells. Although (A) β2 agonist does this by stimulating Na+/K+ ATPase in skeletal muscles, it is not given IV, but rather nebulized for the inhalation. (B) Insulin would also be able to shift K+ into cells by also stimulating Na+/K+ ATPase pumps (but a different pathway than albuterol), but we would not give insulin alone without some glucose given the risks of hypoglycemia. Therefore (C), would be the best option in the choices, we would be giving insulin to shift the K+ and some glucose (D50W) to make sure we don’t put the patient in a hypoglycemic state. Given his hypovolemic state we would not use (D) without some volume replacement. This is because furosemide will cause diuresis and more loss of volume in an already hypovolemic patient."
  },
  {
    id: 10,
    prompt:
      "A 63 y/o patient with many medications presents with hyperkalemia. Which of the following medications that he is on would you least expect to be the cause of his hyperkalemia?",
    choices: [
      "Digoxin",
      "Heparin",
      "Hydrochlorothiazide",
      "Ramipril",
      "Spironolactone",
    ],
    correct:
      "Hydrochlorothiazide",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires knowing the medications that could cause hyperkalemia. In this case (C) is the only medication here that shouldn’t cause hyperkalemia, in fact it should cause hypokalemia given it is a thiazide diuretic acting in the distal tubules (results in renin and aldosterone release, which causes K+ loss). (A) digoxin inhibits Na+/K+ ATPase pumps, leading to decreased K+ delivery into principal cells for excretion. (B) heparin can inhibit production of aldosterone (a cause of Type 4 renal tubular acidosis), thus decreased K+ loss. (C) Ramipril is an ACEi, leading to decreased RAAS, resulting in less aldosterone. (E) is a potassium sparing diuretic by inhibiting the mineralocorticoid receptor, thus blocking aldosterone effects."
  },
  {
    id: 11,
    prompt:
      "A 65 y/o male presents to the ER with left flank pain and hematuria. The history further reveals 3 months of unintentional weight loss. A CT shows a 10 cm mass on the periphery of the renal parenchyma of the left kidney. Blood work comes back showing elevated Ca2+, increased AlkPhos, and abnormal liver enzymes. A CT with contrast is done and the mass shows increased uptake of the contrast. A biopsy of the renal mass shows clear cells on histology. Oncology and urology are consulted. The most likely diagnosis in this case could be managed with which of the following?",
    choices: [
      "Anti-VEGF mAb ",
      "mTOR inhibitor (-limus)",
      "VEGFR tyrosine kinase inhibitor (-inib)",
      "All of the above",
      "Surgical management is curative (partial nephrectomy)",
    ],
    correct: "All of the above",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires knowing the indications of chemotherapy and what is used in renal cell carcinoma. In this vignette we are presented with a patient with 2 of the 3 in the triad for a renal mass. The workup shows a mass on the left kidney periphery of the renal parenchyma, and increased contrast uptake, we are suspecting a malignant mass such as renal cell carcinoma. The mass being >7cm makes it not a surgical candidate (rule out (E)). We also have possible metastasis to the bones given the elevated Ca2+ and AlkPhos, which further suggests medical management. The biopsy confirms clear cell renal cell carcinoma. (D) is the correct answer, all three medication classes are used in metastatic/late stage systemic therapy for renal cell carcinoma."
  },
  {
    id: 12,
    prompt:
      "On a hot summer day, a 39 y/o male patient presents to the ER with sudden onset left flank pain that radiates down to his groin area. No fever or chills and vitals are stable. His history reveals hematuria and denies any vomiting. He also states that the heat has been making him sweat a lot. Blood tests show slightly elevated creatinine and normal WBC, U/A does not show pyuria or bacteria. A plain film shows a radiopaque density in his left ureter area. He is sent to CT, which shows a 5 mm stone in the left mid ureter near the left iliac artery. The patient opts for conservative therapy to pass the stone, which is mainly treated with hydration, pain control, and ____ ?",
    choices: [
      "Albuterol",
      "Furosemide",
      "Hydrochlorothiazide",
      "Ibuprofen",
      "Tamsulosin",
    ],
    correct: "Tamsulosin",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding conservative management of urinary system colics. In this vignette we are presented with a patient with a suspected colic given his presentation, which is confirmed after imaging that localizes the colic to the mid ureter. He does not show any signs that would rule out conservative management (intractable vomiting, renal impairment, or infection to name a few). In this case we would hydrate, pain control, and use (E). Tamsulosin is an α1 antagonist, with increased selectivity for the 1A/1D subtype that is mainly expressed in the urinary system (over the 1B subtype found on blood vessels). This will lead to smooth muscle relaxation in the bladder neck, prostate, ureter, and urethra, thus allowing for decreased resistance in the plumbing to facilitate passage of a stone. (D) is a NSAID and can be used for pain management in this case if GFR is normal. Narcotics can also be used for pain management. (B) furosemide can actually lead to more stone formation due to excretion of Ca2+ in the urine. (C) HCTZ  is suggested to decrease stone formation due to decreased Ca2+ excretion. (A) is a β2 agonist, but these receptors are not found on the smooth muscles in the urinary system, thus we would not be able to relax them."
  },
  {
    id: 13,
    prompt:
      "Trevor is a 28-year old man who presents to the ER of palpitations and nausea. A CBC is unremarkable. Electrolytes reveal a potassium level of 6.1 mM. ECG shows peaked T waves. Which of the following would not be part of Trevor’s treatment?",
    choices: [
      "Calcium gluconate",
      "D50W",
      "Furosemide",
      "Insulin",
      "Spironolactone",
    ],
    correct: "Spironolactone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question examines the treatment for hyperkalemia. (A) stabilizes the patient and decreases the risk for dangerous arrhythmias. (D) Insulin is given to increase potassium intake into cells, and (B) D50W is given to mitigate hypoglycemia. (C) is given to renally excrete potassium from the body. (E) Spironolactone would increase potassium absorption and would not be a part of Trevor’s treatment. (WW Q)"
  },
  {
    id: 14,
    prompt:
      "A 64 y/o patient with an AKI is admitted to the CTU. His initial investigations reveal hyperkalemia. Which of the following medications does NOT affect potassium levels in blood?",
    choices: [
      "Albuterol",
      "Bicarbonate",
      "Calcium gluconate",
      "Kayexalate",
      "Insulin",
    ],
    correct: "Calcium gluconate",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the management of hyperkalemia. The only medication that does NOT affect potassium levels in blood is (C). This is because calcium gluconate only stabilizes the cell membrane, but does not play a role in shifting K+ into cells or excreting K+. (A) is a β2 agonist that will stimulate Na+/K+ ATPase activity on skeletal muscle, leading to K+ influx into cells, hence K+ shifting into cells from serum. (B) Bicarb stimulates the H+/K+ exchange leading to a transient decrease in K+. (D) is a resin that binds K+ in the GIT, leading to increased excretion of K+, thereby lower K+. It works by exchanging either Na or Ca for H+, where it then travels to the colon, where the H+ is exchanged for K+, thus increasing excretion of K+ from the body. (E) Insulin would also be able to shift K+ into cells by also stimulating Na+/K+ ATPase pumps (but a different pathway than albuterol). Hence, all the other options have at least a transient effect in lowering serum K+ levels."
  },
];
