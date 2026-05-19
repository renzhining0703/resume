/**
 * 主题切换按钮。
 * 固定在右上角，深色模式显示太阳图标，浅色模式显示月亮图标。
 * 从 ThemeContext 读取状态并触发切换。
 */
import { useThemeContext } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      className="no-print fixed top-5 right-5 z-50 w-10 h-10 rounded-full
                 bg-white/85 dark:bg-slate-800/85 backdrop-blur-md
                 border border-slate-200 dark:border-slate-700
                 shadow-sm hover:shadow-md
                 flex items-center justify-center
                 text-slate-500 dark:text-slate-300
                 hover:text-accent-500 dark:hover:text-accent-400
                 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <i className="fa-solid fa-sun text-sm" />
      ) : (
        <i className="fa-solid fa-moon text-sm" />
      )}
    </button>
  );
}
