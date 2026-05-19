/**
 * 段落标签组件。
 * 显示在幻灯片标题上方的小号全大写英文标签（如 "About", "Journey"）。
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - 标签文本
 */
export default function SectionLabel({ children }) {
  return (
    <span className="text-[11px] tracking-[0.25em] uppercase text-accent-500 dark:text-accent-400 mb-3 block">
      {children}
    </span>
  );
}
