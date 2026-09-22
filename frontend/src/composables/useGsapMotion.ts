import { onMounted, onUnmounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapMotion() {
  let ctx: gsap.Context | null = null;

  onMounted(() => {
    // Respeita preferência do usuário para redução de movimento
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    ctx = gsap.context(() => {
      // ===================== 1. HERO TIMELINE (ENTRADA CINEMATOGRÁFICA) =====================
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.1 });

      heroTl
        .fromTo(
          '.hero-terminal',
          { y: -20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)', clearProps: 'transform,opacity' }
        )
        .fromTo(
          '.hero-name-first',
          { y: 70, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power4.out', clearProps: 'transform' },
          '-=0.45'
        )
        .fromTo(
          '.hero-name-last',
          { y: 70, opacity: 0, skewY: -2 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: 'power4.out', clearProps: 'transform' },
          '-=0.9'
        )
        .fromTo(
          '.hero-name-aura',
          { opacity: 0, scale: 0.7 },
          { opacity: 0.75, scale: 1, duration: 1.4, ease: 'power2.out' },
          '-=0.9'
        )
        .fromTo(
          '.hero-subtitle',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'transform,opacity' },
          '-=0.7'
        )
        .fromTo(
          '.hero-cta',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity' },
          '-=0.6'
        );

      // ===================== 2. ABOUT REVEAL =====================
      gsap.fromTo(
        '#about .about-photo',
        { scale: 0.92, y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about',
            start: 'top 85%',
            once: true
          },
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      gsap.fromTo(
        '#about .about-text > *',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#about .about-text',
            start: 'top 85%',
            once: true
          },
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // ===================== 3. SKILLS STAGGER WAVE (ROBUSTO COM FROMTO & CLEARPROPS) =====================
      gsap.fromTo(
        '#skills .skill-card',
        {
          y: 35,
          opacity: 0,
          scale: 0.94
        },
        {
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 85%',
            once: true
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.65,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // ===================== 4. PROJECTS REVEAL =====================
      gsap.fromTo(
        '#projects .project-card',
        { y: 40, opacity: 0, scale: 0.97 },
        {
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 85%',
            once: true
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // ===================== 5. EXPERIENCE TIMELINE REVEAL =====================
      gsap.fromTo(
        '#experience .exp-item',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#experience',
            start: 'top 85%',
            once: true
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // ===================== 6. CONTACT SECTION POP =====================
      gsap.fromTo(
        '#contact .contact-content > *',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 85%',
            once: true
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );
    });

    // Garante sincronização de posições com ScrollTrigger após render e carregamento de fontes/imagens
    nextTick(() => {
      ScrollTrigger.refresh();
      if (document.fonts) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }
      window.addEventListener('load', () => {
        ScrollTrigger.refresh();
      }, { once: true });
    });
  });

  onUnmounted(() => {
    ctx?.revert();
  });
}
