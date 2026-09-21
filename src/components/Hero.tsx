import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import type { Project } from '@/data/projects';

interface HeroProps { onSelectProject: (project: Project) => void; }

export default function Hero({ onSelectProject: _onSelectProject }: HeroProps) {
  const { t, lang } = useLang();
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative z-10 isolate min-h-[980px] w-full overflow-hidden sm:min-h-[1000px] md:min-h-[980px] lg:min-h-screen">
      <div className="relative z-10 mx-auto flex min-h-[980px] max-w-7xl flex-col justify-center px-6 pb-24 pt-24 sm:min-h-[1000px] md:min-h-[980px] lg:min-h-screen lg:flex-row lg:items-center lg:px-10 lg:pb-0 lg:pt-0">
        <div className="flex-1 lg:pr-10">
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-warm-white sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>{t.hero.greeting}</h1>
          <h2 className="mt-2 font-display text-4xl font-bold leading-[1.1] text-gradient-ember sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>{t.hero.role}</h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-warm-200 sm:text-lg animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>{t.hero.description}</p>
          <div className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row sm:gap-6" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <button onClick={() => scrollTo('#projects')} className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-warm-white transition-all duration-300 hover:bg-flare hover:shadow-[0_0_30px_-5px_rgba(229,37,33,0.6)]">
              {t.hero.viewProjects}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => scrollTo('#contact')} className="inline-flex items-center justify-center gap-2 rounded-full border border-warm-white/15 px-8 py-4 text-sm font-bold uppercase tracking-wider text-warm-100 transition-all duration-300 hover:border-warm-white/30 hover:text-warm-white">
              {lang === 'es' ? 'CONTACTAME' : 'CONTACT ME'}
            </button>
          </div>
        </div>

        <div className="relative mt-20 flex w-full flex-1 items-center justify-center lg:mt-0 lg:justify-end">
          <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="absolute rounded-full opacity-40 blur-[70px] animate-pulse-glow" style={{ inset: '-8%', background: 'radial-gradient(circle, #E52521 0%, transparent 62%)' }} />
            <div className="relative z-10 flex h-[390px] w-[300px] shrink-0 items-end justify-center sm:h-[500px] sm:w-[380px] md:h-[560px] md:w-[430px] lg:h-[650px] lg:w-[500px]">
              <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[48%] w-[82%] -translate-x-1/2 rounded-full bg-ember/20 blur-[55px]" />
              <img
                src="/fotosalikz sin fondo.png"
                alt="Santiago Rodríguez"
                className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]"
                loading="eager"
              />
              <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[20%] w-[72%] -translate-x-1/2 rounded-full bg-ink-950/70 blur-[24px]" />
              <div className="pointer-events-none absolute bottom-[-2%] left-1/2 z-20 h-[11%] w-[58%] -translate-x-1/2 rounded-full bg-ink-950/85 blur-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scrollTo('#projects')} className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-warm-300 transition-colors hover:text-warm-white animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0 }} aria-label="Scroll">
        <ArrowDown size={20} className="animate-float-medium" />
      </button>
    </section>
  );
}
