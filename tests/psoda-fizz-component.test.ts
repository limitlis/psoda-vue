import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import PsodaFizz from '../src/components/psoda-fizz.vue';
const Component = {
    template: `Lorem ipsum
    <psoda-fizz :tabindex="0">
        dolor sit
        <template #tooltip>
            This is the tooltip content.
        </template>
    </psoda-fizz>`,
    components: {
        PsodaFizz,
    },
};

test('Psoda Fizz tooltip component', async () => {
    const wrapper = await mount(Component, {
        props: {},
    });
    const tooltipTrigger = wrapper.get('figure');
    const tooltip = wrapper.get('figcaption');

    await expect(tooltipTrigger.text()).toContain('dolor sit');
    await expect(tooltip.text()).toBe('This is the tooltip content.');
});
