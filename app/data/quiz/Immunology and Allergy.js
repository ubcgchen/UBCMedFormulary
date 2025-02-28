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
        "tags":["MoA","easy","ANS","ER","Immunology"],
        explain: "This question requires understanding the effects of catecholamines. Here we need to understand the different receptor affinities of norepinephrine (NE) and epinephrine (E). Both of these drugs are released by the SNS in our “flight and fight” response. E has affinity for both α (1, 2) and β (1, 2, 3) adrenoceptors (more affinity for β), while NE has affinity for α (1, 2) and β (1) adrenoceptors (more affinity for α). In anaphylactic shock, we want to both increase blood pressure via vasoconstriction (α1) and increasing cardiac output via increased contractility (β1), decrease mucus secretions and edema via vasoconstriction (α1), decrease bronchospasm via bronchodilation (β2), and decrease mediator release from mast cells and basophils (β2). E is able to exert all of these effects. Hence, (A) is the correct answer. Side note: NE is a valid adjuvant option if the patient needs extra help in maintaining cardiac output. The addition of an extra methyl group on E increases its affinity for the β adrenoceptors."
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
        "tags":["PK","medium","RoA","ER","Immunology"],
        explain: "This question requires the understanding of different routes of administration and their role in treatment. Anaphylactic shock is a medical emergency, so we want the drug to reach therapeutic concentrations as quickly as possible. IV would allow us to achieve that instantly, however, that requires training. The next best option here is IM (A-D). Muscles are highly vascularized tissues, which allows for faster absorption of drugs. (E) SC is into adipose tissue, which is not as vascularized, thus slower absorption. Another reason why SC is not recommended is that E is a potent vasoconstrictor, and this will v/c the vessels in the SC tissue, further impairing absorption. Now we are left with a thigh or deltoid. Using the same concept of vascularization, larger muscle groups tend to be more vascularized, and thus will have faster absorption. The thigh is a larger muscle group than the deltoid, hence is more vascularized and will have faster absorption, thus (A) is the correct answer. Side note: you might wonder if the v/c effects of E are a problem in IM. A potential reason why it isn’t a big deal is because vessels to skeletal muscles have β2 adrenoceptors (E has β2 affinity), which leads to vasodilation. This is important because in a “fight or flight” response, you want to increase blood flow to skeletal muscles fight or flight."
    },
   {
        "id" : 3,
        "prompt" : "A 57 y/o truck driver has been suffering from allergies for the last few years. He wants to be prescribed a drug, so that he can focus on driving safely rather than scratching and sneezing all the time. Which of the following antihistamines would you prescribe?",
        "choices": [
            "Diphenhydramine",
            "Dimenhydrinate",
            "Loratadine", 
            "Ranitidine"],
        "correct": "Loratadine",
        "tags":["PD","easy","Immunology","Side effects"],
        explain: "This question requires understanding that there are two different histamine receptor antagonists and side effects of different generations of H1 receptor antagonists. All four options here are antihistamines. However, only H1 receptor antagonists actually target the pathological process of allergies. (D) Ranitidine is a H2 receptor antagonist and is used to reduce gastric acid secretion, hence is not an option. (A) and (B) are both first generation H1 receptor antagonists, which all have an important side effect of causing drowsiness (sedation) due to their ability to cross the blood brain barrier and block histamine receptors in the CNS. In this case, an antihistamine that causes drowsiness is not ideal for this patient’s occupation of truck driving. Hence (C) is the best option. Loratadine is a 2nd generation H1 receptor antagonist, which has minimal CNS penetration. Therefore loratadine will not cause drowsiness, and thus is the best option for this patient."
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
        "tags":["PD","medium","ER","ANS","Immunology","MoA"],
        explain: "This question requires understanding the effects of epinephrine and the SNS. In this case, all of the above are valid effects of E on the cardiovascular system. The drop in blood pressure via β2 adrenergic receptors is not as important as α1 and β1 adrenergic receptor stimulation, hence a rise in blood pressure is the end result with E administration. But it is important to remember that β2 adrenergic receptors are found in vessels to skeletal muscles, to allow for increased blood flow to skeletal muscle to facilitate the fight or flight response."
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
        "tags":["PD","medium","MoA","Immunology","Autacoids"],
        explain: "This question requires understanding the effects of histamine. In this vignette, we are presented with a patient in anaphylactic shock. Epi has been administered, and the ER team decides to adjuvantly administer cetirizine IV. Cetrizine is a 2nd generation antihistamine for H1 receptors, so the expected pharmacological action is correctly outlined in (B). This will combat the edema, and histamine release from mast cells. Since cetrizine is 2nd generation, we would not expect CNS penetration to cause drowsiness. Cetrizine does not block H2 receptors, so it will have minimal effect on acid production."
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
        "tags":["PD","medium","ANS","MoA"],
        explain: "This question requires understanding the therapeutic role of adrenergic receptors (SNS). We have not been directly taught what phenylephrine is, but this question should have enough information (α1 adrenergic receptor agonist) and the symptom (nasal congestion) she is trying to treat to infer a pharmacological explanation. Nasal congestion is usually due to increased mucus secretions and edema of the mucous membrane. (B) is the correct answer because it correctly uses the effects of  α1 adrenergic receptor stimulation to describe a therapeutic process, which is the v/c of mucosal vessels leading to less edema in the nasal cavity. (A) Bronchodilation will not play a role since bronchioles are not in the upper airways. (C) is not true, α1 does not mediate the decrease in inflammatory cytokines from mast cells, that is an effect of β2 (D)."
    }, 
]