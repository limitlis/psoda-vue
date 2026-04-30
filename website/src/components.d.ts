declare module '*?raw' {
    const content: string;
    export default content;
}
declare module '*.css' {
    const content: string;
    export default content;
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
