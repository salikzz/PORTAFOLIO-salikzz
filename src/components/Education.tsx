import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative w-full px-6 py-24 lg:px-10 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-warm-white sm:text-4xl">
            {t.education.title}
          </h2>
          <p className="mt-3 text-base text-warm-300">{t.education.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-ember/50 via-warm-white/10 to-transparent" />

          <div className="space-y-8">
            {t.educationItems.map((item, i) => (
              <div
                key={i}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[13px] top-1 flex h-3.5 w-3.5 items-center justify-center">
                  <div className="h-3.5 w-3.5 rounded-full border-2 border-ember bg-ink-950 shadow-[0_0_15px_rgba(229,37,33,0.4)]" />
                </div>

                <div className="group rounded-xl border border-warm-white/10 bg-ink-800/40 p-5 transition-all duration-400 hover:border-flare/30">
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      size={20}
                      className="mt-0.5 shrink-0 text-flare opacity-60 transition-opacity group-hover:opacity-100"
                    />
                    <div>
                      <h3 className="font-display text-base font-bold leading-snug text-warm-white">
                        {item.degree[lang]}
                      </h3>
                      <p className="mt-1 text-sm text-warm-300">{item.institution[lang]}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
