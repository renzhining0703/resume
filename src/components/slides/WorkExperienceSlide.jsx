/**
 * 工作经历页幻灯片。
 * 垂直排列的经历卡片，每张包含公司/职位/时间/描述/技术标签。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import ExperienceCard from '../ui/ExperienceCard';
import { EXPERIENCES } from '../../data/experiences';

export default function WorkExperienceSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Experience</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>工作经历</SectionTitle>
        </AnimatedElement>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <AnimatedElement key={i} staggerIndex={2 + i} active={isVisible}>
              <ExperienceCard entry={exp} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
