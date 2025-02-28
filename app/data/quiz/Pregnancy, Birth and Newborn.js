/**
 * Questions for Pregnancy, Birth and Newborn
 * @author Michael Gong, UBC VFMP 2025
 */

export const Pregnancy_Birth_and_Newborn = [
  {
    id: 1,
    prompt:
      "A 16 y/o patient G1P0T0 (GA ~8 wks) presents to the clinic expressing their desire to not continue the pregnancy. She opts for a medical abortion over surgery. Which of the following correctly describes the drug combo mechanism of actions that is directly involved in inducing medical abortion?",
    choices: [
      "Mifepristone - PGE1 synthetic analogue; Misoprostol - competitive progesterone receptor antagonist",
      "Mifepristone - competitive progesterone receptor antagonist; Misoprostol - PGE1 synthetic analogue",
      "Mifepristone - oxytocin receptor agonist; Misoprostol - PGF2α synthetic analogue",
      "Mifepristone - PGF2α synthetic analogue; Misoprostol - oxytocin receptor agonist",
      "Surgery is the only option in this case",
    ],
    correct: "Mifepristone - competitive progesterone receptor antagonist; Misoprostol - PGE1 synthetic analogue",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the pharmacology behind abortion. In this vignette we are presented with a mature minor that no longer wants to continue her pregnancy and opts for a medically induced abortion. Medical abortion is composed of a combination of two drugs, mifepristone for initiation and then misoprostol. The correct choice that outlines the mechanism of both drugs is (B). Mifepristone is a progesterone receptor antagonist at low doses, at higher doses it will also block the glucocorticoid receptor (recall to MEDD412 adrenal week). In pregnancy, progesterone levels rise. By blocking the effects of progesterone, there will be decreased thickening of the endometrium that will help implantation and growing the fetus. This will lead to instability of the implantation, so now it is more susceptible to being aborted. Progesterone also increases prostaglandin metabolism (upregulation of prostaglandin dehydrogenase, an enzyme that breaks down PGs) , which brings us to the second part. Misoprostol is a PGE1 synthetic analogue (funnily enough it doesn’t bind the EP1 receptor, but binds to EP2,3,4 → this is fyi), so we are essentially giving extra exogenous prostaglandin. If we recall from pregnancy week from Year 1, prostaglandins play a pivotal role in labor. Prostaglandins will bind to prostaglandin receptors in the myometrium to cause smooth muscle contraction and also effacement of the cervix (dilation and thinning). Together the fetus can then be aborted and expelled. In short, you can think that mifepristone weakens the implantation, so that it is susceptible to misoprostol pushing it out. Our patient here is within 63 days of her LMP, so would still be eligible for medical abortion in Canada using mifepristone/misoprostol."
  },
  {
    id: 2,
    prompt:
      "A 35 y/o patient G2P0T1L1 (GA 30 wks) has been experiencing an increasingly depressed mood and excessive worry. Prior to her pregnancy she was diagnosed with major depressive disorder that was managed with escitalopram. She continues to take the lowest dose possible. Which of the following is an appropriate step to take in this case?",
    choices: [
      "Add MgSO4 to minimize risk of cerebral palsy due to SSRI use",
      "Increase escitalopram dose to euthymic mood",
      "Maintain escitalopram dose and add a benzodiazepine for the excessive worry",
      "Switch to a less teratogenic antidepressant such as a venlafaxine",
      "Taper escitalopram dose down to minimize exposure to fetus",
    ],
    correct:
      "Increase escitalopram dose to euthymic mood",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding treating perinatal depression. In this vignette we are presented with a patient with perinatal depression. The most appropriate step to maintain euthymic mood is to increase the dose, hence (B) is the correct answer. SSRIs are not contraindicated in pregnancy or breastfeeding. The teratogenic risk of SSRIs is not higher than the baseline risk of birth defects, hence it is important to treat perinatal depression in pregnant patients as the risk to mother and fetus due to depression are much higher than any risk related to SSRI use. Some risks include preeclampsia/hyperemesis gravidarum (increased vomiting), decreased perinatal care, self medication/substance abuse, impaired bonding, and exacerbation of depression postpartum, which leads to another laundry list of issues. Potentially the increase in SSRI may increase the risk of persistent pulmonary hypertension in the newborn. The dose requirement for SSRI sometimes increases in the 3rd trimester, possibly due to increased metabolism of SSRIs (increased hepatic blood flow, changes in CYP enzyme expression). Ideally perinatal depression is treated with the lowest number of drugs at the lowest effective dose. (A) MgSO4 is used to treat seizures and reduce the risk of CP in the newborn, but not due to SSRI use. (C)  ideally do not use BZDs to treat anxiety. (D) venlafaxine is a SNRI. Teratogen risk is possible, so ideally SSRIs are recommended over SNRIs as we have more data with SSRIs. (E) Do NOT taper the dose down in the third trimester as the risks of untreated or poorly managed perinatal depression is greater than SSRI use."
  },
  {
    id: 3,
    prompt:
      "A 32 y/o pregnant patient G3T1P1L2 (GA 30 wks) presents to the ER with a severe headache, blurred vision, retrosternal pain, and confusion. Some vitals are BP 184/120, T 37.3degC, HR 100, RR 24. A urine dipstick for protein is performed and it comes back 2+ for proteinuria. A urine protein to creatinine ratio is elevated 35 (abnormal ≥30). PLT <150e9 /L (low), high INR. Being an astute medical student, you recognize this presentation and you suggest using, which of the following drugs?",
    choices: [
      "Captopril",
      "Labetalol",
      "Losartan",
      "Nifedipine",
      "B and D",
    ],
    correct: "B and D",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the antihypertensives that are safe to use in pregnancy and in preeclampsia. In this vignette we are presented with a patient with preeclampsia. We suspect preeclampsia given the extremely high BP, proteinuria, low PLT (possbile DIC picture), and other adverse effects such as headache, blurred vision, retrosternal pain (possibly MI), and possibly altered mental status (confusion). In this case given CNS involvement, we want to avoid hemorrhagic stroke by controlling her BP. Her BP is above >160sBP or >110dBP. The antihypertensives that are safe in pregnant patients are correctly listed in (B) and (D), hence (E) is the correct answer. Laebetalol is a non-specific adrenergic antagonist, meaning that it blocks both α and β receptors, while nifedipine is a DHP-CCB. Other drugs we can use include methyldopa, an α2 agonist, or hydralazine, a vasodilator. (A) Captopril is an ACEi, which is teratogenic. (C) Losartan, an ARB, also affects RAAS and is avoided as well in pregnancy. This could be due to increased expression of angiotensin 2 receptor type 2 in fetal tissue. We would also want to increase the seizure threshold in this patient by administering MgSO4. We would also want to prepare for birth in case this HDP is not managed and will cause more harm to the mother. Ideally we would want to delay it till 37 weeks where a planned induced delivery can be performed. Given the GA, the baby will be preterm and will need antenatal corticosteroids such as betamethasone to help increase surfactant production in the fetal lungs and MgSO4 for CP prevention."
  },
  {
    id: 4,
    prompt:
      "A 36 y/o pregnant patient G1 (GA 14 wks) with T1DM, pre existing HTN, and BMI 30 presents to her Ob/Gyn clinic for a checkup. She is wondering what can be done to prevent the adverse effects related to her HTN. She recalls watching an episode of ER, where a pregnant patient dies from preeclampsia. She is already on pregnancy safe antihypertensives and insulin with no adverse effects. Which of the following medications could be added now to help prevent the complications of hypertensive disorders of pregnancy?",
    choices: [
      "Aspirin",
      "Betamethasone",
      "MgSO4",
      "Misoprostol",
      "Antihypertensives such as nifedipine are enough",
    ],
    correct: "Aspirin",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the prevention of hypertensive disorders of pregnancy (HDP). In this vignette we are presented with a patient with risk factors for HDP such as pre-existing HTN and increased BMI, DM, and first pregnancy. The medication that can be used to prevent complications associated with HDP is (A). ASA can prevent the thrombus formation in the placenta and minimize inflammation. Both of these can help prevent complications such as preeclampsia. The pathophysiology behind preeclampsia is complicated, but inflammatory markers do play a role, which leads to endothelial cell activation and even more inflammatory-mediated problems. This then leads to the signs and symptoms we see related to preeclampsia such as high BP, DIC, and more. Also recall that the placenta is a low pressure system that draws lots of the CO from the mother to help provide nutrients to the fetus, if the placenta is not functioning properly such as due to a clot, this can lead to HDP complications and also fetal growth restriction (ASA also decrease fetal growth restriction). Ideally, low dose ASA is started prior to 16wks (2nd trimester). Calcium can also be used to help prevent these complications as it has anti-inflammatory properties leading to decreased endothelial cell activation, but this is only recommended to supplement if the dietary intake is low (<600 mg/day). (B) is used antenatally to help increase surfactant production in the fetus (develop the lungs) if a preterm delivery is expected. (C) is used to prevent seizures (increases the threshold) also can be used to minimize the damage to the fetus such as cerebral palsy in the child. (D) is used as part of the cocktail for a medical abortion (and sometimes to induce labor)."
  },
  {
    id: 5,
    prompt:
      "A 34 y/o patient G1P0T0 (GA 24 wks) presents to the clinic for a follow up. She previously had a 75g glucose loading test. All 3 of her measurements (fasting, 1 hr, 2 hr) were high: 6 mM, 10.5 mM, 9 mM. Given this, which of the following is the BEST option for management of her condition and her fetus?",
    choices: [
      "Glyburide",
      "Insulin",
      "Metformin",
      "Sitagliptin",
      "One step OGTT is not diagnostic for GDM",
    ],
    correct: "Insulin",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the treatment of gestational diabetes (GDM). In this vignette we are presented with a patient that has 3 high measurements on her blood glucose following a 75 OGTT. Both the 1-step and 2-step (50g then 75g) can be used to dx GDM, with just one high measurement being enough. The best option to treat GDM is actually the use of (B) insulin. This is because use of insulin allows for better monitoring of blood glucose levels, this leads to better fine tuning and management of sugar levels. Another plus side is that insulin does not cross the placenta, so it has minimal, if any, harm to the fetus. The American and Canadian Diabetes associations recommend insulin as the best choice, however, (C) metformin can also be used and has comparable levels of glycemic control. Metformin has not been shown to increase congenital abnormalities. Another option (A) can also be used. (D) is not approved for GDM as we don’t have enough data on its safety to the fetus. Overall, insulin or metformin or acceptable first line choices for GDM, but in this question we will consider the fact that insulin’s inability to cross the placenta to be “safer”."
  },
  {
    id: 6,
    prompt:
      "A 37 y/o patient G2P0T1L1 w/ gestational HTN and asthma vaginally delivers a baby at 37 wks. Which of the following medications can be given to minimize postpartum hemorrhage?",
    choices: [
      "Aspirin",
      "Carboprost",
      "Ergonovine",
      "Oxytocin",
      "B and D",
    ],
    correct: "Oxytocin",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the treatment of PPH. In this vignette we are presented with a patient that just delivered a baby vaginally and is about to be given uterotonics to help minimize PPH, which in this case would be greater than 500mL blood loss. She has some relevant comorbidities that will affect our choice of uterotonics. In this case (D) oxytocin is the best choice. Oxytocin will act on oxytocin receptors in the myometrium to cause smooth muscle contraction. The contraction of these muscles will clamp down on the vessels going through the uterine wall, thereby minimizing bleeding. Oxytocin can also be used to induce labor by helping the uterine wall to contract and push the baby out. (B) carboprost is also a uterotonic that can be used in PPH, but is contraindicated in this case given her asthma. Carboprost is a PGF2α analogue, so it will bind to prostaglandin receptors to help facilitate myometrium contraction, however prostaglandin receptors are found everywhere in the body. One such place is the bronchioles, where PGF2α actually causes bronchoconstriction (it should be noted that not all prostaglandins cause bronchoconstriction, for example PGE1 causes bronchodilation. The difference is the prostaglandin receptor subtype they bind to, which have different physiological outcomes.). (C) ergonovine/ergometrine is also a uterotonic that can be used in PPH, however, the patient has gestational HTN, which is a contraindication. Ergonovine is an ergot derivative (remember sumatriptan), that causes myometrium contraction, though this effect is not associated with a specific receptor. However, ergonovine also binds α-adrenergic, dopaminergic, and serotonin receptors, which can lead to vasoconstriction, hence has the possibility of worsening HTN."
  },
  {
    id: 7,
    prompt: "A 35 y/o patient G2P0T1L1 w/ GDM delivers a baby boy LGA via cesarean section. The neonate initially appears well. However 2 hrs post-birth the baby appears jittery, irritable, diaphoretic, has a weak high pitched cry and poor suck. pH normal, blood glucose low, insulin normal, cortisol high, GH high, low ketones, and low FFA. IV D10W is started. Which of the following medications addresses the pathophysiology directly behind this presentation?",
    choices: [
      "BIlirubin",
      "Diazoxide",
      "Gentamicin + Ampicillin",
      "Glucagon",
      "MgSO4",
    ],
    correct:
      "Diazoxide",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the treatment options for neonatal hypoglycemia. In this vignette we are presented with a neonate with neonatal hypoglycemia as shown by his clinical presentation (symptoms +signs) and lab findings. The neonate has the risk factors such as mother with GDM. . There are three broad etiologies of hypoglycemia: low reserve (preterm, UGR, SGA), increased demand (sepsis), abnormal regulation. In this case the most likely cause is abnormal regulation due to increased exposure to glucose during pregnancy. This most likely led to hyperinsulinemia in the newborn, thereby lowering blood glucose to low levels. This is further supported by the lab findings such as normal pH (less likely gluconeogenic enzyme deficiencies or GH/cortisol deficiencies) and low ketone + low FFA (less likely fatty acid oxidation defect → low ketones, high FFA). Insulin is inappropriately normal in this case, it should be low due to the low blood glucose.The team appropriately starts D10W to raise the blood glucose levels to prevent negative neurological outcomes such as CP, seizures, neurodevelopmental delays. This does not address the main pathophysiology, which is the elevated insulin, in fact would probably increase insulin secretion as the increase in blood glucose will lead to more insulin secretion. Therefore, the only medication here that will lower insulin secretion is (B) diazoxide. Diazoxide binds to the sulfonylurea (SUR) subunit of the K-ATP channels and promote opening of the channel, which leads to K influx → hyperpolarization → inhibit insulin release (glyburide also binds the SUR subunit, but they do the opposite → they close the channel!). The net effect is decreased insulin release, which addresses the primary pathophysiological process in this patient. However, diazoxide does come with side effects  such as hypernatremia and also has a slow onset (takes days to work). (A) is just wrong. (C) would be for suspected neonatal sepsis. (D) glucagon will stimulate the release of glucose into the bloodstream from stores and this has a fast onset, which is good, but in hyperinsulinemia, this could ultimately  just lead to more insulin secretion, hence doesn’t address the primary etiology. (E) is used to raise the seizure threshold and prevent CP. "
  },
  {
    id: 8,
    prompt: "A 24 y/o mother gives birth to a healthy baby girl via cesarean section. The baby girl is Rh+, while the mother is Rh -. This is the mother’s first pregnancy. Blood loss was 750 mL. Given this information, which of the following is TRUE?",
    choices: [
      "Rhogam at GA 28wks is enough to prevent hemolytic anemia",
      "Rhogam IM for the mother post delivery",
      "Rhogam IM for the neonate post delivery",
      "Rhogam not necessary following  cesarean section",
      "Rhogam only if blood loss was >1000 mL in cesarean section",
    ],
    correct: "Rhogam IM for the mother post delivery",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding of Rh incompatibility between mother and fetus and the use of Rhogam to prevent hemolytic anemia. In this vignette, we are presented with a mother who is Rh- and a baby who is Rh+. The correct answer is (B) Rhogam IM for the mother post-delivery. Rhogam is an immunoglobulin that is used to prevent Rh sensitization in the mother. Rh sensitization occurs when Rh- mother is exposed to Rh+ fetal blood during pregnancy or delivery, leading to the production of antibodies against Rh antigen. This can lead to hemolytic disease of the fetus and newborn (HDFN) in subsequent Rh+ pregnancies. Rhogam works by binding to and clearing any Rh+ fetal cells that may have entered the mother’s circulation during delivery, thus preventing the mother’s immune system from producing antibodies against Rh antigen. In this case, Rhogam is needed since the mother is Rh- and the baby is Rh+. Rhogam should be given within 72 hours after delivery, regardless of the mode of delivery or the amount of fetal-maternal hemorrhage. This is because even a small amount of fetal-maternal hemorrhage can lead to Rh sensitization. Rhogam given at 28 weeks gestation is only used as a prophylactic measure to prevent Rh sensitization in cases where there is a potential for fetal-maternal hemorrhage, such as after amniocentesis or trauma. Rhogam is not necessary for the neonate post-delivery, as the neonate’s Rh status does not affect the mother’s sensitization. Finally, there is no minimum amount of blood loss required to administer Rhogam following cesarean section, and Rhogam should be administered regardless of the amount of blood loss."
  },
 {
    id: 9,
    prompt: "Qing, a 23-year old G2P1T1L1 woman is driven to the hospital by her partner after “her water broke”. She is at 39 weeks gestation and gives spontaneous vaginal delivery of a baby girl, Raven, without any complications. APGAR scores are 8 at one minute and 9 at five minutes. Around 15 minutes post-delivery, an ointment is placed on Raven’s eyes as prophylaxis against ophthalmia neonatorum. This ointment belongs to which medication class?",
    choices: [
      "Corticosteroid",
      "Antimuscarinic",
      "Fluoroquinolone",
      "Cephalosporin",
      "Macrolide",
    ],
    correct:
      "Macrolide",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question assesses understanding of ophthalmia neonatorum prophylaxis as well as the medication class of erythromycin. Typically, erythromycin ointment is applied to the eyes of all newborn babies within the first 2 hours of birth, regardless of delivery route. This is done as prophylaxis against Neisseria gonorrhoeae and Chlamydia trachomatis. Erythromycin is a macrolide (E). (WW Q)"
  },
 {
    id: 10,
    prompt: "Uma, a 3-day old baby girl is brought to the ER by his mother for an eye infection. The baby was delivered naturally at home, and her mother began noticing discharge coming from Uma’s right eye starting yesterday. On physical exam, both eyes are hyperpurulent, producing yellow-white discharge. Cultures are positive for Neisseria gonorrhoeae and negative for Chlamydia trachomatis. What should the next step in management be?",
    choices: [
      "IM ceftriaxone",
      "Oral erythromycin",
      "Oral ciprofloxacin",
      "Oral amoxicillin",
      "IV vancomycin",
    ],
    correct:
      "IM ceftriaxone",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question assesses understanding of Neisseria gonorrhoeae and ophthalmia neonatorum management. Neisseria gonorrhoeae is a gram negative, intracellular diplococcus that may cause ophthalmia neonatorum. The history suggests that Uma may not have received prophylaxis erythromycin ointment due to her natural birth. As a result, she is at higher risk for gonococcal and chlamydial infections of the eye. Gonococcal conjunctivitis is treated with IM ceftriaxone (A). Chlamydial conjunctivitis is treated with systemic erythromycin (B). The remaining antibiotic options are not indicated for typical ophthalmia neonatorum. Furthermore, ciprofloxacin (C) is contraindicated in children as it may lead to cartilage damage. (WW Q)"
  },
];
