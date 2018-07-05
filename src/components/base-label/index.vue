// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <label class="base-label" :class="className"><slot>BaseLabel</slot></label>
</template>

<script>
  export default {
    name: 'BaseLabel',
    props: {
      className: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .base-label {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
    display: block;
  }
  .base-label--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
</style>
