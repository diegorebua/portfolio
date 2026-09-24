import { useEffect, useRef, useState } from 'react';
import { EMAIL } from '../constants';

const socials = [
  { label: 'GitHub', url: 'https://github.com/diegorebua' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/diegorebu%C3%A1/' },
  { label: 'Instagram', url: 'https://www.instagram.com/diegorebua/' },
];

export default function ContactView() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="page contact-page container" aria-labelledby="contact-title">
      <header className="page-heading">
        <p className="eyebrow">CONTATO / 05</p>
        <h1 id="contact-title">Vamos conversar<span className="accent-period">.</span></h1>
        <p>Tem um projeto, uma oportunidade ou uma boa ideia? Me conte o que você tem em mente.</p>
      </header>
      <div className="contact-panel">
        <p className="eyebrow">MEU E-MAIL</p>
        <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<span aria-hidden="true">↗</span></a>
        <button className="copy-button" type="button" onClick={copyEmail} aria-live="polite">{copied ? 'E-mail copiado ✓' : 'Copiar endereço ↗'}</button>
      </div>
      <div className="contact-bottom"><p>Também estou por aqui:</p><div>{socials.map(social => <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">{social.label} ↗</a>)}</div></div>
    </section>
  );
}
