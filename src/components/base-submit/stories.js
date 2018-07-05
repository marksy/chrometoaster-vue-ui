import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseSubmit from '.';

 storiesOf('BaseSubmit', module)
  .add('default', () => ({
    components: { BaseSubmit },
    template: '<base-submit />',
  }));
