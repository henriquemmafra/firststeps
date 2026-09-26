/* HY Journey expanded learning engine.
   Loaded after core.js so existing local progress remains backward-compatible. */

function journeyCurriculum(id){return (typeof CURRICULUM!=='undefined'&&CURRICULUM[id])?CURRICULUM[id]:null}
function journeySystemData(id){
  state.systems=state.systems||{};
  state.systems[id]=state.systems[id]||{done:[],mastery:null,lastReview:null};
  state.systems[id].done=state.systems[id].done||[];
  return state.systems[id];
}
function journeyLesson(){
  var c=journeyCurriculum(view.system);
  return c?c.lessons.find(function(x){return x.id===view.lesson}):null;
}

mastery=function(sys){
  var c=journeyCurriculum(sys.id);
  if(!c)return null;
  var d=journeySystemData(sys.id);
  if(d.mastery==null)return null;
  return Math.max(0,Math.round(d.mastery-daysSince(d.lastReview)*3.5));
};

header=function(){
  return '<header class="top"><div class="brand"><h1>HY Journey</h1><p>STEP 1 · HIGH-YIELD MICROlearning</p></div>'+
    '<div class="stats"><span class="chip">🔥 '+(state.streak||0)+'</span><span class="chip">★ '+(state.xp||0)+'</span></div></header>';
};

home=function(){
  dock.classList.add('hidden');
  var cd=journeySystemData('cardio');
  var populated=SYSTEMS.filter(function(s){return !!journeyCurriculum(s.id)}).length;
  app.innerHTML=header()+
    '<section class="hero"><div class="hero-row">'+mascot('heart',82)+'<div>'+
    '<h2>Build recall before Step 1 asks for it.</h2>'+
    '<p>Short mechanism-first lessons, active recall, matching, and mini-cases from the topics you are actually studying.</p>'+
    '<button class="cta" onclick="openSystem(\'cardio\')">'+(cd.done.length?'Continue Cardiology':'Start Cardiology')+'</button>'+
    '</div></div></section>'+
    '<div class="section-title"><h2>Systems</h2><span>'+populated+' curricula active</span></div>'+
    '<div class="systems">'+SYSTEMS.map(function(s){return systemCard(s)}).join('')+'</div>'+
    '<p class="footer-note">Expanded around high-yield Step 1 mechanisms. Abbreviations are expanded on first use inside each lesson.</p>';
};

systemCard=function(s){
  var c=journeyCurriculum(s.id),d=c?journeySystemData(s.id):{done:[]},m=mastery(s);
  var total=c?c.lessons.length:s.total;
  var done=c?d.done.filter(function(id){return c.lessons.some(function(l){return l.id===id})}).length:0;
  var progress=total?Math.round(done/total*100):0;
  return '<button class="system '+(c?'active':'')+'" style="--accent:'+s.accent+'" onclick="openSystem(\''+s.id+'\')">'+
    '<div class="system-head"><div class="sys-icon">'+s.icon+'</div><span class="sys-mood">'+(c?moodFor(m):'Soon')+'</span></div>'+
    '<h3>'+esc(s.name)+'</h3><p>'+esc(s.blurb)+'</p>'+
    '<div class="meter"><i style="width:'+progress+'%"></i></div>'+
    '<div class="small-row"><span>Progress '+progress+'%</span><span>'+(c?(m==null?'Mastery —':'Mastery '+m+'%'):'Curriculum shell')+'</span></div></button>';
};

system=function(){
  dock.classList.add('hidden');
  var s=SYSTEMS.find(function(x){return x.id===view.system});
  var c=journeyCurriculum(view.system);
  if(!s){goHome();return}
  if(!c){
    app.innerHTML='<button class="back" onclick="goHome()">← All systems</button>'+
      '<section class="system-banner" style="--accent:'+s.accent+';--accent-d:'+s.deep+'"><div class="row">'+
      '<div class="sys-icon" style="color:'+s.deep+'">'+s.icon+'</div><div><h2>'+esc(s.name)+'</h2><p>'+esc(s.blurb)+'</p></div></div></section>'+
      '<div class="placeholder"><h3>Curriculum shell ready</h3><p>This system is already in the architecture and can be populated without changing the learning engine.</p></div>';
    return;
  }
  var d=journeySystemData(s.id),m=mastery(s);
  var done=d.done.filter(function(id){return c.lessons.some(function(l){return l.id===id})}).length;
  var progress=Math.round(done/c.lessons.length*100);
  var first=c.lessons[0];
  app.innerHTML='<button class="back" onclick="goHome()">← All systems</button>'+
    '<section class="system-banner" style="--accent:'+s.accent+';--accent-d:'+s.deep+'"><div class="row">'+
    mascot(first.character,82)+'<div><h2>'+esc(c.title)+'</h2><p>'+esc(c.intro)+'</p></div></div>'+
    '<div class="progress-grid"><div class="progress-card"><span>Progress</span><b>'+progress+'%</b></div>'+
    '<div class="progress-card"><span>Mastery</span><b>'+(m==null?'—':m+'%')+'</b></div></div></section>'+
    '<div class="speech '+(m!=null&&m<50?'joke':'')+'">'+mascot(first.character,58)+
    '<div class="bubble"><span class="who">HY Journey</span>'+moodLine(m)+'</div></div>'+
    '<div class="lesson-list">'+c.lessons.map(function(l,i){return lessonButton(l,i,d.done,c.lessons,s)}).join('')+'</div>';
};

lessonButton=function(l,i,done,lessons,s){
  lessons=lessons||CARDIO.lessons;
  s=s||SYSTEMS[0];
  var complete=done.includes(l.id),unlocked=i===0||done.includes(lessons[i-1].id);
  return '<button class="lesson-btn '+(complete?'done ':'')+(!unlocked?'locked':'')+'" style="--accent:'+s.accent+'" '+(!unlocked?'disabled':'')+
    ' onclick="startLesson(\''+l.id+'\')"><div class="lesson-num">'+(complete?'✓':i+1)+'</div><div><h3>'+esc(l.title)+'</h3><p>'+esc(l.subtitle)+'</p></div>'+
    '<span class="go">'+(unlocked?'›':'🔒')+'</span></button>';
};

window.startLesson=function(id){
  var sys=view.system,c=journeyCurriculum(sys);
  if(!c||!c.lessons.some(function(x){return x.id===id}))return;
  view={screen:'lesson',system:sys,lesson:id,step:0,hearts:5,selected:null,checked:false,right:0,match:null,matchDone:[]};
  dock.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
  render();
};

window.exitLesson=function(){
  view.screen='system';
  dock.classList.add('hidden');
  render();
};

lesson=function(){
  var l=journeyLesson();
  if(!l){view.screen='system';render();return}
  var st=l.steps[view.step],pct=Math.round(view.step/l.steps.length*100);
  app.innerHTML='<div class="lesson-top"><button class="close" onclick="exitLesson()">×</button>'+
    '<div class="bar"><i style="width:'+pct+'%"></i></div><div class="hearts">♥ '+view.hearts+'</div></div>'+
    '<div id="stage">'+stage(l,st)+'</div>';
  wireStage(l,st);
};

var journeyBaseStage=stage;
stage=function(l,st){
  if(st.type!=='multi')return journeyBaseStage(l,st);
  return '<div class="speech">'+mascot(l.character,62)+'<div class="bubble"><span class="who">'+esc(l.character)+'</span>There may be more than one correct answer.</div></div>'+
    '<section class="card"><span class="eyebrow">Select all that apply</span><p class="question">'+esc(st.q)+'</p>'+
    '<div class="options">'+st.opts.map(function(o,i){return '<button class="opt" data-i="'+i+'">'+esc(o)+'</button>'}).join('')+'</div>'+
    '<div id="feedback"></div><button id="checkBtn" class="action" disabled>Check</button></section>';
};

var journeyBaseWire=wireStage;
wireStage=function(l,st){
  if(st.type!=='multi'){journeyBaseWire(l,st);return}
  renderAI(st);
  view.selected=[];
  document.querySelectorAll('.opt').forEach(function(b){
    b.onclick=function(){
      if(view.checked)return;
      var i=+b.dataset.i,pos=view.selected.indexOf(i);
      if(pos>=0){view.selected.splice(pos,1);b.classList.remove('sel')}
      else{view.selected.push(i);b.classList.add('sel')}
      document.getElementById('checkBtn').disabled=view.selected.length===0;
    };
  });
  document.getElementById('checkBtn').onclick=checkMulti;
};

checkChoice=function(){
  if(view.checked)return;
  var l=journeyLesson(),st=l.steps[view.step],ok=view.selected===st.a;
  view.checked=true;
  document.querySelectorAll('.opt').forEach(function(b){
    var i=+b.dataset.i;
    if(i===st.a)b.classList.add('good');
    else if(i===view.selected)b.classList.add('bad');
    b.disabled=true;
  });
  journeyFinishQuestion(ok,st.why);
};

function checkMulti(){
  if(view.checked)return;
  var l=journeyLesson(),st=l.steps[view.step];
  var got=view.selected.slice().sort(function(a,b){return a-b});
  var want=st.a.slice().sort(function(a,b){return a-b});
  var ok=got.length===want.length&&got.every(function(x,i){return x===want[i]});
  view.checked=true;
  document.querySelectorAll('.opt').forEach(function(b){
    var i=+b.dataset.i;
    if(st.a.includes(i))b.classList.add('good');
    else if(view.selected.includes(i))b.classList.add('bad');
    b.disabled=true;
  });
  journeyFinishQuestion(ok,st.why);
}
function journeyFinishQuestion(ok,why){
  if(ok)view.right++;else view.hearts=Math.max(0,view.hearts-1);
  var f=document.getElementById('feedback');
  f.className='feedback'+(ok?'':' bad');
  f.innerHTML='<b>'+(ok?'Correct.':'Not quite.')+'</b>'+esc(why);
  var btn=document.getElementById('checkBtn');
  btn.disabled=false;
  btn.textContent=view.hearts===0?'Review and exit':'Continue';
  btn.onclick=function(){view.hearts===0?exitLesson():nextStep()};
}

window.nextStep=function(){
  var l=journeyLesson();
  view.step++;view.selected=null;view.checked=false;
  if(view.step>=l.steps.length)return finishLesson(l);
  render();
  window.scrollTo({top:0,behavior:'smooth'});
};

finishLesson=function(l){
  var s=SYSTEMS.find(function(x){return x.id===view.system});
  var d=journeySystemData(view.system),wasDone=d.done.includes(l.id);
  if(!wasDone)d.done.push(l.id);
  var questionCount=l.steps.filter(function(st){return ['choice','multi','match'].includes(st.type)}).length;
  var accuracy=questionCount?Math.round(view.right/questionCount*100):100;
  var prior=d.mastery==null?72:mastery(s);
  d.mastery=Math.min(100,Math.round(prior*.55+accuracy*.45+6));
  d.lastReview=day();
  if(!wasDone)state.xp+=20+view.right*5;
  var y=new Date();y.setDate(y.getDate()-1);
  var yesterday=y.toISOString().slice(0,10);
  if(state.lastDay!==day()){
    state.streak=state.lastDay===yesterday?(state.streak||0)+1:1;
    state.lastDay=day();
  }
  save();
  view.screen='result';view.accuracy=accuracy;
  dock.classList.add('hidden');
  render();
};

result=function(){
  var l=journeyLesson(),s=SYSTEMS.find(function(x){return x.id===view.system}),m=mastery(s);
  app.innerHTML='<div class="result">'+mascot(l.character,135)+
    '<h2>'+(view.accuracy>=90?'Clean work.':view.accuracy>=70?'Solid step.':'Needs another pass.')+'</h2>'+
    '<p>'+esc(l.title)+' completed.</p><div class="score-grid"><div class="score"><span>Accuracy</span><b>'+view.accuracy+'%</b></div>'+
    '<div class="score"><span>'+esc(s.name)+' mastery</span><b>'+m+'%</b></div></div>'+
    '<button class="action" onclick="backToSystem()">Continue</button></div>';
};
window.backToSystem=function(){view.screen='system';render()};

renderAI=function(st){
  if(view.screen!=='lesson'){dock.classList.add('hidden');return}
  dock.classList.remove('hidden');
  dock.innerHTML='<div id="aiAnswer"></div><div class="ai-suggestions">'+
    '<button onclick="askQuick(\'Why?\')">Why?</button><button onclick="askQuick(\'Compare the options\')">Compare the options</button>'+
    '<button onclick="askQuick(\'Give me a Step 1 example\')">Step 1 example</button><button onclick="askQuick(\'Quiz me again\')">Quiz me again</button></div>'+
    '<div class="ai-box"><input id="aiInput" placeholder="Ask HY Journey AI…" aria-label="Ask HY Journey AI"/><button onclick="askAI()">Ask</button></div>';
  var input=document.getElementById('aiInput');
  input.onkeydown=function(e){if(e.key==='Enter')askAI()};
};

window.askAI=function(){
  var input=document.getElementById('aiInput'),q=(input.value||'').trim();
  if(!q)return;
  var l=journeyLesson(),st=l.steps[view.step],low=q.toLowerCase();
  var a=l.ai||'Start with the mechanism, then predict what changes next before looking at the answer choices.';
  if(low.includes('compare')&&st.opts&&st.opts.length)a+=' Compare every option against the mechanism rather than matching isolated keywords.';
  if(low.includes('example'))a+=' Build a mini-case by asking what clinical clue would change if this mechanism failed or became exaggerated.';
  if(low.includes('quiz'))a+=' Re-answer this step without looking at the explanation, then state the mechanism in one sentence.';
  document.getElementById('aiAnswer').innerHTML='<div class="ai-answer"><b>HY Journey AI · prototype</b>'+esc(a)+'</div>';
  input.value='';
};

render();
