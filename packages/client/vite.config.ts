import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
});
