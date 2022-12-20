export const peripheralNeuropathy = [
  {
    id: 1,
    prompt:
      "A 54 y/o cancer patient presents to the neurologist with a 5 wk history of bilateral paresthesia that started at his toes and has spread proximally to his knees. The patient is currently undergoing combination chemotherapy for his head and neck cancer that consists of  methotrexate, cisplatin (platinum-based chemo), and 5-fluorouracil (antimetabolite chemo). He also takes folate supplementation and an opioid for cancer pain management. Intact cranial nerves (no loss of hearing noted), decreased vibration sensation in his legs, and loss of the ankle jerk reflex were noted on exam. You suspect an iatrogenic cause due to which of his medications/supplements?",
    choices: [
      "5-fluorouracil",
      "Cisplatin",
      "Folate",
      "Methotrexate",
      "Opioid",
    ],
    correct: "Cisplatin",
    tags: ["PD", "medium", "side effects", "Neurology", "Oncology"],
  },
  {
    id: 2,
    prompt:
      "A 63 y/o patient with T2DM has a 6 mo history of increasing spontaneous pain, paresthesias, and numbness that started in his feet and has spread proximally to his knees and hands in a symmetrical pattern. The neurologist suspects diabetic neuropathy and prescribes him medication for the neuropathic pain. Which of the following would you NOT prescribe first?",
    choices: ["Gabapentin", "Nortriptyline", "Tramadol", "Venlafaxine (SNRI)"],
    correct: "Tramadol",
    tags: ["PD", "medium", "pain", "Neurology"],
  },
  {
    id: 3,
    prompt:
      "A 25 y/o patient with a large laceration on his left arm is about to be given local anesthetic to help with the pain during suturing. The medical student notes that the area around the site is inflamed, but decides to still inject 1% lidocaine (7 mg/kg with epi). Once the first bite goes in the patient yelps in pain and swats the medical student away. What could explain the presence of pain despite correct dosing?",
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
  },
  {
    id: 5,
    prompt:
      "Which of the following correctly describes the mechanism of action of lidocaine?",
    choices: [
      "The base form penetrates the nerve sheath and into the axonal membrane and blocks Na\u207A channels through the axonal membrane ",
      "The base form penetrates the nerve sheath and blocks Na\u207A channels from the extracellular side",
      "The base form penetrates the nerve sheath, where it deprotonates into its cation form and blocks Na\u207A channels from the extracellular side",
      "The base form penetrates the nerve sheath and axonal membrane, where it deprotonates into its cation form and blocks Na\u207A channels from the intracellular side",
      "The base form penetrates the nerve sheath and axonal membrane and blocks Na\u207A channels from the intracellular side",
    ],
    correct:
      "The base form penetrates the nerve sheath and axonal membrane, where it deprotonates into its cation form and blocks Na\u207A channels from the intracellular side",
    tags: ["PD", "medium", "MoA", "anesthesia", "pain"],
  },
  {
    id: 6,
    prompt:
      "A 32 y/o pregnant patient G3T1P1 presents to the maternity ward in labor and asks for an epidural. An anesthesiology resident on his obstetrics rotation administers the epidural using lidocaine. After 15 mins the patient loses sensation, but she is able to move her legs and she gets anxious that the resident did not administer enough anesthesia. With your knowledge on local anesthetic pharmacology, why is the patient still able to walk, despite losing sensation?",
    choices: [
      "Anatomically, the sensory fibers are on the dorsal column and will be blocked before the lateral corticospinal tracts due to distance from route of administration",
      "Local anesthetics block larger diameter fibers before smaller diameter motor fibers",
      "Local anesthetics block smaller diameter fibers before larger diameter motor fibers",
      "Local anesthetics block only need 3 nodes of Ranvier to be blocked in unmyelinated fibers versus 5 nodes of Ranvier in heavy myelinated motor fibers",
    ],
    correct:
      "Local anesthetics block smaller diameter fibers before larger diameter motor fibers",
    tags: ["PD", "medium", "MoA", "PK", "anesthesia", "Ob/Gyn", "pain"],
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
  },
];
