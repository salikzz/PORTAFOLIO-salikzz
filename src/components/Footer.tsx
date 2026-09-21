import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { t, lang, toggleLang } = useLang();

  const socials = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/s_l_kzz?igsi=Z2xuZG9yNGRnbWpm&utm_source=qr',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/william-santiago-rodriguez-rosas-1318b842b?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:wsrr1095@outlook.es',
      label: 'Email',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/3023572066',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="relative w-full border-t border-warm-white/5 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <img src="/Logo.svg" alt="Logo de Santiago" className="h-20 w-auto object-contain md:h-24" />
            <p className="text-sm text-warm-300">
              Santiago — {t.footer.tagline}
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/10 text-warm-300 transition-all duration-300 hover:border-flare/40 hover:text-flare"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <button
              onClick={toggleLang}
              className="text-sm font-medium text-warm-200 transition-colors hover:text-flare"
            >
              {lang === 'es' ? 'ES' : 'EN'} <span className="text-warm-white/30">|</span>{' '}
              <span className="text-warm-white/40">{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <p className="text-sm text-warm-400">{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
