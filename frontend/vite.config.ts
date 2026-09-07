import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig(async () => {
  const plugins = [vue(), tailwindcss()];

  // Plugin do Cloudflare só no build de produção (requer binários nativos do workerd)
  if (isProd) {
    const { cloudflare } = await import('@cloudflare/vite-plugin');
    plugins.push(cloudflare());
  }

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: {
        clientPort: 3000
      },
      watch: {
        usePolling: true
      }
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  };
});
