import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

export default function Skills() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-warm-300 lg:text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.skillCategories.map((cat, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-warm-white/10 bg-ink-800/40 p-6 transition-all duration-400 hover:border-flare/30 hover:bg-ink-700/50"
            >
              {/* Glow on hover */}
              <div
                className="mb-4 h-1 w-10 rounded-full bg-ember transition-all duration-400 group-hover:w-full"
              />

              <h3 className="mb-5 font-display text-lg font-bold uppercase tracking-wider text-warm-white">
                {cat.label[lang]}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-ink-600/60 px-3 py-1.5 text-xs font-medium text-warm-200 transition-colors hover:text-flare"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
