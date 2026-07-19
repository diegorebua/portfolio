import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(() => {
  return {
    server: {
      port: 5173,
      host: '0.0.0.0',
      hmr: {
        clientPort: 7000
      },
      watch: {
        usePolling: true
      }
    },
    plugins: [vue(), tailwindcss(), cloudflare()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});
