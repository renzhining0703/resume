# Rzn — Personal Portfolio

高端商务 PPT 风格个人简介网页，React 18 + Tailwind CSS 组件化构建。

## 项目结构

```
resume/
├── index.html                 # Vite 入口 HTML
├── package.json               # 依赖与脚本
├── vite.config.js             # Vite 构建配置
├── tailwind.config.js         # Tailwind 自定义主题（颜色/字体/动画）
├── postcss.config.js          # PostCSS 插件配置
├── .gitignore                 # Git 忽略规则
│
├── public/
│   └── images/                # 静态图片资源（头像/项目截图/二维码等）
│
├── src/
│   ├── main.jsx               # React 应用入口
│   ├── App.jsx                # 根组件：Provider + 固定 UI + 幻灯片容器
│   ├── index.css              # Tailwind 指令 + 全局样式 + 打印样式
│   │
│   ├── context/
│   │   └── ThemeContext.jsx    # 深色/浅色主题 Context
│   │
│   ├── hooks/
│   │   ├── useTheme.js               # 主题管理（localStorage + 系统偏好）
│   │   ├── useSlideNavigation.js     # 幻灯片导航（键盘/滚轮/触屏）
│   │   ├── useIntersectionObserver.js # 视口交叉检测（200ms 防抖）
│   │   └── useAnimation.js           # 入场动画状态（交错延迟）
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── ThemeToggle.jsx         # 主题切换按钮（右上角固定）
│   │   │   ├── NavigationDots.jsx      # 桌面端导航圆点（右侧固定）
│   │   │   ├── NavigationDotsMobile.jsx # 移动端导航圆点（底部固定）
│   │   │   ├── SlideIndicator.jsx      # 页码指示器（右下角）
│   │   │   └── SlideContainer.jsx      # scroll-snap 滚动容器
│   │   │
│   │   ├── slides/               # 9 个幻灯片页面组件
│   │   │   ├── CoverSlide.jsx          # 1. 封面主页
│   │   │   ├── PersonalInfoSlide.jsx   # 2. 个人信息
│   │   │   ├── CareerTimelineSlide.jsx  # 3. 职业履历
│   │   │   ├── TechSkillsSlide.jsx     # 4. 技术技能
│   │   │   ├── ProjectCasesSlide.jsx   # 5. 项目案例
│   │   │   ├── WorkExperienceSlide.jsx  # 6. 工作经历
│   │   │   ├── AdvantagesSlide.jsx     # 7. 个人优势
│   │   │   ├── PricingSlide.jsx        # 8. 服务报价
│   │   │   └── ContactSlide.jsx        # 9. 联系方式
│   │   │
│   │   └── ui/                   # 11 个复用 UI 组件
│   │       ├── SectionLabel.jsx       # 段落英文标签
│   │       ├── SectionTitle.jsx       # 段落主标题
│   │       ├── AnimatedElement.jsx    # 入场动画包装器
│   │       ├── SkillBar.jsx          # 技能进度条
│   │       ├── SkillTag.jsx          # 技能标签 Pill
│   │       ├── TimelineItem.jsx      # 时间线条目
│   │       ├── ProjectCard.jsx       # 项目案例卡片
│   │       ├── ExperienceCard.jsx     # 工作经历卡片
│   │       ├── StrengthCard.jsx      # 个人优势卡片
│   │       ├── PricingCard.jsx       # 定价方案卡片
│   │       └── ContactCard.jsx       # 联系方式卡片
│   │
│   └── data/                    # 8 个数据文件（内容与组件分离）
│       ├── personalInfo.js      # 个人信息 / 简介 / 引用
│       ├── timeline.js          # 职业履历时间线
│       ├── skills.js            # 技能分类与掌握度
│       ├── projects.js          # 项目案例列表
│       ├── experiences.js       # 工作经历条目
│       ├── strengths.js         # 个人优势 + 兴趣爱好
│       ├── pricing.js           # 定价方案配置
│       └── contact.js           # 联系方式与二维码
│
└── images/                      # [已废弃] 旧图片目录，已迁移至 public/images/
```

## Features

- 9 页 PPT 幻灯片布局，scroll-snap 全屏吸附滑动
- 深浅双主题切换，localStorage 记忆偏好，自动跟随系统
- 完美适配 PC + 移动端横竖屏，响应式断点全覆盖
- 键盘方向键 / 滚轮 / 触屏滑动 / 导航圆点 四种导航方式
- 入场交错动画（fadeInUp / scaleIn / slideInRight），只播一次
- 技能进度条动画、卡片 hover 微动效
- 清晰规整的三列定价展示区（基础版 / 专业版高亮 / 定制版）
- 支持打印（@media print 隐藏交互 UI，每页分页）

## Tech Stack

- **React 18** — UI 框架（组件化 + Hooks）
- **Vite 5** — 构建工具
- **Tailwind CSS 3** — PostCSS 插件构建
- **Font Awesome 6** — 图标库
- **Google Fonts** — Inter + Noto Serif SC

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 内容自定义

所有幻灯片内容从 `src/data/` 目录下的 8 个数据文件读取，与组件完全分离。修改个人信息、技能、项目、定价等只需编辑对应数据文件即可，无需改动组件代码。

## Credits

Built by Rzn. Based on original template by [Orangii|橙梓](https://github.com/Jiaocz).
