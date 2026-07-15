<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import TerminalTyping from './components/TerminalTyping.vue';
import InteractiveBackground from './components/InteractiveBackground.vue';
import { PROJECTS, SKILLS, EXPERIENCES, BIO } from './constants';
import { useMotionSlice } from './composables/useMotionSlice';

useMotionSlice();

const handleNavClick = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 overflow-hidden bg-transparent text-zinc-300">
    <!-- Animated interactive background -->
    <InteractiveBackground :is-mobile="true" />
    <Navbar @nav-click="handleNavClick" />

    <main>

      <!-- ===================== HERO ===================== -->
      <section id="hero" class="min-h-[100dvh] flex items-center justify-center pt-20 pb-[env(safe-area-inset-bottom)] section-dot-bg">
        <div class="container mx-auto px-4 sm:px-6 text-center">
          <div class="inline-block mb-8 px-4 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase border-zinc-800 bg-zinc-900 text-zinc-400">
            Desenvolvedor de Software
          </div>
          <h1 class="text-4xl sm:text-6xl md:text-8xl font-black mb-8 sm:mb-10 md:mb-12 tracking-tighter leading-none text-white">
            Criando <span class="text-blue-600">Experiências</span><br />Digitais.
          </h1>
          <TerminalTyping />
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none mx-auto px-4 mt-8">
            <a href="#projects" @click.prevent="handleNavClick('#projects')" class="w-full sm:w-auto text-center py-3.5 px-8 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 whitespace-nowrap bg-white text-black hover:bg-zinc-200">
              Projetos
            </a>
            <a href="#about" @click.prevent="handleNavClick('#about')" class="w-full sm:w-auto text-center py-3.5 px-8 border rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all active:scale-95 whitespace-nowrap bg-transparent text-white border-zinc-700 hover:border-zinc-500">
              Sobre Mim
            </a>
          </div>
        </div>
      </section>

      <!-- ===================== ABOUT ===================== -->
      <section id="about" class="py-16 sm:py-24 md:py-32 border-t border-zinc-800">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              <div class="w-full md:w-1/3" data-motion>
                <h2 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-6 sm:mb-8">01. Perfil</h2>
                <div class="relative group overflow-hidden rounded-3xl aspect-[4/5] max-w-[260px] sm:max-w-xs mx-auto md:max-w-none bg-zinc-800">
                  <img
                    src="/profile.jpeg"
                    alt="Profile"
                    class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </div>
              <div class="w-full md:w-2/3" data-motion="100ms">
                <h3 class="text-2xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 leading-tight text-white">
                  Combinando robustez no backend com elegância no frontend.
                </h3>
                <div class="leading-[1.8] space-y-8 sm:space-y-10 text-base md:text-lg text-zinc-400 my-4">
                  <p>{{ BIO }}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-8 sm:pt-10 md:pt-12 mt-8 sm:mt-10 border-t border-zinc-800">
                    <div>
                      <h4 class="text-white font-bold mb-3.5 sm:mb-4">Frontend</h4>
                      <p class="text-sm leading-[1.75]">React (Next.js), Vue 3, JavaScript, TypeScript.</p>
                    </div>
                    <div>
                      <h4 class="text-white font-bold mb-3.5 sm:mb-4">Backend</h4>
                      <p class="text-sm leading-[1.75]">Java (Spring), Node.js (NestJS), PostgreSQL.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== SKILLS ===================== -->
      <section id="skills" class="py-16 sm:py-24 md:py-32 border-y border-zinc-800">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-5xl mx-auto">
            <h2 data-motion class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12 sm:mb-16 md:mb-20 text-center">02. Arsenal Tecnológico</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
              <div
                v-for="(skill, idx) in SKILLS"
                :key="skill.name"
                :data-motion="`${idx * 60}ms`"
                class="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center rounded-2xl md:rounded-3xl border transition-all group bg-white/[0.02] backdrop-blur-xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.06] hover:border-white/10"
              >
                <div class="mb-4 sm:mb-6 md:mb-8 flex justify-center">
                  <img v-if="skill.icon.startsWith('http')" :src="skill.icon" :alt="skill.name" class="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain mx-auto" />
                  <span v-else class="text-2xl sm:text-3xl md:text-4xl">{{ skill.icon }}</span>
                </div>
                <div class="font-black text-xs sm:text-sm md:text-lg text-white mt-1 sm:mt-2">{{ skill.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== PROJECTS ===================== -->
      <section id="projects" class="py-16 sm:py-24 md:py-32">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-5xl mx-auto">
            <h2 data-motion class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-8 md:mb-12">03. Projetos</h2>
            <div class="grid grid-cols-2 gap-3 sm:gap-8 md:gap-12">
              <div v-for="(project, idx) in PROJECTS" :key="project.id" :data-motion="`${idx * 100}ms`" class="group flex flex-col">
                <component
                  :is="project.link ? 'a' : 'div'"
                  :href="project.link"
                  :target="project.link ? '_blank' : null"
                  class="block relative aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mb-2.5 sm:mb-5 md:mb-6 transition-all duration-500 bg-zinc-800 shadow-none group-hover:shadow-white/5"
                >
                  <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span class="px-3 py-1.5 sm:px-6 sm:py-3 rounded-full font-bold text-[10px] sm:text-sm bg-white text-black">{{ project.link ? 'Ver Detalhes' : 'Em Breve' }}</span>
                  </div>
                </component>
                <h3 class="text-xs sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 text-white leading-tight">{{ project.title }}</h3>
                <p class="leading-relaxed text-[11px] sm:text-sm mb-3 sm:mb-4 text-zinc-400 line-clamp-3 sm:line-clamp-none">{{ project.description }}</p>
                <div class="flex flex-wrap gap-1 sm:gap-1.5 mt-auto pt-1 sm:pt-2">
                  <span v-for="t in project.tech" :key="t" class="px-2 py-0.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-[9px] sm:text-xs font-bold text-blue-500 uppercase tracking-wider">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== EXPERIENCE ===================== -->
      <section id="experience" class="py-16 sm:py-24 md:py-32 border-y bg-zinc-900/10 border-zinc-800">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="max-w-4xl mx-auto">
            <h2 data-motion class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12 sm:mb-16 md:mb-20">04. Trajetória</h2>
            <div class="space-y-14 sm:space-y-16 md:space-y-20">
              <div v-for="(exp, idx) in EXPERIENCES" :key="idx" :data-motion="`${idx * 80}ms`" class="flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
                <div class="text-zinc-500 font-bold text-xs sm:text-sm tracking-wider uppercase mb-1.5 md:mb-0">{{ exp.period }}</div>
                <div class="md:col-span-2">
                  <h4 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{{ exp.role }}</h4>
                  <p class="text-blue-500 font-bold mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">{{ exp.company }}</p>
                  <ul class="space-y-4 sm:space-y-5 md:space-y-6">
                    <li v-for="(item, i) in exp.description" :key="i" class="text-xs sm:text-sm md:text-[15px] leading-[1.8] flex items-start text-zinc-400 py-1">
                      <span class="text-blue-500 mr-2.5 sm:mr-3 mt-1 sm:mt-1.5 shrink-0">•</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== CONTACT ===================== -->
      <section id="contact" class="py-16 sm:py-24 md:py-40">
        <div class="container mx-auto px-4 sm:px-6 text-center">
          <div class="max-w-xl mx-auto" data-motion>
            <h2 class="text-3xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-10 md:mb-12 tracking-tighter text-white">Vamos criar algo novo?</h2>
            <p class="text-sm sm:text-base md:text-lg mb-12 sm:mb-14 md:mb-16 text-zinc-400 max-w-md mx-auto leading-[1.8]">
              Estou sempre aberto a novos desafios e parcerias inovadoras. Entre em contato para uma consultoria ou café remoto.
            </p>
            <a
              href="mailto:contact@devportfolio.com"
              class="inline-flex items-center px-8 sm:px-12 py-3.5 sm:py-4 md:py-5 font-black rounded-full transition-all shadow-2xl active:scale-95 text-xs sm:text-sm md:text-base bg-zinc-100 text-slate-900 hover:bg-white"
            >
              Enviar E-mail
              <svg class="ml-2.5 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- ===================== FOOTER ===================== -->
    <footer class="py-12 md:py-20 border-t bg-transparent border-zinc-800">
      <div class="container mx-auto px-4 sm:px-6 text-center">
        <div class="flex justify-center space-x-8 md:space-x-12 mb-8 md:mb-12">
          <a href="https://github.com/diegorebua" target="_blank" aria-label="GitHub" class="transition-all hover:scale-110 active:scale-95 text-zinc-500 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/diegorebu%C3%A1/" target="_blank" aria-label="LinkedIn" class="transition-all hover:scale-110 active:scale-95 text-zinc-500 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
          </a>
          <a href="https://www.instagram.com/diegorebua/" target="_blank" aria-label="Instagram" class="transition-all hover:scale-110 active:scale-95 text-zinc-500 hover:text-white">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clip-rule="evenodd" /></svg>
          </a>
        </div>
        <p class="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">&copy; 2025 Design e Código por Diego</p>
      </div>
    </footer>
  </div>
</template>
