import { ref } from 'vue';

const isLoading = ref(false);
const progress = ref(0);
const targetPath = ref('');
const targetLabel = ref('');
const statusMessage = ref('CARREGANDO PÁGINA');

const ROUTE_LABELS: Record<string, string> = {
  '/': 'PÁGINA // INÍCIO',
  '/sobre': 'PÁGINA // SOBRE MIM',
  '/stack': 'PÁGINA // TECNOLOGIAS',
  '/projetos': 'PÁGINA // PROJETOS',
  '/trajetoria': 'PÁGINA // TRAJETÓRIA',
  '/contato': 'PÁGINA // CONTATO',
};

let loaderInterval: ReturnType<typeof setInterval> | null = null;
let fadeTimeout: ReturnType<typeof setTimeout> | null = null;

const TOTAL_DURATION_MS = 2000; // 2 seconds transition

export function usePageLoader() {
  const startLoading = (toPath: string) => {
    // If already loading to this exact path, ignore
    targetPath.value = toPath;
    targetLabel.value = ROUTE_LABELS[toPath] || `PÁGINA // ${toPath.toUpperCase().replace('/', '')}`;
    isLoading.value = true;
    progress.value = 0;
    statusMessage.value = 'CARREGANDO PÁGINA';

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

      // Dynamic status messages during the 2s
      if (elapsed < 500) {
        statusMessage.value = 'CARREGANDO PÁGINA';
      } else if (elapsed < 1100) {
        statusMessage.value = 'PROCESSANDO DADOS';
      } else if (elapsed < 1650) {
        statusMessage.value = 'PREPARANDO TELA';
      } else {
        statusMessage.value = 'CONCLUÍDO';
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
