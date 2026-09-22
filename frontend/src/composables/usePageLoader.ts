import { ref } from 'vue';

const isLoading = ref(false);
const progress = ref(0);
const targetPath = ref('');
const targetLabel = ref('');
const statusMessage = ref('INITIALIZING_VIEW');

const ROUTE_LABELS: Record<string, string> = {
  '/': 'INÍCIO // CORE',
  '/sobre': 'PERFIL // SOBRE MIM',
  '/stack': 'ARSENAL // TECNOLOGIAS',
  '/projetos': 'PORTFÓLIO // PROJETOS',
  '/trajetoria': 'TIMELINE // TRAJETÓRIA',
  '/contato': 'COMUNICAÇÃO // CONTATO',
};

let loaderInterval: ReturnType<typeof setInterval> | null = null;
let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

const TOTAL_DURATION_MS = 2000; // 2 seconds transition

export function usePageLoader() {
  const startLoading = (toPath: string) => {
    // If already loading to this exact path, ignore
    targetPath.value = toPath;
    targetLabel.value = ROUTE_LABELS[toPath] || `MÓDULO // ${toPath.toUpperCase().replace('/', '')}`;
    isLoading.value = true;
    progress.value = 0;
    statusMessage.value = 'INITIALIZING_VIEW';

    if (loaderInterval) clearInterval(loaderInterval);
    if (fadeTimeout) clearTimeout(fadeTimeout);

    const startTime = Date.now();
    const progressDuration = TOTAL_DURATION_MS - 250; // reach 100% slightly before overlay closes

    loaderInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(1, elapsed / progressDuration);

      // Smooth cubic curve so progress feels realistic and alive
      const eased = 1 - Math.pow(1 - t, 2.2);
      progress.value = Math.min(100, Math.round(eased * 100));

      // Dynamic cinematic cyber status messages during the 2s
      if (elapsed < 450) {
        statusMessage.value = 'INITIALIZING_VIEW';
      } else if (elapsed < 1000) {
        statusMessage.value = 'COMPILING_MODULES';
      } else if (elapsed < 1550) {
        statusMessage.value = 'OPTIMIZING_ASSETS';
      } else if (elapsed < 1850) {
        statusMessage.value = 'SYNC_COMPLETE';
      } else {
        statusMessage.value = 'LAUNCHING_VIEW';
      }

      if (elapsed >= TOTAL_DURATION_MS) {
        if (loaderInterval) {
          clearInterval(loaderInterval);
          loaderInterval = null;
        }
        progress.value = 100;
        isLoading.value = false;

        fadeTimeout = setTimeout(() => {
          progress.value = 0;
        }, 300);
      }
    }, 25);
  };

  const finishLoading = () => {
    // Kept for interface compatibility; the 2000ms timer controls the completion
  };

  return {
    isLoading,
    progress,
    targetPath,
    targetLabel,
    statusMessage,
    startLoading,
    finishLoading,
  };
}
