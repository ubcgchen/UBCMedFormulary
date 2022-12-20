/**
 * Questions for Ataxia / Movement Disorder / Tremor week
 * @author Michael Gong, UBC VFMP 2025
 */

export const ataxia_movementDisorder_tremor = [
  {
    id: 1,
    prompt:
      "A 27 y/o general surgery resident presents to the neurology clinic for a tremor. She is concerned that her tremor is affecting her ability as a surgeon. Her tremor presents only in her hands bilaterally when outstretched and during the finger to nose test. The tremor is constant and does not change in amplitude during the action. The frequency is described as around 10 Hz. She does not take any medications (OTC, prescribed or illicit), her thyroid is normal, and hates coffee.The first line management of the most likely diagnosis is?",
    choices: [
      "Amantadine",
      "Clonazepam",
      "Gabapentin",
      "Metoprolol",
      "Propranolol",
    ],
    correct: "Propranolol",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires recognizing essential tremor and the treatment for it. In this vignette, we are presented with a patient with a postural and action tremor of her hands that is symmetrical, constant (no intention tremor), fairly high frequency, and not on medications or thyroid issues. The top DDx would be ET in this case, which is treated with a nonselective β blocker (E). The β2 receptor is thought to be implicated in tremor, whether it is through decreased blood flow to skeletal muscle or spindle sensor, is not known. Hence, β1 selective blockers (D) are not useful. We don’t suspect physiological tremor as much given the history, hence (D) is incorrect. (A) is mostly used for levodopa induced dyskinesias in PD patients. (B) a BDZ, and (C) a gabapentinoid are both 2nd line choices.",
  },
  {
    id: 2,
    prompt:
      "A 33 y/o patient presents to the neurology clinic with a tremor. The tremor is present in the hands when outstretched, bilaterally, symmetrical, and fine amplitude. The frequency is described as ~10 Hz. Her past medical history is significant for depression, hypothyroidism, and EtOH substance use disorder. She takes many medications. Which of the following is/are likely the cause of her tremor?",
    choices: [
      "Citalopram",
      "Drug withdrawal",
      "Levothyroxine",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the causes of enhanced physiological tremor. In this vignette we are presented with a patient with an enhanced physiological tremor, it is only present posturally. She has an extensive medical history and takes medications. Many medications can enhance physiological tremor. In general, sympathomimetics and psychiatric medications can increase tremor. Some systemic medications like corticosteroids, levothyroxine, and amiodarone can also cause this. Another important cause is drug withdrawal. (A) citalopram is an SSRI and is known to cause tremors - mechanism unclear. (B) drug withdrawal also causes tremors, this could be because taking a drugs like EtOH or BDZs, which act as depressants causes the body to adapt to the altered physiology to counter the inhibition (increase activity), and when the drug is removed suddenly, the inhibition is removed, resulting in a strong rebound reaction such as tremors. (C) at supraphysiological doses will cause hyperthyroidism presentation, which evidently includes tremors. Hence, (D) is the correct answer.",
  },
  {
    id: 3,
    prompt:
      "What is the primary mechanism that causes drug induced parkinsonism and tardive dystonia/dyskinesia?",
    choices: [
      "D1 receptor activation",
      "D1 receptor blockade",
      "D2 receptor activation",
      "D2 receptor blockade",
    ],
    correct: "D2 receptor blockade",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the pharmacological causes of secondary movement disorder. The answer is (D). Any drug that blocks the D2 receptor or depletes dopamine levels are likely to cause movement disorders due to the role dopamine and the D2 receptor have in the basal ganglia. Many antipsychotics target dopamine receptors, hence they are implicated in secondary movement disorders. Typical APs have better affinity for D2 than some atypicals, hence typical APs are associated with movement disorders. Likewise, antiemetics/prokinetics such as metoclopramide and prochlorperazine (compazine) that target D2 in the GI tract will also block D2 in the CNS and be a cause as well. Dopamine depleters like tetrabenazine in bipolar disorder will decrease dopamine levels, essentially acting as indirect D2 blockers. Valproic acid decreases dopamine levels as well.",
  },
  {
    id: 4,
    prompt:
      "A 34 y/o patient presents to the GP with choreiform oromandibular movements and some axial dystonia with cervical hyperextension. His past medical history includes idiopathic nausea and vomiting. He also recently immigrated from another country. In his country of origin his vomiting was managed with an unknown medication for the last 7 months. The patient says that he still takes this medication and is not sure what the English name is. The GP suspects that the medication is the cause of his presentation. Which of the following could be the identity of the medication?",
    choices: [
      "Benztropine",
      "Diphenhydramine",
      "Ondaestron",
      "Prochlorperazine",
      "Scopolamine",
    ],
    correct: "Prochlorperazine",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding causes of tardive dyskinesia. In this vignette we are presented with a patient with a mixed presentation of tardive dyskinesia and dystonia. We know that he has been taking a drug for the last 7 months for nausea. Hence, we should be thinking of a neuroleptic medication that is used in nausea and blocks D2 receptors. Therefore, (D) is the most likely cause. Prochlorperazine will block D2 receptors in the GI and chemoreceptor trigger zone to treat nausea and vomiting, however this means it can also block D2 receptors in the pathways that mediate movement, thus causing tardive dyskinesia/dystonia after chronic (6 mo+) treatment. (A) is an anticholinergic that could be used to treat patients with pure tardive dystonia. (B) is 1st generation antihistamine that is used for nausea. (C) is a 5HT3 antagonist for nausea/emesis. (E) scopolamine is an antimuscarinic for nausea.",
  },
  {
    id: 5,
    prompt:
      "A 55 y/o patient presents with hyperthermia, dysautonomia (excessive sweating, irregular tachycardia, tachypnea), and altered mental status. On the physical exam, there is rigidity. His medication history includes aspirin, tetrabenazine, and valproic acid. Which of the following is NOT a viable management option?",
    choices: [
      "Administer dantrolene",
      "Administer diazepam",
      "Administer quetiapine",
      "Remove tetrabenazine ",
      "Remove valproic acid",
    ],
    correct: "Administer quetiapine",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding, recognizing and managing neuroleptic malignant syndrome. In this vignette we are presented with a patient with NMS. We suspect NMS given the tetrad: hyperthermia, dysautonomia, altered mental status (encephalopathy), and rigidity, and also the presence of neuroleptic medications such as valproic acid and tetrabenazine. The management of NMS includes giving a depressant such as a benzodiazepine, a muscle relaxant like dantrolene (ryanodine receptor antagonist), and removing neuroleptic drugs. Therefore, (C) is the correct answer. We would not be giving another neuroleptic medication. However, quetiapine is thought to be safer and less likely to cause secondary movement disorders in PD patients with psychosis due to decreased D2 receptor affinity.",
  },
  {
    id: 6,
    prompt:
      "A 72 y/o patient presents with psychosis to the ER. He is a homeless person with no GP or any contact information. Upon further examination there is an asymmetric resting tremor, bradykinesia, and rigidity. Given this presentation and if you had to, which of the following antipsychotics would you be more comfortable with using in this patient?",
    choices: [
      "Chlorpromazine",
      "Clozapine",
      "Haloperidol",
      "Risperidone",
      "None of the above",
    ],
    correct: "Clozapine",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the safer antipsychotics for a patient with suspected Parkinson’s. In this vignette, we have a patient that we think might have PD given his presentation. In these cases, the 2 antipsychotics we’d be comfortable giving are clozapine (B) or quetiapine. Both are atypical APs with lower D2 affinity, thus are thought to less likely cause secondary movement disorders in PD patients. PD patients are more sensitive to neuroleptic medications due to decreased dopaminergic activity. (A) and (C) are typical APs, (D) is an atypical AP with high D2 affinity.",
  },
  {
    id: 7,
    prompt: "What is the mechanism of action of pramipexole?",
    choices: [
      "Directly stimulates dopamine receptors",
      "Inhibits COMT, reducing levo-dopa metabolism",
      "Inhibits DDC, reducing peripheral levo-dopa conversion to dopamine",
      "Inhibits MAO-B, reducing dopamine metabolism",
      "NMDA antagonist, increasing dopamine levels",
    ],
    correct: "Directly stimulates dopamine receptors",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of pramipexole. Pramipexole is a dopamine receptor agonist, hence (A) is the correct answer. Other dopamine agonists are: bromocriptine, ropinirole, and rotigotine (“-itine” or “-ole”) (B) is the mechanism of entacapone. (C) is the mechanism of carbidopa. (D) is the mechanism of selegiline, rasagiline, and safinamide (just remember “-giline”). (E) is the mechanism of amantadine.",
  },
  {
    id: 8,
    prompt:
      "A 68 y/o patient with Parkinson’s disease presents to his neurologist after noticing that his levo-dopa only works for 3 hours before he has dystonias and freezing of gait occurring. Which of the following is NOT a valid intervention for this patient?",
    choices: [
      "Add entacapone",
      "Add rasagiline",
      "Add pramipexole",
      "Increase levo-dopa dose",
      "Take medication with carbonated beverage",
    ],
    correct: "Take medication with carbonated beverage",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding management of levo dopa “wearing off”. In this vignette we are presented a patient with wearing off of his levo dopa (<4 hrs of adequate levo dopa dose effect). There are many different ways to manage this in a patient. Adding a COMT or MAO-B inhibitor will inhibit dopamine metabolism and allow for longer activity of about 1 hr (A and B). Adding a dopamine receptor agonist (C) will also reduce the depth of the “off time” and maintain some sort of dopamine activity in the patient. (D) increasing the levo-dopa dose will increase the amount of time levodopa works in the body as well. If you increase the dose, then the dose is able to stay in the therapeutic window longer. However, there should be some caution to this approach if there are peak-dose dyskinesias. (E) is not useful in “wearing off” cases. It is useful in delayed “kicking in” by increasing the speed of tablet disintegration, thus faster absorption of levo-dopa. Hence (E) is the correct answer.",
  },
  {
    id: 9,
    prompt:
      "A 70 y/o patient with Parkinson’s disease presents to his neurologist after noticing that his levo-dopa only kicks in after 60 mins. He has noticed less bowel movements the last couple of weeks. His diet has not changed. Which of the following interventions could help with our patient?",
    choices: [
      "Adding benztropine",
      "Adding senna glycoside and fiber",
      "Switch to long acting levo-dopa formulation",
      "All except for C",
      "All of the above",
    ],
    correct: "Adding senna glycoside and fiber",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding how constipation can impair levo-dopa treatment and how to manage it. In this vignette we are presented with a patient with delayed kicking in of levo dopa, which we think is due to constipation. (B) is the correct answer because senna glycoside and fiber are both treatments for constipation and will help increase GI motility. This will increase the speed of absorption of levo-dopa. (A) is an anticholinergic, and will cause more constipation. By blocking acetylcholine, you are inhibiting the PSNS, which is the “rest and digest” system of our body, thus less GI motility will occur. (C) will not be helpful in delayed kicking in. It will be helpful in wearing off issues. In this case, the duration of action is not the issue, but rather the onset of action, which is not addressed with a long acting formulation. An immediate release formulation would be helpful in increasing the absorption and onset of action of levodopa.",
  },
  {
    id: 10,
    prompt:
      "A 65 y/o patient with Parkinson’s disease is suffering from what appears to be side effects of his medication. He experiences nausea, vomiting, orthostatic hypotension, fatigue, and hallucinations. There is no ankle edema or constipation, no evidence of pulmonary fibrosis or cardiac valve fibrosis. He doesn’t have insomnia and there is no urine discolouration. Which of the following is the likely identity of the drug that’s causing the side effects?",
    choices: [
      "Amantadine",
      "Bromocriptine",
      "Entacpone",
      "Levo-dopa/carbidopa",
      "Selegiline",
    ],
    correct: "Levo-dopa/carbidopa",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      " This question requires understanding the side effects of medications used to treat PD. In this vignette we are presented with a patient suffering from many side effects. (D) is the most likely agent to be causing the listed side effects. We don’t think it's (A) because there is no ankle edema, constipation, livedo reticularis (yes for hallucinations though). Even though (B) causes the same side effects, there could also be ankle edema, and specifically with bromocriptine, there could be fibrosis. (C) is a no because there isn’t orange pee. (E) is a no because there isn’t dizziness and insomnia (yes for nausea though). Basically, there are overlaps in the side effects, so it’s a matter of what is most likely from the pertinent positives and negatives or you could argue that levo-dopa is the most commonly used medication to treat PD.",
  },
  {
    id: 11,
    prompt:
      "A 65 y/o patient with Parkinson disease initially had issues with his levo-dopa therapy, where he would only get about 3 hours of treatment per dose. His neurologist adjusted his management and now is able to get 4+ hrs from each levo-dopa dose. However, his partner complains that he is now hypersexual and it has been putting a strain in their relationship. What is the most likely intervention that was used in this case that led to the new presentation?",
    choices: [
      "Decreased interval between levo-dopa doses",
      "Increased levo-dopa dose",
      "Entacapone",
      "Pramipexole",
      "Selegiline",
    ],
    correct: "Pramipexole",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding a side effect of dopamine agonists. In this vignette we are presented with a patient who initially had a “wearing off” issue. That issue is resolved, but now presents with hypersexuality, which is an example of poor impulse control. Poor impulse control is a side effect in dopamine agonists as these drugs activate dopamine receptors in the reward center of the brain. Hence, (D) is the correct answer in this case. All the other choices are different ways to manage “wearing off”, but will not have poor impulse control as a side effect.",
  },
  {
    id: 12,
    prompt:
      "A 69 y/o patient with Parkinson’s disease presents to his neurologist after he has noticed that his levo-dopa starts to work only after 60 mins. This causes him to have uncontrollable movements and has been affecting his activities of daily living. Which of the following could explain this presentation?",
    choices: [
      "Diarrhea causing decreased transit time, resulting in decreased levo-dopa absorption",
      "Change in diet, increased protein causing competition for levo-dopa GI absorption",
      "Change in diet, increased protein causing competition for levo-dopa transport into CNS",
      "A and B",
      "B and C",
    ],
    correct: "B and C",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding diet interactions with levo-dopa. In this vignette we are presented with a patient with delayed kicking in. There are many different ways delayed kicking in could occur, from inappropriate dose, delayed gastric emptying, constipation, or poor absorption at the level of the gut and at the brain. Hence, (E) correctly outlines 2 possible mechanisms for the presentation. A high protein diet could increase competition for transporters that will transport neutral amino acids and levo-dopa. Dopamine is a tyrosine (a neutral AA) derived neurotransmitter, which means that levo-dopa, a dopamine precursor, is structurally similar to tyrosine, and would have to compete for absorption from the GI tract into the body. And then from the body to the brain, crossing the blood brain barrier through amino acid transporters. Hence any increase in protein in the diet could interfere with levo-dopa absorption, causing slowed absorption, thus delaying the onset of action.",
  },
  {
    id: 13,
    prompt:
      "If carbidopa inhibits DOPA decarboxylase (DDC), and DDC is found in the periphery and the CNS, then which of the following is true regarding carbidopa?",
    choices: [
      "Carbidopa is quickly metabolized, so it doesn’t distribute to the CNS",
      "Carbidopa does not cross the blood brain barrier",
      "Carbidopa is a D2 antagonist as well, so the net effect is increased dopamine",
      "Carbidopa inhibits MAO-B as well, so the net effect is increased dopamine",
      "Carbidopa is converted to dopamine, while levo-dopa is what inhibits DDC",
    ],
    correct: "Carbidopa does not cross the blood brain barrier",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of carbidopa. Carbidopa is formulated with levo-dopa to prevent peripheral conversion of levo-dopa into its active form, dopamine. Dopamine causes many effects such as nausea and vomiting (this is why some antiemetics are dopamine antagonists). The reason why carbidopa is effective is because it does not cross the blood brain barrier (B), hence allowing it to selectively inhibit peripheral DDC and not interfere with the conversion of L-dopa into dopamine in the CNS.",
  },
  {
    id: 14,
    prompt:
      "A 65 y/o patient with a 10 yr history of Parkinson’s disease managed with Levodopa/carbidopa has been experiencing increasing tremor and episodes of dyskinesia about 60 mins after taking his levodopa/carbidopa. Which of the following modifications to his management could you do to treat it?",
    choices: [
      "Add amantadine",
      "Add entacapone",
      "Add selegiline",
      "Increase levodopa/carbidopa dose",
    ],
    correct: "Add amantadine",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain:
      "This question requires understanding the management of tremor and dyskinesia in PD patients on L-dopa. In this vignette we have a patient with a long history of PD with increasing peak dose dyskinesia and tremor. The cause of dyskinesias could be due to levo-dopa concentrations that are above the therapeutic window or the progression of his PD. (A) is one way to manage this presentation, and is the correct answer in this case. Another way to manage this is to ensure he is on the lowest effective L-dopa dose, to minimize the chance of overshooting the therapeutic window. Likewise, you can decrease the dose and decrease the interval between doses to also ensure there is no wearing off as well. Another way to manage this is clozapine (atypical AP). (B), (C), (D) are useful ways to manage wearing off. There are also diphasic dyskinesia (DID), associated with peak dose and the decrease in L-dopa levels at the end of a dose. These can be managed as if it was a wearing off issue.",
  },
  {
    id: 15,
    prompt:
      "A 70 y/o patient with a 12 yr history of Parkinson’s disease managed with levodopa/carbidopa has been experiencing increasing episodes of dyskinesia about 60 mins after taking his levodopa/carbidopa. He doesn’t want to add more medications due to increasing cognitive dysfunction. How could you pharmacokinetically manage this?",
    choices: [
      "Decrease dose and decrease interval between doses",
      "Decrease dose and increase interval between doses",
      "Increase dose and decrease interval between doses",
      "Increase dose and increase interval between doses",
      "I believe polypharmacy is good, so I would give him another medication",
    ],
    correct: "Decrease dose and decrease interval between doses",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding how using pharmacokinetics can manage dyskinesias. In this vignette we are presented with a peak-dose dyskinesia in a patient who does not want to take more medications, hence we need to use our PK knowledge. Essentially, in peak dose dyskinesia, we are probably seeing the L-dopa peak dose exceeding the therapeutic window, hence we want to lower his dose. Then to make sure it doesn’t wear off given the decrease in dose, we will dose him more often. Therefore, (A) is the correct way to manage this. Essentially, we are trying to keep his L-dopa within a smaller therapeutic window. There are also diphasic dyskinesia (DID), associated with peak dose and the decrease in L-dopa levels at the end of a dose. These can be managed as if it was a wearing off issue.",
  },
  {
    id: 16,
    prompt:
      "A 34 y/o patient in the psychiatry ward starts presenting with restlessness, agitation, and fixed stare. He eventually progresses to twisting of his head and neck to a weird angle (torticollis) and stridor, spasms of his mastication muscles, and eventually neck and trunk hyperextension. The healthcare team is able to secure his airway. Going over the chart it is noted that his medications were switched 2 days ago from haloperidol PO to haloperidol IV. Treatment of this presentation is done with?",
    choices: [
      "5-HT antagonist",
      "D2 antagonist",
      "H1 antagonist",
      "H1 + M1 antagonist",
      "C or D",
    ],
    correct: "C or D",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires recognizing an acute dystonia reaction (ADR) and how to manage one. In this vignette we are presented with a patient with ADR given the prodrome of restlessness and agitation, which progresses into dystonia. We are also given a history where he had a recent increase in neuroleptic dosage, or in this case a change in administration from PO to IV. The treatment after managing the ABCs is to give him an antihistamine or an anticholinergic, therefore the correct answer is (E). The medications we use are diphenhydramine (IV/IM; 1st gen H1 antagonist), benztropine (IV/IM; M1 + H1 antagonist), or benzodiazepines such as clonazepam which is a GABA potentiator.",
  },
  {
    id: 17,
    prompt:
      "George, a 24 y/o patient, presents to the ER with agitated delirium, disorientated, diaphoresis, and vomiting. His vitals show elevated blood pressure, heart rate, and temperature (38.2\u2070 C). Exam shows mydriasis, increased bowel sounds, tremor, myoclonus, hyperreflexia, and positive Babinski bilaterally. His medical history includes a recent MDD diagnosis managed with paroxetine. His tox screen comes back positive for MDMA (ecstasy). Which of the following conditions is George most likely presenting with?",
    choices: [
      "Acute dystonia reaction",
      "Hypertensive crisis",
      "Malignant hyperthermia",
      "Neuroleptic malignant syndrome",
      "Serotonin Syndrome",
    ],
    correct: "Serotonin Syndrome",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires recognizing serotonin syndrome. In this vignette we are presented with a patient that is on a SSRI and a positive tox screen for MDMA, a 5-HT releasing agent. That should clue us into the fact that he has increased serotonin in his body. There are lots of overlap in the presentations such as dysautonomia, hyperthermia, and altered mental status. However, we can distinguish NMS from serotonin syndrome if we recall that NMS classically has bradykinesia and extrapyramidal “lead pipe” rigidity, while in serotonin syndrome it is hyperkinesia and clonus. We also can have pyramidal signs in 5-HT syndrome (positive Babinski). Therefore, (E) is the correct answer. (C) is NMS, but in a specifically related to anesthesia in the OR due to succinylcholine or halogenated inhaled anesthetics in predisposed individuals. (B) is something we could see with increased 5-HT, MAO inhibitors, and tyramine exposure (wine, cheese). (A) see other questions with ADR.",
  },
];
