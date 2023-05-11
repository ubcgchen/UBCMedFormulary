/**
 * Questions for Dementia
 * @author Michael Gong, UBC VFMP 2025
 */

export const Dementia = [
  {
    id: 1,
    prompt:
      "A 71 y/o patient with a history of Alzhiemier’s and overactive bladder presents to the ER with confusion. His vitals are BP 90/60, HR 45, RR 12, Temp 37 degC, SpO2 88% on RA. Collateral history provided reveals crampy abdo pain and increasing diarrhea, vomiting, and increased urinary frequency over the last few days. On inspection, he is diaphoretic, with increased salivation and lacrimation. His pupils are small. Lung sounds reveal wheezes. Increased bowel sounds on auscultation. He also has flaccid paralysis of his limbs. An ABG reports pH 7.31, PaCO2 60, HCO3 26. Given this presentation, which of the following medications if taken in large quantities, could cause this toxidrome?",
    choices: [
      "Aducanumab",
      "Donepezil",
      "Mematime",
      "Oxybutynin",
      "This presentation is not congruent with any toxidrome, consider SIRS.",
    ],
    correct: "Donepezil",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the side effects of AChEis. In this vignette we are presented with a patient with the classic cholinergic toxidrome, which will highlight most of the major side effects in one case and also understand the PSNS. A cholinergic toxidrome occurs when there are excess amounts of ACh, which is also the main neurotransmitter of the PSNS (and also for somatic muscles at NMJs). Patients with this toxidrome should present with a PSNS-like picture (and paralysis). This toxidrome can be illustrated with two mnemonics: SLUDGE or DUMBBELLS (use whichever one you like). SLUDGE: salivation, lacrimation, urination, defecation, GI distress, and emesis. DUMBBELLS: diarrhea, urination, miosis, bronchorrhea, body fasciculations, bradycardia, emesis, lacrimation, lethargy, salivation. Here we will break down how each of these are related to increased ACh as shown in the vignette. From the vitals we can see low BP and bradycardia, this is due to increased stimulation of M2 on the SA and AV node, leading to decreased HR, this in turn can lead to decreased CO, hence lower BP (M ACh receptors are also found on endothelial cells of vessels, but most vessels aren’t PSNS innervated; vessel tone is mostly under SNS control). The RR on the lower end with decreased SpO2 could be a sign of the diaphragm failing and bronchoconstriction (ACh stimulating the M3 receptors in the bronchioles), which explains the wheezes on exam. The diaphragm failing could be due to fatigue caused by overstimulation of the N ACh receptors of the diaphragm NMJs. Together this can lead to an acute respiratory acidosis as shown by the ABG, where PaCO2 increased by 20, and an increase of 2 with bicarb (10:1; ideally use the blood test bicarb, but that isn’t provided here). The crampy abdo pain could be due to the overstimulation of ACh receptors in the PSNS/ENS causing excess smooth muscle contractions in the GI tract, hence cramps (this is why buscopan, an anticholinergic, is used as an antispasmodic). The diarrhea is due to decreased transit time due to increased smooth muscle contractions of the GIT, remember the PSNS is the “rest and digest” system, so it promotes GI motility (this also explains the increased bowel sounds). This excessive increase, however leads to diarrhea, which also explains why anorexia and weight loss is a side effect of AChEi use as the decreased transit time potentially leads to decreased absorption of nutrients. Vomiting - GI smooth muscle contraction. Increased urinary frequency due to increased stimulation of M3 receptors on detrusor muscle, leading to bladder contraction, thus urination. Diaphoresis is because eccrine sweat glands are innervated by cholinergic neurons of the SNS system. Salivation and lacrimation, these glands re all innervated by the PSNS and mediated by muscarinic AChR (salivation → digestion, lacrimation → you probably don't want to be crying in a fight or flight response, probably better to cry in a safe space). Pupils are small because the PSNS innervates the ciliary muscles, hence overstimulation of these muscarinic receptors leads to contraction or miosis. The flaccid paralysis is due to the overstimulation of NAChR at NMJs leading to muscle fatigue, but initially can also present as fasciculations due to the overstimulation. As you can see many of these signs and symptoms are the opposite of an anticholinergic toxidrome and somewhat opposite of an increased adrenergic state. This toxidrome can occur with medications that increase ACh levels, such as AChEi, which inhibit acetylcholinesterase, the enzyme that breaks down ACh, hence ACh lasts longer, thereby causing overactivation of muscarinic receptors (and nicotinic receptors such as those found at NMJs). Therefore, (B) is the correct answer. (A) is an anti-amyloid β mAb. (C) is a NMDA R antagonist. (D) is an anticholinergic, so would produce an anticholinergic toxidrome (this was presented in a Q in Prostate week). Understanding the cholinergic and anticholinergic toxidrome will help you understand and remember the side effects of these medications and the PSNS."
  },
  {
    id: 2,
    prompt:
      "Which of the following is TRUE regarding aducanumab?",
    choices: [
      "Decreased risk of causing brain hemorrhages than lecanemab",
      "It has been shown to significantly slow down progression of Alzhiemer’s from a clinical perspective",
      "It can be given PO",
      "Targets both oligomers and plaques",
      "Targets the tau protein",
    ],
    correct:
      "Targets both oligomers and plaques",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacology behind the new “disease modifying” medication for AD. The only TRUE statement is (D). Aducanumab is a first in its class anti-amyloid β monoclonal antibody (hence (E) is false). It targets both plaques and oligomers. However, it is thought that the neurological symptoms in AD are more of a consequence of Aβ oligomers. Aβ plaques can be found in vessels, which actually causes an increased risk of vasogenic brain edema and leads to an increased risk of brain hemorrhages (collectively known as Amyloid-Related Imaging Abnormalities (ARIA)). Hence (A) is false, in fact lecanemab preferentially targets oligomers over plaques, and has a decreased risk of brain hemorrhages than aducanumab. (C) is false because as a monoclonal antibody it can not be delivered PO, it has to be delivered parenterally. (B) despite being approved by the FDA, the clinical efficacy of aducanumab leaves much to be desired. The approval of aducanumab is still a contentious and controversial decision and is not approved in Canada."
  },
  {
    id: 3,
    prompt:
      "You are at an Alzhiemer’s clinic for your neurology elective. You look over the charts of the next few patients and debate whether or not they would be eligible for an anticholinesterase inhibitor for their Alzhimiers (AD). Which of the following would you MOST likely be comfortable with prescribing an anticholinesterase inhibitor?",
    choices: [
      "Jackie - AD; repeat hospitalizations for upper GI bleeds due to an unresolved peptic ulcer disease",
      "Jermaine - AD; 50 pack yrs smoking, recently hospitalized for acute exacerbation of COPD",
      "Marlon - AD; recently diagnosed with myasthenia gravis",
      "Michael - AD; most recent ECG shows HR 45, still being investigated by his cardiologist",
      "Tito - here for an initial workup for dementia. MMSE was 28/30",
    ],
    correct: "Marlon - AD; recently diagnosed with myasthenia gravis",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the indications and contraindications for anticholinesterase (AChEi) use. In this case the person that you would most likely prescribe an AChEi is Marlon (C). Marlon does not have any known contraindications to ACHEi use and has been diagnosed with AD. Moreover, ACHEi can be used to manage the symptoms related to myasthenia gravis (MG) as the pathophysiology behind MG is auto-Ab against the NAChR at the NMJ. An AChEi will increase the concentration of ACh in the NMJ by inhibiting the breakdown of ACh via inhibiting acetylcholinesterases (the enzyme that breaks down ACh), to hopefully overcome the auto-Ab mediated inhibition of the NMJ. (A) Jackie has a contraindication: peptic ulcer disease. An AChEi can potentially worsen this by increasing acid secretion. This is because ACh release from the vagus nerve and other ENS related nerves stimulate acid secretion by increasing gastrin release from G cells (via GRP), stimulating histamine release from ECL cells, and directly stimulating parietal cells. Both of these contribute to increased acid secretion in the stomach (recall the acid secretion pathway from MEDD411). (B) Jermaine has a contraindication: COPD. This is because AChEi will increase ACh, which can stimulate the muscarinic 3 receptors in the bronchioles. This causes smooth muscle contraction, hence bronchoconstriction, thereby worsening the patient’s COPD. COPD and asthma are both contraindications to AChEi use. (D) Michael has a contraindication: bradycardia. This is because AChEi use will increase the activity of ACh from the vagus nerve that innervates the SA and AV nodes of the heart. This leads to increased stimulation of the M2 receptors on the SA and AV nodes, thereby further slowing down the heart. (E) Tito is not indicated for AChEi use. He currently is still being worked up for AD, and could potentially have dementia that is not AD. Hence, more workup should be done before a cognitive enhancer is started. Moreover, if he was diagnosed with AD, his AChEi would not be covered by pharmacare given his MMSE score being ≥26."
  },
  {
    id: 4,
    prompt:
      "Which of the following patients would you recommend trying mematime?",
    choices: [
      "Daphne was diagnosed with Alzhimer’s. Needs help with finances, but does not need help with other IADLs/ADLs. MMSE 27/30",
      "Fred was diagnosed with Lewy Body Dementia. MMSE 25/30",
      "Scooby was diagnosed with Alzhimer’s, currently on donepezil. English is not his first language. Needs help with finances, but does not need help with other IADLs/ADLs. MMSE 10/30.",
      "Shaggy was diagnosed with Alzhimer’s, currently on rivastigmine. MMSE 12/30, needs help with all IADLs and bathing.",
      "Velma was diagnosed with Parkinson’s disease. Needs help with her IADLs and some ADLs. MMSE 20/30.",
    ],
    correct: "Shaggy was diagnosed with Alzhimer’s, currently on rivastigmine. MMSE 12/30, needs help with all IADLs and bathing.",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the indication for mematime. First we need to understand the pharmacology of mematime. Mematime is a noncompetitive NMDA receptor antagonist. This means that it blocks the Glu mediated excitatory neurotransmission. It is thought that in AD, there is a pathological increase in tonic Glu release. This increases the background “noise” in neurotransmission. This then requires increased Glu/signal to activate downstream neurons. The increase in Glu leads to an excitotoxic effect on the nerves, resulting in more damage. Therefore, if the NMDA receptors are blocked, then there is a decrease in the background Glu noise, and less excitotoxic damage. This excitotoxic effect is not usually seen in early/mild AD, but is seen more in moderate-severe cases, hence it is used in patients with moderate/severe AD. Therefore, we need to select the patient that most likely has mod/severe AD, which would be Shaggy (D). His MMSE is low 12/30 and he has trouble with all of his IADLs and even an ADL, suggesting massive impact on his functioning. (A) appears to have mild AD for now given that her function is not severely impaired, with only needing help with finances and her MMSE is fairly intact 27/30. (B) not indicated for LBD (though could be used off-label). (C) Scooby has a very low MMSE and is currently on an AChEi, however he does not have features that suggest a severe AD. He does not need much help with his IADL/ADLs and his low MMSE score could be due to English not being his first language. (E) mematime not indicated for PD."
  },
  {
    id: 5,
    prompt:
      "During morning rounds a 72 y/o patient is disoriented to place or time and has trouble with attention. Her speech is incoherent when questioned. The nurse notes that the patient has been disruptive throughout the night with fluctuating behavioral changes from being withdrawn to agitated. The patient also complains about seeing her late mother in the room. The change in behavior started late last night. Given this presentation, you suspect an iatrogenic cause and look over the meds list. Which of the following medications would LEAST likely cause this?",
    choices: [
      "Amitriptyline",
      "Midazolam",
      "Morphine",
      "Pipercillin/Tazobactam",
      "Zopiclone",
    ],
    correct: "Pipercillin/Tazobactam",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: " This question requires understanding iatrogenic causes of delirium. In this vignette we are presented with a patient with delirium. We suspect delirium given the acute onset, disorientation, inattention, incoherent speech, fluctuating behavior (withdrawn ←→ agitated), possibly disrupted sleep-wake cycle, psychosis symptoms (visual hallucinations). Any drug that can cross the blood brain barrier has the potential to cause delirium. By crossing the BBB, a drug has the potential to interact with neurons and the multiple different receptors in the brain, which can lead to altered transmission and changes in mental status like delirium. Factors that make a drug more susceptible to crossing the blood brain barrier include high lipophilicity, low protein binding (free to cross membranes), and small molecular weight. From here the medication with the least propensity to cross the BBB is (D). Pip/Tazo has poor CNS penetration, hence it isn’t often used for CNS infection, so it would be the least likely medication to cause delirium (but still has the potential). (A) TCAs cross the BBB, and by blocking muscarinic receptors it can definitely cause sedation and delirium. (B) is a BZD, and these are known to cause delirium. (C) opioids are another class of drugs that are known to cause delirium. (E) is a Z-drug (non BZD hypnotic) and is also well known cause of delirium. The drugs besides (D) are all fairly lipophilic and their site of action is in the CNS, hence they have good BBB penetration to exert their therapeutic effect, but also their adverse effects."
  },
  {
    id: 6,
    prompt:
      "A 72 y/o patient in the ICU is experiencing an episode of acute delirium with hallucinations. She currently suffers from esophageal squamous cell carcinoma and is on TPN. Which of the following is the best possible pharmacological intervention?",
    choices: [
      "Atropine",
      "Cabergoline",
      "Haloperidol",
      "Lorazepam",
      "Quetiapine"
    ],
    correct: "Haloperidol",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the pharmacological therapy in delirium. In this vignette we are presented with a patient with acute delirium with psychosis symptoms (hallucinations). The drug of choice in treating delirium are antipsychotics, this leaves us with (C) and (E). Both of these can be used in delirium, however we need to consider the onset of action, which is influenced by the route of administration and patient factors. Here we have a patient with esophageal squamous cell carcinoma that is on total parenteral nutrition (TPN). Therefore, PO may not be the best option, also the onset of action with PO is a lot slower than something that can be given parenteral (IM/IV). (C) can be given via injection, while (E) is given PO. Therefore, (C) is the correct answer. Antipsychotics are dopamine 2 antagonists, with differing levels of blockade. APs with high D2 blockade, tend to cause less sedation, while APs with lower D2 blockade, cause more sedation. In this case haloperidol has strong D2 blockade, and causes less sedation. However, since it has high D2 blockade, it is good for positive symptoms of psychosis such as hallucinations, which our patient has. (E) we could consider giving this before sleep for its sedative qualities to calm the patient for sleeptime. (A) is a muscarinic antagonist, and would cause delirium more likely. (B) is a dopamine receptor agonist, which would have the opposite of our desired mechanism of blocking dopamine receptors. (D) is  BZD, a known cause of delirium."
  },
  {
    id: 7,
    prompt: "You are managing multiple patients with behavior and psychological symptoms of dementia (BPSD). Which of the following does NOT correctly match the major BPSD presentation to a possible pharmacological intervention?",
    choices: [
      "Agitation → Venlafaxine",
      "Auditory hallucinations → Risperidone",
      "Cognitive dysfunction → Rivastigmine",
      "Depression → Escitalopram",
      "Labile mood → Carbamazepine",
    ],
    correct:
      "Agitation → Venlafaxine",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management of BPSD. The correct answer (or incorrect match) is (A). Agitation is not treated with SNRIs. Agitation is usually treated with antipsychotics, potentially AChEi if mild/moderate or SSRIs are another option, but APs are first line (risperidone, aripiprazole, olanzapine, quetiapine). (B) is a psychosis symptom, so risperidone (approved by Health Canada) is a valid option. (C) Cognitive dysfunction can be treated with cognitive enhancers such as AChEis like rivastigmine. (D) depression treated with SSRIs. SNRIs can be used, but not often used. Mirtazapine is usually used to help with sleep. (E) labile mood can be treated with anticonvulsants such as carbamazepine or mood stabilizers (antidepressants as well). Note however that valproic acid should not be used as it could worsen dementia and also increase fall risk. Sleep problems can be addressed with melatonin, mirtazapine, trazodone, and lemborexant (orexin receptor antagonist, remember orexin is deficient in narcolepsy. This suggests that orexin promotes wakefulness, so blocking it should help increase sleep)."
  },
  {
    id: 8,
    prompt: "Which of the following correctly describes the mechanism of action of “Z”-drugs (zolpidem, zopiclone, Zaleplon)?",
    choices: [
      "Binds to the benzodiazepine site on GABA-A receptors, thereby modulating the channel to increase frequency of opening and is INDEPENDENT of endogenous GABA",
      "Binds to the benzodiazepine site on GABA-A receptors, thereby modulating the channel to increase frequency of opening but is DEPENDENT on endogenous GABA binding",
      "Binds to the GABA-A receptor pore and stabilizes the inactive state, which keeps the channel open INDEPENDENT of endogenous GABA",
      "Binds to the GABA-A receptor pore and stabilizes the inactive state, which keeps the channel open, but is DEPENDENT on endogenous GABA binding",
      "Binds to the site where GABA binds to activate the GABA-A receptor channels, thereby opening the channels INDEPENDENT of endogenous GABA",
    ],
    correct: "Binds to the benzodiazepine site on GABA-A receptors, thereby modulating the channel to increase frequency of opening but is DEPENDENT on endogenous GABA binding",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacodynamics of hypnotics. THe correct answer is (B). Z-drugs are also called non-benzodiazepines because they are structurally different from BZDs, but they have the same mechanism of action and bind to the same region on the GABA-A receptor. Z drugs and BZDs work by binding to the BZD binding site on the GABA Cl- channels. By binding to this area it enhances the activity of GABA by increasing the affinity of the GABA to channel binding. This increases the frequency of channel opening. However, this is entirely dependent on endogenous GABA. So, for BZD to open the GABA channel, it requires GABA. (E) describes the mechanism of barbiturates.  Barbs bind to the channel pore and open the channel even in the absence of GABA. This leads to barbs keeping the channel open for a longer time. Both Z-drugs, BZDs and Barbs lead to the same effect, which is the influx of Cl- into the neuron leading to hyperpolarization, and ultimately inhibition. (See MEDD412 Head injury for an explanation on the ceiling effect and antidote). Both Z-drugs and BZD overdose can be treated with flumazenil, which is a BZD antagonist, where it binds to the BZD site on GABA-A receptors."
  },
  {
    id: 9,
    prompt:
      "Which of the following is FALSE regarding hypnotics?",
    choices: [
      "Ideally PRN dosing",
      "Increased risk of anterograde amnesia, but not with falls when taking hypnotics",
      "Increased use, increases the risk of tolerance and abuse",
      "Patients should not be taking hypnotics for more than 7-10 days straight",
    ],
    correct: "Increased risk of anterograde amnesia, but not with falls when taking hypnotics",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the pharmacology of hypnotics. The FALSE statement is (B). Hypnotics increase the risk of anterograde amnesia and falls. THis makes sense because if you increase sedation, you are more likely to lose your balance and fall over. Hypnotics like BZD and Z-drugs causing anterograde amnesia is why it is used in anesthesia (midazolam) during induction to minimize the chance of the patient remembering any traumatic event during surgery. (A) is true, ideally PRN because continued regular use increases the risk of tolerance and abuse (C). And ideally, don’t use this for 7-10 days straight. There should be lots of caution and patient education when prescribing hypnotics to patients."
  },
  {
    id: 10,
    prompt:
      "A 56 y/o patient with insomnia presents to the sleep clinic. During the history, he remarks that he usually has trouble falling asleep and he tends to wake up throughout the night. Conservative management has not been effective and he does not want to go to CBTi because it isn’t covered by his insurance. Using your pharmacokinetic knowledge, which of the following characteristics for a hypnotic would be the most useful in this case?",
    choices: [
      "Fast onset, short half-life",
      "Fast onset, long half-life",
      "Slow onset, short half-life",
      "Slow onset, long half-life",
      "Hypnotics are not indicated for insomnia."
    ],
    correct: "Fast onset, long half-life",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding pharmacokinetics and its implications clinically. In this vignette we are presented with a case of insomnia given the history. The patient’s insomnia manifests as trouble falling asleep and then waking up early/throughout the night. The pharmacological approach should address these two problems. Trouble falling asleep suggests using a drug with a fast onset, so that when he takes the hypnotic he will quickly feel the effects and be able to fall asleep. However, we don’t want to give him a hypnotic with a short half life as it may not last long enough to get him through the night and provide sustained sleep. Therefore, we would want a hypnotic with a long half-life to help sustain his sleep. Hence, (B) is the correct PK parameters in the hypnotic of choice. This question is meant to illustrate that insomnia can present differently, and the choice of hypnotic may change given each clinical presentation. For example,you might use (A) in someone who has trouble falling asleep and that’s it. This would help them fall asleep, but also minimize the hypnotic plasma concentration when he wakes the next day as the short half-life suggests faster clearance of the hypnotic, thereby minimizing unwanted side effects."
  },
  {
    id: 11,
    prompt:
      "A 56 y/o patient was recently diagnosed with Parkinson’s disease. His wife remarks that during the middle of the night he acts out his dreams and screams. This has been causing her great distress and impacting her sleep. Both of them want to know if there are any medications that can be used to help treat this issue. He is currently on levo-dopa. Which of the following medications could be used to treat the issue that they brought up?",
    choices: [
      "Clonazepam",
      "Fluoxetine",
      "Mirtazapine",
      "Venlafaxine",
      "Stop levo-dopa, this medication can worsen this presentation"
    ],
    correct: "Clonazepam",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the pharmacological treatment for REM behavior disorder (RBD). In this vignette we are presented with a patient with RBD given the history of PD and acting out his dreams. The correct choice is (A) clonazepam. Clonazepam is a BZD and has been shown to be effective in treating RBD. By enhancing the activity of GABA, there is a net increase in inhibition that will help reduce the abnormal muscle movements that occur in RBD. It should be noted that BZDs also reduce REM sleep, but this may have negative effects on cognition. Another medication you could use is melatonin. (E) is wrong, you do NOT want to stop levo-dopa in this case. Levo-dopa is essential for PD treatment and could reduce RBD. You would switch levo-dopa for another dopamine agonist if levo-dopa is intolerable. (B) SSRIs and (D) have been shown to actually worsen RBD, the mechanism behind this is still unclear (possibly increased 5-HT leads to increased muscle tone, or changes in 5-HT levels leads to some unknown change leading to worsening RBD). (C) has also been implicated with worsening RBD. It should be noted that bupropion (NDRI) has not been shown to worsen RBD."
  },
  {
    id: 12,
    prompt:
      "Eigen is a 20 y/o patient presenting to the sleep clinic with excessive daytime sleepiness for the past 6 mos. He recalls randomly falling asleep during his linear algebra class despite it being his favorite subject. He recalls the other day when his friends threw a surprise party for him, he felt all of his strength leave him and buckled to the floor. Given this presentation, which of the following medications could be useful in treating his cataplexy?",
    choices: [
      "Modafinil",
      "Venlafaxine",
      "Sodium oxybate",
      "B and C",
      "All of the above"
    ],
    correct: "B and C",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management for narcolepsy with cataplexy. In this vignette we are presented with a patient with narcolepsy given the history of excessive daytime sleepiness for the past 6 mo  and randomly falling asleep. He has cataplexy given the second part where he felt entire body weakness and buckled to the floor. He most likely has narcolepsy  type 1. The treatment for daytime sleepiness is (A) modafinil. The mechanism is unclear, but is thought to be due to the dopamine reuptake inhibitor and histamine agonist (remember histamine antagonists cause sedation, as histaminergic neurons do play a role in wakefulness). Other medications include methylphenidate, a stimulant that increases D and NE. However, it does not address cataplexy. Cataplexy can be addressed by both (B) and (C), hence (D) is the correct answer. (B) is a SNRI and it is unclear how it addresses cataplexy. Sodium oxybate is thought to reduce dopamine release and act as a GABA-B agonist (slow inhibitory signal, GABA-A is the fast inhibitory signal). Sodium oxybate (Na - GHB) is the active metabolite of GABA. It helps treat daytime sleepiness and cataplexy. Overall the mechanisms are unclear (like many things in neuropharmacology) and you probably do not need to know them."
  },
  {
    id: 13,
    prompt:
      "Xander is a 40-year old man who presents with 8 months of decreasing ability to perform instrumental activities of daily living. He is accompanied to the appointment with his mother, who describes that he has had recent episodes of being unable to remember personal events, which he had not struggled with previously. This is his second visit to the clinic within the past 2 months. You take a detailed history and perform a thorough physical exam with your preceptor. You note that the patient has a single palmar crease on his right hand. Your preceptor prescribes galantamine, a drug that inhibits the breakdown of acetylcholine at synaptic junctions. This drug is treating which of the following conditions in Xander?",
    choices: [
      "Alzheimer disease",
      "Down syndrome",
      "Frontotemporal dementia",
      "Parkinson disease",
      "Lewy-body dementia"
    ],
    correct: "Alzheimer disease",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question assesses understanding of anticholinesterase medications and their use in the treatment of Alzheimer disease. In this vignette, Xander presents with symptoms suspicious for early-onset dementia. One clue that points towards this diagnosis is the likelihood that Xander has Down syndrome, which should be considered given his relatively young age and the presence of a single palmar crease. This is confirmed through the preceptor’s prescription of galantamine, an acetylcholinesterase inhibitor used in the treatment of Alzheimer disease. In Alzheimer disease, amyloid beta accumulates to form neuritic plaques within the brain. Since amyloid precursor protein (APP) is encoded on chromosome 21, patients with Down syndrome are at an increased risk of developing early-onset Alzheimer disease. Since the cholinergic Nucleus basalis of Meynert is atrophic in Alzheimer disease, one way of modulating brain function would be to increase CNS acetylcholine levels. Since acetylcholinesterases break down acetylcholine in the synapse, acetylcholinesterase inhibitors such as galantamine would improve symptoms. As such, the correct answer is (A). While the patient does have Down syndrome (B), it is a neurodevelopmental disorder, not neurodegenerative like Alzheimer disease, and would not improve with the use of acetylcholinesterase inhibitors. The vignette does not provide any signs of frontotemporal dementia such as behavioral or aphasia symptoms (C). Xander does not present with any rigidity, tremor, or bradykinesia that would suggest Parkinson disease (D). Xander does not have any visual hallucinations, features of Parkinson disease, or REM sleep disorders (E). (WW Q)"
  },
  {
    id: 14,
    prompt:
      "Charles is a 69-year old woman who presents with progressively worsening vision in her right eye over the past 18 months, but more notable recently. She is a smoker with a 50 pack-year history who enjoys birdwatching. Your ophthalmology preceptor gives you an ophthalmoscope and asks you to perform a fundoscopy. You are unsure of what you see, but you think that Charles’ fundoscopy looks abnormal. Your preceptor recommends treatment with bevacizumab, which you know is a VEGF inhibitor. What condition does Charles most likely have?",
    choices: [
      "Dry age-related macular degeneration",
      "Wet age-related macular degeneration",
      "Acute angle closure glaucoma",
      "Open angle glaucoma",
    ],
    correct: "Wet age-related macular degeneration",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question assesses understanding of the treatment for age-related macular degeneration. In age-related macular degeneration (ARMD), the dry form (A) rarely leads to visual impairment. In wet ARMD, a choroidal neovascular membrane forms, leading to vision loss. New pathologic blood vessel formation is driven by vascular endothelial growth factor (VEGF). Since bevacizumab inhibits VEGF, it is used as a treatment for wet ARMD, making the answer (B). Glaucoma is not treated with VEGF inhibitors, but rather with medications such as prostaglandin analogs or procedures such as laser trabeculoplasty. (WW Q)"
  },
];
