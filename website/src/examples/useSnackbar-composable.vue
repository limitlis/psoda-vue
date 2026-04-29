<script setup>
    import { useSnackbar } from 'psoda';

    function showSnackbar() {
        useSnackbar({
            message: 'Changes saved',
            actionClass: 'button is-primary',
            actionText: 'Nice!',
        });
    }
</script>
