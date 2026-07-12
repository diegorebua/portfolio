<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['navClick']);

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
    isScrolled ? 'bg-black/40 backdrop-blur-md py-3 shadow-lg border-b border-zinc-800' : 'bg-transparent py-6'
  ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#" class="text-xl font-bold mono tracking-tighter text-white">
        <span class="text-blue-600">&lt;</span>Dev.FullStack<span class="text-blue-600"> /&gt;</span>
      </a>
      <div class="flex items-center space-x-8">
        <div class="hidden md:flex space-x-10 text-[13px] font-semibold uppercase tracking-widest text-zinc-500">
          <a href="#about" @click.prevent="emit('navClick', '#about')" class="transition-colors hover:text-white">Sobre</a>
          <a href="#skills" @click.prevent="emit('navClick', '#skills')" class="transition-colors hover:text-white">Habilidades</a>
          <a href="#projects" @click.prevent="emit('navClick', '#projects')" class="transition-colors hover:text-white">Projetos</a>
          <a href="#experience" @click.prevent="emit('navClick', '#experience')" class="transition-colors hover:text-white">Experiência</a>
        </div>

        <div class="flex items-center space-x-4">
          <a href="#contact" @click.prevent="emit('navClick', '#contact')" class="px-5 py-2 rounded-full font-bold text-xs uppercase transition-all bg-white text-black hover:bg-zinc-200">Contato</a>
        </div>
      </div>
    </div>
  </nav>
</template>
