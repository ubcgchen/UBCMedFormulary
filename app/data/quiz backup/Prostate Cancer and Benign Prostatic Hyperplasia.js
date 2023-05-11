/**
 * Questions for Prostate Cancer and Benign Prostatic Hyperplasia
 * @author Michael Gong, UBC VFMP 2025
 */

export const Prostate_Cancer_and_Benign_Prostatic_Hyperplasia = [
  {
    id: 1,
    prompt:
      "A 65 y/o male patient presents to the ER with sudden onset right flank pain that radiates down to his groin area. No fever or chills and vitals are stable. He denies any vomiting, but he does have diarrhea due to IBS. His PMHx is significant for T2DM and HTN (managed with metformin and ramipril, respectively). Blood tests show slightly elevated creatinine, normal WBC, normal Ca2+, normal uric acid. U/A shows low urine pH, but does NOT show pyuria or bacteria. An abdo plain film is unremarkable. A CT KUB shows a 5 mm stone in the right mid ureter near the right iliac artery. Given this presentation, which of the following is the BEST option to prevent further stone formation in this patient?",
    choices: [
      "Allopurinol",
      "Febuxostat",
      "Potassium citrate",
      "A or B",
      "A or B, and C",
    ],
    correct: "Potassium citrate",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      " This question requires understanding prophylactic management of uric acid stones. In this vignette we are presented with a patient with a renal colic given his clinical presentation. The presentation is not complicated and the stone is confirmed to be in the ureter with CT KUB. This patient’s stone is most likely a uric acid stone given the following risk factors: chronic diarrhea (loss of HCO3 via the GI tract causing acidic urine as the body compensates by excreting H+, the low pH will help precipitate the uric acid - confirmed with urine pH) and T2DM. His lab tests showing normal Ca2+ make the calcium stones less likely. The lack of bacteria makes the struvite stones less likely. ALthough his uric acid levels are normal, this does not rule out uric acid stones. A high uric acid level may indicate gout as the underlying etiology to his uric acid stones. Given this information, the correct management to prevent further stone formation is (C). Potassium citrate works in multiple ways to reduce stone formations (both uric acid and calcium stones). First, citrate is metabolized into HCO3 in the body, thus adding more base and causing alkalization of the urine, thus making uric acid more soluble. Second, citrate can bind calcium, which prevents it from forming calcium oxalate stones. (A) and (B) are both xanthine oxidase inhibitors used to manage hyperuricemia due to gout. However, this patient does not have gout, nor does he have hyperuricemia. It would be ill advised to give a drug like allopurinol to a patient without good reason as the risks will heavily outweigh any benefits as discussed in the inflammatory joint disease week questions.",
  },
  {
    id: 2,
    prompt:
      "A 72 y/o patient presents to the ER with delirium. His vitals are BP 160/100, HR 150, Temp 38.7degC, RR 20, O2sat 97%. The examination reveals dilated pupils nonreactive to light bilaterally, dry mucous membranes, skin is dry and hot, bowel sounds are absent, and abdomen reveals a large mass that rises from just above the pubic symphysis to the umbilicus. An ECG shows sinus tachycardia with narrow QRS and no conduction abnormalities. Collateral information provided by the family is a history of HTN, T2DM, urinary incontinence, and previous R MCA stroke. Given this presentation, what is the MOST likely iatrogenic cause?",
    choices: [
      "Fesoterodine",
      "Mirabegron",
      "Nortriptyline",
      "Oxybutynin",
      "Tamsulosin",
    ],
    correct: "Oxybutynin",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the side effects of anticholinergic medications and ANS pharmacology. In this vignette we are presented with a patient with the classic anticholinergic toxidrome, which will highlight most of the major side effects in one case and also understand the PSNS. Therefore, we can rule out (B) β3 agonist and (E) α1A blocker,, the other three choices will be discussed after the explanation of the toxidrome. The classic anticholinergic toxidrome can be summarized in this saying: Blind as a bat, Dry as a bone, Full as a flask, Hot as a hare, Mad as a hatter, Red as a beet. “Blind as a bat” refers to the dilated pupils (mydriasis) and cycloplegia that occur when M3 receptors are blocked, which will inhibit the ciliary muscles from contracting - paralysis and nonreactivity to light - and accommodation to occur, thus causing blindness. You can also think of this as blocking the PSNS, which leads to pupil constriction. “Dry as a bone” refers to the decreased dry mucosal membranes due to blocking of muscarinic receptors in the salivary glands (remember PSNS - rest and digest, if we block PSNS, we block actions that are related to digestion). This can also refer to the anhidrosis, the lack of sweating due to blocking of the muscarinic cholinergic receptors that mediate sweating (sweating isa actually a SNS response, but are cholinergic SNS nerves unlike the usual adrenergic ones.). The anhidrosis also leads to an increase in body temperature hence “Hot as a hare”. “Full as a flask” refers to urinary retention. Muscarinic receptors mediate the detrusor muscle contraction to allow for bladder emptying, if we block this, then the bladder will not contract and start filling up. This will also explain the large mass in his abdomen, which is most likely an extremely full bladder. “Mad as hatter” refers to the CNS effects of blocking muscarinic receptors, which can lead to all sorts of symptoms such as altered mental status,  confusion, delirium, and sometimes seizures. “Red as a beet” refers to the cutaneous vasodilation that occurs, possibly due to the lack of sweating, the body responds by dilating these vessels in hopes of lowering temperature. The absent bowel sounds are another clue to anticholinergic toxicity, as digestion is a PSNS response, the movement of items in the GI tract are due to muscles with muscarinic receptors. Blocking the receptors will paralyze the GI tract. Finally sinus tachycardia on the ECG will tell us that this is truly an anticholinergic toxidrome and not a mixed presentation of anticholinergic + Na+ channel blockade (hence rule out TCA toxicity (C), which also has anticholinergic toxicity signs). The SA and AV node contains M2 receptors that are innervated by the PSNS vagus nerve. Normally, the vagus nerve slows down the heart via these receptors, but by blocking these receptors, you will prevent the PSNS from slowing down the heart, thus causing sinus tachycardia. If there was a Na+ channel blocking component, you’d expect some conduction blockade leading to a wide QRS (Na+ channels drive phase 0 of the cardiac cycle, in which blockade will cause a decrease in slope, hence widening of QRS). The most likely drug in this case to cause this presentation is (D) because in this case we have a patient presenting with CNS signs of anticholinergic toxicity. Oxybutynin more readily crosses the blood brain barrier, while (A), an anticholinergic, has decreased CNS penetration, thus is less likely to cause the “Mad as a hatter” signs. However, (A) still has the potential to cause CNS symptoms (so yes both drugs can cause this presentation), but in this case the MOST likely culprit would be oxybutynin. In short, the main point of this vignette is to highlight the anticholinergic side effects using the classic toxidrome. The difference in blood brain barrier penetrance is a minor detail that isn’t as important, but just a reminder to consider where the drug can travel to. ",
  },
  {
    id: 3,
    prompt:
      "A 70 y/o male presents to his urologist after a 1 yr history of increasing urgency, urge incontinence, frequency of urination, and nocturia. He describes having to use the bathroom about 10x per day and having to void twice at night. He denies any changes in intermittency, weak stream, burning, pain, hematuria, neurological sx. His RoS is positive for long standing constipation. He has a PMHx of HTN and T2DM, both are poorly controlled. His physical exam is unremarkable besides uncontrolled HTN. His BP 180/115, HR 60, RR 16. Which of the following classes of medication is CONTRAINDICATED in this presentation?",
    choices: [
      "Botox",
      "β3 agonist",
      "β blockers",
      "M2, M3 antagonists",
      "Tricyclic antidepressants",
    ],
    correct: "β3 agonist",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the contraindications to medications used in urine incontinence. In this vignette we are presented with a patient with an overactive bladder (OAB) based on the history. He denies signs of obstruction that we’d expect with BPH or signs of UTIs. The main medications used for OAB are antimuscarinics, β3 agonists, and botox injections. The medication that is clearly contraindicated in this case is (B) β3 agonists (mirabegron) given his high uncontrolled BP >180/>110. Although β3 agonists are selective for β3 receptors, there will be some cross activity with β1 (and β2) receptors leading to increased HR, contractility, hence BP. This also explains the side effect profile of these medications like tachycardia, palpitations, tremor, insomnia, or basically anything that sounds like SNS overactivity. β3 agonists work in OAB by relaxing the bladder muscles, thus allowing for increased capacity to store urine, which should decrease any urine incontinence. This however increases the risks of UTI as you store more urine and increased stasis, leading to more opportunities for bacteria colonization. Given that it works in a different MoA than anticholinergics, these drugs can be used together to treat severe OAB if needed, or used in lieu of anticholinergics if the side effects of those are not tolerated. (A) is contraindicated in breastfeeding, ALS, aminoglycoside use (gentamicin), myasthenia gravis, Eaton-Lambert, pregnancy. (D) anticholinergics are contraindicated in acute angle glaucoma, myasthenia gravis, tachyarrhythmia, gastric outlet/bowel obstruction. In this patient he has long standing constipation, which could be a concern for anticholinergic use since it would make his constipation worse, but it is not an absolute contraindication.",
  },
  {
    id: 4,
    prompt:
      "A 65 y/o female presents to her urologist with increasing urgency, urge incontinence, frequency of urination, and nocturia. She describes having to use the bathroom about 10x per day and having to void twice at night. She denies any changes in intermittency, weak stream, burning, pain, hematuria, neurological sx. She has tried lifestyle modifications and oral medications, but failed to improve her sx or she could not tolerate the side effects. She opts for a more invasive procedure. Which of the following is TRUE with regards to the procedure?",
    choices: [
      "Cleaves SNARE proteins, resulting in decreased vesicular docking and subsequent release of ACh to activate Nicotinic ACh Receptors on detrusor muscle",
      "Decreased risk of UTIs",
      "Permanent relaxation of detrusor muscles",
      "Requires vaginal estrogen suppositories",
      "Urinary catheter for a week after procedure",
    ],
    correct: "Urinary catheter for a week after procedure",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding botox for overactive bladder. In this vignette we are presented with a patient with OAB given her history. She has failed many of the oral medications/did not tolerate them. Therefore, she is opting for the more invasive pharmacotherapy option with botulinum toxin. The only TRUE statement is (E). Following this procedure the botox will paralyze the muscles of the bladder, thus preventing the contraction. Urinary catheter will be required to help her void for at least a week after the procedure. Botox works by cleaving the SNARE proteins that are required for vesicular docking of vesicles containing ACh. Normally, the vesicles will fuse with the neuronal membrane to release ACh into the neuromuscular junction where the ACh will then bind to ACh receptors on the muscle to cause depolarization and contraction. Classically, this will be nicotinic ACh receptors on skeletal muscle. However, detrusor muscle is a smooth muscle under autonomic control, not somatic control, so the ACh receptors will be muscarinic, hence (A) is false. Like mirabegron, inhibiting the contraction/increasing the relaxation of the bladder, leads to more stasis and an increased risk of UTIs, hence (B) is false. (C) is false because, although the cleaving of SNARE proteins is irreversible, the cells will need to produce the SNARE proteins again and thus the effects will wear off. This is why botox injections are done every 6-9 mos and the effects last up to a yr. (D) is false as that is not a requirement after this procedure. Estrogen suppositories do have a role in OAB if there is evidence of low estrogen as playing a role in the symptoms.",
  },
  {
    id: 5,
    prompt:
      "A 65 y/o male presents to his GP after a 8 mo history of increasing difficulty with urination. He describes having to take a long time to pee, slowed urine stream, and incomplete voiding, which causes him to use the toilet more often and sometimes with little warning. He denies any pain, burning, blood or recent sexual activity. He denies any previous urological interventions of his urogenital system. He is a never-smoker. A DRE reveals a uniformly enlarged and firm bilobed prostate with a clearly defined median sulcus. The rest of the urogenital and abdo exam is unremarkable. A urine dipstick is negative for nitrites, blood, leukocyte esterase and a urine sample is sent for further analysis. A urine sx inventory is done and he is unhappy with what is going on. A PSA is pending. Given this presentation, which of the following would you start the patient on?",
    choices: [
      "Finasteride",
      "Mirabegron",
      "Oxybutynin",
      "Tamsulosin",
      "Terazosin",
    ],
    correct: "Tamsulosin",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the management of BPH. In this vignette we are presented with a patient with an obstructive pattern of LUTS. We have some relevant pertinent negatives that make more Red Flag diagnoses less likely. The DRE reveals an enlarged prostate that is firm, which we aren’t too concerned about. BPH usually presents with smooth and firm, while prostate Ca presents with hard and lumpy, but this is obviously not diagnostic. The symptoms have been impacting him. Urine dipstick further makes some other causes less likely. Given this we are most likely thinking of BPH, therefore we would start him on (D). Tamsulosin is a selective α1A antagonist, which is the predominant  α1 receptor of the urogenital system. This allows it to prevent the smooth muscle contraction of the urethral wall and internal sphincter contraction, thereby reducing urethral resistance The selectivity also will decrease the cardiovascular side effects of hypotension, OH, dizziness, compared to nonselective alpha blockers like (E), but at the cost of more urogenital side effects such as retrograde ejaculation. It will also have a faster onset of action than (A) 5α reductase inhibitors, as these work by shrinking the size of the prostate, which takes at least 3 mo for benefits to be seen. (C) is an anticholinergic and would not be used in BPH, in fact it could increase his risk of UTIs and acute urinary retention that can lead to a post-renal AKI and hydronephrosis. (B) does the same as (C)  except it is a β3 agonist.",
  },
  {
    id: 6,
    prompt:
      "A 65 y/o male with BPH presents to his urologist for a followup on his symptoms. Overall he describes minimal improvement after starting on the medication 2 mos ago. A prostate size measurement reveals a prostate size of approx. 55g. Given this the urologist elects to add another medication to his management. Which of the following is NOT an expected effect of the new medication that the urologist will add to this patient’s management?",
    choices: [
      "Decreased erectile dysfunction",
      "Decrease PSA",
      "Increased breast size",
      "Increased hair growth",
      "Increased urine flow rate",
    ],
    correct: "Decreased erectile dysfunction",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the effects of 5α reductase inhibitors. In this vignette we are presented with a patient with BPH who is already on an alpha blocker with little improvement to his sx. He has a prostate measurement that shows a very large prostate >40g. Thus, the addition of another drug to his management would most definitely be a  5α reductase inhibitor such as finasteride (Type II selective) or dutasteride (nonselective). The only effect that is NOT expected is (A), we would expect increased erectile dysfunction/sexual dysfunction. This is because 5α reductase inhibitors will inhibit the conversion of testosterone to DHT. DHT is a more potent and longer lasting androgen than T. By decreasing DHT levels we essentially are decreasing androgeneric effects in the body, so sexual functioning will be negatively impacted (think of this as a low testosterone state). This is helpful in BPH as this will help decrease the size of the prostate since DHT promotes cell proliferation, hence increased urine flow rate (E). This will then also lead to decreased PSA (B), hence if a patient is on a  5α reductase inhibitor and the PSA doesn’t drop or starts to rise, that should be a red flag for prostate Ca. The decrease in DHT explains the side effects such as gynecomastia (C), and increased hair growth (D). Nonselective inhibitors like dutasteride have been used to help treat hair loss. Type II 5α reductase is found in the prostate, while Type I 5α reductase is found in the skin and scalp.",
  },
  {
    id: 7,
    prompt:
      "Which of the following correctly describes why tamsulosin is preferred over terazosin in treating BPH?",
    choices: [
      "Tamsulosin is more selective for α1A receptors, thus leading to less orthostatic hypotension",
      "Tamsulosin is more selective for α1A receptors, thus leading to less retrograde ejaculation",
      "Tamsulosin does not cross the blood brain barrier, thus it has less CNS side effects than terazosin",
      "A and C",
      "B and C",
    ],
    correct:
      "Tamsulosin is more selective for α1A receptors, thus leading to less orthostatic hypotension",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the pharmacology of α adrenergic receptor antagonists. The correct answer is (A). The selectivity for α1A receptors allows for more targeted effects on the urogenital system and less systemic cardiovascular effects like orthostatic hypotension and syncope. Other α1 receptors are found on the vasculature, and they cause vasoconstriction. Vasoconstriction is required to help return blood to the heart (venous constriction) and there needs to be adequate vascular tone to help push the blood to the brain. If these are blocked, then you have decreased venous return (less preload), and not enough pressure to push the blood to the brain, thus causing orthostatic hypotension, syncope symptoms. Since it is selective for α1A receptors, then there’s more urogenital symptoms like retrograde ejaculation. Other side effects like flushing are due to inhibition of cutaneous vasoconstriction. Rhinitis due to inhibition of the vasoconstriction in the mucosal membranes in the nasal passage, thus there is dilation and leakage of fluid, which will cause blockage in the nasal pathway and cause symptoms like rhinitis. THis is why many decongestants are α1 agonists (pseudoephedrine and phenylephrine) because they activate α1 receptors to allow for the vasoconstriction and decreased leakage of fluid in the mucosal membrane that causes more resistance in the nasal airways.",
  },
  {
    id: 8,
    prompt:
      "A 69 y/o male presents to his GP with erectile dysfunction. He has a PMHx (and meds) significant for prostate Ca (treated with radical prostatectomy), dyslipidemia (rosuvastatin), previous STEMI (stents, metoprolol, ramipril) and HTN. He is asking for the “blue pill” (sildenafil), but he is wondering if he is going to be “pitching a tent” (an erection) at inappropriate times. He does not use nitroglycerin or any nitrospray. You answer his question with:",
    choices: [
      "Yes, sildenafil will cause an erection with or without arousal, so you will have an erection whenever",
      "Yes sildenafil has a long half life, so you will have an erection for a longer time",
      "No, sildenafil only works if you are sexually aroused, so you shouldn’t achieve an erection when not aroused",
      "No, sildenafil has a short half life, so you will only achieve an erection shortly after ingestion for however long intercourse takes",
      "None of the above",
    ],
    correct:
      "No, sildenafil only works if you are sexually aroused, so you shouldn’t achieve an erection when not aroused",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the pharmacology of PDE5 inhibitors (PDE5i). In this vignette we are asked whether or not taking a PDE5i (sildenafil, tadalafil) will lead to inappropriate erections. First we need to understand how PDE5is work in ED. PDE5is work by inhibiting the breakdown of cGMP (mediated by PDE5). cGMP promotes smooth muscle relaxation by decreasing intracellular Ca2+, this allows vasodilation and pooling of blood in the corpora cavernosa, resulting in an erection. cGMP is generated by guanylate cyclase, which is activated by nitric oxide (NO). NO is released from PSNS originating non-adrenergic non-cholinergic (NANC) nerves after receiving a signal from the CNS. What this means is that PDE5 POTENTIATES the effects of NO (it does NOT increase NO levels), they do not work unless there is signal that has caused the release of NO. So then this means that for PDE5i to facilitate an erection, there needs to be a CNS stimulus to cause an erection to occur, such as being aroused. No arousal, no erection. Therefore, (C) is the correct answer, he should only have an erection if he is sexually aroused. The half life of sildenafil is about 4 hrs, this isn’t an important aspect in terms of achieving erection, and remember even if there is sildenafil in the system it doesn’t mean an erection will just occur since there needs to be that initial reason for NO to be released and then be potentiated by a PDE5i. Tadalafil has a half life of 17.5 hrs. All PDE5i are contraindicated in patients using organic nitrates for conditions like angina, as the PDE5i will potentiate the NO released by these nitrates, thus causing massive hypotension.",
  },
  {
    id: 9,
    prompt:
      "A 70 y/o male recently learns about his TRUS+prostate biopsy results. The results report a Gleason grade group 5 (Gleason 4+5) prostate adenocarcinoma. He is sent for a bone scan, which reveals numerous bone mets. Given this information, which of the following treatment options would be viable?",
    choices: [
      "Bicalutamide alone",
      "Goserelin alone",
      "Goserelin + Bicalutamide, followed by goserelin alone",
      "Leuprolide alone",
      "Leuprolide + Bicalutamide, followed by bicalutamide alone",
    ],
    correct: "Goserelin + Bicalutamide, followed by goserelin alone",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the treatment of advanced prostate Ca. In this vignette we are presented with a patient with advanced prostate Ca given his Gleason score and the evidence of bone mets. This makes androgen deprivation therapy an option in his treatment. This is usually done with a LHRH agonist in combination with an androgen receptor blocker for a few wks at the start. Therefore, the correct answer is (C). Goserelin is a LHRH agonist (other ex: leuprolide) and bicalutamide is an androgen receptor (AR) antagonist (other ex: flutamide, nilutamide (-lutamide)). It seems counterintuitive to use a LHRH agonist, as this would cause LH release, which should then cause more T, when we should be decreasing T since that is a driving force behind prostate Ca. However, if we recall from endocrinology, LHRH is released in a pulsatile manner, if we add exogenous LHRH and cause continuous stimulation of LHRH receptors on the ant. pituitary then we actually cause downregulation of the receptors. The end result is decreased LH release in the long run. In the short term, such as initiation of therapy, there will be a T surge from the initial increased LH release, thus we counter this with an AR antagonist like bicalutamide. The side effects of ADT are as you would expect with low T states (low libido, gynecomastia, OP, etc..), but also metabolic syndromes.",
  },
  {
    id: 10,
    prompt:
      "On a hot summer day, a 39 y/o male patient presents to the ER with sudden onset left flank pain that radiates down to his groin area. No fever or chills and vitals are stable. His history reveals hematuria and denies any vomiting. He also states that the heat has been making him sweat a lot. Blood tests show slightly elevated creatinine and normal WBC, U/A does not show pyuria or bacteria. A plain film shows a radiopaque density in his left ureter area. He is sent to CT, which shows a 5 mm stone in the left mid ureter near the left iliac artery. The patient opts for conservative therapy to pass the stone, which is mainly treated with hydration, pain control, and ____ ?",
    choices: [
      "Finasteride",
      "Ibuprofen",
      "Mirabegron",
      "Oxybutynin",
      "Tamsulosin",
    ],
    correct: "Tamsulosin",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding conservative management of urinary system colics. In this vignette we are presented with a patient with a suspected colic given his presentation, which is confirmed after imaging that localizes the colic to the mid ureter. He does not show any signs that would rule out conservative management (intractable vomiting, renal impairment, or infection to name a few). In this case we would hydrate, pain control, and use (E). Tamsulosin is an α1 antagonist, with increased selectivity for the 1A/1D subtype that is mainly expressed in the urinary system (over the 1B subtype found on blood vessels). This will lead to smooth muscle relaxation in the bladder neck, prostate, ureter, and urethra, thus allowing for decreased resistance in the plumbing to facilitate passage of a stone. (A) is a 5α reductase inhibitor, which helps decrease the size of the prostate by decreasing the conversion of T to DHT (DHT stimulates prostate growth), but it takes 3 mos to have an effect and is not indicated in the passage of a stone. (B) is a NSAID, which would be used as pain control. (C) is a β3 agonist, which helps relax the bladder to increase filling, which is not indicated in the passage of a stone. (D) is an anticholinergic, blocking M3 receptors in the bladder to help relax the bladder as well to increase filling, which again is not helpful in the passage of a stone.",
  },
  {
    id: 11,
    prompt:
      "A 65 y/o male presents to the ER with left flank pain and hematuria. The history further reveals 3 months of unintentional weight loss. A CT shows a 10 cm mass on the periphery of the renal parenchyma of the left kidney. Blood work comes back showing elevated Ca2+, increased AlkPhos, and abnormal liver enzymes. A CT with contrast is done and the mass shows increased uptake of the contrast with a heterogeneous appearance. A biopsy of the renal mass shows clear cells on histology. Oncology and urology are consulted. The most likely diagnosis in this case could be managed with which of the following?",
    choices: [
      "Anti-VEGF mAb ",
      "mTOR inhibitor (-limus)",
      "VEGFR tyrosine kinase inhibitor (-inib)",
      "All of the above are possible",
      "Surgical management is curative (partial nephrectomy)",
    ],
    correct: "All of the above are possible",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires knowing the indications of chemotherapy and what is used in renal cell carcinoma. In this vignette we are presented with a patient with 2 of the 3 in the triad for a renal mass. The workup shows a mass on the left kidney periphery of the renal parenchyma, and increased contrast uptake, we are suspecting a malignant mass such as renal cell carcinoma. The mass being >7cm makes it not a surgical candidate (rule out (E)). We also have possible metastasis to the bones given the elevated Ca2+ and AlkPhos, which further suggests medical management. The biopsy confirms clear cell renal cell carcinoma. (D) is the correct answer, all three medication classes are used in metastatic/late stage systemic therapy for renal cell carcinoma.",
  },
  {
    id: 12,
    prompt:
      "A 65 y/o patient with painless microscopic hematuria is referred to urology. His PMHx is significant for HTN and COPD. He has a 50 pack year smoking history, but he quit 5 years ago after his son told him the risks of smoking. He denies any other STI, UTI or voiding related symptoms. An urgent cystoscopy is ordered and the urology identifies 2 small growths (<2 cm) in his bladder that have a caviar-like appearance. During this procedure the urologist elects to resect these growths. Which of the following could be administered during this initial procedure to decrease recurrence of the growths in the bladder?",
    choices: [
      "BCG IM deltoid",
      "Gentabicine IV",
      "Mitomycin intravesical",
      "Radical cystectomy is the best option given the 1+ growths ",
      "Pathology report required before deciding if further intervention is needed",
    ],
    correct: "Mitomycin intravesical",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the medical treatments in low grade bladder Ca. In this vignette we are presented with a patient with painless hematuria and risk factors of bladder Ca. Cystoscopy reveals growths in his bladder that look like urothelial carcinomas. During the cystoscopy the urologist performs a TURBT. In this case, intravesical chemotherapy is an option as well, thus in this case the correct answer is (C). (B) can also be given intravesicular. IV is not a good option as this increases the unnecessary systemic exposure to a toxic chemotherapeutic, when we can deliver the chemo locally to the site of the malignancy. (A) is also an option, but this would be more efficacious if delivered straight to the bladder intravesically. (D) having 2 growths is not an indication for radical cystectomy. If there were many growths, then radical cystectomy is a viable option, but the main determinants of a radical cystectomy would be whether or not the growths have invaded into the detrusor muscle (anything above T1 (not inclusive). In this case, we do not have information about that, but it would not be unwise or contraindicated to provide an initial intravesical dose of chemo and then have the patient come back for follow up after the pathology report for a repeat cystoscopy for a second TURBT.",
  },
  {
    id: 13,
    prompt:
      "A 67 y/o male patient presents to the ER with increasing SoB, fever, fatigue, and weight loss. His PMHx is significant for HTN, T2DM, and urothelial carcinoma (T1 high grade) diagnosed 2 yrs ago that is followed closely by his urologist. He routinely undergoes intravesical treatment with the latest being 1 mo ago. He has 40 pack yrs and drinks EtOH regularly. A CXR reveals numerous fine granular opacities scattered throughout the lungs bilaterally. He is admitted after a CBC reveals neutropenia and is started on empiric ABX after cultures are drawn. Respirology is consulted and a bronchoscopy is done. Sputum is sent for gram stain, acid fast, and culture. Acid-fast comes back positive. Which of the following intravesical treatment options is MOST likely to lead to this presentation?",
    choices: [
      "BCG",
      "Botox",
      "Gentabicine",
      "Mitomycin C",
      "Not possible from an intravesical delivery",
    ],
    correct: "BCG",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding a rare adverse effect of BCG. In this vignette we are presented with a patient with a fever of unknown origin and possibly of respiratory origin. He has a PMHx of bladder Ca treated with an intravesical intervention. His CXR has a miliary appearance. Sputum acid-fast comes back positive. The most likely iatrogenic cause is BCG (A). This is a very rare complication of intravesical BCG treatment. This can happen because BCG is a live attenuated TB vaccine, in rare cases it can reactivate and spread hematogenously throughout the body (hence the miliary TB appearance on CXR) causing a TB-like presentation. This can deposit TB in areas such as the spine as well, which is Pott’s disease. BCG can also cause a reactive arthritis picture. There are also local reactions like cystitis. In bladder Ca, it is thought that the BCG vaccine helps stimulate the immune system in the bladder like T cells, NK cells, etc.. and the production of markers that can help kill off the tumor cells. This is basically immunotherapy. This is fyi: This type of therapy makes sense because according to the log-kill hypothesis, chemo drugs can only kill a fraction of the tumor cell, but can never completely eradicate the tumor cells by themselves. The last tumor cell needs to be cleared by the patient’s own immune system, hence activating the immune system is important in cancer treatment.",
  },
  {
    id: 14,
    prompt:
      "You are at an urology clinic and the waiting room is filled with many patientsTo streamline the process, your preceptor asks you to review the charts and tell her the patients with contraindications to oxybutynin. From the list you select?",
    choices: [
      "Harry, 57 y/o with severe postural hypotension",
      "Liam, 56 y/o with Eaton-Lambert syndrome",
      "Louis, 57 y/o with open angle glaucoma",
      "Niall,  57 y/o with a history of sinus tachycardia with aberrancy (LBBB)",
      "None of the above",
    ],
    correct:
      "Niall,  57 y/o with a history of sinus tachycardia with aberrancy (LBBB)",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the contraindications to anticholinergic use. The patient with the contraindication to oxybutynin is (D). This is because anticholinergics can block the M2 receptors on the SA and AV nodes, hence blocking the PSNS effects on the heart such as decreasing HR. In patients with tachyarrhythmias like (D), then an anticholinergic may worsen it. (A) would be someone you’d avoid alpha blockers in (see other q for explanation). (B) would be a patient you’d avoid botox in. Eaton-Lambert is a disease that affects neuromuscular junctions like myasthenia gravis (MG), except in E-L, you have auto-Ab against the calcium channels on the presynaptic terminal (not the nicotinic ACh receptors), thus causing decreased release of ACh into the NMJ (the muscle weakness improves with use, while in MG it is the opposite). Hence logically, anything that further decreases the release of ACh like botox will make it worse. Botox is contraindicated in many NMJ related disorders like E-L and MG. (C) is not contraindicated in anticholinergic use, however, if he had closed angle glaucoma, then that would be a contraindication. This is because anticholinergics will paralyze the ciliary muscles (relaxation) thus dilated pupils. This will actually prevent drainage of the aqueous humor, which will elevate the intraocular pressure substantially - this is an optho emergency.",
  },
  {
    id: 15,
    prompt:
      "Clark is a 58 year old man presenting to his family physician with concerns regarding his urination. After a thorough history and physical exam, the doctor prescribes him oxybutynin. This alleviates his symptoms, but he experiences some side effects such as dry mouth and blurry vision. Which presentation most likely resulted in the physician’s initial decision to prescribe oxybutynin?",
    choices: [
      "Clark had a slow and weak urine stream.",
      "Clark had a fever accompanied by chills",
      "Clark had an intermittent urinary stream",
      "Clark had frequent urinary urgency",
      "Clark had consumed large volumes of water on a regular basis",
    ],
    correct: "Clark had frequent urinary urgency",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question assesses understanding of the classification and management of urinary incontinence. Oxybutynin is an M3 antagonist used to treat overactive bladder. The anticholinergic side effects of xerostomia (“dry as a bone”) and mydriasis (“blind as a bat”) are clues that oxybutynin is an anticholinergic medication. Through M3 inhibition, oxybutynin treats overactive bladder by preventing the detrusor from contracting. Overactive bladder presents with irritative lower urinary tract symptoms, with frequency and urgency being common symptoms. As such, (D) is the answer. Choices (A) and (C) are obstructive symptoms consistent with urinary retention, and would not be the presentation that most likely resulted in the physician’s initial decision to prescribe oxybutynin. (B) would indicate an infection such as a UTI, and would necessitate further investigations. (E) would undergo investigations for diabetes insipidus such as fluid restriction. (WW Q)",
  },
];
