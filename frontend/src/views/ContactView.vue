<script setup lang="ts">
import { ref } from 'vue';
import { EMAIL } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

useGsapMotion();

const copied = ref(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch (e) {
    window.location.href = `mailto:${EMAIL}`;
  }
};
</script>

<template>
  <div class="relative min-h-[calc(100vh-80px)] pt-32 pb-24 flex flex-col justify-center">
    <!-- Ambient Corner Aura -->
    <div
      class="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl"
      style="background: radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.08) 60%, transparent 80%);"
    ></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full my-auto">
      <div class="max-w-3xl">
        <!-- Section Badge -->
        <div class="tech-badge mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          Comunicação // Contato
        </div>

        <!-- Big Heading -->
        <h1 class="font-morganite uppercase font-bold tracking-[0.02em] text-6xl sm:text-8xl md:text-9xl leading-[0.85] mb-8">
          Vamos criar<br/>
          <span class="text-gradient-blue">algo novo?</span>
        </h1>

        <p class="text-base sm:text-lg md:text-xl leading-[1.8] mb-12" style="color: var(--color-text-muted)">
          Estou sempre aberto a novos desafios técnicos, consultorias e parcerias inovadoras. Entre em contato diretamente para bater um papo ou tomar um café remoto.
        </p>

        <!-- Email & Direct Action Box -->
        <div class="p-6 sm:p-8 rounded-3xl border mb-14" style="background: var(--card-bg); border-color: var(--card-border-2); box-shadow: var(--card-shadow)">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span class="mono text-[10px] uppercase tracking-widest text-sky-400 font-bold block mb-1.5">Endereço Principal</span>
              <p class="mono text-base sm:text-xl font-bold select-all" style="color: var(--color-text)">
                {{ EMAIL }}
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <!-- One-click copy email button -->
              <button
                type="button"
                @click="copyEmail"
                class="btn-outline px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer active:scale-95"
                style="border: 1px solid var(--card-border); color: var(--color-text)"
              >
                <svg v-if="!copied" class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                <svg v-else class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>{{ copied ? 'Copiado!' : 'Copiar' }}</span>
              </button>

              <!-- Mailto button -->
              <a
                :href="'mailto:' + EMAIL"
                class="btn-primary inline-flex items-center gap-2.5 px-6 py-3 font-bold rounded-full text-xs uppercase tracking-wider active:scale-95"
              >
                Abrir E-mail
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Social Network Cards -->
        <div>
          <span class="mono text-xs uppercase tracking-[0.25em] mb-6 block" style="color: var(--color-accent)">
            Canais & Redes
          </span>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <!-- GitHub -->
            <a
              href="https://github.com/diegorebua"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex items-center justify-between"
              style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-sky-500/20" style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent)">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm group-hover:text-sky-400 transition-colors">GitHub</h4>
                  <p class="mono text-[10px]" style="color: var(--color-text-muted)">@diegorebua</p>
                </div>
              </div>
              <span class="text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/diegorebu%C3%A1/"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex items-center justify-between"
              style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-sky-500/20" style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent)">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm group-hover:text-sky-400 transition-colors">LinkedIn</h4>
                  <p class="mono text-[10px]" style="color: var(--color-text-muted)">/in/diegorebua</p>
                </div>
              </div>
              <span class="text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>

            <!-- Instagram -->
            <a
              href="https://www.instagram.com/diegorebua/"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex items-center justify-between"
              style="background: var(--card-bg); border-color: var(--card-border); box-shadow: var(--card-shadow)"
            >
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:bg-sky-500/20" style="background: var(--color-accent-sub); border: 1px solid var(--card-border); color: var(--color-accent)">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clip-rule="evenodd" /></svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm group-hover:text-sky-400 transition-colors">Instagram</h4>
                  <p class="mono text-[10px]" style="color: var(--color-text-muted)">@diegorebua</p>
                </div>
              </div>
              <span class="text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
