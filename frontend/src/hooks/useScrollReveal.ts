import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

// Cards and image frames reveal as units; their children must not animate twice.
const targets = [
  'h1', 'h2', 'h3', 'p', 'main figure', '.hero-portrait',
  '.work-card', '.skill-row', '.experience-item', '.about-principles > div',
  '.project-section-index', '.work-tags', '.work-gallery',
  '.text-link', '.contact-email', '.copy-button', '.contact-bottom > div',
  '.skill-group-intro > .eyebrow', '.footer-title', '.footer-email', '.footer-bottom > *',
].join(', ');

export default function useScrollReveal(root: RefObject<HTMLDivElement | null>, route: string) {
  const revealed = useRef(new WeakSet<Element>());

  useEffect(() => {
    const container = root.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container || motion.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;

    const candidates = Array.from(container.querySelectorAll<HTMLElement>(targets))
      .filter(element => element.closest('main, footer'));
    const candidateSet = new Set(candidates);
    const elements = candidates.filter(element => {
      if (revealed.current.has(element)) return false;
      for (let parent = element.parentElement; parent && parent !== container; parent = parent.parentElement) {
        if (candidateSet.has(parent)) return false;
      }
      return true;
    });
    const order = new Map(elements.map((element, index) => [element, index]));
    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => order.get(a.target as HTMLElement)! - order.get(b.target as HTMLElement)!);
      visible.forEach((entry, index) => {
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        revealed.current.add(element);
        element.classList.remove('reveal-pending');
        const animation = element.animate(
          [{ opacity: 0, translate: '0 20px' }, { opacity: 1, translate: '0 0' }],
          { duration: 550, delay: index * 70, easing: 'ease-out', fill: 'backwards' },
        );
        animations.set(element, animation);
        animation.onfinish = () => animations.delete(element);
      });
    }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });

    elements.forEach(element => {
      element.classList.add('reveal-pending');
      observer.observe(element);
    });

    // Keyboard navigation must never land on an invisible control.
    const handleFocus = (event: FocusEvent) => {
      const focused = event.target;
      if (!(focused instanceof Element)) return;
      for (const element of elements) {
        if (element === focused || element.contains(focused)) {
          observer.unobserve(element);
          revealed.current.add(element);
          element.classList.remove('reveal-pending');
          animations.get(element)?.cancel();
          animations.delete(element);
        }
      }
    };
    const showAll = () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove('reveal-pending'));
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const handleMotion = () => { if (motion.matches) showAll(); };
    container.addEventListener('focusin', handleFocus);
    motion.addEventListener('change', handleMotion);
    return () => {
      showAll();
      container.removeEventListener('focusin', handleFocus);
      motion.removeEventListener('change', handleMotion);
    };
  }, [root, route]);
}
