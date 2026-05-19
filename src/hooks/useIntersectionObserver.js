/**
 * 视口交叉观察 hook。
 * 使用 IntersectionObserver 检测哪个幻灯片当前可见（超过阈值比例），
 * 200ms 防抖避免平滑滚动过程中间幻灯片误触发。
 *
 * @param {Object} options
 * @param {number} options.threshold - 可见比例阈值 (0~1)，默认 0.5
 * @param {(index: number) => void} options.onIntersect - 幻灯片可见时的回调
 * @returns {{ registerSlide: (el: HTMLElement, index: number) => void }}
 */
import { useEffect, useRef, useCallback } from 'react';

export function useIntersectionObserver({ threshold = 0.5, onIntersect }) {
  // 存储所有幻灯片 DOM 引用
  const slideRefs = useRef([]);
  // 防抖定时器
  const pendingRef = useRef(null);

  /**
   * 注册幻灯片 ref 回调，由 SlideContainer 在渲染时调用。
   * @param {HTMLElement} el - 幻灯片 wrapper DOM 元素
   * @param {number} index - 幻灯片索引
   */
  const registerSlide = useCallback((el, index) => {
    if (el) slideRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          const index = parseInt(entry.target.getAttribute('data-slide'), 10);
          if (!isNaN(index) && onIntersect) {
            // 200ms 防抖：只在幻灯片稳定可见后才更新状态
            if (pendingRef.current) clearTimeout(pendingRef.current);
            pendingRef.current = setTimeout(() => {
              onIntersect(index);
              pendingRef.current = null;
            }, 200);
          }
        }
      });
    }, { threshold });

    slideRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (pendingRef.current) clearTimeout(pendingRef.current);
    };
  }, [threshold, onIntersect]);

  return { registerSlide };
}
