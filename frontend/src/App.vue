
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Navbar from './components/Navbar.vue';
import ChatWidget from './components/ChatWidget.vue';
import { PROJECTS, SKILLS, EXPERIENCES, BIO } from './constants';

const isDarkMode = ref(false);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    isDarkMode.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateTheme();
  }
});

const updateTheme = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  updateTheme();
};

watch(isDarkMode, updateTheme);

const isFading = ref(false);
const handleNavClick = (targetId: string) => {
  isFading.value = true;
  setTimeout(() => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'auto' });
    }
    setTimeout(() => {
      isFading.value = false;
    }, 50);
  }, 300);
};
</script>

<template>
  <div :class="['min-h-screen transition-colors duration-500', isDarkMode ? 'bg-[#121212] text-zinc-300' : 'bg-white text-slate-900']">
    <Navbar :is-dark-mode="isDarkMode" @toggle-dark-mode="toggleDarkMode" @nav-click="handleNavClick" />
    <ChatWidget :is-dark-mode="isDarkMode" />

    <main :class="['transition-all duration-300 ease-in-out', isFading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0']">
      <!-- Hero Section -->
      <section id="hero" class="min-h-screen flex items-center justify-center pt-20 section-dot-bg">
        <div class="container mx-auto px-6 text-center">
          <div :class="[
            'inline-block mb-6 px-4 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase',
            isDarkMode ? 'border-zinc-800 bg-zinc-900 text-zinc-400' : 'border-blue-100 bg-blue-50 text-blue-600'
          ]">
            Desenvolvedor de Software
          </div>
          <h1 :class="['text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none', isDarkMode ? 'text-white' : 'text-slate-900']">
            Criando <span class="text-blue-600">Experiências</span><br />Digitais.
          </h1>
          <p :class="['max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium leading-relaxed', isDarkMode ? 'text-zinc-400' : 'text-slate-500']">
            Especialista em ecossistemas de alta performance com <span :class="[isDarkMode ? 'text-white' : 'text-slate-900', 'font-bold underline decoration-blue-500/30']">Java, Node.js, React e Vue.</span>
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#projects" @click.prevent="handleNavClick('#projects')" :class="['w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-all shadow-xl active:scale-95', isDarkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-slate-900 text-white hover:bg-blue-600 shadow-slate-900/10']">
              Ver Projetos
            </a>
            <a href="#about" @click.prevent="handleNavClick('#about')" :class="['w-full sm:w-auto px-10 py-4 border rounded-full font-bold transition-all active:scale-95', isDarkMode ? 'bg-transparent text-white border-zinc-700 hover:border-zinc-500' : 'bg-white text-slate-900 border-slate-200 hover:border-slate-400']">
              Sobre Mim
            </a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" :class="['py-32 border-t', isDarkMode ? 'border-zinc-800' : 'border-slate-50']">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-col md:flex-row gap-16 items-start">
              <div class="md:w-1/3">
                <h2 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">01. Perfil</h2>
                <div :class="['relative group overflow-hidden rounded-3xl aspect-[4/5]', isDarkMode ? 'bg-zinc-800' : 'bg-slate-100']">
                  <img 
                    src="/profile.jpeg" 
                    alt="Profile" 
                    class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                </div>
              </div>
              <div class="md:w-2/3">
                <h3 :class="['text-4xl font-bold mb-8 leading-tight', isDarkMode ? 'text-white' : 'text-slate-900']">
                  Combinando robustez no backend com elegância no frontend.
                </h3>
                <div :class="['leading-relaxed space-y-6 text-lg', isDarkMode ? 'text-zinc-400' : 'text-slate-600']">
                  <p>{{ BIO }}</p>
                  <div :class="['grid grid-cols-2 gap-8 pt-8 border-t', isDarkMode ? 'border-zinc-800' : 'border-slate-100']">
                    <div>
                      <h4 :class="[isDarkMode ? 'text-white' : 'text-slate-900', 'font-bold mb-2']">Frontend</h4>
                      <p class="text-sm">React (Next.js), Vue 3, JavaScript, TypeScript.</p>
                    </div>
                    <div>
                      <h4 :class="[isDarkMode ? 'text-white' : 'text-slate-900', 'font-bold mb-2']">Backend</h4>
                      <p class="text-sm">Java (Spring), Node.js (NestJS), PostgreSQL.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" :class="['py-32', isDarkMode ? 'bg-zinc-900/30' : 'bg-slate-50/50']">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12 text-center">02. Arsenal Tecnológico</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div v-for="skill in SKILLS" :key="skill.name" :class="['p-8 rounded-3xl border transition-all group', isDarkMode ? 'bg-[#1a1a1a] border-zinc-800 shadow-none hover:border-zinc-600' : 'bg-white border-slate-100 shadow-sm hover:shadow-xl']">
                <div class="mb-6 flex items-center justify-between">
                  <img v-if="skill.icon.startsWith('http')" :src="skill.icon" :alt="skill.name" class="w-12 h-12 object-contain" />
                  <span v-else class="text-4xl">{{ skill.icon }}</span>
                </div>
                <div :class="['font-black text-lg', isDarkMode ? 'text-white' : 'text-slate-900']">{{ skill.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-32">
        <div class="container mx-auto px-6">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12">03. Projetos em Destaque</h2>
            <div class="grid md:grid-cols-2 gap-12">
              <div v-for="project in PROJECTS" :key="project.id" class="group">
                <div :class="['relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 transition-all duration-500', isDarkMode ? 'bg-zinc-800 shadow-none group-hover:shadow-white/5' : 'bg-slate-100 shadow-sm group-hover:shadow-2xl']">
                  <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span :class="['px-6 py-3 rounded-full font-bold text-sm', isDarkMode ? 'bg-white text-black' : 'bg-white text-slate-900']">Ver Detalhes</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="t in project.tech" :key="t" class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{{ t }}</span>
                </div>
                <h3 :class="['text-2xl font-bold mb-3', isDarkMode ? 'text-white' : 'text-slate-900']">{{ project.title }}</h3>
                <p :class="['leading-relaxed text-sm mb-6', isDarkMode ? 'text-zinc-400' : 'text-slate-500']">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" :class="['py-32 border-t', isDarkMode ? 'bg-zinc-900/10 border-zinc-800' : 'bg-slate-50/30 border-slate-50']">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12">04. Trajetória</h2>
            <div class="space-y-16">
              <div v-for="(exp, idx) in EXPERIENCES" :key="idx" class="grid md:grid-cols-3 gap-8">
                <div class="text-zinc-500 font-bold mono text-sm">{{ exp.period }}</div>
                <div class="md:col-span-2">
                  <h4 :class="['text-2xl font-bold mb-1', isDarkMode ? 'text-white' : 'text-slate-900']">{{ exp.role }}</h4>
                  <p class="text-blue-600 font-bold mb-6 text-lg">{{ exp.company }}</p>
                  <ul class="space-y-4">
                    <li v-for="(item, i) in exp.description" :key="i" :class="['text-[15px] leading-relaxed flex items-start', isDarkMode ? 'text-zinc-400' : 'text-slate-600']">
                      <span class="text-blue-500 mr-3 mt-1.5">•</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-40">
        <div class="container mx-auto px-6 text-center">
          <div class="max-w-xl mx-auto">
            <h2 :class="['text-6xl font-black mb-8 tracking-tighter', isDarkMode ? 'text-white' : 'text-slate-900']">Vamos criar algo novo?</h2>
            <p :class="['text-lg mb-12', isDarkMode ? 'text-zinc-400' : 'text-slate-500']">
              Estou sempre aberto a novos desafios e parcerias inovadoras. Entre em contato para uma consultoria ou café remoto.
            </p>
            <a 
              href="mailto:contact@devportfolio.com" 
              :class="['inline-flex items-center px-12 py-5 text-white font-black rounded-full transition-all shadow-2xl active:scale-95', isDarkMode ? 'bg-zinc-100 text-black hover:bg-white' : 'bg-blue-600 hover:bg-slate-900 shadow-blue-500/20']"
            >
              Enviar E-mail
              <svg class="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer :class="['py-20 border-t', isDarkMode ? 'bg-[#121212] border-zinc-800' : 'bg-white border-slate-50']">
      <div class="container mx-auto px-6 text-center">
        <div class="flex justify-center space-x-12 mb-12">
          <a href="#" :class="['font-bold text-sm tracking-widest uppercase transition-colors', isDarkMode ? 'text-zinc-500 hover:text-white' : 'text-slate-400 hover:text-blue-600']">GitHub</a>
          <a href="#" :class="['font-bold text-sm tracking-widest uppercase transition-colors', isDarkMode ? 'text-zinc-500 hover:text-white' : 'text-slate-400 hover:text-blue-600']">LinkedIn</a>
          <a href="#" :class="['font-bold text-sm tracking-widest uppercase transition-colors', isDarkMode ? 'text-zinc-500 hover:text-white' : 'text-slate-400 hover:text-blue-600']">Twitter</a>
        </div>
        <p class="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">&copy; 2024 Design e Código por Diego</p>
      </div>
    </footer>
  </div>
</template>
