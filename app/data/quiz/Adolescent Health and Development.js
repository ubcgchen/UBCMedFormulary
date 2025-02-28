/**
 * Questions for Adolescent Health and Development
 * @author Michael Gong, UBC VFMP 2025
 */

export const Adolescent_Health_and_Development = [
  {
    id: 1,
    prompt:
      "A 16 y/o female patient presents to the clinic with profuse frothy yellowish to greenish coloured vaginal discharge. The patient reports being sexually active with multiple partners and does not always use protection. Her family doctor performs a pelvic exam and notes the presence of a strawberry cervix. A vaginal wet mount is done and a sample is sent for PCR. The lab reports the presence of an anaerobic parasitic flagellated protozoa. The most likely pathogen in this case presentation is best treated with which of the following antimicrobials?",
    choices: [
      "Azithromycin",
      "Ceftriaxone + doxycycline",
      "Doxycycline",
      "Metronidazole",
      "Penicillin G",
    ],
    correct: "Metronidazole",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires recognizing the STI and the treatment for it. In this vignette, we are presented with a sexually active patient with frothy yellowish-greenish vaginal discharge, a strawberry cervix, and a lab report of an anaerobic parasitic flagellated protozoa. All of these point towards a Trichomonas vaginalis infection. The treatment for a Trichomonas infection is metronidazole (Flagyl) 2g PO (1 dose). (D) Metronidazole is an effective antibiotic against many anaerobic bacteria and protozoa because its mechanism of action (inhibition of DNA synthesis) requires a partial reduction (chemical reaction) step that only occurs in anaerobic bacteria and protozoans. Patients should also avoid EtOH when on metronidazole as this may cause a disulfiram-like reaction (nausea, vomiting, flushing of skin, tachycardia, and shortness of breath)."
  },
  {
    id: 2,
    prompt:
      "A 16 y/o female patient presents to the clinic with dysuria and abnormal vaginal bleeding that is not associated with her menstrual period. A pelvic exam is performed and a swab is sent to the lab for PCR testing. The results report a Gram negative intracellular bacteria. The most likely pathogen in this case presentation is best treated with which of the following antimicrobials?",
    choices: [
      "Azithromycin",
      "Ceftriaxone + doxycycline",
      "Cefoxitin + doxycycline",
      "Metronidazole",
      "Penicillin G",
    ],
    correct:
      "Azithromycin",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires recognizing the STI and the treatment for it. In this vignette, we are presented with a sexually active patient with dysuria, abnormal vaginal bleeding, and a lab report showing Gram negative intracellular bacteria. These all point towards a symptomatic Chlamydia trachomatis infection. The possible treatments for Chlamydia are: azithromycin 1g PO stat dose OR doxycycline 100 mg BID PO for 7 days. Therefore, (A) is the correct answer. Another way to think of this is that we have an intracellular pathogen, hence ABXs that target the cell wall will not be as effective (rule out (B), (C), (E)). If this case was more serious and presented as pelvic inflammatory disease secondary to Chlamydia, then the treatment would be different."
  },
  {
    id: 3,
    prompt:
      "A 16 y/o male presents to the clinic with a fever, myalgia, pain in multiple joints, a painless skin lesion on his right hand, and tenosynovitis (inflammation of the tendon and its synovial sheath). A sexual history is taken and he reports being sexually active with multiple partners and rarely uses protection.  The doctor performs a physical exam and sends a blood sample to be cultured. The lab reports a gram negative diplococcus. The most likely pathogen in this case presentation is best treated with which of the following antimicrobials?",
    choices: [
      "Azithromycin",
      "Ceftriaxone + Azithromycin",
      "Clindamycin + Gentamicin",
      "Metronidazole",
      "Penicillin G",
    ],
    correct: "Ceftriaxone + Azithromycin",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires recognizing the STI and the treatment for it. In this vignette, we are presented with a sexually active patient with fever, myalgia, joint pain, skin lesion on his right hand, and tenosynovitis. A lab reports gram negative diplococcus. Together the information points toward disseminated Neisseria gonorrhoeae infection (systemic presentation). The treatment for Neisseria gonorrhoeae usually includes ceftriaxone with a second agent such as doxycycline or azithromycin. Sometimes cefixime can be used in place of ceftriaxone. Hence, (B) is the correct answer."
  },
  {
    id: 4,
    prompt:
      "A 16 y/o male presents to the clinic with a painless chancre on his penis. He is asked about his sexual history and he reports having multiple partners and does not use protection. On physical exam, non tender lymphadenopathy of the inguinal nodes are noted. A sample is cultured, but nothing grows. The most likely pathogen in this case presentation is best treated with which of the following antimicrobials?",
    choices: [
      "Azithromycin",
      "Ceftriaxone + doxycycline",
      "Cefoxitin + doxycycline",
      "Inhibition of osteoblast activity",
      "Metronidazole",
      "Penicillin G",
    ],
    correct: "Penicillin G",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires recognizing the STI and the treatment for it. In this vignette, we are presented with a sexually active patient with a painless chancre on his penis, non tender lymphadenopathy of the inguinal nodes, and a culture sample that grows nothing. The most likely causative agent is Treponema pallidum or syphilis, presenting as primary syphilis in this case. The treatment for syphilis is Penicillin G. In this case, the organism will have to be confirmed by serology or direct smear from the lesion (chancre) for dark field microscopy. "
  },
  {
    id: 5,
    prompt:
      "A 17 y/o female presents to the ER with severe lower abdominal pain, fever (T 39C), and vomiting. The pain is localized to the right lower quadrant. Thinking that it is appendicitis, general surgery is consulted to book an appendectomy. However, an astute medical student asks the patient about her sexual history and if she has had any UTI symptoms. The patient recalls having a new sexual partner and has recently experienced dysuria and an unusual discharge from her vagina. A bimanual exam reveals adnexal mass and tenderness. With this new information, your current working diagnosis can be treated with which of the following interventions:",
    choices: [
      "Appendectomy",
      "Cefoxitin + Doxycycline",
      "Metronidazole",
      "Vancomycin + Ceftriaxone",
      "Piperacillin-tazobactam",
    ],
    correct: "Cefoxitin + Doxycycline",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: "This question requires recognizing PID and the treatment for it. In this vignette, we are presented with a patient with severe lower abdo pain (RLQ), fever, and vomiting. From here appendicitis would seem likely, however, a history reveals that she has had UTI symptoms such as dysuria, unusual discharge from her vagina, new sexual partners, and an adnexal mass with tenderness. This raises the suspicion of PID, which should be on the differential for any female patient presenting with abdo pain. Assuming it is PID, the treatment in this case (severe/inpatient PID)  would be: cefoxitin + doxycycline (B)  OR clindamycin + gentamicin. If the PID was outpatient or milder the treatment could be cefixime/ceftriaxone + doxycycline/azithromycin ± metronidazole. Hence, (B) is the correct answer."
  },
  {
    id: 6,
    prompt:
      "A 7 y/o girl is brought to your office by her parents for early onset of puberty. The girl has recently begun to develop breast buds, pubic hair, and has had a growth spurt. The parents are concerned as the patient's older sister did not begin puberty until age 11. Physical exam reveals a Tanner stage 2 for both breast and pubic hair development. Laboratory tests show elevated estradiol levels and an LH surge upon GnRH stimulation test. An MRI of the brain shows no abnormalities. Which of the following is a viable treatment option?",
    choices: [
      "Estrogen",
      "Hydrocortisone",
      "Leuprolide acetate",
      "Levothyroxine",
      "Testosterone"
    ],
    correct: "Leuprolide acetate",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management of CPP. In this vignette we are presented with a GnRH-dependent precocious puberty or CPP. We suspect this given the early puberty signs at a young age and the LH surge following GnRH stimulation. If this was GnRH independent we wouldn’t expect the LH surge. The best treatment in this case would be (C). Leuprolide acetate is a GnRH agonist that acts by continuously stimulating the GnRH receptors in the pituitary gland. This leads to initial downregulation of the receptors and subsequently decreases the secretion of LH and FSH, which are responsible for the production of sex hormones. By suppressing the release of LH and FSH, leuprolide acetate effectively halts the progression of puberty and prevents further development of secondary sexual characteristics. Normally the secretion of GnRH is pulsatile, which allows for gonadotropin release. Leuprolide is delivered IM every 3-4 wks and will require frequent follow up and monitoring. (A) would not be helpful as this would worsen the already early onset pubertal development. (B) would be an option if we suspected congenital adrenal hyperplasia (CAH), which is also a cause of GnRH-INdependent precocious puberty (not the case here) (D) would be an option if we suspected severe hypothyroidism leading to TSH spillover on the FSH receptor. THis is also a cause of GnRH-INdependent precocious puberty, which is not the case here. (E) testosterone would not be helpful."
  },
  {
    id: 7,
    prompt: "A 7 y/o boy is brought in by his parents due to signs of early puberty, including enlargement of the testicles and pubic hair growth. Laboratory testing shows elevated levels of testosterone and luteinizing hormone (LH), and a bone age x-ray confirms advanced bone growth. However, GnRH stimulation testing is negative. Which of the following is true regarding this presentation?",
    choices: [
      "Due to exposure to exogenous testosterone",
      "Due to exposure to exogenous estrogen",
      "Needs to be treated with testosterone",
      "Needs to be treated with leuprorelin depot",
      "Needs to be treated with levothyroxine",
    ],
    correct:
      "Due to exposure to exogenous testosterone",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the GnRH-independent precocious puberty. In this vignette we are presented with a patient with early onset puberty. The lab investigations such as the negative GnRH stim test suggest a GnRH independent cause. Hence, the most likely explanation to his presentation is (A). Exposure to exogenous testosterone, such as topical creams or gels, can lead to the activation of the HPG axis and the development of secondary sexual characteristics. Treatment for this condition would be to discontinue the source of exogenous testosterone. Once the exogenous testosterone is eliminated, the HPG axis should gradually return to its normal state (hence (C) is wrong). (D) is the treatment for GnRH dependent cases, where we need to inhibit the release of gonadotropins."
  },
  {
    id: 8,
    prompt: "Which of the following pharmacodynamic/pharmacokinetic properties of a novel GnRH agonist would you expect to be helpful in treating central precocious puberty?",
    choices: [
      "Depot preparation leading to prolonged release of drug",
      "IV administration to allow for high plasma concentration of drug and fast onset of effects",
      "Extensive metabolism leading to short half-life and less adverse effects",
      "GnRH agonists do NOT treat central precocious puberty",
    ],
    correct: "Depot preparation leading to prolonged release of drug",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the pharmacological management behind central precocious puberty (CPP). CPP or also known as GnRH-dependent is when puberty abnormally occurs at an earlier age due to an issue that arises centrally (such as CNS lesions, or idiopathic). Normally, reactivation of the HP-gonadal axis occurs leading to pulsatile nocturnal secretion of LH and early morning gonadal steroid hormone release. LH release is increased with pulsatile secretions of GnRH, however, gonadotropin secretion is inhibited with continuous exposure to GnRH. Therefore, the correct answer is (A). A depot preparation that leads to prolonged release of drug is a positive pharmacological property that will allow us to continuously deliver GnRH to the body to suppress the release of gonadotropins from the pituitary. By inhibiting the release of gonadotropins we can halt pubertal development and ideally preserve height. A depot preparation is a formulation that allows a medicine to be injected SC or IM, where there is a slow release of drug, hence acting as a “depot”. (B) would not be viable as this does not help us inhibit gonadotropin release and requires skilled administration (IV). (C) would not work as this means we need to dose frequently to have the continuous GnRH exposure for inhibition. (D) is false."
  },
  {
    id: 9,
    prompt: "Why is pharmacological intervention for constitutional delay of growth age and puberty (CDGA) in girls more difficult to treat than in males?",
    choices: [
      "Ethinyl estradiol is more potent at closing the growth plates, leading to loss of height potential",
      "Ethinyl estradiol has no effect on closing the growth plates, leading to no increase in height",
      "Testosterone is more potent at closing the growth plates, leading to loss of height potential",
      "Testosterone has no effect on closing the growth plates, leading to no increase in height",
    ],
    correct: "Ethinyl estradiol is more potent at closing the growth plates, leading to loss of height potential",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question requires understanding the effects of estrogen. The correct answer is (A).  CDGA is a type of delayed puberty that is due to hypogonadotropic conditions. Normally, there has to be a compelling reason to treat CDGA, but if you had to, the treatment would be to replace the sex hormones. So in boys that would be low dose testosterone or estrogen in girls. In boys, this isn’t an issue as testosterone does not have a significant deleterious effect on height potential, but in girls this is an issue because estrogen is more potent than testosterone at closing the growth plate, therefore leading to loss of growth potential. Thereby treatment is usually delayed till after age 13 and if bone age is at least 10-11."
  },
];
