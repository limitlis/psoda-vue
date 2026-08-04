import { h, render, type DirectiveBinding, type Directive, type Ref, type VNode } from 'vue';
import psodaFizz from '../components/psoda-fizz.vue';
import type { PositionAreaValues } from '../components.d.ts';
export type PsodaFizzDirective = Directive<HTMLElement, string>;

interface PsodaFizzExposed {
    anchorName: Ref<string>;
    uid: Ref<string>;
    fizz: (event?: Event) => void;
    pop: (event?: Event) => void;
}

interface PsodaFizzState {
    container: HTMLElement;
    figcaption: Element;
    events: Record<string, EventListener>;
}

const stateMap = new WeakMap<HTMLElement, PsodaFizzState>();

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        let tooltipValue: string | null = binding.value;
        if (el.tagName === 'IMG' && el.getAttribute('alt') && !binding.value) {
            tooltipValue = el.getAttribute('alt');
        }
        const position = binding?.arg as (typeof PositionAreaValues)[number];

        const container = document.createElement('span');
        const vnode: VNode = h(psodaFizz, { position, anchor: false }, { tooltip: () => tooltipValue });
        render(vnode, container);

        const figcaption = container.firstElementChild as Element;
        el.insertAdjacentElement('afterend', figcaption);

        const exposed = vnode.component?.exposed as unknown as PsodaFizzExposed;

        el.classList.add('psoda', 'psoda-anchor');
        el.style.anchorName = exposed.anchorName.value;
        el.setAttribute('aria-labelledby', exposed.uid.value);

        const events: Record<string, EventListener> = {
            mouseenter: exposed.fizz,
            mouseleave: exposed.pop,
            blur: exposed.pop,
        };
        if (el.hasAttribute('tabindex')) {
            events.keyup = exposed.fizz;
        }
        Object.entries(events).forEach(([eventName, handler]) => {
            el.addEventListener(eventName, handler);
        });

        stateMap.set(el, { container, figcaption, events });
    },
    unmounted(el: HTMLElement) {
        const state = stateMap.get(el);
        if (!state) {
            return;
        }

        Object.entries(state.events).forEach(([eventName, handler]) => {
            el.removeEventListener(eventName, handler);
        });

        render(null, state.container);
        state.figcaption.remove();

        el.classList.remove('psoda', 'psoda-anchor');
        el.style.removeProperty('anchor-name');
        el.removeAttribute('aria-labelledby');

        stateMap.delete(el);
    },
} as Directive<HTMLElement, string>;
