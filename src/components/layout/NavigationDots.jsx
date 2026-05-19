/**
 * 桌面端导航圆点。
 * 固定在右侧垂直排列，当前页圆点高亮放大。
 *
 * @param {Object} props
 * @param {number} props.totalSlides - 幻灯片总数
 * @param {number} props.currentSlide - 当前页索引
 * @param {(index: number) => void} props.onDotClick - 点击圆点回调
 */
export default function NavigationDots({ totalSlides, currentSlide, onDotClick }) {
  return (
    <nav id="slide-nav"
      className="no-print fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 hidden md:flex">
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`nav-dot w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150
            ${i === currentSlide
              ? 'active bg-accent-500 scale-[1.6] shadow-[0_0_0_4px_rgba(59,106,158,0.2)] dark:bg-accent-400 dark:shadow-[0_0_0_4px_rgba(95,135,179,0.25)]'
              : 'bg-slate-300 dark:bg-slate-600'
            }`}
          aria-label={`跳转到第 ${i + 1} 页`}
        />
      ))}
    </nav>
  );
}
