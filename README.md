# Junting Zhu · Personal Portfolio

个人作品集、科研与早期交互实验归档。

线上入口：https://zhu-jun-ting.github.io/Personal-Website-Local-Files/

## 页面入口

| 路径 | 内容 |
| --- | --- |
| `index.html` | 一个 Flicker Highlight，后接图片和项目名平铺 |
| `projects/index.html` | 五个核心项目、筛选搜索、更多实践和 PDF 合集 |
| `projects/*.html` | 有 PDF 的作品按完整页序展示；其他项目只保留简短介绍 |
| `research/index.html` | 科研索引 |
| `research/spin.html` | NCSA SPIN / Reading Time Machine 研究与海报 |
| `about.html` | 当前游戏系统策划职位、工作经历、项目重点与教育技能 |
| `archive/index.html` | 12 个早期作品入口和原始课程目录 |
| `artd218/`、`arts222/`、`artd299/` | 保留的原始课程作品 |

## 本地预览与维护

需要 Node.js，无 npm 依赖。

```sh
npm run build
npm run check
npm run dev
```

打开 http://127.0.0.1:4173/Personal-Website-Local-Files/ 。

- `scripts/content.mjs`：核心作品、更多项目的内容与外链。
- `scripts/i18n.mjs`：中英文翻译与构建时覆盖检查。新增页面文案后补充英文翻译；构建会提示缺失项。
- `assets/translations.js`：构建生成的双语词典，不手工修改。
- `scripts/build.mjs`：页面模板、科研、关于与归档内容。修改后重新 build；生成的 HTML 也需提交。
- `assets/site.css` / `assets/site.js`：样式、移动导航、搜索筛选和图片预览。
- `assets/documents/`：公开作品集和科研 PDF 原件。
- `assets/images/`：从原作品集提取的 WebP 图像。
- `scripts/prepare-assets.py`：用 PyMuPDF 与 Pillow 重建图片，仅更新原始 PDF 时需要运行。
- `docs/portfolio-inventory.md`：作品优先级、依据和资料范围。

## 发布

GitHub Pages 使用 `main` 分支的根目录。将生成页面与资源提交并推送到 `main`，GitHub 自动发布；`.nojekyll` 保留静态站点行为。

发布前运行 `npm run build` 与 `npm run check`，并在浏览器检查桌面和手机布局。发布后确认 GitHub Pages 构建完成，再访问线上页面检查。

`.source/` 是本地材料处理目录，已忽略，不会提交。About Me 根据用户最新提供的简历截图和当前工作补充更新；未提供公开邮箱，联系方式继续留空。

## 双语

主站 16 个页面默认输出英文 HTML，导航中的 `中文 / EN` 按钮原地切换语言，并同步页面标题、元信息、图片说明和搜索状态。语言选择通过 localStorage 记忆；`?lang=en` 或 `?lang=zh` 可用于分享指定语言，优先于本地偏好。浏览器限制本地存储时，站内链接仍通过参数保留语言。

原始 PDF、作品图片及课程实验文件保留原貌；切换语言不修改这些原始作品或外部网站。
