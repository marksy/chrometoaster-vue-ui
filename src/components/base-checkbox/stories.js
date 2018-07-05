import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseCheckbox from '.';

 storiesOf('BaseCheckbox', module)
  .add('default', () => ({
    components: { BaseCheckbox },
    template: '<base-checkbox />',
  }));
