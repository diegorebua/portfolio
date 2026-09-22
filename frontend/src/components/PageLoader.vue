<script setup lang="ts">
import { usePageLoader } from '../composables/usePageLoader';

const { isLoading, progress, targetLabel } = usePageLoader();
</script>

<template>
  <div>
    <!-- Top Cyber Laser Progress Bar -->
    <div
      class="fixed top-0 left-0 h-[2.5px] z-[9999999] pointer-events-none transition-all duration-200 ease-out"
      :style="{
        width: progress + '%',
        opacity: progress > 0 ? 1 : 0,
        background: 'linear-gradient(90deg, var(--color-accent-deep) 0%, var(--color-accent) 70%, #ffffff 100%)',
        boxShadow: '0 0 14px var(--color-accent), 0 0 28px rgba(56, 189, 248, 0.7)'
      }"
    >
      <!-- Leading laser flare -->
      <div
        class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white blur-[2px] opacity-90"
        style="box-shadow: 0 0 12px #ffffff, 0 0 24px var(--color-accent);"
      ></div>
    </div>

    <!-- Atmospheric Cyber HUD Center Modal / Transition Screen -->
    <Transition name="hud-fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-none"
        style="background: rgba(4, 7, 17, 0.65); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
      >
        <!-- Horizontal Scanline Sweep -->
        <div class="absolute inset-0 cyber-scanline"></div>

        <!-- Center Cyber HUD Box -->
        <div
          class="relative px-6 py-4 rounded-2xl border text-center select-none shadow-2xl flex flex-col items-center gap-2.5"
          style="
            background: var(--card-bg);
            border-color: var(--color-border-2);
            box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.15);
            min-width: 280px;
            max-width: 90vw;
          "
        >
          <!-- Neon Top Highlight line -->
          <div
            class="absolute top-0 left-4 right-4 h-[1px]"
            style="background: linear-gradient(90deg, transparent, var(--color-accent), transparent);"
          ></div>

          <!-- Module Name and Status -->
          <div class="flex items-center gap-2 mono text-[10px] sm:text-xs uppercase tracking-[0.25em]" style="color: var(--color-accent)">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span>{{ targetLabel }}</span>
          </div>

          <!-- Cyber Progress Track -->
          <div class="w-full bg-black/40 rounded-full h-1.5 overflow-hidden border border-sky-500/20 my-1">
            <div
              class="h-full rounded-full transition-all duration-150 ease-out"
              :style="{
                width: progress + '%',
                background: 'linear-gradient(90deg, var(--color-accent-deep) 0%, var(--color-accent) 100%)',
                boxShadow: '0 0 10px var(--color-accent)'
              }"
            ></div>
          </div>

          <!-- Subtext info -->
          <div class="mono text-[9px] uppercase tracking-[0.2em] flex items-center justify-between w-full" style="color: var(--color-text-muted)">
            <span>INITIALIZING_VIEW</span>
            <span class="font-bold" style="color: var(--color-text)">{{ progress }}%</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.hud-fade-enter-active,
.hud-fade-leave-active {
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.hud-fade-enter-from,
.hud-fade-leave-to {
  opacity: 0;
}

.cyber-scanline {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(56, 189, 248, 0.04) 51%,
    transparent 52%
  );
  background-size: 100% 4px;
  pointer-events: none;
}
</style>
