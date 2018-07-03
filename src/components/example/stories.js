import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Example from './';

 storiesOf('Example', module)
 	.add('default', () => ({
	  components: { Example },
	  template: '<example />',
	}))
	.add('with custom greeting', () => ({
	  components: { Example },
	  template: '<example>No!</example>',
	}))
	.add('with custom greeting and style', () => ({
	  components: { Example },
	  template: '<example className="greeting--success">Great job!</example>',
	}))
;