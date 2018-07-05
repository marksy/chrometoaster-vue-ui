import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseInput from './';

Vue.config.productionTip = false

describe('<base-input />', () => {
  const Component = Vue.extend(BaseInput)
  it('does not crash', () => {
    const vm = new Component().$mount();
    expect(vm.$el.classList).toContain('base-input');
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-input--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-input--alt');
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
