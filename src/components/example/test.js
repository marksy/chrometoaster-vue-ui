import Vue from 'vue';
import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Example from './';

Vue.config.productionTip = false;

describe('<example />', () => {
	const Component = Vue.extend(Example);

	it('does not crash', () => {
		const vm = new Component().$mount();
		expect(vm.$el.textContent).toMatch(/Example/);
	});

	it('allows props to be passed in', () => {
		const vm = new Component({ propsData: {
			className: 'greeting--success'
		}}).$mount();
		expect(vm.$el.classList).toContain('greeting--success');
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
