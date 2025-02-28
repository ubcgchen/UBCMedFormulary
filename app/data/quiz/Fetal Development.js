export const fetalDevelopment = [
  {
    id: 1,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 with a history of seizure presents to the ER with worsening seizures. She currently takes 250 mg orally once daily. After a review of the patient's case, the care team decides that her valproic acid dose needs to be increased to 500 mg daily to manage her seizures. Which of the following is the best method of increasing the dose?",
    choices: [
      "Change her dose immediately to 500 mg orally once daily ",
      "Change her dosing to 125 mg valproic acid orally QID (4 times per day)",
      "Change her dose by increasing it by 125 mg every three days to reach 500 mg orally once daily",
      "Change her dose to 500 mg daily by using an IV infusion that maintains valproic acid at the minimum effective concentration",
    ],
    correct:
      "Change her dosing to 125 mg valproic acid orally QID (4 times per day)",
    tags: ["PK", "hard", "Ob/Gyn", "Neurology"],
    explain:
      "This question is difficult. In this case, we want to minimize the exposure of valproic acid to the fetus, while still raising the dose, which can be achieved via some PK manipulation. First, we need to realize that serum drug concentration is related to adverse drug effects. Higher concentration, more toxic effects. Second, we need to understand that we want to minimize drug crossing from mother to fetus. Distribution of drugs is affected by concentration gradients. Where larger gradients will have more drug crossing. Therefore, we want to minimize the serum drug concentration, but still keep it above the minimum therapeutic concentration to prevent the mother from having a seizure. (A) in this case is the worst option, since her serum drug levels would increase to dangerous levels for the fetus and create a large gradient. (C) is not ideal either, a slow increase in dose does not change the fact that we end giving a large 500 mg dose daily. (D) actually achieves our desired result. A drug infusion is good for drugs with low therapeutic indexes and allows us to maintain a specific concentration, but having an IV in a patient for her entire pregnancy is not ideal. Hence (B) is the best answer, this will allow us to still give the patient her 500 mg per day, but also maintain the serum concentration on the low end, but still within the therapeutic window. A dose of 125 mg each time, won’t raise the serum concentration to a high enough level to cause a large gradient. Essentially, each 125 mg dose is just topping up her drug so it stays right above the minimum effective dose and basically an attempt to closely mimic drug infusion without an IV. Try drawing out the serum concentration for a drug at 500 mg daily vs. 125 mg 4x day and observe how the serum concentration changes.",
  },
  {
    id: 2,
    prompt:
      "A 36 y/o pregnant patient G2T1 with a history of seizures is worried that  her anti-convulsant, carbamazepine, will cause birth defects and decides to skip some of her doses. Being the astute you medical student you recognize that:",
    choices: [
      "Carbamazepine is not a teratogen, but seizures pose a serious risk to the fetus, hence doses shouldn't be skipped",
      "Carbamazepine is a teratogen, so it should be removed",
      "Carbamazepine is a teratogen, but seizures pose a serious risk to the fetus, hence doses shouldn't be skipped",
      "Carbamazepine is not a teratogen, so we should double the next few doses to make up for the skipped doses ",
    ],
    correct:
      "Carbamazepine is a teratogen, but seizures pose a serious risk to the fetus, hence doses shouldn't be skipped",
    tags: ["PK", "easy", "Ob/Gyn", "Neurology"],
    explain:
      "This question is about understanding the balance of adverse drug effects and therapeutic effects. Carabemzapine is teratogenic like many anticonvulsants (therefore option A and D is wrong), however, the risk of seizures are dangerous to the fetus as well. Therefore, we can not remove carbamazepine (option B). Option C is the best choice that recognizes the danger of seizures and skipping doses and the teratogenicity. Moreover, skipping doses is not something people should do because drugs are usually dosed with half lives in mind to keep the drug within the therapeutic window. By skipping a dose, there is a risk of the serum concentration dropping below the minimum effective dose, leading to a seizure (or withdrawal) in this case. In the big picture, this will lead to decreased effectiveness of the treatment regime.",
  },
  {
    id: 3,
    prompt:
      "Which of the following characteristics might reduce the risk of teratogenicity of valproic acid",
    choices: [
      "Prescribe with the minimum effective dose",
      "Avoiding large fluctuations in drug plasma concentration. ",
      "Increasing folic acid supplementation.",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PK", "medium", "Ob/Gyn"],
    explain:
      "All of the statements are methods that can reduce teratogenicity. Drug serum concentration and adverse effects can be directly related. Avoiding large fluctuations in plasma concentration minimizes the gradient from mother to fetus. And folic acid is required to prevent neural tube defects and aid in DNA synthesis for a developing fetus. ",
  },
  {
    id: 4,
    prompt: "Which of the following drugs are known teratogens?",
    choices: [
      "Lamotrigine (anti-convulsant)",
      "Phenytoin (anti-convulsant)",
      "Ramipril (ACE inhibitor - anti-hypertensive)",
      "ALL of the above except for lamotrigine",
    ],
    correct: "ALL of the above except for lamotrigine",
    tags: ["easy", "Ob/Gyn", "Side effects"],
    explain:
      "Most anticonvulsants are teratogenic, but it’s good to remember that lamotrigine is one of the few anticonvulsants that is not considered to be teratogenic. ACE inhibitors are known to be teratogenic and are contraindicated in pregnancy.",
  },
];
