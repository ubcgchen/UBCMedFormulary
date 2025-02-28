export const brainStem = [
  {
    id: 1,
    prompt:
      "Which of the following medications for MS works by reducing production of pro-inflammatory cytokines and increasing production of anti-inflammatory cytokines?",
    choices: ["Fingolimod", "Glatiramer acetate", "Ocrelizumab", "Nataluzumab"],
    correct: "Glatiramer acetate",
    tags: ["PD", "medium", "MoA", "MS", "Neurology"],
    explain: "This question requires understanding the mechanism of action of drugs used to treat MS. In this case, the drug that works by altering cytokine production is (B) glatiramer acetate. The other drugs in this class would include the interferons. This class has the lowest efficacy and can only be injected. This class can only be injected because they are either peptides, thus if taken orally, would result in their breakdown. (A and (D) both target lymphocyte migration (SP1 inhibitor and anti VLA4, respectively). (C) targets lymphocyte function (anti-CD20)",
  },
  {
    id: 2,
    prompt:
      "Which of the following medications for MS can be taken orally and disrupts lymphocyte function by disrupting proliferation and inducing cytotoxicity/apoptosis of lymphocytes?",
    choices: ["Alemtuzumab", "Dimethyl fumarate", "Fingolimod", "Ocrelizumab"],
    correct: "Dimethyl fumarate",
    tags: ["PD", "medium", "MoA", "MS", "Neurology"],
    explain: "This question requires understanding the mechanism of action of drugs used to treat MS. In this case, the drug that works by disrupting lymphocyte function and is taken orally is (B). Dimethyl fumarate is an oral medication that disrupts lymphocyte function. The other oral medications in this class are teriflunomide and cladribine. (A) and (D) both target lymphocyte function (anti-CD20 and anti-CD52, respectively), but are both monoclonal antibodies, and thus are injected and not taken orally. (C) is an oral medication, but targets lymphocyte migration (SP1 inhibitor).",
  },
  {
    id: 3,
    prompt:
      "Which of the following medications for MS is not taken orally and can impede lymphocyte migration into the CNS by preventing penetration of the blood brain barrier or egress from lymph nodes?",
    choices: ["Alemtuzumab", "Fingolimod", "Interferons", "Natalizumab"],
    correct: "Natalizumab",
    tags: ["PD", "medium", "MoA", "MS", "Neurology"],
    explain: "This question requires understanding the mechanism of action of drugs used to treat MS. In this case, the drug that works by disrupting lymphocyte migration into the CNS and is not taken orally is (D). Natalizumab is an anti-VLA 4 monoclonal antibody, thus is injected and impedes lymphocyte penetration of the blood brain barrier. (B) is the oral medication in the class. (C) are injected, but target cytokine production. (A) is also injected, but targets lymphocyte function.",
  },
  {
    id: 4,
    prompt:
      "A 63 y/o male presents to the neurologist office after experiencing bouts of double vision and ataxia. These attacks have never happened before till recently. After a thorough diagnostic workup, he is diagnosed with primary progressive MS. Which of the following is the ONLY approved medication for primary progressive MS as of 2022?",
    choices: [
      "Alemtuzumab",
      "Dimethyl fumarate",
      "Glatiramer acetate",
      "Ocrelizumab",
    ],
    correct: "Ocrelizumab",
    tags: ["PD", "medium", "MoA", "MS", "Neurology"],
    explain: "This question requires understanding the only approved treatment option for primary progressive MS, the rarer type of MS that is diagnosed later in life that does not usually have relapses. (D) is the only approved medication so far in Canada as of writing of this question. (D) is an anti-CD20 monoclonal antibody that targets lymphocyte function.",
  },
  {
    id: 5,
    prompt:
      "A 42 y/o patient with relapsing remitting MS has been experiencing increasingly more severe attacks. He is currently on dimethyl fumarate, but this has been ineffective at slowing down his progression. Which of the following medications with a similar mechanism of action would you prescribe him next?",
    choices: [
      "Alemtuzumab",
      "Cladribine",
      "Glatiramer acetate",
      "Nataluzumab",
      "Teriflunomide",
    ],
    correct: "Alemtuzumab",
    tags: ["PD", "medium", "MoA", "MS", "Neurology"],
    explain: "This question requires understanding the mechanism of action DMF and drugs that are in the same class, but with increased efficacy. In this vignette, we are presented with a patient with MS that is getting worse despite being on DMF. DMF is an oral medication that targets lymphocyte function. (C) is a medication that targets cytokine production and has lower efficacy than DMF. (D) is an effective medication, but it targets lymphocyte migration. (B), (E) are in the same class as DMF, but are not necessarily more effective (and not as clear cut as the correct answer) as they are both oral medications that target lymphocyte function. (A) is the correct answer because it targets lymphocyte function (CD52) and is more effective. Monoclonal antibodies are currently the most effective medication for MS (except for autologous HSCT).",
  },
  {
    id: 6,
    prompt:
      "A 66 y/o patient with relapsing-remitting MS presents with progressively worsening attacks and symptom severity. His neurologist decides that the patient’s cladribine is not an adequate treatment anymore. His neurologist decides to use a stronger drug, Drug X, but first orders a serology test for John Cunningham Virus (JCV) to assess the risk of progressive multifocal leukoencephalopathy (PML). What is the identity of drug X?",
    choices: ["Alemtuzumab", "Interferons", "Natalizumab", "Ocrelizumab"],
    correct: "Natalizumab",
    tags: ["PD", "medium", "MoA", "MS", "Neurology", "side effects"],
    explain: "This question requires understanding a serious adverse effect of a drug used to treat MS. In this vignette, we are presented with a patient with worsening relapsing-remitting MS and is about to be started on pending serology for JCV. This is because some immune-modulating drugs can activate latent infections or allow for viruses that normally do not cause any symptoms in immunocompetent patients. Patients on immune-modulating drugs like MS patients can be immunocompromised due to the drug decreasing immune surveillance that keeps latent infections in check. In this case (C) is the drug most commonly associated with JCV reactivation in MS patients. This leads to a condition called progressive multifocal leukoencephalopathy. You would worry about PML in a patient with MS on natalizumab when they start developing new typical MS symptoms or atypical MS symptoms.",
  },
];
