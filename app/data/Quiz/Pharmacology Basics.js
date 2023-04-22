export const pharmacologyBasics = [
  {
    id: 1,
    prompt:
      "A 60 y/o patient with benign prostate hyperplasia (BPH) presents to the clinic after noticing that phenylephrine OTC has not been clearing up his stuffy nose. Prior to his BPH diagnosis, he noticed the phenylephrine provided much relief for his stuffy nose. After his BPH diagnosis, he was prescribed prazosin and now takes it as directed by his urologist. What is most likely occurring in this case?",
    choices: [
      "Phenylephrine and prazosin act on the same receptor with opposite effects, thereby pharmacological antagonism has occurred",
      "Phenylephrine induces CYP activity, thereby increasing prazosin metabolism",
      "Phenylephrine induces Pgb expression, thereby increasing prazosin excretion",
      "Phenylephrine is competing with prazosin for protein binding, thereby exposing more prazosin for excretion",
    ],
    correct:
      "Phenylephrine and prazosin act on the same receptor with opposite effects, thereby pharmacological antagonism has occurred",
    tags: ["PD", "medium", "Drug-interactions", "Urology", "SNS"],
    explain: "This question requires understanding the drug interactions that result in pharmacological antagonism. In this vignette, we are presented with a patient with BPH that is managed with prazosin, but he has a stuffy nose that does not go away despite taking a decongestant (phenylephrine). We know that prazosin is an α1 antagonist, and that phenylephrine is an α1 agonist, therefore the decreased efficacy of phenylephrine can be explained by pharmacological antagonism. Praozsin blocks the α1 receptors in the mucosal blood vessels of the nasal cavity, which prevents phenylephrine from constricting the vessels to relieve the congestion. Hence (A) is the best answer.",
  },
  {
    id: 2,
    prompt:
      "A middle aged patient with bipolar disorder and newly diagnosed HTN presents to the clinic after noticing extra side effects such as a metallic taste. He is currently on both lithium and hydrochlorothiazide. What is the most likely drug-drug interaction in this case?",
    choices: [
      "Hydrochlorothiazide decreases total blood volume, leading to increased Li serum concentration",
      "Hydrochlorothiazide increases diuresis leading to increased Li excretion",
      "Hydrochlorothiazide inhibits NCC leading to decreased cation reabsorption, thereby decreasing Li half life",
      "Hydrochlorothiazide leads to compensatory increase in nonspecific tubular reabsorption of cations leading to increased Li half life",
    ],
    correct:
      "Hydrochlorothiazide leads to compensatory increase in nonspecific tubular reabsorption of cations leading to increased Li half life",
    tags: [
      "PK",
      "medium",
      "Drug-interactions",
      "Psych",
      "Nephrology",
      "Cardiology",
    ],
    explain: "This question requires understanding ADME-related drug interactions. In this vignette, we are presented with a patient that is on Li and HCTZ who is experiencing increased side effects associated with Li - metallic taste. This suggests that the concentration of Li is now increased and potentially crossing the minimum toxic concentration, hence the new onset side effect. Therefore, the answer has to be an interaction that leads to an increase in Li, thus we can rule out (B) and (C). In this case the most likely drug-drug interaction is (D). Li is a monovalent cation (+1) and the main determinant for its serum concentration is based on elimination via the kidneys. Thus, any drug that affects kidney function such as decreasing GFR (ACEi, ARB, NSAIDs) can increase Li concentrations.  HCTZ inhibits NCC at the distal tubules, which reduces Na+ reabsorption and blood volume. This leads to a compensatory increase in reabsorption of cations in the proximal tubules and since both Li and Na are +1, they are structurally similar, which causes Li to be reabsorbed through Na+ channels in the PT. (A) is a possible explanation, but not the most likely explanation. The decrease in blood volume is unlikely to cause a massive change in Li concentration and this doesn’t explain why other diuretics do not have as large of an effect on Li concentration as thiazides such as K+ sparing and loop diuretics. This is thought to be due to the location on where the diuretics act on has a role. Basically, increasing the elimination half life is more significant than the changes in blood volume due to diuretics. Increased half life will lead to  more and more Li to stay in the body with each dose, thus pushing the [Li] out of the therapeutic window. Li also has a very narrow therapeutic window, so close monitoring of dosing is required. It’s recommended to at least halve Li dose in patients on thiazide diuretics.Osmotic diuretics like mannitol will decrease [Li], but causing an increase in excretion. This is an example of how drug interactions can affect the excretion of other drugs, which can have clinical implications on the drug concentration in the body.",
  },
  {
    id: 3,
    prompt:
      "A patient is on 2 drugs (Drug A and Drug B) and loves grapefruit juice and will not stop drinking it. Drug A is a CYP3A4 substrate, Drug B is a pro-drug and a CYP3A4 substrate. Which of the following is true?",
    choices: [
      "Drug A will require a larger dose to overcome the decreased metabolism",
      "Drug A will require a larger dose to overcome the increased metabolism",
      "Drug B will require a larger dose to overcome the decreased metabolism",
      "Drug B will require a smaller dose to overcome the increased metabolism",
      "Nothing, plasma concentrations will not be affected",
    ],
    correct:
      "Drug B will require a larger dose to overcome the decreased metabolism",
    tags: ["Drug-interactions", "PK", "medium", "anesthesia"],
    explain: "This question requires understanding the effects of grapefruit on drug metabolism. Grapefruit is a known CYP3A4 inhibitor (and is also known to inhibit drug transporters) and we are told that Drug A and Drug B are both CYP3A4 substrates, however Drug B is a pro-drug. In this case, use of grapefruit would result in Drug A having an increased effect due to decreased inactivation, while Drug B will have decreased effect due to decreased activation. Therefore, (C) is the best answer because we would need a larger dose of Drug B to overcome the decreased activation of the pro-drug due to grapefruit-mediated inhibition of CYP3A4. A larger dose of Drug A would not be required, since there is decreased metabolism of it and will have a longer elimination half-life.",
  },
  {
    id: 4,
    prompt:
      "Prednisone is a prodrug that requires 11β-HSD1 in liver tissue to convert it to prednisolone, its active metabolite. In patients with liver dysfunction and a skin condition that requires anti-inflammatory medication such as prednisone, which of the following would be the best option?",
    choices: [
      "Increase oral prednisone dose",
      "Increase oral dose, but use prednisolone ",
      "Same oral dose, but use prednisolone",
      "Use topical prednisone for affected areas",
    ],
    correct: "Same oral dose, but use prednisolone",
    tags: ["PK", "Endocrinology", "medium"],
    explain: "This question requires understanding ADME and route of administration considerations. In this case, prednisone is a pro-drug that requires activation in the liver to its active form, prednisolone. However, in patients with severe liver disease, there might be decreased activation of prednisone. Therefore, to achieve therapeutic effect we want to deliver enough drug while also minimizing side effects. One way to achieve this is to deliver the active form of the medication, prednisolone to bypass the liver-dependent activation. We can try to maintain the same dose if possible to minimize unwanted actions of the medication. Therefore, (C) is the best answer. (A) would have minimal positive effect and potential to cause harm as this would lead to accumulation of prednisone since there is little to no activity of metabolism to activate the drug. This means adding more prednisone could just lead to a larger backlog of prednisone waiting to be metabolized into an active form. (B) works if we ignore unwanted side effects. We need to consider that prednisolone needs to be metabolized into an inactive form eventually to be cleared, and in a patient with liver dysfunction that could mean accumulation of the drug resulting in unwanted effects. (D) would not work because there may not be 11β-HSD1 to activate the prednisone into its active form in the skin (keratinocytes in the skin do express it, but for the purpose of this question we will not consider it enough to activate the drug, also in diseased skin, there may be limited expression).",
  },
  {
    id: 5,
    prompt:
      "A 23 y/o patient presents to the ER with a decreased level of consciousness, respiratory distress, and hypothermia. His pupils were initially constricted, but now are dilated and nonreactive to light. A toxicology panel comes back confirming a barbiturate overdose. Phenobarbitone (PB) is acidic and renally excreted. Theoretically, how can you decrease the serum levels of PB?",
    choices: [
      "Forced acid diuresis - lower urine pH - more PB will be ionized and not reabsorbed back",
      "Forced acid diuresis  - lower urine pH - more PB will be secreted (tubular) into the urine",
      "Forced alkaline diuresis - raise urine pH - more PB will be ionized and reabsorbed back",
      "Forced alkaline diuresis - raise urine pH - more PB be secreted (tubular) into the urine",
    ],
    correct:
      "Forced alkaline diuresis - raise urine pH - more PB will be ionized and reabsorbed back",
    tags: ["PK", "medium", "ER"],
    explain: "This question requires understanding the pharmacokinetics of drug excretion in acute toxicity. In this vignette we are presented with a patient with a barbiturate overdose. Barbiturates act on GABA channels (similar to benzodiazepines, but at a different site on the channel), where at low doses it potentiates the effects of GABA, by decreasing the rate of dissociation and increasing Cl channel opening. However, at high enough doses, such as an overdose, barbiturates can open the channel directly without GABA, leading to a state of anesthesia. He has some signs of PB overdose: decreased LoC, respiratory distress, hypothermia, and his pupils initially constricted, but now dilated and nonreactive → possible due to hypoxia. We are told that PB is acidic and renally excreted, therefore we need to think of how we can trap PB in the urine for excretion and not be reabsorbed back into systemic circulation. Therefore, (C) is the correct answer. This correctly suggests how to “ion trap” PB in the urine to prevent reabsorption. Charged molecules will not be able to cross membranes, and are more hydrophilic, so if we increase the pH, we will cause a larger proportion of PB to be charged and trapped in the urine for excretion. Recall the Henderson Hasselbach equation, and you can see that for drugs with low pKas (acidic), increasing the pH will cause more of it to be deprotonated to have a negative charge. The other choices do not correctly explain ion trapping. The use of forced alkaline diuresis is controversial in barbiturate overdoses. In severe cases, hemodialysis would be considered as well to remove the barbiturates. Drugs that can be dialyzable depend on many factors that will be discussed in MEDD421 CKD week, but essentially, the drug has to have low protein binding, low volume of distribution (suggesting hydrophilicity), and small enough to be filtered via the glomerulus.",
  },
  {
    id: 6,
    prompt: "Which of the following is true regarding steady state?",
    choices: [
      "IV (bolus) route of administration will achieve steady state faster than oral route of administration",
      "Steady state is determined by the route of administration and the dosing interval",
      "Steady state is the plasma concentration where the drug falls within the therapeutic range",
      "Steady state is the plasma concentration when elimination will now follow zero-order kinetics",
      "When drug elimination rate is equal to drug administration rate",
    ],
    correct: "When drug elimination rate is equal to drug administration rate",
    tags: ["easy", "PK"],
    explain: "This question requires understanding the concept of steady state. (E) is the true statement. Steady state by definition is when the quantity of drug that is cleared per unit of time is equal to the quantity of drug that reaches systemic circulation per unit of time. Which essentially means the state when elimination rate is equal to administration rate. (A) is not true because the time to steady state is determined by the elimination half-life of the drug. If we gave bolus IV vs PO, it would still take 5 half lives to reach steady state. The only difference is our dose is fully delivered into systemic circulation instantly with IV, while in PO we would have to wait for drug absorption. We can speed up time to steady state by giving a loading dose to the desired steady state concentration (LD= (Css*Vd)/BA)) and then maintaining steady state with maintenance doses (MD=(Css*Cl*DI)/BA). Where Css= steady state concentration, Vd = vol of distribution, BA= bioavailability, Cl= clearance rate, DI = dosing interval (time). (B) Steady state concentration is determined by 3 things: dose, dosing interval, and clearance. Route of administration is independent. If you increase dose, dose more often, or decrease clearance the Css will increase and vice versa. (C) is not the definition of steady state, but ideally we aim for steady state that’s within the therapeutic window. (D) is just false.",
  },
  {
    id: 7,
    prompt:
      "Given the volume of distribution of four drugs: Drug A - 4 L, Drug B - 38 L, Drug C - 10 L, Drug D - 300 L (based on “ideal” body weight - 70 kg) Which of the following is most likely true?",
    choices: [
      "Drug A has a more lipophilic distribution",
      "Drug B mainly distributes to extracellular fluid ",
      "Drug C is more basic than Drug B",
      "Drug C mainly distributes to the plasma compartment with probably high protein binding",
      "Drug D will more likely require a lower dose in elderly patients",
    ],
    correct: "Drug D will more likely require a lower dose in elderly patients",
    tags: ["PK", "medium"],
    explain: "This question requires understanding distribution of drugs given its Vd. The most true statement would be (E). Drug D will likely require a lower dose in elderly patients because a Vd of 300 L highly suggests extensive tissue distribution. In geriatric patients, there is decreased lean body mass and increased adipose tissue, then for drugs with high Vd (which tends to suggest a lipophilic drug), there is potential for prolonged half life as the Vd in these patients would be even larger. The prolonged half life will increase the risk of toxicity, hence a lower dose could be warranted. Vd is a theoretical volume that describes the relationship between the actual amount of drug in the body to the plasma concentration. This is important because some drugs have high tissue distribution like Drug D, but its plasma concentration may not accurately reflect the true amount of drug in the body since if the drug is compartmentalized in tissue, it can’t be measured in the plasma. Hence Vd=dose/[drug]. Since this is a theoretical value we can’t actually predict which compartment the drug actually distributes to, but only describe the extent of distribution. Hence, a lower Vd (e.g. ≤42L - 42L is the estimated TBW of a 70kg pt → 60% of 70kg) would suggest a drug with less distribution, so it is more likely (but not necessarily) to distribute to blood or the other physiological fluid compartments. Given that, although we can’t say where drug (A) distributes, it probably would not have a lipophilic distribution, it probably distributes to the fluid compartments, but the specific one is harder to predict - potentially plasma. (B) is not the most true as we can’t say for sure it would distribute specifically to the ECF compartment, moreover the ECF compartment would be approx 14L in a 70kg patient, so chances are it distributes to more than that compartment - maybe to TBW (incl. ICF). (C) we do not have enough information to infer that, but in general more basic drugs have higher degrees of distribution. This is because more basic drugs tend to be compartmentalized into tissue due to the ion trapping effect. This occurs due to blood pH (7.35-7.45; bicarb buffer maintains this level) being slightly higher than tissue pH (6.8-7.4; cells undergo metabolism and produce CO2, which raises the local CO2 levels → acidic), thus a basic drug may be uncharged in blood pH → crosses membrane into cell → becomes charged and is now “trapped”. So in general, more basic drugs have higher Vds, but this is not a clear cut rule. (D) Again we can’t infer the specifics regarding to distribution given a Vd, it’s possible that this drug distributes like that, but we do not have enough information to say it distributes to plasma (plus plasma ~4L in a 70kg) and we can’t infer protein binding from this.",
  },
  {
    id: 8,
    prompt:
      "Drug A undergoes zero order kinetics, and Drug B undergoes first order kinetics. Which of the following is true?",
    choices: [
      "At high enough doses, Drug B will initially have zero order kinetics due to enzyme saturation",
      "Drug A will lose the same proportion per unit of time of drug at t = 1 hr and at t = 5 hr post administration",
      "The half-life of Drug A is constant, while Drug B has a  concentration dependent half-life",
      "Elimination rate for Drug A is dependent on the initial route of administration (IV vs. PO)",
    ],
    correct:
      "At high enough doses, Drug B will initially have zero order kinetics due to enzyme saturation",
    tags: ["medium", "PK"],
    explain: "This question requires understanding drug elimination pharmacokinetics. The true statement is (A). Although Drug B normally undergoes first order elimination, at high enough doses, the enzymes can be saturated, thus elimination will follow zero order kinetics. The rate will be entirely dependent on the enzyme’s intrinsic rate of activity, for example if an enzyme can only eliminate 3 drug molecules per minute, that is the rate of elimination till the enzymes are no longer saturated and then elimination returns to first order. (B) is false because Drug A follows zero order kinetics, which means that at the different time points, it will be the same AMOUNT of drug eliminated NOT the same proportion - first order would be the same fraction/proportion. So in zero order it doesn’t matter at what time post administration, the elimination will always be a constant X dose/time eliminated. (C) is false because the half life of a drug following zero order kinetics is dependent on the concentration, while in first order the half life is fixed. For example if the drug A is eliminated 1mg/mL/hr, and the starting dose is 8 mg/mL, then the half life is 4 hrs, but once the concentration reaches 4 mg/mL, the half life is now 2 hrs. (D) is false because elimination rate is independent of RoA. It doesn’t matter if drug is given PO or IV, once the drug is in the body the rate of elimination is dependent on the body’s on clearance mechanism whether that's enzymatic degradation or straight to the kidneys, the body doesn’t care it the drug entered via the intestines or through an IV line. RoA is a useful way in delivering drugs to reach a certain concentration or bypass obstacles that may be detrimental to therapy.",
  },
  {
    id: 9,
    prompt:
      "A patient is receiving an IV infusion of Drug A. Which of the following is false?",
    choices: [
      "A higher steady state can be achieved with faster rate of infusion",
      "Infusion rate must equal the clearance rate to maintain steady state",
      "Once steady state is reached elimination will be zero-order",
      "Steady state will be achieved after 5 half-lives ",
    ],
    correct: "Once steady state is reached elimination will be zero-order",
    tags: ["medium", "PK"],
    explain: "This question requires understanding IV infusions. The false statement (the correct answer) is (C). It’s a false statement as steady state does not determine whether a drug follows zero order or first order kinetics. Zero order kinetics tends to occur with specific drugs, or in cases where oversaturation of the metabolic pathways occurs, thus elimination is dependent on the intrinsic rate of enzymatic degradation.  In drug infusions, steady state is when the drug infusion is equal to drug clearance, hence a steady state.  Therefore, to maintain a steady state, the drug infusion needs to be equal to the clearance, hence (B) is true. (D) is true, it takes 5 half lives for drugs to reach steady state independent of IV or PO RoA. (A) is true because remember steady state is a plasma concentration that we aim for that ideally falls within the therapeutic window. This concentration can be altered by the dose and the dosing interval. Higher doses  → higher steady state, shorter dosing intervals → higher steady state. Vice versa. So in an infusion, if we infuse at a higher rate, we can then increase the steady state concentration because we are giving drug at an increased rate, which essentially acts as increasing the dose and shortening the dosing interval (drugdose/time = rate → decrease the time per dose, or increase the dose over unit time → both of these increases the rate).",
  },
  {
    id: 10,
    prompt:
      "The half-life of Drug X is 8 hours and is given orally. How long will it take to reach steady state?",
    choices: ["8 hrs", "16 hrs", "32 hrs", "40 hrs", "More info needed"],
    correct: "40 hrs",
    tags: ["PK", "medium"],
    explain: "This question requires understanding the rule of 5 in dosing. The rule of 5 suggests that it takes 5 half lives for a drug to reach steady state assuming proper dosing. 8*5= 40 hrs, therefore (D) is the correct answer. ",
  },
  {
    id: 11,
    prompt:
      "A patient presents to the ER with signs of sepsis. Drug X is a new broad spectrum antibiotic that has no known resistant bugs. However, the half life is 3 days, low oral bioavailability, and there is an extremely narrow therapeutic window.  Which of the following is the best course of action (assume catheters have minimal propensity to be an infective source)?",
    choices: [
      "IV bolus loading dose, then maintenance dose every 3 days",
      "IV infusion, but with a higher rate of infusion",
      "IV bolus loading dose, then maintenance dose every day",
      "IV bolus loading dose, then maintain at desired concentration with IV infusion",
      "PO loading dose, then maintenance dose every 3 days",
    ],
    correct:
      "IV bolus loading dose, then maintain at desired concentration with IV infusion",
    tags: ["PK", "medium"],
    explain: "This question requires understanding how RoA and PK can be used to optimize drug delivery. In this vignette we are presented with a new ABX for a septic patient. The properties of the ABX are low PO BA and narrow therapeutic window. This should suggest that we should NOT go with a PO loading dose as the PO bioavailability is low, and also septic patients sometimes are too sick to take PO medications. Also IV is the most reliable way to reach a certain plasma concentration as we deliver the medication directly to systemic circulation and is not affected by many other factors that affect PO such as absorption, gut microbiota,  first-pass, gastric emptying, etc… Therefore, (E) is not a good idea. (B) is also not a good idea because although we are running a drug infusion, which will help us maintain a desired steady state within the therapeutic window, it will take 5 half lives to reach the desired steady state. The half life of this drug is 3 days, so that would take 15 days, and our patient is severely sick, so time is not on his side. So ideally we want to do a loading dose into the therapeutic window. (A) and (C) although have a loading dose, they are not the best option because between the maintenance doses, we run the risk of the drug falling outside of the therapeutic window or even going over the therapeutic window (in the case of (C)). Therefore, (D) is the best option. The loading dose will put the drug into the desired steady state concentration within the therapeutic window and then we continuously infuse to maintain the desired steady state by matching the drug clearance. This will help keep our drug within its super narrow therapeutic window. This is obviously a hypothetical situation, in real life catheters pose a source control risk, so there are other pros and cons to IV infusions that are not going to be addressed in this scenario. This question really is meant to understand the utility of IV infusions and loading doses.",
  },
  {
    id: 12,
    prompt:
      "Given is an acidic drug with a low pKa (2) that is mostly absorbed in the stomach. If administered to an elderly patient, what would you expect to occur with drug absorption?",
    choices: [
      "Decreased absorption due to higher proportion of protonated drug",
      "Decreased absorption due to higher proportion of unprotonated drug",
      "Increased absorption due to higher proportion of protonated drug",
      "Increased absorption due to higher proportion of unprotonated drug ",
    ],
    correct:
      "Decreased absorption due to higher proportion of unprotonated drug",
    tags: ["PK", "medium"],
    explain: "This question requires understanding drug absorption and population variability to drug response. In general, there is decreased acid secretion in elderly patients, which results in a higher gastric pH. For acidic drugs with low pKa this means that there will be increased deprotonation when the pH is increased, so more drugs going from HA to A- (try it out yourself with the Henderson-Hasselbalch equation: pH=pka + log(A-/HA) - for example compare when the pH is 2 vs 4 for a drug with a pKa of 2 and compare the levels of A- to HA.). Drug absorption is better with uncharged molecules, so if more drug is A- than HA, we would expect decreased absorption. Thus the correct answer is (B).",
  },
  {
    id: 13,
    prompt:
      "What changes would you expect to occur with a renally excreted drug in a healthy geriatric patient?",
    choices: [
      "Decreased dosing interval",
      "Increased maintenance doses",
      "Increased time to steady state",
      "Reduced adverse effects",
    ],
    correct: "Increased time to steady state",
    tags: ["PK", "medium"],
    explain: "This question requires understanding the pharmacokinetic variation in the population and drug excretion. In general, there is decreased renal excretion in elderly patients due to decreased renal function. Therefore, the correct answer is (C). This is because we would expect renally excreted drugs to have a longer half-life in elderly patients. Time to steady state is determined by the drug half life (rule of 5). Therefore if the half-life is increased, the time to steady state will increase. (A) is not true. It is more likely we would increase the dosing interval (time between doses) because of the increased half-life - the drug lasts longer in the body, thus we don’t need to dose as frequently. (B) we would not increase the maintenance doses because with decreased renal excretion, the drug will last longer in the body, thus the plasma concentration would be higher than expected (compared to a healthy young patient), thus we would actually consider decreasing the maintenance dose if we do not change the dosing interval. FInally, (D) is not true and is pretty self explanatory, the longer the drug lasts in the body and the potential for the drug to be outside the therapeutic window due to decreased excretion, would put the patient at risk of adverse effects. Plus we can think of this like how we try to avoid renally excreted drugs in patients with acute kidney injury or severe renal dysfunction.",
  },
  {
    id: 14,
    prompt:
      "Two benzodiazepines are given: lorazepam and diazepam. Lorazepam only undergoes phase II metabolism, while diazepam undergoes both phase I and phase II metabolism. Which of the following drugs would be better for a geriatric patient?",
    choices: [
      "Diazepam because phase I enzymes are unchanged in elderly patients, but phase II enzymes are decreased ",
      "Diazepam because phase I enzymes are unchanged in elderly patients, but phase II enzymes are increased",
      "Lorazepam because phase I enzymes are increased in elderly patients, but phase II enzymes are unchanged",
      "Lorazepam because phase II enzymes are unchanged in elderly patients, but phase I enzymes are decreased",
      "Both are equally effective due to decreased liver size and hepatic blood flow with age",
    ],
    correct:
      "Lorazepam because phase II enzymes are unchanged in elderly patients, but phase I enzymes are decreased",
    tags: ["PK", "medium"],
    explain: "This question requires understanding population variability to drug response with regards to the geriatric population. The correct answer is (D). This is because in elderly patients there is decreased Phase I enzyme activity, but Phase II tends to be unchanged. So medications that undergo Phase I metabolism are more likely to accumulate in elderly patients as there will be decreased metabolism. Drugs that undergo phase II are more reliably metabolized in the elderly. (E) liver size and hepatic blood flow both decrease in the elderly, but it does not come to the correct conclusion.",
  },
  {
    id: 15,
    prompt:
      "A lipophilic drug that has significant albumin binding is prescribed to a pediatric patient. What would you expect to occur?",
    choices: [
      "Decreased plasma concentration due to increased albumin expression in children",
      "Decreased plasma concentration due to decreased total body water in children",
      "Increased plasma concentration due to increased total body water in children",
      "Increased plasma concentration due to decreased fat in children",
    ],
    correct: "Increased plasma concentration due to decreased fat in children",
    tags: ["PK", "medium", "pediatrics"],
    explain: "This question requires understanding population variability to drug response with regards to the pediatric population. The correct statement here is (D). This is because pediatric patients tend to have less fat than adults, so for lipophilic drugs that probably distribute to adipose tissue, there will be less tissue to distribute to, thus it can accumulate in the plasma, thereby increasing the concentration. Theoretically, this suggests lowering the dose of lipophilic drugs in the pediatric population. (C) although pediatric patients tend to have increased TBW proportion than adults, this would theoretically dilute the drug. In pediatric patients, hydrophilic drugs tend to have a lower plasma concentration because of the increased TBW. (B) not true, TBW is increased in children. (A) is not true, albumin expression is decreased in children, so this leads to an increase in free drug in this case as there is less albumin to be bound too, thus increasing toxicity. This is also why drugs that are heavily bound to albumin or displace bilirubin from albumin pose a risk to neonates in causing kernicterus(this will be discussed in MEDD421 and there are neonatal specific questions in neonate week regarding this).",
  },
  {
    id: 16,
    prompt:
      "A 32 y/o G3P1T2 mother just gave birth to a healthy baby boy and is given codeine for post-labour analgesia. She has a CYP2D6 gene duplication. She is breastfeeding her baby boy. Which of the following is a potential consequence?",
    choices: [
      "She will have inadequate analgesia due to increased metabolism of codeine",
      "She will have inadequate analgesia due to decreased metabolism of codeine",
      "Increased risk for respiratory depression in baby due to decreased metabolism of codeine",
      "Increased risk of respiratory depression in baby due to increased metabolism of codeine",
    ],
    correct:
      "Increased risk of respiratory depression in baby due to increased metabolism of codeine",
    tags: ["PK", "medium", "pediatrics", "Ob/Gyn"],
    explain: "This question requires understanding pharmacogenomics (PGX). In this vignette we are presented with a patient given a pro-drug (codeine) and is also breastfeeding. The potential consequence is (D). This is because CYP2D6 gene duplication suggests increased activity of the CYP2D6 enzyme. This means that the mother would be considered an extensive metabolizer for CYP2D6. This suggests that any drug that is metabolized by CYP2D6 would have less efficacy due to increased first-pass metabolism, thus the plasma concentration will be decreased extensively, potentially to even below the therapeutic window. Essentially, a drug that is a CYP2D6 substrate is absorbed and enters the portal system, where now it faces increased activity or increased number of CYP2D6 enzymes, thus more of it is inactivated before entering systemic circulation, thus decreasing its plasma concentration, and hence, its effectiveness. However, the opposite would occur with a pro-drug such as codeine. Remember codeine is a prodrug that is metabolized into morphine, thus in this patient, more of the codeine would be activated upon first pass, thus increasing the plasma concentration of the drug. This poses a risk for the patient as now there is a risk that the concentration exceeds the therapeutic window, thus resulting in more adverse effects such as respiratory depression. In this case, she is breastfeeding, and she will have high plasma concentration of morphine, thus more morphine would be excreted into the breastmilk. This increases the amount of morphine the baby is exposed to. Babies also have decreased CYP enzyme and phase II enzyme expression in general, thus there is decreased first-pass in babies, which means the milk containing morphine will not be as adequate “cleansed” by the liver, thus exposing the baby to toxic levels of morphine, which could result in respiratory depression. Normally in patients without a gene duplication, there is a very small risk of this occurring as the concentration does not reach extremely high levels to cause significant respiratory depression in the baby (not as much morphine in the breast milk) This vignette was based on a real life case that occurred and is a classic example of how pharmacogenomics can have a large effect on how different patients respond to drugs differently.",
  },
  {
    id: 17,
    prompt:
      "A 30 y/o female is surprised that she is pregnant. She has been using oral contraceptives near-perfectly (never misses a dose, and dose timing is same time everyday) for many years. She was treated with an oral antibiotic a month ago and finished the entire course, but does not take any other medications or OTC supplements such as St. John’s Wort. Her OCP is extensively metabolized by CYP450 with glucuronidation and is excreted in the bile. Given this, what is the MOST likely reason for her OCP failure?",
    choices: [
      "The antibiotic inhibited the CYP450 enzymes leading to less activation of OCP",
      "The antibiotic reduced gut flora, leading to less enterohepatic recirculation of OCP",
      "The antibiotic reduced gut flora, leading to less absorption of OCP",
      "OCP effectiveness drops to 50% when taken typically and not perfectly",
    ],
    correct:
      "The antibiotic reduced gut flora, leading to less enterohepatic recirculation of OCP",
    tags: ["PK", "medium", "Ob/Gyn"],
    explain: "This question requires understanding enterohepatic circulation and its implication. In this vignette we are presented with a patient who’s OCP has failed to prevent her pregnancy. We are told that her OCP is metabolized with glucuronidation and excreted in the bile. Given this we should recognize that this medication is metabolized and excreted via the hepatic route. Glucuronidation is part of Phase II metabolism, where a large molecule is added to the medication to facilitate excretion. By being excreted via bile, medications can undergo enterohepatic recirculation, where bacteria in the gut cleave off the functional groups such as those added via glucuronidation. This essentially returns the drug back to its pre-metabolized form - you can think of this as reactivating it - where it now can be reabsorbed by the gut to exert its pharmacological effect. Thus, we can see that this will extend the half-life of the drug and increase how long the drug lasts in the body, thus keeping the plasma concentration within the therapeutic window for a longer time. OCPs are well known to be impacted by enterohepatic recirculation, thus any decrease in enterohepatic recirculation would then decrease the effectiveness of OCPs. Now we need to think of what would decrease enterohepatic recirculation, certain diseases that decrease absorption would decrease enterohepatic recirculation due to decreased absorptive capacity in general, but we also established that the recirculation requires reactivation of drug via the gut microbiota. So anything that affects the gut microbiota would impact enterohepatic recirculation. One major mechanism that affects our gut microbiota would be antibiotic use as this will kill off many of resident commensal microbiota, thus decreasing the population and leading to less bacteria to reactivate excreted drugs. THis is also why ABXs use increases the risk of C. Diff colonization since we kill off our “friendly” bacteria, which creates room for C. Diff to grow and take over. Therefore, the best answer is (B). (A) some OCPs are pro-drugs, so that could be a possibility, but this is not as likely as the CYP inhibition would not last long after the ABX course is finished. The gut microbiota takes a longer time to recover. (C) is not as likely or significant. (D) typical OCP use usually drops the effectiveness by ~10% in some cases, but not as low as 50%. If typical OCP use had 50% effectiveness, then that is a very poor contraception method and we would not be using it as an option.",
  },
];
