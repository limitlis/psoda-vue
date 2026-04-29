// @ts-nocheck
import { defineConfig } from 'vite-plus';

import Vue from '@vitejs/plugin-vue';
import dts from 'unplugin-dts/vite';
import Oxc from 'unplugin-oxc/vite';
export default defineConfig({
    plugins: [Vue() as any, dts({ processor: 'vue' }) as any, Oxc() as any],
    css: {
        lightningcss: {
            // Exclude specific features, e.g.,
            // skip polyfills for modern browsers
            // 0x1fffff skips all polyfills
            // exclude: 0x1fffff,
        },
    },
    staged: {
        '*.{js,ts,vue,css}': 'vp check --fix',
    },
    pack: {
        entry: {
            'vue/index': './src/index.ts',
        },
        plugins: [Vue({ isProduction: true })],
        platform: 'browser',
        dts: true,
        format: ['esm'],
        sourcemap: true,
        exports: true,
        deps: {
            neverBundle: ['vue'],
        },
    },
    lint: {
        ignorePatterns: [
            'dist/**',
            '**/*.test.ts', // Ignores all .test.ts files
            '**/*.spec.ts', // Ignores all .spec.ts files
            '**/__tests__/**', // Ignores tests folder
        ],
        options: {
            typeAware: true,
            typeCheck: true,
        },
        rules: {},
    },
    fmt: {
        printWidth: 120,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        singleAttributePerLine: true,
        vueIndentScriptAndStyle: true,
        trailingComma: 'all',
        htmlWhitespaceSensitivity: 'strict',
    },
    test: {
        include: ['tests/**/*.test.ts'],
        globals: true,
        environment: 'happy-dom',
        coverage: {
            enabled: false,
            provider: 'istanbul',
        },
    },
});
