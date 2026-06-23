<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

defineProps<{
  isDarkMode: boolean;
}>();

const phrases = [
  'Java · Spring Boot · Microservices',
  'Node.js · NestJS · Express',
  'React · Next.js · TypeScript',
  'Vue 3 · Composition API · Vite',
  'PostgreSQL · Redis · Docker',
];

const displayedText = ref('');
const cursorVisible = ref(true);

let cursorInterval: ReturnType<typeof setInterval> | null = null;
let running = true;

function sleep(ms: number) {
  return new Promise<void>(resolve => {
    const id = setTimeout(resolve, ms);
    // store for cleanup is handled by the running flag check
    void id;
  });
}

async function animate() {
  let phraseIndex = 0;

  while (running) {
    const phrase = phrases[phraseIndex % phrases.length];

    // Type forward
    for (let i = 0; i <= phrase.length; i++) {
      if (!running) return;
      displayedText.value = phrase.substring(0, i);
      await sleep(55 + Math.random() * 30);
    }

    // Pause at full text
    await sleep(1800);

    // Erase backward
    for (let i = phrase.length; i >= 0; i--) {
      if (!running) return;
      displayedText.value = phrase.substring(0, i);
      await sleep(30);
    }

    await sleep(300);
    phraseIndex++;
  }
}

onMounted(() => {
  cursorInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 530);
  animate();
});

onUnmounted(() => {
  running = false;
  if (cursorInterval) clearInterval(cursorInterval);
});
</script>

<template>
  <p :class="[
    'max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-10 md:mb-12 font-medium leading-relaxed',
    isDarkMode ? 'text-zinc-400' : 'text-slate-500'
  ]">
    Desenvolvendo ambientes tecnológicos de alta performance com
    <span :class="[isDarkMode ? 'text-white' : 'text-slate-900', 'font-bold']">{{ displayedText }}</span><span
      class="inline-block w-[2px] h-[1em] align-middle ml-[1px] translate-y-[-1px] transition-opacity duration-75"
      :class="[
        cursorVisible ? 'opacity-100' : 'opacity-0',
        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
      ]"
    ></span>
  </p>
</template>
