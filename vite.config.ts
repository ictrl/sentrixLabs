import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sentrixLabs/', // Repository name: sentrixLabs
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
