/**
 * Questions for Arrhythmia
 * @author Michael Gong, UBC VFMP 2025
 */

export const Arrhythmia = [
  {
    id: 1,
    prompt:
      "Which of the following drugs would you expect to cause sinus tachycardia?",
    choices: [
      "Aspirin",
      "Atropine",
      "Lorazepam",
      "Metoprolol",
      "A and B",
    ],
    correct: "Atropine",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the pharmacology behind positive chronotropes. The correct answer is (B), atropine. First we need to define what a chronotrope is. A positive chronotropic is an agent that increases heart rate (a negative one decreases heart rate), so any medication that increases SA node activity or conduction through the electrical system is one. A drug that increases conduction through the AV node specifically is called a positive dromotrope (fyi). Atropine is a muscarinic receptor antagonist, therefore this drug blocks the effects of the PSNS on the heart. The PSNS largely reduces heart rate via ACh activation of M2 receptors on the SA and AV node leading to activation of K+ ACh channels (increased K+ outward current → hyperpolarization of membrane). This can cause a decrease in the phase 4 slope of pacemaker action potential and also lower the RMP. M2 receptors are also found on atrial contractile tissues, thereby decreasing contraction, but they are minimally expressed on ventricular tissue, hence little effect on ventricular myocytes. Therefore, if we block the effects of the PSNS on the heart with atropine, we should expect the opposite effects of the PSNS, thereby can cause sinus tachycardia. (A) is an antiplatelet, which will not affect rate or rhythm. (C) is a benzodiazepine, which leads to CNS depression. This would more likely lead to slowing down of HR. Acute precipitation of withdrawal with a BZD antidote like flumenazil could cause PSVT. (E) is a β blocker, hence would decrease heart rate and contractility, so it would NOT cause sinus tachycardia, but more likely cause sinus bradycardia or potential prolong the PR interval causing other bradyarrhythmias such as 1st degree heart block or even 2nd/3rd degree heart blocks at high enough levels."
  },
  {
    id: 2,
    prompt:
      "A 50 y/o patient presents to the ER with a supraventricular tachycardia. The ER doctors successfully revert her back into sinus rhythm. She has an extensive medical history that includes HTN, Grave’s disease (treated via complete thyroidectomy), depression, T2DM, and asthma. She is currently on many medications: levothyroxine (PO), amitriptyline (PO), losartan (PO), calcium carbonate (PO), formoterol (inhaled), and fluticasone propionate (inhaled). Assuming an iatrogenic cause, which of the following medications is LEAST likely to be the cause of her presentation?",
    choices: [
      "Amitriptyline",
      "Calcium carbonate",
      "Formoterol",
      "Levothyroxine",
      "All except for C",
    ],
    correct:
      "Calcium carbonate",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the iatrogenic causes of SVTs. In this vignette we are presented with a patient with a SVT and many different comorbidities and medications. We need to ask ourselves, which of these medications have the potential to affect cardiac activity such as conduction or pacemaker activity. The medication that’s least likely to do any of that is (B). Calcium carbonate acts as a base to neutralize acid. Even if there was systemic absorption of calcium, such as in milk-alkali syndrome, the hypercalcemia will more likely cause bradyarrhythmia. (A) is a TCA and has the potential to cause many different arrhythmias including SVTs. TCAs have many off-target effects such as anticholinergic (blocking of M2 receptors), leading to tachycardia as the PSNS is inhibited. TCAs can also block Na+ channels, leading to widening of QRS, and also block K+ channels leading to QT prolongation, which puts the patient at risk of after-depolarization that can deteriorate into TdP. (C) is a β2 agonist (LABA), which can off target activation of β1 receptors on the heart leading to increased HR and contractility, which can result in SVTs. (D) is synthetic T4 used to replace thyroid. If excessive amounts of levothyroxine are taken, then iatrogenic hyperthyroidism can occur, which can cause tachyarrhythmias such as SVTs. In fact hyperthyroidism is associated with increased risk of AFib, hence patients with new onset AFib are investigated for hyperTh with a TSH level. It should be noted that fluticasone, an inhaled corticosteroid, potentially can also cause tachyarrhythmias, though the association is not fully established since many patients on inhaled corticosteroids also concurrently take β agonists."
  },
  {
    id: 3,
    prompt:
      "A 57 y/o patient presents to the ER after fainting during dinner with his wife. He spontaneously recovered after slumping for approximately 1 minute. He does not recall any chest pain or palpitations, and this has not happened before. His past medical history is notable for HTN (treated w/ propranolol and captopril), T2DM (treated w/ metformin), and a CABG procedure for coronary artery disease (treated w/ baby aspirin).  Physical exam shows BP 100/70, HR 48, PulseOx 98% RA, RR 15, glucose normal, 37 degC. An unremarkable cardiac, resp, and neuro exam. An ECG is ordered and shows normal axis, regular QRS rhythm with a rate of ~50. P-waves do not line up with QRS complexes and the p waves appear to be going at a rate of ~90. This presentation can be initially treated by?",
    choices: [
      "6 mg adenosine IV push with saline flush",
      "Amiodarone",
      "Diltiazem IV",
      "Remove captopril",
      "Remove propranolol",
    ],
    correct: "Remove propranolol",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the treatment for bradyarrhythmias. In this vignette we are presented with a patient with a brief syncope event. His ECG shows a bradycardia and the ECG pattern suggests a third degree AV block given the dissociation between p waves and QRS complexes (they are going at different rates), where the p waves appear to be going at a normal rate, while the QRS complexes are going at a much slower rate that corresponds closer to the intrinsic rate of ventricular tissue. THis suggests that the electrical conduction through the AV node is completely blocked as all the conduction from the atria is not getting through and communicating with the ventricles. Hence, a complete heart block. Given that this is his first episode and that he is on medications that can block the AV node. The treatment option we can pursue first is to stop the offending medication, which would most likely be propranolol, a non selective β blocker, hence (E) is the correct answer. (A) is the treatment for a SVT episode. (B) is a class III antiarrhythmic that is used to treat reentry tachyarrhythmias, via blocking K channels. (C) is a CCB, hence it is also an AV node blocker and would worsen this patient’s bradyarrhythmia. (D) is an ACEi and has nothing to do with the bradyarrhythmia in this patient."
  },
  {
    id: 4,
    prompt:
      "A 60 y/o patient presents to the ER after fainting during dinner with his wife. He spontaneously recovered after slumping for approximately 1 minute. He does not recall any chest pain or palpitations, and this has not happened before. His past medical history is notable for HTN (dx 15 yrs ago and treated with propranolol and captopril), T2DM (dx 10 yrs ago and treated with metformin).  Physical exam shows BP 80/50, HR 60, PulseOx 98% RA, RR 15, glucose normal, 37 degC. An unremarkable cardiac, resp, and neuro exam. An ECG is ordered and shows normal axis, sinus rhythm, rate ~60 bpm, irregular QRS rhythm: a dropped beat is noted on Lead II, PR interval is constant and not prolonged. He recently lost a significant amount of weight (intentionally). Assuming an iatrogenic cause, which of the following best describes a potential cause of his presentation?",
    choices: [
      "Decreased weight resulted in incorrect dosing of captopril, resulting in more inhibition of ACE",
      "Decreased weight resulted in incorrect dosing of propranolol, resulting in more inhibition of β1 receptors",
      "Both A and B",
      "His medication list does not contain a drug that could cause second degree AV block Type I",
      "His medication list does not contain a drug that could cause second degree AV block Type II"
    ],
    correct: "Decreased weight resulted in incorrect dosing of propranolol, resulting in more inhibition of β1 receptors",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding how pharmacokinetics changes can cause a patient’s dosing to fall out of the therapeutic window. In this vignette we are presented with a brief syncope event. The ECG reading suggests a bradyarrhythmia that is most likely a second degree heart block Mobitz Type 2. We think this is the arrhythmia given the dropped QRS complex and constant PR interval that does not prolong (if it were prolonging, then a Wenkebach would be more likely). We are told that he has intentionally lost weight. This could potentially cause the doses that he was on before to be too much for his current weight, so then any AV nodal blockers that were not an issue from before, could potentially now be causing AV node conduction blocks. Hence, (B) is the correct answer. The drop in weight potentially puts his plasma concentration of propranolol to be above the therapeutic window and into the toxic window, thus causing a 2nd degree type II heart block."
  },
  {
    id: 5,
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
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the mechanism of AV node blockers. In this vignette we are presented with a patient with a SVT as described by the ECG and demographics (young pt with no other concerns). The presence of buried p-waves signifies that there is “talk” between atria and ventricle, making the source of the tachyarrhythmia as coming upstream of the ventricles, in this case most likely the AV node, where a reentry mechanism has been set up leading to near concurrent atrial and ventricular depolarization, hence the buried p-wave. Sometimes the p-wave is inverted and this is a reflection of the direction of atrial depolarization when the source of the electrical activity is coming from below like the AV node. The first line pharmacological management in this case is adenosine and its mechanism is described in (A). Adenosine is an adenosine receptor agonist with a very short half life. It will hyperpolarize the pacemaker membrane, thus decreasing conduction across the AV node and allowing the reentry to terminate itself.  (D) actually describes the mechanism of β blockers, but is not the first line. (E) actually describes the mechanism of CCB, also not the first line."
  },
  {
    id: 6,
    prompt:
      "Which of the following are adverse effects of adenosine?",
    choices: [
      "Bronchospasm",
      "Flushing",
      "Hypertension",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the adverse effects of adenosine. The correct answer is (D). Both bronchospasm and flushing can occur with adenosine. Bronchospasm is thought to be due to adenosine receptor type 2 activation on mast cells leading to histamine, LKT, and prostanoid release and potentially stimulation of nerve endings that release ACh. All of these lead to smooth muscle contraction of the bronchioles. Flushing is thought to occur due to vasodilation. Adenosine receptor type 2 on vascular smooth muscle leads to smooth muscle relaxation, hence dilation. The dilation of vessels will cause flushing. Some other side effects include dizziness, impending sense of doom, SoB, and arrhythmias (all antiarrhythmics can cause arrhythmias)."
  },
  {
    id: 7,
    prompt: "A 16 y/o hockey prodigy presents to the ER with a “racing heart” and feels lightheaded during his hockey match. He does not recall any chest pain, sweating, trauma, or headache. His pulse is 80 and BP 120/80, pulse ox 98% RA, temp 36.4degC, glucose normal. A 12-lead ECG is ordered and shows normal axis, regular rhythm with a rate of 180 bpm. Wide QRS complexes with delta waves and a shortened PR interval are noted. Which of the following drugs are typically avoided in patients with this presentation?",
    choices: [
      "Adenosine",
      "Metoprolol",
      "Procainamide",
      "A, B",
      "All of the above",
    ],
    correct:
      "A, B",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding WPW and pharmacological management. In this vignette we are presented with a young patient with an ECG abnormality. We suspect WPW given the wide QRS and delta waves, with shortened PR interval. These are ECG findings we’d suspect in a patient with WPW. This is an example of pre-excitation in WPW, where the impulse from the atrial travels down to the ventricle via the accessory pathway (Bundle of Kent), which is faster than traveling through the AV node. This causes the PR interval to shorten as the time between atrial depol and ventricle depol is shortened. This also causes the delta wave and widened QRS as the impulse from the accessory pathway is pre exciting the ventricle (pre exciting before the AV signal) has to travel across the ventricle from one of the LV to depolarize the rest of the ventricle, while the signal through the AV node comes through. The existence of the accessory pathway is dangerous if our patient also has AFib as the irregular signals can then travel to the ventricle and cause VFib as it bypasses the “checkpoint” AV node. Therefore, we would not want to give a patient any AV nodal blockers, thus (D) is the correct answer. Blocking the AV node will cause the signal to go down the accessory pathway, which is what we want to avoid. (C) is actually a treatment option for WPW preexcitation. Procainamide is in class Ia, which means it blocks Na+ channels and some minor K+ blocking resulting in decreased phase 0 slope and increased phase II, respectively. This results in slowing conduction (Na+ blockade), this ideally will slow down the conduction (also increases refractoriness) via the accessory pathway (without affecting the AV node), this is thought to be useful in terminating antidromic AVRTs (clockwise down the BoK). Procainamide also has been used to convert Afib back into sinus rhythm."
  },
  {
    id: 8,
    prompt: "A 43 y/o patient with a history of supraventricular tachycardias (SVTs) that are not resolved with carotid sinus massages or the valsalva maneuver presents to her cardiologist for medical prophylactic treatment. She has had 3 trips to the ER for SVTs in the last 6 months, which were resolved with adenosine x2 and cardioversion once. Her past medical history is notable for asthma (diagnosed at 8 y/o) and COPD. Which of the following pharmacological interventions would you recommend?",
    choices: [
      "Adenosine",
      "Amiodarone",
      "Diltiazem",
      "Digoxin",
      "Metoprolol",
    ],
    correct: "Diltiazem",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding pharmacological prevention of SVTs and contraindications. In this vignette we are presented with a patient with recurrent episodes of SVTs that are not resolved with the nonmedical interventions and had to be resolved using adenosine x2 and cardioversion in the ER in the last 6mos. Given this, we would definitely consider starting medication to prevent more SVT episodes and ER visits. The two classes of medications we use as long term AV nodal blockers are β blockers and calcium channel blockers. Both of these classes will slow down AV nodal conduction via decreased calcium influx (β blockers work upstream leading to decreased activation of the channels, while CCBs block the channels themselves). The decision between which one to use in this case comes down to contraindications. Our patient has a history of obstructive lung disease with both asthma and COPD. This will make us less likely to use β blockers as even the β1-selective blockers have the potential to block β2 receptors in the bronchioles, leading to bronchoconstriction and also pharmacological antagonism to the patient’s use of SABAs/LABAs for their comorbidities. Therefore, we will use a non-DHP CCB as named in (C). (A) would be used during an acute SVT episode. (B) is a class III antiarrhythmic that blocks K+ channels and has an absolute unit of a side effect profile (hyper/hypo thyroidism, pulmonary fibrosis, QT prolongation etc…). (D) is a class V antiarrhythmic and inotrope that blocks the Na+/K+ ATPase pump leading to calcium influx and would not be useful in this case."
  },
  {
    id: 9,
    prompt:
      "A 35 y/o patient with a SVT presents to the ER. Carotid massage, valsalva maneuver, and adenosine 12 mg IV fail to restore sinus rhythm. Which of the following medications would you try next?",
    choices: [
      "Bisoprolol PO",
      "Digoxin PO",
      "Dobutamine IV",
      "Epinephrine IV",
      "Metoprolol IV",
    ],
    correct: "Metoprolol IV",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding the 2nd line treatment of an acute SVT episode. In this vignette, we are presented with a patient with a SVT that did not resolve with the nonmedical management or 2x adenosine IV push. Here we could try another AV nodal blocker such as (A) or (E), however we want the effects to occur ASAP, therefore (E) is the correct answer. IV β blocker will allow for rapid onset of action and hopefully slow down conduction through the AV node and terminate the re-entry circuit. (A) given PO, will take too long to have an effect. (C) and (D) are both inotropes, where they both activate β1 receptors leading to increased HR and contractility. This will actually increase the risk of tachyarrhythmias such as those mediated by late afterdepolarizations due to the increase in intracellular calcium. (B) is not useful in this case and would cause the same issue as the aforementioned β1 agonists, albeit through a different mechanism that increases intracellular calcium (see Shock week in MEDD422). Other options following adenosine failure also include non-DHP CCBs. THe reason why adenosine may fail could be due to the extremely short half-life of adenosine (think seconds), and thus may not be enough to sustain conversion back to sinus rhythm."
  },
  {
    id: 10,
    prompt:
      "A 69 y/o patient presents to her cardiologist after an abnormal ECG was noted on a routine screen. Her ECG shows normal axis, irregularly irregular rhythm and rate of 140 BPM, and no discernable p-waves. She doesn’t complain or recall any symptoms that are bothering her. Her past medical history is notable for HTN (dx 10 yrs ago) that has not been controlled successfully with ACEis (BP 150/95) and hyperlipidemia (controlled with a statin). An ECHO is performed and her left ventricular ejection fraction is normal. Given this presentation, which of the following medications would be the most efficacious?",
    choices: [
      "Amiodarone",
      "Amlodipine",
      "Digoxin",
      "Metoprolol",
      "Verapamil",
    ],
    correct:
      "Verapamil",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding rate control in patients with AFib. In this vignette we are presented with a patient with AFib given the ECG showing irregularly irregular rhythm and no discernable p-waves. She is asymptomatic and has a history of HTN that has not been controlled well with ACEis. Potentially the HTN contributed to the AFib in this case. She also does not appear to have HF. In this case given the HTN, asymptomatic age, and no CHF, rate control would be an appropriate intervention, and ideally a drug that can also help control her BP. Rate control means that we are slowing down the AV node conduction, thereby slowing down ventricular response, but we leave the atria in its fibrillating rhythm, whereas rhythm control is an attempt to convert the fibrillation to a normal rhythm. Rate control is important because slowing down the heart can control symptoms, but also prevent tachycardia induced cardiomyopathy. If you think about this in terms of cardiac oxygen supply and demand, a fast beating heart is going to require a higher oxygen demand, and this will also tire out the heart more leading to changes to the heart that are eventually detrimental leading to heart failure. There is debate on the target for HR, but ideally around 100 bpm. In general first line rate control medications include β blockers and nonDHP CCBs. In patients with low EF, β blockers are preferred. In patients with HTN and normal LVEF such as this patient, CCBs are actually preferred, hence the correct answer is (E). This is because CCBs have better BP control than β blockers. If you think about it, these two drugs work in the same pathway, but CCBs work on the most downstream target that is directly involved in calcium influx. So you can think of it as nipping right at the bud, while β blockers work upstream and prevent one mechanism that causes calcium influx. CCBs will block the end result of many different mechanisms that lead to calcium influx. Hence, better smooth muscle relaxation/prevention of contraction → better BP control. This however, makes CCBs less ideal for patients with heart failure as it will have a stronger effect at decreasing contractility than β blockers, thus potentially worsening the LVEF in patients. In general, if a patient has HTN and normal LV → CCB, everything else → β blocker (LVEF <40%, or normal BP). (A) is a class III antiarrhythmic, used for rhythm control in patients with comorbid heart failure (explained in another question). (B) is a DHP CCB, so it is more selective for vascular Ca channels, than those found in the heart, so it has less AV conduction suppression, which is the mechanism we need for rate control. (C) is a class V antiarrhythmics and inotrope that is used as a 2nd line add-on in rate control (explained in another question). (D) is a β1 selective blocker."
  },
  {
    id: 11,
    prompt:
      "A 72 y/o patient with a history of congestive heart failure returns to her cardiologist after an abnormal ECG was noted on a routine screen. Her ECG shows normal axis, irregularly irregular rhythm and rate of 120 BPM and no discernable p-waves. An ECHO showed a left ventricular ejection fraction of less than 40%. She started on metoprolol. She has noted experiencing light headed and palpitations despite being started on the medication. Her past medical history is unremarkable. She describes her life as sedentary. Which of the following modifications to her pharmacological intervention would you do?",
    choices: [
      "Add amlodipine",
      "Add digoxin",
      "Add diltiazem",
      "Switch to propafenone",
      "Switch to digoxin",
    ],
    correct:
      "Add digoxin",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding rate control in patients with AFib. In this vignette we are presented with a patient with AFib as shown by her ECG reading of an  irregularly irregular rhythm and no discernable p waves. She also has heart failure, specifically HF with reduced ejection fraction (HFrEF) given her ECHO results (<40% EF). It appears that she is started on rate control with a β blocker given her HF. However, she experiences symptoms possibly related to the AFib given the lightheadedness and palpitations. Therefore, the rate control is possibly not enough to manage her AFib, so the next possible step would be to (B) add digoxin. Digoxin is a 2nd line rate control management option that is added in patients with LVEF<40% regardless of HTN status, whose HR has not been controlled and/or symptomatic AFib. Digoxin works as a vagomimetic, where it helps promote the PSNS effect on the SA and AV nodes, thus leading to decrease in HR. Digoxin also blocks the Na+/K+ ATPase channel, which causes a buildup of Na+ intracellular, that is then exchanged with Ca2+, resulting in Ca2+ influx, which increases contractility, thus acting as a positive inotrope as well. This is why it is also sometimes used in heart failure. Adding a nonDHP CCB would also manage the rate, but potentially will cause a large decrease in contractility, thus potentially further worsening cardiac output in a patient with HF (C). (A) is a DHP CCB, thus would not have a strong effect on heart rate or heart tissue. Mostly works on vascular smooth muscle causing vasodilation. (D) no indication to switch to rhythm control, also given her HF, amiodarone may be more appropriate. (E) we wouldn’t rely solely on digoxin for rate control as the effects of digoxin can be easily overridden by a surge of the SNS. THis is why digoxin is usually thought to work better with older patients who generally lead a sedentary life as they are less likely to have increased SNS that would override the vagomimetic effects of digoxin. Also β blockers are beneficial in CHF (you will learn the nuances of HF management in MEDD422, but in short it's a complicated process of balancing different factors such as cardiac oxygen demand and supply and adequate CO)."
  },
  {
    id: 12,
    prompt:
      "A 56 y/o patient returns to the ER for the 4th time in 6 months for palpitations. Vitals are normal except for an elevated heart rate. An ECG is ordered and shows an irregularly irregular rhythm and rate of 150 bpm with no discernable P-waves and narrow QRS complex. An ECHO is ordered and no structural heart defects are noted. His past medical history (no HTN) is unremarkable, he leads an active lifestyle, takes no medications besides multivitamin gummies. He chooses to pursue medical management to reduce future ER trips. Which of the following medications would you LEAST likely use in his case?",
    choices: [
      "Amiodarone",
      "Dronedarone",
      "Flecainide",
      "Propafenone",
      "Sotalol",
    ],
    correct:
      "Amiodarone",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding rhythm control in AFib. In this vignette we are presented with a patient with AFib given the ECG findings of irregularly irregular rhythm and no discernable p-waves. This patient has returned to the ER multiple times in the last 6 mos for palpitations, this suggest that this a paroxysmal presentation of symptomatic AFib. He is also under <65, no HTN, and has never failed a previous antiarrhythmic (he also never had one). These all favor the use of rhythm control (all the choices here are rhythm control anyways). Given the lack of any other comorbidities or structural heart disease, we could use all of these medications except for (A). Amiodarone is a class III antiarrhythmic, with a large side effect profile that includes pulmonary fibrosis, hyper/hypo thyroidism, QT prolongation, neuropathy, photosensitivity, liver damage, corneal deposits, and more. Given its large side effect profile, we tend to reserve the use of amiodarone for patients with heart failure, as the risks of the drug on someone who is relatively healthier is too great. (B) and (E) are class III with a smaller side effect profile. (E) is also a β blocker. (C) and (D) are both class 1c antiarrhythmics. These have strong Na+ channel blockade, but are contraindicated in patients with any structural heart disease, whether congenital or due to ischemic changes."
  },
  {
    id: 13,
    prompt:
      "A 60 y/o patient with an extensive medical history of: AFib, coronary artery disease, and mitral valve prolapse presents to her cardiologist for pharmacological management of her AFib. She has had recurrent symptomatic episodes that resulted in multiple ER visits. She was previously put on an antiarrhythmic drug successfully and tolerated it well, but decided to stop taking it because she didn’t want to “take more chemicals”. Which of the following pharmacological interventions would you use to help maintain sinus rhythm?",
    choices: [
      "Na+ channel blockers (Class Ic antiarrhythmic)",
      "β blockers (Class II antiarrhythmic)",
      "K+ channel blockers (Class III antiarrhythmic)",
      "Ca2+ channel blockers (Class IV antiarrhythmic)",
      "Digoxin",
    ],
    correct:
      "K+ channel blockers (Class III antiarrhythmic)",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding rhythm control in AFib. In this vignette we are presented with a patient with recurrent episodes of symptomatic AFib, <65, and has previously tolerated an antiarrhythmic well. Given this, she could be a possible candidate for rhythm control. However, she does have important comorbidities such as CAD and mitral valve prolapse, which suggest structural heart disease. This rules out (A), as class Ic antiarrhythmics are contraindicated in patients with structural heart disease. (B) and (D) are both drugs used for rate control as they slow down AV node conduction and decrease the ventricular response rate, while also decreasing contractility. These are all beneficial, but would not be helpful in helping maintain sinus rhythm as their mechanism predominantly involves slowing down rate and not altering the ion currents that either slow down conduction (Na+) or prolong refractoriness (K+), which would require a rhythm control drug such as class I and class III. (E) is not a good option in this case either as it would not help us with maintaining sinus rhythm and is usually an add on in rate control and/or to help increase heart contractility. This leaves us with (C), the correct answer. In this case class III will prolong the refractoriness and hopefully help terminate the reentry circuit that is playing a role in AFib. Given her multiple comorbidities, sotalol or dronedarone would probably be possible choices. If she had heart failure, then amiodarone would be another option."
  },
  {
    id: 14,
    prompt:
      "A 60 y/o female patient with a AFib, T2DM, and HTN with no prior stroke/TIA is given medication to prevent stroke. Which of the following medications would she be most likely prescribed?",
    choices: [
      "Aspirin",
      "Apixaban",
      "Dronedarone",
      "Metoprolol",
      "Verapamil",
    ],
    correct:
      "Apixaban",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding stroke prevention in patients with AFib. In this vignette we are presented with a patient with AFib and other comorbidities, with no history of TIA/stroke. All patients with AFib are at an increased risk of stroke and should be adequately anticoagulated to prevent a stroke. This is because in AFib the irregular electrical activity in the atria causes poor coordinated contraction of the atria to push blood to the ventricles. This essentially results in the blood in the atria to be in a state of “stasis”. This causes an increased risk of a venous thromboembolic event as clots in the venous system (atrium included) tend to occur in areas of low velocity flow (Stasis in Virchow’s triad). You can think of the blood as just sitting there and having nothing to do, so it clots. If the blood was moving fast, then there isn’t an opportunity to clot (arterial thrombosis tends to be a platelet driven process, while this is a clotting factor driven process in the heart atriums). If we recall the CHAD65 score (or CHADS2-Vasc), we can risk stratifying our patient and determine whether they need anticoagulation. She would score a 3 (1 for HTN, 1 for T2DM, 1 for female sex). Given her comorbidities, she would qualify for anticoagulation according to the CCS algorithm. The first line is a DOAC (direct oral anticoagulant) as described in (B) a factor Xa inhibitor (apiXaban). We could consider (A) if she did not have the other comorbidities, but had CAD/previous MI, as this suggests that she has a risk for arterial thrombotic events, which are platelet driven. (C) is a class III antiarrhythmic with its main mechanism being blocking K+ channels, however it does also have some Na+ blocking and Ca2+ blocking. It is sometimes used to treat AFib in patients with no/minimal structural heart disease or CAD/valvular/LVH patients (contraindicated in patients with heart failure). The use of antiarrhythmics is to help maintain sinus rhythm, but has not been shown to effectively prevent strokes like DOACs. (E) is a nonDHP CCB, and would not prevent a stroke."
  },
];
