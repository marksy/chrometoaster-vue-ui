import Vue from 'vue'
import Example from './'

Vue.config.productionTip = false

it('does not crash', () => {
  const Component = Vue.extend(Example)
  const vm = new Component().$mount()
  expect(vm.$el.textContent).toMatch(/Example/)
})
