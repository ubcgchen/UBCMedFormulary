export const thyroidParathyroid = [
  {
    id: 1,
    prompt:
      "A 32 y/o patient presented to the clinic a few weeks ago with fatigue, and feeling cold all the time. She described feeling slow all the time. Blood work from her last visit showed elevated TSH levels (8 mu/L) and normal fT3/fT4. She comes to the clinic again for a repeat test, which confirms the elevated TSH levels (8.3 mu/L) and normal fT3/fT4. You also learn that she and her husband are thinking of starting a family soon and are actively trying to conceive. What dose would you aim for if she was pregnant (patient weight: 60 kg)?",
    choices: [
      "Levothyroxine 60 mcg PO daily",
      "Levothyroxine 75 mcg PO daily",
      "Levothyroxine 96 mcg PO daily",
      "Levothyroxine 120 mcg PO daily",
      "No medication required",
    ],
    correct: "Levothyroxine 120 mcg PO daily",
    tags: ["PD", "medium", "Endocrinology"],
    explain: "This question requires understanding thyroid replacement therapy dosing in a mother who is attempting to conceive. In this vignette we are presented with a patient with mild hypothyroidism. We believe that this is mild hypothyroidism given the clinical presentation (cold intolerance, fatigue, feeling slow) and the elevation in TSH. The normal fT3/fT4 would suggest that this is possibly mild and also that her thyroid levels are functioning lower than her own set point (thus we think her setpoint could be higher than the general population). Normally we would dose thyroid replacement at a dose equivalent of 1.6 µg/kg/day, so a 60 kg patient would be dosed for 96 mcg. Usually when initiating treatment we start at the lower end at 75% of full dose, so around ~75 mcg.  However, since our patient here is planning on getting pregnant we need to safeguard the fetal brain from hypothyroidism, therefore we would want to increase the dose by 25%. In this case then we would aim for 120 mcg PO daily (1.6*60*1.25). Therefore (D) is the best answer. The initiation of therapy in a pregnant patient is lower than the rest of the population. Usually we’d initiate therapy if TSH >2.5 with + anti-TPO, or TSH >4.0 irrespective of Ab status. Either way, this patient would be indicated for treatment.  It's important to replace thyroid hormone adequate in pregnancy to reduce the risk of spontaneous abortion, placental abruption and preterm delivery. Hence, we always immediately start replacement for pre-pregnancy and any elevation of TSH >4 during pregnancy, in newborns and children. Usually only selected patients with subclinical hypothyroidism are treated such as symptomatic, sustained elevated TSH (>10) for 2 mo or TSH rising with high anti-TPO. Overt clinical hypothyroidism is usually when TSH >15 and free T4 below the normal range.  In pregnant patients we’d want to aim TSH to be <2.5 and follow the TSH q4weekly for the first 20wks. It should be noted that levothyroxine has a slow onset of action, it may take 2-3 wks before symptomatic relief is achieved and that is a consequence of its half life of 5-7 days. Remember it takes 5 half lives to reach steady state.",
  },
  {
    id: 2,
    prompt:
      "A 25 y/o patient was recently diagnosed with overt hypothyroidism and Celiac disease. What dosing adjustments would be needed for her levothyroxine replacement therapy?",
    choices: [
      "Decrease dose, there is better absorption of levothyroxine in patients with Celiac",
      "Increase dose, there is poor absorption of levothyroxine in patients with Celiac",
      "Same dose, there is no effect to levothyroxine absorption in patients with Celiac",
      "No dose, levothyroxine is contraindicated in Celiac disease",
    ],
    correct:
      "Increase dose, there is poor absorption of levothyroxine in patients with Celiac",
    tags: ["PK", "medium", "MoA", "GI", "Endocrinology"],
    explain: "This question requires understanding how different comorbidities may affect drug absorption. The correct answer is (B). Celiac disease is known to affect levothyroxine absorption, Hence, we’d want to increase dose to overcome the poor absorption. Some other reasons that may lead to decreased efficacy is increased excretion of T4 such as in nephrotic syndrome, or interactions with the diet such as high calcium/iron food that can impair absorption.",
  },
  {
    id: 3,
    prompt:
      "A 36 y/o patient with Hashimoto's thyroiditis has been taking levothyroxine for the past year at the standard dose and her TSH, fT3, and fT4 levels have still not resolved. Her past medical history includes epilepsy, iron deficiency anemia and GERD. Her medications and supplements include: iron (IM) and omeprazole (PO), and carbamazepine (PO). Which of the following MOST LIKELY explains a potential reason for the decreased levothyroxine efficacy in this case?",
    choices: [
      "Carabmazepine (PO) increases thyroid hormone metabolism, thereby decreasing levothyroxine serum levels",
      "Iron (IM) inhibits the absorption of levothyroxine, thereby decreasing levothyroxine serum levels",
      "Omeprazole (PO) decreases calcium absorption, which is a required cofactor for levothyroxine absorption",
      "Omeprazole (PO) competes with levothyroxine for absorption, thereby decreasing levothyroxine serum levels",
    ],
    correct:
      "Carabmazepine (PO) increases thyroid hormone metabolism, thereby decreasing levothyroxine serum levels",
    tags: ["PD", "PK", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacokinetics of levothyroxine (absorption and drug interactions). In this vignette we are presented with decreased efficacy of levothyroxine. The most likely explanation is (A). Carbamazepine is a known drug interaction with levothyroxine by increasing the extra-thyroidal metabolism of thyroid hormone by inducing the hepatic enzyme uridine diphosphate glucuronosyltransferase, which plays a role in levothyroxine metabolism. Some other medications would include rifampin (a big drug-drug interaction culprit), phenytoin, phenobarbital (both of these and carbamazepine are anticonvulsants). (B) is false because the iron is given IM and not PO, so it shouldn't interfere with levothyroxine absorption. If iron was given PO, then this would be a likely explanation because iron forms a bond with levothyroxine, which prevents the intestinal absorption of levothyroxine. Hence, it's recommended to space out PO iron and PO levothyroxine by ~4hrs. (C) is false because calcium is not a required cofactor for levothyroxine absorption. In fact calcium decreases levothyroxine absorption. Calcium interacts with levothyroxine in the GIT, leading to decreased absorption. In the acidic gastric compartment, levothyroxine will adsorb to calcium (e.g. calcium carbonate), thus forming a complex that is not absorbed. (D) although PPIs do decrease the absorption of levothyroxine, it is thought that this is primarily because the raised pH in the stomach following PPI usage causes decreased dissolution of levothyroxine tablets, thus leading to decreased absorption.",
  },
  {
    id: 4,
    prompt:
      "What is the main pharmacological reason that dose tapering is not required when ending levothyroxine treatment compared to glucocorticoid replacement?",
    choices: [
      "Endogenous T3 and T4 is not suppressed during levothyroxine replacement therapy",
      "Levothyroxine/T4 has a longer half life of 5-7 days vs 8-12 hours (hydrocortisone)",
      "Cortisol replacement requires larger doses than levothyroxine",
      "There is always more free T3/T4 in plasma due to lower protein binding (TBG) than cortisol (transcortin)",
      "Actually, dose tapering is required to prevent rebound exophthalmos",
    ],
    correct:
      "Levothyroxine/T4 has a longer half life of 5-7 days vs 8-12 hours (hydrocortisone)",
    tags: ["PK", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding some pharmacokinetics and its implications in dose-tapering. The correct answer is (B) because the long half-life of levothyroxine will act like a taper for us. The body’s levothyroxine levels will slowly drop, thus giving time for the HPT axis to recover if needed and adapt to the dropping levels of exogenously delivered thyroid hormone. Compared to GCs like hydrocortisone, the short half life means that the drug is more rapidly eliminated, thus leaving the body little time to adapt to the changes and have the HPA axis recover to the dropping cortisol levels. (A) is not true, levothyroxine is synthetic thyroid chrome and will suppress the release of TRH and TSH from the hypothalamus and pituitary, respectively. The rest is false.",
  },
  {
    id: 5,
    prompt:
      "Which of the following most correctly describes the mechanism of action of antithyroid medications like methimazole and propylthiouracil (PTU)?",
    choices: [
      "Both inhibit peripheral deiodinase D1 only",
      "Both inhibit peripheral deiodinase D1 and thyroid peroxidase (TPO)",
      "Both inhibit TPO only",
      "Both inhibit TPO, but PTU also inhibits peripheral deiodinase D1",
      "Both inhibit TPO, but methimazole also inhibits peripheral deiodinase D1",
    ],
    correct: "Both inhibit TPO, but PTU also inhibits peripheral deiodinase D1",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the mechanisms of two drugs used to treat hyperthyroidism. The correct answer is (D). Both methimazole and PTU block TPO, which inhibits thyroid hormone synthesis. TPO plays a role in both oxidation of I- to iodine and also the iodination process of tyrosine amino acids on TGB. PTU however, also inhibits peripheral deiodinase D1. This extra mechanism is theoretically why PTU is preferred over methimazole in thyroid storm or thyrotoxicosis because PTU can then inhibit the effects of thyroid hormone at end organs. Peripheral deiodinase D1 converts T4 into the active form T3, by inhibiting the activation of T4 into T3, there is a decrease in thyroid mediated effects. PTU also has a faster onset of action than methimazole. However, clinically, methimazole is preferred now as the evidence showing PTU>methimazole is unremarkable.",
  },
  {
    id: 6,
    prompt:
      "Which of the following medications is teratogenic and is known to cause aplasia cutis (scalp abnormality) in pregnant patients?",
    choices: ["I-131", "Levothyroxine", "Methimazole", "Propylthiouracil"],
    correct: "Methimazole",
    tags: ["PD", "easy", "side effects", "Endocrinology"],
    explain: "This question requires understanding the adverse effects of antithyroid medication. The correct answer is (C). Methimazole is especially known to cause aplasia cutis and is teratogenic. In fact the only medication here with not a known teratogenic risk is (B), which makes sense as its synthetic thyroid hormone. Methimazole can cross the placenta and cause teratogenic effects and also hypothyroidism in the fetus. PTU is the recommended drug for pregnant patients with hyperthyroidism, but still has a teratogenic risk. I-131 is contraindicated in pregnancy because it is radioactive, which will harm the fetus.",
  },
  {
    id: 7,
    prompt:
      "Which of the following adverse effects is found in patients using propylthiouracil, but not methimazole?",
    choices: [
      "Acute hepatitis",
      "Agranulocytosis",
      "Anti-neutrophil cytoplasmic autoantibody (ANCA)-associated vasculitis",
      "Hives",
      "None of the above, methimazole has more adverse effects",
    ],
    correct:
      "Anti-neutrophil cytoplasmic autoantibody (ANCA)-associated vasculitis",
    tags: ["PD", "medium", "Endocrinology", "side effects"],
    explain: "This question requires understanding the adverse effects of antithyroid medication. The correct answer is (C). ANCA vasculitis is associated with PTU and not methimazole. ANCA vasculitis is a complex autoimmune disease that you will be introduced to (very) briefly in Rheum week in MEDD422. Simplified, it is inflammation of small vessels such as those at the kidneys and lungs. The rest of the side effects are associated with both medications. You should suspect agranulocytosis (B) in patients undergoing antithyroid therapy who present with a sore throat, as this is a result of a drop in WBC leading to an infection commonly of the throat. Both medications are thought to have some sort of teratogenic risk. (A) is more common with PTU.",
  },
  {
    id: 8,
    prompt:
      "A 25 y/o patient presents to the family doctor with unintentional weight loss, muscle wasting, and diarrhea. She also mentions feeling warm all the time and a fast heart beat. The patient mentions that these symptoms have been affecting her daily function. During the physical exam you notice a tremor, her vitals show a slightly elevated systolic BP, and no goiter. You are suspicious of a thyroid pathology and order a TSH, which comes back extremely low, thus leading you to order a FT3/FT4. You decide to manage her symptoms with propranolol before those results come back. Which of her following symptoms can be managed by propranolol?",
    choices: [
      "Diarrhea",
      "Tachycardia",
      "Tremor",
      "B and C",
      "All of the above",
    ],
    correct: "B and C",
    tags: ["PD", "medium", "MoA", "SNS", "Endocrinology"],
    explain: "This question requires understanding the role of propranolol in managing hyperthyroidism. In this vignette we are presented with a patient with query hyperthyroidism given the symptoms and signs such as weight loss, muscle wasting, diarrhea, heat intolerance, tachycardia, tremor, elevated BP. These are all expected effects of high thyroid levels as it induces a hyperadrenergic state (SNS-like). We would expect her TSH to be low and her FT3/4 to be high. In this case symptomatic management with propranolol, a nonselective beta blocker, will be helpful in (B) and (C), hence (D) is the correct answer. THis is because by blocking β1 receptors on the heart, we can then decrease HR. By blocking β2, we can decrease vasodilation to skeletal muscles, which is thought to decrease tremor. Propranolol will have minimal effect on diarrhea. The ANS and its interaction with the ENS and GI activity is complicated, but classically the SNS will inhibit GI peristalsis and secretion, so would lead to constipation, whereas PSNS would promote the digestion and peristalsis, leading to diarrhea. Therefore, if we block SNS receptors in the GI tract, we are potentially making the diarrhea worse, but clinically this is most likely insignificant and there are many other receptors involved in GI motility including the alpha2 receptor and more.",
  },
  {
    id: 9,
    prompt:
      "A 36 y/o patient with Grave’s disease with no Grave’s orbitopathy undergoes radioactive iodine (I-131) therapy. She returns a few weeks later following the therapy for a follow up and she appears to be staring at you and she complains of double vision. What is the most likely reason behind this presentation?",
    choices: [
      "Incorrect diagnosis, this is a sign of a TSH secreting pituitary adenoma, which isn’t treated with I-131",
      "I-131 dose was not large enough to cause hypothyroidism",
      "I-131 induced thyrotoxicosis",
      "New orbitopathy is an adverse effect of I-131 therapy",
    ],
    correct: "New orbitopathy is an adverse effect of I-131 therapy",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the adverse effect of rapid treatment of hyperthyroidism with I-131. In this vignette we are presented with a patient that undergoes radioactive iodine treatment for Grave’s disease, but now presents with exophthalmos or orbitopathy. This is a known adverse effect following I-131 therapy, hence (D) is the correct answer. This is because I-131 will preferentially distribute to the thyroid where it exerts its radioactivity to treat hyperactive thyroid tissue, thus reducing thyroid hormone production. However, in Grave’s disease, the underlying pathophysiology are anti-TSH Abs that bind and activate TSH receptors. When the thyroid tissue is damaged from radiation, the excess anti-TSH Abs will start binding to TSH receptors elsewhere such as those on retro-orbital fibroblasts. This leads to activation of cytokines, lymphocyte infiltration, which result in orbital fat expansion and tissue expansion, thus pushing the eyeballs out. THis is why some Grave’s patients have orbitopathy, but in patients without orbitopathy and then undergo radioactive iodine treatment, there is a risk of precipitating the orbitopathy. Hence, patients need to be monitored for this complication. This results in permanent ablation of the thyroid gland, so hypothyroidism will occur following this treatment, thus thyroid replacement will need to be initiated.",
  },
  {
    id: 10,
    prompt:
      "A 46 y/o patient with HTN, GERD, and bipolar disorder presents to the clinic with fatigue, unintentional weight gain, constipation, polyuria, memory impairment, and bone pain. On exam the doctor notes a slowed HR, normal BP, and absence of the ankle reflex bilaterally. Unable to distinguish between two different endocrine pathologies, the doctor orders a few tests. The results show: high TSH, low T3/T4, high s[Ca] (repeated twice), slightly elevated PTH, and slightly reduced urine [Ca]. The doctor believes there is a singular iatrogenic cause to the patient’s presentation. Which of the following medications that the patient takes is the most likely culprit?",
    choices: [
      "Cabergoline",
      "Hydrochlorothiazide",
      "Lithium",
      "Metoclopramide",
      "Vitamin D",
    ],
    correct: "Lithium",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding an iatrogenic cause to both hypothyroidism and hyperparathyroidism. In this vignette we are presented with a patient with signs of hypothyroidism and hyperparathyroidism. The signs that point towards hypothyroidism include fatigue, unintentional weight gain, constipation, memory impairment, slowed HR, absence of ankle reflex bilaterally. The signs of hypercalcemia are summarized with: stones, bones, abdo moans, psychiatric overtones, thrones (toilet). In fact classically hypercalcemia usually presents with polyuria and constipation as seen in this patient, bone pain, memory impairment as well. The investigations further suggest our hypothesis given the high TSH, low T3/T4, high serum Ca and elevated PTH, reduced urinary Ca. PTH will increase serum calcium by increasing calcium reabsorption and increasing bone resorption. Normally, PTH should decrease with high calcium due to CsR sensing the rise in calcium. Given this a unifying hypothesis to the cause of both is described in (C). Li is an iatrogenic cause of both hypothyroidism and hyperPTH. Li can cause hypothyroidism because like iodine it is also concentrated by the thyroid, but this process will inhibit thyroid iodine uptake. Once inside the thyroid it can inhibit iodotyrosine coupling, affect thyroglobulin structure, and finally the secretion of thyroid hormone → this can cause goiter. It is thought that lithium can cause hyperPTH by interacting with CsR, which alters the setpoint for calcium. This causes desensitization, and thus increased release of PTH. It is also thought that lithium can inhibit CsR, which isn’t too surprising as it is a receptor for an ion and both calcium and Li are ions. Thus, we can see that by affecting CsR, the body’s system of regulating calcium is skewed into thinking that the body requires more calcium, resulting in PTH release. This also could potentially explain the slightly reduced urinary calcium. Normally in primary hyperPTH, the effects of CsR at the kidneys overrides the effects of PTH. This means that although PTH increases calcium reabsorption at the kidneys, the effects of CsR override that, so what we would see is normal to high urinary calcium as the kidneys try to get rid of the excess calcium. However, Li will block the effects of CsR, hence leading to an apparent nonfunctioning CsR and the end result of PTH mediated renal calcium handling. "
  },
];
