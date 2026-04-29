<template>
    <button
        v-psoda-confirm
        @click.prevent="destructiveAction"
    >
        Delete
    </button>
</template>

<script setup>
    function destructiveAction() {
        // Perform delete call
        api.delete();
    }
</script>
