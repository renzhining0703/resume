/**
 * 定价卡片组件。
 * 根据 tier.highlighted 自动切换普通样式和热门推荐高亮样式。
 *
 * @param {Object} props
 * @param {Object} props.tier - 定价方案数据
 * @param {string} props.tier.plan - 方案英文名
 * @param {string} props.tier.name - 方案中文名
 * @param {string} props.tier.description - 适用场景描述
 * @param {string} props.tier.price - 价格（含货币符号）
 * @param {string} [props.tier.unit] - 价格单位后缀
 * @param {string} [props.tier.badge] - 高亮方案的角标文字
 * @param {boolean} [props.tier.highlighted] - 是否为推荐方案
 * @param {Array<{text: string, included: boolean}>} props.tier.features - 功能列表
 * @param {string} props.tier.buttonText - 按钮文字
 */
export default function PricingCard({ tier }) {
  // 热门推荐高亮样式
  if (tier.highlighted) {
    return (
      <div className="relative bg-accent-500 rounded-2xl p-7 md:p-8 shadow-xl z-10
                      scale-[1.03] ring-4 ring-accent-100 dark:ring-accent-900/50">
        {tier.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2
                           bg-slate-900 dark:bg-white text-white dark:text-slate-900
                           text-[10px] font-semibold px-4 py-1 rounded-full tracking-wider">
            {tier.badge}
          </span>
        )}
        <p className="text-xs tracking-[0.15em] uppercase text-white/60 mb-3">{tier.plan}</p>
        <h3 className="font-display text-xl font-semibold text-white mb-1">{tier.name}</h3>
        <p className="text-xs text-white/70 mb-6">{tier.description}</p>
        <div className="mb-7">
          <span className="font-display text-4xl font-bold text-white">{tier.price}</span>
          <span className="text-sm text-white/60 ml-1">{tier.unit}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {tier.features.map((f) => (
            <li key={f.text} className="flex items-start gap-3 text-sm text-white/90">
              <i className={`fa-solid ${f.included ? 'fa-check text-green-300' : 'fa-minus text-white/30'} mt-0.5 text-xs`} />
              {f.text}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 rounded-xl bg-white text-accent-500
                           hover:bg-slate-100 transition-all duration-300
                           font-semibold text-sm shadow-md">
          {tier.buttonText}
        </button>
      </div>
    );
  }

  // 普通样式
  return (
    <div className="relative bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-7 md:p-8
                    border border-slate-200 dark:border-slate-700/50
                    hover:border-accent-200 dark:hover:border-accent-700/50
                    transition-all duration-300">
      <p className="text-xs tracking-[0.15em] uppercase text-slate-400 dark:text-slate-500 mb-3">{tier.plan}</p>
      <h3 className="font-display text-xl font-semibold text-slate-800 dark:text-white mb-1">{tier.name}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">{tier.description}</p>
      <div className="mb-7">
        <span className="font-display text-4xl font-bold text-slate-800 dark:text-white">{tier.price}</span>
        <span className="text-sm text-slate-400 dark:text-slate-500 ml-1">{tier.unit}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {tier.features.map((f) => (
          <li key={f.text} className={`flex items-start gap-3 text-sm ${f.included ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500 line-through'}`}>
            <i className={`fa-solid ${f.included ? 'fa-check text-accent-500' : 'fa-minus'} mt-0.5 text-xs`} />
            {f.text}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 rounded-xl border-2 border-slate-300 dark:border-slate-600
                         text-slate-700 dark:text-slate-300
                         hover:border-accent-500 hover:text-accent-500 dark:hover:text-accent-400
                         transition-all duration-300 font-medium text-sm">
        {tier.buttonText}
      </button>
    </div>
  );
}
