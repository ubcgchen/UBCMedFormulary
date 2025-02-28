export const hpeo = [
  {
    id: 1,
    prompt:
      "A 30 y/o male is diagnosed with secondary hypogonadism due to increased iron deposits in his anterior pituitary (hemochromatosis). He initially reports low sexual desire, loss of AM erections, insomnia, fatigue, and erectile dysfunction. His tests showed: low sperm count, normocytic anemia, low AM testosterone, low LH, low FSH, normal TSH, normal prolactin, and normal cortisol. He is only started on testosterone replacement. Which of the following will NOT be resolved fully with his current therapy?",
    choices: [
      "Anemia (normocytic)",
      "Lack of AM erections",
      "Erectile dysfunction",
      "Fatigue",
      "Decreased spermatogenesis",
    ],
    correct: "Decreased spermatogenesis",
    tags: ["PD", "medium", "Endocrinology", "MoA"],
    explain: "This question requires understanding the effects of testosterone and pathophysiology of central hypogonadism. In this vignette we are presented with a patient with secondary hypogonadism and has shown signs of low testosterone such as low sexual desire, lack of AM erections, ED, etc… Given this he is started on testosterone replacement therapy. This therapy has the potential to resolve all of his problems except for (E). This is because spermatogenesis (illustrated by his low sperm count in his case) is primarily driven by FSH. Testosterone does play a role in spermatogenesis, but without FSH, spermatogenesis will not be rescued with testosterone alone. FSH initiates the process of spermatogenesis and helps induce the expression of the androgen binding protein (ABP) in sertoli cells, which will help increase the local testosterone concentrations that is normally produced by the neighboring leydig cells to help promote the differentiation of the maturing sperm cells. Hence, FSH gets the ball rolling, while testosterone helps support it, but testosterone can’t start the process on its own. Likewise, providing exogenous testosterone may actually further decrease FSH and LH production via the negative feedback loop, which is why anabolic steroid users suffer from infertility. The other problems can be resolved by testerosone (assuming the root cause was due to low T). In cases of secondary/central hypogonadism treatment to help with fertility would include human chorionic gonadotropin (hCG) to help increase FSH. (A) T is known to help stimulate erythropoiesis and increase Hgb, erythrocyte count, and hematocrit. This is why T overuse can cause polycythemia vera (and its associated complications of viscous blood such as clotting). (B) AM erections are driven by testosterone. Normally there is increased release of T during REM sleep, which evidently tends to occur more often later in the sleep cycle, hence T levels are the highest in the morning (which is why we order AM testosterone!). THe spike in T helps cause AM erections. (C) ED can occur in low T state, thus replacing it will help resolve it. It is thought that T helps increase blood flow to the penis (stimulate NO production), increase libido, and more. (D) Decreased strength and conditioning, anemia, and reduced sleep (insomnia) can all cause fatigue, and all of these can be related to level of T.",
  },
  {
    id: 2,
    prompt:
      "Which of the following is NOT an adverse effect of pharmacological doses of testosterone?",
    choices: [
      "Gynecomastia",
      "Infertility",
      "Osteoporosis",
      "Polycythemia vera",
      "Sudden cardiac death",
    ],
    correct: "Gynecomastia",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology"],
    explain: "This question requires understanding the adverse effects of testosterone. The only one that is NOT an adverse effect of pharmacological doses of T is (C). You will learn more about osteoporosis (OP) in MEDD421, but T or androgens help stimulate bone formation and decrease bone resorption, hence T should not be causing OP. (A) may seem like something that would not occur with T, but when there is too much T, there wil be peripheral conversion to estrogen (aromatization), thus there will actually then be elevated E levels, thus causing gynecomastia. (B) high levels of T can suppress FSH release from the pituitary, thus causing decreased spermatogenesis. Essentially the excess T is causing increased negative feedback.  (D) is possible since T stimulates erythropoiesis. This is why HCT >50% is a contraindication to T replacement. (E) is also related to (D), but T can also cause increased LDL levels, increased clotting, which can lead to cardiac events like MIs, resulting in sudden cardiac death. Some contraindications to testosterone therapy are high levels of PSA/abnormal DRE (all related to prostate Ca risk), untreated obstructive sleep apnea, severe cardiac failure, and breast/chest/prostate Ca.",
  },
  {
    id: 3,
    prompt:
      "A 43 y/o male with schizophrenia and hypertension presents to the clinic for a checkup. He has recently noticed a decrease in his sexual functioning (erectile dysfunction, low libido), and he also notices that his chest has grown in size. You decide to do a pituitary workup and find low AM testosterone, and elevated prolactin (100 µg/L). You check his medications: risperidone (atypical antipsychotic), propranolol, losartan, and lithium. Which of his medications is most likely the cause of the hyperprolactinemia?",
    choices: ["Lithium", "Losartan", "Propranolol", "Risperidone"],
    correct: "Risperidone",
    tags: ["PD", "medium", "MoA", "Endocrinology", "Psych"],
    explain: "This question requires understanding iatrogenic causes of hyperprolactinemia. In this vignette we are presented with a patient with hyperprolactinemia as shown by his presentation (symptoms related to decreased gonadotropins - PRL inhibits pulsatile gonadotropin secretion) and lab results. Prolactin is released when there is removal of dopamine acting on the pituitary gland - remember dopamine inhibits the release of prolactin (also TRH stimulates the release of PRL). Thus any medication that blocks dopamine has the potential to cause hyperPRL. The drug that blocks dopamine and the correct answer is (D). Risperidone is an atypical (2nd gen) antipsychotic (AP; you will have a lecture on antipsychotic pharmacology in MEDD421 but here is a brief explanation on the MoA). APs block dopamine receptors, specifically the D2 receptor, which is the same receptor that inhibits PRL release. Dopaminergic pathways such as the mesolimbic pathway have been implicated in the positive symptoms of psychosis, hence drugs that block dopamine tend to be APs. What differentiates the effects of the many APs is their affinity for D2 and other receptors such as 5-HT. Other examples are haloperidol. (C) and (B) are both antihypertensives (beta blocker and ARB), but are not implicated in hyperPRL. Verapamil (fyi mechanism: off target blocking of Ca channels, resulting in decreased dopamine release) and methyldopa (fyi mechanism: off target enzyme inhibition that converts L-dopa into dopamine) have been implicated. (A) lithium, although has many side effects, is not thought to cause hyperPRL. Lithium however, has been implicated in SIADH and hyper and hypothyroidism (you could argue that lithium induced hypothyroidism causing increased TRH, leading to hyperPRL, but that is not as likely as (D)). Other iatrogenic causes include our antiemetics/prokinetics like metoclopramide and domperidone, which are both dopamine antagonists. Other causes also include antidepressants like SSRIs and TCAs, both of these are thought to be through decreased 5-HT reuptake leading to increased 5-HT in the thalamus, which causes increased PRL release. ANother class of antidepressants, MAO inhibitors, can also cause hyperPRL by increasing dopamine levels through inhibiting the breakdown. The MAO (monoamine oxidase) enzyme breaks down catecholamines like NE, E, and D. Finally opioids also have the potential to cause hyperPRL through an unclear mechanism.",
  },
  {
    id: 4,
    prompt:
      "A 34 y/o patient presents to the clinic after missing her period. She complains that recently she hasn’t felt herself and has low sex drive, hence has not had any sexual relationships in the past 2 months. She denies headaches and any vision changes, and her peripheral vision test is normal. You decide to do a pituitary workup after a negative pregnancy test. Her tests show low LH, FSH, elevated prolactin (200 µg/L), normal cortisol, and normal TSH. She isn’t on any medication except for the occasional acetaminophen. An MRI shows a mass on her pituitary gland. Which of the following medications is an effective treatment option for this presentation?",
    choices: [
      "Cabergoline",
      "Levothyroxine",
      "Metoclopramide",
      "Octreotide",
      "Pegvisomant",
    ],
    correct: "Cabergoline",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the treatment for prolactinomas. In this vignette we are presented with a patient with a prolactinoma. THis was determined after her clinical presentation suggested low gonadotropins (PRL inhibits pulsatile gonadotropin secretion), and then labs confirmed hypogonadism and hyperPRL, with sella MRI imaging confirming a mass at the pituitary gland. Her other hormones are not affected and she does not exhibit mass effect symptoms such as headaches or vision changes. The treatment for this case would be (A). This is because cabergoline is a D2 agonist. Dopamine inhibits the release of PRL. It is the release of the dopamine inhibition that causes PRL release, thus if we give a dopamine 2 agonist, we can inhibit the release of PRL and also shrink the tumor. Another D2 agonist we can consider is bromocriptine, but it isn’t as effective. If she doesn't respond to medical therapy, then we’d consider surgery. (B) levothyroxine is exogenous T4, thus is used to treat hypothyroidism. (C) is a dopamine antagonist, and would be an iatrogenic cause of hyperPRL. (D) octreotide is a somatostatin analogue, which is used in the acute management of esophageal varices and medical therapy for growth hormone secreting tumors - remember GH release is inhibited by SS (if the patient has a contraindication to surgery or opts for medical). (E) pegvisomant is a GH receptor antagonist, and as expected is used to treat excess growth hormone.",
  },
  {
    id: 5,
    prompt:
      "A 35 y/o patient presents to the ER after being found with altered mental status in his own vomit at home. He has profound postural hypotension, fatigue, tachycardic and is confused. He was recently diagnosed with secondary hypothyroidism and hypogonadism due to hypothalamo-pituitary sarcoidosis and was started on levothyroxine and testosterone four weeks ago. At the time of diagnosis, his other pituitary related hormones were low-normal. Which of the following is the most likely explanation for this presentation?",
    choices: [
      "Levothyroxine replacement increased the metabolism of cortisol, leading to an acute adrenal crisis",
      "Levothyroxine dose was too high and caused thyrotoxicosis",
      "Testosterone replacement caused a blood clot at the pituitary, leading to pituitary apoplexy, which precipitated an acute adrenal crisis",
      "Testosterone replacement increased the metabolism of ACTH, leading to an acute adrenal crisis",
    ],
    correct:
      "Levothyroxine replacement increased the metabolism of cortisol, leading to an acute adrenal crisis",
    tags: ["PK", "PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the causes of adrenal crisis and the importance of proper management in preventing this from occurring. In this vignette we are presented with a patient that is altered and “shocky”, we are given his PMHx of sarcoidosis that has caused secondary hypogonadism and hypothyroidism. Possibly other hormones from the pituitary such as ACTH given the low-normal levels of the other HPEO axis hormones that are affected. He was also started on levothyroxine replacement and T.  Given this history, he is possibly at risk of an adrenal crisis. His clinical presentation is congruent with an adrenal crisis given the postural hypotension, fatigue, altered mental status (possibly due to poor end organ perfusion), tachycardic (compensatory response to low BP), basically signs that presents as the opposite of the effects of cortisol or the stress response. Therefore, the most likely explanation is (A). Levothyrxoine increases the metabolism of cortisol, you can think of the thyroid hormones as catabolic, which makes sense given that hyperthyroidism is seen as an adrenergic/catabolic state (weight loss, etc..), while low thyroid states are seen as the opposite (weight gain, slowing, etc..). In this case, the patient’s cortisol levels were not adequately replaced prior to initiating levothyroxine, thus the extra catabolism of his endogenous cortisol was too much and precipitated an acute adrenal crisis. This is why patients with pituitary adenomas or disease of the pituitary need to ensure cortisol is adequately replaced prior to initiating thyroid replacement. (B) this is less likely, his presentation has some overlap with thyrotoxicosis or thyroid storm, but other important features include hyperthermia, tremor. (C) is possible, but again less likely. (D) is not true. The proper management in this case would be replacing cortisol as well.",

  },
  {
    id: 6,
    prompt:
      "A patient with unexplained polyuria undergoes a water deprivation test to help localize the cause. After 8 hours, her serum osmolality = 300 mOsm/kg and serum Na\u207a = 147 mM, but her urine osmolality remains dilute (<300 mOsm/kg).  To differentiate between central and nephrogenic diabetes insipidus (DI), the doctor should administer a drug with what mechanism of action?",
    choices: [
      "D2 receptor agonist",
      "Insulin receptor agonist",
      "Mineralocorticoid receptor agonist",
      "NKCC2 inhibitor",
      "V2 receptor agonist",
    ],
    correct: "V2 receptor agonist",
    tags: ["PD", "medium", "Nephrology", "Endocrinology"],
    explain: "This question requires understanding the pharmacology behind the diagnosis of diabetes insipidus. In this vignette we are presented the results of a water deprivation test in a patient presenting with unexplained polyuria. The results show slight hypernatremia and hyperosmolality, but the urine is not adequately concentrated. Normally, during water deprivation, we would expect the body to conserve water, which results in concentrated urine as water is reabsorbed at the kidneys to maintain blood volume. In this case, she is still losing water and has resulted in hypernatremia and hyperosmolality. This confirms diabetes insipidus, but does not tell us whether this is a central or nephrogenic problem. To differentiate between the two we need to administer ddAVP or desmopressin, which is essentially an ADH analogue that only activates the V2 receptor (not V1 receptor). Therefore, the answer is (E). V2 receptors are found at the collecting ducts of nephrons, and when activated increase the insertion of aquaporin 2 channels (AQP), the channels that help facilitate water reabsorption. If this was a problem at the kidneys, then the administration of ddAVP will NOT cause an increase in urine osmolality because the kidneys will NOT be able to respond to the exogenous desmopressin. If this was a central problem (posterior pituitary), then we would expect the urine osmolality to increase or in other words, respond to the exogenous ddAVP because the polyuria problem would have been due to decreased release of ADH from the posterior pituitary. ddAVP administration would essentially act as replacing the missing ADH. The kidneys in this case should still be working and be able to respond to the exogenous ddAVP. Hence, in short there would be a substantial INCREASE in urine osmolality following ddAVP in CENTRAL DI, while there would be LITTLE to NO CHANGE in urine osmolality following ddaVP in nephrogenic DI. (A) would be cabergoline for hyperPRL. (B) would be insulin. (C) fludrocortisone for mineralocorticoid replacement in primary adrenal insufficiency. (D) is a loop diuretic, such as furosemide",
  },
  {
    id: 7,
    prompt: "Which of the following medications is NOT a known cause of SIADH?",
    choices: [
      "Carbamazepine",
      "Cabergoline",
      "Clozapine (antipsychotic)",
      "Cyclophosphamide (anti-cancer)",
      "Sertraline",
    ],
    correct: "Cabergoline",
    tags: ["PD", "medium", "Endocrinology", "side effects"],
    explain: "This question requires understanding the iatrogenic causes of SIADH. The correct answer is (B). (B) is a dopamine 2 receptor agonist and is used in the treatment of some prolactinomas or hyperprolactinemia and is not implicated in SIADH. SIADH is syndrome of inappropriate ADH, which essentially is increased ADH release from the posterior pituitary, which results in hyponatremia (increased ADH → increased water reabsorption at the collecting ducts of the kidneys). (A) is an anticonvulsant, it is thought that many of the anticonvulsants like carbamazepine have off target activation of V2, leading to increased AQP2 insertion, thus increased water reabsorption. (C) is an atypical antipsychotic with 5-HT2 and 5-HT1c activity, which causes release of ADH from the posterior pituitary, thus many atypical antipsychotics can cause SIADH due to its 5-HT activity. (D) is an alkylating agent used in chemotherapy (alkylates DNA → damage → apoptosis). The mechanism behind how it causes hyponatremia is not well understood. (E) is a SSRI like the atypical APs, decreasing reuptake of 5-HT can lead to increased activation of 5-HT receptors, and some of them lead to increased ADH release, thus causing SIADH. The mechanisms of iatrogenic causes of SIADH are NOT something you will probably need to know, but it's good to have an idea of what drug classes may cause SIADH and highlights the importance of the medication history. Some other iatrogenic causes would be vasopressin, desmopressin (the ADH analogues) and oxytocin",
  },
  {
    id: 8,
    prompt:
      "A 45 y/o patient presents to the clinic with tingling and numbness in both hands. He also thinks that he has gained weight because he has had to buy larger shoes recently since his old ones were too small. Upon inspection, you notice lower jaw protrusion, increased space between teeth, and a larger nose. Blood work shows an elevated IGF-1, and an OGTT with no suppression. A sella MRI reveals a 1.5 cm pituitary adenoma. He opts for medical treatment. Which of the following medications can be used to treat his tumor?",
    choices: ["Domperidone", "Macimorelin", "Metyrapone", "Octreotide"],
    correct: "Octreotide",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the medical therapy options for acromegaly. In this vignette we are presented with a patient we suspect to have acromegaly. We suspect this given the presentation of tingling and numbness in both hands (bilateral carpal tunnel due to increased water retention in the synovial fluid that compresses the median nerve), having to buy larger shoes (growth of extremities), growth of his jaw, mouth and nose. The labs further suggest this given the elevated IGF-1 and the lack of suppression with the oral glucose tolerance test. Finally, sella MRI imaging suggesting a tumor at the pituitary. The medical treatment would be to suppress the effects of GH or to suppress the release of GH. This can be done with (D). Octreotide is a somatostatin (SS) analogue. Remember SS inhibits the release of GH from the pituitary gland. Other options include GH receptor antagonists like pegvisomant, the other SS analogues (-reotide). And cabergoline. (A) is a dopamine antagonist. (B) is a GHRH receptor agonist, thus induces the release of GH from the pituitary gland. (C) is 11β-hydroxylase inhibitor, thus inhibiting the production of cortisol, thus is used in medical management of hypercortisolism.",
  },
  {
    id: 9,
    prompt:
      "A 34 y/o patient presents to the endocrinologist with suspected Cushing’s syndrome. His clinical presentation is congruent with textbook Cushing’s syndrome. A 1 mg dexamethasone overnight suppression test is done and it comes back suppressed. The endocrinologist is not convinced and decides to do a midnight salivary cortisol level, which comes back extremely high. Which of the following could explain the discrepancy between the two tests?",
    choices: [
      "False negative dexamethasone suppression test because the patient ingested grapefruit juice, which inhibited dexamethasone (CYP34A substrate) metabolism",
      "False negative dexamethasone suppression test because the patient ingested grapefruit juice, which increased dexamethasone metabolism",
      "False negative dexamethasone suppression test because the adrenal glands have atrophied and, thus are unable to respond to dexamethasone",
      "False positive salivary cortisol because the patient is on an OCP, which inflated the cortisol levels due to increased transcortin (CBG)",
    ],
    correct:
      "False negative dexamethasone suppression test because the patient ingested grapefruit juice, which inhibited dexamethasone (CYP34A substrate) metabolism",
    tags: ["PK", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the PK considerations of the dexamethasone suppression test. In this vignette we are presented with a patient with suspected Cushing’s syndrome given the clinical presentation, however, the 1 mg dexamethasone overnight test suggests that he does not have it since his cortisol levels are suppressed in response to the exogenous glucocorticoids. On the other hand the midnight salivary cortisol comes back high, which suggests some sort of hypercortisolism. In this case we have to think why did the dexamethasone administration manage to suppress his cortisol. For something like this to occur the dexamethasone levels in his body would have to be more than the anticipated amount from the 1 mg dose. Drug response variability in most cases is a pharmacokinetic issue, so then we can think of what PK parameters could increase dexamethasone in the body. This would include decreased metabolism or excretion (dexamethasone is not a pro-drug). Therefore, from the answer choices the only option that describes this is (A), the correct answer. This is because grapefruit is a known potent inhibitor of the CYP34A enzyme, thus there will be decreased metabolism of dexamethasone. This will result in decreased first pass (if PO administration) and metabolism, thus resulting in increased dexamethasone levels resulting in suppression of cortisol. Other causes of false negative dexamethasone suppression tests could occur in patients taking other medications that inhibit the CYP enzymes involved in dexamethasone metabolism such as antifungals (itraconazole), SSRIs (fluoxetine), and CCBs (diltiazem), or patients with liver failure or kidney failure (decreased metabolism, excretion). (B) is false and let’s say if a patient did ingest a CYP enzyme inducer (increased activity), then we would have an increased risk of a false positive as the dexamethasone levels are lower than expected. (C) does not make sense as that would suggest hypocortisolism, but also dexamethasone is used to suppress ACTH release, and seeing if this results in decreased cortisol release from the adrenals. (D) would not happen even if he did take an OCP. The cortisol bound to transcortin would not be detected in the saliva, as only free cortisol would be detected (free cortisol excreted in saliva, not cortisol-transcortin complexes). Cortisol bound to transcortin would be detected in blood tests. It should be noted that the reason why dexamethasone is used in the suppression tests is because dexamethasone will not interfere with cortisol measurements as it is a synthetic glucocorticoid, thus the cortisol we measure is specifically the body’s endogenous cortisol. If we used other glucocorticoids like prednisone, this would falsely elevate the measured cortisol levels, as the assay would include the prednisone as part of the cortisol levels.",
  },
];
