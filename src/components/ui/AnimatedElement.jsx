/**
 * 入场动画包装组件。
 * 当父幻灯片可见时，以交错延迟触发 CSS 入场动画（只播一次）。
 *
 * @param {Object} props
 * @param {'fade-in-up'|'fade-in'|'slide-in-right'|'scale-in'} props.type - 动画类型
 * @param {number} props.staggerIndex - 元素序号，用于计算交错延迟 (0-based)
 * @param {boolean} props.active - 父幻灯片是否可见
 * @param {string} [props.className] - 额外 CSS 类名
 * @param {React.ReactNode} props.children - 子元素
 */
import { useState, useEffect } from 'react';

export default function AnimatedElement({ type = 'fade-in-up', staggerIndex = 0, active, className = '', children }) {
  const [hasTriggered, setHasTriggered] = useState(false);

  // 仅在 active 首次变为 true 时触发动画，之后不再重复
  useEffect(() => {
    if (active && !hasTriggered) setHasTriggered(true);
  }, [active, hasTriggered]);

  // 交错延迟：基础 80ms + 每个元素递增 120ms
  const delay = hasTriggered ? 80 + staggerIndex * 120 : 0;

  return (
    <div
      data-animate={type}
      className={`${className} ${hasTriggered ? `animate-${type} animated` : 'opacity-0'}`}
      style={hasTriggered ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
