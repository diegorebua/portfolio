import { onMounted, onUnmounted } from 'vue';

interface MotionSliceOptions {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
}

/**
 * useMotionSlice
 * Observes elements matching `selector` and applies `is-visible` class
 * when they enter the viewport, triggering CSS animations.
 *
 * Usage in template:
 *   <div data-motion>...</div>
 *   <div data-motion="150ms">...</div>  ← adds transition-delay
 */
export function useMotionSlice(options: MotionSliceOptions = {}) {
  const {
    selector = '[data-motion]',
    rootMargin = '0px 0px -80px 0px',
    threshold = 0.12,
  } = options;

  let observer: IntersectionObserver | null = null;

  const observe = () => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.motion;
            if (delay && delay !== '') {
              el.style.transitionDelay = delay;
            }
            el.classList.add('is-visible');
            observer?.unobserve(el);
          }
        });
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => observer!.observe(el));
  };

  onMounted(() => {
    setTimeout(observe, 80);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
