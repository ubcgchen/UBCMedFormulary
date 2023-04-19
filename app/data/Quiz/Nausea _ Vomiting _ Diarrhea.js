/**
 * Questions for Nausea / Vomiting / Diarrhea week
 * @author Michael Gong, UBC VFMP 2025
 */

export const Nausea_Vomiting_Diarrhea = [
  {
    id: 1,
    prompt:
      " A 68 y/o patient presents to the ER with BP 110/74, HR 130, Temp 38.7C, diffuse abdominal pain, watery diarrhea (10x in the last 24 hrs). He denies any blood in the stool. On the patient’s charts you noticed that the patient was recently treated with ampicillin for listeria that has since been resolved. What potential major side effect of antibiotic use is being presented in this case?",
    choices: [
      "Drug induced hemolytic anemia",
      "C. Diff infection",
      "EHEC infection",
      "Activation of motilin receptors (increased uncoordinated peristalsis)",
      "Agranulocytosis (severe reduction in white blood cells)",
    ],
    correct: "C. Diff infection",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding an important side effect of ABX use. In this vignette, we are presented with an elderly patient who is febrile, tachycardic, diffuse abdominal pain, and diarrhea. We should be suspicious of a GI infection/pathology. We are told she was recently treated with an ABX. We then should immediately think of (B) C. Diff as the etiology of the patient’s presentation. ABX use will non-specifically kill commensal bacteria that make up the gut microbiome. This will create space for C. Diff to grow unchecked, which could lead to pseudomembranous colitis. This usually presents with watery or even bloody diarrhea, abdominal pain, and fever. (A) drug-induced hemolytic anemia is unlikely to present like this, and we aren’t told about any jaundice. (C) This is unlikely given that he doesn’t have bloody diarrhea and EHEC is usually associated with raw burgers not ABX exposure. (D) Although she has diarrhea, motilin receptor activation may seem like a possible cause, however she is febrile in this case, and motilin activation is associated with macrolide use and not ampicillin. (E) Agranulocytosis is unlikely given that the patient doesn’t look extremely sick, we also do not have a CBC w/ diff. Hence, C. Diff is the most likely etiology. In summary, if a patient presents with diarrhea ± fever/abdominal pain/nausea and recently finished a course of antibiotics, C. Diff should be high on the differential. (Question taken from MEDD411 pneumonia week)",
  },
  {
    id: 2,
    prompt:
      "A 7 y/o child presents to the ER with a 7 day history of nausea, vomiting, severe abdominal pain and bloody diarrhea. He is febrile and slightly hypotensive. His parents mention that he was at Uncle Brian’s (his favorite uncle) place and ate burgers that tasted “weird”. His abdomen is diffusely tender and distended. CBC w/ diff, peripheral blood film, LDH, and renal panel are ordered. In this case, which of the following medications would you be comfortable using to help treat the patient's symptoms and/or condition?",
    choices: [
      "Butylscopolamine (buscopan)",
      "Loperamide",
      "Metronidazole",
      "Ondanestron",
      "Vancomycin PO",
    ],
    correct: "Ondanestron",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding a contraindication of diarrhea medication and lower GI infection (hemorrhagic colitis). In this vignette, we are presented with a pediatric patient with suspected hemorrhagic colitis, given his severe abdo pain, bloody diarrhea, febrile (sometimes hemorrhagic colitis due to shigatoxin can be afebrile), and potential exposure to E. coli (funny tasting burger - undercooked?). We would be worried about HUS (triad of: thrombocytopenia, microangiopathic hemolytic anemia, and AKI), a complication of hemorrhagic colitis, since he is a child, hence the labs that were ordered. In this case there are many medications we’d want to avoid: (A) and (C). (A) buscopan is a muscarinic antagonist that reduces gut motility (remember PSNS = rest and digest, therefore muscarinic receptors promote gut motility for digestion). This will lead to less cramping, but increases the risk of toxic megacolon, since there will be decreased movement of the toxins out of the GI tract, so in a sense the toxins stay in the GI tract and cause more problems. Similarly, (C) loperamide (μ opioid agonist that doesn’t cross the blood brain barrier) should be avoided in the patient because it increases the risk of HUS and toxic megacolon due to the decreased gut motility. Hence, any drug that decreases gut motility should be avoided in patients with abdo distention and/or fever. (C) and (E) are both ABXs that cover anaerobes or C. diff. ABXs potentially cause increased toxin release as the bacteria are lysed, thus releasing the produced toxin. This is thought to also increase the risk of HUS. In this case, C. Diff is not the concern (no recent ABX exposure, and is rare in pediatric patients). Therefore, the only medication we would consider giving at this moment is (D), ondansetron, an antiemetic (5HT3 antagonist), especially given that this child is vomiting and has nausea. See GI week from MEDD411 for more explanation on ondansetron.",
  },
  {
    id: 3,
    prompt:
      "A 62 y/o patient presents to the ER with BP 100/74, HR 115, T 39C, RR 22 diffuse abdominal pain and watery diarrhea (15x in the last 24 hrs). The patient has been in and out of the hospital for the last 6 months for multiple infections and was treated with various antibiotics. The physical exam shows weak peripheral pulses, prolonged cap refill, cold extremities, and he complains of lightheadedness. His CBC w/ diff shows elevated white blood count. Other labs show elevated BUN and creatinine, and hypernatremia. A bolus 0.9% saline at 20 mL/kg over 20 minutes is administered and is started on metronidazole PO empirically. A stool sample for C. diff toxins comes back positive. Which of the following antimicrobials would you start the patient on?",
    choices: [
      "Add ceftriaxone (IM) + doxycycline (PO)",
      "Add piperacillin-tazobactam (IV)",
      "Add vancomycin (IV)",
      "Add vancomycin (PO)",
      "Continue metronidazole PO alone",
    ],
    correct: "Add vancomycin (PO)",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding C. diff infection and the treatment for it. In this vignette, we are presented with a patient with a C. diff infection. We should be suspicious of C. Diff prior to the toxin results given the prior ABX exposure. The patient also appears to be severely dehydrated and is started on IV fluid replacement. In this case we get the toxin results positive for C. Diff, therefore we should start him on the first line treatment vancomycin (PO), hence (D) is the correct answer. IV vancomycin would not address the infection that is occuring within the GI tract, thus PO is used to deliver the drug directly to the infection. Metronidazole also covers C. Diff, but is not as effective as PO vancomycin and comes with side effects that are less tolerated such as metallic taste and nausea. If this was a serious C. Diff infection we could consider the use of fidaxomicin, which is the most effective and has a better safety profile, but is expensive. (A) is an empiric ABX option for PID. (B) is not used for C. Diff.",
  },
  {
    id: 4,
    prompt:
      "A 45 y/o patient is undergoing elective surgery when it is discovered that he is MRSA positive. Prior to incision an IV loading dose + infusion with ABX1 is required. Unfortunately, equipment malfunction causes the infusion rate to be higher than expected. Subsequently an erythematous rash erupts all over his face, trunk, and arm. The patient complains of generalized itchiness and burning. Given this adverse reaction, what is the most likely mechanism of action of ABX1?",
    choices: [
      "Binds to bacterial membrane causing depolarization and K+ efflux",
      "Binds to the 50s ribosomal subunit to prevent translocation of peptide chain, thus inhibiting protein synthesis",
      "Binds to the 50s ribosomal subunit and blocks the peptide chain exit tunnel, thus inhibiting protein synthesis",
      "Inhibits 2 enzymes (dihydrofolate reductase + dihydropteroate synthetase) involved in purine synthesis, leading to decreased DNA synthesis",
      "Inhibits peptidoglycan synthesis by preventing elongation and crosslinking",
    ],
    correct:
      "Inhibits peptidoglycan synthesis by preventing elongation and crosslinking",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of action and a rare adverse reaction to vancomycin. In this vignette we are presented with a MRSA positive patient undergoing surgery, hence prophylaxis ABX is done. First we need to think of what covers MRSA: vancomycin (IV), daptomycin (IV), linezolid, TMP-SMX, doxycycline, clindamycin, and ceftaroline (IV), however all the choices describe an ABX with MRSA coverage: (A) - daptomycin, (B) - linezolid, (C)- clindamycin, (D) - TMP-SMX, (E) - vancomycin. Hence, we need to identify the adverse reaction. We are told that ABX was infused at a faster rate and this led to a large erythematous rash that the patient finds itchy and burning. This describes Vancomycin Flushing Syndrome (VFS) (previously Red Man Syndrome), which is an adverse reaction to a fast vancomycin infusion, hence (E) is the correct answer. VFS can also lead to hypotension, myalgia, SoB, and angioedema. The treatment for this is to stop the infusion and administer antihistamines. Sometimes this occurs even in normal rates, but is the first exposure to vancomycin. The pathophysiology is suggested to be vancomycin causing degranulation of mast cells and basophils, thus causing histamine release (remember the pharmacology of histamine from MEDD411?). Other important adverse effects of vancomycin to be aware of are: nephrotoxicity, cytopenias, DRESS (drug reaction and eosinophilia with systemic symptoms) - essentially rash, fever, lymphadenopathy, and eosinophilia with systemic involvement of other organs. Other adverse effects to be aware of the other choices are:  (A) daptomycin - myalgia, elevated CK, muscle weakness; (B) Linezolid - bone marrow suppression, peripheral/optic neuropathy, 5HT syndrome; (C) Clindamycin - C Diff, (D) TMP-SMX - addressed in another question.",
  },
  {
    id: 5,
    prompt:
      "A 69 y/o male patient with a long history of Parkinson’s disease is transferred from his home to the ER after signs of a severe infection are noted. At the ER his vitals are Temp 39 degC, BP 100/80, HR 120, RR 24, O2 sat 90%. The staff determine that he has altered mental status. Collateral provided by his wife reports that he has vomited a couple times this past week and he started coughing up green sputum today. Thorax percussion reveals dullness in the right lower lobe and auscultation reveals crackles and rales in the same area. A CXR shows consolidation in the right lower lobe. He also has a penicillin allergy. Before further labs and cultures are drawn, you start empiric therapy with which antibiotic?",
    choices: [
      "Amoxicillin",
      "Clindamycin",
      "Daptomycin",
      "Meropenem",
      "Vancomycin",
    ],
    correct: "Clindamycin",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the empiric treatment for anaerobic infections above the diaphragm/aspiration pneumonia. In this vignette we are presented with a patient who has the risk factors and presentation for aspiration pneumonia (AP). Patients with PD are at higher risk for AP due to dysphagia (in fact AP is the number one cause of death in PD) and he also vomited multiple times, further increasing the risk of an aspiration. On examination he shows signs of pneumonia and the CXR confirms a RLL consolidation, which is also the most common site of AP due to the vertical orientation of the right mainstem bronchus to the lower lobes, thus stuff can slide straight down and cause an infection. Given this we should start empiric therapy that covers anaerobes as the bacteria that colonized his RLL is most likely from his GI tract, which tend to have anaerobes. Therefore, (B) is the correct answer, though clindamycin has better coverage for oral anaerobes that are Gram positive. Other options we could consider are metronidazole (the go to for many anaerobic infections), and amoxicillin-clavulanate (But he has a penicillin allergy, hence (A) would have been wrong anyways). (C) does not work for pneumonia due to inhibition by surfactant and we aren’t considered for MRSA or VRE (plus clindamycin has some MRSA coverage). (D) would be overkill in this case, but could be used as empiric therapy if our patient was severely ill. (E) like with daptomycin, we aren’t too concerned with MRSA.",
  },
  {
    id: 6,
    prompt:
      "A 22 y/o medical student feels nauseous and some abdominal pain in the epigastric area. Thinking it’s just heartburn he takes some Tums, which does not resolve the pain. After a few hours, the pain localizes to the right lower quadrant. Thinking that he has the medical students’ syndrome, he ignores it and takes some acetaminophen for the pain. However, the pain increases in severity and presents to the ER. At the ER the pain is now diffuse and there is rebound tenderness and guarding. His vitals are: Temp 39degC, HR 120, BP 115/85. Bowel sounds are absent. Gen surg is paged, and the ER physician should start empiric therapy with which of the following ABXs?",
    choices: [
      "Ceftriaxone alone",
      "Metronidazole alone",
      "Ceftriaxone + Metronidazole",
      "Piperacillin-Tazobactam",
      "Piperacillin-Tazobactam + Vancomycin",
    ],
    correct: "Ceftriaxone + Metronidazole",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding empiric therapy for infections of the lower GI tract (or below the diaphragm). In this vignette we are presented with someone who initially presents with appendicitis, but then complicates into peritonitis given the diffuse pain, rebound tenderness, absent bowel sounds, fever, and sinus tachy. The correct empiric therapy should cover both Gram negatives and anaerobes. Therefore, (C) is the correct answer. Ceftriaxone is a 3rd gen cephalosporin with broad spectrum activity against gram negatives and positives, while metronidazole will cover anaerobes. Metronidazole is an effective antibiotic against many anaerobic bacteria and protozoa because its mechanism of action (inhibition of DNA synthesis) requires a partial reduction (chemical reaction) step that only occurs in anaerobic bacteria and protozoans. (D) pip-tazo is also broad spectrum with anaerobic coverage, but would not be indicated yet in this patient unless we suspected something like pseudomonas. (E) vancomycin provides good coverage for gram positives like MRSA, and also GI pathogens like C. Diff, but would not be considered a first line empiric choice in this case as we don’t suspect those pathogens yet.",
  },
  {
    id: 7,
    prompt:
      "A 35 y/o patient presents to the ER with a fever, myalgia, and headache. He recently returned from Uganda (East Africa) a week ago and tells you about how he was able to see a silverback gorilla up close! He denies nuchal rigidity, nausea, or photophobia. He is up to date with his vaccination and claims to have been somewhat adherent to his prophylaxis treatment his travel nurse told him about. His vitals are normal except for an elevated Temp (38.9 degC). On the physical, no lymphadenopathy, rash, jaundice, or splenomegaly were noted. Neuro, CV, and resp exams were normal. Thin and thick blood films are ordered. Given the most likely diagnosis from the clinical presentation and epidemiological knowledge, which of the following treatments would you start the patient on?",
    choices: [
      "Artesunate (IV) + Doxycycline",
      "Atovaquone-Proguanil (PO)",
      "Chloroquine (PO) + Primaquine (PO)",
      "Quinine (IV) + Clindamycin",
      "Supportive care only",
    ],
    correct: "Atovaquone-Proguanil (PO)",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding uncomplicated malaria treatment. In this vignette we are presented with a fever in a returning traveler. We should always think about malaria in these cases. His travel history is from a region with malaria and he presents with flu like symptoms. Although he was adherent to his prophylaxis, that does not make him immune to malaria. He does not appear to have any end organ damage, therefore this is most likely an uncomplicated case of malaria. The treatment of malaria can be broadly thought of as IV or PO, where uncomplicated cases would be treated with PO. We can therefore rule out (A) and (D). We can also rule out (E) since dengue, zika, or chikungunya often presents with a rash as well (whereas malaria doesn’t). The correct answer is (B) because the most common cause of malaria is falciparum and this is the suggested treatment for uncomplicated cases (the WHO recommends Artemether-lumefantrine). FYI the mechanism behind the drug is atovaquone inhibits the electron transport chain in parasitic mitochondria, and proguanil acts as  dihydrofolate reductase inhibitor, which inhibits nucleotide synthesis in the parasite. This is also the prophylactic treatment for malaria (mefloquine and chloroquine as well) (C) would be correct if the thin blood smear determines the malaria species to be vivax or ovale because then we would be worried about dormant hypnozoites in the liver. Primaquine will get rid of them in that case. Honestly, this question was for fun and probably not something you will need to know in detail for the exam.",
  },
  {
    id: 8,
    prompt:
      "A 45 y/o patient is brought to the ER by her family after a few days of flu-like symptoms (fever, myalgia, headache), but now feels short of breath and describes feeling “foggy”. She is up to date on her vaccinations including the flu shot and COVID. She works as a diplomatic envoy and recently returned from a trip to New Delhi for a G20 meeting. She did not take any prophylaxis medications during her trip. Her vitals: BP 110/75, HR 115, RR 28, O2 sat 92% RA, Temp 39 degC. Physical exam shows no rash or lymphadenopathy, bilateral crackles auscultated at the lungs bases, sluggish cap refill, splenomegaly, and jaundice. Some lab results come back: low Hgb and PLTs, elevated lactate and total bilirubin, low random blood glucose, elevated creatinine (+decreased eGFR), elevated D-dimer. Other labs such as blood films are pending. Given the most likely diagnosis here, what medication would you use to treat the cause of her presentation?",
    choices: [
      "Artesunate (IV) + Clindamycin (IV)",
      "Atovaquone-Proguanil (PO)",
      "Ceftriaxone (IM) + Azithromycin (PO)",
      "Quinine (PO) + Doxycycline (IV)",
      "Supportive care only",
    ],
    correct: "Artesunate (IV) + Clindamycin (IV)",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the treatment of complicated malaria. In this vignette we are presented with a fever in a returning traveler with flu-like symptoms. Malaria is the top of the DDx in these cases given the travel history, presentation (lack of rash as well), and is showing signs of end organ damage (EOD). EOD in this case include confusion (CNS), pulmonary edema (physical exam), hepatic (jaundice or could be prehepatic cause), coagulation dysfunction (sluggish cap refill, low PLT - could be sequestration in the spleen or DIC given the D-dimer, low hgb, unconjugated bilirubin -hemolysis), metabolic (hypoglycemia, lactic acidosis - could be due to hemolysis). Basically, she appears quite sick. In this case we would use IV therapy, which is correctly described in (A). We could also consider doxycycline in place of clindamycin.  2nd line would be similar to (D), except that quinine would be IV. (B) is for uncomplicated or prophylaxis. (C) Ceftriaxone + azithro is a common empiric therapy for many infections such as complicated community acquired pneumonia. (E) would be for zika, dengue, etc..",
  },
  {
    id: 9,
    prompt:
      "A 35 y/o patient presents to his GP after a 4 day history of fever, fatigue, constipation, and headache. He recently returned from his honeymoon to Bali, Indonesia and tells you about how great the beaches and Hindu temples were. He does recall going to a swimming hole while there and eating at the street food stalls. His vitals: BP 114/82 HR 50, RR 12, Temp 38.5 degC, BMI 25. The GP suspects a more serious infection and sends him to the ER, where lab and blood cultures are drawn. His CBC shows a low white count. Given the presentation, the most likely diagnosis should be treated with which of the following medications?",
    choices: [
      "Artesunate (IV) + Doxycycline (IV)",
      "Atovaquone-Proguanil (PO)",
      "Ceftriaxone (IM)",
      "Doxycycline (PO)",
      "Quinine (PO) + Doxycycline (PO)",
    ],
    correct: "Ceftriaxone (IM)",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the treatment of typhoid fever. In this vignette we are presented with a fever in a returning traveler. Malaria is always on the DDx in these cases, however the clinical presentation does suggest that something like typhoid is also possible. Fatigue, headache, fever 3+ days are nonspecific, but constipation and relative bradycardia are signs seen in typhoid. At the ER we also get lab results showing low white count (leukopenia), which is also seen with typhoid. This history also shows possible exposure risk with the contaminated food (food stalls, tasty but not the cleanest) and water (swimming hole). Typhoid is diagnosed with blood cultures and its important to treat this early as after 2 weeks GI complications can occur such as perforations and bleeds due to typhi salmonella tendency to establish itself in the lymphoid tissue of the GI tract. The correct treatment is (C). Another option would be azithromycin or clindamycin (if you think about it azithro and clinda have almost the same mechanism - target 50s ribosomal subunit). Drug resistant typhi would need a carbapenem + azithromycin. Fluoroquinolones used to be the mainstay treatment, but there is increased resistance to drugs like cipro. (A), (B), (E) are all malaria treatments. (D) is the go-to treatment for Rickettsia diseases.",
  },
  {
    id: 10,
    prompt:
      "Which of the following mechanisms of actions would you expect to work against Rickettsia (intracellular pathogen)?",
    choices: [
      "30s ribosomal subunit inhibitor leading to decreased protein synthesis",
      "Binds to bacterial membrane causing depolarization and K+ efflux",
      "Binds to the LPS layer and disrupts the membrane integrity leading to cell lysis",
      "Inhibits peptidoglycan synthesis via prevention of crosslinking and elongation",
      "Irreversible inhibition of PBP, thereby inhibits crosslinking of peptidoglycan layer leading to cell swelling and autolysis",
    ],
    correct:
      "30s ribosomal subunit inhibitor leading to decreased protein synthesis",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism behind the drug for Rickettsia. We are told that Rickettsia is an intracellular pathogen, therefore it would be fairly reasonable to think that drugs that target the cell wall or cell membrane may not be as effective as drugs that target something within the pathogen like the ribosome or DNA. One way to rationalize this is that for drugs to target the cell wall, they don’t need to have good tissue penetration (or cellular penetration) since they just need to bind to its target in the cell wall, whereas drugs that target intracellular machinery need good penetration and cross the membrane to reach its target. Therefore, intracellular pathogens will need to be targeted with ABXs that can penetrate the host cell membrane and then the pathogen’s membrane. This is just a general explanation and may not be true with all cell wall targeting ABXs! In this case, (A) is the correct answer and correctly describes the mechanism of doxycycline (tetracyclines), the first line option. The rest of the choices describe cell wall targets: (B) - daptomycin, (C) -polymyxin (good gram negative coverage, but many side effects!), (D) vancomycin, (E) βlactams.",
  },
  {
    id: 11,
    prompt:
      "A 56 y/o patient presents to the ER with a fever of unknown origin. Her past medical history includes SLE and a kidney transplant. She is currently on immunosuppression and has had many hospitalizations regarding infections that are resolved with antibiotics. Her most recent hospitalization was 3 months ago for cellulitis complicated into osteomyelitis. She also recently traveled to South East Asia to visit family. The ER team starts a workup to find the origin of a fever and are highly suspicious of a UTI that is complicating into sepsis. Given the patient’s history, which of the following empiric ABXs would you MOST likely start her on?",
    choices: [
      "Amoxicillin-Clavulanate",
      "Meropenem",
      "Metronidazole",
      "Piperacillin-Tazobactam",
      "Vancomycin",
    ],
    correct: "Meropenem",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding the empiric treatment for a patient with immunosuppression and history of ABX use that is now presenting with a genitourinary tract infection. In this vignette we are presented with a fever of unknown origin. Given her immunosuppressive and hospitalization with ABX use history, and UTI suspicion we should be worried about a Gram negative pathogen including ESBL (frequent ABX exposure, recent travel to SEA) and pseudomonas (immunosuppression). Given this we can rule out (E) since it does not cover gram negative and MRSA is not that high of a concern. We also can rule out (A) and (C) as they both lack ESBL and pseudomonas coverage, in fact ESBLs expression β-lactamases that inactivate most penicillins/cephalosporins. Metronidazole is mainly used for anaerobes. (D) covers pseudomonas, and has some to little activity against ESBLs. Therefore, the best option that would cover both Gram negatives, pseudomonas, and ESBLs would be meropenem (carbapenem). This is the last line of defense and in this case would be something we’d consider administering given her risk factors and concerns that this can evolve into sepsis",
  },
  {
    id: 12,
    prompt:
      "A 45 y/o male patient presents to the ER with a 5 day history of non-productive cough and fever. He is HIV+. A CXR is ordered and fine reticular changes and perihilar distribution are seen. His CD4+ count <200/mm^3. Given his immunocompromised status a bronchoscopy and bronchoalveolar lavage is done and the diagnosis of Pneumocystis jirovecii pneumonia is reached. He is treated with a combination antibiotic that inhibits 2 enzymes in the folate synthesis pathway. Which of the following adverse effects is LEAST LIKELY to be related to this ABX?",
    choices: [
      "Acute kidney injury",
      "Disulfiram reaction with EtOH use",
      "Hyperkalemia",
      "Steven Johnson Syndrome",
    ],
    correct: "Disulfiram reaction with EtOH use",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the adverse effects of TMP-SMX. In this vignette we are presented with a HIV+ patient with Pneumocystis jirovecii pneumonia, that can occur with the CD4+ count drops below 200. The treatment is TMP-SMX, however, you do not need to memorize that given that the mechanism is briefly described in the vignette. TMP-SMX (Bactrim/Septra) is basically 2 drugs given together. Each of the drug inhibits an enzyme in the folate synthesis pathway, where sulfamethoxazole inhibits the upstream enzyme (dihydropteroate synthetase, and trimethoprim inhibits the next step (dihydrofolate reductase) that converts dihydrofolic acid to tetrahydrofolic acid, which are precursor molecules needed for purine synthesis to make DNA. Now that the ABX has been identified, the adverse effect that is not associated with TMP-SMX is (B), the correct answer. (B) is associated with metronidazole, which is why patients on metronidazole whether for trichomoniasis or other anaerobic/protozoal infections should be reminded to not drink EtOH. (A) TMP-SMX is nephrotoxic, known to cause acute interstitial nephritis (AIN), a type of intrarenal AKI. (C) TMP-SMX has an off target effect where it blocks ENaC in the collecting ducts, the same channels that are inserted due to aldosterone, therefore leading to hyperkalemia. Caution with concomitant ACEi use. (D) pretty much any ABX has this potential, but sulfas are well documented to cause SJS. Other adverse effects you could see is neutropenia, hemolytic anemia, and kernicterus in neonates (hence contraindicated, see MEDD421 neonatal transition or MEDD422 pregnancy (coming soon) for an explanation or if you are interested in PK considerations).",
  },
  {
    id: 13,
    prompt:
      "A 25 y/o female patient is transferred to the ICU after decompensating on the ward. Her vitals are BP 80/60, HR 100, T 39.2 degC, O2 sat 94% RA. She has diffuse macular erythroderma, confusion, diarrhea, and vomiting. Her most recent labs show a severely elevated creatinine, and low PLT count. A source of infection is found to be a tampon that was not removed in a timely manner. She is stabilized in the ICU and cultures are drawn. Cultures later reveal Group A Strep (GAS). She is started on penicillin and ____, which is mainly to ____?",
    choices: [
      "Clindamycin; reduce the risk of antibiotic resistance formation",
      "Clindamycin; stop the production of toxin",
      "Metronidazole; cover anaerobic bacteria since the infection source was below the diaphragm",
      "SMP-TMX; reduce the risk of antibiotic resistance formation",
      "Ceftriaxone; increase the effectiveness in killing GAS",
    ],
    correct: "Clindamycin; stop the production of toxin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment approach for Group A Strep infections causing toxic shock syndrome (TSS). In this vignette we are presented with TSS due to GAS. We suspect this given the hypotension, high fever, diffuse rash, involvement of organ systems: altered mental status, GI sx, low PLT, kidney damage (elevated creatinine). The source of the infection (and a common one for group A strep) is found and removed. The treatment of Group A Strep (gram +) infection is penicillin, which is primarily used to kill the bacteria. However, this may cause the release of even more toxins as the pathogens are lysed. Therefore, we add an ABX that decreases toxin production/protein synthesis. In this case (B), clindamycin will provide us with that ability to decrease toxin production and hopefully dampen the damage caused by the toxin release.",
  },
  {
    id: 14,
    prompt:
      "A 65 y/o patient presents to the ER with LLQ abdominal pain that started a few days ago. He has a fever, but is otherwise stable. He had a recent colonoscopy for colorectal cancer screening 4 weeks ago that came back unremarkable. He denies any bloody stool or vomiting, but states that he has been constipated a few days before the pain started. He has no prior ABX exposure in the last decade. On examination, he has localized tenderness and guarding in the LLQ, and a small mass is palpable on DRE. A CT scan reveals a suspected small abscess in the distal sigmoid colon. CBC w/ diff also shows elevated WBC and CRP is elevated. Given this information what sort of microbes should your initial empiric therapy cover?",
    choices: [
      "Aerobes only",
      "Anaerobes only",
      "C. Diff w/ PO Vancomycin, Gram negative, and anaerobes",
      "Gram positive and anaerobes",
      "Gram negative and anaerobes",
    ],
    correct: "Gram negative and anaerobes",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain:
      "This question requires understanding what empiric therapy should cover with a lower GI tract abscess. In this vignette we are presented with suspected diverticulitis given the presentation (LLQ pain, however Asian populations tend to present RLQ). There is also a possible abscess in the sigmoid colon. And labs further suggest infection. In this case, we need to consider that the GI tract tends to be colonized with gram negative and anaerobes, which are the pathogens we would be the most worried about in this case. Hence, (E) is the correct answer. (C) might be tempting, but standard anaerobic coverage with metronidazole would cover this for now. The abscess will have to be surgically drained and removed. This will then need to be cultured for more targeted therapy, however, anaerobe coverage should always be included even if culture negative because anaerobes are hard to culture in the lab.  Typically abdominal abscess are E Coli and Bacteroides (anaerobes).",
  },
  {
    id: 15,
    prompt:
      "A 40 y/o patient presents to the ER after a 7 day history of diarrhea that did not resolve with loperamide. He describes loose watery stools. He is fatigued, has a low fever and crampy abdo pain, but denies any dysphagia or nausea/vomiting. He has a history of GERD managed with pantoprazole, HTN managed with ramipril (currently paused), T2DM managed with metformin and empagliflozin (currently paused). Travel history is negative. He does recall eating chicken sashimi at his friend’s place 10 days ago. The ER physician suspects Campylobacter jejuni. Which of his following medications MOST LIKELY increased his risk in getting this infection?",
    choices: ["Empagliflozin", "Metformin", "Pantoprazole", "Ramipril"],
    correct: "Pantoprazole",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the adverse effects of drugs on the gut microbiota. In this vignette we are presented with a patient with probable acute gastroenteritis given the clinical presentation. The patient astutely pauses some of his medications (SADMANS) given his sickness. The ER physician suspects Campy to be the cause of his presentation. Assuming that this is true, then the medication that is most likely increased his risk of this is (C), a PPI. This is thought to be because PPIs decrease stomach acidity, which in turn leads to increased colonization of “bad” bacteria as a natural host defense is now diminished (acidity). PPIs are also known to increase the risk of C. Diff. (B) is known to alter many different gut bacteria through an unknown mechanism, but its likelihood at increasing the risk of campylobacter infection is not as well established as PPIs. The rest again are NOT as likely or there is little evidence about their role in altering the gut microbiota.",
  },
  {
    id: 16,
    prompt:
      "Melissa is a 24 y/o patient with a history of IBS-D presents to her GP after her chronic diarrhea worsened in the last few weeks. She describes having ~7 loose stools per day, which is increased from her usual 3 BM/day. She denies oil droplets/fat/blood in her stool, no abdo pain, nausea/vomiting, or fever. Her travel history is negative and has not eaten anything suspicious. The diarrhea does not worsen with high fat meals. She does recall the diarrhea gets better when she fasts or skips meals and does not continue during her sleep. A quick review of her recently started medications and supplements include loperamide, magnesium supplement, and peppermint oil. The abdo exam is unremarkable besides some farting during the exam. Assuming the stool osmotic gap comes back elevated, what would be an appropriate management besides oral rehydration?",
    choices: [
      "Start on ceftriaxone or ciprofloxacin for Salmonella/Shigella induced diarrhea",
      "Start on cholestyramine for bile acid malabsorption diarrhea",
      "Stop magnesium supplement for drug induced osmotic diarrhea",
      "Stop loperamide due to increased risk of developing HUS and/or toxic megacolon",
    ],
    correct: "Stop magnesium supplement for drug induced osmotic diarrhea",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding an approach to diarrhea and pharmacological implications related to it. In this vignette we are presented with a patient with chronic watery diarrhea. We first need to classify the diarrhea with either MISO (malabsorptive (fatty), inflammatory, secretory, osmotic) or osmotic/malabsorptive, inflammatory, secretory, and altered transit. The explanation will use MISO. In this case, we are less inclined to think of inflammation given the lack of fever, bloody/pus in stool/melena, plus her history does not suggest an infectious cause. Therefore, we can rule out (A). We can also rule out (D) as we aren’t worried about HUS or toxic megacolon and it is safe for her to use loperamide. We are also less inclined to think of malabsorption/maldigestion given the lack of oil/fat in stool. From history we are more inclined to think of this as osmotic rather than secretory because it improves when she skips meals and is not nocturnal. This is because osmotic diarrhea requires an osmotic gradient to cause water to be excreted, hence it requires content in the GI lumen, or ingestion of something that produces the necessary osmotic gradient. This typically suggests poorly/nonabsorbable solutes in the GI lumen (or decreased absorptive ability of the GI tract), thus preventing maintenance of the normal osmotic gradient. Whereas in secretory there is an increased secretion of anions and/or inhibited Na absorption, which is due to a cause that is independent of the osmotic gradient such as toxins, hormones (Thy), etc.. thus it does NOT improve with fasting. Furthermore, we are told to assume the stool osmotic gap is elevated. This is the osmotic gap between serum and stool, where the gap is unmeasured ions (similar to the concept of wide anion gap). An increased gap suggests osmotic diarrhea given increased unknown salts, while a normal or low gap would suggest secretory as the ions in the stool would be the same as those found in the serum (Na, K, Cl). Now we can think of what she is taking that could cause this. Magnesium is a poorly absorbed cation and if taken in large amounts can cause osmotic diarrhea, therefore is the likely etiology behind Melissa’s diarrhea, thus (C) is the correct answer. (B) is the treatment option for bile acid malabsorption (BAM), but we are less inclined to think this is the cause of her diarrhea despite her history of IBS-D because it is a secretory diarrhea because the increased bile salts in the colon stimulate colonic secretions. Also in history we don’t see diarrhea worsen with high fat meals. A low fat diet is part of the management of BAM as bile is secreted to help absorb fats, thus a high fat diet would increase bile acid release. Cholestyramine is a bile acid sequestrant, thus it binds bile acid in the lumen and “neutralizes” it. Other options to treat BAM include colestipol and colesevelam.",
  },
  {
    id: 17,
    prompt:
      "It’s a busy day in the ER and for some reason you got all of the diarrhea patients. Which of the following patients would you MOST LIKELY consider empiric antibiotics for?",
    choices: [
      "Cristiano (40 y/o) stable with a 5 day history of watery diarrhea, negative travel history, stool culture negative.",
      "Kylian (8 y/o) stable with 5 day history of bloody diarrhea, no suspected exposure to shigella, awaiting labs. ",
      "Lionel (35 y/o) stable with 5 day history of watery diarrhea, returned from a backpacking trip through Argentina a few days ago",
      "Luka (40 y/o) stable with a 5 day history of watery diarrhea, negative travel history, stool culture positive for Salmonella",
    ],
    correct:
      "Lionel (35 y/o) stable with 5 day history of watery diarrhea, returned from a backpacking trip through Argentina a few days ago",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding when empiric ABX intervention for diarrhea is warranted. The use of empiric ABXs for diarrhea is generally not advised because the positive outcomes  do not usually outweigh the negative outcomes of ABX resistance, side/adverse effects of ABX exposure. Usually in those that you suspect CDiff, young infants, severely ill, or immunocompromised patients would ABXs be a serious consideration. The only patient that ABX could potentially ABXs be used in is Lionel (C). This is because we suspect he might have traveler’s diarrhea given his recent trip to South America and was backpacking (potentially exposed to unsanitary conditions). There are RCTs that show benefit of ABX ± loperamide in the treatment. ABX options include ciprofloxacin, azithromycin (SEA), rifaximin (“nonabsorbable” ABX that stays in the GI tract hence supposedly has a good safety profile). (A) would not be a likely candidate for ABX because of the lack of travel, negative stool culture, and stable watery diarrhea. It is most likely a viral cause and self limiting. (B) has bloody diarrhea and is a child, so we would definitely avoid giving ABXs till we get some lab results back given the risk of EHEC and possible precipitation of HUS/toxic megacolon. (D) has watery diarrhea and has cultures growing salmonella. Salmonella is one of the pathogens we would not treat with ABX in a healthy host because this actually prolongs the shedding of the bacteria and increases the risk of relapses.",
  },
  {
    id: 18,
    prompt:
      "A 40 y/o patient was hospitalized for the last 3 days for bacterial peritonitis that was treated with IV ABXs and is now transitioning to outpatient treatment. Given below are the routes of administration and PO bioavailability of some ABXs. Using that information and your knowledge of the likely pathogens that need to be covered (stool cultures were negative), which of the following would be the MOST appropriate ABX?",
    choices: [
      "Amoxicillin-clavulanate PO; BA ~80%",
      "Cephalexin PO; BA ~90%",
      "Ceftriaxone IM + Metronidazole PO; BA ~99%",
      "Levofloxacin PO; BA~99%  + Metronidazole PO; BA ~99%",
      "Vancomycin PO; BA ~10%",
    ],
    correct: "Levofloxacin PO; BA~99%  + Metronidazole PO; BA ~99%",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding transitioning from IV ABX to PO ABX following a GI tract infection and PK considerations. In this vignette we are presented with a patient about to be discharged after having bacterial peritonitis that was managed with IV ABX. Unfortunately, the stool cultures were negative because many times the pathogens from the GI tract can’t be grown in the lab. In general we want to transition from IV to PO ABX ASAP and in this case treat him as an outpatient. Usually 48-72 hrs if possible. This is because IV poses an extra source/route of infection, thrombophlebitis, and costs. Given this we can rule out (C) as we don’t want to use IM. Now let’s consider what we need to cover. We need to cover anaerobes and Gram negative bacteria given this involves the GI tract. Therefore, rule out (E) and (B). (E) covers C.Diff and Gram positives, and (B) cephalexin is a 1st generation cephalosporin that covers Gram positive. We are left with (A) and (D), both options cover Gram negatives (levofloxacin) and anaerobes (metronidazole). Therefore, we need to consider bioavailability. In this case (D) is the better option given the better bioavailability (which we will correlate to drug absorption), which means more of it will be absorbed to reach the desired compartment. In this case the infection is not contained within the GI tract, but has spread to the peritoneum, thus the ABX needs to be absorbed to reach this to treat any leftover pathogens.",
  },
  {
    id: 19,
    prompt:
      "A 34 y/o patient has a skin infection that is found to be VRE (vancomycin resistant enterococci) after the vancomycin regime fails to control his infection. The patient is also currently on a SSRI (escitalopram). Which of the following ABXs would you MOST LIKELY consider using now?",
    choices: [
      "Cephalexin",
      "Daptomycin",
      "Linezolid",
      "Methicillin",
      "Piperacillin/Tazobactam",
    ],
    correct: "Daptomycin",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the treatment of VRE. In this vignette we are presented with a patient with VRSA, which means the pathogen is resistant to good ol’ vancomycin. The second line option in this case would be daptomycin (B), which is the correct answer. We could also consider linezolid (C), however in this case he is taking a SSRI. This increases the risk of serotonin syndrome. The mechanism behind this is off-target inhibition of MAOA and MAOB, the enzymes that break down 5-HT, thus theoretically there would be an increase in 5-HT levels that could precipitate serotonin syndrome. If the bug is resistant to vanco, it’s probably resistant to methicillin, cephalexin. Pip/tazo does not cover VRE.",
  },
  {
    id: 20,
    prompt:
      "A 42 y/o patient presents to the gastroenterologist for follow up after failure of his PPI to resolve his presumed GERD. The patient confirms that he has stopped the PPI over 2 weeks ago and a urea breath test is conducted. Assuming a positive test result, what medication regime would you prescribe?",
    choices: [
      "Clarithomycin + amoxicillin + metronidazole",
      "Esomeprazole + clarithromycin + amoxicillin + metronidazole",
      "Esomeprazole + ranitidine + Bismuth subsalicylate + metronidazole",
      "Esomeprazole + amoxicillin + metronidazole",
      "Ranitidine + clarithromycin + amoxicillin + metronidazole",
    ],
    correct: "Esomeprazole + clarithromycin + amoxicillin + metronidazole",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "his question requires understanding the drugs used to treat H. Pylori. In this vignette, we are presented with a patient presenting for a urea breath test (UBT) after stopping his PPI for 2 weeks following treatment failure for GERD. UBT is used to test for the presence of H. pylori because H. pylori expresses ureases, breaks down urea into CO2 and NH3 to help it survive in stomach acid. The breath test measures the CO2 after urea is given. PPIs need to be stopped at least 2 weeks before a UBT to reduce false negatives. If the UBT returns a positive result, then H. Pylori colonization is a likely cause of the patient’s increased acid and explains the treatment failure. H. Pylori is treated with a triple therapy regimen that includes a PPI and 2 ABXs (almost always includes clarithromycin), hence (B) is the correct answer since it includes a PPI, clarithromycin, amoxicillin, and metronidazole. Bismuth subsalicylate can be used adjuvantly.",
  },
  {
    id: 21,
    prompt:
      "Thobias is a 34-year old man presenting to the ER with fever and dull upper right quadrant abdominal pain. History is notable for travel to central America 3 months ago and recent diarrhea. On physical exam, percussion reveals hepatomegaly and palpating the liver results in tenderness. A CBC returns elevated white blood cells. A CT abdomen reveals a well-circumscribed hypointense mass in the liver, around 5 cm in diameter. Aspiration of the mass yields a brown fluid similar to “anchovy paste” and containing trophozoites on microscopy. Thobias is placed on a 7-day drug regimen consisting of a single medication that also has parasitic, anaerobic bacterial, and gram negative bacterial coverage. This medication can be used to treat infections of all of the following EXCEPT:",
    choices: [
      "Trichomonas vaginalis",
      "Giardia lamblia",
      "Entamoeba histolytica",
      "Bacterial vaginosis",
      "Enterococcus sp.",
    ],
    correct: "Enterococcus sp.",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This challenging question assesses understanding of the presentation of Entamoeba histolytica as well as the organisms covered by metronidazole. Thobias’ fever, travel history, diarrhea, and leukocytosis point toward an infectious cause of abdominal pain. Trophozoite-containing “anchovy paste” fluid from a liver abscess is pathognomonic for an Entamoeba histolytica liver abscess. Extraintestinal Entamoeba histolytica amebiasis is typically treated with metronidazole (C), which is also effective against Trichomonas (A) and Giardia (B). Metronidazole is an effective antibiotic against many anaerobic bacteria and protozoa because its mechanism of action (inhibition of DNA synthesis) requires a partial reduction (chemical reaction) step that only occurs in anaerobic bacteria and protozoans. As such, it is effective at treating the common facultative anaerobe (likely Gardnerella vaginalis) causing bacterial vaginosis (D). Metronidazole would not be expected to be effective against gram positive Enterococcus species, making (E) the correct answer. (057-1.2 Enteric Infections Pt 2 - Mary Kestler) (057-1.4 Antibiotic Review - Mary Kestler) (WW Q)",
  },
  {
    id: 22,
    prompt:
      "A 35 y/o patient presents to his GP with trouble and pain with swallowing. His medical history includes asthma (Managed with steroid inhaler and SABA PRN) and HIV + (managed with HAART, though compliance to regimen is questionable). He also complains of nausea and vomitingx1. On exam there are no vesicular lesions in or around the oral cavity. White patches are noted at the back of his oral cavity. The rest of the abdo exam is unremarkable. Given this presentation the most likely diagnosis is best treated with:",
    choices: [
      "Amoxicillin-clavulanate",
      "Clindamycin",
      "Fluconazole",
      "Valacyclovir",
      "Valganciclovir",
    ],
    correct: "Fluconazole",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the possible infections in immunocompromised patients and their treatments. In this vignette we are presented with a patient with HIV (immunocompromised) who presents with swallowing problems. His presentation is highly suspicious of esophagitis and given his immunocompromised status we should think of Candida, HSV, and CMV. He also has an inhaled steroid, which would further compromise the immune defenses in the oral cavity and possibly esophagus. His oral exam reveals no vesicles in or around the oral cavity, so we are less inclined to think HSV. THe white patches at the back of his oral cavity  are highly suggestive of oral thrush and a candida infection. If he were to have esophagitis (which we would do upper GI endoscopy to Dx), then it would most likely be associated with the oral thrush. CMV is a difficult one to diagnose, which we would need a biopsy for, however it should be noted that CMV esophagitis is usually part of a disseminated presentation where multiple organ systems are involved. In this case we only see signs and symptoms of the esophagus/oral cavity being involved. Therefore to treat our working diagnosis we would use (C), fluconazole. Fluconazole is an antifungal that inhibits the fungal CYP enzyme, 14α-demethylase, which therefore inhibits the production of ergosterol from lanosterol. Ergosterol is an essential component of the fungal membrane, thus decreased production leads to compromise of the membrane. (A) is an ABX. (B) is an ABX that is good for empiric therapy of oral anaerobes. (D) is the PO formulation for HSV treatment (see CNS infection week for mechanism explanation). (E) is the PO formulation for CMV.",
  },
];
