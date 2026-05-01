import { h, render, type DirectiveBinding } from 'vue';
import psodaPop from '../components/psoda-pop.vue';

export default {
    created(el: HTMLElement, binding: DirectiveBinding) {
        const startingLabel = el.innerText;
        const message = binding.value ?? 'Confirm action?';
        let renderedNode = h(
            psodaPop,
            {
                confirm: {
                    message,
                },
            },
            {
                default: () => startingLabel,
            },
        );
        const defaultBindingsByTagName = new Map(
            Object.entries({
                FORM: ['submit'],
                BUTTON: ['click'],
                A: ['click'],
            }),
        );

        const bindings = binding?.arg?.split(':') ?? defaultBindingsByTagName.get(el.tagName) ?? ['click'];

        bindings.forEach((eventName: string) => {
            el.setAttribute('__confirmEventName', eventName);

            const handler = (e: Event | CustomEvent) => {
                if ((e as CustomEvent)?.detail?.CONFIRMED) {
                    return;
                }
                if (binding?.modifiers?.prevent) {
                    e.preventDefault();
                }
                e.stopImmediatePropagation();

                if ((renderedNode?.component as any)?.exposed?.uid.value) {
                    const dialog = (window as any)[
                        (renderedNode.component as any).exposed.uid.value as string
                    ] as HTMLDialogElement;
                    dialog.showModal();
                    dialog.onclose = async () => {
                        if (dialog.returnValue === 'confirm') {
                            await Promise.all(
                                dialog.getAnimations().map(anim => anim.finished)
                            ).finally(() => {
                                const details = {
                                    ...('detail' in e && { detail: (e as any).detail }),
                                };
                                const newEvent = new CustomEvent(e.type, {
                                    bubbles: true,
                                    cancelable: true,
                                    detail: { ...details, CONFIRMED: true },
                                }) as Event;
    
                                el.dispatchEvent(newEvent);
                            });
                        }
                    };
                }
            };
            el.addEventListener(eventName, handler, true);
            (el as any).__confirmHandler = handler;
        });
        el.innerHTML = '';
        render(renderedNode, el);
    },

    beforeUnmount(el: HTMLElement) {
        const eventName = el.getAttribute('__confirmEventName');
        if (eventName && (el as any).__confirmHandler) {
            el.removeEventListener(eventName, (el as any).__confirmHandler, true);
        }
    },
};
