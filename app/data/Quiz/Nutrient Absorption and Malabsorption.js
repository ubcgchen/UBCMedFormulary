export const nutrientMalabsorption = [
    {
        "id" : 1,
        "prompt" : "A 26 y/o patient presents with 6 mo history of abdominal bloating and intermittent watery diarrhea, but never bloody. She hasn’t taken any laxatives, NSAIDs, or antibiotics. Stool studies are all negative. Labs shows she has microcytic anemia, despite being on iron for 1 yr. An anti-tTG IgA serology came back elevated and an endoscopy of duodenum showed scalloping and a biopsy was taken. Pathology reports severe villous atrophy, crypt hyperplasia and enterocyte disarray. Assuming your working diagnosis is correct, how would serum levels of a drug that is only absorbed in the small intestine be affected?",
        "choices": [
            "Decreased serum levels",
            "Increased serum levels",
            "No change", 
            "Unpredictable, depends on the drug"],
        "correct": "Unpredictable, depends on the drug",
        "tags":["PK","hard","GI"],
        explain: "This question requires understanding the complexity of Celiac disease. In this vignette, we have a patient diagnosed with Celiac disease given her serology, endoscopy, and pathology report. We know that with Celiac, the absorption of nutrients is impaired, but it is more complicated with drugs. Some drugs do show decreased absorption, which could be due to the decreased surface area for absorption (villous atrophy). One example is levothyroxine for hypothyroidism which has decreased serum levels in patients with Celiac. However, some antihypertensives like propranolol have shown increased serum levels, and it is hypothesized that changes in the gut like increased pH could decrease ionization of some drugs, which leads to increased absorption of some drugs.  Hence, (D) is the correct answer. It is important to be more prudent with dosing in patients with Celiac by monitoring adverse effects and therapeutic effects and being prepared to make necessary dosing adjustments."
    },
]