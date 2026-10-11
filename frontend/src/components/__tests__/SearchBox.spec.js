import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBox from '../SearchBox.vue'

describe('SearchBox', () => {
    it('Input is cleared when button is clicked', async () => {
        const wrapper = mount(SearchBox);

        const input = wrapper.find('input');
        await input.setValue('Star Wars');
        await wrapper.find('.clearButton').trigger('click');

        expect(input.element.value).toBe('');
    })
})