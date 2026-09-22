import { ref } from 'vue';

const isLoading = ref(false);
const progress = ref(0);
const targetPath = ref('');
const targetLabel = ref('');

const ROUTE_LABELS: Record<string, string> = {
  '/': 'INÍCIO // CORE',
  '/sobre': 'PERFIL // SOBRE MIM',
  '/stack': 'ARSENAL // TECNOLOGIAS',
  '/projetos': 'PORTFÓLIO // PROJETOS',
  '/trajetoria': 'TIMELINE // TRAJETÓRIA',
  '/contato': 'COMUNICAÇÃO // CONTATO',
};

let progressTimer: ReturnType<typeof setInterval> | null = null;

export function usePageLoader() {
  const startLoading = (toPath: string) => {
    targetPath.value = toPath;
    targetLabel.value = ROUTE_LABELS[toPath] || `NAVIGATING // ${toPath.toUpperCase()}`;
    isLoading.value = true;
    progress.value = 15;

    if (progressTimer) clearInterval(progressTimer);

    // Simulate fast cyber loading bar progress
    progressTimer = setInterval(() => {
      if (progress.value < 85) {
        progress.value += Math.floor(Math.random() * 20) + 10;
        if (progress.value > 85) progress.value = 85;
      }
    }, 50);
  };

  const finishLoading = () => {
    if (progressTimer) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
    progress.value = 100;

    setTimeout(() => {
      isLoading.value = false;
      setTimeout(() => {
        progress.value = 0;
      }, 200);
    }, 320);
  };

  return {
    isLoading,
    progress,
    targetPath,
    targetLabel,
    startLoading,
    finishLoading,
  };
}
