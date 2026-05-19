/**
 * 技能标签 Pill 组件。
 * 用于工具/设计等分类以标签形式展示技能。
 *
 * @param {Object} props
 * @param {string} props.label - 标签文字
 */
export default function SkillTag({ label }) {
  return (
    <span className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg text-xs
                     text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      {label}
    </span>
  );
}
