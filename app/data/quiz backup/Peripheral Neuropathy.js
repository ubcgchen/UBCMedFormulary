export const peripheralNeuropathy = [
  {
    id: 1,
    prompt:
      "A 54 y/o cancer patient presents to the neurologist with a 5 wk history of bilateral paresthesia that started at his toes and has spread proximally to his knees. The patient is currently undergoing combination chemotherapy for his head and neck cancer that consists of cisplatin (platinum-based chemo) and 5-fluorouracil (antimetabolite chemo). He also takes folate supplementation and an opioid for cancer pain management. Intact cranial nerves (no loss of hearing noted), decreased vibration sensation in his legs, and loss of the ankle jerk reflex were noted on exam. You suspect an iatrogenic cause due to which of his medications/supplements?",
    choices: [
      "5-fluorouracil",
      "Cisplatin",
      "Folate",
      "Opioid",
    ],
    correct: "Cisplatin",
    tags: ["PD", "medium", "side effects", "Neurology", "Oncology"],
    explain: "This question requires understanding iatrogenic causes of peripheral neuropathy. In this vignette we are presented with a patient with subacute symmetric polyneuropathy. Medications that could cause this include platinum based chemotherapeutics and isoniazid. In this case, (B) cisplatin is a platinum based chemotherapeutic and is the correct answer. The other medications are not known to cause symmetric polyneuropathy. The other medications are not known causes of peripheral neuropathy. Folate is protective of nerves, hence any medications that lower folate such as antifolates like methotrexate could potentially cause peripheral neuropathy.",
  },
  {
    id: 2,
    prompt:
      "A 63 y/o patient with T2DM has a 6 mo history of increasing spontaneous pain, paresthesias, and numbness that started in his feet and has spread proximally to his knees and hands in a symmetrical pattern. The neurologist suspects diabetic neuropathy and prescribes him medication for the neuropathic pain. Which of the following would you NOT prescribe first?",
    choices: ["Gabapentin", "Nortriptyline", "Tramadol", "Venlafaxine (SNRI)"],
    correct: "Tramadol",
    tags: ["PD", "medium", "pain", "Neurology"],
    explain: "This question requires knowing the treatment options for neuropathic pain. The first line medications for neuropathic pain are the gabapentinoids (A), TCAs (B), and SNRIs (D). (C)Tramadol (an opioid) is a second line medication with the other opioid analgesics, which is the correct answer in this case. The third line management is cannabinoids. These medications can be added sequentially if there is inadequate pain relief.",
  },
  {
    id: 3,
    prompt:
      "A 25 y/o patient with a large laceration on his left arm is about to be given local anesthetic (LA) to help with the pain during suturing. The medical student notes that the area around the site is heavily inflamed, but decides to still inject 1% lidocaine (7 mg/kg with epi). After waiting for the standard amount of time the medical student starts suturing, but the first bite goes in and the patient yelps in pain and swats the medical student away. What could explain the presence of pain despite correct dosing?",
    choices: [
      "Inflammation lowers pH, thus more LA will be in its charged form and unable to cross the nerve sheath",
      "Inflammation lowers pH, thus more LA will be in its base form and unable to block Na\u207A channels",
      "Inflammation raises pH, thus more LA will be in its charged form and unable to cross the nerve sheath",
      "Inflammation raises pH, thus more LA will be in its base form and unable to block Na\u207A channels",
      "Epinephrine caused vasodilation at the tissue, causing increased distribution of LA away from the area",
    ],
    correct:
      "Inflammation lowers pH, thus more LA will be in its charged form and unable to cross the nerve sheath",
    tags: ["PD", "PK", "medium", "MoA", "anesthesia", "pain"],
    explain: "This question requires understanding LA pharmacokinetics. In this vignette we are presented with inadequate analgesia with LA despite following standard protocols, which suggests that inadequate LA reached its target (pain fibers). In tissues that are inflamed, there is a decrease in pH due to the increased number of inflammatory cells (increased metabolic demand leading to more acid production), which can affect PK. LAs (except for benzocaine) tend to have a pKa of around 8 (mildly basic), thus a drop in pH will lead to more LA to be in its cation form (R-NH+) than its base form (R-N + H+). LAs in the cation form will not be able to cross the lipophilic nerve sheath to reach the axonal membrane and the VG Na+ channels to exert their effect.  Therefore, (A) correctly describes this predicament. Although, LAs need to be in the charged form to block Na+ channels, if the LA can not even reach the axonal membrane, then there will be no analgesia. (E) is wrong, Epi will cause vasoconstriction, so it would actually limit distribution away from the site, thus also increasing concentration of LA at the site. NOTE: Chemistry explanation - Henderson-Hasselbalch equation (pH = pKa + log([B]/[BH+])) when pH = pKa, then B = BH+ since log(1)=0 (both sides of the equation are then equal).  If pH > pKa, then B > BH+ because log(>1) will be positive to balance both sides of the equation. When pH < pKa, then B < BH+ because log(<1) will be negative to balance both sides. In this case pH is decreasing, therefore, less B than normal.",
  },
  {
    id: 4,
    prompt:
      "A 34 y/o patient presents to the ER with a difficult airway due to an obstruction and can not be sufficiently sedated. The anesthesiologist on-call is called to perform an awake fiberoptic intubation. The anaesthesiologist applies a local anesthetic spray to the patient’s throat to prevent a gag reflex. Which of the following local anesthetics would be the most effective in this case?",
    choices: [
      "Benzocaine",
      "Bupivacaine",
      "Cocaine",
      "Lidocaine",
      "Ropivacaine",
    ],
    correct: "Benzocaine",
    tags: ["PK", "PD", "medium", "MoA", "pain", "anesthesia"],
    explain: "This question requires understanding PK properties of different local anesthetics (LA). In this vignette, we are presented with a patient that requires topical analgesia. In this case, we would want to use a LA that is able to be absorbed through the mucosal surface to reach the pain fibers to allow for analgesia. Therefore, we would want to use a highly lipophilic LA, since lipophilic drugs diffuse more readily through lipid membranes. Thus, (A) is the correct answer. Benzocaine also has a low pKa, meaning that virtually 100% of it will be in base form at pH 7+, thus it has little systemic absorption given its poor solubility in aqueous solutions like blood. This allows us to administer topical benzocaine over large surface areas like the oral cavity without worrying about systemic complications like methemoglobin formation. It should be noted that benzocaine has a different pathway in blocking Na+ channels by traversing through the lipid membrane to reach the channel rather than blocking the channel from the intracellular side like other LAs.",
  },
  {
    id: 5,
    prompt:
      "Which of the following correctly describes the mechanism of action of lidocaine?",
    choices: [
      "The base form penetrates the nerve sheath and into the axonal membrane and blocks Na\u207A channels through the axonal membrane ",
      "The base form penetrates the nerve sheath and blocks Na\u207A channels from the extracellular side",
      "The base form penetrates the nerve sheath, where it is protonated into its cation form and blocks Na\u207A channels from the extracellular side",
      "The base form penetrates the nerve sheath and axonal membrane, where it is protonated into its cation form and blocks Na\u207A channels from the intracellular side",
      "The base form penetrates the nerve sheath and axonal membrane and blocks Na\u207A channels from the intracellular side",
    ],
    correct:
      "The base form penetrates the nerve sheath and axonal membrane, where it is protonated into its cation form and blocks Na\u207A channels from the intracellular side",
    tags: ["PD", "medium", "MoA", "anesthesia", "pain"],
    explain: "This question requires understanding the mechanism of action of local anesthetics (LA). LAs have to first traverse the nerve sheath and other lipid membranes like the epi-, peri-, and endoneurium, myelin sheath etc.. in its absorbable form, the base form (unionized). Once it reaches the axonal membrane, LAs must then be absorbed through the cellular membrane into the axoplasm (intracellular side). However, the cation form of LAs is what confers its ability to block Na+ channels, therefore some proportion of LAs after equilibrating will be in its charged form and will be able to block the Na+ channel from the intracellular side. Now the generation and propagation of APs will be blocked via stabilization of the inactivated state. An exception to this is benzocaine, which can reach the Na+ channel through the lipid membrane and block the channel. Therefore, only (D) correctly describes the mechanism of lidocaine.",
  },
  {
    id: 6,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 presents to the maternity ward in labor and asks for an epidural. An anesthesiology resident on his obstetrics rotation administers the epidural using lidocaine. After 15 mins the patient loses sensation, but she is able to move her legs and she gets anxious that the resident did not administer enough anesthesia. With your knowledge on local anesthetic pharmacology, why is the patient still able to walk, despite losing sensation?",
    choices: [
      "Anatomically, the sensory fibers are on the dorsal column and will be blocked before the lateral corticospinal tracts due to distance from route of administration",
      "Local anesthetics block larger diameter fibers before smaller diameter motor fibers",
      "Local anesthetics block smaller diameter fibers before larger diameter motor fibers",
      "Local anesthetics only need 3 nodes of Ranvier to be blocked in unmyelinated fibers versus 5 nodes of Ranvier in heavy myelinated motor fibers.",
    ],
    correct:
      "Local anesthetics block smaller diameter fibers before larger diameter motor fibers",
    tags: ["PD", "medium", "MoA", "PK", "anesthesia", "Ob/Gyn", "pain"],
    explain: "This question requires understanding the concept of differential block with LAs. In this vignette we have an anxious pregnant patient that thinks the epidural isn’t enough because she can still walk. The reason why this is fine is because the LA preferentially block smaller diameter fibers before larger diameter fibers, which is helpful in our case because smaller diameter fibers like Type Aδ and Type C carry pain sensation and are blocked, while our larger fibers like Type Aα carry motor function are left unblocked. It was also thought that this was also because LAs block unmyelinated fibers before myelinated ones, but there is evidence against this preferential block. Hence, (C) is the correct answer. (D) is false. 3 consecutive nodes of Ranvier in myelinated fibers need to be blocked, also unmyelinated fibers do not have nodes of Ranvier, since these are pockets of unmyelinated axon between myelin sheaths."
  },
  {
    id: 7,
    prompt:
      "Listed are the lipid solubilities (octanol:aqueous partition at 25\u2070C) of four LAs: Bupivacaine - 346, Lidocaine 43, Ropivacaine - 115, Procaine 1.7. Rank them from most potent to least potent.",
    choices: [
      "Bupivacaine > Ropivacaine > Lidocaine > Procaine",
      "Procaine > Lidocaine > Ropivacaine > Bupivacaine",
      "More information in addition to lipid solubility is needed to rank the LAs",
      "Lipid solubility is not correlated with potency",
    ],
    correct: "Bupivacaine > Ropivacaine > Lidocaine > Procaine",
    tags: ["PD", "medium", "pain", "anesthesia"],
    explain: "This question requires understanding the relationship between potency and physicochemical properties of LAs. Lipid solubility and potency are directly related, in this case, bupivacaine is the most lipid soluble, so, we’d expect it to be the most potent, while procaine is the least lipid soluble, thus the least potent. This is correctly shown in (A). It is thought that due to the lipid nature/membranes of nerves (axonal, myelin, epi-, peri-, endoneurium) and surrounding tissue, the increased lipid solubility will allow for increased passage through membranes to reach the sodium channels and exert their pharmacological action.",
  },
  {
    id: 8,
    prompt:
      "Listed are the pKas of four LAs: Bupivcaine - 8.1, Ropivacine - 8.1, Lidocaine - 7.7, Procaine 8.9. Rank them from fastest onset to slowest onset of action.",
    choices: [
      "Lidocaine > Bupivacaine = Ropivacaine > Procaine",
      "Procaine > Bupivacaine = Ropivacaine > Lidocaine",
      "More information in addition to pKa is needed to rank the LAs",
      "pKa is not correlated with onset of action",
    ],
    correct: "Lidocaine > Bupivacaine = Ropivacaine > Procaine",
    tags: ["PD", "medium", "PK", "pain", "anesthesia"],
    explain: "This question requires understanding the relationship between onset of action and physicochemical properties of LAs. pKa and onset of action are inversely related, which means that with increased pKa, there is a slower onset of action. Here Lidocaine has the lowest pKa, thus we’d expect it to have the fastest onset of action, while procaine has the highest pKa, so we’d expect it to have the slowest onset of action. This is correctly shown in (A). This relationship is thought to exist because at lower pKas, more drug will be in its unionized form, which will allow it to pass through membranes (e.g. axonal, nerve sheath, myelin) to reach the site of action (axonal sodium channels). This can be demonstrated with the Henderson-Hasselbalch equation (pH = pKa + log([B]/[BH+])) when pH = pKa, then B = BH+ since log(1)=0 (both sides of the equation are then equal).  If pH > pKa, then B > BH+ because log(>1) will be positive to balance both sides of the equation. When pH < pKa, then B < BH+ because log(<1) will be negative to balance both sides. In this case if we compare pKas of different LAs, those with lower pKas will have more B to BH+ relative to those with higher pKas.",
  },
  {
    id: 9,
    prompt:
      "A pharmaceutical company wants to design a new local anesthetic with a longer duration of action. Which of the following modifications to an amino-amide based LA could potentially help achieve their goal?",
    choices: [
      "Addition of a negatively charged group and a functional that increases plasma protein binding",
      "Addition of a hydrophilic group and a functional group that decreases plasma protein binding",
      "Addition of a hydrophilic group and a functional group that increases plasma protein binding",
      "Addition of a lipophilic group and a functional group that decreases plasma protein binding",
      "Addition of a lipophilic group and a functional group that increases plasma protein binding",
    ],
    correct:
      "Addition of a lipophilic group and a functional group that increases plasma protein binding",
    tags: ["PD", "medium", "PK", "pain", "anesthesia"],
    explain: "This question requires understanding the relationship between duration of action and physicochemical properties of LAs. Increased lipophilicity and increased plasma protein binding are directly related with increased duration of action. This is because more lipophilic drugs (higher Vds) tend to stay in the body longer due to an increased distribution phase as they linger around in adipose tissue (slow release into the blood) versus distributing into the blood compartment where it can be metabolized and excreted. Similarly, increased protein binding will keep more LA in the body and protect it from metabolism, since only free drug can be metabolized and excreted (normally). Thus, this will also increase the duration of action. Hence, (E) is the correct answer as it increases both the plasma protein binding and lipophilicity of the LA.",
  },
  {
    id: 10,
    prompt:
      "A 45 y/o patient presents to the ER after a snowmobile accident with broken ribs. To help relieve the severe pain, an intercostal nerve block using bupivacaine is done. The anaesthesiologist misreads the dose and accidentally injects an unsafe concentration of bupivacaine. Which of the following adverse effects could occur?",
    choices: [
      "Tinnitus and blurred vision, followed by tonic-clonic seizures",
      "Tonic-clonic seizures followed by blurred vision and tinnitus",
      "Ventricular arrhythmia and myocardial depression",
      "A and C",
      "B and C",
    ],
    correct: "A and C",
    tags: ["PD", "medium", "pain", "anesthesia", "side effects"],
    explain: "This question requires knowing adverse effects of local anesthetics (LA). In this vignette we are presented with a patient who receives a supratherapeutic intercostal nerve block with bupivacaine. If we think about the mechanism of LAs, any system that utilizes voltage gated Na+ channels could be affected such as the heart and nervous system. An intercostal injection also allows for large amounts of the LA to be systemically absorbed compared to some other sites. Therefore, we would expect systemic side effects. Initial LA toxicity presents with inhibition such as tinnitus and blurred vision (impaired nerve conduction) or sedation and dizziness. This can be followed by an excitation phase, where inhibitory neurons of the CNS are blocked by the LA, which leads to an excitatory state, thus causing tonic-clonic seizures, tremor, and myo-clonus. At extremely high doses LAs can cause cardiovascular toxicity, in fact bupivacaine has a high potential for cardiotoxicity, thus we would also expect ventricular arrhythmia and myocardial depression. This is thought to be due to its lipophilicity (higher potency) and accumulation in the heart. Therefore (D) is the correct answer. We can treat LA toxicity with a lipid emulsion known as lipid rescue, which hopefully draws the lipophilic LAs into the emulsion rather than in the plasma or in tissue where it can cause toxicity. Administration of benzodiazepines can also increase the seizure threshold.",
  },
  {
    id: 11,
    prompt:
      "A 40 y/o male presents to the ER with numbness in his feet bilaterally. The numbness initially started in his feet, but has ascended to his thighs and hands bilaterally. He reports having walking pneumonia ~10 days ago. The motor exam reveals bilateral distal weakness (⅗) and proximal weakness (⅘), normal tone, and areflexia. A sensory exam shows changes in a stocking glove distribution to pin, temperature, and light touch. Romberg is positive. The cranial nerve exam reveals mild dysarthria, and bilateral facial weakness and ptosis. No pain reported anywhere. Labs are ordered and some of them come back: CSF - elevated proteins, rest is normal (e.g. WBC), lytes - mild hyponatremia. As you await the MRI results, your working diagnosis of this case can be managed with, which of the following interventions?",
    choices: [
      "Corticosteroids (high potency) - dexamethasone ",
      "Corticosteroids (mid potency) - prednisone",
      "Gabapentoids - gabapentin",
      "Intravenous immune globulin",
      "NSAIDs - Ibuprofen",
    ],
    correct: "Intravenous immune globulin",
    tags: ["PD", "medium", "pain", "anesthesia", "side effects"],
    explain: "This question requires understanding management of Guillain-Barré syndrome (GBS). In this vignette we are presented with a patient with suspected GBS. We suspect this given the rapid onset and progression of polyradiculoneuropathy of both motor and sensory neurons and probable demyelinating (early areflexia and preceding illness) nature. We also have cranial nerve involvement (dysarthria (9, 10), facial weakness (7), ptosis (3)). We also see distal>proximal weakness and an ascending presentation. We further suspect this given the LP CSF results showing albuminocytologic dissociation, which is an increase in protein without WBC elevation, and signs of SIADH (hyponatremia). If we had an MRI, we’d expect enhancement of nerve roots (inflammation). Our working diagnosis is GBS, which can be treated with plasmapheresis and (D) IV Ig. (A) and (B) are steroids and have not been shown to be helpful. (C) is good for neuropathic pain. In GBS, there is production of antibodies against nerves, which causes damage and inflammation leading to demyelination. Many mechanisms are connected to IV Ig use such as inhibiting B-cells (some sort of negative feedback) and saturate receptors (FcRn) that protect IgG from degradation, thus leading to decreased Ab production and  increased degradation of harmful Abs. It is also thought to inhibit T-cell production of Il-2 and INF-γ, thus limiting immune response against the nerves, inhibit complement, macrophage function mediated by Abs (Fc receptors), and a lot more.",
  },
];
