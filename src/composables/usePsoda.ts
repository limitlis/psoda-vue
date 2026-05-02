import { ref, computed } from 'vue';

export function usePsoda() {
    const uid = ref<string>(crypto.randomUUID().substring(0, 5));
    const anchorName = computed(() => {
        return `--${uid.value}`;
    });

    function open(_event?: PointerEvent) {
        const popTarget = (window as any)[uid.value] as HTMLDialogElement;
        if (popTarget) {
            popTarget.showModal();
        }
    }
    function openSnackbar(_event?: PointerEvent) {
        const popTarget = (window as any)[uid.value] as HTMLDialogElement;
        if (popTarget) {
            popTarget.show();
        }
    }
    function close(_event?: PointerEvent) {
        const popTarget = (window as any)[`${uid.value}`] as HTMLDialogElement;
        if (popTarget) {
            popTarget.requestClose();
        }
    }

    return { uid, anchorName, open, openSnackbar, close, confirm };
}
