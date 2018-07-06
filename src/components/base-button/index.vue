// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

<template>
  <button class="base-button" :class="className" @click="onClick" :disabled="isDisabled"><slot>BaseButton</slot></button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      className: {
        type: String,
        default: '',
      },
      onClick: {
        type: Function,
        default: () => () => null
      },
      isDisabled: {
        type: Boolean,
        default: false,
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
  .base-button--primary {
    border: 1px solid rgba(255,0,0,1);
    background-color: rgba(255,0,0,0.1);
  }
  .base-button--secondary {
    border: 1px solid rgba(0,255,0,1);
    background-color: rgba(0,255,0,0.1);
  }
  .base-button[disabled] {
    opacity: 0.3;
  }
</style>
