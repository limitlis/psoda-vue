<script setup>
    import PsodaFizz from 'psoda/fizz';
</script>

<template>
    <psoda-fizz :tabindex="0">
        hover for song lyrics
        <template #tooltip> Never gonna give you up! </template>
    </psoda-fizz>
</template>
