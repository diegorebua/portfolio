<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import TerminalTyping from './components/TerminalTyping.vue';
import InteractiveBackground from './components/InteractiveBackground.vue';
import { PROJECTS, SKILLS, EXPERIENCES, BIO, EMAIL } from './constants';
import { useGsapMotion } from './composables/useGsapMotion';

useGsapMotion();

const handleNavClick = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen bg-transparent" style="color: var(--color-text)">
    <InteractiveBackground :is-mobile="false" />
    <Navbar @nav-click="handleNavClick" />

    <main>

      <!-- ===================== HERO ===================== -->
      <section id="hero" class="min-h-screen flex items-center pt-28 pb-16">
        <div class="w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Left — text block, full width impact -->
            <div class="lg:col-span-12">
              <div class="mb-6 hero-terminal">
                <TerminalTyping />
              </div>
              <div class="relative hero-name-container mb-6 select-none">
                <div class="hero-name-aura" aria-hidden="true"></div>
                <h1
                  class="font-morganite uppercase font-bold tracking-[0.01em] hero-name"
                  style="font-size: clamp(5.5rem, 15.5vw, 17rem); line-height: 0.82;"
                >
                  <span class="hero-name-first">Diego</span>
                  <span class="hero-name-last ml-[0.16em]">Rebuá</span>
                </h1>
              </div>
              <p class="max-w-xl text-base md:text-lg leading-relaxed mb-10 hero-subtitle" style="color: var(--color-text-muted)">
                Criando <span class="font-medium" style="color: var(--color-text)">experiências digitais</span> com robustez no backend e elegância no frontend.
              </p>
              <div class="flex flex-wrap items-center gap-4">
                <a href="#projects" @click.prevent="handleNavClick('#projects')"
                   class="btn-primary hero-cta px-8 py-3.5 rounded-full font-bold text-sm active:scale-95">
                  Ver Projetos
                </a>
                <a href="#about" @click.prevent="handleNavClick('#about')"
                   class="btn-outline hero-cta px-8 py-3.5 rounded-full font-bold text-sm active:scale-95"
                   style="border: 1px solid var(--color-border-2); color: var(--color-text-frost)">
                  Sobre Mim
                </a>
              </div>
            </div>

            <!-- Right — breathing space, empty on purpose -->
            <div class="hidden lg:block lg:col-span-4"></div>
          </div>
        </div>
      </section>

      <!-- ===================== ABOUT ===================== -->
      <section id="about" class="py-24 md:py-40 relative overflow-hidden" style="border-top: 1px solid var(--color-border)">
        <div class="section-ambient-glow" aria-hidden="true"></div>
        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <!-- Photo — left, narrow -->
            <div class="lg:col-span-4 about-photo">
              <div class="tech-badge mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                Perfil
              </div>
              <div class="relative group overflow-hidden rounded-2xl aspect-[3/4] border transition-all duration-500 hover:scale-[1.01]" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow);">
                <img
                  src="/profile.jpeg"
                  alt="Diego Rebuá"
                  class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-lg backdrop-blur-md mono text-[10px] uppercase tracking-wider flex items-center justify-between" style="background: rgba(4, 7, 17, 0.8); border: 1px solid rgba(56, 189, 248, 0.2); color: var(--color-text-frost)">
                  <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Disponível</span>
                  <span style="color: var(--color-text-muted)">São Paulo, SP</span>
                </div>
              </div>
            </div>

            <!-- Bio — right, wide -->
            <div class="lg:col-span-8 flex flex-col justify-center about-text">
              <h2 class="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-10">
                Combinando robustez no backend<br class="hidden md:block" /> com elegância no <span class="text-gradient-blue">frontend</span>.
              </h2>
              <p class="text-base md:text-lg leading-[1.8] mb-12" style="color: var(--color-text-muted)">
                {{ BIO }}
              </p>
              <div class="grid grid-cols-2 gap-6 pt-8" style="border-top: 1px solid var(--color-border)">
                <div class="bio-card p-5 rounded-xl border transition-all duration-300" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
                  <h4 class="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2" style="color: var(--color-accent)">
                    <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    Frontend
                  </h4>
                  <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">React (Next.js), Vue 3, JavaScript, TypeScript.</p>
                </div>
                <div class="bio-card p-5 rounded-xl border transition-all duration-300" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
                  <h4 class="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2" style="color: var(--color-accent)">
                    <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    Backend
                  </h4>
                  <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">Java (Spring), Node.js (NestJS), PostgreSQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== SKILLS ===================== -->
      <section id="skills" class="py-24 md:py-32 relative overflow-hidden" style="border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border)">
        <div class="section-ambient-glow" aria-hidden="true"></div>
        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <div class="tech-badge mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                Stack
              </div>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tight">Arsenal <span class="text-gradient-blue">Tecnológico</span></h2>
            </div>
            <p class="mono text-xs uppercase tracking-widest max-w-xs" style="color: var(--color-text-dim)">
              Tecnologias principais utilizadas no dia a dia
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
            <div
              v-for="(skill, idx) in SKILLS"
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

              <!-- Icon container -->
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
              <span class="font-bold text-sm tracking-tight group-hover:text-sky-400 transition-colors duration-200" style="color: var(--color-text)">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== PROJECTS ===================== -->
      <section id="projects" class="py-24 md:py-40 relative overflow-hidden">
        <div class="section-ambient-glow" aria-hidden="true"></div>
        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div class="flex items-center justify-between mb-16">
            <div class="tech-badge">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              Projetos em Destaque
            </div>
          </div>

          <!-- Featured project — full width -->
          <div v-for="(project, idx) in PROJECTS" :key="project.id" class="group mb-16 last:mb-0 project-card">
            <component
              :is="project.link ? 'a' : 'div'"
              :href="project.link"
              :target="project.link ? '_blank' : null"
              class="block relative aspect-[21/10] rounded-2xl overflow-hidden mb-8 transition-all duration-500 hover-lift border"
              style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow);"
            >
              <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
              <div v-else class="w-full h-full flex flex-col items-center justify-center text-center" style="background: var(--card-bg); border: 1px solid var(--card-border)">
                <div class="w-14 h-14 rounded-full flex items-center justify-center mb-4" style="background: var(--color-accent-sub); border: 1px solid var(--color-border-2); color: var(--color-accent)">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <span class="mono text-xs uppercase tracking-widest" style="color: var(--color-text-muted)">Em Breve</span>
              </div>
              <div v-if="project.image" class="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span class="px-7 py-3.5 rounded-full font-bold text-sm shadow-2xl transition-transform duration-300 group-hover:scale-105" style="background: var(--color-accent); color: #040711">{{ project.link ? 'Ver Projeto →' : 'Em Breve' }}</span>
              </div>
            </component>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
              <div class="lg:col-span-5">
                <div class="inline-flex items-center gap-2 mb-3">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold" style="background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3); color: #4ade80">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Em Produção
                  </span>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold tracking-tight">{{ project.title }}</h3>
              </div>
              <div class="lg:col-span-7">
                <p class="text-sm leading-[1.8] mb-5" style="color: var(--color-text-muted)">{{ project.description }}</p>
                <div v-if="project.tech && project.tech.length" class="flex flex-wrap gap-2">
                  <span v-for="t in project.tech" :key="t" class="mono px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-medium" style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent-ice)">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 flex items-center gap-3" style="color: var(--color-text-dim)">
            <span class="w-10 h-[1px]" style="background: var(--color-border-2)"></span>
            <span class="mono text-xs uppercase tracking-wider">Mais projetos em breve</span>
          </div>
        </div>
      </section>

      <!-- ===================== EXPERIENCE ===================== -->
      <section id="experience" class="py-24 md:py-40 relative overflow-hidden" style="border-top: 1px solid var(--color-border)">
        <div class="section-ambient-glow" aria-hidden="true"></div>
        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div class="flex items-center justify-between mb-16">
            <div class="tech-badge">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              Minha Trajetória
            </div>
          </div>

          <div class="space-y-8">
            <div v-for="(exp, idx) in EXPERIENCES" :key="idx" class="exp-item p-7 lg:p-9 rounded-2xl border transition-all duration-300" style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <!-- Left — role & period -->
                <div class="lg:col-span-4">
                  <span class="mono text-xs tracking-wider inline-block mb-3 px-3 py-1 rounded-md font-medium" style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-text-muted)">{{ exp.period }}</span>
                  <h4 class="text-2xl font-bold mb-1.5">{{ exp.role }}</h4>
                  <p class="font-bold flex items-center gap-2" style="color: var(--color-accent)">
                    <span class="w-2 h-2 rounded-full bg-sky-400"></span>
                    {{ exp.company }}
                  </p>
                </div>

                <!-- Right — description -->
                <div class="lg:col-span-8 pt-1">
                  <ul class="space-y-3.5">
                    <li v-for="(item, i) in exp.description" :key="i" class="flex items-start gap-3 text-sm leading-[1.8]" style="color: var(--color-text-muted)">
                      <span class="shrink-0 w-1.5 h-1.5 rounded-full mt-[9px]" style="background: var(--color-accent)"></span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== CONTACT ===================== -->
      <section id="contact" class="py-32 md:py-48 relative overflow-hidden">
        <!-- Ambient corner aura in contact -->
        <div class="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl" style="background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(37, 99, 235, 0.05) 60%, transparent 80%);"></div>

        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div class="max-w-2xl contact-content">
            <div class="tech-badge mb-8">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
              Contato
            </div>
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-8">
              Vamos criar<br/><span class="text-gradient-blue">algo novo?</span>
            </h2>
            <p class="text-base md:text-lg leading-[1.8] mb-12" style="color: var(--color-text-muted)">
              Estou sempre aberto a novos desafios e parcerias inovadoras. Entre em contato para uma consultoria ou café remoto.
            </p>
            <a
              :href="'mailto:' + EMAIL"
              class="btn-primary inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full text-sm active:scale-95"
            >
              Enviar E-mail
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- ===================== FOOTER ===================== -->
    <footer class="py-16" style="border-top: 1px solid var(--color-border)">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="mono text-xs uppercase tracking-wider" style="color: var(--color-text-dim)">&copy; 2025 Diego Rebuá</p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/diegorebua" target="_blank" aria-label="GitHub" class="transition-all duration-300 hover:scale-110" style="color: var(--color-text-muted)">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/diegorebu%C3%A1/" target="_blank" aria-label="LinkedIn" class="transition-all duration-300 hover:scale-110" style="color: var(--color-text-muted)">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.instagram.com/diegorebua/" target="_blank" aria-label="Instagram" class="transition-all duration-300 hover:scale-110" style="color: var(--color-text-muted)">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
