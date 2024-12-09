import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Example from '../src/components/Example.vue'

describe('Example.vue', () => {
  it('render this correct text', () => {
    const wrapper = mount(Example, {
      props: {
        msg: 'Vite + Vue + TS example project'
      }
    })
    expect(wrapper.find('h1').text()).toBe('Vite + Vue + TS example project')
  })
})

