import {mount} from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'
import WrapperLike from '@vue/test-utils/dist/interfaces/wrapperLike'

describe('TodoApp.vue', () => {
  let wrapper: WrapperLike
  //run before each test , can be used to remove duplicate lines
  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  it('should render todo text', () => {
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Learn jest testing')
  })

  it('should add new todo', async () => {
    // const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    //changing state in vue is async soo we must address it like that in the test
    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('should be able to complete todo', async () => {
    // const wrapper = mount(TodoApp)

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
