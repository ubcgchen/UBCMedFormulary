/**
 * Questions for Heart Failure week
 * @author Michael Gong, UBC VFMP 2025
 */

export const HeartFailure = [
  {
    id: 1,
    prompt:
      "A 65 y/o patient presents to the ER with chest pain and shortness of breath. He has a history of stable angina, HTN (Dx 20+ yrs ago), and dyslipidemia. His vitals are BP 110/90, HR 110, RR 26, T 37degC, O2 sat 95% RA. On auscultation a grade III/VI crescendo decrescendo systolic murmur at the right upper sternal border that radiates to the carotid and a S4 sound are appreciated. Cardiac apex beat is felt slightly more lateral than the midclavicular line. The JVP is 2 cm above the sternal angle. The carotid pulse has a slow upstroke and decreased amplitude. Cap refill and peripheral pulses are unremarkable. The pulmonary exam is unremarkable. The patient uses a sublingual nitro spray thinking that its angina and this causes increased chest pain. Now his  BP 80/50 and HR 120. Which of the following correctly describes the MOST SIGNIFICANT mechanism behind the increased chest pain following nitrates in this patient?",
    choices: [
      "NO oxidizes heme Fe into the ferric state resulting in methemoglobin formation, thus reducing oxygen carrying capacity, thus decreasing myocardial oxygen supply",
      "NO causes vasodilation leading to reflexive tachycardia resulting in increased myocardial oxygen demand",
      "NO causes vasodilation caused decreased aortic diastolic pressure resulting in a decreased coronary perfusion pressure, thus decreasing myocardial oxygen supply",
      "NO causes venodilation, resulting in decreased wall stress and myocardial oxygen demand, thus decreasing coronary perfusion",
      "None of the above",
    ],
    correct: "NO causes vasodilation caused decreased aortic diastolic pressure resulting in a decreased coronary perfusion pressure, thus decreasing myocardial oxygen supply",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding pharmacological intervention can affect myocardial oxygen supply and demand. In this vignette we are presented with a patient with aortic stenosis (AS) leading to heart failure. We believe this is AS given the physical exam findings of a systolic murmur character, location, and radiation. The carotid pulse character further substantiates this hypothesis. We also believe there are signs of pressure overload in the heart from the S4 sound and the long history of HTN substantiates this. The displacement of the apex further suggests some cardiac hypertrophy, possible concentric hypertrophy (especially given the possible AS and HTN hx and lack of volume overload). We don’t see signs of fluid overload or signs of decreased peripheral perfusion. Normally the nitrospray should relieve chest pain if this was angina because it helps decrease wall stress by venodilation (decrease preload) and vasodilation (decrease afterload), which reduces O2 demand, and dilate coronary artery vessels (increase O2 supply). However, in AS nitrates will actually cause worsening of the supply and demand, hence its contraindication and the increase in chest pain as seen here. This is correctly described in (C). The decrease in afterload by vasodilation nitres is not experienced by the LV with AS, as it is still pumping against a high afterload. The vasodilation causes a drop in SVR, which leads to a drop in diastolic pressure in the aorta, and this drop can’t be corrected by the heart since what the LV sees is this massive afterload it faces and can’t overcome it to meet the compensatory demand whether that is through HR or contractility. This will then reduce the coronary artery perfusion pressure since the coronary arteries are perfused during diastole. The coronary artery perfusion pressure = Aorta diastolic P (ADP) - LV end diastolic P (LVEDP). Normally P LVEDP = 4-12 mmHg, and ADP = 80 mmHg leading to a perfusion pressure of 60-80. In this case we see the diastolic P drop to 50, which makes the gradient even smaller (~38-45) and, thus, less oxygen supply. However, given the probable concentric hypertrophy, we would expect the LVEDP to be higher than normal (smaller volume causing higher pressure as seen in the CBL case), thus the perfusion pressure could be even smaller! This decrease in perfusion pressure leads to less oxygen reaching the cardiomyocytes, thus causing an imbalance in supply and demand, causing increased chest pain. (A) is a true side effect of nitrates, however is not the major cause of the increased chest pain in such a short time frame. (B) could potentially play a role as the baroreceptors detect the drop in BP and try to increase CO by stimulating the heart, but the AS prevents the response since the LV is always pumping against a super high afterload, but isn’t as concerning as the massive drop in perfusion pressure. (D) is true that it venodilates, but the rest of the sentence doesn’t make sense in this case."
  },
  {
    id: 2,
    prompt:
      "A 56 y/o patient presents to the GP with shortness of breath and generalized fatigue. He reports increasing shortness of breath during normal activities such as chores. The SOB worsens when lying down and he has to use multiple pillows when he sleeps. He has a PMHx of HTN, dyslipidemia, T2DM, and NAFLD. His vitals: BP 110/70, HR 110, RR 28, T 37, O2sat 92% RA. Cardiac exam reveals S3 heart sound, apex beat palpated laterally, cap refill <2s, peripheral pulses palpable, extremities warm, bilateral pitting edema from the ankle up to the mid tibia, JVP 7 cm above the sternal angle. Pulmonary exam reveals bilateral crackles at the lung bases. Abdo exam reveals mild ascites, but no organomegaly. Which of the following pharmacological mechanisms would provide the MOST benefit right now in this case?",
    choices: [
      "Activate β1 receptors on pacemaker cells and and cardiomyocytes resulting in increased cardiac output",
      "Inhibit β1 receptors on pacemaker cells and cardiomyocytes resulting in decreased wall stress and afterload",
      "Inhibit neprilysin resulting in decreased breakdown of BNP, leading to decreased RAAS and SNS and increased diuresis, thus decreasing afterload and preload",
      "Inhibit NKCC2 in the ascending loop of Henle resulting in decreased Na+ and water reabsorption resulting in increased diuresis, thus resulting in decreased preload",
      "Inhibit RAAS resulting in decreased SVR, decreased aldosterone, decreased cardiac remodeling, leading to decreased preload and afterload",
    ],
    correct: "Inhibit NKCC2 in the ascending loop of Henle resulting in decreased Na+ and water reabsorption resulting in increased diuresis, thus resulting in decreased preload",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the management of volume overload HF patients. In this vignette we are presented with a patient that clinically presents with HF given the history (fatigue, SoB, PND) and is probably NYHA class II. His physical exam show fluid overload given the S3 heart sound, elevated JVP, peripheral edema, ascites, pulm edema, displaced PMI. He however appears to be well perfused. We can describe him as wet and warm, meaning he is overloaded, but perfusing well. His vitals also indicate that his heart is responding appropriately to lower BP by increasing HR. In this case the best management would be to diurese him and get rid of the extra fluid that is backing up into his lungs and his periphery. This will decrease his preload, which will lead to less cardiac demand. Therefore, (D) is the best answer as this correctly describes the mechanism of furosemide, a loop diuretic, which is our most efficacious diuretic. Some other medications we could consider are nitrates (to optimize cardiac O2 supply and demand acutely) Fluid overload correction is the first step in this case before we start on the other medications used in the chronic management such as those described in (B) β blockers, (C) sacubitril, (E), ACEi or ARB. (A) describes an inotrope and would definitely NOT be used in this case as his heart is responding as expected and does not need pharmacological support in HR or contractility. THis would cause more damage in the long run as this wastes cardiac energy and increases demand that would just further exacerbate his heart failure."
  },
  {
    id: 3,
    prompt:
      "A 67 y/o patient with chronic heart failure (Reduced ejection fraction), CKD (Stage G3aA1), and HTN presents to his GP. He is visibly volume overloaded with bilateral pitting edema in the lower extremities and JVP is 8 cm above the sternal angle. The GP notices that the patient is already on the maximal furosemide PO dose. In this case, which of the following MOST LIKELY explains the decreased effectiveness of furosemide?",
    choices: [
      "Compensatory increase in furosemide first pass metabolism due to portal hypertension",
      "Decreased renal blood flow leading to decreased delivery of furosemide to the renal tubules",
      "Increased excretion of furosemide due to CKD related damage of the glomerular filtration barrier",
      "PO furosemide is not effective in congestive heart failure, consider IV instead",
    ],
    correct: "Decreased renal blood flow leading to decreased delivery of furosemide to the renal tubules",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacokinetic implications of furosemide. In this vignette we are presented with a patient with CHF and CKD (possible cardiorenal syndrome?) who is now fluid overloaded. The maximal PO dose of furosemide does not appear to be helping him diuresis the fluid. This effect is correctly explained in (B). For furosemide to work it needs to be secreted into the renal tubules, which will allow it to have access to the apical membrane, where it can inhibit NKCC2. In heart failure, there could be decreased end organ perfusion and in this case our patient also has CKD. Together this could lead to decreased renal blood flow, hence decreased GFR, but also decreased delivery of furosemide to the proximal tubules where it can be secreted into the tubule. Therefore, less of the PO dose is reaching the kidneys to exert its diuretic effect, thus reducing the effectiveness of furosemide. This question is meant to consider the pharmacokinetic implications of drug distribution to its target site, and how pathologies that affect this can really alter efficacy. (A) is not true, in fact, first pass metabolism would likely decrease in patients with portal hypertension because this leads to the portocaval shunts, which will allow absorbed drugs to bypass the liver and reach systemic circulation at higher doses. (C) is not true, and even if it were, it would allow more furosemide to reach the ascending loop of Henle to block NKCC2. (D) is not true to a certain extent. Furosemide does have a ceiling effect in CHF, such as cases highlighted here and some renal adaptations eventually will lead to decreased furosemide effectiveness, but this usually occurs in later stages."
  },
  {
    id: 4,
    prompt:
      "A 46 y/o patient presents to her GP with increasing fatigue and shortness of breath with exertion, chest pain on exertion, and paroxysmal nocturnal dyspnea. On exam, the patient can be described as cool and wet. An S3 gallop and bilateral crackles at lung bases are auscultated, elevated JVP, sluggish cap refill, cool extremities, and bilateral pitting edema up the mid tibia. An CXR shows increased cardiothoracic ratio. ECG shows increased S wave height in V1, and elevated R wave height in V5 and V6. An ECHO shows a dilated left ventricle with normal wall thickness, and 35% ejection fraction (rest of the study was unremarkable). Which of the following from her medical/medication history would MOST LIKELY explain the possible etiology behind her presentation?",
    choices: [
      "Failure to adhere to her HTN medication: ramipril",
      "Ibuprofen usage leading to decreased GFR",
      "Insulin overdosing for her T1DM causing transient hypokalemia",
      "Hodgkin’s Lymphoma at 25 y/o treated with doxorubicin",
      "Oral contraceptive use leading to increased thromboembolic events in her left atrium",
    ],
    correct: "Hodgkin’s Lymphoma at 25 y/o treated with doxorubicin",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the iatrogenic causes of heart failure. In this vignette we are presented with a patient with clinical signs of heart failure (SoBOE, CPOE, PND, fatigue). She is not perfusing well and fluid overload from her physical exam (S3, sluggish cap refill, pulm edema, cool extremities, edema). Her ECG shows signs of left sided hypertrophy as shown by the increased S wave in V1 (larger negative deflection away from this lead as the electrical current travels through a larger LV). increased R wave in V5, V6 (larger positive deflection towards the heart due to the larger LV the current has to travel through). An ECHO confirms that the LV is dilated, with normal thickness and reduced ejection fraction. This is dilated cardiomyopathy. One of the important known causes of dilated cardiomyopathy are chemotherapeutics, especially the anthracycline and alkylating classes. In this case, (D) correctly provides the most likely cause. Doxorubicin is an anthracycline chemotherapeutic with known cardiotoxic effects. This is primarily through the generation of free radicals, which cause cardiomyocyte dysfunction. (A) is possible, but that usually would cause a hypertrophic cardiomyopathy, which presents with thickened walls that cause poor diastolic filling (smaller LV volume) and thus could have preserved ejection fraction. (C) is unlikely to cause this, in fact poor sugar control will worsen heart failure. (E) is less likely to produce this cardiomyopathy. OCP use is associated with strokes and heart attacks."
  },
  {
    id: 5,
    prompt:
      "A 70 y/o patient is at the ER for acute decompensation of his HFrEF. Prompt diuretic therapy and supplemental oxygen were initiated and he is transferred to the cardiac ICU. His vitals BP 70/50, HR 60, RR 24, T normal, O2sat 95% 4L by nasal prongs. He is started on IV dobutamine. A few hours later his vitals are BP 80/60, HR 95. He still has altered mental status and his BNP and creatinine levels are severely elevated. Which of the following medications would you consider using now?",
    choices: [
      "Bisoprolol",
      "Spironolactone",
      "Nitroprusside",
      "Norepinephrine",
      "Valsartan/sacubitril",
    ],
    correct: "Norepinephrine",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding a simplified case of cardiogenic shock and maintenance of end organ perfusion. In this vignette we are presented with an acute decompensation of HF. We see that the initial stabilization is not enough and he is started on dobutamine, an inotrope that works as a β1 agonist. This will increase contractility and HR to increase CO. This was done because his BP is low and HR is abnormally “normal” low. In a normal functioning heart, we’d expect the baroreceptor response to low BP to be an increase in HR to increase CO. Evidently here his heart is not responding to that. After inotrope administration we see that his BP has slightly increased, and his HR has increased as expected. However, we still see evidence of decreased end organ damage given the altered mental status and possible pre-renal AKI. In this case the increased CO could also lead to decreased SVR as the baroreceptors in the aortic arch and carotid sinus respond to what they see as an increase in CO/BP, thus in this case we are willing to increase his afterload to maintain perfusion to his other organs, so we would administer a vasopressor to increase SVR. In this case (D).  Norepinephrine will bind to α1 and β1 predominantly. Through α1 vasoconstriction occurs, thus increasing SVR to maintain some end organ perfusion. The β1 effects will augment the heart function more. (A) is a β1 selective blocker, and would be contraindicated in this case given the hemodynamic instability our patient is in. This will precipitate even more failure. (B) is K+ sparing diuretic, which like (A), we’d consider in the chronic management as this will optimize cardiac oxygen supply and demand, but in an acute case would provide more harm than good. (C) is used in the acute setting, but not in a patient with hypotension as this would further decrease end organ perfusion and cause even more hemodynamic instability. (E) see reasoning for A and B, but we would start ARNIs after hemodynamics are stabilized as this would help augment the positive effects of BNP on the cardiovascular system."
  },
  {
    id: 6,
    prompt:
      "Which of the following medications does NOT directly promote/inhibit any of the main neurohormonal pathways involved in heart failure?",
    choices: [
      "Carvedilol",
      "Empagliflozin",
      "Sacubitril",
      "Spironolactone",
      "Valsartan",
    ],
    correct: "Empagliflozin",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the neurohormonal pathways related to heart failure and how their activation, despite good intentions, may exacerbate heart failure. The correct answer here is (B). (B) is a SGLT2i and is not directly involved in the pathways involved in heart failure. The main pathways we consider are SNS, RAAS, and natriuretic peptides. The mechanism of SGLT2i in heart failure is not well understood, but in diabetes, SGLT2i promotes natriuresis and excretion of glucose, this leads to volume reduction, in addition to the metabolic benefits. (A) is an α1 and nonselective β blocker. This allows it to block SNS outflow (β1), decrease vasoconstriction (α1), optimize cardiac oxygen demand (β1), and also reduce RAAS via decreased renin release at the JG cells (β1). (C) is a neprilysin inhibitor, which leads to decreased breakdown of BNP. BNP has many positive effects such as inhibiting RAAS and increasing diuresis, decreasing SNS tone, and inhibiting bad remodeling of the heart. BNP is released primarily from the heart ventricles in response to volume overload and is a positive physiological response to heart failure. (D) is a K+ sparing diuretic, specifically an aldosterone receptor blocker, thus it inhibits RAAS and the direct effects of aldosterone on the heart such as fibrosis. (E) is an ARB, thus it inhibits the effects of RAAS (angiotensin II). Inhibition of RAAS decreases afterload, and preload, and SNS tone. Both SNS and RAAS are activated in heart failure because the body senses decreased perfusion (drop in BP) and in response it activates SNS to increase CO, and increase BV/BP with RAAS as a “life saving” intervention. However, in the long run these neurohormonal pathways cause more damage due to worsening the cardiac oxygen supply and demand. SNS makes the heart work harder (contractility, HR, and afterload) and so does RAAS (preload, afterload, remodeling)."
  },
  {
    id: 7,
    prompt: "A 67 y/o patient presents to the ER with decompensating HFrEF. He is extremely short of breath and confused. His vitals are BP 90/60, HR 65, RR 28, T normal, O2Sat 88% RA. He is “cold and wet” on examination: pulmonary edema, B/L pitting edema, elevated JVP, S3 and S4 heart sounds, weak peripheral pulses, and sluggish cap refill. He is started on supplemental O2 and  IV furosemide, but this does not relieve his symptoms and he continues to decompensate. Which of the following interventions would provide the MOST benefit now?",
    choices: [
      "Add hydrochlorothiazide to his IV furosemide",
      "Start IV carvedilol",
      "Start IV milrinone",
      "Start IV nitroprusside",
      "Start IV vasopressin",
    ],
    correct:
      "Start IV milrinone",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the management of acute decompensated heart failure with signs of hemodynamic instability. In this vignette we are presented with an acute decompensating HFrEF. There are signs of hemodynamic instability given the low BP and abnormal “normal” HR, which we would normally expect to be increased to compensate for the low BP. His physical exam shows that he is cold and wet, thus indicating fluid overload and poor perfusion. The initial management with diuretics to get rid of the fluid overload does not appear to be working well (could be due to poor renal perfusion, leading to decreased response to furosemide). In this case, we need to highly consider inotropes to help his cardiac output, which in turn help perfuse his organs. This is a stopgap intervention to help stabilize his hemodynamics before going on more chronic therapy. Therefore, (C) would be the most likely option to pursue. Milrinone is an inotrope and lusitrope (ability for myocardial relaxation). This is because milrinone is a PDE3 inhibitor (similar to viagra - which is PDE5i), that inhibits the breakdown of cAMP in cardiac, which leads to increased PKA and phosphorylation of calcium channels. This ultimately leads to an influx of calcium. This results in increased contractility, improved myocardial relaxation (improved filling, due to increased calcium reuptake). In the vasculature, PDE3i will decrease cGMP breakdown leading to vasodilation (similar to viagra) also a decrease in SVR (decrease in afterload). This somewhat makes the cardiac oxygen supply and demand more favorable than some other inotropes. Also in cardiogenic shock we would see high SVR as the body tries to compensate for the decreased BP by vasoconstricting. This can also reduce end organ perfusion as you are tightening the pipes even more, but on the flip side you still need some arterial tone to perfuse organs, so very low SVR is not good either. (A) would face the same problems as furosemide - decreased delivery to the site of action. (B) would not be helpful in this case and would make the decompensation worse as we would slow down HR and decrease contractility more, which would further reduce his CO. (D) would cause his hypotension to be even worse without helping his cardiac output that well, could also lower the coronary perfusion pressure more (decrease o2 supply), but also has some positive effects on the supply and demand. (E) is a vasopressor and would not be indicated yet without some sort of drug to help with cardiac output like inotropes. We’d consider vasopressor if the inotropes cause a large decrease in SVR or the BP is too low to perfuse the organs. We will learn more about the nuances in shock week."
  },
  {
    id: 8,
    prompt: "Which of the following is NOT an effect of dobutamine on the cardiovascular system?",
    choices: [
      "Increased myocardial oxygen demand",
      "Increased HR",
      "Increased contractility",
      "Induce baroreflex response resulting in decreased SVR",
      "Promote positive cardiac remodeling",
    ],
    correct: "Promote positive cardiac remodeling",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacology of dobutamine. Dobutamine is a β1 and β2 agonist and is used as an inotrope (E) is the only option we would not expect to occur with dobutamine. This is because dobutamine will activate β1 receptors leading to increased contractility and HR. This increases cardiac oxygen demand and wall stress, which would lead to negative and pathological remodeling such as increased size. (A), (B), and (C) are effects mediated by β1. (D) can happen because this is a reflexive response to increased CO, which leads to increased BP. The increase in BP is detected by baroreflex, and we would expect the body to compensate by vasodilating vessels, thus reducing SVR to maintain stable BP.  β2 receptors in the vessels to some organs would also cause vasodilation and a decrease in SVR."
  },
  {
    id: 9,
    prompt:
      "A 60 y/o patient with ischemic cardiomyopathy that has progressed to HFrEF presents to his cardiologist for a checkup regarding his heart rate. The patient has a history of asthma, HTN, dyslipidemia, and T2DM. His last ECG showed sinus rhythm with HR~90. His BP is usually around 100/80. Given this presentation, what would you recommend for rate control?",
    choices: [
      "Carvedilol",
      "Digoxin",
      "Hydralazine",
      "Ivabradine",
      "Verapamil",
    ],
    correct: "Ivabradine",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain: "This question requires understanding rate control in heart failure patients. In this vignette we are presented with a patient with HFrEF that has a sinus rhythm that is fairly fast and somewhat low blood pressure. Ideally we would want to lower his heart rate to reduce myocardial oxygen demand, but obviously not too low. In this case the best medication would be (D). Ivabradine, which was allegedly named to sound like I-(h)av-bradi(ycardia), is a way to remember that this drug slows down HR. Ivabradine works by blocking the funny Na+ channels at the SA node. This results in a decrease in HR, but no change with contractility and BP (BP is more easily compensated with increased contractility or SVR increase in this case unlike β blockers). SInce this does not affect BP that much, in a patient with lower BP, ivabradine would not compromise his end organ perfusion like other rate control drugs that could cause hypotension. Likewise, this patient has asthma, which is a contraindication to β blocker use (A). (A) is a nonselective β blocker with α1 blocking activity as well. The recommendations for ivabradine use is when HR >70, GFR >15, and sinus rhythm. (C) is a direct vasodilator, so we would actually expect reflexive tachycardia. It has not been shown to decrease mortality, but can improve symptoms. (E) is a nonDHP CCB, and like β blockers we would be worried about hypotension. (B) is used on rare occasions for rate control if you have trouble with other options. It has some poor PK properties and many side effects. Basically, avoid it if you can."
  },
  {
    id: 10,
    prompt:
      "A 40 y/o patient presents to his cardiologist after experiencing increasing shortness of breath on exertion (walking two blocks) and fatigue. He was recently diagnosed with sarcoidosis, but is otherwise well (unremarkable PMHx). His vitals are normal. His physical exam shows a JVP 5cm above the sternal angle and bilateral pitting edema. A soft S4 was auscultated, and crackles at the lung bases bilaterally. His recent labs indicated an elevated BNP. On his ECHO it was found that his ejection fraction was 60% and it was noted that his ventricles appeared to be stiff and noncompliant during diastole. His ECG does not show any arrhythmia (no Afib). He started on furosemide. Following volume status correction, which of the following medications should he start on FIRST?",
    choices: [
      "Carvedilol",
      "Empagliflozin",
      "Nitrates",
      "Spironolactone",
      "Ramipril",
    ],
    correct:
      "Empagliflozin",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management for HFpEF. In this vignette we are presented with a patient with clinical signs of heart failure possibly due to his sarcoidosis, which would cause a restrictive cardiomyopathy due to stiff and non compliant ventricles from the granuloma deposition in cardiac tissue. This causes less filling, hence possibly a preserved ejection fraction. We can see that he is fluid overload and there is pressure overload in the ventricles (S4 sound). The ECHO confirms our hypothesis of HFpEF. We start on furosemide to correct volume status. A lot of the medications used in HFrEF have not shown strong evidence of benefit in HFpEF. The only medications that have shown reduction in hospitalizations are (B) SGLT2i and (D) MRAs. However, it is recommended that SGLT2is are started prior to MRAs, hence (B) is the correct answer. If the patient can handle the treatment with the SGLT2i for 2 wks, then the MRA should be added even if symptoms improve. Follow kidney function! We could consider secondary therapy to manage comorbidities such as HTN by adding on medications such as ACEis (E) or ARNIs, or (A) β blockers for rate control. (C) has not been shown to be effective in HFpEF."
  },
  {
    id: 11,
    prompt:
      "A 60 y/o patient with HFpEF and HTN presents to his cardiologist for a checkup. He looks well perfused and dry. His most recent ECG showed an irregularly irregular rhythm with no visible p waves. His vitals are BP 120/80, HR 120 (from ECG), rest normal. He is currently on dapagliflozin and spironolactone. Which of the following medications would you prescribe to this patient?",
    choices: [
      "Apixaban",
      "Bisoprolol",
      "Furosemide",
      "Ivabradine",
      "A and B",
    ],
    correct: "A and B",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain: "This question requires understanding the management of AFib in HFpEF. In this vignette we are presented with HFpEF. We suspect this patient also has AFib, given the ECG findings of irregularly irregular rhythm with no p waves. AFib is a common comorbidity in HFpEF and is associated with increased mortality. The loss of the atrial kick further worsens the poor diastolic filling that occurs in HFpEF, thus it is imperative we manage his AFib. AFib worsens and can cause cardiomyopathy because the constant increased HR can also cause inefficient ventricular contraction, increasing myocardial strain, which worsens the cardiac oxygen supply and demand. We can manage his AFib through rate control with β blockers or CCBs (or digoxin), so (B) would be something we’d use to slow down his HR. However, AFib also predisposes patients to cerebrovascular events such as stroke due to the increased risk of clot formation in the atrium, hence we would also want to start him on a DOAC such as (A). Therefore, (E) is the correct answer. The target HR for patients with AFib is currently <110 (“lenient”) as the most recent study has shown that stricter targets <80 are not better and could lead to worse outcomes. He is well perfused and dry, so (C) would not be indicated to correct his volume status. (D) would not be indicated here, as he is not in sinus rhythm, he has Afib. If you think about the mechanism behind ivabradine, then you can deduce that it can only work if the pacemaking of the cell originates from the SA node since it blocks the funny Na channels that affect the pacemaker resting potential. If the source of the atrial contraction is a re-entry circuit outside of the SA node, then ivabradine will have no effect since the SA node has lost control of the heart’s rate. This question is a spiral to stroke and arrhythmia week."
  },
  {
    id: 12,
    prompt:
      "Which of the following correctly outlines optimal quadruple therapy for chronic HFrEF?",
    choices: [
      "Ramipril followed by valsartan/sacubitril + carvedilol + furosemide + empagliflozin",
      "Ramipril followed by valsartan/sacubitril + carvedilol + furosemide + spironolactone",
      "Ramipril followed by valsartan/sacubitril + carvedilol + spironolactone + empagliflozin",
      "Candersartan + carvedilol + spironolactone + empagliflozin",
      "Candersartan + carvedilol + furosemide + spironolactone",
    ],
    correct: "Ramipril followed by valsartan/sacubitril + carvedilol + spironolactone + empagliflozin",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires understanding quadruple therapy in chronic heart failure management. (C) correctly lists out the drugs. Quad therapy is made up of: an ARNI, β blocker, MRA, and SGLT2i. These target the different neurohormonal pathways directly involved in heart failure. Furosemide is not part of the chronic management, but is used as an add-on in volume overload states to optimize the Frank Starling curve through preload reduction. We could consider starting the patient on an ACEi/ARB, but then ideally we would want to switch them onto an ARNI, hence (D) is not the most correct answer."
  },
  {
    id: 13,
    prompt:
      "Kevin, 60 y/o patient with HFrEF presents to his cardiologist for a medication review. Prior to visiting the cardiologist, the patient took his perindopril due to the importance of adherence to the dosing regime. At the appointment the cardiologist decides to change his perindopril to valsartan/sacubitril. The patient the next day takes valsartan/sacubitril (~24 hrs since perindopril) and starts to feel really sick. Which of the following is the MOST likely side effect he now feels?",
    choices: [
      "Angioedema",
      "Hyperkalemia",
      "Hypokalemia",
      "Rebound hypertension",
      "Nothing, this is standard dosing practices",
    ],
    correct: "Angioedema",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain: "This question requires understanding the overlap in mechanisms behind ARNIs and ACEis, which could lead to unwanted side effects. In this vignette we are presented with a patient that is about to start on an ARNI after being on ACEi. It is advised that there is a 36 hour washout period between the last ACEi dose and the first ARNI dose because there is now an increased risk of (A) angioedema. This is mainly due to the decreased breakdown in bradykinin. ACE and neprilysin both mediate the breakdown of bradykinin through different pathways, therefore if two different pathways that breakdown bradykinin are inhibited, there is an increase in bradykinin levels to a point where the risk of angioedema is high. Angioedema can be life threatening as this could compromise Kevin’s airway and his ability to breathe. Therefore, we want to wash out the ACEi from the system before adding ARNIs. Bradykinin causes increased tissue permeability, vasodilation and edema. (B) is a possible side effect when on both an ARNI and ACEi, but in the acute setting this may not be as big of a problem. Moreover, these drugs lead to hyperkalemia through similar mechanisms (such as reduced aldosterone), that doubling up on blocking the same pathways may not be as dangerous as the potential of angioedema. THis is why doubling up on ACEi and ARB at the same time usually does not result in better results. (C) probably won’t happen on an ACEI or ARNI. (D) not likely to cause rebound hypertension as we are not lifting the patient of an antihypertensive without any follow up medication. In this case, more likely to cause hypotension"
  },
  {
    id: 14,
    prompt:
      "A 75 y/o patient with HFrEF presents to his cardiologist for a checkup. He has recently been started on quadruple therapy, but has noticed that he keeps on getting this annoying dry cough ever since being started on the treatment regime. Which of the following correctly describes the mechanism of action of the medication MOST LIKELY behind the dry cough?",
    choices: [
      "Antagonist of angiotensin II receptor 1 ",
      "Inhibits the angiotensin II converting enzyme",
      "Inhibits the mineralocorticoid receptor",
      "Inhibits the SGLT2 transporter in the proximal tubules",
      "Inhibits β2 receptors in the bronchioles",
    ],
    correct:
      "Inhibits the angiotensin II converting enzyme",
    tags: ["PD", "medium", "MoA", "side effects", "Endocrinology", "PK"],
    explain: "TThis question requires understanding a common side effect of ACEis. (B) is the correct answer. Dry cough (and angioedema) are common with ACEi because ACE also mediates the breakdown of bradykinin (vasodilator, increases vascular permeability, response to pain, increase in inflammatory mediators). Therefore, if ACE is inhibited, there will be a buildup of bradykinin leading to a dry cough. (A) is an ARB and would not affect BK levels. (C) would be like spironolactone which we’d see gynecomastia sometimes due to its anti-androgen mechanism. (D) is SGLT2i, we would be more worried about UTIs given the increased excretion of glucose into the urinary tract, thus increasing bacterial growth. (E) would be a nonselective β blocker, which could exacerbate asthma."
  },
  {
    id: 15,
    prompt:
      "Which of the following is NOT a possible effect of carvedilol on the heart?",
    choices: [
      "Decreased calcium and free radical mediated injury",
      "Decreased wall stress via afterload reduction",
      "Increase the threshold for ventricular fibrillation",
      "None of the above (all of the above are possible effects)",
    ],
    correct:
      "None of the above (all of the above are possible effects)",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the pharmacology of carvedilol. The correct answer is (D). All of these are effects of carvedilol. Carvedilol is a nonselective (β1 and β2) β blocker and α1 blocker. (A) is mediated via β1 on cardiomyocytes. Decreased calcium leads to decreased contractility and oxygen demand usage, thus reducing free radicals. (B) is mediated via α1 and some β1 (some inhibition of RAAS and its downstream effects, via reduced renin release at JG cells). Blocking α1 leads to decreased SVR (less vasoconstriction), thus reduced afterload. (C) β1 also mediates electrical conductance in the heart, hence heart rate is decreased. This is due to decreased calcium reducing the required electrical signals for contraction. This also leads to decreased rate of contractions, thus increasing the threshold for VFib because there is an increase in time for the natural pacemaker ability of the heart to control the heart rate versus going into a ventricular fibrillation and ultimately sudden cardiac death if not corrected."
  },
  {
    id: 16,
    prompt:
      "A 60 y/o with HFrEF (NYHA II) is recently started on a medication that is part of his quadruple therapy (1 month ago), but he complains of increasing SoB and fatigue after starting therapy. He tells the doctor that, “the medications don't do much at all, in fact I feel worse than before, so why should I bother taking them!”. Which of the following of his medication could potentially be the cause of this?",
    choices: [
      "Carvedilol",
      "Empagliflozin",
      "Sacubitril/Valsartan",
      "Spironolactone",
      "All of the above, his medications just have not been titrated to the appropriate therapeutic dose ",
    ],
    correct:
      "Carvedilol",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the side effects of β blockers and its time course. In this vignette we are presented with a patient that appears to feel worse from his medication for his HF. His SoB and fatigue is worse than before after starting this new medication. The most likely culprit would be (A). This is because β blockers have a common side effect of fatigue and potentially worsen SoB, especially given that carvedilol is a nonselective β blocker, so β2 receptors will also be blocked in the bronchioles (bronchoconstriction). The fatigue could be due to decreased SNS response. What can occur when starting β blockers is 1-2 months of clinical deterioration due to these side effects. Hence, it's recommended to start with a low dose, then titrated upwards. The long term benefits of β blockers outweigh this initial deterioration because of the positive effects β blockers have on myocardial oxygen supply and demand. β blockers augment many different aspects of supply and demand ratio. These effects are better explained in another question. It’s best we reassure the patient that this is temporary, and we will see an improvement in his clinical picture in the next few months."
  },
  {
    id: 17,
    prompt:
      "Which of the following medications would you expect to cause hyperkalemia?",
    choices: [
      "Dapagliflozin",
      "Ramipril",
      "Sacubitril/Valsartan",
      "B, C",
      "All of the above",
    ],
    correct:
      "B, C",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question requires understanding the mechanisms of SGLT2i, ACEi, and ARNIs. The correct answer is (D). We would expect hyperkalemia with these medications because both medications result in decreased aldosterone, thus we will have decreased K+ excretion. ACEis and ARNIs also result in blocking angiotensin II vasoconstrictive effects on the EFFERENT arteriole, therefore we would see a decrease in GFR, thus less filtration and less delivery of Na+ to the distal tubule to stimulate K+ excretion. See hyperkalemia lecture in MEDD421. We don’t see this in (A)."
  },
  {
    id: 18,
    prompt:
      "Harry Foglifter is a 72-year old man who comes to his family doctor with shortness of breath that has been progressively getting worse over the past 9 months. He tells you that he frequently wakes up gasping for breath in the middle of the night. On physical exam, you recognize bilateral pitting edema. Lab tests confirm an elevated BNP. A cardiology referral results in an echocardiogram confirming HFrEF with an LVEF of 35%. Harry Foglifter should be started on all of the following medications EXCEPT:",
    choices: [
      "Aspirin",
      "Empagliflozin",
      "Metoprolol",
      "Spironolactone",
      "Valsartan + Sacubitril",
    ],
    correct:
      "Aspirin",
    tags: ["PD", "MoA", "medium", "Endocrinology", "Nephrology"],
    explain: "This question examines the pharmacologic management of heart failure. NSAIDs are contraindicated in heart failure as they increase afterload through inhibition of prostaglandins and the resulting vasoconstriction afferent renal arterioles (A). SGLT2 inhibitors decrease preload and afterload through natriuresis (B), however the mechanism behind its benefit in HF is still not fully elucidated. Beta blockers improve heart failure outcomes by inhibiting sympathetic stimulation and optimizng cardiac oxygen supply and demand (C). Mineralocorticoid receptor antagonists decrease preload and afterload by inhibiting sodium reabsorption at the distal tubules and collecting ducts (D). Blocking aldosterone also inhibits negative remodileing such as fibrosis. Valsartan (ARB) and sacubitril (Neprilysin inhibitor), together known as Entresto, decrease afterload by decreasing vasoconstriction of the efferent arteriole and decreasing natriuretic peptide breakdown respectively (E). (E) also decreases preload through promoting naturesis and inhibition of RAAS. Blocking RAAS also inhibits negative remodileing such as fibrosis. (WW Q)"
  },
];
