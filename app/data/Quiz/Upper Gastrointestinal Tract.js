export const upperGI = [
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
        "tags":["easy","GI","side effects"],
        explain: "This question requires understanding the long term effects of PPI use. In this vignette, we are presented with a patient who has been on rabeprazole (PPI) for the past 10 years and multiple gastric polyps are appreciated on endoscopy. PPI usage is associated with (D) benign fundic polyps. The reason is not known, and may resolve following termination of PPI usage."
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
        "tags":["PD","PK","medium","GI","MoA"],
        explain: " This question requires understanding PPI (-prazole) pharmacology and gastric physiology. The correct answer is (A). PPIs are pro-drugs, but once they are in parietal cells, the acid environment activates the PPIs, which allows them to irreversibly inhibit  H+/K+ ATPase pumps. Hence, inhibiting acid secretion for 24 hours, which is approximately the same amount of time required for parietal cells to resynthesize H+/K+ ATPase pumps"
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
        "tags":["PD","hard","side effects","GI"],
        explain: "This question requires understanding the potential adverse effects of PPIs. In this vignette, we are presented with a patient with a history of Zollinger-Ellison syndrome (ZES; essentially excessive gastric acid) and a history that includes fracture, C Diff colonization, and B12 deficiency. He is also on Ca and vitamin D, supposedly to prevent hypocalcemia. We first need to figure out the most likely identity of Drug A, which would be a PPI. All of the listed adverse effects from his history are MAYBE related to PPI usage. ZES also causes increased gastric acid and PPI are used to slow down gastric acid secretion. From the choices we can identify other potentially related adverse effects of PPIs. Both (A) and (C) may be associated with PPI usage, hence (E) is the correct answer. (B) is a side effect of cimetidine usage (first generation H2 antagonist) and (D) is a side effect of dopamine antagonists that cross the blood brain barrier (metoclopramide). It should be noted that many of the adverse effects and their relationship to PPI usage still need to be studied, but it's good to keep in mind the potential adverse effects if more evidence is found for a casual relationship."
    },  
    {
        "id" : 4,
        "prompt" : "A 69 y/o patient was recently diagnosed with an esophageal adenocarcinoma. His history includes long-standing GERD, and takes many medications including: rabeprazole, domperidone, Tums, and ranitidine. He is about to be started on neoadjuvant chemotherapy and is also prescribed ondansetron. Which of his following medications would you expect to have the least effect on the absorption of other medications?",
        "choices": [
            "Domperidone",
            "Ondansetron",
            "Rabeprazole", 
            "Ranitidine",
            "Tums"],
        "correct": "Ondansetron",
        "tags":["PK","medium","PD","side effects","MoA","GI"],
        explain: "This question requires understanding the PK considerations of drugs that affect the GI system such as prokinetic drugs and acid control. In this vignette, we are presented with a patient with a lot of medications for his GERD and cancer diagnosis. (A) is incorrect because a prokinetic drug will increase gastric emptying, which will affect drug absorption. Increased gastric emptying will increase the rate of drug absorption (some exceptions exist like digoxin). (C), (D), and (E) are all wrong because they are PPI, H2 antagonist, and an antacid, respectively, which all affect gastric pH. This could affect drug absorption because changes in gastric pH can change the amount of drug that is in its charged form (less absorbable), or uncharged form (more absoprabke), hence affecting drug absorption. Therefore, (B) is the correct answer because blocking 5HT3 on vagal nerve terminals will have little effect on acid secretion, gastric motility, or other factors that influence drug absorption."
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
        "tags":["PD","hard","MoA","GI","side effects"],
        explain: "This question requires understanding the effects of bismuth subsalicylate (Pepto Bismol). In this vignette, we are presented with a constipated patient that when he does pass stool it appears black, a sign of a potential upper GI bleed. He is also on triple therapy  and Pepto Bismol for H. pylori. Triple therapy usually includes: a PPI (C), clarithromycin (A; macrolide ABX) and amoxicillin (B; 3rd generation penicillin). We can rule out (D) because he isn’t using a H2 antagonist. Black stools and constipation is a side effect associated with Pepto Bismol usage, hence (E) is the correct answer because it describes the mechanism of Pepto Bismol. The black colour is due to the presence of bismuth. Another side effect related to Pepto Bismol is a black tongue. Also given the presence of subsalicylate, Pepto Bismol should not be given to children after a viral infection and patients with an allergy towards aspirin."
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
        "tags":["PD","easy","side effects","GI"],
        explain: "This question requires understanding the side effects of different antacids. The correct answer is (C) carbonated based - belching. This is because HCO3- will lead to increased CO2 gas, which will result in belching. (A) Al3+ is associated with constipation and hypophosphatemia (Al3+ binds PO4 3-), (B) Ca2+ is associated with hypercalcemia (fyi: milk-alkali syndrome - when someone takes an excessive amount of Tums), while (D) Mg2+ is associated with diarrhea (change in osmotic gradient)."
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
        "tags":["PD","medium","Infectious","GI"],
        explain: "This question requires understanding the drugs used to treat H. Pylori. In this vignette, we are presented with a patient presenting for a urea breath test (UBT) after stopping his PPI for 2 weeks following treatment failure for GERD. UBT is used to test for the presence of H. pylori because H. pylori expresses ureases, breaks down urea into CO2 and NH3 to help it survive in stomach acid. The breath test measures the CO2 after urea is given. PPIs need to be stopped at least 2 weeks before a UBT to reduce false negatives. If the UBT returns a positive result, then H. Pylori colonization is a likely cause of the patient’s increased acid and explains the treatment failure. H. Pylori is treated with a triple therapy regimen that includes a PPI and 2 ABXs (almost always includes clarithromycin), hence (B) is the correct answer since it includes a PPI, clarithromycin and amoxicillin. Another possible regimen would be PPI, clarithromycin, and metronidazole. Bismuth subsalicylate can be used adjuvantly."
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
        "tags":["PD","medium","Pain","GI","side effects"],
        explain: "This question requires understanding the gastric effects of NSAIDs and misoprostol. In this vignette, we are presented with a patient with chronic reactive gastropathy and poorly controlled pain. She is prescribed diclofenac + misoprostol. Diclofenac is a NSAID, which causes decreased gastric mucus + HCO3- production via COX inhibition, which can lead to peptic ulcer disease. Misoprostol is formulated with diclofenac to minimize this from happening by the mechanism that is correctly described by (B). As a PGE1 analogue it will bind EP3 receptors on mucous cells to increase mucous + HCO3- secretion to hopefully combat the inhibition caused by diclofenac. Misoprostol also has a mild inhibitory effect on parietal cells via EP3, but due to the H2, M3, and gastrin pathways, acid secretion still occurs. Pregnancy is a contraindication of misoprostol because PGE1 causes uterine contractions, which leads to abortion or induction of labour (assuming the patient does not want an abortion)."
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
        "tags":["PD","medium","MoA","GI","side effects"],
        explain: "This question requires understanding H2 antagonists (-tidine). In this vignette, we are presented with a patient with suspected GERD with symptoms that primarily present at night and is prescribed Drug X, which the patient is worried will cause gynecomastia. We need to recognize that Drug X is most likely a H2 antagonist and not a PPI (rule out (D) and (E)). We can deduce this because of the nocturnal presentation and the fact that Drug X is in the same class as a drug that causes gynecomastia. H2 antagonists are more effective in reducing nocturnal acid secretion than daytime secretions. The drug that the patient is worried about is cimetidine (A), a first generation H2 antagonist that could cause gynecomastia. Hence, (C) is most likely Drug X and the correct answer. (B) is a 2nd generation H1 antagonist."
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
        "tags":["PD","easy","MoA","GI"],
        explain: "This question requires understanding the mechanism of H2 receptor antagonists (-tidine). Ranitidine is a H2 receptor antagonist, hence (D) is the correct answer. Histamine is released from ECL cells to stimulate H2 receptors on parietal cells to increase acid secretion. Ranitdine and any H2 antagonist will block this. However, there are other pathways (M3, CCK- gastrin) that can cause acid secretion from parietal cells, hence H2 antagonists do not completely inhibit acid secretion."
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
        "tags":["PD","medium","MoA","GI","Anaesthesia"],
        explain: "This question requires understanding the different mechanisms of different anti-emetics. In this vignette, the correct drug matched with its mechanism is (C). Ondansetron is a 5HT3 receptor antagonist and helps prevent vomiting by inhibiting signals from the vagal nerve terminals, chemoreceptor trigger zone (CTZ), and nucleus tractus solitarius (NTS) - pathways involved in the vomiting center in the medulla. Dimenhydrinate is an antihistamine, but blocks H1 receptors and scopolamine is a muscarinic receptor antagonist. Both scopolamine and dimenhydrinate are effective in treating motion sickness since H1 and M1 receptors are found in the inner ear (vestibular system). H1 and M1 receptors are also found in the CTZ and NTS. However, both drugs are not as effective as ondansetron in postoperative nausea and vomiting."
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
        "tags":["PD","medium","GI","MoA"],
        explain: "This question requires understanding anti-emetics involved in preventing motion sickness (vestibular system). In this vignette, we are presented with a friend that gets motion sickness. Hence, we should suggest a drug that blocks emesis due to activation from the vestibular system. Hence, any 1st generation H1 antagonist or muscarinic antagonist. (E) is the correct answer because it is a M antagonist and will be helpful for prophylactic prevention of motion sickness. (A) is a dopamine antagonist, and can be used as an antiemetic, but is not a first-line option. (B) is a 2nd generation H1 antagonist, hence it does not readily cross the blood brain barrier to block H1 receptors in the CNS such as those involved in the inner ear, hence will not work in this case. (C) ondansetron is a great antiemetic, but 5HT3 receptors are not directly involved in the vestibular system, hence does not directly treat the trigger. (D) is a H2 receptor antagonist and is involved in suppressing gastric acid secretion, not motion sickness."
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
        "tags":["PD","medium","MoA","GI","side effects"],
        explain: "This question requires understanding the side effects of D2 antagonists. In this vignette, we are presented with a patient with GERD that presents with symptoms suggesting CNS involvement after taking a non-PPI. The other non-PPI drugs that can be used for GERD are prokinetic drugs (D2 antagonists) or H2 antagonists (rule out (D)). H2 antagonists rarely have CNS side effects such as delirium, hallucinations, and confusion, but presenting with a Parkinson-like syndrome and tardive dyskinesia, highly suggest involvement of CNS dopamine receptors. Hence, we can rule out (A) and (E). We are left with (B) and (C), to differentiate these two, we need to remember that (B) domperidone does not readily cross the blood brain barrier, hence would unlikely bind to CNS D2 receptors to cause CNS related effects. Therefore, (C) metoclopramide is the correct answer, given it being a D2 receptor antagonist and ability to cross the blood brain barrier."
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
        "tags":["PD","medium","MoA","PK","Endocrinology","GI"],
        explain: "This question requires understanding the mechanism of D2 antagonists, their side effects, and drug-drug interactions. In this vignette, we are presented with a patient with a microprolactinoma at her pituitary that is treated with a D2 agonist, however she is concurrently taking a domperidone. Microprolactinoma is something you will learn more about in HPEO week (MEDD412), but in this vignette we know that D2 receptors are involved. This question essentially is asking will domperidone interact with a D2 agonist, and can it reach the site of action (the pituitary gland). Domperidone is a D2 antagonist, so yes it will block the cabergoline activity, and the pituitary gland is not behind the blood brain barrier (the anterior pituitary is an endocrine gland not a CNS organ!), therefore domperidone can reach the pituitary gland. Hence, (E) is the correct answer. In fact, domperidone is one of the iatrogenic causes of hyperprolactinemia because it blocks the D2 receptors in the anterior pituitary leading to excessive prolactin secretion (Dopamine inhibits prolactin secretion; you will learn this in HPEO week)."
    }   
]