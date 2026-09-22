<script setup lang="ts">
import { BIO } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

useGsapMotion();
</script>

<template>
  <div class="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
    <!-- Ambient Lighting Glow -->
    <div class="section-ambient-glow" aria-hidden="true"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <!-- Section Header Badge -->
      <div class="flex items-center justify-between mb-12">
        <div class="tech-badge">
          <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          Perfil // Sobre Mim
        </div>
        <span class="mono text-xs uppercase tracking-widest hidden sm:block" style="color: var(--color-text-dim)">
          Bio & Filosofia
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        <!-- Photo — Left column with light/dark adaptive card & aura -->
        <div class="lg:col-span-4 about-photo relative">
          <!-- Ambient Halo behind the photo card -->
          <div
            class="absolute -inset-2 rounded-3xl blur-2xl pointer-events-none opacity-35 transition-all duration-500"
            style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);"
          ></div>

          <div class="photo-card aspect-[3/4] group">
            <img
              src="/profile.jpeg"
              alt="Diego Rebuá"
              class="photo-img"
              loading="lazy"
            />
            <!-- Adaptive Light/Dark floating status pill -->
            <div class="photo-badge absolute bottom-3 left-3 right-3 py-2 px-3.5 rounded-xl mono text-[10px] uppercase tracking-wider flex items-center justify-between z-20">
              <span class="flex items-center gap-2 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Disponível
              </span>
              <span class="font-medium" style="color: var(--color-text-muted)">São Paulo, SP</span>
            </div>
          </div>
        </div>

        <!-- Bio & Presentation — Right column -->
        <div class="lg:col-span-8 flex flex-col justify-center about-text">
          <h1 class="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88] mb-8">
            Combinando robustez no backend<br class="hidden md:block" /> com elegância no <span class="text-gradient-blue">frontend</span>.
          </h1>

          <p class="text-base md:text-lg leading-[1.8] mb-8" style="color: var(--color-text-muted)">
            {{ BIO }}
          </p>

          <p class="text-sm md:text-base leading-[1.8] mb-10" style="color: var(--color-text-muted)">
            Não perco tempo reinventando a roda nem criando complexidade desnecessária. Meu foco é resolver problemas com código limpo, APIs bem documentadas e telas que respondem rápido.
          </p>

          <!-- Core Specializations -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8" style="border-top: 1px solid var(--color-border)">
            <div class="bio-card p-5 rounded-2xl border transition-all duration-300" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
              <h3 class="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2 font-bold" style="color: var(--color-accent)">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                Frontend
              </h3>
              <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">
                Interfaces reativas, responsivas e velozes construídas com Vue 3, React, TypeScript e Tailwind CSS.
              </p>
            </div>

            <div class="bio-card p-5 rounded-2xl border transition-all duration-300" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
              <h3 class="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2 font-bold" style="color: var(--color-accent)">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                Backend & Dados
              </h3>
              <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">
                APIs em Node.js e Java (Spring Boot), com banco de dados PostgreSQL estruturado e containers Docker.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Pillars / Architecture Values -->
      <div class="pt-12" style="border-top: 1px solid var(--color-border)">
        <h2 class="mono text-xs uppercase tracking-[0.25em] mb-8" style="color: var(--color-accent)">
          Como eu trabalho
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
            <span class="font-morganite text-4xl sm:text-5xl font-bold text-sky-400 mb-1 block tracking-wider leading-none">01</span>
            <h3 class="text-lg font-bold mb-2">Velocidade e Resposta Rápida</h3>
            <p class="text-xs sm:text-sm leading-relaxed" style="color: var(--color-text-muted)">
              Código enxuto, consultas otimizadas e páginas leves. A experiência precisa ser instantânea, sem travamentos nem esperas.
            </p>
          </div>

          <div class="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
            <span class="font-morganite text-4xl sm:text-5xl font-bold text-sky-400 mb-1 block tracking-wider leading-none">02</span>
            <h3 class="text-lg font-bold mb-2">Código Claro e Sustentável</h3>
            <p class="text-xs sm:text-sm leading-relaxed" style="color: var(--color-text-muted)">
              Estrutura que qualquer desenvolvedor entende e dá continuidade sem estresse. Tipagem estrita e padrões diretos.
            </p>
          </div>

          <div class="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
            <span class="font-morganite text-4xl sm:text-5xl font-bold text-sky-400 mb-1 block tracking-wider leading-none">03</span>
            <h3 class="text-lg font-bold mb-2">Foco no Usuário Real</h3>
            <p class="text-xs sm:text-sm leading-relaxed" style="color: var(--color-text-muted)">
              Interfaces feitas para quem usa todo dia. Feedbacks visuais rápidos, navegação intuitiva e zero atrito.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
