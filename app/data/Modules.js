export const ANSPages = [
    {
        pageID: 1,
        pageTitle: "Introduction",
        text: "The goal of this module is to help you gain an appreciation of how deeply tied the autonomic nervous system is to all areas of medicine.",
        images: null
    },
    {
        pageID: 2,
        pageTitle: "ANS Anatomy",
        text: `The autonomic nervous system controls unconscious bodily functions such as heart rate and breathing. It is separated into the sympathetic (SNS) and parasympathetic (PSNS) divisions. PSNS nerves originate from the brainstem (cranial nerves) and sacral spinal cord. Cranial nerves III, VII, IX, X carry parasympathetic nerve fibers. SNS nerves originate from the thoracic and lumbar spinal cords.[IMAGE_1]Understanding the anatomy is crucial in clinical settings, because disruptions can lead to conditions like autonomic dysreflexia, which we’ll look at next.`,
        images: [
            require("../assets/Anatomy.png"),
        ],
    },
    {
        pageID: 3,
        pageTitle: "ANS Anatomy: Clinical Correlate",
        text: "Autonomic dysreflexia occurs when there is a spinal cord injury (SCI) at T6 or higher. Recall that the SNS originates in the thoracic and lumbar spine (T1-L2). Importantly, the splanchnic nerves, which regulate vascular tone, arise from T5 and below. Noxious stimuli below the lesion, such as fecal impaction and bladder distention, trigger sympathetic activity, causing vasoconstriction and high blood pressure. Normally, the vagus nerve would counteract this through inhibitory signals. However, these are blocked by the SCI. As a result, there is PSNS dominance above the lesion causing vasodilation, relative bradycardia, flushing, and sweating. There is unregulated SNS activity below the lesion causing by high blood pressure, pallor, and cool skin.[IMAGE_1]",
        images: [
            require("../assets/Autonomic_Dysreflexia.png"),
        ]
    },
    {
        pageID: 4,
        pageTitle: "ANS Physiology: Signals to Responses",
        text: "Neurotransmission follows a two-neuron pathway: presynaptic neuron to postsynaptic neuron to target organ. For both the PSNS and SNS, acetylcholine (ACh) released from the presynaptic neuron binds nicotinic ACh receptors (nAChRs) on the postsynaptic neuron.[IMAGE_1]Parasympathetic postganglionic neurons then release ACh, which acts on muscarinic ACh receptors (mAChRs) on the target organ. There are 5 subtypes: M1, M2, M3, M4, M5.[IMAGE_2]Sympathetic postganglionic neurons primarily release norepinephrine (NEpi), which acts on adrenergic receptors. There are 4 subtypes: α1, α2, β1, β2. An exception is the sweat glands, which are innervated by the SNS but also use ACh at mAChRs.",
        images: [
            require("../assets/Pre-synaptic.png"),
            require("../assets/Post-synaptic.png"),
        ]
    },
    {
        pageID: 5,
        pageTitle: "ANS Physiology: Synaptic transmission",
        text: "The nAChRs on the postsynaptic neuron are ligand-gated ion channels. When activated by ACh released from the presynaptic neuron, they open and allow for influx of sodium ions, leading to depolarization and propagation of the signal.[IMAGE_1]The action potential reaching the postsynaptic nerve terminal opens voltage-gated calcium channels, which triggers release of the neurotransmitters (NTs), which are stored in synaptic vesicles.[IMAGE_2]mAChRs and adrenergic receptors on the target organ are G-protein-coupled receptors (GPCRs). When activated, they trigger intracellular processes that ultimately bring about the physiologic change.[IMAGE_3]Signalling is terminated through a combination of NT reuptake, metabolism in the synaptic cleft, and diffusion away from the synapse.",
        images: [
            require("../assets/nAChR.png"),
            require("../assets/Calcium_Induced_Release.png"),
            require("../assets/GPCR.png"),

        ]
    },
    {
        pageID: 6,
        pageTitle: "PSNS Physiology",
        text: "Some of the important effects of the PSNS include:[IMAGE_1]Given its extensive role in homeostasis, modulation of the PSNS has significant clinical applications(Note: the PSNS has little direct effect on the vasculature as blood vessels are not directly innervated by the PSNS).",
        images: [
            require("../assets/PSNS_Effects.png"),
        ]
    },
    {
        pageID: 7,
        pageTitle: "PSNS Physiology: Clinical Correlate",
        text: "ACh is synthesized in the nerve terminal, stored in vesicles, and released into the synaptic cleft, where it binds to post-synaptic receptors. ACh signalling is terminated either by enzymatic breakdown by acetylcholinesterase (AChE), or diffusion away from the synapse.[IMAGE_1]The release of ACh depends on SNARE proteins, which facilitate vesicle fusion with the neuron membrane.[IMAGE_2]Botulinum toxin cleaves SNARE proteins, preventing ACh release. Clinically, this can be used in conditions like overactive bladder, where it reduces detrusor muscle contractions by blocking parasympathetic input.",
        images: [
            require("../assets/PSNS_Metabolism.jpeg"),
            require("../assets/SNAP_SNARE.jpeg"),
        ]
    },
    {
        pageID: 8,
        pageTitle: "Signal Transduction: A Physiology Aside",
        text: "As an example of signal transduction, we will explore how increased vagal tone can cause sinus bradycardia. ACh released from the postganglionic parasympathetic fibers of the vagus nerve bind to M2 muscarinic receptors on the sinoatrial (SA) node. This leads to a decrease in cyclic AMP (cAMP) levels, which increases potassium conductance while decreasing inward calcium current. The overall effect is slowing impulse formation in the SA node, which reduces heart rate.[IMAGE_1]",
        images: [
            require("../assets/PSNS_Cardiac.jpeg"),
        ]
    },
    {
        pageID: 9,
        pageTitle: "PSNS Pharmacology: mAChR Agonists",
        text: "One way to modulate the PSNS is through muscarinic agonists, which directly activate mAChRs. Some of these drugs are used therapeutically, such as pilocarpine. Pilocarpine is a lipophilic muscarinic agonist that effective penetrates glandular tissue, and is used to increase salivary secretion in patients with Sjögren’s syndrome to treat dry mouth.[IMAGE_1]Others have diagnostic applications; for instance, methacholine is used in the methacholine challenge as patients with asthma exhibit heightened sensitivity to muscarinic agonists. If methacholine causes a ≥20% reduction in FEV1 compared to baseline, a diagnosis of asthma should be considered.",
        images: [
            require("../assets/Sjogren_Dry_Mouth.jpeg"),
        ]
    },
    {
        pageID: 10,
        pageTitle: "PSNS Pharmacology: AChE Inhibitors",
        text: "Another approach to increasing cholinergic neurotransmission is to inactivate AChE, the enzyme responsible for ACh breakdown in the synaptic cleft. AChE inhibitors (AChEIs) are classified into quaternary alcohols, carbamates, and organophosphates, in order of increasing duration of action.[IMAGE_1]Organophosphates, such as malathion (an insecticide) and sarin (a nerve agent), form irreversible covalent bonds with AChE, making them highly toxic. They have very limited use in a clinical setting. Therapeutically, carbamates like donepezil are used in Alzheimer’s disease management due to their ability to enhance central nervous system cholinergic signaling.",
        images: [
            require("../assets/AChEIs.png"),
        ]
    },
    {
        pageID: 11,
        pageTitle: "Alzheimer’s Dementia: A Pharmacology Aside",
        text: "The cholinergic hypothesis of dementia suggests that cholinergic deficiency in the brain contributes to cognitive decline. Despite this, AChEIs and not muscarinic agonists are used in Alzheimer’s management for several reasons.[IMAGE_1]Firstly, the predominant muscarinic receptor subtype in the brain is M1, but there are no selective M1 agonists available. Non-selective muscarinic agonists would cause systemic cholinergic adverse effects. Secondly, prolonged stimulation by full agonists may lead to receptor downregulation, reducing long-term efficacy. In contrast, AChEIs enhance cholinergic signalling in a physiologic manner by increasing endogenous ACh levels, minimizing receptor desensitization and adverse effects.",
        images: [
            require("../assets/dementia.png"),
        ]
    },
    {
        pageID: 12,
        pageTitle: "Cholinergic Crisis: A Toxicology Aside",
        text: "Excessive cholinergic activity, often due to AChEI inhibitor toxicity, results in toxicity described by the mnemonic “SLUDGE” – salivation, lacrimation, urination, defecation, GI distress, and emesis. This condition is treated with supportive care and atropine, a muscarinic antagonist we will talk about next.[IMAGE_1]If administered early, pralidoxime can reverse the effects of organophosphates by reactivating AChE.",
        images: [
            require("../assets/Anatomy.png"),
        ]
    },
    {
        pageID: 13,
        pageTitle: "PSNS Pharmacology: mAChR Antagonists",
        text: "To reduce cholinergic transmission, muscarinic antagonists are widely used in clinical practice.[IMAGE_1]Overall, their effects are the inverse of cholinergic stimulation.[IMAGE_2]Tertiary amines, like benztropine, are lipophilic and readily cross the blood-brain barrier. Clinically, benztropine is used to treat some of the extrapyramidal symptoms (EPS) associated with dopamine-blocking drugs, as dopaminergic blockade can result in increased cholinergic activity.[IMAGE_3]Ipratropium, a quaternary amine, is preferred for treating chronic obstructive pulmonary disease (COPD) as vagal tone is the only reversible component of airflow limitation in COPD.[IMAGE_4]",
        images: [
            require("../assets/Anticholinergics.png"),
            require("../assets/Anticholinergic_Effects.png"),
            require("../assets/Benztropine.png"),
            require("../assets/Ipratropium.png"),
        ]
    },
    {
        pageID: 14,
        pageTitle: "Atropine Poisoning: A Toxicology Aside",
        text: "Anticholinergic toxicity is characterized by the mnemonic “dry as a bone, blind as a bat, mad as a hatter, and red as a beet”.[IMAGE_1]Common causes of anticholinergic toxicity include drugs (antihistamines, tricyclic antidepressants, antipsychotics) and plants (Belladonna).",
        images: [
            require("../assets/Anticholinergic_Toxidrome.png"),
        ]
    },
    {
        pageID: 15,
        pageTitle: "PSNS Summary",
        text: "In summary, the PSNS has widespread physiological effects that can be targeted pharmacologically to treat various conditions.[IMAGE_1]",
        images: [
            require("../assets/PSNS_Summary.png"),
        ],
    }
]

export const SNSPages = [
    {
        pageID: 1,
        pageTitle: "Introduction",
        text: "The goal of this module is to explore the sympathetic division of the autonomic nervous system. It assumes you understand the previous module.",
        images: null
    },
    {
        pageID: 2,
        pageTitle: "SNS Physiology",
        text: "Some of the important effects of the sympathetic nervous system (SNS) include:[IMAGE_1]Given its extensive role in homeostasis, modulation of the SNS also has significant clinical applications.",
        images: [
            require("../assets/SNS_Physiology.png"),
        ]
    },
    {
        pageID: 3,
        pageTitle: "SNS Physiology: Transmitters and Receptors",
        text: "The SNS primarily relies on norepinephrine (NEpi), epinephrine (Epi), and dopamine (DA) as neurotransmitters. One notable exception is sweat glands, use acetylcholine (ACh) acting on muscarinic receptors. As a generalization, the effects of these receptors being activated are:[IMAGE_1]There are other specific effects that will be explored in a case-by-case basis. The receptor selectivity for these transmitters:[IMAGE_2]NEpi is the primary neurotransmitter released from postsynaptic sympathetic neurons. The adrenal medulla releases both Epi and NEpi into the bloodstream, producing a systemic response. Unlike NEpi, Epi activates β2 receptors leading to skeletal muscle vasodilation (v/d), crucial for the fight-or-flight response. The adrenal medulla releases about 85% epinephrine and 15% NEpi.",
        images: [
            require("../assets/SNS_Receptors.png"),
            require("../assets/SNS_Transmitter.png"),
        ]
    },
    {
        pageID: 4,
        pageTitle: "SNS Physiology: A Toxicology Aside",
        text: "Cocaine blocks NET, which prevents reuptake of NEpi and results in prolonged sympathetic activation. This manifests as hypertension through α1 activation, tachycardia through β1 activation, and dilated pupils via α1 activation. The hypertension and tachycardia also increase risk of arrhythmias and myocardial ischemia.[IMAGE_1]MAO inhibitors (MAOis) like phenelzine block the breakdown of NEpi, dopamine, and serotonin and are used to treat depression. Tyramine, found in aged cheeses, fermented foods, and wine, is normally degraded by MAO in the gut. However, when tyramine-high foods are consumed while taking a MAOi, tyramine is absorbed and enters sympathetic neurons, displacing stored NEpi and causing a massive release. This results in excessive adrenergic stimulation, which can result in a hypertensive crisis. This should be treated with an α1 receptor blocker. Note that β2 receptor blockers are contraindicated as this would lead to unopposed α1 activity and worsening hypertension.[IMAGE_2]",
        images: [
            require("../assets/Cocaine.jpeg"),
            require("../assets/Phenelzine.jpeg"),
        ]

    },
    {
        pageID: 5,
        pageTitle: "SNS Physiology: An Anatomical Aside",
        text: "Horner syndrome is characterized by the triad of ptosis, miosis, and facial anhidrosis. It can be a manifestation of lung cancer, particularly Pancoast tumors, which arise at the lung apex. These tumors invade or compress the sympathetic pathway as it exits the sympathetic chain toward the head, disrupting sympathetic innervation to the face and eyes and resulting in the characteristic findings.[IMAGE_1]",
        images: [
            require("../assets/Anatomy.png"),
        ]
    },
    {
        pageID: 6,
        pageTitle: "Agonists: α1 agonists",
        text: "α1 selective adrenergic agonists are primarily used in clinical settings where vasoconstriction (v/c) is beneficial. Some of the α1 selective sympathomimetics commonly seen in clinical practice are:[IMAGE_1]Phenylephrine is often included in over the counter cold/flu medications as a decongestant, though studies have not shown it to be more effective than placebo.",
        images: [
            require("../assets/alpha_agonists.png"),
        ]
    },
    {
        pageID: 7,
        pageTitle: "Agonists: A Pharmacology Aside",
        text: "Oral phenylephrine is not effective as a decongestant as it undergoes extensive first pass metabolism in the gut and liver by MAO. Oxymetazoline works as a nasal decongestant as it is applied topically, thereby bypassing this process.",
        images: null
    },
    {
        pageID: 8,
        pageTitle: "Agonists: α2 agonists",
        text: "α2 adrenergic agonists decrease sympathetic outflow by stimulating presynaptic α2 receptors, leading to reduced norepinephrine release. Some of the α1 selective sympathomimetics commonly seen in clinical practice are:[IMAGE_1]",
        images: [
            require("../assets/alpha_2_agonists.png"),
        ]
    },
    {
        pageID: 9,
        pageTitle: "Agonists: β agonists",
        text: "Some of the β sympathomimetics commonly seen in clinical practice are:[IMAGE_1]Isoproterenol has more of a pronounced chronotropic effect than dobutamine due to its β2 activity. This leads to v/d, decreased blood pressure, and reflex tachycardia.",
        images: [
            require("../assets/beta_agonists.png"),
        ]
    },
    {
        pageID: 10,
        pageTitle: "Agonists: A Physiology Aside",
        text: "Historically, β2 agonists such as ritodrine were used as tocolytics due to their ability to relax uterine smooth muscle. However, their use declined due to severe maternal side effects, including chest pain and arrhythmias, as well as neonatal complications such as hypoglycemia. These effects occur due to off target β1 activation in the maternal heart, leading to cardiovascular symptoms, and β2 activation in the fetal pancreas, stimulating insulin release and causing postnatal hypoglycemia.",
        images: null
    },
    {
        pageID: 11,
        pageTitle: "Antagonists: α blockers",
        text: "α-adrenoceptor antagonists such as prazosin and terazosin are useful in many situations that require smooth muscle relaxation:[IMAGE_1]Common adverse effects include:[IMAGE_2]",
        images: [
            require("../assets/alpha_blocker_indications.png"),
            require("../assets/alpha_blocker_adverse_effects.png"),
        ]
    },
    {
        pageID: 12,
        pageTitle: "Antagonists: β blockers",
        text: "Some of the common uses of beta blockers are:[IMAGE_1]Other indications include hyperthyroidism, hypertension, and migraine prophylaxis. β-blockers should be used with caution in these cases:[IMAGE_2]",
        images: [
            require("../assets/beta_blockers.png"),
            require("../assets/beta_blocker_caution.png"),
        ]
    },
    {
        pageID: 13,
        pageTitle: "Antagonists: Labetalol",
        text: "Labetalol is a non-selective β-blocker with additional α1-blocking properties (β1 = β2 > α1). It is used for severe hypertension and hypertensive crisis, including hypertension in pregnancy. By blocking α1 receptors, it causes vasodilation, reducing systemic vascular resistance, while β1 blockade prevents reflex tachycardia, making it effective for rapid blood pressure reduction without a significant increase in heart rate.",
        images: null
    },
    {
        pageID: 14,
        pageTitle: "Antagonists: Physiology Aside",
        text: "The renin-angiotensin-aldosterone system (RAAS), important in regulating blood pressure, fluid balance, and electrolytes, is under sympathetic control. When blood pressure drops, the SNS is activated and sympathetic nerve fibers activate β1 receptors on juxtaglomerular cells in the kidney leads to renin release.[IMAGE_1]In heart failure, sympathetic overactivity stimulates the RAAS, leading to vasoconstriction via angiotensin II and fluid retention via aldosterone. Metoprolol can be used blocks this process, reducing blood pressure, fluid retention, and cardiac afterload.",
        images: [
            require("../assets/Anatomy.png"),
        ]
    },
    {
        pageID: 15,
        pageTitle: "Autonomic Nervous System Conclusion",
        text: "With this overview of the autonomic nervous system, you now have an understanding its function and regulation. More importantly, we hope you can appreciate how its clinical relevance spans nearly every organ system, influencing everything from cardiovascular and respiratory function to gastrointestinal and endocrine regulation. Recognizing these connections will help you apply this knowledge to real-world clinical scenarios.",
        images: null,
    }
]

export const ABXPages = [
    {
        pageID: 1,
        pageTitle: "Penicillin",
        text: `Coming soon!`,
        images: null
    },
]

