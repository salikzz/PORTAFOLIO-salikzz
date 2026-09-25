import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Play, Instagram } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import type { Project, Category } from '@/data/projects';

interface ProjectDetailProps { project: Project; onClose: () => void; }

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { t, lang } = useLang();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const isAudiovisual = project.id === 'proyectos-audiovisuales';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const categoryLabel = t.projectsSection.filters[project.category as Category];

  useEffect(() => {
    if (project.gallery.length <= 1 || project.gallery.some((item) => item.type === 'video')) return;
    const interval = window.setInterval(() => setActiveImage((current) => (current + 1) % project.gallery.length), 4500);
    return () => window.clearInterval(interval);
  }, [project.gallery.length, project.gallery]);

  useEffect(() => {
    if (lightboxImage === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxImage(null);
      if (event.key === 'ArrowRight') setLightboxImage((current) => current === null ? 0 : (current + 1) % project.gallery.length);
      if (event.key === 'ArrowLeft') setLightboxImage((current) => current === null ? 0 : (current - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, project.gallery.length]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-ink-950/95 backdrop-blur-lg">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(229,37,33,0.18), transparent 42%)' }} />
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <button onClick={onClose} className="group mb-10 inline-flex items-center gap-2 rounded-full border border-warm-white/10 bg-warm-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-wider text-warm-200 transition hover:border-warm-white/20 hover:text-warm-white">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />{t.projectDetail.back}
        </button>

        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-display text-sm font-bold text-flare">{project.number}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-warm-300">{categoryLabel}</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl">{project.title}</h1>
          </div>
        </div>

        {['jeep', 'ram', 'fiat', 'zeekr'].includes(project.id) && (
          <a
            href={{
              jeep: 'https://www.instagram.com/manadajeep/?hl=es-la',
              ram: 'https://www.instagram.com/ram_colombia/?hl=es-la',
              fiat: 'https://www.instagram.com/fiatcol/?hl=es-la',
              zeekr: 'https://www.instagram.com/zeekrcol/?hl=es-la',
            }[project.id]}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 inline-flex items-center gap-3 rounded-xl border border-warm-white/10 bg-warm-white/[0.035] px-4 py-3 text-left transition-all duration-300 hover:border-flare/40 hover:bg-warm-white/[0.06]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember/15 text-flare">
              <Instagram size={18} />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-warm-400">Instagram</span>
              <span className="block text-sm font-semibold text-warm-white">Ver perfil de {project.title}</span>
            </span>
          </a>
        )}

        <div className="relative mb-14 overflow-hidden rounded-[28px] border border-warm-white/10 bg-transparent shadow-[0_30px_100px_-35px_rgba(229,37,33,0.35)]">
          <div className="flex w-full items-center justify-center">
            {project.gallery[activeImage]?.type === 'video' ? (
              <VideoPoster item={project.gallery[activeImage]} projectTitle={project.title} onOpen={() => setLightboxImage(activeImage)} className="min-h-[300px] sm:min-h-[460px] lg:min-h-[600px]" />
            ) : (
              <button type="button" onClick={() => setLightboxImage(activeImage)} className="group block w-full" aria-label={'Ver imagen ' + (activeImage + 1) + ' de ' + project.gallery.length}>
                <img src={project.gallery[activeImage]?.src ?? project.cover} alt={project.gallery[activeImage]?.caption ?? project.title} className="mx-auto block h-auto max-h-[600px] w-full max-w-[1200px] object-contain transition-transform duration-700 group-hover:scale-[1.01]" />
              </button>
            )}
          </div>
          {!isAudiovisual && project.gallery.length > 1 && <>
            <button type="button" onClick={() => setActiveImage((activeImage - 1 + project.gallery.length) % project.gallery.length)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-warm-white/20 bg-ink-950/60 p-2 text-warm-white backdrop-blur transition hover:bg-ink-950/90" aria-label="Imagen anterior"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setActiveImage((activeImage + 1) % project.gallery.length)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-warm-white/20 bg-ink-950/60 p-2 text-warm-white backdrop-blur transition hover:bg-ink-950/90" aria-label="Imagen siguiente"><ChevronRight size={20} /></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-warm-white/10 bg-ink-950/65 px-3 py-1 text-[11px] font-bold tracking-wider text-warm-200 backdrop-blur">{activeImage + 1} / {project.gallery.length}</div>
          </>}
        </div>

        {isAudiovisual && (
          <section className="mb-16 grid gap-8 rounded-[24px] border border-warm-white/10 bg-warm-white/[0.025] p-7 sm:p-9 lg:grid-cols-[180px_1fr]">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-flare">Podcast</p>
              <p className="mt-2 text-xs uppercase tracking-wider text-warm-400">Desde la memoria</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-warm-white sm:text-3xl">Un testimonio de memoria, valentía y resistencia</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-warm-200 lg:text-lg">
                {project.description[lang]}
              </p>
            </div>
          </section>
        )}

        <div className="mb-16 grid grid-cols-1 gap-6 rounded-2xl border border-warm-white/10 bg-warm-white/[0.025] p-6 sm:grid-cols-2 lg:grid-cols-3">
          <MetaItem label={t.projectDetail.role} value={project.role[lang]} />
          <MetaItem label={t.projectDetail.category} value={categoryLabel} />
          <MetaItem label={t.projectDetail.tools} value={project.tools.join(', ')} />
        </div>

        {!isAudiovisual && (
          <section className="mb-16 grid gap-10 lg:grid-cols-[180px_1fr]">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flare">{t.projectDetail.description}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-warm-200 lg:text-lg">{project.description[lang]}</p>
          </section>
        )}

        <section className="mb-16 grid gap-10 lg:grid-cols-[180px_1fr]">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flare">{t.projectDetail.process}</h2>
          <div className="space-y-3">
            {project.process.map((step, i) => (
              <div key={i} className="flex gap-5 border-b border-warm-white/5 pb-3 last:border-0">
                <span className="font-display text-sm font-bold text-flare">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-base text-warm-100">{step[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {!isAudiovisual && (
          <section className="mb-16">
            <h2 className="mb-6 font-display text-lg font-bold uppercase tracking-wider text-warm-white">{t.projectDetail.gallery}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item, i) => (
                <div
                  key={i}
                  className={'group relative overflow-hidden rounded-xl border border-warm-white/10 bg-transparent ' + (i === 0 ? 'sm:col-span-2 lg:col-span-2 ' : '') + (i === 1 ? 'pt-[150px] pb-[100px] pl-[1px] ml-0' : '')}
                  style={i === 1 ? { paddingTop: '150px', paddingBottom: '100px', paddingLeft: '1px', marginLeft: '0px' } : undefined}
                >
                  {item.type === 'video' ? (
                    <VideoPoster item={item} projectTitle={project.title} onOpen={() => setLightboxImage(i)} className={i === 0 ? 'h-[400px]' : 'h-[280px]'} />
                  ) : (
                    <button type="button" onClick={() => setLightboxImage(i)} className="block w-full" aria-label={'Abrir imagen ' + (i + 1)}>
                      <div className={project.id === 'fiat' && i === 1 ? 'flex w-full items-center justify-center overflow-hidden' : 'w-full'}>
                        <img src={item.src} alt={item.caption ?? project.title} loading="lazy" className="mx-auto block h-auto max-h-[520px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]" />
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12 rounded-2xl border border-warm-white/10 bg-warm-white/[0.025] p-6 text-center">
          <p className="text-xs leading-relaxed text-warm-400">Material presentado con fines exclusivamente de portafolio profesional. Los proyectos freelance y audiovisuales corresponden a trabajos y experiencias desarrollados en distintos contextos. Las marcas, logotipos y materiales de terceros pertenecen a sus respectivos titulares.</p>
        </section>

        {lightboxImage !== null && createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={'Imagen ' + (lightboxImage + 1) + ' de ' + project.gallery.length} onClick={() => setLightboxImage(null)}>
            <button type="button" onClick={() => setLightboxImage(null)} className="absolute right-5 top-5 z-10 rounded-full bg-black/40 p-2 text-warm-white transition hover:bg-black/70" aria-label="Cerrar imagen"><X size={22} /></button>
            <button type="button" onClick={(event) => { event.stopPropagation(); setLightboxImage((lightboxImage - 1 + project.gallery.length) % project.gallery.length); }} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-warm-white transition hover:bg-black/70 sm:left-8" aria-label="Imagen anterior"><ChevronLeft size={28} /></button>
            {project.gallery[lightboxImage].type === 'video' ? (
              <iframe src={project.gallery[lightboxImage].src} title={project.gallery[lightboxImage].caption ?? project.title} onClick={(event) => event.stopPropagation()} className="h-[80vh] w-[min(92vw,1100px)] rounded-xl border border-warm-white/10 bg-black" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              <img src={project.gallery[lightboxImage].src} alt={project.gallery[lightboxImage].caption ?? project.title} onClick={(event) => event.stopPropagation()} className="max-h-[92vh] max-w-[94vw] object-contain" />
            )}
            <button type="button" onClick={(event) => { event.stopPropagation(); setLightboxImage((lightboxImage + 1) % project.gallery.length); }} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-3 text-warm-white transition hover:bg-black/70 sm:right-8" aria-label="Imagen siguiente"><ChevronRight size={28} /></button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-xs font-bold tracking-wider text-warm-200">{lightboxImage + 1} / {project.gallery.length}</div>
          </div>,
          document.body
        )}
      </div>
    </div>
  );
}

function VideoPoster({ item, projectTitle, onOpen, className = 'h-full' }: { item: { src: string; caption?: string; poster?: string }; projectTitle: string; onOpen: () => void; className?: string }) {
  return (
    <button type="button" onClick={onOpen} className={'group relative flex w-full items-end overflow-hidden bg-ink-900 text-left ' + className} aria-label={'Reproducir ' + (item.caption ?? projectTitle)}>
      {item.poster ? <img src={item.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90" /> : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-ember/10" />
      <div className="relative z-10 flex w-full items-end justify-between gap-6 p-6 sm:p-8">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur"><Play size={11} fill="currentColor" /> Video principal</span>
          <p className="max-w-xl text-sm font-medium text-white drop-shadow sm:text-base">{item.caption ?? projectTitle}</p>
        </div>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-flare text-white shadow-[0_10px_35px_rgba(229,37,33,0.45)] transition-transform duration-300 group-hover:scale-110"><Play size={22} fill="currentColor" className="ml-1" /></span>
      </div>
    </button>
  );
}
function MetaItem({ label, value }: { label: string; value: string }) {
  return <div><p className="mb-1 text-[11px] font-bold uppercase tracking-wider text-warm-400">{label}</p><p className="text-sm text-warm-100">{value}</p></div>;
}
