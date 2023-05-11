/**
 * Questions for Diabetes week
 * @author Michael Gong, UBC VFMP 2025
 */

export const diabetesMellitus = [
  {
    id: 1,
    prompt:
      "A 56 y/o patient with epilepsy, hypertension and GERD presents to the clinic for an annual checkup. During the history he reports feeling thirsty more often and fatigued. His medications include furosemide, ramipril, omeprazole, phenytoin, and acetaminophen PRN. His older brother was diagnosed with type 2 diabetes mellitus (T2DM) last year. On inspection his BMI is 27. You highly suspect that he may have T2DM given his risk factor. Which one of his medications would most likely also play a role in development of T2DM?",
    choices: [
      "Acetaminophen",
      "Furosemide",
      "Omeprazole",
      "Phenytoin",
      "Ramipril",
    ],
    correct: "Phenytoin",
    tags: ["PD", "hard", "Neurology", "Endocrinology", "side effects"],
    explain: "This question requires recognizing iatrogenic causes of diabetes. In this vignette, we are presented with a patient with polydipsia and fatigue with a medication list that includes a loop diuretic, ACEi, PPI, analgesic, and an anticonvulsant. We are asked to assume he has T2DM and his medications played a role. There are many mechanisms for drug induced diabetes, which includes interference of insulin release from β cells (cyclosporine, phenytoin, thiazides, calcium channel blockers), induce insulin resistance (glucocorticoids, niacin, antiviral protease inhibitors (HIV, Hepatitis drugs)), drug-induced pancreatitis (EtOH), weight gain ± β cell dysfunction (anti-psychotics), and more (β blockers, CTLA-4 inhibitors, etc…). In this case, our patient is on phenytoin, hence (D) is the answer."
  },
  {
    id: 2,
    prompt:
      "Andy, a 23 y/o patient, presents to the ER with hypotension, tachycardia, and shortness of breath. His breathing is described as rapid deep inspirations and he smells “fruity”. Initial labs report a wide anion gap acidosis (27 mM), positive urine ketones, elevated β-OHbutyrate (12 mM), serum osmol slightly elevated (300 mOsm/kg), low pH (7). His plasma glucose is slightly elevated. His history is negative for diabetes. You highly suspect a certain condition and start volume repletion, and you are about to start IV insulin, but an astute nurse points out that Andy’s serum K+ is 3.1 mM.  Is this a concern, why or why not?",
    choices: [
      "No, insulin does not affect serum K+ levels",
      "No, Andy is in a high total body K+ state, insulin causes K+ to shift into cells and this will normalize his serum K+",
      "No, Andy is in a low total body K+ state, insulin causes K+ to shift out of cells and this will normalize his serum K+",
      "Yes, Andy is in a high total body K+ state, insulin causes K+ to shift out of cells, and this will increase his serum K+ to dangerous levels",
      "Yes, Andy is in a low total body K+ state, insulin causes K+ to shift into cells and this will reduce his serum K+ to dangerous levels",
    ],
    correct:
      "Yes, Andy is in a low total body K+ state, insulin causes K+ to shift into cells and this will reduce his serum K+ to dangerous levels",
    tags: ["PD", "hard", "ER", "Endocrinology", "MoA"],
    explain: "This question requires understanding diabetic ketoacidosis and insulin pharmacology. In this vignette, we are presented with a patient that we suspect has diabetic ketoacidosis (DKA) based on his presentation (fruity smell, hypotension, tachycardia, SoB, rapid deep inspirations (Kussmaul breathing)), and his lab results (wide anion gap, + urine ketones, elevated β-OHbutyrate, elevated serum osmol, slightly elevated plasma glucose, acidosis). He doesn’t have a history of diabetes, but DKA is sometimes the first presentation of diabetes (usually in pediatric patients). Volume repletion is performed, and this is usually followed with IV insulin to stop ketogenesis, however, Andy has a K+ of 3.1 mM (mild low), and we are asked if this is a concern. This is a concern (rule out A, B, C) because insulin will cause an intracellular K+ shift by activating the Na+/K+ ATPase pump. DKA is a state of low total body K+ because the body compensates the volume depletion by activating RAAS, leading to more aldosterone, which causes K+ loss (and osmotic diuresis which draws K+ into the urine). Hence (E) is the correct answer. Sometimes in DKA there is hyperkalemia, however they are still considered low total K+ because this is a compensatory mechanism, where extracellular K+ shift occurs in exchange for H+ to compensate for the acidosis (K+ is the main intracellular cation and has been shifted to another compartment, but its overall level is unchanged/lower). Eventually acute kidney injury could occur due to severe volume depletion, which will limit K+ loss via the kidneys, leading to hyperkalemia as well."
  },
  {
    id: 3,
    prompt:
      "An 80 y/o patient with T2DM, hypertension, and dyslipidemia presents to the ER after being found unresponsive in her kitchen. She is hypotensive, tachycardic, and has no urine output. Initial labs  show elevated levels of glucose (72 mM), Na+ (155 mM), K+ (5.6 mM), Cl- (120 mM), creatinine (140 µM), and urea (20 mM), but normal HCO3- (24 mM). Her blood pH 7.33 (normal: 7.35-7.45), blood β-OHbutyrate is slightly elevated (2.5 mM) and positive urine ketones. You have high suspicion of an endocrine emergency, but you are unable to locate a precipitant. You check her medications: metformin, rosuvastatin, amlodipine, and hydrochlorothiazide. Given this new information, which of her following medications may have precipitated the condition?",
    choices: [
      "Amlodipine",
      "Hydrochlorothiazide",
      "Metformin",
      "Rosuvastatin (Lipid lowering medication)",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "hard", "ER", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding iatrogenic precipitants of hyperglycemic hyperosmolar state (HHS). In this vignette, we are presented with an elderly patient with HHS. We think HHS because she is elderly, severe hyperglycemia, hyperosmolality (2*155+72+20=402 mosm/L), severe volume depletion, she presented with tachycardia, hypotensive, no urine output (elevated K+ and creatinine), no wide anion gap (155-(120+24)= 11 mEq/L), no severe acidosis,  β-OHbutyrate is only slightly elevated. From her medication list, two of them potentially precipitate HHS, amlodipine (Ca channel blocker; CCB) and hydrochlorothiazide (thiazide diuretic). Hence, (E) is the correct answer. CCB can block Ca channels on β cells, which could affect insulin release. Thiazides can also interfere with β cell function and promote diuresis. Some other iatrogenic causes include: steroids, phenytoin, cimetidine, β blockers. Essentially drugs that interfere with carbohydrate metabolism or β cell function could precipitate HHS."
  },
  {
    id: 4,
    prompt:
      "A 62 y/o patient presents to the clinic with polyuria, polydipsia, weight loss, and fatigue. A fasting plasma glucose reports 7.9 mM and A1C = 7.4%. It has been 5 months since her T2DM diagnosis and was initially advised with lifestyle changes, but has not reached her A1C target of ≤ 7%.  Your family medicine preceptor turns to you and asks if you know what pharmacological intervention to start with in this case if you want to target an A1C ≤ 7%. You respond confidently with:",
    choices: [
      "Insulin only",
      "Insulin + Metformin",
      "Insulin + Metformin + a 2nd agent",
      "Metformin only",
      "Metformin + a 2nd agent",
    ],
    correct: "Insulin + Metformin",
    tags: ["PD", "medium", "Endocrinology"],
    explain: "This question requires understanding the initial choice of therapy for T2DM. In this vignette, we are presented with a patient with T2DM, but is also symptomatic hyperglycemia given the polyuria, polydipsia, weight loss, and fatigue. These are signs that her insulin levels are decreasing. She also has a A1C of 7.4%, which is <1.5% from the target of ≤ 7%. She also has not teached her A1C target within 3 months after starting healthy behavior intervention. In that case we can start her on metformin and insulin. We don’t need a second agent because her A1C target is within 1.5%. We need to include insulin because she has symptomatic hyperglycemia. Metformin because healthy behavior intervention did not achieve its goal. Therefore, (B) is the correct answer."
  },
  {
    id: 5,
    prompt:
      "Which of the following glucose lowering agent classes is correctly matched with its respective example?",
    choices: [
      "Dipeptidyl peptidase-4 inhibitors (DPP-4) - Exenatide",
      "GLP-1 receptor agonists - Sitagliptin",
      "SGLT2 inhibitors - Glyburide",
      "Sulfonylureas - Canagliflozin",
      "PPARγ activators - Rosiglitazone",
    ],
    correct: "PPARγ activators - Rosiglitazone",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires recognizing the different classes of glucose lowering agents and an example. The correct matches are: DPP-4 inhibitor = Sitagliptin (-gliptin); GLP-1 receptor agonist = Exenatide (-enatide or -glutide); SGLT2 inhibitor = Canagliflozin (-gliflozin); SUR = Glyburide (-ide or -glinide); PPARγ activators - Rosiglitazone (-glitazone). Some helpful ways to remember some of these classes: DPP-4 inhibitors are the ORAL incretin agents because -gLIPtin. SGLT2 inhibitors are -gliFLOzin, like filtrate FLOwing through a glomerulus - the kidney diabetes drug."
  },
  {
    id: 6,
    prompt:
      "Which of the following modifications to insulin would you expect in a basal insulin formulation?",
    choices: [
      "Addition of a hydrophilic chain",
      "Addition of a lipophilic chain",
      "Favor inulin monomers over hexamers",
      "IV route of administration ",
      "IM route of administration",
    ],
    correct: "Addition of a lipophilic chain",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding drug formulations can affect pharmacokinetics and what basal insulin achieves. Basal insulin tries to achieve the continuously secreting levels of insulin in the body, hence we’d want a long acting insulin formulation that slowly releases insulin into the system. One way we can achieve this is to have a depot formulation such as creating an insulin analogue or formulation that is more slowly absorbed into the bloodstream. Therefore, (A) is the correct answer because addition of a lipophilic chain will increase the lipid solubility after injection, which “traps” it in adipose tissue. Overtime, the insulin will then slowly be absorbed by the body into the bloodstream to hopefully mimic basal insulin secretion. (C) is wrong because monomers will be more readily absorbed than hexamers since monomers are smaller. (D) and (E) are wrong because IV will instantly deliver the entire dose at once, while muscles are highly vascularized and this will increase the absorption rate - something we want to avoid."
  },
  {
    id: 7,
    prompt: "What is the mechanism of action of insulin?",
    choices: [
      "Binds cell surface tyrosine kinase receptors to increase GLUT-2 translocation, glycogenesis, lipogenesis; and decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis",
      "Binds  cell surface tyrosine kinase receptors to increase GLUT-4 translocation,  glycogenolysis, lipolysis, ketogenesis, gluconeogenesis; and decrease glycogenesis, lipogenesis",
      "Binds cell surface tyrosine kinase receptors to increase GLUT-4 translocation, glycogenesis, lipogenesis; and decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis",
      "Binds intracellular glucose-sensing receptor to increase GLUT-4 translocation, glycogenolysis, lipolysis, ketogenesis, gluconeogenesis; and decrease glycogenesis, lipogenesis",
    ],
    correct:
      "Binds cell surface tyrosine kinase receptors to increase GLUT-4 translocation, glycogenesis, lipogenesis; and decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacology of insulin. (C) correctly describes the mechanism of action. GLUT4 is a glucose transporter that helps transport glucose into muscle cells (lower blood sugar).  Glycogenesis, lipogenesis are both anabolic processes, while the rest are catabolic processes. Insulin is an anabolic hormone!"
  },
  {
    id: 8,
    prompt: "Which of the following is NOT an effect of metformin?",
    choices: [
      "Decreased hepatic glucose (gluconeogenesis, glycogenolysis)",
      "Decreased insulin resistance in peripheral tissue",
      "Decreased fatty acid oxidation",
      "Increased anaerobic glucose metabolism",
      "Increased insulin secretion",
    ],
    correct: "Increased insulin secretion",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacology of metformin. (E) is the only option that is not an effect of metformin. In fact, metformin can sometimes decrease insulin secretion due to decreased insulin resistance in peripheral tissue, thus less insulin is needed to have an effect, thereby a decrease in insulin secretion is observed. The mechanism of metformin is unclear, but appears to inhibit the electron transport chain (Complex I) in the mitochondria and mitochondrial glycerol phosphate dehydrogenase (mGPD). Moreover, the metabolic sensor (AMPK) is decreased and helps bring on the desired metabolic changes."
  },
  {
    id: 9,
    prompt:
      "A 62 y/o patient with T2DM presents to the ER with a 1 week history of diarrhea and abdominal pain. She is tachycardic, tachypneic, and hypotensive. A quick abdominal exam reveals ascites, caput medusae, jaundice, and negative Murphy’s sign. An eGFR comes back with <30 mL/min. An arterial blood gas reveals acidemia and extremely high lactate levels. Which of the following medications is associated with this presentation?",
    choices: [
      "Canagliflozin",
      "Dulaglutide",
      "Glyburide",
      "Insulin",
      "Metformin",
    ],
    correct: "Metformin",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding an adverse effect of metformin. In this vignette, we are presented with a T2DM patient with diarrhea and abdominal pain, and have tachycardia, tachypnea, hypotension, decreased kidney function (low eGFR), probable liver dysfunction (ascites, caput medusae, jaundice), acidemia and high lactate (lactic acidosis). Our patient appears to have hepatic and renal dysfunction coupled with lactic acidosis, which is associated with metformin. Hence, (E) is the correct answer. This is because in renal dysfunction there is decreased metformin excretion (renally excreted). This may cause toxic levels of metformin to build up. Increased levels of metformin lead to increased inhibition of gluconeogenesis and increased anaerobic metabolism - both lead to increased lactate. The  liver (note: metformin is not metabolized by the liver) metabolizes lactate, however if dysfunctional, then the liver will be unable to clear the lactate. Metformin also inhibits lactate metabolism in the liver, further compounding the problem."
  },
  {
    id: 10,
    prompt:
      "Which of the following correctly describes the mechanism of action of glyburide?",
    choices: [
      "Mimics high ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
      "Mimics high ATP states by opening K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
      "Mimics low ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
      "Mimics low ATP states by opening K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
    ],
    correct:
      "Mimics high ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the mechanism of glyburide (sulfonylureas; SUR)). (A) correctly describes the mechanism of glyburide. We can conceptualize the mechanism by thinking under normal physiological conditions. After a meal, blood glucose increases, which results in increased delivery into β cells via GLUT2. More glucose means more energy (ATP), therefore the β cell will be in a high ATP state (high ATP/ADP ratio). This results in more ATP binding to the SUR subunit of KATP channels. KATP channels are inward rectifying channels that are constitutively open to maintain a negative resting membrane potential via K+ efflux - preventing unwarranted depolarization and subsequent opening of Ca channels. Once ATP binds to SUR on KATP channels, these channels close, preventing the flow of K+, which results in depolarization. This opens the voltage gated Ca channels leading to influx of Ca and insulin granule release. Hence, if the goal of glyburide is to increase insulin release from β cells, especially post-prandial (short acting agents (-glinide)), then it needs to mimic high ATP states to cause release of insulin even if the β cell does not detect the increased glucose. This also makes people on SURs to be at risk of hypoglycemia from over stimulation of insulin secretion."
  },
  {
    id: 11,
    prompt:
      "Which of the following glucose lowering agents is prone to weight gain?",
    choices: [
      "Canagliflozin",
      "Gliclazide",
      "Rosiglitazone",
      "Semaglutide",
      "B and C",
    ],
    correct: "B and C",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires recognizing glucose lowering agents that may cause weight gain. Both (B) and (C) have weight gain as a side effect, hence (E) is the correct answer. (B) Gliclazide, a sulfonylurea, is prone to weight gain because it causes the release of insulin. Increased insulin, an anabolic hormone, will lead to increased glycogenesis and lipogenesis, thus weight gain. (C) Rosiglitazone, a thiazolidinedione, may cause weight gain because by activating PPAR-γ, changes occur in adipose tissue (more sc fat vs visceral) and leptin levels are reduced, which causes increased appetite. (A) Canagliflozin, a SGLT2i, may cause weight loss due to caloric loss due to renal excretion of glucose and fluid loss caused by osmotic diuresis. (D) Semaglutide, a GLP-1R agonist may actually cause weight loss due to its effect in reducing appetite, leading to decreased food intake and weight loss."
  },
  {
    id: 12,
    prompt:
      "A 56 y/o patient with T2DM was initially prescribed metformin for the first 2 years, but could not tolerate the diarrhea and metallic taste. She was switched to Drug X and has been tolerating it well for the last 3 years. At first Drug X was more effective at reducing her A1C than metformin. However, over the past year, there has been marked reduction in Drug X’s efficacy leading to an elevation of her A1C levels. Assuming no significant changes in lifestyle and ideal dosing, which of the following is most likely Drug X?",
    choices: [
      "Canagliflozin",
      "Exenatide",
      "Glyburide",
      "Rosiglitazone",
      "Sitagliptin",
    ],
    correct: "Glyburide",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the long term effects of sulfonylureas. In this vignette, we are presented with a patient with T2DM who is switched to Drug X, which was efficacious at first, but does not appear to be as efficacious as before. (C) Glyburide like other sulfonylureas (SUR) have been found to have decreased effectiveness overtime. This is thought to be due to the stress SURs have on β cells through stimulation of insulin release, which will further lead to the progressive dysfunction of β cells as they have to work harder to produce insulin. Downregulation of SUR receptors after chronic SUR use are also thought to play a role as well."
  },
  {
    id: 13,
    prompt:
      "Which of the following mechanisms of actions of  glucose lowering agents would you more likely use in a young male with diabetes rather than an older female patient with diabetes?",
    choices: [
      "α-glucosidase inhibitor",
      "DPP-4 inhibitor",
      "GLP-1R agonist",
      "PPAR-γ activator",
      "SGLT2 inhibitor",
    ],
    correct: "PPAR-γ activator",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the effects and adverse effects related to different glucose lowering agents. The answer here is (D), the -glitazone drugs. This is because these drugs, although effective at glucose lowering, have been shown to cause distal bone fractures, weight gain, edema, and worsen CHF. Distal bone fractures are a big risk in post-meopausal women due to their decreased estrogen levels, leading to weaker bones. A younger male patient will more likely tolerate these effects better. There is one (E) SGLT2 inhibitor (Canagliflozin) that does increase bone fracture risk, but other SGLT2i do not have the same effect and are more associated with yeast infections, polyuria, and hyperkalemia. (B) is associated with nasal stuffiness. (C) is associated with nausea and gallstones. (A) is associated with GI effects like bloating, gas, and flatulence."
  },
  {
    id: 14,
    prompt:
      "Which of the following is true regarding DPP-4 inhibitors (sitagliptin) and GLP-1R agonists (dulaglutide)?",
    choices: [
      "DPP-4 inhibitors cause higher insulin secretions than GLP-1R agonists",
      "DPP-4 inhibitors decrease gastric emptying more than GLP-1R agonists",
      "DPP-4 inhibitors tend to have positive cardiac effects, while GLP-1R agonists are cardiac neutral",
      "GLP-1R agonists achieve pharmacological concentrations, while DPP-4 inhibitors have a ceiling effect dependent on physiological GLP-1 and GIP concentrations",
      "GLP-1R agonists are taken orally and DPP-4 inhibitors are SC injections",
    ],
    correct:
      "GLP-1R agonists achieve pharmacological concentrations, while DPP-4 inhibitors have a ceiling effect dependent on physiological GLP-1 and GIP concentrations",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain: "This question requires understanding the differences between the incretin agents: DPP-4i (-gliptin) and GLP-1R agonists (-glutide/–enatide). (D) is the true statement. GLP-1R agonists act directly on the receptor, hence achieve pharmacological concentrations, while DPP4i efficacy is achieved by inhibiting the breakdown of GLP-1, GIP, hence its effect is based on the physiological concentrations that are reached by the body’s own secretion of GLP-1 and GIP. The other choices can be made true. (A) GLP1R agonists cause higher insulin secretions. (B) GLIP-1R decreases gastric emptying (both (A) and (B) can be achieved at pharmacological concentration). (C) DPP4i are the class of drugs that are entirely cardiac neutral (no positive benefits for MACE), while GLP-1R are (mostly) cardiac positive (exenatide is neutral). (E) DPP-4i are oral (-gLIPtin), and GLP-1R are SC injections."
  },
  {
    id: 15,
    prompt:
      "How does canagliflozin restore tubular glomerular feedback in early diabetic nephropathy?",
    choices: [
      "Inhibition of SGLT2 in the proximal tubule will DECREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will DECREASE Na+ delivery to the macula densa, thereby causing afferent arteriole DILATION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICION to normalize GFR",
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole DILATION to normalize GFR",
    ],
    correct:
      "Inhibition of SGLT2 in the proximal tubule will INCREASE Na+ delivery to the macula densa, thereby causing afferent arteriole CONSTRICTION to normalize GFR",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the mechanism of SGLT2 inhibitors renal physiology, and diabetic nephropathy. In early diabetic nephropathy there is hyperfiltration (increase GFR), due to increased reabsorption of Na+ via SGLT2 (cotransporter of Na+ and glucose) at the proximal tubule. This leads to decreased Na+ delivery to the macula densa, which results in afferent arteriole vasodilation (tubuloglomerular feedback (TGF)). Therefore, if SGLT2 is inhibited by canagliflozin, then there will be increased delivery of Na+ to the macula densa, which causes the TGF to send a signal for afferent arteriole vasoconstriction to normalize the GFR (decrease). Hence, SGLT2i are renal protective. This mechanism does explain its side effects like polyuria, volume depletion, hyperkalemia could occur (maybe due to less RAAS activation caused by decreased Na delivery to macula densa), mycotic infections (increase glucose delivery to the urinary system - more nutrients for microbes to use)."
  },
  {
    id: 16,
    prompt:
      "A 36 y/o patient with a history of T2DM arrives at the ER with hypotension, tachycardia, and shortness of breath. His breathing is described as rapid deep inspirations and he smells “fruity”. Initial labs report a wide anion gap acidosis (27 mM), positive urine ketones, elevated β-OHbutyrate (12 mM), and slightly elevated serum osmol (300 mOsm/kg). A plasma glucose comes back normal. You don’t know what medication he is on so you call the patient’s family doctor. Which one of his following medications is most likely to have caused the presented case?",
    choices: ["Acarbose", "Dapagliflozin", "Glyburide", "Exenatide", "Insulin"],
    correct: "Dapagliflozin",
    tags: ["PD", "hard", "MoA", "Side effects", "ER", "Endocrinology"],
    explain: "This question requires understanding SGLT2 inhibitors as a cause of euglycemic DKA. In this vignette, we are presented with a patient with T2DM with euglycemic DKA. We think this because of his presentation (recent infection -precipitating factor, fruity, rapid deep inspirations, hypotensive, tachycardia, SoB) and his labs show a wide anion gap acidosis, positive urine ketones, elevated β-OHbutyrate, slightly elevated serum osmol, but his plasma glucose is normal, hence euglycemic DKA. In rare cases, SGLT2i can cause euglycemic DKA. It is thought that after a precipitating factor like an illness (increased coutnergergualtory hormone of insulin), there is decreased insulin and increased glucagon. This causes lipolysis, gluconeogenesis, resulting in increased ketone production (ketosis). However, due to glycosuria caused by SGLT2i, the plasma glucose levels are kept in the normal range and this coupled with the volume depletion due to the polyuria of SGLT2i."
  },
  {
    id: 17,
    prompt:
      "How does the mechanism of action of acarbose achieve its therapeutic objective?",
    choices: [
      "Induces GLP-1 release, thereby increasing insulin secretion",
      "Inhibits α-glucosidase, thereby preventing the breakdown of polysaccharides to reduce the amount of monosaccharides available for absorption",
      "Inhibits Na+ cotransport carrier, thereby reducing monosaccharide absorption",
      "Inhibits salivary amylase, thereby reducing the breakdown of starch to reduce the amount of monosaccharides available for absorption",
    ],
    correct:
      "Inhibits α-glucosidase, thereby preventing the breakdown of polysaccharides to reduce the amount of monosaccharides available for absorption",
    tags: ["PD", "easy", "MoA", "Endocrinology", "GI"],
    explain: "This question requires recognizing the mechanism of acarbose. (B) correctly describes the mechanism of action. Essentially, acarbose reduces the absorption of glucose. This is why it is better for postprandial hyperglycemia (limit the glucose absorbed after a meal), multiple doses per day (after meals). Site of action also explains GI side effects - gas, bloating, flatulence because the unabsorbed sugars can be used by gut microbes, increasing their activity (respiration), which produces more gas in the intestine leading to bloating, gassiness, and farting."
  },
  {
    id: 18,
    prompt:
      "An 18 y/o patient arrives at the ER after collapsing at a college party. He presents with abdominal pain, nausea, vomiting, tachypnea and altered mental status. He complains of feeling extremely warm. An arterial blood gas shows acidemia and low [HCO3-]= 8 mM. Electrolytes show a [Na+]= 140 mM (normal), [K+] = 4 mM (normal)  [Cl-] = 110 mM (normal). Plasma glucose is normal. Which of the following is the LEAST likely to cause this presentation?",
    choices: [
      "Ethanol",
      "Propranolol",
      "Metformin",
      "Methanol",
      "Salicylates/aspirin",
    ],
    correct: "Propranolol",
    tags: ["PD", "hard", "ER", "Nephrology"],
    explain: "This question requires recognizing the causes of wide anion gap acidosis. In this vignette, we are presented with a patient with a wide anion gap (WAG) metabolic acidosis as shown by the acidemia, low bicarb, normal Na+, and normal Cl-. In fact the anion gap can be estimated: [140 - (110+8)] = 22 (>16 mEq/L). The causes of WAG are summarized in different mnemonics like (CAT)-MUDPILES or GOLDMARK. In this case, (A), (D), (E) can be ruled out since they are represented by the M, E, and S in MUDPILES. We are left with (B) and (C). The drug that is LEAST likely to cause this presentation is (B) propranolol. This is because metformin is associated with lactic acidosis (explained in another question) in patients with hepatic/renal dysfunction. In fact the cause of WAG due to ethanol intoxication is also due to lactic acidosis."
  },
];
