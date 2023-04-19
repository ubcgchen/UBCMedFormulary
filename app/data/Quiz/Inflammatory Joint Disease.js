/**
 * Questions for Inflammatory Joint Disease
 * @author Michael Gong, UBC VFMP 2025
 */

export const Inflammatory_Joint_Disease = [
  {
    id: 1,
    prompt:
      "Which of the following correctly matches the drug to its mechanism of action?",
    choices: [
      "Azathioprine - inhibits dihydrofolate reductase, leading to decreased tetrahydrofolate from folic acid, resulting in decreased DNA synthesis and more",
      "Hydroxychloroquine - inhibits calcineurin in T-cells, leading to decreased cytokine production",
      "Leflunomide - inhibits de novo synthesis uridine monophosphate (rUMP) required in DNA/RNA synthesis",
      "Methotrexate - inhibits purine synthesis by being converted into a “false” guanine analogue and incorporated into DNA making it non-functional",
      "Sulfasalazine - increases lysosomal pH and inhibits lysosomal enzymes. Also inhibits TLR-9 leading to decreased immune response",
    ],
    correct:
      "Leflunomide - inhibits de novo synthesis uridine monophosphate (rUMP) required in DNA/RNA synthesis",
    tags: ["PD", "hard", "ER", "MoA", "Hema"],
    explain:
      "This question requires knowing the mechanisms of commonly used drugs in immunosuppression. The correct match is (C). (A) azathioprine should be:  inhibits purine synthesis by being converted into a “false” guanine analogue and incorporated into DNA making it non-functional. (B) hydroxychloroquine should be: increases lysosomal pH and inhibits lysosomal enzymes. Also inhibits TLR-9 leading to decreased immune response. (D) Methotrexate should be: inhibits dihydrofolate reductase, leading to decreased tetrahydrofolate from folic acid, resulting in decreased DNA synthesis and more. (E) sulfasalazine has an unknown mechanism, but is metabolized into 5-ASA, which has similar, but not equal effects like aspirin (see lower GI week MEDD411). In general these mechanisms have a commonality in decreasing DNA/RNA synthesis. This is because lymphocytes are considered rapidly dividing cells, thus drugs that inhibit DNA/RNA synthesis should have a larger effect on these cells. Moreover, many of these drugs inhibit the de novo synthesis of DNA/RNA base pairs. This is important because lymphocytes are almost entirely reliant on the de novo synthesis of base pairs, thus inhibiting that pathway would inhibit their ability to replicate DNA and divide. Other cells can use salvage pathways to salvage base pairs from other sources. These 2 reasons (highly dividing an de novo) is what helps make these medications more selective in decreasing immune response, but does not spare them completely from systemic side effects. Extra information: Recalling from immunology week, the importance of hydroxychloroquine in increasing lysosomal pH in APCs is that this decreases the loading of autoantigenic peptides onto the MHC II complex, thus leading to decreased presentation of these auto-antigens to cause an adaptive immune response. Hydroxychloroquine is also an antimalarial. Methotrexate is an antifolate, it inhibits folate in the body, which is required for many processes such as DNA/RNA/protein synthesis. This is why we supplement with folate. This question is just to help understand some of the mechanisms behind these drugs and why they work, the details are probably not that important (enzyme names etc..).",
  },
  {
    id: 2,
    prompt:
      "Which of the following correctly matches the drug to its mechanism of action?",
    choices: [
      "Allopurinol - inhibits microtubules resulting in decreased mitosis and motility",
      "Colchicine - purine analog that inhibits xanthine oxidase, resulting in decreased uric acid",
      "Cyclosporine - inhibits calcineurin in T-cells, leading to decreased cytokine production",
      "Cyclophosphamide - inhibits inosine-5′-monophosphate dehydrogenase (IMPDH), an enzyme required for de novo synthesis for GMP and IMP",
      "Mycophenolate mofetil - metabolized into phosphoramide mustard, resulting in crosslinking of DNA, thus causing cell death",
    ],
    correct:
      "Cyclosporine - inhibits calcineurin in T-cells, leading to decreased cytokine production",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires knowing the mechanisms of commonly used drugs in immunosuppression. The correct match is (C) - inhibiting calcineurin leads to decreased expression of IL-2, an important cytokine in T-cell activation. (A) allopurinol should be: purine analog that inhibits xanthine oxidase, resulting in decreased uric acid (essentially inhibits the metabolism of purine, which results in uric acid that is then excreted by the kidneys). (B) Colchicine should be: inhibits microtubules resulting in decreased mitosis and motility (there are other mechanisms that play a role such as inhibition of superoxide anion production due to urate crystals). (D) cyclophosphamide should be: metabolized into phosphoramide mustard, resulting in crosslinking of DNA, thus causing cell death. (E) Mycophenolate mofetil should be:  inhibits inosine-5′-monophosphate dehydrogenase (IMPDH), an enzyme required for de novo synthesis for GMP and IMP. In general, immunosuppression targets cells that are rapidly dividing, hence processes that are involved in DNA replication/mitosis are targeted. Moreover, lymphocytes are heavily dependent on de novo synthesis of base pairs for DNA synthesis, since they lack salvage pathways. Together these will inhibit immune response. This question is just to help understand some of the mechanisms behind these drugs and why they work, the details are probably not that important (enzyme names etc..).",
  },
  {
    id: 3,
    prompt:
      "Which of the following biologics would MOST likely inhibit both cell mediated and humoral adaptive immune response?",
    choices: [
      "Abatacept",
      "Adalimumab",
      "Etanercept",
      "Rituximab",
      "Tocilizumab",
    ],
    correct: "Abatacept",
    tags: ["PD", "hard", "Endocrinology", "MoA", "side effects"],
    explain:
      "This question requires understanding the mechanisms of different biologics and the adaptive immune response. First the mechanisms need to be addressed. (A) abatacept is CTLA4 - IgFc fusion protein, which means the “head” is CTLA4 and it has an antibody “tail”. The CTLA4 portion binds to CD80/86 (or B7) on APCs, thus inhibiting the costimulation signal (“signal 2”) that is required for T-cell activation. Normally CD80/86 binds to CD28 on T-cells for the costimulation (remember the main signal is MHC+peptide to TCR). (B) Adalimumab (Amab) and (C) etanercept (ET) essentially have the same mechanism. Both medications are anti-TNFα. Amab (also known as Humira) is a fully human monoclonal Ab that binds soluble TNFα and ET is a soluble TNFα receptor, thereby both decreasing activation of TNFα receptors and the resulting inflammatory effects (IL-1, increased neutrophil activation, fibroblast stimulation, prostaglandin, collagenase, synoviocyte proliferation, bone/cartilage resorption, etc…). (D) rituximab is an anti-CD20 monoclonal Ab. CD-20 is expressed in Pro B-cells to mature B-cells, but not on stem cells or plasma cells. CD-20’s role is not well elucidated, but is thought to involve calcium influx leading to B-cell activation. Inhibition of this leads to decreased B-cell proliferation and activation. (E) Tocilizumab is an anti-IL6 receptor monoclonal Ab, thus it binds the receptor to prevent IL-6 mediated activation and the downstream effects such as antagonistic to T-Regs, B-cell activation, monocytes-mphage differentiation, activation of osteoclasts, maturation of megakaryocytes, acute phase protein synthesis (liver), etc…). Now that we have established the mechanisms, the correct answer is (A). This is because (A) inhibits a pivotal role that has an impact on both humoral and cell mediated immune response. By inhibiting the costimulation signal during antigen presentation, then the CD4+ T helper cells can not be activated to help activate the humoral response mediated by B cells or the cell mediated response mediated by CD8+ T cells. (D) would also impair the humoral response and some cell mediated immune response. (B), (C), (E) are involved in the innate response and downstream effects of the adaptive immune response. Essentially, (A) inhibits at a shared upstream step in the activation of the 2 distinct arms of the adaptive immune response.",
  },
  {
    id: 4,
    prompt:
      "Which of the following is NOT an adverse effect or contraindication to anti-TNF therapy?",
    choices: [
      "Congestive heart failure",
      "Drug-induced lupus",
      "End stage renal disease",
      "Latent TB",
      "Multiple sclerosis",
    ],
    correct: "End stage renal disease",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding the adverse effects and contraindications of anti-TNF biologics. The correct answer is (C). ESRD is not a contraindication in using these biologics. This is because biologics are large proteins such as monoclonal antibodies or soluble forms of receptors, hence their excretion is not mediated by the kidneys. They are too large to be filtered out by the glomerulus. The metabolism and elimination of biologics are usually done with proteolytic enzymes such as during internalization into a cell and going through the endosomal pathway.  (A) through trials and observational studies, anti-TNF therapy worsens the prognosis for patients with heart failure. (B) is a known adverse effect of these medications. Patients undergoing TNF therapy may be ANA+, but can be anti-histone -. (D) by inhibiting TNF, the immune response is suppressed, thus latent infections like TB can reactivate and cause harm. Latent TB infections are not the only infections to worry about. Fungal infections, hepatitis reactivation, HIV, and other epidemiological related factors such as geography (e.g. Ohio River valley- histoplasmosis, Southwestern America - coccidioides, PNW - cryptococcus) should also be worked up. (E) These therapies have shown an increased risk or worsening of MS and other inflammatory demyelinating central nervous system complications such as transverse myelitis and optic neuritis.",
  },
  {
    id: 5,
    prompt:
      "A 42 y/o male presents with a 6 month history of lower back pain to his GP. He denies any trauma, saddle anesthesia, bowel/bladder dysfunction, fever, weight loss, or cancer Hx. He describes it as a dull achy pain and feels stiff. He also says that recently he has felt a dull achy pain in his left knee, right elbow, and right fingers. He finds that those joints and his back are stiff in the morning for around 45 mins. He has a positive family history for psoriasis, but has not been diagnosed with it and denies any new rash. On examination his right DIPs appear swollen and the other involved joints also appear swollen. There is no evidence of nail disease (pitting, onycholysis) or rash. The GP orders an X-ray of her right hand, which shows erosions at the DIP and subchondral sclerosis. A few blood tests that come back negative for RA factor and elevated ESR and CRP. Given this presentation, the most likely diagnosis is generally NOT managed with which of the following?",
    choices: [
      "Cyclosporine",
      "Hydroxychloroquine",
      "Leflunomide",
      "Methotrexate",
      "Sulfasalazine",
    ],
    correct: "Hydroxychloroquine",
    tags: ["PD", "hard", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the diagnosis of PsA and the treatment options. In this vignette we are presented with a patient with some sort of inflammatory back pain and peripheral inflammatory arthritis (L Knee, R elb, R DIPs involvement) from the history (prolonged morning stiffness). The distribution is asymmetrical. FamHx positive for Ps. DIPs involved are all pointing towards PsA over the other inflammatory arthritis causes or axial AnkSpond (since there is peripheral joint involvement). Some things pointing away include lack of nail involvement or rash, but PsA can present with joint involvements prior to rash. Xray confirms an inflammatory process (erosions). The blood tests return confirming a sero-negative arthritis (RA -, ESR/CRP elevated). The only medication from the choices that is not used to treat PsA is (B). This is because (B) can actually cause psoriasis to flare up. The mechanism behind this is unclear, but potentially involves inhibitions of transglutaminases in the epidermis layer causing breaks, which stimulates a barrier restoration response, thus triggering psoriasis to occur or flare up. In peripheral PsA, classic DMARDs and NSAIDs are the initial pharmacotherapies. Biologics (or new targeted therapies) can be considered in more serious cases (TNF, IL, JAK). It’s also important to remember that PsA can present in other ways such as axial, nails, skin, enthesitis, dactylitis, and in different combinations. Each will have their own treatment strategies, but in general its NSAIDs and if possible DMARDs (minus HCQ).",
  },
  {
    id: 6,
    prompt:
      "A 68 y/o patient presents to his GP with ankle joint pain for the last 2 days. He denies any trauma, fever, chills, and never been exposed to TB. He points toward the lateral side of his left ankle as the area of pain. He describes it as severe pain and does not want anyone touching it. His vitals are all normal. His BMI is 30. On examination the ankle is swollen, red, warm, and tophi are present. No other joints are affected. His past medical history includes a recent diagnosis of AFib, HTN, CKD, and T2DM, and was started on pharmacological management for those conditions. The medications are listed below. Which of the following medications would most likely increase the risk of the presenting condition?",
    choices: [
      "Apixaban",
      "Bisoprolol",
      "Hydrochlorothiazide",
      "Metformin",
      "Ramipril",
    ],
    correct: "Hydrochlorothiazide",
    tags: ["PK", "medium", "Endocrinology"],
    explain:
      "This question requires understanding gout and some iatrogenic risk factors. In this vignette we are presented with a patient with monoarthritis. The history makes septic arthritis less likely. The physical exam reveals tophi, which highly suggests gout. He has many risk factors for gout: elevated BMI (adipokines), CKD (decreased urinary excretion of uric acid), thiazide use (causes reabsorption of uric acid at the nephrons). Therefore, the medication that increases his risk of gout is (C). HCTZ causes increased reabsorption of uric acid at the proximal tubules. (FYI) One explanation is that HCTZ competes with uric acid for transport into the proximal tubule cells via OAT, thus resulting in increased serum uric acid. Moreover, transport out of the cell into the luminal side also results in increased uric acid reabsorption as it is exchanged with HCTZ via URAT. The reabsorbed uric acid either is transported out to the luminal side or to the blood side via different transporters. Remember HCTZ needs to be on the luminal side to have its diuretic effect. TLDR HCTZ decreases the excretion of uric acid, while also increasing the reabsorption.",
  },
  {
    id: 7,
    prompt:
      "A 54 y/o patient with RA is hospitalized for pneumonitis and interstitial lung disease. He has failed three different combinations of DMARDs and the consulting rheumatologist thinks it might be time to start therapy with biologics. He currently lives in the Lower Mainland area and does not travel. His PMHx includes T2DM. Which of the following is NOT a routine workup prior to initiating biologic therapy?",
    choices: [
      "CXR",
      "IGRA",
      "Hep B and C serology",
      "HIV PCR",
      "Pseudomonas culture",
    ],
    correct: "Pseudomonas culture",
    tags: ["PD", "easy", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the workup required prior to starting immunosuppressive therapy. In this vignette we have a patient with RA who has failed many DMARDs combinations, and potentially an adverse reaction to methotrexate (pneumonitis and ILD). He would definitely be considered for biologics. His travel history is unremarkable. The workup prior to starting biologics is to assess for latent infections as these can be reactivated when undergoing immunosuppression. (A) and (B) are used to screen for latent TB and potentially other fungal infections that may cause lung nodules. (C) is used to screen for chronic latent infections that can be reactivated when immunosuppressed. (D) if he was HIV + we wouldn't want to immunosuppress him even more. Hence, the only workup that is not routine is the (E) Pseudomonas culture. Although immunosuppressed patients are more at risk for Pseudomonas and he does have a risk factor (T2DM), a culture would not be routinely done prior to biologics. If he was showing signs of a bacterial infection, then we would want to culture and treat prior to starting therapy.",
  },
  {
    id: 8,
    prompt:
      "A 32 y/o female presents to her GP with a 4 month history of bilateral elbow joint pain. She describes the pain as dull and achy. She also says it’s a lot worse in the morning and stiff for more than 30 mins. She finds rest to not be helpful at all and doesn’t seem to notice too much pain when she plays golf. She denies any recent trauma or neurological symptoms. She has a 10 pack year smoking hx. The rest of her PMHx is unremarkable. Her physical exam shows mild swelling in her PIPs bilaterally, and there is ulnar deviation, swollen elbows and knees bilaterally. Her mouth mucosal membranes appear dry, and she does recall that she has been having dry eyes for a while, but she thought that was from staring at the computer for too long at work. No rash was observed and her BMI is ~ 20. Xrays of her elbows show erosions, no osteophytes or subchondral cysts/sclerosis. Blood tests are ordered and show: elevated CRP, RA (+), anti-CCP (-), ANA (1:40). She also plans on having a child soon with her husband. Given this presentation, which of the following management plans would you consider using to treat the most likely diagnosis (assume concomitant bridging therapy)?",
    choices: [
      "Hydroxychloroquine, Methotrexate, Sulfasalazine",
      "Hydroxychloroquine, Leflunomide, Sulfasalazine",
      "Hydroxychloroquine, Sulfasalazine",
      "Hydroxychloroquine, Leflunomide",
      "Hydroxychloroquine, Methotrexate",
    ],
    correct: "Hydroxychloroquine, Sulfasalazine",
    tags: ["PD", "medium", "MoA", "Endocrinology"],
    explain:
      "This question requires understanding the treatment options for RA in patients planning on having children. In this vignette we are presented with a patient with an inflammatory joint disease given the history (prolonged morning stiffness, improves with exercise). We suspect RA/SLE most likely given the symmetrical joint involvement (PIP incl), and some extra articular features such as dry mouth, dry eyes (Sjorgen/sicca syndrome). Her Xray further suggests inflammatory joint disease, specifically RA given the erosions (SLE= no erosions). She has a positive smoking hx (risk factor). Finally her blood tests confirm our hypothesis that this is RA given the positive RA, and low ANA titre (less likely SLE), anti-CCP is negative (a specific test for RA), which indicates her RA having a better prognosis. Given this ideally we’d want to start her on DMARDs and eventually into triple therapy (methotrexate OR leflunomide, hydroxychloroquine, sulfasalazine). However, the patient has expressed plans on getting pregnant, therefore the DMARDs we plan on using need to be safe in pregnancy and teratogenic. Both leflunomide and methotrexate are highly teratogenic! Remember methotrexate is an antifolate and leflunomide inhibits purine synthesis (DNA synthesis is important for a growing fetus). Therefore, any plans with those drugs are not ideal. Therefore, we are left with (C), the only plan that doesn’t contain teratogenic drugs. Although HCQ and Sulfa aren’t considered teratogenic, we still want to aim for the lowest possible dose to minimize exposure. If the patient was already on the standard triple therapy, we would stop her methotrexate. If she was on leflunomide, we would need to administer cholestyramine (bile acid binder) to decrease enterohepatic recirculation, this will prevent excreted leflunomide in the bile from being reabsorbed. Another medication we can not use in a pregnant patient is cyclophosphamide (alkylates DNA and halts synthesis). Biologics in general are considered safe in pregnancy, this is because these are usually large proteins that do not readily cross the placenta. This is not a hard set rule, but if the drug messes with DNA synthesis, it’s probably not safe in pregnancy.",
  },
  {
    id: 9,
    prompt:
      "A 40 y/o female patient with RA presents to her rheumatologist. She is currently on methotrexate, sulfasalazine, hydroxychloroquine, and low dose prednisone. She previously has tried two different combinations with cyclosporine, leflunomide, and tacrolimus as well. Her blood tests were RF + (high titre), anti-CCP +, consistently elevated CRP and ESR, Hgb 90 (low), Alb 38 (low-normal), AST and ALT ~60 (slightly elevated). Currently her RA involves multiple joints bilaterally, including those in her fingers, toes, knees, and elbows. Given this presentation, what would be the next step in her management?",
    choices: [
      "Add Abatacept",
      "Add Etanercept",
      "Add Rituximab",
      "Change methotrexate to leflunomide",
      "Change to IV methylprednisolone",
    ],
    correct: "Add Etanercept",
    tags: ["hard", "MoA", "PD", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the management of RA. In this vignette we are presented with a patient with RA that has not been controlled well with multiple different combinations of DMARDs. She also has other evidence of severe RA: RF and anti-CCP+, anemia of chronic disease, Alb (borderline low), and some slightly raised liver enzymes (possibly due to MTX), and diffuse joint involvement. In this case we would definitely consider starting her on a biologic and she would qualify in BC for this. The first class of biologics we consider are anti-TNF, which in this case is (B), the correct answer. (B) is a soluble anti-TNF receptor, thus mops up floating TNFα, thus decreasing its inflammatory effects. (A) and (C) are both biologics, but they would be added following failure of the first biologics. Rmab is an anti-CD20 mAb, so it targets B-cell proliferation and activation, while abatacept targets the co-stimulation signal during antigen presentation to T-cells. (D) would not be helpful as she has failed the different DMARD combinations and will need something stronger like biologics. (E) she isn’t currently facing a life threatening condition that would require rapid steroid treatment.",
  },
  {
    id: 10,
    prompt:
      "A 42 y/o patient with a 10 yr history of lupus presents to her opthamologist for worsening vision. She has noticed that her central vision isn’t as clear anymore and objects that are red appear “different” and less “vibrant”. Her lupus is manifested in joint pain and lupus nephritis (class II) that has not progressed to nephrotic syndrome. Which of the following is the MOST likely medication to cause vision changes?",
    choices: [
      "Celecoxcib",
      "Cyclosporine",
      "Hydroxychloroquine",
      "Methotrexate",
      "Mycophenolate Mofetil",
    ],
    correct: "Hydroxychloroquine",
    tags: ["medium", "MoA", "PD", "Endocrinology"],
    explain:
      "This question requires understanding the adverse effects of DMARDs. In this vignette we are presented with a patient with SLE that is now experiencing visual changes. The medication that is most likely to cause visual changes is (C), the correct answer. HCQ use causes decreased central vision and color vision disturbances (specifically red colour). This is due to deposition of HCQ into melanocytes in the retina. This is why patients on HCQ have eye exam follow ups. (A) is a COX2 selective inhibitor, side effects to worry about would be cardiovascular events (recall back to OA week for explanations), kidney problems. (B) is a calcineurin inhibitor with lots of side effects, and increased risk of lymphomas and squamous cell carcinoma (D) MTX also has lots of side effects such as hepatitis, pneumonitis, pancytopenias, mucositis, interstitial lung dz. (E) also has lots of side effects such as colitis. Given all the drugs are immunosuppressive (except for (A)), they will all lead to increased risk of infections.",
  },
  {
    id: 11,
    prompt:
      "A 35 y/o patient with a new diagnosis of RA (RF +, anti-CCP +) presents to her rheumatologist to discuss further management of her condition. She currently takes indomethacin for her RA and is open to starting DMARDs such as methotrexate (MTX) and/or hydroxychloroquine (HCQ). How should the rheumatologist approach this?",
    choices: [
      "Start MTX",
      "Start HCQ + MTX",
      "Start prednisone and MTX + HCQ, continue prednisone till RA remission, then taper",
      "Start prednisone and MTX + HCQ, then stop prednisone @ ~4-6wks w/ no taper",
      "Start prednisone and MTX + HCQ, then stop prednisone @ ~4-6wks w/ slow taper",
    ],
    correct:
      "Start prednisone and MTX + HCQ, then stop prednisone @ ~4-6wks w/ slow taper",
    tags: ["PD", "medium", "Endocrinology", "side effects", "MoA"],
    explain:
      "This question requires understanding DMARDs initiation and role of glucocorticoids in managing RA. In this vignette we are presented with a patient with RA that is associated with a poor prognosis (CCP and RF +). She is only on a NSAID and will need to start DMARDs ASAP if she wants to achieve remission. Initiating DMARDs should involve bridging with steroids since the effects of DMARDs are delayed (MTX takes 4-12wks, HCQ takes10-26wks). The steroid bridge will help improve her functional status and treat the symptoms such as decreasing inflammation, which leads to decrease in pain. Therefore rule out (A), (B). However, we don’t want to keep patients on steroids for extended periods of time because steroids come with lots of long term side effects (recall to MEDD412 adrenal week Qs for more info on side effects). These include, but are not limited to osteoporosis, adrenal suppression, obesity, cardiovascular, delirium, AVN, cataracts, Cushing’s, metabolic syndrome, peptic ulcer dz (basically think of Cushing’s disease and that sums up the side effects). Thus, we want to bridge with steroids at the lowest possible dose, lowest amount of time, and then taper. The tapering part is important because providing exogenous cortisol/steroids for an extended period will suppress the HPA axis. This is because ACTH release will be suppressed, but ACTH is required to prevent adrenal gland atrophy. The glands will atrophy under long term steroid use. If we cut cold turkey, the body will not have any cortisol, thus precipitating a life threatening adrenal crisis. The taper will allow the body’s HPA axis to slowly recover (think of it warming up) and start releasing ACTH to stimulate the adrenal glands. Hence the correct answer is (E), where we bridge with prednisone PO till when MTX is expected to work, then slowly taper the steroid dose down.",
  },
  {
    id: 12,
    prompt:
      "A 34 y/o male presents to his GP with a 5 month history of lower back and butt pain. He denies any trauma, radiation, saddle anesthesia, new bowel/bladder dysfunction, fever, weight loss, IVDU or cancer Hx. He describes it as a dull achy pain and feels stiff if he sits for a while, and sometimes wakes him up at night. The stiffness is especially long in the morning, which he describes as taking over an hour before it goes away. He says he feels better when he is engaging in his hobbies such as tennis and snowboarding, but gets worse when he rests. He describes that ibuprofen does alleviate some pain. He denies any joint pain or a history of psoriasis. He does have ulcerative colitis, which is managed with budesonide (PO) and 5-ASA (PO), and is well controlled. On examination there are no rashes, a normal eye exam. The back MSK exam shows mild decreased lumbar RoM. The GP orders some investigations: pelvic X-Ray with SI joints visualized is unremarkable, CRP is only mildly elevated, HLA B27 is positive. Following these results, a spine MRI is ordered and he is placed on the waitlist. Given his presentation, which of the following medications has been shown to be effective in treating the most likely diagnosis?",
    choices: [
      "Adalimumab",
      "Hydroxychloroquine",
      "Methotrexate",
      "Prednisone",
      "Sulfasalazine",
    ],
    correct: "Adalimumab",
    tags: ["PD", "medium", "MoA", "Endocrinology", "side effects"],
    explain:
      "This question requires understanding the diagnosis of AnkSpond and its management. In this vignette we are presented with a patient with suspected inflammatory back disease given the history (prolonged morning stiffness, improves with exercise, NSAIDs somewhat helpful). He does not have peripheral sx such as joints, eyes, skin, but he does have decreased back RoM. He also has a hx of IBD. Our hypothesis is probably AnkSpond, which is further supported by the elevated CRP and HLAB27 +. The X-ray of the SI joints is unremarkable, but this is not highly sensitive and symptoms can occur before radiographic changes. However, AnkSpond (or axial PsA) is still the most likely diagnosis. The treatment options for AnkSpond (or axial PsA) isn’t extensive. The mainstay of therapy is symptom management with NSAIDs (incl COX2 selective) and if serious enough, biologics such as anti-TNF. Therefore, the correct answer is (A), an anti-TNF monoclonal Ab. The other medications have not been shown to be effective in treating AnkSpond or axial PsA. If the pending MRI shows subchondral bone marrow edema at the SI joints and acute bilateral sacroiliitis, then we have a positive MRI for AnkSpond, however if these results are negative, AnkSpond is not ruled out as it is a clinical Dx.",
  },
  {
    id: 13,
    prompt:
      "A 32 y/o female patient presents to her GP for a followup of some blood tests. She initially presented to her GP 3 months ago for fever, weight loss, and a rash on her face. The rash is symmetrical on her cheeks and nose, but spares the nasolabial folds. She also has PIP pain bilaterally. The pain is described as dull and achy and is especially stiff and worse in the morning for about 1 hr, to the point where she has trouble holding her utensils when eating breakfast. She also has a 2 yr history of Raynauld’s that is managed conservatively. The blood tests that came back show an ANA 1:160, CRP and ESR elevated, RA (+), low C3 and C4, anti-CCP (-), ENA (+ for anti-Smith). Given this presentation, the management of the most likely diagnosis should include which of the following medications (assume no drug allergies and drug is tolerable)?",
    choices: [
      "Azathioprine",
      "Cyclophosphamide",
      "Hydroxychloroquine",
      "Methotrexate",
      "Mycophenolate mofetil",
    ],
    correct: "Hydroxychloroquine",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      " This question requires understanding the management of SLE. In this vignette we are presented with a patient with cutaneous and joint involved inflammatory disease, which is affecting her daily function. She has some extra articular features such as Raynauld’s. Given the rash and joint symptoms, SLE should be high up on our differential. Blood tests ordered further corroborate this given the high ANA titre, elevated CRP/ESR, RA (+) in ~⅓, low C3/C4 (being used up due to the inflammatory response), anti-CCP (-) (probably not RA), ENA +. Therefore, SLE is the most likely diagnosis. Thus, (C) is the correct answer. Almost all patients with SLE should be on HCQ and given that there does not appear to be other more serious manifestations of SLE yet (like nephritis, CNS, CV, etc..), HCQ is an adequate starting point.",
  },
  {
    id: 14,
    prompt:
      "A 40 y/o female presents to the ER with pain and swelling in her left calf. She denies any recent travel history, surgeries, cancer Dx, or pleuritic chest pain. Her vitals show BP 140/90, HR 90, Temp 37.9 degC, RR 20, O2 sat 99%. On further examination her right leg, hands and fingers appear swollen with pitting edema. Some non-scarring alopecia are noted as well. A point of care U/S is done on her left leg and there is decreased compressibility of the popliteal vein and is started on rivaroxaban. Some initial labs return. U/A shows: severe proteinuria, RBC and fatty casts (and fat oval bodies), hematuria. Albumin low. Creatinine elevated (baseline unknown). The team is suspicious of the underlying cause and admits her for further workup, which reveals elevated CRP, low C3/C4, RF -, ANA 1:320 → elevated dsDNA.  A renal biopsy is ordered. Given this presentation, which of the following medications would you treat this patient with?",
    choices: [
      "Glucocorticoids",
      "Methotrexate",
      "Mycophenolate mofetil (MMF)",
      "A and B",
      "A and C",
    ],
    correct: "A and C",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the management of SLE complications using  lupus nephritis as an example. In this vignette we are presented with a patient that appears to have a DVT and is treated for that, but also appears to have some features of an underlying autoimmune condition given the non scarring alopecia and an underlying renal issue given the nephrotic syndrome-like presentation (edema and hypercoagulability → either due to renal loss of anticoagulant protein or the underlying SLE with positive APLA). A work up is done and confirms nephrotic syndrome (pitting edema, proteinuria (>3.5g/d), low Alb, hyperlipidemia given the fatty casts + fat oval bodies), she also has signs of nephritic processes as well from the hematuria. A workup for an underlying cause suggests SLE given the elevated CRP, low C3/C4, high ANA titre with elevated dsDNA. In this case we have a serious case of lupus nephritis possible class IV (diffuse LN; she also has possible HTN) with some possible kidney injury (elevated Cr, but baseline unknown), therefore we need to initiate rapid treatment and DMARDs used for lupus nephritis, thus the correct answer is (E) both glucocorticoids and MMF would be used. Glucocorticoids for short term rapid anti inflammatory response combined with MMF for longer term maintenance before tapering. Some other options would be using cyclophosphamide (IV for fast response), tacrolimus, or cyclosporine in place of MMF. Step up to rituximab if none of the small molecule DMARDs work. (B) is not usually used alone for lupus nephritis, and takes too long to work (4-12wks).",
  },
  {
    id: 15,
    prompt:
      "A patient presents to the ER with pulmonary hemorrhage secondary to SLE. In this case, which of the following pharmacotherapy options would be the most effective?",
    choices: [
      "Cyclophosphamide + glucocorticoids",
      "Hydroxychloroquine + glucocorticoids",
      "Indomethacin + glucocorticoids",
      "Methotrexate + glucocorticoids",
      "Methylprednisolone",
    ],
    correct: "Cyclophosphamide + glucocorticoids",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the management of life threatening emergencies in rheumatoid conditions. In this vignette we need to initiate rapid immunosuppressive treatment to treat the pulmonary hemorrhage. Therefore, the correct answer is (A). Both cyclophosphamide and glucocorticoids can be administered IV for a fast response. In general for most life threatening complications of RA or SLE, glucocorticoids and cyclophosphamide are used given their ability to be IV for fast administration to therapeutic plasma concentration to suppress the autoimmune attack. (B) and (D) HCQ + MTX will take too long. (C) is a NSAID and would not be strong enough for this, and is only PO (ketorolac is an IV NSAID available in Canada). (E) is an IV glucocorticoid, but alone would not be as effective as a combination with IV cyclophosphamide.",
  },
  {
    id: 16,
    prompt:
      "A 46 y/o patient with a 4 yr history of RA presents to her rheumatologist with new onset severe nausea and vomiting. She was recently started on a triple therapy of DMARDs: sulfasalazine, hydroxychloroquine, methotrexate. During the transition to DMARDs she was bridged with prednisone. Which of the following additions to her management plan could help alleviate the new problems she is now experiencing?",
    choices: ["B12", "Folate", "Leflunomide", "TMP/SMX", "Vitamin D"],
    correct: "Folate",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the mechanism of methotrexate and its adverse effects. In this vignette we are presented with a patient with mucositis and GI upset. The most likely medication to cause this is MTX. To help manage this we can provide folate, therefore (B) is the correct answer. This can be rationalized by the fact that MTX is an antifolate, thus it inhibits folate metabolism for many cellular processes. If we provide extra folate, we may be able to counteract some of the side effects in the GI tract such as mucositis and upset. (A) not really helpful in this case, but wouldn’t hurt. (C) is an option if the patient is unable to tolerate MTX, then we would replace MTX with leflunomide. (D) is contraindicated in patients using MTX. This is because TMP/SMX is an antifolate antibiotic, thus together it can cause severe myelosuppression, mucositis, and nephrotoxicity - in fact both inhibit dihydrofolate reductase (see MEDD421 diarrhea week Qs for TMP/SMX mechanism explanation). (E) vitamin D wouldn’t help, but probably doesn’t hurt.",
  },
  {
    id: 17,
    prompt:
      "A 69 y/o woman with no significant medical history presents to the clinic with a headache, fatigue, and loss of vision out of her right eye. She has complained about muscle aches before, specifically her shoulder, but she assumed it was from her years of playing volleyball. She also finds it painful to chew and wash her hair and has noticed some weight loss. Upon examination, her vitals are normal, left eye normal, and only light perception for her right eye with a right afferent pupillary deficit. Her right superficial temporal artery is tender on palpation. Lab results for CRP and ESR are pending. Given this presentation, the most likely diagnosis is best treated with which of the following drugs?",
    choices: [
      "Azathioprine",
      "Hydroxychloroquine",
      "Ibuprofen",
      "Methotrexate",
      "Prednisone",
    ],
    correct: "Prednisone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the diagnosis of GCA and its management. In this vignette we are presented with an elderly lady with headache, vision loss, jaw pain  (chewing). This should immediately ring bells for giant cell arteritis (GCA). Other supportive features are the muscle aches (PMR?), wt loss, and physical exam findings that further corroborate the presentation (eye exam and tender temporal artery). This is an optho emergency, and we would initiate treatment with high dose prednisone ASAP, therefore (E) is the correct answer. Failure to do so could lead to permanent vision loss. GCA is associated with polymyalgia rheumatica (PMR) and is a vasculitis that affects the temporal artery and optho arteries (ophthalmic artery and/or the posterior ciliary arteries).",
  },
  {
    id: 18,
    prompt:
      "A 58 y/o female presents to her GP with hip pain. She says this started about 4 months ago. When asked to point where the pain is she just says “It’s kinda just all over my hip” and my left shoulder. She denies any headaches, jaw pain, vision changes, or shoulder pain. On examination there are no signs of joint swelling and the rest of the MSK exam is grossly unremarkable. An ESR and CRP are ordered and are both elevated. Given this presentation, the best treatment for her would be:",
    choices: [
      "Cyclophosphamide",
      "Hydroxychloroquine",
      "High dose prednisone",
      "Low dose prednisone",
      "Methotrexate",
    ],
    correct: "Low dose prednisone",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the diagnosis of polyrheumatica arthritis and its management. In this vignette we are presented with a patient with hip girdle pain. She denies vision changes, headaches, jaw pain, thus we aren’t thinking of GCA, an optho emergency. Interestingly she does not have shoulder pain, but given the overall presentation and elevated ESR and CRP, PMR would be our top DDx. Given that, we would initiate treatment with (D) low dose prednisone. Remember steroids have many side effects, thus we want to provide the lowest effective dose if possible. (C) would be for GCA, since it is an emergency. The others are DMARDs and would not be indicated in PMR.",
  },
  {
    id: 19,
    prompt:
      "A 67 y/o male patient presents to his GP with severe pain in his right big toe that started yesterday. He is unable to weight bear and describes the pain as if “someone 'Whac-A-Mole'd' my toe a bunch of times“. He denies any trauma, fever, or chills. His diet is described as heavy on the “good stuff“, which he says is beer and fried chicken. He has a history of portal hypertension secondary to cirrhosis that is treated with furosemide and spironolactone, HTN with ramipril, T2DM with metformin and empagliflozin, and ASA over the counter. He denies any other joint pain. On examination his right MTP joint is swollen, warm, red, and has tophi lumps. He also has a previous exposure to TB many years ago. A joint aspiration is done, which is sent for acid fast bacilli stain, cell count, culture, and polarized light. Under polarized light, negatively birefringent crystals are observed, with yellow parallel and blue orthogonal to the axis. Given this presentation, the most likely diagnosis is NOT initially treated with which of the following medications?",
    choices: [
      "Allopurinol",
      "Colchicine",
      "Indomethacin",
      "Naproxen",
      "Prednisone",
    ],
    correct: "Allopurinol",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding the diagnosis of gout and its initial treatment strategy.  In this vignette we are presented with a patient with gout given the history, risk factors (PMHx, diet, diuretics, ASA), phys exam findings (tophi, monoarthritis, inflammatory), and joint aspiration results (negatively birefringent crystals, yellow parallel). The medication that we do NOT use initially is (A) allopurinol. Allopurinol is a xanthine oxidase inhibitor, which decreases levels of uric acid. SOunds great, but in an acute attack it actually exacerbates the condition, which is thought to be due to increased mobilization of uric acid leading to increased serum concentration of uric acid and precipitating an attack. Allopurinol is good for chronic management of high uric acid levels or prophylaxis if there have been 3+ attacks after having the patient on colchicine or NSAIDs. Start low then go up and decrease dose in patients with renal issues. If a patient is allergic, then consider febuxostat (same MoA). Xanthine oxidase is an enzyme involved in metabolizing purines to uric acid, thus inhibition decreases uric acid production. The acute management includes colchicine (B), steroids (E), and NSAIDs (C) and (D). Essentially, these medications work to decrease inflammation. One example is colchicine inhibition of immune cells like PMNs and macrophages, and cytokine production via various mechanisms such as microtubule polymerization inhibition.",
  },
  {
    id: 20,
    prompt:
      "A 65 y/o patient with a history of HTN and T2DM presents to the ER with a rash (4 dy hx). Upon further history taking, it is revealed that he was treated for asymptomatic hyperuricemia with a uric acid lowering medication approximately 1 mo ago. His vitals are normal except for a low grade fever. Upon further examination there is a large maculopapular rash that covers 50% of his body and involves his face, lips, eyes, oral and genital mucosa. There are erosions present as well. Cultures are taken and she is transferred to the burn unit. Assuming an iatrogenic cause and this presentation, which of the following is a risk factor in developing the presentation AND the drug in question?",
    choices: [
      "HLA B27:01 - allopurinol",
      "HLA B27:01 - colchicine",
      "HLA DQ2 - indomethacin",
      "HLA B58:01 - allopurinol",
      "HLA B58:01 - colchicine",
    ],
    correct: "HLA B58:01 - allopurinol",
    tags: ["PD", "medium", "side effects", "Endocrinology"],
    explain:
      "This question requires understanding an important adverse effect of an anti-gout medication and an underlying risk factor. In this vignette we are presented with a patient that was treated for ASx hyperuricemia (which should not have been done!) with a uric acid lowering drug. He now presents with a massive rash that involves his mucosa and >30% of his body. This is toxic epidermal necrolysis, an extremely serious adverse drug reaction. The most likely identity of the drug given the Hx and risk of TEN is allopurinol (rule out (B), (C), and (E)). The associated risk factor to developing TEN, while on allopurinol is HLA B58:01 positive, hence (D) is the correct answer. From this case, we should understand that we should not treat asymptomatic hyperuricemia given the potential adverse risk of allopurinol (allopurinol has many adverse effects), and if we do start someone with allopurinol, we should consider testing their HLA to assess their risk for TEN. HLA B27:01 is associated with seronegative inflammatory diseases such as AnkSpond, PsA, reactive arthritis, etc.. HLADQ2 is associated with Celiacs, T1DM.",
  },
];
