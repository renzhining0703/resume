/**
 * 技术技能页幻灯片。
 * 2x2 技能分类卡片网格，每张卡片根据类型渲染进度条或标签。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见，用于触发技能条动画
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import SkillBar from '../ui/SkillBar';
import SkillTag from '../ui/SkillTag';
import { SKILL_CATEGORIES } from '../../data/skills';

export default function TechSkillsSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Expertise</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>技术技能</SectionTitle>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <AnimatedElement key={cat.title} staggerIndex={2 + i} active={isVisible}>
              <div className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-6 md:p-8
                              border border-slate-100 dark:border-slate-800/50">
                <h3 className="font-display text-base font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center">
                    <i className={`${cat.icon} text-accent-600 dark:text-accent-400 text-sm`} />
                  </span>
                  {cat.title}
                </h3>
                {/* 根据分类类型渲染不同内容：进度条 或 标签 */}
                <div className={cat.type === 'bars' ? 'space-y-4' : 'flex flex-wrap gap-2'}>
                  {cat.type === 'bars'
                    ? cat.items.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} animate={isVisible} />
                      ))
                    : cat.items.map((tag) => (
                        <SkillTag key={tag} label={tag} />
                      ))
                  }
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
