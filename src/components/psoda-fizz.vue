<template>
    <figure
        class="psoda anchor"
        :style="{ anchorName: anchorName }"
        v-on="computedEvents"
        :popovertarget="anchorName"
        :aria-labelledby="uid"
        v-bind="attrs"
    >
        <slot>Trigger</slot>
    </figure>
    <figcaption
        class="fizz"
        :id="uid"
        :popover="modelValue === true ? 'manual' : props.popover"
        :style="{ positionAnchor: anchorName, positionArea: position }"
        role="tooltip"
        :data-position="position"
    >
        <slot name="tooltip"></slot>
    </figcaption>
</template>

<script setup lang="ts">
    import { computed, useAttrs } from 'vue';
    import type { PositionAreaValues } from '../components.d.ts';

    import { usePsoda } from '../composables/usePsoda.ts';

    type PositionArea = (typeof PositionAreaValues)[number];
    defineOptions({
        inheritAttrs: false,
    });
    const modelValue = defineModel<boolean>({
        type: Boolean,
    });
    interface psodaFizzProps {
        popover?: 'auto' | 'manual' | 'hint';
        popoverOptions?: any;
        position?: PositionArea;
    }

    const attrs = useAttrs();
    const emit = defineEmits(['close']);
    const { anchorName, uid } = usePsoda();

    const props = withDefaults(defineProps<psodaFizzProps>(), {
        popover: 'auto',
        position: 'top',
    });

    function fizz(_event?: Event) {
        const popTarget = (window as any)[uid.value] as HTMLElement;
        if (popTarget) {
            popTarget.showPopover();
        }
    }
    function pop(_event?: Event) {
        const popTarget = (window as any)[uid.value] as HTMLElement;
        if (popTarget) {
            popTarget.hidePopover();
        }
        emit('close');
    }
    const computedEvents = computed(() => {
        let events = {
            mouseenter(event: MouseEvent) {
                fizz(event);
            },
            mouseleave(event: MouseEvent) {
                pop(event);
            },
            blur(event: MouseEvent) {
                pop(event);
            },
        };
        if (Object.prototype.hasOwnProperty.call(attrs, 'tabindex')) {
            Object.assign(events, {
                keyup(event: KeyboardEvent) {
                    fizz(event as Event);
                },
            });
        }
        return events;
    });
</script>

<style>
    [popover].fizz {
        all: revert;
        --tether-offset: 0px;
        --tether-size: 8px;
        font-size: 1rem;
        isolation: isolate;
        container-type: anchored;
        align-content: center;
        position-try-order: most-height, most-width;
        position-visibility: no-overflow;
        box-sizing: border-box;
        margin: 0 0 var(--tether-size) 0;
        clip-path: inset(var(--tether-offset)) margin-box;

        backface-visibility: hidden;
        overflow: visible;
        min-width: 8ch;
        max-width: 30ch;

        background: var(--psoda-background, black);
        color: var(--psoda-color, white);
        border: var(--psoda-border);
        padding: 0.7rem;
        padding-bottom: calc(initial + 0.1px);
        border-radius: 6px;
        box-shadow: none;
        outline: 2px solid transparent;
        &::before,
        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            background: inherit;
        }
        &::before {
            left: 50%;
            transform: translateX(-50%);
            width: calc(var(--tether-size) * 2);
            height: calc(100% + var(--tether-size) * 2);
            top: calc(var(--tether-size) * -1);
            clip-path: polygon(
                0 var(--tether-size),
                50% 0,
                100% var(--tether-size),
                100% calc(100% - var(--tether-size)),
                50% 100%,
                0 calc(100% - var(--tether-size))
            );
        }

        &::after {
            top: 50%;
            transform: translateY(-50%);
            height: calc(var(--tether-size) * 2);
            width: calc(100% + var(--tether-size) * 2);
            left: calc(var(--tether-size) * -1);
            clip-path: polygon(
                var(--tether-size) 0,
                calc(100% - var(--tether-size)) 0,
                100% 50%,
                calc(100% - var(--tether-size)) 100%,
                var(--tether-size) 100%,
                0 50%
            );
        }

        &[data-position='top'] {
            &::after {
                display: none;
            }
            &::before {
                height: calc(100% + var(--tether-size) * 1);
                top: calc(var(--tether-size) * 0);
                background: linear-gradient(
                    to top,
                    var(--psoda-border-color) var(--tether-size),
                    transparent var(--tether-size)
                );
            }
            position-try-fallbacks: flip-block;

            @container anchored(fallback: flip-block) {
                position-area: bottom;
                &::before {
                    top: calc(var(--tether-size) * -1);
                    background: linear-gradient(
                        to bottom,
                        var(--psoda-border-color) var(--tether-size),
                        transparent var(--tether-size)
                    );
                }
            }
        }
        &[data-position='bottom'] {
            position-try-fallbacks: flip-block;
            margin: var(--tether-size) 0 0 0;
            &::after {
                display: none;
            }
            &::before {
                height: calc(100% + var(--tether-size) * 0);
                top: calc(var(--tether-size) * -1);
                background: linear-gradient(
                    to bottom,
                    var(--psoda-border-color) var(--tether-size),
                    transparent var(--tether-size)
                );
            }
            @container anchored(fallback: flip-block) {
                position-area: top;
                &::before {
                    top: calc(var(--tether-size) * 1);
                    background: linear-gradient(
                        to top,
                        var(--psoda-border-color) var(--tether-size),
                        transparent var(--tether-size)
                    );
                }
            }
        }

        &[data-position='left'] {
            position-try-fallbacks: flip-inline;
            margin: 0 var(--tether-size) 0 0;
            &::before {
                display: none;
            }
            &::after {
                width: calc(100% + var(--tether-size) * 1);
                left: calc(var(--tether-size) * 0);
                background: linear-gradient(
                    to left,
                    var(--psoda-border-color) var(--tether-size),
                    transparent var(--tether-size)
                );
            }
            @container anchored(fallback: flip-inline) {
                position-area: right;
                margin: 0 0 0 var(--tether-size);
                &::after {
                    left: calc(var(--tether-size) * -1);
                    background: linear-gradient(
                        to right,
                        var(--psoda-border-color) var(--tether-size),
                        transparent var(--tether-size)
                    );
                }
            }
        }

        &[data-position='right'] {
            position-try-fallbacks: flip-inline;
            margin: 0 0 0 var(--tether-size);
            &::before {
                display: none;
            }
            &::after {
                width: calc(100% + var(--tether-size) * 1);
                left: calc(var(--tether-size) * -1);
                background: linear-gradient(
                    to right,
                    var(--psoda-border-color) var(--tether-size),
                    transparent var(--tether-size)
                );
            }
            @container anchored(fallback: flip-inline) {
                position-area: left;
                /* margin: 0 var(--tether-size) 0 0; */
                &::after {
                    left: calc(var(--tether-size) * 0);
                    background: linear-gradient(
                        to left,
                        var(--psoda-border-color) var(--tether-size),
                        transparent var(--tether-size)
                    );
                }
            }
        }
    }

    @starting-style {
        .fizz {
            &:popover-open {
                scale: 0;
                opacity: 0;
            }
        }
    }
</style>
