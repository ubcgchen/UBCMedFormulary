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
  },
  {
    id: 2,
    prompt:
      "Which of the following NSAIDs would you expect to have the most GI side effects?",
    choices: ["Diclofenac", "Celecoxib", "Ketorolac", "Ibuprofen"],
    correct: "Ketorolac",
    tags: ["PD", "medium", "MoA", "side effects", "pain"],
  },
  {
    id: 3,
    prompt:
      "Which of the following NSAIDs would you expect to have the most cardiovascular side effects?",
    choices: ["Celecoxib", "Ketorolac", "Ibuprofen", "Naproxen"],
    correct: "Celecoxib",
    tags: ["PD", "easy", "MoA", "side effects", "pain"],
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
  },
  {
    id: 9,
    prompt:
      "A 25 y/o patient presents to the clinic with a severe 8 hr pounding unilateral headache that initially started with some extra colors in her vision and vomiting (1x). She mentions that this has happened a few times before, but this time she couldn’t stand the pain and wants to have it checked out. Which of the following medications is considered first line treatment?",
    choices: [
      "Amitriptyline",
      "Acetaminophen",
      "Ergotamine",
      "Sumatriptan",
      "Propranolol",
    ],
    correct: "Acetaminophen",
    tags: ["PD", "medium", "Neurology", "pain"],
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
  },
  {
    id: 12,
    prompt:
      "A 40 y/o patient presents to the ER after recurrent bilateral thunderclap headaches. When the headaches occur there is nausea and photophobia. His medication history includes regular use of pseudoephedrine for his rhinitis. You admit him and order a CTA of his head, which shows vasogenic edema and small watershed infarcts. This presentation is currently treated with which of the following medications?",
    choices: ["Apixaban", "Cannabis", "Duloxetine", "Sumatriptan", "Verapamil"],
    correct: "Verapamil",
    tags: ["PD", "medium", "Neurology"],
  },
  {
    id: 13,
    prompt:
      "A 34 y/o patient presents to the ER with a new onset 8 hr severe headache and seizure. She has no history of epilepsy. Her BP is elevated and a fundoscopy shows papilledema bilaterally. A non-contrast CT head shows a dense superior sagittal sinus, with no bleed or infarct. Which of the following medications increases the risk of this presentation?",
    choices: [
      "Apixaban",
      "Cannabis",
      "Duloxetine",
      "Ethinyl estradiol",
      "Verapamil",
    ],
    correct: "Ethinyl estradiol",
    tags: ["PD", "medium", "Neurology", "side effects"],
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
  },
  {
    id: 15,
    prompt:
      "What could happen if an opioid-tolerant patient injects buprenorphine (without any naloxone) into their veins?",
    choices: [
      "Achieves euphoria, but less than heroin",
      "Same euphoria as heroin",
      "Precipitate withdrawal",
      "Respiratory depression",
    ],
    correct: "Precipitate withdrawal",
    tags: ["PD", "medium", "MoA", "side effects", "pain", "anaesthesia"],
  },
  {
    id: 16,
    prompt:
      "What pharmacological property of methadone allows it to be used in addiction/dependence treatment?",
    choices: [
      "Short acting μ opioid receptor antagonist, leading to immediate precipitation of withdrawal",
      "Long acting μ opioid receptor antagonist, thereby preventing any opioid induced euphoria",
      "Long acting μ opioid receptor agonist due to high lipophilicity leading to less euphoria and withdrawal symptoms",
      "μ opioid receptor partial agonist, with low intrinsic efficacy for μ opioid receptor leading to less euphoria, respiratory depression, and withdrawal symptoms",
    ],
    correct:
      "Long acting μ opioid receptor agonist due to high lipophilicity leading to less euphoria and withdrawal symptoms",
    tags: ["PD", "medium", "Neurology", "MoA", "pain", "anaesthesia"],
  },
  {
    id: 17,
    prompt:
      "A 25 y/o patient presents to the ER extremely agitated, with vomiting and diarrhea. Upon closer inspection, he has “goosebumps”, dilated pupils, a tremor, and profuse sweating. You also find crushed up tablets of suboxone in his pocket. The best course of management in this case is?",
    choices: [
      "Clonidine",
      "Delayed release morphine",
      "Immediate release morphine",
      "Naloxone",
      "A and C",
    ],
    correct: "A and C",
    tags: ["PD", "medium", "Neurology", "MoA", "pain"],
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
  },
];
