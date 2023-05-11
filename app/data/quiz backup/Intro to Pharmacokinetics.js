export const pharmacokinetics = [
    {
        "id" : 1,
        "prompt" : "Which of the following drugs would you predict to be more readily absorbed orally",
        "choices": [
            "Molecule W is very large and lipophilic.",
            "Molecule X is very small and hydrophilic.",
            "Molecule Y is very large and hydrophilic.", 
            "Molecule Z is very small and lipohilic."],
        "correct": "Molecule Z is very small and lipohilic.",
        "tags":["PK","easy","Foundations"],
        explain: "D is the correct answer because orally administered drugs need to have good absorption. Two factors that affect absorption are lipophilicity (directly related) and size (inversely related). The more lipophilic, the more readily it crosses lipid membranes, and smaller molecules cross membranes more readily. Some hydrophilic molecules are also charged, which would make them unable to readily cross membranes without transporters."
    },
    {
        "id" : 2,
        "prompt" : "A patient with chronic pain that is well managed with a gastric absorbed painkiller (Drug X) was prescribed a proton pump inhibitor (PPI) last week. Yesterday, they noticed that the painkiller is NOT as effective as before. Which of the following statements could explain this?",
        "choices": [
            "Drug X has a low pKa, thus more of it was protonated due to the increased gastric pH, which led to less drug being absorbed",
            "Drug X has a high pKa, thus more of it was unprotonated due to the increased gastric pH, which led to less drug being absorbed",
            "Drug X has a low pKa, thus more of it was unprotonated due to the increased gastric pH, which led  to less drug being absorbed", 
            "Drug X has a high pKa, thus more of it was protonated due to the increased gastric pH, which led to less drug being absorbed"],
        "correct": "Drug X has a low pKa, thus more of it was unprotonated due to the increased gastric pH, which led  to less drug being absorbed",
        "tags":["PK","medium","Foundations"],
        explain: "In this case, we can infer that after taking a PPI, he does not reach the same level of analgesia as before with Drug X. Given that PPIs raise gastric pH, we can hypothesize that the increased gastric pH led to less of Drug X being absorbed. Then, for decreased Drug X absoprtion, more of it needs to be in a charged form: A- (i.e. unprotonated). We can then use the Henderson-Hasselbalch equation (pH = pKa + log([A-]/[HA])) to conceptualize the situation. When [A-] > [HA], then the log of that fraction will be positive. That means that the pH will have to be greater than the pKa of Drug X, for the equation to be balanced on both sides. Therefore, pKa is more likely to be low, especially given that Drug X is absorbed in the stomach, where the pH is normally 2 and Drug X was more readily absorbed when there was no PPI. Hence C is the only option that fits the aforementioned reasoning of a weakly acidic (low pKa) drug with more in its unprotonated form after PPI usage. Remember that when pH = pKa, then A- = HA since log(1)=0 (both sides of the equation are then equal).  If pH > pKa, then A- > HA because log(>1) will be positive to balance both sides of the equation. When pH < pKa, then A- < HA because log(<1) will be negative to balance both sides. Plug in some numbers and see for yourself."
    },  
    {
        "id" : 3,
        "prompt" : "Drug X and Drug Y are used for the same indication with the same route of administration and have near identical properties except that Drug X is more lipid soluble than Drug Y and Drug Y binds to albumin more readily. Which of the following is a false statement?",
        "choices": [
            "Hypoalbuminemia secondary to hepatic disease will lead to higher amounts of free Drug X in plasma",
            "Concomitant use of drugs that also heavily bind albumin will affect Drug Y more than Drug X",
            "Drug Y will have better CNS penetration", 
            "Both Drug X and Y will initially delivered to highly vascularized areas"],
        "correct": "Drug Y will have better CNS penetration",
        "tags":["PK","medium","Foundations"],
        explain: "C is the false statement because for drugs to be distributed to the CNS, they must be able to cross the blood brain barrier readily. Highly lipophilic drugs are more likely to cross this barrier, hence Drug Y would not have better penetration since it is more hydrophilic. Likewise, high protein binding will also decrease CNS penetration, since there is less free drug to pass the blood brain barrier. (A) is a true statement because Drug Y has high plasma protein binding, therefore during states of hepatic disease, less albumin will be produced, thus there will be more free Drug Y since there is less albumin in plasma for Drug Y to bind to. (B) is similar to option A. If another drug with high albumin binding is taken with Drug Y, there will be competition for albumin binding, hence there will be more of an effect on Drug Y than on Drug X. (D) is true because drugs are distributed to highly vascularized areas first such as the brain before being redistributed to areas like adipose tissue."
    },
  {
        "id" : 4,
        "prompt" : "Drug X is metabolised by P450 enzymes, which of the following statements is most likely true?",
        "choices": [
            "P450 enzymes methylate Drug X by adding a -CH3 group to make Drug X more lipohilic",
            "P450 enzymes catalyzes a reaction that exposes a -OH functional group, thus making Drug X more polar",
            "Glucuronidation (process of adding a large polar group) of Drug X is catalyzed by the P450 enzymes to facilitate excretion", 
            "Once Drug X is biotransformed by a P450 enzyme, it is no longer active"],
        "correct": "P450 enzymes catalyzes a reaction that exposes a -OH functional group, thus making Drug X more polar",
        "tags":["PK","easy","Foundations"],
        explain: "B is the best answer because P450 enzyme mediated metabolism is Phase I metabolism. During Phase I metabolism, drugs are made more hydrophilic via a slight increase in polarity by adding small polar functional groups such as -OH. (A) is not likely true because adding a methyl group (-CH3) would make the drug more lipophilic. (C) is not likely true because glucuronidation leads to the addition of a large polar group, which is more likely a Phase II metabolism process to facilitate excretion. (D) is not true because some drug metabolites are still active (e.g. benzodiazepines), and some drugs are prodrugs and are made active  (e.g. codeine to morphine) and require Phase I metabolism via P450 enzymes."
    },
{
        "id" : 5,
        "prompt" : "Codeine, a pro-drug, is metabolized by CYP2D6 into morphine, which of the following is most likely true?",
        "choices": [
            "Joe has a polymorphism that causes increased CYP2D6 activity, which will lead to decreased toxicity and pharmacological activity of codeine",
            "Bill is undergoing smoking cessation therapy and takes bupropion, a CYP2D6 inhibitor, which will be lead to increased toxicity and pharmacological activity of codeine",
            "Avoiding first pass metabolism is crucial in maximizing the therapeutic effects of codeine", 
            "Carl takes dexamethasone, a CYP2D6 inducer, for his rheumatoid arthritis, which will lead lead to increased toxicity and pharmacological activity of codeine"],
        "correct": "Carl takes dexamethasone, a CYP2D6 inducer, for his rheumatoid arthritis, which will lead lead to increased toxicity and pharmacological activity of codeine",
        "tags":["PK","medium","Foundations"],
        explain: 'This question here tests the understanding of a pro-drug. With pro-drugs, there will be increased activity and toxicity with enzyme induction, while less activity and toxicity with enzyme inhibitors. The only option that correctly describes this concept is Carl’s case, where dexamethasone leads to increased CYP2D6 activity, which will make the codeine be more effective and toxic.'
    }, 
{
        "id" : 6,
        "prompt" : "Which of the following statements is true regarding drug excretion",
        "choices": [
            "Drugs can be excreted via the bile duct in a passive manner",
            "Once a drug passes the glomerulus and into the proximal tubule, it can no longer be reabsorbed",
            "Only free drug can be filtered through the glomerulus under non-pathological states.", 
            "Excretion via the kidney favours lipid soluble drugs"],
        "correct": "Only free drug can be filtered through the glomerulus under non-pathological states.",
        "tags":["PK","medium","Foundations"],
        explain: "Option C is the true statement because for a drug to be filtered through the glomerulus, it has to be free and not bound to a plasma protein because most proteins do not pass through the glomerulus in healthy patients. In pathological states, albumin will cross the glomerulus like in diabetic nephropathy. (A) is false because bile excretion is an active process. (B) is false because drugs can be reabsorbed in the loops, distal tubule, and collecting ducts. (D) is false because renal excretion favors hydrophilic drugs because then the drug will be less likely to be reabsorbed through lipid membranes and thus stay in the urine."
    },  
]