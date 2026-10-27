// Portfolio copy is grounded in the supplied 2022–2023 PDFs.
// Status describes the archived deliverable, not current employment or development.
export const projects = [
  {
    slug:'flicker', number:'01', title:'Flicker', subtitle:'让汉字，在碰撞中被理解。',
    category:'game', categoryLabel:'独立游戏 · 教育交互', year:'2022–2023', status:'Unity 原型 / 可在线体验',
    summary:'把汉字的构字关系转化为弹射与碰撞，让中文初学者通过尝试、组合和反馈认识新的字。',
    role:'独立策划、原型开发、视觉设计、玩家测试', tools:'Unity / C# / Figma / 实体原型',
    team:'个人项目；导师 Stacey Robinson、Emilie Butt',
    contribution:'从学习动机与构字法研究出发，独立完成玩法设计、木质字块测试、反馈整理和 Unity Demo。',
    actions:[['在线试玩','https://zhujunting.itch.io/flicker'],['演示视频','https://www.youtube.com/watch?v=vKIi5qoauSE'],['开发记录','https://flicker-game.blogspot.com/']],
    sections:[
      {kicker:'01 / QUESTION',title:'记忆之外，能否让学习成为一次发现？',text:'项目从重复记忆容易削弱学习动力的问题出发，把汉字由简单形体构成复杂字的过程，转化为可操作的游戏规则。玩家拖动、瞄准、弹射字块，通过碰撞尝试新的组合。',image:3,caption:'构字法研究与字块组合机制，原作品集第 3 页。'},
      {kicker:'02 / PLAYTEST',title:'先在桌面上，验证一个动作。',text:'早期测试用激光切割的木质字块和桌面模拟场地。玩家反馈集中在瞄准困难、基础字块数量、难度和提示时机。设计据此提出轨迹预览、卡住时再出现的提示，以及更多组合与奖励的方向。',image:5,caption:'实体原型、测试反馈与迭代方向，原作品集第 5 页。'},
      {kicker:'03 / PROTOTYPE',title:'从纸面规则，走到可以操作的原型。',text:'Unity 实现将字块、场地、效果层和 UI 分开组织。字块保存文字与组合信息，碰撞后显示新字、解释和得分；对象池管理具有物理效果的残影。现有成果是演示原型，文档中的扩展玩法并非全部实现。',image:6,caption:'书写风格视觉、Unity 场景组织与逻辑结构，原作品集第 6 页。'}
    ],note:'时间按项目首页与简历归档为 2022–2023；原文末页存在年份不一致。',
    credit:'项目设计与原型：Junting (David) Zhu。原始文档中的研究与参考来源予以保留。'
  },
  {
    slug:'emotional-damage',number:'02',title:'Emotional Damage',subtitle:'把情绪变成一场可以经历的冒险。',
    category:'game',categoryLabel:'叙事游戏 · 技术美术',year:'2022',status:'Game Off 2022 / Windows 作品',
    summary:'围绕四位 NPC 的情绪与冲突展开的 2D 叙事冒险，将场景、对话和战斗体验连接起来。',
    role:'场景与 UI 素材、叙事流程、引擎素材整合',tools:'Unity / Ink / 2D Art',
    team:'Game Off 2022 跨职能团队项目',
    contribution:'负责连接美术、故事和程序团队，参与 2D 场景素材制作、流程策划以及文字和美术资产的 Unity 整合。',
    actions:[['获取 Windows 游戏','https://rod233.itch.io/emotio'],['Game Off 页面','https://itch.io/jam/game-off-2022/rate/1816770'],['制作记录','https://emotional-damage.blogspot.com/']],
    sections:[
      {kicker:'01 / EXPERIENCE',title:'从角色动机，组织场景与冲突。',text:'项目以 “If looks could kill” 为概念起点。玩家穿梭于住所、办公室、诊所和餐厅等场所，接触不同人物，并逐渐理解情绪与自身的关系。角色冲突与场景通路共同构成体验骨架。',image:4,caption:'人物关系、地点与玩家路径，原作品集第 4 页。'},
      {kicker:'02 / ART PIPELINE',title:'让线稿、色彩和场景服务同一种体验。',text:'场景从参考与线稿开始，经过平涂，再补充材质、明暗和空间细节。参与制作的素材需要同时满足叙事语境、玩家辨识与引擎集成的要求。',image:5,caption:'厨房、街道与办公室的素材制作过程；团队成果，原作品集第 5 页。'},
      {kicker:'03 / INTEGRATION',title:'把分支故事带进游戏引擎。',text:'项目使用 Ink 组织分支与选择，以标签和元数据标记说话者等信息，再由 Unity 解析并驱动表现。对话既可由玩家主动交互触发，也可由进入区域触发。我的工作重点是让故事流程、场景和素材在引擎中衔接。',image:6,caption:'叙事结构与 Ink 整合说明，原作品集第 6 页。'}
    ],note:'发布页提供 Windows 下载；页面保留 Game Jam 版本的已知问题说明。',
    credit:'团队成员包括 PassbyKamenRider、Rod、BUBUFF、Hachi、Luna Wang、Bucket Fish、SnBerry、Jessica、Ryui、Carrot_Yu、David Zhu、Joy、Xinyu Wu、Shinya。完整署名见原作品集与游戏发布页。'
  },
  {
    slug:'alibi',number:'03',title:'Alibi',subtitle:'拿走艺术品，把现场留在原点。',
    category:'game',categoryLabel:'Game Jam · 玩法与任务设计',year:'2022',status:'Unity Newbies Jam / 可在线体验',
    summary:'围绕 “End where you started” 设计的盗窃解谜游戏：在有限时间内获得价值，同时让收藏室看起来一切如初。',
    role:'玩法策划、任务链设计、生产文档',tools:'Unity / Figma / Plastic SCM',
    team:'Junting Zhu、Yufeng Liu、Runze Wang、Ziqiu Lin (Viki)、Yu Xia',
    contribution:'参与概念发散、交互与奖励设计，梳理任务所需步骤、道具依赖和玩家收益，并制作策划与生产文档。',
    actions:[['在线试玩','https://lyf1436.itch.io/alibi'],['演示视频','https://www.youtube.com/watch?v=p0yVpWvXGI4'],['策划记录','https://group-alibi-game-design-production.blogspot.com/']],
    sections:[
      {kicker:'01 / CONCEPT',title:'把一句主题，变成明确的玩家目标。',text:'团队从循环、镜像、莫比乌斯环等方向发散，最终选择收藏室里的盗窃与伪装。玩家需要拿走有价值的展品，又通过替换与组合维持现场外观，让主题直接参与规则。',image:2,caption:'概念发散与空间草图，原作品集第 2 页。'},
      {kicker:'02 / SYSTEMS',title:'每条任务线，都有成本与收益。',text:'设计文档将场景物件、可收集物件、默认工具与终极目标区分标记，并计算完成路径所需的交互步骤。通过任务依赖和奖励关系，帮助团队比较不同解法的投入与回报。',image:3,caption:'任务链、道具依赖与奖励结构；文档标注本人为主要贡献者，原作品集第 3 页。'},
      {kicker:'03 / DELIVERY',title:'在 Game Jam 的时间里，做出可玩的范围。',text:'作品使用 Unity 开发，结合艺术品重组与幽默描述形成独特语气。最终版本提供网页试玩；个人贡献以设计和生产为主，程序、美术和数值由团队协作完成。',image:4,caption:'资产与引擎实现，原作品集第 4 页。'}
    ],note:'项目日期为 2022 年 10 月 14–21 日；原 PDF 内个别年份笔误不作为项目日期。',
    credit:'发布页署名：程序 Yufeng Liu；美术 Ziqiu Lin；设计 Junting Zhu、Yu Xia；数值 Runze Wang。'
  },
  {
    slug:'dymo',number:'04',title:'Dymo',subtitle:'从找一辆车，重新思考一段出行。',
    category:'design',categoryLabel:'服务设计 · 用户研究',year:'2022',status:'校园出行系统提案',
    summary:'结合共享滑板车、动态配送车辆与移动应用，为校园最后一公里提出更连贯的服务体验。',
    role:'算法可行性分析、整体用户体验设计',tools:'用户访谈 / 问卷 / 文献研究 / 低保真原型',
    team:'Junting (David) Zhu、Zezhi (Jimmy) Guo、Yuhe (Ruby) Cui',
    contribution:'参与团队的校园出行研究，重点评估调度算法的实现方向，并设计找车、配送、解锁、骑行与反馈的整体用户流程。',
    actions:[['补充原型文档','../assets/documents/dymo-prototypes.pdf']],
    sections:[
      {kicker:'01 / RESEARCH',title:'先理解出行里的不确定性。',text:'团队收集 110 份问卷，并与 10 位校园居民进行半结构化访谈。研究关注车辆分布、可用性、价格、安全和天气等问题；这些是本项目样本的发现，不是对所有校园用户的普遍结论。',image:2,caption:'用户调研与问卷结果（n=110；访谈 n=10），原作品集第 2 页。'},
      {kicker:'02 / SYNTHESIS',title:'连接用户、运营方与城市环境。',text:'市场比较、利益相关者地图与人物画像帮助团队界定服务对象。随后整理 28 篇相关文献，把产品设计、骑行行为、算法与管理机制放进同一张研究图谱。',image:3,caption:'市场研究、利益相关者与用户画像，原作品集第 3 页。'},
      {kicker:'03 / PROPOSAL',title:'把车辆与应用，放进同一个服务流程。',text:'方案提出共享滑板车、承担回收与配送的电动厢车，以及找车与呼叫配送的手机应用。本人着重评估算法与体验流程。自动配送、无线充电等属于设计提案，现有材料不能证明已部署或实现。',image:5,caption:'车辆概念与手机端低保真流程，原作品集第 5 页。'}
    ],note:'按所提供的作品集呈现为研究与设计提案；论文发表状态未在本次材料中独立核实。',
    credit:'团队设计：Junting Zhu、Zezhi Guo、Yuhe Cui。调研、概念图和原型为团队成果。'
  },
  {
    slug:'luna',number:'05',title:'Luna',subtitle:'让世界观，长出可以游玩的规则。',
    category:'game',categoryLabel:'系统策划 · 游戏设计文档',year:'2020–2021',status:'团队游戏提案 / 非成品游戏',
    summary:'将开放世界探索、卡牌构筑、实时战斗与角色成长连接为一个完整的 MMORPG 设计提案。',
    role:'玩法构思、玩家体验结构、战斗与物品系统规格',tools:'体验设计 / 功能规格 / 系统文档',
    team:'David Zhu、Zezhi Guo、Dmitry Shuklin',
    contribution:'参与玩法与玩家体验结构的构思，整理战斗、物品和部分功能规格，并考虑这些系统的实现方式。',
    actions:[['完整策划博客','https://group-luna-game-design.blogspot.com/']],
    sections:[
      {kicker:'01 / PLAYER EXPERIENCE',title:'先定义体验，再拆解系统。',text:'提案将探索的沉浸感、收集与构筑的策略性、合作战斗的挑战感分开描述，再映射到任务、卡牌、角色、装备与多人玩法等功能。体验目标帮助团队理解每个系统为何存在。',image:2,caption:'核心玩法与体验目标；参考图及 AI 生成素材的来源见原文，原作品集第 2 页。'},
      {kicker:'02 / WORLD BUILDING',title:'让叙事为卡牌与冒险提供语境。',text:'世界观围绕古代城邦、祭祀与封印生物的塔罗石板展开，连接历史事件、角色旅程和探索动机。它为卡牌系统与冒险任务提供共同的叙事背景。',image:3,caption:'故事时间线与灵感来源，原作品集第 3 页。'},
      {kicker:'03 / SPECIFICATION',title:'把大概念写成可讨论的功能规格。',text:'文档进一步拆解战斗、UI、构筑、角色、地图、在线玩法、装备和声音等系统。项目产出是协作策划文档与功能提案，适合展示系统思考与规格表达能力。',image:4,caption:'功能系统与设计规格，原作品集第 4 页。'}
    ],note:'这是游戏提案。页面中的概念与参考视觉不代表已经实现的游戏画面。',
    credit:'团队策划：David Zhu、Zezhi Guo、Dmitry Shuklin。原文部分图像标注 Stable Diffusion，并包含其他游戏的参考素材。'
  }
];

// Orange Dawn is the earlier name of this continuing project, confirmed by its creator.
export const featuredProject = {
  slug:'pinball-rouge', title:'Pinball Rouge', category:'game',
  categoryLabel:'弹球肉鸽 · Pinball roguelite', role:'游戏策划 / 程序开发 · Game design / Programming',
  cover:'pinball-rouge-cover.jpg'
};
export const additional = [
  {title:'Project Gutenberg',type:'UI / UX',year:'2021',text:'围绕捐赠流程重设计，完成前期调研、用户访谈、线框图和 Figma 高保真原型。',url:'https://www.behance.net/gallery/132578569/Project-Gutenberg-Donation-Flow-Redesigned'},
  {title:'MUX AIR 1',type:'交互设计',year:'2020',text:'以手势控制音乐播放器的概念项目，包含产品手册、原型、用户测试和 Wizard of Oz 演示。',url:'https://www.behance.net/gallery/110849369/MUX-AIR-I'},
  {title:'Museum of the Grand Prairie',type:'实体体验',year:'2022',text:'面向儿童的班级密室逃脱项目，负责第三幕管理、叙事一致性和制作可行性评估。',url:'https://david-escape-room.blogspot.com/'},
  {title:'Guinea Pig Booklet',type:'编辑设计',year:'2020',text:'围绕豚鼠特征、习性和环境设计的 20 页小册子，包含信息研究、整体编排与封面。',url:'https://www.behance.net/gallery/110453075/Guinea-Pig-Booklet-Layout-Design'},
  {title:'Atelier Alter',type:'网页设计实习',year:'2019',text:'参与公司网站的视觉与交互设计，使用 Adobe 工具辅助制作宣传材料。',url:'https://www.behance.net/gallery/84889633/AA-Website-Design-Templates-%28Video%29'}
];
