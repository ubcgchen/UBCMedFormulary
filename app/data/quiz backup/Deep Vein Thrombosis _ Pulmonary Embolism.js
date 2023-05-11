/**
 * Questions for Deep Vein Thrombosis / Pulmonary Embolism week
 * @author Michael Gong, UBC VFMP 2025
 */

export const deepVeinThrombosis_pulmonaryEmbolism = [
  {
    id: 1,
    prompt:
      "A 63 y/o male patient presents to the ER with 2 day worsening dyspnea and pleuritic chest pain. His vitals are HR 120, BP 80/50, RR 27, O2 88% RA, Temp 37.7degC. On a physical exam, he has unilateral left leg swelling, redness, and tenderness on palpation. An ECG shows S1Q3T3 (a sign of right heart strain). His CXR is normal. While waiting for a CT scanner, an ECHO is done and shows right ventricle dilation. The patient finally gets a spiral CT and shows a large emboli in the right pulmonary artery. The patient has no history of intracranial hemorrhage, neurosurgery, ischemic stroke, malignancies, or any known active bleeds. Which of the following would be the best course of management in this case?",
    choices: [
      "Tissue plasminogen activator",
      "Factor Xa inhibitor",
      "Thrombin inhibitor",
      "Antithrombin potentiator",
      "Vitamin K epoxide reductase inhibitor",
    ],
    correct: "Tissue plasminogen activator",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding hemodynamically unstable PE and the management for it. In this vignette we are presented with a patient with a DVT and PE. We know our patient has a hemodynamically unstable PE given the BP (sys <90) and RV involvement (ECG and ECHO). Given the severity of the patient’s presentation and no contraindications (some are listed in the vignette), we should go for thrombolytic therapy. In this case (A) is the only thrombolytic therapy - e.g. alteplase (-plase). (B) and (C) are DOACS (-xaban, dabigatran), (D) is heparin. (E) is warfarin, which are all anticoagulants. Anticoagulants will not break down a pre-existing clot! They can only prevent new clots from forming.",
  },
  {
    id: 2,
    prompt:
      "A 56 y/o patient in the medicine ward is rushed into surgery for an emergency procedure. During the surgery there is excessive blood loss. It is found that his antithrombin activity is higher than normal and there is inhibition of Factor Xa and thrombin. Assuming an iatrogenic etiology, which of the following medications could have been mistitrated?",
    choices: ["Apixaban", "Dabigatran", "Heparin", "Protamine", "Warfarin"],
    correct: "Heparin",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the mechanism of action of different anticoagulants. In this vignette, we have a patient with increased antithrombin activity with inhibition of Factor Xa and thrombin (FII). No other factors are inhibited. (A) should only inhibit Factor X. (B) should only inhibit thrombin. (E) inhibits both of the factors, but also VII and IX., but does not increase antithrombin activity. (C) is the correct answer because heparin (unfractionated) will potentiate antithrombin, leading to inhibition of both Factor Xa and thrombin. LMWH should have more selectivity for Factor Xa>thrombin inhibition due to the size of the molecule, while fondaparinux or ULMWHs should only have Factor Xa inhibition. (D) is a heparin antidote, is a positively charged peptide that undergoes  ionic binding to heparin (negatively charged) to inhibit it.",
  },
  {
    id: 3,
    prompt:
      "A 66 y/o patient presents to the ER with pneumonia. She has HTN, Afib, and a mechanical heart valve. She is currently on losartan and warfarin. She is started on empiric antibiotics and is discharged shortly. She recovers, but a week later presents to the ER with unexplained hematomas on her thighs. Labs show normal CBC, but an elevated INR (6.9; normal = 1.0-1.4) and a PTT= 35s (normal = 25-35s). Which important drug interaction(s) could explain this presentation?",
    choices: [
      "Antibiotics mediated destruction of intestinal flora leading to decreased vitamin K synthesis",
      "Antibiotics mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of warfarin",
      "Antibiotics mediated direct inhibition of Factor XII, thus potentiating the effect of warfarin",
      "Warfarin mediated inhibition of CYP450 enzymes leading to supratherapeutic levels of antibiotics causing platelet dysfunction",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding interactions that affect warfarin. In this vignette, we are presented with a patient that underwent a course of antibiotics. She comes back with clotting-factor type bleeding (hematomas). We also have an elevated INR. This suggests an increase in warfarin. Elevated INR and normal PTT can be explained by the fact that warfarin decreases Factor XII, which is part of the extrinsic pathway (INR/PT) and has a shorter half life than the other factors. This leads to a larger effect on the INR than on the PTT. We can rule out (D) given the normal CBC and the presentation doesn’t suggest platelet-like bleed. (C) would be very unlikely. We are left with (A) and (B). We know that warfarin affects the vitamin K dependent factors, therefore if there is a decrease in vitamin K from gut flora, then there will be even more inhibition of these clotting factors. We also know that warfarin is metabolized by the CYP450 enzymes and many antibiotics can act as CYP450 inhibitors, thus leading to increased warfarin. Therefore, both (A) and (B) are viable mechanisms that could explain the presentation, hence (E) is correct.",
  },
  {
    id: 4,
    prompt:
      "Which of the following clotting factors would be affected by a vitamin K epoxide reductase complex 1 (VKORC1) inhibitor?",
    choices: [
      "1, 2, 7, 9",
      "1, 2, 7, 10",
      "2, 5, 9, 10",
      "2, 5, 7, 10",
      "2, 7, 9, 10",
    ],
    correct: "2, 7, 9, 10",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the vitamin K dependent clotting factors. Warfarin is a vitamin K epoxide reductase complex 1 (VKORC1) inhibitor, which is why it acts as an anticoagulant because it will inhibit the factors that are dependent on vitamin K for proper functioning. Inhibiting the enzyme will inhibit the reactivation of vitamin K. (E) correctly lists the factors that are vitamin K dependent and would be affected by warfarin use (remember 1972 - 10, 9, 7, 2). Some proteins related to anti-clotting are also vitamin K dependent and inhibited by warfarin: protein S and protein C.",
  },
  {
    id: 5,
    prompt:
      "In general, why is aspirin not as effective as apixaban in preventing venous thromboembolic events?",
    choices: [
      "Apixaban inhibit platelets, which is the driving force behind clot formation in high velocity flow states",
      "Apixaban inhibit clotting factors, which is the driving force behind clot formation in low velocity flow states",
      "Apixaban inhibits both clotting factors and platelets, which is the driving force behind clot and plaque formation in both high and low velocity flow states",
      "Antiplatelets cause more bleeding than anticoagulants",
      "Antiplatelets work as well as anticoagulants in preventing VTE in patients ",
    ],
    correct:
      "Apixaban inhibit clotting factors, which is the driving force behind clot formation in low velocity flow states",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the pathophysiology of VTEs and pharmacological management. VTEs tend to occur in areas of low velocity flow (Stasis in Virchow’s triad) such as the venous system or the heart atriums. These events tend to be clotting factor driven rather than platelet driven. In stasis and low velocity the clot formation tends to occur due to exposure to tissue factor leading to thrombin formation and the final fibrin clot. In arterial thrombosis or high velocity systems, the thrombus is driven by platelets adhering to damaged vessels wall by interacting with the exposed media layer (smooth muscle), which tends to be “sticky”. This activates platelets (platelets are responding to a “cut” that is actually just a damaged vessel wall) and leads to thrombin activation. In general, VTE is mainly clotting factor driven, while in arterial thrombosis, it’s the platelets. Therefore, (B) is the correct answer. This is why in arterial thrombosis diseases like CAD, antiplatelets are more effective than anticoagulants.",
  },
  {
    id: 6,
    prompt:
      "A 59 y/o male patient presents to the ER with a 1 day history of pleuritic chest pain and dyspnea. He got off a 17 hr long flight from Bangkok yesterday. He tells you about how he should have used his air miles to upgrade to business class. His vitals are as shown: BP 130/80, HR 110, O2 sat 97% RA, Temp 37.4 degC. His past medical history includes HTN managed with ramipril and dyslipidemia managed with rosuvastatin. He doesn’t complain of leg tenderness or swelling. A CXR comes back normal and ECG shows sinus tachycardia. A D-Dimer comes back high. A spiral CT comes back positive for small emboli in his left lung. What would you treat this patient with?",
    choices: ["Alteplase", "Aspirin", "Rivaroxaban", "Protamine", "Warfarin"],
    correct: "Rivaroxaban",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the pharmacological management of a PE. In this vignette, we are presented with a patient that has a  history of immobility, a positive D-dimer, leading to spiral CT confirmed PE. The treatment option in this case would be (C). A DOAC would be used to prevent further clot formation and to allow the body’s endogenous fibrinolysis to break down the small emboli. He is hemodynamically stable (no decrease in CO or right heart involvement, or shocky presentation), hence (A) would not be used. (B) is an antiplatelet and would not address the pathophysiology of VTEs like DOACs. (D) is an anti-heparin. (E) warfarin is too slow acting for an acute PE, and would require a heparin bridge first.",
  },
  {
    id: 7,
    prompt:
      "Which of the following is FALSE about bridging warfarin with heparin/LMWH?",
    choices: [
      "Initial inhibition of Protein C and Protein S by warfarin leading to procoagulant state",
      "Heparin can be reversed with protamine",
      "Rise in INR only occurs after 5 days of warfarin",
      "Slow onset of action of warfarin (5-7 days)",
    ],
    correct: "Rise in INR only occurs after 5 days of warfarin",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding heparin bridges and warfarin. (A) is true, Protein C and Protein S are vitamin K dependent anticoagulant proteins and are inhibited by warfarin. Protein C has a short half life (~7 hrs), hence would be depleted quickly leading to a procoagulant state. (B) is true, protamine is a positively charged peptide that binds to heparin and LMWH to a certain extent to inhibit it. (D) is true, it takes 5-7 days for warfarin to have a therapeutic effect. This is because all clotting factors need to be inhibited for warfarin to be effective, Factor II has a half life ~60 hrs, thus will take a long time to be depleted, thereby prolonging the onset of action. (C) is FALSE and the correct answer because INR will increase once any of the clotting factors are inhibited. Factor VII has a short half life of ~ 6 hrs, and will be depleted quickly. Since PT/INR is used to assess the extrinsic pathway (FVII), then the INR will increase before 5 days, but not to the desired therapeutic level (INR 2.0-3.0).",
  },
  {
    id: 8,
    prompt:
      "A 55 y/o female patient presents to the GP with unilateral right leg swelling, pain, and redness. She denies any history of trauma or immobilization. Her past medical history is negative for malignancies. She was recently diagnosed with HTN managed with hydrochlorothiazide and spironolactone, T2DM managed with metformin, RA managed with ibuprofen, and osteoporosis managed with raloxifene. A POCUS is done on her leg and her right popliteal vein shows decreased compressibility. Which of her following medications is a likely iatrogenic cause to this presentation?",
    choices: [
      "Hydrochlorothiazide",
      "Ibuprofen",
      "Metformin",
      "Raloxifene",
      "Spironolactone",
    ],
    correct: "Raloxifene",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding iatrogenic causes of VTE. In this vignette, we are presented with a patient with a suspected DVT confirmed by U/S, which shows a clot in the right popliteal vein. (A) is a diuretic and is not implicated in increased VTE. (B) is a NSAID, and would probably lead to more bleeding, not clotting. (C) is not associated with VTEs. (E) is a K+ sparing diuretic by inhibiting mineralocorticoid receptors and is not associated with VTEs.  (D) is the correct answer because it is a SERM. This gives it estrogenic effects, and estrogen is a known driver of VTEs. This is why OCPs containing ethinyl estradiol are also known to increase the risk of VTEs.",
  },
  {
    id: 9,
    prompt:
      "A 56 y/o patient presents to the ER and is diagnosed with a hemodynamically stable pulmonary embolism. His past medical history includes a gastrectomy 5 yrs ago after recurrent Zollinger Ellison Syndrome. Kidney function is normal. He has no history of epilepsy and no active fungal infections. Which of the following pharmacological interventions would you recommend?",
    choices: [
      "Alteplase",
      "Clopidogrel",
      "Dabigatran",
      "Rivaroxaban",
      "Warfarin with LMWH bridge",
    ],
    correct: "Warfarin with LMWH bridge",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the contraindications for DOACs. In this vignette we are presented with a patient with a PE. From his history we know he has a gastrectomy, therefore any drug that is primarily absorbed in the stomach and the proximal end of the small bowel could have diminished absorption leading to subtherapeutic levels. DOACs are primarily absorbed in the stomach and proximal end of the duodenum, therefore (C) and (D) would not be good options due to potential of impaired absorption leading to decreased efficacy. (A) is not indicated since this is a hemodynamically stable case. (B) is an antiplatelet and is not used for VTEs. (E) is the best choice. Even though warfarin also relies on some gastric absorption, we can monitor the effectiveness of warfarin by checking the PT/INR. This will allow us to titrate the dose to therapeutic levels. We can not do the same with DOACs since we don’t have standardized lab tests that can monitor their effectiveness, so we’d be giving the dose and hoping for the best. Note: DOACs like rivaroxaban are contraindicated with some antifungals and antiepileptics.",
  },
  {
    id: 10,
    prompt:
      "A 65 y/o patient presents to the ER and is diagnosed with a pulmonary embolism. Which of the following medications will be able to reduce the size of his current clot?",
    choices: ["Alteplase", "Aspirin", "Apixaban", "Dabigatran", "LMWH"],
    correct: "Alteplase",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      " This question requires understanding the difference between a fibrinolytic and an anticoagulant. The only drug that will decrease the size of the clot would be a clot buster/fibrinolytic, therefore (A) is the correct answer. (A) is a tissue plasminogen activator, which will activate plasminogen into plasmin leading to degradation of fibrin in the clot. (B) is an antiplatelet, which would prevent more platelet driven clots. (C), (D), (E) are all anticoagulants, thus will prevent FURTHER clots, without decreasing or busting the current clot.",
  },
  {
    id: 11,
    prompt:
      "Below are patients with mechanical heart valves or antiphospholipid syndrome who have had a recent PE undergoing a LMWH bridge before being discharged with warfarin alone. You are given how many days of LMWH SC and their latest INR lab result. Which of the following would you be comfortable with stopping LMWH and transitioning to only warfarin PO?",
    choices: [
      "Benton on day 5 LMWH, INR = 1.8",
      "Carol on day 7 LMWH, INR = 1.8",
      "Carter on day 3 LMWH, INR = 2.7",
      "Doug on day 10 LMWH, INR = 1.9",
      "Greene on day 6 LMWH, INR = 2.5",
    ],
    correct: "Greene on day 6 LMWH, INR = 2.5",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding heparin bridging for warfarin administration. The guidelines for bridging suggest to have LMWH and warfarin overlap for at least 5 days, and reach the desired INR level, which is usually between 2.0-3.0. (A) has 5 days of overlap, but an INR <2.0, therefore no. (B) has 7 days of overlap, but still an INR <2.0, still a no. (C) has an INR between 2.0-3.0, but has only 3 days of overlap, therefore no. Remember that all VitK factors need to be inhibited by warfarin, and having just one factor like VII can increase the INR, but does not suggest that warfarin is working at its true efficacy. (D) has been on LMWH for a while, but INR is still <2.0, hence no. (E) is the only person we’d be comfortable sending home on warfarin PO alone, given that he has had 5 days of overlap and an INR between 2.0 and 3.0.",
  },
  {
    id: 12,
    prompt:
      "Charles, a 28 y/o male, is admitted to the surgery ward after agreeing to donate part of his liver to his best friend. On admission his CBC was normal (PLT: 400e9/L). He is started on prophylactic dalteparin and morphine for pain. On day 6, Charles notes pain in his right leg and the nurse notes his leg is severely swollen and the presence of an erythematous skin lesion. A new CBC shows isolated thrombocytopenia (PLT: 80e9/L). An ultrasound of his right leg confirms a large thrombus. Being an astute medical student, you think the presentation was caused by?",
    choices: [
      "Inadequate anticoagulation with dalteparin alone",
      "Heparin induced thrombocytopenia due to dalteparin",
      "Morphine increases coagulation risk ",
      "Morphine induced auto-immune reaction leading to disseminated intravascular coagulation",
    ],
    correct: "Heparin induced thrombocytopenia due to dalteparin",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding a serious adverse effect of heparins. In this vignette we are presented with Charles, a very generous and compassionate friend who now has a painful right leg with skin lesions and thrombocytopenia after 6 days of LMWH. We should immediately be suspicious of heparin induced thrombocytopenia (HIT). The diagnosis criteria for HIT is based on Thrombocytopenia: where a drop of >50% is 2 pts (in this case yes), Timing: platelet drop is between 5-10 days of heparin exposure is 2 pts (also yes), Thrombosis: after exposure and not recurrent is 2 pts (yes), oTher: no other causes for thrombocytopenia is 2 pts (also Yes). Therefore, we are highly suspicious that (B) is the reason for the presentation. The pathophysiology behind this is that heparin binds platelet factor 4 (PF4), forming an antigenic molecule that the body reacts to and creates IgG against. This creates an immune complex that leads to Fc mediated platelet activation and thus clot formation and drop in platelet levels as they get activated. (A) is not as high on our differential because that wouldn’t explain the thrombocytopenia. HIT is more common with unfractionated heparin than LMWH. HIT is not associated with fondaparinux.",
  },
  {
    id: 13,
    prompt:
      "A 32 y/o G2T1P0 patient (GA 32 wks)  presents to the ER with sudden dyspnea. Her vitals: BP 85/55, HR 130, RR 29, Temp afebrile, O2 sat 88% RA. On a physical exam bilateral crackles at the lung bases and fetal distress. Further workup shows amniotic fluid embolism. The attending is worried about DIC and starts treatment with which of the following blood thinners?",
    choices: [
      "Apixaban",
      "Clopidogrel",
      "Dabigatran",
      "Dalteparin",
      "Warfarin",
    ],
    correct: "Dalteparin",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the anticoagulation management in pregnant patients. In pregnant patients, we avoid using drugs with known teratogenic risks or that could harm the fetus in any way. DOACs are potentially teratogenic and are avoided, this rules out (A) and (C). (B) is an antiplatelet and not helpful in this case. (E) is a teratogen. (D) is the only option we would use in a pregnant patient. Heparin and LMWH do not cross the placenta, and thus are thought to be safe for the fetus.",
  },
  {
    id: 14,
    prompt:
      "A 65 y/o patient presents to the ER with unilateral right leg swelling. His vitals: HR 100, BP 120/80, RR 20, Temp afebrile, O2 sat 98% RA. His right leg is tender on palpation. His history is significant for colon cancer currently treated with irinotecan + 5-FU neoadjuvantly prior to tumor resection. An ultrasound of his leg shows failure to compress the right femoral vein. Renal function is normal, he takes no other medications. Which of the following medications is currently regarded safe and effective to give in this patient?",
    choices: [
      "Alteplase",
      "Dabigatran",
      "Enoxaparin",
      "Rivaroxaban",
      "Warfarin",
    ],
    correct: "Enoxaparin",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain:
      "This question requires understanding the contraindication of DOACs. In this vignette we are presented with a patient with a DVT given the presentation and U/S. He also has an unresected GI tumor. In this case, there is no indication to use (A), a clot buster, and that could increase a risk of GI bleed given his unresected GI cancer. We usually reserve (A) for patients that have very low risk of bleeding, very severe symptoms due to an iliofemoral vein thrombosis. (E) is not as effective as DOACs and LMWH in preventing further VTE, therefore no. (B) and (D) are DOACs and are shown to decrease further VTE as well as LMWH, if not better, however increase the bleeding risk. In this case our patient is at higher risk of bleed given his unresected GI tumor. Therefore, according to the current Canadian guidelines (as of 2022), LMWH (C) is the preferred treatment strategy for patients with a VTE and an unresected GI/GU cancer.",
  },
  {
    id: 15,
    prompt:
      "A 63 y/o female patient presents to the ER with sharp chest pain that radiates down her left arm. An ECG is done and shows ST elevation. Further workup confirms a STEMI and she is rushed to the angio suite where the interventional cardiologist inserts a drug-eluting stent in her left anterior descending artery. Following the procedure she should be started on which of the following pharmacological interventions?",
    choices: [
      "Apixaban alone for at least 3 mos",
      "Aspirin + Ticagrelor for at least 3 mos",
      "Apixaban + Ticagrelor for at least 3 mos",
      "Ticagrelor alone for for at least 3 mos",
      "Drug-eluting stents do not require further pharmacological intervention",
    ],
    correct: "Aspirin + Ticagrelor for at least 3 mos",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the indications of DAPT (dual antiplatelet therapy) following coronary catheterization. In this vignette we would want to start on dual antiplatelet therapy to inhibit at least 2 different pathways that lead to platelet activation. (E) is wrong because stents can be pro-thrombotic and the drugs eluted are chemotherapeutics to inhibit smooth muscle proliferation/remodeling at the sight of the stent and thus do not inhibit platelet activation. Given that this is an arterial thrombosis event, then we want to inhibit platelets since it’s a platelet driven process, hence (A) and (C) are wrong because apixaban is an anticoagulant for VTEs. We are left with (B) and (D). (B) is correct because we want to inhibit 2 different pathways of platelet activation to minimize the recurrence of a thrombotic event. Aspirin is an irreversible nonselective COX1/2 inhibitor, which will decrease TXA2 mediated activation and aggregation of platelets. While ticagrelor is a reversible P2Y12 ADP receptor antagonist, therefore inhibiting the ADP mediated platelet cavitation and subsequent aggregation pathway.",
  },
  {
    id: 16,
    prompt:
      "Which of the following correctly matches the drug to itself mechanism of action?",
    choices: [
      "Abciximab - P2Y12 ADP receptor inhibitor",
      "Aspirin - Non-selective irreversible COX1/2 inhibitor",
      "Clopidogrel - Glycoprotein (GP) IIb/IIIa inhibitor",
      "Dabigatran- Thrombin receptor inhibitor",
      "Vorapaxar- Factor Xa inhibitor",
    ],
    correct: "Aspirin - Non-selective irreversible COX1/2 inhibitor",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires knowing the mechanism of actions of different antiplatelets/anticoagulants. The correct combination is: (A) Abciximab = GPIIb/IIIa inhibitor. (B) Aspirin = non selective irreversible COX1/2 inhibitor (leading to decreased TXA2). (C) ClopidoGREL (ticaGRELor) = P2Y12 ADP receptor inhibitor. (D) Dabigatran = direct thrombin inhibitor. (E) Vorapaxar = thrombin receptor inhibitor.",
  },
  {
    id: 17,
    prompt:
      "A 65 y/o patient is rushed to the ER after being hit by a car. A FAST assessment shows bleeding in Morison’s pouch (space b/w right kidney and liver) and it is determined that surgery is required. The patient’s wife mentions that he is on a “blood thinner” and took it about 6 hrs ago. Which of the following would the surgical team be least worried about in terms of bleeding?",
    choices: ["Aspirin", "Clopidogrel", "Ticagrelor", "Rivaroxaban"],
    correct: "Ticagrelor",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the pharmacokinetics of antiplatelets and anticoagulants in terms of reversibility or duration of action. In this vignette we are presented with an emergent trauma surgery case in a patient who is on a blood thinner. In this case (C) would be the medication we’d be the least worried about because it has a fast onset/offset of action (not a pro-drug) and reversibly inhibits platelets. (A), (B) both are irreversible inhibitors. Clopidogrel (pro-drug) has a longer onset/offset of action than ticagrelor. (D) is a factor Xa inhibitor and we don’t have reversal agents for them.",
  },
  {
    id: 18,
    prompt:
      "A 73 y/o patient presents to the surgical daycare to repair a hernia. She however, did not stop one of her medications prior to surgery and the anaesthesiologist is worried that one of her listed medications will cause excessive blood loss during surgery. The general surgery team orders IV vitamin K to start reversal of the medication. What medication is the general surgery team trying to reverse?",
    choices: ["Alteplase", "Dabigtran", "Heparin", "Rivaroxaban", "Warfarin"],
    correct: "Warfarin",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding warfarin reversal. In this vignette we have a patient that is at risk of excessive bleeding and the surgical team starts reversal with vitamin K. (E) should be the drug that you think of given that warfarin is a vitamin K epoxide reductase (VKORC1) inhibitor and inhibits the vitamin K dependent factors, thus giving more vitamin K would overcome the effects of warfarin. The complete reversal management or in more acute settings will also require: Fresh Frozen Plasma (FFP) or Prothrombin Complex Concentrate (PCC).",
  },
  {
    id: 19,
    prompt:
      "Which of the following medications can be reversed with protamine?",
    choices: [
      "Unfractionated heparin",
      "Enoxaparin",
      "Fondaparinux",
      "A and B",
      "All of the above",
    ],
    correct: "A and B",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding protamine. Protamine is a positively charged peptide that binds the negatively charged unfractionated heparin and LMWH e.g. enoxaparin. This allows for reversal of the anticoagulant effects of heparin. It does not reverse ultra low MWH like fondaparinux. Therefore (D) is the correct answer.",
  },
  {
    id: 20,
    prompt:
      "A 63 y/o patient with a chronic kidney disease with a recent eGFR = 15 mL/min is being treated for coronary artery disease and VTE. Which of the following drugs would you use with increased  caution in this patient?",
    choices: ["Aspirin", "DOACs", "LMWH", "Warfarin", "All except D"],
    correct: "All except D",
    tags: ["PK", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the pharmacokinetic and adverse effects of different medications in a renally impaired patient. In this case we’d be worried about drugs that can increase the risk of kidney injury or drugs that undergo renal elimination. (A) is a NSAID and has the potential to cause an AKI by inhibiting prostaglandin vasodilation of the afferent arteriole, which will reduce the effective circulatory volume to the kidney, which could lead to a prerenal injury especially if the patient is also hypovolemic. (B) is renally eliminated, hence we’d have to lower the dose in patients with CrCl (eGFR) <30 mL/min. (C) is also renally eliminated and would need to be used with caution in patients with renal impairment. (D) is NOT renally eliminated. Warfarin undergoes hepatic metabolism into inactive metabolites before being renally excreted, therefore it is thought to have the less adverse effects in renally impaired patients than the other medications. Therefore (E) is the correct answer.",
  },
  {
    id: 21,
    prompt:
      "A 32 y/o patient is rushed to VGH  following a pile up on the Lions Gate Bridge. A FAST assessment shows profuse internal bleeding and a ruptured spleen. O-negative blood is transfused, while they wait for the cross-matched blood. The trauma surgeon also orders TXA to decrease blood loss because:",
    choices: [
      "TXA is a platelet activator and promotes platelet aggregation",
      "TXA is an antifibrinolytic by inhibiting plasminogen",
      "TXA is a volume expander",
      "Uhm actually, TXA is contraindicated in this case",
      "What the heck is TXA",
    ],
    correct: "TXA is an antifibrinolytic by inhibiting plasminogen",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the MoA of TXA. In this vignette we are presented with an emergent surgical case that requires medication to limit bleeding. (B) is the correct answer because TXA or tranexamic acid is an antifibrinolytic by acting as an analog to lysine. This allows it to bind to lysine binding regions on plasminogen, thereby preventing its activation into plasmin. This leads to inhibition of the endogenous fibrinolysis pathway. TXA is NOT the same as TXA2 (thromboxane A2), which helps activate and promote platelet aggregation.",
  },
  {
    id: 22,
    prompt:
      "Which of the following prescriptions is wrong regarding outpatient VTE treatment?",
    choices: [
      "Apixaban 10 mg BID for 7 dys, followed by 5 mg BID",
      "LMWH SC into Dabigatran 150 mg BID",
      "Edoxaban 60 mg QD",
      "Rivaroxaban 15 mg BID for 21 dys, followed by 20 mg QD",
      "None of the above",
    ],
    correct: "Edoxaban 60 mg QD",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires knowing the doses of outpatient VTE treatment. The wrong prescription is (C). Edoxaban currently requires a heparin bridge with either heparin IV or LMWH SC. Currently apixaban and rivaroxaban don’t require the bridge.",
  },
  {
    id: 23,
    prompt:
      "A patient presents with idiopathic pulmonary arterial hypertension, which of the following choices correctly describes the medication and its mechanism of action that can be used to treat their condition?",
    choices: [
      "Bosentan - Potentiates vasodilatory effects of nitric oxide (NO), by inhibiting phosphodiesterase 5 (PDE5), leading to decreased cGMP breakdown",
      "Epoprostenol - PGI2 analogue leading to vasodilation",
      "Tadalafil - Inhibits endothelin mediated vasoconstriction by blocking both endothelin receptors",
      "All of the above",
      "Underlying cause of pulmonary hypertension must be treated first",
    ],
    correct: "Epoprostenol - PGI2 analogue leading to vasodilation",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain:
      "This question requires understanding the mechanism of actions of different drugs used to treat pulmonary hypertension. Pulmonary arterial hypertension (WHO group 1) and PH due to pulmonary artery obstruction (WHO group 4) are indications for neurohormonal pharmacological intervention. The three pathways we currently can target are inhibit endothelin mediated vasoconstriction, potentiate nitric oxide mediated vasodilation, or direct vasodilation via prostacyclin. The choice that correctly matches the drug to its mechanism is (B). If a drug has “prost” in its name, chances are it’s related to a prostaglandin. (A) and (C) should be swapped. “-entan” tends to describe endothelin antagonists. Drugs with “-afil” are PDE5 inhibitors, a famous drug in this class is sildenafil also known as Viagra.",
  },
];
