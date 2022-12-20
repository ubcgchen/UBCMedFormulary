export const heartMurmur = [
    {
        "id" : 1,
        "prompt" : "A 63 y/o patient with a long history of cardiovascular issues and risk factors presents to the CTU with biventricular heart failure and is severely short of breath. Some of his vitals are BP 180/100, and HR 120. Bilateral crackles are auscultated at the base of the lungs and the internist notes severe pitting edema at the lower extremities. An echocardiogram notes an ejection fraction of <30%. The internist orders IV furosemide. How will furosemide be helpful in this case?",
        "choices": [
            "Furosemide will increase preload by venodilation and decreasing Na\u207A reabsorption. This will shift the Frank-Starling curve to the left, thus improving stroke volume and pump function.",
            "Furosemide will increase preload by venodilation and decreasing Na\u207A reabsorption. This will shift the Frank-Starling curve to the right, thus improving stroke volume and pump function.",
            "Furosemide will reduce preload by venodilation and decreasing Na\u207A reabsorption. This will shift the Frank-Starling curve to the left, thus improving stroke volume and pump function.", 
            "Furosemide will reduce preload by venodilation and decreasing Na\u207A reabsorption. This will shift the Frank-Starling curve to the right, thus improving stroke volume and pump function.",
            "Furosemide will not be helpful in this case."],
        "correct": "Furosemide will reduce preload by venodilation and decreasing Na\u207A reabsorption. This will shift the Frank-Starling curve to the left, thus improving stroke volume and pump function.",
        "tags":["medium","Cardiology","MoA","PD"],
        explain: "This question requires understanding the mechanism of furosemide and the Frank-Starling curve. In this vignette, we are presented with a patient with pulmonary edema, SoB, peripheral edema, hypertension, and an ejection fraction <30%, which are all signs of biventricular heart failure. The Frank-Starling curve is the relationship between left ventricular end diastolic pressure (LVEDP or PRELOAD; x-axis) and stroke volume (SV; y-axis). Initially, an increase in preload will increase stroke volume (makes sense because the more volume in the heart, the more can be pumped out). However if the preload gets too high, the stroke volume will plateau and then decrease (if there’s too much fluid, the heart will have a harder time pumping it out - like an overfilled water balloon). The heart can’t pump adequately enough for the body. This leads to a buildup of fluid in the venous system like the pulmonary circulation in left sided failure (pulmonary edema), or in the peripheral limbs such as the legs due to gravity in right sided failure. This is what we call congestive heart failure. Therefore, we want to shift the Frank-Starling curve to the LEFT, by reducing preload. Furosemide can do this by venodilation (decrease venous return to heart), and reduce volume through diuresis (Na+ and H2O excretion). Both will reduce preload, and allow the stroke volume and heart function to improve. Hence, (C) is the correct answer."
    },
    {
        "id" : 2,
        "prompt" : "Baby Will, a 4 month old infant, born preterm to a healthy 30 y/o woman with an unremarkable prenatal history, presents for a check up. Baby Will’s mother notes that Baby Will sweats profusely while feeding. On examination, it is noted that Baby Will’s weight is in the 15th percentile, his HR and RR are both slightly elevated, and his BP is 94/36. Auscultation reveals a continuous machinery murmur throughout systole and diastole. In this case, Baby Will most likely has a congenital heart defect that can be treated medically with which of the following drugs?",
        "choices": [
            "Alprostadil",
            "Indomethacin",
            "Furosemide", 
            "Prostacyclin",
            "His condition can not be treated medically"],
        "correct": "Indomethacin",
        "tags":["PD","medium","Cardiology","Pediatrics"],
        explain: "This question requires understanding PDA and the medical intervention for it. In this vignette, we are presented with a preterm baby with a suspected patent ductus arteriosus (PDA). We suspect PDA given his increased exertion (sweating while feeding), failure to thrive (weight), elevated HR and RR, widened pulse pressure (diastolic abnormally low), and a continuous machinery murmur throughout both systole and diastole (abnormal flow). In PDA (without Eisenmenger Syndrome), there is left to right shunt from the aorta to the pulmonary circulation, hence there is decreased delivery of blood to the rest of the body. Therefore, for baby Will, we want to close the PDA. The patency is maintained by prostaglandins (PGE subtype), hence if we inhibit the production of prostaglandins, the PDA should close. (B) Indomethacin is the correct answer because it is a NSAID, which will inhibit the COX pathway, thus inhibiting prostaglandin production. Preterm babies with PDAs can be treated medically, while full term babies are usually treated surgically."
    },
   {
        "id" : 3,
        "prompt" : "A neonate is rushed to the NICU following an uncomplicated vaginal delivery. He presents with central and peripheral cyanosis, shortness of breath, and weak pulses. An echocardiogram is ordered and shows the aorta coming out of the right ventricle, and no ventricular or atrial septal defect. Surgery is scheduled to fix the congenital heart defect, but in the meantime the neonatal intensivist administers a drug. What drug would the neonatal intensivist order to maintain mixing of pulmonary and systemic circulation before corrective surgery can be performed?",
        "choices": [
            "Alprostadil",
            "Furosemide",
            "Indomethacin", 
            "Prostacyclin"],
        "correct": "Alprostadil",
        "tags":["PD","medium","Cardiology","Pediatrics"],
        explain: "This question requires understanding management of congenital heart defects. In this vignette, we are presented with a neonate with a transposition of the great arteries (TGA) - the echocardiogram showed the aorta arising from the right ventricle. This is a cyanotic congenital heart defect and not compatible with life unless there is a shunt such as a PDA or septal defect that allows mixing of blood from the pulmonary circulation to the right side for systemic circulation. Therefore, it is imperative to maintain a patent ductus arteriosus (PDA) to allow for this mixing to occur. However, the PDA closes within a few days following birth when there is a drop in prostaglandin production (PGEs maintain the PDA). Hence, the correct answer is (A) alprostadil, a PGE1 analogue, which will keep the PDA open to keep the neonate alive before corrective surgery can be performed."
    }, 
]
