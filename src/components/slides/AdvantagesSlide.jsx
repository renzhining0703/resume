/**
 * 个人优势页幻灯片。
 * 上方 4 列优势卡片网格（设计/摄影/技术/沟通），下方兴趣爱好展示。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import StrengthCard from '../ui/StrengthCard';
import { STRENGTHS, HOBBIES } from '../../data/strengths';

export default function AdvantagesSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-cream-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Strengths</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>个人优势</SectionTitle>
        </AnimatedElement>

        {/* 优势卡片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {STRENGTHS.map((item, i) => (
            <AnimatedElement key={item.title} staggerIndex={2 + i} active={isVisible}>
              <StrengthCard item={item} />
            </AnimatedElement>
          ))}
        </div>

        {/* 兴趣爱好 */}
        <AnimatedElement staggerIndex={6} active={isVisible}>
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-semibold text-slate-800 dark:text-white mb-4">兴趣爱好</h3>
            {/* CONTENT: 爱好描述 */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {HOBBIES.text}
            </p>
            <div className="flex flex-wrap gap-2">
              {HOBBIES.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-xs
                                          text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
