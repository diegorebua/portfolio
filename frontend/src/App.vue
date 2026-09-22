<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { useTheme } from './composables/useTheme';
import InteractiveBackground from './components/InteractiveBackground.vue';
import Navbar from './components/Navbar.vue';
import PageLoader from './components/PageLoader.vue';
import Footer from './components/Footer.vue';
import CustomCursor from './components/CustomCursor.vue';

const { initTheme } = useTheme();
initTheme();

const isMobile = useMediaQuery('(max-width: 768px)');
</script>

<template>
  <div class="min-h-screen bg-transparent flex flex-col justify-between" style="color: var(--color-text)">
    <!-- Precision Custom Fluid Mouse Cursor -->
    <CustomCursor />

    <!-- Canvas Interactive Ambient Dots & Lighting -->
    <InteractiveBackground :is-mobile="isMobile" />

    <!-- Cyber Loading Indicator & HUD Modal -->
    <PageLoader />

    <!-- Unified Floating Navbar -->
    <Navbar />

    <!-- Main Page View with Fluid Transitions -->
    <main class="flex-grow">
      <router-view v-slot="{ Component, route }">
        <Transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>

    <!-- Unified Footer across all pages -->
    <Footer />
  </div>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
