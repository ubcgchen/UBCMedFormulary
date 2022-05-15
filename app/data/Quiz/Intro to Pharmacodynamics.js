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
        "tags": ["PD","easy","Foundations"]
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
        "tags":["PD","easy","Foundations"]
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
        "tags":["PD","easy","Foundations"]
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
        "tags":["PK","medium","Foundations"]
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
        "tags":["PD","medium","Foundations"]
    }, 
]