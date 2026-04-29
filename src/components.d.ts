// src/components.d.ts
import PsodaFizz from './psoda-fizz.vue';
import PsodaPop from './psoda-pop.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        PsodaFizz: typeof PsodaFizz;
        PsodaPop: typeof PsodaPop;
    }
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
    export interface GlobalComponents {
        PsodaFizz: typeof PsodaFizz;
        PsodaPop: typeof PsodaPop;
    }
}

declare module '*.css';

export const PositionAreaValues = [
    'top',
    'top center',
    'top span-left',
    'top span-right',

    'left',
    'left span-top',
    'left span-bottom',
    'left center',

    'right',
    'right span-top',
    'right span-bottom',
    'right center',

    'bottom',
    'bottom center',
    'bottom span-left',
    'bottom span-right',

    'top left',
    'top right',
    'bottom left',
    'bottom right',

    'block-start',
    'block-end',
] as const;
