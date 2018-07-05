import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseSubmit from './';

Vue.config.productionTip = false

describe('<base-submit />', () => {
  const Component = Vue.extend(BaseSubmit)
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.textContent).toMatch(/BaseSubmit/)
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-submit--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-submit--alt');
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
