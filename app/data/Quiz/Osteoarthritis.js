/**
 * Questions for Osteoarthritis week
 * @author Michael Gong, UBC VFMP 2025
 */

export const Osteoarthritis = [
  {
    id: 1,
    prompt:
      "A 50 y/o patient presents to his GP after a 1 month history of left knee pain. He reports morning stiffness that lasts less than 30 mins, and pain that gets worse with exercise. The patient BMI is approximately 23 and he lives a very active life, but he misses the “good old days” when he was a college tennis player. The GP recommends seeing a PT, but the patient is adamant for pharmacotherapy as well as sometimes the pain is too severe. In this case, which of the following is the SAFEST drug to start our patient on for his pain (assume all PO)?",
    choices: [
      "Acetaminophen",
      "Celecoxcib",
      "Diclofenac",
      "Naproxen",
      "Morphine",
    ],
    correct: "Acetaminophen",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding the pharmacological management of OA and the safety profile of these drugs. In this vignette we are presented with a patient with suspected OA who wants pharmacological intervention on top of the non-pharmacological interventions. The safest drug to give would be (A) (though not necessarily the most effective or even effective at all). Acetaminophen has a high therapeutic index, which means that there is a large increase in dosage required to cause toxicity compared to the therapeutic dose. The recommended upper limit is 4g/day and usually 7.5g - 10g/day is considered toxic in adults. (B) is not the safest drug to give, as a COX-2 selective inhibitor there are increased CV risks, which is also why many COX-2 selective inhibitors have been removed from the market. (C) is a semi-non-selective COX inhibitor, which leads to GI risks such as bleeds and ulcers. (D) is a non-selective COX inhibitor and will come with GI risks like diclofenac. (E) is an opioid, and would not be a first line management in this case and has addictive potential."
  },
  {
    id: 2,
    prompt:
      "A 60 y/o patient with bilateral osteoarthritis secondary to increased body habitus and inactivity presents to his GP after the OTC topical diclofenac and acetaminophen fail to control his pain adequately. The GP decides that the patient could try systemic non-selective NSAID use. Which of the following pieces of information is NOT ESSENTIAL for the GP to obtain before starting the patient on a non-selective PO NSAID?",
    choices: [
      "BP",
      "Creatinine and eGFR",
      "History of bleeding disorders",
      "History of gastric diseases",
      "History of opioid use disorder",
    ],
    correct: "History of opioid use disorder",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the adverse effects and risks related to NSAIDs. In this vignette, we are presented with a patient that is about to go on systemic NSAIDs after treatment failure with OTC topical NSAIDs and tylenol. The only piece of info that is NOT essential would be (E). This is an important piece of information, but not essential right now before starting PO NSAID because NSAIDs are not opioids. What would be more important is checking his cardiovascular health such as (A) BP since NSAIDs will raise BP by causing vasoconstriction of the afferent arteriole in the kidneys (decreased PGI/E production) leading to feedback causing increased sodium retention and RAAS activation. This is also why (B) needs to be checked due to the decrease in GFR caused by the afferent vasoconstriction. (C) is important because NSAIDs increase the risk of bleeding since TXA2 helps platelet activity, and this would be reduced with NSAIDs use (especially those with COX1 activity). (D) is important because of the increased bleed risk in the GI tract and ulceration due to decreased prostaglandins production, which helps stimulate mucus production that protects the gastric lining."
  },
  {
    id: 3,
    prompt:
      "A 56 y/o patient presents to the ER with chest pain that initially started in the epigastric area. Before an ECG is ordered the new and exhausted intern starts the patient on an aspirin for the patient to chew. This does not resolve the chest pain and in fact makes it worse. She starts to decompensate with her BP dropping and HR increasing. The patient starts vomiting bright red blood. What is the most likely adverse effect/contraindication of non-selective COX inhibitors that is presented in this case?",
    choices: [
      "Aortic dissection",
      "Esophageal varices rupture",
      "Gastric ulcer perforation",
      "Immune thrombocytopenia (ITP)",
      "Ulcerative colitis flare up",
    ],
    correct: "Gastric ulcer perforation",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the adverse effects and contraindication of NSAIDs. In this vignette, a patient presents with undifferentiated chest pain that was not adequately worked up to rule out other red flag causes besides a STEMI. In this case the ASA for the presumed STEMI exacerbated the patient’s upper GI bleed. Hence, this vignette highlights (C) an important contraindication to NSAID use. NSAIDs can cause gastric ulcers due to decreased production of mucus caused by reduced PGE production. On top of that they can cause bleeding by inhibiting the production of TXA2 in platelets, thus leading to upper GI bleeds. We can see that she is decompensating with her BP dropping and compensatory HR increase, which further suggests blood loss. (A) presentation doesn’t appear to be an aortic dissection (pain radiating to the interscapular region, different BPs in left vs right arm). (B) these ruptures are usually painless and are associated with patients with liver disease (cirrhosis), however NSAIDs are thought to increase the risk of variceal bleeds. (D) Unlikely presentation in this case - purpura,  petechiae, easy bruising, mucosal bleeding. We also don’t have a PLT count. (E) Unlikely presentation in this case. If it was a lower GI bleed then maybe, though ASA is contraindicated in patients with IBD due to increased bleed and cause IBD flare ups."
  },
  {
    id: 4,
    prompt:
      "A 62 y/o patient with angina, HTN, T2DM, dyslipidemia, and a previous right anterior cerebral artery stroke presents to his GP to go over an x-ray of his right knee after a 3 month history of increasing pain and stiffness that does not resolve with weight loss, exercise, or acetaminophen. The x-ray shows subchondral cysts, decreased joint space in the medial compartment, sclerosing and osteophytes. The pain has been unbearable and the patient wants something stronger for the pain. There is no history for any GI issues, bleeding disorders, or substance use disorder. Which of the following medications would be LEAST safe in this patient?",
    choices: [
      "Aspirin",
      "Celecoxcib",
      "Diclofenac (PO)",
      "Diclofenac (topical)",
      "Tramadol",
    ],
    correct: "Celecoxcib",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the adverse effects/contraindications for COX-2 selective inhibitors. In this vignette we are presented with a patient with OA and many cardiovascular risk factors. We are also given a description of his x-ray that we would expect in OA. In this case the least safe medication would be (B) given his cardiovascular risk factors. (B) is a selective COX-2 inhibitor, one way to remember this is: Celec- sounds like Selec(-tive) COX. By only selectively inhibiting COX-2, the inducible form of the COX, there will be decreased prostaglandin production related to inflammation, but will not decrease prostaglandin production via COX-1, the constitutive form. That means prostaglandins like TXA-2, which are involved in PLT activity will be unaffected (or could be increased). Therefore, in patients like the one presented who have cardiovascular risk factors, the use of celecoxib may precipitate a thrombotic event. On the flip side, this allows it to have less gastric side effects as mucous production mediated by prostaglandins won’t be as inhibited as nonselective NSAIDs. (A) is a nonselective irreversible NSAID, and would probably already be taken by this patient. (C) and (D) are a nonselective NSAID, where the PO formulation would lead to systemic exposure and increased likelihood of side effects, while the topical formulation would allow for my localized delivery of drug (though there will be some systemic exposure, it is much less than the PO delivery). In this case with no history of gastric issues so far, it is a potentially safer option. (E) is a low potency opioid, and is thought to have low addictive potential. In this case, with no indication of substance use disorder, this isn’t the least safe drug to give, but also not the first line management for OA."
  },
  {
    id: 5,
    prompt:
      "Which of the following medication allergies would be a contraindication to COX-2 selective NSAIDs?",
    choices: [
      "Amoxicillin",
      "Ceftriaxone",
      "Clavulanate",
      "NKDA",
      "TMP-SMX (Trimethoprim / Sulfamethoxazole)",
    ],
    correct: "TMP-SMX (Trimethoprim / Sulfamethoxazole)",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding a drug allergy. COX-2 selective NSAIDs tend to contain a sulfa moiety, which means that patients allergic to sulfa-containing drugs such as sulfa ABXs are contraindicated. (E) is a sulfa ABX, thus the correct answer. (A), (B) would be a problem if she had a β-lactam allergy or penicillin allergy. (C) is a β-lactamase inhibitor commonly formulated with (A). (D) Is not a drug… “No known drug allergies”."
  },
  {
    id: 6,
    prompt:
      "A 67 y/o with osteoarthritis has experienced increasing pain that is not relieved with his current pharmacological and nonpharmacological interventions. His GP suggests doing biannual injections. Which of the following correctly describes a possible effect of this treatment?",
    choices: [
      "Increase chondrocyte activity",
      "Increase collagen synthesis",
      "Inhibit metalloproteases leading to decreased prostaglandins and inflammation",
      "Loss of cartilage",
      "No evidence that any intra-articular injections provide benefit",
    ],
    correct: "Loss of cartilage",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the mechanism and effects of corticosteroids. In this vignette we can infer that the drug in question is a corticosteroid as this would be prescribed as an intra-articular injection every 6 mos. Cortisone injections are the only intra-articular intervention that has been shown to have some benefit (therefore (E) is wrong).  The correct answer is (D). Corticosteroids actually can cause a loss of cartilage and one way to think about this is that glucocorticoids are catabolic and actually lead to proteolysis. This is why we don’t blast joints with steroids as treatment because it can eventually lead to break down of whatever cartilage is still left. Hence, we advise that injections be done 6mos apart and not indefinitely, and after other more conservative methods have failed. It really is more of a stopgap treatment. Moreover, overuse of steroids can lead to avascular necrosis of the underlying bone, which will further worsen the OA. The therapeutic benefit of corticosteroids are its antiinflammatory properties by decreasing the expression of pro-inflammatory mediators and upregulating anti-inflammatory mediators (you can review the mechanism of steroids in MEDD412 adrenal week). The decreased inflammation should lead to less pain and stiffness of the joint. (A) is wrong because steroids can lead to loss of chondrocyte activity. (B) proteolysis would lead to less collagen not more synthesis. (C) is partly true, corticosteroids are thought to inhibit metalloproteases (MP), which are thought to play a role in the pathophysiology of OA, however inhibition of MPs do not lead to decreased prostaglandins (that’s produced by COX enzymes!)."
  },
  {
    id: 7,
    prompt: "A 56 y/o patient with severe morning left knee stiffness that lasts less than 30 mins, and joint pain that increases with movement presents to his GP after doing some online research. He is concerned about the gastric effects of his medication. He is currently on naproxen PO. Which of the following changes would LEAST LIKELY address the patient’s apprehension regarding adverse gastric events (assume appropriate dosing and PO unless otherwise stated)?",
    choices: [
      "Switch to Celecoxib",
      "Switch to Diclofenac topical",
      "Switch to Diclofenac + Misoprostol",
      "Switch to Naproxen + Esomeprazole",
      "Switch to Naproxen + Ranitidine",
    ],
    correct:
      "Switch to Naproxen + Ranitidine",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the adverse effects of NSAIDs and how to decrease the risk. In this vignette we are presented with a patient who is worried about the gastric side effects of NSAIDs such as ulcerations, bleeding, and damage to the gastric lining. The change that would least likely address his concerns would be (E). Although ranitidine is a H2 antagonist, the evidence of it preventing NSAID-induced gastric ulcers is lacking compared to other options. This could be because H2 antagonists only block one possible pathway in gastric acid secretion, which explains the lower efficacy compared to PPIs. (A) would address his concerns because selective COX-2 inhibitors have less GI side effects since it doesn’t block COX-1 mediated production of PGE that causes mucus production in the stomach. (B) would address his concerns because topical administration leads to less systemic exposure (the bioavailability is many times lower than PO), hence we’d expect less systemic side effects. Moreover, this allows us to localize our delivery to the pathological knee. However, if he was slathering the gel all over his body or in areas with thin skin (face, groin, etc..), then he could have significant systemic exposure that would lead to side effects. (C) is a formulation that contains misoprostol, a PGE1 analogue, that was specifically formulated to prevent NSAID-induced gastric ulcers since this allows delivery of PGE1 to increase mucus production in the stomach. (D) is a formulation with a PPI, which would irreversibly inhibit the proton pump, hence decreasing acid production from all the different pathways that activate the pump, which makes it an effective treatment in preventing gastric ulcers."
  },
  {
    id: 8,
    prompt: "A 65 y/o patient with osteoarthritis managed with celecoxib, acetaminophen, and cortisone injections q6mo has been experiencing increased breakthrough pain the last three months. He is currently on the waitlist for a total knee replacement with an estimated 4 months left before he can get his surgery. The patient has no significant comorbidities. Which of the following changes to his medications would you consider for his breakthrough pain?",
    choices: [
      "Adding morphine for breakthrough pain",
      "Adding tramadol for breakthrough pain",
      "Changing celecoxib to ibuprofen",
      "Hyaluronic acid injections",
      "No change, pain is temporary",
    ],
    correct: "Adding tramadol for breakthrough pain",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the use of opioids in OA treatment. In this vignette we are presented with a patient who is having breakthrough pain for 3 mos despite being on a COX2 inhibitor, acetaminophen and getting intra-articular injections. He also has a scheduled TKR in 4 mos (fingers crossed). In this case, treating his breakthrough pain with something stronger would be something to do. So given the treatment failure, we would start with a “weaker” opioid in (B), which also has some SNRI activity. We could consider codeine+acetaminophen (Tyelonol #3), though codeine is a pro-drug that is converted into morphine. (A) morphine is the prototypical opioid and would be a few steps above tramadol. (C) would do nothing or make it worse for the patient given the COX1 inhibition. (D) have little to no evidence of actually working."
  },
  {
    id: 9,
    prompt:
      "A 60 y/o patient with osteoarthritis managed with oral indomethacin and acetaminophen presents to his GP with low mood and energy. He reveals this stems from his inability to continue playing tennis with his friends at the lawn club due to the increasing knee pain. His past medical history includes a prior H. pylori infection and mild stroke two years ago. Which of the following changes to his medications would you consider?",
    choices: [
      "Add codeine",
      "Add duloxetine",
      "Change indomethacin to celecoxib",
      "Hyaluronic acid injections",
      "Increase indomethacin dosage",
    ],
    correct: "Add duloxetine",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding the use of a SNRI in OA treatment. In this vignette we are presented with a patient who has suffered from the OA and is now showing signs of a depressive mood disorder. His medical history also includes H. pylori and mild stroke, which would suggest he is at an increased risk of peptic ulcer, and cerebrovascular events, respectively. Therefore, we would probably not do (C) or (E). (D) has little to no evidence of efficacy. We are left with (A) and (B). The pain itself has not been unbearable or described as breakthrough by him, so (A) might not be the best option. Given his presentation (B) would be the best as this could potentially help treat his depressive mood and the pain that isn’t being well managed with the first-line therapies. It is thought that by increasing 5-HT and NE, the signals in the brain can be modulated to decrease the sensation of pain."
  },
  {
    id: 10,
    prompt:
      "What is the mechanism of action of ibuprofen?",
    choices: [
      "Constitutive COX-1 inhibition leading to decreased prostaglandin production ",
      "Inducible COX-2 inhibition leading to decreased prostaglandin production",
      "Constitutive COX-1 and inducible COX-2 inhibition leading to decreased prostaglandin production",
      "Phospholipase A2 inhibition  leading to decrease prostaglandin production",
    ],
    correct:
      "Constitutive COX-1 and inducible COX-2 inhibition leading to decreased prostaglandin production",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the mechanism of a nonselective NSAID. (C) correctly describes the mechanism. NSAIDs inhibit the COX pathways that convert arachidonic acid into prostaglandins. (B) would describe the mechanism of celecoxib. (D) describes an effect of glucocorticosteroids, which cause decreased phospholipaseA2 activity, which leads to less arachidonic acid, hence decreased prostaglandins."
  },
  {
    id: 11,
    prompt:
      "Which of the following is NOT an effect of acetaminophen?",
    choices: [
      "Analgesia",
      "Anti-inflammatory",
      "Antipyretic",
      "Glutathione depletion",
    ],
    correct: "Anti-inflammatory",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires understanding what acetaminophen does. (B) is the correct answer. Acetaminophen is NOT a NSAID. The mechanism of acetaminophen has not been elucidated yet, but is thought to involve the “COX-3” isoenzyme in the CNS. Acetaminophen does not confer anti-inflammatory properties, but it will provide analgesia (additive with NSAIDs, synergistically with opioids), and decrease fever (antipyretic). Acetaminophen metabolism will also deplete glutathione stores in the liver, which leads to build up of NAPQI, a toxic metabolite. NAPQI is the culprit in acetaminophen-induced hepatotoxicity and clearing NAPQI requires glutathione. Hence, the antidote for acetaminophen overdose is replenishing glutathione stores with N-acetylcysteine."
  },
  {
    id: 12,
    prompt:
      "A 65 y/o patient presents to his GP with severe right knee pain following a total knee replacement for osteoarthritis a few weeks ago. On history he describes a sudden onset of intense sharp pain 2 days ago, localized only to his right knee, denies any trauma, 8/10 pain. He describes being unable to walk and weight bear. His family history is unremarkable and no recent infections. His vitals are BP 110/80, HR 100, RR 20, Temp 38.5C. On examination his right knee is swollen, red, and warm, has decreased RoM and he keeps it in a flexed position. Other joints are unremarkable. Assuming that labs are ordered and show the following: elevated WBC and CRP, normal liver enzymes, creatinine, uric acid levels, and turbid looking joint aspiration, which of the following pharmacotherapy would you pursue?",
    choices: [
      "Acetaminophen",
      "Antibiotics",
      "Celecoxib",
      "Ibuprofen",
      "Morphine",
    ],
    correct: "Antibiotics",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding the treatment for septic arthritis. In this vignette we are presented with a patient with monoarthritis, a fever, tachycardic, history of joint surgery, and severe sharp pain that is unable to bear weight with loss of RoM. In this case we would highly suspect septic arthritis. We are then told the labs, which rule out some other inflammatory causes, and make us even more suspicious of SA given the elevated WBC, and turbid looking joint aspiration. Therefore, we should pursue antibiotics to treat the infection before it leads to full blown sepsis."
  },
];
