/**
 * 幻灯片导航 hook。
 * 管理当前页索引，提供键盘/滚轮/触屏滑动导航，带 900ms 动画锁防止连跳。
 *
 * @param {number} totalSlides - 幻灯片总数
 * @returns {{
 *   currentSlide: number,
 *   goToSlide: (index: number) => void,
 *   nextSlide: () => void,
 *   prevSlide: () => void,
 *   setCurrentSlide: (index: number) => void,
 *   onObserverIntersect: (index: number) => void
 * }}
 */
import { useState, useCallback, useEffect, useRef } from 'react';

export function useSlideNavigation(totalSlides) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // 用 ref 保存最新索引，避免事件回调中的闭包过期问题
  const currentSlideRef = useRef(0);
  // 动画锁：翻页动画期间跳过新的导航请求
  const isAnimating = useRef(false);
  // 触屏起始 Y 坐标
  const touchStartY = useRef(0);

  /**
   * 跳转到指定页。
   * @param {number} index - 目标页索引 (0-based)
   */
  const goToSlide = useCallback((index) => {
    if (isAnimating.current) return;
    if (index < 0 || index >= totalSlides) return;

    isAnimating.current = true;
    currentSlideRef.current = index;
    setCurrentSlide(index);

    const el = document.querySelector(`[data-slide="${index}"]`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });

    // 900ms 后释放动画锁
    setTimeout(() => { isAnimating.current = false; }, 900);
  }, [totalSlides]);

  // 下一页
  const nextSlide = useCallback(() => {
    goToSlide(currentSlideRef.current + 1);
  }, [goToSlide]);

  // 上一页
  const prevSlide = useCallback(() => {
    goToSlide(currentSlideRef.current - 1);
  }, [goToSlide]);

  /**
   * 供 IntersectionObserver 使用的安全回调。
   * 与原始 setCurrentSlide 不同，此回调会：
   * 1. 在程序化翻页（isAnimating=true）期间跳过更新，避免覆盖正确的目标页
   * 2. 保持 currentSlideRef 与状态同步，防止导航 ref 失配导致跳页
   * @param {number} index - Observer 检测到的可见幻灯片索引
   */
  const onObserverIntersect = useCallback((index) => {
    // 动画锁激活时忽略 Observer 更新（程序化翻页进行中）
    if (isAnimating.current) return;
    currentSlideRef.current = index;
    setCurrentSlide(index);
  }, []);

  // 键盘导航：方向键翻页，Home/End 跳首尾
  useEffect(() => {
    const handler = (e) => {
      const actions = {
        ArrowDown:  nextSlide,
        ArrowRight: nextSlide,
        PageDown:   nextSlide,
        ArrowUp:    prevSlide,
        ArrowLeft:  prevSlide,
        PageUp:     prevSlide,
        Home:       () => goToSlide(0),
        End:        () => goToSlide(totalSlides - 1),
      };
      const action = actions[e.key];
      if (action) {
        e.preventDefault();
        action();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // 滚轮导航：deltaY > 30 触发翻页。
  // 使用“会话”机制——将连续的滚轮事件归为一组（手指/触控板一次操作），
  // 每组只触发一次翻页，避免触控板惯性滚动导致连跳。
  useEffect(() => {
    let sessionTimer = null;
    let sessionActive = false;

    const handler = (e) => {
      if (sessionActive) {
        // 滚动会话进行中，重置静默计时器
        clearTimeout(sessionTimer);
        sessionTimer = setTimeout(() => { sessionActive = false; }, 300);
        return;
      }

      // 新会话开始
      sessionActive = true;
      sessionTimer = setTimeout(() => { sessionActive = false; }, 300);

      if (e.deltaY > 30) nextSlide();
      else if (e.deltaY < -30) prevSlide();
    };
    window.addEventListener('wheel', handler, { passive: true });
    return () => {
      window.removeEventListener('wheel', handler);
      clearTimeout(sessionTimer);
    };
  }, [nextSlide, prevSlide]);

  // 触屏滑动导航：滑动距离 > 50px 触发翻页
  useEffect(() => {
    const handleStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const handleEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    };
    window.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('touchstart', handleStart);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [nextSlide, prevSlide]);

  return { currentSlide, goToSlide, nextSlide, prevSlide, setCurrentSlide, onObserverIntersect };
}