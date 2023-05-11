/**
 * Questions for Chromosomal Abnormalities
 * @author Michael Gong, UBC VFMP 2025
 */

export const Chromosomal_Abnormalities = [
  {
    id: 1,
    prompt:
      "A patient gives birth to a full term neonate with a mild neural tube defect (NTD). The mother is worried it is because of the drugs she was prescribed during her pregnancy. Given are the list of her medications and when she took them: Drug A taken during gestational weeks 1-2. Drug B taken during gestational weeks 5-8, Drug C taken during gestational weeks 10-12, Drug D during gestational weeks 28-32. Assuming teratogen exposure is the cause of the NTD, which of the drugs is the most likely culprit?",
    choices: [
      "Drug A",
      "Drug B",
      "Drug C",
      "Drug D",
    ],
    correct: "Drug B",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the fetal development and predicting the teratogenic effects of drugs given the gestation time. The correct answer is (B). Drug (B) is most likely to cause the NTD because Drug (B) would be most likely ingested during when the nervous system is developing and the critical period for NT closure. The neural tube usually closes 28-32 wks post conception (embryonic age ~4 wks, GA ~6wks). Hence, drug B exposure would be during that time frame.  (A) is unlikely to be the culprit because in the first 2 weeks GA, could potentially be before conception, or even if it were to exert an effect, it could have caused death of the implanted cells and prevented the pregnancy. Drug (C) and (D) are outside the critical time period of neural tube closure"
  },
  {
    id: 2,
    prompt:
      "Which of the following characteristics might reduce the risk of teratogenicity",
    choices: [
      "Prescribe with the minimum effective dose",
      "Avoiding large fluctuations in plasma concentration",
      "Increasing folic acid supplementation",
      "All of the above",
      "None of the above",
    ],
    correct:
      "All of the above",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "All of the statements are methods that can reduce teratogenicity. Drug serum concentration and adverse effects can be directly related. Avoiding large fluctuations in plasma concentration minimizes the gradient from mother to fetus. And folic acid is required to prevent neural tube defects and aid in DNA synthesis for a developing fetus."
  },
  {
    id: 3,
    prompt:
      "A neonate is screened shortly after birth and is found to have phenylketonuria (PKU). Which of the following neurotransmitters would PKU directly inhibit the production of?",
    choices: [
      "5-HT",
      "Dopamine",
      "Histamine",
      "Norepinephrine",
      "A, B",
      "B, D",
      "All of the above",
    ],
    correct: "B, D",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the development of the nervous system and its pharmacological consequence. PKU is an inborn error in metabolism disease due to defects in the phenylalanine hydroxylase enzyme (nonfunctional or inefficient). This leads to decreased metabolism of phenylalanine into tyrosine. The result is a buildup of phenylalanine (F) and little tyrosine. Buildup of phenylalanine is toxic to the body for many reasons. One reason is that it will saturate the amino acid transporters that transport AA into the CNS. This prevents the transport of essential AAs into the CNS to be made into neurotransmitters, hence intellectual disability is a consequence of PKU. However, since F is not converted into another important AA, tyrosine (Y), there will be decreased production of all the tyrosine derivatives which would include dopamine, E, and NE. Hence, (F) is the correct answer. (C) is a histidine derivative and is not directly affected by PKU. 5-HT is a tryptophan derivative, which would be indirectly affected by PKU as the large amounts of phenylalanine would outcompete tryptophan for transport into the brain via the neutral amino acid transporter (they are both neutral amino acids)."
  },
  {
    id: 4,
    prompt:
      "A pregnant 27-year old G1P0 female PhD student presenting to her local family physician’s office for a regular checkup. Which of the following medications is least likely to result in congenital abnormalities if taken by Clair?",
    choices: [
      "Ciprofloxacin",
      "Nifedipine",
      "Losartan",
      "Sodium valproate",
      "Phenytoin"
    ],
    correct: "Nifedipine",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question assesses the teratogenicity of various medications. (A) Fluoroquinolone use in pregnancy may lead to cartilage defects. (B) Nifedipine is the safest drug to use in pregnancy among the answer choices. (C) Angiotensin receptor blockers are contraindicated in pregnancy due to potential renal damage. (D) Valproate in pregnancy may result in neural tube defects. (E) Phenytoin use in pregnancy may result in birth defects. (WW Q)"
  },
];
