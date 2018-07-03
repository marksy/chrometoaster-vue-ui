import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import BaseInput from './';

 storiesOf('BaseInput', module)
 	.add('default', () => ({
	  components: { BaseInput },
	  template: '<base-input></base-input>',
	}))
	.add('with custom greeting', () => ({
	  components: { BaseInput },
	  template: '<base-input greeting="No!"></base-input>',
	}))
	.add('with custom greeting and style', () => ({
	  components: { BaseInput },
	  template: '<base-input greeting="Great job!" greeting-style="success"></base-input>',
	}))
;