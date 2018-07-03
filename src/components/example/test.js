import Vue from 'vue';
import Example from './';

Vue.config.productionTip = false;

describe('<example />', () => {
	const Component = Vue.extend(Example)

	it('does not crash', () => {
		const vm = new Component().$mount()
		expect(vm.$el.textContent).toMatch(/Example/)
	});

	it('matches wrapper snapshot', () => {
		expect(Component).toMatchSnapshot('Component mount');
	});
});
