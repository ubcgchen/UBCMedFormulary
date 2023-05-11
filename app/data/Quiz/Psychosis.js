/**
 * Questions for Psychosis
 * @author Michael Gong, UBC VFMP 2025
 */

export const Psychosis = [
  {
    id: 1,
    prompt:
      "Which of the following does NOT correctly match the antipsychotic to its generation?",
    choices: [
      "Aripiprazole - third generation",
      "Clozapine - third generation",
      "Haloperidol - first generation",
      "Quetiapine - second generation",
      "Risperidone - second generation",
    ],
    correct: "Clozapine - third generation",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the different generations of antipsychotics (APs). The incorrectly matched choice (aka the correct answer) is: (B). Clozapine is a second generation AP. Different AP generations differ by their pharmacodynamic properties. In general, 1st generation APs (or “Typical APs”) are primarily D2 antagonists. 2nd generation APs are primarily D2 AND 5-HT2A antagonists (some 2GA also are partial agonists for 5-HT1A). 3rd generation APs are primarily D2, D3, and 5-HT1A partial agonists + 5-HT2A antagonists. Almost all APs regardless of generation are off-target antagonists at M1, H1 and α1 receptors. The pharmacodynamic and the effects are explained in the other questions. Some examples of 1st gen: haloperidol, loxapine, chlorpromazine; 2nd gen: clozapine, olanzapine, quetiapine, risperidone, ziprasidone; 3rd gen: aripiprazole, brexpiprazole, cariprazine."
  },
  {
    id: 2,
    prompt:
      "Which of the following correctly describes the pharmacodynamics of antipsychotics (1st gen and 2nd gen) in the treatment of schizophrenia?",
    choices: [
      "Blocking mesolimbic D1 receptors is useful in treating positive symptoms",
      "Blocking mesocortical and mesolimbic D1 receptors is useful in treating negative symptoms",
      "Blocking mesolimbic D2 receptors is useful in treating positive symptoms",
      "Blocking mesolimbic and mesocortical D2 receptors is useful in treating negative symptoms",
      "A and B",
      "C and D",
    ],
    correct:
      "Blocking mesolimbic D2 receptors is useful in treating positive symptoms",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacodynamics of APs. The correct answer is (C). The main mechanism behind treating positive symptoms of psychosis (hallucinations, delusions, etc…) is blocking D2 receptors in the mesolimbic pathway. It is thought that positive symptoms of schizophrenia are due to elevated dopamine in the mesolimbic pathway. All APs lower dopamine transmission in the mesolimbic pathway. Both 1st and 2nd generation are D2 antagonists, while 3rd generation APs act as partial agonists, which will provide lower dopamine transmission compared to endogenous dopamine (partial activation of D2 receptor). On the contrary, lower dopamine levels in the mesocortical pathway is thought to contribute to the negative symptoms of schizophrenia (blunted affect, avolition, anhedonia, abulia, etc…), hence blocking D2 receptors in the mesocortical pathway would NOT be helpful in treating the negative symptoms (hence (D) is wrong). This is why 1st generation APs generally only treat positive symptoms as they only block D2 receptors. On the other hand 2nd generation APs are thought to help with negative symptoms because they have an additional action of blocking 5-HT2A receptors. Normally 5-HT2A activation in the mesocortical and nigrostriatal pathway will inhibit the release of dopamine from dopaminergic neurons. Hence, blocking 5-HT2A will alleviate this inhibition, which results in dopamine release to help treat the negative symptoms (mesocortical) and also reduce extrapyramidal side effects (nigrostriatal). Some 2nd gen APs have partial agonist activity towards 5-HT1A, which is also thought to help with negative symptoms. 3rd generation APs are partial agonists, therefore it can lower the dopamine transmission in the mesolimbic pathway, but still allow dopamine transmission in the mesocortical and nigrostriatal pathways, thereby als treating negative symptoms. D1 receptors are not implicated in schizophrenia, hence (A) and (B) are wrong."
  },
  {
    id: 3,
    prompt:
      "A 42 y/o female presents with complaints of weight gain, increased appetite, and difficulty losing weight despite efforts to exercise and eat healthily. She also reports feeling fatigued and lethargic. On examination, her blood pressure is elevated, and elevated BMI (31). Her fasting blood glucose and triglyceride levels are elevated, while her HDL cholesterol is low. She denies a history of diabetes or hypertension. Her PMHx is significant for schizophrenia managed with antipsychotics. Assuming her presentation is secondary to her medication, which of the following is LEAST likely to be the identity of her medication?",
    choices: [
      "Aripiprazole",
      "Clozapine",
      "Olanzapine",
      "Quetiapine",
      "Risperidone",
    ],
    correct: "Aripiprazole",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the metabolic side effects of APs. In this vignette we are presented with a patient with possible metabolic syndrome secondary to AP use. The medication that is LEAST likely to cause this presentation is (A). Aripiprazole is a 3rd generation AP and is less implicated in causing metabolic side effects. 1st generation APs are also less likely to cause metabolic side effects. In general, 2nd generation APs (‘atypicals’) are implicated in having negative metabolic side effects, especially clozapine, olanzapine and quetiapine. The mechanism behind this is not well understood, but is thought to be due to a combination of its ability to block both H1 (weight gain and sedation → less energy expenditure) and 5-HT2C. The use of 2nd Gen APs results in abdominal obesity, a particular increase in visceral fat. The consequences of these metabolic side effects are HTN, lipid dysregulation leading to dyslipidemia, decrease insulin sensitivity leading to diabetes."
  },
  {
    id: 4,
    prompt:
      "Antipsychotics are fairly “dirty drugs”, in which they bind to many different receptor types beyond its main target. Which of the following does CORRECTLY match the receptor to its expected side effect with antipsychotic use?",
    choices: [
      "α1 - increased blood pressure",
      "H1 - increased anxiet",
      "H1 - weight gain",
      "M1 - increased salivation",
      "M1 - diarrhea",
    ],
    correct: "H1 - weight gain",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the side effects of APs. The correct answer is (C). Blocking H1 receptors causes weight gain. In the brain histamine receptors play a role in suppressing appetite. However, if blocked, then there will be release of the suppression leading to increased appetite, hence weight gain. Moreover, blocking H1 also causes sedation (remember histaminergic pathways are involved in wakefulness), which can lead to decreased physical activity and energy expenditure, which can contribute to weight gain. Sedation is also why (B) is not correct as blocking H1 could help with anxiety. (A) is wrong as blocking α1 will decrease BP by inhibiting NE mediated vasoconstriction. The side effect associated with α1 would be orthostatic hypotension like α1 antagonists (explained in MEDD411 hypertension week, but essentially decreasing vascular tone, leads to decreased venous return and blood being pumped to the brain). Some other side effects due to α1 blockade are sedation, dizziness (related to OH), reflex tachycardia (due to BP drop), and sexual dysfunction. (D) and (E) are the opposite of what we would expect with the muscarinic ACh blockade. Remember M1 is an ACh receptor and mediates PSNS response or our “rest and digest” response. Hence, we should see decreased salivation (dry mouth) and constipation (decreased gastric motility). The rest of the side effects follow an anticholinergic picture such as include blurry vision (inhibition of accommodation), urinary retention (inhibit bladder contraction), impaired memory, sinus tachycardia (inhibition of vagus nerve effect on SA node), confusion, cognitive issues, delirium. A full explanation regarding the anticholinergic toxidrome can be found in MEDD422 BPH week."
  },
  {
    id: 5,
    prompt:
      "Which of the following is TRUE regarding the pharmacodynamics of 2nd generation antipsychotics (APs)?",
    choices: [
      "Activates mesocortical 5-HT2A, which increases dopamine transmission",
      "Activates mesolimbic 5-HT2A, which decreases dopamine transmission",
      "Blocks mesocortical 5-HT2A, which increases dopamine transmission",
      "Blocks mesolimbic 5-HT2A, which decreases dopamine transmission",
      "Higher affinity for D2 receptors than 1st generation APs",
    ],
    correct: "Blocks mesocortical 5-HT2A, which increases dopamine transmission",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the pharmacodynamics of 2nd gen APs. The correct answer is (C). 2nd gen APs block 5-HT2A, which helps increase dopamine transmission in the mesocortical pathway. In schizophrenia, it is thought that decreased dopamine transmission in the mesocortical pathway causes negative symptoms. 5-HT2A activation in the mesocortical pathway leads to decreased dopamine release from dopaminergic neurons, hence blocking 5-HT2A should alleviate this inhibition, thus resulting in dopamine release. This is the main pharmacological principle behind 2nd gen APs in managing negative symptoms. The 5-HT2A receptors are also found in the nigrostriatal pathway, hence the end result is less propensity to cause extrapyramidal symptoms compared to 1st gen APs as dopamine transmission isn’t as blunted. It should be noted that 2nd gen APs are D2 receptor antagonists as well, hence they help lower dopamine transmission in the mesolimbic pathway. This allows its therapeutic effect in treating positive symptoms, which is thought to arise from increased dopamine transmission in the mesolimbic pathway. The rest of the statements are false."
  },
  {
    id: 6,
    prompt:
      "A 28 y/o male presents with complaints of decreased libido, erectile dysfunction, and galactorrhea. He was recently started on an antipsychotic (AP) medication for the treatment of his schizophrenia. His symptoms started shortly after starting the medication. On examination, he has bilateral gynecomastia and milky discharge from both nipples. Which of the following is the MOST LIKELY explanation behind this presentation?",
    choices: [
      "1st Gen AP blocking nigrostriatal D2 receptors",
      "1st Gen AP blocking tuberoinfundibular D2 receptors",
      "2nd Gen AP blocking tuberoinfundibular D2 and 5-HT2A receptors",
      "3rd Gen AP blocking tuberoinfundibular D2 receptors and 5-HT2A receptors",
      "3rd Gen AP partially activating tuberoinfundibular D2 receptors"
    ],
    correct: "1st Gen AP blocking nigrostriatal D2 receptors",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the hyperPRL secondary to AP use. In this vignette we are presented with a patient with suspected hyperprolactinemia given the sexual dysfunction, ED, and galactorrhea (recall MEDD412 HPEO week), possibly secondary to his AP. The correct answer is (B). This is the most likely explanation behind this presentation. Blocking D2 receptors in the tuberoinfundibular pathway will lead to PRL release because dopamine normally inhibits the release of PRL, hence the treatment for hyperPRL is usually a D2 agonist like cabergoline. 1st gen APs are more likely to cause hyperPRL than the other generations since they only block D2 and do not interact with 5-HT2A receptors. 2nd gen APs have lower propensity to cause hyperPRL because 5-HT2A antagonism results in decreased PRL release. Normally 5-HT increases PRL release (this is why SSRIs can cause hyperPRL). In addition to 5-HT2A antagonism, 3rd gen APs are also partial D2 agonists, thus there is some activation of the D2 receptors in the tuberoinfundibular pathway resulting in some inhibition of PRL release. (A) blocking nigrostriatal D2 receptors would result in extrapyramidal symptoms, which are discussed in detail in the movement disorder week of MEDD421."
  },
  {
    id: 7,
    prompt: "Which of the following is the MOST TRUE statement in describing the pharmacodynamics of the generation of antipsychotics that aripiprazole belongs to?",
    choices: [
      "Antagonist at mesolimbic D2 receptors, and full agonist at nigrostriatal D2 receptors ",
      "Lower affinity for D2 receptors than other antipsychotics generations",
      "Lower intrinsic activity for D2 receptors than other antipsychotic generations",
      "Partial agonist activity at D2, D3 receptors and antagonist of 5-HT1A, 5-HT2A receptors",
      "Partial agonist activity at D2, D3, 5HT1A receptors and antagonist at 5-HT2A receptors",
    ],
    correct:
      "Partial agonist activity at D2, D3, 5HT1A receptors and antagonist at 5-HT2A receptors",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacodynamics of 3rd gen APs. The correct answer is (E). 3rd gen APs are partial agonists at D2, D3, and 5-HT1A receptors. This allows it to have increased efficacy in treating negative symptoms as this allows for some dopamine transmission in the mesocortical pathway, while still also decreasing dopamine transmission in the mesolimbic pathway to treat positive symptoms. As a 5-HT2A antagonist it also helps treat negative symptoms by relieving the inhibition of dopamine release in the mesocortical pathway. By being a partial agonist to D2 receptors it also reduces the risk of EPS (nigrostriatal pathway) and hyperPRL (tuberoinfundibular pathway). (C) is wrong because as a partial agonist, 3rd gen APs will have higher intrinsic activity for the D2 receptor than antagonists, which by definition have zero intrinsic activity "
  },
  {
    id: 8,
    prompt: "A 34 y/o male with a history of schizophrenia presents to the hospital with complaints of fever, chills, and sore throat. He has been taking his antipsychotic medication for several months without any issues. He denies any chronic fatigue, unintended weight loss or increased bleeding/bruising. On examination, no petechiae or ecchymosis are noted. CBC shows isolated neutropenia. The patient is started on broad spectrum antibiotics. Assuming an iatrogenic cause, which of the following is the MOST likely cause of his presentation?",
    choices: [
      "Aripiprazole",
      "Clozapine",
      "Haloperidol",
      "Olanzapine",
      "Risperidone",
    ],
    correct: "Clozapine",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding a specific, but important side effect, agranulocytosis, of clozapine. In this vignette we are presented with a patient with a possible upper respiratory infection. The major concern is febrile neutropenia, which would ring bells of blood cancers like leukemia, or in this case his antipsychotic medication. The most likely cause is (B). Clozapine is a 2nd gen AP that is mainly used for treatment resistant schizophrenia (management is discussed in another question) and is known to specifically cause isolated neutropenia (does not affect other blood cells) or agranulocytosis. The mechanism behind this is unknown, but it is thought that clozapine is converted into a toxic ion that binds neutrophils and mediates its destruction. This is why patients on clozapine should have regular labs following their CBC. Some other labs to  follow up in patients on clozapine (and most 2nd gen APs) are metabolic tests such as lipids and blood sugars. Liver enzymes as well for patients on clozapine due to risk of hepatotoxicity."
  },
  {
    id: 9,
    prompt: "A 32 y/o male with a history of schizophrenia presents to the outpatient clinic with persistent positive and negative symptoms despite multiple trials of different antipsychotics (APs) including 2nd gen, 3rd gen, and a long acting injectable. He has tried each AP for 6-8 wks with near perfect compliance. He reports a history of several hospitalizations and suicidal thoughts. On examination, he exhibits disorganized speech, delusions, and blunted affect. Given this presentation, which of the following medications would you consider starting the patient on?",
    choices: [
      "Aripiprazole",
      "Clozapine",
      "Haloperidol",
      "Lorazepam",
      "Risperidone",
    ],
    correct: "Clozapine",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the management for treatment resistant schizophrenia. In this vignette we are presented with a patient with schizophrenia that has not responded to the usual APs or the long acting injectables, despite compliance and usage for 6-8 wks each (typically we’d expect some response at around 2 wks). This is suggestive of treatment resistant schizophrenia, therefore we would heavily consider using (B). Clozapine is a 2nd gen AP that has some unique pharmacodynamic characteristics, but it is not entirely clear if this is why it is effective. Clozapine has a fast on-off binding with the D2 receptor (and also one of the lowest affinities for D2), this allows for some dopamine binding to occur. Normally long term use of D2 receptor blockers can lead to compensatory upregulation of D2 receptor expression, thereby potentially negating the effects of D2 blockade in treating positive symptoms. The fast on-off occupancy of the D2 receptor is thought to help downregulate D2 receptors, thereby allowing for increased efficacy in reducing dopamine transmission in the mesolimbic pathway in treatment resistant patients. Furthermore, the other receptors such as 5-HT receptors that are blocked by clozapine are thought to help with its efficacy. Despite its effectiveness, clozapine isn’t usually used first-line given its many adverse effects such as metabolic and agranulocytosis. It is recommended to switch to clozapine after multiple AP failures. Long term injectables should be tried because they have been shown to be effective. It is thought that longer acting injectables allow for better follow up (clinic visits for injections) and better compliance (reduces the need of daily PO administration). Examples of APs with long acting injectable formulations include: risperidone, haloperidol, olanzapine, paliperidone, etc… Clozapine treatment can be augmented to further optimize treatment, which includes adding on anticonvulsants or SSRIs (inhibits CYP enzymes to increase plasma concentration of clozapine), and will not be discussed in detail. It is important to remember that switching APs requires cross-tapering, which means tapering down the original AP dose, while slowly titrating the new AP dose up."
  },
  {
    id: 10,
    prompt: "A 28 y/o female with a history of substance use disorder presents to the ER with complaints of severe fatigue, depression, and hypersomnia. She reports a lack of interest in food and difficulty concentrating. On examination, his vital signs are stable, and there are no significant physical findings. The ER physician suspects drug withdrawal and a urine drug screen is ordered. Which of the following receptor systems is the LEAST relevant in this presentation?",
    choices: [
      "5-HT",
      "Adrenergic α",
      "Adrenergic β",
      "Dopamine",
      "Opioid",
    ],
    correct: "Opioid",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding stimulant withdrawal. In this vignette we are presented with a patient with a suspected stimulant withdrawal. We suspect stimulant withdrawal given the “down” presentation, therefore (E) is the least relevant receptor system in this vignette. Remember withdrawals tend to present with the opposite of what the substance produces. This is because in substance use disorder, overuse of a substance will cause the body to compensate for the exogenous substance by upregulating or down regulating certain receptors to maintain some semblance of homeostasis. Abrupt removal of the substance will unmask these biological changes that have occurred, thus tipping the balance to the opposite end of the spectrum. In this case stimulants would have been overstimulating the adrenergic system, dopamine (reward pathway), and 5-HT. The body could have compensated by downregulating these receptors systems like the adrenergic SNS system, thus removal of the stimulant causes the body to have a decreased SNS baseline, thus presenting in a more “down” or “blue” presentation. Stimulants like cocaine, a reuptake inhibitor of NE, 5-HT and D, or methamphetamine, which reverses these transporters, all increase levels of NE, 5-HT, and D, hence are stimulants. It should be noted that almost all substances that have the potential for SUD will increase levels of dopamine given its role in the reward pathway (nucleus accumbens) both directly or indirectly (EtOH). Opioid receptor stimulation leads to increased dopamine (reward pathway) and decreased NE (hence sedative effects), so in an opioid withdrawal we would expect a more agitated presentation (the opposite of lower NE)."
  },
  {
    id: 11,
    prompt: "A 50 y/o male presents to the ED with complaints of tremors, anxiety, and sweating. He reports a history of heavy drinking, but denies any recent alcohol use. He also complains of feeling nauseous and having a headache. On examination, his BP and HR are elevated and he appears restless and agitated. It is noted that he has a slight tongue tremor. Given this presentation, which of the following BEST describes the neurotransmitter levels in his CURRENT state?",
    choices: [
      "↑ GABA, ↓ Glutamate",
      "↓ GABA, ↑ Glutamate",
      "↑ Dopamine, ↑ 5-HT",
      "↑ Dopamine, ↑ Norepinephrine",
      "↓ Dopamine, ↑ Norepinephrine",
    ],
    correct: "↓ GABA, ↑ Glutamate",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding EtOH withdrawal. In this vignette we are presented with a patient with suspected EtOH withdrawal given his presentation of anxiety, diaphoretic, tremors (tongue tremor being a warning sign for seizure risk), nausea, elevated BP/HR, agitated, restless, and history of EtOH use. Therefore, the correct answer is (B). EtOH is a depressant that affects the GABA system in the brain, which is the primary inhibitory neurotransmitter. Chronic alcohol use causes the brain to compensate for the depressant effects of alcohol by decreasing GABA release and increasing glutamate release, the primary excitatory neurotransmitter. When alcohol is abruptly stopped, this compensation is unmasked and can result in an “upper” presentation such as hyperexcitability, tremors, and agitation, which is consistent with this patient's presentation. EtOH withdrawal is serious and can lead to seizures, delirium tremens (hallucinations, tremors, altered mental status), and chronic EtOH use can lead to Wernicke-Korsakoff syndrome (WKS; discussed in another question). The treatment for EtOH withdrawal usually involves benzodiazepines and vitamin B1 (for WKS). (A) describes neurotransmitter levels in EtOH use. (C) would be expected in cannabis use. (D) would be expected in stimulant use (+ increase 5-HT). (E) would be expected in an opioid withdrawal."
  },
  {
    id: 12,
    prompt: "A 25 y/o patient presents to the ER extremely agitated, with vomiting and diarrhea. Upon closer inspection, they have piloerection, dilated pupils, a tremor, and profuse sweating. The ED physician suspects drug withdrawal. This presentation is most congruent with which of the following?",
    choices: [
      "Stimulant withdrawal",
      "Cannabinoids (CB) withdrawal",
      "Ethanol withdrawal",
      "Nicotine withdrawal",
      "Opioid withdrawal",
    ],
    correct: "Opioid withdrawal",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding opioid withdrawal.In this vignette we are presented with an agitated patient. We should be able to recognize that this patient is most likely undergoing opioid withdrawal, hence (E) is the correct answer. We can deduce this is an opioid withdrawal from the GI symptoms, piloerection, dilated pupils, tremor, and profuse sweating. One way to remember how an opioid withdrawal could present is to remember the effects of opioids and flip them to their opposite effect because withdrawal would mean lack of MOR stimulation either due to lack of opioid or due to an antagonist such as naloxone in a patient that is most likely tolerant, so they are already used to a higher than normal amount of opioids to function. For example, opioids cause constipation, then no opioids should lead to diarrhea; opioids cause sedation and suppress SNS then the opposite sounds like agitation/seizures or an SNS-like response such as piloerection (goosebumps) and sweating; pinpoint pupils (miosis) → dilated pupils; bradycardia → tachycardia, etc… Remember stimulation of MOR leads to a decrease in NE (our SNS neurotransmitter, so withdrawal should have a SNS-like picture). (A) stimulant withdrawal would present in more of a “down” presentation as there is loss of an exogenous substance that is stimulating the body. (B) there is some overlap with cannabis withdrawal such as agitation, however most of the more physical symptoms are associated with opioid withdrawal rather than cannabis withdrawal. (C) EtOH withdrawal is presented in another question, but there is some overlap. (E) nicotine withdrawal has some overlap, but remember nicotine usually leads to increased dopamine and NE, so we would expect a decreased NE presentation like a more “down” presentation."
  },
  {
    id: 13,
    prompt: "A 55 y/o male with a history of alcohol use presents to the clinic with complaints of forgetfulness and difficulty with new learning. He is unable to recall important events in his life, has difficulty forming new memories, and has confabulated memories. He has also been experiencing visual hallucinations and confusion. On examination, the patient appears malnourished and shows signs of tremors, ataxia, nystagmus, and ophthalmoplegia. Given this presentation, which of the following treatment options directly addresses the MOST concerning problem?",
    choices: [
      "Acramposate",
      "Disulfiram",
      "EtOH",
      "Lorazepam",
      "Vitamin B1 (Thiamine)",
    ],
    correct: "Vitamin B1 (Thiamine)",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the management of an important complication due to alcohol use disorder. In this vignette, we are presented a patient with cognitive impairment, difficulty forming new memories, confabulated memories, visual hallucinations, eye involvement, and signs of malnourishment, tremors, and ataxia, which are all concerning for Wernicke-Korsakoff Syndrome (WKS), a neurological complication of chronic alcohol abuse. The most concerning problem is the cognitive impairment and memory loss, which can have a significant impact on the patient's daily functioning and quality of life. The correct answer is (E) Vitamin B1 (Thiamine). WKS is caused by a deficiency in thiamine, which is a B vitamin that is essential for proper brain function. Thiamine deficiency is common in chronic alcohol abusers due to poor nutrition and malabsorption. Treatment for WKS involves thiamine replacement therapy, which can improve cognitive function and reduce the risk of further neurological damage. It should be noted that WKS needs to be ruled out before giving D50W (sugar) or B1 replacement should be initiated or else permanent brain damage can occur. MRI would reveal atrophy of the mammillary bodies and potentially cerebellar atrophy (explains ataxia). (A) is a medication in treating alcohol use disorder (usually in combination with CBT and naltrexone). The mechanism is unclear, but it is thought to help stabilize neurotransmitter levels by acting as a NMDA receptor antagonist and positive GABA-A receptor modulator, which is potentially helpful in managing EtOH withdrawal. (B) Disulfiram is used as aversion therapy in alcohol use disorder. Disulfiram inhibits aldehyde dehydrogenase, the enzyme that converts acetaldehyde (metabolite of EtOH via alcohol dehydrogenase) into acetate. This causes a buildup of acetaldehyde, which is the substance behind the effects of a hangover such as flushing, tachycardia, nausea, vomiting, syncope, etc… This creates a negative reaction to EtOH use, which is thought to drive patients away from EtOH use. This does not reduce EtOH cravings, hence disulfiram is not a first line medication in alcohol use disorder and the use of this medication needs observation as it can cause severe reactions including respiratory depression and death. (C) would be used in palliative alcohol maintenance to prevent withdrawal. (D) is benzodiazepine, used in the acute management of withdrawal."
  },
];
