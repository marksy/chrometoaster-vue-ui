import Vue from 'vue'
import BaseInput from './'

Vue.config.productionTip = false

it('does not crash', () => {
  const Component = Vue.extend(BaseInput)
  const vm = new Component().$mount()
  expect(vm.$el.textContent).toMatch(/Example/)
})
