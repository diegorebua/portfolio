import SocialIcon from './SocialIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
<footer className="py-12 md:py-16 relative z-10" style={{ borderTop: '1px solid var(--color-border)' }}>
    <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
        <p className="mono text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-dim)' }}>
          &copy; {currentYear} Diego Rebuá · Todos os direitos reservados
        </p>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/diegorebua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent-text)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <SocialIcon name="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/diegorebu%C3%A1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent-text)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <SocialIcon name="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/diegorebua/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-all duration-300 hover:scale-110 hover:text-[var(--color-accent-text)]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <SocialIcon name="Instagram" />
        </a>
      </div>
    </div>
  </footer>
  );
}
