import {mount, shallowMount} from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('should check if parent exists', () => {
    // mount run the parent cmp and all here childs
    // const wrapper = mount(Parent)
    //shallowMount run only the specefec cmp not all the childs
    const wrapper = shallowMount(Parent)
    expect(wrapper.text()).toContain('Parent')
  })
})
