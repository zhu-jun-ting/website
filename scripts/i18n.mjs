// English is emitted into the HTML; Chinese remains available without a network request.
const entries = {
  'Steam 商店':'View on Steam', 'GitHub 源码':'Source on GitHub',
  '2023 — 至今':'2023 — Present', '游戏策划 / 程序开发':'Game Design / Programming',
  'Pinball Rouge 游戏截图':'Pinball Rouge screenshots',
  '弹射战斗':'Ricochet combat', '卡牌构筑':'Card builds', '对局结算':'Run results',
  '弹球射击与卡牌构筑，已在 Steam 发布。':'Pinball shooting and card builds, available on Steam.',
  '一款结合弹球射击与卡牌构筑的俯视角肉鸽游戏。利用弹射子弹清理敌人，在房间探索与战斗中选择卡牌、组合能力，形成自己的战斗方式。':'A top-down roguelite combining pinball shooting with card builds. Clear enemies with ricocheting projectiles, explore rooms, and combine cards and abilities to shape your playstyle.',
  '项目始于 2023 年的团队原型 Orange Dawn，之后由我持续独立开发，并于 2025 年以 Pinball Rouge 在 Steam 发布。我的工作涵盖玩法与系统设计、Unity 程序开发，以及原型迭代。':'The project began as Orange Dawn, a team prototype in 2023. I continued its development independently and released it on Steam as Pinball Rouge in 2025. My work spans gameplay and systems design, Unity programming, and prototype iteration.',
  '从团队原型 Orange Dawn 延续为独立开发的弹球肉鸽游戏，负责玩法、系统与 Unity 开发，2025 年在 Steam 发布。':'Continued the Orange Dawn team prototype as an independently developed pinball roguelite, handling gameplay, systems, and Unity development. Released on Steam in 2025.',
  '作品集':'Portfolio', '作品':'Work', '科研':'Research', '关于':'About', '实验归档':'Archive',
  '跳至正文':'Skip to content', 'Junting Zhu 首页':'Junting Zhu home', '朱钧霆':'Junting Zhu',
  '主导航':'Main navigation', '菜单':'Menu', '查看全部作品':'View all work', '回到顶部':'Back to top',
  '作品图片预览':'Project image preview', '关闭图片预览':'Close image preview', '关闭':'Close',
  '更多作品':'More work', '全部作品':'All work', '作品集 PDF':'Portfolio PDF', '项目索引':'Project index',
  '筛选作品':'Filter projects', '全部':'All', '游戏':'Games', '设计':'Design', '搜索作品':'Search projects',
  '没有匹配的项目。':'No matching projects.', '其他研究':'Other research', '课程目录':'Coursework',
  '在线试玩':'Play online', '演示视频':'Demo video', '开发记录':'Development blog',
  '获取 Windows 游戏':'Download for Windows', 'Game Off 页面':'Game Off entry', '制作记录':'Production blog',
  '策划记录':'Design blog', '补充原型文档':'Prototype document', '完整策划博客':'Design documentation',
  '海报 PDF':'Poster PDF', '报告 PDF':'Report PDF', 'SPIN 研究海报':'SPIN research poster',
  'SPIN 海报与报告':'SPIN poster and report', '工作经历':'Experience', '项目重点':'Selected projects',
  '教育与研究':'Education & research', '技能':'Skills', '游戏系统策划 / Game Designer':'Game Systems Designer',
  '北京优乐科技有限公司':'Beijing Youle Technology', '北京陶乐科技有限公司':'Beijing Taole Technology',
  '游戏策划':'Game Designer', '游戏数据分析':'Game Data Analyst', '灵犀互娱':'Lingxi Games',
  '独立开发':'Independent development', '独立设计与开发':'Independent design & development',
  '游戏技术策划 / 程序组长':'Technical Game Designer / Programming Lead',
  '游戏策划 / 技术美术':'Game Design / Technical Art',
  '伊利诺伊大学厄巴纳—香槟分校':'University of Illinois Urbana-Champaign',
  '信息科学与平面设计双专业 · 计算机科学辅修':'Double major in Information Sciences and Graphic Design · Minor in Computer Science',
  'GPA 3.78。参与 NCSA SPIN 的 OCR 研究及 Nova Study 基因数据分析。':'GPA 3.78. Participated in OCR research through NCSA SPIN and gene data analysis through Nova Study.',
  '系统与玩法设计 · Unity / C# · 原型验证 · 跨团队协作 · Python 数据分析 · Figma':'Systems & gameplay design · Unity / C# · Prototyping & playtesting · Cross-functional collaboration · Python data analysis · Figma',
  '负责游戏原型搭建与系统方案设计，协同程序、美术等上下游团队推进功能落地；通过玩法验证与迭代，探索游戏方向与核心体验。':'Build game prototypes and design gameplay systems, working with programming, art, and other teams to bring features into the game. Explore game directions and core experiences through playtesting and iteration.',
  '参与社交游戏的角色、职业与玩法设计，结合运营反馈和玩家意见持续迭代体验。':'Designed characters, classes, and gameplay for social games, iterating on the experience using feedback from players and the operations team.',
  '使用 Unity 设计并实现角色技能与表现，协同文案、3D 美术及动效团队完善角色动作和游戏体验。':'Designed and implemented character abilities and their presentation in Unity, collaborating with narrative, 3D art, and animation teams to refine character actions and the gameplay experience.',
  '跟进项目公开测试，分析玩家行为与游戏体验问题，为策划迭代和产品方向提供依据。':'Supported public playtests and analyzed player behavior and gameplay issues to inform design iterations and product direction.',
  '弹球与肉鸽机制结合，探索弹射战斗与不同能力构筑。':'Combined pinball and roguelike mechanics to explore ricochet combat and varied ability builds.',
  '参与五人团队的 Unity 项目，负责核心玩法实现、程序协调，以及程序化内容与升级系统。':'Worked on a five-person Unity project, implementing core gameplay, coordinating programming, and developing procedural content and upgrade systems.',
  '将汉字构字关系转化为游戏机制，根据玩家测试迭代设计并完成 Demo。':'Turned the structure of Chinese characters into game mechanics, iterating through playtests and completing a playable demo.',
  '参与 Game Off 团队项目，协调叙事与美术资源整合，完成 4 条任务线与 7 个场景。':'Contributed to a Game Off team project, coordinating narrative and art integration across four questlines and seven scenes.',
  '将弹球机制与肉鸽成长结合，通过子弹在敌人之间的弹射，以及不同的能力构筑，为每一局带来变化。':'Combines pinball mechanics with roguelike progression. Projectiles ricochet between enemies, while different ability builds create variety across runs.',
  '参与五人团队的 Unity 2D roguelike 项目，负责玩法技术实现、数值策划与程序协作，搭建核心玩法框架，实现程序化敌人与地图，以及约 20 种角色升级与武器内容。':'Worked on a five-person Unity 2D roguelike, handling gameplay implementation, balance design, and programming coordination. Built the core gameplay framework, procedural enemies and maps, and around 20 character upgrades and weapons.',
  '在 Charles Blatti 教授指导下，使用 Python 处理基因数据，参与数据预处理、比较分析与可视化，为机器学习分析准备数据。':'Worked with Professor Charles Blatti on gene data processing in Python, contributing to preprocessing, comparative analysis, and visualization to prepare data for machine learning.',
  '面向社交媒体文本的情感分析，参与数据清洗、TensorFlow / Keras 模型训练与输出评估。':'A sentiment analysis project for social media text, involving data cleaning, model training with TensorFlow / Keras, and evaluation of the results.',
  '2020 — 2021 · 课程项目':'2020 — 2021 · Course project',
  '2022.01 — 2022.09 · NCSA / 研究助理':'2022.01 — 2022.09 · NCSA / Research Assistant',
  '2023 · 游戏技术策划 / 程序组长':'2023 · Technical Game Designer / Programming Lead',
  '2025.06 — 至今 · 独立开发':'2025.06 — Present · Independent development',
  '2025.06 — 至今':'2025.06 — Present', '2025.09 — 至今':'2025.09 — Present',
  '贪吃蛇':'Snake', '粒子时钟':'Particle Clock', '图片拼图':'Image Puzzle', '汉服海报':'Hanfu Poster', '蜜蜂与花园':'Bee & Garden',
  '页面未找到':'Page not found', '返回作品':'Back to work',
  '朱钧霆作品集':'Junting Zhu — Portfolio',
  '朱钧霆的游戏、设计与科研作品。':'Games, design, and research by Junting Zhu.',
  '游戏与交互设计作品。':'Game and interaction design projects.',
  '弹球肉鸽独立游戏项目。':'An independent pinball roguelike game.',
  '团队 Unity 2D roguelike 游戏项目。':'A team-developed 2D roguelike in Unity.',
  'NCSA SPIN、Nova Study 与数据分析项目。':'NCSA SPIN, Nova Study, and data analysis projects.',
  'NCSA SPIN 研究海报与完整报告。':'The NCSA SPIN research poster and full report.',
  'NCSA 基因数据研究实践。':'Gene data research at NCSA.',
  '社交媒体文本情感分析课程项目。':'A course project on sentiment analysis of social media text.',
  '朱钧霆，游戏系统策划。游戏原型、玩法设计与跨团队协作。':'Junting Zhu, Game Systems Designer. Game prototyping, gameplay design, and cross-functional collaboration.',
  '早期交互实验与课程作品。':'Early interactive experiments and coursework.', '返回作品集。':'Return to the portfolio.',
  '把汉字的构字关系转化为弹射与碰撞，让中文初学者通过尝试、组合和反馈认识新的字。':'A game that turns Chinese character composition into flicks and collisions, helping beginners discover characters through experimentation, combinations, and feedback.',
  '围绕四位 NPC 的情绪与冲突展开的 2D 叙事冒险，将场景、对话和战斗体验连接起来。':'A 2D narrative adventure connecting environments, dialogue, and combat through the emotions and conflicts of four NPCs.',
  '围绕 “End where you started” 设计的盗窃解谜游戏：在有限时间内获得价值，同时让收藏室看起来一切如初。':'A heist puzzle game built around “End where you started”: steal valuable objects within a time limit while making the collection room look untouched.',
  '结合共享滑板车、动态配送车辆与移动应用，为校园最后一公里提出更连贯的服务体验。':'A campus last-mile service concept combining shared scooters, dynamic delivery vehicles, and a mobile app.',
  '将开放世界探索、卡牌构筑、实时战斗与角色成长连接为一个完整的 MMORPG 设计提案。':'An MMORPG design proposal combining open-world exploration, deck building, real-time combat, and character progression.'
};
const zhOverrides={'HIGHLIGHT':'精选作品','About Me':'关于我','About Me · Junting Zhu':'关于我 · Junting Zhu','SPIN Poster':'SPIN 海报','SPIN Report':'SPIN 报告'};
const catalog={};
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function english(source){
  if(entries[source])return entries[source];
  let m;
  if((m=source.match(/^(.+) · Junting Zhu$/)))return `${english(m[1])} · Junting Zhu`;
  if((m=source.match(/^← (.+)$/)))return `← ${english(m[1])}`;
  if((m=source.match(/^(.+) ([↗↑×])$/)))return `${english(m[1])} ${m[2]}`;
  if((m=source.match(/^查看 (.+) 项目$/)))return `View ${m[1]} project`;
  if((m=source.match(/^(.+) 完整作品集$/)))return `${m[1]} full portfolio`;
  if((m=source.match(/^放大：(.+) 第 (\d+) 页$/)))return `Enlarge: ${m[1]}, page ${m[2]}`;
  if((m=source.match(/^(.+)，第 (\d+) 页，共 (\d+) 页$/)))return `${m[1]}, page ${m[2]} of ${m[3]}`;
  if((m=source.match(/^显示 (\d+) 个精选项目$/)))return `${m[1]} featured projects`;
  if(/[\p{Script=Han}]/u.test(source))throw new Error(`Missing English translation: ${source}`);
  return source;
}
function entry(source){
  if(source==='中文')return null; // Autonym on the English page's language switch.
  if(!/[\p{Script=Han}]/u.test(source)&&!zhOverrides[source])return null;
  const en=english(source),zh=zhOverrides[source]||source;
  catalog[source]={en,zh};return {key:escape(source),en:escape(en)};
}
export function localize(html){
  html=html.replace('<html lang="zh-CN">','<html lang="en">');
  html=html.replace(/<title>([^<]+)<\/title>/,(_,text)=>{
    const e=entry(text);return e?`<title data-i18n="${e.key}">${e.en}</title>`:`<title>${text}</title>`;
  });
  return html.replace(/(<[^>]+>)|([^<]+)/g,(token,tag,text)=>{
    if(tag)return tag.replace(/\b(aria-label|alt|placeholder|content)="([^"]+)"/g,(_,attr,value)=>{
      const e=entry(value);return e?`${attr}="${e.en}" data-i18n-${attr}="${e.key}"`:`${attr}="${value}"`;
    });
    const value=text.trim(),e=entry(value);
    return e?text.replace(value,`<span data-i18n="${e.key}">${e.en}</span>`):text;
  });
}
export function translationsScript(){return `window.PORTFOLIO_I18N=${JSON.stringify(catalog).replaceAll('<','\\u003c')};\n`;}
