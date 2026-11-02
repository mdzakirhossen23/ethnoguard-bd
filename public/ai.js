(() => {
  'use strict';
  const copy = {
    en: {nav:'Ask EthnoGuard',title:'A careful guide to the demo',intro:'Ask about the six plant summaries, missing evidence, or harvest considerations.',badge:'Powered by Groq',scope:'Demo records only · No literature search',label:'Your research question',placeholder:'What does this demo say about turmeric?',send:'Ask EthnoGuard',clear:'Clear',privacy:'Your question and the demo records are sent to Groq. Do not include personal or medical information. Questions are not saved by this website.',limit:'Up to 1,200 characters. Answers may contain errors; these records are not scientific evidence.',checking:'Checking availability…',ready:'Ready · Answers use unvalidated demo records',setup:'AI is awaiting setup by the site owner.',busy:'Reading the demo records…',failed:'The assistant could not connect. Please try again.',empty:'Please enter a question.',long:'Please keep your question within 1,200 characters.',refs:'Demo records mentioned — not supporting studies',answer:'AI response',question:'Your question',errors:{not_configured:'AI is awaiting setup by the site owner.',rate_limited:'The demo request limit has been reached. Please try later.',provider_busy:'Groq is busy or its request limit was reached. Please try later.',provider_unavailable:'Groq is unavailable. The site owner may need to check the API key, model access or account quota.',invalid_question:'Please enter a valid question.',question_too_long:'Please shorten your question.',server_unavailable:'The assistant is temporarily unavailable.',quota_unavailable:'The assistant is temporarily unavailable.'},examples:['Compare the demo harvest considerations for neem and ashwagandha.','What evidence is missing from these plant records?','How can I search this plant demo?']},
    bn: {nav:'EthnoGuard-কে জিজ্ঞাসা করুন',title:'ডেমো বোঝার সহায়ক',intro:'ছয়টি উদ্ভিদের সারাংশ, প্রমাণের ঘাটতি বা সংগ্রহের বিবেচনা সম্পর্কে প্রশ্ন করুন।',badge:'Groq-এর সহায়তায়',scope:'শুধু ডেমো রেকর্ড · গবেষণা অনুসন্ধান নয়',label:'আপনার গবেষণাসংক্রান্ত প্রশ্ন',placeholder:'এই ডেমোতে হলুদ সম্পর্কে কী বলা হয়েছে?',send:'প্রশ্ন করুন',clear:'মুছুন',privacy:'আপনার প্রশ্ন ও ডেমো রেকর্ড Groq-এ পাঠানো হবে। ব্যক্তিগত বা চিকিৎসাসংক্রান্ত তথ্য দেবেন না। এই ওয়েবসাইট প্রশ্ন সংরক্ষণ করে না।',limit:'সর্বোচ্চ ১,২০০ অক্ষর। উত্তরে ভুল থাকতে পারে; রেকর্ডগুলো বৈজ্ঞানিক প্রমাণ নয়।',checking:'সংযোগ যাচাই করা হচ্ছে…',ready:'প্রস্তুত · উত্তরগুলো অযাচাইকৃত ডেমো রেকর্ডভিত্তিক',setup:'সাইটের মালিক AI সেটআপ সম্পন্ন করলে এটি চালু হবে।',busy:'ডেমো রেকর্ড পড়া হচ্ছে…',failed:'সহায়কের সঙ্গে সংযোগ হয়নি। আবার চেষ্টা করুন।',empty:'একটি প্রশ্ন লিখুন।',long:'প্রশ্ন ১,২০০ অক্ষরের মধ্যে রাখুন।',refs:'উল্লেখ করা ডেমো রেকর্ড — সমর্থনকারী গবেষণা নয়',answer:'AI-এর উত্তর',question:'আপনার প্রশ্ন',errors:{not_configured:'সাইটের মালিক AI সেটআপ সম্পন্ন করলে এটি চালু হবে।',rate_limited:'ডেমোর অনুরোধসীমা পূর্ণ হয়েছে। পরে চেষ্টা করুন।',provider_busy:'Groq ব্যস্ত বা অনুরোধসীমা পূর্ণ হয়েছে। পরে চেষ্টা করুন।',provider_unavailable:'Groq পাওয়া যাচ্ছে না। সাইটের মালিককে API কী, মডেল ও অ্যাকাউন্ট কোটা যাচাই করতে হতে পারে।',invalid_question:'একটি সঠিক প্রশ্ন লিখুন।',question_too_long:'প্রশ্নটি ছোট করুন।'},examples:['নিম ও অশ্বগন্ধার সংগ্রহসংক্রান্ত ডেমো বিবেচনা তুলনা করুন।','এই রেকর্ডগুলোতে কী প্রমাণের ঘাটতি আছে?','এই ডেমোতে উদ্ভিদ কীভাবে খুঁজব?']}
  };

  Object.assign(copy.en,{title:'Ask the source-linked corpus',intro:'Explore selected study findings, limitations and Bangladesh occurrence counts.',scope:'Selected sources · No live literature search',privacy:'Your question and the selected source summaries are sent to Groq. Do not include personal or medical information. Questions are not saved by this website.',limit:'Up to 1,200 characters. AI can make mistakes. Open the cited source and check its scope.',ready:'Ready · Selected sources checked 2 November 2026',busy:'Reading the selected sources…',refs:'Research sources cited',examples:['What did the turmeric knee-pain trial find, and what did it not find?','Why does the Centella study not prove equal effectiveness?','Compare Bangladesh GBIF counts for neem and ashwagandha.']});
  copy.en.errors.uncited_answer='The assistant could not produce valid source citations. Please ask a narrower research question.';
  Object.assign(copy.bn,{title:'উৎসযুক্ত তথ্যভান্ডারকে প্রশ্ন করুন',intro:'নির্বাচিত গবেষণার ফলাফল, সীমাবদ্ধতা ও বাংলাদেশে উপস্থিতির রেকর্ড জানুন।',scope:'নির্বাচিত উৎস · সরাসরি সাহিত্য অনুসন্ধান নয়',privacy:'আপনার প্রশ্ন ও নির্বাচিত উৎসের সারাংশ Groq-এ পাঠানো হবে। ব্যক্তিগত বা চিকিৎসাসংক্রান্ত তথ্য দেবেন না। এই সাইট প্রশ্ন সংরক্ষণ করে না।',limit:'সর্বোচ্চ ১,২০০ অক্ষর। AI ভুল করতে পারে। উদ্ধৃত মূল উৎস ও তার সীমা যাচাই করুন।',ready:'প্রস্তুত · নির্বাচিত উৎস যাচাই ২ নভেম্বর ২০২৬',busy:'নির্বাচিত উৎস পড়া হচ্ছে…',refs:'উদ্ধৃত গবেষণার উৎস',examples:['হাঁটুর ব্যথা নিয়ে হলুদের গবেষণায় কী পাওয়া গেছে, কী পাওয়া যায়নি?','থানকুনির গবেষণা কেন সমান কার্যকারিতা প্রমাণ করে না?','বাংলাদেশে নিম ও অশ্বগন্ধার GBIF রেকর্ড তুলনা করুন।']});
  copy.bn.errors.uncited_answer='সহায়ক সঠিক উৎসের উদ্ধৃতি তৈরি করতে পারেনি। আরও নির্দিষ্ট গবেষণাসংক্রান্ত প্রশ্ন করুন।';

  const nav = document.createElement('button');
  nav.className = 'nav-item'; nav.dataset.view = 'ask';
  const icon = document.createElement('span'); icon.textContent = '✦';
  const navText = document.createElement('span'); nav.append(icon, navText);
  document.querySelector('.sidebar nav').append(nav);
  const section = document.createElement('section'); section.id = 'view-ask'; section.className = 'view';
  section.innerHTML = '<div class="section-title"><p class="eyebrow" id="ai-badge"></p><h2 id="ai-title"></h2><p id="ai-intro"></p></div><div class="ai-panel"><p class="ai-scope" id="ai-scope"></p><p id="ai-availability" role="status"></p><form id="ai-form"><label for="ai-question" id="ai-label"></label><textarea id="ai-question" rows="4" maxlength="1200" required></textarea><p class="ai-note" id="ai-privacy"></p><p class="ai-note" id="ai-limit"></p><div class="ai-actions"><button type="submit" id="ai-send"></button><button type="button" id="ai-clear"></button><span id="ai-count" aria-hidden="true">0 / 1200</span></div></form><div id="ai-examples" class="ai-examples"></div><p id="ai-status" role="status" aria-live="polite"></p><div id="ai-output" hidden tabindex="-1"><h3 id="ai-question-title"></h3><p id="ai-asked"></p><h3 id="ai-answer-title"></h3><div id="ai-answer" dir="auto"></div><div id="ai-references"></div></div></div>';
  document.querySelector('#view-sources').after(section);
  const style=document.createElement('style');
  style.textContent='#view-ask .ai-panel{border:1px solid #34574d;background:#102d27;border-radius:20px;padding:24px;max-width:900px;box-sizing:border-box}#view-ask .ai-scope{color:#bce78a;font-size:13px}#view-ask label{display:block;margin:20px 0 10px;font-weight:700}#view-ask textarea{display:block;box-sizing:border-box;width:100%;resize:vertical;min-height:105px;max-height:300px;background:#0b211d;border:1px solid #487064;border-radius:12px;padding:14px;color:#f4f0dc;font:inherit;line-height:1.6}#view-ask .ai-note{font-size:12px;line-height:1.6;color:#b7cbc4;margin:10px 0}#view-ask .ai-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap}#view-ask button{border:1px solid #4c7565;border-radius:9px;padding:10px 14px;color:#e8f1df;background:#1c4438;font:inherit;cursor:pointer}#view-ask #ai-send{background:#88dba9;color:#09271c;font-weight:700}#view-ask button:disabled{opacity:.5;cursor:not-allowed}#view-ask .ai-examples{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}#view-ask .ai-examples button{font-size:12px;text-align:start}#view-ask #ai-count{font-size:12px;color:#b7cbc4}#view-ask #ai-output{border-top:1px solid #34574d;margin-top:18px;padding-top:12px;overflow-wrap:anywhere}#view-ask #ai-output h3{font-size:15px;margin:16px 0 8px}#view-ask #ai-answer,#view-ask #ai-asked{white-space:pre-wrap;line-height:1.75}#view-ask #ai-references button{margin:4px;font-size:12px}#view-ask #ai-availability,#view-ask #ai-status{font-size:13px;line-height:1.6}@media(max-width:600px){#view-ask .ai-panel{padding:16px}}';
  document.head.append(style);
  const markdownStyle=document.createElement('style');
  markdownStyle.textContent='#view-ask #ai-output #ai-answer{white-space:normal;line-height:1.75}#view-ask #ai-answer p{margin:0 0 14px}#view-ask #ai-answer ul,#view-ask #ai-answer ol{padding-inline-start:24px;margin:12px 0 18px}#view-ask #ai-answer li{margin:8px 0}#view-ask #ai-answer h1,#view-ask #ai-answer h2,#view-ask #ai-answer h3,#view-ask #ai-answer h4{font-size:18px;line-height:1.4;margin:20px 0 10px}#view-ask #ai-answer strong{color:#e4f4ce}#view-ask #ai-answer blockquote{border-inline-start:3px solid #88dba9;padding-inline-start:14px;margin:14px 0;color:#c5d8ce}#view-ask #ai-answer pre{background:#071d17;border-radius:8px;padding:12px;overflow:auto;white-space:pre}#view-ask #ai-answer code{background:#071d17;padding:2px 4px;border-radius:4px}#view-ask #ai-answer table{display:block;max-width:100%;overflow:auto;border-collapse:collapse;margin:14px 0}#view-ask #ai-answer th,#view-ask #ai-answer td{padding:8px 12px;border:1px solid #426255;text-align:start}#view-ask #ai-answer a{color:#a5e6c0;text-decoration:underline}#view-ask #ai-output:focus{outline:none}';
  document.head.append(markdownStyle);
  const $ = id=>document.getElementById(id);
  let configured=false,checking=true,pending=false,controller=null,requestId=0,lastError='';
  const t=()=>copy[document.documentElement.lang==='bn'?'bn':'en'];
  function update(){
    const c=t();navText.textContent=c.nav;
    for(const [id,key] of Object.entries({'ai-badge':'badge','ai-title':'title','ai-intro':'intro','ai-scope':'scope','ai-label':'label','ai-privacy':'privacy','ai-limit':'limit','ai-send':'send','ai-clear':'clear','ai-question-title':'question','ai-answer-title':'answer'}))$(id).textContent=c[key];
    $('ai-question').placeholder=c.placeholder;
    $('ai-availability').textContent=checking?c.checking:(configured?c.ready:c.setup);
    $('ai-send').disabled=!configured||checking||pending;
    $('ai-question').disabled=!configured||checking;
    if(pending)$('ai-status').textContent=c.busy;
    else if(lastError)$('ai-status').textContent=c.errors[lastError]||c[lastError]||c.failed;
    $('ai-examples').replaceChildren();
    c.examples.forEach(q=>{const b=document.createElement('button');b.type='button';b.textContent=q;b.disabled=!configured||checking||pending;b.addEventListener('click',()=>{$('ai-question').value=q;count();$('ai-question').focus();});$('ai-examples').append(b);});
  }
  function count(){$('ai-count').textContent=Array.from($('ai-question').value).length+' / 1200';}
  $('ai-question').addEventListener('input',count);
  $('ai-clear').addEventListener('click',()=>{requestId++;if(controller)controller.abort();pending=false;lastError='';$('ai-question').value='';$('ai-status').textContent='';$('ai-answer').textContent='';$('ai-asked').textContent='';$('ai-references').replaceChildren();$('ai-output').hidden=true;count();update();});
  // app.js updates the language in its earlier document-level click listener.
  document.addEventListener('click',e=>{if(e.target.closest('.language'))update();});
  $('ai-form').addEventListener('submit',async e=>{
    e.preventDefault();if(pending||!configured)return;
    const question=$('ai-question').value.trim();
    if(!question){lastError='empty';update();return;}
    if(Array.from(question).length>1200){lastError='long';update();return;}
    const id=++requestId;controller=new AbortController();pending=true;lastError='';$('ai-output').hidden=true;update();
    const timeout=setTimeout(()=>controller.abort(),40000);
    try{
      const response=await fetch('ai.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question,language:document.documentElement.lang==='bn'?'bn':'en'}),signal:controller.signal});
      const data=await response.json();if(id!==requestId)return;
      if(!response.ok||typeof data.answer!=='string'){lastError=data.error||'failed';if(data.error==='not_configured')configured=false;return;}
      $('ai-asked').textContent=question;
      if(window.renderEthnoMarkdown)window.renderEthnoMarkdown($('ai-answer'),data.answer);
      else $('ai-answer').textContent=data.answer;
      $('ai-answer').lang=document.documentElement.lang==='bn'?'bn':'en';
      $('ai-references').replaceChildren();
      const refs=Array.isArray(data.references)?data.references:[];
      if(refs.length){const h=document.createElement('h3');h.textContent=t().refs;$('ai-references').append(h);refs.forEach(r=>{if(typeof r.url!=='string'||!/^https:\/\//.test(r.url))return;const a=document.createElement('a');a.href=r.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='['+r.reference+'] '+r.title;a.style.cssText='display:block;margin:10px 0;color:#a5e6c0;text-decoration:underline';$('ai-references').append(a);});}
      $('ai-output').hidden=false;$('ai-status').textContent='';$('ai-output').focus();
    }catch(error){if(id===requestId)lastError='failed';}
    finally{clearTimeout(timeout);if(id===requestId){pending=false;controller=null;update();}}
  });
  update();
  fetch('ai.php',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('status');return r.json();}).then(data=>{configured=data.configured===true;}).catch(()=>{lastError='failed';}).finally(()=>{checking=false;update();});
})();

