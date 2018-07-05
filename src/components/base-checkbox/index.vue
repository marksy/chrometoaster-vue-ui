// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <input type="checkbox" class="base-checkbox" :class="className" />
</template>

<script>
  export default {
    name: 'BaseCheckbox',
    props: {
      className: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .base-checkbox {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
    display: inline-block;
  }
  .base-checkbox--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
</style>
