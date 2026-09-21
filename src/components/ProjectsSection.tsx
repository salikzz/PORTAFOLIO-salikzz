import { useState, useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { projects } from '@/data/projects';
import type { Project, Category } from '@/data/projects';
import { useReveal } from '@/hooks/useReveal';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const { t } = useLang();
  const [filter, setFilter] = useState<'all' | Category>('all');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filters: ('all' | Category)[] = ['all', 'design', 'audiovisual', '3d', 'freelance'];

  const brandProjects = useMemo(() => projects.filter((p) => p.type === 'brand'), []);
  const audiovisualProjects = useMemo(() => projects.filter((p) => p.type === 'audiovisual'), []);
  const freelanceProjects = useMemo(() => projects.filter((p) => p.type === 'freelance'), []);

  const filteredBrand = useMemo(() => {
    if (filter === 'all' || filter === 'freelance') return brandProjects;
    return brandProjects.filter((p) => p.category === filter);
  }, [filter, brandProjects]);

  const filteredAudiovisual = useMemo(() => {
    if (filter === 'all' || filter === 'freelance') return audiovisualProjects;
    return audiovisualProjects.filter((p) => p.category === filter);
  }, [filter, audiovisualProjects]);

  const filteredFreelance = useMemo(() => {
    if (filter === 'all' || filter === 'design' || filter === 'audiovisual' || filter === '3d') return freelanceProjects;
    if (filter === 'freelance') return freelanceProjects;
    return [];
  }, [filter, freelanceProjects]);

  return (
    <section id="projects" className="relative z-0 w-full px-6 py-32 lg:px-10 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
            {t.projectsSection.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-warm-300 lg:text-lg">
            {t.projectsSection.subtitle}
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === f
                  ? 'bg-ember text-warm-white shadow-[0_0_20px_-5px_rgba(229,37,33,0.5)]'
                  : 'border border-warm-white/10 text-warm-300 hover:border-warm-white/25 hover:text-warm-white'
              }`}
            >
              {t.projectsSection.filters[f]}
            </button>
          ))}
        </div>

        {filteredBrand.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-flare">{t.projectsSection.brandsLabel}</span>
              <div className="h-px flex-1 bg-warm-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {filteredBrand.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onClick={() => onSelectProject(project)} />
              ))}
            </div>
          </div>
        )}

        {filteredAudiovisual.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-flare">AUDIOVISUAL</span>
              <div className="h-px flex-1 bg-warm-white/10" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {filteredAudiovisual.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onClick={() => onSelectProject(project)} />
              ))}
            </div>
          </div>
        )}

        {filteredFreelance.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-flare">{t.projectsSection.freelanceLabel}</span>
              <div className="h-px flex-1 bg-warm-white/10" />
            </div>
            <p className="mb-8 max-w-xl text-sm text-warm-400">{t.projectsSection.freelanceSubtitle}</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {filteredFreelance.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onClick={() => onSelectProject(project)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLButtonElement>();

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`group relative h-[320px] w-full overflow-hidden rounded-2xl border border-warm-white/5 bg-ink-800 text-left md:h-[380px] lg:h-[420px] reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <img src={project.cover} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.7) saturate(0.9)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
      <div className="absolute inset-0 bg-ink-950/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 50% 100%, rgba(229,37,33,0.2) 0%, transparent 60%)' }} />
      <span className="absolute right-5 top-5 font-display text-sm font-bold text-warm-white/30 transition-colors group-hover:text-flare">{project.number}</span>

      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <span className="text-[11px] font-bold uppercase tracking-wider text-flare">{t.projectsSection.filters[project.category]}</span>
        <h3 className="mt-2 font-display text-xl font-bold text-warm-white lg:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-warm-300">{project.role.es}</p>
        <div className="mt-4 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="text-sm font-bold uppercase tracking-wider text-warm-white">{t.projectsSection.viewProject}</span>
          <ArrowUpRight size={16} className="text-warm-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </button>
  );
}
