export const hypertension = [
    {
        "id" : 1,
        "prompt" : "Which of the following anti-hypertensive is correctly matched to its class?",
        "choices": [
            "Aliskiren - vasodilator",
            "Captopril - angiotensin II receptor 1 blocker",
            "Clonidine - α1 blocker", 
            "Diltiazem - Ca\u00b2\u207a channel inhibitor",
            "Hydralazine - renin inhibitor",
            "Losartan - angiotensin converting enzyme inhibitor",
            "Terazosin - α2 agonist"],
        "correct": "Diltiazem - Ca\u00b2\u207a channel inhibitor",
        "tags":["PD","easy","MoA","SNS","Cardiology"],
        explain: "This question requires recognizing the different classes of antihypertensives and an example. The correct matches are: Aliskiren - renin inhibitor; Captopril - angiotensin converting enzyme inhibitor (ACEi); Clonidine - α2 agonist; Diltiazem - CCB; Hydralazine - vasodilator; Losartan - angiotensin II receptor 1 blocker (ARB); Terazosin - α1 blocker. A way to remember some of these is: AliskiREN = RENin;  -pril = ACEi; -sartan = ARB; -zosin = α1 blocker."
    },
    {
        "id" : 2,
        "prompt" : "A 63 y/o patient with a history of dyslipidemia and hypertension presents to the cardiology clinic. Through a special technique it is found that the endothelial layer of his right brachial artery is severely damaged, but the vascular smooth muscle is intact. Assuming you can locally inject vasodilators like acetylcholine and histamine, predict the resulting vasodilatory response and why?",
        "choices": [
            "Decreased vasodilatory response to both vasodilators due to decreased nitric oxide mediated smooth muscle relaxation",
            "Decreased vasodilatory response to both vasodilators due to the increased patency from the loss of the endothelium layer",
            "Increased vasodilatory response to acetylcholine only due to direct activity on vascular smooth muscle to increase in nitric oxide production", 
            "Normal vasodilatory response to both vasodilators due to direct increase in nitric oxide production in vascular smooth muscle"],
        "correct": "Decreased vasodilatory response to both vasodilators due to decreased nitric oxide mediated smooth muscle relaxation",
        "tags":["PD","medium","Cardiology"],
        explain: "This question requires understanding endothelial function. We are asked to predict whether the addition of vasodilators will have an effect on the vasodilatory response when the endothelial layer is damaged. The correct answer is (A) because the main endogenous mediator of vasodilation is nitric oxide (NO), which is produced from the endothelial layer following activation via receptors on the endothelial layer such as muscarinic, histamine, bradykinin receptors or shear stress from blood flow. NO then diffuses to the media layer (smooth muscle) to activate guanylate cyclase to increase cGMP. This leads to vasodilation. Hence, if the endothelial layer is damaged, then less NO is produced to vasodilate, so any vasodilators that work through receptors on the endothelial layer will be affected. Receptors that are directly on smooth muscle cells like β2 receptors will not be affected by this. This highlights the importance of the endothelial layer in cardiovascular health."
    },
   {
        "id" : 3,
        "prompt" : "A 42 y/o patient who just underwent a gender affirming surgery (male transitioning to female) is diagnosed with hypertension. On her medication list is spironolactone and estrogen. Which of the following medications would you prescribe for her hypertension?",
        "choices": [
            "Amiloride",
            "Captopril",
            "Hydrochlorothiazide", 
            "Losartan"],
        "correct": "Hydrochlorothiazide",
        "tags":["PD","MoA","hard","Cardiology","Nephrology","side effects","Endocrinology"],
        explain: "This question requires understanding drug interactions, MoA and adverse effects of different antihypertensives. In this vignette, we are presented with a patient with HTN on spironolactone and estrogen, and asked to prescribe an antihypertensive. We need to recognize drug interaction with her medication, which in this case is spironolactone, a potassium sparing diuretic. Hence, any drugs that may increase K+ levels should be avoided to prevent hyperkalemia. This rules out (A) because amiloride is also a potassium sparing diuretic. Drugs that inhibit RAAS such as captopril (B; ACEi) and losartan (D; ARB) can be ruled out as well because both drugs result in decreased aldosterone secretion, leading to decreased loss of potassium, which can result in hyperkalemia in combination with a K+-sparing diuretic (aldosterone causes potassium loss, but its secretion is inhibited by ACEi and ARBs). The correct answer is (C) because hydrochlorothiazide (HCTZ) is a diuretic that results in loss of K+, and this could balance out the effect of spironolactone on K+ levels, in fact HCTZ and spironolactone are sometimes formulated together. Moreover, HCTZ is a first-line anti-HTN and has the best evidence in lowering BP."
    },  
    {
        "id" : 4,
        "prompt" : "Which of the following is NOT an effect of antihypertensives that target the RAAS?",
        "choices": [
            "Decrease cardiac contractility",
            "Decrease sympathetic nerve activity",
            "Inhibit aldosterone secretion", 
            "Inhibit Na\u207a reabsorption",
            "Inhibit vasoconstriction"],
        "correct": "Decrease cardiac contractility",
        "tags":["PD","medium","MoA","Cardiology"],
        explain: "This question requires understanding the different effects of drugs targeting RAAS. The question can be answered by understanding the effects of angiotensin II (and flipping the effect since it will be inhibited), or remembering the effects of the drugs (renin inhibitors, ARBs, ACEi). (A) is the correct answer because angiotensin II does not have a direct effect on cardiac contractility. The presence of angiotensin receptors (AT1) on cardiac tissue does not mediate its contractility, but rather cardiac remodeling such as hypertrophy and fibrosis. (B) is incorrect because AT1 is found in nerves involved with SNS and the adrenal medulla (NE, E secretion), hence inhibition of RAAS will lead to decreased SNS activity. (C) is wrong because angiotensin II causes aldosterone secretion, which will be inhibited. (D) is wrong because angiotensin II directly increases Na+ reabsorption and aldosterone secretion, hence both will be inhibited. (E) is wrong because AT1 receptors mediate vasoconstriction, which will also be inhibited. This question helps highlight using pharmacology to understand physiology and vice versa."
    },
  {
        "id" : 5,
        "prompt" : "A 56 y/o patient recently diagnosed with HTN presents to the clinic with a dry cough and angioedema. He was recently put on a new medication for his hypertension. What is the identity of the drug and what drug that works in the same system would you switch him to?",
        "choices": [
            "Captopril. Switch to losartan",
            "Captopril. Switch to metoprolol",
            "Losartan. Switch to captopril", 
            "Losartan. Switch to metoprolol",
            "Metoprolol. Switch to captopril"],
        "correct": "Captopril. Switch to losartan",
        "tags":["PD","easy","side effects","Cardiology"],
        explain: "This question requires understanding a common side effect of ACEi use. In this vignette, we have a patient with a dry cough and angioedema. These are common side effects of ACEi (~10% dry cough). Hence, we know that his original drug was captopril. We are then asked to switch his drug to one that acts in the same system, which in this case is RAAS. Therefore, losartan would be a valid choice since it is an ARB and has less dry cough and angioedema. This is why (A) is the correct answer. Dry cough and angioedema is more common in ACEi because ACE also mediates the breakdown of bradykinin (vasodilator, increases vascular permeability, response to pain, increase in inflammatory mediators). Therefore, if ACE is inhibited, there will be a buildup of bradykinin leading to a dry cough and angioedema."
    },
{
        "id" : 6,
        "prompt" : "Which of the following is true regarding medications involved in RAAS",
        "choices": [
            "Ramipril has a vasodilatory effect mediated by decreased bradykinin breakdown",
            "Ramipril is a renin inhibitor, while valsartan is an angiotensin II receptor type 1 blocker",
            "Ramipril is an ACE inhibitor, while valsartan is an angiotensin II receptor type 2 blocker", 
            "Valsartan and ramipril are recommended in patients with renal artery stenosis and HTN"],
        "correct": "Ramipril has a vasodilatory effect mediated by decreased bradykinin breakdown",
        "tags":["PD","easy","MoA","Cardiology"],
        explain: "This question requires understanding the difference between ACE inhibitors and ARBs. First, ramipril is an ACEi (-pril) and valsartan is an ARB (-sartan). (A) is the correct answer because inhibiting ACE leads to decreased breakdown of bradykinin, which has vasodilatory effects, but also the culprit in ACEi side effects. This is something that ARBs do not have. (C) is wrong because valsartan is an AngII type 1 receptor blocker. (D) is wrong because both ACEi and ARBs are contraindicated in renal artery stenosis due to dilation of the efferent arteriole. This can precipitate acute renal failure because AngII is important in maintaining GFR in low renal perfusion states like renal artery stenosis."
    }, 
{
        "id" : 7,
        "prompt" : "Ishraq is a 50 y/o patient with type 2 diabetes mellitus and hypertension presents to the nephrology clinic after a recent diagnosis of early stage diabetic nephropathy (progressive damage to the kidneys) after increased albumin was found in his urine (microalbuminuria). The nephrologist suggests that the patient’s medication should be switched from amlodipine to an ACE inhibitor (ACEi) to help slow down the progression of his kidney disease. Is this an appropriate intervention, why or why not?",
        "choices": [
            "No, ACEi are contraindicated in any renal disease",
            "No, ACEi are not as efficacious as amlodipine in treating hypertension, thus more blood pressure mediated damage to the kidneys will occur",
            "Yes, ACEi will lead to efferent arteriole vasodilation, which will reduce intraglomerular pressure, thus protecting the glomerulus", 
            "Yes, ACEi are more efficacious than amlodipine in treating hypertension, thus less blood pressure mediated damage to the kidneys will occur"],
        "correct": "Yes, ACEi will lead to efferent arteriole vasodilation, which will reduce intraglomerular pressure, thus protecting the glomerulus",
        "tags":["PD","hard","MoA","Cardiology","Nephrology","Endocrinology","Diabetes"],
        explain: "This question requires understanding ACEi mechanism and T2DM pathophysiology. In this vignette, we are presented with a patient with HTN (managed with a CCB) and T2DM with nephropathy. Studies have shown that HTN patients with comorbidities like T2DM are best treated with ACEi. This is because ACEi usage leads to decreased AngII, which leads to increased dilation of the efferent arteriole, thus reducing intraglomerular pressure. This protects the glomerulus and reduces changes to it that lead to progressive renal dysfunction. This also helps reduce the filtration of albumin into the urine. Hence (C) best explains the renoprotective effects of ACEi in patients with T2DM and HTN."
    }, 
{
        "id" : 8,
        "prompt" : "What differentiates the mechanism of actions of amlodipine, verapamil, and diltiazem?",
        "choices": [
            "Amlodipine blocks cardiac and vascular Ca\u00b2\u207a channels, while verapamil and diltiazem primarily block vascular Ca\u00b2\u207a channels",
            "Amlodipine primarily blocks vascular Ca\u00b2\u207a channels, while verapamil and diltiazem block cardiac and vascular Ca\u00b2\u207a channels",
            "Dilitazem blocks cardiac and vascular Ca\u00b2\u207a channels, while verapamil and amlodipine primarily block vascular Ca\u00b2\u207a channels", 
            "Verapamil blocks cardiac and vascular Ca\u00b2\u207a channels, while amlodipine and diltiazem primarily block vascular Ca\u00b2\u207a channels",
            "Verapamil primarily blocks vascular Ca\u00b2\u207a channels, while amlodipine and diltiazem block cardiac and vascular Ca\u00b2\u207a channels"],
        "correct": "Amlodipine primarily blocks vascular Ca\u00b2\u207a channels, while verapamil and diltiazem block cardiac and vascular Ca\u00b2\u207a channels",
        "tags":["PD","medium","MoA","Cardiology"],
        explain: "This question requires understanding the different calcium channel blockers (CCB). The correct answer is (B). Amlodipine (-dipine; e.g. nifedipine) is a dihydropyridine (DHP) and primarily blocks vascular calcium channels, thus most of its action is mediated via reducing SVR. Diltiazem (-tiaz-) and verapamil (-amil) are non-DHPs and block cardiac and vascular calcium channels (cardiac > vascular), hence their action is mediated via SVR reduction and decreased HR and contractility. Based on their mechanisms we can infer that DHPs tend to have more reflex tachycardia, hence patients with conditions worsened by tachycardia (aortic stenosis) should not be on DHPs. Patients with conditions that decrease cardiac function (conduction disorders, acute heart failure) should not be on non-DHPs, given their effect on reducing contractility and HR."
    },
{
        "id" : 9,
        "prompt" : "A 72 y/o patient with hypertension, asthma, and idiopathic bradycardia presents to the clinic to change his HTN medication. He has had trouble tolerating the side effects of ACEi, ARB, α1 blockers, diuretics, CCBs, and vasodilators. The only class left are the β-blockers, but your preceptor is apprehensive in prescribing one given his comorbidities. Using your knowledge of pharmacodynamics, which β-blocker would you suggest?",
        "choices": [
            "Acebutolol",
            "Carvedilol", 
            "Metoprolol",
            "Propranolol"],
        "correct": "Acebutolol",
        "tags":["PD","medium","MoA","Cardiology","side effects"],
        explain: "This question requires understanding the different β-blockers and their contraindications. In this vignette, we are presented with a patient with asthma, HTN, and bradycardia. We know that β-blockers should be avoided in this case given the asthma and bradycardia. However, if we had to give a  β-blocker in this case, then the best one would be a cardio-selective and a partial agonist, which in this case is (A) acebutolol. This is because the partial SNS activity will still allow some level of cardiac activity to be maintained, while still slightly reducing his cardiac output to lower his blood pressure. This is not ideal, but is the best pharmacological option we have given this fictional scenario. We want a cardio-selective agent because we want to avoid off-target β2 blocking, which could exacerbate his asthma. (C) is a selective β1 blockers (though might still have off-target β2 blocking), (B) is a nonselective α and β blocker, and (D) is a nonselective β blocker."
    },
{
        "id" : 10,
        "prompt" : "Which of the following drugs would you expect to have reflex tachycardia?",
        "choices": [
            "Clonidine",
            "Hydralazine",
            "Labetalol", 
            "Propranolol",
            "C and D"],
        "correct": "Hydralazine",
        "tags":["PD","medium","MoA","Cardiology","side effects"],
        explain: "This question requires understanding the baroreceptor reflex and the mechanisms of antihypertensive medications. (B) Hydralazine is the most likely drug in this list to cause reflex tachycardia due to the baroreceptor reflex. Hydralazine is a direct vasodilator, thus it decreases blood pressure by decreasing SVR - with no effect on the heart. The decrease in blood pressure is detected by baroreceptors in the aortic and carotid sinus, which will send an afferent signal via the vagus nerve to the medulla, where an efferent signal via the sympathetic pathway is sent to the heart to  increase heart rate and contractility (increase cardiac output). (A) Clonidine, is an α2 agonist, which will decrease sympathetic nerve discharge, so no tachycardia (this is why prazosin - selective α1 blocker - has less reflex tachycardia than a non-selective α blocker like phentolamine). (C) Labetalol is a non-selective adrenergic receptor blocker (blocks both α and β), so even though we would expect some reflect tachycardia due to α1 blockade, there is β1 blockade occurring, which will prevent increased HR. (D) Propranolol is a β blocker, so we would NOT expect reflex tachycardia due to β1 antagonism."
    },   
{
        "id" : 11,
        "prompt" : "A 73 y/o patient with well controlled hypertension forgets to take his hypertension medication for a few days. Suddenly his blood pressure skyrockets and he is seen in the ER, where he is observed and treated before being discharged. Which of the following is most likely the anti-hypertensive medication that he stopped taking?",
        "choices": [
            "Aliskiren",
            "Captopril",
            "Carvedilol", 
            "Hydralazine",
            "Losartan"],
        "correct": "Carvedilol",
        "tags":["PD","medium","MoA","Cardiology","side effects"],
        explain: "This question requires understanding the mechanisms of the antihypertensives and the sympathetic nervous system (SNS. In this vignette, we are presented with a patient with rebound hypertension after he stopped taking his anti-hypertensive medication. (C) Carvedilol is the most likely drug to cause this because it is the only drug in the list that directly blocks SNS via nonselective β blockade and α1 blockade. Drugs that block SNS (β blockers, α2 agonists) are more likely to have rebound hypertension. It is suggested that long-term blocking of β receptors makes them more sensitive to agonist stimulation, while for α2 agonists, there is a downregulation of α2 receptors, hence an increase in SNS following discontinuation. It is also suggested that given the decrease in BP, there is a compensatory increase in SNS, but the effects are not seen due to β blockade (or α2 stimulation), hence sudden removal of the drugs allows the increased SNS activity to have an effect. (A), (B), (E) target RAAS and (D) is a direct vasodilator, which are all less likely to cause rebound HTN."
    },   
{
        "id" : 12,
        "prompt" : "A 32 y/o pregnant patient G3T1P1 presents to the ER with a severe headache, blurred vision, retrosternal pain, and confusion. Some vitals are BP 184/120, T 37.3 \u00b0C, HR 95, RR 25. A urine dipstick for protein is performed and it comes back positive for proteinuria. Being an astute medical student, you recognize the presentation as preeclampsia. Which of the following drugs could you use to lower the patient’s blood pressure?",
        "choices": [
            "Captopril",
            "Furosemide",
            "Labetalol", 
            "Losartan",
            "Nifedipine",
            "C and E"],
        "correct": "C and E",
        "tags":["PD","hard","Cardiology","side effects","Ob/Gyn"],
        explain: "This question requires understanding the antihypertensives that are safe to use in pregnancy. (F) Labetalol and nifedipine are the two drugs out of the choices that are used in pregnant patients. (A) Captopril is an ACEi, which is teratogenic. (D) Losartan, an ARB, also affects RAAS and is avoided as well in pregnancy. This could be due to increased expression of angiotensin 2 receptor type 2 in fetal tissue. (B) Furosemide can actually be used in pregnant patients, but the benefits must outweigh the risks. Some studies have shown increased maternal deaths with furosemide."
    },
{
        "id" : 13,
        "prompt" : "How does prazosin cause orthostatic hypotension (OH)?",
        "choices": [
            "Activating α2 adrenergic receptor decreases SNS outflow, which prevents the reflexive increase in HR and peripheral vasoconstriction to overcome OH",
            "Activating α2 adrenergic receptor inhibits vaso and venoconstriction causing reduced venous return, cardiac output, and peripheral vasoconstriction to overcome OH",
            "Inhibiting α1 adrenergic receptor decreases SNS outflow, which prevents the reflexive increase in HR and peripheral vasoconstriction to overcome OH", 
            "Inhibiting α1 adrenergic receptor  inhibits vaso and venoconstriction causing reduced venous return, cardiac output, and peripheral vasoconstriction to overcome OH"],
        "correct": "Inhibiting α1 adrenergic receptor  inhibits vaso and venoconstriction causing reduced venous return, cardiac output, and peripheral vasoconstriction to overcome OH",
        "tags":["PD","medium","MoA","Cardiology","side effects","SNS"],
        explain: "This question requires understanding cardiovascular physiology and a side effect of α1 adrenergic receptor antagonists. Prazosin is an α1 blocker, so it inhibits vasoconstriction of both arterioles and veins. The inhibition of arteriole vasoconstriction, allows a decrease in SVR, but venoconstriction leads to decreased venous return to the heart. The venous system requires some tension for blood to return to the heart. This results in decreased preload, which leads to less blood being pumped back into circulation.  This and the force of gravity when there is a sudden change to an upright posture, leads to decreased blood flow to the brain, which causes dizziness. The drop in blood pressure is detected by baroreceptors, which leads to an increase in SNS, but due to the inhibition of peripheral vasoconstriction the hypotension can persist. Hence, (D) is the correct answer."
    },         
]