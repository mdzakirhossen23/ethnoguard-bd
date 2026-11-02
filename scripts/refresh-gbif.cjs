const fs=require('node:fs/promises');
const names=['Azadirachta indica','Curcuma longa','Ocimum tenuiflorum','Centella asiatica','Justicia adhatoda','Withania somnifera'];
const checklist='7ddf754f-d193-4cc9-b351-99906754a03b';
async function get(url){const r=await fetch(url,{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error(r.status+' '+url);return r.json();}
(async()=>{
  const result=[];
  for(const name of names){
    const matchUrl='https://api.gbif.org/v2/species/match?scientificName='+encodeURIComponent(name)+'&checklistKey='+checklist;
    const match=await get(matchUrl);
    if(match.diagnostics?.matchType!=='EXACT'||match.usage?.rank!=='SPECIES'||match.synonym)throw Error('Review taxon match: '+name+' '+JSON.stringify(match));
    const key=match.usage.key;
    const url='https://api.gbif.org/v1/occurrence/search?country=BD&taxonKey='+key+'&checklistKey='+checklist+'&occurrenceStatus=PRESENT&limit=0';
    const count=await get(url);
    const geoUrl=url.replace('&limit=0','&hasCoordinate=true&hasGeospatialIssue=false&limit=0');
    const geo=await get(geoUrl);
    const row={name,taxon_key:key,checklist_key:checklist,matched_name:match.usage.name,match_type:match.diagnostics.matchType,count:count.count,georeferenced_count:geo.count,retrieved_at:new Date().toISOString(),query_url:url,georeferenced_query_url:geoUrl,match_url:matchUrl,portal_url:'https://www.gbif.org/occurrence/search?country=BD&taxonKey='+key+'&occurrenceStatus=present',interpretation:'Indexed occurrence records, not plant abundance, population size, native status or conservation risk. Counts may include cultivated plants, duplicate records and uneven sampling. Zero records does not establish absence.'};
    result.push(row);console.log(name+': '+row.count+' records, '+row.georeferenced_count+' georeferenced');
  }
  await fs.writeFile(require('node:path').join(__dirname,'../data/gbif-snapshot.json'),JSON.stringify(result,null,2));
})();

