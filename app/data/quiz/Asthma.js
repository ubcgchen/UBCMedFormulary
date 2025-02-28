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
    explain: "This question requires understanding the risk of desensitization with prolonged β2 agonist use. In this vignette, we are presented with a patient who’s SABA no longer provides relief anymore. We are told that he also has stopped using his ICS and only uses his LABA at doubled the dosage. Given his increased usage of his LABA (and no ICS use), the best explanation is (A) desensitization of his β2 adrenoreceptors on bronchial smooth muscle. This could be due to increased internalization of his β2 adrenoreceptors due to over-activation, leading to less receptors on the cell surface. His lack of ICS usage also further complicates his situation because ICSs are suggested to upregulate β2 adrenoceptor expression on bronchial smooth muscle cells. Hence, another reason why LABAs should NOT be prescribed without an ICS.",
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
    explain: "This question requires understanding the mechanism of action of LABAs, ICS, and a β-blocker. In this vignette, we are presented with an asthmatic child that ingests his father’s β-blocker (non selective antagonist of both  β1 and  β2 adrenoreceptors). We are told he uses a budesonide (ICS) and formoterol (LABA) inhaler. Here we have an example of pharmacological antagonism, where the propranolol will block the β2 adrenoreceptors on his bronchial smooth muscle, preventing the therapeutic use of formoterol, thus his inhaler will only work through budesonide. The general mechanism of action of an ICS is described in (C), which is the correct answer. This vignette highlights why β-blockers are contraindicated in asthamtic patients.",
  },
  {
    id: 3,
    prompt:
      "A 46 y/o patient with a history of asthma presents with a tremor in his hands. During the history you note his medications are salbutamol PRN (as needed), montelukast, budesonide, and acetaminophen OTC. On exam his vitals indicated a slightly elevated heart rate and a noticeable tremor when his hands are outstretched. You suspect an iatrogenic cause for the patient’s tremor. Which medication would you suspect?",
    choices: ["Acetaminophen", "Budesonide", "Montelukast", "Salbutamol"],
    correct: "Salbutamol",
    tags: ["side effects", "easy", "Pulmonology", "PD"],
    explain: "This question requires understanding a side effect related to SABA/LABA use. In this vignette, we are presented with a patient with a tremor and a slightly elevated heart rate. Tremor is a known side effect of  β2 adrenoceptors agonists (D). This is because we have β2 adrenoceptors on skeletal muscle, overstimulation of these receptors will lead to contractions and therefore tremors. The slightly elevated heart rate could be due to nonspecific binding to  β1 adrenoceptors expressed in cardiac tissue. Hence, (D), a SABA, is the correct answer",
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
    explain: "This question requires understanding the side effects of muscarinic antagonists and recognizing examples of β2 agonists. In this vignette, we are presented with a patient who complains of dry mouth and urinary retention after using his new inhaler. These are two side effects of blocking muscarinic receptors. Remember, acetylcholine is the neurotransmitter for the parasympathetic nervous system (PSNS), associated with “rest and digest”. Salivation is a PSNS response for meals (digestion), hence blocking MACh receptors will lead to less saliva (dry mouth). Contraction of the detrusor muscle on the bladder is also mediated via muscarinic receptors and the PSNS, hence urinary retention (urination and defecation are both PSNS). Hence, we know that his original medication was a LAMA (ex. tiotropium). We probably will switch him to a LABA such as salmeterol, hence (D) is the correct answer. Salbutomal is a SABA.",
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
    explain: "Omalizumab works by (C) complexing with IgE to prevent  FcεRI activation on mast cells. This will lead to decreased mast cell activation and release of histamine and other mediators. Omab is used for severe asthma.",
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
    explain: "Montelukast and zafirlukast (-lukast) are leukotriene (LKT) receptor antagonists (A). Side note: LKTs are derived from arachidonic acid, which is the same precursor lipid for prostaglandins (another inflammatory mediator). NSAIDs use, which inhibits the COX pathway that produces prostaglandins, can lead to asthma exacerbation, due to increased production of LKTs. This is because the 5-lipoxygenase pathway (produces LKT) is not inhibited, and will be able to convert the excess AA into LKTs.",
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
    explain: "This question requires understanding drug formulation and delivery in the airways. (A) is the correct answer. Metered-dose inhalers contain smaller particles (therefore (B) is false), which although allow for deeper delivery into the airways, are also easily exhaled, hence, holding your breath will allow the drug particles to travel deeper rather than being exhaled before reaching its target. (C) is something we want to avoid. (D) oral candidiasis can be minimized with mouth rinse (+ gargling) after inhaler use.",
  },
  {
    id: 8,
    prompt:
      "Which of the following biologics targets IL4Rα (Th2 mediated inflammation)?",
    choices: ["Dupilumab", "Mepolizumab", "Omalizumab", "Reslizumab"],
    correct: "Dupilumab",
    tags: ["PD", "medium", "MoA", "Pulmonology", "biologics"],
    explain: "This question requires understanding the mechanism of different biologics used in severe asthma. The correct answer is (A). (A) blocks IL4Rα and IL-13, hence it is useful in some Th2-high phenotype asthma. (B) and (D) both target IL-5, which is effective in severe eosinophilic asthma (also a Th2 high phenotype, but more commonly an adult onset asthma). (C) targets IgE, by binding to circulating IgE and effectively neutralizing it by preventing binding to mast cells and activation. Hence, it is effective in mod-severe allergic asthma.",
  },
  {
    id: 9,
    prompt:
      "Which of the following molecules could cause bronchoconstriction in a patient with asthma?",
    choices: ["Acetylcholine", "Aspirin", "Histamine", "All of the above", "All except B"],
    correct: "All of the above",
    tags: ["PD", "medium", "MoA", "Pulmonology", "biologics"],
    explain: "This question requires understanding the bronchoconstriction pharmacology. (E) is the correct answer. (A) can cause bronchoconstriction because it binds to M3 receptors in the bronchioles, which leads to bronchoconstriction. This is why methacholine, an acetylcholine derivative, is used to diagnose asthma in bronchoprovocation testing. This is also why muscarinic antagonists (-tropiums) are used in the treatment of asthma to block the acetylcholine driven bronchoconstriction. (C) can also cause bronchoconstriction by binding to H1 receptors. This is why in anaphylaxis there is bronchoconstriction due to massive release of histamine from mast cells and also why allergies can cause severe bronchoconstriction in asthmatics. (B) is a difficult one, but has been implicated to cause bronchoconstriction in asthmatics. This is because NSAIDs block the production of prostaglandins, however prostaglandins are derived from arachidonic acid, which is the same precursor lipid for leukotrienes (LKTs). Hence if we block the COX pathway from producing prostaglandins, then the now excess arachidonic acid will be used to produce more LKTs via the 5-lipoxygenase pathway, leading to bronchoconstriction.",
  }, 
];
