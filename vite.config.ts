import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
    return {
      define: {
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      plugins: [react(), tailwindcss()],
      test: {
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
      },
    };
});
