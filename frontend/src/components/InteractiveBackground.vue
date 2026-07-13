<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const orbX = ref(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
const orbY = ref(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
const isPressed = ref(false);
const isVisible = ref(false);

const parallax1 = ref({ x: 0, y: 0 });
const parallax2 = ref({ x: 0, y: 0 });
const parallax3 = ref({ x: 0, y: 0 });
const parallax4 = ref({ x: 0, y: 0 });

let targetX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
let targetY = typeof window !== 'undefined' ? window.innerHeight / 2 : 500;
let currentX = targetX;
let currentY = targetY;
let rafId: number | null = null;

const updateAnimation = () => {
  // Lerp suave (suavização magnética 60fps pro cursor/toque)
  currentX += (targetX - currentX) * 0.085;
  currentY += (targetY - currentY) * 0.085;

  orbX.value = currentX;
  orbY.value = currentY;

  if (typeof window !== 'undefined') {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = currentX - centerX;
    const deltaY = currentY - centerY;

    // Parallax 3D sutil para os 4 blobs de fundo reator
    parallax1.value = { x: -deltaX * 0.045, y: -deltaY * 0.045 };
    parallax2.value = { x: deltaX * 0.035, y: deltaY * 0.035 };
    parallax3.value = { x: -deltaX * 0.05, y: deltaY * 0.05 };
    parallax4.value = { x: deltaX * 0.04, y: -deltaY * 0.04 };
  }

  rafId = requestAnimationFrame(updateAnimation);
};

const handlePointerMove = (e: PointerEvent | MouseEvent) => {
  targetX = e.clientX;
  targetY = e.clientY;
  if (!isVisible.value) isVisible.value = true;
};

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches && e.touches.length > 0) {
    targetX = e.touches[0].clientX;
    targetY = e.touches[0].clientY;
    if (!isVisible.value) isVisible.value = true;
  }
};

const handleDown = () => { isPressed.value = true; };
const handleUp = () => { isPressed.value = false; };

onMounted(() => {
  if (typeof window !== 'undefined') {
    targetX = window.innerWidth / 2;
    targetY = window.innerHeight / 3;
    currentX = targetX;
    currentY = targetY;

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('pointerdown', handleDown, { passive: true });
    window.addEventListener('pointerup', handleUp, { passive: true });
    window.addEventListener('touchend', handleUp, { passive: true });

    rafId = requestAnimationFrame(updateAnimation);
    setTimeout(() => { isVisible.value = true; }, 100);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('pointerdown', handleDown);
    window.removeEventListener('pointerup', handleUp);
    window.removeEventListener('touchend', handleUp);
  }
  if (rafId !== null) cancelAnimationFrame(rafId);
});
</script>

<template>
  <div class="bg-light-leaks" aria-hidden="true">
    <!-- Blobs originais com efeito parallax 3D reativo -->
    <div 
      class="blob blob-1 transition-transform duration-300 ease-out" 
      :style="{ transform: `translate3d(${parallax1.x}px, ${parallax1.y}px, 0)` }"
    ></div>
    <div 
      class="blob blob-2 transition-transform duration-300 ease-out" 
      :style="{ transform: `translate3d(${parallax2.x}px, ${parallax2.y}px, 0)` }"
    ></div>
    <div 
      class="blob blob-3 transition-transform duration-300 ease-out" 
      :style="{ transform: `translate3d(${parallax3.x}px, ${parallax3.y}px, 0)` }"
    ></div>
    <div 
      class="blob blob-4 transition-transform duration-300 ease-out" 
      :style="{ transform: `translate3d(${parallax4.x}px, ${parallax4.y}px, 0)` }"
    ></div>

    <!-- Esfera interativa de luz azul/neon reativa ao cursor do mouse e toque da tela (Suave e Elegante) -->
    <div
      class="absolute rounded-full pointer-events-none transition-opacity duration-700 will-change-transform filter blur-[160px]"
      :class="[
        isVisible ? 'opacity-30' : 'opacity-0',
        isPressed ? 'w-[460px] h-[460px] bg-blue-500 opacity-45' : 'w-[400px] h-[400px] bg-indigo-600'
      ]"
      :style="{
        left: '0px',
        top: '0px',
        transform: `translate3d(${orbX - (isPressed ? 230 : 200)}px, ${orbY - (isPressed ? 230 : 200)}px, 0) scale(${isPressed ? 1.1 : 1})`,
        transition: 'width 0.4s ease, height 0.4s ease, background-color 0.4s ease, opacity 0.7s ease'
      }"
    ></div>
  </div>
</template>
