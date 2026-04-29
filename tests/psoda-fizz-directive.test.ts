import { mount, DOMWrapper } from '@vue/test-utils';
import { expect, test } from 'vitest';
import PsodaFizzDirective from '../src/directives/psoda-fizz-directive.ts';
const Component = {
    template: `Lorem ipsum <span data-test="fizzDirective" v-psoda-fizz="'This is the fizz dirrective'">dolor sit</span>
    `,
};

test('Psoda Fizz tooltip component', async () => {
    const wrapper = await mount(Component, {
        attachTo: document.body,
        global: {
            directives: {
                'psoda-fizz': PsodaFizzDirective,
            },
        },
    });

    const parent = new DOMWrapper(wrapper.element.parentElement);

    const tooltipTrigger = parent.get('[data-test="fizzDirective"]');

    const tooltip = parent.find('figcaption');

    await expect(tooltipTrigger.text()).toContain('dolor sit');

    await expect(tooltip.text()).toBe('This is the fizz dirrective');
});
