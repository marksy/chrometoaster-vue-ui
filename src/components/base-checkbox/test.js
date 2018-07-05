import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseCheckbox from './';

Vue.config.productionTip = false

describe('<base-checkbox />', () => {
  const Component = Vue.extend(BaseCheckbox)
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.classList).toContain('base-checkbox');
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-checkbox--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-checkbox--alt');
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
