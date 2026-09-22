<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const dotRef = ref<HTMLDivElement | null>(null);
const ringRef = ref<HTMLDivElement | null>(null);

let mouseX = -100;
let mouseY = -100;
let ringX = -100;
let ringY = -100;

let isHovering = false;
let isClicking = false;
let isVisible = false;
let isTextTarget = false;
let animationFrameId: number | null = null;

const INTERACTIVE_SELECTORS = [
  'a',
  'button',
  '[role="button"]',
  '.cursor-pointer',
  '.skill-card',
  '.project-card',
  '.project-media',
  '.bio-card',
  '.exp-item',
  '.photo-card',
  '.theme-toggle-btn',
  '.tech-badge',
  'label'
].join(',');

const TEXT_SELECTORS = 'input, textarea, select, [contenteditable="true"]';

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!isVisible) {
    isVisible = true;
    ringX = mouseX;
    ringY = mouseY;
  }

  const target = e.target as HTMLElement | null;
  if (target) {
    isTextTarget = Boolean(target.closest(TEXT_SELECTORS));
    isHovering = !isTextTarget && Boolean(target.closest(INTERACTIVE_SELECTORS));
  }
}

function onMouseDown() {
  isClicking = true;
}

function onMouseUp() {
  isClicking = false;
}

function onMouseLeave() {
  isVisible = false;
}

function onMouseEnter() {
  isVisible = true;
}

function render() {
  // Smooth lerp interpolation for natural trailing inertia
  const lerp = 0.18;
  ringX += (mouseX - ringX) * lerp;
  ringY += (mouseY - ringY) * lerp;

  if (dotRef.value && ringRef.value) {
    if (!isVisible || isTextTarget) {
      dotRef.value.style.opacity = '0';
      ringRef.value.style.opacity = '0';
    } else {
      dotRef.value.style.opacity = '1';
      ringRef.value.style.opacity = '1';

      // Pinpoint center precision dot
      const dotScale = isHovering ? 0.65 : isClicking ? 0.8 : 1;
      dotRef.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;

      // Dynamic reactive follower ring
      const ringScale = isClicking ? 0.75 : isHovering ? 1.55 : 1;
      ringRef.value.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
    }

    if (isHovering) {
      ringRef.value.classList.add('is-hovering');
    } else {
      ringRef.value.classList.remove('is-hovering');
    }

    if (isClicking) {
      ringRef.value.classList.add('is-clicking');
    } else {
      ringRef.value.classList.remove('is-clicking');
    }
  }

  animationFrameId = requestAnimationFrame(render);
}

onMounted(() => {
  // Only enable on desktop/laptops with a mouse or trackpad
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    animationFrameId = requestAnimationFrame(render);
  }
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mouseup', onMouseUp);
  document.removeEventListener('mouseleave', onMouseLeave);
  document.removeEventListener('mouseenter', onMouseEnter);

  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<template>
  <div class="custom-cursor-container" aria-hidden="true">
    <!-- Center Precision Dot -->
    <div ref="dotRef" class="cursor-dot"></div>

    <!-- Smooth Follower Ring -->
    <div ref="ringRef" class="cursor-ring"></div>
  </div>
</template>

<style scoped>
.custom-cursor-container {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999999;
  overflow: hidden;
}

@media (pointer: coarse) {
  .custom-cursor-container {
    display: none !important;
  }
}

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--color-accent, #38bdf8);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.85);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  will-change: transform, opacity;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: 1.5px solid rgba(56, 189, 248, 0.45);
  background: rgba(56, 189, 248, 0.02);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease, border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
  will-change: transform, opacity;
}

.cursor-ring.is-hovering {
  border-color: rgba(56, 189, 248, 0.9);
  background: rgba(56, 189, 248, 0.12);
  box-shadow: 0 0 22px rgba(56, 189, 248, 0.32), inset 0 0 10px rgba(56, 189, 248, 0.1);
}

.cursor-ring.is-clicking {
  border-color: var(--color-accent, #38bdf8);
  background: rgba(56, 189, 248, 0.25);
  box-shadow: 0 0 24px rgba(56, 189, 248, 0.5);
}
</style>
