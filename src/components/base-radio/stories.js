import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseRadio from '.';

 storiesOf('BaseRadio', module)
  .add('default', () => ({
    components: { BaseRadio },
    template: '<base-radio />',
  }));
