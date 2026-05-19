/**
 * 时间线条目组件。
 * 桌面端偶奇行交替左右布局，移动端统一左侧排列，中间圆点标记激活状态。
 *
 * @param {Object} props
 * @param {Object} props.entry - 时间线数据
 * @param {string} props.entry.title - 标题
 * @param {string} props.entry.subtitle - 副标题
 * @param {string} props.entry.period - 时间段
 * @param {string} props.entry.description - 描述文字
 * @param {boolean} [props.entry.dotActive] - 圆点是否高亮
 * @param {number} props.index - 条目序号，控制左右交替
 */
export default function TimelineItem({ entry, index }) {
  // 偶数索引放左侧，奇数放右侧
  const isLeft = index % 2 === 0;

  return (
    <div className="relative pl-10 md:pl-0">
      <div className={`md:flex md:items-start md:gap-10 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
        <div className="md:w-1/2">
          <h3 className={`font-display text-lg font-semibold text-slate-800 dark:text-white ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
            {entry.title}
          </h3>
          <p className={`text-sm text-accent-500 dark:text-accent-400 ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
            {entry.subtitle}
          </p>
          <p className={`text-xs text-slate-400 dark:text-slate-500 mt-1 ${isLeft ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
            {entry.period}
          </p>
        </div>

        {/* 时间线圆点 */}
        <div className={`absolute left-3 md:left-1/2 w-2.5 h-2.5 rounded-full
                        -translate-x-[5px] mt-1.5 ring-4 ring-cream-50 dark:ring-slate-950 z-10
                        ${entry.dotActive !== false ? 'bg-accent-500' : 'bg-slate-300 dark:bg-slate-600'}`}
        />

        <div className={`md:w-1/2 mt-2 md:mt-0 ${isLeft ? 'md:pl-10' : 'md:text-right md:pr-10'}`}>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {entry.description}
          </p>
        </div>
      </div>
    </div>
  );
}
