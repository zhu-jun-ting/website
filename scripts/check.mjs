import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const roots=['index.html','about.html','404.html',...['projects','research','archive'].flatMap(dir=>readdirSync(dir).filter(n=>n.endsWith('.html')).map(n=>`${dir}/${n}`))];
let count=0;
for(const filename of roots){
 const text=readFileSync(filename,'utf8');
 assert(text.includes('<html lang="zh-CN">'),filename+': missing language');
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
assert(!readFileSync('about.html','utf8').includes('mailto:'),'Contact must remain empty until the updated resume arrives');
console.log(`PASS: ${roots.length} pages, ${count} local references, PDF integrity, and profile placeholders.`);
