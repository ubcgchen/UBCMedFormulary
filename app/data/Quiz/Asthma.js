export const asthma = [
  {
    id: 1,
    prompt:
      "A 43 y/o with longstanding asthma controlled with a LABA and ICS presents with increased frequency of asthma attacks that are not relieved with the standard SABA dose. He recalls needing to double his SABA dose for any relief, and also reveals that he does not use his ICS as prescribed and instead he has doubled his LABA usage. What could explain the decreased effectiveness of the SABA?",
    choices: [
      "Long term LABA usage will desensitize β2 adrenoreceptors, thus requiring a larger SABA dose.",
      "Long term LABA usage will lead to atrophy of bronchial smooth muscle, thus requiring a larger SABA dose.",
      "Reduced ICS usage will upregulate β2 adrenoreceptors expression, thus requiring a larger SABA dose.",
      "Reduced ICS usage will upregulate muscarinic 3 acetylcholine receptors, thus requiring a larger SABA dose.",
    ],
    correct:
      "Long term LABA usage will desensitize β2 adrenoreceptors, thus requiring a larger SABA dose.",
    tags: ["PD", "medium", "MoA", "Pulmonology"],
  },
  {
    id: 2,
    prompt:
      "A 7 y/o patient is recently diagnosed with asthma and is prescribed a budesonide/formoterol inhaler. However, he mistakens his father’s propranolol (β-blocker) as candy and ingests some. Through which mechanism(s) will the patient’s medication work now?",
    choices: [
      "Mainly through β2 adrenoreceptors mediated bronchodilation",
      "Mainly through blocking acetylcholine mediated bronchoconstriction",
      "Mainly through decreased expression of inflammatory mediators",
      "Through both blocking acetylcholine mediated bronchoconstriction and decreased expression of inflammatory mediators",
      "Through both β2 adrenoreceptors mediated bronchodilation and decreased expression of inflammatory mediators",
    ],
    correct: "Mainly through decreased expression of inflammatory mediators",
    tags: ["PD", "MoA", "PK", "Pulmonology", "Foundations", "medium"],
  },
  {
    id: 3,
    prompt:
      "A 46 y/o patient with a history of asthma presents with a tremor in his hands. During the history you note his medications are salbutamol PRN (as needed), montelukast, budesonide, and acetaminophen OTC. On exam his vitals indicated a slightly elevated heart rate and a noticeable tremor when his hands are outstretched. You suspect an iatrogenic cause for the patient’s tremor. Which medication would you suspect?",
    choices: ["Acetaminophen", "Budesonide", "Montelukast", "Salbutamol"],
    correct: "Salbutamol",
    tags: ["side effects", "easy", "Pulmonology", "PD"],
  },
  {
    id: 4,
    prompt:
      "Three weeks ago you prescribed a long acting bronchodilator to your 56 y/o asthma patient. He returns complaining about dry mouth and urinary retention. Understanding that these are common side effects of the bronchodilator, what was the type of bronchodilator you originally prescribed and what would you replace it with?",
    choices: [
      "LABA and change to salbutamol",
      "LABA and change to tiotropium",
      "LAMA and change to salbutamol",
      "LAMA and change to salmeterol",
      "LAMA and change to tiotropium",
    ],
    correct: "LAMA and change to salmeterol",
    tags: ["PD", "easy", "Pulmonology", "MoA", "side effects"],
  },
  {
    id: 5,
    prompt: "Biologics like omalizumab work by:",
    choices: [
      "Activating T-reg cells to downregulate Th1-mediated inflammation",
      "Complexing with soluble TNFα to prevent activation of TNFα type 1 receptor",
      "Complexing with IgE to prevent FcεRI activation on mast cells",
      "Blocking FcεRI on mast cells to prevent IgE binding",
      "Blocking TNFα type 1 receptor to prevent TNFα binding",
    ],
    correct: "Complexing with IgE to prevent FcεRI activation on mast cells",
    tags: ["PD", "easy", "MoA", "Pulmonology", "Biologics"],
  },
  {
    id: 6,
    prompt:
      "What is the mechanism of action for drugs like montelukast and zafirlukast?",
    choices: [
      "Blocks IgE from binding to mast cells leading to reduced histamine release",
      "Binds glucocorticoid receptors leading to alterations in gene expression leading to decreased inflammation",
      "Blocks cysteinyl leukotriene receptors leading to decreased smooth muscle contraction, edema, and inflammation",
      "Blocks muscarinic 3 acetylcholine receptor leading to reduced smooth muscle contraction",
      "Blocks TNFα type 1 receptor leading to reduced inflammation and edema",
    ],
    correct:
      "Blocks cysteinyl leukotriene receptors leading to decreased smooth muscle contraction, edema, and inflammation",
    tags: ["PD", "easy", "MoA", "Pulmonology"],
  },
  {
    id: 7,
    prompt:
      "What is the importance of asking the patient to hold their breath following use of a metered-dose inhaler?",
    choices: [
      "Metered-dose inhalers contain smaller particle sizes that are easily exhaled before reaching the target",
      "Metered-dose inhalers contain larger particle sizes that are easily exhaled before reaching the target",
      "To minimize the risk of oral candidiasis",
      "To maximize systemic absorption of drug through the oropharyngeal mucosa to increase effectiveness",
    ],
    correct:
      "Metered-dose inhalers contain smaller particle sizes that are easily exhaled before reaching the target",
    tags: ["PD", "medium", "MoA", "Pulmonology"],
  },
  {
    id: 8,
    prompt:
      "Which of the following biologics targets IL4Rα (Th2 mediated inflammation)?",
    choices: ["Dupilumab", "Mepolizumab", "Omalizumab", "Reslizumab"],
    correct: "Dupilumab",
    tags: ["PD", "medium", "MoA", "Pulmonology", "biologics"],
  },
];
