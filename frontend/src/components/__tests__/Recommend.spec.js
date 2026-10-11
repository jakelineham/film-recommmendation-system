import {describe, it , expect} from 'vitest'
import { mount } from '@vue/test-utils'
import Recommend from '../Recommend.vue'

describe('Recommend', () => {
    it('No input returns error message', async () => {
        const wrapper = mount(Recommend, {
            props: {selectedFilms: ["","","",""]}
        });

        await wrapper.find('#recommendButton').trigger('click');
        expect(wrapper.find('#emptyFilmsMessage').exists());
    })
})