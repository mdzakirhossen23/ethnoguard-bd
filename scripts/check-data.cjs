const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const rows=JSON.parse(fs.readFileSync(path.join(__dirname,'../public/ai-records.json')));
assert.equal(rows.length,6);
const ids=new Set();
for(const p of rows){
  assert.ok(!ids.has(p.id));ids.add(p.id);
  assert.ok(p.sources.length>=2);
  for(const text of [p.finding,p.findingBn,p.limitations,p.limitationsBn]){
    assert.equal(typeof text,'string');
    for(const m of text.matchAll(/\[([A-Z][0-9]+)\]/g))assert.ok(p.sources.some(s=>s.id===m[1]),`${p.id}: missing ${m[1]}`);
  }
  const b=p.biodiversity;
  assert.ok(b.georeferenced_count<=b.count);
  assert.ok(/[A-Z]/.test(b.taxon_key),'Portal must use current taxonomy IDs');
  const portal=new URL(b.portal_url);
  assert.equal(portal.hostname,'www.gbif.org');
  assert.equal(portal.searchParams.get('taxonKey'),b.taxon_key);
  assert.equal(portal.searchParams.get('country'),'BD');
  const query=new URL(b.query_url);
  assert.equal(query.searchParams.get('checklistKey'),b.checklist_key);
  assert.equal(query.searchParams.get('limit'),'0');
  assert.ok(p.sources.some(s=>s.id.startsWith('G')&&s.url===b.portal_url));
}
assert.equal(rows.filter(p=>p.kind==='rct').length,4);
assert.equal(rows.filter(p=>p.kind==='nonrandomized').length,1);
assert.equal(rows.filter(p=>p.kind==='taxonomy').length,1);
assert.equal(rows.reduce((sum,p)=>sum+p.biodiversity.count,0),98);
console.log('PASS: source references, taxon links, subset counts, study types and snapshot totals');

