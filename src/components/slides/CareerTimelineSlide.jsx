/**
 * 职业履历页幻灯片。
 * 垂直时间线布局，桌面端交替左右排列，移动端单列。
 *
 * @param {Object} props
 * @param {boolean} props.isVisible - 当前幻灯片是否可见
 */
import SectionLabel from '../ui/SectionLabel';
import SectionTitle from '../ui/SectionTitle';
import AnimatedElement from '../ui/AnimatedElement';
import TimelineItem from '../ui/TimelineItem';
import { TIMELINE_ENTRIES } from '../../data/timeline';

export default function CareerTimelineSlide({ isVisible }) {
  return (
    <section className="slide min-h-screen min-h-dvh flex items-center justify-center bg-cream-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 w-full">
        <AnimatedElement staggerIndex={0} active={isVisible}>
          <SectionLabel>Journey</SectionLabel>
        </AnimatedElement>
        <AnimatedElement staggerIndex={1} active={isVisible}>
          <SectionTitle>职业履历</SectionTitle>
        </AnimatedElement>

        <div className="relative">
          {/* 时间线中轴线 */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700 md:-translate-x-px" />

          <div className="space-y-12">
            {TIMELINE_ENTRIES.map((entry, i) => (
              <AnimatedElement key={i} staggerIndex={2 + i} active={isVisible}>
                <TimelineItem entry={entry} index={i} />
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
