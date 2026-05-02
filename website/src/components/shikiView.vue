<template>
    <div
        class=" is-relative is-size-5"
    >
        <div v-html="code"></div>
        <button class="button is-primaryis-outlined copy-btn" @click="copyCodeToClipboard">copy</button>
    </div>
</template>

<script setup>
    import { codeToHtml } from 'shiki';
    import { onMounted, ref, watch } from 'vue';
    import { useSnackbar } from 'psoda';
    const code = ref();
    const { input, lang } = defineProps({
        input: {
            type: String,
        },
        lang: String,
    });
    async function renderHtml() {
        code.value = await codeToHtml(input, {
            lang: lang ?? 'vue',
            themes: {
                light: 'one-light',
                dark: 'vitesse-dark',
            },
        });
    }
    async function copyCodeToClipboard(text) {
        try {
            await navigator.clipboard.writeText(input);
            useSnackbar({
                message: 'Snippet copied.'
            });
        } catch (err) {
            useSnackbar({
                message: 'Snippet failed to copy.'
            });
        }
    }
    onMounted(async () => {
        await renderHtml();
    });
    watch(
        () => input,
        async () => {
            await renderHtml();
        },
    );
</script>

<style>
.copy-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
}
    @media (prefers-color-scheme: dark) {
        .shiki,
        .shiki span {
            color: var(--shiki-dark) !important;
            background-color: var(--shiki-dark-bg) !important;
            /* Optional, if you also want font styles */
            font-style: var(--shiki-dark-font-style) !important;
            font-weight: var(--shiki-dark-font-weight) !important;
            text-decoration: var(--shiki-dark-text-decoration) !important;
        }
    }
</style>
