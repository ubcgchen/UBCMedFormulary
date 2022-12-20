export const lowerGI = [
    {
        "id" : 1,
        "prompt" : "Doris, a 23 y/o patient with a history of GERD presents to the ER with severe abdominal pain, distention, and constipation. She reports being constipated for over a week and has taken the following medications to resolve her constipation: metoclopramide, sennosides, and lots of fiber to no avail. Her vitals are: BP 88/62, HR 112, T 37.4 \u00b0C. On examination, bowel sounds are absent, abdomen is tympanic on percussion, and tenderness on palpation. An abdominal X-ray shows air-fluid levels and the small bowel diameter measures 5 cm. Which one of the following drugs is NOT contraindicated in this case:",
        "choices": [
            "Docusate",
            "Metoclopramide",
            "Morphine", 
            "Polyethylene glycol",
            "Senna"],
        "correct": "Morphine",
        "tags":["hard","GI","side effects","Surgery"]
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
        "tags":["PD","MoA","medium","GI","Palliative"]
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
        "tags":["PD","easy","MoA","GI"]
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
        "tags":["PK","hard","MoA","GI"]
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
        "tags":["PD","easy","MoA","GI"]
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
        "tags":["PD","easy","side effects","GI","PK"]
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
        "tags":["PD","medium","MoA","GI","sde effects","Rheumatology"]
    }, 
{
        "id" : 8,
        "prompt" : "What is the mechanism of action and azathioprine?",
        "choices": [
            "Dihydrofolate reductase inhibitor that halts nucleotide synthesis",
            "Guanine analogue that halts DNA/RNA synthesis",
            "Inhibits transcription of pro-inflammatory mediators", 
            "TPMT inhibitor that halts DNA/RNA synthesis"],
        "correct": "Guanine analogue that halts DNA/RNA synthesis",
        "tags":["PD","easy","MoA","GI","Rheumatology"]
    },
{
        "id" : 9,
        "prompt" : "A 30 y/o patient presents to the clinic with a 6 month history of constant right lower quadrant (RLQ) pain that is not relieved by bowel movement. She describes her stool as diarrhea and not bloody. She also thinks that she has lost weight over the past year. A mass is palpable at the RLQ. A colonoscopy is performed and skip lesions are observed in the proximal colon and terminal ileum. With your working diagnosis, which of the following drugs would NOT be an effective treatment option?",
        "choices": [
            "5-ASA",
            "Azathioprine",
            "Budesonide", 
            "Infliximab",
            "Methotrexate"],
        "correct": "5-ASA",
        "tags":["PD","medium","MoA","GI"]
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
        "tags":["PD","hard","MoA","GI","side effects"]
    },
{
        "id" : 11,
        "prompt" : "A 24 y/o patient presents to the clinic with a 4 month history of crampy lower abdominal pain that is relieved by bowel movements. He describes her stool as diarrhea and sometimes bloody. He also thinks that he has lost weight over the past year. No palpable abdominal mass on exam. A colonoscopy is performed and continuous mucosal changes starting from the rectum to his sigmoid colon is observed. With your working diagnosis, which of the following drugs would NOT be an effective treatment option?",
        "choices": [
            "5-ASA",
            "Azathioprine",
            "Budesonide", 
            "Infliximab",
            "Methotrexate"],
        "correct": "Methotrexate",
        "tags":["PD","medium","MoA","GI"]
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
        "tags":["PD","hard","GI","MoA"]
    },
{
        "id" : 13,
        "prompt" : "A 10 y/o child with asthma and eczema presents to the ER with severe abdominal pain and bloody diarrhea. He is afebrile and slightly hypotensive. His parents mention that he was at his favorite uncle’s place and ate burgers that tasted “weird”. You are worried about HUS and order a CBC with diff, peripheral blood smear, and renal panel. In this case, which of the following medications would do more harm for the patient?",
        "choices": [
            "Acetaminophen for pain control",
            "Bud/Form inhaler for asthma",
            "Loperamide for diarrhea", 
            "Topical betamethasone for eczema",
            "A and C"],
        "correct": "Loperamide for diarrhea",
        "tags":["PD","hard","GI","side effects","Nephrology","Pediatrics","Hematology","Infectious"]
    },
{
        "id" : 14,
        "prompt" : "A 62 y/o patient presents to the ER with BP 110/74, HR 92, T 38 \u00b0C, diffuse abdominal pain and diarrhea. On the patient’s charts you noticed that the patient was recently treated with ampicillin for listeria that has since been resolved. A stool sample for C. diff toxins comes back positive. His CBC w/ diff only shows a mildly elevated white blood count. Which of the following antimicrobials would you prescribe?",
        "choices": [
            "Ceftriaxone + doxycycline",
            "Metronidazole (PO)",
            "Penicillin G", 
            "Vancomycin (IV)",
            "Vancomycin (PO)"],
        "correct": "Metronidazole (PO)",
        "tags":["PD","hard","MoA","PK","Infectious","GI"]
    },   
]