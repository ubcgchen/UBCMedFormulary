export const stroke = [
  {
    id: 1,
    prompt:
      "A 63 y/o patient presents to the ER with left-sided: hemiplegia, hemianesthesia and hemineglect, and a right gaze deviation. Symptoms onset was approximately 3 hrs ago. After a quick assessment by the ER team, stroke neurologist, and neuroradiology, it is now 3.5 hrs after onset of symptoms. What is the mechanism of action of the first-line medical intervention that can be used in this case?",
    choices: [
      "Converts plasminogen to plasmin, thereby breaking down cross-linked fibrin",
      "Inhibits glycoprotein IIb/IIIa receptor binding to fibrinogen and von Willebrand factor, thereby preventing final step of platelet activation",
      "Inhibits Factor Xa, thereby preventing the conversion of prothrombin to thrombin in the common clotting cascade",
      "Inhibits thrombin (Factor IIa), thereby preventing the conversion of fibrinogen to fibrin in the common clotting cascade",
      "Irreversibly inhibits the binding of ADP to P2Y12 receptors on platelets, thereby preventing ADP-induced activation of platelets",
    ],
    correct:
      "Converts plasminogen to plasmin, thereby breaking down cross-linked fibrin",
    tags: ["PD", "medium", "MoA", "Neurology"],
  },
  {
    id: 2,
    prompt:
      "A 62 y/o patient with 40 pack years of smoking, HTN and a mechanical heart valve, presents to the ER with right sided: hemiplegia, hemianesthesia and hemineglect, and a left gaze deviation. His BP is 170/100 and no fever.  He describes hearing a pop and sudden severe headache. His fundoscopic exam shows papilledema bilaterally. He also has nuchal rigidity (neck stiffness). He previously presented to the ER 21 days ago following a motor vehicle accident that required abdominal surgery and 6 months ago for an acute myocardial infarction. Which of the following contraindications of tPA is portrayed in this case?",
    choices: [
      "Elevated blood pressure",
      "Subarachnoid hemorrhage",
      "Recent major surgery or serious trauma",
      "Recent myocardial infarction",
      "All of the above",
    ],
    correct: "Subarachnoid hemorrhage",
    tags: ["PD", "medium", "side effects", "Neurology"],
  },
  {
    id: 3,
    prompt:
      "A 63 y/o patient is in the stroke unit >24 hours after a right middle cerebral artery stroke. The clot was successfully removed with tPA and endovascular thrombectomy. A follow-up CT scan revealed damage to the brain parenchyma in the right lobe, but no hemorrhage. Which of the following medications should be given now?",
    choices: ["Acetaminophen", "Apixaban", "Aspirin", "Dabigatran", "Warfarin"],
    correct: "Aspirin",
    tags: ["PD", "medium", "Neurology"],
  },
  {
    id: 4,
    prompt:
      "A 67 y/o patient presents to the ER with a sudden right facial droop and right arm weakness. His BP is 135/85. However, his symptoms resolve after 40 mins. The ER team rules out migraine aura, focal seizure, and hypoglycemia as causes of his presentation. A MRI of his brain shows no infarction or acute bleeding. His past medical history includes hypertension and is negative for diabetes and atrial fibrillation. Which medication would he most likely need to prevent a secondary stroke?",
    choices: ["Acetaminophen", "Apixaban", "Aspirin", "Dabigatran", "Warfarin"],
    correct: "Aspirin",
    tags: ["PD", "medium", "MoA", "Neurology"],
  },
  {
    id: 5,
    prompt:
      "In general, why is antiplatelet therapy (aspirin or clopidogrel) not as effective as anticoagulant therapy (apixaban or dabigatran) in preventing secondary stroke in patients with atrial fibrillation?",
    choices: [
      "Anticoagulants inhibit clotting factors, which is the driving force behind clot formation in high velocity flow states",
      "Anticoagulants inhibit clotting factors, which is the driving force behind clot formation in low velocity flow states",
      "Anticoagulants inhibits both clotting factors and platelets, which is the driving force behind clot and plaque formation in both high and low velocity flow states",
      "Antiplatelets work as well as anticoagulants in preventing stroke in patients with atrial fibrillation",
    ],
    correct:
      "Anticoagulants inhibit clotting factors, which is the driving force behind clot formation in low velocity flow states",
    tags: ["PD", "medium", "MoA", "Hematology", "Neurology"],
  },
  {
    id: 6,
    prompt:
      "A 60 y/o female patient with a AFib, T2DM, and HTN with no prior stroke/TIA is given medication to prevent stroke. Which of the following medications would she be most likely prescribed?",
    choices: ["Alteplase", "Aspirin", "Dabigatran", "Heparin", "Warfarin"],
    correct: "Dabigatran",
    tags: ["PD", "medium", "MoA", "Neurology"],
  },
  {
    id: 7,
    prompt:
      "A 56 y/o patient with coronary artery disease, AFib, and mitral valve regurgitation presents to cardiac surgery for a mechanical valve replacement to treat his valvular dysfunction. The surgery is successful with no complications. Due to his risk factors, he is given medication for stroke prevention. Which of the following medications would be the best option for this case?",
    choices: ["Apixaban", "Aspirin", "Dabigatran", "Rivaroxaban", "Warfarin"],
    correct: "Warfarin",
    tags: ["PD", "medium", "MoA", "Neurology"],
  },
  {
    id: 8,
    prompt:
      "A 73 y/o patient presents to the ER with signs of an ischemic bowel. She is admitted and booked an OR is booked, but the anaesthesiologist is worried that one of her listed medications will cause excessive blood loss during surgery. The general surgery team orders IV vitamin K to reverse the medication. What medication is the general surgery team trying to reverse?",
    choices: ["Alteplase", "Aspirin", "Dabigtran", "Rivaroxaban", "Warfarin"],
    correct: "Warfarin",
    tags: ["PD", "medium", "MoA", "Surgery", "Neurology", "side effects"],
  },
  {
    id: 9,
    prompt: "What is the mechanism of action of apixaban?",
    choices: [
      "Converts plasminogen to plasmin, thereby breaking down cross-linked fibrin",
      "Inhibits glycoprotein IIb/IIIa receptor binding to fibrinogen and von Willebrand factor, thereby preventing final step of platelet activation",
      "Inhibits Factor Xa, thereby preventing the conversion of prothrombin to thrombin in the common clotting cascade",
      "Inhibits thrombin (Factor IIa), thereby preventing the conversion of fibrinogen to fibrin in the common clotting cascade",
      "Irreversibly inhibits the binding of ADP to P2Y12 receptors on platelets, thereby preventing ADP-induced activation of platelets",
    ],
    correct:
      "Inhibits Factor Xa, thereby preventing the conversion of prothrombin to thrombin in the common clotting cascade",
    tags: ["PD", "medium", "MoA", "Hematology", "Neurology"],
  },
];
