<script setup lang="ts">
import TerminalTyping from '../components/TerminalTyping.vue';
import { useGsapMotion } from '../composables/useGsapMotion';
import { BIO, SKILLS, PROJECTS, EXPERIENCES } from '../constants';

useGsapMotion();
</script>

<template>
  <div id="home" class="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-28 pb-16">
    <!-- Ambient Section Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10 my-auto">
      <!-- Top Terminal -->
      <div class="mb-6 hero-terminal max-w-full overflow-hidden">
        <TerminalTyping />
      </div>

      <!-- Hero Name Title -->
      <div class="relative hero-name-container mb-6 select-none max-w-full">
        <div class="hero-name-aura" aria-hidden="true"></div>
        <h1
          class="font-morganite uppercase font-bold tracking-[0.01em] hero-name"
          style="font-size: clamp(4.5rem, 16vw, 17rem); line-height: 0.82;"
        >
          <span class="hero-name-first">Diego</span>
          <span class="hero-name-last ml-[0.16em]">Rebuá</span>
        </h1>
      </div>

      <!-- Subtitle -->
      <p class="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed mb-10 hero-subtitle" style="color: var(--color-text-muted)">
        Desenvolvedor Full Stack. Desenvolvo <span class="font-medium" style="color: var(--color-text)">sistemas confiáveis</span> no backend e interfaces rápidas no frontend.
      </p>

      <!-- Primary Action Buttons -->
      <div class="flex flex-wrap items-center gap-4 hero-cta">
        <router-link
          to="/projetos"
          class="btn-primary px-8 py-3.5 rounded-full font-bold text-sm active:scale-95 flex items-center gap-2"
        >
          Ver Projetos
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </router-link>

        <router-link
          to="/sobre"
          class="btn-outline px-8 py-3.5 rounded-full font-bold text-sm active:scale-95"
          style="border: 1px solid var(--color-border-2); color: var(--color-text-frost)"
        >
          Sobre Mim
        </router-link>

        <router-link
          to="/contato"
          class="mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:text-sky-400 transition-colors duration-200"
          style="color: var(--color-text-muted)"
        >
          Falar Comigo →
        </router-link>
      </div>
    </div>
  </div>
</template>
