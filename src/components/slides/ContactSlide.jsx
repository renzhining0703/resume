/**
 * 联系方式尾页幻灯片。
 * 3 个联系卡片（GitHub/QQ/微信）+ 微信二维码 + 页脚版权。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import AnimatedElement from '../ui/AnimatedElement';
import ContactCard from '../ui/ContactCard';
import { CONTACT_METHODS, QR_CODE } from '../../data/contact';

export default function ContactSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 w-full text-center">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <span className="text-[11px] tracking-[0.25em] uppercase text-accent-400 mb-3 block">Contact</span>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">合作联系</h2>
        </AnimatedElement>
        <AnimatedElement staggerIndex={2} active={isVisible}>
          <p className="text-slate-400 max-w-lg mx-auto mb-14 text-sm">
            有项目想法？欢迎交流沟通，让我们一起打造出色的产品
          </p>
        </AnimatedElement>

        {/* 联系卡片 */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-14 max-w-lg mx-auto">
          {CONTACT_METHODS.map((method, i) => (
            <AnimatedElement key={method.label} staggerIndex={3 + i} active={isVisible}>
              <ContactCard method={method} />
            </AnimatedElement>
          ))}
        </div>

        {/* CONTENT: 微信二维码 */}
        <AnimatedElement type="scale-in" staggerIndex={6} active={isVisible}>
          <div className="inline-block p-3 bg-white rounded-2xl shadow-lg">
            <img src={QR_CODE} alt="微信二维码"
              className="w-36 h-36 md:w-40 md:h-40 object-contain rounded-lg" loading="lazy"
            />
          </div>
        </AnimatedElement>

        {/* 页脚 */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-600">&copy; 2026 Rzn. Built with care.</p>
          <p className="text-[10px] text-slate-700 mt-2">
            Designed for personal branding. All content placeholders are customizable.
          </p>
        </div>
      </div>
    </section>
  );
}
