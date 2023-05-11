export const pharmacodynamics = [
    {
        "id" : 1,
        "prompt" : "Molecule X is found to have 10-fold higher affinity for the µ opioid receptor than morphine (µ opioid receptor agonist) and no intrinsic activity. Which statement is most likely true?",
        "choices": [
            "Molecule X is a µ opioid receptor agonist and is more potent than morphine.",
            "Molecule X is a µ opioid receptor antagonist and could potentially block the effects of morphine.",
            "Molecule X is a µ opioid receptor partial agonist and probably binds to a different location than morphine.", 
            "Molecule X is a µ opioid receptor inverse agonist because it has no intrinsic activity."],
        "correct": "Molecule X is a µ opioid receptor antagonist and could potentially block the effects of morphine.",
        "tags": ["PD","easy","Foundations"],
        explain: "B is the correct answer because molecule X has no intrinsic activity for the µ opioid receptor, but has affinity for it. This suggests that molecule X will bind to the receptor without causing a downstream physiological effect. This will block the action of endogenous or exogenous agonists of the µ opioid receptor and their physiological effect. (A) Higher affinity for a receptor does not predict agonist or antagonist function. (C) partial agonists will have some intrinsic activity (less than full agonists). (D) inverse agonists will have negative intrinsic activity (non-zero), essentially the direct opposite effect of an agonist."
    },
    {
        "id" : 2,
        "prompt" : "Given are therapeutic indexes (TI) of 4 drugs. Drug A: 1.4, Drug B: 2.4, Drug C: 1.2, Drug D: 6.4. Which of the following is true?",
        "choices": [
            "Drug C is the safest because it has the smallest TI",
            "The ED50 of Drug A is 1.4 times higher than its TD50",
            "The TD50 of Drug D is 6.4 times higher than its ED50", 
            "Drug D will need a higher dose to have a therapeutic effect because it has the largest TI"],
        "correct": "The TD50 of Drug D is 6.4 times higher than its ED50",
        "tags":["PD","easy","Foundations"],
        explain: "C is the true statement because the therapeutic index (TI) is calculated by the toxic dose in 50% of the population over the effective dose in 50% of the population (TD50/ED50). This makes sense since usually a toxic dose to cause a specific adverse event (e.g. tachycardia) should occur at a higher dose than the desired therapeutic dose (e.g. analgesia). Of note the TI in this case is based on the median doses, which assumes the dose response curves of the toxic effect and therapeutic effect are parallel. A more robust measure is actually TD1/ED99, which is the toxic dose in 1% of the population over the effective dose in 99% of the population."
    },
   {
        "id" : 3,
        "prompt" : "Given are median effective doses of 4 drugs. Drug A: 6.9 µM, Drug B: 0.23 mM, Drug C: 1.6 µM, Drug D: 42 µM. Which drug is the most potent?",
        "choices": [
            "Drug A",
            "Drug B",
            "Drug C", 
            "Drug D"],
        "correct": "Drug C",
        "tags":["PD","easy","Foundations"],
        explain: "C is the correct answer because potency and median effective dose (ED50) are inversely related. The lower the dose, the more potent the drug is. i.e. less drug is required to have the same effect than another drug"
    },  
    {
        "id" : 4,
        "prompt" : "Which of the following cases would be the best option to administer the desired drug enterally?",
        "choices": [
            "Epinephrine for a patient suffering from anaphylactic shock",
            "Betamethasone for a patient with a localized rash on their neck",
            "A monoclonal antibody (omalizumab) for a patient with severe asthma", 
            "Budesonide for a patient with severe ulcerative colitis"],
        "correct": "Budesonide for a patient with severe ulcerative colitis",
        "tags":["PK","medium","Foundations"],
        explain: "Budesonide is the correct answer because it is the only option here that suggests the need to deliver a drug through the oral route. Enteral administration means to deliver a drug via the intestines (i.e. oral/PO). Topical and injections (IV, SC, IM) are not enteral routes. In this case, budesonide (a synthetic steroid), is given orally to topically treat ulcerative colitis that is affecting the intestinal lining (specifically in the colon). Other routes will not be able to effectively reach the desired location or will have increased systemic adverse effects.  Epinephrine here needs to be administered STAT, hence it would be administered via an injection (most likely IM) to quickly treat the anaphylactic shock. Betamethasone in this case is needed to treat a localized rash on the skin, hence a topical route would be the best. Omalizumab is a monoclonal antibody, which has to be administered via injection, this is because most biologics (mAbs) would be broken down by stomach acid since they are proteins, and hence will lose their therapeutic activity if given orally."
    },
  {
        "id" : 5,
        "prompt" : "Which of the following statements is true?",
        "choices": [
            "A drug with a lower potency may require higher doses, which could lead to unwanted side effects",
            "Highly potent drugs are safer than a less potent drugs",
            "For a drug to work it has to bind a receptor", 
            "Drugs with a smaller ED50 are more efficacious"],
        "correct": "A drug with a lower potency may require higher doses, which could lead to unwanted side effects",
        "tags":["PD","medium","Foundations"],
        explain: "A is the true statement because a drug with low potency will require a larger dose to cause the desired effect. Usually an increased dose comes with increased adverse effects such as due to nonspecific receptor activity or increased workload for drug metabolism. (B) is not necessarily true, there are drugs that are highly potent, but could have a low TI, such as synthetic opioids vs morphine. Fentanyl requires lower doses to reach analgesia, but also lower doses to cause respiratory depression than morphine. (C) not all drugs require a receptor. One example are antacids like Tums. Therapeutic effect is achieved by neutralizing stomach acid without any receptors. (D) is not true because although a smaller ED50 suggests a more potent drug, this does not predict the intrinsic activity (efficacy) of a drug once it binds a receptor. It is possible to have a highly potent drug that has a lower maximum effect than a less potent drug. Essentially, the dose response curve of this drug could plateau at a lower effect size (y-axis) than other less potent drugs."
    }, 
]