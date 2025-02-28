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
    explain: "This question requires understanding pharmacokinetics and the major iatrogenic cause of Cushing's syndrome. In this vignette we are presented with a patient with clinical signs of hypercortisolism, or Cushing’s syndrome. Her symptoms can be explained by elevated cortisol. Weight gain is probably due to cortisol stimulating increased appetite, which we can rationalize that cortisol is a catabolic hormone, this causes increased metabolism of carbohydrates, lipids, and proteins, hence increased appetite to match the catholic processes. However, the breakdown of proteins from skeletal muscle tissue also leads to decreased metabolic rate, hence an easier time to gain weight with the increased appetite. Cortisol also does cause lipolysis, however this leads to the fats being redistributed to different parts of the body such as the abdomen (visceral fat) or the dorsocervical fat pad. The breakdown of protein also leads to the abdominal striae due to breakdown of connective tissue (proteins), easy bruising (thinning of skin), and decreased proximal muscle strength as seen by her inability to stand from a squatted position. Elevated BP can be due to increased water and sodium retention, and also increased catecholamine release due to cortisol, which makes sense since this is the “stress” hormone, so at times of stress such as trauma or a fight or flight response, your body would want to increase BP, which is beneficial in the short run, but detrimental in the long term. This is also related to the facial plethora, as this is a sign of increased blood flow to the face, could be secondary to increased blood volume and catecholamine induced vasodilation in the face and neck. Amenorrhea due to cortisol acting on the hypothalamus leading to decreased GnRH → decreased LH and FSH. Her medication list contains three different glucocorticoids and an antifolate (immunosuppressant). We can rule out the antifolate as the cause (C). From the glucocorticoids, (B) fluticasone topical is the least likely to cause this presentation as the chances of systemic absorption from topical administration to cause enough hypercortisolism is unlikely (unless she has been swimming in a bathtub of fluticasone). We are left between budesonide PO and prednisone PO. Despite budesonide being an extremely potent steroid (more than prednisone), it actually undergoes a significant amount of first pass metabolism (its PO BA is ~9%, so 90+% is metabolized!), so the systemic exposure of budesonide is potentially lower than prednisone. This is why budesonide is a useful drug in IBD because we can essentially deliver a high dose of steroid to the affected tissue (GI mucosal surface in UC) with little systemic adverse effect. Hence, (D) is the answer as prednisone (a prodrug) is converted into its active form during first pass metabolism into prednisolone and is thus the most likely medication here to cause significant amounts of hypercortisolism to cause Melissa’s Cushing’s syndrome.",
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
    explain: "This question requires understanding the medical management of Cushing’s syndrome. In this vignette we are presented with a patient with ACTH independent Cushing’s syndrome (see another  question for explanation of why hypercortisolism can cause the signs in Cushing’s). This is an ACTH independent Cushing’s syndrome as ACTH is not driving the hypercortisolism, this appears to be an adenoma at the adrenal gland that is secreting cortisol independent of ACTH stimulation. ACTH dependent is more like a pituitary tunor secreting ACTH, which then causes increased cortisol from the adrenal glands (high ACTH and high cortisol, whereas here it is low ACTH, high cortisol). Given that the pathophysiology is excess cortisol, medical management should then be to inhibit the effects of cortisol. This is correctly outlined in (D). Both B and C can help decrease the effects of cortisol. (B) ketoconazole is an antifungal and an antiadrenal. Ketoconazole inhibits multiple enzymes in the steps that form cholesterol derivatives like cortisol such as the cholesterol side-chain cleavage enzyme, 17,20-lyase, 17α-hydroxylase, 11β-hydroxylase (basically ↓ synthesis of all adrenocortical hormones). (C) inhibits steroid 11β-hydroxylase (↓ synthesis of cortisol). Another example would be mitotane. Another example is mifepristone, which at high levels blocks the glucocorticoid receptor. In short, most of these medications decrease the production of cortisol, thereby lowering the levels of cortisol. (A) is a dopamine 2 receptor agonist used in hyperPRL.",
  },
  {
    id: 3,
    prompt:
      "A 25 y/o patient initially worried about a surgery to remove a cortisol secreting adenoma on her left adrenal gland (ACTH-independent) undergoes the surgery after medical treatment failed to resolve her cushingoid appearance. The entire left adrenal gland is removed and no complications occur during the surgery and she is sent to the post-anaesthesia care unit. What important treatment should be initiated post-op?",
    choices: [
      "ACTH",
      "Fludrocortisone",
      "Hydrocortisone",
      "None, she still has her right adrenal gland",
    ],
    correct: "Hydrocortisone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the medical management following surgery to treat a cause of Cushing’s syndrome. In this vignette we are presented with a patient who has an ACTH independent cortisol secreting adenoma removed. The important treatment that needs to be initiated post-op is (C). We need to replace her hydrocortisone, essentially to prevent an adrenal crisis. There are two potential reasons or situations where this could occur. One is that the sudden removal of the adenoma will cause a massive drop in the patient's cortisol levels, but is temporary if her right gland is still functional. The other potential situation is that with an ACTH-independent adenoma, her ACTH levels will be low due to the negative feedback from the excess cortisol from the tumor. The adenoma has suppressed her normal HPA axis. ACTH is required to maintain the adrenal gland, hence this patient here will have an atrophied right adrenal gland due to the lack of ACTH stimulation. Therefore, the removal of her left adrenal gland will cause a massive drop in cortisol because we would have removed her main source of cortisol. The removal of the gland leads to secondary adrenal insufficiency and if we don’t replace the cortisol, then an adrenal crisis could occur. We can provide hydrocortisone replacement for the time being till her HPA recovers and her right gland can maintain her levels of cortisol. (A) is not necessary in this case and is very expensive. (B) is not necessary as there are no indications that our patient's RAAS is impaired and should be intact given that she still has a right adrenal gland (mineralocorticoid production is usually spared in secondary adrenal insufficiency).",
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
    explain: "This question requires understanding tissue specific pharmacology with regards to glucocorticoids. The correct answer is (D). Normally cortisol has equal affinity for MR and GR. However, the kidneys express 11β-HSD2, which will convert cortisol to cortisone. Cortisone has GR effects, but has low affinity for MR. This provides protection from HTN and hypokalemia, however, in states of excess cortisol, the effects of MR can still be seen. In primary adrenal insufficiency, the zona glomerulosa could be damaged leading to decreased aldosterone production. This means there will be decreased aldosterone, hence decreased MR activity. If we only replaced cortisol, then we would not have MR activity because of the expression of 11β-HSD2, hence we could potentially add a MR agonist such as fludrocortisone.  11β-HSD1 is expressed in the liver and favors GR activity by reducing cortisone to cortisol.",
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
    explain: "This question requires understanding an iatrogenic cause of an apparent hypercortisolism. In this vignette we are presented with a patient who appears well, but has some abnormal biochemical results. The elevated AM cortisol and positive dexamethasone test would indicate possible hypercortisolism. However, her urine 24 hr urine cortisol is normal, which suggests that she does not have high levels of cortisol. The most likely explanation/cause for this discrepancy would be (B). This is because ethinyl estradiol causes increased production of transcortin or also known as cortisol binding globulin (CBG) from the liver. This elevation of CBG will cause an increase in cortisol, however the cortisol will be bound to CBG, which makes it biologically inactive. Remember like most drugs, protein binding inactivates them and usually only free drugs are considered active. Although there is increased cortisol, the amount of free cortisol is not changed, which is why we don’t see the effects of hypercortisolism. The differences in the lab results can be explained by what each test actually measures. Both serum AM cortisol and dexamethasone suppression test measure serum levels of cortisol, but does not differentiate between free cortisol and cortisol-CBG, hence the increased in cortisol-CBG, will cause an elevated measurement and apparent lack of suppression in the dexamethasone test. On the flip side tests like urine cortisol or salivary cortisol more aptly measure free cortisol levels because for cortisol to be excreted through urine or saliva, it has to be unbound/free from CBG (just like many drugs, if has to be free to be metabolized or excreted; increased protein binding usually delays drug elimination). In short, this question highlights some pharmacokinetic principles that can affect lab results and an iatrogenic cause of pseudo-hypercortisolism.",
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
    explain: "This question requires understanding the treatment of primary adrenal insufficiency (PAI) or Addison’s disease. In this vignette we are presented with a patient with PAI. We suspect PAI given the clinical presentation. Her signs can be explained by low levels of cortisol such as weight loss (or you can just recall that high cortisol causes weight gain, then low should lead to weight loss), fatigue and weakness possibly due to decreased activation of glucose stores/gluconeogenesis, thus less energy utilization. OH possibly due to decreased aldosterone, leading to lower blood volume. Hyperpigmentation due to increased ACTH in response to low cortisol, which will stimulate melanocytes causing hyperpigmentation. Hyponatremia and hyperkalemia are due to low aldosterone (aldosterone increases Na+ retention and increases K+ excretion, hence the opposite should occur if low). The low blood volume could lead to increased creatinine levels, which would be a result of a pre renal acute kidney injury. Hypercalcemia is partly explained by the volume depletion and AKI, hence decreased calcium excretion, but also the increased ACTH could lead to increased androgen production (if the zona reticularis is not affected by the PAI). The increased androgen production leads to increased peripheral conversion to estrogen, which causes bone resorption, resulting in increased calcium. The investigations further support our diagnosis. The ACTH stim shows that the adrenal glands are not responding to ACTH, hence a problem at the level of the adrenal glands, which further suggests PAI. Given this simplified pathophysiology explanation, the correct treatment would be (D). We would want to replace both the cortisol and aldosterone levels. Fludrocortisone is a mienralcortiocidsteroid that only activates MR. (A) is a vasopressor, which could be used in this case if our patient presents with distributive shock that requires further pressor support after NE. (B) is a highly potent synthetic glucocorticoid (25-30x more than hydrocortisone), but does not have MR activity, so would not be enough to treat the patient here. (C) does not have GR activity, hence does not address the cortisol deficiency. (E) see (B), and another question with explanation why hydrocortisone alone may not be enough despite 1:1 affinity for GR:MR. ",
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
    explain: "This question requires understanding the treatment for primary hyperaldosteronism or Conn’s syndrome. In this vignette we are presented with a patient with secondary HTN given failure to control with BP lowering drugs. The history provided does already hint towards Conn’s given that HCTZ precipitated a hypokalemic emergency, this is a known side effect of HCTZ given that it blocks NCC2 channels in the DT of the kidneys, however coupled with excess aldosterone, there is an increased likelihood of this occurring since aldosterone works on the principal cells to absorb Na+ and excrete K+. The elevated ARR further suggests hyperaldosteronism as aldosterone is a product of RAAS activation, hence if aldosterone is higher than normal and renin is lower than normal, then this suggests that aldosterone is being produced independent from RAAS activation. The salt loading test shows that despite increasing the body’s salt content, aldosterone production does not change and is not suppressed. Normally the increase in salt should suppress aldosterone as aldosterone is released in times of low blood volume to stimulate salt and water retention. Hence, continued aldosterone release is suggestive of primary hyperaldosteronism. Given that we have determined hyperaldosteronism as the cause of our patients HTN and the bilateral masses, medical management should target the effects of aldosterone. The best drug for this is (E). Spironolactone is a MRA, mineralocorticoid receptor antagonist, which is potassium sparing diuretic. This is the most effective drug out of the choices because it will block the mineralocorticoid receptor from being activated by aldosterone, so it will block all of the downstream effects of MR activation, not just the diuretic effects such as ENaC insertion. (A) is also a potassium sparing diuretic, but it only blocks ENaC channels, so it will not adequately block all the effects of aldosterone besides the one mediated by ENaC channels (Na+ reabsorption). The other choices are usually medical options for Cushing’s syndrome, or hypercortisolism. However, (B) can decrease aldosterone levels as well, but that will also decrease the production of other adrenocortical hormones such as cortisol and androgens, hence we will have many unwanted side effects.",
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
    explain: "This question requires understanding the pharmacological management of a pheochromocytoma. In this vignette we are presented with a patient with a pheochromocytoma. We suspect a pheo because of the triad: headaches (secondary to elevated BP), tachycardia/elevated heart rate, and diaphoresis. Pheochromocytomas also tend to present paroxysmal and can spontaneously resolve and is thought to be due to surges of catecholamine release from the adrenal medulla that can be triggered by different stimuli such as exercise, drug, surgery, etc… Given that and the rarity, pheos can be misdiagnosed as panic disorders. Other symptoms include abdo pain, HTN, pallor. Most of these can be explained by the underlying pathophysiology of elevated catecholamines (E and NE). This essentially causes a SNS-like picture, so tachycardia, elevated BP, sweating. Pallor can be due to vasoconstriction of superficial vessels via alpha1, while the abdo pain could be due to mesenteric vasoconstriction as blood is shunted away from the GIT in fight or flight response leading to ischemia. In this case a CT abdomen could show a mass and this mass would not be biopsied due to the risk of precipitating a release of catecholamines. The urine metanephrines would be elevated if this is a pheo. Metanephrines are the breakdown products of catecholamines, hence elevated NE, E would mean elevated metanephrines in the urine. In this case prior to surgical intervention we need to prep the patient medically to prevent hemodynamic instability. The correct method would be to block α receptors then block β receptors. This is correctly outlined in (C). Prazosin is an α1 antagonist and metoprolol is a  β1 blocker. First we want to minimize activation of these receptors when the pheo releases catecholamines. We need to block α1 first because we want to prevent any reflexive vasoconstriction that could precipitate a hypertensive crisis if the β1 receptors are blocked. If we block β1 first, then the body may detect a drop in BP and reflexive activation of the SNS resulting in α1 activation and vasoconstriction. This treatment will also lower the patient's BP via vasodilation (α1 blockade) and decreased CO (β1 → dec HR and contractility).",
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
    explain: "This question requires understanding the treatment for congenital adrenal hyperplasia. In this vignette we are presented with a patient with suspected CAH given the clinical presentation of a salt-losing crisis from lethargy, vomiting, and hypotension. The neonate undergoes acute management for a salt losing crisis as shown with IV fluids (NS bolus followed by D10NS), labs drawn, and bolus IV hydrocortisone. We would also consider ECG monitoring for hyperkalemia induced arrhythmias. The labs showing hyperkalemia (and the salt losing crisis) suggest low aldosterone levels. The elevated 17-hydroxyprogesterone suggests a 21-hydroxylase deficiency (it should be noted that 17-hydroxyprogesterone is elevated in the first 48-72hrs of life and sometimes ACTH stimulation may be required for diagnosis in milder CAH forms). This is because a lack of 21-hydroxylase will cause a buildup of the molecules that are directly upstream of the steroidogenesis pathway, one of these is 17-hydroxyprogesterone.  21-hydroxylase catalyzes the reactions that convert progesterone to deoxycorticosterone and 17-hydroxyprogesterone to 11-deoxycortisol (precursor to cortisol). In this case we possibly have a classic 21-hydroxylase deficiency given the salt losing crisis at 2wks of age, however it should be noted that there is a wide spectrum of presentations. Other presentations are due to milder enzymatic defects, thus their aldosterone production is preserved and can present as genital ambiguity, pubic hair development, growth acceleration, or late onset which results in in excess adrenal androgen production (you will learn more about this in the pediatrics block in MEDD421). The management of this following stabilization would be (C). We would want to replace both cortisol and aldosterone. (D) and (E) are not indicated and we don’t know the gender of the patient. Sex hormone replacement should be a discussion with the patient when they have a better understanding of their condition.",
  },
  {
    id: 10,
    prompt:
      "A 45 y/o patient presents to the ER after being found with altered mental status in his own vomit at home. He has profound postural hypotension, fatigue, tachycardic and is confused. His medical history includes ongoing glucocorticoid replacement therapy. His neighbor recalls that his estranged wife recently visited and he started feeling a little sick shortly after. What medical intervention should be initiated as soon as possible?",
    choices: [
      "PO prednisone",
      "PO prednisone and IV fludrocortisone",
      "IV hydrocortisone",
      "IV hydrocortisone and fludrocortisone",
      "IV hydrocortisone, fludrocortisone, testosterone",
    ],
    correct: "IV hydrocortisone",
    tags: ["PD", "medium", "Endocrinology", "MoA"],
    explain: "This question requires understanding the treatment for an adrenal crisis. In this vignette we are presented with a patient who is in an adrenal crisis. This is the most likely diagnosis because of his clinical presentation (adrenal crisis is explained in another question in HPEO axis week) and his history of glucocorticoid replacement therapy and recent illness. His recent illness and possibly the stress from his estranged wife visiting may have caused an increased need for cortisol. Hence, we recommend stress doing for patients with cortisol deficiencies when they feel sick, which would be increasing the dose by 2x or 3x PO for the time being. Likewise, stress-dosing is also for these patients who undergo surgery. In short, these patients have HPA axes that are not working as expected, so an exogenous steroid will need to be provided when needed because the body may not be able to respond to the increased demands. In this case our patient will require IV (or IM) steroids given his vomiting (might not be able to keep a PO dose down plus severity). Hence, the correct answer is (C). IV HC will provide rapid replacement of his cortisol levels to hopefully alleviate the adrenal crisis. (A) and (B) are PO GCs, which may not be rapid enough and he may not be able to take PO meds given the vomiting. (B), (D), (E), fludrocortisone is a mineralocorticoid and is not indicated, his RAAS should still be functioning. (E) testosterone is not indicated and would not precipitate an acute adrenal crisis if deficient.",
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
    explain: "This question requires understanding adverse effects of glucocorticoid. The correct answer is (C). This is because exogenous glucocorticoids will suppress the hypothalamic-pituitary-adrenal (HPA) axis. The exogenous glucocorticoids like cortisol, will cause negative inhibition of CRH release from the hypothalamus and ACTH release from the anterior pituitary. The decrease in ACTH will cause decreased endogenous cortisol production, hence a secondary adrenal insufficiency. The lack of ACTH also leads to adrenal atrophy as ACTH is required to maintain the adrenal glands. Hence, it is recommended to taper glucocorticoid use especially after >3 weeks of therapy (such as with high dose systemically delivered steroids such as dexamethasone) as this will give the body’s HPA axis to recover and adapt to the slowly decreasing amounts of exogenous glucocorticoids. (B) primary AI would be failure of the adrenal gland itself, not a decrease in ACTH, but rather high levels of ACTH as they try to stimulate the non functioning adrenal glands. This will not occur with exogenous glucocorticoid use as the exogenous steroids will be acting on the hypothalamus and pituitary. (D) SIADH is not a known adverse effect of glucocorticoids, in fact cortisol has some inhibitory effects on ADH secretion. (A) is not an adverse effect of glucocorticoids. In fact the opposite is a known effect: hypocalcemia. This occurs due to decreased GI absorption of calcium and increased urinary excretion of calcium. The mechanism behind this is inhibition of the effects of vitamin D, decreased calcium channel expression on GI lining cells, and decreased renal absorption of calcium. This is partly why glucocorticoid use also contributes to osteoporosis. Glucocorticoids cause osteoporosis via inhibition of IGF-1 expression on osteoblasts leading to decreased bone formation and increased osteoclast activity → increased bone resorption.",
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
    explain: "This question requires understanding the potencies of different glucocorticoids. The correct answer is (C). Cortisol is essentially our endogenous glucocorticoid, so its potency is 1. Hydrocortisone is a synthetic form of cortisol, and hence has the same potency as cortisol. Prednisolone is about 4x more potent than cortisol, so its potency is 4. Methylprednisolone (IV prednisone) is about 5x more potent than cortisol, so its potency 5. FInally, dexamethasone is a high potency steroid, with a potency 30x more than cortisol, hence its potency is 30. Glucocorticoids also have the ability to activate the mineralocorticoid receptor (MR) (the aldosterone receptor) and each one has different potencies for it. Hydrocortisone and cortisol have equal potency for both the mineral (MR) and glucocorticoid receptor (GC), while the other more potent steroids tend to have lower affinity and hence decreased potency for the MR. Dexamethasone has no affinity, so no activity for the MR, thus it can only provide effects that are activated through the glucocorticoids receptor pathway. SOmething like fludrocortisone, a synthetic mineralocorticoid, will only have potency for MR and not GC, so it only has mineralocorticoid effects and is about 200x more potent than cortisol for MR (so the effects of aldosterone).",
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
    explain: "This question requires understanding the adverse effects of glucocorticoid use. The correct answer is (E). (E) is not an associated adverse effect of glucocorticoid use, in fact the opposite, the thinning of skin from topical steroid use is a known side effect. This is because cortisol is a catabolic hormone, thus it leads to increased proteolysis, which would result in increased breakdown of structural proteins in the skin, thus causing thinning of the skin. (A) is a known adverse effect due to GC receptor activation in cells of the trabecular meshwork (the tiny canals that drain fluid from the eyes). This leads changes to increased ECM, which causes an outflow obstruction for aqueous humor, hence increased IOP. (B) is a known adverse effect because glucocorticoids stimulate the release of gastrin, resulting in increased acid production. Also steroids decrease prostaglandin production (decreased phopolipaseA2 activity due to increased lipocortin expression, hence another way steroids decrease inflammation via reduced prostaglandin), which in turn leads to decrease mucus production that would normally protect the stomach lining (similar to NSAIDs), resulting in ulcer formation. (C) is a known adverse effect because cortisol is released during times of stress, which stimulates gluconeogenesis for increased energy, resulting in elevation of blood sugar. Increased blood sugar stimulates insulin secretion from pancreas, however with chronic exposure, there will be desensitization of insulin receptors, hence decreased responsiveness to insulin. (D) is a known adverse effect because Glucocorticoids inhibit of IGF-1 expression on osteoblasts leading to decreased bone formation and increased osteoclast activity → increased bone resorption.Moreover, steroids also inhibit the effects of vitamin D leading to decreased GI absorption of calcium and increased urinary calcium excretion through mechanisms such  as decreased calcium channel expression on GI lining cells, and decreased renal absorption of calcium.",
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
    explain: "This question requires understanding the importance of glucocorticoid dose tapering in preventing adrenal crisis. In this vignette we are presented with a patient in an adrenal crisis potentially due to secondary adrenal insufficiency. We suspect this given the clinical presentation and the history. He does not appear to have signs of primary adrenal insufficiency such as hyperpigmentation (ACTH stimulation of melanocytes), salt craving, high K+ levels (low aldosterone). His history indicates that he recently completed a 6wk course of a systematically absorbed GC without dose tapering. The 6 wk course of PO prednisone could very well have suppressed his HPA axis and without the dose tapering, his HPA axis may not have time to adapt to the sudden drop in cortisol. Hence the correct answer is (D). We would expect his cortisol and ACTH levels to be low.",
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
    explain: "This question requires understanding the effects of cortisol or glucocorticoids. The choice that is NOT an effect of cortisol is (C). Cortisol is the stress hormone, hence it should be involved in the release of catecholamines of the SNS like in a fight or flight response.  This can happen because cortisol produced from the fascicular zone of the adrenal cortex will follow the blood flow down to the adrenal medulla, where it can stimulate catecholamine release. (A) is discussed in another question. (B) is due to Alteration in transcription of specific target genes:  Trans-repression → Prevent translocation of inflammatory transcription factors from cytosol to nucleus (CREB binding protein, NF-κB and/or Trans-activation → bind glucocorticoid receptor elements (GREs) to upregulate anti-inflammatory proteins. (D) is due to the increased depression of lipocortin, which inhibits phospholipaseA2, which s the enzyme that produces arachidonic acid, the precursor molecule to all prostaglandins and leukotrienes, essentially this inhibits the step before the COX enzyme step that is is inhibited by NSAIDs. (E) discussed in another question. ",
  },
];
