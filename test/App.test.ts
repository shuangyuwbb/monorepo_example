import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Example from '../src/components/Example.vue'
import App from '../src/App.vue'

describe('App.vue', () => {
  it('text app.vue', () => {
    const wrapper = mount(App)
    // 渲染app.vue组件
    const example = wrapper.findComponent(Example)
    // 检查 example 组件是否存在
    expect(example.exists()).toBe(true)
    // 检查props 对不对
    expect(example.props('msg')).toBe('Vite + Vue + TS example project')
  })
})
