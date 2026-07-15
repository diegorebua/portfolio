<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useMediaQuery } from '@vueuse/core';

const props = withDefaults(defineProps<{
  isMobile?: boolean;
}>(), {
  isMobile: false
});

const isMediaMobile = useMediaQuery('(max-width: 768px)');
const isMobileMode = computed(() => props.isMobile || isMediaMobile.value);

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
    // No celular reduzimos o fator de parallax para um movimento mais suave e controlado
    const factor = isMobileMode.value ? 0.4 : 1;
    parallax1.value = { x: -deltaX * 0.045 * factor, y: -deltaY * 0.045 * factor };
    parallax2.value = { x: deltaX * 0.035 * factor, y: deltaY * 0.035 * factor };
    parallax3.value = { x: -deltaX * 0.05 * factor, y: deltaY * 0.05 * factor };
    parallax4.value = { x: deltaX * 0.04 * factor, y: -deltaY * 0.04 * factor };
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
    <!-- Blobs com efeito parallax 3D reativo (Ajustado no celular para um fundo escuro mais elegante e menos saturado de azul) -->
    <div 
      class="blob transition-transform duration-300 ease-out"
      :class="isMobileMode ? 'mobile-blob mobile-blob-1' : 'blob-1'"
      :style="{ transform: `translate3d(${parallax1.x}px, ${parallax1.y}px, 0)` }"
    ></div>
    <div 
      class="blob transition-transform duration-300 ease-out"
      :class="isMobileMode ? 'mobile-blob mobile-blob-2' : 'blob-2'"
      :style="{ transform: `translate3d(${parallax2.x}px, ${parallax2.y}px, 0)` }"
    ></div>
    <div 
      class="blob transition-transform duration-300 ease-out"
      :class="isMobileMode ? 'mobile-blob mobile-blob-3' : 'blob-3'"
      :style="{ transform: `translate3d(${parallax3.x}px, ${parallax3.y}px, 0)` }"
    ></div>
    <div 
      class="blob transition-transform duration-300 ease-out"
      :class="isMobileMode ? 'mobile-blob mobile-blob-4' : 'blob-4'"
      :style="{ transform: `translate3d(${parallax4.x}px, ${parallax4.y}px, 0)` }"
    ></div>

    <!-- Esfera interativa de luz azul/neon reativa ao cursor e toque da tela -->
    <div
      class="absolute rounded-full pointer-events-none transition-opacity duration-700 will-change-transform"
      :class="[
        isVisible ? (isMobileMode ? 'opacity-35' : 'opacity-30') : 'opacity-0',
        isMobileMode
          ? (isPressed ? 'w-[220px] h-[220px] bg-blue-500/80 opacity-50 blur-[90px]' : 'w-[180px] h-[180px] bg-indigo-600/70 opacity-35 blur-[80px]')
          : (isPressed ? 'w-[460px] h-[460px] bg-blue-500 opacity-45 blur-[160px]' : 'w-[400px] h-[400px] bg-indigo-600 blur-[160px]')
      ]"
      :style="{
        left: '0px',
        top: '0px',
        transform: `translate3d(${orbX - (isMobileMode ? (isPressed ? 110 : 90) : (isPressed ? 230 : 200))}px, ${orbY - (isMobileMode ? (isPressed ? 110 : 90) : (isPressed ? 230 : 200))}px, 0) scale(${isPressed ? 1.1 : 1})`,
        transition: 'width 0.4s ease, height 0.4s ease, background-color 0.4s ease, opacity 0.7s ease'
      }"
    ></div>
  </div>
</template>

<style scoped>
/* ===================== MOBILE SPECIFIC BLOBS ===================== */
/* No celular, restauramos a opacidade vibrante do azul (~0.5), mas dimensionamos os raios para 240-250px
   e concentramos em 2 áreas focais (topo e rodapé), mantendo o centro escuro e limpo. */
.mobile-blob {
  filter: blur(85px);
}

/* Área 1 — Azul vibrante concentrado e proporcionado no topo (Hero) */
.mobile-blob-1 {
  width: 250px;
  height: 250px;
  top: -40px;
  left: -50px;
  background: #1a3a8f;
  animation: drift-1 18s ease-in-out infinite;
  opacity: 0.50;
}

/* Área 2 — Oculto no celular para não cobrir o centro da tela */
.mobile-blob-2 {
  display: none;
}

/* Área 3 — Azul vibrante concentrado na parte inferior (Projetos/Rodapé) */
.mobile-blob-3 {
  width: 240px;
  height: 240px;
  bottom: -40px;
  right: -50px;
  left: auto;
  background: #0a2a6e;
  animation: drift-3 26s ease-in-out infinite;
  opacity: 0.46;
}

/* Área 4 — Oculto no celular para liberar o centro da tela */
.mobile-blob-4 {
  display: none;
}
</style>
