import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite-plus';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
    base: '/psoda-vue/',
    staged: {
        '*': 'vp check --fix',
  },
    css: {
        lightningcss: {
            errorRecovery: true
            // Exclude specific features, e.g.,
            // skip polyfills for modern browsers
            // 0x1fffff skips all polyfills
            // exclude: 0x1fffff,
        },
    },
    fmt: {
        singleQuote: true,
    },
    lint: {
        plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'vue', 'vitest'],
        env: {
            browser: true,
        },
        categories: {
            correctness: 'error',
        },
        options: {
            typeAware: true,
            typeCheck: true,
        },
    },
    plugins: [vue(), vueDevTools()],
    resolve: {
        dedupe: ['vue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
