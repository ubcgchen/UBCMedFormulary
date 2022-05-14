export const data = [
    {
        "id" : 1,
        "prompt" : "A 6 y/o boy presents to the clinic with a fever and sore throat. Based on clinical findings during the exam, he is diagnosed with strep throat and prescribed 250 mg penicillin V PO BID for 10 days. His parents ask if it’s possible to just double the dose to kill the bacteria faster. In this case, would Pen V be more effective at a higher dose?",
        "choices": [
            "Yes because Pen V is bacteriostatic", 
            "No because Pen V is bactericidal",
            "Yes because Pen V is a concentration dependent antibiotic",
            "No because Pen V is a time dependent antibiotic"],
        "correct": "No because Pen V is a time dependent antibiotic",
        "tags":["PK","medium","ABX","Infectious"]
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
        "tags":["PD","easy","ABX","Infectious","MoA"]
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
        "tags":["PD","easy","ABX","Infectious","MoA"]
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
        "tags":["PD","easy","ABX","Infectious","MoA"]
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
        "tags":["PD","hard","Side effects","MoA","ABX","Infectious"]
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
        "tags":["Side effects","medium","ABX","Infectious","GI"]
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
        "tags":["PD","easy","MoA","ABX","Infectious"]
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
        "tags":["PD","medium","MoA","ABX","Infectious"]
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
        "tags":["medium","ABX","Infectious"]
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
        "tags":["hard","MoA","Side effects","Infectious"]
    },
{
        "id" : 11,
        "prompt" : "A 50 y/o immigrant from Bangladesh reports having a 5 mo history of coughing, 3 wks of night sweats, and 15 kg weight loss over the past 6 mo. Crackles are heard in his right apex. Chest X-ray reveals a cavitary lesion in the right apex. The pathogen you have in mind should be treated with?",
        "choices": [
            "Metronidazole, Moxifloxacin, Piperacillin-tazobactam, Vancomycin",
            "Ceftolozane-tazobactam, Erythromycin, Linezolid, Rifampin",
            "Ethambutol, Isoniazid, Pyrazinamide, Rifampin", 
            "Erythromycin, Isoniazid, Pyrazinamide, Rifampin",
            "Doxycycline, Erythromycin, Isoniazid, SMP-TMX"],
        "correct": "Ethambutol, Isoniazid, Pyrazinamide, Rifampin",
        "tags":["PD","medium","ABX","Infectious"]
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
        "tags":["PD","medium","MoA","ABX","Infectious"]
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
        "tags":["PD","medium","ABX","Infectious"]
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
        "tags":["PD","medium","ABX","Infectious"]
    },
{
        "id" : 15,
        "prompt" : "A 52 y/o patient presents to the clinic with a 5 day history of productive cough and fever. His vitals are taken and his T 38.6C,  RR 25, BP 120/80, and HR 87. His past medical history is negative, no medication, and no known drug allergies . A chest X-ray is taken and shows consolidation in the right middle lobe. What prescription would you give him?",
        "choices": [
            "Amoxicillin x 5 days",
            "Amoxicillin x 7 days",
            "Azithromyicin x 5 days", 
            "Azithormyicin x 7 days",
            "Amoxicillin-clavulanate + azithromycin x 7 days"],
        "correct": "Amoxicillin x 5 days",
        "tags":["PD","easy","ABX","Infectious"]
    },
{
        "id" : 16,
        "prompt" : "A 29 y/o patient returns for a follow-up after a 5 day antibiotic course to treat pneumonia. The patient’s pneumonia has not improved since his last visit. During the history, the patient describes recently having acid reflux and has been ingesting multiple Tums (CaCO<sub>3</sub>) throughout the day. An oral exam reveals slight teeth discolouration.  Given this presentation, which antibiotic was originally prescribed?",
        "choices": [
            "Amoxicillin",
            "Amoxicillin-clavulanate",
            "Azithromycin", 
            "Cefuroxime",
            "Doxycycline"],
        "correct": "Doxycycline",
        "tags":["PK","hard","ABX","Side effects","Infectious"]
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
        "correct": "Oseltamivir a neuraminidase inhibitor",
        "tags":["PD","medium","MoA","viral","Infectious"]
    },
{
        "id" : 18,
        "prompt" : "A 28 y/o male who uses IV heroin presents to the ER with a cough and vitals: T 40 \u00b0C, RR 26, HR 125, BP 92/68, O2 98% RA. Chest X-ray showed consolidation in multiple lobes of the lung. The patient is admitted and blood cultures are drawn and are positive 24 hrs later show gram positive cocci in clusters, later confirmed as MRSA. Which of the following antibiotics would be the least effective?",
        "choices": [
            "Vancomycin IV",
            "Daptomycin IV",
            "TMP-SMX PO", 
            "Ceftaroline IV",
            "Linezolid PO"],
        "correct": "Daptomycin IV",
        "tags":["PK","medium","MoA","ABX","Infectious"]
    }
]