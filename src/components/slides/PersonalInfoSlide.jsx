/**
 * 个人信息页幻灯片。
 * 左侧个人简介文字 + 右侧信息卡片网格（教育/位置/角色/经验）。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import { PERSONAL_INFO } from '../../data/personalInfo';

export default function PersonalInfoSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>About</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>个人信息</SectionTitle>
        </AnimatedElement>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* 左侧：个人简介 */}
          <div className="md:col-span-3 space-y-5">
            {PERSONAL_INFO.bio.map((text, i) => (
              <AnimatedElement key={i} staggerIndex={2 + i} active={isVisible}>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </AnimatedElement>
            ))}
            {/* CONTENT: 引用语 */}
            <AnimatedElement staggerIndex={4} active={isVisible}>
              <blockquote className="border-l-2 border-accent-300 dark:border-accent-600 pl-5 italic text-slate-500 dark:text-slate-400 mt-6">
                {PERSONAL_INFO.quote}
              </blockquote>
            </AnimatedElement>
          </div>

          {/* 右侧：信息卡片 */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {PERSONAL_INFO.infoCards.map((card, i) => (
              <AnimatedElement key={card.label} type="slide-in-right" staggerIndex={i} active={isVisible}>
                <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                  <i className={`${card.icon} text-accent-500 dark:text-accent-400 text-lg mb-2`} />
                  <p className="text-[10px] tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">{card.label}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-white">{card.value}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
