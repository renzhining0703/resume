/**
 * 工作经历卡片组件。
 * 展示职位、公司、时间段、描述和技术标签，hover 时边框高亮。
 *
 * @param {Object} props
 * @param {Object} props.entry - 经历数据
 * @param {string} props.entry.title - 职位名称
 * @param {string} props.entry.company - 公司/组织
 * @param {string} props.entry.period - 时间段
 * @param {boolean} [props.entry.dotActive] - 状态圆点是否高亮
 * @param {string} props.entry.description - 工作描述
 * @param {string[]} [props.entry.tags] - 技术标签数组
 */
export default function ExperienceCard({ entry }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-6 md:p-8
                    border border-slate-100 dark:border-slate-800/50
                    hover:border-accent-200 dark:hover:border-accent-800/50
                    transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className={`w-2 h-2 rounded-full ${entry.dotActive !== false ? 'bg-accent-500' : 'bg-slate-400'}`} />
            <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-white">
              {entry.title}
            </h3>
          </div>
          <p className="text-sm text-accent-500 dark:text-accent-400">{entry.company}</p>
        </div>
        <span className="text-xs text-slate-400 dark:text-slate-500 md:self-start md:mt-1.5">
          {entry.period}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {entry.description}
      </p>
      {entry.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white dark:bg-slate-800
                                         text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
