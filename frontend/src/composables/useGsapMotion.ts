import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

export function useGsapMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      if (document.querySelector('#home')) {
        gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.1 })
          .fromTo('.hero-terminal', { y: -20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)', clearProps: 'transform,opacity' })
          .fromTo('.hero-name-first', { y: 70, opacity: 0, skewY: 2 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, clearProps: 'transform' }, '-=0.45')
          .fromTo('.hero-name-last', { y: 70, opacity: 0, skewY: -2 }, { y: 0, opacity: 1, skewY: 0, duration: 1.1, clearProps: 'transform' }, '-=0.9')
          .fromTo('.hero-name-aura', { opacity: 0, scale: 0.7 }, { opacity: 0.75, scale: 1, duration: 1.4, ease: 'power2.out' }, '-=0.9')
          .fromTo('.hero-subtitle', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, clearProps: 'transform,opacity' }, '-=0.7')
          .fromTo('.hero-cta', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, clearProps: 'transform,opacity' }, '-=0.6');
      }

      const reveal = (selector: string, trigger: string, initial: gsap.TweenVars, stagger = 0.1) => {
        if (!document.querySelector(trigger)) return;
        gsap.fromTo(selector, initial, {
          scrollTrigger: { trigger, start: 'top 85%', once: true },
          y: 0, scale: 1, opacity: 1, stagger, duration: 0.8,
          ease: 'power3.out', clearProps: 'transform,opacity',
        });
      };

      reveal('#about .about-photo', '#about', { scale: 0.92, y: 35, opacity: 0 });
      reveal('#about .about-text > *', '#about .about-text', { y: 30, opacity: 0 });
      reveal('#skills .skill-card', '#skills', { y: 35, opacity: 0, scale: 0.94 }, 0.05);
      reveal('#experience .exp-item', '#experience', { y: 30, opacity: 0 }, 0.15);
      reveal('#contact .contact-content > *', '#contact', { y: 30, opacity: 0 });
    });

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh, { once: true });
    return () => {
      window.removeEventListener('load', refresh);
      context.revert();
    };
  }, []);
}
