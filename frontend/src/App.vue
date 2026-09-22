<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { useTheme } from './composables/useTheme'
import AppDesktop from './AppDesktop.vue'
import AppMobile from './AppMobile.vue'

const { initTheme } = useTheme()
initTheme()

// Se a tela for menor que 768px, renderiza o AppMobile
const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <AppMobile v-if="isMobile" />
  <AppDesktop v-else />
</template>
