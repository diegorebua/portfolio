import { ref, onMounted } from 'vue';

export type Theme = 'dark' | 'light';

// Estado global reativo compartilhado entre componentes
const isDark = ref<boolean>(true);

export function useTheme() {
  const updateThemeMeta = (color: string) => {
    if (typeof document === 'undefined') return;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', color);
  };

  const applyTheme = (dark: boolean) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      updateThemeMeta('#040711');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      updateThemeMeta('#f4f8fc');
      localStorage.setItem('theme', 'light');
    }
    isDark.value = dark;
  };

  const initTheme = () => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light') {
      applyTheme(false);
    } else {
      // Padrão escuro com personalidade de Diego Rebuá
      applyTheme(true);
    }
  };

  // Cria o anel de onda de choque luminoso
  const createShockwaveRing = (x: number, y: number, radius: number, toLight: boolean) => {
    if (typeof document === 'undefined') return;
    const ring = document.createElement('div');
    ring.className = 'theme-shockwave-ring';
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    ring.style.setProperty('--end-diameter', `${Math.ceil(radius * 2.2)}px`);
    ring.style.setProperty('--wave-glow', toLight ? '#38bdf8' : '#2563eb');
    document.body.appendChild(ring);
    ring.addEventListener('animationend', () => {
      ring.remove();
    }, { once: true });
  };

  // Fallback animado com onda de preenchimento para navegadores sem View Transitions
  const createWaveFillFallback = (x: number, y: number, radius: number, toLight: boolean, onFilled: () => void) => {
    if (typeof document === 'undefined') return;
    const fill = document.createElement('div');
    fill.className = 'theme-wave-canvas-fallback';
    fill.style.left = `${x}px`;
    fill.style.top = `${y}px`;
    fill.style.setProperty('--end-diameter', `${Math.ceil(radius * 2.2)}px`);
    fill.style.backgroundColor = toLight ? '#f4f8fc' : '#040711';
    document.body.appendChild(fill);

    // Aplica o tema na metade da expansão da onda
    setTimeout(() => {
      onFilled();
    }, 300);

    fill.addEventListener('animationend', () => {
      fill.remove();
    }, { once: true });
  };

  const toggleTheme = (event?: MouseEvent) => {
    if (typeof window === 'undefined') return;

    const targetIsDark = !isDark.value;
    const targetIsLight = !targetIsDark;

    // Respeita preferência por redução de movimento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyTheme(targetIsDark);
      return;
    }

    // Coleta as coordenadas exatas da origem do clique (botão)
    let x = window.innerWidth / 2;
    let y = 40;

    if (event) {
      const target = event.currentTarget as HTMLElement | null;
      if (target && target.getBoundingClientRect) {
        const rect = target.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
      } else if (event.clientX && event.clientY) {
        x = event.clientX;
        y = event.clientY;
      }
    }

    // Calcula raio máximo para cobrir todos os cantos da viewport
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Dispara a onda de choque visual em todos os navegadores
    createShockwaveRing(x, y, endRadius, targetIsLight);

    // Se suportar View Transitions nativo (Chrome, Edge, Safari 18+)
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const transition = (document as any).startViewTransition(() => {
        applyTheme(targetIsDark);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 750,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      // Fallback gracioso com onda de preenchimento fluido
      createWaveFillFallback(x, y, endRadius, targetIsLight, () => {
        applyTheme(targetIsDark);
      });
    }
  };

  onMounted(() => {
    // Sincroniza estado se montado no client
    const saved = localStorage.getItem('theme');
    isDark.value = saved !== 'light';
  });

  return {
    isDark,
    toggleTheme,
    initTheme
  };
}
