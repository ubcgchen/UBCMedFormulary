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
  },
  {
    id: 9,
    prompt:
      "A 30 y/o patient presents to the clinic with agitation, decreased libido, diarrhea, decreased libido, and erectile dysfunction. He was recently started on an antidepressant for MDD. His vitals are normal, no tremor is noted on the exam, and he doesn’t recall any weight loss. Which of the following drug’s side effect profile is he most likely presenting?",
    choices: [
      "Amitriptyline",
      "Bupropion",
      "Duloxetine",
      "Escitalopram",
      "Venlafaxine",
    ],
    correct: "Escitalopram",
    tags: ["PD", "medium", "MoA", "side effects", "Psych"],
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
      "Na channel blocker - QT interval prolongation",
    ],
    correct: "NE reuptake blockade - diarrhea, anhidrosis",
    tags: ["PD", "medium", "Psych", "MoA", "side effects"],
  },
  {
    id: 12,
    prompt:
      "A 32 y/o patient presents with a 2 week history of increased goal-directed energy, decreased sleep, distractibility, and irritability. Her friends describe her talking nonstop from ideas to ideas, which makes it difficult to follow what she is trying to get at. She isn’t on any SSRIs or stimulants. Which of the following medications is NOT used in this case?",
    choices: [
      "Aripiprazole",
      "Lamotrigine",
      "Lithium",
      "Risperidone",
      "Sodium valproate",
    ],
    correct: "Lamotrigine",
    tags: ["PD", "medium", "Psych", "MoA"],
  },
  {
    id: 13,
    prompt:
      "A 28 y/o patient with MDD presents to the clinic after 6 weeks on sertraline. She feels that her mood hasn’t improved much. She still feels low energy, anxiety, having trouble expressing her emotions, and has been having hot flashes. She has never felt that her cognitive ability has changed, doesn’t have trouble sleeping, or any changes in appetite. Which of the following medications would you switch her on to?",
    choices: [
      "Bupropion",
      "Citalopram",
      "Duloextine",
      "Mirtazapine",
      "Vortioxetine",
    ],
    correct: "Duloextine",
    tags: ["PD", "medium", "Psych", "MoA"],
  },
];
