import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import BaseRadio from './';

Vue.config.productionTip = false

describe('<base-radio />', () => {
  const Component = Vue.extend(BaseRadio)
  it('does not crash', () => {
    const vm = new Component().$mount()
    expect(vm.$el.classList).toContain('base-radio');
  });
  it('allows props to be passed in', () => {
    const vm = new Component({ propsData: {
      className: 'base-radio--alt'
    }}).$mount();
    expect(vm.$el.classList).toContain('base-radio--alt');
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
