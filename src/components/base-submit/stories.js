import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import BaseSubmit from '.';

 storiesOf('BaseSubmit', module)
  .add('default', () => ({
    components: { BaseSubmit },
    template: '<BaseSubmit :onClick="alertClick" />',
    methods: {
      alertClick() {
        alert('hello from alert');
      },
	},
  }))
  .add('click to disable', () => ({
    components: { BaseSubmit },
    data(){
	    return {
	        submitted: false
	    }
	},
    template: '<div><BaseSubmit :onClick="toggleButton" :disabled="this.submitted">Submit<span v-if="this.submitted">ting!</span></BaseSubmit><p v-if="this.submitted" @click="toggleButton">cancel</p></div>',
	methods: {
      toggleButton() {
        console.log('toggleButton');
        this.submitted = !this.submitted;
      },
	},
}))
;