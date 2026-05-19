/**
 * 项目案例卡片组件。
 * 展示项目缩略图、分类标签、标题和描述，hover 时图片放大 + 卡片上浮。
 *
 * @param {Object} props
 * @param {Object} props.project - 项目数据
 * @param {string} props.project.image - 项目图片路径
 * @param {string} props.project.tag - 分类标签文字
 * @param {string} props.project.title - 项目标题
 * @param {string} props.project.description - 项目描述
 */
export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-slate-800/30 rounded-2xl overflow-hidden
                    border border-slate-200 dark:border-slate-700/50 shadow-sm
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-[400ms]">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-2">
          {project.tag}
        </span>
        <h3 className="font-display text-base font-semibold text-slate-800 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
