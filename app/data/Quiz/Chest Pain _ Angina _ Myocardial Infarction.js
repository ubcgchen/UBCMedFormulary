/**
 * Questions for Chest Pain / Angina / Myocardial Infarction
 * @author Michael Gong, UBC VFMP 2025
 */

export const chestPain_angina_myocardialInfarction = [
  {
    id: 1,
    prompt:
      "A 63 y/o male with HTN and T2DM presents to the ER with a 4 hr history of squeezing chest tightness that radiates up to his jaw and down his left arm to his elbow, which was not alleviated with 3x sublingual nitro spray.  He denies nausea and diaphoresis. His vitals are BP 130/80, HR 80, O2 sat 95% RA. His ECG shows ST elevation in leads V3-V4 and reciprocal depression in leads II, III, aVF. He is given supp O2, ASA, IV heparin and is rushed to the cath lab for a PCI and a LAD occlusion is relieved with a drug eluting stent. In his post MI care, which of the following medications is most likely to do ALL of the following: reduce afterload, HR, contractility, and increase diastolic filling time?",
    choices: [
      "Aspirin",
      "Captopril",
      "Clopidogrel",
      "Metoprolol",
      "Nifedipine",
    ],
    correct: "Metoprolol",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding post MI treatment and cardiac pharmacology in relation to myocardial oxygen supply and demand. In this vignette we are presented with a patient with risk factors, clinical presentation, and an ECG pattern that suggests a STEMI localized to the LAD. The medication that is most likely to reduce afterload, HR, contractility, and increase diastolic time would be (D) a cardiac selective β blocker and would be part of the post-MI cocktail (assuming no contraindications). β blockers can achieve this because by blocking β1 receptors at the SA node and AV node, there will be decreased conduction and hence heart rate, thus reducing oxygen demand. This subsequently will increase diastolic time, thereby increasing myocardial oxygen supply. Blocking β1 receptors on ventricular cardiomyocytes will decrease contractility, thus further decreasing oxygen demand. Finally, β blockers can achieve decreased afterload (which decreases oxygen demand via reduced wall stress - heart doesn’t have to pump into a higher pressure system) by reducing RAS and SNS activation. β1 receptors also exist on juxtaglomerular cells in the kidney, which stimulate the release of renin, thus if we block this we will have some reduced RAS activation (remeber there are many other pathways that result in RAS activation, the SNS is only one of them) resulting in less AngII vasoconstriction (decreased afterload) and the downstream effects of RAS (this would also result in a minor reduction in preload - another factor in wall stress - due to less aldosterone release). Hopefully this highlights why β blockers are a key medication in cardiology via many different positive effects on myocardial oxygen supply and demand. (A) aspirin and (C) clopidogrel will prevent further thrombosis, so wouldn’t have a major direct effect on myocardial oxygen supply and demand. (B) is an ACEi and we’d really only expect decrease in preload and afterload by blocking RAAS, and also decreased cardiac remodeling that results in LV hypertrophy, which increases oxygen demand. In this case we’d expect more RAAS inhibition than β blockers because we are blocking a downstream step in the pathway. (E) is a DHP CCB, which means that it has little effect on the heart compared to non-DHPs, so we wouldn’t expect the listed effects besides decreased afterload, however we’d expect increased heart rate (reflexive) and increased coronary perfusion due to decreased resistance (coronary vasodilation).",
  },
  {
    id: 2,
    prompt:
      "A 72 y/o male with HTN presents to the ER with a 5 hr history of chest heaviness that does not radiate. He has vomited twice in the last hour and is sweating. His vitals are 80/60, HR 55, O2 sat 93%. Auscultation reveals a systolic murmur best auscultated at the apex of his heart. His ECG shows ST elevation leads II, III, aVF, reciprocal depression in aVL, and increased PR interval in the rhythm strip (lead II). Which of the following medications would most likely cause more harm (acutely) in this case prior to revascularization?",
    choices: [
      "Aspirin",
      "Atropine",
      "Clopidogrel",
      "Metoprolol",
      "Rosuvastatin",
    ],
    correct: "Metoprolol",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the management of a STEMI prior to revascularization and contraindications. In this vignette we are presented with a patient with a suspected inferior STEMI involving the RCA given the ECG pattern. We also have some clinical signs that suggest an inferior MI such as nausea (vagus), mitral regurgitation, and heart block. This patient also has 1st degree heart block given the increased PR interval (bradycardia) and he is hypotensive. This is concerning as he is decompensating and could risk going into cardiogenic shock, therefore we must avoid any medications that would further compromise his cardiac output. (D) would be avoided in this case prior to revascularization. This is because a cardioselective β blocker will further decrease cardiac output by further reducing HR and contractility and in this case worsen his 1st degree heart block (relative contraindication, higher degree heart blocks would be an absolute contraindication), which are what we would want in the longer term management, but not in the acute setting when his heart can barely pump enough to maintain BP. (A) would be something we’d give immediately and ask him to chew to increase absorption rate and onset to prevent further thrombosis and occlusion. (B) is a muscarinic antagonist, which will block the M2 receptors (PSNS) in the heart like the SA node. This will block further reduction in heart rate. In this case we wouldn’t use it yet, but we would consider if the patient starts showing 2nd degree or 3rd degree AV block given his hemodynamic instability. (C) would not be contraindicated, but would take a while to work. (E) would also not be contraindicated, and not cause more harm in the acute setting, but not something that needs to be given in the moment.",
  },
  {
    id: 3,
    prompt:
      "A 56 y/o male with HTN is recently started on a drug following his recent diagnosis of stable angina. The drug only decreases myocardial oxygen demand through reducing preload and afterload and has minimal effect on increasing myocardial oxygen supply. Which of the following is the most likely identity of the drug?",
    choices: [
      "Aspirin",
      "Hydrochlorothiazide",
      "Metoprolol",
      "Nitroglycerin",
      "Ramipril",
    ],
    correct: "Hydrochlorothiazide",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "TThis question requires understanding pharmacological manipulation of myocardial oxygen demand. (B) is the drug here that ONLY decreases myocardial oxygen demand via reduction of preload and afterload, which leads to decreased wall stress. HCTZ is a diuretic, which leads to loss of water and Na+ and hence blood volume. Reduction in blood volume leads to decreased preload (venous return) and in turn leads to a reduction in afterload via the reduction in blood pressure. (A) is an antiplatelet and does not have a direct effect on myocardial oxygen demand. (C) Reduces preload (minor), afterload, contractility, and HR, and increases diastolic time (see in depth explanation in other question). (D) Reduces preload, afterload, and decreases coronary artery resistance. (E) Reduces preload, afterload, and cardiac size (remodeling), and decreases coronary artery resistance (see in depth explanation in other question).",
  },
  {
    id: 4,
    prompt:
      "A 45 y/o female presents with dyslipidemia and HTN presents to a rural ER with 6hr history of chest pain that was not relieved with 3x nitrospray. Her vitals are stable and ECG shows ST depression in leads V4-V6. The ER does not have access to a cath lab. Assuming that her troponin levels come back elevated, which of the following medications would you NOT start the patient on?",
    choices: ["Aspirin", "Enoxaparin", "Tenecteplase", "Ticagrelor", "B and C"],
    correct: "Tenecteplase",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the management of NSTEMI or unstable angina. In this vignette we are presented with a patient with a suspect ACS that presents as either a NSTEMI (troponin +) or unstable angina (troponin -) localized to the anterior wall on ECG. In this case the only medication we would NOT start her on is (C) despite the lack of cath lab access. Tenecteplase is a tPA, which is a fibrinolytic or clot buster. Busting the clot in this case could cause more harm. In a NSTEMI, there is stenosis, but some blood flow, busting the clot could lead to cardiac dysrhythmia due to the sudden increase in perfusion, but also could cause clots to break off the current clot leading to thrombosis downstream. Fibrinolytics also have a high bleed risk! (A) and (D) are both antiplatelets that we would want to start the patient on ASAP. (B) is an anticoagulant (LMWH) is also something we would want to start the patient on. If the patient had ST elevation and no access to a cath lab, then we would use tenecteplase to reestablish perfusion given the lack of access to angioplasty for reperfusion. Once we have established the NSTEMI Dx we would also consider adding on medications that help manage myocardial oxygen demand and supply and add a statin.",
  },
  {
    id: 5,
    prompt:
      "A 67 y/o patient with stable angina, dyslipidemia, HTN, and T2DM presents to his GP with myalgia. She describes the pain in both of her thighs and is fairly symmetrical. She was diagnosed with her aforementioned comorbidities approximately 4 months ago during a routine checkup. Which of the following medications is the most likely cause for the patient’s chief complaint?",
    choices: [
      "Atorvastatin",
      "Captopril",
      "Diltiazem",
      "Metoprolol",
      "Nitroglycerin",
    ],
    correct: "Atorvastatin",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the side effects of commonly used medications like statins. In this vignette we are presented with a patient with multiple comorbidities and now presented with symmetrical myalgia in her thighs. This presentation is associated with (A) statins. Statins are HMG-CoA reductase inhibitors, which allows them to inhibit the rate limiting step of cholesterol synthesis, thus allowing for reduction in cholesterol levels. Through an unclear mechanism that possibly involves leak of Ca2+ in the sarcoplasmic reticulum of muscle cells, myalgia and/or myopathy could occur. Statin-induced myalgia typically presents within 6 months of starting and is associated with proximal muscle groups, symmetrical, worsens with exercise, and is dose dependent. Other associated symptoms include weakness, soreness, fatigue. This also means that statin usage can also lead to rhabdomyolysis, which can cause AKI. LIPITOR is an mnemonic for statin side effects: Liver issues, Increased blood glucose, Pain (muscles), Impaired memory, Tiredness/fatigue, Other (headaches, nausea), Rhabdo. Below are some of the side effects associated with each drug (not exhaustive!!) (B) dry cough (increased bradykinin), angioedema (increased BK), hyperkalemia (decreased aldosterone and GFR). (C) is a nonDHP CCB, think of ankle edema (peripheral edema due to vasodilation on the arteriole side of capillaries leading to increased capillary pressure), headache (v/d), flushing (v/d), cardiac depression (AV conduction block), (D) fatigue, depression, orthostatic hypotension (blunted baroreflex response), sexual dysfunction, bradycardia/block. (E) flushing, dizziness, tachycardia, headache, see another question for mechanistic explanation.",
  },
  {
    id: 6,
    prompt:
      "A 64 y/o with stable angina is started on an ACE inhibitor. Which of the following are expected positive effects this treatment will have on his myocardial oxygen demand and supply?",
    choices: [
      "Decreased coronary artery resistance",
      "Reduced cardiac growth (LV hypertrophy)",
      "Reduced preload AND afterload",
      "A and C",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      " This question requires understanding ACEi pharmacology. (E) correctly includes the expected positive effects of ACEi on myocardial oxygen demand and supply. Essentially, ACEi inhibits RAAS by reducing the production of angiotensin II (AngII). This leads to inhibition of coronary and peripheral  artery vasoconstriction (and adverse vascular remodeling), hence decreased coronary artery resistance and afterload. RAAS inhibition also leads to decreased aldosterone release, which results in reduced Na+ reabsorption. THis results in a drop in preload due to reduction in blood volume. AngII can act directly on cardiac myocytes and cardiac fibroblasts, which promotes adverse remodeling such as fibrosis, ECM production, and growth, which leads to growth like LV hypertrophy. This in turns adds more stress on the heart and increases its oxygen demand (bigger heart needs more oxygen to supply).",
  },
  {
    id: 7,
    prompt:
      "A 52 y/o with stable angina, dyslipidemia, and HTN presents to his GP with complaints of throbbing headache and dizziness after taking one of his medications. Assuming an iatrogenic trigger, which of the following medications is the most likely culprit?",
    choices: [
      "Atorvastatin",
      "Captopril",
      "Metoprolol",
      "Nitroglycerin",
      "Verapamil",
    ],
    correct: "Nitroglycerin",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding nitric oxide pharmacology. In this vignette, the patient suffers from a throbbing headache and dizziness after administration of one of his meds. (D) is the most likely culprit because it increases nitric oxide. NO will lead to vasodilation, which is great for reducing afterload, preload, and resistance in the coronary arteries, but it will also vasodilate cerebral arteries, thus causing a throbbing headache. This can also result in dizziness, due to arterial vasodilation as less blood can reach the brain, hence orthostatic hypotension is also a common side effect. There needs to be some tension in the arterial wall to push blood to the brain. Flushing can also occur due to vasodilation of vessels near the skin. Reflex tachycardia as a response to the drop in blood pressure can occur as well. Sildenafil (Viagra) is contraindicated with nitroglycerin because sildenafil potentiates the action of nitric oxide. Sildenafil is a PDE5 inhibitor, thus causing a build up of cGMP (broken down by PDE5) that is produced from the NO pathway. This results in prolonged action and increased effect of NO, which causes massive vasodilation and subsequent BP drop.",
  },
  {
    id: 8,
    prompt:
      "A 56 y/o patient has sharp chest pain and shortness of breath following exertion. He sprays medication sublingually into his mouth. How would this relieve his symptoms?",
    choices: [
      "Increased oxygen supply via decreased coronary artery resistance",
      "Reduced myocardial oxygen demand via preload reduction",
      "Reduced myocardial oxygen demand via heart rate reduction",
      "A and B",
      "All of the above",
    ],
    correct: "A and B",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding nitric oxide pharmacology. In this vignette we need to first recognize what medication is being used. Sublingual spray for chest pain on exertion, is most likely nitroglycerin. Sublingual administration allows fast absorption that bypasses first pass metabolism (nitroglycerin is extensively first-pass metabolized), thus allowing for fast relief of symptoms. Nitroglycerin essentially acts by releasing more nitric oxide. Nitric oxide is how our body vasodilates arteries, and almost all vasodilatory receptors (Histamine, Muscarinic, Bradykinin) on our endothelial cells result in a common pathway of increased NO production. NO diffuses to smooth muscle cells. This results in activation of guanylate cyclase, which increases cGMP production to cause smooth muscle relaxation. This leads to (D) both A and B will occur. The nitric oxide released will cause venodilation, thus reducing venous return (preload), thereby reducing wall stress and oxygen demand. Nitric oxide will also work on arterial smooth muscle such as the coronary arteries, resulting in decreased coronary artery resistance, thus an increase in oxygen supply. NO will also lead to decreased afterload due to decreased SVR. (C) does not occur, in fact nitroglycerin could lead to reflex tachycardia due to the reduction in BP, resulting in a reflexive increase in HR to counteract the drop in BP. It should be noted that there is tachyphylaxis with over use of nitroglycerin, this means decreased efficacy with repeated administration (think of it as tolerance).",
  },
  {
    id: 9,
    prompt:
      "A 63 y/o female patient presents to the ER with sharp chest pain that radiates down her left arm. An ECG is done and shows ST elevation. Further workup confirms a STEMI and she is rushed to the angio suite where the interventional cardiologist inserts a drug-eluting stent in her left anterior descending artery. Following the procedure she should be started on which of the following pharmacological interventions?",
    choices: [
      "Aspirin alone ",
      "Aspirin + Ticagrelor",
      "Apixaban + Ticagrelor",
      "Ticagrelor alone ",
      "Drug-eluting stents do not require further pharmacological intervention",
    ],
    correct: "Aspirin + Ticagrelor",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the indications of DAPT (dual antiplatelet therapy) following coronary catheterization. In this vignette we would want to start on dual antiplatelet therapy to inhibit at least 2 different pathways that lead to platelet activation. (E) is wrong because stents can be pro-thrombotic and the drugs eluted are chemotherapeutics to inhibit smooth muscle proliferation/remodeling at the site of the stent and thus do not inhibit platelet activation. Given that this is an arterial thrombosis event, then we want to inhibit platelets since it’s a platelet driven process, hence(C) is wrong because apixaban is an anticoagulant for VTEs and has shown increased risk of bleeding in ACS patients. We are left with (A), (B), and (D). (B) is correct because we want to inhibit 2 different pathways of platelet activation to minimize the recurrence of a thrombotic event. Aspirin is an irreversible nonselective COX1/2 inhibitor, which will decrease TXA2 mediated activation and aggregation of platelets. While ticagrelor is a reversible P2Y12 ADP receptor antagonist, therefore inhibiting the ADP mediated platelet activation and subsequent aggregation pathway.",
  },
  {
    id: 10,
    prompt:
      "Which of the following correctly matches the drug to its mechanism of action?",
    choices: [
      "Abciximab - P2Y12 ADP receptor inhibitor",
      "Aspirin - Non-selective irreversible COX1/2 inhibitor",
      "Clopidogrel - Glycoprotein (GP) IIb/IIIa inhibitor ",
      "Dabigatran- Thrombin receptor inhibitor",
      "Vorapaxar- Factor Xa inhibitor",
    ],
    correct: "Aspirin - Non-selective irreversible COX1/2 inhibitor",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires knowing the mechanism of actions of different antiplatelets/anticoagulants. The correct combination is: (A) Abciximab = GPIIb/IIIa inhibitor. (B) Aspirin = non selective irreversible COX1/2 inhibitor (leading to decreased TXA2). (C) ClopidoGREL (ticaGRELor) = P2Y12 ADP receptor inhibitor. (D) Dabigatran = direct thrombin inhibitor. (E) Vorapaxar = thrombin receptor inhibitor.",
  },
  {
    id: 11,
    prompt:
      "A 76 y/o patient with a MI 4 mos ago presents to his GP with complaints of feeling fatigued and erectile dysfunction. Assuming an iatrogenic cause, which of the following is the most likely culprit?",
    choices: [
      "Aspirin",
      "Clopidogrel",
      "Metoprolol",
      "Ramipril",
      "Rosuvastatin",
    ],
    correct: "Metoprolol",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding the side effects of β blockers. In this vignette we are presented with a patient with fatigue and ED. (C) is the most likely culprit. It is thought that since β blockers block the SNS, which plays a role in integrating erection, emission, and ejaculation (do note that the PSNS also plays a role in erection, which is actually mediated by muscarinic receptors of the PSNS), then sexual dysfunction could occur. β blockers have been linked to causing depressed mood, fatigue, which could be related to the SNS depression. However, some studies have suggested that β blockers might not actually be causing a significant role in sexual dysfunction.",
  },
  {
    id: 12,
    prompt:
      "Using your pharmacology knowledge, why would a DHP calcium channel blocker (CCB) (e.g. amlodipine) be an ill advised choice over non-DHP calcium channel blocker (e.g. diltiazem, verapamil) in a patient with acute coronary syndrome?",
    choices: [
      "DHP CCBs are less potent at coronary artery vasodilation than non-DHP CCBs",
      "DHP CCBs may cause reflex tachycardia due to peripheral vasodilation",
      "DHP CCBs over reduce contractility and heart rate leading to severe hypotension",
      "DHP CCBs are as effective as non-DHP CCBs in ACS",
    ],
    correct:
      "DHP CCBs may cause reflex tachycardia due to peripheral vasodilation",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding CCB pharmacology. First we need to recall that DHP CCBs act more on the vasculature than the heart, while non-DHPs act more on the heart than the vasculature. This means that we’d see more vasodilation over cardiac depression. THe resulting vasodilation leads to a drop in blood pressure that causes a reflexive response to counteract the drop in BP by activating the SNS. This results in increased HR, thus resulting in reflex tachycardia. Hence (B) is the correct answer. This reflexive tachycardia is not ideal in patients with ACS as this would increase myocardial oxygen demand. We don’t see this in non-DHP CCBs because they would have blocked the HR and contractility caused by the SNS baroreflex response. (A) is false, DHP CCBs have better vasodilation than non-DHPs, so we’d expect better coronary artery vasodilation. (C) is false DHP CCB vasculature>cardiac. (D) is false.",
  },
  {
    id: 13,
    prompt:
      "A 56 y/o male presents to the ER with chest heaviness that radiates to his left shoulder. He is diaphoretic and nauseated. His past medical history includes HTN, dyslipidemia, and asthma. His vitals are BP 100/75, HR 75, O2 sat 90%, Temp normal. An ECG shows ST elevation in leads II, III, and aVF. He is rushed to the cath lab and a drug eluting stent is placed in his RCA. In his post-MI care, which of the following medication mechanisms will MAINLY reduce his afterload, contractility, heart rate, and directly decrease coronary artery resistance?",
    choices: [
      "Angiotensin converting enzyme inhibitor",
      "Cardiac selective β1 blocker",
      "COX1/2 non selective inhibitor",
      "Non-DHP calcium channel antagonist",
      "P2Y12 ADP receptor antagonist",
    ],
    correct: "Non-DHP calcium channel antagonist",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding cardiac pharmacology. In this vignette we are presented with an inferior STEMI of the RCA. The drug that will reduce afterload, contractility, HR and decrease coronary artery resistance would be (D). Blocking calcium channels in the heart at the nodes will decrease HR, the Ca channels in the myocardiocytes will decrease contractility. At the vasculature this will lead to vasodilation (afterload reduction), and also cause vasodilation of coronary arteries (decreased resistance). There is little effect on preload (very little venodilation or effect on blood volume). (A) see other questions with detailed explanation. (B) see other questions with detailed explanation. (C) and (E) are antiplatelets.",
  },
  {
    id: 14,
    prompt:
      "A 40 y/o patient presents to his GP after noticing some “weird spots” on his skin. Upon examination the GP notes xanthelasma, corneal arcus, and palmar xanthomas. A lipid panel is ordered and his levels are extremely elevated:  LDL-C = 5.0 mM, total cholesterol = 7.0 mM. Which of the following drug mechanisms would the patient benefit the most from at this stage?",
    choices: [
      "Cardiac selective β blocker",
      "COX1/2 non selective inhibitor",
      "HMG-CoA reductase inhibitor",
      "NPC1L1 inhibitor (gut absorption of lipids)",
      "PCSK9 inhibitor (inhibits LDL-R degradation)",
    ],
    correct: "HMG-CoA reductase inhibitor",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the management of dyslipidemia. In this vignette we are presented with a patient with some form of familial hypercholesterolemia, which we suspect from the physical exam findings and severely elevated lipid levels. These are not what we would expect from a “lifestyle” hypercholesterolemia (mildly elevated lipid levels). In this case, lifestyle interventions would not be enough. Pharmacological intervention is recommended. The medication that has shown the best efficacy in clinical endpoints (preventing death, CAD, MI, stroke) and lowering LDL are statins. Hence, (C) is the correct answer, which correctly states the main mechanism of statins. Statins inhibit the rate limiting step in cholesterol synthesis (specifically the mevalonate pathway). This lowers the amount of cholesterol produced by the liver. This will then lead to an upregulation in LDL-R expression on liver cells, which will further reduce serum lipid levels, by sequestering whatever LDL floating in the blood. Statins also reduce oxidative stress and vascular inflammation, which leads to increased stability of atherosclerotic lesions. (A) is a β blocker. (B) is ASA and would not affect lipid levels. (D) is ezetimibe, which reduces gut absorption of cholesterol, but there is no evidence in reduction of morbidity and mortality (but consider as add-on if management goals are not met). (E) are drugs like alirocumab/evolocumab (-ocumab), which have shown great biochemical endpoints in increasing HDL and decreasing LDL (comparable to statins). These are expensive, injectables (-mab), and are new. The data behind reduction in mortality is still unclear, but could be a mainstay in lipid lowering therapy in the future (but can be considered as an add-on).",
  },
  {
    id: 15,
    prompt:
      "Qadir is a 55-year old man presenting with acute left-sided chest pain. He denies shortness of breath, but tells you that he is also experiencing some pain in his upper back. Additionally, Qadir has a 20-year history of hypertension. He denies taking any medications. On physical exam you find Qadir to be hypertensive with BP 176/60 in his left arm, BP 140/61 in his right arm, and asymmetric radial pulses (weaker on the right side). His JVP is 3 cm above the sternal angle, heart sounds unremarkable, and equal air entry bilaterally to the lungs. Assuming the most likely diagnosis, which medication(s) should be administered to Qadir?",
    choices: [
      "Acetylsalicylic acid",
      "Clopidogrel",
      "Metoprolol",
      "All of the above",
      "A & B",
    ],
    correct: "Metoprolol",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question examines the management of aortic dissection. This condition classically presents as chest pain which radiates to the interscapular region, consistent with Qadir’s presentation. Furthermore, Qadir possesses the greatest risk factor for aortic dissection: uncontrolled hypertension. These factors in combination with the pathognomonic difference in blood pressures between arms points towards Qadir having an aortic dissection (likely involving the thoracic aorta and left subclavian artery). Management of an aortic dissection involving the thoracic aorta (Stanford A) includes immediate surgery and potential blood pressure and rate control using a beta blocker (C) to decrease further complications and reduce stress on the heart. Aspirin (A) and clopidogrel (B) are contraindicated in aortic dissection and would increase mortality if administered in this context. (WW Q)",
  },
];
