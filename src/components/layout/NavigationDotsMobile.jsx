/**
 * 移动端导航圆点。
 * 固定在底部居中，毛玻璃背景横排显示，仅在 md 以下断点可见。
 *
 * @param {Object} props
 * @param {number} props.totalSlides - 幻灯片总数
 * @param {number} props.currentSlide - 当前页索引
 * @param {(index: number) => void} props.onDotClick - 点击圆点回调
 */
export default function NavigationDotsMobile({ totalSlides, currentSlide, onDotClick }) {
  return (
    <nav id="slide-nav-mobile"
      className="no-print fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2
                 md:hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-md
                 rounded-full px-4 py-2 shadow-lg border border-slate-200 dark:border-slate-700">
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300
            ${i === currentSlide
              ? 'bg-accent-500 scale-125'
              : 'bg-slate-300 dark:bg-slate-600'
            }`}
          aria-label={`跳转到第 ${i + 1} 页`}
        />
      ))}
    </nav>
  );
}
