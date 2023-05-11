export const cnsInfections = [
  {
    id: 1,
    prompt:
      "Which of the following correctly composes a 3 drug antiretroviral treatment for HIV?",
    choices: [
      "Atazanavir + Efavirenz + Raltegravir",
      "Emtricitabine + Tenofovir + Dolutegravir",
      "Emtricitabine + Lamivudine  +Tenofovir",
      "Dolutegravir + Ritonavir + Tenofivir",
    ],
    correct: "Emtricitabine + Tenofovir + Dolutegravir",
    tags: ["PD", "medium", "MoA", "Infectious", "HIV", "virology"],
    explain: "This question requires understanding the correct combo for ART/HAART. ART typically is a combination of 2 NRTIs (nucleoside reverse transcriptase inhibitor) + 1 NNRTI (Non-nucleoside reverse-transcriptase inhibitors) or INI (integrase inhibitor) or PI (protease inhibitor). The goal of ART is to target many different mechanisms involved in HIV replication, which in turn will help restore/preserve immune function (less virus to further suppress the immune system), reduce HIV transmission (less viral load, less amount of virus to be transmitted), reduce chronic inflammation and its consequences (less viral load, less immune response and inflammatory processes). The role of NRTI and NNRTI is to inhibit the reverse transcriptase step that converts HIV RNA to DNA. INI inhibits the step that integrates HIV DNA into the host genome. PI inhibits the HIV protease that helps cleave the HIV polyprotein into functional mature proteins. So as you can see, it would be ideal to block many different mechanisms involved in HIV replication. The correct possible combo is listed in: (B) - 2 NRTI + INI. (A) is PI + NNRTI + INI.  (C) is 3 NRTI (not ideal as this only targets one area) (D) is INI + PI + NRTI. Interestingly there are therapies that are based on 2 PIs + NRTI, in which ritonavir (PI) is actually mainly used to inhibit the CYP enzymes to increase the levels of the other PI (usually darunavir), which effectively decreases the number of times the medications need to be taken per day.",
  },
  {
    id: 2,
    prompt:
      "A partner of a patient who recently tested positive for HIV is put on pre-exposure prophylaxis of tenofovir + emtricitabine. Which of the following adverse effects should be followed up on?",
    choices: ["Bone density", "Kidney function", "Nausea", "A and B"],
    correct: "A and B",
    tags: ["PD", "medium", "side effects", "Infectious", "HIV", "virology"],
    explain: "This question requires understanding the adverse effects of some HIV medications. The adverse effects that should be followed up on are (A) and (B), hence (D) is the correct answer. Tenofovir is a nephrotoxic drug. It accumulates in the proximal tubules when it is secreted for excretion and causes mitochondria dysfunction of these cells, thus precipitating an intrarenal AKI. Tenofovir also affects some gene expression related to bone health, which results in decreased bone formation and increased bone resorption, hence there is an increased risk of osteoporosis. ART therapy in general is also associated with fatty liver disease and other metabolic problems. (C) almost every drug has the potential to cause nausea, but it isn’t serious enough to be followed up on.",
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
    explain: "This question requires understanding the mechanisms of actions of HIV medications. In general drugs that end in -vir are antivirals. The correct matches are: (A) InTEGRAse inhibitor - DoluTEGRAvir. (B) Non-nucleoside reverse transcriptase inhibitor - efavirenz. (C) and (D) nucleoside RTi - tenofovir and emtricitabine. (E) protease inhibitor - atazanavir, hence (E) is the correct answer. Most protease inhibitors have a suffix of “-navir”.",
  },
  {
    id: 4,
    prompt:
      "A 60 y/o patient that had a liver transplant a month ago presents to the ER with a fever and abdominal pain. An initial diagnostic workup suggested abdominal pain secondary to enterocolitis and hepatitis. Given her immunocompromised status, you are suspicious of a latent viral reactivation and order some tests. Results of tests: monospot negative, rapid HIV test negative, CBC and peripheral blood smear shows lymphocytosis (60%) with more than 10% being atypical. PCR viral loads, serology and blood cultures are pending.  He is up to date with all of his vaccinations The most likely pathogen in this case is most effectively treated with which drug?",
    choices: [
      "Acyclovir IV",
      "Ganciclovir IV",
      "Ceftriaxone + Vancomycin IV",
      "Var-Ig",
    ],
    correct: "Ganciclovir IV",
    tags: ["PD", "medium", "Infectious", "virology"],
    explain: "This question requires understanding the treatment for CMV. In this vignette we are presented with an immunocompromised patient (solid organ transplant patient) who now presents with nonspecific signs of an infection possibly a viral origin. The test results show negative HIV, negative monospot (though this is a low sens, high specificity test; can be negative within the 1st week of infection). There is lymphocytosis with atypical ones, these are suggestive of a viral infection such as EBV or CMV. He is also up to date with his vaccinations. The most likely pathogen in this case would be CMV. The diagnosis would be confirmed with CMV PCR (serology could work, but it isn’t that helpful since almost everyone will be sero + for CMV. If this patient was CMV sero - in their pre transplant workup, and was now sero +, then that would be helpful). The most common opportunistic infection in transplant patients is CMV. Hence, the correct treatment would be (B). Ganciclovir is a 2′-deoxy-guanosine that needs to be phosphorylated specifically by a viral kinase encoded by CMV. This forms ganciclovir triphosphate which then inhibits DNA polymerase and chain elongation, thus inhibiting viral replication. If this was EBV, ganciclovir is still the drug of choice in immunocompromised patients. Moreover, with an EBV infection we would need to watch out for PTLD (post transplant lymphoproliferative disorder; the rest of this thought is fyi), which is essentially unchecked proliferation of B-cells, which can evolve into a lymphoma. This usually occurs due to decreased Treg activity that would keep B-cell proliferation in check. This would be preemptively treated with a anti CD-20 monoclonal Ab (Rituximab) because CD-20 is expressed on B-cells and is involved in their life cycle..We can try valganciclovir, which is the PO version of ganciclovir (poor PO BA), but given hsi immune status, IV therapy would be preferred. (A) is used for HSV infection and would not be effective in CMV or EBV infections. In this case we are less concerned of a HSV infection. (C) is a standard empiric treatment for bacterial meningitis (minus dexamethasone), since both gram negatives and positives are covered. (D) Var-Ig would be for prophylaxis to VZV infection, also not something of concern here, presentation doesn’t match and his vaccines are up to date, though he is immunosuppressed. In this case, the most likely disease here is disseminated CMV disease potentially tissue invasive (confirm with biopsy path with the owl eye sign). Enterocolitis and hepatitis are common CMV disseminated diseases in the immunocompromised. Some other ones include esophagitis.",
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
    explain: "This question requires understanding the adverse effects of acyclovir. In this vignette we are presented with an elderly patient with potential meningitis. Given her age, she is started on a broad empiric therapy that covers the standard pathogens (Strep Pneumo, N. meningitidis), but also some age specific ones like listeria (Ampicillin), and HSV coverage as well.  The true statement in this case is (D). Acyclovir can be nephrotoxic because acyclovir has poor solubility, thus in the kidneys it can form crystals in the collecting ducts. The crystals obstruct the ducts and lead to an obstructive nephropathy and precipitate an AKI. Acyclovir is poorly soluble in both water and lipids, so it is given IV to avoid large variations in BA if given PO (it also has extensive first-pass metabolism). If acyclovir is given PO it is in the pro-prodrug form of valacyclovir (acyclovir itself is technically a pro-drug), which has better PO BA. (A) is not true, acyclovir is a guanosine analogue (dGTP) (confusingly, it is phosphorylated by viral thymidine kinase). (B) ampicillin is a third generation penicillin, so in patients with penicillin allergies, there is a risk of anaphylaxis. (C) is not true, cephalosporins do not work on Listeria, ampicillin is the go-to ABX for listeria.",
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
    explain: "This question requires understanding the treatment for VZV. In this vignette we are presented with a patient with flank pain and a rash that follows a dermatomal pattern. Given this we should think of a VZV infection. We are told his vaccinations are not up to date, thus we should be thinking of VZV reactivation causing herpes zoster (shingles). The treatment for VZV or herpes zoster is acyclovir. The mechanism is correctly described in (A). (C-E) describe antiretrovirals. (B) is made up. In young patients, we may not even treat it, but given this patient's age (>50 yo) we would treat him. Ideally treatment is meant to prevent Postherpetic Neuralgia (PHN), which presents as pain months after the rash and other sensory changes like numbness. However, treatment has not been shown to actually prevent this. We would also provide pain management. Prevention of VZV is provided with the VZV vaccination in seronegative patients. There is also the zoster vaccine like Shingrex. There is also PEP for VZV, which is the varicella vaccine in the immunocompetent within 3-5 days after (live-attenuated vaccine so it can’t be used in the immunocompromised) or Var Ig (within 96hr) and/or valacyclovir. VZV usually affects the thoracic dermatomes, but can also involve the cranial nerves. VZV infections of V1 (CNV) can present with herpes zoster ophthalmicus (Hutchinson's sign - nasociliary nerve involvement). Other VZV presentations include herpes zoster oticus also known as Ramsay Hunt syndrome (Justin Bieber).",
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
    explain: "This question requires recognizing the Hep C medications. The correct matches are: (A) Elbasvir - NS5A inhibitor, (B) Grazoprevir - NS3/4A Protease inhibitor, (C)- Ledipasvir - NS5A inhibitor, (D) sofosbuvir - NS5B inhibitor. The method to remember the targets: -Asvir = ns5A, -Buvir = -ns5B, -PRevir = PRotEase.",
  },
  {
    id: 8,
    prompt:
      "Andy, a 24 y/o patient, presents to the ER with a sudden onset headache, fever (39\u2070C) and altered mental status. His vitals are HR 110, BP 80/60, RR 28. There is rigidity with forward neck flexion and as a GCS of 12. His extremities are covered in a purple petechial rash. Andy is started on empiric therapy prior to blood cultures. A LP shows high WBC (neutrophils predominant), increased opening pressure, high protein, low glucose, and the gram stain indicates a diplococcus Gram negative bacteria. Which of the following drugs should he be kept on?",
    choices: ["Dexamethasone", "Ceftriaxone", "Vancomycin", "A and B", "B and C"],
    correct: "Ceftriaxone",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology"],
    explain: "This question requires understanding the treatment options in bacterial meningitis following empiric therapy. In this vignette we are presented with a patient with bacterial meningitis given the clinical presentation (triad), and LP results (high OP, high WBC with PMN predominance, low glucose, gram stain shows gram negative bac). The empiric treatment for a young adult patient presenting with meningitis needs to cover Strep pneumo, H Flu, and N. meningitidis, thus we should start him on vancomycin (Gram +), ceftriaxone (broad spectrum), dexamethasone (decreases mortality of strep pneumo meningitis), ± acyclovir if we are worried about HSV, in this case not so much. The clinical presentation should also make us think of N. meningitidis given the purple petechial rash. Gram stain showing gram negative bacteria suggests that we should switch our empiric therapy to a directed therapy for gram negatives. This means that we should stop everything except for ceftriaxone (B). This is because ceftriaxone has gram negative coverage. Once sensitivities return and culture confirms the species, we can switch to directed therapy such as penicillin (if its N. meningitidis). (C). Vancomycin only covers gram +. (A) is added because it decreases mortality in patients with Strep. Pneumo (gram +), in this case would not be warranted.",
  },
  {
    id: 9,
    prompt:
      "A 32 y/o pregnant (GA 22 wks) patient G3T1P1 presents to the ER with a headache, nuchal rigidity, and a fever. Some vitals are BP 120/80, T 38.5\u2070 C, HR 95, RR 25. Normal fetal movement and heart rate. You suspect meningitis, and start her on empiric therapy. Which of the following drugs is added for pregnant patients with suspected meningitis to MOST LIKELY minimize the risk of preterm labor, stillbirths, or neonatal sepsis?",
    choices: [
      "Acyclovir",
      "Ampicillin",
      "Dexamethasone",
      "Ceftriaxone",
      "Vancomycin",
    ],
    correct: "Ampicillin",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology", "Ob/Gyn"],
    explain: "This question requires understanding the empiric therapy for meningitis in pregnant patients. In this vignette we are presented with a pregnant patient with meningitis. Empiric therapy for a pregnant patient would cover the standard pathogens with ceftriaxone and vancomycin, but also listeria. Viral causes could be covered as well to reduce the risk of congenital HSV, though most cases of neonatal HSV occur during delivery when the neonate is exposed to lesions in the urogenital area. The correct answer in this case is (B). Ampicillin is the go to ABX for listeria. Pregnant patients are more likely to get infected with Listeria due to the immunosuppressive state the body is in during pregnancy (cell-mediated immunity goes down, so intracellular bacteria like listeria thrive). Listeria is associated with hams and cheeses. Listeria has the ability to cross the placenta and affect the developing fetus.",
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
    explain: "This question requires understanding the prophylactic treatment after Neisseria meningitidis exposure. Bacterial meningitis is contagious, hence prophylaxis is necessary with (C). Rifampin or ciprofloxacin can be used as prophylaxis to clear any colonization of N. meningitidis in the nasopharyngeal area. (A) isn’t used for this. (B) isn’t used for prophylaxis, but is used to treat N. meningitidis. (D) is the PEP for HIV. The MoA of rifampin is a RNA polymerase inhibitor. YOu can remember this because R for RNA.",
  },
  {
    id: 11,
    prompt:
      "A 40 y/o male presents to the ER with aphasia, blurry vision and signs pointing towards a CNS infection. MRI (FLAIR) of the brain is negative of temporal lobe inflammation. Argyll-Robertson pupils (pupils that constrict due to accommodation, but not to light), a highly specific sign for neurosyphilis, are noted. Diagnostic workup confirms the presence of Treponema pallidum in the CSF (EIA +, TPPA +, RPR 1:4). Which of the following is the drug of choice?",
    choices: ["Ceftriaxone", "Doxycycline", "Penicillin G", "Vancomycin"],
    correct: "Penicillin G",
    tags: ["PD", "medium", "MoA", "Infectious", "Neurology"],
    explain: "This question requires understanding the treatment of neurosyphilis. In this vignette we are presented with a patient with a suspected CNS infection that is confirmed to be neurosyphilis (fyi Argyll-Robertson pupil is a specific sign for neurosyphilis). The treatment of choice for syphilis is (C), Penicillin G. Specifically, the aqueous crystalline formulation of Pen G is the most preferred in neurosyphilis over the procaine or benzathine preparation because aqueous crystalline Pen G has better CNS penetration. In patients with penicillin allergy, it is advised to attempt penicillin desensitization and then administer pen G. However, an alternative could be ceftriaxone or doxycycline. Remember penicillin for syphilis. It should be noted that syphilis is an atypical gram negative bacteria, so vancomycin would be useless.",
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
    explain: "This question requires understanding the treatment of TB. In this vignette we are presented with a patient with a suspected CNS infection with a fairly chronic onset. He also has some focal neurological deficits. The LP shows an infection that is not congruent with typical bacterial meningitis (and the time course would not make sense in that case). Given all this fungal or TB would be more likely. He is an immigrant from a TB endemic region (SouthEast Asia) and is probably why he received the BCG vaccine, thus an IGRA is done (a skin test would come back positive in BCG vaccinated patients, but a blood test like IGRA will not be affected by the BCG vaccine), which comes back positive. This makes TB the most likely pathogen. The treatment for CNS TB is best described in (C). This is the RIPE treatment for TB. However, only the RIP has been shown to be effective in CNS TB. In fact the WHO guidelines prefer streptomycin over ethambutol. Commonly, dexamethasone is added to this regimen to decrease neuroinflammation and its associated complications and damage following microglial activation.",
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
    explain: "This question requires understanding the mechanism of nitrofurantoin. The correct answer is (A). This is a unique characteristic, which allows it to concentrate in the bladder to reach an effective concentration to kill bacteria with little systemic side effects. Once nitrofurantoin is ingested it is rapidly excreted through the kidneys, where it reaches the target organ for therapy and concentrates there. It is also a pro-drug, where it requires activation (reduction) by bacterial proteins, which converts it to a toxic metabolite that exerts its inhibitory effects.",
  },
  {
    id: 14,
    prompt:
      "A 56 y/o patient presents to the ER after having a seizure and altered mental status. His wife provides collateral that he was having a headache and a fever, and had trouble speaking (aphasia). He has a PMHx significant for SLE and is on optimal immunosuppression treatment that includes hydroxychloroquine and methotrexate. A CT is ordered and shows a hypodense lesion in the right temporal lobe. A LP shows increased opening pressure, mildly elevated WBC (lymphocyte predominance), protein normal, glucose normal. Given this presentation, the MOST LIKELY pathogen behind this presentation is treated with, which of the following medications?",
    choices: [
      "Acyclovir",
      "Ampicillin",
      "Ganciclovir",
      "Ceftriaxone",
      "Tenofovir",
    ],
    correct:
      "Acyclovir",
    tags: ["PK", "medium", "MoA", "Infectious", "Urology"],
    explain: "This question requires understanding the treatment for HSV encephalitis. In this vignette we are presented with a patient with altered mental status and a seizure. The collateral information provided by his wife is highly suggestive of a CNS infection such as encephalitis or meningitis. In fact given the focal neurological deficit (aphasia) and seizure, we’d be more concerned about encephalitis, but both meningitis and encephalitis can present similarly or be present together (meningoencephalitis). He is also an immunosuppressed patient, which puts him at risk for atypical pathogens and also latent virus reactivation. The LP further points away from typical bacterial meningitis to something more inline with viral or other atypical pathogens. The CT scan showing a hypodense lesion in the right temporal lobe is highly suspicious of a HSV encephalitis. HSV encephalitis brain lesions almost always involve the temporal lobes! Given all of this, the most likely pathogen here is HSV1, probably reactivation of the HSV1 in the trigeminal nerve ganglions that spread to the brain. Diagnosis can be confirmed with HSV PCR, however, it should be noted that HSV PCR can be negative in the first 72 hrs. Also HSV2 tends to present more like an aseptic meningitis, thus is less likely to present with seizures and altered mental status (but like many things in medicine, that is not always the case). The differential for viral encephalitis should include enterovirus, VZV, arbovirus (west nile), EBV (younger pts tends to be enterovirus and EBV, while older tends to be HSV1, enterovirus). The treatment of choice for HSV is (A). (B) is for listeria, (C) is used for CMV. (D) is a broad spectrum 3rd generation cephalosporin that covers gram + and gram -. (E) is a NRTi in HIV and HepB. ",
  },
];
