/**
 * 幻灯片滚动容器。
 * 使用 CSS scroll-snap 实现全屏吸附滑动，每个子元素为一页幻灯片。
 *
 * @param {Object} props
 * @param {React.ReactNode[]} props.children - 幻灯片组件数组
 * @param {(el: HTMLElement, index: number) => void} props.onRegisterSlide - 注册幻灯片 DOM 的回调
 */
export default function SlideContainer({ children, onRegisterSlide }) {
  return (
    <div className="slide-snap-container h-screen h-dvh">
      {children.map((child, i) => (
        <div
          key={i}
          ref={(el) => onRegisterSlide && onRegisterSlide(el, i)}
          data-slide={i}
          className="slide-snap-item"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
