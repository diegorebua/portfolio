import { useSyncExternalStore } from 'react';

interface LoaderState {
  isLoading: boolean;
  progress: number;
  targetLabel: string;
  statusMessage: string;
}

const routeLabels: Record<string, string> = {
  '/': 'PÁGINA // INÍCIO',
  '/sobre': 'PÁGINA // SOBRE MIM',
  '/stack': 'PÁGINA // TECNOLOGIAS',
  '/projetos': 'PÁGINA // PROJETOS',
  '/trajetoria': 'PÁGINA // TRAJETÓRIA',
  '/contato': 'PÁGINA // CONTATO',
};

let state: LoaderState = {
  isLoading: false,
  progress: 0,
  targetLabel: '',
  statusMessage: 'CARREGANDO PÁGINA',
};
const listeners = new Set<() => void>();
let interval: ReturnType<typeof setInterval> | undefined;
let resetTimeout: ReturnType<typeof setTimeout> | undefined;

function update(patch: Partial<LoaderState>) {
  state = { ...state, ...patch };
  listeners.forEach(listener => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function usePageLoader() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}

export function startLoading(path: string) {
  if (interval) clearInterval(interval);
  if (resetTimeout) clearTimeout(resetTimeout);
  update({
    isLoading: true,
    progress: 0,
    targetLabel: routeLabels[path] ?? 'PÁGINA // ' + path.slice(1).toUpperCase(),
    statusMessage: 'CARREGANDO PÁGINA',
  });

  const startedAt = Date.now();
  interval = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const t = Math.min(1, elapsed / 1750);
    const statusMessage = elapsed < 500 ? 'CARREGANDO PÁGINA'
      : elapsed < 1100 ? 'PROCESSANDO DADOS'
      : elapsed < 1650 ? 'PREPARANDO TELA' : 'CONCLUÍDO';
    update({ progress: Math.round((1 - Math.pow(1 - t, 2.2)) * 100), statusMessage });
    if (elapsed >= 2000) {
      clearInterval(interval);
      interval = undefined;
      update({ isLoading: false, progress: 100 });
      resetTimeout = setTimeout(() => update({ progress: 0 }), 300);
    }
  }, 25);
}
