import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const rootDir = resolve(__dirname, './src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(rootDir),
      },
      {
        find: '$assets',
        replacement: resolve(rootDir, 'assets'),
      },
    ],
  },
});
