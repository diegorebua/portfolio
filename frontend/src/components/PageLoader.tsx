import { usePageLoader } from '../composables/usePageLoader';
import './PageLoader.css';

export default function PageLoader() {
  const { isLoading, progress, targetLabel, statusMessage } = usePageLoader();
  return (
    <>
      <div className="fixed top-0 left-0 h-[2.5px] z-[9999999] pointer-events-none transition-all duration-75 ease-out" style={{
        width: progress + '%', opacity: progress > 0 ? 1 : 0,
        background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent) 65%, #F5F5F3 100%)',
        boxShadow: '0 0 16px var(--color-accent), 0 0 32px rgba(58, 90, 107, 0.8)',
      }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--text-inverse)] blur-[2px] opacity-95" style={{ boxShadow: '0 0 12px #F5F5F3, 0 0 24px var(--color-accent)' }} />
      </div>
      {isLoading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-none hud-overlay" style={{ background: 'rgba(10, 10, 10, 0.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
          <div className="absolute inset-0 cyber-scanline" />
          <div className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
          <div className="relative px-7 py-5 rounded-2xl border text-center select-none shadow-2xl flex flex-col items-center gap-3" style={{ background: 'var(--card-bg)', borderColor: 'var(--color-border-2)', boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(58, 90, 107, 0.2)', minWidth: 300, maxWidth: '90vw' }}>
            <div className="absolute top-0 left-6 right-6 h-[1.5px]" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }} />
            <div className="flex items-center gap-2.5 mono text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--color-accent-text)' }}>
              <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]" /></span>
              <span>{targetLabel}</span>
            </div>
            <div className="w-full bg-[var(--color-surface-2)] rounded-full h-2 overflow-hidden border border-[var(--color-border-2)] my-1 p-[1px]">
              <div className="h-full rounded-full transition-all duration-75 ease-out" style={{ width: progress + '%', background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent) 70%, #F5F5F3 100%)', boxShadow: '0 0 12px var(--color-accent)' }} />
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] flex items-center justify-between w-full" style={{ color: 'var(--color-text-muted)' }}>
              <span className="flex items-center gap-1.5 font-medium"><span className="inline-block w-1 h-1 rounded-full bg-[var(--color-accent)]" />{statusMessage}</span>
              <span className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>{progress}%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
