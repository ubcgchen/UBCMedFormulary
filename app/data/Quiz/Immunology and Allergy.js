export const immunologyAndAllergy = [
    {
        "id" : 1,
        "prompt" : "Given that epinephrine and norepinephrine are both released during SNS activation and structurally very similar, why is norepinephrine not used in the initial treatment of anaphylaxis shock?",
        "choices": [
            "Norepinephrine has minimal affinity for β2 adrenergic receptors, therefore does not allow for bronchodilation",
            "Norepinephrine is a valid alternative to epinephrine since it has affinity for both α and β adrenergic receptors",
            "Norepinephrine has minimal affinity for β1 adrenergic receptors, therefore does not allow for bronchodilation", 
            "Norepinephrine has affinity for β2 adrenergic receptors, therefore causing vasodilation and a drop in blood pressure.",
            "Norepinephrine has decreased tissue absorption due to the lack of a methyl group (lipophilic), therefore the onset of action is slower than epinephrine."],
        "correct": "Norepinephrine has minimal affinity for β2 adrenergic receptors, therefore does not allow for bronchodilation",
        "tags":["MoA","easy","ANS","ER","Immunology"]
    },
    {
        "id" : 2,
        "prompt" : "An 8 y/o boy is having an anaphylactic reaction after being stung by wasp on his left shoulder, his father is unsure on how to use the 0.3 mg EpiPen and hands it to you. Where would you administer the EpiPen and why?",
        "choices": [
            "IM deltoid because it’s large and more vascularized than the thigh", 
            "IM deltoid because it’s closer to the heart and lungs than the thigh",
            "IM thigh because it’s large and more vascularized than the deltoid",
            "IM thigh because it’s large and less vascularized than the deltoid",
            "SC deltoid because there’s better absorption through adipose tissue than muscle"],
        "correct": "IM thigh because it’s large and more vascularized than the deltoid",
        "tags":["PK","medium","RoA","ER","Immunology"]
    },
   {
        "id" : 3,
        "prompt" : "A 57 y/o truck driver has been suffering from allergies for the last few years. He wants to be prescribed a drug, so that he can focus on driving safely rather than scratching and sneezing all the time. Which of the following antihistamines would you prescribe?",
        "choices": [
            "Diphenhydramine",
            "Dimenhydrinate",
            "Loratadine", 
            "Ranitidine"],
        "correct": "Loratidine",
        "tags":["PD","easy","Immunology","Side effects"]
    },  
    {
        "id" : 4,
        "prompt" : "A 15 y/o patient presents to the ER with generalized urticaria across his trunk, shortness of breath, BP 80/50, and HR 135. 0.3 mg IM epinephrine (E) is administered. How will E affect the patient’s cardiac system?",
        "choices": [
            "E activates α1 adrenergic receptors on vascular smooth muscle, leading to increased peripheral vascular resistance, therefore increasing blood pressure.",
            "E activates β1 adrenergic receptors in the heart, leading to increased contractility and heart rate, therefore increasing blood pressure",
            "E activates β2 adrenergic receptors on vascular smooth muscle to skeletal muscle, leading to decreased peripheral vascular resistance, therefore decreasing blood pressure", 
            "All of the above",
            "All except for C"],
        "correct": "All of the above",
        "tags":["PD","medium","ER","ANS","Immunology","MoA"]
    },
  {
        "id" : 5,
        "prompt" : "A 15 y/o patient presents to the ER with generalized urticaria across his trunk, vomiting, BP 80/50, and HR 135. 0.3 mg epinephrine IM is administered, followed by 10 mg cetirizine IV. Predict the pharmacological action of cetirizine.",
        "choices": [
            "Cetirizine blocks H2 receptors causing decreased acid production and less vomiting.",
            "Cetirizine blocks H1 receptors causing decreased vascular permeability",
            "Cetirizine blocks H1 receptors in the CNS leading to drowsiness", 
            "Cetrizine blocks both H1 and H2 receptors, which resolves the urticaria and vomiting",
            "Cetrizine blocks H1 receptors causing the relaxation of bronchial smooth muscle"],
        "correct": "Cetirizine blocks H1 receptors causing decreased vascular permeability",
        "tags":["PD","medium","MoA","Immunology","Autacoids"]
    },
{
        "id" : 6,
        "prompt" : "55 y/o woman suffers from nasal congestion and buys OTC phenylephrine (α1 adrenergic receptor agonist). With your knowledge of adrenergic receptors, will this help her nasal congestion and why?",
        "choices": [
            "No because it doesn’t act as a bronchodilator via β2 adrenergic receptors.",
            "Yes because activation of α1 adrenergic receptors will vasoconstrict her upper airway mucosal vessels leading to decreased edema",
            "Yes because activation of α1 adrenergic receptors will decrease inflammatory mediator release from mast cells", 
            "No because it doesn’t act on β2 adrenergic receptors to decrease inflammatory mediator release from mast cells"],
        "correct": "Yes because activation of α1 adrenergic receptors will vasoconstrict her upper airway mucosal vessels leading to decreased edema",
        "tags":["PD","medium","ANS","MoA"]
    }, 
]