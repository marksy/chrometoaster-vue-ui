// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <select class="base-select" :class="className"><slot>BaseSelect</slot></select>
</template>

<script>
  export default {
    name: 'BaseSelect',
    props: {
      className: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .base-select {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
    display: inline-block;
  }
  .base-select--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
</style>
