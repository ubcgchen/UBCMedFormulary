export const cnsInfections = [
  {
    id: 1,
    prompt:
      "Which of the following correctly composes a 3 drug antiretroviral treatment for HIV?",
    choices: [
      "Atazanavir + Efavirenz + Raltegravir",
      "Emtricitabine + Tenofovir + Dolutegravir",
      "Emtricitabine + Lamivudine  +Tenofovir",
      "Dolutegravir + Rionavir + Tenofivir",
    ],
    correct: "Emtricitabine + Tenofovir + Dolutegravir",
    tags: ["PD", "medium", "MoA", "Infectious", "HIV", "virology"],
  },
  {
    id: 2,
    prompt:
      "A partner of a patient who recently tested positive for HIV is put on pre-exposure prophylaxis of tenofovir + emtricitabine. Which of the following adverse effects should be followed up on?",
    choices: ["Bone density", "Kidney function", "Nausea", "A and B"],
    correct: "A and B",
    tags: ["PD", "medium", "side effects", "Infectious", "HIV", "virology"],
  },
  {
    id: 3,
    prompt:
      "Which of the following correctly matches the mechanism of action of drugs used for HIV to its corresponding example?",
    choices: [
      "Integrase inhibitor - Emtricitabine",
      "Non-nucleoside reverse transcriptase inhibitor - Tenofovir",
      "Nucleoside reverse transcriptase inhibitor - Efavirenz",
      "Nucleoside reverse transcriptase inhibitor - Dolutegravir",
      "Protease inhibitor - Atazanavir",
    ],
    correct: "Protease inhibitor - Atazanavir",
    tags: ["PD", "medium", "MoA", "Infectious", "HIV", "virology"],
  },
  {
    id: 4,
    prompt:
      "A 60 y/o patient that had a liver transplant a month ago presents to the ER with a fever and abdominal pain. An initial diagnostic workup suggested abdominal pain secondary to enterocolitis and hepatitis. Given her immunocompromised status, you are suspicious of a latent viral reactivation and order some tests. Results of tests: monospot negative, rapid HIV test negative, CBC and peripheral blood smear shows lymphocytosis (60%) with more than 10% being atypical. Serology and blood cultures are pending. The most likely pathogen in this case is most effectively treated with which drug?",
    choices: [
      "Acyclovir IV",
      "Ganciclovir IV",
      "Ceftriaxone + Vancomycin IV",
      "Var-Ig",
    ],
    correct: "Ganciclovir IV",
    tags: ["PD", "medium", "Infectious", "virology"],
  },
  {
    id: 5,
    prompt:
      "A 72 y/o female patient presents to the ER with a fever of 38degC, nuchal rigidity, and altered mental status. She is started on empiric therapy for meningitis, with the following cocktail: vancomycin IV, ampicillin IV, ceftriaxone IV, dexamethasone IV, acyclovir IV. Which of the following is TRUE?",
    choices: [
      "Acyclovir acts as a dTTP analogue leading to early chain termination of DNA",
      "Ampicillin can be safely given to patients with a known penicillin allergy",
      "Ceftriaxone is included in the regime because ampicillin does not have any activity against Listeria",
      "IV Acyclovir may lead to decreased urine output and acute kidney injury",
    ],
    correct:
      "IV Acyclovir may lead to decreased urine output and acute kidney injury",
    tags: [
      "PD",
      "medium",
      "MoA",
      "Infectious",
      "Neurology",
      "side effects",
      "virology",
    ],
  },
  {
    id: 6,
    prompt:
      "A 80 y/o man presents to the clinic with a 2 day history of flank pain and a rash. The rash appears erythematous papules that follow the T10 and T11 dermatomes. You take a sample for PCR, but you are suspicious of a specific virus given his vaccinations are not up to date. What is the mechanism of action of the drug you would use to treat this patient?",
    choices: [
      "dGTP analogue leading to early chain termination of DNA after activation via viral thymidine kinase",
      "dTTP analogue leading to early chain termination of DNA after activation via viral thymidine kinase",
      "Integrase inhibitor, thereby preventing integration of viral DNA into host genome",
      "Protease inhibitor, thereby preventing activation of viral proteins to allow for viral replication",
      "Reverse transcriptase inhibitor,  thereby preventing DNA synthesis from RNA",
    ],
    correct:
      "dGTP analogue leading to early chain termination of DNA after activation via viral thymidine kinase",
    tags: ["PD", "medium", "MoA", "Infectious", "virology"],
  },
  {
    id: 7,
    prompt:
      "Which of the following drugs for Hep C is correctly matched with its respective mechanism of action?",
    choices: [
      "Elbasvir - NS3/4A Protease inhibitor",
      "Grazoprevir - NS5B inhibitor",
      "Ledipasvir - NS5A inhibitor",
      "Sofosbuvir - NS3/4A Protease inhibitor",
    ],
    correct: "Ledipasvir - NS5A inhibitor",
    tags: ["PD", "medium", "MoA", "Infectious", "GI", "virology"],
  },
  {
    id: 8,
    prompt:
      "Andy, a 24 y/o patient, presents to the ER with a sudden onset headache, fever (39\u2070C) and altered mental status. His vitals are HR 110, BP 80/60, RR 28. There is rigidity with forward neck flexion and as a GCS of 12. His extremities are covered in a purple petechial rash. Andy is started on empiric therapy prior to blood cultures. A LP shows high WBC (neutrophils predominant), increased opening pressure, high protein, low glucose, and the gram stain indicates a diplococcus Gram negative bacteria. Which of the following drugs should he be kept on?",
    choices: ["Acyclovir", "Ceftriaxone", "Vancomycin", "B and C"],
    correct: "Ceftriaxone",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology"],
  },
  {
    id: 9,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 presents to the ER with a headache, nuchal rigidity, and a fever. Some vitals are BP 120/80, T 38.5\u2070 C, HR 95, RR 25. Normal fetal movement and heart rate. You suspect meningitis, and start her on empiric therapy. Which of the following drugs is added for pregnant patients with suspected meningitis to minimize the risk of preterm labor, stillbirths, or neonatal sepsis?",
    choices: [
      "Acyclovir",
      "Ampicillin",
      "Dexamethasone",
      "Ceftriaxone",
      "Vancomycin",
    ],
    correct: "Ampicillin",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology", "Ob/Gyn"],
  },
  {
    id: 10,
    prompt:
      "You are on your ER rotation and a 24 y/o patient presents to the ER with the classic signs of meningitis. It is later confirmed that the patient had meningitis caused by Neisseria meningitidis. You, your supervising resident, and several nurses had close contact with the patient. What drug should be taken prophylactically?",
    choices: [
      "Ampicillin",
      "Ceftriaxone",
      "Rifampin",
      "Tenofovir/Emtricitabine",
      "None, prophylaxis not needed",
    ],
    correct: "Rifampin",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology"],
  },
  {
    id: 11,
    prompt:
      "A 40 y/o male presents to the ER with aphasia, blurry vision and signs pointing towards meningitis. Argyll-Robertson pupils (pupils that constrict due to accommodation, but not to light), a highly specific sign for neurosyphilis, are noted. Diagnostic workup confirms the presence of Treponema pallidum in the CSF. Which of the following is the drug of choice?",
    choices: ["Ceftriaxone", "Doxycycline", "Penicillin G", "Vancomycin"],
    correct: "Penicillin G",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology"],
  },
  {
    id: 12,
    prompt:
      "A 50 y/o immigrant from Laos reports a 6 wks constant and worsening headache, neck pain with stiffness, a fever (38\u2070C), and 3 wks of night sweats. A cranial nerve exam reveals a right CN III palsy. A lumbar puncture shows: a turbid appearing CSF, increased opening pressure, increased WBC (lymphocyte predominant), slightly elevated protein, and decreased glucose. The patient received the BCG vaccine years ago, so an interferon gamma release assay is done and comes back positive. Cultures are pending. The most likely pathogen in this case is treated with what regime?",
    choices: [
      "Acyclovir, Ampicillin, Ceftriaxone, Vancoymcin",
      "Acyclovir, Dexamethasone, Ceftriaxone, Vancomycin",
      "Ethambutol, Isoniazid, Rifampin, Pyrazinamide",
      "Ethambutol, Linezolid, Rifampin, Pyrazinamide",
      "Ethambutol, Ganciclovir, Linezolid, Moxifloxacin",
    ],
    correct: "Ethambutol, Isoniazid, Rifampin, Pyrazinamide",
    tags: ["PD", "medium", "Infectious", "Neurology"],
  },
  {
    id: 13,
    prompt:
      "What is the main pharmacokinetic property of nitrofurantoin that makes it an effective antibiotic for UTIs?",
    choices: [
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartment",
      "Slowly metabolized,allowing it stay longer in the body to kill bacteria",
      "Increased tissue penetration, allowing it stay longer in the body to kill bacteria",
      "High oral bioavailability leading to high plasma serum levels, allowing it to achieve minimum effective concentration systemically",
    ],
    correct:
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartment",
    tags: ["PK", "medium", "MoA", "Infectious", "Urology"],
  },
];
