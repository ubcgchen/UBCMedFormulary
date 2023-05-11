export const headache = [
  {
    id: 1,
    prompt:
      "A 69 y/o woman with no significant medical history presents to the clinic with a headache, fatigue, and loss of vision out of her right eye. She has complained about muscle aches before. She also finds it painful to chew and wash her hair and has noticed some weight loss. Upon examination, her vitals are normal, left eye normal, and only light perception for her right eye with a right afferent pupillary deficit. Her right superficial temporal artery is tender on palpation. Given this presentation, the most likely diagnosis is best treated with which of the following drugs?",
    choices: [
      "Ibuprofen",
      "Methadone",
      "Propranolol",
      "Prednisone",
      "Sumatriptan",
    ],
    correct: "Prednisone",
    tags: ["PD", "medium", "Neurology", "Optho"],
    explain: "This question requires understanding the treatment for giant cell arteritis. This question requires understanding the diagnosis of GCA and its management. In this vignette we are presented with an elderly lady with headache, vision loss, jaw pain (chewing). This should immediately ring bells for giant cell arteritis (GCA). Other supportive features are the demographics, muscle aches (PMR?), wt loss, and physical exam findings that further corroborate the presentation (eye exam and tender temporal artery). This is an ophtho emergency, and we would initiate treatment with high dose prednisone ASAP, hence (D) is the correct answer. This is an inflammatory condition that requires high dose steroids to decrease inflammation to preserve vision. The rest of the medications are not effective in GCA: (A) is a NSAID, (B) is an opioid, (C) is a beta blocker, (E) is a 5HT1b/1d receptor agonist.",
  },
  {
    id: 2,
    prompt:
      "Which of the following NSAIDs would you expect to have the most GI side effects?",
    choices: ["Diclofenac", "Celecoxib", "Ketorolac", "Ibuprofen"],
    correct: "Ketorolac",
    tags: ["PD", "medium", "MoA", "side effects", "pain"],
    explain: "This question requires understanding the selectivity of NSAIDs. In this case the NSAID with the highest risk of GI side effects is (C). We first need to understand the mechanisms of NSAIDs. NSAIDs block COX enzymes to reduce the production of prostaglandins. There are two isoforms that you should know: COX-1 and COX-2, with different tissue expression. COX1 is considered the constitutive enzyme, while COX2 is considered inducible. This means that COX1 is always expressed, thus in the GI tract it is important as it helps maintain the mucus lining that protects the stomach lining, while COX2 has expression that increases in response to a stimulus such as inflammation, etc… Hence, NSAIDs that have more selectivity for COX1 tend to have more GI side effects, while NSAIDs with greater selectivity for COX2 tend to have cardiovascular side effects. In this question (B) is a COX 2 selective inhibitor (cele-cox sounds like selec(-tive) cox). The rest are considered nonselective COX inhibitors, however they have differing affinities for each enzyme. (A) is more selective for COX2, but still inhibits both, (D) is nonselective for either and is considered ~50:50. (C) is more COX1 selective than COX2, but it still inhibits both, hence it would most likely have the most GI side effects.",
  },
  {
    id: 3,
    prompt:
      "Which of the following NSAIDs would you expect to have the most cardiovascular side effects?",
    choices: ["Celecoxib", "Ketorolac", "Ibuprofen", "Naproxen"],
    correct: "Celecoxib",
    tags: ["PD", "easy", "MoA", "side effects", "pain"],
    explain: "This question requires understanding the selectivity of NSAIDs. In this case the NSAID with the highest cardiovascular side effect profile is (A). This is because it is a COX 2 selective inhibitor (cele-cox sounds like selec(-tive) cox). COX-2 is considered the inducible COX enzyme, where its expression increases in response to a stimulus. Prostaglandins in general are generally protective of the cardiovascular system as many of them like PGE and PGI promote vasodilation and inhibit platelet aggregation, which can be mediated via COX2. However, since only COX-2 is inhibited, the build up of arachidonic acid will be shunted to the COX1 enzyme pathway. The COX1 enzyme actually also facilitates the production of TXA2, a prostaglandin that is involved in promoting platelet activity. Hence, there is an increased risk of CV events like stroke and MIs. The COX-2 selective inhibitors however have less propensity for GI side effects, hence it was one of the reasons why they were made and marketed as a safer medication than the nonselective NSAIDs in treating inflammatory pain.",
  },
  {
    id: 4,
    prompt: "What is the mechanism of action of ibuprofen?",
    choices: [
      "Constitutive COX-1 inhibition leading to decreased prostaglandin production",
      "Inducible COX-2 inhibition leading to decreased prostaglandin production ",
      "Constitutive COX-1 and inducible COX-2 inhibition leading to decreased prostaglandin production",
      "Phospholipase A2 inhibition  leading to decrease prostaglandin production",
    ],
    correct:
      "Constitutive COX-1 and inducible COX-2 inhibition leading to decreased prostaglandin production",
    tags: ["PD", "easy", "MoA", "pain"],
    explain: "This question requires understanding the mechanism of a nonselective NSAID. (C) correctly describes the mechanism. NSAIDs inhibit the COX pathways that convert arachidonic acid into prostaglandins. (B) would describe the mechanism of celecoxib. (D) describes an effect of glucocorticosteroids, which cause decreased phospholipaseA2 activity, which leads to less arachidonic acid, hence decreased prostaglandins.",
  },
  {
    id: 5,
    prompt: "Which of the following is NOT an effect of acetaminophen?",
    choices: [
      "Analgesia",
      "Anti-inflammatory",
      "Antipyretic",
      "Glutathione depletion",
    ],
    correct: "Anti-inflammatory",
    tags: ["PD", "easy", "MoA", "pain"],
    explain: "This question requires understanding what acetaminophen does. (B) is the correct answer. Acetaminophen is NOT a NSAID. The mechanism of acetaminophen has not been elucidated yet, but is thought to involve the “COX-3” isoenzyme in the CNS. Acetaminophen does not confer anti-inflammatory properties, but it will provide analgesia (additive with NSAIDs, synergistically with opioids), and decrease fever (antipyretic). Acetaminophen metabolism will also deplete glutathione stores in the liver, which leads to build up of NAPQI, a toxic metabolite. NAPQI is the culprit in acetaminophen-induced hepatotoxicity and clearing NAPQI requires glutathione. Hence, the antidote for acetaminophen overdose is replenishing glutathione stores with N-acetylcysteine.",
  },
  {
    id: 6,
    prompt:
      "A 67 y/o patient with a long standing history of HTN, dyslipidemia, and peripheral vascular disease presents to the ER with retrosternal pain. The resident immediately thinks of acute coronary syndrome. What should be ruled out before administering aspirin?",
    choices: [
      "Myocardial infarction",
      "Peptic ulcer disease",
      "Pulmonary embolism",
      "Upper GI bleed",
      "B and D",
    ],
    correct: "B and D",
    tags: [
      "PD",
      "medium",
      "MoA",
      "pain",
      "GI",
      "cardiology",
      "ER",
      "side effects",
    ],
    explain: "This question requires understanding the contraindications to ASA. In this vignette we are presented with a patient with query acute coronary syndrome. The treatment would be to give him aspirin to chew on as further work up is done. However, we should make sure that he does not have absolute contraindications as outlined in (B) and (D), therefore (E) is the correct answer. This is because ASA is an irreversible nonselective inhibitor of the COX enzymes. This leads to decreased production of PGE that normally would help stimulate the production of bicarb to neutralize the stomach acid from damaging the mucosal layer. On the flipside, blocking COX1 in platelets leads to decreased production of TXA2, which helps PLT activation and aggregation, hence ASA usage in MI to prevent thrombosis from a ruptured plaque. If our patient here had chest pain secondary to an upper GI bleed and we give ASA, then we would be in deep trouble because now our patient will potentially bleed out given the impaired PLT function due to ASA.",
  },
  {
    id: 7,
    prompt: "How do opioids achieve analgesia?",
    choices: [
      "Activation of μ opioid receptor leads to inhibition of calcium influx at presynaptic terminal, thereby preventing excitatory neurotransmitter release",
      "Activation of μ opioid receptor leads to activation of chloride channels at pre and postsynaptic terminals causing hyperpolarization, thereby preventing AP propagation",
      "Activation of μ opioid receptor leads to activation of potassium channels at postsynaptic neuron causing hyperpolarization, thereby inhibiting AP propagation",
      "Activation of μ opioid receptor leads to inhibition of sodium at axons, thereby preventing AP propagation",
      "A and C",
    ],
    correct: "A and C",
    tags: ["PD", "medium", "MoA", "opioids", "pain", "anaesthesia"],
    explain: "This question requires understanding opioid pharmacology. The correct answer is (E). Opioids work on both the presynaptic and postsynaptic nerve terminals. μ opioid receptors (MOR) are GPCR that are found on both sides and its activation leads to decreased neuronal firing. Activation of this leads to negatively coupling of adenylate cyclase, thereby preventing ATP converting to cAMP, which is a necessary secondary messenger to activate Ca channels or negatively affect K+ channels. (A) accurately describes the mechanism of preventing outflow from the presynaptic axon terminal by inhibiting Ca influx that would have caused neurotransmitter release. (C) accurately describes the mechanism on the postsynaptic nerve terminal by enhancing K+ efflux, which results in hyperpolarization, thus inhibition of AP down the downstream nerve.",
  },
  {
    id: 8,
    prompt:
      "Which of the following does NOT correctly match the drug with a site of action along the pain pathway?",
    choices: [
      "Acetaminophen - peripheral nociceptors",
      "Dexmedetomidine (α2 adrenergic receptor agonist) - cerebral cortex",
      "Ibuprofen - peripheral nociceptors",
      "Ketamine - modulation of pain",
      "Lidocaine - primary afferent nerve axon",
    ],
    correct: "Acetaminophen - peripheral nociceptors",
    tags: ["PD", "medium", "MoA", "Neurology", "pain", "anaesthesia"],
    explain: "This question requires understanding pharmacology of analgesia. Pain processing is simplified into 4 parts. First is transduction: noxious stimuli that is converted into an AP. Second is transmission: the AP propagation down a nerve. THen is modulation: inhibitory or augmentation of afferent/efferent pain signals in the spinal cord. Usually involves glycine/GABA or NE, 5-HT, endorphins. Finally, perception: this is the CNS like the cerebral cortex where pain input is integrated into the somatosensory and limbic cortices to create the sensation of pain. The one that is not correctly matched is (A). Acetaminophen is thought to work on the CNS on the “COX-3” enzyme, which results in decreased prostaglandins and causes decreased pain perception (and potentially pain modulation). Since somatic pain is more affected by prostaglandins, it is thought that acetaminophen works better for somatic pain (back pain, headache, joint pain; muscles, skin) rather than visceral pain (menstrual cramps, internal organs). Other drugs that affect pain perception would include medications that work on the CNS such as opioids, α2 agonists (alter NE levels), and general anesthesia (most work by potentiating GABA activity) - these mechanisms all affect the integration of painful input.. Given that (B) is true, it would work on the cerebral cortex and the brainstem and the modulation of pain (augmenting of afferent/efferent pain signals due to NE). Remember α2 reduces NE, it’s the inhibitory auto-receptor of the SNS. (C) is true, it would block prostaglandin production from COX enzymes in the periphery to reduce nociceptor activation, hence it is useful in transduction (peripheral sensory nerve ends) and modulation of pain (spinal cord). Given its role in prostaglandin synthesis, NSAIDs are expected to be better for somatic pain vs visceral pain. (D) is true, ketamine is a NMDA receptor antagonist, thus is thought to affect the modulation of pain and potentially pain perception. NMDA is the Glu receptor, hence blocking excitatory transmission, potentially those that lead to the sensation of pain. (E) is a local anesthetic, so it blocks voltage gated Na+ channels along axons, thus terminating transmission of pain. LAs are the main drugs that affect pain transmission. Drugs that can affect transduction include, but not limited to NSAIDs, antihistamines, LA, opioids, bradykinin/5-HT antagonists. Modulation: opioids, α2 agonists, NMDA receptor antagonists, anticholinesterases, NSAIDs, CCK antagonists, NO inhibitors, K+ channel activators.",
  },
  {
    id: 9,
    prompt:
      "A 25 y/o patient presents to the clinic with a severe 8 hr pounding unilateral headache that initially started with some extra colors in her vision and vomiting (3x). She mentions that this has happened a few times before, but this time she couldn’t stand the pain and wants to have it checked out. She finds it interfering with her work. Which of the following medications is considered first line treatment?",
    choices: [
      "Amitriptyline",
      "Acetaminophen",
      "Ergotamine",
      "Sumatriptan",
      "Propranolol",
    ],
    correct: "Sumatriptan",
    tags: ["PD", "medium", "Neurology", "pain"],
    explain: "This question requires understanding the pharmacological management of an acute migraine attack.  In this vignette we are presented with a patient with a query migraine with aura (vision changes prior to headache) given the clinical presentation (POUND - pounding, hOurs - 4-72 hrs, unilateral, nausea, and disabling, she has at least 4 of these features). Her PMHx is unremarkable. In this case we would most likely go with (D). This can be given 6mg SC. Given that it is affecting her daily function, this is considered at least a moderate migraine attack complicated with nausea and vomiting. If this was mild, you could consider (B) or NSAIDs. For her nausea and vomiting we can also give her antiemetics like metoclopramide. (C) can be used in acute migraine attacks, however, it causes severe nausea and is not usually given alone without metoclopramide or an antiemetic. Ergotamines work on the same receptors as triptans. (A) TCA off label can be used to help prevent migraines, but not treat an acute attack. (E) propranolol can be used to prevent migraines, but not treat an acute attack.",
  },
  {
    id: 10,
    prompt:
      "A 40 y/o patient with variant angina presents to the clinic with a severe 8 hr pounding unilateral headache that initially started with some extra colors in her vision and vomiting (1x). She mentions that this has happened a few times before, but this time she couldn’t stand the pain and wants to have it checked out. Which of the following headache disorder medications is contraindicated in this case?",
    choices: [
      "Acetaminophen",
      "Aspirin",
      "Naproxen",
      "Propranolol",
      "Sumatriptan",
    ],
    correct: "Sumatriptan",
    tags: ["PD", "medium", "MoA", "Cardiology", "Neurology", "side effects"],
    explain: "This question requires understanding the contraindication to triptans. In this vignette we are presented with a patient with a query migraine given the clinical presentation (POUND - pounding, hOurs - 4-72 hrs, unilateral, nausea, and disabling, she has at least 4 of these features). Her PMHx is significant for variant angina (Prinzmetal) is a type of angina where the coronary arteries spasm. This is a contraindication for triptan use, therefore (E) is the correct answer. This is because sumatriptan is a 5-HT 1B/1D agonist, thus it causes vasoconstriction, hence its therapeutic effect in treating acute migraines. This however, may precipitate more vasospasm of the coronary arteries, which will reduce oxygen delivery to the myocardium, thereby precipitating an ischemic event. It is thereby advised to avoid sumatriptan in patients with uncontrolled HTN, ischemic heart disease, stroke, pregnancy, and other CV related risk factors. In this case we could try calcitonin gene-related peptide (CGRP) antagonist or lasmiditan (5-HT F agonist, that doesn’t activate 5-HT 1B/1D) or NSAIDS like ketorolac IV, antiemetics for nausea (dopamine antagonists like metoclopramide).",
  },
  {
    id: 11,
    prompt: "What is the mechanism of action of sumatriptan?",
    choices: [
      "5-HT 1B/1D agonist",
      "5-HT 1B/1D antagonist",
      "5-HT 3 agonist",
      "5-HT 3 antagonist",
      "Serotonin reuptake inhibitor",
    ],
    correct: "5-HT 1B/1D agonist",
    tags: ["PD", "easy", "MoA", "Neurology"],
    explain: "This question requires understanding the mechanism of sumatriptan. The mechanism is correctly described in (A). Sumatriptan is an agonist of the 5-HT 1B/1D receptors. It is thought that migraines are due to dilation of cerebral vessels (hence the throbbing feeling), which leads to increased inflammatory mediators to the brain and pain. By activating the 5-HT receptors, it can then cause vasoconstriction of these vessels, thus reducing pain. However, due to its mechanism of vasoconstriction, triptans are ideally avoided in patients with high blood pressure or those with heart disease such as variant angina, ischemic heart disease, as the vasoconstrictive effects could cause coronary artery constriction and precipitate an ischemic event due to decreased O2 delivery to the myocardium. Also triptans should not be administered with ergot derivatives such as ergotamine because this could precipitate excessive vessel constriction.",
  },
  {
    id: 12,
    prompt:
      "A 40 y/o patient presents to the ER after recurrent bilateral thunderclap headaches. When the headaches occur there is nausea and photophobia. His medication history includes regular use of pseudoephedrine for his rhinitis. You admit him and order a CTA of his head, which shows vasogenic edema and small watershed infarcts. This presentation is currently treated with which of the following medications?",
    choices: ["Apixaban", "Cannabis", "Duloxetine", "Sumatriptan", "Verapamil"],
    correct: "Verapamil",
    tags: ["PD", "medium", "Neurology"],
    explain: "This question requires understanding the diagnosis of reversible cerebral vasospasm (RCVS) and its management. In this vignette we are presented with a patient with recurrent thunderclap headache associated with nausea and photophobia. He has a history of pseudoephedrine (decongestant) A CTA shows vasogenic edema with small watershed infarcts. Given this the most likely diagnosis from the history and imaging results is RCVS. RCVS is a non-inflammatory transient vasculopathy that is characterized by recurrent thunderclap headache and segmental multifocal vasoconstriction. The mean age of onset is 40 (same age as our patient) and he does have a risk factor, which is decongestant use (possibly due to vasoconstriction via stimulation of α1 receptors). The small watershed infarcts are possibly a consequence to the vasoconstriction leading to decreased O2 delivery to watershed areas of the brain. Given this simplified pathophysiological explanation to RCVS, the best medication from the list to help treat this is (E), a CCB. This is because CCBs can vasodilate vessels, in this case the pathological processes are these vasospasms, hence if we dilate these vessels, there will be less vasoconstriction to cause the headache. Overall, RCVS treatment is mainly supportive such as hydration. (A) is an anticoagulant, not useful in this case. (B) is a risk factor for RCVS. (C) is a SNRI and has not been shown to be effective in RCVS. (D) is a triptan that would cause more vasoconstriction, which is why it is mainly used in treating migraines, where the pathophysiological process is mainly due to dilated vessels.",
  },
  {
    id: 13,
    prompt:
      "A 34 y/o female patient presents to the ER with a new onset 8 hr severe headache and seizure. She has no history of epilepsy. Her BP is elevated and a fundoscopy shows papilledema bilaterally. A non-contrast CT head shows a dense superior sagittal sinus, with no bleed or infarct.  A CT venogram is ordered. Which of the following medications increases the risk of this presentation?",
    choices: [
      "Apixaban",
      "Cannabis",
      "Duloxetine",
      "Ethinyl estradiol",
      "Verapamil",
    ],
    correct: "Ethinyl estradiol",
    tags: ["PD", "medium", "Neurology", "side effects"],
    explain: "This question requires understanding the risk factors for cerebral venous thrombosis. In this vignette we are presented with a patient with a severe headache and a seizure. Her physical exam suggests elevated ICP and imaging shows a dense superior sagittal sinus (SSS) and the absence of any bleed or infarct. This presentation is congruent with a cerebral venous thrombosis (CVT) that possibly involves the sagittal and transverse sinuses. CVT affects females > males, and tends to present under the age of 50 and tends to present as a headache and sometimes with seizures, vision changes, or focal neuro deficits. The risk factors for CVT include trauma, cancer, thrombophilia, peripartum, and OCPs. Hence, the correct answer is (D). Ethinyl estradiol in OCPs tends to cause increased coagulation, hence OCP use is a risk factor for many venous thromboembolic events such as DVTs and PEs. The treatment for CVT is as expected, anticoagulation, supportive care for seizures, and management of the increased ICP + pain control. There is increased ICP because you are blocking venous outflow from the brain, so the blood that enters the brain has nowhere to go given the thrombosis (or decreased outflow), thus pressure builds up. A CT venogram should show a filling defect in the sinuses, which would indicate the thrombosis (contrast does not fill the area of thrombosis).",
  },
  {
    id: 14,
    prompt:
      "A 25 y/o patient with a history of migraines presents to the clinic after noticing that her medication does not alleviate her headaches anymore. She has been using her medication for more than 3 months, and for ~11 days per month. Given this presentation, which of the following drugs would fall under the criteria for medication-overuse headache?",
    choices: [
      "Acetaminophen",
      "Ibuprofen",
      "Sumatriptan",
      "None, needs at least 15 days per month",
    ],
    correct: "Eumatriptan",
    tags: ["PD", "medium", "Neurology", "side effects"],
    explain: "This question requires understanding the criteria for medication overuse headaches. In this vignette we are presented with a patient with decreased responsiveness to her headache medication. The criteria for medication overuse headaches for simple analgesics such as acetaminophen and NSAIDs is use ≥15days/mo. However, for other medications such as triptans, opioids, combination analgesics (opioid + simple), ergotamine, the cut off is considered ≥10days/mo. Hence, (C) is the correct answer as the decreased effectiveness and continued headaches after taking sumatriptan for more than 10 days/mo is suggestive of medication overuse headache. The pathophysiology behind medication overuse headache is not well elucidated, but is thought to be in part due to sensitization of the nervous system and a behavioral component. ",
  },
  {
    id: 15,
    prompt:
      "What could happen if an actively opioid-tolerant patient injects buprenorphine (without any naloxone) into their veins?",
    choices: [
      "Achieves euphoria, but less than heroin",
      "Same euphoria as heroin",
      "Precipitate withdrawal",
      "Respiratory depression",
    ],
    correct: "Precipitate withdrawal",
    tags: ["PD", "medium", "MoA", "side effects", "pain", "anaesthesia"],
    explain: "This question requires understanding the pharmacology of buprenorphine. The correct answer is (C). This is because buprenorphine is a partial agonist of the μ opioid receptor (MOR). In opioid-tolerant patients there is a higher requirement of opioid to reach the same effect compared to an opioid-naive patient due to the tolerance they have built up. Tolerance is a consequence of the body adapting to the continued use, which leads to changes in receptor expression and other neuroplastic changes. Thus, when using a partial agonist, the amount of activation of the MOR is much less, so it essentially acts as an antagonist at that point, therefore precipitating a withdrawal. However, for an opioid-naive patient, the level of activation from a partial agonist is enough to cause the effects of opioids because the body has not adapted to the use of opioids, so you still have the potential to achieve analgesia and euphoria. You can think of this as having super high expectations (tolerance) for a date with someone you’ve been on a few dates with, if they stand you up (antagonist; naloxone), then you will be disappointed (withdrawal). If they do show up, but it’s a terrible date like they are on their phone the entire time (partial agonist; buprenorphine), then you will still be disappointed (withdrawal) compared to your previous dates. If they do show up, and you have a great time together (full agonist; morphine), you won’t be disappointed (no withdrawal). On the flip side, if you have no expectations (naive) for a date because you’ve never experienced one before, then your date showing up would exceed your expectations and you will be content with the date even if they are always looking at their phone because you are just happy you got a date. Therefore, (A) could occur in an opioid naive patient, but less likely in an opioid tolerant patient. The “maximum level” of euphoria won’t be the same. (B) less likely in an opioid tolerant patient. (D) is possible, but again less likely in an opioid tolerant patient.",
  },
  {
    id: 16,
    prompt:
      "What pharmacological property of methadone allows it to be used in addiction/dependence treatment?",
    choices: [
      "Short acting μ opioid receptor antagonist, leading to immediate precipitation of withdrawal",
      "Long acting μ opioid receptor antagonist, thereby preventing any opioid induced euphoria",
      "Long-acting μ opioid receptor agonist and delayed onset due to high lipophilicity, thus reducing cravings and withdrawal symptoms",
      "μ opioid receptor partial agonist, with low intrinsic efficacy for μ opioid receptor leading to less euphoria, respiratory depression, and withdrawal symptoms",
    ],
    correct:
      "Long-acting μ opioid receptor agonist and delayed onset due to high lipophilicity, thus reducing cravings and withdrawal symptoms",
    tags: ["PD", "medium", "Neurology", "MoA", "pain", "anaesthesia"],
    explain: " This question requires understanding the pharmacology of methadone. The correct answer is (C). Methadone is a long acting MOR agonist. Given its lipophilicity methadone has a slow onset and prolonged duration of action. This is because the high lipophilicity makes methadone have a high affinity for adipose tissue and protein binding. This essentially limits its absorption from the GIT into the bloodstream (water) for systemic circulation. Therefore, the plasma concentration of methadone rises slower than other opioids like morphine. This delay in rise leads to delay in action, which is useful in limiting abuse potential because the time between ingestion and any euphoric effects will be prolonged, thus the conditioned response/connection that drug=euphoria is less likely to be made. For example if you take a drug and within 30s you get a “high”, you are more likely to associate the drug with the high versus taking a drug and it takes 4 hours for the “high”, you are less likely to associate the drug with high because within those 4 hours many things could have happened that could be associated with the “high”.  The high lipophilicity helps increase the duration of action because the distribution into adipose tissue essentially will make the adipose tissue act like a sink for methadone. Methadone will build up in the adipose tissue, where it is “stored” and then slowly released back into systemic circulation, thus maintaining some plasma concentration of methadone in the body. By being in the adipose tissue, it will not be eliminated, as only the drug in circulation will be able to be eliminated by renal or hepatic. This is beneficial because by maintaining some level of methadone, then there is less chance to precipitate withdrawal as there will always be some level of opioid activity, which then would also reduce cravings (methadone is a full agonist, so it's not like buprenorphine - a partial agonist). This also helps give the body time to adapt to the slowly decreasing levels of opioid in the system, thus further reducing the risk of withdrawal. It should be noted that methadone still has abuse potential. Methadone also has been shown to have some NMDA antagonist activity, which helps mitigate some tolerance. The duration of action is long, but also variable due to metabolism variation. It’s also recommended to start low and go slow with the dosing. Also methadone can cause QTc prolongation, so caution in patients with long QT syndrome.",
  },
  {
    id: 17,
    prompt:
      "A 25 y/o patient presents to the ER extremely agitated, with vomiting and diarrhea. Upon closer inspection, he has piloerection, dilated pupils, a tremor, and profuse sweating. You also find crushed up tablets of suboxone in his pocket. The best course of management in this case is?",
    choices: [
      "Clonidine",
      "Delayed release morphine",
      "Immediate release morphine",
      "Naloxone",
      "A and C",
    ],
    correct: "A and C",
    tags: ["PD", "medium", "Neurology", "MoA", "pain"],
    explain: "This question requires understanding opioid withdrawal treatment. In this vignette we are presented with an agitated patient. We should be able to recognize that this patient is most likely undergoing opioid withdrawal given the GI symptoms, piloerection, dilated pupils, tremor, profuse sweating, and the crushed up suboxone (Buprenorphine / Naloxone). One way to remember how an opioid withdrawal could present is to remember the effects of opioids and flip them to their opposite effect because withdrawal would mean lack of MOR stimulation either due to lack of opioid or due to an antagonist such as naloxone (as shown in this vignette) in a patient that is most likely tolerant, so they are already used to a higher than normal amount of opioids to function. For example, opioids cause constipation, then no opioids should lead to diarrhea; opioids cause sedation and suppress SNS then the opposite sounds like agitation/seizures or an SNS-like response such as piloerection (goosebumps) and sweating; pinpoint pupils (miosis) → dilated pupils; bradycardia → tachycardia, etc… Given that the best course of management would be (E). You would administer clonidine, an α2 agonist, to decrease the SNS outflow and hence treat some of the symptoms of withdrawal that are related to the increased SNS effects. You would also want to provide some sort of fast-acting opioid to quickly treat the withdrawal symptoms. You would also ideally pair this with opioid agonist therapy such as methadone to help treat opioid addiction/dependence. Essentially, in the acute management of opioid withdrawal it is mainly symptom management to stabilize that patient into a more “calm” state, where you can have the discussion on starting more long term therapy. ",
  },
  {
    id: 18,
    prompt:
      "A 5 y/o child presents to the pediatric ER with an altered level of consciousness, persistent vomiting, and convulsions. Mild hepatomegaly and signs of increased intracranial pressure are noted on exam. Labs show elevated liver enzymes. Her parents said that she recently had chickenpox after going to a chickenpox party since they don’t believe in vaccines. They did however give her a drug to help her recover from the viral infection. Which of the following drugs is most likely the culprit?",
    choices: [
      "Acetaminophen",
      "Aspirin",
      "Ibuprofen",
      "Ondansetron",
      "Sumatriptan",
    ],
    correct: "Aspirin",
    tags: [
      "PD",
      "medium",
      "Neurology",
      "pain",
      "side effects",
      "Infectious",
      "GI",
      "Pediatrics",
    ],
    explain: "This question requires understanding a contraindication for ASA. In this vignette we are presented with a pediatric patient with altered mental status. From the clinical presentation and history, the most likely diagnosis is Reye's Syndrome (RS). An explanation for the pathophysiology behind Reye’s syndrome coming soon. Just remember that ASA is contraindicated in children with viral illnesses such as the flu or VZV (chicken pox).",
  },
];
