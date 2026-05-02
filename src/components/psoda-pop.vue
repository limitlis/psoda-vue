<template>
    <span
        class="psoda"
        @click="open"
    >
        <slot></slot>
    </span>
    <dialog
        :class="['pop', props.snackbar ? 'snackbar' : '']"
        :id="uid"
        @close="emit('close', $event)"
    >
        <button
            v-if="!props.snackbar"
            class="close"
            :commandfor="uid"
            command="close"
            >&times;</button
        >
        <form
            method="dialog"
            class="dialog-inner"
        >
            <div class="dialog-content">
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
                            class="header"
                            v-html="props.popoverContent.title"
                        />
                        <div
                            class="content"
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
                        class="outline secondary"
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
                        :class="props.popoverContent?.actionClass"
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
    .pop {
        font-size: 1.2rem;
        box-sizing: border-box;
        display: flex;

        align-items: center;
        justify-content: center;

        border: var(--psoda-border);
        background: var(--psoda-background);
        color: var(--psoda-color);
        border-radius: 8px;
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

        .close {
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
    .pop.snackbar {
        top: auto;
        max-width: var(--psoda-snackbar-max-width, 60vw);
        min-height: 80px;
        overscroll-behavior: none;
        transform: translateY(100%);
        scale: 1;
        opacity: 1;
        position: fixed;
        bottom: 0;
        
        .dialog-inner {
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
        .pop:not(.snackbar) {
            transition-behavior: allow-discrete;
        }
        .pop:not(.snackbar)[open] {
            scale: 0;
            opacity: 0;
        }
        .pop.snackbar {
            transform: translateY(0);
            transition-behavior: allow-discrete;
        }
        .pop.snackbar[open] {
            transform: translateY(100%);
            scale: 1;
            opacity: 1;
        }
    }

    .dialog-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        height: stretch;
        width: 100%;
        width: stretch;

        .dialog-content {
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
