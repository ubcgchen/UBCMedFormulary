export const tbi = [
  {
    id: 1,
    prompt:
      "Which of the following is NOT a mechanism of action utilized by intravenous general anesthetics to achieve sedation?",
    choices: [
      "Increase GABA-A chloride channel mediated inhibition",
      "α2 adrenergic receptor agonists",
      "Muscarinic acetylcholine receptor suppression",
      "NMDA receptor antagonist",
      "μ opioid receptor agonists",
    ],
    correct: "Muscarinic acetylcholine receptor suppression",
    tags: ["PD", "easy", "MoA", "Neurology", "anaesthesia"],
  },
  {
    id: 2,
    prompt:
      "Given are the redistribution half times (Tα) and elimination half times (Tβ) of four novel general anesthetics (in mins): Drug A (Tα = 5; Tβ = 10 ), Drug B (Tα = 2; Tβ = 30 ), Drug C (Tα = 10; Tβ = 20), Drug D (Tα = 5; Tβ = 15). Which of the following would you expect to have the shortest duration of action after a single IV bolus?",
    choices: ["Drug A", "Drug B", "Drug C", "Drug D"],
    correct: "Drug B",
    tags: ["PK", "medium", "anaesthesia", "Neurology"],
  },
  {
    id: 3,
    prompt:
      "Given are the context sensitive half-times after a 5 hr infusion of four drugs: Propofol - 25 mins, Etomidate - 15 mins, Ketamine - 30 mins, Midazolam - 70 mins. Which of the following will have the most predictable offset after an infusion?",
    choices: ["Etomidate", "Ketamine", "Midazolam", "Propofol"],
    correct: "Etomidate",
    tags: ["PK", "medium", "anaesthesia", "Neurology"],
  },
  {
    id: 4,
    prompt:
      "Which of the following is NOT an effect of isoflurane (inhaled anesthetic)?",
    choices: [
      "Bronchodilation",
      "Decrease cerebral blood flow",
      "Decrease tidal volume",
      "Increase respiration rate",
      "Peripheral vasodilation",
    ],
    correct: "Decrease cerebral blood flow",
    tags: ["PD", "medium", "MoA", "anaesthesia", "Neurology"],
  },
  {
    id: 5,
    prompt: "What is the mechanism of action of ketamine?",
    choices: [
      "NMDA receptor antagonist",
      "Reuptake inhibitor of 5-HT, dopamine, norepinephrine",
      "Weak μ opioid receptor agonist",
      "Weak muscarinic acetylcholine receptor antagonist",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PD", "easy", "MoA", "anaesthesia", "Neurology"],
  },
  {
    id: 6,
    prompt:
      "A 24 y/o patient presents to the ICU after a TBI from a motor vehicle accident. He presents with GCS 8, paralysis on his left side of the body, and a fixed and dilated right pupil. Fundoscopy shows papilledema and no retinal venous pulsations bilaterally. His respiration is irregular, BP 180/60, and HR 50. The patient’s bed is tilted upwards. Prior to intubation, which of the following drugs could help manage his current presentation?",
    choices: [
      "Dopamine",
      "Epinephrine",
      "Hydralazine",
      "Isoflurane",
      "Propofol",
    ],
    correct: "Propofol",
    tags: ["PD", "medium", "anaesthesia", "Neurology", "ICU"],
  },
  {
    id: 7,
    prompt:
      "Which of the following would you NOT expect to be a mechanism of action of anticonvulsant medications?",
    choices: [
      "Calcium channel blockers",
      "GABAergic potentiators",
      "NMDA receptor agonists",
      "Potassium channel activators",
      "Sodium channel blockers",
    ],
    correct: "NMDA receptor agonists",
    tags: ["PD", "medium", "MoA", "anticonvulsant", "Neurology"],
  },
  {
    id: 8,
    prompt:
      "A 30 y/o patient in the neuro-ICU after a TBI is about to be extubated and taken off midazolam. Which of the following adverse effects would the intensivist be monitoring closely for now?",
    choices: ["Hypotension", "Paralysis", "Respiratory depression", "Seizures"],
    correct: "Seizures",
    tags: ["PD", "medium", "Neurology", "side effects", "ICU"],
  },
  {
    id: 9,
    prompt:
      "Which of the following antiseizure medications follows zero-order kinetics?",
    choices: ["Levetiracetam", "Lorazepam", "Phenytoin", "Valproic acid"],
    correct: "Phenytoin",
    tags: ["PK", "medium", "Neurology", "anticonvulsant"],
  },
  {
    id: 10,
    prompt:
      "Which of the following drugs would you expect to be a broad-spectrum antiepileptic (broad spectrum - effective against tonic-clonic AND absence; narrow spectrum - effective against tonic clonic OR absence)?",
    choices: [
      "Carbamazepine - blocks Na channels",
      "Ethosuximide - blocks T-type Ca channels",
      "Lamotrigine - blocks Na and Ca channels, and decreases glutamate release",
      "Phenytoin - blocks Na and Ca channels",
      "Retigibine - activates K channels",
    ],
    correct:
      "Lamotrigine - blocks Na and Ca channels, and decreases glutamate release",
    tags: ["PD", "medium", "MoA", "anticonvulsant", "Neurology"],
  },
  {
    id: 11,
    prompt:
      "Benzodiazepines and barbiturates both cause sedation and target the same receptor, but what is the main reason that benzodiazepines are safer than barbiturates?",
    choices: [
      "Barbiturates are safer than benzodiazepines",
      "Benzodiazepines overdose can be treated with flumazenil, whereas there is no direct antidote for barbiturate overdose",
      "Benzodiazepine require endogenous GABA to activate the GABA receptor, whereas barbiturates can activate GABA receptors without endogenous GABA",
      "Benzodiazepines don’t have active metabolites, whereas barbiturates have many active metabolites, which complicates the dosing strategy",
    ],
    correct:
      "Benzodiazepine require endogenous GABA to activate the GABA receptor, whereas barbiturates can activate GABA receptors without endogenous GABA",
    tags: ["PD", "medium", "MoA", "Neurology", "side effects"],
  },
];
