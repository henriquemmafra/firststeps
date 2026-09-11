const SYSTEMS=[
  {id:'cardio',name:'Cardiology',icon:'♥',accent:'#dd5a43',deep:'#aa3d2a',blurb:'Hemodynamics, murmurs, ischemia',total:4},
  {id:'renal',name:'Renal',icon:'◒',accent:'#bd7445',deep:'#8d4e2b',blurb:'Nephron, diuretics, acid–base',total:8},
  {id:'neuro',name:'Neurology',icon:'✣',accent:'#6e62dc',deep:'#4f43b6',blurb:'Localization, pathways, drugs',total:10},
  {id:'pulm',name:'Pulmonology',icon:'♧',accent:'#4f9c9c',deep:'#347070',blurb:'V/Q, physiology, pathology',total:7},
  {id:'gi',name:'GI',icon:'∿',accent:'#df9a38',deep:'#aa6d1d',blurb:'Liver, pancreas, bowel',total:8},
  {id:'endo',name:'Endocrine',icon:'✦',accent:'#bc63a6',deep:'#8c4079',blurb:'Axes, hormones, metabolism',total:8},
  {id:'heme',name:'Heme/Onc',icon:'●',accent:'#c2475d',deep:'#8d2c3e',blurb:'Anemias, coagulation, cancer',total:9},
  {id:'immuno',name:'Immunology',icon:'✺',accent:'#4788c7',deep:'#2c6196',blurb:'Cytokines, hypersensitivity',total:7},
  {id:'micro',name:'Microbiology',icon:'✹',accent:'#2d87a8',deep:'#1e627b',blurb:'Bacteria, viruses, fungi',total:10},
  {id:'repro',name:'Reproductive',icon:'◇',accent:'#d9768f',deep:'#a64963',blurb:'Embryology, pregnancy, disease',total:8},
  {id:'msk',name:'MSK / Derm',icon:'⌁',accent:'#788d3e',deep:'#56682b',blurb:'Muscle, bone, skin',total:7},
  {id:'found',name:'Foundations',icon:'⌘',accent:'#0fa37f',deep:'#08765b',blurb:'Biochem, genetics, pharmacology',total:12}
];

const CARDIO={
  title:'Cardiology',
  intro:'A linear path from mechanics to disease. The cast changes with the topic; the medicine does not.',
  lessons:[
    {id:'hemo',title:'Hemodynamics',subtitle:'Preload, afterload, pressure–volume logic',character:'Heart',icon:'♥',steps:[
      {type:'teach',title:'Preload and afterload',text:'Preload is ventricular wall stress at end-diastole and is closely related to end-diastolic volume. It rises with venous return. Afterload is the load the ventricle must overcome during ejection and is closely related to arterial pressure and vascular resistance.',pearl:'Reducing preload makes dynamic LV outflow obstruction in hypertrophic cardiomyopathy more severe.'},
      {type:'choice',q:'During the strain phase of Valsalva, what happens to the murmur of hypertrophic cardiomyopathy?',opts:['It becomes softer','It becomes louder','It becomes diastolic','It is unchanged'],a:1,why:'Valsalva strain reduces venous return and preload. The smaller LV cavity increases dynamic outflow obstruction, so the HCM murmur becomes louder.'},
      {type:'teach',title:'Frank–Starling mechanism',text:'Within physiologic limits, greater ventricular filling increases sarcomere stretch and increases stroke volume. This is an intrinsic property of cardiac muscle and does not require sympathetic stimulation.',pearl:'Think: more filling → more force → more stroke volume, until the failing ventricle can no longer use the extra preload effectively.'},
      {type:'joke',text:'Preload and afterload have filed a restraining order. Stop mixing them up.'}
    ]},
    {id:'murmurs',title:'Murmurs',subtitle:'Timing, radiation, maneuvers',character:'Valve',icon:'◈',steps:[
      {type:'teach',title:'Build murmurs from mechanics',text:'Aortic stenosis causes a systolic ejection murmur that radiates to the carotids. Mitral regurgitation causes a holosystolic murmur that radiates toward the axilla. Aortic regurgitation produces an early diastolic decrescendo murmur and a widened pulse pressure.',pearl:'Do not memorize only sound labels. Link each murmur to the direction and timing of abnormal blood flow.'},
      {type:'match',q:'Match each lesion to its classic finding.',pairs:[['Aortic stenosis','Radiates to the carotids'],['Mitral regurgitation','Holosystolic; radiates to axilla'],['Mitral valve prolapse','Mid-systolic click'],['Aortic regurgitation','Wide pulse pressure']]},
      {type:'choice',q:'Which maneuver generally makes the murmur of mitral valve prolapse occur earlier?',opts:['Squatting','Passive leg raise','Valsalva strain','Handgrip'],a:2,why:'Reduced LV volume during Valsalva makes prolapse occur earlier in systole, so the click moves closer to S1. Increasing preload with squatting delays the click.'},
      {type:'joke',text:'If every murmur is “probably mitral,” I am resigning.'}
    ]},
    {id:'ischemia',title:'Ischemia',subtitle:'Coronary territories and consequences',character:'Coronary',icon:'↝',steps:[
      {type:'teach',title:'Territories first',text:'The LAD supplies the anterior wall and anterior two-thirds of the interventricular septum. The RCA usually supplies the inferior wall and, in most people, the AV node. The left circumflex supplies the lateral wall.',pearl:'An inferior MI with bradycardia or AV block should make you think about RCA involvement.'},
      {type:'choice',q:'ST elevation in II, III, and aVF most strongly suggests occlusion of which artery?',opts:['Left anterior descending','Right coronary artery','Left circumflex only','Left main coronary artery'],a:1,why:'Leads II, III, and aVF view the inferior wall. The RCA is the classic culprit in an inferior STEMI, especially when accompanied by AV nodal conduction abnormalities.'},
      {type:'teach',title:'Ischemia changes relaxation early',text:'Myocardial ischemia impairs ATP-dependent relaxation before severe systolic dysfunction develops. Reduced ATP also disrupts ion gradients and predisposes the myocardium to arrhythmias.',pearl:'The earliest functional abnormality can be diastolic dysfunction.'}
    ]},
    {id:'hf',title:'Heart failure',subtitle:'HFrEF, HFpEF, compensation',character:'Myocyte',icon:'◆',steps:[
      {type:'teach',title:'HFrEF versus HFpEF',text:'HFrEF is primarily a disorder of impaired systolic contraction with reduced ejection fraction. HFpEF is primarily impaired ventricular relaxation and compliance; ejection fraction is preserved because both end-diastolic and stroke volumes may be reduced.',pearl:'A preserved ejection fraction does not mean normal cardiac function.'},
      {type:'choice',q:'Which compensatory response initially supports perfusion but chronically worsens remodeling in systolic heart failure?',opts:['Reduced sympathetic tone','RAAS activation','Reduced ADH release','Decreased systemic vascular resistance'],a:1,why:'RAAS increases sodium retention, preload and vasoconstriction. These can support pressure and perfusion acutely but chronically increase wall stress and adverse remodeling.'},
      {type:'teach',title:'Why guideline-directed therapy helps',text:'Several heart-failure therapies improve outcomes by reducing maladaptive neurohormonal signaling rather than simply increasing contractility. Blocking RAAS and excessive sympathetic signaling reduces remodeling and mortality.',pearl:'Step 1 often tests the physiologic rationale behind therapy, not only the drug list.'},
      {type:'joke',text:'An ejection fraction can be preserved and still have terrible vibes. Please remember HFpEF.'}
    ]}
  ]
};
