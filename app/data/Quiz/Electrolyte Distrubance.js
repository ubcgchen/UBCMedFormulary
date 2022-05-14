export const data = [
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
        "tags":["PD","medium","Nephrology","Pain","side effects"]
    },
    {
        "id" : 2,
        "prompt" : "A 67 y/o female patient with a history of hypertension presents to a walk-in clinic after noticing that she has not gone to the bathroom to urinate for an extended period of time and is worried. She recently switched her anti-hypertensive medication due to a recent diagnosis of asthma and accidently ingested a larger dose. Assuming an iatrogenic cause, which of the following could be her new medication?",
        "choices": [
            "Terazosin (α1 blocker)",
            "Furosemide",
            "Hydrochlorothiazide", 
            "Losartan (ARB)",
            "Propranolol"],
        "correct": "Losartan (ARB)",
        "tags":["PD","medium","Nephrology","Cardiology","side effects"]
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
        "tags":["PD","medium","Nephrology"]
    },  
    {
        "id" : 4,
        "prompt" : "How does acetazolamide lead to kidney stones?",
        "choices": [
            "Inhibition of carbonic anhydrase leads to loss of H\u207A, which decreases the pH of urine, thus precipitation of stones",
            "Inhibition of carbonic anhydrase leads to loss of Ca\u00b2\u207a, which increases urines [Ca\u00b2\u207a], thus precipitation of stones",
            "Inhibition of carbonic anhydrase leads to loss of Na\u207A, which increases the pH of urine, thus precipitation of stones", 
            "Inhibition of carbonic anhydrase leads to loss of HCO3\u207b, which increases the pH of urine, thus precipitation of stones"],
        "correct": "Inhibition of carbonic anhydrase leads to loss of HCO3\u207b, which increases the pH of urine, thus precipitation of stones",
        "tags":["PD","medium","MoA","side effects","Nephrology"]
    },
  {
        "id" : 5,
        "prompt" : "Carla is allergic to bees and is stung by one. Carla’s dad correctly injects her Epi-pen into her thigh. What effect would epinephrine have on Carla’s kidneys?",
        "choices": [
            "Decrease GFR",
            "Decrease renin secretion",
            "Decrease aldosterone", 
            "Increase GFR"],
        "correct": "Decrease GFR",
        "tags":["SNS","easy","Nephrology"]
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
        "tags":["PD","easy","MoA","Nephrology","Cardiology"]
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
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"]
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
        "tags":["PD","hard","MoA","side effects","Nephrology","Cardiology"]
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
        "tags":["PD","easy","MoA","Nephrology","Cardiology"]
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
        "tags":["PD","medium","MoA","Nephrology","Cardiology"]
    },
{
        "id" : 11,
        "prompt" : "A 60 y/o patient with severe congestive heart failure is administered furosemide and hydrochlorothiazide. A few hours later, the patient starts having cardiac arrhythmias secondary to hypokalemia. What is the SHARED mechanism between the two drugs that leads to hypokalemia?",
        "choices": [
            "Both block Na\u207A/K\u207A/2Cl\u207b cotransporter (NKCC2) leading to decreased K\u207A reabsorption",
            "Both block Na\u207A/Cl\u207b cotransporter (NCC) leading to decreased K\u207A reabsorption",
            "Both block NKCC2 and NCC leading to decreased K\u207A reabsorption", 
            "Decreased expression of NKCC2 leading to decreased K\u207A reabsorption",
            "Inhibition of RAAS leading to increased aldosterone secretion",
            "Stimulation of RAAS leading to increased aldosterone secretion"],
        "correct": "Stimulation of RAAS leading to increased aldosterone secretion",
        "tags":["PD","medium","MoA","side effects","Nephrology","Cardiology"]
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
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"]
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
        "tags":["PD","medium","MoA","Nephrology","Endocrinology"]
    }       
]