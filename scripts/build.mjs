import {writeFileSync, mkdirSync} from 'node:fs';
import {projects, additional, featuredProject} from './content.mjs';
import {localize, translationsScript} from './i18n.mjs';

const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const selectedProjects=[featuredProject,...projects];
const site='https://zhu-jun-ting.github.io/Personal-Website-Local-Files/';
function layout(path,title,description,body,active='') {
  const base=path==='404.html'?site:(path.includes('/')?'../':'./');
  const nav=[['作品','projects/index.html','work'],['科研','research/index.html','research'],['关于','about.html','about'],['实验归档','archive/index.html','archive']];
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${esc(title)} · Junting Zhu</title><meta name="description" content="${esc(description)}"><meta property="og:title" content="${esc(title)} · Junting Zhu"><meta property="og:description" content="${esc(description)}"><meta property="og:image" content="${site}assets/images/pinball-rouge-cover-2x.jpg"><meta property="og:type" content="website"><link rel="canonical" href="${site+(path==='projects/orange-dawn.html'?'projects/pinball-rouge.html':path)}"><link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${base}assets/site.css?v=20261027-pinball-v2"><script src="${base}assets/translations.js?v=20261027-pinball-v2" defer></script><script src="${base}assets/site.js" defer></script></head><body><a class="skip" href="#main">跳至正文</a><header class="site-header wrap"><a class="brand" href="${base}index.html" aria-label="Junting Zhu 首页"><span class="brand-mark">JZ<span>✳</span></span><span>朱钧霆 <span class="brand-en">JUNTING ZHU</span></span></a><button class="language-toggle" type="button" aria-label="Switch to Chinese" lang="zh-CN">中文</button><button class="menu-toggle" aria-controls="navigation" aria-expanded="false">菜单 <span>＋</span></button><nav id="navigation" aria-label="主导航">${nav.map(([label,url,key])=>`<a href="${base+url}" ${key===active?'aria-current="page"':''}>${label}</a>`).join('')}<a class="nav-index" href="${base}projects/index.html" aria-label="查看全部作品">↗</a></nav></header><main id="main">${body}</main><footer class="wrap site-footer"><a class="brand footer-brand" href="${base}index.html">JZ<span>✳</span></a><p>Junting (David) Zhu</p><a href="#main">回到顶部 ↑</a></footer><dialog class="lightbox" aria-label="作品图片预览"><button class="lightbox-close" autofocus aria-label="关闭图片预览">关闭 ×</button><img alt=""><p></p></dialog></body></html>`;
}
function save(path,title,description,body,active) {if(path.includes('/')) mkdirSync(path.split('/')[0],{recursive:true});writeFileSync(path,localize(layout(path,title,description,body,active)));}

function links(items){return items.map(([text,url])=>`<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`).join('');}
function card(p,base=''){return `<article class="project-card" data-category="${p.category}" data-search="${esc(p.title+' '+p.categoryLabel+' '+p.role)}"><a href="${base}projects/${p.slug}.html" class="project-image ${p.slug}" aria-label="查看 ${p.title} 项目"><img src="${base}assets/images/${p.cover||p.slug+'-cover.webp'}" alt="${p.title}" loading="lazy" width="918" height="516"></a><h2><a href="${base}projects/${p.slug}.html">${p.title}<span aria-hidden="true">↗</span></a></h2></article>`;}
function spinCard(base=''){return `<article class="project-card"><a class="project-image poster" href="${base}research/spin.html" aria-label="查看 Reading Time Machine 项目"><img src="${base}assets/images/spin-poster-1.webp" alt="SPIN 研究海报" loading="lazy"></a><h2><a href="${base}research/spin.html">Reading Time Machine<span aria-hidden="true">↗</span></a></h2></article>`;}
const pageCounts={flicker:7,'emotional-damage':7,alibi:4,dymo:5,luna:4,'spin-poster':1,'spin-report':6};
function pdfPages(slug,title){return `<div class="pdf-stack" data-document="${slug}">${Array.from({length:pageCounts[slug]},(_,i)=>`<figure class="pdf-page"><a class="zoom" href="../assets/images/${slug}-${i+1}.webp" aria-label="放大：${esc(title)} 第 ${i+1} 页" data-caption="${esc(title)} · ${i+1} / ${pageCounts[slug]}"><img src="../assets/images/${slug}-${i+1}.webp" alt="${esc(title)}，第 ${i+1} 页，共 ${pageCounts[slug]} 页" loading="${i===0?'eager':'lazy'}" decoding="async"></a><figcaption>${String(i+1).padStart(2,'0')} / ${String(pageCounts[slug]).padStart(2,'0')}</figcaption></figure>`).join('')}</div>`;}
function titleList(items){return `<div class="title-list">${items.map(([title,url])=>`<a href="${url}">${title}<span aria-hidden="true">↗</span></a>`).join('')}</div>`;}

save('index.html','作品集','朱钧霆的游戏、设计与科研作品。',`
<section class="wrap home-highlight"><h1 class="sr-only">朱钧霆作品集</h1><a class="highlight-image pinball-highlight" href="projects/pinball-rouge.html" aria-label="查看 Pinball Rouge 项目"><img src="assets/images/pinball-rouge-cover-2x.jpg" alt="Pinball Rouge" width="920" height="430" fetchpriority="high"></a><div class="highlight-title"><h2><a href="projects/pinball-rouge.html">Pinball Rouge <span aria-hidden="true">↗</span></a></h2><span class="eyebrow">HIGHLIGHT</span></div></section>
<section class="wrap home-grid" aria-label="作品"><div class="project-grid">${projects.map(p=>card(p)).join('')}${spinCard()}</div></section>
<section class="wrap compact-section"><h2>更多作品</h2>${titleList([['全部作品','projects/index.html'],['科研','research/index.html'],['实验归档','archive/index.html']])}</section>`, 'work');

save('projects/index.html','作品','游戏与交互设计作品。',`
<section class="wrap page-intro"><h1>作品</h1></section>
<section class="wrap"><div class="filter-bar"><div class="filters" role="group" aria-label="筛选作品"><button class="active" data-filter="all" aria-pressed="true">全部 <span>${String(selectedProjects.length).padStart(2,'0')}</span></button><button data-filter="game" aria-pressed="false">游戏</button><button data-filter="design" aria-pressed="false">设计</button></div><label class="search-box"><span class="sr-only">搜索作品</span><input type="search" placeholder="搜索作品" id="project-search"></label></div><p class="filter-status sr-only" role="status">显示 ${selectedProjects.length} 个精选项目</p><div class="project-grid filter-grid">${selectedProjects.map(p=>card(p,'../')).join('')}</div><p class="empty-state" hidden>没有匹配的项目。</p></section>
<section class="wrap compact-section"><h2>更多作品</h2>${titleList(additional.map(p=>[p.title,p.url]))}</section>
<section class="wrap compact-section"><h2>作品集 PDF</h2>${titleList([['项目索引','../assets/documents/project-links.pdf'],['Breadth','../assets/documents/breadth.pdf'],['Portfolio','../assets/documents/portfolio-overview.pdf']])}</section>`, 'work');

for(const [i,p] of projects.entries()){
  const next=projects[(i+1)%projects.length];
  save(`projects/${p.slug}.html`,p.title,p.summary,`
  <section class="wrap detail-heading"><a class="back" href="index.html">← 作品</a><h1>${p.title}</h1><div class="actions">${links([...p.actions,['作品集 PDF',`../assets/documents/${p.slug}.pdf`]])}</div></section>
  <section class="wrap pdf-gallery" aria-label="${esc(p.title)} 完整作品集">${pdfPages(p.slug,p.title)}</section>
  <section class="wrap next-project"><a href="${next.slug}.html">${next.title} <span aria-hidden="true">↗</span></a></section>`, 'work');
}

const pinballBody=`
<section class="wrap detail-heading"><a class="back" href="index.html">← 作品</a><h1>Pinball Rouge</h1><div class="actions">${links([['Steam 商店','https://store.steampowered.com/app/3978300/'],['GitHub 源码','https://github.com/zhu-jun-ting/Orange-dawn']])}</div></section>
<section class="wrap game-intro"><p class="eyebrow">Unity / C# · Steam · 2025.11.16</p><p>一款结合弹球射击与卡牌构筑的俯视角肉鸽游戏。利用弹射子弹清理敌人，在房间探索与战斗中选择卡牌、组合能力，形成自己的战斗方式。</p><p>项目始于 2023 年的团队原型 Orange Dawn，之后由我持续独立开发，并于 2025 年以 Pinball Rouge 在 Steam 发布。我的工作涵盖玩法与系统设计、Unity 程序开发，以及原型迭代。</p></section>
<div class="wrap game-story">
${[
{title:'弹射战斗',text:'自动射击让操作重点回到走位和生存。子弹像弹球一样在碰撞中反弹，玩家需要在敌群与弹幕之间寻找空间，让移动、弹射轨迹和能力效果共同参与战斗。',images:[[2,'弹射战斗'],[6,'战斗与掉落']]},
{title:'卡牌构筑',text:'卡牌既是战斗奖励，也是调整玩法的工具。通过拖放卡牌、配置卡槽和组合数值与效果，玩家可以尝试不同的武器与能力搭配，把一局中的选择转化为自己的构筑。',images:[[4,'卡牌编辑与组合'],[3,'卡牌选择']]},
{title:'探索与成长',text:'在房间之间推进，经历战斗、收集奖励并调整构筑。房间系统组织战斗、商店、事件与 Boss 等不同节点；难度选项和对局结算则帮助玩家选择挑战，并回看这一局的表现。',images:[[5,'游戏主菜单'],[1,'对局结算']]}
].map(section=>`<section class="game-chapter"><div class="chapter-copy"><h2>${section.title}</h2><p>${section.text}</p></div><div class="game-gallery">${section.images.map(([n,label])=>`<figure><a class="zoom" href="../assets/images/pinball-rouge-${n}.jpg" aria-label="${label}" data-caption="Pinball Rouge"><img src="../assets/images/pinball-rouge-${n}.jpg" alt="${label}" width="1920" height="1080" loading="lazy"></a><figcaption>${label}</figcaption></figure>`).join('')}</div></section>`).join('')}
<section class="game-chapter development-note"><h2>设计与开发</h2><p>我负责玩法与系统策划，以及 Unity / C# 的原型和功能开发。项目实现涵盖枪械与子弹反弹、卡牌数据与拖放交互、房间切换，以及菜单、设置和对局统计；把战斗、构筑与流程连接成可游玩的整体。</p><p>2023 年的团队原型为项目建立了起点，后续独立开发继续完善玩法并完成 Steam 发布。源码保留 Orange Dawn 仓库名称，方便追溯项目的开发过程。</p></section>
</div>
<section class="wrap next-project"><a href="flicker.html">Flicker <span aria-hidden="true">↗</span></a></section>`;
// Preserve old inbound links and language parameters with the same content and canonical URL.
for(const slug of ['pinball-rouge','orange-dawn'])save(`projects/${slug}.html`,'Pinball Rouge','弹球射击与卡牌构筑，已在 Steam 发布。',pinballBody,'work');

save('research/index.html','科研','NCSA SPIN、Nova Study 与数据分析项目。',`
<section class="wrap page-intro"><h1>科研</h1></section>
<section class="wrap"><div class="project-grid">${spinCard('../')}${card(projects.find(p=>p.slug==='dymo'),'../')}</div></section>
<section class="wrap compact-section"><h2>其他研究</h2>${titleList([['Nova Study','nova-study.html'],['Sentimental Text Analysis','sentiment-analysis.html']])}</section>`, 'research');
save('research/spin.html','Reading Time Machine','NCSA SPIN 研究海报与完整报告。',`
<section class="wrap detail-heading"><a class="back" href="index.html">← 科研</a><h1>Reading Time Machine</h1><div class="actions">${links([['海报 PDF','../assets/documents/spin-poster.pdf'],['报告 PDF','../assets/documents/spin-report.pdf']])}</div></section>
<section class="wrap pdf-gallery" aria-label="SPIN 海报与报告"><h2 class="document-heading">SPIN Poster</h2>${pdfPages('spin-poster','SPIN Poster')}<h2 class="document-heading">SPIN Report</h2>${pdfPages('spin-report','SPIN Report')}</section>`, 'research');
save('research/nova-study.html','Nova Study','NCSA 基因数据研究实践。',`<section class="wrap detail-heading"><a class="back" href="index.html">← 科研</a><h1>Nova Study</h1></section><section class="wrap short-detail"><p class="eyebrow">2022.01 — 2022.09 · NCSA / 研究助理</p><p>在 Charles Blatti 教授指导下，使用 Python 处理基因数据，参与数据预处理、比较分析与可视化，为机器学习分析准备数据。</p></section>`, 'research');
save('research/sentiment-analysis.html','Sentimental Text Analysis','社交媒体文本情感分析课程项目。',`<section class="wrap detail-heading"><a class="back" href="index.html">← 科研</a><h1>Sentimental Text Analysis</h1></section><section class="wrap short-detail"><p class="eyebrow">2020 — 2021 · 课程项目</p><p>面向社交媒体文本的情感分析，参与数据清洗、TensorFlow / Keras 模型训练与输出评估。</p></section>`, 'research');

const experience=[
['2025.09 — 至今','北京优乐科技有限公司','游戏系统策划 / Game Designer','负责游戏原型搭建与系统方案设计，协同程序、美术等上下游团队推进功能落地；通过玩法验证与迭代，探索游戏方向与核心体验。'],
['2024.10 — 2025.05','北京陶乐科技有限公司','游戏策划','参与社交游戏的角色、职业与玩法设计，结合运营反馈和玩家意见持续迭代体验。'],
['2024.05 — 2024.09','Wolfpack Games Studio · Heavenhold','游戏策划','使用 Unity 设计并实现角色技能与表现，协同文案、3D 美术及动效团队完善角色动作和游戏体验。'],
['2023.07 — 2024.04','灵犀互娱','游戏数据分析','跟进项目公开测试，分析玩家行为与游戏体验问题，为策划迭代和产品方向提供依据。']
];
function resumeRow([date,name,role,text]){return `<article class="resume-row"><span class="resume-date">${date}</span><div><h3>${name}</h3><p class="resume-role">${role}</p><p>${text}</p></div></article>`;}
save('about.html','About Me','朱钧霆，游戏系统策划。游戏原型、玩法设计与跨团队协作。',`
<section class="wrap page-intro about-intro"><h1>朱钧霆<span class="name-en">Junting (David) Zhu</span></h1><p>游戏系统策划 / Game Designer</p></section>
<section class="wrap resume-section"><h2>工作经历</h2>${experience.map(resumeRow).join('')}</section>
<section class="wrap resume-section"><h2>项目重点</h2>${[
['2023 — 至今','Pinball Rouge','游戏策划 / 程序开发','从团队原型 Orange Dawn 延续为独立开发的弹球肉鸽游戏，负责玩法、系统与 Unity 开发，2025 年在 Steam 发布。'],
['2022 — 2023','Flicker','独立设计与开发','将汉字构字关系转化为游戏机制，根据玩家测试迭代设计并完成 Demo。'],
['2022','Emotional Damage','游戏策划 / 技术美术','参与 Game Off 团队项目，协调叙事与美术资源整合，完成 4 条任务线与 7 个场景。']
].map(resumeRow).join('')}</section>
<section class="wrap resume-section"><h2>教育与研究</h2>${resumeRow(['2019 — 2023','伊利诺伊大学厄巴纳—香槟分校','信息科学与平面设计双专业 · 计算机科学辅修','GPA 3.78。参与 NCSA SPIN 的 OCR 研究及 Nova Study 基因数据分析。'])}</section>
<section class="wrap resume-section"><h2>技能</h2><p class="skills-line">系统与玩法设计 · Unity / C# · 原型验证 · 跨团队协作 · Python 数据分析 · Figma</p></section>`, 'about');
const experiments=[
['贪吃蛇','游戏','方向键移动，空格暂停。早期 p5.js 游戏实现。','arts222/game/littlesnake/index.html','01'],
['粒子时钟','Canvas','按 N 查看时间；按 D 设置倒计时。','arts222/canvas-clock/index.html','02'],
['Moving Art','生成图形','运动、残影与颜色构成的几何图形实验。','artd299/movingArt/index.html','03'],
['Bouncing Balls','交互参数','调整小球的数量、大小与速度。','arts222/p5/bouncingBalls/index.html','04'],
['Mouse Firework','粒子','随鼠标生成、移动并淡出的粒子。','arts222/p5/mouseFirework/index.html','05'],
['图片拼图','交互原型','九宫格图片拾取与交换实验。','artd299/puzzle/index.html','06'],
['Shakespeare','文字','移动鼠标，拼接两段引文。','artd299/week3/index.html','07'],
['汉服海报','视觉设计','书写、服装结构与中英文排版。','artd218/website/works/hanfu.html','08'],
['Pet Rescue Alliance','网页设计','宠物领养主题的多页面课程网站。','artd218/project1/index.html','09'],
['It Was All Started by a Mouse','网页叙事','以链接和展开交互组织阅读路径。','arts222/project1/index.html','10'],
['蜜蜂与花园','交互玩具','鼠标跟随、添加花朵与成长机制。','artd299/movingMouse/index.html','11'],
['WordCloud','文字视觉','随机字符与鼠标视差实验。','artd299/wordCloud/index.html','12']
];

save('archive/index.html','实验归档','早期交互实验与课程作品。',`
<section class="wrap page-intro"><h1>实验归档</h1></section>
<section class="wrap">${titleList(experiments.map(([name,type,desc,url])=>[name,'../'+url]))}</section>
<section class="wrap compact-section"><h2>课程目录</h2>${titleList([['ARTD 218','../artd218/index.html'],['ARTS 222','../arts222/index.html'],['ARTD 299','../artd299/index.html']])}</section>`, 'archive');
save('404.html','页面未找到','返回作品集。',`<section class="wrap page-intro error-page"><h1>404</h1><a class="text-link" href="${site}projects/index.html">返回作品 ↗</a></section>`);
const paths=['index.html','projects/index.html',...projects.map(p=>`projects/${p.slug}.html`),'projects/pinball-rouge.html','research/index.html','research/spin.html','research/nova-study.html','research/sentiment-analysis.html','about.html','archive/index.html'];
writeFileSync('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${site+p}</loc></url>`).join('')}</urlset>`);
console.log(`Built ${paths.length+2} static pages + sitemap.`);

writeFileSync('assets/translations.js',translationsScript());
