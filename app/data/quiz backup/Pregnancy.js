export const pregnancy = [
    {
        "id" : 1,
        "prompt" : "What would you expect to occur if a patient undergoing labor takes a NSAID?",
        "choices": [
            "Increased softening of the cervix",
            "Increased uterine contraction",
            "Prolonged labour", 
            "Increased progesterone",
            "C and D"],
        "correct": "Prolonged labour",
        "tags":["PD","medium","Ob/Gyn","MoA"],
        explain: "This question requires understanding the mechanism of NSAIDs. The correct answer is (C) because NSAIDs will inhibit prostaglandin production (both PGE and PGF2alpha). By working backwards, we know that prostaglandins are important during labour since they help stimulate uterine contraction and soften the cervix, therefore labour would be prolonged if there were less prostaglandins. (D) is wrong because NSAIDs do not play a direct role with progesterone levels during labour. In fact during pregnancy progesterone will increase the expression of prostaglandin dehydrogenase, which increases the breakdown of prostaglandins."
    },
    {
        "id" : 2,
        "prompt" : "A 30 y/o mother gives birth to a healthy baby boy. Following birth she starts to bleed heavily. The Ob/Gyn resident orders oxytocin to reduce postpartum hemorrhage. How does oxytocin reduce postpartum hemorrhage?",
        "choices": [
            "Increases intracellular calcium in the myometrium leading to uterine contraction that clamps down on vessels",
            "Increases intracellular calcium in uterine blood vessels leading to vasoconstriction that reduces blood flow",
            "Increases the release of vonWIllebrand factor and Factor VIII from endothelial cells, leading to increased blood clot formation", 
            "Venodialtes the inferior vena cava causing a pressure gradient that draws blood away from the uterus, thereby decreasing bleeding"],
        "correct": "Increases intracellular calcium in the myometrium leading to uterine contraction that clamps down on vessels",
        "tags":["PD","medium","MoA","Ob/Gyn"],
        explain: "This question requires understanding the effects of oxytocin. In this vignette, we are presented with a case of postpartum hemorrhage (PPH). Oxytocin can minimize PPH as described in (A). Other strong stimulants of uterine contraction can also be used to minimize PPH like prostaglandins (dinoprostone, misoprostol) or ergots (ergometrine)."
    },
   {
        "id" : 3,
        "prompt" : "A 32 y/o pregnant patient G3T1P1 presents to the clinic for her week 37 prenatal checkup. An anovaginal swab is taken and it is found that she has Group B strep. What pharmacological intervention needs to be done?",
        "choices": [
            "Treat with penicillin G now",
            "Treat with penicillin G during labor",
            "Treat with streptomycin now", 
            "Treat with streptomycin during labor"],
        "correct": "Treat with penicillin G during labor",
        "tags":["PD","medium","Ob/Gyn","Infectious"],
        explain: "This question requires understanding the prenatal checkup tests and interventions. In this vignette, we have a patient who has Group B strep, which puts the neonate at risk of being infected with Group B strep during birth. This is best treated prophylactically during labour with Pen G (assuming the patient does not have a penicillin allergy), hence (B) is the correct answer."
    },  
    {
        "id" : 4,
        "prompt" : "A 32 y/o pregnant patient G3T1P1 presents to the ER with a stiff neck, fever, and headache. She is eventually diagnosed with listeriosis after eating some cheese at a wine and cheese event with her husband. She is started on ampicillin, an antibiotic that is effective against Listeria and largely excreted unchanged renally. What sort of changes to dosing would you expect in this pregnant patient (assuming the changes are significant enough)",
        "choices": [
            "Decrease dose to account for decreased renal blood flow and GFR",
            "Decrease dose to account for ampicillin teratogenicity",
            "Increase dose to account for increased renal blood flow and GFR", 
            "Increase dose to account for suppressed immunological function"],
        "correct": "Increase dose to account for increased renal blood flow and GFR",
        "tags":["PK","medium","Ob/Gyn","Infectious","Foundations"],
        explain: " This question requires understanding PK changes that occur due to physiological adaptations during pregnancy. In this vignette, we have a pregnant patient who is taking an antibiotic that is mostly renally excreted in its active form. During pregnancy there is increased cardiac output and decreased SVR. This leads to increased renal blood flow and increased GFR. Therefore drugs that are excreted renally (filitrated) would be removed from the body faster, hence (C) is the correct answer. Note: ampicillin is mostly excreted via tubular secretion. Note2: This question was mainly focused on thinking how PK can be affected in different physiologies; changing the dose would be dependent on many other factors that aren’t adequately addressed in the vignette."
    },
  {
        "id" : 5,
        "prompt" : "When prescribing a drug with high protein binding to a healthy pregnant patient, what sort of dosing adjustment should be made (assume no compensatory changes in clearance)?",
        "choices": [
            "Decrease dose",
            "Increase dose",
            "Same dose", 
            "No dose"],
        "correct": "Decrease dose",
        "tags":["PK","medium","Foundations","Ob/Gyn"],
        explain: "This question requires understanding physiological changes related to pregnancy and the resulting effect on PK. Pregnant patients tend to have decreased levels of albumin. Assuming that this effect is significant, then drugs with high protein binding should have (A) decreased doses to compensate for the increase in free drug that would occur with the standard dose. Clinically, this isn’t significant enough, but it’s a good way to test your understanding of PK."
    },   
]