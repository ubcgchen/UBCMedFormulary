export const data = [
    {
        "id" : 1,
        "prompt" : "A 53 y/o patient with a history of GERD presents to his gastroenterologist for his annual checkup. The gastroenterologist performs an esophagogastroduodenoscopy. During the procedure the doctor notes numerous gastric polyps. The patient does not have a personal or family history of cancer, and has been on rabeprazole for the last 10 years with no complaints. Where is the most likely location of these polyps and the risk of malignancy?",
        "choices": [
            "Body and high risk",
            "Body and low risk",
            "Fundus and high risk", 
            "Fundus and low risk",
            "Antrum and high risk",
            "Antrum and low risk"],
        "correct": "Fundus and low risk",
        "tags":["easy","GI","side effects"]
    },
    {
        "id" : 2,
        "prompt" : "Which of the following describes the pharmacology of PPIs the best?",
        "choices": [
            "A pro-drug that requires acid-activation that irreversibly inhibits H\u207A/K\u207A ATPase pumps on parietal cells",
            "A pro-drug that requires acid-activation that reversibly inhibits H\u207A/K\u207A ATPase pumps on parietal cells.",
            "A pro-drug that requires first-pass metabolism for activation that irreversibly inhibits H\u207A/K\u207A ATPase pumps on chief cells", 
            "A pro-drug that requires acid-activation that irreversibly inhibits H\u207A/K\u207A ATPase pumps on chief cells",
            "A pro-drug that requires acid-activation that reversibly inhibits H\u207A/K\u207A ATPase pumps on mucous cells"],
        "correct": "A pro-drug that requires acid-activation that irreversibly inhibits H\u207A/K\u207A ATPase pumps on parietal cells",
        "tags":["PD","PK","medium","GI","MoA"]
    },
   {
        "id" : 3,
        "prompt" : "A 63 y/o patient presents to the clinic with a very extensive history. About 23 years ago he was diagnosed with Zollinger-Ellison syndrome and was subsequently put on Drug A and cured with surgery. He still takes Drug A to this day. Last year a stress fracture of a lumbar vertebrae was discovered. He was also treated for a C. Diff infection with metronidazole PO. He was found to also have some peripheral neuropathy due to a B12 deficiency. He also takes vitamin D and calcium supplements. Assuming Drug A has played a role in his past medical history, what other side effect would you be concerned about him developing?",
        "choices": [
            "Acute kidney injury",
            "Gynecomastia",
            "Pneumonia", 
            "Tardive Dyskinesia",
            "A and C"],
        "correct": "A and C",
        "tags":["PD","hard","side effects","GI"]
    },  
    {
        "id" : 4,
        "prompt" : "A 69 y/o patient was recently diagnosed with an esophageal adenocarcinoma. His history includes long-standing GERD, and takes many medications including: rabeprazole, domperidone, Tums, and ranitidine. He is about to be started on neoadjuvant chemotherapy and is given ondansetron. Which of his following medications would you expect to have the least effect on the absorption of other medications?",
        "choices": [
            "Domperidone",
            "Ondansetron",
            "Rabeprazole", 
            "Ranitidine",
            "Tums"],
        "correct": "Ondansetron",
        "tags":["PK","medium","PD","side effects","MoA","GI"]
    },
  {
        "id" : 5,
        "prompt" : "A 40 y/o patient presents to the ER with black stools and constipation. The patient is worried that he may be bleeding somewhere in his GI tract. His vitals are taken and they are all normal. The ER doctors then conduct a history and the patient mentions that he is currently on triple therapy + bismuth subsalicylate for a <i>H. pylori</i> induced ulcer. The ER doctors are now less concerned with the patient’s presentation. What is the mechanism of action of the culprit behind the patient’s presentation?",
        "choices": [
            "50s ribosomal subunit inhibitor",
            "PBP inhibitor antibiotic",
            "H\u207A/K\u207A ATPase pump inhibitor", 
            "H2 receptor antagonist",
            "Increases mucus production, coats ulcers, antimicrobial properties"],
        "correct": "Increases mucus production, coats ulcers, antimicrobial properties",
        "tags":["PD","hard","MoA","GI","side effects"]
    },
{
        "id" : 6,
        "prompt" : "Which of the following most appropriately matches the antacid with its associated side effect?",
        "choices": [
            "Al\u00B3\u207A - diarrhea",
            "Ca\u00B2\u207A - hypophosphatemia",
            "Carbonate-based - belching", 
            "Mg\u00B2\u207A - constipation"],
        "correct": "Carbonate-based - belching",
        "tags":["PD","easy","side effects","GI"]
    }, 
{
        "id" : 7,
        "prompt" : "A 42 y/o patient presents to the gastroenterologist for follow up after failure of his PPI to resolve his presumed GERD. The patient confirms that he has stopped the PPI over 2 weeks ago and a urea breath test is conducted. Assuming a positive test result, what medication regime would you prescribe?",
        "choices": [
            "Clarithomycin + amoxicillin + metronidazole",
            "Esomeprazole + clarithromycin + amoxicillin",
            "Esomeprazole + ranitidine + Bismuth subsalicylate", 
            "Esomeprazole + amoxicillin + metronidazole",
            "Ranitidine + clarithromycin + amoxicillin"],
        "correct": "Esomeprazole + clarithromycin + amoxicillin",
        "tags":["PD","medium","Infectious","GI"]
    }, 
{
        "id" : 8,
        "prompt" : "A 40 y/o patient with a history of chronic reactive gastropathy due to chronic EtOH use presents to the clinic following a work-related hip injury. The patient reports that acetaminophen did little to relieve her pain. After confirming that the patient is not pregnant, her doctor decides to prescribe a formulation that contains two drugs (diclofenac + misoprostol). What is the mechanism of action of misoprostol in this case?",
        "choices": [
            "Nonselective COX inhibitor that stimulates mucus production from mucous cells and inhibits parietal cell acid production",
            "PGE1 analogue that stimulates mucus production from mucous cells and mildly inhibits parietal cell acid production",
            "PGI2 analogue that stimulates mucus production from mucous cells and mildly inhibits parietal cell acid production", 
            "Selective COX inhibitor that stimulates mucus production from mucous cells and mildly inhibits parietal cell acid production"],
        "correct": "PGE1 analogue that stimulates mucus production from mucous cells and mildly inhibits parietal cell acid production",
        "tags":["PD","medium","Pain","GI","side effects"]
    },
{
        "id" : 9,
        "prompt" : "A 20 y/o university student presents to a walk-in clinic with complaints of chest pain and a sore throat. During the history you learn that the chest pain only occurs at night and worsens after a large dinner. You also learn that he is a heavy coffee drinker. Given this presentation you highly suspect GERD and with his nocturnal symptoms, you prescribe him drug X. He gets a little worried and asks if drug X will cause him to grow “man boobs”. You tell him that although drug X has the same mechanism of action, it does not cause that. What is the identity of drug X?",
        "choices": [
            "Cimetidine",
            "Loratidine",
            "Ranitidine", 
            "Omeprazole",
            "Rabeprazole"],
        "correct": "Ranitidine",
        "tags":["PD","medium","MoA","GI","side effects"]
    },
{
        "id" : 10,
        "prompt" : "What is the mechanism of action of ranitidine?",
        "choices": [
            "Inhibits acid production by blocking CCK receptors on parietal cells from being activated by gastrin released from G cells",
            "Inhibits acid production by blocking H\u207A/K\u207A ATPase pumps on parietal cells",
            "Inhibits acid production by blocking H1 receptors on parietal cells from being activated by histamine released from ECL cells", 
            "Inhibits acid production by blocking H2 receptors on parietal cells from being activated by histamine released from ECL cells",
            "Inhibits acid production by blocking muscarinic receptors on parietal cells from being activated by acetylcholine released from vagal efferents"],
        "correct": "Inhibits acid production by blocking H2 receptors on parietal cells from being activated by histamine released from ECL cells",
        "tags":["PD","easy","MoA","GI"]
    },
{
        "id" : 11,
        "prompt" : "Michael, a 15 y/o patient, presents to the ER with a fully displaced left clavicle fracture following an accident during PE class. The orthopedic surgeon determines that surgical intervention is necessary. Michael is sent for surgery and his clavicle is fixed in place with a titanium clavicle plate. Michael is woken up and immediately feels nauseous and vomits following extubation. Which of the following contains the drug and its mechanism of action that would minimize Michael’s postoperative nausea?",
        "choices": [
            "Dimenhydrinate - H2 receptor antagonist",
            "Ondansetron - M receptor antagonist",
            "Ondansetron - 5HT3 receptor antagonist", 
            "Scopolamine - H1 receptor antagonist",
            "Scopolamine - 5HT3 receptor antagonist"],
        "correct": "Ondansetron - 5HT3 receptor antagonist",
        "tags":["PD","medium","MoA","GI","Anaesthesia"]
    },
{
        "id" : 12,
        "prompt" : "Your friend regularly uses the ferry from Tsawwassen to Victoria. However, he gets severe motion sickness during these trips. Using your pharmacology knowledge you tell him that he can continue with these trips by prophylactically preventing motion sickness by taking:",
        "choices": [
            "Domperidone",
            "Loratidine", 
            "Ondanestron",
            "Ranitidine",
            "Scopolamine"],
        "correct": "Scopolamine",
        "tags":["PD","medium","GI","MoA"]
    },
{
        "id" : 13,
        "prompt" : "A 32 y/o patient presents to the clinic with Parkinson-like syndrome, tardive dyskinesia, and insomnia. She reports that she has a history of GERD and was recently prescribed a non-PPI medication. Which of the following drugs was she most likely prescribed?",
        "choices": [
            "Cimetidine",
            "Domperidone",
            "Metoclopramide", 
            "Ondansteron",
            "Ranitidine"],
        "correct": "Metoclopramide",
        "tags":["PD","medium","MoA","GI","side effects"]
    },
{
        "id" : 14,
        "prompt" : "A 34 y/o patient recently immigrated from another country was recently diagnosed with a microprolactinoma at her pituitary gland. She is prescribed cabergoline (D2 receptor agonist) to treat it. Due to the language barrier and incomplete medical record, the endocrinologist does not find out that she takes domperidone as well for GERD. Would you expect the two drugs to interact pharmacodynamically and why?",
        "choices": [
            "No, domperidone is a D2 receptor antagonist, but does not cross the blood brain barrier, therefore it won’t bind the D2 receptors at the pituitary gland",
            "No, domperidone is a D1 receptor antagonist, therefore no interaction can occur",
            "Yes, domperidone is a D1 receptor antagonist, but has nonspecifically blocks D2 receptors as well, which will block cabergoline activity", 
            "Yes, domperidone is a D2 receptor agonist and this will potentiate cabergoline activity",
            "Yes, domperidone is a D2 receptor antagonist and this will block cabergoline activity"],
        "correct": "Yes, domperidone is a D2 receptor antagonist and this will block cabergoline activity",
        "tags":["PD","medium","MoA","PK","Endocrinology","GI"]
    }   
]