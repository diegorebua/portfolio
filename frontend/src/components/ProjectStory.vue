<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Project } from '../types';

const props = defineProps<{
  project: Project;
  index: number;
  total: number;
}>();

const images = computed(() => props.project.images?.length ? props.project.images : [props.project.image]);
const activeIndex = ref(0);
const activeImage = computed(() => images.value[activeIndex.value] ?? props.project.image);
</script>

<template>
  <article class="project-story" :aria-label="project.title">
    <div class="story-heading">
      <div>
        <p class="story-index mono">
          {{ String(index + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}
          <span class="story-index-divider" aria-hidden="true"></span>
          PROJETO EM PRODUÇÃO
        </p>
        <h2 class="story-title font-morganite uppercase">{{ project.title }}</h2>
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="story-link mono"
        :aria-label="`Visitar ${project.title} em nova aba`"
      >
        VER PROJETO <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="story-visual">
      <div class="story-backdrop" aria-hidden="true"></div>
      <Transition name="story-switch">
        <img
          :key="activeImage"
          :src="activeImage"
          :alt="images.length > 1
            ? `Captura ${activeIndex + 1} de ${images.length} de ${project.title}`
            : `Captura de tela de ${project.title}`"
          class="story-image"
          loading="lazy"
        />
      </Transition>
      <span class="story-image-count mono" aria-hidden="true">
        {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(images.length).padStart(2, '0') }}
      </span>
    </div>

    <div v-if="images.length > 1" class="story-gallery" role="group" :aria-label="`Capturas de ${project.title}`">
      <span class="story-gallery-label mono">CAPTURAS DO PROJETO</span>
      <div class="story-thumbnails">
        <button
          v-for="(src, imageIndex) in images"
          :key="src"
          type="button"
          class="story-thumbnail"
          :class="{ 'is-active': activeIndex === imageIndex }"
          :aria-label="`Mostrar captura ${imageIndex + 1} de ${project.title}`"
          :aria-pressed="activeIndex === imageIndex"
          @click="activeIndex = imageIndex"
        >
          <img :src="src" alt="" loading="lazy" />
        </button>
      </div>
    </div>

    <div class="story-details">
      <div>
        <span class="story-detail-label mono">SOBRE O PROJETO</span>
        <p class="story-description">{{ project.description }}</p>
      </div>
      <div>
        <span class="story-detail-label mono">TECNOLOGIAS</span>
        <div class="story-tech">
          <span v-for="technology in project.tech" :key="technology" class="mono">{{ technology }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-story {
  min-width: 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border-2);
  color: var(--color-text);
}

.story-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.story-index,
.story-detail-label,
.story-gallery-label {
  color: var(--color-accent);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.story-index {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.8rem;
}

.story-index-divider {
  width: 2.3rem;
  height: 1px;
  background: var(--color-border-2);
}

.story-title {
  max-width: 17ch;
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 700;
  line-height: 0.82;
  letter-spacing: 0.01em;
}

.story-link {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  flex-shrink: 0;
  margin-bottom: 0.4rem;
  padding: 0.8rem 1.1rem;
  border: 1px solid var(--color-border-2);
  border-radius: 999px;
  color: var(--color-text);
  background: var(--color-accent-sub);
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-decoration: none;
  transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.story-link:hover,
.story-link:focus-visible {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

.story-visual {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--card-border);
  border-radius: 1.5rem;
  background: var(--color-surface-2);
  box-shadow: var(--card-shadow);
}

.story-backdrop {
  position: absolute;
  inset: -6%;
  background: radial-gradient(circle at 55% 45%, var(--color-accent-sub), transparent 70%);
}

.story-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.story-switch-enter-active,
.story-switch-leave-active {
  transition: opacity 0.35s ease;
}

.story-switch-enter-from,
.story-switch-leave-to {
  opacity: 0;
}

.story-image-count {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: 0.5rem 0.65rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  background: var(--color-navbar-bg);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  backdrop-filter: blur(10px);
}

.story-gallery {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.9rem;
}

.story-thumbnails {
  display: flex;
  gap: 0.55rem;
}

.story-thumbnail {
  width: clamp(3.2rem, 8vw, 6.5rem);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--card-border);
  border-radius: 0.45rem;
  background: var(--color-surface-2);
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.25s ease, border-color 0.25s ease;
}

.story-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.story-thumbnail:hover,
.story-thumbnail:focus-visible,
.story-thumbnail.is-active {
  border-color: var(--color-accent);
  opacity: 1;
}

.story-details {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 3.5rem;
  margin-top: 2.25rem;
}

.story-detail-label {
  display: block;
  margin-bottom: 0.85rem;
}

.story-description {
  max-width: 65ch;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.75;
}

.story-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.story-tech span {
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--card-border);
  border-radius: 0.5rem;
  color: var(--color-accent-ice);
  background: var(--color-accent-sub);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 767px) {
  .story-heading {
    align-items: start;
    flex-direction: column;
    gap: 1.25rem;
  }

  .story-title {
    font-size: clamp(3.8rem, 15vw, 6rem);
  }

  .story-details {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .story-gallery {
    align-items: start;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .story-switch-enter-active,
  .story-switch-leave-active {
    transition: none;
  }
}
</style>
