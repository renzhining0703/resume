/**
 * 入场动画 hook。
 * 追踪幻灯片是否已触发过动画（只触发一次），提供交错延迟计算。
 *
 * @param {number} slideIndex - 幻灯片索引
 * @param {boolean} isVisible - 当前幻灯片是否可见
 * @returns {{
 *   hasAnimated: boolean,
 *   getStaggerDelay: (elementIndex: number) => number
 * }}
 */
import { useState, useEffect, useCallback } from 'react';

export function useAnimation(slideIndex, isVisible) {
  // 标记该幻灯片的动画是否已触发过（只播一次）
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  /**
   * 计算子元素的交错动画延迟。
   * 基础延迟 80ms，每个元素递增 120ms。
   * @param {number} elementIndex - 元素在幻灯片内的序号 (0-based)
   * @returns {number} 动画延迟毫秒数
   */
  const getStaggerDelay = useCallback((elementIndex) => {
    if (!hasAnimated) return 0;
    return 80 + elementIndex * 120;
  }, [hasAnimated]);

  return { hasAnimated, getStaggerDelay };
}
