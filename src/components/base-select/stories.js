import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseSelect from '.';

 storiesOf('BaseSelect', module)
  .add('default', () => ({
    components: { BaseSelect },
    template: '<base-select />',
  }));
