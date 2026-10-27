import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const roots=['index.html','about.html','404.html',...['projects','research','archive'].flatMap(dir=>readdirSync(dir).filter(n=>n.endsWith('.html')).map(n=>`${dir}/${n}`))];
let count=0;
const translations=JSON.parse(readFileSync('assets/translations.js','utf8').replace(/^window\.PORTFOLIO_I18N=/,'').trim().replace(/;$/,''));
const decode=s=>s.replaceAll('&quot;','"').replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&');
for(const filename of roots){
 const text=readFileSync(filename,'utf8');
 assert(text.includes('<html lang="en">'),filename+': English must be the static default');
 assert(text.includes('class="language-toggle"'),filename+': missing language switch');
 for(const m of text.matchAll(/data-i18n(?:-(?:aria-label|alt|placeholder|content))?="([^"]+)"/g)){
  const pair=translations[decode(m[1])];
  assert(pair?.en&&pair?.zh,filename+': missing translation '+m[1]);
 }
 const visible=text.replace(/<[^>]*>/g,'').replaceAll('中文','');
 assert(!/\p{Script=Han}/u.test(visible),filename+': untranslated text in English default');
 assert.equal((text.match(/<h1[\s>]/g)||[]).length,1,filename+': expected one h1');
 assert(!/undefined|TODO|lorem ipsum/i.test(text),filename+': unfinished content');
 for(const m of text.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){
  const url=m[1];if(/^(https?:|mailto:|data:)/.test(url))continue;
  const target=path.resolve(path.dirname(filename),url.split('?')[0]);
  assert(existsSync(target),`${filename}: missing ${url}`);count++;
 }
}
for(const file of readdirSync('assets/documents')){
 const b=readFileSync('assets/documents/'+file);
 assert(b.subarray(0,5).toString()==='%PDF-',file+': not a PDF');
 assert(b.subarray(-1024).toString().includes('%%EOF'),file+': incomplete PDF');
 assert(statSync('assets/documents/'+file).size<100*1024*1024,file+': exceeds GitHub file limit');
}
const galleries={'projects/flicker.html':{flicker:7},'projects/emotional-damage.html':{'emotional-damage':7},'projects/alibi.html':{alibi:4},'projects/dymo.html':{dymo:5},'projects/luna.html':{luna:4},'research/spin.html':{'spin-poster':1,'spin-report':6}};
for(const [file,docs] of Object.entries(galleries)){
 const html=readFileSync(file,'utf8');
 const actual=[...html.matchAll(/<img src="\.\.\/assets\/images\/([^"]+)"/g)].map(m=>m[1]);
 const expected=Object.entries(docs).flatMap(([slug,pages])=>Array.from({length:pages},(_,i)=>`${slug}-${i+1}.webp`));
 assert.deepEqual(actual,expected,file+': PDF pages must be complete and ordered');
 assert(!/class="case-lead"|MY CONTRIBUTION/.test(html),file+': duplicate narrative');
}
const about=readFileSync('about.html','utf8');
assert(about.includes('北京优乐科技有限公司')&&about.includes('2025.09 — 至今'),'Current role missing');
assert(!about.includes('mailto:'),'No public contact email has been supplied');
console.log(`PASS: ${roots.length} bilingual pages, ${count} local references, complete PDF page order, and current role.`);
