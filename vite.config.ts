import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Include your env variables in the array below using the name from the .env file by adding them as strings
    // always prefixed with 'VITE_' like 'VITE-VUE-APP-${YOUR STRING}' e.g EnvironmentPlugin(['VITE-VUE-APP-API-BASE-URL'])
    EnvironmentPlugin([])
  ],
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
