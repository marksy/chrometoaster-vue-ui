import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseButton from '.';

storiesOf('BaseButton', module)
	.add('default', () => ({
		components: { BaseButton },
		template: '<base-button />'
	}));
