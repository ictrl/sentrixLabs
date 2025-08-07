import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain: sentrixlabs.in
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
