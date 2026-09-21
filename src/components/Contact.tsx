import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Instagram, MessageCircle } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useLang();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get('name') as string)?.trim() ?? '';
    const email = (formData.get('email') as string)?.trim() ?? '';
    const message = (formData.get('message') as string)?.trim() ?? '';

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = 'Required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email required';
    if (!message) newErrors.message = 'Required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/wsrr1095@outlook.es', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'Nuevo mensaje desde tu portafolio',
          _template: 'table',
          _replyto: email,
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
    }
  };

  const socials = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'wsrr1095@outlook.es',
      href: 'mailto:wsrr1095@outlook.es',
    },
    {
      icon: Instagram,
      label: t.contact.instagramLabel,
      value: '@s_l_kzz',
      href: 'https://www.instagram.com/s_l_kzz?igsi=Z2xuZG9yNGRnbWpm&utm_source=qr',
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: '+57 302 357 2066',
      href: 'https://wa.me/3023572066',
    },
  ];

  return (
    <section id="contact" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #E52521 0%, transparent 70%)' }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-xl text-warm-300 lg:text-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <Field
                label={t.contact.name}
                name="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                error={errors.name}
              />
              <Field
                label={t.contact.email}
                name="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                error={errors.email}
              />
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-warm-300">
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full resize-none rounded-xl border bg-ink-800/60 px-5 py-4 text-base text-warm-white placeholder-warm-400/60 transition-all focus:outline-none focus:border-flare/50 ${
                    errors.message ? 'border-ember' : 'border-warm-white/10'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-ember">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-warm-white transition-all duration-300 hover:bg-flare hover:shadow-[0_0_30px_-5px_rgba(229,37,33,0.6)] disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t.contact.sending}
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} />
                    {t.contact.success}
                  </>
                ) : (
                  <>
                    {t.contact.submit}
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-ember">
                  <AlertCircle size={16} />
                  {t.contact.error}
                </p>
              )}
              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-flare">
                  <CheckCircle2 size={16} />
                  {t.contact.success}
                </p>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-warm-white/10 bg-ink-800/40 px-5 py-4 transition-all duration-300 hover:border-flare/30 hover:bg-ink-700/50"
                  >
                    <Icon size={18} className="text-warm-300 transition-colors group-hover:text-flare" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-warm-100">{social.label}</p>
                      <p className="truncate text-xs text-warm-400 group-hover:text-warm-300 transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-warm-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ink-800/60 px-5 py-4 text-base text-warm-white placeholder-warm-400/60 transition-all focus:outline-none focus:border-flare/50 ${
          error ? 'border-ember' : 'border-warm-white/10'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-ember">{error}</p>}
    </div>
  );
}
