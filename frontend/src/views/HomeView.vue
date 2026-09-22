<script setup lang="ts">
import TerminalTyping from '../components/TerminalTyping.vue';
import { useGsapMotion } from '../composables/useGsapMotion';
import { BIO, SKILLS, PROJECTS, EXPERIENCES } from '../constants';

useGsapMotion();
</script>

<template>
  <div class="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-28 pb-16">
    <!-- Ambient Section Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10 my-auto">
      <!-- Top Terminal -->
      <div class="mb-6 hero-terminal">
        <TerminalTyping />
      </div>

      <!-- Hero Name Title -->
      <div class="relative hero-name-container mb-6 select-none">
        <div class="hero-name-aura" aria-hidden="true"></div>
        <h1
          class="font-morganite uppercase font-bold tracking-[0.01em] hero-name"
          style="font-size: clamp(5.2rem, 16vw, 17rem); line-height: 0.82;"
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
      <div class="flex flex-wrap items-center gap-4 mb-16">
        <router-link
          to="/projetos"
          class="btn-primary hero-cta px-8 py-3.5 rounded-full font-bold text-sm active:scale-95 flex items-center gap-2"
        >
          Ver Projetos
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </router-link>

        <router-link
          to="/sobre"
          class="btn-outline hero-cta px-8 py-3.5 rounded-full font-bold text-sm active:scale-95"
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

      <!-- Quick Exploration Hub Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10" style="border-top: 1px solid var(--color-border)">
        <!-- Card 1: Sobre -->
        <router-link
          to="/sobre"
          class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5"
          style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="mono text-[10px] uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              01 // Perfil
            </span>
            <span class="text-xs transition-transform duration-300 group-hover:translate-x-1" style="color: var(--color-accent)">→</span>
          </div>
          <h3 class="font-bold text-base mb-1.5 group-hover:text-sky-400 transition-colors">Sobre Mim</h3>
          <p class="text-xs leading-relaxed line-clamp-2" style="color: var(--color-text-muted)">
            Minha história, trajetória do suporte à engenharia e como eu trabalho.
          </p>
        </router-link>

        <!-- Card 2: Stack -->
        <router-link
          to="/stack"
          class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5"
          style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="mono text-[10px] uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              02 // Stack
            </span>
            <span class="text-xs transition-transform duration-300 group-hover:translate-x-1" style="color: var(--color-accent)">→</span>
          </div>
          <h3 class="font-bold text-base mb-1.5 group-hover:text-sky-400 transition-colors">Tecnologias</h3>
          <p class="text-xs leading-relaxed line-clamp-2" style="color: var(--color-text-muted)">
            Stack completa: Java, Node.js, React, Vue, TypeScript, Docker e PostgreSQL.
          </p>
        </router-link>

        <!-- Card 3: Projetos -->
        <router-link
          to="/projetos"
          class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5"
          style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="mono text-[10px] uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              03 // Cases
            </span>
            <span class="text-xs transition-transform duration-300 group-hover:translate-x-1" style="color: var(--color-accent)">→</span>
          </div>
          <h3 class="font-bold text-base mb-1.5 group-hover:text-sky-400 transition-colors">Projetos</h3>
          <p class="text-xs leading-relaxed line-clamp-2" style="color: var(--color-text-muted)">
            Aplicações reais em produção, com código e acesso direto ao vivo.
          </p>
        </router-link>

        <!-- Card 4: Trajetória -->
        <router-link
          to="/trajetoria"
          class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5"
          style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="mono text-[10px] uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              04 // Timeline
            </span>
            <span class="text-xs transition-transform duration-300 group-hover:translate-x-1" style="color: var(--color-accent)">→</span>
          </div>
          <h3 class="font-bold text-base mb-1.5 group-hover:text-sky-400 transition-colors">Trajetória</h3>
          <p class="text-xs leading-relaxed line-clamp-2" style="color: var(--color-text-muted)">
            Experiências profissionais, funções exercidas e entregas na prática.
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
