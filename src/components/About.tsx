import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { Sparkles, Eye, RefreshCw, Users, Rocket, Target, BookOpen } from 'lucide-react';

export default function About() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const strengthIcons = [Sparkles, Eye, RefreshCw, Users, Rocket, Target, BookOpen];

  return (
    <section id="about" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div ref={ref} className={'mx-auto max-w-7xl reveal ' + (visible ? 'is-visible' : '')}>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start md:gap-12 lg:items-center lg:gap-24">
          <div className="flex flex-col md:pt-0 lg:justify-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">{t.about.title}</h2>
            <div className="relative mx-auto mt-10 flex h-[460px] w-full max-w-md items-end justify-center overflow-hidden md:mt-8 md:h-[500px] lg:mx-0 lg:mt-10 lg:h-[540px]">
              <div className="pointer-events-none absolute bottom-[calc(70px+8%)] left-1/2 h-[55%] w-[82%] -translate-x-1/2 rounded-full bg-ember/20 blur-[55px] md:bottom-[calc(85px+8%)] lg:bottom-[calc(100px+8%)]" />
              <img
                src="/fotosalikz sin fondo.png"
                alt="Santiago Rodríguez"
                loading="lazy"
                className="relative z-10 mb-[70px] h-full w-full object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] [mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] md:mb-[85px] lg:mb-[100px]"
              />
              <div className="pointer-events-none absolute bottom-[70px] left-1/2 z-20 h-[22%] w-[72%] -translate-x-1/2 rounded-full bg-ink-950/75 blur-[26px] md:bottom-[85px] lg:bottom-[100px]" />
              <div className="pointer-events-none absolute bottom-[62px] left-1/2 z-20 h-[12%] w-[58%] -translate-x-1/2 rounded-full bg-ink-950/90 blur-[16px] md:bottom-[77px] lg:bottom-[92px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center md:pt-0 lg:pt-0">
            <p className="text-lg leading-relaxed text-warm-100 lg:text-xl">{t.about.bio}</p>
            <div className="mt-12">
              <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-flare">{t.about.strengthsTitle}</h3>
              <div className="flex flex-wrap gap-3">
                {t.strengths.map((strength, i) => {
                  const Icon = strengthIcons[i] ?? Sparkles;
                  return (
                    <div key={i} className="group inline-flex items-center gap-2 rounded-full border border-warm-white/10 bg-ink-800/60 px-4 py-2.5 transition-all duration-300 hover:border-flare/40 hover:bg-ink-700/60">
                      <Icon size={14} className="text-flare opacity-70 transition-opacity group-hover:opacity-100" />
                      <span className="text-sm text-warm-100">{strength}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
