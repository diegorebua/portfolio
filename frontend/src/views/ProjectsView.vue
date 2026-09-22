<script setup lang="ts">
import { PROJECTS } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

useGsapMotion();
</script>

<template>
  <div id="projects" class="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
    <!-- Ambient Lighting Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div class="tech-badge mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            Projetos // Em Produção
          </div>
          <h1 class="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88]">
            Projetos em <span class="text-gradient-blue">Destaque</span>
          </h1>
        </div>
        <p class="mono text-xs uppercase tracking-widest max-w-sm" style="color: var(--color-text-dim)">
          Aplicações desenvolvidas, entregues e rodando na web
        </p>
      </div>

      <!-- Featured Projects List -->
      <div class="space-y-20">
        <div
          v-for="project in PROJECTS"
          :key="project.id"
          class="project-card p-6 sm:p-8 lg:p-10 rounded-3xl"
        >
          <!-- Media Showcase Wrapper -->
          <component
            :is="project.link ? 'a' : 'div'"
            :href="project.link"
            :target="project.link ? '_blank' : null"
            rel="noopener noreferrer"
            class="project-media block relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden mb-8 group outline-none"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              v-else
              class="w-full h-full flex flex-col items-center justify-center text-center p-8"
              style="background: var(--card-bg); border: 1px solid var(--card-border)"
            >
              <div
                class="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style="background: var(--color-accent-sub); border: 1px solid var(--color-border-2); color: var(--color-accent)"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <span class="mono text-xs uppercase tracking-widest font-semibold" style="color: var(--color-text-muted)">Em Breve</span>
            </div>

            <div
              v-if="project.image"
              class="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
            >
              <span
                class="px-7 py-3.5 rounded-full font-bold text-sm shadow-2xl transition-transform duration-300 group-hover:scale-105"
                style="background: var(--color-accent); color: #040711"
              >
                {{ project.link ? 'Abrir Projeto ↗' : 'Em Breve' }}
              </span>
            </div>
          </component>

          <!-- Project Information -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div class="lg:col-span-5">
              <div class="inline-flex items-center gap-2 mb-3">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold"
                  style="background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Em Produção
                </span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{{ project.title }}</h2>

              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 mono text-xs uppercase tracking-wider font-bold hover:underline"
                style="color: var(--color-accent)"
              >
                Acessar Site
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            </div>

            <div class="lg:col-span-7">
              <p class="text-sm sm:text-base leading-[1.8] mb-6" style="color: var(--color-text-muted)">
                {{ project.description }}
              </p>
              <div v-if="project.tech && project.tech.length" class="flex flex-wrap gap-2">
                <span
                  v-for="t in project.tech"
                  :key="t"
                  class="mono px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-medium"
                  style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent-ice)"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
