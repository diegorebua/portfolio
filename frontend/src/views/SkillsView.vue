<script setup lang="ts">
import { ref, computed } from 'vue';
import { SKILLS } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

useGsapMotion();

const activeFilter = ref<'all' | 'language' | 'framework' | 'tool'>('all');

const filteredSkills = computed(() => {
  if (activeFilter.value === 'all') return SKILLS;
  return SKILLS.filter(s => s.category === activeFilter.value);
});
</script>

<template>
  <div class="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
    <!-- Ambient Lighting Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div class="tech-badge mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            Stack // Arsenal
          </div>
          <h1 class="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88]">
            Arsenal <span class="text-gradient-blue">Tecnológico</span>
          </h1>
        </div>
        <p class="mono text-xs uppercase tracking-widest max-w-sm" style="color: var(--color-text-dim)">
          Tecnologias que uso no dia a dia para construir sistemas e interfaces
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 mb-10 pb-4" style="border-bottom: 1px solid var(--color-border)">
        <button
          type="button"
          @click="activeFilter = 'all'"
          class="mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
          :style="{
            background: activeFilter === 'all' ? 'var(--color-accent)' : 'var(--card-bg)',
            color: activeFilter === 'all' ? '#040711' : 'var(--color-text-muted)',
            border: activeFilter === 'all' ? '1px solid var(--color-accent)' : '1px solid var(--card-border)',
            fontWeight: activeFilter === 'all' ? '700' : '500'
          }"
        >
          Todos ({{ SKILLS.length }})
        </button>

        <button
          type="button"
          @click="activeFilter = 'language'"
          class="mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
          :style="{
            background: activeFilter === 'language' ? 'var(--color-accent)' : 'var(--card-bg)',
            color: activeFilter === 'language' ? '#040711' : 'var(--color-text-muted)',
            border: activeFilter === 'language' ? '1px solid var(--color-accent)' : '1px solid var(--card-border)',
            fontWeight: activeFilter === 'language' ? '700' : '500'
          }"
        >
          Linguagens
        </button>

        <button
          type="button"
          @click="activeFilter = 'framework'"
          class="mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
          :style="{
            background: activeFilter === 'framework' ? 'var(--color-accent)' : 'var(--card-bg)',
            color: activeFilter === 'framework' ? '#040711' : 'var(--color-text-muted)',
            border: activeFilter === 'framework' ? '1px solid var(--color-accent)' : '1px solid var(--card-border)',
            fontWeight: activeFilter === 'framework' ? '700' : '500'
          }"
        >
          Frameworks & Libs
        </button>

        <button
          type="button"
          @click="activeFilter = 'tool'"
          class="mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
          :style="{
            background: activeFilter === 'tool' ? 'var(--color-accent)' : 'var(--card-bg)',
            color: activeFilter === 'tool' ? '#040711' : 'var(--color-text-muted)',
            border: activeFilter === 'tool' ? '1px solid var(--color-accent)' : '1px solid var(--card-border)',
            fontWeight: activeFilter === 'tool' ? '700' : '500'
          }"
        >
          DevOps & Dados
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5 mb-16">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="group relative p-6 lg:p-7 flex flex-col items-center text-center cursor-default skill-card"
        >
          <!-- Role Tag -->
          <span
            v-if="skill.roleTag"
            class="mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full mb-4 border transition-colors duration-300"
            style="background: var(--color-accent-sub); border-color: var(--color-border); color: var(--color-accent)"
          >
            {{ skill.roleTag }}
          </span>

          <!-- Icon Container with Glow Hover -->
          <div class="mb-4 skill-icon-wrap">
            <img
              v-if="skill.icon.startsWith('http')"
              :src="skill.icon"
              :alt="skill.name"
              class="w-8 h-8 lg:w-9 lg:h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span v-else class="text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110">{{ skill.icon }}</span>
          </div>

          <!-- Skill Name -->
          <span class="font-bold text-sm tracking-tight group-hover:text-sky-400 transition-colors duration-200 mb-1" style="color: var(--color-text)">
            {{ skill.name }}
          </span>

          <span class="mono text-[9px] uppercase tracking-widest opacity-60" style="color: var(--color-text-dim)">
            {{ skill.category }}
          </span>
        </div>
      </div>

      <!-- Architecture Focus Showcase Card -->
      <div class="p-8 rounded-2xl border mb-16" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-8">
            <span class="mono text-xs uppercase tracking-[0.2em] text-sky-400 font-bold block mb-2">Como eu trabalho</span>
            <h3 class="text-2xl font-bold mb-3">Do código local ao ambiente de produção</h3>
            <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">
              Ambientes padronizados com Docker para rodar exatamente igual em qualquer máquina. Código versionado com Git, organização clara de pastas e deploy contínuo em nuvem.
            </p>
          </div>
          <div class="md:col-span-4 flex flex-wrap gap-2 justify-start md:justify-end">
            <span class="mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border font-medium" style="background: var(--color-accent-sub); border-color: var(--card-border); color: var(--color-accent)">Docker</span>
            <span class="mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border font-medium" style="background: var(--color-accent-sub); border-color: var(--card-border); color: var(--color-accent)">Git</span>
            <span class="mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border font-medium" style="background: var(--color-accent-sub); border-color: var(--card-border); color: var(--color-accent)">REST APIs</span>
            <span class="mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg border font-medium" style="background: var(--color-accent-sub); border-color: var(--card-border); color: var(--color-accent)">Cloudflare</span>
          </div>
        </div>
      </div>

      <!-- Navigation to Projects -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border" style="background: var(--card-bg); border-color: var(--card-border-2); box-shadow: var(--card-shadow)">
        <div>
          <h3 class="text-xl font-bold mb-1">Quer ver o que foi feito na prática?</h3>
          <p class="text-xs sm:text-sm" style="color: var(--color-text-muted)">Projetos reais publicados na web.</p>
        </div>
        <router-link
          to="/projetos"
          class="btn-primary px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 active:scale-95"
        >
          Ver Projetos →
        </router-link>
      </div>
    </div>
  </div>
</template>
