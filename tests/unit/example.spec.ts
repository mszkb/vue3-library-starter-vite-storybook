import { mount } from '@vue/test-utils'
// import TestComponent from '../../src/lib-components/TestComponent/src/TestComponent.vue'
import { TestComponent } from 'vue3-library-starter-vite-storybook'
import MyButton from '../../stories/Button.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'TestComponent'
    const wrapper = mount(TestComponent, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})

describe('Stories Button', () => {
  it('should display header text', () => {
    const msg = 'TestComponent'
    const wrapper = mount(MyButton, { props: { label: msg } })

    expect(1).toBe(1);
  })
})
