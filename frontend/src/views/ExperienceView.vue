<script setup lang="ts">
import { EXPERIENCES } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

useGsapMotion();
</script>

<template>
  <div class="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
    <!-- Ambient Lighting Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div class="tech-badge mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            Timeline // Trajetória
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Minha <span class="text-gradient-blue">Trajetória</span>
          </h1>
        </div>
        <p class="mono text-xs uppercase tracking-widest max-w-sm" style="color: var(--color-text-dim)">
          Histórico profissional, responsabilidades e realizações
        </p>
      </div>

      <!-- Experience Items -->
      <div class="space-y-8 mb-20">
        <div
          v-for="(exp, idx) in EXPERIENCES"
          :key="idx"
          class="exp-item p-7 lg:p-10 rounded-3xl border transition-all duration-300"
          style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <!-- Left: Role & Company -->
            <div class="lg:col-span-4">
              <span
                class="mono text-xs tracking-wider inline-block mb-3 px-3.5 py-1 rounded-full font-medium"
                style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent)"
              >
                {{ exp.period }}
              </span>
              <h2 class="text-2xl sm:text-3xl font-bold mb-2">{{ exp.role }}</h2>
              <p class="font-bold flex items-center gap-2 text-base" style="color: var(--color-accent)">
                <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                {{ exp.company }}
              </p>
            </div>

            <!-- Right: Impact Bullet Points -->
            <div class="lg:col-span-8 pt-2">
              <ul class="space-y-4">
                <li
                  v-for="(item, i) in exp.description"
                  :key="i"
                  class="flex items-start gap-3.5 text-sm sm:text-base leading-[1.8]"
                  style="color: var(--color-text-muted)"
                >
                  <span
                    class="shrink-0 w-2 h-2 rounded-full mt-[10px]"
                    style="background: var(--color-accent); box-shadow: 0 0 8px var(--color-accent)"
                  ></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation to Contact -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl border" style="background: var(--card-bg); border-color: var(--card-border-2); box-shadow: var(--card-shadow)">
        <div>
          <h3 class="text-xl font-bold mb-1">Gostou do perfil e quer trocar uma ideia?</h3>
          <p class="text-xs sm:text-sm" style="color: var(--color-text-muted)">Entre em contato para parcerias, projetos ou oportunidades.</p>
        </div>
        <router-link
          to="/contato"
          class="btn-primary px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 active:scale-95"
        >
          Iniciar Conversa →
        </router-link>
      </div>
    </div>
  </div>
</template>
