export const data = [
    {
        "id" : 1,
        "prompt" : "A 56 y/o patient with epilepsy, hypertension and GERD presents to the clinic for an annual checkup. During the history he reports feeling thirsty more often and fatigued. His medications include furosemide, ramipril, omeprazole, phenytoin, and acetaminophen PRN. His older brother was diagnosed with type 2 diabetes mellitus (T2DM) last year. On inspection his BMI is 27. You highly suspect that he may have T2DM given his risk factor. Which one of his medications would most likely also play a role in development of T2DM?",
        "choices": [
           // "Acetaminophen", 
            "Furosemide",
            "Omeprazole",
            "Phenytoin",
            "Ramipril"],
        "correct": "Phenytoin",
        "tags":["PD","hard","Neurology","Endocrinology","side effects"]
    },
    {
        "id" : 2,
        "prompt" : "Andy, a 23 y/o patient, presents to the ER with hypotension, tachycardia, and shortness of breath. His breathing is described as rapid deep inspirations and he smells “fruity”. Initial labs report a wide anion gap acidosis (27 mM), positive urine ketones, elevated β-OHbutyrate (12 mM), serum osmol slightly elevated (300 mOsm/kg). His plasma glucose is slightly elevated. His history is negative for diabetes. You highly suspect a certain condition and start volume repletion, and you are about to start IV insulin, but an astute nurse points out that Andy’s serum K+ is 3.1 mM.  Is this a concern, why or why not?",
        "choices": [
            "No, insulin does not affect serum K+ levels",
            "No, Andy is in a high total body K+ state, insulin causes K+ to shift into cells and this will normalize his serum K+",
            // "No, Andy is in a low total body K+ state, insulin causes K+ to shift out of cells and this will normalize his serum K+", 
            "Yes, Andy is in a high total body K+ state, insulin causes K+ to shift out of cells, and this will increase his serum K+ to dangerous levels",
            "Yes, Andy is in a low total body K+ state, insulin causes K+ to shift into cells and this will reduce his serum K+ to dangerous levels"],
        "correct": "Yes, Andy is in a low total body K+ state, insulin causes K+ to shift into cells and this will reduce his serum K+ to dangerous levels",
        "tags":["PD","hard","ER","Endocrinology","MoA"]
    },
   {
        "id" : 3,
        "prompt" : "An 80 y/o patient with T2DM, hypertension, and dyslipidemia presents to the ER after being found unresponsive in her kitchen She is hypotensive, tachycardic, and has no urine output. Initial labs  show elevated levels of glucose (72 mM), Na+ (155 mM), K+ (5.6 mM), Cl- (120 mM), creatinine (140 µM), and urea (20 mM), but normal HCO3- (24 mM). Her blood pH is normal, blood β-OHbutyrate is slightly elevated and positive urine ketones. You have high suspicion of an endocrine emergency, but you are unable to locate a precipitant. You check her medications: metformin, rosuvastatin, amlodipine, and hydrochlorothiazide. Given this new information, which of her following medications may have precipitated the condition?",
        "choices": [
            "Amlodipine", 
            // "Hydrochlorothiazide",
            // "Metformin",
            "Rosuvastatin (Lipid lowering medication)",
            "A and B"],
        "correct": "A and B",
        "tags":["PD","hard","ER","Endocrinology","MoA","side effects"]
    },  
    {
        "id" : 4,
        "prompt" : " A 62 y/o patient presents to the clinic with polyuria, polydipsia, weight loss, and fatigue. A fasting plasma glucose reports 7.9 mM and A1C = 7.4%. Your family medicine preceptor turns to you and asks if you know what pharmacological intervention to start with in this case if you want to target an A1C ≤ 7%. You respond confidently with:",
        "choices": [
            "Insulin only",
            "Insulin + Metformin",
            // "Insulin + Metformin + a 2nd agent", 
            "Metformin only",
            "Metformin + a 2nd agent"],
        "correct": "Insulin + Metformin",
        "tags":["PD","medium","Endocrinology"]
    },
  {
        "id" : 5,
        "prompt" : "Which of the following glucose lowering agent classes is correctly matched with its respective example?",
        "choices": [
            "Dipeptidyl peptidase-4 inhibitors (DPP-4) - Exenatide",
            "GLP-1 receptor agonists - Sitagliptin",
            "SGLT2 inhibitors - Glyburide", 
            "Sulfonylureas - Canagliflozin",
            "PPARγ activators - Rosiglitazone"],
        "correct": "PPARγ activators - Rosiglitazone",
        "tags":["PD","easy","MoA","Endocrinology"]
    },
{
        "id" : 6,
        "prompt" : "Which of the following modifications to insulin would you expect in a basal insulin formulation?",
        "choices": [
            "Addition of a hydrophilic chain",
            "Addition of a lipophilic chain",
            "Favor inulin monomers over hexamers", 
            "IV route of administration ",
            "IM route of administration"],
        "correct": "Addition of a lipophilic chain",
        "tags":["PK","medium","Endocrinology"]
    }, 
{
        "id" : 7,
        "prompt" : "What is the mechanism of action of insulin?",
        "choices": [
            "Binds cell surface tyrosine kinase receptors to increase GLUT-2 translocation, glycogenesis, lipogenesis; decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis",
            "Binds  cell surface tyrosine kinase receptors to increase GLUT-2 translocation,  glycogenolysis, lipolysis, ketogenesis, gluconeogenesis; and decrease glycogenesis, lipogenesis",
            "Binds cell surface tyrosine kinase receptors to increase GLUT-4 translocation, glycogenesis, lipogenesis; and decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis", 
            "Binds intracellular glucose-sensing receptor to increase GLUT-4 translocation, glycogenolysis, lipolysis, ketogenesis, gluconeogenesis; and decrease glycogenesis, lipogenesis"],
        "correct": "Binds cell surface tyrosine kinase receptors to increase GLUT-4 translocation, glycogenesis, lipogenesis; and decrease glycogenolysis, lipolysis, ketogenesis, gluconeogenesis",
        "tags":["PD","easy","MoA","Endocrinology"]
    }, 
{
        "id" : 8,
        "prompt" : "Which of the following is NOT an effect of metformin?",
        "choices": [
            "Decreased hepatic glucose (gluconeogenesis, glycogenolysis)",
            "Decreased insulin resistance in peripheral tissue",
            "Decreased fatty acid oxidation", 
            "Increased anaerobic glucose metabolism",
            "Increased insulin secretion"],
        "correct": "Increased insulin secretion",
        "tags":["PD","medium","MoA","Endocrinology"]
    },
{
        "id" : 9,
        "prompt" : "A 62 y/o patient with T2DM  presents to the ER with a 1 week history of diarrhea and abdominal pain. She is tachycardic, tachypneic, and hypotensive. A quick abdominal exam reveals ascites, caput medusae, negative Murphy’s sign and no jaundice. An eGFR comes back with <30 mL/min. An arterial blood gas reveals acidemia and high lactate levels. Which of the following medications is associated with this presentation?",
        "choices": [
            "Canagliflozin",
            // "Dulaglutide",
            "Glyburide",
            "Insulin",
            "Metformin"],
        "correct": "Metformin",
        "tags":["hard","MoA","PD","Endocrinology","side effects"]
    },
{
        "id" : 10,
        "prompt" : "Which of the following correctly describes the mechanism of action of glyburide?",
        "choices": [
            "Mimics high ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
            "Mimics high ATP states by opening K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
            "Mimics low ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release", 
            "Mimics low ATP states by opening K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release"],
        "correct": "Mimics high ATP states by closing K\u1D00\u1d1b\u1D18 channel by binding SUR1, which allows membrane depolarization and subsequent  Ca\u00b2\u207a influx into β-cells, resulting in insulin release",
        "tags":["medium","MoA","PD","Endocrinology"]
    },
{
        "id" : 11,
        "prompt" : "Which of the following glucose lowering agents is prone to weight gain?",
        "choices": [
            "Canagliflozin",
            "Repaglinide",
            "Rosiglitazone", 
            "Semaglutide",
            "B and C"],
        "correct": "B and C",
        "tags":["PD","medium","Endocrinology","side effects","MoA"]
    },
{
        "id" : 12,
        "prompt" : "A 56 y/o patient with T2DM was initially prescribed metformin for the first 2 years, but could not tolerate the diarrhea and metallic taste. She was switched to Drug X and has been tolerating it well for the last 3 years. At first Drug X was more effective at reducing her A1C than metformin. However, over the past year, there has been marked reduction in Drug X’s efficacy leading to an elevation of her A1C levels. Assuming no significant changes in lifestyle and ideal dosing, which of the following is most likely Drug X?",
        "choices": [
            "Canagliflozin",
            "Exenatide",
            "Glyburide",
            "Rosiglitazone", 
            "Sitagliptin"],
        "correct": "Glyburide",
        "tags":["PD","medium","MoA","Endocrinology","side effects"]
    },
{
        "id" : 13,
        "prompt" : "Which of the following mechanisms of actions of  glucose lowering agents would you more likely use in a young male with diabetes rather than an older female patient with diabetes?",
        "choices": [
            "α-glucosidase inhibitor",
            "DPP-4 inhibitor",
            "GLP-1R agonist", 
            "PPAR-γ activator",
            "SGLT2 inhibitor"],
        "correct": "PPAR-γ activator",
        "tags":["PD","medium","side effects","Endocrinology"]
    },
{
        "id" : 14,
        "prompt" : "Which of the following is true regarding DPP-4 inhibitors (sitagliptin) and GLP-1R agonists (dulaglutide)?",
        "choices": [
            "DPP-4 inhibitors cause higher insulin secretions than GLP-1R agonists",
            "DPP-4 inhibitors decrease gastric emptying more than GLP-1R agonists",
            "DPP-4 inhibitors tend to have positive cardiac effects, while GLP-1R agonists are cardiac neutral", 
            "GLP-1R agonists achieve pharmacological concentrations, while DPP-4 inhibitors have a ceiling effect dependent on physiological GLP-1 and GIP concentrations",
            "GLP-1R agonists are taken orally and DPP-4 inhibitors are SC injections"],
        "correct": "GLP-1R agonists achieve pharmacological concentrations, while DPP-4 inhibitors have a ceiling effect dependent on physiological GLP-1 and GIP concentrations",
        "tags":["PD","medium","MoA","side effects","Endocrinology","PK"]
    },
{
        "id" : 15,
        "prompt" : "How does canagliflozin restore tubular glomerular feedback in early diabetic nephropathy?",
        "choices": [
            "Inhibition of SGLT2 in the proximal tubule will decrease Na+ delivery to the macula densa, thereby causing afferent arteriole constriction to normalize GFR",
            "Inhibition of SGLT2 in the proximal tubule will increase Na+ delivery to the macula densa, thereby causing afferent arteriole dilation to normalize GFR",
            "Inhibition of SGLT2 in the proximal tubule will decrease Na+ delivery to the macula densa, thereby causing afferent arteriole constriction to normalize GFR", 
            "AInhibition of SGLT2 in the proximal tubule will increase Na+ delivery to the macula densa, thereby causing afferent arteriole dilation to normalize GFR"],
        "correct": "Inhibition of SGLT2 in the proximal tubule will decrease Na+ delivery to the macula densa, thereby causing afferent arteriole constriction to normalize GFR",
        "tags":["PD","MoA","medium","Endocrinology","Nephrology"]
    },
{
        "id" : 16,
        "prompt" : "A 36 y/o patient with a history of T2DM arrives at the ER with hypotension, tachycardia, and shortness of breath. His breathing is described as rapid deep inspirations and he smells “fruity”. Initial labs report a wide anion gap acidosis (27 mM), positive urine ketones, elevated β-OHbutyrate (12 mM), and slightly elevated serum osmol (300 mOsm/kg). A plasma glucose comes back normal. You don’t know what medication he is on so you call the patient’s family doctor. Which one of his following medications is most likely to have caused the presented case?",
        "choices": [
            "Acarbose",
            "Dapagliflozin",
            "Glyburide", 
            "Exenatide",
            "Insulin"],
        "correct": "Dapagliflozin",
        "tags":["PD","hard","MoA","Side effects","ER","Endocrinology"]
    },
{
        "id" : 17,
        "prompt" : "How does the mechanism of action of acarbose achieve its therapeutic objective?",
        "choices": [
            "Induces GLP-1 release, thereby increasing insulin secretion",
            "Inhibits α-glucosidase, thereby preventing the breakdown of polysaccharides to reduce the amount of monosaccharides available for absorption",
            "Inhibits Na+ cotransport carrier, thereby reducing monosaccharide absorption", 
            "Inhibits salivary amylase, thereby reducing the breakdown of starch to reduce the amount of monosaccharides available for absorption"],
        "correct": "Inhibits α-glucosidase, thereby preventing the breakdown of polysaccharides to reduce the amount of monosaccharides available for absorption",
        "tags":["PD","easy","MoA","Endocrinology","GI"]
    },
{
        "id" : 18,
        "prompt" : "An 18 y/o patient arrives at the ER after collapsing at a college party. He presents with abdominal pain, nausea, vomiting, tachypnea and altered mental status. He complains of feeling extremely warm. An arterial blood gas shows acidemia and low [HCO3-]= 8 mM. Electrolytes show a [Na+]= 140 mM (normal), [K+] = 2.8 mM (low)  [Cl-] = 110 mM (normal). Plasma glucose is normal. You suspect ethanol induced wide anion gap acidosis, but the blood alcohol returns normal. You ask the patient’s friends what happened and they recall pranking their buddy by rubbing an anti-inflammatory ointment on his face. What other causes of wide anion gap acidosis would you suspect now?",
        "choices": [
            "Aminoglycosides",
            "Acetaminophen/paracetamol",
            "Diabetic ketoacidosis", 
            "Isoniazid",
            "Salicylates"],
        "correct": "Salicylates",
        "tags":["PD","hard","ER","Nephrology"]
    }
]