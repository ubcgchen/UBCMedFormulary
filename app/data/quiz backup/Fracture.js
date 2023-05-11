export const fracture = [
  {
    id: 1,
    prompt:
      "A 5 y/o patient presents with acute pain in his left thigh following a car accident. X-rays confirm a midshaft spiral fracture. Using your knowledge regarding bone remodeling and healing, which of the following drugs has the LEAST potential to slow down the healing process?",
    choices: [
      "Acetaminophen",
      "Celecoxib",
      "Ibuprofen",
      "Prednisone",
      "All of the above slow down the healing process",
    ],
    correct: "Acetaminophen",
    tags: ["medium", "Ortho", "MoA", "PD"],
    explain:
      "This question requires understanding the process of fracture healing and what drugs may interfere with it. (A) is the correct answer because acetaminophen is not a NSAID or an antiinflammatory, hence it does not interfere with the healing process that is driven by inflammatory molecules such as prostaglandins. (B) is a NSAID that selectively inhibits COX2, hence it would interfere with the production of prostaglandins, thus limiting bone remodeling. (C) is a NSAID that selectively inhibits COX 1 and 2. (D) is a glucocorticoid, hence would interfere with the production of inflammatory molecules that help aid in the remodeling process including prostaglandin and other factors/cytokines. Glucocorticoids also inhibit bone formation, increase bone resorption, decrease in GI absorption of calcium via inhibition of vitamin D, and more.",
  },
  {
    id: 2,
    prompt:
      "Which of the following are potential obstacles in delivering drugs to a pediatric patient?",
    choices: [
      "Fear of needles",
      "Inability to take tablets",
      "Opioids are contraindicated in children <12 y/o",
      "A and B",
      "All of the above",
    ],
    correct: "A and B",
    tags: ["PK", "medium", "Ortho", "Pediatrics"],
    explain:
      "This question requires understanding some considerations in the pediatric population. (D) is the correct answer because young children could be afraid of needles, hence it is something to consider when using parenteral ROAs for certain medications. Likewise, some pediatric patients may not be able to swallow large tablets, hence it is something to consider when using the PO ROA for certain medications. (C) is false, opioids are not contraindicated and pain management is a very important aspect of care in children as they may not express pain in the ways we’d expect an adult to.",
  },
];
