export const SKILL_CATEGORIES = [
  {
    title: '前端开发',
    icon: 'fa-solid fa-laptop-code',
    type: 'bars',
    items: [
      { name: 'HTML5 / CSS3 / Tailwind CSS', percentage: 90 },
      { name: 'JavaScript / TypeScript',     percentage: 85 },
      { name: 'Vue.js / React',              percentage: 80 },
    ],
  },
  {
    title: '后端与工具',
    icon: 'fa-solid fa-server',
    type: 'bars',
    items: [
      { name: 'Node.js',    percentage: 75 },
      { name: 'Python',     percentage: 70 },
      { name: 'Git / CI/CD', percentage: 75 },
    ],
  },
  {
    title: '工具与平台',
    icon: 'fa-solid fa-screwdriver-wrench',
    type: 'tags',
    items: ['Git', 'VS Code', 'Figma', 'Docker', 'Vercel', 'GitHub Actions', 'Notion', 'Terminal'],
  },
  {
    title: '设计与创意',
    icon: 'fa-solid fa-palette',
    type: 'tags',
    items: ['UI/UX 设计', '摄影', '页面设计', '图片制作', '品牌设计', '响应式布局'],
  },
];
