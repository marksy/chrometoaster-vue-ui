import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseLabel from '.';


 storiesOf('BaseLabel', module)
  .add('default', () => ({
    components: { BaseLabel },
    template: '<base-label />',
  }));
