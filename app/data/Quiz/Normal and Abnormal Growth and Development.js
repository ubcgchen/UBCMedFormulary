/**
 * Questions for Normal and Abnormal Growth and Development
 * @author Michael Gong, UBC VFMP 2025
 */

export const Normal_and_Abnormal_Growth_and_Development = [
  {
    id: 1,
    prompt:
      "A 5 y/o child presents to his pediatrician for a health check-up. On exam the doctor notes a thin upper lip, flat philtrum, and short palpebral fissures. The doctor decides to check the child’s development and notes that he is able to count to 3, identify shapes, balance on one foot for 10s, alternates feet when walking downstairs, copies a square (but not a triangle), brushes his teeth, uses 3-word phrases, follows 3-step commands, and speech is 75% intelligible, and he is popular with other kids at school. Given this presentation you are worried that the child was most likely exposed to which of the following drugs during pregnancy?",
    choices: [
      "Betamethasone",
      "Clonidine",
      "Ethanol",
      "Thalidomide",
      "Valproic acid",
    ],
    correct: "Ethanol",
    tags: ["PD", "hard", "ER", "MoA","Hema"],
    explain: "This question requires understanding fetal alcohol spectrum disorders (FASD). THe answer is (C). The explanation will delve into the diagnosis of FASD, rather than the mechanism of EtOH damage to the developing brain. In this vignette we are presented with a patient who is behind on his developmental milestones and sentinel facial features of FASD.  The sentinel facial features presented are: short palpebral fissure, flat philtrum, and thin upper lip. He also has evidence of neurodevelopmental delay in at least three areas: cognition (only counts to 3 (3y/o level), should be able to count to 10), fine motor (can’t copy a triangle, but can copy a square and brush teeth (4 y/o level)), language (3 word phrases, 3 step commands, 75% intelligible speech is a 3 y/o level). He is, however, popular with his classmates, but this is fairly normal in FASD, as children with FASD can be very social, but have difficulty understanding consequences (hence socially vulnerable). The three sentinel facial features and 3+ neurodevelopmental delays is enough to diagnose the child with FASD even with unknown EtOH exposure."
  },
  {
    id: 2,
    prompt:
      "A 15 y/o patient presents to the ER with chest pain. His vitals: HR 150 bpm, BP 150/90, RR 25, T 37.4degC, PulseOx 99% room air. He mentions having trouble sleeping at night, easily irritated, and headache. He is noted to have mydriasis (dilated pupils) and a tremor is noted. He was recently diagnosed with ADHD and is managed pharmacologically. You are suspicious that his presentation is related to his medication. Which of the following correctly describes the mechanism of action of the most likely culprit?",
    choices: [
      "α2 adrenoreceptor agonist",
      "Inhibits DAT1 (Dopamine transporter) > NET (Norepinephrine transporter) > MAO",
      "NET inhibitor",
      "Reverses DAT1, NET, VMAT (vesicular monoamine transporter); and inhibits MAO",
      "B and D",
      "A and C",
    ],
    correct:
      "B and D",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacology of medications used in ADHD. In this vignette we are presented with a teenager with chest pain and signs of stimulant toxicity. We suspect a stimulant toxicity given the tachycardia (β1), high blood pressure (α1 v/c + β1 inc CO), chest pain (due to overexertion of heart muscle → inc contractility → inc cardiac oxygen demand), trouble sleeping, headache, irritability, dilated pupils (stimulation of α1 receptors on radial muscles in the iris), tremor (β2 receptor). Hence, we need to think of the ADHD medications that are classified as stimulants: amphetamine and methylphenidate. (D) correctly describes the mechanism of action of amphetamine, while (B) correctly describes the mechanism of methylphenidate. Therefore, the correct answer is (E). "
  },
  {
    id: 3,
    prompt:
      "A 6y/o patient is brought to his pediatrician because his mother is worried about his academic performance at school for the last year. SNAP-IV questionnaires were filled out by his mother and teacher. A quick skim of both showed 7/9 and 6/9 items being at least “quite a bit”. Pregnancy was unremarkable, no medical complications, parents have Bachelor degrees. A detailed developmental history is negative for any concerns. The family history is negative for any learning, intellectual, neurodevelopmental conditions. However, his grandpa passed away in an unexplained drowning at 45 y/o. His father was recently seen by a cardiologist after a fainting spell at work. Given this presentation, which of the following medications would you most likely prescribe to help manage the child’s presentation?",
    choices: [
      "Amphetamine",
      "Methylphenidate",
      "Guanfacine",
      "None of the above: patient is too young/has contraindication for any pharmacological management",
    ],
    correct: "Guanfacine",
    tags: ["PD", "hard","Endocrinology", "MoA", "side effects"],
    explain: "This question requires understanding the pharmacology and contraindications to ADHD medications. In this vignette we are presented with a child that can be diagnosed with ADHD given the SNAP-IV questionnaires and also from two different settings (home and school) and duration of >6 mo. The child is right on the cutoff that makes him eligible for pharmacological management. However, the assessment for stimulants reveals some concerning family history for cardiac issues given his grandpa’s passing to an unexplained drowning (heart issue causing drowning) and his father’s recent fainting spell. Given that the patient may potentially have an undiagnosed cardiac issue, we should avoid stimulants for the time being. This rules out (A) and (B), as they are both stimulants that lead to increased SNS activity, which could potentially aggravate any cardiac issues. Therefore we would go for (C). Guanfacine is not a stimulant, in fact it suppresses SNS activity as it is an α2 agonist, which is the autoreceptor that decreases NE release from SNS neurons. This would be a safer option. Some contraindications to stimulants also include HTN, pheochromocytoma, untreated hyperthyroidism, symptomatic cardiovascular disease, glaucoma, MAOi treatment, hx of drug abuse. None of these pertain to our patient."
  },
  {
    id: 4,
    prompt:
      "Which of the following best describes the mechanism behind linear growth inhibition due to excessive glucocorticoid use?",
    choices: [
      "Antiinflmmatory + immunosuppressive leading to increased metabolic demand for immune response instead of growth",
      "Decreased collagen synthesis and increased proteolysis (breakdown of collagen)",
      "Inhibition of pulsatile GH secretion and IGF-1 activity",
      "Inhibition of osteoblast activity",
      "B, C, D",
      "All of the above",
    ],
    correct: "B, C, D",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding the mechanism behind linear growth inhibition due to cortisol excess. The correct answer is (E). (A) does not make sense, if steroids were suppressing the immune system, there would more likely be decreased metabolic demand for the immune system. The other choices outline the effects of steroids, such as proteolysis, inhibition of hypothalamic-end organ axis, and inhibition of osteoblast activity"
  },
  {
    id: 5,
    prompt:
      "A father brings her 7 y/o daughter to the doctor because he is concerned about her growth. The daughter initially presents in the 10th percentile for height and 40th percentile for weight (past anthropometric measurements show a slowing of linear growth, without slowing in weight). She feels tired, bowel movements once every few days (despite a healthy diet) and feels cold all the time. You order the relevant tests, including a bone age and an endocrine panel. Some of the results come back: bone age shows delayed age, fT4 low and TSH low-normal, morning cortisol normal. Which of the following would you use to manage this presentation?",
    choices: [
      "Glucocorticoids",
      "Glucocorticoids followed by levothyroxine",
      "Levothyroxine",
      "Levothyroxine followed by glucocorticoids",
      "Somatropin",
    ],
    correct: "Levothyroxine",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain: " This question requires understanding the treatment of abnormal growth secondary to an endocrinopathy. In this vignette we are presented with a patient with short stature. Her growth curves showing a slowing in linear growth without slowing in weight, suggests an increase in Wt/Ht. This should make you think of an endocrinopathy, especially if the patient is short and obese (which isn’t necessarily the case, but the Wt/Ht ratio in those patients would be increased).The endocrinopathies in question tend to be deficiencies (except for vasopressin or cortisol). The history of fatigue, constipation, and cold intolerance, should make you think of hypothyroidism, which is supported by the low fT4. The low-normal TSH suggests central hypothyroidism. T3 is important in growth because it helps stimulate osteoblasts and also interacts with GH synthesis and IGF-1 action, which is why hypothyroidism needs to be investigated prior to GH testing. In this case, there isn’t any much indication that she is also glucocorticoid deficient and her morning cortisol is normal. Therefore, we could just manage this patient with (C) and replace the thyroid hormone while further workup on the primary cause behind the central hypothyroidism is investigated. If she was also glucocorticoid deficient, then we would replace glucocorticoids first because the replacement of thyroid hormone increases the catabolism of whatever cortisol the patient has, which will result in precipitating an adrenal crisis. In that case (B) would be the correct option."
  },
  {
    id: 6,
    prompt:
      "Which of the following could you use to stimulate growth hormone secretion?",
    choices: [
      "Arginine",
      "Somatropin",
      "Somatostatin",
      "A and B",
      "A and C"
    ],
    correct: "Arginine",
    tags: ["PK", "medium", "Endocrinology"],
    explain: "This question requires understanding what stimulates growth hormone secretion. The answer is (A). Arginine is used to stimulate GH release. Arginine is an amino acid and works by suppressing the release of somatostatin, which is the inhibitory signal for GH secretion. Hence, Arg causes the removal of inhibition, resulting in increased GH. (B) is the synthetic form of GH, so it does not stimulate GH secretion, but can be used to replace GH in patients with GH deficiency. Other factors that stimulate GH secretion include sleep, stress, hypoglycemia, exercise, α2 agonists, β blockers, and estrogens"
  },
  {
    id: 7,
    prompt: "A mother brings her 8 y/o son to the doctor because she is concerned about his growth. He initially presents in the 10th percentile for height and 10th percentile for weight (past anthropometric measurements show a slowing of linear growth and weight) , fatigue, weakness, vomiting, and diarrhea. It is later found that he has a cortisol deficiency and is started on glucocorticoid replacement therapy. A few weeks later, the son presents with bed wetting and polydipsia. A blood test shows high serum osmolality and dilute urine. Assuming his condition can only be treated medically, which of the following medications would you administer?",
    choices: [
      "ACTH/corticotropin ",
      "Desmopressin",
      "Dexamethasone",
      "Levothyroxine",
      "Macimorelin",
    ],
    correct:
      "Desmopressin",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain: "This question requires understanding the treatment of abnormal growth secondary to a vasopressin deficiency. In this vignette we are presented with a patient with slowing of both linear growth and in weight, where he can be described as both short and thin. Usually the differential for “short and thin” includes malnutrition, malabsorption, systemic dz, or constitutional delay, however some endocrinopathies can also present like this such as ADH deficiency (or vasopressin) or cortisol deficiency. His presentation of fatigue, weakness, vomiting, and diarrhea, or all potential signs of a glucocorticoid deficiency, which he eventually diagnosed with. He then presents with bed wetting and polydipsia after glucocorticoid replacement. This should start making us think of ADH deficiency as well. His blood tests support this with the high serum osmolality and dilute urine, suggesting that he isn’t concentrating his urine appropriately. Thus, the most likely diagnosis would be an ADH deficiency, therefore the treatment of choice would be (B), desmopressin. Desmopressin is a synthetic ADH analogue that predominantly activates the V2 receptors in the collecting ducts of the kidneys to help insert AQP for water reabsorption. Desmopressin does not activate V1 (if it does, it is minimal) like endogenous vasopressin, hence it has limited effect on vasoconstriction. ADH deficiency/central diabetes insipidus can be masked by a glucocorticoid deficiency and will only unmask itself after cortisol levels are replaced adequately. This is because glucocorticoids are required for free water excretion. So basically, in low cortisol levels, there should be less free water excretion, therefore more concentrated urine. Cortisol replacement allows the body to excrete free fluid, however, the body should regulate this by increasing ADH to prevent overexcretion of free water to maintain the body’s osmolality within the normal range. In this case we replaced the cortisol, but the body did not respond appropriately by increasing ADH, which resulted in diluted urine and over excretion of free water, hence the unmasking of his underlying vasopressin deficiency. Vasopressin deficiency can lead to failure to thrive as the patient will be peeing or losing excessive amounts of water through the urine, which will cause them to drink more water, thereby filling his stomach and preventing normal feeding. (A) is highly expensive, we would more likely replace the cortisol with steroids like hydrocortisone. (C) is a high potency synthetic glucocorticoid. (D) is for thyroid hormone replacement. (E) is a growth hormone releasing hormone analogue, which stimulates the release of growth hormone from the anterior pituitary."
  },
  {
    id: 8,
    prompt: "Tina, a 7 year old female presents to a family practice clinic for ear pain. She appears to be short for her age, has a wide-appearing neck, as well as extra skin between some of her fingers and toes. The patient’s most likely condition would be best treated with which of the following?",
    choices: [
      "Estradiol",
      "Bromocriptine",
      "Leuprolide",
      "Levothyroxine",
      "Growth Hormone",
    ],
    correct: "Growth Hormone",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain: "This question assesses treatments for Turner syndrome. In this vignette, the patient description is pathognomonic for Turner syndrome (45XO). Turner syndrome is treated with growth hormone in childhood. (WW Q)"
  },
];
