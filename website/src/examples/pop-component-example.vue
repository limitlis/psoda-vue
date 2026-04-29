<psoda-pop>
    <button class="button is-primary">Modal</button>
    <template #content> Here's a simple modal </template>
    <template #confirm="slotProps">
        <button
            v-bind="slotProps"
            class="button is-success"
            >Ok!</button
        >
    </template>
</psoda-pop>