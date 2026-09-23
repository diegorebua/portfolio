import { createContext, useContext, useEffect, useState, type MouseEvent, type ReactNode } from 'react';

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: (event?: MouseEvent<HTMLElement>) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function savedDarkTheme() {
  try { return localStorage.getItem('theme') === 'dark'; }
  catch { return false; }
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.classList.toggle('light', !dark);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0A0A0A' : '#F5F5F3');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* storage may be unavailable */ }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(savedDarkTheme);

  useEffect(() => { applyTheme(isDark); }, [isDark]);

  const toggleTheme = (event?: MouseEvent<HTMLElement>) => {
    const nextDark = !isDark;
    const rect = event?.currentTarget.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 40;

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
      const ring = document.createElement('div');
      ring.className = 'theme-shockwave-ring';
      ring.style.left = x + 'px';
      ring.style.top = y + 'px';
      ring.style.setProperty('--end-diameter', Math.ceil(radius * 2.2) + 'px');
      ring.style.setProperty('--wave-glow', '#3A5A6B');
      document.body.appendChild(ring);
      ring.addEventListener('animationend', () => ring.remove(), { once: true });
    }

    applyTheme(nextDark);
    setIsDark(nextDark);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error('useTheme requires ThemeProvider');
  return value;
}
