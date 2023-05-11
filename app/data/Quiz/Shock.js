/**
 * Questions for Shock
 * @author Michael Gong, UBC VFMP 2025
 */

export const Shock = [
  {
    id: 1,
    prompt:
      "Which of the following correctly matches the antiarrhythmic to its Vaughn-Williams class?",
    choices: [
      "Lidocaine - Class Ia",
      "Procainamide - Class Ic",
      "Propafenone - Class III",
      "Sotalol - Class II",
      "Verapamil - Class IV",
      "More than one of the above"
    ],
    correct: "Verapamil - Class IV",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the Vaughn-Williams classes of antiarrhythmics. The VW classes are classified via the main mechanism of the drug. Class I are Na+ channel blockers, Class II are β blockers, Class III are K+ channel blockers, Class IV are L-type Ca2+ channel blockers, Class V are others (digoxin and adenosine). We can break Class I into 3 subcategories by the strength of Na+ blocking: Ia (moderate), Ib (mild), Ic (strong). The correct answer in this case is (E), verapamil and diltiazem are CCBs. // Class Ia: procainamide (quinidine, disopyramide) // Class Ib: Lidocaine (mexiletine, phenytoin) // Class Ic: Flecainide, Propafenone // Class II: any β blocker (except for sotalol) /// Class III: Amiodarone, sotalol (is a β blocker as well). One way to memorize the subclasses of Class I is: A for average, B for bad (in terms of Na+ blocking), C for Capitan (strongest Na+ blocking). It should be noted that the VW classification is not perfect as many of these drugs have overlaps in mechanisms."
  },
  {
    id: 2,
    prompt:
      "A 16 y/o hockey prodigy presents to the ER with a “racing heart” and feels lightheaded during his hockey match. He does not recall any chest pain, sweating, trauma, or headache. His pulse is fast and BP 120/80, pulse ox 98% RA, temp 36.4degC, glucose normal. A 12-lead ECG is ordered and shows normal axis, regular rhythm with a rate of 180 bpm. Wide QRS complexes with delta waves and a shortened PR interval are noted. Which of the following drugs are typically AVOIDED in patients like the one presented in this vignette?",
    choices: [
      "Adenosine",
      "Metoprolol",
      "Procainamide",
      "A, B",
      "All of the above",
    ],
    correct:
      "A, B",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding WPW and pharmacological management. In this vignette we are presented with a young patient with an ECG abnormality. We suspect WPW given the wide QRS and delta waves, with shortened PR interval. These are ECG findings we’d suspect in a patient with WPW. This is an example of pre-excitation in WPW, where the impulse from the atrial travels down to the ventricle via the accessory pathway (Bundle of Kent), which is faster than traveling through the AV node. This causes the PR interval to shorten as the time between atrial depol and ventricle depol is shortened. This also produces the delta wave and widened QRS as the impulse from the accessory pathway is pre-exciting the ventricle (excitation thatt occurs before the normal signal is conducted through the AV node), where it has to travel across the ventricle from one side of the LV to depolarize the rest of the ventricle, while the signal through the AV node comes through. The existence of the accessory pathway is dangerous if our patient also has AFib as the irregular signals can then travel to the ventricle and cause VFib as it bypasses the “checkpoint” AV node. Therefore, we would not want to give a patient any AV nodal blockers, thus (D) is the correct answer. Blocking the AV node will cause the signal to go down the accessory pathway, which is what we want to avoid. (C) is actually a treatment option for WPW preexcitation. Procainamide is in class Ia, which means it blocks Na+ channels and some minor K+ blocking resulting in decreased phase 0 slope and increased phase II, respectively. This results in slowing conduction (Na+ blockade), this ideally will slow down the conduction (also increases refractoriness) via the accessory pathway (without affecting the AV node), this is thought to be useful in terminating antidromic AVRTs (clockwise down the BoK). Procainamide also has been used to convert Afib back into sinus rhythm."
  },
  {
    id: 3,
    prompt:
      "A 45 y/o patient presents to her cardiologist after some concerning findings on his ECG. She is found to have congenital long QT syndrome. Which of the following medications would NOT be helpful in preventing lethal arrhythmias in this patient?",
    choices: [
      "Diltiazem",
      "Lidocaine",
      "Metoprolol",
      "Sotalol",
      "B and D",
    ],
    correct: "Sotalol",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the causes of long QT and the risks associated with it. In this vignette we are presented with a patient with long QT syndrome. This puts our patient at risk of EADs, as the long QT means that either Phase II or Phase III is prolonged, which is extra time for another depolarization to occur, resulting in a dysrhythmia (you can think of this if phase II is prolonged, there are more chances for something going wrong as if the cells are “vulnerable” to any triggers especially since this is the time for Ca2+ influx). Therefore, we need to avoid medications that could increase the risk of EADs such as blocking K+ channels. Therefore, (D) is the correct answer. Sotalol is a class III drug that primarily blocks K+ channels and puts patients at risk of EADs that can result in Torsades de Pointes (TdP). Sotalol is also a β blocker (as you can see from the -lol), but that is not its main action. (A) is a CCB and will block Ca2+ influx, thus decreasing the risk of triggered activity (you need calcium to contract and depol the myoctes). (B) is class Ib, which mildly blocks Na+ channels, which slows down conduction, but also can shorten phase II, resulting in a shortened QT interval. THis makes it useful in treating arrhythmias that arise from long QT. (C) is a β blocker, which like (A) ends up with the end result of decreased Ca2+ influx. The difference is that β blockers work upstream at the GPCR level and prevent the signal mediated by the β1 receptors that results in activation of calcium channels, while CCBs directly block the Ca2+ channels."
  },
  {
    id: 4,
    prompt:
      "You are doing your cardiology elective and the cardiologist draws a cardiac ventricle action potential. She tells you if the slope of phase 0 is only mildly decreased, and phase II is shortened. No change in cardiac pacemaker potential. What would you MOST LIKELY see on the ECG and what drug could this be?",
    choices: [
      "Normal QRS, normal QT interval → Sotalol",
      "Normal QRS, prolonged QT interval → Amiodarone",
      "Normal QRS, shortened QT interval → Lidocaine",
      "Wide QRS, normal QT interval → Propafenone",
      "Wide QRS, shortened QT interval → Phenytoin"
    ],
    correct: "Normal QRS, shortened QT interval → Lidocaine",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding antiarrhythmic mechanisms and the ECG changes. If phase 0 is mildly decreased, then Na+ channels are being blocked (mildly), and the shortening of phase II should make us think of Class Ib medications. For example, if there is a moderate decrease in phase 0,the QRS widens due to decreased conduction (longer time to depol the ventricles), while phase II shortens, meaning that repol is going to happen faster, therefore the QT interval would be shortened. In this case there is only a mild decrease in slope 0, so QRS would not be wide. Thus, (C) is the correct answer. Lidocaine and phenytoin are both Class Ib drugs. This makes this class useful in treating arrhythmias that result in prolonged QT intervals such as Class III induced arrhythmias. It should be noted that Class Ib drugs almost exclusively only work on the ventricular tissue. This allows it to be useful in ventricular arrhythmias, especially in damaged tissue. Damaged tissue such as post-MI tend to have leaky membranes, which leads to K+ leaking out (K+ is intracellular), which can result in prolonging of QT interval (you can think of this as K+ leaving the cell is acting as K+ being blocked from entering the cell for repolarization). Therefore, if class Ib can shorten the QT interval, then this makes it useful in preventing complications of long QT such as EADs. (B) is something we’d expect in a pure K+ channel blocking, where there is prolongation of phase II, resulting in long QT. (D) actually does describe what propafenone, a class Ic would do. Class Ic has strong Na+ channel blockade, thus it decreases conduction (decreased slope of phase 0) resulting in wide QRS, with no effect on K+ channels, thus normal QT interval."
  },
  {
    id: 5,
    prompt:
      "Which of the following channels, if BLOCKED, would you MOST likely expect EARLY afterdepolarizations?",
    choices: [
      "Ca2+",
      "Na+",
      "K+",
      "Mg2+",
      "A and C",
    ],
    correct: "K+",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the causes of EADs. The correct answer is (C). Blocking K+ channels will result in prolonged QT interval or phase II of the action potential. This is explained in a previous question. (A) the opposite could cause EADs. Increasing Ca2+ influx causes a build up of calcium inside the cell, putting it at risk of triggered activity (both EAD and DAD). Remember in phase II K+ channels and Ca2+ channels are open. K+ influx is repolarization, while Ca2+ influx is depolarization, this results in the plateau phase. In phase III the calcium channels are closed, while K+ channels remain open, thus allowing for repolarization. If there was a massive influx of Ca2+ during phase II, then the cell is “vulnerable” to further depolarization or other calcium mediated actions, then EADs could occur (phase II, III) or DADs (during phase IV), you can think of this as like a balloon being overfilled with water, and it eventually bursting with any triggering event."
  },
  {
    id: 6,
    prompt:
      "Which of the following medications would you LEAST likely expect to cause DELAYED afterdepolarizations?",
    choices: [
      "Digoxin",
      "Dobutamine",
      "Epinephrine",
      "Flecainide",
      "Milirinone"
    ],
    correct: "Flecainide",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the causes of delayed afterdepolarizations or DADs. The correct answer in this case is (D). Flecainide is a class Ic drug that does not cause DADs. This is because it does not directly affect Ca2+ concentration or influx. The causes of DADs are usually due to massive influx of Ca2+ and/or increased intracellular [Ca2+]. Drugs that can cause this are overstimulation of catecholamines or β1 agonists such as (B) and (C). As these will overstimulate the β1 receptor, resulting in increased Ca2+ influx. (E) milrinone acts as a PDE3i, where it inhibits the breakdown of cAMP, this molecule plays a role in the signal transduction pathway that results in Ca channel activation after β1 stimulation, thus also resulting in increased Ca2+. This is why these inotropes are all implicated with an increased risk of ventricular tachyarrhythmias, as they have the potential to cause DADs. (A) works in a different pathway, but the end result is increased Ca2+ into the cell. Digoxin blocks the Na+/K+ ATPase. THis blocks the exchange of Na+ out of the cell, resulting in a buildup of Na+ in the cell. This buildup of Na+ in the cell results in increased activity of the Na+/Ca2+ exchanger, which tries to get rid of the extra Na+ by bringing in Ca2+, resulting in increased Ca2+."
  },
  {
    id: 7,
    prompt: "A cardiologist hands you an ECG, which shows a wide QRS complex and a prolonged QT interval. He asks you what drug could possibly cause this ECG pattern?",
    choices: [
      "Amiodarone",
      "Diltiazem",
      "Flecainide",
      "Lidocaine",
      "Procainamide",
    ],
    correct:
      "Procainamide",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding antiarrhythmic drugs and their corresponding ECG changes. A wide QRS, suggests Na+ channel blockade, leading to decreased phase 0 slope, hence decreased conduction. The prolonged QT interval suggests prolonged phase II, meaning there is some K+ channel blockade. Therefore, the identity of the drug has to be Class Ia. In this case (E). (A) is class III, so only prolongs QT. (B) is a CCB, potentially could cause widened QRS, but more likely to prolong PR (AV node conduction), and not prolong QT. (C) is class Ic, so would only widen the QRS, no effect on QT. (D) is class Ib, which has little effect on QRS, and shortens QT. "
  },
  {
    id: 8,
    prompt: "Which of the following medications would you MOST likely expect to prolong the PR interval?",
    choices: [
      "Amiodarone",
      "Lidocaine",
      "Metoprolol",
      "Verapamil",
      "C + D",
    ],
    correct: "C + D",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the ECG changes with different antiarrhythmics. The correct answer is (E). This is because metoprolol is a β blocker (class II) and verapamil is a CCB (class IV). Together they both slow down AV node conduction. This will result in a prolonged PR interval as communication between atria and ventricle is slowed. (A) is class III. (B) is class Ib."
  },
  {
    id: 9,
    prompt:
      "Arveen is a 65 y/o patient presenting to the ER in cardiac arrest. ROSC (return of spontaneous circulation) is achieved. An ECG reading moments before he went into cardiac arrest showed prolonged QT and polymorphic wide QRS ventricular tachycardia that has oscillatory changes in amplitude of the QRS complexes around the isoelectric line (“twists'' around the isoelectric line) that degenerate into VFib. Given this presentation, which of the following medications is the LEAST likely to cause the described ECG pattern?",
    choices: [
      "Amiodarone",
      "Ciprofloxacin",
      "Propafenone",
      "Procainamide",
      "Sotalol",
    ],
    correct: "Propafenone",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding the causes of Torsades de Pointes (TdP). In this vignette we are presented with a patient that went into cardiac arrest due to his ventricular tachycardia degenerating into VFib. The ECG description of polymorphic wide QRS with oscillatory changes in amplitude around (“twists”) the isoelectric line and the prolonged QT interval is TdP. We need to think of what predisposes one to TdP. One of them is early afterdepolarizations (EADs). EADs can trigger TdP. EADs tend to occur due to prolonged Phase II, or QT interval on the ECG. Prolonged QT is usually due to K+ blockade. Therefore, any drugs that block the K+ channels such as the hERG channel can cause QT prolongation and put a patient at risk for TdP. Therefore, the answer is (C). Propafenone is the least likely to cause this as it is a class Ic medication that strongly blocks Na+ channels resulting in decreased conduction and does not affect phase II.  It is also usually only used for atrial arrhythmias, while the presenting case is of ventricular origin. (A) is a class III, so it blocks K+ channels. (B) is an example of a non cardiac drug cause of arrhythmias. FQs are known to cause QTc prolongation due to off target blocking hERG channel (a K+ channel that is implicated in long QT when blocked). Other causes include TCAs, antipsychotics, macrolide ABXs, methadone, etc… (D) is a class Ia, which is primarily a Na channel blocker, but also some K+ blocking activity, thus could cause TdP. (E) is class III, its activity as a β blocker doesn’t prevent it from causing TdPs as its K+ blocking is the predominant mechanism."
  },
  {
    id: 10,
    prompt:
      "Below is a list of antiarrhythmics, which of the following does NOT correctly match it to a major side effect of its use?",
    choices: [
      "Amiodarone - pulmonary fibrosis",
      "Class I - cardiac depression and hypotension",
      "Lidocaine - neuropathy",
      "Procainamide - drug-induced lupus",
      "None of the above",
    ],
    correct:
      "None of the above",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires knowing some side effects of antiarrhythmics. The correct answer is (E). All of these correctly match a side effect to its class/drug. Also remember all antiarrhythmics can cause arrhythmias. (A) amiodarone has MANY side effects: liver enzyme abnormalities, emesis, gynecomastia, pulmonary fibrosis (incl interstitial lung dz), abnormal thyroid function, corneal microdeposits, photosensitivity, blue-gray skin. (B) decreasing conduction can lead to decreased cardiac function, some Na+ channel blockers also cause peripheral vasodilation. (C) lidocaine is also a local anesthetic, so it also works on nerves, potentially this makes it cause neuropathy. (D) is true, the mechanism is complicated, results in ANA against histones."
  },
  {
    id: 11,
    prompt:
      "A 65 y/o patient presents to his cardiologist. He was referred following a recurrent episode of palpitations that resulted in ED visits. His most recent ECG showed a rate of 80, no discernable p-waves and a sawtooth pattern, with 2:1 ratio to QRS. He does not have a history of structural or ischemic heart disease If he elects for pharmacological therapy, which of the following would be a viable option?",
    choices: [
      "Flecainide",
      "Flecainide + adenosine",
      "Flecainide + metoprolol",
      "Lidocaine",
      "None of the above",
    ],
    correct: "Flecainide + metoprolol",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires understanding the use of class Ic antiarrhythmics in atrial flutter. In this vignette we are presented with a patient with an ECG finding that represents atrial flutter (sawtooth). In this case we could use an antiarrhythmic that is primarily used for atrial arrhythmias such as a class Ic, this will strongly slow down conduction in the atrial myocytes, thereby hopefully terminating the re-entry circuit that is causing the arrhythmia. The patient does not have the contraindications (structural or ischemic heart disease). This will slow down the rate and hopefully convert the rhythm back into sinus. However, this may actually increase the ventricular rate paradoxically. This is because prior to intervention, the atrial rate might be going at 300, but the AV node only allows 1 signal to go through for every 2, thus causing the ventricular rate to be 150. In this case the AV node is doing a good job in keeping the ventricular rate from going too fast. Let’s say the AV node can accommodate atrial rates up to 200, then if we slow down the atrial rate to 200, then the AV node may let all the signals leading to an increased ventricular rate of 200. Therefore, to prevent this from occurring we need to also include an AV node blocker to slow down conduction. Hence, (C) is the correct answer in this case. Adenosine is also an AV node blocker, but is not a very practical drug to give since it induces asystole to “restart” the heart to stop SVTs (this is on top of the many other impracticalities like IV only, short half life, sense of impending doom, etc…)"
  },
  {
    id: 12,
    prompt:
      "What are some pharmacological ways to decrease automaticity?",
    choices: [
      "Block K+ channels, resulting in prolonged Phase II in ventricular AP",
      "Block L-type Ca2+ channels, resulting in decrease Phase 0 slope in pacemaker AP",
      "Block Na+ channels, resulting in decrease Phase 0 slope in ventricular AP",
      "Block Na+ funny channel current, resulting in decreased phase IV slope in pacemaker AP",
      "B and D",
      "B, C, D",
    ],
    correct: "B and D",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the mechanism behind treating arrhythmias due to automaticity. The correct answer is (E). Both (B) and (D) are the ways we use to decrease automaticity, however it should be noted that the main effect is (D). This is the way beta blockers are used to treat arrhythmias due to automaticity as via the GPCR signal transduction pathway, there is a resulting decrease in Na+ funny current, resulting in a decreased phase IV slope, thus slowing down the depolarization of the pacemaker cells. (B) on the other hand decreases the Phase 0 slope, which will prolong the depolarization, thus slowing down the pacemaker cell. (C) Blocking the Na+ channels that result in decreased phase 0 in the ventricles does not treat automaticity because this will only affect the ventricular myocyte depolarization and not the pacemakers or the source of the automaticity. This is why beta blockers and CCBs are used often because they can treat all 3 types of arrhythmias. Automaticity by slowing down the pacemaker. Re-entry by slowing down conduction (decreasing the velocity CCB>beta). And EAD (especially Ca driven ones), by reducing Ca influx and triggered activity due to that."
  },
  {
    id: 13,
    prompt:
      "Which of the following is true when treating reentry arrhythmias?",
    choices: [
      "In long excitable gap re-entry, conduction is the vulnerable parameter, therefore block Na+ channels",
      "In long excitable gap re-entry, refractoriness is the vulnerable parameter, therefore block K+ channels",
      "In short excitable gap re-entry, conduction is the vulnerable parameter, therefore block Na+ channels",
      "In short excitable gap re-entry, refractoriness is the vulnerable parameter, therefore block K+ channels",
      "A and D",
    ],
    correct: "A and D",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the thinking behind treating reentry arrhythmias. Excitable gap in reentry arrhythmias are thought in 2 ways: the long excitable gap and the short excitable gap. The long excitable gap is when there is a long gap (distance) between the wavefront of the current and the tissue that's in refractory. While the short gap is when there is a short distance between the wavefront and the refractory tissue. If the wavefront reaches the refractory tissue, then the circuit will terminate. However, if the wavefront reaches the tissue and it repolarizes, then the circuit will continue. Therefore to terminate the reentry circuit we need to think of what the vulnerable parameter is that we can alter to stop the wavefront. The easier one to understand is the short excitable gap. If we prolong the refractoriness, then chances are the wavefront will run into the refractory tissue and terminate itself. K+ channel blockers can do this as they prolong phase II and QT, thus (D) is correct. In the long excitable gap, prolonging refractoriness might not be feasible as this may require us to prolong it for a long time before the wavefront reaches it. Prolonging the refractoriness by ways such as prolonging QT also puts the patient at risk of other arrhythmias like EADs. Therefore, the vulnerable parameter is slowing down the conduction. This is done by blocking Na+ channels as these mediate the conduction in the ventricles for example (CCB could work at the SA and AV node if they are involved), therefore (A) is also correct. Thus the correct answer is (E)."
  },
  {
    id: 14,
    prompt:
      "A 45 y/o patient presents to the ER after being found down on the ground. His vitals: BP 100/60, HR 120, T 39degC, RR 12, SpO2 88% RA. Physical exam reveals track marks, suggesting IVDU. There is a holosystolic high pitched murmur best heard at the left sternal border. His fingernails have splinter hemorrhages. An ECHO shows tricuspid valve regurgitation. No prosthetic valves. Blood cultures are ordered. Given this presentation, empiric treatment with what ABX regimen?",
    choices: [
      "Cloxacillin",
      "Cloxacillin + penicillin G",
      "Cloxacillin + gentamicin + rifampin",
      "Vancomycin",
      "Vancomycin + gentamicin + rifampin",
    ],
    correct: "Vancomycin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the empiric treatment of a native valve IVDU infective endocarditis. In this vignette we are presented with a suspected infective endocarditis according to the modified Duke criteria of 1 major and 3 minor: major - ECHO, minor - fever, IVDU, vascular (splinter). Given this patient’s IVDU and potentially was found down because of IVDU, we highly suspect Staph (MSSA and MRSA) as the cause of his IE. This is further substantiated by the TV involvement or right heart IE, which is more common in IVDU. Therefore, the empiric therapy we will use is (D) vancomycin. Once blood cultures come back we can use directed therapy such as cloxacillin if MSSA, or continue vancomycin if MRSA. We do not need to use gentamicin or rifampin as this is not involving a prosthetic valve, which would be predisposed to biofilm formation, nor are we thinking an enterococcus infection (which vanco is only bacteriostatic against, thus needs gentamicin - bactericidal for enterococcus). (A) is the empiric therapy for a native IE non IVDU. (C) is the treatment for MSSA prosthetic IE. (E) is the empiric therapy for prosthetic valve IE or MRSA prosthetic valve IE"
  },
  {
    id: 15,
    prompt:
      "A 56 y/o patient in the CTU is found to have a soft, high-pitched, early diastolic decrescendo murmur heard best at the left 3rd intercostal space. His PMHx includes a prosthetic aortic valve replacement, HTN, T2DM.  No Hx of IVDU. ECHO confirms vegetations on his AV and he is starting to show signs of sepsis: fever, tachypnea, elevated WBC, tachycardia, and altered mental status. Blood cultures are ordered and the patient is started on empiric vancomycin + gentamicin + rifampin. Blood cultures return enterococcus faecalis. ABXs should be switched to (assume bacteria is susceptible to all relevant ABXs)?",
    choices: [
      "Ampicillin",
      "Ampicillin + gentamicin",
      "Ampicillin + gentamicin + rifampin",
      "Vancomycin",
      "Vancomycin + gentamicin",
    ],
    correct: "Ampicillin + gentamicin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the treatment for enterococcus IE. In this vignette we are presented with a patient with a suspected prosthetic valve IE that is later confirmed. He is started on the correct empiric therapy for prosthetic valve IE which covers Staph, coagulase negative staph, viridans strep, enterococcus. The blood cultures confirm enterococcus, a common cause of nosocomial IE, that is susceptible to all relevant ABXs. Therefore, we should switch the treatment to (B). We need to use a synergistic combination because ABXs that target the cell-wall are bacteriostatic when treating enterococcus. Gentamicin on the other hand is bactericidal, but the dose required for gentamicin to kill by itself is too nephrotoxic to be beneficial (the walls of enterococci or fairly resistant to gentamicin absorption). Therefore, we combine these two to lower the dose required, hence synergy. Essentially, the cell-wall targeting ABX like vanco or ampicillin will punch holes and allow gentamicin to enter and kill the bacteria. We do not add rifampin, but could be a consideration. Rifampin is usually added for staph prosthetic valve IE. Ampicillin is the best beta lactam for enterococcus when it is susceptible. We could replace ampicillin with penicillin G."
  },
  {
    id: 16,
    prompt:
      "The empiric treatment for a non IVDU, native valve infective endocarditis is NOT tailored towards eliminating which bacteria?",
    choices: [
      "Enterococcus",
      "Coagulase negative staph",
      "Staph (MSSA)",
      "Viridans Group Strep (α-hemolytic)",
      "None of the above",
    ],
    correct: "Coagulase negative staph",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the ABX coverage needed for empiric IE treatment. The correct answer is (B). THe empiric treatment for non IVDU native valve IE is cloxacillin + penicillin G or ampicillin + gentamicin. These do not cover Coagulase negative staph (CoNS). CoNS is fairly resistant to beta-lactams, thus needs vancomycin for coverage and is more implicated in prosthetic valve IE and not native valve IE."
  },
  {
    id: 17,
    prompt:
      "A 45 y/o patient is diagnosed with native valve infective endocarditis. He has no history of IVDU.  His blood cultures come back negative. Serology is ordered and comes back negative for Coxiella and Bartonella. Therapy is indicated with which of the following drugs?",
    choices: [
      "Cloxacillin + penicillin G",
      "Ceftriaxone",
      "Ceftriaxone + Doxycycline + Gentamicin",
      "Doxycycline + Hydroxychloroquine",
      "Micafungin",
    ],
    correct: "Ceftriaxone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the empiric treatment for IE in a culture negative patient. In this vignette we are presented with a native valve IE with no IVDU and negative cultures. This suggests that HACEK organisms: Haemophilus species, Aggregatibacter species, Cardiobacterium hominis, Eikenella corrodens, and Kingella species. These are gram negative bacteria that take a while to grow in blood cultures. The serology also suggests that the true culture negative causes like coxiella and bartonella are not likely. Therefore, we should treat this as if it were the HACEK organisms, which is correctly described in (B). Ceftrixation has good gram negative coverage. (C) describes bartonella treatment. (D) describes coxiella treatment. (E) would be used if we suspected candidemia, but blood cultures did not grow candida."
  },
  {
    id: 18,
    prompt:
      "A 86 y/o patient is admitted to the hospital for severe cardiogenic shock. He is severely dyspneic. He has a DNR order and does not want to be put on a ventilator. The patient, patient’s family, and the care team decide that palliation is the best course of action. In this case, what would be the first-line pharmacological management of his dyspnea?",
    choices: [
      "Glycopyrrolate",
      "Methotrimeprazine",
      "Midazolam",
      "Morphine",
      "Phenobarbital",
    ],
    correct: "Morphine",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the palliative treatment option for dyspnea. In this vignette we are presented with a patient that wishes to pursue palliative care, but is severely dyspneic. To make him more comfortable we should decrease his respiratory drive, which is probably tiring him out. The first line option is (D), an opioid. Opioids bind to MU opioid receptors in the respiratory centers such as those in the pons to decrease minute ventilation. (A) is anticholinergic that blocks muscarinic receptors that cause respiratory secretions, thus is used to decrease salivary, tracheobronchial, and pharyngeal secretions (upper airways). (B) is a neuroleptic drug used in cases of terminal delirium (other options include antipsychotics like haloperidol). It blocks many different receptors: adrenergic receptors, dopamine receptors, histamine receptors, muscarinic acetylcholine receptors and serotonin receptors. (C) is a benzodiazepine, which potentiates GABA signaling in the CNS, thus causing depression or inhibitory effects like sedation. It is considered an add on to treat dyspnea, but also used first-line for palliative sedation. Other options for palliative sedation include (B), (E), and propofol. (E) is a barbiturate that opens GABA channels, thus acts in similar fashion as BDZs, but does not have a ceiling effect like BDZs."
  }, {
    id: 19,
    prompt:
      "Which of the following is NOT true about the β1 adrenoreceptor?",
    choices: [
      "Increase conduction in the heart",
      "Increase contractility of the heart",
      "Increased ventricular fibrillation risk",
      "Phenylephrine is a direct agonist",
      "Stimulate renin release",
    ],
    correct: "Phenylephrine is a direct agonist",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the effects of the  β1 adrenoreceptor. β1 adrenoreceptor is part of the SNS, thus its effects should reflect the expected “flight or fight” response. This includes increased CO, thus (A) and (B) are true. This also leads to (C) as an unfortunate adverse effect of overstimulation. (E) is part of the SNS pathway in activating RAAS, to help maintain adequate BP and renal perfusion. Thus, the false statement is (D). Phenylephrine is an α1 agonist that results in arterial and venous constriction, thus is useful for increasing SVR for a short period of time without having a direct effect on the heart. It is also used in decongestants to decrease the size of mucosal arteries and edema, thus increasing the patency of the nasal passages."
  },
  {
    id: 20,
    prompt:
      "Which of the following is an effect of the α2 adrenoreceptor?",
    choices: [
      "Arteriole vasoconstriction",
      "Bronchodilation",
      "Decrease SNS outflow",
      "Increase heart contractility",
      "Stimulate renin release",
    ],
    correct: "Decrease SNS outflow",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the effects of  the α2 adrenoreceptor. The only effect here  that is true is (C).  The α2 adrenoreceptor is found on presynaptic nerves of the SNS, and acts as an autoreceptor, where when activated it causes a decrease in NE release. This is the inhibitory receptor of the SNS to help control outflow from the SNS. (A) is α1. (B) is β2. (D) is β1. (E) is β1."
  },
  {
    id: 21,
    prompt:
      "A 45 y/o patient presents to the ER with a high fever, tachycardic, and altered. He has a history of IVDU. It is determined that he is septic and started on empiric ABX. His lactate is closely followed and he is ultimately transferred to the ICU for pressor support. Which of the following correctly describes the MAIN role of NE in this presentation?",
    choices: [
      "Increase oxygen supply to heart",
      "Increase SVR",
      "Increase oxygenation via bronchodilation",
      "Increase water retention",
      "All of the above",
    ],
    correct: "Increase SVR",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the role of vasopressors. In this vignette we are presented with a patient with suspected septic shock, which falls under distributive shock. In distributive shock we expect end organ perfusion to decrease due to decreased SVR, while vol status is unchanged (preload could be decreased or normal), and HR/CO is increased to compensate for the drop in SVR. n.b. Late stage septic shock can actually lead to cardiogenic shock. In this case we initiate pressor support to increase SVR as correctly described in (B) via α1. NE does have some β1 activity that is more pronounced at higher doses, which allows it to also act as an inotrope and increase contractility and conduction. However, in this case that is not its main role. (A) is thought to not occur. α1 are found on coronary vessels and would be vasoconstricted, thus decreasing flow. NE would increase demand due to the increase in afterload and contractility/HR. (C) bronchodilation is β2, which is not activated by NE. (D) is an effect of NE at high doses via β1 activation on JG cell, which leads to activation of RAAS, but that takes time to occur and is not the major player in a patient in shock that is on a NE infusion for pressor support."
  },
  {
    id: 22,
    prompt:
      "Which of the following medications would you expect to NOT DIRECTLY affect the heart?",
    choices: [
      "Dopamine",
      "Dobutamine",
      "Epinephrine",
      "Norepinephrine",
      "Vasopressin",
    ],
    correct: "Vasopressin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: " This question requires understanding the pharmacology of pressors and inotropes. The only drug here that does not affect the heart DIRECTLY is (E). Vasopressin is an analogue to the antidiuretic hormone. Its use as a pressor is primarily driven by its action on V1 receptors found on vascular smooth muscle, which results in vasoconstriction. Vasopressin also works on V2 receptors in the kidneys to increase blood volume via AQP insertion into the collecting ducts (basically what ADH does), but this is not of major use in shock patients on pressor support. Since this medication works through a different mechanism than other pressors like NE (through adrenergic receptors), we can add this as an add on for increased pressor support to reduce the NE requirement. (A) at medium doses will activate β1 receptors on the heart. This makes sense because dopamine is the precursor to NE (which is the precursor to E; the catecholamines are all derived from the same tyrosine pathway), so there is crossreactivity. Given that it is dopamine, it is more potent for the dopamine receptor (so at low doses dopamine receptors are activated as well), which has vasodilatory effects. At higher doses, dopamine achieves α1 activation as well. Dopamine is a dirty drug in that it binds many receptors, thus is harder to use.  (B) is nonselective β 1+2 agonist, so it acts on the heart, but also causes some v/d to decrease SVR. (C) acts on α1 < β1+2. (D) acts on α1 > β1."
  },
  {
    id: 23,
    prompt:
      "What makes milrinone and dobutamine favorable inotropes in cardiogenic shock?",
    choices: [
      "Both have fast onset and short half life, hence are easily titratable",
      "Decreased propensity to cause VFib",
      "Decreased cardiac oxygen demand",
      "Peripheral v/d effects, that result in decreased afterload",
      "All of the above",
    ],
    correct: "Peripheral v/d effects, that result in decreased afterload",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: " This question requires understanding the pharmacology of inotropes. The only true statement is (D). Both milrinone, a PDE3i, and dobutamine, a β1 + 2 agonist (the β2 mediates the v/d), have v/d effects that result in decreased SVR, thus afterload on top of their inotropic properties. This is considered favorable in cardiogenic shock because it helps shift the cardiac oxygen supply and demand balance to a more favorable one as the heart does not have to work as hard to pump blood out, thereby optimizing cardiac output. Some inotropes do not decrease SVR, and only increase contractility and HR, which only results in increased cardiac oxygen demand. Milirone also acts as a lusitrope, which helps with myocardial relaxation, resulting in further optimization of cardiac function. (B) and (C) are not true. Both result in increased Ca2+ in the cardiac myocytes, thus putting the heart at risk of Vtachs/VFibs due to EADs/DADs. Increased contractility will increase demand. (A) is not true because only dobutamine has a fast onset and short half life (minutes!), thus making dobutamine a very titratable drug for management of a more dynamic hemodynamics. Milironone on the other hand has a slow onset and has a longer half life (~6 hrs), this is not as easily titratable as once whatever dose is in the body, you will need to wait hours for it to clear. Therefore, it isn’t as useful as dobutamine in dynamic situations where fast changes to management need to be made."
  },
  {
    id: 24,
    prompt:
      "A 29 y/o patient presents to the ER with a “racing heart” and feels lightheaded. He does not notice any chest pain, sweating, or headache. His pulse is too fast to count and BP 85/55, pulse ox 97% RA, temp 37degC, glucose normal. An ECG is ordered and shows normal axis, regular rhythm and rate of 150 bpm. Narrow QRS complexes are noted, with buried p-waves. Which of the following describes the mechanism of action of the first line pharmacological treatment in this case?",
    choices: [
      "A1 receptor agonist - results in increased K+ efflux and decreased calcium influx, resulting in hyperpolarization of cardiac cells",
      "A1 receptor antagonist - results in increased K+ efflux and decreased calcium influx, resulting in hyperpolarization of cardiac cells",
      "β1 receptor agonist- decreases cAMP leading to decreased heart rate, conduction velocity, and contractility",
      "β1 receptor antagonist - decreases cAMP leading to decreased heart rate, conduction velocity, and contractility",
      "non-DHP calcium channel inhibitor - decreases calcium influx causing decreased heart rate, conduction velocity, and contractility",
    ],
    correct: "A1 receptor agonist - results in increased K+ efflux and decreased calcium influx, resulting in hyperpolarization of cardiac cells",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the mechanism of AV node blockers. In this vignette we are presented with a patient with a SVT as described by the ECG. The first line pharmacological management in this case is adenosine and its mechanism is described in (A). Adenosine is an adenosine receptor agonist with a very short half life. It will hyperpolarize the pacemaker membrane, thus decreasing conduction across the AV node and allowing the reentry to terminate itself.  (D) actually describes the mechanism of beta blockers, but is not the first line. (E) actually describes the mechanism of CCB, also not the first line."
  },
  {
    id: 25,
    prompt:
      "Which of the following hypotensive patients would a NE be the MOST useful?",
    choices: [
      "B. May: JVP low, IVC small and compressible, periphery warm, fever, tachypnea, WBC elevated, altered",
      "F. Mercury: JVP low, IVC small and compressible, periphery cool, DRE melena",
      "J. Deacon: JVP high, IVC large and noncompressible, periphery cool, ECHO shows large pericardial effusion",
      "R. Taylor: JVP high, IVC large and noncompressible periphery cool, PCWP elevated, history of CHF",
      "All of the above",
    ],
    correct: "B. May: JVP low, IVC small and compressible, periphery warm, fever, tachypnea, WBC elevated, altered",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding vasopressors pharmacology. (A) is a patient in distributive shock secondary to sepsis. NE would be very useful in this case. This is because NE is an easily titratable medication due to its fast onset and short half life, which makes it ideal in dynamic hemodynamic states where fluctuations can occur rapidly and fast adjustments are required. The hemodynamics in sepsis can change rapidly and NE gives us that flexibility to adapt to these changes without worrying about lasting drug effects when it's not needed or when we need rapid correction/increase in BP. (B) case of shock is most likely hypovolemic due to a GI bleed given the DRE results. Giving NE could potentially increase bleeding as the increased SVR leads to increased BP, thus increased blood pouring out of the hole. However, if necessary NE could be used to maintain SVR till intervention like surgery can be done. (C) is a case of obstructive shock possibly secondary to pericardial tamponade. NE in this case could be used as a bridge therapy to maintain SVR till a pericardiocentesis can be performed. (D) is a case of cardiogenic shock. NE could be used to maintain SVR if needed or if inotropic support is not adequate in maintaining BP. However, NE increases afterload."
  },
  {
    id: 26,
    prompt:
      "A 25 y/o patient presents to the ER with tremors and is agitated. His vitals are: BP 160/100, HR 150, T 38.6 degC, RR 24, SpO2 95% RA. He is diaphoretic, tremors in the upper limb B/L his pupils are dilated and reactive to light, bowel sounds are normal, and hyperreflexia. An ECG shows signs of cardiac ischemia and sinus tachycardia. Collateral information from a friend reveals that he was doing a “buttload” of drugs, but he wasn’t sure which ones. This presentation highlights the overstimulation of which receptors?",
    choices: [
      "5-HT",
      "Anticholinergic",
      "Adrenorecptors",
      "Muscarinic cholinergic receptors",
      "Nicotinic cholinergic receptors",
    ],
    correct: "Adrenorecptors",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding sympathomimetic toxicity as an illustration of the effects of adrenergic receptor overstimulation. In this vignette we are presented with a patient that has overdosed on an unknown drug. His presentation matches those of a sympathomimetic presentation, thus (C) is the correct answer. Causes of this include anything that stimulates the SNS, which includes stimulants such as cocaine, meth, amphetamines, MDMA, etc… Here we will break down most of the symptoms and explain its relation to the SNS/adrenergic system. Tachycardia is heart β1 receptor driven. Hypertension is a combination of the increased CO due to β1 and α1 peripheral v/c. Hyperthermia is due to many factors including overstimulation of muscles due to the stimulant effect, resulting in muscle breakdown (rhabdo is a complication) and overstimulation of α1 vasoconstriction, thus preventing heat loss via radiation through v/d. Diaphoresis is due to sweat glands being under SNS control, so overstimulation of the ganglions upstream will cause increased SNS outflow resulting in sweating. We have both adrenergic and cholinergic sweat glands. Tremors are due to overstimulation of muscles, but also thought to be due to increased blood flow via β2 activation (this is the hypothesized reasoning behind SABAs induced tremors). Pupils dilated, but reactive is due to α1 on radial muscles, thus causing constriction, which results in pupil dilation. However, this is reactive to light because the circular muscles are mediated by muscarinic (PSNS) and are not blocked, thus pupils will constrict to light. This is one way to differentiate an anticholinergic vs sympathomimetic toxicity, as the pupils are not reactive in an anticholinergic toxicity because the circular muscles are blocked, thus preventing constriction. Hyperreflexia is due to overstimulation. The ischemic cardiac changes on ECG are possibly due to overstimulation of α1 on the coronary vessels, leading to decreased oxygen delivery. Some other effects of the SNS include stimulation of glucose release and production (β2), β3 is on adipose tissue for lipolysis (increasing glucose and utilizing fat stores for energy for a “fight or flight” response). In general, just thinking of what a fight or flight response should have will sum up the adrenergic effects."
  },
  {
    id: 27,
    prompt:
      "Given that epinephrine and norepinephrine are both utilized in SNS activation and structurally very similar, why is norepinephrine NOT used in the initial treatment of anaphylaxis shock?",
    choices: [
      "Norepinephrine does not have affinity for β2 adrenergic receptors, therefore does not allow for bronchodilation",
      "Norepinephrine is a valid alternative to epinephrine since it has affinity for both α and β adrenergic receptors",
      "Norepinephrine does not have affinity for β1 adrenergic receptors, therefore does not allow for bronchodilation",
      "Norepinephrine has affinity for β2 adrenergic receptors, therefore causing vasodilation and a drop in blood pressure.",
      "Norepinephrine has poor tissue absorption due to the lack of a methyl group (lipophilic), therefore the onset of action is slower than epinephrine.",
    ],
    correct: "Norepinephrine does not have affinity for β2 adrenergic receptors, therefore does not allow for bronchodilation",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the effects of catecholamines. Here we need to understand the different receptor affinities of norepinephrine (NE) and epinephrine (E). Both of these drugs are released by the SNS in our “flight and fight” response. E has affinity for both α (1, 2) and β (1, 2, 3) adrenoceptors (more affinity for β), while NE has affinity for α (1, 2) and β (1) adrenoceptors (more affinity for α). In anaphylactic shock, we want to both increase blood pressure via vasoconstriction (α1) and increasing cardiac output via increased contractility (β1), decrease mucus secretions and edema via vasoconstriction (α1), decrease bronchospasm via bronchodilation (β2), and decrease mediator release from mast cells and basophils (β2). E is able to exert all of these effects. Hence, (A) is the correct answer. Side note: NE is a valid adjuvant option if the patient needs extra help in maintaining cardiac output. The addition of an extra methyl group on E increases its affinity for the β adrenoceptors. (taken from MEDD411 immunology week Q deck)"
  },
  {
    id: 28,
    prompt:
      "A 15 y/o patient presents to the ER with generalized urticaria across his trunk, shortness of breath, BP 80/50, and HR 135. 0.3 mg IM epinephrine (E) is administered. How will E affect the patient’s cardiac system?",
    choices: [
      "E activates α1 adrenergic receptors on vascular smooth muscle, leading to increased peripheral vascular resistance, therefore increasing blood pressure.",
      "E activates β1 adrenergic receptors in the heart, leading to increased contractility and heart rate, therefore increasing blood pressure.",
      "E activates β2 adrenergic receptors on vascular smooth muscle to skeletal muscle, leading to decreased peripheral vascular resistance, therefore decreasing blood pressure",
      "All of the above",
      "All except for C",
    ],
    correct: "All of the above",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the effects of epinephrine and the SNS. In this case, all of the above are valid effects of E on the cardiovascular system. The drop in blood pressure via β2 adrenergic receptors is not as important as α1 and β1 adrenergic receptor stimulation, hence a rise in blood pressure is the end result with E administration. But it is important to remember that β2 adrenergic receptors are found in vessels to skeletal muscles, to allow for increased blood flow to skeletal muscle to facilitate the fight or flight response. (taken from MEDD411 immunology week Q deck)"
  },
  {
    id: 29,
    prompt:
      "A 67 y/o patient presents to the ER with decompensating HFrEF. He is extremely short of breath and confused. His vitals are BP 70/40, HR 65, RR 28, T normal, O2Sat 88% RA. He is “cold and wet” on examination: pulmonary edema, B/L pitting edema, elevated JVP, S3 and S4 heart sounds, weak peripheral pulses, and sluggish cap refill. He is started on supplemental O2 and  IV furosemide, but this does not relieve his symptoms and he continues to decompensate. Which of the following interventions would provide the MOST benefit now?",
    choices: [
      "Add hydrochlorothiazide to his IV furosemide",
      "Start IV carvedilol",
      "Start IV milrinone",
      "Start IV nitroprusside",
      "Start IV vasopressin",
    ],
    correct: "Start IV milrinone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the management of acute decompensated heart failure with signs of hemodynamic instability. In this vignette we are presented with an acute decompensating HFrEF. There are signs of hemodynamic instability given the low BP and abnormal “normal” HR, which we would normally expect to be increased to compensate for the low BP. His physical exam shows that he is cold and wet, thus indicating fluid overload and poor perfusion. The initial management with diuretics to get rid of the fluid overload does not appear to be working well (could be due to poor renal perfusion, leading to decreased response to furosemide). In this case, we need to highly consider inotropes to help his cardiac output, which in turn help perfuse his organs. This is a stopgap intervention to help stabilize his hemodynamics before going on more chronic therapy. Therefore, (C) would be the most likely option to pursue. Milrinone is an inotrope and lusitrope (ability for myocardial relaxation). This is because milrinone is a PDE3 inhibitor (similar to viagra - which is PDE5i), that inhibits the breakdown of cAMP in cardiac, which leads to increased PKA and phosphorylation of calcium channels. This ultimately leads to an influx of calcium. This results in increased contractility, improved myocardial relaxation (improved filling, due to increased calcium reuptake). In the vasculature, PDE3i will decrease cGMP breakdown leading to vasodilation (similar to viagra) also a decrease in SVR (decrease in afterload). This somewhat makes the cardiac oxygen supply and demand more favorable than some other inotropes. Also in cardiogenic shock we would see high SVR as the body tries to compensate for the decreased BP by vasoconstricting. This can also reduce end organ perfusion as you are tightening the pipes even more, but on the flip side you still need some arterial tone to perfuse organs, so very low SVR is not good either. In this case we also unexpectedly see a low HR, this could be due to desensitization or downregulation of β adrenergic receptors due to prior overstimulation. THis potentially would make milrinone a better option than a direct β1 agonist as milirone’s actions are not directly dependent on β1 stimulation. (A) would face the same problems as furosemide - decreased delivery to the site of action. (B) would not be helpful in this case and would make the decompensation worse as we would slow down HR and decrease contractility more, which would further reduce his CO. (D) would cause his hypotension to be even worse without helping his cardiac output that well, could also lower the coronary perfusion pressure more (decrease o2 supply), but also has some positive effects on the supply and demand. (E) is a vasopressor and would not be indicated yet without some sort of drug to help with cardiac output like inotropes. We’d consider vasopressor if the inotropes cause a large decrease in SVR or the BP is too low to perfuse the organs. In this case it may be harmful because it could further increase SVR, thus making the heart work even harder without augmenting its CO. (taken from MEDD422 Heart Failure week Q deck)"
  },
];
