<script setup lang="ts">
withDefaults(defineProps<{
  isMobile?: boolean;
}>(), {
  isMobile: false
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none -z-10 overflow-hidden" style="background-color: var(--color-bg); transition: background-color 0.4s ease;" aria-hidden="true">
    <!-- Camada de textura noise orgânica tipo filme / papel fosco -->
    <div class="absolute inset-0 bg-textured-noise opacity-[0.05]"></div>

    <!-- Iluminação atmosférica suave que evita cores chapadas em ambos os modos -->
    <div class="absolute inset-0 bg-ambient-glow"></div>

    <!-- Matriz tátil de micropontos limpa e uniforme -->
    <div class="absolute inset-0 bg-textured-dots opacity-40"></div>
  </div>
</template>

<style scoped>
.bg-textured-dots {
  background-image: radial-gradient(var(--dot-color) 1px, transparent 1px);
  background-size: 30px 30px;
}

.bg-ambient-glow {
  background: var(--ambient-bg-glow);
  transition: background 0.6s ease;
}
</style>
