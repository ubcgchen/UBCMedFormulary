export const tbi = [
  {
    id: 1,
    prompt:
      "Which of the following is NOT a MAJOR mechanism of action utilized by sedatives to achieve sedation?",
    choices: [
      "Increase GABA-A chloride channel mediated inhibition",
      "α2 adrenergic receptor agonists",
      "Histamine receptor 1 agonists",
      "NMDA receptor antagonist",
      "μ opioid receptor agonists",
    ],
    correct: "Muscarinic acetylcholine receptor suppression",
    tags: ["PD", "easy", "MoA", "Neurology", "anaesthesia"],
    explain: "This question requires understanding the mechanisms of sedatives. The only one that is NOT a major mechanism utilized by sedatives to achieve sedation is (C). (A) is a reflection of the many anesthetic mechanisms such as propofol and etomidate. (B) is dexmedetomidine, like other α2 adrenergic receptor agonists, this causes a decrease in SNS outflow (remember  α2 is an autoreceptor on presynaptic axon terminals to decrease SNS outflow). (D) is ketamine, NMDA is the receptor for Glu, hence inhibiting excitatory neurotransmission should cause sedation. (E) μ opioid receptor is found in the CNS and helps modulate and regulate transmission such as inhibitory GABAs, thus leading to sedation. (C) if it was a H1 antagonist, could then cause sedation. Remember first generation histamine blockers can cross the blood brain barrier and cause sedation since there are histaminergic pathways that are utilized in wakefulness. ",
  },
  {
    id: 2,
    prompt:
      "Given are the redistribution half times (Tα) and elimination half times (Tβ) of four novel general anesthetics (in mins): Drug A (Tα = 5; Tβ = 10 ), Drug B (Tα = 2; Tβ = 30 ), Drug C (Tα = 10; Tβ = 20), Drug D (Tα = 5; Tβ = 15). Which of the following would you expect to have the shortest duration of action after a single IV bolus?",
    choices: ["Drug A", "Drug B", "Drug C", "Drug D"],
    correct: "Drug B",
    tags: ["PK", "medium", "anaesthesia", "Neurology"],
    explain: "This question requires understanding  general anesthetics (GA) pharmacokinetics. The correct answer is drug (B). Here we need to understand how GAs work and the difference between Tα and Tβ. Unlike many other drugs, the half life that determines duration of action is not the elimination half life, but the redistribution half life. This is because for a GA to exert its anesthetic properties, it needs to work in the central compartment, which includes the bloodstream and areas of high blood flow like the brain. The redistribution half-time is a reflection of the half time it takes for the GA to be redistributed from the central compartments to the peripheral compartments such as adipose tissue. Hence, once the drug is redistributed away from the central compartments its effects should wear off. This makes sense as GA in adipose tissue will not cause sedation, but GA in the brain can cause sedation by working on neurons. This also reflects how for drugs to work or produce a certain effect, it needs to be able to reach its target organ. Tβ plays a small role in determining the duration of action, so in the context of anesthesia Tα is more important in determining duration of action. This is because once the drug reaches peripheral compartments it will be slowly released back into the central compartment, where it will be eliminated (remember free drug is eliminated) or distributed again. But the concentrations of the drug in this case will NOT be as high as the initial single IV bolus that initially distributes to high blood flow areas like the brain to exert its anesthetic properties. Therefore, a longer Tβ does not make a significant impact to extend the duration of action.",
  },
  {
    id: 3,
    prompt:
      "Given are the context sensitive half-times after a 5 hr infusion of four drugs: Propofol - 25 mins, Etomidate - 15 mins, Ketamine - 30 mins, Midazolam - 70 mins. Which of the following will have the most predictable offset after an infusion?",
    choices: ["Etomidate", "Ketamine", "Midazolam", "Propofol"],
    correct: "Etomidate",
    tags: ["PK", "medium", "anaesthesia", "Neurology"],
    explain: "This question requires understanding the concept of context sensitive half time (CSHT). The drug with the most predictable offset after infusion would be the one with the shortest CSHT, which would be (A). CSHT is the time it takes for blood plasma concentration of a drug to decline by one half after infusion cessation. The “context” is the duration of drug infusion. This is used because the duration of drug infusion will change the drug plasma concentration, which in turn affects the elimination time. In the context of anesthesia, the elimination half time is not as useful because that is a reflection of drug half-life at steady state, which is not usually reached. This seems counterintuitive given that drugs like fentanyl as it has a fast onset, but this does not mean fentanyl has reached steady state. This is just a reflection of fentanyl distributing to adipose tissue, where it does not exert its centrally sedative/analgesic effects. Fentanyl being very lipophilic, then accumulates in the adipose tissue, thus large amounts of fentanyl can be stored in adipose tissue, where it is slowly leeched back into circulation once plasma concentration drops, where it can then be eliminated (remember only free drug is eliminated). It is only when plasma concentration of the central circulation = peripheral concentration (e.g. adipose tissue) that we consider steady state, so drugs like fentanyl will take a long time as there is lots of adipose tissue to “store” fentanyl. At steady state, the CSHT is equal to terminal elimination half time. Essentially, CSHT shows the relationship between infusion duration and half-time, so the CSHT will change with shorter or longer infusion duration. From this we can see that if a drug has a shorter CSHT, are more readily eliminated, making their dosing more predictable as there is less propensity of drug accumulation in peripheral tissue that can prolong the effects of the drug leading to more unpredictability.",
  },
  {
    id: 4,
    prompt:
      "Which of the following is NOT an effect of isoflurane (inhaled anesthetic)?",
    choices: [
      "Bronchodilation",
      "Decrease cerebral blood flow",
      "Decrease tidal volume",
      "Increase respiration rate",
      "Peripheral vasodilation",
    ],
    correct: "Decrease cerebral blood flow",
    tags: ["PD", "medium", "MoA", "anaesthesia", "Neurology"],
    explain: "This question requires understanding the pharmacology of inhaled anesthetics. The correct answer is (B), this is NOT an effect of isoflurane. Isoflurane and other volatile gasses cause cerebral vasodilation. This results in increased cerebral blood flow, thus it actually results in an increased risk of elevated ICP. The mechanism behind the vasodilation is not fully understood, but this is actually a fairly beneficial property of inhaled anesthetics, as it increases the cerebral delivery of the volatile gasses to the CNS to cause its anesthetic properties. However, all anesthetics will decrease cerebral metabolic rate. (A) this is due to decreased PSNS release of ACh and also inhaled anesthetics acting directly on smooth muscle cells resulting in relaxation and dilation. (C) this is due to it depressing the respiratory centers in the brainstem such as the medulla oblongata (area that regulates breathing. This results in decreased respiratory drive and depth, thus decreased tidal volume. Moreover, volatile gasses increase the apneic threshold for CO2, and decrease the response to hypoxia. Interestingly, inhaled gasses can (D) increase RR, this is thought to be due to an irritant effect on the lungs, however at a certain level, central resp depression occurs. (E) inhaled gasses cause peripheral vasodilation, thus resulting in decreased BP. The mechanism is not fully understood as it could be due to direct activity on smooth muscle cells or stimulation of NO from endothelial cells. Some other effects include QT prolongation, decreased coronary blood flow, smooth muscle relaxation, etc…",
  },
  {
    id: 5,
    prompt: "What is the mechanism of action of ketamine?",
    choices: [
      "NMDA receptor antagonist",
      "Reuptake inhibitor of 5-HT, dopamine, norepinephrine",
      "Weak μ opioid receptor agonist",
      "Weak muscarinic acetylcholine receptor antagonist",
      "All of the above",
    ],
    correct: "All of the above",
    tags: ["PD", "easy", "MoA", "anaesthesia", "Neurology"],
    explain: "The question requires understanding the mechanism of ketamine. The correct answer is (E). This suggests that ketamine has many different effects as it blocks/activates many different receptors. This should also suggest to you the side effect profile could include many different systems. Its main mechanism in causing sedation is (A). Recall NMDA is the receptor for Glu, the excitatory neurotransmitter, thus blocking excitatory neurotransmission should result in CNS depression to facilitate anesthesia. Weak μ opioid receptor agonist allows it to have analgesic and also sedative properties. Another interesting effect of ketamine is that it increases SNS outflow through various mechanisms. One of these is highlighted in (B) where it inhibits the reuptake of NE. Recall NE is the SNS neurotransmitter, thus decreasing its reuptake results in increased NE, therefore more SNS outflow. The increased outflow results in it overriding the suppressed myocardial contractility resulting in increased HR → CO → BP. This is why ketamine is used in battlefield medicine (aka someone is hemodynamically unstable due to a gunshot wound) as it does not suppress the CV system like many other anesthetics that would suppress CO. This also results in bronchodilation from increased SNS, but also potentially due to some blocking of muscarinic ACh receptors.",
  },
  {
    id: 6,
    prompt:
      "A 24 y/o patient presents to the ICU after a TBI from a motor vehicle accident. He presents with GCS 8, weakness on his left side of the body, and a fixed and dilated right pupil. Fundoscopy shows papilledema and no retinal venous pulsations bilaterally. His respiration is irregular, BP 180/60, and HR 50. The patient’s bed is tilted upwards. Prior to intubation, which of the following drugs could help manage his current presentation?",
    choices: [
      "Dopamine",
      "Epinephrine",
      "Hydralazine",
      "Isoflurane",
      "Propofol",
    ],
    correct: "Propofol",
    tags: ["PD", "medium", "anaesthesia", "Neurology", "ICU"],
    explain: "This question requires understanding pharmacological management of increased ICP and general anesthetic pharmacology. In this vignette we are presented with a TBI patient that is exhibiting signs of increased ICP. We suspect the increased ICP given the lowerer LoC, hemiparesis, dilated pupil, papilledema, lack of retinal venous pulsations, and Cushing’s triad (irregular breathing, high systolic BP - widened pulse pressure, and bradycardia). In fact, we’d suspect a right sided transtentorial (uncal) herniation given the contralateral hemiplegia and ipsilateral blown pupil. This is because the herniation (due to a bleed or swelling) pushes the right temporal lobe into the cerebral peduncles (this is above the medulla so the motor fibres have not crossed yet) and the ipsilateral CN III, thus there is compression of these fibres that results in the contralateral weakness, and ipsilateral dilated pupils. Recall that the parasympathetic nerve fibers that are involved in pupillary contraction are carried on the periphery of CNIII, so they are the first to be affected by an increase in ICP. With regards to retinal venous pulsations, normally the retinal arteries during systole compress the veins, but during diastole there is less compression (less pressure in the arteries), thus the veins can expand, thus resulting in pulsation. However, with increased ICP there is compression of the optic nerve and sheath, which results in increased intraocular pressure (IOP). The increase in IOP will compress the veins regardless of the cardiac cycle (systole or diastole), thus preventing the pulsations from being visualized. Cushing’s triad is thought to occur because during increased ICP, there is compression of the brainstem, which contains the respiratory center, thus resulting in irregular respiration. The increased ICP also results in a SNS response to increased blood pressure to overcome the increased ICP to maintain perfusion (remember when ICP>MAP, then there is decreased O2 delivery to the brain), this massive increase in systolic BP, results in a widened pulse pressure, however the baroreceptors in the aortic arch and carotid sinus sense this increase BP, thus initiating the baroreflex. This results in a PSNS response to decrease HR. The team has already started management by tilting the bed upward to decrease ICP. This is essentially using gravity to increase venous return from the brain, which reduces ICP. To further decrease his ICP we can sedate him with (E). Sedation with agents like propofol can help decrease ICP because this results in decreased brain metabolism. The decrease in metabolism will cause the brain to decrease blood flow as the metabolic demands such as O2 will be decreased (flow-metabolic coupling system). By decreasing cerebral blood flow, there will be less blood flowing into the cranium, thus decreasing ICP. (D) is an inhaled general anesthetic, thus it also decreases cerebral metabolic rate, HOWEVER it also causes cerebral vasodilation. This results in increased cerebral blood flow, thus it actually results in an increased risk of elevated ICP. The mechanism behind the vasodilation is not fully understood, but this is actually a fairly beneficial property of inhaled anesthetics, as it increases the cerebral delivery of the volatile gasses to the CNS to cause its anesthetic properties. (C) is a vasodilator used in HTN and would be a bad idea as vasodilation  will increase blood flow to the brain, thus resulting in increased ICP. (A) and (B) are both inotropes, which will result in increased contractility and cardiac output. In this case it is not indicated (patient isn’t in shock, you will learn more about shock management in MEDD422)  and could be detrimental if it increases blood flow to the brain.",
  },
  {
    id: 7,
    prompt:
      "Which of the following would you NOT expect to be a mechanism of action of anticonvulsant medications?",
    choices: [
      "Calcium channel blockers",
      "GABAergic potentiators",
      "NMDA receptor agonists",
      "Potassium channel activators",
      "Sodium channel blockers",
    ],
    correct: "NMDA receptor agonists",
    tags: ["PD", "medium", "MoA", "anticonvulsant", "Neurology"],
    explain: "This question requires understanding the mechanisms of anticonvulsants. The only MoA that is NOT expected is (C). Here we need to understand the underlying pathophysiology of seizures. The pathophysiology behind seizures include increased excitation such as increased inward Na, Ca currents, or excitatory neurotransmitters like Glu and Asp, and also decreased inhibition such as decreased inward Cl and outward K currents, or inhibitory neurotransmitters like GABA. Therefore,you can also appreciate that in simple terms, seizures are due to brain overactivity, thus we want to inhibit AP propagation (block depolarization, Na channels), decrease release of neurotransmitters from axon terminals (block depolarization, Ca channels, neurotransmitter release), increased refractoriness (hyperpolarize neuronal membranes, activate K, Cl channels), or promote inhibitory transmission (GABA). NMDA receptor is the receptor for Glu, the excitatory neurotransmitter of the CNS, thus we would NOT want to increase Glu firing when treating seizures. We would want to prevent Glu firing.",
  },
  {
    id: 8,
    prompt:
      "A 30 y/o patient in the neuro-ICU after a TBI is about to be extubated and taken off midazolam. Which of the following adverse effects would the intensivist be monitoring closely for now?",
    choices: ["Hypotension", "Paralysis", "Respiratory depression", "Seizures"],
    correct: "Seizures",
    tags: ["PD", "medium", "Neurology", "side effects", "ICU"],
    explain: "This question requires understanding the adverse effect following BZD withdrawal. In this vignette we are presented with a patient that is taken of midazolam. This will put the patient at risk of (D) seizures. This is because BZD use can lead to dependence, which results in neuroadaptation. Neuroadaptation leads to changes in the GABAergic pathways that isn’t completely understood yet, but essentially results in decreased GABA transmission (downregulation, decreased GABA, etc.., but also increase Glu transmission). This can be thought of the body adapting to the sedative effect that BZDs have on the CNS, and the brain adapts to the increased inhibition, by “lowering” its inhibitory baseline. Thus, when the exogenous force that is increasing inhibition in the CNS is lifted, such as sudden removal of BZD, there will be an unchecked increase in excitatory neurotransmission as the baseline inhibitory response is now decreased, or in other words, the removal of BZD unmasks the excitatory pathways of the CNS. The sudden surge in excitatory transmission can then result in a seizure. Thus, ICU patients who have been sedated for a long time and are suddenly taken off the sedative are at risk of seizures. To prevent this, BZD cessation is ideally done in a tapered manner.  BZDs with longer half lives in general are less prone to withdrawal seizures as the long half life can act as a “taper”.",
  },
  {
    id: 9,
    prompt:
      "Which of the following antiseizure medications follows zero-order kinetics?",
    choices: ["Levetiracetam", "Lorazepam", "Phenytoin", "Valproic acid"],
    correct: "Phenytoin",
    tags: ["PK", "medium", "Neurology", "anticonvulsant"],
    explain: "This question requires understanding antiseizure medication PK. The medication that follows zero order kinetics is (C) phenytoin. Zero order kinetics is when a fixed amount of medication is metabolized for a set unit of time, and thus is independent of concentration. THis results in the metabolism curve following a linear relationship. However, the half life will change with the concentration of drug, so clinically t1/2 is of little use for drugs that follow zero-order. This usually occurs if the enzyme is oversaturated, thus the rate of metabolism is dependent on the intrinsic speed of the enzyme’s activity. However, some medications always undergo zero-order metabolism. There are many mnemonics to remember major zero order kinetics drugs. One example is PWHEATS: Phenytoin, Phenylbutazone, Warfarin, Heparin, Ethanol, Aspirin, Theophylline, Tolbutamide, Salicylates. The clinical significance is that these drugs will require different monitoring and recognizing the potential for toxicity is increased at higher concentrations because drugs that are first order eliminated will be metabolized faster at higher concentrations than those that follow zero order. It is also important to know that many first order drugs will follow zero order kinetics at toxic levels or extremely high levels due to enzyme saturation.",
  },
  {
    id: 10,
    prompt:
      "Which of the following drugs would you MOST LIKELY expect to be a broad-spectrum antiepileptic (broad spectrum - effective against generalized and focal; narrow spectrum - effective against one of generalized OR focal)?",
    choices: [
      "Carbamazepine - blocks Na channels",
      "Ethosuximide - blocks T-type Ca channels",
      "Lamotrigine - blocks Na and Ca channels, and decreases glutamate release",
      "Phenytoin - blocks Na and Ca channels",
      "Retigibine - activates K channels",
    ],
    correct:
      "Lamotrigine - blocks Na and Ca channels, and decreases glutamate release",
    tags: ["PD", "medium", "MoA", "anticonvulsant", "Neurology"],
    explain: "This question requires understanding the pharmacology of anticonvulsants. The correct answer is (C). This is because lamotrigine has multiple different mechanisms, thus allowing it to work on many different processes that may cause seizures. The pathophysiology behind seizures include increased excitation such as increased inward Na, Ca currents, or excitatory neurotransmitters like Glu and Asp, and also decreased inhibition such as decreased inward Cl and outward K currents, or inhibitory neurotransmitters like GABA. From this you can see that lamotrigine targets many different processes, thus increasing its effectiveness against different seizures with different underlying pathophysiologies. In general, you can also appreciate that in simple terms, seizures are due to brain overactivity, thus we want to inhibit AP propagation (block depolarization, Na channels), decrease release of neurotransmitters from axon terminals (block depolarization, Ca channels, neurotransmitter release), increased refractoriness (hyperpolarize neuronal membranes, activate K, Cl channels), or promote inhibitory transmission (GABA). (A) carbamazepine is a narrow spectrum, primarily for focal onset seizures, but could be used in generalized onset. (B) Ethosuximide is typically the drug of choice for absence seizures (a type of generalized onset), and thus is considered a narrow spectrum. (D) is sometimes considered broad spectrum, hence its use in the ED, but it is primarily for focal onset seizures. Like carbamazepine, it is sometimes used in generalized onset seizures as well. (E) is a narrow spectrum drug that is primarily used for partial seizures. In general, the more mechanisms, the more likely it can work on different processes that drive seizures, thus a broader spectrum.",
  },
  {
    id: 11,
    prompt:
      "Benzodiazepines and barbiturates both cause sedation and target the same receptor, but what is the MAIN intrinsic reason that benzodiazepines are safer than barbiturates?",
    choices: [
      "Barbiturates are safer than benzodiazepines",
      "Benzodiazepines overdose can be treated with flumazenil, whereas there is no direct antidote for barbiturate overdose",
      "Benzodiazepine require endogenous GABA to activate the GABA receptor, whereas barbiturates can activate GABA receptors without endogenous GABA",
      "Benzodiazepines don’t have active metabolites, whereas barbiturates have many active metabolites, which complicates the dosing strategy",
    ],
    correct:
      "Benzodiazepine require endogenous GABA to activate the GABA receptor, whereas barbiturates can activate GABA receptors without endogenous GABA",
    tags: ["PD", "medium", "MoA", "Neurology", "side effects"],
    explain: "This question requires understanding the mechanism of BZD and barbiturates (Barbs). The correct answer is (C), but it should be noted that (B) is also true (explained later in this paragraph). BZDs work by binding to the BZD binding site on the GABA Cl- channels. By binding to this area it enhances the activity of GABA by increasing the affinity of the GABA to channel binding. This increases the frequency of channel opening. However, this is entirely dependent on endogenous GABA. So, for BZD to open the GABA channel, it requires GABA. On the other hand, barbs do NOT require endogenous GABA. Barbs bind to the channel pore and open the channel even in the absence of GABA. This leads to barbs keeping the channel open for a longer time. Both BZDs and Barbs lead to the same effect, which is the influx of Cl- into the neuron leading to hyperpolarization, and ultimately inhibition. So given this, we can appreciate that BZDs have a ceiling effect that is dependent on GABA levels, while there is no ceiling effect with Barbs, thus making them more prone to respiratory depression and death. (B) is true. Flumazenil is a BZD binding site competitive antagonist, thus it will compete for binding with BZD, thereby decreasing BZD effects. That’s why it is used in BZD overdoses and has been shown to be useful in Z-drug overdoses (zopiclone, zolpidem) as these drugs also bind to the same site as BZDs. (D) is not true, in fact the opposite is true. Some BZDs have many active metabolites, whereas most barbiturates do not have many active metabolites. This actually makes BZD dosing complicated as some BZDs active metabolites have longer half lives than the parent compound.",
  },
];
