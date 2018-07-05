import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseButton from './';

Vue.config.productionTip = false

describe('<base-button />', () => {
  const Component = Vue.extend(BaseButton)
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.textContent).toMatch(/BaseButton/)
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-button--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-button--alt');
  });
  it('matches wrapper snapshot', () => {
    const renderer = createRenderer();
    const wrapper = shallow(Component);
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
});
