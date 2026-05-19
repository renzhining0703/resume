/**
 * 段落标题组件。
 * 幻灯片的主标题 H2，使用衬线字体大号加粗。
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 标题文本
 */
export default function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-14">
      {children}
    </h2>
  );
}
