/**
 * Questions for Joint Injury
 * @author Michael Gong, UBC VFMP 2025
 */

export const Joint_Injury = [
  {
    id: 1,
    prompt:
      "A 34 y/o patient presents to the pain clinic with poorly controlled pain in her arms bilaterally. The pain started a few years ago, is described as shooting and burning, radiating down from her shoulders to her wrists, and happens intermittently throughout the day. Given this description, which of the following analgesics would you prescribe?",
    choices: [
      "Acetaminophen PO",
      "Codeine PO",
      "Gabapentin PO",
      "Ibuprofen PO",
      "Lidocaine IV",
    ],
    correct: "Gabapentin PO",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding treating neuropathic pain. In this vignette we are presented with a patient with chronic pain that is most likely neuropathic. We believe this is neuropathic pain given the paresthesia that radiates down from her shoulders to her wrist. Given this we should prescribe her (C) gabapentin PO. Gabapentin is a gabapentinoid that is used in neuropathic pain. Despite its name, it does not actually bind GABA receptors, but instead blocks calcium channels, thereby inhibiting neurotransmitter release from axon terminals. Through this mechanism it is thought it can decrease pain sensation. Neuropathic pain is pain that originated from the nervous system due to damage or abnormalities, not due to a stimulus like nociceptive pain where nociceptors are activated. (A) and (D) are not as effective in neuropathic pain and are not commonly used for this indication. (B) is an opioid and is not a first line option for neuropathic pain. (E) is a local anesthetic and is not a first line option for this indication. Other first line medications for neuropathic pain include TCAs and SNRIs."
  },
  {
    id: 2,
    prompt:
      "A 23 y/o patient recalls falling on his outstretched right hand and felt a pop in his right shoulder. He presented to the ER where an X-ray showed the right AC joint within normal limits and no dislocation, and was subsequently discharged with orders to follow up with GP. At the GP’s office, there is pain when the right shoulder is abducted between 60 and 120 degrees. Neer’s and Hawkin’s tests are both positive for pain. Which of the following medications have the potential to slow down healing of an acute tendon injury?",
    choices: [
      "Diclofenac",
      "Ibuprofen",
      "Ketorolac",
      "Naproxen",
      "All of the above",
    ],
    correct:
      "All of the above",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding tendon healing and NSAIDs. In this vignette we are presented with a patient with a possible rotator cuff injury. We suspect this given the history of a FOOSH, pop sensation in the shoulder, and a positive painful arc, Neer’s and Hawkin’s, which are all special tests for shoulder impingement. In an acute rotator cuff injury, these signs can be positive as there will be inflammation. The inflammation will further reduce the subacromial space, therefore pain will be elicited with these moves since it forces the irritated supraspinatus tendon into an even smaller space. Hence, a rotator cuff tear/injury is the most likely diagnosis. Given that, we know that the tendon is probably damaged, so any medication that reduces inflammation will reduce swelling (and thus pain as well), but also slow down healing, as the inflammatory markers help increase blood flow to the area that brings resources to help heal the injury. Therefore, (E) is the correct answer, all of the choices listed are NSAIDs, which wil reduce the production of prostaglandins. Prostaglandins are inflammatory mediators that would help in the healing process by recruiting immune cells to clean up damaged cells, and increase blood flow to help healing."
  },
];
