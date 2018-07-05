import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseInput from '.';

 storiesOf('BaseInput', module)
  .add('default', () => ({
    components: { BaseInput },
    template: '<base-input />',
  }));
