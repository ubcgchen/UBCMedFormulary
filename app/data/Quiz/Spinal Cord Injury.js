export const sci = [
  {
    id: 1,
    prompt:
      "A 25 y/o patient with an incomplete spinal cord injury at C7 after a parkouring accident presents to his physiatrist appointment due to increased spasticity. This presentation is usually triggered after urinary tract infections and causes him lots of pain. He is prescribed baclofen to help with his upper motor neuron injury. Which of the following correctly describes the mechanism of action of the treatment?",
    choices: [
      "Activate cannabinoid 1 receptors (CB1) on presynaptic neurons to decrease release of excitatory neurotransmitter",
      "Activate GABA-B receptors to decrease the release of excitatory neurotransmitters and inhibit transmission, on pre and postsynaptic neurons, respectively",
      "Inhibit AMPA glutamate receptors on postsynaptic neurons to block excitatory glutamate transmission",
      "Inhibit nicotinic acetylcholine receptors at neuromuscular junctions to inhibit muscle contraction",
      "Inhibit NMDA glutamate receptors on presynaptic neurons to decrease the release of excitatory neurotransmitters",
    ],
    correct:
      "Activate GABA-B receptors to decrease the release of excitatory neurotransmitters and inhibit transmission, on pre and postsynaptic neurons, respectively",
    tags: ["PD", "medium", "MoA", "Physiatry", "Neurology"],
    explain: "This question requires understanding the mechanism of action for a drug used to treat spasticity. In this vignette, we are presented with a patient who’s spasticity is usually triggered following UTI. Baclofen is a commonly used medication to decrease spasticity. The MoA is correctly described by (B). By targeting GABA-B, baclofen increases the effect of the inhibitory network of the CNS, which hopefully inhibits signals that would cause painful muscle spasms seen in patients with SCIs. However, because baclofen activates the inhibitory part of the CNS, a main side effect is sedation, therefore timing of medication is important (other side effects are fairly logical based on its MoA: muscle weakness, confusion, hypotension). Baclofen is also the first-line treatment for spasticity. Baclofen can be delivered orally, or intrathecally (intrathecal pump) to specifically target the neurons in the spinal cord.",
  },
  {
    id: 2,
    prompt:
      "Botulinum toxin (botox) is a potent neurotoxin. Through what mechanism of action can botox be used to treat spasticity or for cosmetic procedures to decrease wrinkles?",
    choices: [
      "Cleaves acetylcholine into acetic acid and choline in vesicles at axon terminals, thus leading to muscle paralysis",
      "Cleaves SNARE proteins on membranes in the axon terminal to prevent vesicle fusion and subsequent release of acetylcholine, thus leading to muscle paralysis",
      "Inhibits nicotinic acetylcholine receptors at neuromuscular junctions to inhibit muscle contraction, thus leading to muscle paralysis",
      "Inhibits voltage gated Ca\u00B2\u207a channels at neuromuscular junctions to inhibit muscle contraction, thus leading to muscle paralysis",
    ],
    correct:
      "Cleaves SNARE proteins on membranes in the axon terminal to prevent vesicle fusion and subsequent release of acetylcholine, thus leading to muscle paralysis",
    tags: ["PD", "easy", "MoA", "Physiatry", "Neurology"],
    explain: "This question requires understanding the mechanism of action of botulinum toxin (botox). (B) correctly describes the mechanism of action of botox. Botox will cleave the SNARE proteins, therefore there will be no fusion of vesicles containing ACh with the membrane to be released into the neuromuscular junction. This allows specific muscles to be targeted for paralysis by SC or IM. This also allows botox to be used to prevent wrinkles by paralyzing the muscles on the face.",
  },
];
