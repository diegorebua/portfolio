<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const phrases = [
  'Node.js · React · Vue.js',
  'TypeScript · Java · Docker',
  'PostgreSQL · AWS · REST',
];

let currentPhraseIndex = 0;
const displayedText = ref('');
const cursorVisible = ref(true);

let cursorInterval: ReturnType<typeof setInterval> | null = null;
let running = true;

function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

async function animate() {
  while (running) {
    const phrase = phrases[currentPhraseIndex];

    // Type in
    for (let i = 0; i <= phrase.length; i++) {
      if (!running) return;
      displayedText.value = phrase.substring(0, i);
      await sleep(70 + Math.random() * 30);
    }

    await sleep(3500);

    // Erase
    for (let i = phrase.length; i >= 0; i--) {
      if (!running) return;
      displayedText.value = phrase.substring(0, i);
      await sleep(40);
    }

    await sleep(300);
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
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
  <div class="mono inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm backdrop-blur-md transition-colors duration-300" style="background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08); color: var(--color-accent-glow)">
    <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
    <span style="color: var(--color-accent); font-weight: 600;">~/diego $</span>
    <span style="color: var(--color-text)">{{ displayedText }}</span>
    <span
      class="inline-block w-[2px] h-[1.1em] align-middle transition-opacity duration-75"
      :class="cursorVisible ? 'opacity-100' : 'opacity-0'"
      style="background: var(--color-accent)"
    ></span>
  </div>
</template>
