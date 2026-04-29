import type { App, ObjectPlugin } from 'vue';
import PsodaFizz from './components/psoda-fizz.vue';
import PsodaFizzDirective from './directives/psoda-fizz-directive.ts';
import PsodaPop from './components/psoda-pop.vue';
import PsodaConfirmDirective from './directives/psoda-confirm-directive.ts';
import { useSnackbar } from './composables/useSnackbar.ts';
import './styles/index.css';

export default {
    install: (app: App, options = { prefix: 'psoda' }) => {
        app.component(`${options.prefix}-fizz`, PsodaFizz);
        app.component(`${options.prefix}-pop`, PsodaPop);
        app.directive(`${options.prefix}-fizz`, PsodaFizzDirective);
        app.directive(`${options.prefix}-confirm`, PsodaConfirmDirective);

        // aliases for convenience
        app.component(`${options.prefix}-tooltip`, PsodaFizz);
        app.component(`${options.prefix}-dialog`, PsodaPop);
        app.directive(`${options.prefix}-tooltip`, PsodaFizzDirective);
    },
} satisfies ObjectPlugin;

export { useSnackbar };
