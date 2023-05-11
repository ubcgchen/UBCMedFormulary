/**
 * Questions for Neonatal Transition
 * @author Michael Gong, UBC VFMP 2025
 */

export const Neonatal_Transition = [
  {
    id: 1,
    prompt:
      "A 1 wk old neonate (40 wks gestation; 9,9 APGAR) presents with a severe Strep pneumoniae infection confirmed with cultures and is found to be resistant to every ABX except for chloramphenicol. You find out that chloramphenicol is extensively metabolized via UDP-glucuronyl transferases (Phase II enzyme) and is renally excreted. After 2 days of chloramphenicol IV, the baby has an ashen-gray appearance, increased fussiness, cyanotic, hypotensive (Mean arterial pressure: 33) and hypothermic (36degC). The baby goes into cardiopulmonary failure and is resuscitated. GIven the provided info, what would you expect the plasma levels of chloramphenicol to be and a correction you could have made to the initial dose?",
    choices: [
      "Decreased levels; increase dose due to increased drug metabolism",
      "Decreased levels; increase dose due to increased drug metabolism and excretion",
      "Decreased levels; increase dose due to increased protein binding resulting in less free drug",
      "Increased levels; decrease dose due to decreased drug metabolism and excretion",
      "Normal levels; decrease dose due to increased toxic metabolite that isn’t adequately excreted",
    ],
    correct: "Increased levels; decrease dose due to decreased drug metabolism and excretion",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding neonatal drug metabolism. In this vignette, we are presented with a neonate that is suffering from Gray Baby Syndrome, a major adverse effect of chloramphenicol (CHL) administration in neonates. We are told that CHL is extensively metabolized by UDP-glucuronyl transferase, a phase II enzyme and is renally excreted. We also know that in neonates, Phase II enzymes like UDP-glucuronyl transferases do not have full activity till 6mos-2yrs of age and that GFR is decreased in neonates (preterm neonates have even lower GFR than full term babies). This means that neonates have decreased drug metabolism and excretion. We can then infer that the cause of the baby’s presentation is drug toxicity due to decreased metabolism and excretion, which results in increased levels of CHL, hence (D) is the correct answer. We wouldn't expect increased drug metabolism or excretion in a neonate to cause decreased levels of CHL ((A),(B)). (E) is wrong because we wouldn’t expect more toxic metabolite build up given that neonates have decreased drug metabolism (this incls many Phase I CYP enzymes). (C) we wouldn’t want to increase dose because of increased protein binding in neonates because they have lower levels of albumin that are needed to sequester the excess bilirubin that would either wise cause kerniticus. In Gray Baby Syndrome, CHL does displace bilirubin from albumin leading to neurological impairment and kernicterus. "
  },
  {
    id: 2,
    prompt:
      "A 3 wk old male neonate (35 wks gestation; 9, 9 APGAR) returns to the hospital with jaundice, poor feeding, high-pitched cry, lethargy, and lacks the startle reflex. The maternal history and birthing history are unremarkable (preterm, negative for newborn jaundice), however the mother remarks that she is currently taking SMX-TMP (Sulfamethoxazole/Trimethoprim; a sulfonamide; MoA: antifolate) for an infection and is breastfeeding. The neonate's total plasma bilirubin and indirect bilirubin returns high. Assuming some amounts of SMX-TMP crosses into breast milk, which of the following best explains the iatrogenic cause of the baby’s presentation?",
    choices: [
      "SMX-TMP is hepatotoxic, thus causing hepatic encephalopathy",
      "SMX-TMP eradicated his natural gut flora, leading to C. diff colonization and sepsis",
      "SMX-TMP has high albumin binding, which displaces bilirubin, thus causing kernicterus",
      "SMX-TMP inhibited folic acid synthesis in the baby, leading to impaired neurological development and encephalopathy",
      "None of the above",
    ],
    correct:
      "SMX-TMP has high albumin binding, which displaces bilirubin, thus causing kernicterus",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacological consequences of differences in plasma proteins in neonates. In this vignette we are presented with a neonate with signs of kernicterus (bilirubin encephalopathy), a severe complication of hyperbilirubinemia in neonates. Jaundice in a newborn >2wks is a red flag and needs to be worked up, in this case the poor feeding, high pitched cry, lethargy, and the lack of startle reflex are all potential signs of neurological involvement and we should suspect kernicterus. The most likely reason this occurred is (C). This is because SMX-TMP does have high albumin binding, which would displace unconjugated bilirubin from albumin. This will increase the unconjugated bilirubin concentration to toxic levels where it crosses the blood brain barrier, which is toxic to brain cells. This is further compounded by the fact that newborns have lower levels of albumin than the average adult, hence they would be more susceptible to drug interactions involving albumin binding. This requires rapid treatment as untreated kernicterus can lead to permanent neurological damage like movement disorders such as cerebral palsy, low IQ, hearing loss, and death. This question is meant to highlight the vulnerability of neonates to plasma protein drug-interactions."
  },
  {
    id: 3,
    prompt:
      "Which of the following statements regarding neonatal pharmacology is true? (Assume “doses” refer to mg/kg).",
    choices: [
      "Decrease dose for orally administered pro-drugs",
      "Increase dose for renally excreted drugs due to increased GFR",
      "Increase dose for highly water-soluble drugs",
      "Increase dose for topically administered drugs",
      "Orally administered drugs are more predictable in neonates than in adults",
    ],
    correct: "Increase dose for highly water-soluble drugs",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding neonatal pharmacology. (C) is the true statement because newborns have a higher total body water percentage, which means that highly water-soluble drugs will require an increased dose/kg compared to an adult. (A) is false because there is decreased metabolism in neonates due to decreased activity of liver enzymes, thus less pro-drug will be activated. (B) is false because the kidneys are still maturing, hence there will be decreased GFR compared to an adult, therefore lower dose for renally excreted drugs. (D) the skin  (stratum corneum) is thinner and the surface area to mass ratio is increased in neonates. THis results in greater risk of systemic exposure to topically applied medications, hence greater risk of toxicity. Therefore, we would lower the dose of topically administered drugs. This is why we caution the application of topical GCs in babies as this can cause iatrogenic Cushing’s syndrome. (E) Is false because PO administered drugs are more unpredictable in neonates because the GIT is still maturing, hence gastric emptying is inconsistent, there’s decreased SA of the GI lining all make it hard to predict PO BA. Other factors include the higher pH in the stomach, thus acid labile drugs may not be broken down, thus increasing its BA. THe change in pH also affects drug pKa and ionization, which affects absorption as well."
  },
  {
    id: 4,
    prompt:
      "A 1 wk old neonate presents to the ER with lethargy and a low grade fever. A full septic workup is started. Your preceptor asks how you would modify the dosing of the empiric antibiotics for a neonate compared to an adult. The drugs in question are hydrophilic (minimal protein binding) and are renally excreted unchanged. The medication will be given IV. Which of the following is your response?",
    choices: [
      "Decrease dose, but decrease interval between doses",
      "Decrease dose, but increase interval between doses",
      "Increase dose, but decrease interval between doses",
      "Increase dose, but increase interval between doses",
      "No change to dosing or interval"
    ],
    correct: "Increase dose, but increase interval between doses",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding pharmacokinetic considerations when dosing in neonates. In this vignette we are presented a neonate with suspected sepsis and asked to present an appropriate drug dosing regimen for a hydrophilic and renally excreted unchanged ABX. The correct answer is (D).  This question requires thinking about two components of PK: distribution and excretion out of ADME. We can ignore absorption since it is given IV, we can assume 100% of the intended dose is delivered and no first-pass metabolism. We can also ignore metabolism because this drug is eliminated unchanged through the kidneys. Distribution in neonates is different from the average adult. The major difference that will affect our drug dosing is that neonates and pediatric patients have a higher % of TBW to body weight than adults and less adipose tissue, in fact TBW tends to decrease with age, while adipose tissue increases with age. The consequence of this is that hydrophilic drugs will need larger doses to reach the desired plasma concentration. The increase in % TBW makes it so that our dosing will be more diluted if we don’t account for the increase % of the body mass being water volume where the hydrophilic drug will be staying. Therefore, we want to increase the initial drug dose to reach the desired plasma concentration in the therapeutic window. Elimination/excretion of drugs in neonates in general is decreased across the board. Hepatic elimination would be decreased given the decreased activity of metabolic enzymes, and renal elimination will also be decreased. In neonates the kidneys are still maturing, this results in decreased GFR and decreased renal tubular secretion. Hence this results in less drug being removed per unit of time, which in this case is a problem since the drug is largely renally excreted unchanged (without being metabolized first). To overcome the decrease in renal excretion we can increase the interval between dose, or space out our doses. This will minimize the risk of us overdosing our patient out of the therapeutic window with each maintenance dose. THe increased interval will allow the body to remove the drug to a level, where we can give another dose that won’t push the plasma concentration into a toxic range. (A) wouldn’t work because the decreased dose may not be enough to reach the therapeutic window, however, we could consider a decreased maintenance dose and the same standard dosing interval. (B) doesn’t work like (A), plus more likely for the drug to fall out of the therapeutic window. (C) will increase the risk of us overshooting our maintenance doses into the toxic range."
  },
  {
    id: 5,
    prompt:
      "A nursing mother takes Drug X orally. What propertie(s) would increase transfer of Drug X via breast milk from mother to baby?",
    choices: [
      "Fast metabolizers of Drug X",
      "High ionization",
      "High protein binding",
      "Low maternal drug plasma concentration",
      "Weak bases",
      "A and E",
      "B and C",
    ],
    correct: "Weak bases",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the factors that govern maternal transfer of drugs via breast milk. For a drug to be transferred via breast milk, it needs to be able to cross membranes that separate plasma from milk. Factors that govern this are similar to those that govern absorption of drugs delivered PO, so low ionization, increased lipophilicity, and large concentration gradients are factors that would increase transfer into milk (rule out B and D). We can rule out (C) because if a drug is highly bound to plasma protein, then there is less free drug available to crossover from plasma into milk since more of them are sequestered by proteins like albumin. (A) is wrong because if the mother is a fast metabolizer of Drug X, then there will be less Drug X available (lower plasma concentration; the opposite if it’s Pro-Drug X). (E) is the correct answer because of ion trapping (milk-trapping). Milk has a slightly lower pH than plasma, hence weak bases are more likely to be unionized in plasma, which allows it to cross membranes freely. Once it crosses into a compartment with lower pH such as milk, more of the drug will be ionized, hence more will be trapped in the milk due to it being charged, thus leading to increased delivery via breast milk to the baby. Try inputting values into the H-H equation where pH= pKa + log (B/BH+) for weak bases."
  },
  {
    id: 6,
    prompt:
      "Given are properties of three novel drugs. Drug A is small, lipid soluble, high protein binding, and unionized. Drug B is large, water soluble, low protein binding, and ionized. Drug C is small, lipid soluble, low protein binding, and unionized. If these were given IV (same dose) to a pregnant patient, then which of the following would you expect to most readily cross the placenta (assume no transporters)?",
    choices: [
      "Drug A",
      "Drug B",
      "Drug C",
      "All of them will cross equally ",
    ],
    correct: "Drug C",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding pharmacokinetics and transplacental drug transfer. The correct answer is (C). Factors that influence passive transplacental drug transfer include size, lipid solubility, protein binding, and ionization. Like absorption through the GIT, smaller (<500 Da) and more lipid soluble are more likely to cross the placenta, this makes sense as the drug needs to cross lipid membranes. Decreased protein binding increases transplacental transfer because this means that there is more free drug that is available to cross the placenta. If the drug is bound to albumin, it isn’t free to cross the placenta as it is being “sequestered” by albumin. Moreover, diffusion is governed by concentration gradients. If the drug is bound to albumin the free drug concentration in the plasma will be lower, hence the concentration gradient from plasma to placenta is a lot smaller, thereby decreasing diffusion as well. Ionization decreases drug transfer, as charged molecules cannot readily cross lipid membranes."
  },
  {
    id: 7,
    prompt: "A 2-day old male neonate (born 33 wks gestation) by spontaneous vaginal vertex delivery (APGARs: 7, 8) to a mother with gestational diabetes (rest of maternal hx is unremarkable), now presents with a dusky appearance on room air (SpO2 88% on 30% O2 via hood), RR 60 breaths/min, HR 160 bpm, Temp 36.4degC, nasal flaring, sternal + intercostal retractions, and grunting. Auscultation revealed decreased air entry bilaterally. A supine CXR is ordered and shows bilateral ground glass pattern, air bronchograms, small lung volume, loss of cardiac and diaphragmatic silhouettes. The neonate is intubated and put on a ventilator. Which of the following drugs can be given prior to birth (antenatally) to reduce the risk of this presentation?",
    choices: [
      "Bovine surfactant",
      "Betamethasone",
      "Penicillin",
      "Indomethacin",
      "Oxytocin",
    ],
    correct:
      "Betamethasone",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding a prophylactic treatment to prevent respiratory distress syndrome (RDS) in a preterm neonate. In this vignette we are presented with a preterm (33 wk) baby with RDS. RDS is the most likely diagnosis given the clinical presentation (increased work for breathing, increased O2 requirements, physical exam findings) and the CXR showing B/L ground glass, air bronchograms, etc… And risk factors such as male, preterm and gestational DM (GDM). The pathophysiology behind neonatal RDS is lack of surfactant production in the alveoli. This results in progressive collapse of the alveoli because surfactant helps decrease the surface tension inside the alveoli, thereby helping maintain patency of the alveoli. The progressive atelectasis that occurs can show air bronchograms as the progressive collapse of the alveoli causes increased opacity on the CXR, thus making air filled bronchioles to be more visible. The atelectasis will lead to hypoventilation and V/Q mismatch → hypoxia and hypercarbia → acidosis (Resp) → pulm v/c (V/Q mismatch consequence; want to divert blood to working parts of the lungs. Remember V/Q ~1, if ventilation decreases, then the body tries to match it by decreasing Q by v/c, but in RDS the lungs are all in trouble…) → proteinaceous exudate (fluid) and persistent fetal circulation (result of high P in the pulmonary system, which can lead to decreased O2 and keep the PDA open). Hence, the prophylactic measure to prevent this is to increase surfactant by providing antenatal (B). Betametahsone and GCs can stimulate the production of surfactant. GCs can stimulate fibroblast-pneumocyte factor, resulting in increased production of surfactant phospholipids by alveolar type II cells. (A) can be provided after birth in neonates with RDS, but not antenatally. (C) is an ABX. (D) is a NSAID, which is used as an tocolytic agent to prevent premature labor, this is because prostaglandins are important in uterine contraction and cervix effacement during labor. Blocking the production of prostaglandins can then delay premature labor. (E) is used to stimulate uterine contraction. GDM is a risk factor for RDS because in GDM there is hyperglycemia, which can lead to hyperinsulinemia in the fetus. Insulin decreases surfactant production, hence these babies will have lower levels of surfactant at birth, thereby putting them more at risk for RDS."
  },
  {
    id: 8,
    prompt: "Why are gentamicin and ampicillin the first line empiric treatment for neonatal sepsis?",
    choices: [
      "Gentamicin and ampicillin cover the major infectious causes of neonatal sepsis",
      "Gentamicin and ampicillin have a synergistic effect",
      "Gentamicin and ampicillin readily crosses the blood brain barrier",
      "A and B",
      "All of the above",
    ],
    correct: "A and B",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding pharmacodynamics related to ABX selection in neonatal sepsis. The correct answer is (D). This is because gentamicin and ampicillin cover the major infectious causes of neonatal sepsis. The common bacterial causes of sepsis are summarized with LEG: Listeria, E. coli, GBS. Ampicillin covers the gram + bacteria: Listeria and GBS, while gentamicin will provide gram - coverage: E. coli. Another reason they are used together is outlined in (B). When used together there is a synergistic effect. This means that a lower dose of each is required to achieve the desired efficacy, which provides both the benefit of more efficacy per dose and also less adverse effects as we can use lower doses. The synergistic effect is due to their complementary mechanisms and not fully understood. Gentamicin is an aminoglycoside that targets the 30s ribosomal subunit to disrupt protein synthesis. Unlike most protein synthesis ABXs, gentamicin is bactericidal. Gentamicin is also thought to potentially affect the cell wall as well. Ampicillin is a 3rd generation penicillin, and targets the cell-wall. It is thought by targeting the cell wall, this will increase the intracellular uptake of gentamicin, thus allowing for more effective killing as both ABXs can now work against the bacteria. There is also a theory that suggests that gentamicin increases the permeability for ampicillin to reach the PBP and inhibit it or that decreased protein synthesis makes the cell-wall easier to be disrupted by ampicillin. Either way the synergy means we can decrease the doses to achieve the same effect, which is helpful because gentamicin is  nephrotoxic, thus we want to minimize the exposure to it. "
  },
  {
    id: 9,
    prompt:
      "A 3 day old neonate born at 40 wks gestation presents with lethargy, fever, turning away from lights, cool extremities, stiff neck, and poor feeding. The baby’s maternal history is GBS positive, Hep B immune, HIV negative, rubella immune, syphilis non-reactive, and HSV positive. Birth history was negative for premature rupture of the membranes and his APGAR scores were 9, 9. Blood cultures, lumbar puncture, and urine cultures are ordered. You start empiric therapy with which of the following combinations?",
    choices: [
      "Ampicillin, Ceftriaxone",
      "Ampicillin, Cefotaxime, Acyclovir",
      "Ampicillin, Gentamicin, Acyclovir",
      "Ampicillin, Gentamicin",
      "Ampicillin, Ceftriaxone, Acyclovir",
    ],
    correct: "Ampicillin, Cefotaxime, Acyclovir",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding the empiric therapy for meningitis in neonates. In this vignette we are presented with a neonate with signs of meningitis given the clinical presentation (fever, photophobia, stiff neck, and other signs of infection like lethargy, cool extremities, poor feeding). The maternal history includes GBS and HSV +, and other infections are either vaccinated for or never been exposed to. Our empiric therapy would already cover GBS, but the HSV+ is something we would also need to consider. In neonates we need to consider GBS, listeria, E. coli, Klebsiella, and HSV in this case. The treatment regimen that adequately covers these pathogens and reaches the CNS is outlined in (B). Normally, in neonatal sepsis we would go with ampicillin and gentamicin (C)+(D), but in a CNS infection, gentamicin does not adequately cross the blood brain barrier without us needing to increase the dose to potentially toxic levels for a neonate. Hence, to maintain Gram negative coverage such as E. coli and klebsiella, we would replace gentamicin with cefotaxime, a 3rd generation cephalosporin, that is able to penetrate the blood brain barrier. Cefotaxime provides coverage for the aforementioned gram negatives, but also GBS, while ampicillin will cover listeria and GBS. Acyclovir covers HSV. (A)+(E) both contain ceftriaxone, which is also a 3rd gen cephalosporin and has the similar coverage as cefotaxime. However, we do not routinely use this in neonates because ceftriaxone has increased albumin protein binding, which poses a risk of kernicterus as ceftriaxone could displace the unconjugated bilirubin bound to albumin and then cause hyperbilirubinemia mediated encephalopathy."
  },
  {
    id: 10,
    prompt:
      "A 1-day old neonate, delivered via uncomplicated vaginal delivery is noted to have microcephaly, small for their gestational age, hepatosplenomegaly, jaundiced, and petechial rash. The maternal history is HIV negative, Hep B immune, syphilis non-reactive, rubella immune, VZV immune, GBS negative, but she does recall being sick with the “flu” in her late 2nd trimester. She is monogamous, hasn’t traveled, hates cats (has no pets), and no history of herpes. From the context you are suspicious of a specific infection that could present like this. To reduce sequelae associated with this infection, you administer which of the following drugs for 6 months?",
    choices: [
      "Ceftriaxone",
      "Penicillin",
      "Valacyclovir",
      "Valganciclovir",
      "Zidovudine",
    ],
    correct:
      "Valganciclovir",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the treatment for congenital CMV. In this vignette we are presented with a patient with a congenital infection. We suspect an in utero infection (transplacental) over transmission at birth given that the neonate is small for GA and microcephaly, which could suggest an infection that has disrupted normal development in the uterus. We also can think of the main pathogens that can cause congenital infection with the clinical presentation described in the vignette (SGA, microcephaly, hepatosplenomegaly, petechial rash → secondary to thrombocytopenia; other signs include chorioretinitis and sensorineural hearing loss). The pathogens that cause a similar looking presentation are outlined in TORCH: Toxoplasmosis (think cats), Other (e.g. syphilis; zika,etc…), Rubella, CMV, HSV. It should be noted that CHEAPTORCHES includes congenital and perinatal infections, so infections that aren't necessarily transmitted transplacentally. From the history we are less inclined to think syphilis, rubella, VZV, toxoplasmosis (cats!), HSV (though she could still have it). She was sick with the “flu” during her 2nd trimester, which more likely indicates potentially she contracted/reactivated CMV at that time and it passed transplacentally to the fetus. To reduce sequelae related to congenital CMV, then we should treat the baby with (D), valganciclovir (if you recall from MEDD412 CNS infection) inhibits DNA polymerase from replicating the viral genome by acting as an analogue to dGTP. Val- is the prefix for the PO version of acyclovir or ganciclovir, where it is first-passed into ganciclovir, where it is then processed to its active form by viral kinases. Ganciclvoir treatment can reduce hearing and neurological impairment. U/S of head would show periventricular calcifications, adn the baby will need eye exams and regular hearing exams. (C) is for HSV. (B) is for GBS and syphilis. Syphilis can present asymptomatically, but also with the 5 S’s: SGA, Snuffles/rhinitis, Skin: rash/desquamation of palms and soles, hepatoSplenomegaly, Skeletal: osteochondritis, Anemia+thrombocytopenia. Our neonate has some of these signs, but given the history syphilis was less likely, in fact probability wise, CMV is the most common congenital infection. (A) is a 3rd gen broad spectrum ABX, we aren’t suspecting a bacterial cause, and ceftriaxone is not the preferred 3rd gen ABX in neonates. (E) is an antiviral for HIV. Used as prophylaxis for 4-6 wks if the mom is HIV +. It should be noted that neonatal HIV can present asymptomatically. Other infections that can present ASx include: Hep B, C, STIs (gonorrhea, chlamydia), syphilis."
  },
  {
    id: 11,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 presents to the clinic for her week 37 prenatal checkup. An anovaginal swab is taken and it is found that she has Group B strep. What pharmacological intervention needs to be done?  ",
    choices: [
      "Treat with penicillin G now",
      "Treat with penicillin G during labor",
      "Treat with streptomycin now",
      "Treat with streptomycin during labor",
    ],
    correct:
      "Treat with penicillin G during labor",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the prenatal checkup tests and interventions. In this vignette, we have a patient who has Group B strep, which puts the neonate at risk of being infected with Group B strep during birth. This is best treated prophylactically during labour with Pen G (assuming the patient does not have a penicillin allergy), hence (B) is the correct answer."
  },
  {
    id: 12,
    prompt:
      "A 10-day old baby, assigned male at birth, presents with grouped vesicular eruptions on the cheeks and left arm. The skin underlying the eruptions is erythematous. Which is the most likely treatment regimen warranted for the baby?",
    choices: [
      "IV acyclovir",
      "IV doxycycline + azithromycin",
      "IM ceftriaxone",
      "Oral simeprevir + sofosbuvir",
      "Oral Oseltamivir",
    ],
    correct:
      "IV acyclovir",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question examines understanding of the treatments for neonatal herpes simplex infection. (A) IV acyclovir is used for treating neonatal herpes. (B) This combination is often used to treat chlamydia infections. (C) Ceftriaxone is often used to treat gonorrheal infections. (D) This combination is used to treat Hepatitis C infections. (E) Oseltamivir is used to improve the symptoms of influenza. (WW Q)"
  },
  {
    id: 13,
    prompt:
      "A 1-week old premature baby presents with a grade III/VI continuous murmur that is described as having a “machinery” sound. The murmur is best heard at the 2nd intercostal space of the left sternal border. Which of the following would NOT contribute to the resolution of Bertha’s condition?",
    choices: [
      "Ibuprofen",
      "Indomethacin",
      "Transcatheter repair",
      "Higher blood O2 concentrations",
      "Alprostadil",
    ],
    correct:
      "Alprostadil",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question assesses the pathophysiology and treatments for patent ductus arteriosus (PDA). (A) & (B) NSAIDs are inhibitory to prostaglandins, and would contribute to the closure of the PDA. (C) Transcatheter repair may sometimes be indicated for PDA closure. (D) Low O2 promotes a PDA. High blood O2 concentrations may hypothetically contribute to the resolution of PDAs. However, it is notable that this is not used clinically as excessive oxygen in premature babies leads to retinopathy and blindness. (E) Alprostadil is a PGE1 analog and would keep the ductus arteriosus patent. (WW Q)"
  },
];
