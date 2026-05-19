/**
 * 应用根组件。
 * 组装主题 Provider、固定 UI（导航点/主题按钮/页码指示器）和幻灯片容器。
 * 通过 hooks 串联主题切换、幻灯片导航、视口检测三大系统。
 */
import { useMemo } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { useSlideNavigation } from './hooks/useSlideNavigation';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

import ThemeToggle from './components/layout/ThemeToggle';
import NavigationDots from './components/layout/NavigationDots';
import NavigationDotsMobile from './components/layout/NavigationDotsMobile';
import SlideIndicator from './components/layout/SlideIndicator';
import SlideContainer from './components/layout/SlideContainer';

import CoverSlide from './components/slides/CoverSlide';
import PersonalInfoSlide from './components/slides/PersonalInfoSlide';
import CareerTimelineSlide from './components/slides/CareerTimelineSlide';
import TechSkillsSlide from './components/slides/TechSkillsSlide';
import ProjectCasesSlide from './components/slides/ProjectCasesSlide';
import WorkExperienceSlide from './components/slides/WorkExperienceSlide';
import AdvantagesSlide from './components/slides/AdvantagesSlide';
import PricingSlide from './components/slides/PricingSlide';
import ContactSlide from './components/slides/ContactSlide';

import './index.css';

// 幻灯片组件列表，按演示顺序排列
const SLIDES = [
  CoverSlide,
  PersonalInfoSlide,
  CareerTimelineSlide,
  TechSkillsSlide,
  ProjectCasesSlide,
  WorkExperienceSlide,
  AdvantagesSlide,
  PricingSlide,
  ContactSlide,
];

export default function App() {
  const TOTAL = SLIDES.length;
  const { isDark, toggleTheme } = useTheme();
  const { currentSlide, goToSlide, onObserverIntersect } = useSlideNavigation(TOTAL);

  // IntersectionObserver 检测实际可见幻灯片并同步状态
  const { registerSlide } = useIntersectionObserver({
    threshold: 0.5,
    onIntersect: onObserverIntersect,
  });

  // 缓存 context value 避免无关重渲染
  const themeValue = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeToggle />
      <NavigationDots totalSlides={TOTAL} currentSlide={currentSlide} onDotClick={goToSlide} />
      <NavigationDotsMobile totalSlides={TOTAL} currentSlide={currentSlide} onDotClick={goToSlide} />
      <SlideIndicator currentSlide={currentSlide} totalSlides={TOTAL} />

      <SlideContainer onRegisterSlide={registerSlide}>
        {SLIDES.map((SlideComponent, i) => (
          <SlideComponent key={i} isVisible={currentSlide === i} />
        ))}
      </SlideContainer>
    </ThemeContext.Provider>
  );
}
