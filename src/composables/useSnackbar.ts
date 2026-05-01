import { h, render } from 'vue';
import psodaPop from '../components/psoda-pop.vue';
const DEFAULT_SNACKBAR_CLOSE_DELAY = 3000;

export function useSnackbar({
    message = '',
    title = '',
    actionText = 'ok',
    actionClass = '',
    autoCloseDelay = DEFAULT_SNACKBAR_CLOSE_DELAY,
}) {
    if (!message.length) {
        throw new Error('message is required');
    }

    const vnode = h(
        psodaPop,
        {
            snackbar: true,
            popoverContent: {
                body: message,
                title,
                actionText,
                actionClass,
            },
            onClose() {
                render(null, document.body);
            },
        },
        {
            cancel: () => '',
        },
    );
    render(vnode, document.body);
    // Auto Open
    vnode?.component?.exposed?.open();
    if (autoCloseDelay === null || autoCloseDelay > -1) {
        setTimeout(() => {
            vnode?.component?.exposed?.close();
        }, autoCloseDelay ?? DEFAULT_SNACKBAR_CLOSE_DELAY);
    }

    return vnode?.component?.exposed;
}
