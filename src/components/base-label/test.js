import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseLabel from './';

Vue.config.productionTip = false

describe('<base-label />', () => {
  const Component = Vue.extend(BaseLabel)
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.textContent).toMatch(/BaseLabel/)
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-label--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-label--alt');
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
