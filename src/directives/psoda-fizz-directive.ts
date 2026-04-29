import { h, render, type DirectiveBinding, type Directive } from 'vue';
import psodaFizz from '../components/psoda-fizz.vue';
import type { PositionAreaValues } from '../components.d.ts';
export type PsodaFizzDirective = Directive<HTMLElement, string>;

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
        const container = document.createElement('span');

        el?.parentNode?.insertBefore(container, el);
        let tooltipValue: string | null = binding.value;
        if (el.tagName === 'IMG' && el.getAttribute('alt') && !binding.value) {
            tooltipValue = el.getAttribute('alt');
        }
        const position = binding?.arg as (typeof PositionAreaValues)[number];

        const renderedNode = h(
            psodaFizz,
            { position },
            {
                default: () =>
                    h('span', {
                        onVnodeMounted: (vnode) => {
                            if (vnode?.el) {
                                vnode.el.classList = el.classList;
                                vnode.el.replaceWith(el);
                            }
                        },
                    }),
                tooltip: () => tooltipValue,
            },
        );
        render(renderedNode, container);
        container.replaceWith(...container.childNodes);
    },
    unmounted(el: HTMLElement) {
        render(null, el);
    },
};
