/**
 * Questions for Sepsis
 * @author Michael Gong, UBC VFMP 2025
 */

export const Sepsis = [
  {
    id: 1,
    prompt:
      "A 25 y/o female patient is transferred to the ICU after decompensating on the ward. Her vitals are BP 80/60, HR 100, T 39.2 degC, RR 28 O2 sat 94% RA. She has diffuse macular erythroderma, confusion, diarrhea, and vomiting. Her most recent labs show a severely elevated creatinine, and low PLT count. A source of infection is found to be a tampon that was not removed in a timely manner. She is stabilized in the ICU and cultures are drawn. Cultures later reveal Group A Strep (GAS). She is started on penicillin and ____, which is to ____?",
    choices: [
      "Clindamycin; reduce the risk of antibiotic resistance formation",
      "Clindamycin; stop the production of toxin",
      "Metronidazole; cover anaerobic bacteria since the infection source was below the diaphragm",
      "SMP-TMX; reduce the risk of antibiotic resistance formation",
      "Ceftriaxone; increase the effectiveness in killing GAS",
    ],
    correct: "Clindamycin; stop the production of toxin",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding the treatment approach for Group A Strep infections causing toxic shock syndrome (TSS). In this vignette we are presented with TSS due to GAS. We suspect this given the hypotension, high fever, diffuse rash, involvement of organ systems: altered mental status, GI sx, low PLT, kidney damage (elevated creatinine). The source of the infection (and a common one for group A strep) is found and removed. The treatment of Group A Strep (gram +) infection is penicillin, which is primarily used to kill the bacteria. However, this may cause the release of even more toxins as the pathogens are lysed. Therefore, we add an ABX that decreases toxin production/protein synthesis. In this case (B), clindamycin will provide us with that ability to decrease toxin production and hopefully dampen the damage caused by the toxin release. Moreover, the inoculum effect is another reason why we should add clindamycin. Bacteria growth follows a sigmoidal curve, where growth is the fastest in the middle of the “S”, which is evidently where penicillin works best as it inhibits cell wall production that is required during bacteria replication. The amount of bacteria required to cause TSS is high, so the bacteria population has reached a steady state/large inoculum (the top part of the “S”). At this state there is less bacterial division, so penicillin has less effectiveness, but clindamycin will retain effectiveness as its target is not the cell wall, but the 50s ribosomal subunit. It is possible that there may be a reduction in antibiotic resistance formation (A), (D), but this is not well substantiated. (E) is not true. (C) is not what would be done. If we did not have a culture confirmed GAS infection, or we suspect a polymicrobial infection such as anaerobes, we’d include piperacillin/tazobactam.",
  },
  {
    id: 2,
    prompt:
      "A 76 y/o female patient in septic shock is transferred to the ICU and is given Ringer’s lactate (30 cc/kg)and some pressors: NE and vasopressin. Her blood cultures return E. faecium. The ABX sensitivities have not returned. The team starts vancomycin IV. However, over the course of the day she continues to decompensate. Which of the following is MOST likely why vancomycin may not be working and what ABX to use instead?",
    choices: [
      "E. faecium expresses AmpC leading to enzymatic breakdown of vancomycin. Use linezolid instead",
      "E. faecium expresses AmpC leading to enzymatic breakdown of vancomycin. Use meropenem instead",
      "E. faecium expresses porins that pump out vancomycin. Use daptomycin instead",
      "E. faecium cell wall contains lactate in place of alanine, leading to decreased vancomycin binding. Use linezolid instead",
      "E. faecium cell wall contains lactate in place of alanine, leading to decreased vancomycin binding. Use meropenem instead",
    ],
    correct:
      "E. faecium cell wall contains lactate in place of alanine, leading to decreased vancomycin binding. Use linezolid instead",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the limitations of vancomycin and the mechanism behind vancomycin resistance. In this vignette we are presented with a patient with septic shock that is stabilized with fluids and pressors. She has an enterococcus infection, which is a Gram + cocci (in chains), specifically Faecium, which is more common in hospital-onset infections than faecalis. This bacteria tends to cause UTIs and hepatobiliary infections, and positive blood cultures should prompt checking for endocarditis. Although, E. faecium is Gram +, there is unfortunately growing resistance to vancomycin. These are called VRE. The main mechanism of resistance is and the correct ABX choice is described correctly in (D). Vancomycin is a glycopeptide that targets the cell wall by binding to D-ala-D-ala moiety in the peptidoglycan chain to prevent elongation and crosslinking. In VRE, a mutation causes Ala to be replaced with lactate, thereby preventing vancomycin binding and exerting its ABX action. We are left with our other Gram + specialist, Linezolid, which targets the 23S subunit of the 50S ribosomal subunit. We could consider daptomycin as well, which causes K+ efflux in bacteria. Meropenem, ertapenem, and ceftriaxone are not effective against enterococci, potentially due to changes in the penicillin binding protein and beta-lactamase expression. AmpC is expressed by the SPACE organisms: Serratia, Providentia, Acinetobacter, Citrobacter, Enterobacter and these like ESBL cause increased resistance to beta-lactams. ",
  },
  {
    id: 3,
    prompt: "Which of the following is NOT effective against MRSA?",
    choices: [
      "Ceftaroline",
      "Ceftolozane-Tazobactam",
      "Doxycycline",
      "Linezolid",
      "TMP-SMX",
    ],
    correct: "Ceftolozane-Tazobactam",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires knowing the ABXs effective against MRSA. The drug that is not effective against MRSA is (B) Ceftolozane-Tazobactam. This is a 5th generation cephalosporin with a beta lactamase inhibitor. It has activity against pseudomonas and ESBLs. (A) is a 5th generation cephalosporin. (C) is a PO option with MRSA coverage. (D) is one of our gram+ specialists that targets the 50s ribosome. (E) is another PO option with MRSA coverage, which works as an antifolate. Other MRSA ABX: Vancomycin, daptomycin, ~clindamycin.",
  },
  {
    id: 4,
    prompt:
      "A 56 y/o female presents to the ER with left flank pain, nausea and vomiting. Her vitals are BP 100/70, HR 140, T 39 degC, RR 20, GCS 15. She initially presented to her GP for a UTI 3 days ago, in which she was given nitrofurantoin, but her symptoms have progressively worsened since. Three months ago she traveled to Malaysia. In Malaysia she was treated for a UTI with cefotaxime. CBC shows WBC 15 (high), lactate 3 mM (high). Blood cultures and urine cultures are obtained. You start empiric therapy with?",
    choices: [
      "Ceftriaxone",
      "Ciprofloxacin",
      "Meropenem",
      "Pipercillin/Tazobactam",
      "Vancomycin",
    ],
    correct: "Pipercillin/Tazobactam",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding empiric therapy for pyelonephritis in a patient with prior ABX exposure. In this vignette we are presented a patient with a SIRS picture: HR, temp, WBC, she is possibly septic. She failed macrobid, as expected since this is a pyelo. First, we need to think what are the most likely pathogens in a UTI (KEEPS): klebsiella (gram - bacilli), E. coli (gram - bacilli), enterococcus (gram + cocci in chains)/enterobacter (gram - bacilli), proteus (gram - bacilli)/pseudomonas(gram - bacilli), staph saprophyticus (gram + cocci). Most common is E. coli. So empiric therapy needs to have good Gram - coverage. So (E) is not an option as it has no Gram - coverage. First line is usually 3rd gen cephalosporin like ceftriaxone (A), however there are multiple reasons why this may not be the best option. First, she was treated with cefotaxime, a 3rd gen ceph, recently for a UTI, and still gets a recurrent UTI. This suggests that she may be colonized by a bug that is resistant to ceftriaxone. Second, she has recent travel history to South East Asia, where there is an increased likelihood of having an organism resistant to first line ABXs like ceftriaxone. Third, she is presenting with SIRS and possibly septic, we’d want to use something stronger in this case. Hence, (D) would be the best option. This will also cover organisms like pseudomonas, potentially some other ESBL GN and enterobacter, but there is still a high chance that these are AmpC organisms, which would make pip/tazo ineffective. We will have to wait for the cultures and sensitivities to return, but for now the empiric treatment with pip/tazo would not be incorrect. (C) is also a viable option and actually has better coverage than pip/tazo, however, she isn’t “sick” enough to jump straight to a carbapenem and we should wait for the sensitivities or reconsider if she deteriorates more after initiating empiric therapy. We try not to fall to the carbapenems as our initial ABX as this could increase resistance to them. (B) is not going to be first-line in this case, there is growing resistance to it especially in south east asia. If the sensitives return showing sensitivity to cipro, then this would be something we’d switch to and use as outpatient therapy x7dys given its high BA when given PO.",
  },
  {
    id: 5,
    prompt:
      "A 56 y/o female patient has progressively gotten worse in the ward. Her vitals are BP 80/50, HR 140, RR 28, T 39 degC, SpO2 90% RA, GCS 12. She initially presented to the ER with an unrelated issue, but now has suspected pyelonephritis, possibly secondary to her urine catheter. She was started on empiric therapy and then switched to meropenem, where she still continues to rapidly decompensate. She is now being transferred to the ICU for stabilization. In this case, which of the following is the MOST likely organism that was not covered by meropenem?",
    choices: ["E. coli", "E. faecium", "Klebsiella", "Proteus", "Pseudomonas"],
    correct: "E. faecium",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the coverage of meropenem. In this vignette we are presented with a patient that has been progressively decompensating despite 2 different ABX treatments. She clearly has sepsis, and possibly going into septic shock. The organism that is not covered by meropenem is (B). Enterococcus faecium is not susceptible to meropenem. She possibly acquired E. Faecium while in the hospital given the urinary catheter. All the other organisms are generally covered by meropenem (unless they express Carbapenemases).",
  },
  {
    id: 6,
    prompt:
      "Michael is a 15 y/o male who presents to the ER with a bite wound. He says that he was playing with his pet cat when it bit him on his right index finger. You inspect the wound and see puncture marks. Michael says that he got a tetanus shot last yr following an open clavicle fracture. Which of the following is the best management option?",
    choices: [
      "Amoxicillin-clavulanate",
      "Amoxicillin-clavulanate + Rabies PEP",
      "Amoxicillin-clavulanate + tetanus booster",
      "Clindamycin",
      "Cats are clean so their mouths are clean, no ABX required unless Michael is immunocompromised",
    ],
    correct: "Amoxicillin-clavulanate",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment of animal bites. In this vignette we are presented with a cat-bite patient. The empiric treatment for a cat bite is Amox-clav and cat bites should always be treated as 80% get infected. Cat teeth are sharp and they penetrate more likely into deep tissue, thus causing deep space infections. The patient probably does not need a rabies PEP given it’s his pet cat, nor does he need a tetanus booster since he got one last year. Therefore, (A) is the correct answer. When in doubt, you can always give a tetanus shot. Usually it is given for minor wounds with no vaccine in 10 yrs or a major wound with no vaccine in 5 yrs. (E) actually describes what we would do in a dog bite, we’d treat if the patient was immunocompromised (or severe dog bite).",
  },
  {
    id: 7,
    prompt:
      "Which of the following is the LEAST likely resistance mechanism for Gram + and Gram - bacteria against ABXs like gentamicin?",
    choices: [
      "Altered target",
      "Decreased uptake of ABX",
      "Enzymatic breakdown/modification",
      "Pathway bypass",
      "None of the above",
    ],
    correct: "Pathway bypass",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding antibiotic resistance mechanisms and mechanisms of action. First, gentamicin is an aminoglycoside. The MoA of AGs is inhibition of protein synthesis by binding to the 16S subunit of the 30s ribosome, which causes premature termination of mRNA reading into protein. This suggests that gentamicin needs to be able to bind the ribosomal subunit (A), needs to be able to enter the bacteria or not get pumped out (B), and also resist enzymatic breakdown (C). It is highly unlikely for a bacteria to create a new pathway in synthesizing protein, hence (D) is the correct answer. Pathway bypass is something we’d see in ABXs that target the metabolism such as TMP/SMX in the folate pathway. Bacteria can scavenge folic acid through another pathway, thus do not need to rely on the folic acid pathway that is inhibited by TMP/SMX. Protein synthesis on the other hand would be something very hard to bypass with a novel pathway.",
  },
  {
    id: 8,
    prompt:
      "A 32 y/o patient presents to the ER with 1 day history of severe right flank pain. Hx: she describes a 3 day history of dysuria, increased frequency and urgency. Her vitals show BP 110/80, RR 21, HR 110, Temp 39 degC, SpO2 98% RA. Suprapubic tenderness on palpation. U/A is ordered and a dipstick shows positive leukocyte esterase and nitrites. The urine is turbid. Microscopic analysis shows WBC, WBC casts, and bacteria. Blood and urine cultures are pending. Given the likely diagnosis, you start empiric treatment with what?",
    choices: [
      "Ceftriaxone",
      "Cephalexin",
      "Fosfomycin",
      "Furosemide",
      "Nitrofurantoin",
    ],
    correct: "Ceftriaxone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment for pyelonephritis. In this vignette we are presented with a patient with pyelonephritis given the clinical presentation and U/A. There is potential systemic involvement given the fever, hence the blood cultures. The empiric treatment for a suspected pyelo is (A) ceftriaxone IV/IM or gentamicin IV/IM (same for outpatient or ER/hospitalized). Caution with gentamicin because it is nephrotoxic. This can be followed with outpatient PO treatment with cefixime or amox-clav or ciprofloxacin or TMP-SMX. (B) is an option for cystitis if the patient has had no ABX exposure within the last 6mo. (C) and (E) are both first line cystitis medications and won’t work in pyelonephritis because they can not achieve high enough serum levels to treat kidney infections. Both ABXs are quickly excreted into urine, where it concentrates in the bladder, thus making them good ABXs choices for lower UTIs while minimizing systemic exposure and its side effects. (D) is a loop diuretic.",
  },
  {
    id: 9,
    prompt:
      "What is the main pharmacokinetic property of nitrofurantoin that makes it an effective antibiotic for lower UTIs?",
    choices: [
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartment",
      "Slowly metabolized, allowing it stay longer in the body to kill bacteria",
      "Increased tissue penetration, allowing it stay longer in the body to kill bacteria",
      "High oral bioavailability leading to high plasma serum levels, allowing it to achieve minimum effective concentration systemically",
      "None of the above",
    ],
    correct:
      "Concentrated in the urine via glomerular filtration and renal tubular secretion, allowing it to achieve minimum effective concentration in the desired compartment",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the mechanism of nitrofurantoin. The correct answer is (A). This is a unique characteristic, which allows it to concentrate in the bladder to reach an effective concentration to kill bacteria with little systemic side effects. Once nitrofurantoin is ingested it is rapidly excreted through the kidneys, where it reaches the target organ for therapy and concentrates there. It is also a pro-drug, where it requires activation (reduction) by bacterial proteins, which converts it to a toxic metabolite that exerts its inhibitory effects.",
  },
  {
    id: 10,
    prompt:
      "A 45 y/o patient presents to his GP with a large carbuncle on his left shin. He denies any trauma. His PMHx is positive for T2DM and HTN – both are well managed. The GP does a needle aspirate and squeezes out some purulent discharge and blood. The purulent discharge is sent for culture. His vitals are BP 140/90, HR 80, RR 16, T 37.4 degC. He has NKDA. No other wounds or ulcers are seen on exam. He has no other previous culture results. Which of the following is the best course of management?",
    choices: [
      "Amoxicillin/clavulanate",
      "Cephalexin",
      "Cloxacillin",
      "TMP/SMX",
      "Vancomycin",
    ],
    correct: "TMP/SMX",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding the treatment of a soft tissue infection. In this vignette we are presented with a patient with a purulent soft tissue infection in the form of a carbuncle. First we need to determine what the most likely pathogen is. In purulent infection, the most common pathogen is Staph aureus (76%; MRSA and MSSA inclusive), followed by Streptococcus, then coagulase-negative staph. These are gram + bacteria, so our empiric treatment needs to cover Gram + and also cover MRSA. The patient in this case does not have a culture history (if he has a MRSA culture history, we definitely need to cover MRSA). He also does not have a SIRS picture or immunosuppression, so a PO ABX outpatient treatment would be most ideal. Given all of this, the correct choice here would be (D). TMP/SMX is a PO antifolate ABX that has some MRSA coverage. Other choices include doxycycline or clindamycin, which are also PO ABX with some MRSA coverage. Once the culture and susceptibility comes back we can then make the appropriate changes such as switching to cloxacillin PO/IV or cefazolin (IV) or cephalexin (PO) if MSSA. If the patient was presenting with systemic toxicity (SIRS) or immunocompromised, then we would go with stronger Gram + ABXs that also have MRSA coverage such as Vancomycin, linezolid, or daptomycin. (A) is too broad spectrum (has Gram - coverage that isn’t necessary) and doesn’t cover MRSA. (B) is a 1st gen cephalosporin IV ABX (ancef) that does not cover MRSA. (C) is a 2nd gen penicillin that covers MSSA, but not MRSA (PO and IV). Would ABX be warranted in this case? Probably given his T2DM and that it is a large abscess (a carbuncle).",
  },
  {
    id: 11,
    prompt:
      "A 45 y/o patient presents to the ED with severe right knee pain. He has a PMHx of T2DM, HTN (managed with thiazide). On history he describes a sudden onset of intense sharp pain 2 days ago, localized only to his right knee, denies any trauma, 10/10 pain. He describes being unable to walk and weight bear. No recent infections. He has had multiple sexual partners in the last couple of months and does not practice safe sex. He denies any STI symptoms. His vitals are BP 110/80, HR 100, RR 20, Temp 38.5C, SpO2 98% RA. On examination his right knee is swollen, red, and warm, has decreased RoM and he keeps it in a flexed position. It feels well fixed and no sinus tracts are observed. Other joints are unremarkable. CBC shows elevated WBC. Knee aspiration shows severely elevated WBC (60000), crystal (-), Gram stain: negative, culture pending. Which of the following is the best management plan?",
    choices: [
      "Cefazolin + Vancomycin",
      "Ceftriaxone + Rifampin",
      "Ceftriaxone + Vancomycin",
      "Ceftriaxone + Vancomycin + Rifampin",
      "Not septic arthritis, gram stain was negative",
    ],
    correct: "Ceftriaxone + Vancomycin",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding the empiric treatment of septic arthritis. In this vignette we are presented with a patient with monoarthritis. Immediately, we should think of septic arthritis. He does have a SIRS picture. Although the arthrocentesis gram stain comes back negative, we still think this is septic arthritis given the highly elevated WBC and the negative crystals, which rules out our other ddx of gout. The gram stain from a joint aspiration can come back negative and also have culture positives. Since the gram stain is inconclusive we need to cover both Gram + and Gram - bacteria as both S. aureus, strep, gram negative, mycobacteria/fungi can all cause septic arthritis. Therefore, (C) is the best option for empiric treatment until culture and susceptibility come back. Ceftriaxone will cover both Gram + and Gram -  (but mainly for the Gram - coverage) and vanco will cover Gram + and MRSA. IV therapy for a while is the current thinking. (A) does not cover Gram -. (B) does not cover MRSA, and rifampin is not required as this is not a prosthetic joint so biofilms are not a major concern. (D) not a prosthetic joint so biofilms are not a concern. If the Gram stain: Gram + cocci → start vancomycin alone. If the Gram stain: Gram - bacilli → start ceftriaxone alone.",
  },
  {
    id: 12,
    prompt:
      "A 34 y/o patient presents to the ED with severe left hip pain following a total hip replacement for congenital hip dysplasia 4 mos ago. Otherwise he has an unremarkable PMHx. He describes a sudden onset of intense sharp pain 5 days ago, localized to his left hip. He denies trauma. 10/10 pain, and is unable to bear weight. His vitals are BP 120/80, HR 110, RR 20, T 38.5 degC, SpO2 98% RA. Examination reveals a swollen, red, and warm hip joint with decreased RoM. The joints feel well fixed and no sinus tracts are observed. A joint aspiration confirms septic arthritis. With the Gram stain showing Gram positive cocci in clusters. He is started on empiric therapy. Cultures and sensitivity return showing MSSA, susceptible to ALL relevant PO ABXs. Transthoracic ECHO shows no valvular abnormalities. Given this, which of the following is the best management option (assume IV therapy for 6 wks)?",
    choices: [
      "Surgical debridement + switch empiric ABX to IV vancomycin, then PO cloxacillin + rifampin",
      "Surgical debridement + switch empiric ABX to IV cefazolin, then PO cephalexin + rifampin",
      "Surgical debridement + switch empiric ABX to IV cefazolin, then PO cloxacillin",
      "Remove prosthetic + switch empiric ABX to IV cefazolin, then PO cloxacillin",
      "Remove prosthetic + switch empiric ABX to IV vancomycin, then PO cephalexin",
    ],
    correct:
      "Surgical debridement + switch empiric ABX to IV cefazolin, then PO cephalexin + rifampin",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the management of septic arthritis in a prosthetic joint. In this vignette we are presented with a patient with a THA and now septic arthritis of the hip joint that is confirmed with joint aspiration. The gram + cocci in clusters makes this highly likely a Staph aureus infection. To determine whether the patient should have the prosthetic removed or surgical debridement we need to first determine if this infection is acute or chronic. The joint age  is 4 mos ago, but the onset of symptoms is 5 dys ago (<3 wks), so this is considered acute. Next the physical exam reveals no sinus tracts and a well fixed prosthesis. This and the susceptibilities to PO ABX means that we can consider debridement instead of removal of the joint (rule out (D) and (E)).  Given that this is a MSSA, vancomycin would be overkill, so (A) ruled out. From the final 2 choices, the best option would be (B) because this management plan has rifampin. Rifampin is important in any infection that involves biofilm formation such as prosthetic joints. Remember S. aureus is great at secreting biofilms. Rifampin has good penetration into the biofilm, thus allowing clearance of the bacteria in the biofilm. Rifampin has good penetration because it has a large lipophilic ring that allows it to travel through the hydrophobic parts of the extracellular environment of the biofilm. Rifampin is a RNA polymerase inhibitor (R for RNA), so it halts transcription and subsequent protein synthesis, leading to cell death. You can also think that since rifampin’s target is within the cell it has to have the ability to pass through membranes. It should be noted that rifampin has a fairly long half life, which helps with its penetration into the biofilm, but also has LOTS of drug interactions and is hard on the liver.",
  },
  {
    id: 13,
    prompt:
      "A 56 y/o male presents to his ED with a furuncle on his right shin that has been growing for the last 6 days. He denies any trauma or bites. His PMHx includes HTN, CAD, and anxiety. His vitals are BP 100/70, HR 110, RR 20, T 38.7 degC, SpO2 97% RA. He appears fairly unwell. The furuncle is painful to touch and purulent discharge is observed. His CBC reveals elevated WBC (17). A sample is sent for Gram stain and culture. Given this presentation, the best course of management would be?",
    choices: [
      "Amoxicillin/clavulanate PO",
      "Cefazolin IV",
      "Daptomycin  IV",
      "Penicillin IV",
      "Doxycycline PO",
    ],
    correct: "Daptomycin  IV",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment of purulent soft tissue infections. In this vignette we are presented with a patient with a furuncle. He however, has signs of SIRS, HR >90, temp> 38, WBC >12, and he appears unwell.  In purulent infection, the most common pathogens are Gram + like Staph aureus (76%; MRSA and MSSA inclusive). Given this we should try to manage him aggressively with IV medication that covers MRSA and MSSA. Therefore, (C) is the best answer as daptomycin covers Gram+ like  MRSA. (A) is too broad spectrum (has Gram - coverage that isn’t necessary) and doesn’t cover MRSA. (B) doesn’t cover MRSA. (D) doesn’t cover MRSA. (E) covers MRSA, but given the SIRS picture, we should treat him aggressively with IV ABX. Once the culture and susceptibility come back we can make the appropriate adjustments such as switching to cefazolin/cloxacillin if the culture grows MSSA.",
  },
  {
    id: 14,
    prompt:
      "A 15 y/o patient presents to the ED with a large rash on her face. She describes this starting yesterday and it’s making her feel unsightly. Her vitals are BP 100/80, HR 85, RR 16, T 38.5 degC, SpO2 99% RA. On physical exam there is a sharp, raised, well-demarcated area of erythema on both of her cheeks. No purulent discharge. Given this presentation, which of the following management options would you opt for?",
    choices: [
      "Amoxicillin PO",
      "Cefazolin IV",
      "Doxycycline PO",
      "TMP/SMX PO",
      "Vancomycin IV",
    ],
    correct: "Amoxicillin PO",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment for nonpurulent infection: erysipelas. In this vignette we are presented with non purulent soft tissue infection. This presentation of erysipelas can be differentiated from cellulitis given the well-demarcated area of erythema and raised. Cellulitis can have more indiscreet margins and is not commonly known to affect the face like erysipelas. Erysipelas is a more superficial infection of the upper dermis and superficial lymphatics, while cellulitis is a deeper infection into the dermis and subcutaneous tissue. The most common pathogen in this case would be Group A strep like strep pyogenes. Given this patient’s presentation, it does not appear to be causing anything systemic. Therefore, we can opt for PO with (A). Group A strep is almost always susceptible to the beta-lactams like penicillin, amoxicillin (3rd gen pen), cephalexin (1st gen ceph). If this was more serious we could opt for IV penicillin or IV cefazolin. Given the similarities to cellulitis, the treatment for uncomplicated erysipelas is mostly the same as cellulitis: beta lactams since the underlying pathogen is most likely Group A Strep. So if this was mistaken to be cellulitis, the treatment plan doesn’t really change, unless this was a complicated cellulitis infection.",
  },
  {
    id: 15,
    prompt:
      "A 65 y/o patient presents to the ED with a suspected skin infection in his groin region. His vitals: BP 100/70, HR 130, RR 24, T 39 degC, GCS 15, SpO2 96% RA. His PMHx is significant for HTN, T2DM, CAD, and eczema. On inspection there are large bullae in his inner thighs bilaterally. Erythema extends from his mid thigh into his groin and urogenital region. There is crepitus on palpation and decreased sensation. No purulent discharge. A CBC shows WBC 16 (elevated), kidney function: Cr 200 (elevated), lactate elevated. Blood and urine cultures are pending. Given this presentation, which of the following pharmacotherapies would you administer?",
    choices: [
      "Cefazolin IV",
      "Cefazolin IV + Clindamycin IV",
      "Penicillin IV + Clindamycin IV",
      "Piperacillin/Tazobactam IV + Vancomycin IV",
      "Piperacillin/Tazobactam IV + Vancomycin IV + Clindamycin IV",
    ],
    correct: "Piperacillin/Tazobactam IV + Vancomycin IV + Clindamycin IV",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment of necrotizing fasciitis (NF), that could progress into toxic shock syndrome. In this vignette we are presented with a patient with a soft tissue infection. He has a SIRS presentation (HR, T, WBC), which could progress into sepsis. The physical exam shows a large bullae in his groin region. This should start you into thinking about a possible case of NF. This is further supported by the cutaneous anesthesia (decreased sensation) and crepitus (air under the skin), which indicate a late stage NF infection. The kidney labs also suggest possible end organ dysfunction. He also has some risk factors such as T2DM, lower limb involvement (in this case the groin region → Fournier’s gangrene) Diagnosis can only be confirmed surgically, but in this case a XR may even show gas in the soft tissue. Given this presentation, the best course of action would be (E) for empiric coverage as we have not proven that this is GAS or a polymicrobial origin. This will cover the most likely pathogens: Group A Strep (Type 2) and Staph, but also cover any anaerobes and Gram negatives (Type 1). Vanco for the Gram +, Pip/Tazo for the Gram - and anaerobes, clindamycin for the toxin production and inoculum effect (explained in a previous question). Following culture and susceptibility, we can change empiric therapy into a more directed therapy. The main management for NF is surgical debridement for source control. ABX treatment could take at least 14 dys after the last negative operative culture. (A) and (B) would not cover MRSA, Gram -. (C) would be the go to if this was a GAS confirmed NF (confirmed with cultures). (D) doesn’t have clindamycin for the toxin and inoculum killing effect.",
  },
  {
    id: 16,
    prompt:
      "A 78 y/o male presents to his GP for a checkup. His PMHx includes poorly controlled T2DM, HTN, CHF, dyslipidemia, and peripheral vascular disease. He shows you his feet and is saying he’s got this weird spot on his left big toe. There is an ulcer with localized swelling and erythema confined to the big toe. It is warm to the touch and tender on palpation. It does not appear to be deep and is small in size. No purulent drainage. He has no prior MRSA history. He has no recent ABX usage. The prevalence of MRSA is low. Given this presentation, how would you manage this patient?",
    choices: [
      "Amoxicillin/clavulanate",
      "Cephalexin",
      "Cefazolin",
      "TMP/SMX",
      "No ABX, keep wound clean and proper wound care. ",
    ],
    correct: "Cephalexin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the management of a mildly infected ulcer. In this vignette we are presented with a patient with T2DM + PAD and an ulcer on his left big toe. It is swollen and erythematous, warm, and tender on palpation. It is small and appears more superficial than deep. This is a mild infection (purulent discharge is not required to be considered infected). Given his lack of MRSA history, recent ABX usage, and low MRSA prevalence, the standard empiric treatment should cover Strep and Staph (MSSA). Therefore we should manage with (B), a PO 1st gen cephalosporin that will cover Strep and MSSA. (A) would be an option in a moderate infection (or recent ABX use → Gram negative needs to be covered) as this would cover potential Gram negatives and anaerobes. (C) is also a 1st gen cephalosporin, but is given IV, so would be overkill in this case. (D) TMP/SMX is an add-on PO ABX if we have concerns for MRSA such as previous MRSA + cultures, high risk area 30-50% MRSA, or if it is determined that it is too risky to wait for cultures. (E) is not true, this is a mild infection.",
  },
  {
    id: 17,
    prompt:
      "A 24 y/o patient with walking pneumonia is getting his prescription at the pharmacy. He initially presented with a dry cough and fever. A CXR showed evidence of interstitial infiltrates and he was diagnosed with a mycoplasma infection. Which of the following ABXs would you expect to NOT work in this case (Hint: what type of bacteria is mycoplasma)?",
    choices: [
      "Azithromycin",
      "Ciprofloxacin",
      "Cephalosporins",
      "Doxycycline",
      "None of the above",
    ],
    correct: "Cephalosporins",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the coverage of atypical bacteria causes of respiratory infections. In this vignette we are presented with a suspected mycoplasma infection causing CAP in a healthy young individual. First we need to recall that mycoplasma is an atypical bacteria that does not gram stain because it does not have a cell wall. Given that mycoplasma does not have a cell wall, then any ABX that targets the cell wall will have NO efficacy against it. Therefore, (C) is the correct answer. Cephalosporins are beta-lactams, thus target the cell-wall, which will make it useless in this case. (A) is a macrolide that targets the 50s ribosome, (B) is a FQ that targets DNA gyrase/topoisomerase IV, (D) is a tetracycline that targets the 30s ribosomes. These 3 ABXs all have intracellular targets that would be unaffected by the lack of cell-wall. THis question is to highlight that understanding the mechanisms of ABXs and the microbiology, can help predict ABX activity in certain cases.",
  },
  {
    id: 18,
    prompt:
      "A 45 y/o patient presents with a growing rash on his left leg. It is warm to touch, painful, and erythematous. There is no purulent discharge. The erythematous border is not well demarcated and is not raised. His vitals are BP 120/80, HR 120, RR 20, T 38.5 degC, SpO2 98% RA. He previously was given penicillin PO, but the erythema has been spreading. Given this presentation you start empiric treatment with?",
    choices: [
      "Cephalexin",
      "Cefazolin",
      "Piperacillin-Tazobactam",
      "Vancomycin",
      "C + D",
    ],
    correct: "Cefazolin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment for cellulitis. In this vignette we are presented with a patient with a nonpurulent soft tissue infection. From the clinical presentation, it is most likely cellulitisHe has signs of SIRS (HR, Temp), and has failed oral ABX, specifically penicillin. In cellulitis the most common bacteria is Strep (¾), followed by Staph, but staph is more associated with IVDU, penetrating trauma, or open wounds. MRSA itself is not a common cause of non-purulent cellulitis. Therefore, we should start treatment that is IV (not PO since he didn’t respond to PO + systemic signs), and covers gram + bacteria like strep and staph. We don’t need to worry about MRSA coverage unless the infection is more serious such as necrotizing fasciitis (NF) or sepsis. The correct answer would be (B) cefazolin, a 1st generation cephalosporin that is given IV. (A) is a PO 1st gen ceph, that could have been the initial ABX instead of penicillin or amoxicillin. If there were signs of sepsis or NF, we would consider (E).",
  },
  {
    id: 19,
    prompt:
      "A 45 y/o patient presents to his GP with a fever, SoB, productive cough, runny nose, and facial pressure. Vitals: BP 140/80, HR 100, RR 20, T 38.6degC. There is dullness to percussion and crackles on auscultation of his right lower lobe. He is anti-vaccination (not up to date with ALL vaccines). There is tenderness when palpating his maxillary sinuses. Which of the following antibiotics does NOT provide adequate empiric coverage of the most likely organisms?",
    choices: [
      "Azithromycin",
      "Cefuroxime",
      "Levofloxacin",
      "Penicillin",
      "Piperacillin-Tazobactam",
    ],
    correct: "Penicillin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the ABX coverage for respiratory infections. In this vignette we are presented with a patient with a respiratory infection that presents as sinusitis (tenderness maxillary sinuses) and pneumonia (RLL dullness, crackles). The most likely organisms for pneumonia + sinusitis for a patient his age is Strep pneumo (gram + cocci in pairs) and H. flu (gram -; given his anti-vaccination status). The ABX here that does not adequately cover both Strep pneumo and H. flu is (D). This is because H. Flu is a gram - bacteria that can express beta-lactamases, that would render penicillin ineffective. This is why sometimes amoxicillin needs to be switched to Amox-clav for some H. flu infections. (A) is a macrolide and adequately covers both, (B) cefuroxime is a 2nd gen cephalosporin that has good activity against pathogens that cause respiratory infections including H. flu (even those that express penicillinases). (C) like moxifloxacin are FQs that have activity against Strep pneumo, unlike ciprofloxacin. (E) covers both, but would not be our first-line in this case.",
  },
  {
    id: 20,
    prompt:
      "A 75 y/o female presents to his GP for a checkup. She looks well. Her PMHx includes poorly controlled T2DM, HTN, CHF, dyslipidemia, and peripheral vascular disease. Her vitals are BP 140/90, HR 68, RR 16, T 37.5. She shows you her feet and is saying it hurts to walk around. There is a large ulcer at the bottom of her right calcaneus. There is erythema around the wound and radiates up her ankle > 2cm. Bone can be seen and there is purulent discharge. It is warm to the touch and tender on palpation. She has a history of MRSA + cultures. No recent ABX usage. Given this presentation, how would you manage this patient?",
    choices: [
      "Amoxicillin-Clavulanate",
      "Amoxicillin-Clavulanate + TMP/SMX",
      "Ceftriaxone",
      "Cephalexin + TMP/SMX",
      "Piperacillin/Tazobactam + Vancomycin",
    ],
    correct: "Amoxicillin-Clavulanate + TMP/SMX",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the management of moderate wounds. In this vignette we are presented with a patient with a moderate wound infection given the size (>2cm) and depth. She appears well without signs of SIRS, thus we are less worried about a systemic infection at this point. She has a history of MRSA + cultures, but no recent ABX usage. Either way we need to cover MRSA, strep, and Gram - and anaerobes (given the depth, there will be pockets of anaerobic environments for those bacteria to thrive). Therefore, the best empiric option before our wound culture results come back would be (B). The Amox-clav will cover the Gram -, anaerobes, Strep, and MSSA, while the TMP/SMX will cover MRSA. Both can be given PO, which is ideal. If this was a serious infection (signs of systemic infection) we would go with (E) to cover pseudomonas as well. (A) and (C) do not cover MRSA. (D) is the option if this was a mild infection with MRSA risk.",
  },
  {
    id: 21,
    prompt:
      "An 80 y/o patient in the ICU has been on the ventilator for 8 days when he develops a fever and increased respiration rate. The ICU nurse notes that the endotracheal tube is filled with white secretions. The patient is started on empiric therapy for suspected pneumonia. A sputum sample Gram stain shows Gram negative bacilli and culture confirms pseudomonas. Which of the following antibiotics would be the LEAST effective?",
    choices: [
      "Cefepime",
      "Ceftazidime",
      "Ertapenem",
      "Meropenem",
      "Piperacillin/Tazobactam",
    ],
    correct: "Ertapenem",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the ABXs that cover pseudomonas. In this vignette we have a patient with possible ventilator acquired pneumonia. The cultures confirm pseudomonas. The only ABX here with no pseudomonas activity is (C), ertapenem. Despite being a carbapenem it has no activity against pseudomonas. The rest have activity against pseudomonas. (A) is a 4th generation cephalosporin. (B) Ceftazidime is a 3rd gen cephalosporin. (D) is a carbapenem. (E) is a beta-lactam+beta-lactamase inhibitor. Other ABX that cover pseudomonas: imipenem, ciprofloxacin (PO only so not effective in this case! Pt is intubated!), levofloxacin.",
  },
  {
    id: 22,
    prompt: "Which of the following is FALSE regarding fluoroquinolones?",
    choices: [
      "Ciprofloaxin has poor Strep pneumoniae coverage",
      "Moxifloxacin is a FQ with Pseudomonas coverage",
      "Moxifloxacin is a FQ with anaerobic coverage ",
      "Levofloxacin is a FQ with good atypical bacteria causes of CAP coverage",
      "FQ resistances are mainly due to porin channels and alterations to DNA gyrase",
    ],
    correct: "Moxifloxacin is a FQ with Pseudomonas coverage",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding FQ pharmacology. The FALSE statement is (B). Moxifloxacin is the FQ that does NOT have activity against pseudomonas (Levo and cipro do). Moxi is the only FQ with good anaerobic coverage unlike cipro and levo. All FQs have good coverage of atypical bacteria causes of CAP. Cipro has poor Strep pneumo coverage, but is good at gram negative bacteria in GI/GU infections.",
  },
  {
    id: 23,
    prompt:
      "Which of the following correctly matches the drug to its mechanism of action?",
    choices: [
      "Amphotericin B → binds to ergosterol in the cell membrane, leading to pore formation, which causes ion leakage and thus cell death",
      "Fluconazole → inhibits beta-(1,3)-D-glucan synthase, thereby reducing beta-glucan synthesis, a component of the fungal cell wall",
      "Flucytosine → inhibits 14-demethylase, thereby inhibiting the conversion of lanosterol to ergosterol, a key component in fungal cell wall",
      "Micafungin → inhibits squalene epoxidase, thereby inhibiting the conversion of squalene to squalene epoxide, which is the precursor molecule to lanosterol, the precursor to ergosterol, resulting in decreased ergosterol, a key component in fungal cell wall",
      "Terbinafine → enters fungal cell and is converted into 5-fluorouracil, where it is incorporated into fungal RNA and inhibits DNA synthesis",
    ],
    correct:
      "Amphotericin B → binds to ergosterol in the cell membrane, leading to pore formation, which causes ion leakage and thus cell death",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of actions of antifungals. The correct answer is (A). The correct matches are as shown. (B) Fluconazole (-azoles) inhibits 14-demethylase, thereby inhibiting the conversion of lanosterol to ergosterol, a key component in fungal cell wall. It should be noted that this enzyme is a class of CYP450 enzyme, hence -azoles have MANY drug interactions because these drugs will interact with many of the CYP enzymes in the liver and alter the metabolism of many other drugs. (C) Flucytosine - enters fungal cell and is converted into 5-fluorouracil, where it is incorporated into fungal RNA and inhibits DNA synthesis (cytosine in the name should give you a hint it has something to do with DNA). (D) Micafungin (-fungin) - inhibits beta-(1,3)-D-glucan synthase, thereby reducing beta-glucan synthesis, a component of the fungal cell wall. (E) terbinafine (this is an fyi drug mostly used for superficial derm fungal infections) - inhibits squalene epoxidase, thereby inhibiting the conversion of squalene to squalene epoxide, which is the precursor molecule to lanosterol, the precursor to ergosterol, resulting in decreased ergosterol, a key component in fungal cell wall.",
  },
  {
    id: 24,
    prompt:
      "A 80 y/o patient is ICU day 12 after a palliative hemi-colectomy and develops a fever. There are no localizing features. Vitals: BP 80/60, HR 100, RR 24, SpO2 90% 4L, T 38.5degC. She is on a NE and vasopressin drip. Her CXR is unremarkable. WBC 3, PLT low, lytes, renal and liver are abnormal, elevated lactate. She has a right internal jugular CVC and is intubated. She has a history of Addison’s disease and is currently on long-term steroid replacement therapy. Empiric therapy is started with vancomycin and pip/tazo. Blood cultures return positive a day later with a Gram stain showing large oval forms with evidence of budding. Given this presentation, which of the following would be the best course of action (after the CVC is removed)?",
    choices: [
      "Continue vancomycin and pip/tazo",
      "Continue vancomycin and pip/tazo, add micafungin",
      "Continue vancomycin and pip/tazo, add fluconazole",
      "Stop vanco and pip/tazo, add micafungin",
      "Stop vanco and pip/tazo, add fluconazole",
    ],
    correct: "Stop vanco and pip/tazo, add micafungin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment for candidemia. In this vignette we are presented with a patient with sepsis and possibly septic shock given the pressor support. Her WBC is low (abnormal response to infection and possibly secondary to steroid use) and her temp is extremely high (possibly suppressed by steroids). She has a possible source of infection with the CVC. She started on empiric ABX, which is appropriate. Her blood cultures return large oval forms with budding. This is suggestive of Candida, which can grow in blood cultures. She has the risk factors for this: ICU, neutropenia, steroid use (Addison’s disease), CVC, recent abdo surgery (other risk factors include broad spectrum ABX use and TPN). The best course of action now is to switch her off the empiric ABX and start her on empiric antifungal that covers all the types of candida. This is described correctly in (D). Micafungin (other echinocandins like caspofungin work as well)  is a broad spectrum antifungal that covers most candida species. Fluconazole is not the preferred empiric treatment because some Candidas like glabrata, krusei, and auris have intrinsic resistance to it. Once the type of candida is determined, a step down to fluconazole can be done, unless there is resistance to it, in which amphotericin B or voriconazole would be used. Given that she has candidemia, we would also do an ECHO to check for endocarditis and consult optho for an eye exam. We could consider fluconazole as first line empiric treatment if she wasn’t that sick, no prior antifungal exposure, not neutropenic. Once she is stabilized and switched to the step down treatment, then she needs to be treated for another 14 days starting on the first day of negative cultures.",
  },
  {
    id: 25,
    prompt:
      "You are shadowing a medical microbiologist. She shows you some antibiotic sensitivities. She shows you a list of mean inhibitory concentrations (MIC) results for some CSF cultures. She asks you if the MIC is higher, would that mean the bug is more susceptible to the ABX?",
    choices: [
      "Yes, higher MIC, means more bug is killed with ABX/dose",
      "No, higher MIC, means more ABX required to kill bug",
      "M",
      "I",
      "C",
    ],
    correct: "No, higher MIC, means more ABX required to kill bug",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding what MIC is. The correct answer is (B). This can be thought of as the potency of the ABX. The lower the MIC, the less ABX is needed to inhibit bacteria growth.",
  },
  {
    id: 26,
    prompt:
      "Which of the following is TRUE regarding the azoles (Fluconazole and voriconazole)?",
    choices: [
      "Fluconazole covers both yeasts and molds",
      "Fluconazole does not penetrate synovial fluid well",
      "Strong inhibitors of CYP450 enzymes",
      "Voriconazole has good urine penetration",
      "Voriconazole does not cover cryptococcus",
    ],
    correct: "Strong inhibitors of CYP450 enzymes",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of antifungals such as the azoles. The only TRUE statement is (C). Azoles inhibit 14-demethylase, thereby inhibiting the conversion of lanosterol to ergosterol, a key component in the fungal cell wall. 14-demethylase is actually a CYP450 enzyme, so by acting as an inhibitor to this enzyme, it unfortunately also inhibits other CYP450 enzymes in the liver.  THis is why azoles have MANY drug interactions because these drugs will inhibit the metabolism of other drugs, thus increasing the half life of those drugs, which will put the patient at risk for adverse/side effects. (A) fluconazole only covers yeasts (hence no aspergillus). Fluconazole has better tissue penetration than voriconazole in general such as CNS, urine, and synovial fluid, so septic arthritis due to fungal infections should probably be dealt with using fluconazole. (D) no, it does not penetrate into the urine. Voriconazole is almost hepatic metabolized completely, thus leaving little to penetrate the urine. Fluconazole on the other hand is excreted into the urine largely unchanged. (E) Both fluconazole and voriconazole do cover cryptococcus. Zygomycetes are not covered by voriconazole (fyi). Other dimorphic fungi like histoplasmosis, coccidioides (Valley Fever), blastomyces are better off treated with itraconazole (fyi).",
  },
  {
    id: 27,
    prompt:
      "A 65 y/o patient presents to the ER with a severe headache, photophobia, and fever that progressively gotten worse over the last 2 wks. Her PMHx is significant for HIV+ and IVDU. Her vitals are BP 120/80, HR 150, RR 24 (irregular), T 39 degC, SpO2 95% on RA. During the history and physical exam she appears altered and confused, when she starts having a seizure. She gets a CT head, which reveals multiple ring-enhancing lesions. A LP is done: elevated OP, elevated WBC (lymphocyte predominance), glucose low, protein high-normal. Her CD4+ count is 80 cells/mm3. CBC shows WBC 18. Collateral from her best friend reveals that they went on a week-long camping trip and they don’t have any cats. A CXR is unremarkable. Blood cultures are drawn and serum and CSF cryptococcal antigen are ordered. A CSF sample is stained with India Ink and returns positive. Assuming the CrAg comes back positive, the best course of treatment in this patient is?",
    choices: [
      "Amphotericin B + flucytosine 2 wks → fluconazole 1yr+",
      "Amphotericin B + flucytosine 2 wks → voriconazole 1yr+",
      "Amphotericin B + flucytosine + fluconazole 6-12mos",
      "Fluconazole 2 wks → Amphotericin B + flucytosine 1yr+",
      "Fluconazole 6-12mos",
    ],
    correct: "Amphotericin B + flucytosine 2 wks → fluconazole 1yr+",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment for cryptococcus. In this vignette we are presented with a patient presenting with a meningitis-like picture. She is HIV+, thus any CNS opportunistic infection could be the cause of her presentation and this is further corroborated by her low CD4+ count. She does have a SIRS picture (WBC, Temp, HR, RR). Given her immunocompromised status and seizure a CT head is done prior to LP and shows ring-enhancing lesions, so this should further raise the suspicion of protozoal or fungal infections including toxoplasmosis and cryptococcus. Her LP confirms our suspicion of a CNS infection, with the elevated OP, WBC elevated with lymphocyte predominance (pointing away from bacteria, and more towards viral/fungal/protozoan/TB), low glucose. Further history suggests more cryptococcal than toxoplasmosis given her recent camping trip (exposure risk), and lack of interaction with kitty litter. CNS stain with India Ink also suggests cryptococcus. Thus, if her CrAg did come back positive, we would start her on cryptococcus treatment, which in this case is correctly described in (A). The patient has disseminated disease (CNS involvement), which means 2 wks of induction therapy with amphotericin B + flucytosine, then consolidate with fluconazole (high dose) 8 wks, followed by at least 1+ yr of fluconazole maintenance. Given her immunocompromised status she could be on treatment for a very long time. (B) could work, but voriconazole PO is not as reliable as fluconazole PO in terms of bioavailability (fluconazole is well absorbed PO=IV essentially, while voriconazole PO is still good, but not to the point where PO=IV). HIV patients with CD4+ counts <100 are at risk of cryptococcal meningitis. Either cryptococcus neoformans (affects immunocompromised) or cryptococcus gatti could cause this presentation, but the treatment is the same. If required neurosurgery may be required to debulk the cryptocomma. Cryptococcal meningitis could occur in absence of a pulmonary infection. If this was an uncomplicated mild to moderate pulmonary manifestation, then we could consider fluconazole alone for 6-12mos. Another important aspect of therapy in the immunocompromised is to decrease immunosuppression, which in this case would be starting HAART. In this case empiric antifungal treatment prior to getting the India Ink or CrAg results could use something such as amphotericin B would cover cryptococcus, candida, aspergillus.",
  },
  {
    id: 28,
    prompt:
      "A 72 y/o patient presents to the ER with severe SoB, cough, and fever. He has a PMHx significant for COPD, HTN, and autoimmune hepatitis. He initially presented to his GP 7 days ago and was thought to be pneumonia and was given amoxicillin-clavulanate and azithromycin, but has progressively gotten worse. He has a 40 pack yr smoking history. Travel history negative. His vitals are BP 100/70, HR 110, T 38.9 degC, RR 24, SpO2 90% 2L nasal prong. Physical exam reveals crackles bilaterally on auscultation and clubbing. A CXR shows multiple nodular opacities bilaterally. CT scan shows multiple masses with central cavitation and ground glass opacification surrounding them. CBC shows neutropenia. Severely elevated liver enzymes (AST/ALT) and liver function tests show elevated INR, low albumin, and slightly elevated bilirubin. Blood cultures are drawn and he is started on empiric ABX. A bronchoscopy is performed and tissue samples are taken. BAL fluid is gram stain negative, acid-fast negative. Serum 1,3-β-d-glucan is positive, serum and BAL fluid galactomannan positive. CrAg negative. Given this presentation the most likely pathogen in this patient should be treated with?",
    choices: [
      "Amphotericin B",
      "Fluconazole",
      "Flucytosine",
      "Micafungin",
      "Voriconazole",
    ],
    correct: "Amphotericin B",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment for invasive aspergillosis and contraindications to antifungal therapy. In this vignette we are presented with a patient who failed therapy for a suspected bacterial pneumonia. He does have a SIRS picture. The CXR and CT showing multiple nodularities with central cavitation suggests something more serious than a simple lobar pneumonia. He also has neutropenia and severe liver disease (possibly his AIH), which is possibly managed with steroids. This puts him at risk for fungal infections. The BAL gram stain and acid fast is negative (less likely TB or bacteria), however, his fungal antigen tests come back positive for 1,3-β-d-glucan (nonspecific, but suggests fungal), and galactomannan (specific for aspergillus). Given this we suspect a case of invasive aspergillosis. The first line treatment for invasive aspergillosis is voriconazole (E), however, given his AIH and severe liver disease, voriconazole would not be the safest option, thus we would go with (A), amphotericin B. If the patient did not have liver disease, we would most definitely use (E). FLuconazole (B) does NOT cover aspergillus. Remember fluconazole does not cover any MOLDS, aspergillus is a mold.",
  },
  {
    id: 29,
    prompt:
      "A 24 y/o male patient presents to the ER with a sudden onset headache, fever (39\u2070 C) and altered mental status. His vitals are HR 110, BP 80/50, RR 28. There is rigidity with forward neck flexion and as a GCS of 12. His oral mucosa is clear. LP shows increased OP, elevated WBC (neutrophil 90%), low glucose, gram stain pending. Given this presentation you initiate empiric therapy with?",
    choices: [
      "Ampicillin + Gentamicin + Acyclovir",
      "Ceftriaxone + Vancomycin + Acyclovir",
      "Ceftriaxione + Vancomycin + Dexamethasone",
      "Pipercillin/Tazobactam + Vancomycin + Dexamethasone",
      "Pipercillin/Tazobactam + Vancomycin + Acyclovir",
    ],
    correct: "Ceftriaxione + Vancomycin + Dexamethasone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment for bacterial meningitis. In this vignette we are presented with a patient with meningitis given the clinical presentation. He does have a SIRS picture as well. We suspect bacteria given the LP results showing elevated WBC with neutrophil predominance. We need to think about what the most common pathogens of bacterial meningitis are in our patient. This would be: Strep pneumo (gram + cocci in pairs) and N. meningitidis (Gram - diplococci). Therefore, our empiric ABX choice needs to cover these two. The correct answer would be (C). Ceftriaxone will cover Gram - such as N. meningitidis, while vancomycin covers Gram + including cephalosporin resistant Strep pneumo. The dexamethasone is added to the first initial dose of ABX because it has been shown to decrease death in S. pneumoniae associated meningitis. It is thought dexamethasone will dampen the immune response when the bacteria are lysed which can cause further damage. We do not give acyclovir because we don’t suspect a viral meningitis picture given the quick progression, severity, clear oral mucosa (HSV1), and LP results pointing to more bacteria (viral would have lymphocyte predominance). HSV meningitis is associated with involvement of the temporal lobe. (A) is actually more of a treatment for neonatal sepsis as it covers E. coli, listeria, GBS, and HSV (See neonatal transition for more information). (B) + dexamethasone, if we were worried about viral causes like HSV. (D) and (E) would not be used in CNS infection because Pip/Tazo does not have good CNS penetration, thus would not be able to kill off Gram - infections of the CNS.",
  },
  {
    id: 30,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 presents to the ER with a headache, nuchal rigidity, and a fever. Some vitals are BP 120/80, T 38.5\u2070 C, HR 95, RR 25. Normal fetal movement and heart rate. Blood cultures are drawn and empiric ABX is started. A LP shows high WBC (neutrophils predominant), increased opening pressure, high protein, low glucose, and the gram stain indicates a diplococcus Gram negative bacteria. Culture + sensitivities pending. Which of the following drugs should she be kept on?",
    choices: [
      "Ampicillin",
      "Ceftriaxone",
      "Dexamethasone",
      "Vancomycin",
      "A + B",
    ],
    correct: "Ceftriaxone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the treatment options in bacterial meningitis following empiric therapy. In this vignette we are presented with a pregnant patient with bacterial meningitis. The empiric treatment for a pregnant patient presenting with meningitis needs to cover the same organisms as the general population + listeria. Therefore, standard treatment would be: Ampicillin (covers listeria!), Ceftriaxone, Vancomycin, Dexamethasone. Gram stain showing gram negative bacteria suggests that we should switch our empiric therapy to a directed therapy for gram negatives. This means that we should stop everything except for ceftriaxone (B). This is because ceftriaxone has gram negative coverage. Once sensitivities return and culture confirms the species, we can switch to directed therapy such as penicillin (if its N. meningitidis). Listeria is a gram + bacilli, so it can’t be listeria, so stop ampicillin (A). Vancomycin only covers gram +. (C) is added because it decreases mortality in patients with Strep. Pneumo (gram +), in this case would not be warranted.",
  },
  {
    id: 31,
    prompt:
      "A 40 y/o female presents to the ER with severe RUQ pain that radiates to her upper back. Her vitals are BP 100/80, HR 120, Temp 39.5degC, RR 28, O2Sat 98% RA. On inspection, she appears to be jaundiced. The abdo exam reveals a negative Murphy’s sign, abdominal distension, and tenderness in the RUQ and epigastric region. She is not altered. An abdo ultrasound is done and reveals a dilated common bile duct (7mm) with shadowing of a suspected stone, no stones in the gallbladder. Her labs show: elevated total and direct bilirubin, elevated WBC (22), elevated Alk Phos/GGT, elevated AST/ALT, while lipase, albumin, and INR are all within the normal range. Your initial management is with ceftriaxone. Is this appropriate and why?",
    choices: [
      "No, it does not cover common GI flora such as anaerobes",
      "No, it does not cover some Gram + such as enterococcus",
      "No, the patient exhibits Reynold’s pentad and will need more aggressive treatment",
      "Yes it covers E. Coli and Klebsiella, which are the two most common causes of cholangitis",
      "Yes it covers E. Coli, Klebsiella, and anaerobes, the three most common causes of cholangitis",
    ],
    correct:
      "Yes it covers E. Coli and Klebsiella, which are the two most common causes of cholangitis",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the ABX coverage in infections involving the hepatobiliary tree. In this vignette we are presented with a patient with suspected acute cholangitis given the Charcot’s triad of jaundice, fever, RUQ pain. The rest of the physical exam and investigations confirm our suspicion. Her cholangitis is probably secondary to choledocholithiasis. She’s started on ceftriaxone. First we need to think about what are the common pathogens in acute cholangitis or an infection of the hepatobiliary tree/upper GI tract. The 2 most common pathogens would be E. coli and Klebsiella (both gram - bacilli). This is followed by enterococcus (gram +) and enterobacter (gram -). We also need to think about the big picture with this patient. She isn’t septic and she most likely acquired this infection in the community, so the chances this is enterococcus are much lower. Therefore, ceftriaxone is an adequate empiric choice to start the patient on. Ceftriaxone will cover the 2 most common causes: E. coli and Klebsiella from the community, hence (D) is the correct answer. Ceftriaxonewill not cover enterococcus, enterobacter,and anaerobes, but these are less likely in this case. If this patient was septic or severely sick, then we should definitely cover those pathogens. Further management will include ERCP to remove the stone. If we are worried about anaerobes, then we can consider adding metronidazole. If more severe, consider Pip/tazo as first-line.",
  },
  {
    id: 32,
    prompt:
      "A 43 y/o female presents to the ER with severe RUQ pain that radiates to her upper back. Her vitals are BP 80/60, HR 120, Temp 39.5degC, RR 28, O2Sat 93% 2L nasal prong. She is confused. On inspection, she appears to be jaundiced. The abdo exam reveals a negative Murphy’s sign, abdominal distension, and tenderness in the RUQ and epigastric region. She does not follow commands. An abdo ultrasound is done and reveals a dilated common bile duct (10mm) with shadowing of a suspected stone, no stones in the gallbladder. Her labs show: elevated total and direct bilirubin, elevated WBC (24), elevated Alk Phos/GGT, elevated AST/ALT, while lipase, albumin, and INR are all within the normal range. A quick chart review reveals that this is her 2nd presentation of acute cholangitis. There is a high prevalence of enterobacter with AmpC in the area. The LEAST effective antibiotic treatment in this case would be?",
    choices: [
      "Ceftriaxone + Metronidazole",
      "Imipenem",
      "Meropenem",
      "Pipercillin/Tazobactam",
      "Pipercillin/Tazobactam + Vancomycin",
    ],
    correct: "Ceftriaxone + Metronidazole",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the empiric ABX coverage in severe acute cholangitis. In this vignette we are presented with a patient with a severe case of acute cholangitis given the fulfillment of Reynold’s pentad of jaundice, RUQ pain, fever, altered mental status, and hypotension. She is severely sick and has had acute cholangitis before, which is a risk factor for more serious pathogens. This is suggestive of aggressive treatment and that the underlying pathogen in this case may be something more sinister than E coli or Klebsiella. We definitely need to consider the risk of enterobacter with AmpC given the high prevalence. Therefore, the ABX with the LEAST effectiveness in this case would be (A). Ceftriaxone + metronidazole will not adequately cover any E Coli with ESBL, enterobacter with AmpC, as these bugs will be resistant to them. Given the severity we also need to consider something like pseudomonas  as well, and possibly enterococcus if this was hospital-acquired. (B) imipenem is a carbapenem that covers enterococcus better than (C) meropenem, but both do not cover E. faecium. (D) Pip/tazo would be another option depending on the sensitivities of the enterobacter. There is a chance that pip/tazo (D) or (E) will not work, however pip/tazo is a relatively weak inducer of AmpC, so it could still be effective, and definitely more effective than ceftriaxone. (E) the addition of vancomycin helps cover enterococcus (Pip/tazo does not cover enterococcus), however, if there is high prevalence of VRE, linezolid or daptomycin would be used instead.",
  },
  {
    id: 33,
    prompt:
      "A 69 y/o male patient with a long history of Parkinson’s disease is transferred from his home to the ER after signs of a severe infection are noted. At the ER his vitals are Temp 39 degC, BP 100/80, HR 120, RR 24, O2 sat 90% RA. The staff determine that he has altered mental status. Collateral provided by his wife reports that he has vomited a couple times this past week and he started coughing up green sputum today. Thorax percussion reveals dullness in the right lower lobe and auscultation reveals crackles and rales in the same area. A CXR shows an irregularly shaped cavity with an air-fluid level in the right lower lobe. Blood cultures taken earlier come back positive for a Gram + cocci in chains. The most likely pathogen in this presentation should be treated with?",
    choices: [
      "Azithoromycin",
      "Ceftriaxone",
      "Ciprofloxacin",
      "Penicillin",
      "Pipercillin/Tazobactam",
    ],
    correct: "Penicillin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the empiric treatment for anaerobic infections above the diaphragm/aspiration pneumonia. In this vignette we are presented with a patient who has the risk factors and presentation for aspiration pneumonia (AP). Patients with PD are at higher risk for AP due to dysphagia (in fact AP is the number one cause of death in PD) and he also vomited multiple times, further increasing the risk of an aspiration. On examination he shows signs of pneumonia and the CXR confirms a RLL abscess, which is also the most common site of AP due to the vertical orientation of the right mainstem bronchus to the lower lobes, thus stuff can slide straight down and cause an infection. HEre we need to think what sort of bacteria in aspiration pneumonia like to form abscesses. The bacteria that tends to form abscesses would be Viridans group streptococci (gram + cocci in chains) and is part of the oral flora (aspiration pneumonia risk). Up to 20% of these can be penicillin resistant, therefore we would use (B) for empiric therapy until susceptibilities return. (A) is not effective against viridans. (C) is not as effective against viridans and would not cover other potential causes of pneumonia like strep. Pneumo. (D) viridans have growing resistance to penicillin now. (E) overkill.",
  },
];
