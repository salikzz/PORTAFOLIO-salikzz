import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/context/LangContext';

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-warm-white/5' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* The visual scale is larger, but transform does not change the nav's layout height. */}
        <button onClick={() => handleNav('#hero')} className="transition-opacity hover:opacity-70">
          <img src="/Logo.svg" alt="Logo" className="h-16 w-auto origin-left scale-[1.35] md:h-20 md:scale-[1.3]" />
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="text-sm font-medium tracking-wide text-warm-200 transition-colors hover:text-warm-white">
              {item.label}
            </button>
          ))}
          <div className="h-4 w-px bg-warm-white/15" />
          <button onClick={toggleLang} className="text-sm font-medium tracking-wide text-warm-200 transition-colors hover:text-flare">
            {lang === 'es' ? 'ES' : 'EN'} <span className="text-warm-white/30">|</span>{' '}
            <span className="text-warm-white/40">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        <button className="text-warm-white md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-400 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 bg-ink-950/95 backdrop-blur-md">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="text-left text-base font-medium text-warm-100 transition-colors hover:text-flare">
              {item.label}
            </button>
          ))}
          <button onClick={toggleLang} className="text-left text-base font-medium text-warm-100 transition-colors hover:text-flare">
            {lang === 'es' ? 'ES' : 'EN'} <span className="text-warm-white/30">|</span>{' '}
            <span className="text-warm-white/40">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
