/**
 * Questions for Osteoporosis week
 * @author Michael Gong, UBC VFMP 2025
 */

export const osteoporosis = [
  {
    id: 1,
    prompt:
      "A 72 y/o female patient presents to the ER with a fracture of her left hip after tripping over her granddaughter at Christmas dinner. The orthopedic surgeon performs a total hip replacement without complications. The history reveals that the patient had a previous MI 1 yr ago, HTN, and dyslipidemia. She does not have extended pharmacare coverage, deathly afraid of needles, went through menopause 22 yrs ago, no personal or family history of breast cancer or RA, does not smoke or drink alcohol (except for Eggnog at Christmas dinner), no previous DXA scan, and is currently taking ASA, rosuvastatin, clopidogrel, and ramipril. She currently lives alone. Given this info and assuming no secondary cause, which of the following pharmacological interventions would be the most likely option for her?",
    choices: [
      "Alendronate",
      "Estrogen replacement",
      "Romosozumab",
      "Zoledronate",
      "None, pharmacological intervention not indicated until BMD is determined",
    ],
    correct: "Alendronate",
    tags: ["PD", "hard", "Endocrinology", "side effects", "PK"],
    explain:
      "This question requires understanding the properties of different OP medications and the indications. In this vignette, we are presented with a patient with a fragility fracture, hence pharmacological intervention is indicated even before a BMD (rule out (E)). It’s been 22 yrs since menopause, hence (B) should not be used. HRT is recommended within 10 yrs of menopause w/ menopause symptoms and very low risk of CV disease (anyways she is high risk). Given her CV risk factors, her fear of needles, and lack of extended pharmacare  (C) would not be indicated since RMab has been shown to increase CV events, is delivered SC monthly, and expensive! We are left with the two bisphosphonates. (D) Z-dronate is only delivered IV (fear of needles), while (A) A-dronate is delivered PO. Therefore, (A) would be the best option.",
  },
  {
    id: 2,
    prompt:
      "A 69 y/o male patient with HTN, dyslipidemia, GERD, T2DM, and metastatic prostate cancer presents to the ER with pain in his groin and thigh after slipping while shoveling snow. On X-ray he is found to have fractures in his left femoral neck. You look over his medication list, which shows: rosuvastatin, empagliflozin (SGLT2i), metformin, losartan, flutamide (nonsteroidal antiandrogen - AR antagonist), and rabeprazole. From the list, which of the medications would you have expected to have contributed the MOST to his fragility fracture?",
    choices: [
      "Empagliflozin",
      "Flutamide",
      "Losartan",
      "Rosuvastatin",
      "Rabeprazole",
    ],
    correct: "Flutamide",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the iatrogenic causes of OP. In this vignette, we are presented with a male patient with a fragility fracture and an extensive medical history and meds list. To answer this question we need to think of the mechanisms of the drugs. We are told that flutamide (B) is an androgen antagonist (FYI - MoA: androgen receptor antagonist and inhibition of CYP17 - enzyme in the adrenal glands for androgen production) used for hormonal treatment of metastatic prostate CA. Using our knowledge of bone physiology, we know that androgens promote bone formation and decrease bone resorption. Therefore, if we inhibit androgens, we’d expect imbalance leading to OP, therefore (B) is the correct answer. (A) has not been shown to cause OP (however canagliflozin has the potential to increase fractures), (C) ARBs have not been shown to affect BMD. (D) statins have been shown to increase BMD. (E) is a PPI and chronic use has been suggested to decrease BMD due to decreased calcium absorption, however in this case it is NOT the most significant mechanism leading to loss of BMD and fracture.",
  },
  {
    id: 3,
    prompt:
      "A 54 y/o female patient presents to her GP with back pain. The GP orders a lateral lumbar X-ray, and it is discovered that she has a L3 vertebral fracture. Her past medical history is significant for HTN, Barrett’s esophagus secondary to a long history of GERD, AFib, a stroke 1 yr ago, and a MI 3 yrs ago. She only recently started menopause (~1 yr ago). The GP starts a workup on secondary causes and initiates pharmacological intervention. She is currently on apixaban, propranolol, aspirin, and rabeprazole. Given the patient’s history, which of the following interventions would be the most viable option for her?",
    choices: [
      "Alendronate",
      "Denosumab",
      "HRT w/ estrogen",
      "Romosozumab",
      "None, pharmacological intervention not indicated until BMD is determined",
    ],
    correct: "Denosumab",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the different pharmacological properties of drugs used in OP. In this vignette, we are presented with a patient with a vertebral fracture, which is an indication to start pharmacological intervention prior to BMD. Her PMHx is extensive and will guide us with what medication to use. Given her history of Barrett’s esophagus and GERD, we should avoid bisphosphonates like (A) because they lead to gastritis, erosive esophagitis, and ulcers. Despite, being 1 yr since start of menopause, we can also rule out (C) and (D) given her CV history. Moreover, we probably would not want to go with (D) immediately without more information on her BMD. Hence, the correct answer is (B), which does not have the same GI or CV adverse effects like the other choices.",
  },
  {
    id: 4,
    prompt:
      "A 80 y/o female patient is recently started on once weekly alendronate PO. What would you advise her when taking the medication?",
    choices: [
      "Early in the morning, at least 30 mins before any food",
      "Remain upright after ingestion for 30-60mins",
      "Take on a full stomach to dilute the acid",
      "All except for A",
      "All except for C",
    ],
    correct: "All except for C",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding how to deliver oral bisphosphonates to minimize the GI side effects. The correct answer is (E). Oral BPs can cause erosive esophagitis, gastritis, and ulcers. Hence the medications need to be taken before any meal (A), and the patient should not lie down for 30-60 mins after ingestion (B), to minimize acid entering the esophagus. (C) is wrong, as this would cause more gastric irritation with increased acid-mediated damage.",
  },
  {
    id: 5,
    prompt:
      "A 56 y/o female patient with a 24 yr history of ulcerative colitis presents to the ER with severe abdominal pain. The on-call gastroenterologist determines it is an acute IBD attack and starts her on methylprednisolone IV. Which of the following is TRUE regarding the effect the medication has on her bone physiology?",
    choices: [
      "Decreased osteoclast recruitment and differentiation",
      "Decreased osteocyte and osteoblast apoptosis",
      "Decreased GI calcium absorption",
      "Increased LH and FSH leading to negative feedback inhibition of estrogen/testosterone",
      "Increased tubular reabsorption of calcium",
    ],
    correct: "Decreased GI calcium absorption",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the effects of glucocorticoids on bone physiology. In this vignette, we are presented with a patient undergoing systemic IV glucocorticoid therapy for her IBD flare up. Here we need to think about the effects of glucocorticoids on bone physiology. (A) is false because GCs will increase osteoclast recruitment and differentiation, hence increased bone resorption. (B) is false because GCs will increase osteocyte and osteoblast apoptosis, hence decreased bone formation. (D) is false because there would be decreased LH and FSH because GCs inhibit LH/FSH at the level of the hypothalamus, ant. pituitary, and end organ. (E) is false because GCs will increase calcium excretion at the kidneys by inhibiting tubular reabsorption. (C) is the true answer, GCs inhibit vitamin D, which leads to decreased GI absorption of calcium. This decrease in calcium and loss of calcium through the kidneys also results in secondary hyperPTH, leading to more bone resorption.",
  },
  {
    id: 6,
    prompt:
      "A 68 y/o female patient with a history of osteoporosis presents with a mass on her right breast. Upon further investigation it is determined that she has invasive ductal carcinoma ER+, PR+, HER2-. Her oncologist initiates therapy with letrozole. Her past medical history includes a mild stroke 3 yrs ago, current smoker, and BMI =18. Which of the following pharmacological interventions would be the MOST beneficial in this patient?",
    choices: [
      "Denosumab",
      "Hormone replacement therapy",
      "Raloxifene",
      "Romosozumab",
    ],
    correct: "Denosumab",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the management of bone health in patients undergoing aromatase inhibitor therapy. In this vignette, we are presented with a patient with a hormone sensitive breast CA that is treated with letrozole, an aromatase inhibitor (AI; week 4 Breast Mass throwback). AI treatment will result in decreased estrogen, therefore increased bone resorption will occur, thus decreased BMD. Pharmacological intervention is indicated given her age (>65), current smoker, and BMI <20. (B) is wrong because we want to minimize estrogen given the breast CA. (C) seems correct because it is a SERM, however in this case the patient does have cardiovascular risk factors that could be worsened with SERMs. The same reasoning is why (D) would not be used. We are left with (A) as the best option for her bone health and overall health. (A) is also the current recommended option for AI therapy: exercise + calcium + vitamin D with either (A) or bisphosphonates.",
  },
  {
    id: 7,
    prompt:
      "A 63 y/o female patient with a history of osteoporosis and a strong family history for breast cancer. Her mother passed away from an invasive ductal carcinoma (ER+, PR+, HER2-). Which of the following pharmacological interventions would be beneficial in treating her osteoporosis and lowering her risk of breast cancer?",
    choices: [
      "Alendronate",
      "Denosumab",
      "Letrozole",
      "Raloxifene",
      "Teriparatide",
    ],
    correct: "Raloxifene",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the pharmacology of selective estrogen receptor modulators (SERMs). In this vignette we are presented with a patient with osteoporosis and a strong family history for  breast CA. The one drug that would be beneficial in protecting her from breast CA and maintaining bone health would be (D) a SERM. This is because SERMs such as raloxifene or tamoxifen can act as estrogen receptor antagonists in breast tissue, thereby conferring protection from breast CA, while acting as an agonist/partial agonist in bone tissue, thereby limiting bone resorption, thus allowing her to maintain her bone health.",
  },
  {
    id: 8,
    prompt:
      "A 62 y/o female patient with osteoporosis is found to have a rare mutation where she has decreased levels of RANK expression on her monocytes and osteoclasts. Which of the following medications would most likely be the least efficacious in this patient?",
    choices: [
      "Alendronate",
      "Denosumab",
      "Raloxifene",
      "Romosozumab",
      "Teriparatide",
    ],
    correct: "Denosumab",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of denosumab. Here we have a patient with osteoporosis, but has decreased RANK expression on her monocytes and osteoclasts. This suggests that the mechanism driving her osteoporosis is not mediated through the RANKL-RANK system because we’d expect less bone resorption, osteoclast activity with less RANK expression. Therefore, (B) is the correct answer because even if denosumab is able to bind RANKL to prevent binding with RANK, the driving force behind the patient’s osteoporosis is not being inhibited.",
  },
  {
    id: 9,
    prompt:
      "A 43 y/o male patient is admitted to the CTU. He presented to the ER with abdo pain, polyuria, constipation, and confusion. A calcium level returns 3.8 mmol/L. Which of the following is/are feasible pharmacological interventions?",
    choices: [
      "Calcitonin IV",
      "Furosemide IV",
      "Zoledronate IV",
      "All of the above",
      "All except for furosemide",
    ],
    correct: "All of the above",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the pharmacological mechanisms in treating hypercalcemia. In this vignette, we are presented with a patient with hypercalcemia. Hypercalcemia symptoms are nonspecific, however if a patient presents with both polyuria and constipation, then serum calcium should be checked. In this case, the patient’s calcium is severe (>3.5 mmol/L), and warrants treatment. (A) can be used to lower serum calcium because calcitonin will inhibit release of Ca release from bones, increase renal excretion, and inhibit GI absorption of calcium. (B) can be used because furosemide will inhibit NKCC2 in the loop of Henle, which leads to the loss of a positive luminal membrane, resulting in decreased divalent cation paracellular reabsorption (Ca2+ and Mg2+). Essentially, a diuretic will make you pee out more calcium. (C) can be used because suppression of bone resorption will also lead to a decrease in serum calcium. Therefore (D) is the correct answer. Treatment of hypercalcemia should also be done with IV saline hydration with the goal to pee out excess calcium and minimize calcium coming from the bones.",
  },
  {
    id: 10,
    prompt:
      "A 51 y/o female patient presents to her GP with complaints of hot flushes, poor sleep, and poor mood. Her last menstrual period was 1 yr ago. She has no known comorbidities. Her cardiovascular health is negative and her lipid panel comes back in the normal range. No history of breast cancer. Her fracture history includes breaking her left clavicle in a skiing accident when she was 20. A BMD study is done and her 10 yr hip fracture risk is 3.1%. Given the entire presentation, which of the following pharmacological interventions would you recommend?",
    choices: [
      "Denosumab",
      "Hormone replacement therapy",
      "Romosozumab",
      "Teriparatide",
      "Vitamin D + Calcium supplementation",
    ],
    correct: "Hormone replacement therapy",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding the indication for hormonal replacement therapy. In this vignette, we are presented with a patient experienceing symptoms of menopause (hot flushes, poor sleep, poor mood) and her last menstrual period was a yr ago. She has no cardiovascular risk factors or breast Ca. A BMD shows an increased risk of fracture. All of these are fairly suggestive that we could start (B). This will help manage her menopausal symptoms, she has no CV risk factors, and her last menstrual period was a yr ago. HRT is generally started when there are menopause symptoms, no CHD, stroke, TIA, or increased risk of stroke (In this case her CHAD65 score would be low risk) and within 10 yrs of the last menstrual period.",
  },
  {
    id: 11,
    prompt:
      "A 72 y/o female patient presents to the ER with sudden chest pain that radiates down her left arm. A chest pain workup is done and she is found to have a STEMI. She has a history of osteoporosis. She had menopause at 52 yr old. She was started on a new pharmacological intervention for her osteoporosis after a 2nd fragility fracture. Which of the following describes the mechanism of action of the drug that could have increased the risk of MI in this specific patient?",
    choices: [
      "Binds RANKL to prevent it from activating RANK, results in decreased bone resorption via  decreased osteoclast activation and osteoclast activity.",
      "Binds to hydroxyapatite on bone and is taken up by osteoclasts, results in apoptosis and decreased bone resorption",
      "Exogenous estrogen activating estrogen receptors, results in decreased bone resorption",
      "Inhibits sclerostin, results in increased bone formation and decreased bone resorption",
      "Parathyroid hormone analogue when acting intermittently results in increased bone formation via osteoblast activation",
    ],
    correct:
      "Inhibits sclerostin, results in increased bone formation and decreased bone resorption",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding the mechanism and adverse effect of sclerostin inhibitors. In this vignette, we are presented with a patient with a MI. Her PMHx includes OP with a new medication after a 2nd fragility fracture. This should suggest that she may have started on a non 1st line medication, potentially one with bone formation effects. Moreover, we are suggested that the drug may have increased her risk for the MI. Therefore, the correct answer is (D), romosozumab has been shown to increase the risk of CV complications such as MI and stroke. This is why Rmab should not be initiated in patients with a MI or stroke in the last year. Health Canada also only approves Rmab use for 1 yr max. (A) is denosumab. (B) is bisphosphonates (BPs may actually lower CV risk by decreasing arterial calcification). (C) is HRT and although it increases CV events, it would not be the drug used here given she is 20 yrs postmenopause. (E) is teriparatide.",
  },
  {
    id: 12,
    prompt:
      "A 67 y/o female patient with osteoporosis, HTN, and T2DM decides to stop receiving her denosumab injections. She has been on denosumab for the last 4 yrs and receives her injections at the appropriate 6mo intervals. She was previously on alendronate. She does not want to continue therapy because she “hasn’t broken a bone, so why am I taking these darn drugs”.  Assuming you can’t motivate her to continue pharmacological management of her osteoporosis, which of the following is she now at an increased risk for?",
    choices: [
      "Atypical subtrochanteric femoral fracture",
      "Breast cancer",
      "Eczema",
      "Multiple vertebral fractures",
      "Osteonecrosis of the jaw",
    ],
    correct: "Multiple vertebral fractures",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      " This question requires understanding the adverse effects of OP drugs. In this vignette, we are presented with a patient considering going on a drug holiday after years of denosumab injections. Discontinuing denosumab puts patients at risk of a rebound effect, which usually leads to multiple vertebral fracture (D). The suggested mechanism: sudden removal of an inhibitory force on osteoclasts will lead to a surge in osteoclastic activity and subsequent osteoblastic activity, which leads to an increase in unmineralized bone and unchanged empty lacunae numbers, thus compromising bone integrity. (A) is an adverse effect of long term continuous use of antiresorptive agents like BPs and potentially Dmab, but does not occur with discontinuation like in this case. (B) is an adverse effect of HRT, especially in hormone sensitive breast CA. (C) is a side effect of Dmab, but not due to discontinuation. (E) is an adverse effect associated with BPs and Dmab. Usually at higher doses when treating malignancy related bone disease and dental risk factors. Also not associated with discontinuation.",
  },
  {
    id: 13,
    prompt:
      "A 50 y/o male patient presents to his GP with a 2 month history of unrelenting bone pain that worsens at night. Three months ago he was diagnosed with osteoarthritis. On physical exam there is a slight varus deformity of his legs and are warm on palpation. A frontal pelvic x-ray reveals cortical thickening, accentuation of the trabecular pattern, increased bone density, and osteolytic lesions on his femur bilaterally. Blood tests also reveal the following: normal serum Ca2+, PO4, PTH, and elevated ALP (twice the normal range). Given this presentation, the most likely diagnosis can be treated with which of the following?",
    choices: [
      "Alendronate 40 mg daily for 6 months",
      "Alendronate 70 mg weekly for indefinite time",
      "Denosumab 60 mg q6months",
      "Denosumab 30 mg q6weeks",
      "None, pharmacological intervention not indicated until BMD is determined",
    ],
    correct: "Alendronate 40 mg daily for 6 months",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the pharmacological management of Paget’s disease. In this vignette we are presented with a patient with Paget’s. This is the most likely diagnosis given his HPI of unrelenting bone pain at night, OA (which is accelerated by Paget’s), Physical exam findings: warm (increased vascularity) and varus deformity, lab findings on x-ray (abnormal findings), and blood work showing elevated ALP (normal Ca, PO4, PTH). The treatment for Paget’s disease is bisphosphonates, therefore (C) and (D) are ruled out. Dosing for Paget’s is different from OP. Paget’s treatment is a larger dose for a shorter duration of time compared to OP (which can be indefinite chronic management), therefore (A) is the correct answer.",
  },
  {
    id: 14,
    prompt:
      "A 32 y/o patient presents with Chvostek's sign and Trousseau's sign, QT prolongation, and seizures. Investigations are ordered and it is found that the patient has a calcium level of 1.0 mmol/L.  In the management of this patient, which of the following should be checked and replaced as well?",
    choices: [
      "Magnesium",
      "Parathyroid hormone",
      "Potassium",
      "Vitamin D",
      "None, replace calcium only",
    ],
    correct: "Magnesium",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain:
      "This question requires understanding the treatment consideration of hypocalcemia. In this vignette we presented a patient with hypocalcemia given the clinical signs of Chvostek and Trousseau, QT prolongation, and seizures (acute symptomatic - warrants acute treatment!). This is confirmed with her lab results showing low serum Ca (≤ 1.9 mM - warrants acute treatment!). In this case we want to check his (A) Mg2+ levels first prior to calcium replacement. This is because if hypomagnesemia is present, there could be resistance to calcium regulation. Low magnesium will inhibit PTH secretion and cause resistance to PTH. Hence, there might be difficulty in Ca replacement in low Mg states. Replacement is done with magnesium sulfate.",
  },
  {
    id: 15,
    prompt:
      "A 82 y/o female patient presents to the ER following a fall at home when she was going up the stairs. This is her 3rd fall in a year. The x-ray shows a hip fracture and undergoes a total hip replacement the next day. She has an extensive medical history: HTN, dyslipidemia, T2DM, RA, GERD, and osteoporosis. After recovering from her surgery she is followed up by her GP. At the office her BP while lying down is 125/80 and HR 68, and her standing BP is 100/70 and HR 70. The GP reviews her medication list: propranolol, hydrochlorothiazide, ramipril, prednisone, rosuvastatin, metformin, rabeprazole, and denosumab. Which of the following medications would you MOST LIKELY consider removing given her history of falls?",
    choices: [
      "Hydrochlorothiazide",
      "Prednisone",
      "Propranolol",
      "Ramipril",
      "Rosuvastatin",
    ],
    correct: "Propranolol",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding polypharmacy, specifically antihypertensives and how they may lead to increased risk of fractures. In this vignette we are presented with a patient with a hip fracture and has fallen over 3 times this year alone. She is on a laundry list of medications (3 for HTN alone). Her blood pressure is well controlled for her age and probably does not warrant 3 medications. Her HR is normal, but does not rise much when she stands up (possible inhibition to baroreflex response). She does have orthostatic hypotension (30-20-10 rule; systolic and diastolic have dropped >20 and >10 mmHg, respectively). Together this suggests that we should remove whatever is worsening her orthostatic hypotension. In this case (C). β blockers are known to cause orthostatic hypotension and we tend to avoid them in elderly patients. This is because β blockers will block the baroreflex response when there is a drop in BP detected by the aortic and carotid sinuses. Normally, the drop is sensed and the body responds by increasing SNS outflow to the heart to activate β1 receptors in the heart to increase contractility and HR to increase cardiac output. However, these receptors are blocked, thus we won’t have the reflexive increase in HR and contractility to counteract the drop in BP, leading to lightheadedness due to decreased blood flow to the brain, and subsequently a fall. This inhibition is not seen with her ACEi or HCTZ, though they would also play a role with decreased blood volume (HCTZ) and vasodilatory effects (ACEi), just not the most direct cause.",
  },
];
