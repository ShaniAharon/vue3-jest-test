import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

//category for the tests, tests block, tests on the helloworld cmp
describe('HelloWorld.vue', () => {
  //test block, can have multiple it in the describe
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    //mount the cmp we want to test , run it and send the prop msg to it
    const wrapper = shallowMount(HelloWorld, {
      props: {msg},
    })
    //assertion, check that the text inside the cmp will match the msg
    expect(wrapper.text()).toMatch(msg)
  })
})
