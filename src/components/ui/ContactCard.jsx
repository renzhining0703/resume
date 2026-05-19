/**
 * 联系方式卡片组件。
 * 图标 + 标签 + 值，如果有 href 则渲染为可点击的外部链接。
 *
 * @param {Object} props
 * @param {Object} props.method - 联系方式数据
 * @param {string} props.method.icon - Font Awesome 图标 class
 * @param {string} props.method.label - 平台名称
 * @param {string} props.method.value - 账号/号码
 * @param {string} [props.method.href] - 外部链接（可选，有则渲染为 a 标签）
 */
export default function ContactCard({ method }) {
  const inner = (
    <div className="group p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300
                    flex flex-col items-center gap-2 cursor-pointer">
      <i className={`${method.icon} text-2xl text-slate-400 group-hover:text-white transition-colors`} />
      <span className="text-xs font-medium text-slate-300 group-hover:text-white">{method.label}</span>
      <span className="text-[10px] text-slate-500">{method.value}</span>
    </div>
  );

  // 如果有外部链接则渲染为 a 标签
  if (method.href) {
    return (
      <a href={method.href} target="_blank" rel="noopener noreferrer" className="no-underline">
        {inner}
      </a>
    );
  }

  return inner;
}
