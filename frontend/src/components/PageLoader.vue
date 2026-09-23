<script setup lang="ts">
import { usePageLoader } from '../composables/usePageLoader';

const { isLoading, progress, targetLabel, statusMessage } = usePageLoader();
</script>

<template>
  <div>
    <!-- Top Cyber Laser Progress Bar -->
    <div
      class="fixed top-0 left-0 h-[2.5px] z-[9999999] pointer-events-none transition-all duration-75 ease-out"
      :style="{
        width: progress + '%',
        opacity: progress > 0 ? 1 : 0,
        background: 'linear-gradient(90deg, var(--color-accent-deep) 0%, var(--color-accent) 65%, #F5F5F3 100%)',
        boxShadow: '0 0 16px var(--color-accent), 0 0 32px rgba(58, 90, 107, 0.8)'
      }"
    >
      <!-- Leading laser flare -->
      <div
        class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--text-inverse)] blur-[2px] opacity-95"
        style="box-shadow: 0 0 12px #F5F5F3, 0 0 24px var(--color-accent);"
      ></div>
    </div>

    <!-- Atmospheric Cyber HUD Center Modal / Transition Screen -->
    <Transition name="hud-fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-[999999] flex items-center justify-center pointer-events-none"
        style="background: rgba(10, 10, 10, 0.72); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
      >
        <!-- Horizontal Scanline Sweep -->
        <div class="absolute inset-0 cyber-scanline"></div>

        <!-- Ambient Center Glow behind HUD -->
        <div
          class="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
          style="background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);"
        ></div>

        <!-- Center Cyber HUD Box -->
        <div
          class="relative px-7 py-5 rounded-2xl border text-center select-none shadow-2xl flex flex-col items-center gap-3"
          style="
            background: var(--card-bg);
            border-color: var(--color-border-2);
            box-shadow: 0 24px 60px -10px rgba(0, 0, 0, 0.8), 0 0 35px rgba(58, 90, 107, 0.2);
            min-width: 300px;
            max-width: 90vw;
          "
        >
          <!-- Neon Top Highlight line -->
          <div
            class="absolute top-0 left-6 right-6 h-[1.5px]"
            style="background: linear-gradient(90deg, transparent, var(--color-accent), transparent);"
          ></div>

          <!-- Module Name with Pulse Dot -->
          <div class="flex items-center gap-2.5 mono text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold" style="color: var(--color-accent-text)">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
            </span>
            <span>{{ targetLabel }}</span>
          </div>

          <!-- Cyber Progress Track -->
          <div class="w-full bg-[var(--color-surface-2)] rounded-full h-2 overflow-hidden border border-[var(--color-border-2)] my-1 p-[1px]">
            <div
              class="h-full rounded-full transition-all duration-75 ease-out"
              :style="{
                width: progress + '%',
                background: 'linear-gradient(90deg, var(--color-accent-deep) 0%, var(--color-accent) 70%, #F5F5F3 100%)',
                boxShadow: '0 0 12px var(--color-accent)'
              }"
            ></div>
          </div>

          <!-- Subtext Info & Dynamic Stage Message -->
          <div class="mono text-[10px] uppercase tracking-[0.2em] flex items-center justify-between w-full" style="color: var(--color-text-muted)">
            <span class="flex items-center gap-1.5 font-medium">
              <span class="inline-block w-1 h-1 rounded-full bg-[var(--color-accent)]"></span>
              {{ statusMessage }}
            </span>
            <span class="font-bold text-xs" style="color: var(--color-text)">{{ progress }}%</span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.hud-fade-enter-active,
.hud-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.hud-fade-enter-from,
.hud-fade-leave-to {
  opacity: 0;
}

.cyber-scanline {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(58, 90, 107, 0.05) 51%,
    transparent 52%
  );
  background-size: 100% 4px;
  pointer-events: none;
}
</style>
