import { mount, DOMWrapper } from '@vue/test-utils';
import { expect, test } from 'vitest';
import PsodaPop from '../src/components/psoda-pop.vue';
const Component = {
    template: `
        <psoda-pop>
            <button class="button trigger">Modal</button>
            <template #content>
                Here's a simple modal
            </template>
        </psoda-pop>

    `,
};

test('Psoda Pop component renders', async () => {
    const wrapper = await mount(Component, {
        attachTo: document.body,
        global: {
            components: {
                PsodaPop
            }
        },
    });

    const button = wrapper.find('.trigger');
    const pop = wrapper.find('dialog');
    
    expect(button.exists()).toBe(true);
    expect(pop.exists()).toBe(true);
    expect(pop.find('.dialog-content').text()).toContain('Here\'s a simple modal');
    expect(pop.exists()).toBe(true);
});
