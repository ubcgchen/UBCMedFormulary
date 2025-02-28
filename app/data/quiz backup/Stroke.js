export const stroke = [
  {
    id: 1,
    prompt:
      "A 63 y/o patient presents to the ER with left-sided: hemiplegia, hemianesthesia and hemineglect, and a right gaze deviation. Symptoms onset was approximately 3 hrs ago. After a quick assessment by the ER team, stroke neurologist, and neuroradiology, it is now 3.5 hrs after onset of symptoms. What is the mechanism of action of the first-line medical intervention that can be used in this case (assume no contraindications)?",
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
    explain: "This question requires understanding the mechanism of action of tPa. In this vignette, we are presented with a patient with a suspected right middle cerebral artery stroke (left-sided symptoms with no preference of legs>arms, with right sided eye involvement - look towards the lesion). (A) correctly describes the mechanism of action of tPa (tissue plasminogen activator), by converting endogenous plasminogen (-inogen usually indicates inactive form) to plasmin, plasmin can then break up cross-linked fibrin clots. The other choices describe MoA of antiplatelet and anticoagulant drugs: (B)= abciximab, (C)=apiXaban, (D)=daBIgatran, (E)=clopidogrel.",
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
    explain: "This question requires understanding the contraindications of tPA use. In this vignette, we are presented with a suspected left middle cerebral artery stroke (right sided involvement with no preference of leg>arm involvement, and eyes looking toward the lesion). We then need to decide whether our patient here has a contraindication for fibrinolytic intervention with tPa. From the vignette, we are presented some red flags that would make us think that his presentation is due to a hemorrhagic stroke. This includes the thunderclap headache description, increased intracranial pressure (fundoscopy), and meningeal irritation (nuchal rigidity). These suggest that an artery/aneurysm may have ruptured causing him to bleed into his intracranial space resulting in an increased intracranial pressure and blood causing irritation of his meninges leading to nuchal rigidity, Hence (B) is the correct answer. His (A) BP is not elevated enough to be a contraindication (>185 sys or >110 diasys), his recent trauma (C) would be a contraindication if it was within 14 days, and his MI (D) would be a contraindication if it was in the last 3 months.",
  },
  {
    id: 3,
    prompt:
      "A 63 y/o patient is in the stroke unit >24 hours after a right middle cerebral artery stroke. The clot was successfully removed with tPA and endovascular thrombectomy. A follow-up CT scan revealed damage to the brain parenchyma in the right lobe, but no hemorrhage. Which of the following medications should be given now?",
    choices: ["Acetaminophen", "Apixaban", "Aspirin", "Dabigatran", "Warfarin"],
    correct: "Aspirin",
    tags: ["PD", "medium", "Neurology"],
    explain: "This question requires understanding secondary prevention of ischemic stroke. In this vignette we are presented a patient post 24 hr of an ischemic stroke that was resolved pharmacologically and with interventional radiology. Follow up CT shows no hemorrhage.  In this case we can start our patient with (B) aspirin. It is recommended to start our patient on aspirin 24-48 hrs post stroke if there is no sign of hemorrhage. Aspirin is an antiplatelet and will prevent secondary arterial thrombosis formation, which our patient is potentially at risk for. We also don’t want our patient to suffer another stroke. We could also consider starting DVT prophylaxis to prevent a venous thrombosis, however in a hospital setting we would start with low molecular weight heparins (LMWH) due to their fast onset and reversal agent (protamine), hence (B) a DOAC  is not what we would give. (D) and (E) are both anticoagulants, but need to be bridged with a LMWH first. (A) is an analgesic and could be indicated, but would not be the best answer in this case.",
  },
  {
    id: 4,
    prompt:
      "A 67 y/o patient presents to the ER with a sudden right facial droop and right arm weakness. His BP is 135/85. However, his symptoms resolve after 40 mins. The ER team rules out migraine aura, focal seizure, and hypoglycemia as causes of his presentation. A MRI of his brain shows no infarction or acute bleeding. His past medical history includes hypertension and is negative for diabetes and atrial fibrillation. Which medication would he most likely need to prevent a secondary stroke?",
    choices: ["Acetaminophen", "Apixaban", "Aspirin", "Dabigatran", "Warfarin"],
    correct: "Aspirin",
    tags: ["PD", "medium", "MoA", "Neurology"],
    explain: "This question requires understanding pharmacological interventions to prevent stroke. In this vignette we are presented with a patient with a transient ischemic attack (TIA) given the transient focal neurological deficits seen and no acute infarct on MRI. All patients that have had a stroke or TIA should be started on secondary prevention such as an antiplatelet unless they have other comorbidities such as AFib, which our patient here doesn’t have. Therefore (C) is the medication we will start him on for secondary prevention of stroke. Aspirin is an antiplatelet (irreversible COX enzyme inhibitor therefore lowering TXA2, a prostaglandin that activates and promotes platelet activity) that will inhibit secondary arterial thrombosis driven by platelets. If you think about the pathophysiology, it is possible that he has some atherosclerosis in arteries going to his left side of his brain, which caused his TIA. If we don’t put him on an antiplatelet, a thrombus could form from the atherosclerotic plaque (which is usually a platelet driven process)  and cause a stroke. (A) is an analgesic and would not be helpful. (B), (D), (E) are all anticoagulants that we would use if our patient had AFib.",
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
    explain: "This question requires understanding the pathophysiology of VTEs and pharmacological management. VTEs tend to occur in areas of low velocity flow (Stasis in Virchow’s triad) such as the venous system or the heart atriums. These events tend to be clotting factor driven rather than platelet driven. In stasis and low velocity the clot formation tends to occur due to exposure to tissue factor leading to thrombin formation and the final fibrin clot. In arterial thrombosis or high velocity systems, the thrombus is driven by platelets adhering to damaged vessels wall by interacting with the exposed media layer (smooth muscle), which tends to be “sticky”. This activates platelets (platelets are responding to a “cut” that is actually just a damaged vessel wall) and leads to thrombin activation. In general, VTEs such as in AFib are mainly clotting factor driven, while in arterial thrombosis, it’s the platelets. Therefore, (B) is the correct answer. This is why in arterial thrombosis diseases like CAD, antiplatelets are more effective than anticoagulants.",
  },
  {
    id: 6,
    prompt:
      "A 60 y/o female patient with a AFib, T2DM, and HTN with no prior stroke/TIA is given medication to prevent stroke. Which of the following medications would she be most likely prescribed?",
    choices: ["Alteplase", "Apixaban", "Aspirin", "Dalteparin (LMWH)", "Warfarin"],
    correct: "Dabigatran",
    tags: ["PD", "medium", "MoA", "Neurology"],
    explain: "This question requires understanding the pharmacology behind secondary stroke prevention in patients with AFib. In this vignette we have a patient with AFib and some risk factors for stroke. In fact her CHADVaS score would be 3 (female, T2DM, HTN). If we use the CHADS-65 algorithm, we should start her on oral anticoagulation (OAC) (No for the first box for age >65, but yes in the second box for the CHAD risk factors). First line OACs would be DOACs, which in this case (B) is the correct answer, a Factor Xa inhibitor. (A) is a clot buster (fibrinolytic) for acute management of an ischemic stroke. (C) is an antiplatelet, not helpful in preventing clot formation in heart atriums. (D) is a LMWH, which is not an oral anticoagulant, expensive, and requires injections everyday. (E) is an OAC, but not first line given its many drug and diet interactions, and the need for constant monitoring.",
  },
  {
    id: 7,
    prompt:
      "A 56 y/o patient with coronary artery disease, AFib, and mitral valve regurgitation presents to cardiac surgery for a mechanical valve replacement to treat his valvular dysfunction. The surgery is successful with no complications. Due to his risk factors, he is given medication for stroke prevention. Which of the following medications would be the best option for this case?",
    choices: ["Apixaban", "Aspirin", "Dabigatran", "Rivaroxaban", "Warfarin"],
    correct: "Warfarin",
    tags: ["PD", "medium", "MoA", "Neurology"],
    explain: "This question requires understanding the pharmacology behind secondary stroke prevention in patients with AFib. In this vignette we are presented with a patient with AFib, who also has a mechanical heart valve. Given that we would start him on (E) warfarin for stroke prevention instead of the other DOACs (A), (C), (D). Given the AFib, we are more worried about a clotting factor driven clot forming in the heart atrium, thus antiplatelets (B) would not be as efficacious in secondary prevention.",
  },
  {
    id: 8,
    prompt:
      "A 73 y/o patient presents to the surgical daycare to repair a hernia. She however, did not stop one of her medications prior to surgery and the anaesthesiologist is worried that one of her listed medications will cause excessive blood loss during surgery. The general surgery team orders IV vitamin K to start reversal of the medication. What medication is the general surgery team trying to reverse?",
    choices: ["Alteplase", "Aspirin", "Dabigtran", "Rivaroxaban", "Warfarin"],
    correct: "Warfarin",
    tags: ["PD", "medium", "MoA", "Surgery", "Neurology", "side effects"],
    explain: "This question requires understanding warfarin reversal. In this vignette we have a patient that is at risk of excessive bleeding and the surgical team starts reversal with vitamin K. (E) should be the drug that you think of given that warfarin is a vitamin K epoxide reductase (VKORC1) inhibitor and inhibits the vitamin K dependent factors, thus giving more vitamin K would overcome the effects of warfarin. The complete reversal management or in more acute settings will also require: Fresh Frozen Plasma (FFP) or Prothrombin Complex Concentrate (PCC)."
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
    explain: "This question requires understanding the MoA of apixaban. (C) Correctly describes the mechanism of action of apixaban, an anticoagulant. ApiXaban (-xaban; rivaroXaban) is a good way to remember that it is a Factor X inhibitor. The other choices describe the mechanisms of tPa (A; clot-buster), abciximab (B; antiplatelet), dabigatran (D; anticoagulant) - a good way to remember this class is daBIgatran, where bi- represents II, clopidogrel (E; antiplatelet).",
  },
];
