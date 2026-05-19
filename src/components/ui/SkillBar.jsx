/**
 * 技能进度条组件。
 * 显示技能名称 + 百分比 + 动画填充条。
 *
 * @param {Object} props
 * @param {string} props.name - 技能名称
 * @param {number} props.percentage - 掌握百分比 (0~100)
 * @param {boolean} props.animate - 是否触发宽度动画
 */
export default function SkillBar({ name, percentage, animate }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-600 dark:text-slate-300">{name}</span>
        <span className="text-slate-400 dark:text-slate-500 text-xs">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-500 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: animate ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}
