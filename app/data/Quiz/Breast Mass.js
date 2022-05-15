/**
 * Questions for Breast Mass week
 * @author Michael Gong, UBC VFMP 2025
 */

export const breastMass = [
    {
        "id" : 1,
        "prompt" : "A 63 y/o patient is undergoing adjuvant chemotherapy for her breast cancer and has a positive family history for osteoporosis. She is wondering if letrozole or tamoxifen would be safer given her family history. Which drug would be safer in terms of bone density and why?",
        "choices": [
            "Both tamoxifen and letrozole are equally detrimental to bone density",
            "Letrozole is safer because tamoxifen is a partial estrogen agonist, thus the effects of maintaining bone density will not be as strong as endogenous estrogen",
            "Letrozole is safer because it is an aromatase inhibitor, and aromatases are not heavily expressed in the bone tissue, thus minimal letrozole will be found in bone tissue to cause an adverse effect",
            "Tamoxifen is safer because it can act as an agonist in both breast and bone tissue, leading to the maintenance of bone density", 
            "Tamoxifen is safer because it has tissue specific properties, where it acts as an estrogen antagonist in breast tissue, but an estrogen agonist in bone tissue for bone density maintenance"],
        "correct": "Tamoxifen is safer because it has tissue specific properties, where it acts as an estrogen antagonist in breast tissue, but an estrogen agonist in bone tissue for bone density maintenance",
        "tags":["PD","medium","Oncology","side-effects","MoA"]
    },
    {
        "id" : 2,
        "prompt" : "What is the mechanism of action of letrozole?",
        "choices": [
            "Estrogen receptor antagonist. Binds directly to the estrogen receptor",
            "Aromatase inhibitor. Inhibits the conversion of androgens to estradiol/estrone",
            "Partial agonist of the estrogen receptor. Preserves some activity of the estrogen receptor, but not as much as estrogen", 
            "Androgen receptor agonist. Enhances androgenic activity, which will counteract estrogenic activity.",
            "Selective estrogen receptor modulator. Has tissue specific effects, such as an antagonist in breast tissue and partial agonist in endometrial tissue"],
        "correct": "Aromatase inhibitor. Inhibits the conversion of androgens to estradiol/estrone",
        "tags":["PD","easy","Oncology","Ob/Gyn","MoA"]
    },
   {
        "id" : 3,
        "prompt" : "During your ER rotation a 57 y/o female patient presents with compression fracture in her lumbar vertebrae. You take her history and find no history of trauma. She was recently diagnosed with breast cancer and is undergoing neoadjuvant chemotherapy with letrozole. She is on no other medication. What is the significance of letrozole in this case?",
        "choices": [
            "Letrozole increases the risk of multiple myeloma, leading to the breakdown of the lumbar vertebrae",
            "Letrozole increases parathyroid hormone levels, leading to increased bone resorption and decreased bone density, resulting in a fracture", 
            "Letrozole inhibits the production of estrogen, thus leading to decreased osteoblast activity and a loss in bone density, which resulted in the fracture",
            "There is no significance"],
        "correct": "Letrozole inhibits the production of estrogen, thus leading to decreased osteoblast activity and a loss in bone density, which resulted in the fracture",
        "tags":["Oncology","easy","side-effects"]
    },  
    {
        "id" : 4,
        "prompt" : "A 64 y/o woman was recently diagnosed with Stage II ductal carcinoma in situ (DCIS). She undergoes a lumpectomy and further investigation reveals the tumor to be ER-, PR-, and HER2- (triple-negative). You need to pick a chemotherapeutic agent to be included in her adjuvant therapy. With your knowledge on the mechanisms of actions, which of the following drugs would be the most appropriate?",
        "choices": [
            "Cyclophosphamide (alkylating agents that prevents unwinding of DNA)",
            "Letrozole",
            "Tamoxifen", 
            "Trastuzumab (anti-HER2 antibody)"],
        "correct": "Cyclophosphamide (alkylating agents that prevents unwinding of DNA)",
        "tags":["Oncology","medium","Chemo","PD"]
    }
]
