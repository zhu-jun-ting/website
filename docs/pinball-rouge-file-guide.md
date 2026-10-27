# Pinball Rouge 项目文件导航

整理日期：2026-10-27。正式展示名为 **Pinball Rouge**；Orange Dawn 是早期项目名，用户已确认是同一项目的延续。源码仓库保留原名。

- [Steam 发布页](https://store.steampowered.com/app/3978300/)：开发者与发行者 David Zhu，发布日期 2025-11-16。
- [源码仓库](https://github.com/zhu-jun-ting/Orange-dawn)
- 本次检查的源码版本：`c2ace6f7f6a86f18c4e3f63f9e65b3a2c8feda11`，共 12,537 个树条目，无截断。
- 依据：仓库目录、下列关键源码及配置、Steam 官方商店资料、用户确认的项目历史。未运行 Unity 或验证游戏构建。

## 打开项目

Unity 版本以 `ProjectSettings/ProjectVersion.txt` 为准，本次为 **6000.1.6f1**。在 Unity Hub 中打开仓库根目录。

`ProjectSettings/EditorBuildSettings.asset` 启用的场景顺序：

1. `Assets/Scenes/MainMenu.unity`：菜单入口。
2. `Assets/Scenes/TestMap.unity`：测试地图场景。
3. `Assets/Scenes/Main.unity`：主场景。

场景顺序来自配置，具体游玩流程需在 Unity 中核验。`Assets/Scripts/UIScripts/MainMenu.cs` 处理开始游戏、难度入口及中英文 locale 选择。

## 按功能查找

以下路径均相对于游戏仓库，按玩法阅读顺序整理；目录说明依据命名和抽样源码，不代表每个脚本都已逐行审查。

| 模块 | 目录 / 入口 | 查找内容 |
| --- | --- | --- |
| 玩家 | `Assets/Scripts/PlayerScript/PlayerController.cs` | 玩家控制与相关状态界面 |
| 枪械与子弹 | `Assets/Scripts/Weapon/Gun.cs`、`AutoGun.cs`、`Bullet/GunBullet.cs` | 枪械、自动射击、碰撞与反弹；GunBullet 包含反弹标签、层和冷却判断 |
| 对象池 | `Assets/Scripts/Weapon/ObjectPool.cs` | 子弹等对象的复用入口 |
| 卡牌数据 | `Assets/Scripts/Cards/CardDatabase.cs` | ScriptableObject 卡牌条目，按 ID、类型、稀有度查询与随机抽取 |
| 卡牌交互 | `Assets/Scripts/Cards/` 下的 `CardManager.cs`、`CardDragHandler.cs`、`BoardArea.cs`、`HandArea.cs` | 卡牌管理、拖放、桌面与手牌区域 |
| 卡牌效果 | `Assets/Scripts/Cards/CardTypes/` | Action、Instant、Relic、ValueCards 等卡牌类型 |
| 战斗与敌人 | `Assets/Scripts/EnemyLogics/CombatManager.cs`、`EnemyMaster.cs` | 战斗管理与敌人逻辑入口 |
| 状态效果 | `Assets/Scripts/BuffSystem/`、`Assets/Scripts/Combats/` | Buff 与燃烧、中毒、减速、眩晕等效果相关实现 |
| 房间与流程 | `Assets/Scripts/Managers/FloorManager.cs`、`RoomGrid.cs`、`RoomShop.cs` | 房间连接、切换、商店；FloorManager 包含战斗、Boss、商店、事件等房间选择 |
| 地图生成 | `Assets/Scripts/LevelScripts/` | ChunkGenerator、ChunkManager、Noise、LevelDatabase 等生成与配置入口 |
| 掉落与物品 | `Assets/Scripts/Item/` | 可破坏物与金币、经验、生命、法力等拾取物 |
| 全局协作 | `Assets/Scripts/Managers/GameEvents.cs`、`GameSettings.cs`、`SoundManager.cs` | 事件、设置与音频管理 |
| 界面 | `Assets/Scripts/UIScripts/`、`Assets/Scripts/UI/` | 菜单、暂停、难度、统计、设置与调试界面；两个目录均有设置相关脚本，修改前确认场景引用 |
| 数据与资源 | `Assets/Data/`、`Assets/Prefabs/`、`Assets/ART/` | 数据资产、预制体、美术资源 |
| 工程配置 | `Packages/`、`ProjectSettings/` | 包依赖、Unity 和构建配置 |

仓库含第三方资源和示例目录，不将所有资源都标记为个人原创。若今后重排 Unity 资源，请在编辑器内操作并保留 `.meta` / GUID 引用。

## 文档与网站对应

源码仓库的 `README.md` 仍使用 Orange Dawn / GSD 405；`Docs/Orange Dawn/` 中的 Schedule.md 为空，现有文档不足以说明全部玩法。本文件补充导航索引，本次没有迁移或改写游戏源码。

| 网站文件 | 内容 |
| --- | --- |
| `scripts/content.mjs` | Pinball Rouge 作为优先展示项目 |
| `scripts/build.mjs` | 首页 Highlight、项目简介、Steam / GitHub 入口、About 项目合并 |
| `scripts/i18n.mjs` | 对应中英文文本 |
| `projects/pinball-rouge.html` | 正式项目页 |
| `projects/orange-dawn.html` | 保留旧入口，显示同一内容，canonical 指向正式页 |
| `assets/images/pinball-rouge-cover.jpg` | Steam 官方商店横幅 |
| `assets/images/pinball-rouge-1.jpg` | Steam 截图：对局结算 |
| `assets/images/pinball-rouge-2.jpg` | Steam 截图：弹射战斗；首页主视觉 |
| `assets/images/pinball-rouge-3.jpg` | Steam 截图：卡牌构筑 |

图片保留商店原图。商店截图里的调试控件和文字属于原始游戏画面，网站语言切换不改写图片。没有把商店描述中的未来内容计划或数量上限写成已实现成果。
