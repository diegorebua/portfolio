
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  isDarkMode: boolean;
}>();

const emit = defineEmits(['toggleDarkMode', 'navClick']);

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled ? (isDarkMode ? 'bg-black/40 backdrop-blur-md py-3 shadow-lg border-b border-zinc-800' : 'glass-light py-3 shadow-sm border-b') : 'bg-transparent py-6'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#" :class="['text-xl font-bold mono tracking-tighter', isDarkMode ? 'text-white' : 'text-slate-900']">
        <span class="text-blue-600">&lt;</span>Dev.FullStack<span class="text-blue-600"> /&gt;</span>
      </a>
      <div class="flex items-center space-x-8">
        <div class="hidden md:flex space-x-10 text-[13px] font-semibold uppercase tracking-widest text-zinc-500">
          <a href="#about" @click.prevent="emit('navClick', '#about')" :class="['transition-colors', isDarkMode ? 'hover:text-white' : 'hover:text-blue-600']">Sobre</a>
          <a href="#skills" @click.prevent="emit('navClick', '#skills')" :class="['transition-colors', isDarkMode ? 'hover:text-white' : 'hover:text-blue-600']">Habilidades</a>
          <a href="#projects" @click.prevent="emit('navClick', '#projects')" :class="['transition-colors', isDarkMode ? 'hover:text-white' : 'hover:text-blue-600']">Projetos</a>
          <a href="#experience" @click.prevent="emit('navClick', '#experience')" :class="['transition-colors', isDarkMode ? 'hover:text-white' : 'hover:text-blue-600']">Experiência</a>
        </div>

        <div class="flex items-center space-x-4">
          <button
            @click="emit('toggleDarkMode')"
            :class="['p-2 rounded-full transition-all', isDarkMode ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
            aria-label="Toggle Dark Mode"
          >
            <template v-if="isDarkMode">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
            </template>
            <template v-else>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            </template>
          </button>
          <a href="#contact" @click.prevent="emit('navClick', '#contact')" :class="['px-5 py-2 rounded-full font-bold text-xs uppercase transition-all', isDarkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-slate-900 text-white hover:bg-blue-600']">Contato</a>
        </div>
      </div>
    </div>
  </nav>
</template>
