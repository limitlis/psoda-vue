<template>
    <span
        class="psoda"
        @click="open"
    >
        <slot></slot>
    </span>
    <dialog
        :class="['psoda-pop', props.snackbar ? 'psoda-snackbar' : '']"
        :id="uid"
        @close="emit('close', $event)"
    >
        <button
            v-if="!props.snackbar"
            class="psoda-close"
            :commandfor="uid"
            command="close"
            >&times;</button
        >
        <form
            method="dialog"
            class="psoda-dialog-inner"
        >
            <div class="psoda-dialog-content">
                <slot
                    name="content"
                    :close="close"
                >
                    <template v-if="props.confirm">
                        {{ confirm.message }}
                    </template>
                    <template v-else-if="props.popoverContent">
                        <div
                            v-if="props.popoverContent?.title"
                            class="psoda-pop-header"
                            v-html="props.popoverContent.title"
                        />
                        <div
                            class="psoda-pop-content"
                            v-html="props.popoverContent.body"
                        />
                    </template>
                </slot>
            </div>
            <footer>
                <slot
                    v-if="!props.snackbar"
                    name="cancel"
                    formmethod="dialog"
                    value="cancel"
                >
                    <button
                        class="psoda-btn psoda-btn-secondary"
                        value="cancel"
                        formmethod="dialog"
                        >Cancel</button
                    >
                </slot>
                <slot
                    name="confirm"
                    formmethod="dialog"
                    value="confirm"
                >
                    <button
                        value="confirm"
                        :class="props.popoverContent?.actionClass ?? 'psoda-btn psoda-btn-primary'"
                        formmethod="dialog"
                    >
                        {{ props?.popoverContent?.actionText ?? 'Confirm' }}
                    </button>
                </slot>
            </footer>
        </form>
    </dialog>
</template>

<script setup lang="ts">
    import { usePsoda } from '../composables/usePsoda.ts';
    import type { PositionAreaValues } from '../components.d.ts';

    type PositionArea = (typeof PositionAreaValues)[number];

    const emit = defineEmits(['close', 'cancel', 'open', 'toggle', 'confirm', 'onOpen']);

    interface psodaProps {
        popover?: 'auto' | 'manual' | 'hint';
        position?: PositionArea;
        confirm?: any;
        snackbar?: any;
        popoverContent?: { title?: string; body: string; actionText?: string; actionClass?: string };
    }

    const props = withDefaults(defineProps<psodaProps>(), {
        popover: 'auto',
        position: 'top center',
    });
    const { uid, open, openSnackbar, close } = usePsoda();
    defineExpose({ uid, open, openSnackbar, close });
</script>

<style>
    /*
        Deliberately NOT wrapped in @layer: this is structural/functional CSS
        (dialog layout, footer button placement, close-button position) that
        the component depends on to render correctly. Cascade layers make
        sense for theme-able opinions, but structural rules need to keep
        their normal priority so a host page's own generic element resets
        (e.g. Bulma/Bootstrap/Tailwind resetting bare button/footer/header)
        can't silently break the component's layout.
    */
    .psoda-pop {
        all: revert;
        font-size: 1.2rem;
        box-sizing: border-box;
        display: flex;

        align-items: center;
        justify-content: center;

        border: var(--psoda-border);
        background: var(--psoda-background);
        color: var(--psoda-color);
        border-radius: var(--psoda-border-radius, 9px);
        padding: 0.5rem 0.7rem;
        filter: drop-shadow(0px 0px 2px light-dark(rgba(0, 0, 0, 0.4), rgba(120, 120, 120, 0.4)));

        opacity: 0;
        scale: 0;

        inline-size: 88vw;
        min-width: unset;
        max-width: var(--psoda-pop-max-width, 400px);
        max-height: max-content;
        min-height: 180px;

        overscroll-behavior: contain;
        transition-behavior: allow-discrete;

        transition:
            opacity 0.25s,
            scale 0.25s cubic-bezier(0.11, 1.06, 0.72, 1.41),
            overlay 0.25s allow-discrete,
            display 0.4s allow-discrete;

        &[open] {
            scale: 1;
            opacity: 1;
        }

        .psoda-close {
            all: revert;
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 0;
            background: transparent;
            border: 0;
            font-size: 1.5rem;
            border-top-right-radius: var(--psoda-border-radius, 9px);
        }

        &::backdrop {
            background: rgba(0, 0, 0, 0.5);
            overflow: hidden;
            /* Needed to make this a scroll container */
            overscroll-behavior: contain;
        }
    }
    .psoda-pop.psoda-snackbar {
        top: auto;
        max-width: var(--psoda-snackbar-max-width, 60vw);
        min-height: 80px;
        overscroll-behavior: none;
        transform: translateY(100%);
        scale: 1;
        opacity: 1;
        position: fixed;
        bottom: 0;

        .psoda-dialog-inner {
            flex-direction: row;
            footer {
                align-self: center;
            }
        }
        &::backdrop {
            display: none;
        }
        transition: transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &[open] {
            transform: translateY(-10px);
        }
    }

    @starting-style {
        .psoda-pop:not(.psoda-snackbar) {
            transition-behavior: allow-discrete;
        }
        .psoda-pop:not(.psoda-snackbar)[open] {
            scale: 0;
            opacity: 0;
        }
        .psoda-pop.psoda-snackbar {
            transform: translateY(0);
            transition-behavior: allow-discrete;
        }
        .psoda-pop.psoda-snackbar[open] {
            transform: translateY(100%);
            scale: 1;
            opacity: 1;
        }
    }

    .psoda-dialog-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        height: stretch;
        width: 100%;
        width: stretch;

        .psoda-dialog-content {
            flex: 1 0;
            height: -webkit-fill-available;
            height: stretch;
            align-content: center;
            align-self: center;
        }

        footer,
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
