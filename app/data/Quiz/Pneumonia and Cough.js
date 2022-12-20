export const pneumoniaAndCough = [
    {
        "id" : 1,
        "prompt" : "A 6 y/o boy presents to the clinic with a fever and sore throat. Based on clinical findings during the exam, he is diagnosed with strep throat and prescribed 250 mg penicillin V PO BID for 10 days. His parents ask if it’s possible to just double the dose to kill the bacteria faster. In this case, would Pen V be more effective at a higher dose?",
        "choices": [
            "Yes because Pen V is bacteriostatic", 
            "No because Pen V is bactericidal",
            "Yes because Pen V is a concentration dependent antibiotic",
            "No because Pen V is a time dependent antibiotic"],
        "correct": "No because Pen V is a time dependent antibiotic",
        "tags":["PK","medium","ABX","Infectious"],
        explain: "This question requires understanding PD and PK of penicillins. In this case, the parents want to double the dose, hence increase the concentration. However, Pen V is a time dependent antibiotic, which means that therapeutic action is dependent on the duration of time that serum concentration is above the minimum therapeutic concentration. Hence, an increase in concentration will not increase the effectiveness (Note: some ABX are concentration dependent). If Pen V was concentration dependent, the parents might have a case, but then we run into potential adverse effects with an increased dose. Pen V is bactericidal, but that does not predict whether or not it is time-dependent or concentration-dependent."
    },
    {
        "id" : 2,
        "prompt" : "What is the general mechanism of action of β-lactams?",
        "choices": [
            "Disrupts the cell membrane by inhibition of PBP-phospholipids interaction leading to cell swelling and autolysis",
            "Irreversible inhibition of penicillin binding protein (PBP), thereby inhibiting crosslinking of the LPS layer leading to cell swelling and autolysis",
            "Disrupts cell membrane by inhibition of PBP, thereby decreased synthesis of ergosterol leading to cell swelling and autolysis", 
            "Irreversible inhibition of PBP, thereby inhibiting crosslinking of the peptidoglycan layer leading to cell swelling and autolysis"],
        "correct": "Irreversible inhibition of PBP, thereby inhibiting crosslinking of the peptidoglycan layer leading to cell swelling and autolysis",
        "tags":["PD","easy","ABX","Infectious","MoA"],
        explain: "This question requires understanding the mechanism of action of a major class of antibiotics, the β-lactams. (D) correctly describes the mechanism of action. The β-lactam ring is structurally analogous to D-Ala-D-Ala (DADA) that is found on the terminal end of NAM/NAG residues that make up peptidoglycan (PG). This allows the antibiotic to bind to the PBP (transpeptidase) enzyme active site through covalent bonds (irreversible inhibition), which will prevent crosslinking of the PG layer. This will inhibit cell wall synthesis, and weaken the PG layer, which eventually leads to cell swelling and autolysis - and death."
    },
   {
        "id" : 3,
        "prompt" : "Which of the following statements is true regarding the mechanism of action of azithromycin and doxycycline?",
        "choices": [
            "Azithromycin inhibits protein synthesis by binding the 30s ribosomal subunit", 
            "Azithromycin inhibits protein synthesis by  binding the 50s ribosomal subunit",
            "Doxycycline inhibits protein synthesis by binding the 30s ribosomal subunit",
            "Doxycycline inhibits protein synthesis by binding the 50s ribosomal subunit",
            "A and D",
            "B and C"],
        "correct": "B and C",
        "tags":["PD","easy","ABX","Infectious","MoA"],
        explain: "This question requires knowing the mechanism of action of two bacteriostatic antibiotics that target protein synthesis. Doxycycline is a tetracycline, which binds the 30s ribosomal subunit to inhibit protein synthesis. Azithromycin is a macrolide, which binds the 50s ribosomal subunit to inhibit protein synthesis. In general, ABXs that inhibit protein synthesis are usually bacteriostatic"
    },  
    {
        "id" : 4,
        "prompt" : " How does clavulanic acid increase the effectiveness of amoxicillin?",
        "choices": [
            "Clavulanic acid inhibits bacterial efflux pumps",
            "Clavulanic acid inhibits bacterial peptidyl transferase during protein synthesis",
            "Clavulanic acid increases the oral bioavailability of amoxicillin", 
            "Clavulanic acid inhibits β-lactamases"],
        "correct": "Clavulanic acid inhibits β-lactamases",
        "tags":["PD","easy","ABX","Infectious","MoA"],
        explain: "This question requires understanding clavulanic acid and beta-lactam antibiotics. Clavulanic acid inhibits β-lactamases. This will allow  β-lactams like amoxicillin to be effective against bacteria that would have been resistant."
    },
  {
        "id" : 5,
        "prompt" : "A 45 y/o patient presents to the ER with a ruptured achilles tendon. You learn that he was recently treated with an antibiotic (ABX) for an intracellular pathogen that caused his community acquired pneumonia. Your attending suspects that the ABX may have caused the rupture. What is the mechanism of action of the ABX that the patient may have taken?",
        "choices": [
            "DNA Gyrase and topoisomerase IV inhibitor",
            "50s ribosomal subunit inhibitor",
            "30s ribosomal subunit inhibitor", 
            "RNA polymerase inhibitor",
            "Inhibits crosslinking of the peptidoglycan layer of bacterial cell walls"],
        "correct": "DNA Gyrase and topoisomerase IV inhibitor",
        "tags":["PD","hard","Side effects","MoA","ABX","Infectious"],
        explain: "This question requires understanding a specific adverse effect related to fluoroquinolones and its mechanism of action. In this vignette, we are presented with a patient that was recently treated with an ABX for an intracellular pathogen and now presents with a rupture achilles tendon. An important, but rare side effect of fluoroquinolones is tendonitis, which can lead to tendon rupture, and usually affects the Achilles tendon. We should also know that the mechanism of action of fluoroquinolones (-floxacins; moxi/cipro/levo) is DNA gyrase and topoisomerase IV inhibition, which prevents the unwinding of DNA and its replication, eventually leading to death. Hence (A) is the correct choice"
    },
{
        "id" : 6,
        "prompt" : "A 68 y/o patient presents to the ER with BP 110/74, HR 130, Temp 38.7 \u00b0C, diffuse abdominal pain, and watery diarrhea. On the patient’s charts you noticed that the patient has recently completed a course of an antibiotic (Ampicillin). What potential major side effect of antibiotic use is being presented in this case?",
        "choices": [
            "Drug induced hemolytic anemia",
            "QTc prolongation",
            "C. Diff infection", 
            "Activation of motilin receptors (increased uncoordinated peristalsis)",
            "Agranulocytosis (severe reduction in white blood cells)"],
        "correct": "C. Diff infection",
        "tags":["Side effects","medium","ABX","Infectious","GI"],
        explain: "This question requires understanding an important side effect of ABX use. In this vignette, we are presented with an elderly patient who is febrile, tachycardic, diffuse abdominal pain, and diarrhea. We should be suspicious of a GI infection/pathology. We are told she was recently treated with an ABX. We then should immediately think of C. Diff as the etiology of the patient’s presentation. ABX use will non-specifically kill commensal bacteria that make up the gut microbiome. This will create space for C. Diff to grow unchecked, leading to pseudomembranous colitis. This usually presents with diarrhea, abdominal pain, and fever. (A) drug-induced hemolytic anemia is unlikely to present like this, and we aren’t told about any jaundice. (B) QTc prolongation is unlikely in this case without more information, and ampicillin isn’t known to cause this (Macrolides, fluoroquinolones are known to cause QTc prolongation). D) Although she has diarrhea, motilin receptor activation may seem like a possible cause, however she is febrile in this case, and motilin activation is associated with macrolide use and not ampicillin. (E) Agranulocytosis is unlikely given that the patient doesn’t look extremely sick, we also do not have a CBC w/ diff. Hence, C. Diff is the most likely etiology. In summary, if a patient presents with diarrhea ± fever/abdominal pain/nausea and recently finished a course of antibiotics, C. Diff should be high on the differential."
    }, 
{
        "id" : 7,
        "prompt" : "Which of the following antibiotics would you expect to have the most activity against intracellular bacteria or bacterias without a cell wall?",
        "choices": [
            "Ciprofloxacin",
            "Vancomycin",
            "Ceftriaxone", 
            "Amoxicillin",
            "Amoxicillin-Clavulanate"],
        "correct": "Ciprofloxacin",
        "tags":["PD","easy","MoA","ABX","Infectious"],
        explain: "This question requires understanding the pharmacodynamics of antibiotics. Ciprofloxacin is the correct answer because it is the only ABX here that has a non-cell wall target. Ciprofloxain inhibits DNA gyrase and topoisomerase IV, thereby preventing DNA replication. Ceftriaxone is a cephalosporin, amoxicillin and amoxicillin/clavulanate is a beta-lactam ± β-lactamase inhibitor. Both have the same mechanism of action by targeting PBP and peptidoglycan cross-linking in bacterial cell walls. Vancomycin has a similar mechanism, but binds to the D-Ala-D-Ala residue directly to prevent cross-linking."
    }, 
{
        "id" : 8,
        "prompt" : "A 56 y/o patient in the surgical ward decompensates and is admitted to the ICU with severe septic shock. The patient's hemodynamics are stabilized with fluids, norepinephrine, and dobutamine. Blood cultures from a few days ago came back with gram negative rods. You start treatment with:",
        "choices": [
            "Vancomycin (IV)",
            "Linezolid (IV)",
            "Meropenem (IV)", 
            "Ceftaroline (IV)",
            "Ciprofloxacin (PO)"],
        "correct": "Meropenem (IV)",
        "tags":["PD","medium","MoA","ABX","Infectious"],
        explain: "This question requires understanding the spectrum of use of carbapenems. In this vignette, we are presented with an ICU patient in septic shock. Microbiology confirms an ESBL producing gram negative rod. In this case, the best drug is (C) meropenem, a carbapenem. These drugs provide the most broad spectrum, are considered our last line of defense, and are effective against ESBL producing bacteria. (A) Vancomycin only has activity for gram positive. (B) Pip-tazo is useful against Pseudomonas, but not as effective as meropenem against ESBL bugs. (D) Ceftaroline is useful against MRSA, some gram negative coverage, but not enough for ESBL bugs. (E) Ciprofloxacin could be effective against ESBL (not as effective as meropenem), since it isn’t a beta-lactam, however the patient is very sick, hence PO is not a good option (oral route could be compromised as well)."
    },
{
        "id" : 9,
        "prompt" : "Which of the following correctly matches the generation to its cephalosporin and its indication?",
        "choices": [
            "1st gen - Ceftazidime - surgical prophylaxis",
            "2nd gen - Ceftriaxone - mild community acquired pneumonia",
            "3rd gen - Cefuroxime - pneumonia requiring hospitalization",
            "4th gen - Cefepime - Pseudomonas infection",
            "5th gen - Cefazolin - MRSA infection)"],
        "correct": "4th gen - Cefepime - Pseudomonas infection",
        "tags":["medium","ABX","Infectious"],
        explain: "This question requires recognizing the different generations of cephalosporin, an example and its indication. The correct matches are: Cefazolin - 1st gen - surgical prophylaxis; Cefuroxime - 2nd gen - mild CAP; Ceftriaxone - 3rd gen - pneumonia requiring hospitalization (Ceftazidime is also a 3rd gen with pseudomonas coverage); Cefepime - 4th gen - pseudomonas infection (and neutropenic fever). Hence (D) is the correct answer. None of the choices include a 5th generation cephalosporin, which are used for MRSA (Ceftaroline) or ESBL/Pseudomonas (Ceftolozane-tazobactam)"
    },
{
        "id" : 10,
        "prompt" : "A 57 y/o patient with a history of COPD is diagnosed with community acquired pneumonia with left lower lobe consolidation seen on chest x-ray. During the history taking, the patient remembers having had strep throat when he was a child and having a rash to the drug. He doesn’t remember the drug name, but being the astute medical student you are able to infer the identity of the drug and prescribe him:",
        "choices": [
            "Amoxicillin-clavulanate + azithromycin",
            "Ceftriaxone + azithromycin",
            "Levofloxacin", 
            "Amoxicillin-clavulanate + doxycycline",
            "Piperacillin-tazobactam + azithromycin"],
        "correct": "Levofloxacin",
        "tags":["hard","MoA","Side effects","Infectious"],
        explain: "This question requires understanding the treatment of strep throat and an associated side effect with β-lactam antibiotics. In this vignette, we are presented with a patient that previously had a rash following a course of ABX for his strep throat when he was a child. Strep throat is commonly treated with penicillin. β-lactams like penicillin are associated with hypersensitivity reactions that usually present as a diffuse maculopapular rash. Hence, we infer he probably had a hypersensitivity reaction towards penicillin.  β-lactam ABXs are the most allergenic ABXs because of β-lactam “ring strain”, which causes it to be unstable and open up. This will lead to covalent attachment to proteins (via Cys residues), causing the protein to be recognized as foreign by the host immune system. Since the β-lactam structure is found in β-lactams, cephalosporins, and  carbapenems, there is potential for cross-reactivity. Hence the safest option is to prescribe a non-β-lactam ABX, which in this case is (C) levofloxacin, a fluoroquinolone."
    },
{
        "id" : 11,
        "prompt" : "A 50 y/o immigrant from Bangladesh reports having a 5 mo history of coughing, 3 wks of night sweats, and 15 kg weight loss over the past 6 mo. Crackles are heard in his right apex. Chest X-ray reveals a cavitary lesion in the right apex. The pathogen you have in mind should be treated with?",
        "choices": [
            "Metronidazole, Moxifloxacin, Piperacillin-tazobactam, Vancomycin",
            "Ceftolozane-tazobactam, Erythromycin, Linezolid, Rifampin",
            "Ethambutol, Isoniazid, Pyrazinamide, Rifampin", 
            "Erythromycin, Isoniazid, Pyrazinamide, Rifampin",
            "Doxycycline, Erythromycin, Isoniazid, SMX-TMP"],
        "correct": "Ethambutol, Isoniazid, Pyrazinamide, Rifampin",
        "tags":["PD","medium","ABX","Infectious"],
        explain: "This question requires the understanding of TB and its treatment. In this vignette, we are presented with a patient that immigrated from Bangladesh (a TB endemic country), a chronic history of cough, night sweats, and weight loss. These are all signs associated with TB infection - remember TB is a chronic infection! The physical exam reveals crackles near the apex. TB tends to infect the upper lobes, especially the apex, where O2 % is higher (TB is an obligate aerobe). Finally, imaging reveals a cavitary lesion, another potential sign of a granuloma probably due to TB. We don’t have any blood work, stains, or cultures, but the history, exam, and imaging make it highly likely he has TB. The treatment for TB is RIPE: Rifampin, Isoniazid, Pyrazinamide, Ethambutol. First 2 months with RIPE, followed by 4 months of rifampin and isoniazid."
    },
{
        "id" : 12,
        "prompt" : "A 20 y/o patient presents to the clinic with a nonproductive cough that started a week ago, fatigue, and is afebrile. Pulmonary exam reveals crackles in both lungs. He is sent for a chest X-ray that shows diffuse interstitial infiltration in both lungs. Given this presentation, which antibiotic would you prescribe?",
        "choices": [
            "Amoxicillin",
            "Amoxicillin-clavulanate",
            "Azithromycin",
            "Cloxacillin", 
            "Vancomycin"],
        "correct": "Azithromycin",
        "tags":["PD","medium","MoA","ABX","Infectious"],
        explain: "This question requires understanding atypical pneumonia and a treatment based on its mechanism. In this vignette, we are presented with an afebrile young patient with a nonproductive cough and an exam that reveals trace crackles bilaterally. We should be suspicious of atypical community acquired pneumonia (CAP) given the nonproductive cough and mild symptoms. The CXR reveals diffuse interstitial infiltration, which is a radiographic sign of atypical CAP. Given his demographic and mild symptoms (“walking pneumonia”), the most likely bug is mycoplasma pneumoniae. Mycoplasma pneumoniae does not have a cell wall, therefore any antibiotic that targets the cell wall will NOT be effective. Hence, (C) Azithromycin is the correct choice because it targets the 50s ribosomal subunit and inhibits protein synthesis. Doxycycline would also be a valid ABX."
    },
{
        "id" : 13,
        "prompt" : "A 73 y/o nursing home resident presents to the ER. Her vitals are BP 85/55, HR 130, RR 32, T 38.6 \u00b0C, O2 87% RA. Her signs and symptoms point towards pneumonia. Her condition is deteriorating and with consent she is intubated and admitted to the ICU. After blood cultures are drawn, what empiric treatment would you start the patient on?",
        "choices": [
            "Ceftriaxone and azithromycin",
            "Piperacillin-tazobactam and vancomycin",
            "Meropenem and vancomycin", 
            "Amoxicillin-clavulanate and azithromycin",
            "B and C are both valid options"],
        "correct": "B and C are both valid options",
        "tags":["PD","medium","ABX","Infectious"],
        explain: "The question requires understanding the empiric therapy for HAP in a very sick patient. In this vignette, we are presented with a very sick patient with a CURB65 score of at least 3 (we don’t know if she has confusion) and is admitted to ICU and intubated. Given her presentation, we want to cover the broadest spectrum of bugs that includes MRSA and Pseudomonas. In this case, (B) and (C) have the best coverage that includes MRSA and Pseudomonas."
    },
{
        "id" : 14,
        "prompt" : "An 80 y/o patient in the ICU has been on the ventilator for 8 days when he develops a fever and increased respiration rate. The ICU nurse notes that the endotracheal tube is filled with white secretions. The patient is started on empiric therapy for suspected pneumonia. A sputum sample Gram stain shows Gram negative bacilli and culture confirms pseudomonas. Which of the following antibiotics would be the most effective?",
        "choices": [
            "Ceftaroline",
            "Ceftazidime",
            "Moxifloxacin", 
            "Ceftaroline (IV)",
            "Vancomycin"],
        "correct": "Ceftazidime",
        "tags":["PD","medium","ABX","Infectious"],
        explain: "This question requires recognizing treatments for pseudomonas aeruginosa infections. In this vignette, we are presented with an eldery ICU patient who appears to have ventilator acquired pneumonia (VAP). VAP empiric therapy should include pseudomonas and MRSA coverage. Her sputum sample and culture confirms pseudomonas (gram negative bacilli). Out of the choices, only (B) ceftazidime has pseudomonas coverage. (A) Ceftaroline and (D) vancomycin cover MRSA. (C) moxifloxacin does not cover either. You may be thinking of ciprofloxacin, which is the fluoroquinolone with pseudomonas coverage. The other ABXs that cover pseudomonas: ciprofloxacin, ceftazidime, cefepime, meropenem, imipenem, ceftolozane-tazobactam."
    },
{
        "id" : 15,
        "prompt" : "A 52 y/o patient presents to the clinic with a 5 day history of productive cough and fever. His vitals are taken and his T 38.6C,  RR 25, BP 120/80, and HR 87. His past medical history is unremarkable, no medication, and no known drug allergies. A chest X-ray is taken and shows consolidation in the right middle lobe. What prescription would you give him?",
        "choices": [
            "Amoxicillin x 5 days",
            "Amoxicillin x 7 days",
            "Azithromyicin x 5 days", 
            "Azithormyicin x 7 days",
            "Amoxicillin-clavulanate + azithromycin x 7 days"],
        "correct": "Amoxicillin x 5 days",
        "tags":["PD","easy","ABX","Infectious"],
        explain: "This question requires understanding the treatment regime for non hospitalized community acquired pneumonia (CAP). In this vignette, we are presented with a febrile 52 y/o patient with a productive cough, an elevated RR, and not altered. His CURB65 score in this case is 1 (RR >20), thus no hospitalization. The CXR shows consolidation in the RML, therefore we can be fairly certain of typical CAP. Given his demographic the most likely organism is Streptococcus pneumoniae. He also has no comorbidities. Hence, he can be started on (C) amoxicillin for 5 days."
    },
{
        "id" : 16,
        "prompt" : "A 29 y/o patient returns for a follow-up after a 5 day antibiotic course to treat pneumonia. The patient’s pneumonia has not improved since his last visit. During the history, the patient describes recently having acid reflux and has been ingesting multiple Tums (CaCO3) throughout the day. On oral exam, no teeth discolouration was noted. Given this presentation, which antibiotic was originally prescribed?",
        "choices": [
            "Amoxicillin",
            "Amoxicillin-clavulanate",
            "Azithromycin", 
            "Cefuroxime",
            "Doxycycline"],
        "correct": "Doxycycline",
        "tags":["PK","hard","ABX","Side effects","Infectious"],
        explain: "This presentation requires understanding tetracycline PK. In this vignette we are presented with a patient who’s pneumonia has not improved despite a 5 day course of an ABX. We are also told that he is taking CaCO3 at the same time for acid reflux. Both of these aliquots of info should point towards a drug-drug interaction that is occurring. Either, the raising of stomach pH or the calcium is causing this interaction that is leading to decreased efficacy of the ABX. (E) is the most likely answer because doxycycline chelates calcium readily, which inhibits its absorption orally. This will explain the decreased efficacy due to decreased absorption of doxycycline. This also explains permanent teeth discolouration in children <8 yrs, where doxycycline binds to the calcium in teeth during the mineralization process. Rarely, tooth discolouration can also occur in adults and is not usually permanent."
    },
{
        "id" : 17,
        "prompt" : "In January, a 49 y/o male patient presented with a sudden onset of fever, myalgia, headache, sore throat, and non-productive cough. COVID rapid antigen test was negative. Vitals were T 38.3 \u00b0C, RR 24, HR 100, BP 110/85, O2 96% RA. Bilateral rales on exam and chest x-ray showed diffuse, non patchy infiltration of the lungs. The patient was started on two antibiotics and an ani-viral. What was the anti-viral and its mechanism of action?",
        "choices": [
            "Acyclovir, a viral DNA polymerase inhibitor",
            "Lopinavir, a protease inhibitor",
            "Oseltamivir, a neuraminidase inhibitor", 
            "Ombitasvir, a NS5A inhibitor",
            "Tenofovir, a reverse transcriptase inhibitor"],
        "correct": "Oseltamivir, a neuraminidase inhibitor",
        "tags":["PD","medium","MoA","viral","Infectious"],
        explain: "This question requires recognizing viral pneumonia and a treatment for influenza. In this vignette, we are presented with a patient with a non-productive cough, fever, myalgia, headache, and sore throat. These suggest a viral infection causing atypical pneumonia. His exam also showed bilateral rales and a CXR showed diffuse non-patchy infiltrates, which further suggests an atypical pneumonia due to a viral infection. Coupled with the presentation during flu season, we should be suspicious of influenza. (C) Oseltamivir (Tamiflu)  is the only antiviral listed for influenza. (A) Acyclovir is used for herpes simplex (HSV) and varicella zoster (VZV), (B) lopinavir and (E) tenofovir are used for HIV, (D) ombitasvir is used for Hep C."
    },
{
        "id" : 18,
        "prompt" : "A 28 y/o male who uses IV heroin presents to the ER with a cough and vitals: T 40 \u00b0C, RR 26, HR 125, BP 92/68, O2 98% RA. Chest X-ray showed consolidation in multiple lobes of the lung bilaterally. The patient is admitted and blood cultures are drawn and are positive 24 hrs later show gram positive cocci in clusters, later confirmed as MRSA. Which of the following antibiotics would be the least effective?",
        "choices": [
            "Vancomycin IV",
            "Daptomycin IV",
            "TMP-SMX PO", 
            "Ceftaroline IV",
            "Linezolid PO"],
        "correct": "Daptomycin IV",
        "tags":["PK","medium","MoA","ABX","Infectious"],
        explain: "This question requires understanding the pharmacology of ABXs used for MRSA. In this vignette, we are presented with a patient who appears to be septic and very toxic given his vitals. His CXR shows multiple areas of consolidation bilaterally, which also suggests a hematogenous spread. Given that he is also a person who injects drugs, we should consider MRSA as a potential culprit. His blood cultures showing gram positive cocci in clusters further point towards Staph aureus. All 5 choices are ABXs that are effective against MRSA, however (B) Daptomycin, is the only one that is NOT effective in pneumonia because daptomycin is inactivated by lung surfactant"
    }
]