export const lowerGI = [
    {
        "id" : 1,
        "prompt" : "Doris, a 23 y/o patient with a history of GERD presents to the ER with severe abdominal pain, distention, and constipation. She reports no flatulence for the last 48 hours, being constipated for over a week and has taken the following medications to resolve her constipation: metoclopramide, sennosides, and lots of fiber to no avail. Her vitals are: BP 88/62, HR 112, T 37.4 \u00b0C. On examination, bowel sounds are absent, abdomen is tympanic on percussion, and tenderness on palpation. An abdominal X-ray shows air-fluid levels and the small bowel diameter measures 5 cm. Which one of the following drugs is NOT contraindicated in this case:",
        "choices": [
            "Docusate",
            "Metoclopramide",
            "Morphine", 
            "Polyethylene glycol",
            "Senna"],
        "correct": "Morphine",
        "tags":["hard","GI","side effects","Surgery"],
        explain: "This question requires understanding the contraindication of laxatives and prokinetics. In this vignette, we are presented with a patient with a suspected small bowel obstruction. We suspect this because her history reports constipation, abdo pain, distention, no flatulence, and her exam reports hypotension, tachycardia, absent bowel sounds, tenderness, tympanic percussion, and her abdo x-ray reports air-fluid levels and a dilated small bowel (5 cm; remember 3-6-9 rule). Laxatives (A - stool softener that requires lots of water, D, E) and prokinetics (B) are contraindicated in bowel obstruction as this could lead to a bowel perforation. The only medication that is not a laxative or a prokinetic in this case is morphine, hence (C) is the correct answer. Morphine is not contraindicated in this case (despite causing constipation), and opioids are given during surgery, which she will need to correct the obstruction."
    },
    {
        "id" : 2,
        "prompt" : "An 83 y/o patient at a hospice with stage 4 small cell lung carcinoma has not had a bowel movement for a significant amount of time. The patient has had normal oral intake of food and fluids. The nursing staff have tried PEG3350 and senna + docusate, but the patient is still constipated. The patient has been on a morphine drip for a few weeks now. Which of the following medications would you use to help relieve his constipation?",
        "choices": [
            "Bismuth subsalicylate",
            "Loperamide",
            "Methylnaltrexone", 
            "Mg[OH]<sub>2</sub>",
            "Psyllium husk"],
        "correct": "Methylnaltrexone",
        "tags":["PD","MoA","medium","GI","Palliative"],
        explain: "This question requires understanding the pharmacology of opioids in lower GI. In this vignette, we are presented with a patient undergoing palliative care who is constipated. She is also on a morphine drip (µ opioid agonist), hence her constipation is probably due to the activation of µ opioid receptors in her GI tract.  The staff have used osmotic (PEG) and stimulant (senna) laxative with a stool softener (docusate) to no avail. Therefore, we can use a competitive antagonist of the µ opioid receptor, methylnaltrexone, hence (C) is the correct answer. Methylnaltrexone won’t affect her pain management because it does not readily cross the blood brain barrier, therefore it will not affect pain perception (MEDD412) and precipitate withdrawal. (A), (B) are both used to treat diarrhea, (D) is an osmotic laxative, and (E) is a bulk laxative, however in this case the onset of constipation is most likely due to her morphine."
    },
   {
        "id" : 3,
        "prompt" : "How does the mechanism of action of bismuth subsalicylate differ in the stomach versus in the intestines?",
        "choices": [
            "Decreases HCO3\u207B secretion in the intestines, reduces HCO3\u207B secretion in the stomach",
            "Decreases prostaglandin production in the intestines, increases prostaglandin production in the stomach",
            "Increases HCO3\u207B secretion in the intestines, reduces HCO3\u207B secretion in the stomach", 
            "Increases prostaglandin production in the intestines, decreases prostaglandin production in the stomach"],
        "correct": "Decreases prostaglandin production in the intestines, increases prostaglandin production in the stomach",
        "tags":["PD","easy","MoA","GI"],
        explain: "This question requires understanding how pharmacology can change with site of action. (B) correctly describes the difference in mechanism of bismuth subsalicylate (Pepto Bismol). In the stomach, an increase in prostaglandin production helps Pepto Bismol achieve its therapeutic effect in protecting the gastric mucosa. In the lower GI, the mechanism of Pepto Bismol helps it achieve its effect on diarrhea by reducing prostaglandin secretion, which leads to reduced prostaglandin production, which reduces motility (prostaglandins stimulates smooth muscle contraction). Pepto Bismol also reduces chloride secretion, which reduces liquidity of stool."
    },  
    {
        "id" : 4,
        "prompt" : "Which of the following is NOT an appropriate 5-ASA formulation to target the colon?",
        "choices": [
            "Conjugated 5-ASA that is broken down by anaerobic bacteria",
            "Delayed release capsules",
            "Enema formulation", 
            "Enteric coating that dissolves at pH 7",
            "Enteric coating that increases the lipophilicity of 5-ASA"],
        "correct": "Enteric coating that increases the lipophilicity of 5-ASA",
        "tags":["PK","hard","MoA","GI"],
        explain: "This question requires understanding PK and formulation consideration for delivering a drug to the desired site of action. If we want to target the colon, then we want to minimize absorption in the proximal GI tract. Therefore, (E) would be the worst formulation in targeting the colon. This is because the increased liophiclity will increase its absorption in the proximal GI tract, which would cause less drug to be delivered to the colon. Remember lipophilic drugs are more readily absorbed. (A) works because the colon contains anaerobic bacteria (oxygen is sparse deep in the GI tract), thus conjugated 5-ASA will be protected from absorption till it reaches the colon, where it can be activated by colon microbes. (B), delayed release will allow it to reach deeper into the GI tract. (C) allows for administration from the rectum, hence bypassing the upper GI. (D) works because the pH in the lower GI is higher than the upper GI (closer to the stomach, hence more acid - lower pH)."
    },
  {
        "id" : 5,
        "prompt" : "What is a shared mechanism of action between 5-ASA and ASA (aspirin)?",
        "choices": [
            "Interfere with cytokine production",
            "Inhibition of leukotrienes synthesis",
            "Inhibition of prostaglandins synthesis", 
            "Reduced leukocyte activity",
            "They are the same drug"],
        "correct": "Inhibition of prostaglandins synthesis",
        "tags":["PD","easy","MoA","GI"],
        explain: "This question requires understanding the mechanism of 5-ASA and NSAIDs. (C) is the correct answer because both 5-ASA and NSAIDs like aspirin inhibit prostaglandin production. (A), (B), and (D) are possible mechanisms of 5-ASA as well, but not aspirin. 5-ASA ≠ ASA!"
    },
{
        "id" : 6,
        "prompt" : "What makes budesonide a fairly safe and effective glucocorticoid in treating IBD?",
        "choices": [
            "High potency and high oral bioavailability",
            "High potency and low oral bioavailability",
            "Low potency and high oral bioavailability", 
            "Low potency and low oral bioavailability"],
        "correct": "High potency and low oral bioavailability",
        "tags":["PD","easy","side effects","GI","PK"],
        explain: "This question requires understanding the pharmacology of budesonide. (B) correctly describes budesonide. Budesonide is a synthetic corticosteroid that is highly potent (more potent than prednisone), but undergoes extensive first pass metabolism, therefore has low oral bioavailability. However, it is still effective because it can act as a “topical” medication on the intestinal wall to treat IBD. Given its low oral bioavailability, the risk of systemic toxicity is lower, making it fairly safe compared to other potent steroids such as prednisone."
    }, 
{
        "id" : 7,
        "prompt" : "Based on the mechanism of action of methotrexate, which of the following should be supplemented for those using methotrexate?",
        "choices": [
            "Folate",
            "Vitamin B12",
            "Vitamin C", 
            "Vitamin K"],
        "correct": "Folate",
        "tags":["PD","medium","MoA","GI","sde effects","Rheumatology"],
        explain: "This question requires understanding the mechanism of methotrexate. Methotrexate is a immunosuppressant by acting as an antifolate antimetabolite. (A) is the correct answer because the methotrexate mechanism of action interferes with folate metabolism in the body, hence patients on methotrexate are usually supplemented with folate (1 mg per day or 5 to 7 mg once weekly). In fact many of the adverse effects of methotrexate are similar to patients with folate deficiencies (bone marrow suppression). Methotrexate inhibits dihydrofolate reductase (prevents folic acid conversion into its active form), which eventually results in inhibition of nucleotide synthesis. This inhibits DNA synthesis and cell proliferation (the mechanism as a cancer drug) and  Another suggested mechanism is inhibition of AICAR transformylase, which results in impaired adenosine and guanine metabolism, resulting in repression of T-cell activation (mechanism as an immunosuppressant)."
    }, 
{
        "id" : 8,
        "prompt" : "What is the mechanism of action of azathioprine?",
        "choices": [
            "Dihydrofolate reductase inhibitor that halts nucleotide synthesis",
            "Guanine analogue that halts DNA/RNA synthesis",
            "Inhibits transcription of pro-inflammatory mediators", 
            "TPMT inhibitor that halts DNA/RNA synthesis"],
        "correct": "Guanine analogue that halts DNA/RNA synthesis",
        "tags":["PD","easy","MoA","GI","Rheumatology"],
        explain: "This question requires understanding the mechanism of azathioprine, an immunosuppressant. (B) correctly describe the mechanism of action of azathioprine. Azathioprine is a purine analogue, and is converted into a guanine analogue by enzymes (hypoxanthine-guanine phosphoribosyltransferase (HPRT) and thiopurine methyltransferase (TPMT)). The guanine analogue is incorporated into DNA/RNA, which halts further synthesis resulting in inhibited cell proliferation. Patients with a TPMT deficiency are contraindicated (or start at a lower dose) because there will be a build up of 6-mercaptopurine (6-MP), a toxic active metabolite. Lack of TPMT prevents conversion of 6-MP into 6-methyl-MP (inactive form). (A) describes methotrexate mechanism. (C) describes the general mechanism of steroids."
    },
{
        "id" : 9,
        "prompt" : "A 30 y/o patient presents to the clinic with a 6 month history of constant right lower quadrant (RLQ) pain that is not relieved by bowel movement. She describes her stool as diarrhea and not bloody. She also thinks that she has lost weight over the past year. A mass is palpable at the RLQ. A colonoscopy is performed and skip lesions are observed in the proximal colon and terminal ileum. With your working diagnosis, which of the following drugs would be the LEAST effective treatment option?",
        "choices": [
            "5-ASA",
            "Azathioprine",
            "Budesonide", 
            "Infliximab",
            "Methotrexate"],
        "correct": "5-ASA",
        "tags":["PD","medium","MoA","GI"],
        explain: "This question requires understanding Crohn’s vs UC and the differences in medical intervention for each. In this vignette, we are presented with a patient with suspected Crohn’s. We suspect this because her history and exam report chronic RLQ pain without relief with bowel movement, non-bloody diarrhea, weight loss, palpable RLQ mass, and her colonoscopy reports skip lesions in her proximal colon and terminal ileum. These point toward Crohn’s over UC. All the choices list medications used in IBD, however (A) 5-ASA, is the least effective in Crohn’s disease (it is effective in some subtypes of Crohn’s) compared to UC. (E) methotrexate is the least effective in UC compared to Crohn’s. The rest of the choices are used in both types of IBD. Not all Crohn’s patients will present with the described presentation!"
    },
{
        "id" : 10,
        "prompt" : "A 40 y/o patient with Crohn’s disease presents to the ER with 10 hours of crampy right lower quadrant abdominal pain. An abdominal X-ray reveals multiple air-levels, and a dilated small bowel (5 cm). An abdominal CT scan shows transmural inflammation and fistulziations. Given the severity of his Crohn’s disease, the consulting gastroenterologist follows a top-down therapy approach, but first orders a chest x-ray and blood tests. Why would the gastroenterologist order these tests?",
        "choices": [
            "Anti-integrin therapy is contraindicated in patients with TPMT deficiency",
            "Anti-TNFα therapy can reactivate latent infections",
            "Anti-TNFα therapy can cause bone marrow suppression", 
            "Immunosuppressants can cause bone marrow suppression"],
        "correct": "Anti-TNFα therapy can reactivate latent infections",
        "tags":["PD","hard","MoA","GI","side effects"],
        explain: "This question requires understanding the role of biologics in IBD and precautions related to their use. In this vignette, we are presented with a patient with a Crohn’s flare up. Our patient will need strong induction agents because he is presenting with enteroenteric fistulizations, a severe form of Crohn’s. A top-down therapy is starting with the strongest drugs such as biologics (anti-TNFα, anti-integrin, anti-IL, etc…). The chest x-ray and serology are ordered because we are worried that if he has a latent infection like TB (or other opportunistic infections like fungal), the biologic therapy could reactivate it. Therefore, (B) is the best answer. There have been reports of bone marrow suppression with anti-TNFα, however a chest x-ray or serology at this stage isn’t helpful in predicting this or preventing this from occurring compared to ruling out latent infections."
    },
{
        "id" : 11,
        "prompt" : "A 24 y/o patient presents to the clinic with a 4 month history of crampy lower abdominal pain that is relieved by bowel movements. He describes his stool as diarrhea and sometimes bloody (red). He also thinks that he has lost weight over the past year. No palpable abdominal mass on exam. A colonoscopy is performed and continuous mucosal changes starting from the rectum to his sigmoid colon is observed. With your working diagnosis, which of the following drugs would be the LEAST effective treatment option?",
        "choices": [
            "5-ASA",
            "Azathioprine",
            "Budesonide", 
            "Infliximab",
            "Methotrexate"],
        "correct": "Methotrexate",
        "tags":["PD","medium","MoA","GI"],
        explain: " This question requires understanding Crohn’s vs UC and the differences in medical intervention for each. In this vignette, we are presented with a patient with suspected UC. We suspect this because his history and exam report chronic crampy lower abdo pain that is relieved with bowel movement, bloody diarrhea (red - distal colon/rectum), weight loss, no RLQ mass, and his colonoscopy reports continuous mucosal changes that start from the rectum to his sigmoid colon. These point toward UC over Crohn’s. All the choices list medications used in IBD, however (E) methotrexate, is the least effective in UC compared to Crohn’s. (A) 5-ASA is the least effective in Crohn’s compared to UC. The rest of the choices are used in both types of IBD. Not all UC patients will present with the described presentation!"
    },
{
        "id" : 12,
        "prompt" : "A 26 y/o patient with IBD presents to the ER with severe abdominal pain. He reports having 7 bloody bowel movements in the past 24 hours. His vitals are HR 110, T 38.5 \u00b0C, BP normal, RR normal. His charts mention that he has been on oral prednisone for the last month. Fluid and electrolyte replacement is started and stool cultures come back negative. He is admitted and IV hydrocortisone is started, but he does not improve. In this case, which of the following drugs would you administer next and is only effective in UC?",
        "choices": [
            "Azathioprine",
            "Cyclosporine", 
            "Infliximab",
            "Prednisone IV",
            "Tofacitinib"],
        "correct": "Cyclosporine",
        "tags":["PD","hard","GI","MoA"],
        explain: "This question requires understanding a case of acute severe UC (ASUC) and its therapeutic intervention. In this vignette, we are presented with a patient with ASUC. We suspect this because of >6 bloody bowel movements/day, tachycardic, temperature is borderline (needs to be >37.8), and presents like this despite being on prednisone (treatment failure). He is nonresponsive to the IV steroids. In this case, it appears that our patient requires rescue therapy (rule out (A) and (D)).  The next treatment option would be biologics or immunosuppressants, but we are asked to administer something that is ONLY effective in UC. In that case, (B) would be the correct answer. Cyclosporine is effective in UC, but not in Crohn’s. (C) infliximab is effective in both types of IBD. (E) is only used in UC, however its use is usually after anti-TNFα therapy failure or intolerance, hence would not be the next drug to use (this could change in the future)."
    },
{
        "id" : 13,
        "prompt" : "A 10 y/o child with asthma and eczema presents to the ER with severe abdominal pain and bloody diarrhea. He is afebrile and slightly hypotensive. His parents mention that he was at Uncle Brian’s (his favorite uncle) place and ate burgers that tasted “weird”. You are worried about hemolytic uremic syndrome (HUS) and order a CBC with diff, peripheral blood smear, and renal panel. In this case, which of the following medications would do more harm for the patient?",
        "choices": [
            "Acetaminophen for pain control",
            "Bud/Form inhaler for asthma",
            "Loperamide for diarrhea", 
            "Topical betamethasone for eczema",
            "A and C"],
        "correct": "Loperamide for diarrhea",
        "tags":["PD","hard","GI","side effects","Nephrology","Pediatrics","Hematology","Infectious"],
        explain: "This question requires understanding a contraindication of diarrhea medication and lower GI infection (hemorrhagic colitis). In this vignette, we are presented with a pediatric patient with suspected hemorrhagic colitis, given his severe abdo pain, bloody diarrhea, afebrile, and potential exposure to E. coli (funny tasting burger - undercooked?). Given that he is a child, we would be worried about HUS, a complication of hemorrhagic colitis. (C) loperamide should be avoided in the patient because it increases the risk of HUS. Loperamide is an µ opioid agonist that doesn’t cross the blood brain barrier, thus will decrease GI motility, potentially keeping the toxins in the GI tract to cause more damage.  (A) Acetaminophen is not contraindicated in this case and is fairly safe to use for pain control, and is the preferred pain control over opioid analgesics (same reason as avoiding loperamide). (B) is fine because we wouldn't want an asthma attack, and systemic exposure is limited. (D) systemic exposure is also limited (topical)."
    },
{
        "id" : 14,
        "prompt" : "A 62 y/o patient presents to the ER with BP 110/74, HR 92, T 38 \u00b0C, diffuse abdominal pain and diarrhea. On the patient’s charts you noticed that the patient was recently treated with ampicillin for listeria that has since been resolved. A stool sample for C. diff toxins comes back positive. His CBC w/ diff only shows a mildly elevated white blood count. The patient is worried because he isn’t a resident of BC and does not have insurance. Which of the following antimicrobials would you prescribe?",
        "choices": [
            "Ceftriaxone + doxycycline",
            "Metronidazole (PO)",
            "Penicillin G", 
            "Vancomycin (IV)",
            "Vancomycin (PO)"],
        "correct": "Metronidazole (PO)",
        "tags":["PD","hard","MoA","PK","Infectious","GI"],
        explain: "This question requires understanding a mild C. diff infection and the treatment for it. In this vignette, we are presented with a patient with a C. diff infection. It appears the C. diff could have occurred due to prior ABX exposure. His vitals are stable and CBC shows mild WBC elevation, hence it appears that the infection is mild. Our patient also does not have insurance, hence cost of medication could be an obstacle. Therefore,(B) metronidazole PO would be the best ABX to prescribe given the mild presentation and cost. If cost was not an issue or if the presentation was more severe, then (E) vancomycin PO would be the best option.  Remember metronidazole is an effective ABX against anaerobic bacteria."
    },   
]