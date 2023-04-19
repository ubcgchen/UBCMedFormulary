/**
 * Questions for Jaundice week
 * @author Michael Gong, UBC VFMP 2025
 */

export const Jaundice = [
  {
    id: 1,
    prompt:
      "Which of the following drugs for Hep C is correctly matched with its respective mechanism of action?",
    choices: [
      "Elbasvir - NS3/4A Protease inhibitor",
      "Grazoprevir - NS5B inhibitor",
      "Ledipasvir - NS5A inhibitor",
      "Sofosbuvir - NS3/4A Protease inhibitor",
    ],
    correct: "Ledipasvir - NS5A inhibitor",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires recognizing the Hep C medications. The correct matches are: (A) Elbasvir - NS5A inhibitor, (B) Grazoprevir - NS3/4A Protease inhibitor, (C)- Ledipasvir - NS5A inhibitor, (D) sofosbuvir - NS5B inhibitor. The method to remember the targets: -Asvir = ns5A, -Buvir = -ns5B, -PRevir = PRotEase."
  },
  {
    id: 2,
    prompt:
      "A 28 y/o patient presents to the ER with diffuse abdominal pain, nausea, and vomiting. She was brought to the ER by her roommate after finding her hunched over in the bathroom with an empty drug acetaminophen bottle. Her roommate says she just came back from a business trip and thinks she may have been down for over 24 hrs. The patient is not jaundiced on inspection. The doctors have reasonable suspicion that she took a dose ≥ 9g. Her liver function test shows high normal INR, and low normal albumin. AST and ALT are ~1300 IU/L, bilirubin is high normal. Given this presentation, the doctors should start her on what medication and why?",
    choices: [
      "EtOH to outcompete acetaminophen for CYP2E1 mediated metabolism thereby reducing NAPQI production",
      "Lactulose to trap NH3 into the colon in the form of NH4+ for protection against hepatic encephalopathy",
      "N-Acetylcysteine (NAC) to restore glutathione stores for protection against NAPQI mediated oxidative damage",
      "Octreotide to reduce splanchnic vasodilation for protection against spontaneous esophageal variceal bleed secondary to liver failure",
      "She is in acute liver failure, therefore no drug will save her. Get her on the transplant list",
    ],
    correct: "N-Acetylcysteine (NAC) to restore glutathione stores for protection against NAPQI mediated oxidative damage",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding drug-induced hepatitis, specifically with acetaminophen. In this vignette we are presented with a suspected acetaminophen overdose. The collateral history given by the roommate and her AST/ALT in the 1000s should make us think of a drug induced hepatitis (other 1000s club members: shock liver, autoimmune hepatitis, acute viral hepatitis, WIlsons (rare), HELLP/AFLP - (pregnant), Budd chiari, etc..). Her liver function tests and bilirubin are still in the normal range, and the lack of altered mental status make it unlikely to be acute liver failure (rule out (E)). The antidote for acetaminophen overdose is correctly described in (C). NAC will restore glutathione stores in the liver, which will allow the liver to metabolize NAPQI (the toxic metabolite) into a nontoxic metabolite that can be renally excreted. Acetaminophen itself is not toxic to the liver, but rather when it undergoes metabolism into NAPQI, which is mediated by the CYP2E1 isoenzyme pathway. (A) describes a potential protective effect of EtOH in an acute ingestion of acetaminophen, where competition for the metabolic enzyme actually leads to decreased production of toxic metabolite. Obviously, this is not recommended. In patients with chronic EtOH damage to the liver however, the toxic dose of acetaminophen is lowered due to reduced capacity of the liver to handle NAPQI-induced damage during tylenol metabolism. (B) is used in hepatic encephalopathy and not acute acetaminophen overdose (D) is used in variceal bleeding, which is not the case here."
  },
  {
    id: 3,
    prompt:
      "A 40 y/o female presents to the ER with severe RUQ pain that radiates to her upper back. Her vitals are BP 110/70, HR 100, Temp 39.5degC, RR 20, O2Sat 98% RA. She recalls this starting a few days ago and has gotten worse. On inspection, she appears to be jaundiced. The abdo exam reveals a negative Murphy’s sign, abdominal distension, and tenderness in the RUQ and epigastric region. She does not appear to be altered. An abdo ultrasound is done and reveals a dilated common bile duct (8mm) with shadowing of a suspected stone, no stones in the gallbladder, and the pancreatic head was not visualized due to bowel gas. Her labs show: elevated total and direct bilirubin, elevated WBC (20), elevated Alk Phos/GGT, elevated AST/ALT, while lipase, albumin, and INR are all within the normal range. The on-call interventional gastroenterologist prepares to do an ERCP, you start the patient on what medication?",
    choices: [
      "Metronidazole",
      "Octreotide",
      "Piperacillin-Tazobactam",
      "Vancomycin",
      "Ursodeoxycohlic acid",
    ],
    correct: "Piperacillin-Tazobactam",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "TThis question requires understanding the management of acute cholangitis. In this vignette we are presented with a patient with signs of biliary disease. The initial inspection already yields Charcot’s triad for acute cholangitis: fever, jaundice, RUQ pain. This pain radiates to the back and appears to also be in the epigastric region. Murphy’s sign can be negative in acute cholangitis. Her BP is fairly stable and she is not altered (not Reynolds pentad yet). The abdo ultrasound further suggests our suspicion of acute cholangitis secondary to an obstruction (in this case possible a stone - choledocholithiasis) given the dilated CBD and shadowing. The labs further support our hypothesis with the elevated WBC, elevated liver enzymes, and we are less suspicious of pancreatitis with the normal lipase. An ERCP is ordered both to confirm the diagnosis and remove the obstruction. We are fairly certain of acute ascending cholangitis, which usually (but not always) occurs secondary to an obstruction, leading to cholestasis. This causes a build up of pressure in the biliary system, which prevents IgA secretion to protect the bile ducts from bacteria. Colonization and further build up of toxins due to the obstruction will cause inflammation of the ducts, which can now spread to the rest of the body through the nearby vessels and lymph system. Therefore, the treatment of acute cholangitis are antibiotics that cover the common pathogens of the GI tract - anaerobes and gram negative. Thus, the correct answer is (C). Pip/Tazo covers both anaerobes and gram negative and given the life threatening nature of acute cholangitis, we would want to make sure our empiric therapy can keep this infection under control prior to surgical intervention. Some other options could include ceftriaxone + metronidazole, but flagyl (A) alone would not be sufficient since it only sufficiently covers anaerobes. (B) would be used in esophageal varices. (D) would not cover anaerobes and Gram negative. Vanco is great for C Diff and gram +. (E) is used for primary biliary cirrhosis, not cholangitis; mechanistic explanation provided in another question."
  },
  {
    id: 4,
    prompt:
      "A 65 y/o patient presents to the ER after bloody vomiting 2x at home. There was no pain associated with the vomiting.  He recalls having black tarry stools a few days ago, but thought it was just from his food. His medical history includes cirrhosis. His vitals are BP 90/60, HR 120, RR 20, Temp 37C, O2Sat 98% RA. The physical exam reveals some stigmata of liver disease, such as ascites. The exam is not completed as he vomits blood again and has to be stabilized with IV fluids, FFP, and PLTs. A point of care Hgb shows 105. Emergent endoscopy is scheduled, but given this presentation you decide to start treatment with:",
    choices: [
      "Ceftriaxone (IM), Octreotide (IV), Pantoprazole (IV)",
      "Ceftriaxone (IM), Octreotide (IV), Pantoprazole (IV), Propranolol (IV)",
      "Ciprofloxacin (PO), Octreotide (IV), Pantoprazole (IV)",
      "Octreotide (IV), Pantoprazole (IV)",
      "Octreotide (IV), Pantoprazole (IV), Propranolol (IV)",
    ],
    correct: "Ceftriaxone (IM), Octreotide (IV), Pantoprazole (IV)",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the acute management of esophageal variceal rupture. In this vignette we are presented with a patient that has painless bloody emesis. He also has black tarry stools, which together point to an upper GI bleed, while the painless nature suggests esophageal varices rupturing. This hypothesis is further supported by his medical history of cirrhosis, which would cause portal hypertension, leading to congestion and dilation of the vessels that form the portacaval anastomosis. His vitals also suggest some sort of bleed given the decreased BP and compensatory tachycardia. The management of this case would include ABCs, which we started with fluid resuscitation and correcting his coagulopathy with FFP (liver dz causes decreased coagulation proteins, therefore we replenish these with FFP) and PLT. The pharmacological management is correctly described in (A). We want to give an ABX, a PPI, and somatostatin analogue. The ABX is for prophylaxis to prevent spontaneous bacterial peritonitis. Ceftriaxone is a 3rd gen cephalosporin with a broad spectrum, so would be a good choice. Moreover, prevention of infection in an upper GI bleed is important to prevent sepsis, which could cause more coagulopathy and make bleed control more difficult. Octreotide is used to vasoconstrict splanchnic vessels (also inhibit glucagon, which vasodilates these vessels) to reduce portal pressure. The splanchnic vessels are those of the GI tract, which feed into the portal system, therefore if we reduce blood flow there via vasoconstriction, we decrease the blood entering the portal system, thereby reducing portal pressure to slow the bleed. Somatostatin (which is what octreotide is based off) can be thought of as our “anti-digestive” hormone as it inhibits insulin, glucagon, and acid secretion. During and right after meals our splanchnic vessels dilate to deliver absorbed nutrients to the portal system, hence an “anti-digestive” hormone would inhibit this process. The PPI is given to inhibit the acidification because low pH environments inhibit PLT activity and increase the degradation of PLT plugs via pepsin. (B) is wrong because beta blockers are sometimes held during an acute bleed. This could be because propranolol will decrease cardiac output, which would not be good in a bleed as this could worsen the hypovolemia leading to a larger drop in BP and end organ perfusion, hence it is held during these cases. Propranolol is used in the secondary prevention of esophageal varices as it can reduce portal pressure (explained in another question). (C) Ciprofloxacin is a possible ABX to use in preventing SBP, however the PO formulation would not be ideal in a vomiting patient as we can not guarantee that the dose will make it to the site of absorption in the small bowel (could be aspirated), therefore the pharmacokinetic issues is what makes (C) wrong. If it was Cipro (IV), then that would be a possible alternative. Side note: we would not transfuse PRBC in this case because his Hgb >100 because this could increase his portal pressure more, hence worsening the bleed."
  },
  {
    id: 5,
    prompt:
      "Which of the following correctly describes the pharmacodynamics behind the use of somatostatin analogues like octreotide in acute variceal bleeds?",
    choices: [
      "Inhibits stomach acidification, thereby increasing platelet activity to promote primary hemostasis",
      "Inhibits the release of growth hormone from the anterior pituitary, leading to decreased liver growth, thus reducing blood volume in the portal system",
      "Off-target antimicrobial effects that decrease microbiota growth in the splanchnic vessels, thus reducing mortality related to peritonitis",
      "Promotes diuresis of fluids, therefore reducing blood volume and reducing ascites",
      "Vasoconstricts splanchnic vessels and decreases vasodilatory promoting hormones, which reduces blood flow, leading to decreased portal pressure",
    ],
    correct: "Vasoconstricts splanchnic vessels and decreases vasodilatory promoting hormones, which reduces blood flow, leading to decreased portal pressure",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the pharmacodynamics of octreotide (somatostatin (SS) analogue). (E) correctly explains the reasoning behind its use in esophageal variceal bleeds, although the evidence of its efficacy is not that strong. The splanchnic vessels are those of the GI tract, which feed into the portal system, therefore if we reduce blood flow there via vasoconstriction, we decrease the blood entering the portal system, thereby reducing portal pressure to slow the bleeding. Essentially we are decreasing the inflow into the portal system. Somatostatin (which is what octreotide is based off) can be thought of as our “anti-digestive” hormone as it inhibits insulin, glucagon (which has vasodilatory activity on the splanchnic vessels), and acid secretion. When we eat meals our splanchnic vessels dilate to deliver absorbed nutrients to the portal system, hence logically an “anti-digestive” hormone would inhibit this process. (A) describes PPI usage. (B) is partly true mechanistically, as octreotide can be used to treat growth hormone excess from the ant pituitary gland since SS inhibits GH release, but the rest is just made up nonsense. (C) is false. (D) describes the effects of diuretics on ascites and the portal system."
  },
  {
    id: 6,
    prompt:
      "Which of the following is an expected effect of propranolol on patients with portal hypertension?",
    choices: [
      "Decreases cardiac output, therefore reducing blood flow into the portal system",
      "Decreases splanchnic vasodilation, therefore reducing portal venous pressure",
      "Increases gut motility, therefore reducing gut absorption of nutrients, leading to decreased postprandial blood flow to the portal system",
      "Contraindicated in patients with portal hypertension due to decreased cardiac output leading to hepatic outflow obstruction",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding portal hypertension management. The correct answer is (E). Both A and B correctly describe the mechanism on reducing portal hypertension. Propranolol is a non selective beta blocker (NSBB), which allows it to block both β1 and β2 adrenoreceptors. Blocking β1 will decrease cardiac output (decrease HR and contractility), which in turn leads to less blood reaching the splanchnic vessels leading to decreased inflow into the portal system, resulting in reduced portal pressure. Blocking β2 will block vasodilation of the splanchnic vessels, which again reduces inflow into the portal system and reduces portal venous pressure. This reduction in portal pressure allows NSBB to be used in secondary prevention of esophageal variceal bleeds as it could reduce the dilation of the shunts. However, NSBBs do NOT prevent the formation of these varices. NSBBs are usually held during active variceal bleeds when there are signs of hemodynamic instability because we don’t want to worsen the hypovolemic state and put them into shock if we inhibit the compensatory cardiac response. (C) is not the main mechanism of reducing blood flow. (D) is not true, but if the person’s right heart was acutely failing, then hepatic congestion could occur."
  },
  {
    id: 7,
    prompt: "A 65 y/o patient in the CTU has a history of cirrhosis and was recently admitted for a large variceal bleed that was managed with band ligation. He has not passed any stools in the days since the procedure. He now presents confused and lethargic, and is not oriented to time or place. The nurse notes that he has some tremor and is sleepy throughout the day. The physical exam reveals icterus, ascites, palmar erythema, spider angiomas, and asterixis. Which of the following correctly describes the mechanism of a treatment for his presentation?",
    choices: [
      "Absorbed into the bloodstream and is first-pass metabolized into acetate, which converts NH3 into NH4+ ",
      "Metabolized by gut microflora leading to colon acidification and ion trapping of NH3 into NH4+",
      "Metabolized by gut microflora leading to production of peristalsis stimulating molecules allowing for a laxative effect",
      "Vasoconstricts splanchnic vessels, thereby decreasing the amino acid delivery to the liver, thus reducing production of NH3.",
      "B and C",
    ],
    correct:
      "B and C",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the mechanism of lactulose in hepatic encephalopathy (HE). In this vignette we are presented with a patient with cirrhosis and showing signs of Grade III HE (disorientation confused, lethargic, asterixis). He has possible precipitating factors of HE that include constipation, recent procedure that most likely involved sedation (benzos, opioids are used for sedation in endoscopy), and GI bleeding (increased protein load into the stomach). The treatment for HE (acutely) includes lactulose, metronidazole, and PEG. The goal of the treatment is to remove and reduce NH3 from the body since NH3 is toxic at high amounts and evidently causes HE. Metronidazole is an ABX used to stop bacteria growth from producing more NH3 (none of the options) and PEG is an osmotic laxative to help stimulate the removal of toxic waste. Lactulose has two main mechanisms in HE that are explained in (B) and (C), hence (E) is the correct answer. Lactulose is a non absorbable sugar that is metabolized by gut bacteria. The metabolism of this leads to acidification of the colon and production of molecules that stimulate peristalsis, thus causing a laxative effect. Moreover, lactulose promotes the uptake of NH3 by bacteria for amino acid production, which leads to production of NH4+, which is trapped in the colon (ion trapping since charged molecules can;t pass freely.) The acidification of the colon also promotes NH3 to protonate into NH4+. This also creates a concentration gradient for NH3 to follow down into the colon to be trapped (high [ ] in blood vs low [ ] in colon). The acidification of the colon can also lead to killing of urease + bacteria, which produce NH3. Through this multimodal mechanism, decreased absorption and increased excretion of NH3 can be achieved to treat HE."
  },
  {
    id: 8,
    prompt: "Which of the following is true regarding the use of rifaximin?",
    choices: [
      "Antibiotic, stops gut bacteria growth to decrease NH3 production",
      "Hepatotoxic, therefore is contraindicated in cirrhosis and HE",
      "Long term use in preventing HE leads to peripheral neuropathy",
      "Poorly absorbed, therefore has little use in preventing HE",
      "A and D",
    ],
    correct: "Antibiotic, stops gut bacteria growth to decrease NH3 production",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacology of rifaximin. The correct answer is (A). Rifaximin is an rifamycin antibiotic (rifampin is from the same class) that inhibits RNA polymerase in bacteria (remember Rifa for RNA Poly). The use in preventing hepatic encephalopathy (HE) is to stop the growth of bacteria that may be producing NH3, thereby reducing the amount of NH3 that can be absorbed into the blood, which would have led to hyperammonemia. This is usually used in conjunction with lactulose to minimize NH3 production and increase the excretion of NH3. Another important property is that it is POORLY absorbed, which allows it to locally act in the gut and minimize systemic exposure that may lead to unwanted side effects. With that knowledge, we can rule out (B) as the liver would most likely not be exposed to it (rifampin however has hepatotoxic side effects). We can rule out (C) as it won’t be absorbed to cause these systemic side effects. Peripheral neuropathy is linked to long term use of metronidazole, which is used in the management of HE in the short term. (D) has a true statement, but the wrong reason."
  },
  {
    id: 9,
    prompt:
      "A 70 y/o patient in the medicine wards starts to complain of diffuse abdominal pain. On palpation there is guarding and tenderness in all four quadrants. He has a history of cirrhosis. The nurse also notes that his urine output has been near zero for the last 2 days. He has not had any invasive procedures in the last 12 months, with the last one being a colonoscopy. His vitals: BP 120/80, HR 120, RR 16, T 38.9C. His physical exam shows stigmata of liver disease with severe ascites. Labs show elevated creatinine, elevated AST/ALT, low albumin, and high INR. The team decides to do a paracentesis, which reveals severely elevated polymorphonuclear neutrophils (300 cells/mm3). Treatment of this presentation is indicated with which of the following?",
    choices: [
      "Cefotaxime",
      "Ciprofloxacin",
      "Lactulose",
      "Octreotide",
      "Rifaximin",
    ],
    correct: "Cefotaxime",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding the treatment of spontaneous bacterial peritonitis (SBP). In this vignette we are presented with a patient with cirrhosis who now has query peritonitis. We hypothesize this given the abdo pain, fever, and tachy, and probable AKI. We think this could be SBP given his cirrhosis and ascites and he has no known precipitant. His last invasive procedure was many months ago. The team does paracentesis, which shows elevated PMNs. THis is diagnostic of SBP, therefore we would start treatment with (A). Cefotaxime is a 3rd gen cephalosporin like ceftriaxone (which can also be used interchangeably), which gives it a broad spectrum of activity against gram + and gram - bacteria. Another property of cefotaxime that makes it ideal for SBP is that it achieves high blood and ascites fluid levels. (B) is a fluoroquinolone and generally used as prophylaxis for those that meet the requirements (any of: previous SBP, ascitic fluid protein <10 g/L or <15g/L with Childs-Pugh Class B score ≥ 9.). (C) is used for hepatic encephalopathy (HE) to remove and excrete NH3. (D) Octreotide is used to decrease portal pressure in variceal bleeds. (E) is used to help decrease NH3 amounts in HE."
  },
  {
    id: 10,
    prompt:
      "A 65 y/o patient with cirrhosis presents to his hepatologist with ascites. The lifestyle changes have very little effect on managing his ascites and he refuses to stop eating pickles because “my neighbor said it’s good for you”. His abdo exam shows a positive fluid wave test and caput medusa, along with other stigmata of liver disease. His other comorbidities include HTN, which is well managed. His most recent kidney function results were normal and lytes were within the normal range. He has elevated liver enzymes. Bilirubin normal, albumin 34 (35 LLN), and INR 1.3 (1.2 ULN). Ascites protein not measured. He has never had spontaneous bacterial peritonitis before. Which of the following mechanisms would be MOST helpful in this case?",
    choices: [
      "DNA gyrase and topoisomerase inhibitor ",
      "Inhibits ENaC in the collecting ducts",
      "NKCC2 inhibitor in the ascending loop of Henle",
      "A and C",
      "B and C",
    ],
    correct:
      "B and C",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management of ascites. In this vignette we are presented with a patient whose ascites has not responded to lifestyle changes such as salt restriction (in fact he continues to eat pickles). In this case, we would heavily consider starting him on diuretic therapy. This would include 100 mg spironolactone OR 5 mg amiloride + 40 mg furosemide. Thus, (E) is the correct answer as it correctly describes the mechanism of amiloride (B) and furosemide (C). Diuresis of the excess fluid will help manage hos volume overload. (A) describes the mechanism of ciprofloxacin, which would be an option to add if our patient was at risk for SBP such as a previous SBP, ascitic fluid protein <10 g/L or <15g/L with Childs-Pugh Class B score ≥ 9. In our case we don’t have the ascites fluid protein levels, and he appears stable with no super concerning lab results (his Child Pugh B score 7), therefore long term prophylaxis with cipro is not necessarily needed, thus would NOT be the MOST helpful."
  },
  {
    id: 11,
    prompt:
      "A 65 y/o patient with ascites was recently started on pharmacological management, but could not tolerate the worsening of his gynecomastia. Which of the following changes can be done to minimize the side effect and still manage his ascites?",
    choices: [
      "Remove spironolactone",
      "Switch amiloride to spironolactone",
      "Switch furosemide to amiloride",
      "Switch propranolol to spironolactone",
      "Switch spironolactone to amiloride",
    ],
    correct: "Switch spironolactone to amiloride",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires understanding the pharmacological management of ascites and side effects associated with those medications. In this vignette our patient finds the worsening of gynecomastia (which can occur in cirrhosis due to increased conversion of androgens into estrogen) to be intolerable. The medication that treats ascites and may cause gynecomastia is spironolactone. Therefore, the change we would do is (E). This is because both spironolactone and amiloride are K+ sparing diuretics, but have different mechanisms. Spironolactone is a mineralocorticoid receptor antagonist, which means it inhibits the receptor that aldosterone binds to. This blocks any effect of aldosterone such as insertion of ENaC channels on the apical membrane of the collecting ducts. Amiloride directly inhibits ENaC channels, but does not block other effects of aldosterone, essentially amiloride blocks one of the end results of aldosterone. Both drugs result in decreased reabsorption of Na+ and water, which in turn leads to increased K+ retention. Through this diuretic mechanism a decrease in blood volume occurs, thus decreasing the ascites fluid. In the treatment of ascites the K+ sparing diuretics help decrease the electrolyte abnormalities that may occur when using furosemide (less hypokalemia now). The standard dosing regime is 100 mg spironolactone + 40 mg furosemide  (100:40 ratio) or 5 mg amiloride + 40 mg furosemide. How does spironolactone cause gynecomastia? Spironolactone also blocks the androgen receptor, thus it blocks the effects of testosterone and DHT, thus spironolactone can be used to treat hirsutism, feminizing hormone therapy, and more."
  },
  {
    id: 12,
    prompt:
      "A 67 y/o patient presents to his GP to go over some lab results. She is a chronic Hep B carrier and was recently diagnosed with mild cirrhosis (ChildPughA) and her most recent U/S revealed a suspicious nodule on her liver. Her blood work shows an elevated alpha-fetoprotein, HBsAg +, anti-HBc IgG+, anti-HBs -, AST/ALT slightly elevated (~20 IU above the ULN), decreased albumin and normal INR. She is sent for a multiphase CT scan w/ contrast. The study reports hypervascular enhancement during the arterial phase and washout during the portal venous phase of a 4 cm nodule in the right lobe and 3 cm nodule in the left lobe. A provincial diagnosis is made from this and she is worked up for any other growths, which reveals a mass in her lungs (RML). Given this presentation, which of the following medications is most likely used in the management?",
    choices: [
      "5-FU (nucleoside analogue anti-metabolite - commonly used in colon and breast cancer, etc..)",
      "Cetuximab (anti-EGFR monoclonal antibody - commonly used in metastatic colon cancer and head+neck cancer)",
      "Irinotecan (DNA topoisomerase I inhibitor - commonly used in colon and small cell lung carcinoma)",
      "Sorafenib (Tyr kinase inhibitor - commonly used in advanced HCC and renal cell carcinoma)",
      "Liver resection is the only option",
    ],
    correct: "Sorafenib (Tyr kinase inhibitor - commonly used in advanced HCC and renal cell carcinoma)",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the diagnostic work up for HCC and the treatment. In this vignette we are presented with a patient with mild cirrhosis and abnormal lab findings. These lab findings point towards a malignancy, specifically HCC, given the alpha-fetoprotein elevation, her HepB carrier status, liver enzyme elevation (nonspecific), and some abnormal liver function (nonspecific). The CT w/ contrast showing hypervascular enhancement during the arterial phase and then washout during the portal phase of the suspicious nodules are usually enough to diagnose HCC. The enhancement during the arterial phase is thought to be the increased hepatic arterial supply to the tumor, thus allowing it to take up more contrast during this phase relative to the rest of the liver parenchyma. Given this diagnosis, we therefore should use medications that are directed at treating HCC and not metastatic lesions, which would have required the use of chemotherapies intended for the primary malignancy. Therefore, (D) is the correct answer. Tyr kinases like sorafenib target angiogenesis factors like vascular endothelial growth factors, and more. This mechanism is thought to be why Tyr kinases are useful against HCC, which is a highly vascularized malignancy.  Metastatic liver cancer is more common than HCC, and tends to arise from the colon, lungs, or breasts. This also means that treating metastatic lesions in the liver require using chemotherapies that can kill the primary tumor cell type."
  },
  {
    id: 13,
    prompt:
      "A 45 y/o female presents generalized pruritus and fatigue to her GP that has lasted for a few months. Her past medical history includes Celiac, Grave’s, T1DM, which are managed with diet, insulin, levothyroxine (previous thyroidectomy). She does not drink EtOH. The physical exam reveals scleral icterus, excoriations on her skin, and mild hepatomegaly. The rest of the exam is unremarkable. Her labs show: total bilirubin 100 (ULN 18), ALT 1500, AST 1300, GGT 200 (ULN 65), ALP 200 (ULN 120), INR slightly elevated, albumin 34 (LLN 34), IgG elevated, ANA+, ASMA+, AMA -, TSH normal. The most likely diagnosis in this case could lead to portal hypertension, which prevents the use of _____ for the management of her disease?",
    choices: [
      "Azathioprine",
      "Budesonide",
      "Prednisone",
      "Tacrolimus",
      "Ursodeoxycholic acid (UDCA)",
    ],
    correct: "Budesonide",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the diagnosis of autoimmune hepatitis (AIH) and the pharmacokinetic considerations in the treatment. In this vignette we are presented with a patient with jaundice, pruritus, and fatigue. Her exam also shows hepatomegaly, so we are thinking of a liver problem. Her blood results further support this hypothesis given the elevated bilirubin, and 1000s+ ALT and AST, which makes us think of our DDx for 1000s club (drug, autoimmune, shock, etc…). The cholestatic enzymes are also mildly elevated. We also see some abnormal liver function tests (INR) and albumin is borderline. An autoimmunity panel shows elevated IgG, ANA+ and ASMA+. This and the AST/ALT levels are highly suggestive of AIH and she has the risk factors (female, and has multiple autoimmune-related conditions in her PMHx). We differentiate this from PBC given the severely elevated AST and ALT over the cholestatic enzymes, and the autoimmune panel for PBC would be IgM elevated and AMA+. The treatment for AIH is immunosuppression that includes prednisone or budesonide and/or immunomodulators such as azathioprine (see Lower GI week for MoA) and tacrolimus. Therefore, we can rule out (E), which is used for PBC. The correct answer in this case is (B). Budesonide is a synthetic steroid that is highly potent, but undergoes extensive first pass metabolism. This makes it great for localized use within the GI tract (hence its use in IBD) or for the liver for AIH because it will decrease systemic exposure of the drug that could lead to many cortisol-related side effects. In cirrhosis or portal hypertension, there is extensive shunting that occurs due to the porto-systemic shunts. This means that the absorbed budesonide could be shunted away from the liver and reach systemic circulation, thus causing increased side/adverse effects and away from its target organ. Essentially, allowing it to bypass first pass metabolism. Side note: this is why some drugs are rectally administered drugs to bypass first pass metabolism (50% bypass) by being absorbed through the rectal portocaval anastomosis."
  },
  {
    id: 14,
    prompt:
      "A 45 y/o patient was recently diagnosed with invasive ductal carcinoma (breast cancer) and is going over some lab results with her GP-oncologist prior to chemotherapy. The lab results show the following: HBsAg +, anti-HBc IgG +, anti-HBc IgM -, anti-HBs -, HBV DNA is not elevated, and ALT/AST are slightly above the ULN. Given this information, what therapy (if any) would you recommend?",
    choices: [
      "Amoxicillin-clavulanate",
      "Grazoprevir",
      "Sofosbuvir",
      "Tenofovir",
      "Treatment not indicated - liver enzymes and HBV DNA are “normal”.",
    ],
    correct:
      "Tenofovir",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain: "This question requires understanding the treatment of Hep B. In this vignette we are presented with a patient who is about to undergo chemotherapy, which can suppress the immune system. Her Hep B serology comes back showing chronic Hep B infection (HBsAg +, anti-HBc IgG+, IgM -)  with no immunity (anti-Hbs neg). Her HBV DNA levels are not overly elevated and her liver enzymes are within the normal levels. In this case since she is about to undergo immunosuppression, treatment for Hep B would be warranted. This is because the immunosuppressive state can lead to reactivation of Hep B that will wreak havoc on her liver. If she wasn’t about to undergo chemo, then treatment would not be warranted and we would continue with the monitoring U/S, liver enzymes, HBV DNA every 6-12 mos. The correct answer in this case is (D). Tenofovir is a nucleoside analog inhibitor, thus inhibiting DNA synthesis. Tenofovir is also a mediation used in HIV. Other options include lamivudine and entecavir, which all are nucleoside analog inhibitors. (A) is an ABX… (B) is a protease inhibitor for Hep C, (C) is a NS5B inhibitor for Hep C."
  },
  {
    id: 15,
    prompt:
      "A 45 y/o male presents to his GP after some abnormal lab results are discovered. His past medical history: HIV+, T2DM, and dyslipidemia, which are managed with HAART (tenofovir, lamivudine, atazanavir), metformin, and rosuvastatin. He does not take other drugs (OTC, supplements or recreational). He drinks EtOH 4 beers/week (constant, never binged before) and does not smoke. He had a recent abdo ultrasound that showed mild hepatomegaly with increased echogenicity at a recent trip to the ER for gastroenteritis. His lab results show: ALT 150 (ULN 40), AST 145 (ULN 34), GGT 160 (ULN 65), ALP 130 (ULN 120), bilirubin normal, albumin low, INR normal, Hgb normal, MCV 110 (high), IgA elevated, ferritin elevated. The most likely diagnosis in this case could potentially be caused by which of the following drugs that our patient was exposed to?",
    choices: [
      "EtOH",
      "HAART",
      "Metformin",
      "Rosuvastatin",
    ],
    correct:
      "HAART",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the diagnosis and causes of secondary MAFLD (metabolic dysfunction associated fatty liver disease). In this vignette we are presented with a patient with suspected liver disease. We are told that he has hepatomegaly with echogenicity, which suggests fatty liver. His lab tests reveal elevated hepatocellular enzymes ~4x ULN (mild elevation) and even milder elevation of the cholestatic liver enzymes, which suggests an intrahepatic issue more than a duct issue. His liver function is fairly normal, with low albumin (could be nutrition). His MCV shows macrocytosis, and elevated IgA and ferritin. These together further suggest fatty liver disease. Macrocytosis could be due to B12/folate deficiencies that occur in patients with liver disease, or increased cholesterol deposition into the membranes of RBC. Fat in the liver induces an increase in IgA and ferritin (both EtOH and inflammation). Despite his 4 drinks/week we are less inclined to think this is alcoholic fatty liver disease (AFLD) because his AST and ALT are more or less equal. In AFLD, we’d expect ALT to be less than AST as shown: AST:ALT ratio is ≥2:1 (explanation coming soon - but essentially B6 deficiency and how the lab measures ALT results in this). The EtOH ingestion could however partly explain elevated ferritin and GGT. From his medical history he does have some metabolic disorders such as T2DM and dyslipidemia that could predispose him to metabolic dysfunction and MAFLD. Now that we have established that this is probably MAFLD, a known secondary cause would be (B). HAARTs are a combination of antivirals and are known to cause metabolic dysfunction and hepatic injury. (C) and (D) are not known to do this and in fact could help the patient with his metabolic dysfunction. (A) would suggest AFLD as the diagnosis."
  },
  {
    id: 16,
    prompt:
      "A  34 y/o female presents generalized pruritus and fatigue to her GP that has lasted for a few months. Her past medical history includes Celiac, hypothyroidism, dyslipidemia which are managed with diet, levothyroxine, and rosuvastatin. She does not drink EtOH. The physical exam reveals excoriations on her skin. The rest of the exam is unremarkable (no organomegaly, icterus, or other stigmata of liver disease). Her labs show: total bilirubin, albumin, and INR are normal, ALT 80 (ULN: 40), AST 45 (ULN: 34), ALP 350 (ULN: 120), GGT 550 (ULN: 65), elevated IgM, IgG normal, anti-mitochondrial Ab (AMA) +, ANA and ANCA -, TSH normal. Abdo U/S shows no dilated ducts. She is referred to a gastroenterologist who orders a MRCP. The most likely diagnosis can be managed with which of the following?",
    choices: [
      "Azathioprine",
      "Infliximab",
      "Prednisone",
      "Ursodeoxycholic acid (UDCA)",
      "None, surgical international with liver transplant is the only treatment",
    ],
    correct:
      "Ursodeoxycholic acid (UDCA)",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the diagnosis and treatment for primary biliary cholangitis (PBC). In this vignette we are presented with a patient with fairly nonspecific symptoms (though itching is thought to be caused by bile salt deposition in the skin). Her physical exam is fairly unremarkable. Her blood tests are concerning. She has mildly elevated hepatocellular enzymes, much more elevated cholestatic enzymes. This suggests a cholestatic picture The abdo U/S suggests an intrahepatic problem. Her panel for autoimmunity is concerning and she has risk factors for an autoimmune condition (female gender, medical history has 2 autoimmune-related diseases). She has elevated IgM, AMA+ and dyslipidemia. ALl of these together highly suggest the diagnosis of PBC. This disease leads to the destruction of small to medium sized intrahepatic bile ducts. We differentiate this from AIH given the more cholestatic picture in this case and the normal IgG, ANA -. We differentiate this from PSC given the ANCA -, and that we see no evidence of extrahepatic duct dilation on U/S (could be false negative). The first line treatment for PBC is (D). UDCA is thought to work in many ways such as improving bile flow, immunomodulation, and more, but its mainly thought to displace hepatotoxic hydrophobic endogenous bile that are stuck in the hepatocytes with more hydrophilic bile (UDCA) that is less toxic. (A) and (B) are treatments for AIH. (B) is a biologic treatment for many diseases such as IBD, which is associated with PSC. (E) is usually the end result of PBC, but the progression can be slowed with medical management such as UDCA."
  },
];
