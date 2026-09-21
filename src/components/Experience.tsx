import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

export default function Experience() {
  const { t, lang } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">{t.experience.title}</h2>
          <p className="mt-4 max-w-xl text-base text-warm-300 lg:text-lg">{t.experience.subtitle}</p>
        </div>

        <div className="relative">
          {/* One centered timeline line. Its x-position is exactly the same as the dot center. */}
          <div className="absolute left-[5px] top-0 h-full w-px bg-gradient-to-b from-ember/50 via-warm-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {t.experienceItems.map((item, i) => (
              <div
                key={i}
                className={`relative pl-8 md:w-1/2 md:pl-12 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}
              >
                {/* Dot center is mathematically aligned with the line on both mobile and desktop. */}
                <div
                  className={`absolute top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_15px_rgba(229,37,33,0.6)] ${
                    i % 2 === 0 ? 'left-[5px] md:left-full' : 'left-[5px] md:left-0'
                  }`}
                />

                <h3 className="font-display text-xl font-bold text-warm-white lg:text-2xl">{item.title[lang]}</h3>
                <p className="mt-2 text-sm text-warm-300">{item.context[lang]}</p>

                <ul className={`mt-5 space-y-2 ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                  {item.items.map((sub, j) => (
                    <li key={j} className="text-sm text-warm-200">{sub[lang]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
