/**
 * 主题 Context，向整个组件树提供当前主题状态和切换方法。
 * 通过 useThemeContext() 在任意子组件中读取。
 */
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

/**
 * 获取主题 Context 的 hook。
 * @returns {{ isDark: boolean, toggleTheme: () => void }}
 */
export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext 必须在 ThemeContext.Provider 内部使用');
  return ctx;
}
