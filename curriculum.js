const CURRICULUM = {
  cardio: CARDIO,

  found: {
    title: 'Foundations',
    intro: 'Mechanisms first: signaling, genetics, metabolism, and pharmacology that recur across Step 1.',
    lessons: [
      {
        id:'gproteins', title:'Gs, Gi & Gq', subtitle:'Second messengers without memorization', character:'Signal', icon:'⌘',
        ai:'Gs stimulates adenylyl cyclase and raises cyclic AMP. Gi inhibits adenylyl cyclase and lowers cyclic AMP. Gq activates phospholipase C, generating IP3 and DAG; IP3 releases calcium from the endoplasmic reticulum and DAG activates protein kinase C.',
        steps:[
          {type:'teach',title:'Three G-protein pathways',text:'Gs stimulates adenylyl cyclase, increasing cyclic adenosine monophosphate (cAMP). Gi inhibits adenylyl cyclase, decreasing cAMP. Gq activates phospholipase C (PLC), which cleaves PIP2 into inositol trisphosphate (IP3) and diacylglycerol (DAG).',pearl:'IP3 raises cytosolic Ca²⁺ by releasing it from the endoplasmic reticulum; DAG activates protein kinase C.'},
          {type:'match',q:'Match the G protein to its immediate signaling effect.',pairs:[['Gs','Stimulates adenylyl cyclase'],['Gi','Inhibits adenylyl cyclase'],['Gq','Activates phospholipase C']]},
          {type:'choice',q:'A receptor activates Gq. Which event occurs next?',opts:['Inhibition of phospholipase C','Formation of IP3 and DAG','Direct opening of nuclear steroid receptors','Decreased intracellular calcium'],a:1,why:'Gq activates PLC. PLC cleaves PIP2 into IP3 and DAG. IP3 then releases Ca²⁺ from the endoplasmic reticulum.'},
          {type:'multi',q:'Which statements about the Gq pathway are correct?',opts:['IP3 promotes Ca²⁺ release from the endoplasmic reticulum','DAG activates protein kinase C','Gq directly inhibits adenylyl cyclase','PLC acts on PIP2'],a:[0,1,3],why:'Gq activates PLC; PLC cleaves PIP2 into IP3 and DAG. IP3 releases Ca²⁺ and DAG activates protein kinase C.'}
        ]
      },
      {
        id:'mutations', title:'Mutations & repeats', subtitle:'Missense, nonsense, frameshift, trinucleotide repeats', character:'DNA', icon:'◇',
        ai:'Missense changes one amino acid; nonsense creates a premature stop codon; frameshift changes the reading frame after an insertion or deletion not divisible by three. Huntington disease uses CAG repeats; myotonic dystrophy type 1 uses CTG repeats.',
        steps:[
          {type:'teach',title:'Read the consequence, not the spelling',text:'A missense mutation changes one amino acid. A nonsense mutation introduces a premature stop codon. An insertion or deletion not divisible by three causes a frameshift, altering downstream codons.',pearl:'Frameshift effects usually extend beyond a single codon; missense effects do not.'},
          {type:'choice',q:'A single-base substitution converts a codon for glutamine into a stop codon. What type of mutation is this?',opts:['Missense','Nonsense','Frameshift','Trinucleotide expansion'],a:1,why:'A nonsense mutation converts an amino-acid codon into a premature termination codon.'},
          {type:'match',q:'Match the disease to its classic repeat.',pairs:[['Huntington disease','CAG'],['Myotonic dystrophy type 1','CTG'],['Fragile X syndrome','CGG']]},
          {type:'choice',q:'Which feature is most characteristic of trinucleotide-repeat disorders across generations?',opts:['Genomic imprinting only','Anticipation','Mitochondrial inheritance','Loss of heterozygosity'],a:1,why:'Anticipation describes earlier onset or greater severity in successive generations as the repeat expands.'}
        ]
      },
      {
        id:'connective', title:'Copper & connective tissue', subtitle:'Menkes, lysyl oxidase, fibrillin', character:'Matrix', icon:'⌁',
        ai:'Menkes disease results from ATP7A-related impaired copper transport. Copper-dependent enzymes include lysyl oxidase, which cross-links collagen and elastin. Marfan syndrome is caused by FBN1 variants affecting fibrillin-1 and TGF-β regulation.',
        steps:[
          {type:'teach',title:'Why copper matters',text:'Lysyl oxidase is a copper-dependent enzyme that forms cross-links in collagen and elastin. ATP7A-related Menkes disease causes disturbed copper transport, low serum copper and ceruloplasmin after early infancy, and reduced activity of copper-dependent enzymes.',pearl:'Connective-tissue weakness in Menkes disease is partly explained by reduced lysyl oxidase activity.'},
          {type:'choice',q:'An infant has seizures, hypotonia, failure to thrive, and sparse kinky hair. Which protein is most likely affected?',opts:['ATP7A copper-transporting ATPase','Fibrillin-1','Dystrophin','Type IV collagen'],a:0,why:'Classic Menkes disease is an X-linked ATP7A-related copper transport disorder.'},
          {type:'match',q:'Match the molecule to the key association.',pairs:[['Lysyl oxidase','Cross-links collagen and elastin'],['Fibrillin-1','Microfibrils; Marfan syndrome'],['ATP7A','Copper transport; Menkes disease']]},
          {type:'choice',q:'A pathogenic FBN1 variant most directly disrupts which extracellular structure?',opts:['Basement-membrane type IV collagen','Microfibrils','Keratin intermediate filaments','Microtubules'],a:1,why:'Fibrillin-1 is a major extracellular-matrix glycoprotein in microfibrils and also helps regulate TGF-β bioavailability.'}
        ]
      },
      {
        id:'glycogen', title:'Glycogen storage logic', subtitle:'Pompe vs Cori and the lactate clue', character:'Glycogen', icon:'✦',
        ai:'Pompe disease is lysosomal acid alpha-glucosidase deficiency and prominently affects cardiac and skeletal muscle. Cori disease is debranching-enzyme deficiency; gluconeogenesis and glucose-6-phosphatase remain intact, so fasting lactate is not characteristically as elevated as in von Gierke disease.',
        steps:[
          {type:'teach',title:'Pompe and Cori are different problems',text:'Pompe disease (glycogen storage disease type II) is lysosomal acid alpha-glucosidase deficiency and causes lysosomal glycogen accumulation, especially in cardiac and skeletal muscle. Cori disease (type III) is glycogen debranching-enzyme deficiency and produces abnormal limit-dextrin glycogen.',pearl:'Cori disease still has an intact glucose-6-phosphatase pathway and intact gluconeogenesis.'},
          {type:'match',q:'Match the disorder to the enzyme defect.',pairs:[['Pompe disease','Lysosomal acid alpha-glucosidase'],['Cori disease','Glycogen debranching enzyme'],['Von Gierke disease','Glucose-6-phosphatase']]},
          {type:'choice',q:'Why is marked fasting lactic acidosis less characteristic of Cori disease than von Gierke disease?',opts:['Cori disease blocks glycolysis completely','Cori disease retains gluconeogenesis and glucose-6-phosphatase activity','Cori disease prevents glycogen synthesis','Cori disease increases insulin secretion'],a:1,why:'In Cori disease, glycogen breakdown is impaired at branch points, but gluconeogenesis and conversion of glucose-6-phosphate to free glucose remain available.'},
          {type:'choice',q:'An infant has cardiomegaly, hypotonia, and glycogen-filled lysosomes. Which diagnosis is most likely?',opts:['Cori disease','Pompe disease','McArdle disease','Von Gierke disease'],a:1,why:'Pompe disease is a lysosomal storage disease caused by acid alpha-glucosidase deficiency and classically causes hypertrophic cardiomyopathy and hypotonia.'}
        ]
      },
      {
        id:'hyperthermia', title:'Hyperthermia emergencies', subtitle:'Malignant hyperthermia vs NMS', character:'Drug', icon:'◆',
        ai:'Malignant hyperthermia is linked to uncontrolled skeletal-muscle sarcoplasmic-reticulum calcium release, usually involving RYR1, and is treated specifically with dantrolene. Neuroleptic malignant syndrome follows dopamine blockade or dopaminergic withdrawal; severe cases may use bromocriptine and sometimes dantrolene in addition to supportive care.',
        steps:[
          {type:'teach',title:'Two hot, rigid patients — different mechanisms',text:'Malignant hyperthermia is a pharmacogenetic skeletal-muscle crisis with uncontrolled sarcoplasmic-reticulum Ca²⁺ release, commonly involving ryanodine receptor 1 (RYR1). Neuroleptic malignant syndrome (NMS) is associated with dopamine-receptor blockade or abrupt withdrawal of dopaminergic therapy.',pearl:'Dantrolene is the specific treatment for malignant hyperthermia because it reduces Ca²⁺ release through RYR1.'},
          {type:'choice',q:'Minutes after volatile anesthetic exposure, a patient develops hypercarbia, rigidity, hyperkalemia, and rapidly rising temperature. Best specific therapy?',opts:['Bromocriptine','Dantrolene','Physostigmine','Flumazenil'],a:1,why:'This is malignant hyperthermia. Dantrolene reduces uncontrolled calcium release from the skeletal-muscle sarcoplasmic reticulum.'},
          {type:'choice',q:'A patient develops fever, lead-pipe rigidity, autonomic instability, and altered mental status after a high-potency antipsychotic. Which mechanism best fits?',opts:['Excess muscarinic signaling','Dopamine-receptor blockade','Excess serotonin reuptake','Presynaptic calcium-channel antibodies'],a:1,why:'NMS is strongly associated with dopamine-receptor antagonist exposure or abrupt withdrawal of dopaminergic drugs.'},
          {type:'multi',q:'Which therapies may be used in severe NMS in addition to stopping the trigger and supportive care?',opts:['Bromocriptine','Dantrolene','Naloxone','Atropine'],a:[0,1],why:'Bromocriptine, a dopamine agonist, and dantrolene, a muscle relaxant, are used in severe or refractory NMS; supportive care remains central.'}
        ]
      }
    ]
  },

  micro: {
    title:'Microbiology',
    intro:'Organism ID by mechanism: stain, enzymes, growth requirements, toxins, and classic clinical patterns.',
    lessons:[
      {
        id:'staphstrep',title:'Staph vs Strep',subtitle:'Catalase, coagulase, novobiocin',character:'Bacterium',icon:'✹',
        ai:'Staphylococci are catalase-positive; streptococci and enterococci are catalase-negative. Staphylococcus aureus is coagulase-positive. Among common coagulase-negative staphylococci, S. saprophyticus is novobiocin-resistant and S. epidermidis is sensitive.',
        steps:[
          {type:'teach',title:'Start with catalase',text:'Catalase separates Staphylococcus species (catalase-positive) from Streptococcus and Enterococcus species (catalase-negative). Within Staphylococcus, coagulase identifies Staphylococcus aureus as coagulase-positive.',pearl:'Think sequence: catalase first, then coagulase, then selected susceptibility tests.'},
          {type:'choice',q:'Gram-positive cocci in clusters produce bubbles when hydrogen peroxide is added. Which enzyme is present?',opts:['Coagulase','Catalase','Urease','Oxidase'],a:1,why:'Hydrogen peroxide bubbling indicates catalase activity, which is characteristic of Staphylococcus species.'},
          {type:'match',q:'Match the organism to the test result.',pairs:[['Staphylococcus aureus','Coagulase positive'],['Staphylococcus epidermidis','Novobiocin sensitive'],['Staphylococcus saprophyticus','Novobiocin resistant']]},
          {type:'choice',q:'A catalase-negative gram-positive coccus is most consistent with which group?',opts:['Staphylococcus','Streptococcus/Enterococcus','Neisseria','Haemophilus'],a:1,why:'Streptococci and enterococci lack catalase, unlike staphylococci.'}
        ]
      },
      {
        id:'gramwalls',title:'Gram-positive vs Gram-negative',subtitle:'Cell walls, outer membranes, capsules',character:'Cell wall',icon:'◫',
        ai:'Gram-positive bacteria have thick peptidoglycan and teichoic acids but no outer membrane. Gram-negative bacteria have thin peptidoglycan plus an outer membrane containing lipopolysaccharide. Capsules can occur in either group.',
        steps:[
          {type:'teach',title:'The capsule is not the divider',text:'Gram-positive bacteria have a thick peptidoglycan layer and teichoic acids. Gram-negative bacteria have a thin peptidoglycan layer plus an outer membrane containing lipopolysaccharide (LPS). A polysaccharide capsule can be present in either Gram-positive or Gram-negative organisms.',pearl:'Do not use “has a capsule” to decide Gram status.'},
          {type:'choice',q:'Which structure is characteristic of Gram-negative bacteria?',opts:['Teichoic acid-rich thick cell wall','Outer membrane containing LPS','Absence of peptidoglycan','Mandatory polysaccharide capsule'],a:1,why:'Gram-negative bacteria have an outer membrane that contains LPS; both Gram groups have peptidoglycan, and capsules are not universal.'},
          {type:'multi',q:'Which statements are correct?',opts:['Gram-positive bacteria usually have thicker peptidoglycan','Gram-negative bacteria have an outer membrane','Capsules are exclusive to Gram-negative organisms','Teichoic acids are associated with Gram-positive cell walls'],a:[0,1,3],why:'Capsules can occur in both Gram-positive and Gram-negative organisms.'}
        ]
      },
      {
        id:'haemophilus',title:'Haemophilus factors X & V',subtitle:'Why the “blood lover” needs chocolate agar',character:'Haemophilus',icon:'✣',
        ai:'Haemophilus influenzae requires factor X, which is hemin, and factor V, which is NAD+. Heating blood agar lyses red cells and makes these factors accessible, producing chocolate agar. Satellite growth can occur near organisms that release the needed factors.',
        steps:[
          {type:'teach',title:'X is hemin; V is NAD+',text:'Haemophilus influenzae requires factor X (hemin) and factor V (nicotinamide adenine dinucleotide, NAD⁺) for growth. Heating blood agar lyses red cells and releases otherwise inaccessible growth factors, creating chocolate agar.',pearl:'Factor X = hemin. Factor V = NAD⁺.'},
          {type:'match',q:'Match the factor to the molecule.',pairs:[['Factor X','Hemin'],['Factor V','NAD⁺']]},
          {type:'choice',q:'Why does H. influenzae grow well on chocolate agar?',opts:['Chocolate provides glucose','Heating lyses red cells and makes X and V factors accessible','The medium removes oxygen','It contains a beta-lactam antibiotic'],a:1,why:'Heating blood agar lyses erythrocytes, releasing growth factors required by H. influenzae.'},
          {type:'choice',q:'Small H. influenzae colonies growing near a beta-hemolytic Staphylococcus colony on blood agar illustrate what phenomenon?',opts:['Swarming','Satellitism','Quellung reaction','Optochin sensitivity'],a:1,why:'Nearby bacteria can release factor V and liberate hemin, allowing H. influenzae to grow as satellite colonies.'}
        ]
      },
      {
        id:'perfringens',title:'Clostridium perfringens',subtitle:'Alpha toxin and gas gangrene',character:'Clostridium',icon:'✹',
        ai:'C. perfringens is an anaerobic spore-forming Gram-positive rod. Its alpha toxin is a zinc-dependent phospholipase C (lecithinase) with membrane-damaging activity and is a major virulence factor in clostridial myonecrosis.',
        steps:[
          {type:'teach',title:'The alpha-toxin mechanism',text:'Clostridium perfringens is a major cause of clostridial myonecrosis (gas gangrene). Its alpha toxin is a zinc-dependent phospholipase C, also called lecithinase, that disrupts phospholipid membranes and promotes myonecrosis and hemolysis.',pearl:'Alpha toxin = phospholipase C = lecithinase.'},
          {type:'choice',q:'Which enzymatic activity best explains the membrane destruction caused by C. perfringens alpha toxin?',opts:['Adenylate cyclase','Phospholipase C','DNA gyrase','IgA protease'],a:1,why:'The alpha toxin is a zinc-dependent phospholipase C with lecithinase and sphingomyelinase activity.'},
          {type:'choice',q:'A traumatic wound becomes exquisitely painful with edema, systemic toxicity, and gas in muscle. Which organism is classic?',opts:['Clostridium perfringens','Clostridioides difficile','Listeria monocytogenes','Bacillus anthracis'],a:0,why:'Clostridial myonecrosis after trauma is classically associated with C. perfringens.'}
        ]
      },
      {
        id:'cocci',title:'Coccidioides',subtitle:'Spherules and treatment logic',character:'Fungus',icon:'✺',
        ai:'Coccidioides is a dimorphic fungus endemic to arid regions of the Americas. In tissue it forms spherules containing endospores. Many mild pulmonary infections do not require antifungal therapy; azoles such as fluconazole are commonly used when treatment is indicated, while severe disease may require amphotericin B.',
        steps:[
          {type:'teach',title:'Think spherules, not budding yeast',text:'Coccidioides species are dimorphic fungi. In human tissue they characteristically form spherules containing endospores rather than budding yeast.',pearl:'Tissue form: spherules with endospores.'},
          {type:'choice',q:'Which tissue morphology most strongly suggests Coccidioides?',opts:['Broad-based budding yeast','Spherules containing endospores','Pseudohyphae with germ tubes','Cigar-shaped budding yeast'],a:1,why:'Coccidioides forms characteristic spherules filled with endospores in tissue.'},
          {type:'choice',q:'When antifungal therapy is indicated for nonmeningeal coccidioidomycosis, which oral drug is commonly used?',opts:['Fluconazole','Acyclovir','Metronidazole','Ceftriaxone'],a:0,why:'Azole therapy, commonly fluconazole, is a standard option when treatment is indicated; severe disease may require amphotericin B.'}
        ]
      },
      {
        id:'syphilis',title:'Tertiary syphilis & the aorta',subtitle:'Vasa vasorum → aneurysm',character:'Spirochete',icon:'↝',
        ai:'Tertiary cardiovascular syphilis causes obliterative endarteritis of the vasa vasorum, weakening the aortic media. The ascending thoracic aorta is classically affected, leading to aneurysm and sometimes aortic regurgitation.',
        steps:[
          {type:'teach',title:'Why syphilis causes an aneurysm',text:'Cardiovascular tertiary syphilis can cause obliterative endarteritis of the vasa vasorum. Ischemic injury to the aortic media weakens the wall, classically affecting the ascending thoracic aorta.',pearl:'The target is the vasa vasorum, not a primary atherosclerotic plaque.'},
          {type:'choice',q:'The aortic damage of tertiary syphilis is most directly caused by inflammation of which vessels?',opts:['Coronary veins','Vasa vasorum','Pulmonary capillaries','Bronchial arteries'],a:1,why:'Obliterative endarteritis of the vasa vasorum compromises blood supply to the aortic media and predisposes to aneurysmal dilation.'},
          {type:'choice',q:'Which valve lesion can result when syphilitic dilation involves the aortic root?',opts:['Mitral stenosis','Aortic regurgitation','Tricuspid stenosis','Pulmonic regurgitation only'],a:1,why:'Aortic-root dilation can prevent normal cusp coaptation and produce aortic regurgitation.'}
        ]
      }
    ]
  },

  immuno: {
    title:'Immunology',
    intro:'Classify the immune mechanism first, then attach the disease.',
    lessons:[
      {
        id:'hypersensitivity',title:'Hypersensitivity I–IV',subtitle:'IgE, antibodies, complexes, T cells',character:'Immune cell',icon:'✺',
        ai:'Type I is IgE-mediated mast-cell activation. Type II uses IgG or IgM against cell-surface or matrix antigens. Type III is immune-complex deposition. Type IV is T-cell mediated and delayed.',
        steps:[
          {type:'teach',title:'Four mechanisms',text:'Type I hypersensitivity is IgE-mediated and activates mast cells. Type II is antibody-mediated against cell-surface or extracellular-matrix antigens. Type III is caused by circulating antigen–antibody immune complexes that deposit in tissues. Type IV is T-cell mediated and delayed.',pearl:'Type IV is the only classic category that is not antibody-mediated.'},
          {type:'match',q:'Match the mechanism to the hypersensitivity type.',pairs:[['Type I','IgE + mast cells'],['Type II','IgG/IgM against cell or matrix antigens'],['Type III','Immune-complex deposition'],['Type IV','T-cell mediated']]},
          {type:'choice',q:'Systemic lupus erythematosus classically causes tissue injury through which hypersensitivity mechanism?',opts:['Type I','Type II only','Type III','Type IV only'],a:2,why:'Many manifestations of SLE reflect deposition of circulating antigen–antibody immune complexes, a type III mechanism.'},
          {type:'choice',q:'A positive tuberculin skin test is primarily which type of hypersensitivity?',opts:['Type I','Type II','Type III','Type IV'],a:3,why:'The tuberculin reaction is a delayed, T-cell-mediated type IV hypersensitivity response.'}
        ]
      },
      {
        id:'sarcoid',title:'Sarcoidosis & vitamin D',subtitle:'Macrophages make too much calcitriol',character:'Macrophage',icon:'●',
        ai:'Activated macrophages in granulomatous disease can express extrarenal 1-alpha-hydroxylase, converting 25-hydroxyvitamin D into active 1,25-dihydroxyvitamin D (calcitriol). This can produce hypercalcemia with suppressed PTH.',
        steps:[
          {type:'teach',title:'The macrophage becomes an endocrine organ',text:'Activated macrophages in sarcoid granulomas can express extrarenal 1α-hydroxylase. This enzyme converts 25-hydroxyvitamin D into 1,25-dihydroxyvitamin D (calcitriol), increasing intestinal calcium absorption.',pearl:'Granulomatous disease can cause calcitriol-mediated hypercalcemia with low parathyroid hormone (PTH).'},
          {type:'choice',q:'A patient with sarcoidosis has hypercalcemia and low PTH. Which process best explains the calcium elevation?',opts:['Increased PTH secretion','Macrophage 1α-hydroxylase activity','Reduced intestinal vitamin D action','Increased renal calcium excretion'],a:1,why:'Granuloma macrophages can generate excess calcitriol through extrarenal 1α-hydroxylase.'},
          {type:'choice',q:'Which vitamin D metabolite is expected to be inappropriately elevated in calcitriol-mediated sarcoid hypercalcemia?',opts:['1,25-dihydroxyvitamin D','Only vitamin D-binding protein','Calcitonin','Parathyroid hormone'],a:0,why:'The active vitamin D metabolite calcitriol is 1,25-dihydroxyvitamin D.'}
        ]
      },
      {
        id:'granuloma',title:'Granulomas & TB',subtitle:'Th1 signaling and macrophage activation',character:'T cell',icon:'✣',
        ai:'Granulomatous inflammation is a type IV immune pattern. Th1 cells produce interferon-gamma, which activates macrophages. Tumor necrosis factor helps maintain granuloma structure. Tuberculosis classically produces caseating granulomas.',
        steps:[
          {type:'teach',title:'Th1 → IFN-γ → macrophage',text:'Granulomatous inflammation is driven largely by T-helper 1 (Th1) responses. Interferon-gamma (IFN-γ) activates macrophages, while tumor necrosis factor (TNF) helps organize and maintain granulomatous inflammation.',pearl:'This is a type IV, cell-mediated immune response.'},
          {type:'choice',q:'Which cytokine is most directly responsible for classical macrophage activation in a Th1 granulomatous response?',opts:['IL-4','IFN-γ','IL-10','TGF-β'],a:1,why:'IFN-γ produced by Th1 cells is a major activator of macrophages.'},
          {type:'choice',q:'Which histologic finding is classic for pulmonary tuberculosis?',opts:['Noncaseating granulomas only','Caseating granulomas','Eosinophilic granulomas','Fibrinoid necrosis of arteries only'],a:1,why:'Tuberculosis classically produces caseating granulomas, although morphology alone is not sufficient for microbiologic diagnosis.'}
        ]
      }
    ]
  },

  neuro: {
    title:'Neurology',
    intro:'Localize the defect, then use the mechanism to predict the pattern.',
    lessons:[
      {
        id:'mg-lems',title:'MG vs Lambert–Eaton',subtitle:'Postsynaptic vs presynaptic',character:'NMJ',icon:'✣',
        ai:'Myasthenia gravis is usually postsynaptic acetylcholine-receptor or related protein autoimmunity and worsens with repeated use. Lambert–Eaton myasthenic syndrome is presynaptic voltage-gated calcium-channel autoimmunity; reflexes are reduced and strength can improve briefly with activity.',
        steps:[
          {type:'teach',title:'Which side of the synapse?',text:'Myasthenia gravis (MG) is a postsynaptic neuromuscular-junction disorder, most often involving antibodies against the nicotinic acetylcholine receptor. Lambert–Eaton myasthenic syndrome (LEMS) is presynaptic and usually involves antibodies against P/Q-type voltage-gated calcium channels.',pearl:'LEMS: proximal weakness + reduced reflexes + autonomic symptoms + facilitation with use.'},
          {type:'match',q:'Match the finding to the disorder.',pairs:[['Myasthenia gravis','Postsynaptic defect; fatigability'],['LEMS — synaptic site','Presynaptic Ca²⁺ channel antibodies'],['LEMS — clinical pattern','Reduced reflexes and autonomic symptoms']]},
          {type:'choice',q:'A patient has proximal leg weakness, dry mouth, reduced reflexes, and strength that improves briefly after repeated contraction. Most likely diagnosis?',opts:['Myasthenia gravis','Lambert–Eaton myasthenic syndrome','Duchenne muscular dystrophy','Botulism from wound only'],a:1,why:'LEMS is presynaptic; repeated activity can transiently improve acetylcholine release and strength.'},
          {type:'choice',q:'LEMS is classically associated with which malignancy?',opts:['Small-cell lung carcinoma','Papillary thyroid carcinoma','Renal cell carcinoma','Basal cell carcinoma'],a:0,why:'LEMS is an important paraneoplastic syndrome associated especially with small-cell lung carcinoma.'}
        ]
      },
      {
        id:'axonaltransport',title:'Axonal transport',subtitle:'Dynein draws back; kinesin goes out',character:'Axon',icon:'↔',
        ai:'Kinesin generally carries cargo anterogradely toward microtubule plus ends and the axon terminal. Dynein carries cargo retrogradely toward minus ends and the cell body. “Dynein draws back” is a useful directional cue.',
        steps:[
          {type:'teach',title:'Direction is the whole question',text:'Kinesin is the major motor for anterograde axonal transport toward the microtubule plus end and axon terminal. Dynein mediates retrograde transport toward the minus end and neuronal cell body.',pearl:'Dynein draws back → retrograde.'},
          {type:'choice',q:'A neurotropic agent travels from the axon terminal back toward the neuronal cell body. Which motor protein is most directly involved?',opts:['Kinesin','Dynein','Myosin II','Actin'],a:1,why:'Dynein is the microtubule motor responsible for retrograde axonal transport.'},
          {type:'choice',q:'Transport of vesicles from the neuronal soma toward the axon terminal is primarily mediated by which motor?',opts:['Dynein','Kinesin','Dystrophin','Spectrin'],a:1,why:'Kinesin generally moves cargo anterogradely toward microtubule plus ends.'}
        ]
      },
      {
        id:'bche',title:'Pseudocholinesterase deficiency',subtitle:'Why succinylcholine lasts too long',character:'Enzyme',icon:'◆',
        ai:'Pseudocholinesterase is also called butyrylcholinesterase and is produced mainly by the liver. It metabolizes succinylcholine and mivacurium in plasma. Deficiency leads to unexpectedly prolonged neuromuscular paralysis after standard doses.',
        steps:[
          {type:'teach',title:'Pseudocholinesterase = butyrylcholinesterase',text:'Pseudocholinesterase, also called butyrylcholinesterase (BChE), metabolizes succinylcholine and mivacurium. Inherited or acquired deficiency can cause unexpectedly prolonged neuromuscular paralysis after these drugs.',pearl:'The clinical clue is prolonged apnea/paralysis after succinylcholine, not prolonged sedation itself.'},
          {type:'choice',q:'A patient remains paralyzed far longer than expected after a standard dose of succinylcholine. Which deficiency is most likely?',opts:['Acetylcholinesterase deficiency at the NMJ','Butyrylcholinesterase deficiency','Monoamine oxidase deficiency','Catechol-O-methyltransferase deficiency'],a:1,why:'Succinylcholine is metabolized by plasma pseudocholinesterase/butyrylcholinesterase.'},
          {type:'choice',q:'Which other neuromuscular blocker is also metabolized by pseudocholinesterase?',opts:['Rocuronium','Mivacurium','Vecuronium','Pancuronium'],a:1,why:'Both succinylcholine and mivacurium depend substantially on pseudocholinesterase metabolism.'}
        ]
      },
      {
        id:'rls',title:'Restless legs syndrome',subtitle:'Pattern recognition and aggravators',character:'Leg',icon:'⌁',
        ai:'Restless legs syndrome is defined by an urge to move the legs with unpleasant sensations, worse during rest and in the evening or night, relieved by movement. Iron deficiency and some medications can worsen symptoms. Iron replacement is important when stores are low; alpha-2-delta ligands are commonly used, and dopaminergic agents can work but may cause augmentation.',
        steps:[
          {type:'teach',title:'The diagnostic pattern',text:'Restless legs syndrome (RLS) causes an urge to move the legs, usually with unpleasant sensations. Symptoms begin or worsen during rest, are worse in the evening or night, and improve with movement.',pearl:'Rest + evening + relief with movement is the core pattern.'},
          {type:'multi',q:'Which features support RLS?',opts:['Worse during prolonged inactivity','Relief with movement','Predominantly worse in the evening or night','Persistent focal weakness on neurologic exam'],a:[0,1,2],why:'RLS is a sensory-motor urge that is triggered by rest, has a circadian evening/night pattern, and improves with movement; focal weakness suggests another process.'},
          {type:'choice',q:'Which reversible contributor should be specifically assessed in a patient with RLS symptoms?',opts:['Iron deficiency','Hypercalcemia only','Hypernatremia only','Vitamin C excess'],a:0,why:'Low iron stores are a recognized contributor to RLS and should be corrected when present.'},
          {type:'choice',q:'Which medication class may worsen RLS in some patients?',opts:['Some antidepressants','Proton-pump inhibitors only','Loop diuretics only','Beta-lactam antibiotics'],a:0,why:'Some antidepressants and sedating antihistamines can exacerbate RLS symptoms.'}
        ]
      }
    ]
  },

  renal: {
    title:'Renal',
    intro:'Use tonicity, urine concentration, and vasopressin physiology to solve water-balance questions.',
    lessons:[
      {
        id:'siadh',title:'SIADH',subtitle:'Low serum osmolality, inappropriately concentrated urine',character:'Kidney',icon:'◒',
        ai:'Syndrome of inappropriate antidiuresis causes hypotonic hyponatremia with euvolemia, urine osmolality usually above 100 mOsm/kg, and urine sodium commonly above 30–40 mEq/L when dietary intake is adequate and confounders are excluded.',
        steps:[
          {type:'teach',title:'Ask what the urine should be doing',text:'In syndrome of inappropriate antidiuresis (SIADH), arginine vasopressin (AVP, antidiuretic hormone) activity persists despite low plasma osmolality. Water is retained, producing hypotonic hyponatremia, while the urine remains inappropriately concentrated.',pearl:'Low serum osmolality + urine osmolality >100 mOsm/kg means AVP is still acting.'},
          {type:'choice',q:'Which laboratory pattern best fits uncomplicated SIADH?',opts:['Hypernatremia with dilute urine','Hypotonic hyponatremia with urine osmolality >100 mOsm/kg','Isotonic hypernatremia with glucosuria','Hyponatremia with maximally dilute urine <50 mOsm/kg'],a:1,why:'SIADH causes hypotonic hyponatremia with persistent AVP effect, so the urine is not maximally dilute.'},
          {type:'choice',q:'Why are most patients with SIADH clinically euvolemic rather than markedly edematous?',opts:['They cannot retain any water','Mild volume expansion triggers natriuresis and limits further extracellular-volume expansion','AVP directly blocks sodium excretion','They have obligatory glucosuria'],a:1,why:'Water retention causes mild expansion, which activates natriuretic mechanisms; sodium is excreted and obvious edema is usually absent.'}
        ]
      },
      {
        id:'avp',title:'AVP resistance',subtitle:'Nephrogenic diabetes insipidus logic',character:'Collecting duct',icon:'◇',
        ai:'Arginine vasopressin acts at V2 receptors on collecting-duct principal cells through Gs, cAMP, and aquaporin-2 insertion. In nephrogenic diabetes insipidus, the kidney is resistant to AVP, so urine remains dilute despite AVP and does not appropriately concentrate after desmopressin.',
        steps:[
          {type:'teach',title:'V2 → Gs → cAMP → AQP2',text:'Arginine vasopressin binds V2 receptors on collecting-duct principal cells. V2 is Gs-coupled, raising cAMP and promoting insertion of aquaporin-2 (AQP2) water channels into the apical membrane.',pearl:'Nephrogenic diabetes insipidus = AVP is present, but the kidney does not respond appropriately.'},
          {type:'match',q:'Match the condition to the expected response to desmopressin.',pairs:[['Central diabetes insipidus','Urine osmolality rises'],['Nephrogenic diabetes insipidus','Little or no rise in urine osmolality']]},
          {type:'choice',q:'A patient has hypernatremia and very dilute urine. Urine osmolality barely changes after desmopressin. Most likely diagnosis?',opts:['SIADH','Central diabetes insipidus','Nephrogenic diabetes insipidus','Primary hyperaldosteronism'],a:2,why:'Failure to concentrate urine after desmopressin indicates renal resistance to AVP.'},
          {type:'choice',q:'Which second messenger increases after V2 receptor activation?',opts:['cAMP','cGMP only','IP3 only','DAG only'],a:0,why:'The V2 receptor is Gs-coupled and increases cAMP, leading to AQP2 insertion.'}
        ]
      },
      {
        id:'natriuretic',title:'ANP & BNP',subtitle:'Natriuresis and cGMP',character:'Peptide',icon:'✦',
        ai:'Atrial natriuretic peptide (ANP) and B-type natriuretic peptide (BNP) activate membrane guanylyl cyclase receptors, increasing cGMP. They promote natriuresis and oppose renin-angiotensin-aldosterone signaling.',
        steps:[
          {type:'teach',title:'Stretch hormones that unload volume',text:'Atrial natriuretic peptide (ANP) and B-type natriuretic peptide (BNP) are released with cardiac-wall stretch. Their receptors have guanylyl cyclase activity, increasing cyclic guanosine monophosphate (cGMP) and promoting natriuresis.',pearl:'ANP/BNP oppose renin and aldosterone signaling and favor sodium excretion.'},
          {type:'choice',q:'Which intracellular second messenger is increased by ANP receptor activation?',opts:['cAMP','cGMP','IP3 only','DAG only'],a:1,why:'Natriuretic peptide receptors are membrane guanylyl cyclases that increase cGMP.'},
          {type:'choice',q:'Which effect is expected from increased ANP/BNP signaling?',opts:['Increased renin release','Increased aldosterone secretion','Natriuresis','Increased sodium reabsorption in the collecting duct'],a:2,why:'ANP and BNP promote sodium excretion and counter-regulate the renin–angiotensin–aldosterone system.'}
        ]
      }
    ]
  },

  pulm: {
    title:'Pulmonology',
    intro:'Airway sounds, epithelial ion transport, and pulmonary infection patterns.',
    lessons:[
      {
        id:'cftr',title:'CFTR & ENaC',subtitle:'Airway dehydration vs salty sweat',character:'Airway',icon:'♧',
        ai:'CFTR is the cystic fibrosis transmembrane conductance regulator, a chloride channel and regulator of epithelial ion transport. In airways, CFTR dysfunction reduces chloride secretion and is associated with excessive epithelial sodium absorption through ENaC, dehydrating airway surface liquid. In sweat ducts, defective chloride and sodium reabsorption causes salty sweat.',
        steps:[
          {type:'teach',title:'Same channel, different tissue result',text:'CFTR means cystic fibrosis transmembrane conductance regulator. In airway epithelium, loss of CFTR reduces chloride secretion and is associated with excessive sodium absorption through the epithelial sodium channel (ENaC), drawing water away from the airway surface. In sweat ducts, CFTR dysfunction impairs chloride reabsorption and secondarily reduces sodium reabsorption, producing salty sweat.',pearl:'Airway: too much salt/water absorption from the lumen. Sweat duct: too little salt reabsorption from sweat.'},
          {type:'choice',q:'In cystic fibrosis airways, increased ENaC activity has what effect on airway surface liquid?',opts:['More sodium and water remain in the lumen','More sodium and water are absorbed, dehydrating the surface','Chloride secretion markedly increases','Mucus becomes less viscous'],a:1,why:'Excess sodium absorption favors water absorption out of the airway lumen, contributing to dehydrated, viscous secretions.'},
          {type:'choice',q:'Why is sweat salty in cystic fibrosis?',opts:['Sweat glands secrete too much aldosterone','Sweat ducts fail to reabsorb chloride effectively, with impaired sodium reabsorption as well','ENaC is absent from every tissue','The kidney excretes all body sodium'],a:1,why:'In sweat ducts, defective CFTR impairs chloride reabsorption; sodium reabsorption is also reduced, leaving a high NaCl concentration in sweat.'},
          {type:'multi',q:'Which statements about CFTR are correct?',opts:['It functions as a chloride channel','It influences ENaC activity in airway epithelium','Its dysfunction can elevate sweat chloride','Its loss causes increased chloride secretion into the airway lumen'],a:[0,1,2],why:'CFTR dysfunction reduces chloride secretion in airways rather than increasing it.'}
        ]
      },
      {
        id:'sounds',title:'Rales vs rhonchi',subtitle:'Crackles, secretions, and airway caliber',character:'Lung',icon:'♧',
        ai:'Crackles (rales) are discontinuous popping sounds often associated with opening of small airways or alveoli and conditions such as pulmonary edema or fibrosis. Rhonchi are lower-pitched continuous sounds associated with airflow through larger airways narrowed by secretions or obstruction and may change after coughing.',
        steps:[
          {type:'teach',title:'Discontinuous vs continuous',text:'Crackles, historically called rales, are discontinuous popping sounds. They are often heard when small airways or alveoli abruptly open, such as in pulmonary edema or interstitial fibrosis. Rhonchi are lower-pitched continuous sounds generated in larger airways narrowed by secretions or obstruction.',pearl:'Rhonchi may change or clear after coughing; fine inspiratory crackles usually do not.'},
          {type:'choice',q:'Low-pitched continuous coarse breath sounds that improve after coughing are best described as:',opts:['Fine crackles','Rhonchi','Pleural friction rub','Stridor'],a:1,why:'Rhonchi are continuous low-pitched sounds associated with larger-airway secretions or obstruction and may clear with cough.'},
          {type:'choice',q:'Fine inspiratory crackles at both lung bases are most consistent with which process?',opts:['Small-airway/alveolar opening in edema or fibrosis','Upper-airway obstruction','Isolated vocal-cord dysfunction','Normal bronchial breath sounds'],a:0,why:'Fine crackles arise from abrupt opening of small airways/alveolar units and are common in pulmonary edema and interstitial lung disease.'}
        ]
      },
      {
        id:'tbcavity',title:'TB cavitation',subtitle:'Why upper lobes are vulnerable',character:'Granuloma',icon:'●',
        ai:'Reactivation tuberculosis favors high-oxygen regions of the lung, classically the apices. Th1-driven macrophage activation forms caseating granulomas; necrosis can liquefy and drain into airways, leaving cavities.',
        steps:[
          {type:'teach',title:'From granuloma to cavity',text:'Mycobacterium tuberculosis triggers a Th1-dominant cellular immune response with macrophage activation and caseating granuloma formation. In reactivation disease, necrotic material can liquefy and communicate with airways, producing cavitation.',pearl:'Reactivation TB classically favors the oxygen-rich lung apices.'},
          {type:'choice',q:'Which immune cell signal is central to macrophage activation in tuberculosis?',opts:['IL-4','IFN-γ','IL-10','Histamine'],a:1,why:'Th1-derived interferon-gamma activates macrophages and supports granulomatous containment of mycobacteria.'},
          {type:'choice',q:'Reactivation pulmonary TB most classically involves which region?',opts:['Lung apices','Costophrenic angles only','Mainstem bronchi only','Pleura exclusively'],a:0,why:'Reactivation TB preferentially affects upper-lobe/apical regions with relatively high oxygen tension.'}
        ]
      }
    ]
  },

  repro: {
    title:'Embryology',
    intro:'Aortic and pharyngeal arch derivatives organized by number and side.',
    lessons:[
      {
        id:'aorticarches',title:'Aortic arch derivatives',subtitle:'3rd, 4th, and 6th arches',character:'Embryo',icon:'◇',
        ai:'The 3rd aortic arch forms the common carotids and proximal internal carotids. The right 4th contributes to the proximal right subclavian; the left 4th contributes to the aortic arch. The proximal 6th arches form pulmonary arteries, and the distal left 6th forms the ductus arteriosus.',
        steps:[
          {type:'teach',title:'The high-yield arches',text:'The 3rd aortic arch forms the common carotid arteries and proximal internal carotid arteries. The right 4th contributes to the proximal right subclavian artery; the left 4th contributes to the arch of the aorta. The proximal 6th arches form the pulmonary arteries, and the distal left 6th forms the ductus arteriosus.',pearl:'3 = carotids; 4 = systemic arch/subclavian; 6 = pulmonary arteries + ductus.'},
          {type:'match',q:'Match the embryonic arch to its major derivative.',pairs:[['3rd aortic arch','Common carotids + proximal internal carotids'],['Right 4th aortic arch','Proximal right subclavian artery'],['Left 4th aortic arch','Part of the aortic arch'],['Left 6th aortic arch','Left pulmonary artery + ductus arteriosus']]},
          {type:'choice',q:'The ductus arteriosus is derived primarily from which embryonic structure?',opts:['Left 3rd aortic arch','Left 4th aortic arch','Distal left 6th aortic arch','Right 7th intersegmental artery'],a:2,why:'The distal left sixth aortic arch persists as the ductus arteriosus.'},
          {type:'choice',q:'The proximal right subclavian artery is derived in part from which aortic arch?',opts:['1st','2nd','3rd','4th'],a:3,why:'The right fourth aortic arch contributes to the proximal right subclavian artery.'}
        ]
      },
      {
        id:'pharyngealrelation',title:'Aortic vs pharyngeal arches',subtitle:'Related structures, not the same thing',character:'Embryo',icon:'◇',
        ai:'Pharyngeal arches are embryonic mesenchymal bars with their own nerve, artery, cartilage, and muscle components. The aortic arch arteries course through the pharyngeal arches. Thus the numbering is developmentally related, but “aortic arch derivative” and “pharyngeal arch derivative” refer to different tissue components.',
        steps:[
          {type:'teach',title:'Why the numbering overlaps',text:'Pharyngeal arches are mesenchymal structures that contain characteristic nerve, arterial, cartilage, and muscle components. The paired aortic arch arteries course through these pharyngeal arches, which is why the numbering is related.',pearl:'An “aortic arch derivative” refers to the arterial component; a “pharyngeal arch derivative” can refer to nerve, muscle, cartilage, or artery.'},
          {type:'choice',q:'Which statement best describes the relationship between aortic arches and pharyngeal arches?',opts:['They are unrelated naming systems','Aortic arch arteries course through the pharyngeal arches','Each pharyngeal arch becomes an adult artery only','Pharyngeal arches are formed from adult carotid arteries'],a:1,why:'The embryonic aortic arch arteries traverse the pharyngeal arches; they are related components, not synonymous structures.'},
          {type:'choice',q:'A question asking for the nerve of the 3rd pharyngeal arch is testing which component rather than the aortic-arch artery?',opts:['Neural component','Endocardial cushion','Dorsal mesentery','Nephric duct'],a:0,why:'Each pharyngeal arch has characteristic neural, muscular, cartilaginous, and arterial components.'}
        ]
      }
    ]
  }
};