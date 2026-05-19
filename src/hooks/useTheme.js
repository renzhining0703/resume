/**
 * 主题管理 hook。
 * - 从 localStorage 或系统偏好读取初始主题
 * - 切换时同步 <html> 的 dark class 并持久化
 * - 监听操作系统主题变化
 *
 * @returns {{ isDark: boolean, toggleTheme: () => void }}
 */
import { useState, useEffect, useCallback } from 'react';

export function useTheme() {
  // 初始化：优先读取 localStorage，其次跟随系统偏好，默认浅色
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 主题变化时同步到 <html> class 和 localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // 监听操作系统主题变化（仅在用户未手动设置时自动跟随）
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // 切换主题
  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), []);

  return { isDark, toggleTheme };
}
