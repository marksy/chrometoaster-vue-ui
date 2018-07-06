import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseButton from '.';

storiesOf('BaseButton', module)
	.add('default', () => ({
		components: { BaseButton },
		template: '<BaseButton></BaseButton>',
	}))
	.add('with props [primary]', () => ({
		components: { BaseButton },
		template: '<BaseButton class-name="base-button--primary" :onClick="alertClick">Custom text</BaseButton>',
		methods: {
	      alertClick() {
	        alert('hey!');
	      },
		}
	}))
	.add('with props [secondary]', () => ({
		components: { BaseButton },
		template: '<BaseButton class-name="base-button--secondary" :onClick="alertClick">Custom text</BaseButton>',
		methods: {
	      alertClick() {
	        alert('green!');
	      },
		}
	}))
	.add('with props [secondary] disabled', () => ({
		components: { BaseButton },
		template: '<BaseButton class-name="base-button--secondary" is-disabled :onClick="alertClick">Custom text</BaseButton>',
		methods: {
	      alertClick() {
	        alert('this shouldnt activate!');
	      },
		}
	}))
;
