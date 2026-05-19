/**
 * 项目案例页幻灯片。
 * 3 列项目卡片网格，每张卡片含图片、标签、标题、描述，hover 上浮效果。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import ProjectCard from '../ui/ProjectCard';
import { PROJECTS } from '../../data/projects';

export default function ProjectCasesSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-cream-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Portfolio</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>项目案例</SectionTitle>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((proj, i) => (
            <AnimatedElement key={proj.title} staggerIndex={2 + i} active={isVisible}>
              <ProjectCard project={proj} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
