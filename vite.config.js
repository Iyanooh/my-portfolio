import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow all hosts, not just localhost
    allowedHosts: ['.up.railway.app'], // allow any Railway subdomain
    port: 5173,
  },
});
