import {mount} from '@vue/test-utils'
import Nav from '@/components/Nav.vue'
import {ref} from 'vue'

describe('Nav.vue', () => {
  //to check if an element with v-if appears or not
  it('renders a profile link', () => {
    const wrapper = mount(Nav, {
      setup() {
        return {
          isLoggedIn: true,
        }
      },
    })
    const profileLink = wrapper.get('.profile')
    expect(profileLink.text()).toEqual('My Profile')
  })
  it('should not render a profile link', () => {
    const wrapper = mount(Nav, {
      setup() {
        return {
          isLoggedIn: false,
        }
      },
    })
    const profileLink = wrapper.find('.profile')
    expect(profileLink.exists()).toBe(false)
  })
})
