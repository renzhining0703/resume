/**
 * 幻灯片页码指示器。
 * 固定在右下角，显示 "01 / 09" 格式的当前页/总页数。
 *
 * @param {Object} props
 * @param {number} props.currentSlide - 当前页索引 (0-based)
 * @param {number} props.totalSlides - 幻灯片总数
 */
export default function SlideIndicator({ currentSlide, totalSlides }) {
  return (
    <div id="slide-indicator"
      className="no-print fixed right-5 bottom-8 z-50 text-xs font-mono
                 text-slate-400 dark:text-slate-500 hidden md:block">
      <span>{String(currentSlide + 1).padStart(2, '0')}</span>
      <span className="text-slate-300 dark:text-slate-700 mx-0.5">/</span>
      <span>{String(totalSlides).padStart(2, '0')}</span>
    </div>
  );
}
