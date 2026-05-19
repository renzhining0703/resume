/**
 * 个人优势卡片组件。
 * 居中布局：图标 + 标题 + 描述，hover 上浮。
 *
 * @param {Object} props
 * @param {Object} props.item - 优势数据
 * @param {string} props.item.icon - Font Awesome 图标 class
 * @param {string} props.item.title - 优势标题
 * @param {string} props.item.description - 优势描述
 */
export default function StrengthCard({ item }) {
  return (
    <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-5 md:p-6
                    border border-slate-200 dark:border-slate-700/50 text-center
                    hover:-translate-y-1 transition-all duration-300 shadow-sm">
      <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-accent-50 dark:bg-accent-900/30 flex items-center justify-center">
        <i className={`${item.icon} text-accent-500 dark:text-accent-400`} />
      </div>
      <h4 className="font-display text-sm font-semibold text-slate-800 dark:text-white mb-1">
        {item.title}
      </h4>
      <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
    </div>
  );
}
