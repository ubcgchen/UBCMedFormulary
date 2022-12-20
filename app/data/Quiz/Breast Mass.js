/**
 * Questions for Breast Mass week
 * @author Michael Gong, UBC VFMP 2025
 */

export const breastMass = [
  {
    id: 1,
    prompt:
      "A 63 y/o patient is undergoing adjuvant chemotherapy for her breast cancer and has a positive family history for osteoporosis. She is wondering if letrozole or tamoxifen would be safer given her family history. Which drug would be safer in terms of bone density and why?",
    choices: [
      "Both tamoxifen and letrozole are equally detrimental to bone density",
      "Letrozole is safer because tamoxifen is a partial estrogen agonist, thus the effects of maintaining bone density will not be as strong as endogenous estrogen",
      "Letrozole is safer because it is an aromatase inhibitor, and aromatases are not heavily expressed in the bone tissue, thus minimal letrozole will be found in bone tissue to cause an adverse effect",
      "Tamoxifen is safer because it can act as an agonist in both breast and bone tissue, leading to the maintenance of bone density",
      "Tamoxifen is safer because it has tissue specific properties, where it acts as an estrogen antagonist in breast tissue, but an estrogen agonist in bone tissue for bone density maintenance",
    ],
    correct:
      "Tamoxifen is safer because it has tissue specific properties, where it acts as an estrogen antagonist in breast tissue, but an estrogen agonist in bone tissue for bone density maintenance",
    tags: ["PD", "medium", "Oncology", "side-effects", "MoA"],
    explain: "This question requires understanding the difference in mechanisms of letrozole and tamoxifen and inferring its effect on bone density. Here we need to understand the pathology of decreased bone density and the mechanisms. In general terms, bone density decreases with lower levels of estrogen due to decreased osteoblast activity. THis is why post-menopausal women are at risk of fractures and osteoporosis. Therefore, the safer drug would be one that doesn’t decrease estrogen levels as much or inhibit the activity of estrogen. Letrozole is an aromatase inhibitor, thus it will decrease estrogen levels. Tamoxifen is a selective estrogen receptor modulator, which means it has tissue specific activity. In breast tissue, tamoxifen will act as an estrogen antagonist, while in bone tissue it will act as a partial agonist. This will allow tamoxifen to preserve osteoblast function, while inhibiting ER+ breast tissue growth. Hence, (E) is the correct answer."
  },
  {
    id: 2,
    prompt: "What is the mechanism of action of letrozole?",
    choices: [
      "Estrogen receptor antagonist. Binds directly to the estrogen receptor",
      "Aromatase inhibitor. Inhibits the conversion of androgens to estradiol/estrone",
      "Partial agonist of the estrogen receptor. Preserves some activity of the estrogen receptor, but not as much as estrogen",
      "Androgen receptor agonist. Enhances androgenic activity, which will counteract estrogenic activity.",
      "Selective estrogen receptor modulator. Has tissue specific effects, such as an antagonist in breast tissue and partial agonist in endometrial tissue",
    ],
    correct:
      "Aromatase inhibitor. Inhibits the conversion of androgens to estradiol/estrone",
    tags: ["PD", "easy", "Oncology", "Ob/Gyn", "MoA"],
    explain: "B is the correct answer. Letrozole is an aromatase inhibitor, which inhibits the conversion of androgens (e.g. testosterone) to estrogens. Option E describes the mechanism of tamoxifen."
  },
  {
    id: 3,
    prompt:
      "During your ER rotation a 57 y/o female patient presents with compression fracture in her lumbar vertebrae. You take her history and find no history of trauma. She was recently diagnosed with breast cancer and is undergoing neoadjuvant chemotherapy with letrozole. She is on no other medication. What is the significance of letrozole in this case?",
    choices: [
      "Letrozole increases the risk of multiple myeloma, leading to the breakdown of the lumbar vertebrae",
      "Letrozole increases parathyroid hormone levels, leading to increased bone resorption and decreased bone density, resulting in a fracture",
      "Letrozole inhibits the production of estrogen, thus leading to decreased osteoblast activity and a loss in bone density, which resulted in the fracture",
      "There is no significance",
    ],
    correct:
      "Letrozole inhibits the production of estrogen, thus leading to decreased osteoblast activity and a loss in bone density, which resulted in the fracture",
    tags: ["Oncology", "easy", "side-effects"],
    explain: "This question requires understanding an important adverse effect of letrozole in post-menopausal women. In this vignette, we are presented with a patient with breast cancer treated medically with letrozole and now has a lumbar compression fracture. Letrozole is an aromatase inhibitor and inhibits the production of estrogen. An important adverse effect of estrogen inhibition is osteoporosis. This is why post-menopausal women are at a higher risk of osteoporosis and fractures due to decreased estrogen levels. Hence (C) is the correct answer."
  },
  {
    id: 4,
    prompt:
      "A 64 y/o woman was recently diagnosed with Stage II ductal carcinoma in situ (DCIS). She undergoes a lumpectomy and further investigation reveals the tumor to be ER-, PR-, and HER2- (triple-negative). You need to pick a chemotherapeutic agent to be included in her adjuvant therapy. With your knowledge on the mechanisms of actions, which of the following drugs would be the most appropriate?",
    choices: [
      "Cyclophosphamide (alkylating agents that prevents unwinding of DNA)",
      "Letrozole",
      "Tamoxifen",
      "Trastuzumab (anti-HER2 antibody)",
    ],
    correct:
      "Cyclophosphamide (alkylating agents that prevents unwinding of DNA)",
    tags: ["Oncology", "medium", "Chemo", "PD"],
    explain: "This question tests for understanding of pharmacodynamics in drug therapy choice. In this case, the tumor does not express HER2 on the surface, hence (D) is not a viable therapy choice since Tmab targets the HER2 protein. Likewise, (B) and (C) are not viable since the tumor does not express hormone receptors (ER and PR). Both letrozole and tamoxifen mechanism targets reducing the effects of estrogen on tumor growth, which in this case is not the driving force of the tumor. Hence (A) is the best option since it is not dependent on the expression of a specific protein and has a “general” mechanism of action, where it targets the unwinding of DNA during DNA replication and protein synthesis, which all cells have."
  },
  {
    id: 5,
    prompt:
      "A 65 y/o patient with metastatic colon cancer is undergoing chemotherapy. The cancer is found to be EGFR (epidermal growth factor receptor) positive and he is prescribed an anti-EGFR biologic, cetuximab. The treatment is found to be ineffective and it is later discovered that he has a gain of function mutation in a protein called KRAS. Given this case, what is the best possible explanation for the treatment failure with cetuximab?",
    choices: [
      "EGFR is a cytosolic protein, hence the mAb could not reach its target to exert its therapeutic effect",
      "EGFR is a surface receptor, however, the gain of function KRAS caused EGFR to misfold, thus was not recognized by cetuximab",
      "KRAS is an upstream protein of EGFR, hence blocking EGFR does not prevent Ras from activating another pathway that leads to cell proliferation",
      "KRAS is a downstream protein of EGFR, hence blocking EGFR does little in preventing cell proliferation if Ras is always “on”",
    ],
    correct:
      "KRAS is a downstream protein of EGFR, hence blocking EGFR does little in preventing cell proliferation if Ras is always “on”",
    tags: ["Oncology", "medium", "Chemo", "PD"],
    explain: "This question requires understanding cell signal transduction pathways and how that affects efficacy of treatments. In this vignette, we are presented with a patient with EGFR positive metastatic colon cancer that fails to respond to cetuximab (anti-EGFR). On the surface, treating an EGFR positive cancer with an mAb that blocks it is a great way to stop the transduction pathway for cell proliferation. This works IF that is the driving force behind cell proliferation, however we are told he has a gain of function KRAS mutation as well. KRAS is a downstream protein in the signal transduction pathway, and if constitutively active (gain of function) it will continue to activate the rest of the pathway without requiring upstream EGFR activation. Hence, his cancer growth is driven by KRAS, not EGFR, so targeted EGFR therapy is not effective. You don’t need to memorize the different signal transduction pathways, but (D) is the most plausible explanation with the provided information. We can infer that EGFr is a surface receptor protein since it is treated with a mAb, hence (A) and (C) are most likely false. (B) outlines a complex process, that isn’t as plausible as (D)."
  },
];
