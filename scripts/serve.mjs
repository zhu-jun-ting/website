import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.pdf':'application/pdf'};
const port=Number(process.env.PORT||4173);
http.createServer((req,res)=>{
  let pathname;
  try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
  pathname=pathname.replace(/^\/website(?=\/|$)/,'');
  let filename=path.resolve(root,'.'+(pathname||'/'));
  if(!filename.startsWith(root+path.sep)&&filename!==root){res.writeHead(403).end();return;}
  if(path.relative(root,filename).split(path.sep).some(p=>p.startsWith('.'))){res.writeHead(403).end();return;}
  if(fs.existsSync(filename)&&fs.statSync(filename).isDirectory())filename=path.join(filename,'index.html');
  if(!fs.existsSync(filename)){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(fs.readFileSync(path.join(root,'404.html')));return;}
  res.writeHead(200,{'Content-Type':types[path.extname(filename)]||'application/octet-stream'});
  fs.createReadStream(filename).pipe(res);
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/website/`));
