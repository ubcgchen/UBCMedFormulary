export const depression = [
  {
    id: 1,
    prompt:
      "Which of the following first line anxiety drugs is NOT matched correctly to their mechanism of action?",
    choices: [
      "Agomelatine - Melatonin receptor agonist",
      "Escitalopram - SSRI ",
      "Pregabalin - GABA receptor agonist",
      "Venlafaxine - SNRI ",
    ],
    correct: "Pregabalin - GABA receptor agonist",
    tags: ["PD", "easy", "Psych", "MoA"],
    explain: "This question requires understanding the mechanisms of medications used in GAD. The only drug that is not correctly matched to its MoA is pregabalin (C). Despite its name and its structure being a GABA analogue, it does NOT bind to GABA receptors (though it does induce GABA production). Pregablin blocks voltage gated calcium channels, thus decreasing neuronal firing. Decreasing neuronal activity is thought to help with anxiety, seizures, and neuropathic pain. Think of it as less neuronal firing, less thinking, then less worries. Or less neuronal firing, less brain activity, then less likely for overactivity leading to seizures. Or less neuronal firing, less pain fiber activity, then less pain. Remember the voltage gated calcium channels are found at axon terminals, and it is the influx of calcium that causes the synaptic vesicles to release the neurotransmitter contents into the synapse to activate the downstream neuron. (A) Agomelatine works on melatonin receptors, you can remember because of “Melatine” sounds like melatonin. (B) escitalopram “-pram” suffix is almost always a SSRI like citalopram. (D) “-faxine” is a common SNRI suffix such as desvenlafaxine (which is a longer acting version of venlafaxine), another one is “-pran” like milnacipran, and duloxetine, which can be mistaken for a SSRI given its suffix but remember “dulo” sounds like duo → 2 different neurotransmitter reuptake are blocked: 5-HT and NE.",
  },
  {
    id: 2,
    prompt:
      "George, a 24 y/o patient, presents to the ER with agitated delirium, disorientated, diaphoresis, and vomiting. His vitals show elevated blood pressure, heart rate, and temperature (38.2\u2070 C). Exam shows increased bowel sounds, tremor, myoclonus, hyperreflexia, and positive Babinski bilaterally. His medical history includes a recent MDD diagnosis managed with paroxetine. His tox screen comes back positive for MDMA (ecstasy). Which of the following conditions is George most likely presenting with?",
    choices: [
      "Antidepressant discontinuation syndrome",
      "Hypertensive crisis",
      "Malignant hyperthermia",
      "Neuroleptic malignant syndrome",
      "Serotonin syndrome",
    ],
    correct: "Serotonin syndrome",
    tags: ["PD", "medium", "side effects", "Psych"],
    explain: "This question requires understanding a potential rare, but serious adverse effect of SSRIs. In this vignette we are presented with a suspected (E) given the clinical presentation and history of SSRI use and MDMA use. Both SSRIs and MDMA will increase levels of 5-HT in the body. SSRI blocks the reuptake of 5-HT, while MDMA does the same thing, but also can reverse these transporters. On top of that MDMA also blocks VMAT, which transports monoamines like 5-HT into the vesicles for release. This leads to increased cytosolic 5-HT, which can then leave the axon via the reversed transporters, thus further increasing 5-HT levels. The presentation here is congruent with serotonin syndrome, which can presented with altered mental status (delirium, agitation,e tc…), ANS dysfunction (hyperthermia, tachycardia, diaphoresis, hypertension, mydriasis, nausea/vomiting, diarrhea - a very SNS like picture), neuromuscular abnormalities (hyperreflexia, myoclonus, tremor, rigidity, akathisia), which can all lead to serious complications like death, seizures, rhabdo, AKI, metabolic acidosis, resp failure. The mechanism behind the presentation is not fully understood, but in general there are lots of different 5-HT receptor subtypes all over the body that help regulate many different physiological processes (some that may be antagonistic to each other), thus overstimulation of these receptors will cause a large reaction. Serotonin syndrome can be mistaken for a similar movement disorder, (D) NMS, that is common with neuroleptics (e.g. antipsychotics) use (you will learn more about this in Parksin’s week in MEDD421). However, there are features that differentiate NMS from SS are that myoclonus is usually seen in SS but not NMS, hyperactive bowel sounds in SS, SS typically has an acute onset, while NMS may take days to weeks. (A) typically occurs with sudden cessation of SSRI and usually has a flu-like presentation, and does not have the same degree of neuromuscular abnormalities (or severity) like SS. (B) hypertensive crises do not usually present like this. (C) is actually a type of NMS that is differentiated by clinical context specifically to the use of succinylcholine or halogenated inhaled anesthetics in anesthesia. SS is very rare and typically only occurs in situations where drugs synergistically increase 5-HT levels such as combining SSRIs with MDMA, or SSRIs with MAOi (inhibit degradation of 5-HT), opioids can also increase 5-HT levels. In rare situations a single serotonergic agent can precipitate SS.",
  },
  {
    id: 3,
    prompt:
      "Jorge, a 24 y/o patient, presents to the clinic with flu-like symptoms (lethargy, headache), insomnia, nausea, dizziness, tingling sensation, and increased anxiety and irritability. His past medical history includes MDD managed with medication. He recalls that his mood has been pretty good before the aforementioned symptoms started, so he “slowly” stopped his medication. Given the approximate half-lives, which of the following drugs was Jorge MOST likely on?",
    choices: [
      "Amitriptyline (~25 hrs)",
      "Fluoxetine (~4 days)",
      "Paroxetine (~21 hrs)",
      "Venlafaxine (~3-7 hrs)",
      "Vortioxetine (~66 hrs)",
    ],
    correct: "Venlafaxine (~3-7 hrs)",
    tags: ["PD", "PK", "medium", "MoA", "Psych", "side effects"],
    explain: "This question requires understanding antidepressant discontinuation syndrome (ADDS) and the relationship between half-life and withdrawal. In this vignette we are presented with a patient with suspected antidepressant withdrawal syndrome given the history of MDD that was managed with medication and the fact that he stopped the medication, and the clinical presentation of flu-like symptoms, insomnia, nausea, dizziness, tingling sensation, and anxiety, irritability. FINISH is a mnemonic used to describe the signs: Flu-like symptoms, Insomnia, Nausea, Imbalance (serious nightmares), Sensory disturbances, and Hyperarousal. The medication that would most likely predispose a patient to ADDS is the one with the shortest half life, which is (D), the correct answer. This is because once a drug with a short half life is stopped, the level of drug in the body will drop much faster than those with longer half lives. This quick drop in drug level will give the body less time to adjust the sudden change in physiology. Drugs with longer half lives give the body more time to adapt to the new change, thus acting like a “taper”. You can think of this like how any sudden change can cause a huge shock and precipitate a reaction, while a change that slowly occurs may not be noticed at all. Antipdepresants like SSRIs block the reuptake of 5-HT, and if taken for a long time would have caused the body to adapt to the increased 5-HT and alter neurotransmitters levels, but sudden withdrawal of this will unbalance the neurotransmitter levels, thus causing a the CNS like reaction of agitation and anxiety, while the other physiological changes could be due to the sudden removal of SSRIs from the periphery. It should be noted that all of these have the potential to cause ADDS, it's just that shorter half-life → more likely to cause it.",
  },
  {
    id: 4,
    prompt:
      "Sam, a 24 y/o patient, presents to the ER with an extremely elevated blood pressure of 200/140 mmHg. At the time of presentation no focal neurological deficits, signs of increased intracranial pressure, or end organ damage are noted. His medical history includes MDD managed with medication. During the history, Sam says he went to a wine and cheese event earlier that day with his girlfriend and had lots of wine and cheese. Which of the following medications is Sam most likely on?",
    choices: [
      "Bupropion",
      "Citalopram",
      "Mirtazapine",
      "Phenelzine",
      "Venlafaxine",
    ],
    correct: "Phenelzine",
    tags: ["PK", "PD", "medium", "MoA", "Psych", "side effects"],
    explain: "This question requires understanding an iatrogenic  cause of hypertensive crisis in this case, MAOi use. In this vignette we are presented with a patient with extremely elevated BP without signs of end organ damage or neurological deficits. This is suggestive of a hypertensive crisis. Given this we are told in history that he had lots of wine and cheese and is on a drug for MDD. In this case the most likely drug to cause this is (D). Phenelzine is a nonselective (both A and B) irreversible monoamine oxidase inhibitor (MAOi), which works by inhibiting the breakdown of monoamines such as 5-HT and NE (as well as E, dopamine), thus you can see that through this mechanism it can alter monoamine levels. Thus, if a patient takes anything that can increase NE or other monoamines, there is  risk of a hypertensive crisis. In this case, the culprit is the wine and cheese event. Wine, cheeses, cured meats, etc.. are high in tyramine. Tyramine is a substance that is metabolized by MAO-A, that displaces NE, dopamine, E from their presynaptic axon terminals. For example this can then cause a massive surge in NE levels, which would correspond to a SNS response such as an increased vasoconstriction resulting in a hypertensive crisis. Tyramine can be considered an indirect adrenergic agonist in this case. This is why MAOi are are seldomly used due to these interactions with diet and also with other medications. MAOi increases the risk of serotonin syndrome since they inhibit the breakdown of 5-HT, so a combination of MAOi and anything that increases 5-HT has potential for serious consequences.",
  },
  {
    id: 5,
    prompt:
      "Which of the following drugs is NOT considered 1st line for major depressive disorder?",
    choices: [
      "Bupropion",
      "Clomipramine",
      "Mirtazapine",
      "Sertraline",
      "Vortioxetine",
    ],
    correct: "Clomipramine",
    tags: ["PD", "medium", "MoA", "Psych"],
    explain: "This question requires understanding MDD pharmacological management. The drug that is NOT considered 1st line here is (B). Clomipramine is a TCA, hence is not considered 1st line. This is because TCAs have an unfavorable side effect profile due to its off target blocking of muscarinic receptors (anticholinergic side effects: dry mouth, constipation, urinary retention, bowel obstruction, dilated pupils, blurred vision, increased heart rate, and decreased sweating, basically anything that blocks PSNS or ACh receptors) and cardiotoxicity. TCAs have off target blocking of fast Na+ channels, this will lead to QRS widening, and also block K+ channels, which will prolong QT, together this increases risk of lethal arrhythmias (MEDD422 shock week topic). (A) bupropion is an NDRI and is thought to be useful in patients with low energy, low motivation, increased appetite, hypersomnia, comorbid ADHD (also smoking cessation). (C) mirtazapine is an alpha2 adrenergic and 5-HT2 antagonist (NaSSA) and is thought to be useful in patients with insomnia and poor appetite. (D) sertraline is a SSRI thought to be useful in patients with anxiety/agitation. (E) vortioxetine is a multimodal drug that blocks 5-HT reuptake and modulates different 5-HT receptors and is thought to be useful in patients with pronounced cognitive symptoms. Other drug mechanisms considered first line are SNRIs, which are thought to be useful in patients with low energy, comorbid pain (duloxetine), flat affect, anxiety, and menopausal vasomotor symptoms. Other second line drugs include MAO-A inhibitors, atypical antipsychotics, trazodone (SRI + 5HT2 antagonist), and more.",
  },
  {
    id: 6,
    prompt: "Which of the following drugs are considered SNRIs?",
    choices: [
      "Citalopram",
      "Duloxetine",
      "Fluoxetine",
      "Sertraline",
      "Venlafaxine",
      "B and E",
    ],
    correct: "B and E",
    tags: ["PD", "medium", "MoA", "Psych"],
    explain: "This question requires recognizing SNRIs. The correct answer is (F). Both duloxetine and venlafaxine are SNRIs. “-faxine” is a common SNRI suffix such as desvenlafaxine (which is a longer acting version of venlafaxine), another one is “-pran” like milnacipran, and duloxetine, which can be mistaken for a SSRI given its suffix but remember “dulo” sounds like duo → 2 different neurotransmitter reuptake are blocked: 5-HT and NE. The rest are SSRIs: “-pram”, “-xetine” (except for duloxetine; so this includes fluoxetine, paroxetine, etc..), “-line” (sertraline), “-zodone” (ex. trazodone)",
  },
  {
    id: 7,
    prompt:
      "Which of the following drugs has the following mechanism of action: SSRI and 5-HT receptor modulator?",
    choices: [
      "Duloxetine",
      "Desvenlafaxine",
      "Quetiapine",
      "Trazodone",
      "Vortioxetine",
    ],
    correct: "Vortioxetine",
    tags: ["PD", "medium", "MoA", "Psych"],
    explain: "This question requires understanding the MoA of drugs used in MDD and GAD. The drug with the MoA: SSRI and 5-HT receptor modulator is (E). Vortioxetine is thought to be particularly useful in patients that also present with pronounced cognitive symptoms. It was found that clinical effects of vortioxetine were apparent at 50% SERT (reuptake transporter) occupancy, whereas other typical antidepressants required upwards of 70-80% occupancy. This suggests that the receptor modulation and interactions with other 5-HT receptors also play a role in treating MDD.",
  },
  {
    id: 8,
    prompt:
      "Which of the following drugs is NOT matched correctly with its mechanism?",
    choices: [
      "Fluvoxamine (NDRI)",
      "Levomilnacipran (SNRI)",
      "Mirtazapine (α2 adrenergic + 5HT2 antagonist)",
      "Moclobemide (reversible MAO-A inhibitor)",
      "Vilazodone (SRI + 5-HT1A partial agonist)",
    ],
    correct: "Fluvoxamine (NDRI)",
    tags: ["PD", "medium", "Pysch", "MoA"],
    explain: "This question requires understanding MoA of drugs used in MDD and GAD. The drug NOT correctly matched to its MoA is (A). Fluvoxamine is a SSRI that does not have the suffixes that were described in a previous explanation (think of this as an exception to remember, if you choose to remember the different SSRIs). (B) is considered a 2nd line SNRI. (C) is considered a 1st line agent. (D) is considered a 2nd line agent that works by inhibiting the breakdown of 5-HT. (E) is also considered 2nd line, it is somewhat similar to trazodone, except that trazodone is a SRI+5HT2 antagonist that is thought to be useful at lower doses for sleep.",
  },
  {
    id: 9,
    prompt:
      "A 30 y/o patient presents to the clinic with agitation, diarrhea, decreased libido, and erectile dysfunction. He was recently started on an antidepressant for MDD. His vitals are normal, no tremor is noted on the exam, and he doesn’t recall any weight loss. Which of the following drug’s side effect profile is he most likely presenting?",
    choices: [
      "Amitriptyline",
      "Bupropion",
      "Duloxetine",
      "Escitalopram",
      "Venlafaxine",
    ],
    correct: "Escitalopram",
    tags: ["PD", "medium", "MoA", "side effects", "Psych"],
    explain: "This question requires understanding the side effect profile of antidepressants. In this vignette we are presented with a patient with agitation, diarrhea, and sexual dysfunction. He is most likely on (D), a SSRI. His side effect profile is more congruent with SSRIs, which are due to overstimulation of gut 5-HT receptors (diarrhea) and central + spinal 5-HT receptors (sexual dysfunction and agitation). (C) and (E) are both SNRIs, which have similar side effect profiles to SSRIs, but in addition to those side effects, they can also present with an “SNS-like” picture given the increase NE due to decreased reuptake, which can include high BP, sweating, weight loss, and insomnia, which our patient does not complain of. (B) is a NDRI and we would expect a side effect profile that is more inline with increased NE or SNS-like given its MoA. (A) is a TCA so we would expect an anticholinergic side effect profile, so something that is blocking the PSNS, which can be remembered with this: red as a beet, dry as a bone, blind as a bat, mad as a hatter, hot as a hare, full as a flask. → flushing, dry mucosal membranes, loss of accommodation + mydriasis, agitation/delirium, hyperthermia/anhidrosis, urinary retention. TCAs also block a lot of other receptors such as alpha. It should be noted that in this case, it could still very well be a SNRI behind his side effects. Just because he doesn’t present with some of the expected side effects does not rule out him being on a SNRI.",
  },
  {
    id: 10,
    prompt:
      "A 30 y/o patient recently diagnosed with major depressive disorder complicated with anxiety and agitation returns to the clinic after starting on citalopram. She started 1.5 weeks ago and does not think the medication is working at all. The half-life of citalopram is 35 hrs. Is there any reason to change her medication?",
    choices: [
      "Yes, it has been more than 5 half-lives and no positive change has occurred, citalopram is not effective",
      "Yes, the effects of a SSRI on brain biochemistry is near instantaneous and no positive change has occurred, citalopram is not effective",
      "No, it has been less than ~4 weeks, so neuroplastic changes have yet to occur, citalopram could still be effective",
      "No, it has been less than 6 months, so neuroplastic changes have yet to occur, citalopram could still be effective",
    ],
    correct:
      "No, it has been less than ~4 weeks, so neuroplastic changes have yet to occur, citalopram could still be effective",
    tags: ["PD", "medium", "Psych", "MoA", "side effects"],
    explain: "This question requires understanding the clinical effect of SSRIs. In this vignette we are presented with a patient with MDD + anxiety and is then appropriately started on a SSRI, citalopram. It's been 1.5 wks and she feels that it does not work. In this case, a change in medication is not yet warranted, therefore (C) is the correct answer. This is because SSRIs take a few weeks to have any effect. The main effects from SSRI usage are due to the neuroplastic changes that occur such as 5-HT receptor regulation and other gene expression. This also highlights the complexity of the pathophysiology behind depression as it isn’t just about instant increases in 5-HT levels as the mechanism of SSRIs would initially suggest. (D) is not true, but taking an antidepressant for at least 6 mos is thought to be an effective strategy to prevent relapse. (A) Although ~5 half lives have passed, the effect of SSRIs is not entirely dependent on reaching a steady state plasma concentration, but rather the neuroplastic changes that occur. (B) again not true.",
  },
  {
    id: 11,
    prompt:
      "Which of the following INCORRECTLY explains the side effect profile of nortriptyline?",
    choices: [
      "α1 adrenergic receptor antagonist - orthostatic hypotension, reflex tachycardia",
      "NE reuptake blockade - diarrhea, anhidrosis",
      "H1 receptor antagonist - sedation, weight gain",
      "Muscarinic acetylcholine receptor antagonist - dry mouth, blurred vision, constipation, urinary retention",
      "Na channel blocker - widened QRS",
    ],
    correct: "NE reuptake blockade - diarrhea, anhidrosis",
    tags: ["PD", "medium", "Psych", "MoA", "side effects"],
    explain: "This question requires understanding the side effect profile of TCAs. In this case the choice that incorrectly describes the side effect profile is (B). All of the listed choices include a MoA that TCAs have, but the blocking of NE reuptake does not cause diarrhea or anhidrosis. This is because blocking of NE reuptake, should increase the levels of NE, thus we’d expect more of a SNS effect, which would not be anhidrosis or diarrhea, remember SNS “opposes” the rest and digest of the PSNS, so would more likely cause constipation, and sweating is a SNS response (though it is mediated by ACh receptors), the anhidrosis seen in TCAs is due to blocking of muscarinic ACh receptors, not due to NE reuptake inhibition. TCAs are associated more with constipation. Interestingly, although TCAs block 5-HT reuptake as well, diarrhea isn’t as common as SSRIs. (A) accurately describes the effects of blocking alpha receptors. (C) accurately describes the effects of blocking histamine receptors. (D) as well. And (E) as well, these are the Na channels in the heart. TCAs can also block the K channels in the heart, which results in QT prolongation, and an increased risk of TdP (you will learn what this in shock week, but it is a ventricular tachycardia associated with long QT).",
  },
  {
    id: 12,
    prompt:
      "A 32 y/o patient presents with a 2 week history of increased goal-directed energy, decreased sleep, distractibility, and irritability. Her friends describe her talking nonstop from ideas to ideas, which makes it difficult to follow what she is trying to get at. She isn’t on any SSRIs or stimulants. She is subsequently hospitalized. Which of the following medications is NOT used in this case?",
    choices: [
      "Aripiprazole",
      "Lamotrigine",
      "Lithium",
      "Risperidone",
      "Sodium valproate",
    ],
    correct: "Lamotrigine",
    tags: ["PD", "medium", "Psych", "MoA"],
    explain: "This question requires understanding the treatment of bipolar disorder. In this vignette we are presented with a patient with suspected bipolar disorder, specifically bipolar 1 disorder. We suspect this given the ≥1 week duration of increased goal-directed activity/energy  and irritable mood that also presents with associated symptoms (≥3) such as decreased sleep, distractibility, flight of ideas. This matches the criteria for a manic episode, and given that she was hospitalized, this suggests bipolar I disorder, rather than bipolar II (hypomanic; usually shorter, and does not require hospitalization, or psychosis, or caused a marked impairment). In this case the only medication here that is NOT used for bipolar I disorder is (B) lamotrigine. Lamotrigine is an anticonvulsant  that is considered a part of the first-line options for mood stabilization in bipolar II disorder. The rest of the medications are used in acute mania for bipolar I disorder. (A) is an atypical antipsychotic (AAP) used in bipolar I (some other ex: quetiapine, risperidone). (C) is the classical mood stabilizer medication in bipolar. (D) is an AAP, (E) is an anticonvulsant used as a mood stabilizer. Both (C) and (E) are also used as mood stabilizers in bipolar II. Typically, quetiapine is used as an AAP in bipolar II. The mechanism of lithium is not fully understood, but like many of the mood related drugs, it is thought to play a role in neurotransmitter levels such as 5-HT and NE in the brain.",
  },
  {
    id: 13,
    prompt:
      "A 53 y/o patient with MDD presents to the clinic after 6 weeks on sertraline. She feels that her mood hasn’t improved much. She still feels low energy, anxiety, having trouble expressing her emotions, and has been having hot flashes. She has never felt that her cognitive ability has changed, doesn’t have trouble sleeping, or any changes in appetite. Which of the following medications would you switch her on to?",
    choices: [
      "Bupropion",
      "Citalopram",
      "Duloxetine",
      "Mirtazapine",
      "Vortioxetine",
    ],
    correct: "Duloxetine",
    tags: ["PD", "medium", "Psych", "MoA"],
    explain: "This question requires understanding the management of a patient with MDD given a symptom profile. In this vignette we are presented with a patient who is presumably undergoing perimenopause/menopause given the age and hot flashes. She has MDD, but has not improved on sertraline after 6 weeks, and still has the initial symptom profile prior to SSRI treatment. In this case, we should consider switching her to (C). Duloxetine is a SNRI, which are generally effective for symptom profiles that include low energy, flat affect, anxiety, and menopausal vasomotor symptoms (as well as comorbid pain). In general SSRIs like the one she is on and (B) are good for anxiety/agitation. (A) is a NDRI and is generally good for low energy, motivation, increased appetite, hypersomnia, and comorbid ADHD, which does not address her symptom profile as comprehensively as SNRIs. (D) is a α2 and 5HT antagonist that is generally thought to be good for insomnia and poor appetite, which she does not complain of. (E) works on 5-HT transporter and receptors, and is generally used for those with cognitive symptoms. However, these are not hard set rules, all of these antidepressant medications and its usages require clinical experience and gestalt, and patient centered care, so that the patient can make their own informed decisions regarding their care.",
  },
];
