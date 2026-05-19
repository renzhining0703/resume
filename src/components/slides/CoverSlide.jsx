/**
 * 封面页幻灯片。
 * 展示头像、姓名、职位标题、个人标语，底部有滚动提示箭头。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见，控制入场动画
 */
import AnimatedElement from '../ui/AnimatedElement';

export default function CoverSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center relative overflow-hidden
                        bg-gradient-to-br from-slate-50 via-cream-50 to-cream-100
                        dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      {/* 背景点阵纹理 */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, currentColor 1px, transparent 0)', backgroundSize: '44px 44px' }}
      />
      {/* 右上角装饰线 */}
      <div className="absolute top-16 right-16 w-24 h-px bg-accent-300/40 dark:bg-accent-600/40 hidden md:block" />
      <div className="absolute top-16 right-16 w-px h-24 bg-accent-300/40 dark:bg-accent-600/40 hidden md:block" />

      <div className="text-center z-10 px-6 max-w-3xl">
        {/* CONTENT: 头像图片 */}
        <AnimatedElement type="scale-in" staggerIndex={0} active={isVisible}>
          <div className="mx-auto mb-10 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden
                          ring-2 ring-accent-300/40 ring-offset-4 ring-offset-transparent shadow-2xl">
            <img src="/images/avatar.png" alt="Rzn" className="w-full h-full object-cover" />
          </div>
        </AnimatedElement>

        {/* CONTENT: 姓名 */}
        <AnimatedElement type="fade-in-up" staggerIndex={1} active={isVisible}>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-800 dark:text-white tracking-tight mb-4">
            Rzn
          </h1>
        </AnimatedElement>

        {/* CONTENT: 职位 */}
        <AnimatedElement type="fade-in-up" staggerIndex={2} active={isVisible}>
          <p className="text-lg md:text-2xl text-accent-500 dark:text-accent-400 font-body font-light tracking-[0.15em] mb-10">
            Full-Stack Developer &amp; Designer
          </p>
        </AnimatedElement>

        {/* CONTENT: 标语 */}
        <AnimatedElement type="fade-in-up" staggerIndex={3} active={isVisible}>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed font-light">
            构建优雅的数字体验，以简洁代码与精心设计驱动每一个项目
          </p>
        </AnimatedElement>

        {/* 装饰分隔线 */}
        <AnimatedElement type="fade-in" staggerIndex={4} active={isVisible}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
            <span className="w-1 h-1 rounded-full bg-accent-400" />
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
          </div>
        </AnimatedElement>
      </div>

      {/* 底部滚动提示 */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <i className="fa-solid fa-chevron-down text-xs" />
      </div>
    </section>
  );
}
