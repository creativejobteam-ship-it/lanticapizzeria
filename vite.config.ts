import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Le dossier public contient les assets statiques (images) qui seront copiés à la racine
  publicDir: 'public',
  resolve: {
    alias: {
      // Alias @ pointant vers la racine du projet pour simplifier les imports
      '@': path.resolve('./'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});