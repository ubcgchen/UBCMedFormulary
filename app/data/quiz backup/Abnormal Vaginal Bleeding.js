/**
 * Questions for Abnormal Vaginal Bleeding
 * @author Michael Gong, UBC VFMP 2025
 */

export const Abnormal_Vaginal_Bleeding = [
  {
    id: 1,
    prompt:
      "A 26 y/o female patient presents to her GP after not having any menses for the last 9 months. She previously had regular cycles. She has gained some weight over the last yr, her previous BMI was 18 and is now 23. She denies any sexual activity in over a year. She denies facing large stressors in the last couple years. She does recall some galactorrhea a few wks ago. SHe recalls feeling more fatigued, constipated, and cold. She denies any visual changes or headaches. A pelvic exam reveals normal anatomy. Blood tests are ordered and show low end of normal FSH/LH, low end of normal E, negative β-hCG, PRL elevated, TSH elevated. Given this presentation, what medication would treat the most likely underlying cause of amenorrhea in this patient?",
    choices: [
      "Cabergoline",
      "Combined OCP",
      "Estradiol",
      "Levothyroxine",
      "Letrozole",
    ],
    correct: "Levothyroxine",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires understanding pharmacology management in a case of eugonadotropic eugonadism amenorrhea. In this vignette we are presented with a patient with secondary amenorrhea (prior hx of menses and no menses for 3 cycles/6 mos). From history we already have some clues of the underlying etiology. There are signs of high PRL: galactorrhea; and signs of low thyroid: fatigue, weight gain, constipation, cold. She denies mass effect symptoms. Overall other causes are less likely such as the normal anatomy, anorexia, stress, etc.. The blood tests reveal eugonadotropic and eugonadism, r/o pregnancy, and finally high PRL and high TSH. Given this we are most likely to think that our patient has hyperprolactinemia secondary to hypothyroidism, which is leading to her amenorrhea, therefore the underlying etiology should be treated as such by replacing her thyroid hormone with (D). Hypothyroidism can lead to hyperprolactinemia because the lack of T3/T4 leads to high TSH (ant. pituitary) and TRH (hypothalamus). TRH can also stimulate the ant. pituitary to release prolactin, thus causing hyperprolactinemia. It should be noted that hyperprolactinemia and hypothyroidism can cause BOTH eu- and hypogonadotropic/hypogonadism. (A) is a D2 agonist, which will inhibit the release of PRL. If this was primarily a PRL issue such as an adenoma, prolactinoma, then this could be an option. (B) is an option in hypergonadotropic hypogonadism, where you want to replace the end organ hormones like E and P because the ovaries aren’t responding to the LH/FSH. (C) if E is needed to be replaced. (E) is an aromatase inhibitor and an option in PCOS. It is thought to work by blocking estrogen feedback by decreasing estrogen production by inhibiting aromatase, thus leading to increased FSH to increase ovulation probability.",
  },
  {
    id: 2,
    prompt:
      "A 32 y/o patient with amenorrhea is found to have elevated LH/FSH and low E. She has had multiple gynecological surgeries due to multiple abscesses from previous PIDs. She is started on a combined OCP. Which of the following is she LEAST at risk for now?",
    choices: [
      "Cervical Ca",
      "Endometrial Ca",
      "Hepatic adenoma",
      "Myocardial Infarction",
      "None of the above",
    ],
    correct: "Endometrial Ca",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question required understanding the risks of OCPs. In this vignette we are asked for what she is LEAST at risk for now after starting OCPs. First we need to understand that OCPs contain a combination of P and E. In this case our patient is less at risk for endometrial Ca (B). This is because the progestin component will help promote shedding of the uterine wall, thus keeping the estrogen driven effects on uterine growth in check, therefore the P component helps decrease Ca risk. (A) OCP slightly increases the risk of cervical Ca through a mechanism that is not well understood, but is thought to due to E effects on cellular proliferation like the epithelial cells of the cervix. However, P does not counteract this with shedding, in fact it is thought that P may cause some downregulation of immune response against HPV, the main risk factor for cervical Ca. (C) hepatic adenomas are likely due to the E effects on cellular proliferation of hepatocytes. This is a benign tumor. It should be noted that the liver is exposed to OCP like E quite readily given that OCPs undergo heavy enterohepatic circulation. E also increases hepatic cholesterol production, which in turns leads to increased cholesterol excretion into the gallbladder causing increased precipitation of gallstones. (D) MIs because E has some adverse effects on the CV system such as increased clotting, cholesterol and BP. Essentially, the risks of OCP are mostly E mediated, and the P component is protective in most cases.",
  },
  {
    id: 3,
    prompt:
      "A 22 y/o female patient (G1T0P0A0L0) presents to the ER with abnormal bleeding (2 dy hx) and intense nausea and vomiting (2 dy hx and vomits 5x/dy). She is worried about a miscarriage. She denies any pain. She learned about her pregnancy 3 wks ago after using a home pregnancy test and has not connected herself to an Ob/Gyn physician yet. Her LMP was 8 wks ago. A physical exam reveals a uterine fundal height suggesting a GA of 16 wks, blood in the vagina and a closed cervix. Investigations are ordered and show: β-hCG - 120,000 mIU/mL (severely elevated for GA), TSH - low, pelvic U/S - no fetus observed, “snowstorm” appearance. She undergoes further workup incl (renal, CXR, liver enzymes - all normal) and surgical management, which is successful. Given this presentation, what should our patient be started on for the next 12 mos?",
    choices: [
      "Actinomycin D",
      "Depot medroxyprogesterone acetate",
      "Hormonal IUD",
      "Methotrexate",
      "Pharmacological management not indicated following successful surgery",
    ],
    correct: "Depot medroxyprogesterone acetate",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the medical management following a molar pregnancy/Gestational Trophoblastic Neoplasia. In this vignette we are presented with a pregnant patient in her first trimester with large amounts of vomiting and vaginal bleeding. Here we need to think of our DDX for AUB in a pregnant patient such as ectopic, abortion, implantation, etc… Her GA is 8 wks according to LMP, but physical exam suggests 16 wks, which suggests either twins, mass, molar, wrong dates. The β-hCG is severely elevated and the snowstorm appearance on U/S are both indicative of a molar pregnancy. The β-hCG is produced from the abnormal proliferation of trophoblasts. The β-hCG causes nausea/vomiting and low TSH due to similar structure to TSH, thus binding and causing high T4 and its negative feedback loop. Given this she most likely has a complete hydatidiform mole (pelvic U/S snowstorm and absence of fetus), which puts patient at an increased risk of developing gestational trophoblastic neoplasia (GTN). Following surgery we will need to follow this patient’s  β-hCG to assess the risk of developing GTN and start her on contraception. The best one in this case is (B) depot medroxyprogesterone acetate or an OCP. We do this to avoid any confusion with rises in β-hCG, which will occur in a pregnancy. We tend to avoid (C) IUDs in case tehre is an invasive mole as this could lead to an uterine perforation. If our patient does end up developing GTN, then we’d consider using (A) or (D) as chemotherapy.",
  },
  {
    id: 4,
    prompt:
      "Which of the following drugs is NOT an expected iatrogenic cause of abnormal uterine bleeding?",
    choices: [
      "Aspirin",
      "Fluoxetine",
      "Progesterone",
      "Tamoxifen",
      "Tranexamic acid",
    ],
    correct: "Tranexamic acid",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the iatrogenic causes of AUB. In this case (E) would not be expected to cause AUB, in fact it is a treatment option in some cases. TXA is an antifibrinolytic, which acts by inhibiting the activation of plasminogen into plasmin by binding to lysine residues. This will lead to stabilization of blood clots. (A) ASA, despite being a NSAID, can cause AUB by inhibiting TXA2 production, leading to decreased activity of PLTs, thus less platelet plug formation. It is thought that ASA use is more prone to bleeding due to its irreversible inhibition of COX enzymes, while other NSAIDs have reversible inhibition of COX. (B) is a SSRI and is thought to play a role in bleeding due to hormonal changes with E and P, but also interfering with the 5-HT in platelet activation and v/c. By inhibiting reuptake of 5-HT into PLT, there is less PLT hemostatic activation. (C) because it causes breakthrough bleeding with shedding of the endometrium, however this is also a protective factor in preventing AUB.  (D) is a selective estrogen receptor modulator (remember raloxifene?), where it has estrogenic effects in endometrial tissue (but anti-estrogen in breast tissue). Thus, it causes abnormal uterine lining growth and thickening, putting the patient more at risk of AUB. This is also why tamoxifen use is a risk factor for endometrial cancer. So the causes of AUB in terms of pharmacology can be summarized by affecting clotting, hormones, or enlarging the uterine wall.",
  },
  {
    id: 5,
    prompt:
      "Which of the following most correctly describes how NSAIDs may be helpful in ovulatory abnormal uterine bleeding?",
    choices: [
      "Alters prostaglandins (PG) balance to favor PGF2α resulting in v/c and increased PLT aggregation",
      "Alters prostaglandins (PG) balance to favor PGF2α resulting in v/d and increased PLT aggregation",
      "Alters prostaglandins (PG) balance to favor PGI2 and PGE2 resulting in v/c and increased PLT aggregation",
      "Alters prostaglandins (PG) balance to favor PGI2 and PGE2 resulting in v/d and decreased PLT aggregation",
      "Inhibits PG production resulting in vasoconstriction of uterine vessels via increased endothelin 1",
    ],
    correct:
      "Alters prostaglandins (PG) balance to favor PGF2α resulting in v/c and increased PLT aggregation",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the mechanism of NSAIDs in AUB. The correct explanation is (A). PGF2α is the prostaglandin that mostly causes contractions in smooth muscle, essentially each type of PG has a propensity to bind to different prostaglandin receptors, which have different GCRP, thus altering its downstream effect on the cell. Some of these receptors will lead to less Ca, or more Ca in the cell, thus causing vasodilation or vasoconstriction. In general, PGE and PGI tend to vasodilate, and PGF tends to vasoconstrict. NSAIDs work by altering the balance in PG production. In some patients, their AUB maybe due to excessive amounts of PGI and PGE, thus inhibiting the production of PG with NSAIDs via the COX enzyme, may tip the balance in favor of PGF to allow for clotting. NSAIDs play no role in endothelin 1, a potent vasoconstrictor (E).",
  },
  {
    id: 6,
    prompt:
      "A 56 y/o female in perimenopause is experiencing hot flashes, night sweats, and increased heart rate. Which of the following is the least effective treatment (in terms of efficacy; i.e. ignore safety) option for this patient?",
    choices: [
      "Ethinyl estradiol",
      "Estradiol",
      "Combined estrogen-progesterone",
      "Progestin",
    ],
    correct: "Progestin",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the treatment of perimenopausal vasomotor symptoms. These symptoms are caused by the changes in hormones, especially the drop in estrogen levels. Therefore, the least effective option would be (D) progestin as this does not contain any estrogen. However, we do not use (A) or we try not to use estrogen by itself in treating premenopausal/postmenopausal symptoms because of the associated risk with endometrial hyperplasia leading to endometrial Ca. We try to administer estrogen with progesterone for the prevention of hyperplasia. This question however is assessing the efficacy (not safety), you can have a drug with great efficacy for a condition, but have a terrible therapeutic index that causes harm. Many times medications are given with the risk benefit ratio in mind and in this case synthetic estrogen alone would have a poor risk benefit ratio. Some non hormonal options would include venlafaxine (SNRI), clonidine (α2 agonist; decrease SNS outflow), paroxetine (SSRI). ",
  },
  {
    id: 7,
    prompt:
      "Which of the following patients would oral hormone (estrogen) therapy most likely be indicated in (Assume no CV risk factors or breast Ca hx unless stated)?",
    choices: [
      "Emma - 38 y/o with stage II endometrial Ca (ER+, PR+) → treated with total hysterectomy + bilateral salpingo-oophorectomy",
      "Iga - 46 y/o undergoing menopause, asymptomatic",
      "Leylah - 38 y/o with primary ovarian insufficiency with a hx of VTE during pregnancy and takes sumatriptan for an unspecified headache disorder",
      "Serena - 53 y/o post menopause with DEXA scan showing -3.0 femoral neck score, prior breast Ca → treated with partial mastectomy",
      "Venus - 58 y/o postmenopause with abnormal uterine bleeding secondary to vaginal atrophy",
    ],
    correct:
      "Emma - 38 y/o with stage II endometrial Ca (ER+, PR+) → treated with total hysterectomy + bilateral salpingo-oophorectomy",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the indications and contraindications for oral estrogen therapy. The patient that would be most likely indicated for oral hormone replacement therapy is Emma (A). This is because she has undergone a total hysterectomy and BSO, which means that she will not have any ovaries, thus will not be able to produce estrogen and will need estrogen therapy to replace the loss of production. Despite the ER+ endometrial Ca, it was Stage II and a total hysterectomy, thus she is not at risk for recurrence of endometrial cancer. (B) would not be indicated because she is asymptomatic, the risk of estrogen therapy would be much higher than any benefit. (C) would not be indicated given her history of VTE and she possibly has migraines given her sumatriptan use, both of which are risk factors of estrogen therapy: increased clotting. (D) would not be indicated despite the osteoporosis diagnosis, she has a history of breast Ca, and estrogen therapy would put her for increased risk of recurrence. (E) would not be indicated for ORAL estrogen therapy. Vaginal atrophy is better treated topically with an estrogen cream to minimize the systemic exposure of estrogen and reduce its risks. An oral RoA would most definitely have risks that outweigh benefits.",
  },
  {
    id: 8,
    prompt:
      "A 40 y/o patient with primary ovarian insufficiency presents to her Ob/Gyn. If you want to achieve the same effect with the 4 options, then which of the following correctly outlines the required dose from lowest to highest?",
    choices: [
      "Estrone < estriol < estradiol < ethinyl estradiol",
      "Estriol < estrone < estradiol < ethinyl estradiol",
      "Estriol < estrone < ethinyl estradiol < estradiol",
      "Ethinyl estradiol < estradiol < estrone < estriol",
      "Ethinyl estradiol < estriol < estrone < estradiol",
    ],
    correct: "Ethinyl estradiol < estradiol < estrone < estriol",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the potencies of different estrogens. The most potent estrogen is ethinyl estradiol, it is 100x more potent than estradiol. This is the form that is usually found in OCPs and not in hormone therapy options. It is also a synthetic form. The next most potent is estradiol, which is the most potent naturally occurring estrogen. This is followed by estrone, then estriol. The more potent, the lower the dose is required to achieve the same effect. Therefore, the correct answer is (D), which essentially outlines the potency in decreasing order from left to right.",
  },
  {
    id: 9,
    prompt:
      "A 32 y/o female patient is referred to Ob/Gyn for 4 mo history of abnormal vaginal bleeding outside of her cycle and pain during intercourse. Her PMHx is significant for T2DM. Her BMI is 22. She has had no previous pregnancy. She does recall unintentional weight loss in the last few months. β-hCG is negative. Office biopsy is done and a sample is sent to pathology. Pathology reports a grade 1 endometrioid adenocarcinoma. An MRI is ordered to assess the spread. The patient asks if she is eligible for fertility-sparing treatment, which you reply with:",
    choices: [
      "No, only grade 0 endometrioid adenocarcinoma can be treated medically",
      "No, endometrioid adenocarcinoma is aggressive and must be treated surgically with a hysterectomy and ideally a BSO",
      "Yes, we can try progesterone releasing IUD even if there are signs of invasion on MRI",
      "Yes, we can try medroxyprogesterone acetate, if there are no signs of invasion on MRI",
      "Yes, we can try combined OCP, if there are no signs of invasion on MRI and no contraindications to estrogen",
    ],
    correct:
      "Yes, we can try medroxyprogesterone acetate, if there are no signs of invasion on MRI",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the indications for fertility-sparing treatment for endometrial Ca. The conditions for fertility sparing treatment in endometrial Ca are: Grade 1 endometrioid tumors with no myometrial invasion on MRI (rule out (A), (C), and (B)). (E) would not be a smart idea because OCPs contain E, and if this was an ER+ Ca, then we will be causing more growth. Therefore, (D) is the correct answer. The medical management options include high dose progestins such as medroxyprogesterone acetate, megestrol, progestin releasing IUD. The high dose of progesterone can help glandular differentiation and decidualization of the endometrium, thus allowing for atrophy and regression. These options work best in low grade and well-differentiated tumors. ",
  },
  {
    id: 10,
    prompt:
      "You are at an Ob/Gyn clinic and the waiting room is filled with patients that are indicated for hormone therapy. Your preceptor asks you to review the charts and tell her which patients should receive transdermal hormone therapy over oral. Assuming patient congruence, from the list you select?",
    choices: [
      "Jennie - PMHx: Celiac disease",
      "Jisoo - Sgx Hx: Cholecystectomy",
      "Lalisa - PMHx: Familial hypercholesterolemia",
      "Rose - Social Hx: ER doctor with 50:50 day and night shifts",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding the indications of hormone therapy, specifically transdermal hormone therapy. Transdermal estrogen is considered a safer option than oral estrogen because it bypasses first pass metabolism. This allows for lower doses since first-pass does not need to be accounted for, thus decreased adverse effects. Bypassing the first pass also reduces the exposure of estrogen to the liver, which has adverse effects such as inflammatory and clotting factor production, and impacting cholesterol metabolism. First pass metabolism also increases estrogen metabolites that are then excreted into the bile, which could affect the gallbladder. (A) has Celiac disease, which is a malabsorptive disorder. This could potentially lead to decreased absorption of estrogen, thus decreased effectiveness of treatment. (B) has evidence of gallbladder disease, which would suggest transdermal estrogen. Despite having her gallbladder removed, she could still form stones in the ducts. Essentially given this bare history she potentially has an underlying gallbladder dz given the cholecystectomy, and transdermal estrogen would be safer. (C) has high cholesterol levels, which suggests that transdermal would be a safer option to reduce her CV risk. This is due to  (D) Shift work is another potential reason to go transdermal over oral. The reasons include convenience (ideally you take your dose at the same time everyday, might be hard with shift work), and the changes to circadian rhythm and its downstream effects on metabolism and hormone levels. In short, (E) is the correct answer as all the patients have medical reasons to go on transdermal estrogen over oral. However, all of this would still be dependent on patient preference.",
  },
];
