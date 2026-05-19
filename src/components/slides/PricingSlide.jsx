/**
 * 服务报价页幻灯片。
 * 3 列定价表（基础版/专业版/定制版），专业版高亮推荐，底部有说明文字。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import AnimatedElement from '../ui/AnimatedElement';
import PricingCard from '../ui/PricingCard';
import { PRICING_TIERS } from '../../data/pricing';

export default function PricingSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Investment</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-3 text-center">
            服务与报价
          </h2>
        </AnimatedElement>
        <AnimatedElement staggerIndex={2} active={isVisible}>
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto mb-14">
            透明定价，品质交付，为您的项目选择合适的方案
          </p>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, i) => (
            <AnimatedElement
              key={tier.name}
              type={tier.highlighted ? 'scale-in' : 'fade-in-up'}
              staggerIndex={3 + i}
              active={isVisible}
            >
              <PricingCard tier={tier} />
            </AnimatedElement>
          ))}
        </div>

        {/* CONTENT: 价格说明 */}
        <AnimatedElement staggerIndex={6} active={isVisible}>
          <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-10">
            以上为基础报价，具体价格根据项目复杂度与需求调整。欢迎联系详谈。
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
