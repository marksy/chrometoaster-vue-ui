// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <button class="base-button" :class="className"><slot>BaseButton</slot></button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      className: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .base-button {
    font-size: 12px;
    font-family: Arial, sans-serif;
    border: 1px solid rgba(0,0,0,1);
    background-color: rgba(0,0,0,0.1);
    padding: 12px;
  }
  .base-button--alt {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
</style>
