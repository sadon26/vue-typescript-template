import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), EnvironmentPlugin([])],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist/app'
  },
  server: {
    port: 5190
  }
});
