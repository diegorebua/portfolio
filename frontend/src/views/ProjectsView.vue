<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectStory from '../components/ProjectStory.vue';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const root = ref<HTMLElement | null>(null);
let media: gsap.MatchMedia | null = null;

onMounted(async () => {
  await nextTick();
  if (!root.value) return;

  const page = root.value;
  media = gsap.matchMedia();

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const context = gsap.context(() => {
      page.querySelectorAll<HTMLElement>('.project-story').forEach((story, index) => {
        if (index === 0) return;

        const visual = story.querySelector<HTMLElement>('.story-visual');
        const heading = story.querySelector<HTMLElement>('.story-heading');
        const details = story.querySelector<HTMLElement>('.story-details');

        if (visual) {
          gsap.fromTo(visual,
            { clipPath: 'inset(9% 5% 9% 5% round 24px)', y: 32, autoAlpha: 0.55 },
            {
              clipPath: 'inset(0% 0% 0% 0% round 24px)',
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: { trigger: story, start: 'top 80%', once: true }
            }
          );
        }

        if (heading) {
          gsap.fromTo(heading.children, { y: 20, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: story, start: 'top 85%', once: true }
          });
        }

        if (details) {
          gsap.fromTo(details.children, { y: 20, autoAlpha: 0 }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: details, start: 'top 88%', once: true }
          });
        }
      });
    }, page);

    return () => context.revert();
  });

  media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
    const context = gsap.context(() => {
      page.querySelectorAll<HTMLElement>('.story-backdrop').forEach((backdrop) => {
        gsap.fromTo(backdrop, { yPercent: -3, scale: 1.1 }, {
          yPercent: 3,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: backdrop.closest('.story-visual'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        });
      });
    }, page);

    return () => context.revert();
  });

  document.fonts.ready.then(() => {
    if (root.value) ScrollTrigger.refresh();
  });
});

onUnmounted(() => {
  media?.revert();
});
</script>

<template>
  <section id="projects" ref="root" class="relative pt-32 pb-24">
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <header class="mb-16 lg:mb-24">
        <div class="flex items-center justify-between gap-6 mb-7">
          <div class="tech-badge">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            Projetos // Em Produção
          </div>
          <span class="mono hidden sm:block text-xs uppercase tracking-widest" style="color: var(--color-text-dim)">
            {{ String(PROJECTS.length).padStart(2, '0') }} projetos selecionados
          </span>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <h1 class="font-morganite uppercase font-bold tracking-[0.02em] leading-[0.84] text-[clamp(5rem,13vw,11rem)]">
            Projetos em<br /><span class="text-gradient-blue">Destaque</span>
          </h1>
          <p class="max-w-xs text-base leading-relaxed lg:pb-2" style="color: var(--color-text-muted)">
            Produtos reais, com decisões de design e engenharia em cada detalhe.
          </p>
        </div>
      </header>

      <div class="projects-list">
        <ProjectStory
          v-for="(project, index) in PROJECTS"
          :key="project.id"
          :project="project"
          :index="index"
          :total="PROJECTS.length"
        />
      </div>

      <p class="mt-20 mono text-sm tracking-wider opacity-50" style="color: var(--color-text-muted)">
        — Mais projetos sendo desenvolvidos
      </p>
    </div>
  </section>
</template>

<style scoped>
.projects-list {
  display: grid;
  gap: clamp(5rem, 10vw, 9rem);
}
</style>
