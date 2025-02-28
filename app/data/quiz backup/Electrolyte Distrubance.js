export const electrolyteDisturbance = [
    {
        "id" : 1,
        "prompt" : "A 52 y/o patient presents to the ER with abdominal pain and swelling in his lower extremities. During the history, the patient recalls having diarrhea and abdominal pain for the last 5 days. He has been taking the maximum recommended dose of ibuprofen to manage the abdominal pain. Being the astute medical student you ask him about urination and recalls that he hasn’t urinated in the last 24 hours. You hypothesize that he has acute kidney injury due to:",
        "choices": [
            "Decreased effective circulating volume (ECV) and NSAID usage leading to decreased PGI2 acting on the afferent arteriole",
            "Decreased ECV and NSAID usage leading to increased PGI2 acting on the afferent arteriole",
            "Decreased ECV and NSAID usage leading to decreased PGI2 acting on the efferent arteriole", 
            "Decreased ECV and NSAID usage leading to increased PGI2 acting on the efferent arteriole",
            "The case presentation is not congruent with a suspected acute kidney injury"],
        "correct": "Decreased effective circulating volume (ECV) and NSAID usage leading to decreased PGI2 acting on the afferent arteriole",
        "tags":["PD","medium","Nephrology","Pain","side effects"],
        explain: "This question requires understanding of renal physiology and how NSAIDs can precipitate acute kidney injury. In this vignette, we are presented with a patient with an acute kidney injury after a history of diarrhea with abdominal pain, which he has tried to manage with ibuprofen. First, we recognize that his diarrhea may have caused excessive fluid loss leading to a decreased effective circulating volume. Second, we need to understand that NSAIDs (e.g. ibuprofen, aspirin, naproxen, etc…) are COX inhibitors, which leads to decreased production of prostaglandins (PG). Using our knowledge of renal physiology, we know PGI2 and PGE2 are released to vasodilate the AFFERENT renal arteriole to increase renal blood flow to help maintain GFR during renal hypoperfusion. Therefore, in a decreased systemic circulation state, the compensatory vasodilation of the afferent renal arteriole does not occur if PG production is inhibited, which will precipitate an acute kidney injury. Hence, only option (A) correctly describes this situation correctly."
    },
    {
        "id" : 2,
        "prompt" : "A 67 y/o female patient with a history of hypertension presents to the clinic for a follow-up. She recently switched her anti-hypertensive medication due to a recent diagnosis of asthma and has been accidentally ingesting a larger dose. She has noticed that she hasn’t been peeing as much as before. Her recent kidney function test showed a decrease in eGFR. WHich of the following drugs could explain the decrease in eGFR?",
        "choices": [
            "Terazosin (α1 blocker)",
            "Furosemide",
            "Hydrochlorothiazide", 
            "Losartan (ARB)",
            "Propranolol"],
        "correct": "Losartan (ARB)",
        "tags":["PD","medium","Nephrology","Cardiology","side effects"],
        explain: "This question requires understanding renal physiology and the mechanism of drugs that affect RAAS. In this vignette, we have a patient that has switched blood pressure medications due to her asthma diagnosis. Here, we can rule out propranolol. We are told she hasn’t been peeing as much and her test results have shown a decrease in GFR. We can rule out the two diuretics, furosemide and hydrochlorothiazide here given that she isn’t peeing as much. Terazosin should have minimal effect on renal blood flow. We are left with losartan, an angiotensin II (AII) receptor type 1 antagonist (ARB), which is the correct answer. ARBs can decrease the GFR because they will inhibit the AII mediated vasoconstriction of the EFFERENT arteriole. Without vasoconstriction of the EFFERENT arteriole, a decrease in hydrostatic pressure at the glomerulus occurs, and thus less filtration (GFR) will occur. This explains the decrease in eGFR and urine output. However, ARBs and ACEi delay the progression of chronic kidney disease due to their renoprotective effects by vasodilating the efferent arteriole, which decreases glomerular capillary pressure."
    },
   {
        "id" : 3,
        "prompt" : "Michael is an avid coffee drinker and has a caffeine dependency. If caffeine is an adenosine receptor antagonist, then what would you expect to happen to Michael’s renal function if he drinks his required 8th cup of coffee?",
        "choices": [
            "Decreased GFR due to afferent arteriole vasoconstriction",
            "Decreased GFR due to efferent arteriole vasodilation",
            "Increased GFR due to inhibition of afferent arteriole vasoconstriction", 
            "Increased GFR due to inhibition of efferent arteriole vasodilation"],
        "correct": "Increased GFR due to inhibition of afferent arteriole vasoconstriction",
        "tags":["PD","medium","Nephrology"],
        explain: "This question requires understanding renal physiology like the tubuloglomerular feedback (TGF) mechanism. First, we need to know that adenosine is released by the macula densa when it senses an increase in NaCl delivery (associated with increased GFR) at the tubules. The released adenosine causes vasoconstriction of the AFFERENT arteriole to decrease renal blood flow, to help decrease GFR. Hence, if caffeine is able to block the adenosine receptor, then the adenosine mediated vasoconstriction of the AFFERENT arteriole does not occur, and thus we would expect an increased GFR due to inhibition of afferent arteriole vasoconstriction. Ultimately, there are other feedback loops that can compensate for this, thus under normal physiological conditions the effects of caffeine aren’t that significant. This question was made to highlight the role of adenosine at the renal arterioles and TGF."
    },  
    {
        "id" : 4,
        "prompt" : "How does acetazolamide lead to kidney stones?",
        "choices": [
            "Inhibition of carbonic anhydrase leads to loss of H\u207A, which decreases the pH of urine, thus precipitation of stones",
            "Inhibition of carbonic anhydrase leads to loss of Ca\u00b2\u207a, which increases urine [Ca\u00b2\u207a], thus precipitation of stones",
            "Inhibition of carbonic anhydrase leads to loss of Na\u207A, which increases the urine [Na\u207A], thus precipitation of stones", 
            "Inhibition of carbonic anhydrase leads to loss of HCO3\u207b, which increases the pH of urine, thus precipitation of stones"],
        "correct": "Inhibition of carbonic anhydrase leads to loss of HCO3\u207b, which increases the pH of urine, thus precipitation of stones",
        "tags":["PD","medium","MoA","side effects","Nephrology"],
        explain: "This question requires understanding the mechanism of acetazolamide, a carbonic anhydrase inhibitor. Under normal physiological conditions, luminal HCO3- and H+ (combined to form H2CO3) are converted to H2O and CO2 by carbonic anhydrase (CA). H2O and CO2 inside the proximal tubule cells are converted back to HCO3- and H+ via CA and this leads to reabsorption of HCO3- and Na+ into blood (Na+ is reabsorbed into the cell via concentration gradients and the Na+/H+ antiporter - remember H+ produced by CA is used for this). Hence, inhibition of CA leads to a build up of HCO3- in the lumen (urine side). And since HCO3- is a base, this will increase urine pH, which will precipitate calcium phosphate stones leading to renal stones."
    },
  {
        "id" : 5,
        "prompt" : "Carla is allergic to bees and is stung by one. Carla’s dad correctly injects her Epi-pen into her thigh. What effect would epinephrine have on Carla’s kidneys?",
        "choices": [
            "Decrease GFR",
            "Decrease renin secretion",
            "Decrease aldosterone", 
            "Increase RBF"],
        "correct": "Decrease GFR",
        "tags":["SNS","easy","Nephrology"],
        explain: "This question requires understanding the effects of SNS and RAAS on kidney function. Epinephrine is released during times of stress (SNS activation), epinephrine can activate β1 adrenoceptors on juxtaglomerular cells to secrete renin (B), which then activates the rest of RAAS. This results in an increase in aldosterone (C). In times of strong activation, for example exogenous epinephrine, there will be increased vasoconstriction of the renal arterioles, which leads to decreased renal perfusion. This is to conserve as much volume as possible in states such as hemorrhagic shock. Hence, we would not expect an increase in RBF (D). By decreasing RBF, we would expect a decrease in GFR (A), which is the correct answer."
    },
{
        "id" : 6,
        "prompt" : "What is an important aspect of the efficacy of NKCC2 inhibitors?",
        "choices": [
            "NKCC2 inhibition leads to increased aldosterone due to stimulation of RAAS",
            "NKCC2 inhibition leads to loss of the countercurrent multiplier system due to decreased [Na\u207a] in the renal medulla",
            "NKCC2 inhibition leads to loss of the countercurrent multiplier system due to decreased [urea] in the renal medulla", 
            "NKCC2 inhibition leads to loss of the countercurrent multiplier system due to increased H2O reabsorption at the thick ascending loop of Henle"],
        "correct": "NKCC2 inhibition leads to loss of the countercurrent multiplier system due to decreased [Na\u207a] in the renal medulla",
        "tags":["PD","easy","MoA","Nephrology","Cardiology"],
        explain: "This question requires understanding the mechanism of loop diuretics like furosemide and renal physiology. First, we need to remember that NKCC2 inhibitors are loop diuretics and are the most efficacious diuretics in reducing blood volume. This is because by inhibiting NKCC2, the countercurrent multiplier system in the renal medulla can be “poisoned”. The countercurrent multiplier system creates an osmotic gradient, where the deepest part of the medulla is the most hypertonic. NKCC2 inhibition prevents Na+ from being reabsorbed into the medulla, which prevents the formation of the highly concentrated medulla. This results in reducing the kidney’s ability to concentrate the urine because there will be less water reabsorption down the thin descending limb of the loop of Henle. The net result is the increased delivery of Na+ and water to the distal tubules and collecting ducts, and effective diuresis. Hence, (B) is the correct answer."
    }, 
{
        "id" : 7,
        "prompt" : "A patient with unexplained polyuria undergoes a water deprivation test to help localize the cause. After 8 hours, her serum osmolality = 300 mOsm/kg and serum Na\u207a = 147 mM, but her urine osmolality remains dilute (<300 mOsm/kg).  To differentiate between central and nephrogenic diabetes insipidus (DI), the doctor administers desmopressin (vasopressin receptor 2 agonist). Assuming the root cause is insufficient ADH (Central DI), what would you expect to occur to her urine osmolality after desmopressin administration?",
        "choices": [
            "Decrease due to decreased water reabsorption",
            "Decrease due to increased Na+ reabsorption",
            "Increase due to increased water reabsorption", 
            "Increase due to decreased Na+ reabsorption",
            "Remains the same"],
        "correct": "Increase due to increased water reabsorption",
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"],
        explain: "This question requires understanding the effects of antidiuretic hormone (ADH) and renal physiology. In this vignette, we have a patient with central diabetes insipidus, and are asked to predict the effect of desmopressin on her urine osmolality. We are told that central diabetes insipidus is the lack of adequate ADH secretion, hence the polyuria. The increased water loss caused the formation of dilute urine and high serum osmolality (dehydrated state). Since the pathology is central and not at the kidney levels (nephrogenic), then exogenous vasopressin (ADH) or desmopressin in this case should still be able to act on the V2 receptors in the renal collecting ducts to increase membrane insertion of aquaporin 2 (AQP2) to facilitate water reabsorption. Therefore, we would expect the urine osmolality to increase due to increased water reabsorption (C - the correct answer), leading to a more concentrated urine. Side note: if it was nephrogenic DI, then desmopressin would have no effect, since the loss of water is due to a pathology at the kidneys; you will learn about this in HPEO week."
    }, 
{
        "id" : 8,
        "prompt" : "A 63 y/o patient with a long history of cardiovascular issues and risk factors presents to the CTU with right sided heart failure. Bilateral crackles are auscultated at the base of the lungs and the internist notes severe pitting edema at the lower extremities. The internist orders IV furosemide. Which of the following should the internist be vigilant about after furosemide administration?",
        "choices": [
            "Hyperkalemia",
            "Hypermagnesemia",
            "Hyperuricemia", 
            "Hypoglycemia",
            "Metabolic acidosis"],
        "correct": "Hyperuricemia",
        "tags":["PD","hard","MoA","side effects","Nephrology","Cardiology"],
        explain: "This question requires understanding the side effects of furosemide. We can rule out (A), (B), (E) because furosemide causes loss of K+, Mg2+, and H+. We also would not expect (D) because there is volume contraction, K+ levels are affected (interferes with insulin), and there have been studies showing that furosemide and HCTZ affects glucose metabolism.(C) hyperuricemia (leads to gout) is the correct answer because furosemide competes with uric acid for secretion into the luminal side. This causes a buildup of uric acid. Some studies have also shown that furosemide inhibits transporters of uric acid. It is important to remember that both furosemide and HCTZ work on the luminal side, hence they need to be secreted into the lumen. This means that these drugs will interact with uric acid and other drugs that are tubular secreted for activity or excretion."
    },
{
        "id" : 9,
        "prompt" : "How does furosemide work on the macula densa?",
        "choices": [
            "Inhibits Na\u207A/Cl\u207b cotransporter (NCC) leading to decreased Na\u207A detection at the macula densa causing increased renin release. ",
            "Inhibits NCC leading to decreased K+ detection at the macula densa causing increased renin release",
            "Inhibits Na\u207A/K\u207A/2Cl\u207b cotransporter (NKCC2) leading to decreased Na\u207A detection at the macula densa causing increased renin release", 
            "Inhibits NKCC leading to decreased K+ detection at the macula densa causing increased renin release"],
        "correct": "Inhibits Na\u207A/K\u207A/2Cl\u207b cotransporter (NKCC2) leading to decreased Na\u207A detection at the macula densa causing increased renin release",
        "tags":["PD","easy","MoA","Nephrology","Cardiology"],
        explain: " This question requires the understanding of the mechanism of furosemide. (C) accurately describes the effect at the macula densa. Inhibition of NKCC2, leads to decreased Na+ detection, hence a compensatory increase in renin because the macula densa will think that there is decreased flow of urine and will try to maintain (increase) GFR via RAAS activation."
    },
{
        "id" : 10,
        "prompt" : "How does hydrochlorothiazide decrease blood pressure?",
        "choices": [
            "Dilation of arterioles after short term use",
            "Dilation of arterioles after chronic use",
            "NCC inhibition causing decreased Na\u207A reabsorption and subsequent decrease in blood volume", 
            "A and C",
            "B and C"],
        "correct": "B and C",
        "tags":["PD","medium","MoA","Nephrology","Cardiology"],
        explain: "This question requires understanding the mechanism behind hydrochlorothiazide usage in hypertension. (B) and (C) are both correct, therefore (E) is the correct answer. NCC inhibition causes decreased Na+ reabsorption in the distal tubules, hence an increase in Na+ loss, which will decrease blood volume. A decrease in blood volume will decrease blood pressure because it decreases venous return to the heart, which will decrease the stroke volume. Since stroke volume x heart rate = cardiac output, and cardiac output x SVR = blood pressure, the end result is a decrease. The mechanism behind dilation of arterioles is not well elucidated, but it appears that chronic use has a vasodilatory effect."
    },
{
        "id" : 11,
        "prompt" : "A 60 y/o patient with severe congestive heart failure is administered furosemide and hydrochlorothiazide. A few hours later, the patient starts having cardiac arrhythmias secondary to hypokalemia. What is the SHARED mechanism between the two drugs that leads to hypokalemia?",
        "choices": [
            "Both block Na\u207A/K\u207A/2Cl\u207b cotransporter (NKCC2) leading to decreased K\u207A reabsorption",
            "Both block Na\u207A/Cl\u207b cotransporter (NCC) leading to decreased K\u207A reabsorption",
            "Both block NKCC2 and NCC leading to decreased K\u207A reabsorption",
            "Inhibition of RAAS leading to increased aldosterone secretion",
            "Stimulation of RAAS leading to increased aldosterone secretion"],
        "correct": "Stimulation of RAAS leading to increased aldosterone secretion",
        "tags":["PD","medium","MoA","side effects","Nephrology","Cardiology"],
        explain: "This question requires understanding the mechanism of hydrochlorothiazide (HCTZ) and furosemide and high hypokalemia could occur. In this vignette, we are presented with a patient in CHF and hypokalemia after furosemide and HCTZ administration. Furosemide inhibits NKCC2, which leads to decreased K+ reabsorption,  while HCTZ inhibits NCC. The shared mechanism is the stimulation of RAAS due to the resulting decreased Na+ return to the macula densa and homeostatic response to decreased BP. Stimulation of RAAS results in increased aldosterone, which leads to increased K+ secretion and resulting hypokalemia. Hence, (E) is the correct answer."
    }, 
{
        "id" : 12,
        "prompt" : "A 32 y/o patient presents to the ER following a motor vehicle accident (MVA). A CT scan is ordered and bilateral incidentalomas are discovered on her adrenal glands. During her recovery from the MVA, it is found that she has hypertension and hypokalemia. After a thorough diagnostic workup, she is diagnosed with bilateral primary hyperaldosteronism. What is the mechanism of action of the diuretic that will likely have the highest efficacy in this case?",
        "choices": [
            "Carbonic anhydrase inhibito",
            "ENaC inhibitor",
            "Mineralocorticoid receptor antagonist", 
            "NKCC2 inhibitor at the ascending limb of the loop and venodilation",
            "NCC inhibitor at the distal tubule"],
        "correct": "Mineralocorticoid receptor antagonist",
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"],
        explain: "This question requires understanding the mechanism of spironolactone. In this vignette, we are presented with a patient with primary hyperaldosteronism, which means she has inappropriately high aldosterone levels, hence the hypertension and hypokalemia. This is medically treated if the localization reveals bilateral lesions. We can use a pharmacological agent to inhibit the high levels of aldosterone, and the agent that will most directly do this is spironolactone, a mineralocorticoid receptor antagonist, therefore (C) is the correct answer. (B) ENaC inhibitors like amiloride, do inhibit an end result of aldosterone activity, but it won’t inhibit all of the effects of mineralocorticoid receptor activation. The other drugs do not address the pathology directly to be effective, and could in fact be more detrimental (loop and HCTZ will stimulate RAAS)."
    },
{
        "id" : 13,
        "prompt" : "Fludrocortisone is a synthetic mineralocorticoid that is used to treat patients with primary adrenal insufficiency. Using your knowledge of RAAS, what are the serum electrolyte changes you would expect with fludrocortisone administration?",
        "choices": [
            "Decrease [Na+], decrease [K+], decrease [H+]",
            "Decrease [Na+], increase [K+], increase [H+]",
            "Increase [Na+], decrease [K+], decrease [H+]", 
            "Increase [Na+], decrease [K+], increase [H+]",
            "Increase [Na+], increase [K+], increase [H+]"],
        "correct": "Increase [Na+], decrease [K+], decrease [H+]",
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"],
        explain: " This question requires understanding the effects of mineralocorticoids (e.g. aldosterone). We are told that fludrocortisone is a synthetic mineralocorticoid given for patients with primary adrenal insufficiency (you will learn more about this in adrenal week, but essentially no aldosterone or cortisol production). Therefore, we can infer that fludrocortisone will have a similar effect as aldosterone. Aldosterone binds the mineralocorticoid receptor in the collecting duct, which increases Na+/K+ basolateral pumps and ENaC insertion on the luminal side. THis results in increased Na+ reabsorption, K+ secretion, and H+ secretion from intercalated cells. Hence, (C) is the correct answer."
    }       
]