<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useTheme } from '../composables/useTheme';

const emit = defineEmits(['navClick']);

const { isDark, toggleTheme } = useTheme();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30;
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
    style="top: calc(0.85rem + env(safe-area-inset-top)); width: min(800px, calc(100% - 1.5rem));"
  >
    <nav
      class="flex items-center justify-between w-full px-4 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 rounded-full"
      :style="{
        background: isScrolled ? 'var(--color-navbar-bg-scrolled)' : 'var(--color-navbar-bg)',
        backdropFilter: 'blur(20px) saturate(190%)',
        WebkitBackdropFilter: 'blur(20px) saturate(190%)',
        border: isScrolled ? '1px solid var(--color-navbar-border-scrolled)' : '1px solid var(--color-navbar-border)',
        boxShadow: isScrolled ? 'var(--color-navbar-shadow-scrolled)' : 'var(--color-navbar-shadow)'
      }"
    >
      <!-- Navigation links com tipografia mono espaçada -->
      <div
        class="flex items-center gap-1.5 sm:gap-6 font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.28em] font-medium"
        style="color: var(--color-text-muted)"
      >
        <a
          href="#about"
          @click.prevent="emit('navClick', '#about')"
          class="px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--color-text)] hover:bg-sky-500/[0.08]"
        >
          Sobre
        </a>
        <a
          href="#skills"
          @click.prevent="emit('navClick', '#skills')"
          class="px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--color-text)] hover:bg-sky-500/[0.08]"
        >
          Stack
        </a>
        <a
          href="#projects"
          @click.prevent="emit('navClick', '#projects')"
          class="px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--color-text)] hover:bg-sky-500/[0.08]"
        >
          Projetos
        </a>
        <a
          href="#experience"
          @click.prevent="emit('navClick', '#experience')"
          class="px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--color-text)] hover:bg-sky-500/[0.08]"
        >
          Trajetória
        </a>
      </div>

      <!-- Right controls: Theme Toggle + Contact Button -->
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <!-- Theme Toggle Button (Modo Claro / Modo Escuro) -->
        <button
          type="button"
          @click="toggleTheme($event)"
          class="theme-toggle-btn w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer"
          :title="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
          :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
        >
          <!-- Sun Icon (shown in dark mode to switch to light) -->
          <svg
            v-if="isDark"
            class="w-4 h-4 transition-transform duration-300 hover:rotate-90"
            style="color: var(--color-accent)"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" stroke-width="2" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M8.34 17.66l-1.41 1.41m12.14 0l-1.41-1.41M8.34 6.34L6.93 4.93" />
          </svg>
          <!-- Moon Icon (shown in light mode to switch to dark) -->
          <svg
            v-else
            class="w-4 h-4 transition-transform duration-300 hover:-rotate-12"
            style="color: var(--color-accent-vibrant)"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <!-- Action Button com fonte mono e tracking espaçado -->
        <a
          href="#contact"
          @click.prevent="emit('navClick', '#contact')"
          class="btn-primary inline-flex items-center justify-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] font-bold px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full active:scale-95 transition-all shrink-0"
        >
          Contato
        </a>
      </div>
    </nav>
  </header>
</template>
